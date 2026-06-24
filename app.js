// ===================== ÉTAT GLOBAL =====================
const state = {
  selected: new Set(),       // ids d'aliments sélectionnés (mode recettes)
  search: "",                // texte de recherche aliments
  activeCat: "all",          // filtre catégorie d'aliments
  view: "home",              // "home" | "results" | "calculator"
  sort: "match",             // "match" | "fast" | "light"
  modalRecipeId: null,
  portionsOverride: {},      // recipeId -> portions choisies par l'utilisateur

  // Calculateur nutritionnel (page séparée)
  calcItems: {},             // foodId -> quantité en grammes
  calcSearch: "",
  calcActiveCat: "all",
};

const CAT_LABELS = {
  all: "Tout",
  proteine: "🍗 Protéines",
  halal_sub: "🥙 Halal",
  feculent: "🍚 Féculents",
  legumineuse: "🌱 Légumineuses",
  legume: "🥦 Légumes",
  fruit: "🍎 Fruits",
  laitier: "🥛 Laitiers",
  oleagineux: "🌰 Oléagineux",
  condiment: "🧂 Condiments",
};

const root = document.getElementById("app");
const fabWrap = document.getElementById("fabWrap");
const fabBtn = document.getElementById("fabBtn");
const fabLabel = document.getElementById("fabLabel");
const fabCount = document.getElementById("fabCount");
const modalOverlay = document.getElementById("modalOverlay");
const modalSheet = document.getElementById("modalSheet");
const toastEl = document.getElementById("toast");

// ===================== HELPERS =====================
function foodById(id) {
  return FOODS.find(f => f.id === id);
}

function matchCountForRecipe(recipe) {
  const owned = recipe.ingredients.filter(ing => state.selected.has(ing.id));
  return { owned: owned.length, total: recipe.ingredients.length };
}

function recipesMatchingSelection() {
  if (state.selected.size === 0) return [];
  return RECIPES
    .map(r => {
      const { owned, total } = matchCountForRecipe(r);
      return { recipe: r, owned, total, ratio: owned / total };
    })
    .filter(x => x.owned > 0)
    .sort((a, b) => b.ratio - a.ratio || b.owned - a.owned);
}

function recipeIsHalalSensitive(recipe) {
  return recipe.ingredients.some(ing => {
    const f = foodById(ing.id);
    return f && f.cat === "halal_sub";
  });
}

function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toastEl._t);
  toastEl._t = setTimeout(() => toastEl.classList.remove("show"), 1800);
}

function vibrate() {
  if (navigator.vibrate) { try { navigator.vibrate(8); } catch (e) {} }
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function round1(n) { return Math.round(n * 10) / 10; }

function normalizeSearch(str) {
  return String(str)
    .toLowerCase()
    .replace(/œ/g, "oe")
    .replace(/æ/g, "ae")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); // strip accents (é -> e, etc.)
}

// ===================== TOP-LEVEL NAV (tabs) =====================
function renderTopNav(active) {
  return `
    <div class="top-nav" id="topNav">
      <button class="top-nav-btn ${active === 'recipes' ? 'active' : ''}" data-nav="recipes">🍳 Recettes</button>
      <button class="top-nav-btn ${active === 'calculator' ? 'active' : ''}" data-nav="calculator">🧮 Calculateur</button>
    </div>
  `;
}

function bindTopNav() {
  const nav = document.getElementById("topNav");
  if (!nav) return;
  nav.addEventListener("click", e => {
    const btn = e.target.closest(".top-nav-btn");
    if (!btn) return;
    const target = btn.dataset.nav;
    if (target === "recipes") {
      state.view = "home";
      renderHome();
    } else {
      state.view = "calculator";
      updateFab();
      renderCalculator();
    }
  });
}

// ===================== RENDER: HOME (sélection ingrédients pour recettes) =====================
function renderHome() {
  const filteredFoods = FOODS.filter(food => {
    const matchesCat = state.activeCat === "all" || food.cat === state.activeCat;
    const matchesSearch = !state.search || normalizeSearch(food.nom).includes(normalizeSearch(state.search));
    return matchesCat && matchesSearch;
  });

  const cats = ["all", "proteine", "halal_sub", "feculent", "legumineuse", "legume", "fruit", "laitier", "oleagineux", "condiment"];

  root.innerHTML = `
    <div class="topbar">
      <div class="brand">
        <div class="brand-mark">
          <div class="logo">🍳</div>
          <div>
            <h1>Fridge2Plate</h1>
            <div class="sub">${state.selected.size === 0 ? "Choisis tes aliments" : state.selected.size + " aliment" + (state.selected.size > 1 ? "s" : "") + " sélectionné" + (state.selected.size > 1 ? "s" : "")}</div>
          </div>
        </div>
        <button class="reset-btn" id="resetBtn" title="Réinitialiser">↺</button>
      </div>
      ${renderTopNav('recipes')}
      <div class="search-wrap">
        <span class="search-icon">🔍</span>
        <input type="text" id="searchInput" placeholder="Chercher un aliment..." value="${escapeHtml(state.search)}" autocomplete="off" autocorrect="off" spellcheck="false">
        ${state.search ? `<button class="search-clear" id="searchClear">✕</button>` : ""}
      </div>
      <div class="cat-tabs" id="catTabs">
        ${cats.map(c => `<button class="cat-tab ${state.activeCat === c ? "active" : ""}" data-cat="${c}">${CAT_LABELS[c]}</button>`).join("")}
      </div>
    </div>

    <div class="section-label">
      <h2>Aliments</h2>
      <span class="count-pill">${filteredFoods.length}</span>
    </div>

    ${filteredFoods.length === 0
      ? `<div class="empty-search">Aucun aliment trouvé pour "${escapeHtml(state.search)}" 🤔</div>`
      : `<div class="ing-grid" id="ingGrid">
          ${filteredFoods.map(food => `
            <div class="ing-chip ${state.selected.has(food.id) ? "selected" : ""}" data-id="${food.id}">
              ${food.halal ? '<span class="halal-badge" title="Alternative halal">☑️</span>' : ""}
              <span class="emoji">${food.emoji}</span>
              <span class="name">${food.nom}</span>
            </div>
          `).join("")}
        </div>`
    }
  `;

  bindTopNav();

  document.getElementById("searchInput").addEventListener("input", e => {
    state.search = e.target.value;
    renderHome();
    const el = document.getElementById("searchInput");
    el.focus();
    el.setSelectionRange(el.value.length, el.value.length);
  });

  const clearBtn = document.getElementById("searchClear");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      state.search = "";
      renderHome();
      document.getElementById("searchInput").focus();
    });
  }

  document.getElementById("resetBtn").addEventListener("click", () => {
    if (state.selected.size === 0 && !state.search) return;
    state.selected.clear();
    state.search = "";
    state.activeCat = "all";
    renderHome();
    updateFab();
    showToast("Sélection réinitialisée");
  });

  document.getElementById("catTabs").addEventListener("click", e => {
    const btn = e.target.closest(".cat-tab");
    if (!btn) return;
    state.activeCat = btn.dataset.cat;
    renderHome();
  });

  const grid = document.getElementById("ingGrid");
  if (grid) {
    grid.addEventListener("click", e => {
      const chip = e.target.closest(".ing-chip");
      if (!chip) return;
      const id = chip.dataset.id;
      if (state.selected.has(id)) {
        state.selected.delete(id);
      } else {
        state.selected.add(id);
        vibrate();
      }
      chip.classList.toggle("selected");
      updateSelectionCountUI();
      updateFab();
    });
  }

  updateFab();
}

function updateSelectionCountUI() {
  const sub = document.querySelector(".brand-mark .sub");
  if (sub) {
    sub.textContent = state.selected.size === 0
      ? "Choisis tes aliments"
      : `${state.selected.size} aliment${state.selected.size > 1 ? "s" : ""} sélectionné${state.selected.size > 1 ? "s" : ""}`;
  }
}

// ===================== FAB (bouton flottant) =====================
function updateFab() {
  const matches = recipesMatchingSelection();
  if (state.view === "home" && state.selected.size > 0) {
    fabWrap.style.display = "flex";
    fabBtn.classList.add("show");
    fabCount.textContent = matches.length;
    fabLabel.textContent = matches.length === 0 ? "Aucune recette... encore" : "Voir mes recettes";
  } else {
    fabBtn.classList.remove("show");
    fabWrap.style.display = "none";
  }
}

fabBtn.addEventListener("click", () => {
  if (state.selected.size === 0) return;
  state.view = "results";
  renderResults();
});

// ===================== RENDER: RÉSULTATS =====================
function renderResults() {
  updateFab();
  const matches = recipesMatchingSelection();

  let sorted = [...matches];
  if (state.sort === "match") {
    sorted.sort((a, b) => b.ratio - a.ratio || b.owned - a.owned);
  } else if (state.sort === "fast") {
    sorted.sort((a, b) => a.recipe.temps - b.recipe.temps);
  } else if (state.sort === "light") {
    sorted.sort((a, b) => a.recipe.cal - b.recipe.cal);
  }

  const sortOptions = [
    { id: "match", label: "🎯 Meilleur match" },
    { id: "fast", label: "⚡ Plus rapide" },
    { id: "light", label: "🪶 Moins calorique" },
  ];

  root.innerHTML = `
    <div class="results-header">
      <button class="back-btn" id="backBtn">←</button>
      <div>
        <h2 class="results-title">${sorted.length} recette${sorted.length > 1 ? "s" : ""} possible${sorted.length > 1 ? "s" : ""}</h2>
        <div class="results-sub">avec tes ${state.selected.size} aliment${state.selected.size > 1 ? "s" : ""}</div>
      </div>
    </div>

    ${sorted.length > 0 ? `
      <div class="sort-row" id="sortRow">
        ${sortOptions.map(o => `<button class="sort-chip ${state.sort === o.id ? "active" : ""}" data-sort="${o.id}">${o.label}</button>`).join("")}
      </div>
    ` : ""}

    ${sorted.length === 0 ? `
      <div class="no-results">
        <span class="big-emoji">🧐</span>
        <h3>Pas encore de recette pour cette combo</h3>
        <p>Essaie d'ajouter quelques aliments de plus, comme une protéine ou un féculent.</p>
      </div>
    ` : `
      <div class="recipe-grid" id="recipeGrid">
        ${sorted.map(({ recipe, owned, total }) => {
          const full = owned === total;
          const isHalalDish = recipeIsHalalSensitive(recipe);
          return `
          <div class="recipe-card" data-id="${recipe.id}">
            <div class="r-emoji">${recipe.emoji}</div>
            <div class="r-body">
              <div class="r-badges">
                <span class="r-match ${full ? "match-full" : "match-partial"}">${full ? "✅ Tu as tout" : `${owned}/${total} aliments`}</span>
                ${isHalalDish ? `<span class="r-halal">☑️ Halal</span>` : ""}
              </div>
              <p class="r-name">${recipe.nom}</p>
              <div class="r-meta">
                <span>⏱️ ${recipe.temps} min</span>
                <span>🔥 ${recipe.cal} kcal</span>
                <span>💪 ${recipe.proteines}g</span>
                <span>🍞 ${recipe.glucides}g</span>
                <span>🥑 ${recipe.lipides}g</span>
              </div>
            </div>
          </div>
        `;
        }).join("")}
      </div>
    `}
  `;

  document.getElementById("backBtn").addEventListener("click", () => {
    state.view = "home";
    renderHome();
  });

  const sortRow = document.getElementById("sortRow");
  if (sortRow) {
    sortRow.addEventListener("click", e => {
      const chip = e.target.closest(".sort-chip");
      if (!chip) return;
      state.sort = chip.dataset.sort;
      renderResults();
    });
  }

  const grid = document.getElementById("recipeGrid");
  if (grid) {
    grid.addEventListener("click", e => {
      const card = e.target.closest(".recipe-card");
      if (!card) return;
      openRecipeModal(parseInt(card.dataset.id, 10));
    });
  }
}

// ===================== MODAL DÉTAIL RECETTE =====================
function openRecipeModal(recipeId) {
  const recipe = RECIPES.find(r => r.id === recipeId);
  if (!recipe) return;
  state.modalRecipeId = recipeId;
  const portions = state.portionsOverride[recipeId] || recipe.portions;
  renderModalContent(recipe, portions);
  requestAnimationFrame(() => {
    modalOverlay.classList.add("show");
    modalSheet.classList.add("show");
  });
}

function formatQty(food, qty) {
  if (food.unite === "piece") {
    const n = Math.round(qty / (food.poids_piece || 55));
    return n + (n > 1 ? " pièces" : " pièce");
  }
  if (qty >= 1000) return round1(qty / 1000) + " kg";
  return Math.round(qty) + " g";
}

function renderModalContent(recipe, portions) {
  const scale = portions / recipe.portions;
  const cal = Math.round(recipe.cal * scale);
  const prot = round1(recipe.proteines * scale);
  const gluc = round1(recipe.glucides * scale);
  const lip = round1(recipe.lipides * scale);
  const isHalalDish = recipeIsHalalSensitive(recipe);

  const ingredientsHtml = recipe.ingredients.map(ing => {
    const food = foodById(ing.id);
    if (!food) return "";
    const has = state.selected.has(ing.id);
    const scaledQty = ing.qty * scale;
    return `
      <li>
        <span class="ing-name">
          <span>${food.emoji}</span>
          <span>${food.nom}${food.halal ? ' <span class="mini-halal">☑️</span>' : ""}</span>
        </span>
        <span class="ing-right">
          <span class="ing-qty">${formatQty(food, scaledQty)}</span>
          <span class="${has ? "own-tag" : "miss-tag"}">${has ? "Tu as" : "À acheter"}</span>
        </span>
      </li>
    `;
  }).join("");

  const stepsHtml = recipe.instructions.map(step => `<li>${escapeHtml(step)}</li>`).join("");

  modalSheet.innerHTML = `
    <div class="modal-handle"></div>
    <button class="modal-close" id="modalCloseBtn">✕</button>
    <div class="modal-scroll">
      <div class="modal-head">
        <div class="m-emoji">${recipe.emoji}</div>
        <div>
          <h2>${recipe.nom}</h2>
          ${isHalalDish ? `<span class="halal-pill">☑️ Recette halal</span>` : ""}
        </div>
      </div>

      <div class="stat-row">
        <div class="stat-pill"><span class="v">${recipe.temps}</span><span class="l">Minutes</span></div>
        <div class="stat-pill"><span class="v">${cal}</span><span class="l">Kcal</span></div>
        <div class="stat-pill"><span class="v">${prot}g</span><span class="l">Protéines</span></div>
      </div>
      <div class="stat-row">
        <div class="stat-pill alt"><span class="v">${gluc}g</span><span class="l">Glucides</span></div>
        <div class="stat-pill alt"><span class="v">${lip}g</span><span class="l">Lipides</span></div>
        <div class="stat-pill alt"><span class="v">${portions}</span><span class="l">Portions</span></div>
      </div>

      <div class="portion-control">
        <span class="pc-label">Ajuster les portions</span>
        <div class="portion-stepper">
          <button id="pcMinus">−</button>
          <span class="pc-val" id="pcVal">${portions}</span>
          <button id="pcPlus">+</button>
        </div>
      </div>

      <div class="block-title">🛒 Ingrédients</div>
      <ul class="ing-list">${ingredientsHtml}</ul>

      <div class="block-title">👩‍🍳 Préparation</div>
      <ol class="steps-list">${stepsHtml}</ol>
    </div>
  `;

  document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
  document.getElementById("pcMinus").addEventListener("click", () => changePortions(recipe, -1));
  document.getElementById("pcPlus").addEventListener("click", () => changePortions(recipe, 1));
}

function changePortions(recipe, delta) {
  const current = state.portionsOverride[recipe.id] || recipe.portions;
  const next = Math.max(1, Math.min(12, current + delta));
  state.portionsOverride[recipe.id] = next;
  renderModalContent(recipe, next);
}

function closeModal() {
  modalOverlay.classList.remove("show");
  modalSheet.classList.remove("show");
  state.modalRecipeId = null;
}

modalOverlay.addEventListener("click", closeModal);

let touchStartY = null;
modalSheet.addEventListener("touchstart", e => {
  touchStartY = e.touches[0].clientY;
}, { passive: true });
modalSheet.addEventListener("touchmove", e => {
  if (touchStartY === null) return;
  const dy = e.touches[0].clientY - touchStartY;
  const scrollEl = modalSheet.querySelector(".modal-scroll");
  if (dy > 0 && scrollEl && scrollEl.scrollTop <= 0) {
    modalSheet.style.transform = `translateY(${dy}px)`;
  }
}, { passive: true });
modalSheet.addEventListener("touchend", e => {
  const current = modalSheet.style.transform;
  modalSheet.style.transform = "";
  if (current) {
    const dy = parseInt(current.replace(/[^\d.-]/g, ""), 10) || 0;
    if (dy > 100) closeModal();
  }
  touchStartY = null;
});

// ===================== CALCULATEUR NUTRITIONNEL =====================
function calcTotals() {
  let cal = 0, p = 0, g = 0, l = 0;
  Object.entries(state.calcItems).forEach(([foodId, qty]) => {
    const food = foodById(foodId);
    if (!food || !qty) return;
    const factor = qty / 100;
    cal += food.cal * factor;
    p += food.p * factor;
    g += food.g * factor;
    l += food.l * factor;
  });
  return { cal: Math.round(cal), p: round1(p), g: round1(g), l: round1(l) };
}

function renderCalculator() {
  updateFab();
  const cats = ["all", "proteine", "halal_sub", "feculent", "legumineuse", "legume", "fruit", "laitier", "oleagineux", "condiment"];
  const filteredFoods = FOODS.filter(food => {
    const matchesCat = state.calcActiveCat === "all" || food.cat === state.calcActiveCat;
    const matchesSearch = !state.calcSearch || normalizeSearch(food.nom).includes(normalizeSearch(state.calcSearch));
    return matchesCat && matchesSearch;
  });

  const itemCount = Object.keys(state.calcItems).length;
  const totals = calcTotals();

  root.innerHTML = `
    <div class="topbar">
      <div class="brand">
        <div class="brand-mark">
          <div class="logo">🧮</div>
          <div>
            <h1>Fridge2Plate</h1>
            <div class="sub">${itemCount === 0 ? "Ajoute des aliments à calculer" : itemCount + " aliment" + (itemCount > 1 ? "s" : "") + " dans ton total"}</div>
          </div>
        </div>
        <button class="reset-btn" id="resetCalcBtn" title="Réinitialiser">↺</button>
      </div>
      ${renderTopNav('calculator')}
      <div class="search-wrap">
        <span class="search-icon">🔍</span>
        <input type="text" id="calcSearchInput" placeholder="Chercher un aliment..." value="${escapeHtml(state.calcSearch)}" autocomplete="off" autocorrect="off" spellcheck="false">
        ${state.calcSearch ? `<button class="search-clear" id="calcSearchClear">✕</button>` : ""}
      </div>
      <div class="cat-tabs" id="calcCatTabs">
        ${cats.map(c => `<button class="cat-tab ${state.calcActiveCat === c ? "active" : ""}" data-cat="${c}">${CAT_LABELS[c]}</button>`).join("")}
      </div>
    </div>

    ${itemCount > 0 ? renderCalcTotalsBar(totals) : ""}

    <div class="section-label">
      <h2>Aliments</h2>
      <span class="count-pill">${filteredFoods.length}</span>
    </div>

    ${filteredFoods.length === 0
      ? `<div class="empty-search">Aucun aliment trouvé pour "${escapeHtml(state.calcSearch)}" 🤔</div>`
      : `<div class="calc-list" id="calcList">
          ${filteredFoods.map(food => renderCalcRow(food)).join("")}
        </div>`
    }
  `;

  bindTopNav();

  document.getElementById("resetCalcBtn").addEventListener("click", () => {
    if (Object.keys(state.calcItems).length === 0 && !state.calcSearch) return;
    state.calcItems = {};
    state.calcSearch = "";
    state.calcActiveCat = "all";
    renderCalculator();
    showToast("Calculateur réinitialisé");
  });

  document.getElementById("calcSearchInput").addEventListener("input", e => {
    state.calcSearch = e.target.value;
    renderCalculator();
    const el = document.getElementById("calcSearchInput");
    el.focus();
    el.setSelectionRange(el.value.length, el.value.length);
  });

  const calcClear = document.getElementById("calcSearchClear");
  if (calcClear) {
    calcClear.addEventListener("click", () => {
      state.calcSearch = "";
      renderCalculator();
      document.getElementById("calcSearchInput").focus();
    });
  }

  document.getElementById("calcCatTabs").addEventListener("click", e => {
    const btn = e.target.closest(".cat-tab");
    if (!btn) return;
    state.calcActiveCat = btn.dataset.cat;
    renderCalculator();
  });

  bindCalcListEvents();
}

function renderCalcTotalsBar(totals) {
  return `
    <div class="calc-totals">
      <div class="calc-total-pill main">
        <span class="v">${totals.cal}</span><span class="l">kcal</span>
      </div>
      <div class="calc-total-pill"><span class="v">${totals.p}g</span><span class="l">Protéines</span></div>
      <div class="calc-total-pill"><span class="v">${totals.g}g</span><span class="l">Glucides</span></div>
      <div class="calc-total-pill"><span class="v">${totals.l}g</span><span class="l">Lipides</span></div>
    </div>
  `;
}

function renderCalcRow(food) {
  const qty = state.calcItems[food.id] || 0;
  const active = qty > 0;
  const factor = qty / 100;
  const cal = Math.round(food.cal * factor);
  return `
    <div class="calc-row ${active ? "active" : ""}" data-id="${food.id}">
      <div class="calc-row-main">
        <span class="calc-emoji">${food.emoji}</span>
        <div class="calc-row-text">
          <span class="calc-name">${food.nom}${food.halal ? ' <span class="mini-halal">☑️</span>' : ""}</span>
          <span class="calc-per100">${food.cal} kcal /100g · P${food.p} G${food.g} L${food.l}</span>
        </div>
      </div>
      <div class="calc-row-control">
        ${active ? `
          <button class="calc-qty-btn" data-action="dec">−</button>
          <input type="number" class="calc-qty-input" data-action="qty" value="${qty}" min="0" step="10" inputmode="numeric">
          <span class="calc-unit">g</span>
          <button class="calc-qty-btn" data-action="inc">+</button>
        ` : `
          <button class="calc-add-btn" data-action="add">+ Ajouter</button>
        `}
      </div>
      ${active ? `<div class="calc-row-cal">${cal} kcal</div>` : ""}
    </div>
  `;
}

function updateCalcRow(foodId) {
  const row = document.querySelector(`.calc-row[data-id="${foodId}"]`);
  if (!row) return;
  const food = foodById(foodId);
  row.outerHTML = renderCalcRow(food);
  bindSingleCalcRow(document.querySelector(`.calc-row[data-id="${foodId}"]`));
  updateCalcTotalsBarUI();
}

function updateCalcTotalsBarUI() {
  const totals = calcTotals();
  const existingBar = document.querySelector(".calc-totals");
  const itemCount = Object.keys(state.calcItems).length;
  if (itemCount === 0) {
    if (existingBar) existingBar.remove();
    const sub = document.querySelector(".brand-mark .sub");
    if (sub) sub.textContent = "Ajoute des aliments à calculer";
    return;
  }
  const sub = document.querySelector(".brand-mark .sub");
  if (sub) sub.textContent = `${itemCount} aliment${itemCount > 1 ? "s" : ""} dans ton total`;
  if (existingBar) {
    existingBar.outerHTML = renderCalcTotalsBar(totals);
  } else {
    const sectionLabel = document.querySelector(".section-label");
    if (sectionLabel) sectionLabel.insertAdjacentHTML("beforebegin", renderCalcTotalsBar(totals));
  }
}

function bindCalcListEvents() {
  document.querySelectorAll(".calc-row").forEach(bindSingleCalcRow);
}

function bindSingleCalcRow(row) {
  if (!row) return;
  const foodId = row.dataset.id;

  const addBtn = row.querySelector('[data-action="add"]');
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      state.calcItems[foodId] = 100;
      vibrate();
      updateCalcRow(foodId);
    });
  }

  const incBtn = row.querySelector('[data-action="inc"]');
  if (incBtn) {
    incBtn.addEventListener("click", () => {
      state.calcItems[foodId] = (state.calcItems[foodId] || 0) + 10;
      updateCalcRow(foodId);
    });
  }

  const decBtn = row.querySelector('[data-action="dec"]');
  if (decBtn) {
    decBtn.addEventListener("click", () => {
      const next = (state.calcItems[foodId] || 0) - 10;
      if (next <= 0) {
        delete state.calcItems[foodId];
      } else {
        state.calcItems[foodId] = next;
      }
      updateCalcRow(foodId);
    });
  }

  const qtyInput = row.querySelector('[data-action="qty"]');
  if (qtyInput) {
    qtyInput.addEventListener("input", e => {
      const val = Math.max(0, parseInt(e.target.value, 10) || 0);
      if (val === 0) {
        delete state.calcItems[foodId];
      } else {
        state.calcItems[foodId] = val;
      }
      const food = foodById(foodId);
      const calEl = row.querySelector(".calc-row-cal");
      if (calEl) calEl.textContent = Math.round(food.cal * val / 100) + " kcal";
      updateCalcTotalsBarUI();
    });
  }
}

// ===================== INIT =====================
function init() {
  renderHome();
}
init();
