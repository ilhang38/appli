// Base d'aliments — macros pour 100g (protéines/glucides/lipides en g, calories en kcal)
// Sources : valeurs nutritionnelles standard (type CIQUAL/USDA), arrondies pour un usage pratique.
// cat: proteine | feculent | legume | fruit | laitier | legumineuse | oleagineux | condiment | halal_sub
// halal: true si l'aliment est une alternative halal explicite à un produit à base de porc

const FOODS = [
// ===================== VIANDES BLANCHES =====================
{ id:"poulet_blanc", nom:"Blanc de poulet", emoji:"🍗", cat:"proteine", p:23, g:0, l:1.5, cal:113, f:0 },
{ id:"poulet_cuisse", nom:"Cuisse de poulet (sans peau)", emoji:"🍗", cat:"proteine", p:20, g:0, l:8, cal:155, f:0 },
{ id:"dinde_blanc", nom:"Blanc de dinde", emoji:"🦃", cat:"proteine", p:24, g:0, l:1, cal:108, f:0 },
{ id:"dinde_hachee", nom:"Dinde hachée", emoji:"🦃", cat:"proteine", p:21, g:0, l:7, cal:148, f:0 },
{ id:"caille", nom:"Caille", emoji:"🐦", cat:"proteine", p:25, g:0, l:6, cal:165, f:0 },
{ id:"poulet_aile", nom:"Aile de poulet", emoji:"🍗", cat:"proteine", p:21, g:0, l:10, cal:175, f:0 },

// ===================== VIANDES ROUGES (bœuf, agneau, veau) =====================
{ id:"boeuf_hache_5", nom:"Bœuf haché 5% MG", emoji:"🥩", cat:"proteine", p:21, g:0, l:5, cal:137, f:0 },
{ id:"boeuf_hache_15", nom:"Bœuf haché 15% MG", emoji:"🥩", cat:"proteine", p:19, g:0, l:15, cal:215, f:0 },
{ id:"steak_boeuf", nom:"Steak de bœuf", emoji:"🥩", cat:"proteine", p:22, g:0, l:8, cal:163, f:0 },
{ id:"filet_boeuf", nom:"Filet de bœuf", emoji:"🥩", cat:"proteine", p:23, g:0, l:6, cal:150, f:0 },
{ id:"entrecote", nom:"Entrecôte de bœuf", emoji:"🥩", cat:"proteine", p:21, g:0, l:14, cal:210, f:0 },
{ id:"veau_escalope", nom:"Escalope de veau", emoji:"🥩", cat:"proteine", p:21, g:0, l:5, cal:135, f:0 },
{ id:"agneau_gigot", nom:"Gigot d'agneau", emoji:"🍖", cat:"proteine", p:20, g:0, l:13, cal:198, f:0 },
{ id:"boeuf_viande_grisons", nom:"Viande des Grisons (bœuf)", emoji:"🥩", cat:"halal_sub", p:32, g:0, l:5, cal:170, f:0, halal:true, note:"Alternative halal à la charcuterie séchée de porc" },

// ===================== CHARCUTERIE HALAL (substituts) =====================
{ id:"lardons_boeuf", nom:"Lardons de bœuf halal", emoji:"🥓", cat:"halal_sub", p:22, g:1, l:18, cal:250, f:0, halal:true, note:"Alternative halal aux lardons de porc" },
{ id:"lardons_dinde", nom:"Lardons de dinde halal", emoji:"🥓", cat:"halal_sub", p:24, g:1, l:9, cal:175, f:0, halal:true, note:"Alternative halal aux lardons de porc" },
{ id:"saucisse_volaille", nom:"Saucisse de volaille halal", emoji:"🌭", cat:"halal_sub", p:16, g:3, l:14, cal:200, f:0, halal:true, note:"Alternative halal à la saucisse de Toulouse/Strasbourg" },
{ id:"saucisse_boeuf", nom:"Saucisse de bœuf halal", emoji:"🌭", cat:"halal_sub", p:15, g:2, l:20, cal:240, f:0, halal:true, note:"Alternative halal à la saucisse de porc" },
{ id:"chorizo_boeuf", nom:"Chorizo de bœuf halal", emoji:"🌶️", cat:"halal_sub", p:20, g:2, l:25, cal:300, f:0, halal:true, note:"Alternative halal au chorizo de porc" },
{ id:"merguez", nom:"Merguez (bœuf/agneau)", emoji:"🌭", cat:"halal_sub", p:17, g:2, l:24, cal:280, f:0, halal:true, note:"Saucisse épicée halal traditionnelle" },
{ id:"jambon_volaille", nom:"Jambon de volaille", emoji:"🍖", cat:"halal_sub", p:18, g:1, l:3, cal:100, f:0, halal:true, note:"Alternative halal au jambon de porc" },
{ id:"jambon_boeuf", nom:"Jambon de bœuf halal", emoji:"🍖", cat:"halal_sub", p:19, g:1, l:4, cal:115, f:0, halal:true, note:"Alternative halal au jambon de porc" },
{ id:"bacon_dinde", nom:"Bacon de dinde halal", emoji:"🥓", cat:"halal_sub", p:23, g:1, l:12, cal:200, f:0, halal:true, note:"Alternative halal au bacon de porc" },
{ id:"pepperoni_boeuf", nom:"Pepperoni de bœuf halal", emoji:"🍕", cat:"halal_sub", p:18, g:2, l:28, cal:320, f:0, halal:true, note:"Alternative halal au pepperoni" },
{ id:"saucisson_boeuf", nom:"Saucisson sec de bœuf halal", emoji:"🥓", cat:"halal_sub", p:24, g:1, l:22, cal:290, f:0, halal:true, note:"Alternative halal au saucisson sec de porc" },
{ id:"kebab_viande", nom:"Viande à kebab (bœuf/dinde)", emoji:"🥙", cat:"halal_sub", p:20, g:2, l:14, cal:215, f:0, halal:true },
{ id:"nuggets_poulet", nom:"Nuggets de poulet", emoji:"🍗", cat:"halal_sub", p:15, g:14, l:13, cal:245, f:0, halal:true },

// ===================== POISSONS / FRUITS DE MER =====================
{ id:"saumon", nom:"Saumon", emoji:"🐟", cat:"proteine", p:20, g:0, l:13, cal:208, f:0 },
{ id:"thon_frais", nom:"Thon frais", emoji:"🐟", cat:"proteine", p:24, g:0, l:5, cal:144, f:0 },
{ id:"thon_boite", nom:"Thon en boîte (au naturel)", emoji:"🐟", cat:"proteine", p:25, g:0, l:1, cal:110, f:0 },
{ id:"cabillaud", nom:"Cabillaud", emoji:"🐟", cat:"proteine", p:18, g:0, l:0.7, cal:82, f:0 },
{ id:"crevettes", nom:"Crevettes", emoji:"🍤", cat:"proteine", p:21, g:1, l:1, cal:99, f:0 },
{ id:"colin", nom:"Colin", emoji:"🐟", cat:"proteine", p:17, g:0, l:1, cal:82, f:0 },
{ id:"dorade", nom:"Dorade", emoji:"🐟", cat:"proteine", p:20, g:0, l:3, cal:118, f:0 },
{ id:"truite", nom:"Truite", emoji:"🐟", cat:"proteine", p:20, g:0, l:5, cal:130, f:0 },
{ id:"maquereau", nom:"Maquereau", emoji:"🐟", cat:"proteine", p:19, g:0, l:14, cal:205, f:0 },
{ id:"sardine", nom:"Sardine", emoji:"🐟", cat:"proteine", p:21, g:0, l:11, cal:185, f:0 },
{ id:"saumon_fume", nom:"Saumon fumé", emoji:"🐟", cat:"proteine", p:22, g:0, l:9, cal:170, f:0 },
{ id:"moules", nom:"Moules", emoji:"🦪", cat:"proteine", p:14, g:4, l:2, cal:90, f:0 },
{ id:"calamar", nom:"Calamar", emoji:"🦑", cat:"proteine", p:16, g:3, l:1, cal:92, f:0 },
{ id:"surimi", nom:"Surimi", emoji:"🦀", cat:"proteine", p:10, g:8, l:0.5, cal:80, f:0 },
{ id:"poulpe", nom:"Poulpe", emoji:"🐙", cat:"proteine", p:18, g:0, l:1, cal:82, f:0 },

// ===================== ŒUFS / PRODUITS LAITIERS =====================
{ id:"oeuf", nom:"Œuf", emoji:"🥚", cat:"proteine", p:13, g:1, l:10, cal:143, f:0, unite:"piece", poids_piece:55 },
{ id:"blanc_oeuf", nom:"Blanc d'œuf", emoji:"🥚", cat:"proteine", p:11, g:0.7, l:0.2, cal:52, f:0 },
{ id:"fromage_blanc_0", nom:"Fromage blanc 0%", emoji:"🥣", cat:"laitier", p:7.5, g:4, l:0.2, cal:48, f:0 },
{ id:"fromage_blanc_20", nom:"Fromage blanc 20%", emoji:"🥣", cat:"laitier", p:7, g:4, l:5, cal:90, f:0 },
{ id:"skyr", nom:"Skyr", emoji:"🥣", cat:"laitier", p:11, g:4, l:0.2, cal:63, f:0 },
{ id:"yaourt_grec", nom:"Yaourt grec", emoji:"🥣", cat:"laitier", p:6, g:4, l:9, cal:120, f:0 },
{ id:"yaourt_nature", nom:"Yaourt nature", emoji:"🥛", cat:"laitier", p:4, g:5, l:3, cal:62, f:0 },
{ id:"lait_demi_ecreme", nom:"Lait demi-écrémé", emoji:"🥛", cat:"laitier", p:3.3, g:4.8, l:1.6, cal:46, f:0 },
{ id:"lait_ecreme", nom:"Lait écrémé", emoji:"🥛", cat:"laitier", p:3.4, g:5, l:0.2, cal:35, f:0 },
{ id:"lait_entier", nom:"Lait entier", emoji:"🥛", cat:"laitier", p:3.2, g:4.8, l:3.6, cal:64, f:0 },
{ id:"lait_amande", nom:"Lait d'amande", emoji:"🥛", cat:"laitier", p:0.5, g:2.5, l:1.1, cal:24, f:0 },
{ id:"lait_soja", nom:"Lait de soja", emoji:"🥛", cat:"laitier", p:3.3, g:1, l:1.8, cal:33, f:0 },
{ id:"lait_coco", nom:"Lait de coco", emoji:"🥛", cat:"laitier", p:2, g:3, l:21, cal:200, f:0 },
{ id:"fromage_rape", nom:"Fromage râpé (type emmental)", emoji:"🧀", cat:"laitier", p:28, g:0.5, l:29, cal:380, f:0 },
{ id:"mozzarella_light", nom:"Mozzarella light", emoji:"🧀", cat:"laitier", p:22, g:2, l:12, cal:200, f:0 },
{ id:"mozzarella", nom:"Mozzarella", emoji:"🧀", cat:"laitier", p:22, g:2, l:20, cal:280, f:0 },
{ id:"parmesan", nom:"Parmesan", emoji:"🧀", cat:"laitier", p:35, g:0, l:29, cal:390, f:0 },
{ id:"feta", nom:"Feta", emoji:"🧀", cat:"laitier", p:14, g:4, l:21, cal:264, f:0 },
{ id:"chevre_frais", nom:"Fromage de chèvre frais", emoji:"🧀", cat:"laitier", p:18, g:2, l:20, cal:264, f:0 },
{ id:"cottage_cheese", nom:"Cottage cheese", emoji:"🧀", cat:"laitier", p:11, g:3, l:4, cal:98, f:0 },
{ id:"creme_fraiche_legere", nom:"Crème fraîche légère 15%", emoji:"🥛", cat:"laitier", p:3, g:3, l:15, cal:165, f:0 },
{ id:"creme_fraiche", nom:"Crème fraîche entière", emoji:"🥛", cat:"laitier", p:2.5, g:3, l:30, cal:300, f:0 },
{ id:"beurre", nom:"Beurre", emoji:"🧈", cat:"laitier", p:0.7, g:0.6, l:82, cal:745, f:0 },
{ id:"beurre_allege", nom:"Beurre allégé", emoji:"🧈", cat:"laitier", p:1, g:1, l:41, cal:380, f:0 },
{ id:"fromage_frais_ail", nom:"Fromage frais à tartiner", emoji:"🧀", cat:"laitier", p:8, g:3, l:23, cal:250, f:0 },

// ===================== LÉGUMINEUSES =====================
{ id:"lentilles_corail", nom:"Lentilles corail (cuites)", emoji:"🟠", cat:"legumineuse", p:9, g:20, l:0.4, cal:120, f:7.9 },
{ id:"lentilles_vertes", nom:"Lentilles vertes (cuites)", emoji:"🟤", cat:"legumineuse", p:9, g:20, l:0.5, cal:116, f:7.9 },
{ id:"pois_chiches", nom:"Pois chiches (cuits)", emoji:"🟡", cat:"legumineuse", p:8, g:27, l:2.6, cal:164, f:7.6 },
{ id:"haricots_rouges", nom:"Haricots rouges (cuits)", emoji:"🔴", cat:"legumineuse", p:9, g:23, l:0.5, cal:127, f:6.4 },
{ id:"haricots_blancs", nom:"Haricots blancs (cuits)", emoji:"⚪", cat:"legumineuse", p:9, g:21, l:0.5, cal:125, f:6.3 },
{ id:"flageolets", nom:"Flageolets (cuits)", emoji:"🟢", cat:"legumineuse", p:8, g:20, l:0.5, cal:115, f:6 },
{ id:"pois_casses", nom:"Pois cassés (cuits)", emoji:"🟢", cat:"legumineuse", p:8, g:21, l:0.4, cal:118, f:8.3 },
{ id:"edamame", nom:"Edamame", emoji:"🫛", cat:"legumineuse", p:11, g:9, l:5, cal:120, f:5.2 },
{ id:"tofu", nom:"Tofu nature", emoji:"⬜", cat:"legumineuse", p:13, g:2, l:8, cal:120, f:0.7 },
{ id:"tofu_fume", nom:"Tofu fumé", emoji:"⬜", cat:"legumineuse", p:16, g:2, l:9, cal:150, f:0.8 },
{ id:"tempeh", nom:"Tempeh", emoji:"🟫", cat:"legumineuse", p:19, g:8, l:11, cal:190, f:6.4 },
{ id:"seitan", nom:"Seitan", emoji:"🟤", cat:"legumineuse", p:25, g:4, l:2, cal:140, f:1 },

// ===================== FÉCULENTS =====================
{ id:"riz_blanc", nom:"Riz blanc (cuit)", emoji:"🍚", cat:"feculent", p:2.7, g:28, l:0.3, cal:130, f:0.4 },
{ id:"riz_complet", nom:"Riz complet (cuit)", emoji:"🍚", cat:"feculent", p:2.7, g:23, l:1, cal:112, f:1.8 },
{ id:"riz_basmati", nom:"Riz basmati (cuit)", emoji:"🍚", cat:"feculent", p:3, g:25, l:0.4, cal:121, f:0.5 },
{ id:"quinoa", nom:"Quinoa (cuit)", emoji:"🌾", cat:"feculent", p:4.4, g:21, l:1.9, cal:120, f:2.8 },
{ id:"boulgour", nom:"Boulgour (cuit)", emoji:"🌾", cat:"feculent", p:3.1, g:19, l:0.2, cal:83, f:4.5 },
{ id:"semoule", nom:"Semoule (cuite)", emoji:"🌾", cat:"feculent", p:3.8, g:23, l:0.2, cal:112, f:1.3 },
{ id:"patate_douce", nom:"Patate douce", emoji:"🍠", cat:"feculent", p:1.6, g:20, l:0.1, cal:86, f:3 },
{ id:"pomme_terre", nom:"Pomme de terre", emoji:"🥔", cat:"feculent", p:2, g:17, l:0.1, cal:77, f:2.2 },
{ id:"pates_blanches", nom:"Pâtes blanches (cuites)", emoji:"🍝", cat:"feculent", p:5.8, g:25, l:0.9, cal:131, f:1.8 },
{ id:"pates_completes", nom:"Pâtes complètes (cuites)", emoji:"🍝", cat:"feculent", p:5.3, g:23, l:1.4, cal:124, f:4 },
{ id:"pain_complet", nom:"Pain complet", emoji:"🍞", cat:"feculent", p:9, g:41, l:3.4, cal:247, f:7 },
{ id:"pain_blanc", nom:"Pain blanc", emoji:"🍞", cat:"feculent", p:8, g:49, l:1, cal:265, f:2.7 },
{ id:"pain_seigle", nom:"Pain de seigle", emoji:"🍞", cat:"feculent", p:7, g:43, l:1.5, cal:220, f:5.8 },
{ id:"flocons_avoine", nom:"Flocons d'avoine", emoji:"🥣", cat:"feculent", p:13, g:60, l:7, cal:375, f:10 },
{ id:"muesli", nom:"Muesli", emoji:"🥣", cat:"feculent", p:10, g:65, l:7, cal:360, f:8 },
{ id:"tortilla_ble", nom:"Tortilla de blé", emoji:"🌮", cat:"feculent", p:8, g:48, l:8, cal:300, f:2.5 },
{ id:"pain_pita", nom:"Pain pita", emoji:"🫓", cat:"feculent", p:9, g:55, l:1.5, cal:275, f:2.5 },
{ id:"polenta", nom:"Polenta (cuite)", emoji:"🌽", cat:"feculent", p:2, g:15, l:0.5, cal:75, f:1 },
{ id:"nouilles_chinoises", nom:"Nouilles chinoises (cuites)", emoji:"🍜", cat:"feculent", p:4.5, g:25, l:1, cal:130, f:1 },
{ id:"riz_gluant", nom:"Riz gluant (cuit)", emoji:"🍚", cat:"feculent", p:2.5, g:27, l:0.2, cal:120, f:0.5 },
{ id:"sarrasin", nom:"Sarrasin (cuit)", emoji:"🌾", cat:"feculent", p:3.4, g:20, l:1, cal:92, f:2.7 },
{ id:"avoine_grains", nom:"Avoine en grains", emoji:"🌾", cat:"feculent", p:17, g:66, l:7, cal:389, f:10 },
{ id:"pomme_terre_douce_purée", nom:"Purée de pomme de terre", emoji:"🥔", cat:"feculent", p:2, g:15, l:1, cal:85, f:1.5 },
{ id:"biscotte", nom:"Biscotte", emoji:"🍞", cat:"feculent", p:10, g:73, l:6, cal:390, f:3.5 },
{ id:"galette_riz", nom:"Galette de riz soufflé", emoji:"🍘", cat:"feculent", p:8, g:80, l:1, cal:380, f:1 },

// ===================== LÉGUMES =====================
{ id:"brocoli", nom:"Brocoli", emoji:"🥦", cat:"legume", p:2.8, g:4, l:0.4, cal:34, f:2.6 },
{ id:"courgette", nom:"Courgette", emoji:"🥒", cat:"legume", p:1.2, g:2.5, l:0.3, cal:17, f:1.1 },
{ id:"poivron", nom:"Poivron", emoji:"🫑", cat:"legume", p:1, g:4.6, l:0.3, cal:26, f:1.7 },
{ id:"tomate", nom:"Tomate", emoji:"🍅", cat:"legume", p:0.9, g:3.5, l:0.2, cal:18, f:1.2 },
{ id:"oignon", nom:"Oignon", emoji:"🧅", cat:"legume", p:1.1, g:8, l:0.1, cal:36, f:1.7 },
{ id:"ail", nom:"Ail", emoji:"🧄", cat:"legume", p:6.4, g:28, l:0.2, cal:143, f:2.1 },
{ id:"champignon", nom:"Champignon de Paris", emoji:"🍄", cat:"legume", p:3, g:2, l:0.3, cal:22, f:1 },
{ id:"epinard", nom:"Épinard", emoji:"🥬", cat:"legume", p:2.9, g:1.6, l:0.4, cal:23, f:2.2 },
{ id:"carotte", nom:"Carotte", emoji:"🥕", cat:"legume", p:0.9, g:7, l:0.2, cal:35, f:2.8 },
{ id:"haricot_vert", nom:"Haricot vert", emoji:"🫛", cat:"legume", p:1.8, g:4.5, l:0.2, cal:24, f:2.7 },
{ id:"salade_verte", nom:"Salade verte", emoji:"🥗", cat:"legume", p:1.4, g:2, l:0.2, cal:15, f:1.3 },
{ id:"concombre", nom:"Concombre", emoji:"🥒", cat:"legume", p:0.7, g:2.2, l:0.1, cal:12, f:0.5 },
{ id:"aubergine", nom:"Aubergine", emoji:"🍆", cat:"legume", p:1, g:4, l:0.2, cal:22, f:3 },
{ id:"chou_fleur", nom:"Chou-fleur", emoji:"🥦", cat:"legume", p:2, g:3, l:0.3, cal:23, f:2 },
{ id:"avocat", nom:"Avocat", emoji:"🥑", cat:"legume", p:2, g:2, l:15, cal:160, f:6.7 },
{ id:"citron", nom:"Citron", emoji:"🍋", cat:"legume", p:0.7, g:3, l:0.3, cal:22, f:2.8 },
{ id:"mais", nom:"Maïs", emoji:"🌽", cat:"legume", p:3.3, g:19, l:1.5, cal:96, f:2.7 },
{ id:"poireau", nom:"Poireau", emoji:"🥬", cat:"legume", p:1.3, g:6, l:0.3, cal:31, f:1.8 },
{ id:"chou_blanc", nom:"Chou blanc", emoji:"🥬", cat:"legume", p:1.3, g:5, l:0.1, cal:25, f:2.5 },
{ id:"chou_rouge", nom:"Chou rouge", emoji:"🥬", cat:"legume", p:1.4, g:6, l:0.2, cal:31, f:2.1 },
{ id:"choucroute", nom:"Choucroute", emoji:"🥬", cat:"legume", p:1, g:4, l:0.2, cal:19, f:2.9 },
{ id:"celeri", nom:"Céleri", emoji:"🥬", cat:"legume", p:0.7, g:3, l:0.2, cal:16, f:1.6 },
{ id:"betterave", nom:"Betterave", emoji:"🟣", cat:"legume", p:1.6, g:8, l:0.2, cal:43, f:2.8 },
{ id:"radis", nom:"Radis", emoji:"🔴", cat:"legume", p:0.7, g:2, l:0.1, cal:16, f:1.6 },
{ id:"navet", nom:"Navet", emoji:"⚪", cat:"legume", p:0.9, g:5, l:0.1, cal:28, f:1.8 },
{ id:"endive", nom:"Endive", emoji:"🥬", cat:"legume", p:1, g:2, l:0.2, cal:17, f:1.6 },
{ id:"fenouil", nom:"Fenouil", emoji:"🌿", cat:"legume", p:1.2, g:5, l:0.2, cal:31, f:3.1 },
{ id:"artichaut", nom:"Artichaut", emoji:"🌿", cat:"legume", p:2.9, g:8, l:0.3, cal:47, f:5.4 },
{ id:"asperge", nom:"Asperge", emoji:"🌿", cat:"legume", p:2.2, g:2, l:0.2, cal:20, f:2.1 },
{ id:"petit_pois", nom:"Petits pois", emoji:"🟢", cat:"legume", p:5.4, g:13, l:0.5, cal:81, f:5.1 },
{ id:"patisson", nom:"Patisson", emoji:"🟡", cat:"legume", p:1.2, g:3, l:0.2, cal:18, f:1.2 },
{ id:"potiron", nom:"Potiron / courge", emoji:"🎃", cat:"legume", p:1, g:7, l:0.1, cal:31, f:2.7 },
{ id:"epinard_cru", nom:"Roquette", emoji:"🥬", cat:"legume", p:2.6, g:2, l:0.7, cal:25, f:1.6 },
{ id:"persil", nom:"Persil", emoji:"🌿", cat:"legume", p:3, g:6, l:0.8, cal:36, f:3.3 },
{ id:"basilic", nom:"Basilic frais", emoji:"🌿", cat:"legume", p:3.2, g:4, l:0.6, cal:23, f:1.6 },
{ id:"coriandre", nom:"Coriandre fraîche", emoji:"🌿", cat:"legume", p:2.1, g:3, l:0.5, cal:23, f:2.8 },
{ id:"ciboulette", nom:"Ciboulette", emoji:"🌿", cat:"legume", p:3.3, g:4, l:0.7, cal:30, f:2.5 },
{ id:"menthe", nom:"Menthe fraîche", emoji:"🌿", cat:"legume", p:3.8, g:8, l:0.7, cal:44, f:8 },
{ id:"gingembre", nom:"Gingembre frais", emoji:"🫚", cat:"legume", p:1.8, g:18, l:0.8, cal:80, f:2 },

// ===================== FRUITS =====================
{ id:"banane", nom:"Banane", emoji:"🍌", cat:"fruit", p:1.1, g:21, l:0.3, cal:90, f:2.6 },
{ id:"pomme", nom:"Pomme", emoji:"🍎", cat:"fruit", p:0.3, g:14, l:0.2, cal:52, f:2.4 },
{ id:"poire", nom:"Poire", emoji:"🍐", cat:"fruit", p:0.4, g:15, l:0.1, cal:57, f:3.1 },
{ id:"fraise", nom:"Fraise", emoji:"🍓", cat:"fruit", p:0.7, g:8, l:0.3, cal:32, f:2 },
{ id:"framboise", nom:"Framboise", emoji:"🍇", cat:"fruit", p:1.2, g:5, l:0.6, cal:32, f:6.5 },
{ id:"myrtille", nom:"Myrtille", emoji:"🫐", cat:"fruit", p:0.7, g:14, l:0.3, cal:57, f:2.4 },
{ id:"fruits_rouges_mix", nom:"Mélange fruits rouges", emoji:"🍓", cat:"fruit", p:0.9, g:9, l:0.4, cal:40, f:3.5 },
{ id:"orange", nom:"Orange", emoji:"🍊", cat:"fruit", p:0.9, g:9, l:0.1, cal:47, f:2.4 },
{ id:"mandarine", nom:"Mandarine", emoji:"🍊", cat:"fruit", p:0.8, g:11, l:0.2, cal:53, f:1.8 },
{ id:"pamplemousse", nom:"Pamplemousse", emoji:"🍊", cat:"fruit", p:0.8, g:8, l:0.1, cal:42, f:1.6 },
{ id:"kiwi", nom:"Kiwi", emoji:"🥝", cat:"fruit", p:1.1, g:10, l:0.5, cal:61, f:3 },
{ id:"ananas", nom:"Ananas", emoji:"🍍", cat:"fruit", p:0.5, g:13, l:0.1, cal:50, f:1.4 },
{ id:"mangue", nom:"Mangue", emoji:"🥭", cat:"fruit", p:0.8, g:14, l:0.4, cal:60, f:1.6 },
{ id:"raisin", nom:"Raisin", emoji:"🍇", cat:"fruit", p:0.7, g:16, l:0.2, cal:69, f:0.9 },
{ id:"pasteque", nom:"Pastèque", emoji:"🍉", cat:"fruit", p:0.6, g:8, l:0.2, cal:30, f:0.4 },
{ id:"melon", nom:"Melon", emoji:"🍈", cat:"fruit", p:0.8, g:8, l:0.2, cal:34, f:0.9 },
{ id:"peche", nom:"Pêche", emoji:"🍑", cat:"fruit", p:0.9, g:10, l:0.2, cal:39, f:1.5 },
{ id:"abricot", nom:"Abricot", emoji:"🍑", cat:"fruit", p:1.4, g:9, l:0.4, cal:48, f:2 },
{ id:"prune", nom:"Prune", emoji:"🍑", cat:"fruit", p:0.7, g:11, l:0.3, cal:46, f:1.4 },
{ id:"cerise", nom:"Cerise", emoji:"🍒", cat:"fruit", p:1, g:16, l:0.3, cal:63, f:2.1 },
{ id:"figue", nom:"Figue", emoji:"🟣", cat:"fruit", p:0.8, g:19, l:0.3, cal:74, f:2.9 },
{ id:"datte", nom:"Datte", emoji:"🟤", cat:"fruit", p:2, g:75, l:0.4, cal:282, f:8 },
{ id:"pruneau", nom:"Pruneau sec", emoji:"🟤", cat:"fruit", p:2.2, g:64, l:0.4, cal:240, f:7.1 },
{ id:"grenade", nom:"Grenade", emoji:"🔴", cat:"fruit", p:1.7, g:19, l:1.2, cal:83, f:4 },
{ id:"citron_vert", nom:"Citron vert", emoji:"🍋", cat:"fruit", p:0.7, g:3, l:0.2, cal:20, f:2.8 },

// ===================== OLÉAGINEUX / GRAINES =====================
{ id:"amandes", nom:"Amandes", emoji:"🌰", cat:"oleagineux", p:21, g:9, l:50, cal:579, f:12.5 },
{ id:"noix", nom:"Noix", emoji:"🌰", cat:"oleagineux", p:15, g:7, l:65, cal:654, f:6.7 },
{ id:"noix_cajou", nom:"Noix de cajou", emoji:"🌰", cat:"oleagineux", p:18, g:30, l:44, cal:553, f:3.3 },
{ id:"noisette", nom:"Noisette", emoji:"🌰", cat:"oleagineux", p:15, g:7, l:61, cal:628, f:9.7 },
{ id:"pistache", nom:"Pistache", emoji:"🌰", cat:"oleagineux", p:20, g:28, l:45, cal:560, f:10.3 },
{ id:"cacahuete", nom:"Cacahuète", emoji:"🥜", cat:"oleagineux", p:25, g:16, l:49, cal:567, f:8.5 },
{ id:"beurre_cacahuete", nom:"Beurre de cacahuète", emoji:"🥜", cat:"oleagineux", p:25, g:20, l:50, cal:588, f:6 },
{ id:"graines_chia", nom:"Graines de chia", emoji:"⚫", cat:"oleagineux", p:17, g:42, l:31, cal:486, f:34.4 },
{ id:"graines_lin", nom:"Graines de lin", emoji:"🟤", cat:"oleagineux", p:18, g:29, l:42, cal:534, f:27.3 },
{ id:"graines_courge", nom:"Graines de courge", emoji:"🟢", cat:"oleagineux", p:30, g:11, l:49, cal:559, f:6 },
{ id:"graines_tournesol", nom:"Graines de tournesol", emoji:"🟡", cat:"oleagineux", p:21, g:20, l:51, cal:584, f:8.6 },
{ id:"noix_coco_rapee", nom:"Noix de coco râpée", emoji:"🥥", cat:"oleagineux", p:3.3, g:6, l:33, cal:354, f:16 },

// ===================== MATIÈRES GRASSES / CONDIMENTS =====================
{ id:"huile_olive", nom:"Huile d'olive", emoji:"🫒", cat:"condiment", p:0, g:0, l:100, cal:900, f:0 },
{ id:"huile_colza", nom:"Huile de colza", emoji:"🟡", cat:"condiment", p:0, g:0, l:100, cal:900, f:0 },
{ id:"huile_coco", nom:"Huile de coco", emoji:"🥥", cat:"condiment", p:0, g:0, l:100, cal:900, f:0 },
{ id:"huile_sesame", nom:"Huile de sésame", emoji:"🟤", cat:"condiment", p:0, g:0, l:100, cal:900, f:0 },
{ id:"moutarde", nom:"Moutarde", emoji:"🟡", cat:"condiment", p:4, g:5, l:4, cal:75, f:0 },
{ id:"mayonnaise", nom:"Mayonnaise", emoji:"🥚", cat:"condiment", p:1, g:1, l:75, cal:680, f:0 },
{ id:"mayonnaise_light", nom:"Mayonnaise allégée", emoji:"🥚", cat:"condiment", p:1, g:7, l:30, cal:300, f:0 },
{ id:"ketchup", nom:"Ketchup", emoji:"🍅", cat:"condiment", p:1.2, g:24, l:0.2, cal:100, f:0 },
{ id:"sauce_soja", nom:"Sauce soja", emoji:"🟤", cat:"condiment", p:8, g:6, l:0, cal:60, f:0 },
{ id:"vinaigre_balsamique", nom:"Vinaigre balsamique", emoji:"🫙", cat:"condiment", p:0.5, g:17, l:0, cal:88, f:0 },
{ id:"vinaigre_cidre", nom:"Vinaigre de cidre", emoji:"🍎", cat:"condiment", p:0, g:0.9, l:0, cal:21, f:0 },
{ id:"miel", nom:"Miel", emoji:"🍯", cat:"condiment", p:0.3, g:80, l:0, cal:304, f:0 },
{ id:"sirop_erable", nom:"Sirop d'érable", emoji:"🍁", cat:"condiment", p:0, g:67, l:0.2, cal:260, f:0 },
{ id:"sucre", nom:"Sucre blanc", emoji:"🟤", cat:"condiment", p:0, g:100, l:0, cal:400, f:0 },
{ id:"curry_poudre", nom:"Curry en poudre", emoji:"🟠", cat:"condiment", p:13, g:44, l:14, cal:325, f:33 },
{ id:"cumin", nom:"Cumin", emoji:"🟤", cat:"condiment", p:18, g:44, l:22, cal:375, f:10.5 },
{ id:"paprika", nom:"Paprika", emoji:"🔴", cat:"condiment", p:14, g:54, l:13, cal:282, f:34.9 },
{ id:"cannelle", nom:"Cannelle", emoji:"🟤", cat:"condiment", p:4, g:81, l:1.2, cal:247, f:53 },
{ id:"curcuma", nom:"Curcuma", emoji:"🟡", cat:"condiment", p:8, g:65, l:10, cal:354, f:21 },
{ id:"poivre", nom:"Poivre noir", emoji:"⚫", cat:"condiment", p:10, g:64, l:3.3, cal:251, f:25.3 },
{ id:"sel", nom:"Sel", emoji:"🧂", cat:"condiment", p:0, g:0, l:0, cal:0, f:0 },
{ id:"bouillon_legumes", nom:"Bouillon de légumes (cube)", emoji:"🧊", cat:"condiment", p:8, g:20, l:5, cal:160, f:0 },
{ id:"tahini", nom:"Tahini (purée de sésame)", emoji:"🟤", cat:"condiment", p:17, g:21, l:54, cal:595, f:9.3 },
{ id:"houmous", nom:"Houmous", emoji:"🟡", cat:"condiment", p:7, g:11, l:10, cal:166, f:6 },
{ id:"pesto", nom:"Pesto", emoji:"🟢", cat:"condiment", p:4, g:4, l:36, cal:350, f:1.5 },
{ id:"olives", nom:"Olives", emoji:"🫒", cat:"condiment", p:1, g:4, l:15, cal:145, f:3.2 },
{ id:"cacao_poudre", nom:"Cacao en poudre non sucré", emoji:"🍫", cat:"condiment", p:20, g:11, l:14, cal:228, f:33 },
{ id:"levure_boulangere", nom:"Levure boulangère", emoji:"🟤", cat:"condiment", p:40, g:35, l:6, cal:325, f:0 },

// ===================== PROTÉINES VÉGÉTALES SUPPLÉMENTAIRES =====================
{ id:"proteine_pois", nom:"Protéine de pois (poudre)", emoji:"🟢", cat:"legumineuse", p:80, g:5, l:6, cal:380, f:5 },
{ id:"whey_proteine", nom:"Whey protéine (poudre)", emoji:"🥛", cat:"proteine", p:80, g:6, l:5, cal:400, f:0 },
{ id:"proteine_vegetale_poudre", nom:"Protéine végétale (poudre)", emoji:"🌱", cat:"legumineuse", p:75, g:8, l:5, cal:380, f:4 },
{ id:"haricots_noirs", nom:"Haricots noirs (cuits)", emoji:"⚫", cat:"legumineuse", p:8.9, g:24, l:0.5, cal:132, f:8.7 },
{ id:"haricots_azuki", nom:"Haricots azuki (cuits)", emoji:"🔴", cat:"legumineuse", p:7.5, g:25, l:0.1, cal:128, f:7.3 },
{ id:"lupin", nom:"Graines de lupin", emoji:"🟡", cat:"legumineuse", p:36, g:10, l:9, cal:280, f:18 },

// ===================== VIANDES / VOLAILLES SUPPLÉMENTAIRES =====================
{ id:"canard_filet", nom:"Filet de canard (sans peau)", emoji:"🦆", cat:"proteine", p:19, g:0, l:8, cal:150, f:0 },
{ id:"foie_volaille", nom:"Foie de volaille", emoji:"🍖", cat:"proteine", p:18, g:1, l:5, cal:120, f:0 },
{ id:"boeuf_braise", nom:"Bœuf braisé (paleron, etc.)", emoji:"🥩", cat:"proteine", p:26, g:0, l:10, cal:200, f:0 },
{ id:"jarret_boeuf", nom:"Jarret de bœuf", emoji:"🥩", cat:"proteine", p:25, g:0, l:6, cal:160, f:0 },
{ id:"poulet_entier", nom:"Poulet entier rôti (avec peau)", emoji:"🍗", cat:"proteine", p:27, g:0, l:14, cal:240, f:0 },
{ id:"abats_coeur_volaille", nom:"Cœur de volaille", emoji:"🍖", cat:"proteine", p:16, g:0, l:8, cal:135, f:0 },

// ===================== POISSONS SUPPLÉMENTAIRES =====================
{ id:"lieu_noir", nom:"Lieu noir", emoji:"🐟", cat:"proteine", p:18, g:0, l:1, cal:84, f:0 },
{ id:"merlu", nom:"Merlu", emoji:"🐟", cat:"proteine", p:17, g:0, l:2, cal:90, f:0 },
{ id:"bar", nom:"Bar (loup de mer)", emoji:"🐟", cat:"proteine", p:18, g:0, l:3, cal:97, f:0 },
{ id:"sole", nom:"Sole", emoji:"🐟", cat:"proteine", p:16, g:0, l:1.5, cal:82, f:0 },
{ id:"anchois", nom:"Anchois", emoji:"🐟", cat:"proteine", p:20, g:0, l:5, cal:131, f:0 },
{ id:"oeufs_saumon", nom:"Œufs de saumon", emoji:"🟠", cat:"proteine", p:25, g:0, l:15, cal:250, f:0 },
{ id:"st_jacques", nom:"Noix de Saint-Jacques", emoji:"🦪", cat:"proteine", p:17, g:3, l:1, cal:88, f:0 },
{ id:"langoustine", nom:"Langoustine", emoji:"🦐", cat:"proteine", p:20, g:1, l:1, cal:92, f:0 },

// ===================== LAITIERS SUPPLÉMENTAIRES =====================
{ id:"ricotta", nom:"Ricotta", emoji:"🧀", cat:"laitier", p:11, g:3, l:13, cal:174, f:0 },
{ id:"mascarpone", nom:"Mascarpone", emoji:"🧀", cat:"laitier", p:5, g:4, l:47, cal:450, f:0 },
{ id:"camembert", nom:"Camembert", emoji:"🧀", cat:"laitier", p:20, g:0.5, l:23, cal:290, f:0 },
{ id:"comte", nom:"Comté", emoji:"🧀", cat:"laitier", p:28, g:0, l:31, cal:400, f:0 },
{ id:"yaourt_soja", nom:"Yaourt au soja", emoji:"🥣", cat:"laitier", p:4, g:4, l:2.5, cal:55, f:0 },
{ id:"lait_avoine", nom:"Lait d'avoine", emoji:"🥛", cat:"laitier", p:1, g:7, l:1.5, cal:45, f:0 },
{ id:"kefir", nom:"Kéfir", emoji:"🥛", cat:"laitier", p:3.3, g:4.5, l:2, cal:50, f:0 },
{ id:"fromage_suisse_petit", nom:"Petit-suisse", emoji:"🥣", cat:"laitier", p:8, g:5, l:3, cal:80, f:0 },

// ===================== FÉCULENTS / CÉRÉALES SUPPLÉMENTAIRES =====================
{ id:"riz_sauvage", nom:"Riz sauvage (cuit)", emoji:"🌾", cat:"feculent", p:4, g:21, l:0.3, cal:101, f:1.8 },
{ id:"orge_perle", nom:"Orge perlé (cuit)", emoji:"🌾", cat:"feculent", p:3.5, g:28, l:0.4, cal:123, f:3 },
{ id:"epeautre", nom:"Épeautre (cuit)", emoji:"🌾", cat:"feculent", p:5, g:25, l:1, cal:127, f:4 },
{ id:"farine_ble", nom:"Farine de blé", emoji:"🌾", cat:"feculent", p:10, g:75, l:1, cal:340, f:2.7 },
{ id:"farine_complete", nom:"Farine complète", emoji:"🌾", cat:"feculent", p:13, g:65, l:2.5, cal:330, f:10.7 },
{ id:"chapelure", nom:"Chapelure", emoji:"🍞", cat:"feculent", p:9, g:70, l:5, cal:370, f:2.5 },
{ id:"pain_burger", nom:"Pain à burger", emoji:"🍞", cat:"feculent", p:9, g:50, l:5, cal:280, f:3 },
{ id:"croutons", nom:"Croûtons", emoji:"🍞", cat:"feculent", p:10, g:65, l:12, cal:400, f:3.5 },
{ id:"vermicelles_riz", nom:"Vermicelles de riz (cuits)", emoji:"🍜", cat:"feculent", p:1.8, g:25, l:0.2, cal:109, f:0.9 },
{ id:"farine_pois_chiche", nom:"Farine de pois chiche", emoji:"🟡", cat:"feculent", p:22, g:58, l:6, cal:360, f:10.8 },

// ===================== LÉGUMES SUPPLÉMENTAIRES =====================
{ id:"tomate_cerise", nom:"Tomates cerises", emoji:"🍅", cat:"legume", p:1, g:4, l:0.2, cal:20, f:1.2 },
{ id:"tomate_seche", nom:"Tomates séchées", emoji:"🍅", cat:"legume", p:6, g:23, l:4, cal:140, f:12.3 },
{ id:"epinard_surgele", nom:"Épinards surgelés", emoji:"🥬", cat:"legume", p:3, g:2, l:0.4, cal:25, f:2.5 },
{ id:"haricot_beurre", nom:"Haricot beurre", emoji:"🟡", cat:"legume", p:1.7, g:4, l:0.2, cal:24, f:2.6 },
{ id:"poivron_rouge", nom:"Poivron rouge", emoji:"🔴", cat:"legume", p:1, g:6, l:0.3, cal:31, f:2.1 },
{ id:"poivron_vert", nom:"Poivron vert", emoji:"🟢", cat:"legume", p:1, g:4, l:0.2, cal:20, f:1.7 },
{ id:"chou_kale", nom:"Chou kale", emoji:"🥬", cat:"legume", p:4.3, g:9, l:0.9, cal:49, f:3.6 },
{ id:"chou_bruxelles", nom:"Chou de Bruxelles", emoji:"🥬", cat:"legume", p:3.4, g:9, l:0.3, cal:43, f:3.8 },
{ id:"brocoli_surgele", nom:"Brocolis surgelés", emoji:"🥦", cat:"legume", p:2.7, g:4, l:0.4, cal:32, f:2.6 },
{ id:"champignon_shiitake", nom:"Champignon shiitake", emoji:"🍄", cat:"legume", p:2.2, g:7, l:0.5, cal:34, f:2.5 },
{ id:"champignon_portobello", nom:"Champignon portobello", emoji:"🍄", cat:"legume", p:2.5, g:4, l:0.4, cal:26, f:1.3 },
{ id:"oignon_rouge", nom:"Oignon rouge", emoji:"🟣", cat:"legume", p:1.1, g:9, l:0.1, cal:40, f:1.7 },
{ id:"echalote", nom:"Échalote", emoji:"🧅", cat:"legume", p:2.5, g:17, l:0.1, cal:72, f:3.2 },
{ id:"poireau_cuit", nom:"Poireau cuit", emoji:"🥬", cat:"legume", p:1.2, g:5, l:0.3, cal:28, f:1.8 },
{ id:"courge_butternut", nom:"Courge butternut", emoji:"🎃", cat:"legume", p:1, g:10, l:0.1, cal:45, f:2 },
{ id:"germe_soja", nom:"Germes de soja", emoji:"🌱", cat:"legume", p:3.6, g:5, l:1.4, cal:50, f:1.9 },
{ id:"germe_ble", nom:"Germes de blé", emoji:"🌾", cat:"legume", p:23, g:44, l:10, cal:360, f:13 },
{ id:"wakame_algue", nom:"Algue wakamé", emoji:"🟢", cat:"legume", p:3, g:9, l:0.6, cal:45, f:3 },

// ===================== FRUITS SUPPLÉMENTAIRES =====================
{ id:"banane_seche", nom:"Banane séchée", emoji:"🍌", cat:"fruit", p:3.9, g:22, l:1.8, cal:519, f:7.7 },
{ id:"abricot_sec", nom:"Abricot sec", emoji:"🟠", cat:"fruit", p:3.4, g:63, l:0.5, cal:241, f:7.3 },
{ id:"raisin_sec", nom:"Raisin sec", emoji:"🍇", cat:"fruit", p:3, g:79, l:0.5, cal:299, f:3.7 },
{ id:"cranberries_sechees", nom:"Cranberries séchées", emoji:"🔴", cat:"fruit", p:0.1, g:83, l:1.4, cal:325, f:5.7 },
{ id:"fruit_passion", nom:"Fruit de la passion", emoji:"🟡", cat:"fruit", p:2.2, g:13, l:0.7, cal:68, f:10.4 },
{ id:"litchi", nom:"Litchi", emoji:"🔴", cat:"fruit", p:0.8, g:17, l:0.4, cal:66, f:1.3 },
{ id:"papaye", nom:"Papaye", emoji:"🟠", cat:"fruit", p:0.5, g:11, l:0.3, cal:43, f:1.7 },
{ id:"clementine", nom:"Clémentine", emoji:"🍊", cat:"fruit", p:0.8, g:11, l:0.2, cal:47, f:1.7 },
{ id:"rhubarbe", nom:"Rhubarbe", emoji:"🔴", cat:"fruit", p:0.9, g:5, l:0.2, cal:21, f:1.8 },
{ id:"coing", nom:"Coing", emoji:"🟡", cat:"fruit", p:0.4, g:14, l:0.1, cal:57, f:1.9 },
];

// Recettes générées avec quantités précises et macros calculées (protéines/glucides/lipides/calories)
const RECIPES = [
{ id:1, nom:"Poulet grillé au citron et thym", emoji:"🍗", temps:25, portions:2, cal:307, proteines:42, glucides:2.4, lipides:12.8, fibres:0.8,
  ingredients:[
    {"id":"poulet_blanc", "qty":360},
    {"id":"citron", "qty":50},
    {"id":"huile_olive", "qty":20},
    {"id":"ail", "qty":12}
  ],
  instructions:[
    "Assaisonner le poulet avec sel, poivre, ail écrasé et jus de citron.",
    "Laisser mariner 10 min.",
    "Griller à la poêle 6-7 min par face.",
    "Servir avec un filet de citron frais."
  ] },
{ id:2, nom:"Poulet sauté aux brocolis et soja", emoji:"🍗", temps:20, portions:2, cal:266, proteines:46.2, glucides:8.6, lipides:3.3, fibres:3.4,
  ingredients:[
    {"id":"poulet_blanc", "qty":360},
    {"id":"brocoli", "qty":240},
    {"id":"sauce_soja", "qty":24},
    {"id":"ail", "qty":12},
    {"id":"gingembre", "qty":16}
  ],
  instructions:[
    "Couper le poulet en lanières, faire revenir 5 min.",
    "Ajouter ail et gingembre hachés.",
    "Ajouter les brocolis et un peu d'eau, couvrir 5 min.",
    "Déglacer à la sauce soja, mélanger 2 min."
  ] },
{ id:3, nom:"Curry de poulet léger au lait d'amande", emoji:"🍗", temps:30, portions:2, cal:267, proteines:43.4, glucides:9.4, lipides:4.6, fibres:2.9,
  ingredients:[
    {"id":"poulet_blanc", "qty":360},
    {"id":"curry_poudre", "qty":8},
    {"id":"lait_amande", "qty":200},
    {"id":"oignon", "qty":60},
    {"id":"poivron", "qty":120}
  ],
  instructions:[
    "Faire revenir l'oignon émincé.",
    "Ajouter le poulet en dés, cuire 5 min.",
    "Ajouter le curry, mélanger.",
    "Verser le lait d'amande, ajouter le poivron, mijoter 15 min."
  ] },
{ id:4, nom:"Poulet teriyaki maison", emoji:"🍗", temps:20, portions:2, cal:262, proteines:42.9, glucides:13.4, lipides:2.8, fibres:0.3,
  ingredients:[
    {"id":"poulet_blanc", "qty":360},
    {"id":"sauce_soja", "qty":24},
    {"id":"miel", "qty":24},
    {"id":"ail", "qty":12},
    {"id":"gingembre", "qty":16}
  ],
  instructions:[
    "Mélanger sauce soja, un peu de miel, ail et gingembre pour la marinade.",
    "Faire mariner le poulet 10 min.",
    "Cuire à la poêle jusqu'à caramélisation légère.",
    "Servir avec la sauce réduite."
  ] },
{ id:5, nom:"Salade de poulet César allégée", emoji:"🥗", temps:15, portions:1, cal:342, proteines:51.2, glucides:4.8, lipides:11.8, fibres:2,
  ingredients:[
    {"id":"poulet_blanc", "qty":180},
    {"id":"salade_verte", "qty":100},
    {"id":"parmesan", "qty":15},
    {"id":"yaourt_grec", "qty":50},
    {"id":"citron", "qty":25}
  ],
  instructions:[
    "Griller le poulet et le couper en dés.",
    "Préparer une sauce avec yaourt, citron et un peu de parmesan.",
    "Mélanger avec la salade.",
    "Parsemer de parmesan."
  ] },
{ id:6, nom:"Wrap poulet avocat", emoji:"🌮", temps:10, portions:1, cal:530, proteines:49, glucides:33.5, lipides:19.7, fibres:8.2,
  ingredients:[
    {"id":"poulet_blanc", "qty":180},
    {"id":"tortilla_ble", "qty":60},
    {"id":"avocat", "qty":80},
    {"id":"salade_verte", "qty":50},
    {"id":"tomate", "qty":60}
  ],
  instructions:[
    "Griller le poulet émincé.",
    "Garnir la tortilla de salade, tomate, avocat écrasé.",
    "Ajouter le poulet.",
    "Rouler fermement et couper en deux."
  ] },
{ id:7, nom:"Poulet basquaise sans porc", emoji:"🍗", temps:35, portions:3, cal:255, proteines:43.5, glucides:10, lipides:3.1, fibres:2.9,
  ingredients:[
    {"id":"poulet_blanc", "qty":540},
    {"id":"poivron", "qty":240},
    {"id":"tomate", "qty":240},
    {"id":"oignon", "qty":90},
    {"id":"ail", "qty":12}
  ],
  instructions:[
    "Faire dorer le poulet, réserver.",
    "Faire revenir oignon, ail, poivrons.",
    "Ajouter la tomate concassée et le poulet.",
    "Mijoter 20 min à couvert."
  ] },
{ id:8, nom:"Brochettes de poulet mariné", emoji:"🍢", temps:25, portions:2, cal:306, proteines:42.6, glucides:5.4, lipides:11.3, fibres:2.6,
  ingredients:[
    {"id":"poulet_blanc", "qty":360},
    {"id":"poivron", "qty":160},
    {"id":"citron", "qty":40},
    {"id":"paprika", "qty":4},
    {"id":"huile_olive", "qty":16}
  ],
  instructions:[
    "Couper poulet et poivron en cubes.",
    "Mariner avec huile, citron, paprika 15 min.",
    "Enfiler sur brochettes en alternant.",
    "Griller 10-12 min en tournant."
  ] },
{ id:9, nom:"Poulet au four à la moutarde", emoji:"🍗", temps:35, portions:2, cal:291, proteines:42.2, glucides:2.2, lipides:11.1, fibres:0.1,
  ingredients:[
    {"id":"poulet_blanc", "qty":360},
    {"id":"moutarde", "qty":20},
    {"id":"huile_olive", "qty":16},
    {"id":"ail", "qty":12}
  ],
  instructions:[
    "Mélanger moutarde, huile, ail.",
    "Badigeonner les blancs de poulet.",
    "Enfourner 25 min à 200°C.",
    "Vérifier la cuisson avant de servir."
  ] },
{ id:10, nom:"Bol de riz au poulet et légumes croquants", emoji:"🍚", temps:25, portions:2, cal:403, proteines:48.9, glucides:38, lipides:3.6, fibres:6.3,
  ingredients:[
    {"id":"poulet_blanc", "qty":360},
    {"id":"riz_blanc", "qty":180},
    {"id":"carotte", "qty":220},
    {"id":"brocoli", "qty":220},
    {"id":"sauce_soja", "qty":24}
  ],
  instructions:[
    "Cuire le riz selon le paquet.",
    "Sauter le poulet en dés.",
    "Ajouter carotte et brocoli, cuire 5 min.",
    "Assembler dans un bol, napper de sauce soja."
  ] },
{ id:11, nom:"Poulet à la coriandre et citron vert", emoji:"🍗", temps:20, portions:2, cal:217, proteines:42, glucides:2.4, lipides:2.8, fibres:0.8,
  ingredients:[
    {"id":"poulet_blanc", "qty":360},
    {"id":"coriandre", "qty":10},
    {"id":"citron_vert", "qty":40},
    {"id":"ail", "qty":12}
  ],
  instructions:[
    "Mariner le poulet avec citron, ail et coriandre hachée.",
    "Laisser reposer 15 min.",
    "Griller à feu moyen 6 min par face.",
    "Parsemer de coriandre fraîche avant de servir."
  ] },
{ id:12, nom:"Poulet épinards et fromage blanc", emoji:"🍗", temps:25, portions:2, cal:285, proteines:52.5, glucides:7.4, lipides:3.4, fibres:2.5,
  ingredients:[
    {"id":"poulet_blanc", "qty":360},
    {"id":"epinard", "qty":220},
    {"id":"fromage_blanc_0", "qty":200},
    {"id":"ail", "qty":12}
  ],
  instructions:[
    "Saisir le poulet, réserver.",
    "Faire tomber les épinards avec ail.",
    "Ajouter le fromage blanc hors du feu pour une sauce crémeuse.",
    "Remettre le poulet, mélanger et chauffer doucement."
  ] },
{ id:13, nom:"Salade de poulet, quinoa et avocat", emoji:"🥗", temps:20, portions:2, cal:455, proteines:47.6, glucides:23.2, lipides:16.6, fibres:9.2,
  ingredients:[
    {"id":"poulet_blanc", "qty":360},
    {"id":"quinoa", "qty":180},
    {"id":"avocat", "qty":160},
    {"id":"tomate", "qty":120},
    {"id":"citron", "qty":40}
  ],
  instructions:[
    "Cuire le quinoa.",
    "Griller le poulet et couper en dés.",
    "Mélanger quinoa, avocat, tomate.",
    "Ajouter le poulet, assaisonner au citron."
  ] },
{ id:14, nom:"Poulet sauce champignons légère", emoji:"🍗", temps:25, portions:2, cal:276, proteines:47.4, glucides:7.6, lipides:4.9, fibres:1.6,
  ingredients:[
    {"id":"poulet_blanc", "qty":360},
    {"id":"champignon", "qty":220},
    {"id":"oignon", "qty":60},
    {"id":"yaourt_nature", "qty":120}
  ],
  instructions:[
    "Saisir le poulet, réserver.",
    "Faire revenir oignon et champignons.",
    "Ajouter le yaourt hors du feu, mélanger.",
    "Remettre le poulet, chauffer sans bouillir."
  ] },
{ id:15, nom:"Poulet pané aux flocons d'avoine (four)", emoji:"🍗", temps:30, portions:2, cal:436, proteines:51.8, glucides:31.4, lipides:9.2, fibres:5.7,
  ingredients:[
    {"id":"poulet_blanc", "qty":360},
    {"id":"flocons_avoine", "qty":100},
    {"id":"oeuf", "qty":55},
    {"id":"paprika", "qty":4}
  ],
  instructions:[
    "Mixer grossièrement les flocons d'avoine.",
    "Tremper le poulet dans l'œuf battu puis dans les flocons épicés.",
    "Disposer sur plaque.",
    "Cuire au four 20 min à 200°C en retournant à mi-cuisson."
  ] },
{ id:16, nom:"Escalope de dinde à la provençale", emoji:"🦃", temps:20, portions:2, cal:294, proteines:44.6, glucides:5.4, lipides:10, fibres:1.4,
  ingredients:[
    {"id":"dinde_blanc", "qty":360},
    {"id":"tomate", "qty":200},
    {"id":"ail", "qty":12},
    {"id":"basilic", "qty":10},
    {"id":"huile_olive", "qty":16}
  ],
  instructions:[
    "Saisir les escalopes de dinde.",
    "Ajouter ail et tomates concassées.",
    "Mijoter 10 min.",
    "Parsemer de basilic frais."
  ] },
{ id:17, nom:"Dinde sautée façon fajitas", emoji:"🌮", temps:20, portions:2, cal:417, proteines:49.5, glucides:36.9, lipides:6.9, fibres:4.1,
  ingredients:[
    {"id":"dinde_blanc", "qty":360},
    {"id":"poivron", "qty":160},
    {"id":"oignon", "qty":100},
    {"id":"tortilla_ble", "qty":120},
    {"id":"citron", "qty":30}
  ],
  instructions:[
    "Émincer dinde, poivrons et oignon.",
    "Faire sauter à feu vif 8 min.",
    "Assaisonner de citron et épices.",
    "Servir dans des tortillas chaudes."
  ] },
{ id:18, nom:"Boulettes de dinde sauce tomate", emoji:"🍝", temps:30, portions:3, cal:260, proteines:33.2, glucides:7.6, lipides:10.8, fibres:2,
  ingredients:[
    {"id":"dinde_hachee", "qty":450},
    {"id":"tomate", "qty":300},
    {"id":"ail", "qty":15},
    {"id":"oignon", "qty":90},
    {"id":"persil", "qty":15}
  ],
  instructions:[
    "Mélanger dinde hachée, ail et persil, former des boulettes.",
    "Saisir les boulettes à la poêle.",
    "Ajouter sauce tomate maison (tomate, oignon).",
    "Mijoter 15 min."
  ] },
{ id:19, nom:"Dinde grillée, patate douce et brocoli", emoji:"🦃", temps:30, portions:2, cal:459, proteines:49.2, glucides:40.4, lipides:10.4, fibres:8.3,
  ingredients:[
    {"id":"dinde_blanc", "qty":360},
    {"id":"patate_douce", "qty":360},
    {"id":"brocoli", "qty":220},
    {"id":"huile_olive", "qty":16}
  ],
  instructions:[
    "Couper la patate douce en cubes, rôtir 20 min au four.",
    "Griller la dinde 5-6 min par face.",
    "Cuire le brocoli à la vapeur.",
    "Assembler le tout dans une assiette."
  ] },
{ id:20, nom:"Salade de dinde fumée et concombre", emoji:"🥗", temps:10, portions:1, cal:140, proteines:20.4, glucides:7.8, lipides:3.4, fibres:2.8,
  ingredients:[
    {"id":"jambon_volaille", "qty":100},
    {"id":"concombre", "qty":100},
    {"id":"tomate", "qty":80},
    {"id":"salade_verte", "qty":60},
    {"id":"citron", "qty":20}
  ],
  instructions:[
    "Couper le jambon de volaille en lanières.",
    "Émincer concombre et tomate.",
    "Mélanger avec la salade.",
    "Assaisonner au citron et huile d'olive."
  ] },
{ id:21, nom:"Dinde au curry et riz complet", emoji:"🦃", temps:25, portions:2, cal:338, proteines:46.9, glucides:26.9, lipides:4.2, fibres:3.5,
  ingredients:[
    {"id":"dinde_blanc", "qty":360},
    {"id":"curry_poudre", "qty":8},
    {"id":"riz_complet", "qty":180},
    {"id":"oignon", "qty":60},
    {"id":"lait_amande", "qty":160}
  ],
  instructions:[
    "Cuire le riz complet.",
    "Faire revenir l'oignon, ajouter la dinde en dés.",
    "Saupoudrer de curry, ajouter le lait d'amande.",
    "Mijoter 15 min, servir sur le riz."
  ] },
{ id:22, nom:"Burger de dinde maison", emoji:"🍔", temps:25, portions:2, cal:461, proteines:39.6, glucides:41.9, lipides:14.9, fibres:3.1,
  ingredients:[
    {"id":"dinde_hachee", "qty":300},
    {"id":"pain_burger", "qty":160},
    {"id":"salade_verte", "qty":50},
    {"id":"tomate", "qty":60},
    {"id":"moutarde", "qty":16}
  ],
  instructions:[
    "Former des steaks avec la dinde hachée assaisonnée.",
    "Cuire à la poêle 5 min par face.",
    "Toaster le pain complet.",
    "Garnir de salade, tomate et moutarde."
  ] },
{ id:23, nom:"Dinde aux champignons et persil", emoji:"🦃", temps:20, portions:2, cal:229, proteines:47.1, glucides:4.2, lipides:2.2, fibres:1.4,
  ingredients:[
    {"id":"dinde_blanc", "qty":360},
    {"id":"champignon", "qty":220},
    {"id":"persil", "qty":12},
    {"id":"ail", "qty":12}
  ],
  instructions:[
    "Saisir les escalopes de dinde.",
    "Ajouter ail et champignons émincés.",
    "Cuire 8 min jusqu'à évaporation de l'eau des champignons.",
    "Parsemer de persil."
  ] },
{ id:24, nom:"Steak grillé sauce moutarde", emoji:"🥩", temps:15, portions:1, cal:395, proteines:40.2, glucides:0.8, lipides:25, fibres:0,
  ingredients:[
    {"id":"steak_boeuf", "qty":180},
    {"id":"moutarde", "qty":15},
    {"id":"huile_olive", "qty":10}
  ],
  instructions:[
    "Saisir le steak 2-3 min par face selon cuisson désirée.",
    "Laisser reposer 3 min.",
    "Servir avec une touche de moutarde.",
    "Assaisonner sel, poivre."
  ] },
{ id:25, nom:"Bœuf haché sauté aux poivrons", emoji:"🥩", temps:20, portions:2, cal:298, proteines:39.7, glucides:9.9, lipides:9.4, fibres:2.7,
  ingredients:[
    {"id":"boeuf_hache_5", "qty":360},
    {"id":"poivron", "qty":220},
    {"id":"oignon", "qty":80},
    {"id":"ail", "qty":12}
  ],
  instructions:[
    "Faire revenir oignon et ail.",
    "Ajouter le bœuf haché, cuire en émiettant.",
    "Ajouter les poivrons en lanières.",
    "Cuire 8 min à feu moyen."
  ] },
{ id:26, nom:"Chili de bœuf sans porc", emoji:"🌶️", temps:35, portions:3, cal:369, proteines:42.1, glucides:29.8, lipides:8.7, fibres:8.3,
  ingredients:[
    {"id":"boeuf_hache_5", "qty":450},
    {"id":"haricots_rouges", "qty":300},
    {"id":"tomate", "qty":300},
    {"id":"oignon", "qty":90},
    {"id":"cumin", "qty":6}
  ],
  instructions:[
    "Faire revenir l'oignon, ajouter le bœuf haché.",
    "Ajouter tomate concassée et cumin.",
    "Incorporer les haricots rouges.",
    "Mijoter 20 min à couvert."
  ] },
{ id:27, nom:"Bœuf bourguignon allégé", emoji:"🥘", temps:90, portions:4, cal:356, proteines:42.1, glucides:10, lipides:15.4, fibres:3.3,
  ingredients:[
    {"id":"boeuf_braise", "qty":600},
    {"id":"carotte", "qty":300},
    {"id":"oignon", "qty":120},
    {"id":"champignon", "qty":240},
    {"id":"ail", "qty":16}
  ],
  instructions:[
    "Faire revenir le bœuf en morceaux.",
    "Ajouter carottes, oignon et ail.",
    "Mouiller avec un peu d'eau ou bouillon, ajouter champignons.",
    "Laisser mijoter 1h à couvert."
  ] },
{ id:28, nom:"Tartare de bœuf léger", emoji:"🥩", temps:15, portions:1, cal:264, proteines:37.9, glucides:3.8, lipides:10.1, fibres:1.2,
  ingredients:[
    {"id":"filet_boeuf", "qty":160},
    {"id":"oignon", "qty":30},
    {"id":"moutarde", "qty":10},
    {"id":"persil", "qty":8},
    {"id":"citron", "qty":15}
  ],
  instructions:[
    "Couper le steak finement au couteau.",
    "Mélanger avec oignon haché, moutarde, persil.",
    "Ajouter un trait de citron.",
    "Servir bien frais."
  ] },
{ id:29, nom:"Steak haché, purée de patate douce", emoji:"🥩", temps:30, portions:2, cal:367, proteines:34.7, glucides:37.4, lipides:7.7, fibres:5.5,
  ingredients:[
    {"id":"boeuf_hache_5", "qty":300},
    {"id":"patate_douce", "qty":360},
    {"id":"ail", "qty":10}
  ],
  instructions:[
    "Cuire la patate douce à l'eau ou vapeur 20 min.",
    "Écraser en purée avec une pointe d'ail.",
    "Cuire les steaks hachés à la poêle.",
    "Servir ensemble."
  ] },
{ id:30, nom:"Bœuf sauté façon asiatique", emoji:"🥩", temps:20, portions:2, cal:304, proteines:37.5, glucides:7.5, lipides:13.1, fibres:1.6,
  ingredients:[
    {"id":"steak_boeuf", "qty":320},
    {"id":"sauce_soja", "qty":24},
    {"id":"gingembre", "qty":16},
    {"id":"ail", "qty":12},
    {"id":"poivron", "qty":160}
  ],
  instructions:[
    "Émincer le bœuf finement.",
    "Saisir à feu vif 2 min.",
    "Ajouter ail, gingembre et poivrons.",
    "Déglacer à la sauce soja, cuire 3 min."
  ] },
{ id:31, nom:"Boulettes de bœuf, riz et légumes", emoji:"🍚", temps:30, portions:2, cal:361, proteines:35, glucides:33.2, lipides:8, fibres:3.1,
  ingredients:[
    {"id":"boeuf_hache_5", "qty":300},
    {"id":"riz_blanc", "qty":180},
    {"id":"carotte", "qty":160},
    {"id":"oignon", "qty":60}
  ],
  instructions:[
    "Former des boulettes avec bœuf haché, oignon haché.",
    "Cuire à la poêle 10 min en les retournant.",
    "Cuire le riz et les carottes en parallèle.",
    "Servir ensemble."
  ] },
{ id:32, nom:"Saumon grillé au citron", emoji:"🐟", temps:15, portions:1, cal:454, proteines:36.4, glucides:1.1, lipides:31.5, fibres:0.9,
  ingredients:[
    {"id":"saumon", "qty":180},
    {"id":"citron", "qty":25},
    {"id":"huile_olive", "qty":8},
    {"id":"persil", "qty":6}
  ],
  instructions:[
    "Assaisonner le pavé de saumon.",
    "Saisir côté peau 5 min, retourner 3 min.",
    "Arroser de jus de citron.",
    "Parsemer de persil frais."
  ] },
{ id:33, nom:"Saumon vapeur, brocolis et citron", emoji:"🐟", temps:20, portions:1, cal:431, proteines:40.4, glucides:6.8, lipides:24.1, fibres:4.6,
  ingredients:[
    {"id":"saumon", "qty":180},
    {"id":"brocoli", "qty":150},
    {"id":"citron", "qty":25}
  ],
  instructions:[
    "Cuire le saumon à la vapeur 10-12 min.",
    "Cuire les brocolis à la vapeur en même temps.",
    "Arroser de citron.",
    "Assaisonner légèrement."
  ] },
{ id:34, nom:"Tartare de saumon à l'avocat", emoji:"🐟", temps:15, portions:1, cal:499, proteines:34.3, glucides:2.8, lipides:35.9, fibres:7.4,
  ingredients:[
    {"id":"saumon", "qty":160},
    {"id":"avocat", "qty":100},
    {"id":"citron", "qty":20},
    {"id":"coriandre", "qty":6}
  ],
  instructions:[
    "Couper le saumon frais en petits dés.",
    "Mélanger avec avocat coupé en dés.",
    "Assaisonner de citron et coriandre.",
    "Servir frais."
  ] },
{ id:35, nom:"Cabillaud à la tomate et basilic", emoji:"🐟", temps:25, portions:2, cal:177, proteines:33.9, glucides:5.7, lipides:1.5, fibres:1.5,
  ingredients:[
    {"id":"cabillaud", "qty":360},
    {"id":"tomate", "qty":220},
    {"id":"basilic", "qty":10},
    {"id":"ail", "qty":12}
  ],
  instructions:[
    "Saisir le cabillaud 2 min par face.",
    "Ajouter tomates concassées et ail.",
    "Mijoter 10 min.",
    "Parsemer de basilic."
  ] },
{ id:36, nom:"Papillote de cabillaud aux légumes", emoji:"🐟", temps:25, portions:1, cal:207, proteines:34.9, glucides:10.6, lipides:1.9, fibres:4.7,
  ingredients:[
    {"id":"cabillaud", "qty":180},
    {"id":"courgette", "qty":120},
    {"id":"carotte", "qty":100},
    {"id":"citron", "qty":20}
  ],
  instructions:[
    "Couper les légumes en julienne.",
    "Disposer le poisson et légumes dans du papier cuisson.",
    "Arroser de citron et huile.",
    "Cuire au four 20 min à 180°C."
  ] },
{ id:37, nom:"Curry de poisson léger", emoji:"🍛", temps:25, portions:2, cal:195, proteines:33.8, glucides:6.8, lipides:2.8, fibres:1.9,
  ingredients:[
    {"id":"cabillaud", "qty":360},
    {"id":"curry_poudre", "qty":8},
    {"id":"lait_amande", "qty":180},
    {"id":"oignon", "qty":70}
  ],
  instructions:[
    "Faire revenir l'oignon.",
    "Ajouter curry, puis lait d'amande.",
    "Ajouter le poisson en morceaux.",
    "Mijoter 10 min doucement."
  ] },
{ id:38, nom:"Salade de thon et haricots verts", emoji:"🥗", temps:15, portions:1, cal:208, proteines:38.2, glucides:10.6, lipides:1.8, fibres:4.7,
  ingredients:[
    {"id":"thon_boite", "qty":140},
    {"id":"haricot_vert", "qty":120},
    {"id":"tomate", "qty":80},
    {"id":"oignon", "qty":30}
  ],
  instructions:[
    "Cuire les haricots verts à la vapeur.",
    "Émietter le thon.",
    "Mélanger avec tomate et oignon émincé.",
    "Assaisonner à l'huile d'olive."
  ] },
{ id:39, nom:"Pâtes au thon et tomate", emoji:"🍝", temps:20, portions:2, cal:248, proteines:31.1, glucides:25.8, lipides:2.5, fibres:5,
  ingredients:[
    {"id":"thon_boite", "qty":200},
    {"id":"pates_completes", "qty":180},
    {"id":"tomate", "qty":200},
    {"id":"ail", "qty":10},
    {"id":"basilic", "qty":8}
  ],
  instructions:[
    "Cuire les pâtes complètes.",
    "Faire revenir ail et tomates concassées.",
    "Ajouter le thon émietté.",
    "Mélanger avec les pâtes, parsemer de basilic."
  ] },
{ id:40, nom:"Wrap de thon et avocat", emoji:"🌮", temps:10, portions:1, cal:472, proteines:42.1, glucides:31.8, lipides:18.3, fibres:7.9,
  ingredients:[
    {"id":"thon_boite", "qty":140},
    {"id":"tortilla_ble", "qty":60},
    {"id":"avocat", "qty":80},
    {"id":"salade_verte", "qty":40},
    {"id":"citron", "qty":20}
  ],
  instructions:[
    "Écraser le thon avec un peu de citron.",
    "Garnir la tortilla de salade et avocat.",
    "Ajouter le thon.",
    "Rouler et couper en deux."
  ] },
{ id:41, nom:"Crevettes sautées à l'ail et persil", emoji:"🍤", temps:15, portions:2, cal:173, proteines:34.3, glucides:4.2, lipides:1.7, fibres:0.7,
  ingredients:[
    {"id":"crevettes", "qty":320},
    {"id":"ail", "qty":14},
    {"id":"persil", "qty":10},
    {"id":"citron", "qty":25}
  ],
  instructions:[
    "Faire chauffer une poêle avec un peu d'huile.",
    "Saisir les crevettes 2-3 min par face.",
    "Ajouter ail et persil hachés en fin de cuisson.",
    "Arroser de citron."
  ] },
{ id:42, nom:"Riz aux crevettes et légumes", emoji:"🍚", temps:25, portions:2, cal:316, proteines:37.9, glucides:34.1, lipides:2.2, fibres:3,
  ingredients:[
    {"id":"crevettes", "qty":320},
    {"id":"riz_blanc", "qty":180},
    {"id":"poivron", "qty":140},
    {"id":"carotte", "qty":100},
    {"id":"sauce_soja", "qty":18}
  ],
  instructions:[
    "Cuire le riz.",
    "Sauter crevettes, poivron et carotte.",
    "Mélanger avec le riz cuit.",
    "Assaisonner de sauce soja."
  ] },
{ id:43, nom:"Saumon mariné teriyaki", emoji:"🐟", temps:20, portions:2, cal:397, proteines:35.1, glucides:10, lipides:22.2, fibres:0.1,
  ingredients:[
    {"id":"saumon", "qty":340},
    {"id":"sauce_soja", "qty":24},
    {"id":"miel", "qty":20},
    {"id":"gingembre", "qty":14}
  ],
  instructions:[
    "Mariner le saumon dans soja, miel et gingembre 10 min.",
    "Saisir à la poêle 4 min par face.",
    "Réduire la marinade en sauce.",
    "Napper le saumon avant de servir."
  ] },
{ id:44, nom:"Cabillaud rôti, courgettes grillées", emoji:"🐟", temps:25, portions:2, cal:234, proteines:33.9, glucides:3.6, lipides:8.8, fibres:1.7,
  ingredients:[
    {"id":"cabillaud", "qty":360},
    {"id":"courgette", "qty":220},
    {"id":"huile_olive", "qty":14},
    {"id":"paprika", "qty":3}
  ],
  instructions:[
    "Assaisonner le cabillaud de paprika.",
    "Cuire au four 15 min à 200°C.",
    "Griller les rondelles de courgette à la poêle.",
    "Servir ensemble avec un trait d'huile d'olive."
  ] },
{ id:45, nom:"Salade de crevettes, avocat et mangue épicée", emoji:"🥗", temps:15, portions:1, cal:308, proteines:35.7, glucides:4.2, lipides:15.2, fibres:6.8,
  ingredients:[
    {"id":"crevettes", "qty":160},
    {"id":"avocat", "qty":90},
    {"id":"citron", "qty":20},
    {"id":"coriandre", "qty":6}
  ],
  instructions:[
    "Cuire les crevettes 3 min à la poêle.",
    "Couper l'avocat en dés.",
    "Mélanger avec coriandre et citron.",
    "Servir frais."
  ] },
{ id:46, nom:"Omelette aux épinards et fromage blanc", emoji:"🥚", temps:10, portions:1, cal:209, proteines:21.7, glucides:5.1, lipides:11.5, fibres:2.2,
  ingredients:[
    {"id":"oeuf", "qty":110},
    {"id":"epinard", "qty":100},
    {"id":"fromage_blanc_0", "qty":60}
  ],
  instructions:[
    "Battre les œufs.",
    "Faire tomber les épinards dans la poêle.",
    "Verser les œufs battus.",
    "Cuire 4-5 min, ajouter le fromage blanc à la fin."
  ] },
{ id:47, nom:"Œufs brouillés et avocat sur pain complet", emoji:"🥚", temps:10, portions:1, cal:458, proteines:22.2, glucides:31.4, lipides:25.4, fibres:10.3,
  ingredients:[
    {"id":"oeuf", "qty":110},
    {"id":"avocat", "qty":80},
    {"id":"pain_complet", "qty":70}
  ],
  instructions:[
    "Battre les œufs, cuire en remuant à feu doux.",
    "Toaster le pain complet.",
    "Écraser l'avocat dessus.",
    "Déposer les œufs brouillés."
  ] },
{ id:48, nom:"Tofu sauté à la sauce soja et légumes", emoji:"⬜", temps:20, portions:2, cal:237, proteines:23.3, glucides:11.3, lipides:12.5, fibres:4.2,
  ingredients:[
    {"id":"tofu", "qty":300},
    {"id":"sauce_soja", "qty":20},
    {"id":"poivron", "qty":140},
    {"id":"brocoli", "qty":140},
    {"id":"ail", "qty":12}
  ],
  instructions:[
    "Couper le tofu en dés, saisir à la poêle.",
    "Réserver, faire revenir ail et légumes.",
    "Remettre le tofu.",
    "Déglacer à la sauce soja, cuire 3 min."
  ] },
{ id:49, nom:"Curry de pois chiches et épinards", emoji:"🍛", temps:25, portions:2, cal:303, proteines:15.9, glucides:48.8, lipides:5, fibres:15.9,
  ingredients:[
    {"id":"pois_chiches", "qty":300},
    {"id":"epinard", "qty":160},
    {"id":"curry_poudre", "qty":8},
    {"id":"oignon", "qty":70},
    {"id":"tomate", "qty":140}
  ],
  instructions:[
    "Faire revenir l'oignon avec le curry.",
    "Ajouter tomate concassée.",
    "Incorporer pois chiches et épinards.",
    "Mijoter 15 min."
  ] },
{ id:50, nom:"Dahl de lentilles épicé", emoji:"🍛", temps:30, portions:3, cal:212, proteines:14.6, glucides:36, lipides:1.1, fibres:13.7,
  ingredients:[
    {"id":"lentilles_corail", "qty":450},
    {"id":"curry_poudre", "qty":10},
    {"id":"oignon", "qty":90},
    {"id":"ail", "qty":14},
    {"id":"gingembre", "qty":14}
  ],
  instructions:[
    "Faire revenir oignon, ail et gingembre.",
    "Ajouter le curry et les lentilles rincées.",
    "Couvrir d'eau, cuire 20 min.",
    "Mélanger jusqu'à consistance crémeuse."
  ] },
{ id:51, nom:"Salade de pois chiches et avocat", emoji:"🥗", temps:10, portions:1, cal:420, proteines:15, glucides:48.1, lipides:17.7, fibres:19.5,
  ingredients:[
    {"id":"pois_chiches", "qty":150},
    {"id":"avocat", "qty":90},
    {"id":"tomate", "qty":80},
    {"id":"citron", "qty":20},
    {"id":"oignon", "qty":30}
  ],
  instructions:[
    "Rincer et égoutter les pois chiches.",
    "Mélanger avec avocat en dés, tomate et oignon.",
    "Assaisonner au citron et huile d'olive.",
    "Servir frais."
  ] },
{ id:52, nom:"Tofu grillé mariné au gingembre", emoji:"⬜", temps:20, portions:2, cal:200, proteines:20.7, glucides:6.7, lipides:12.1, fibres:1.3,
  ingredients:[
    {"id":"tofu", "qty":300},
    {"id":"gingembre", "qty":16},
    {"id":"sauce_soja", "qty":18},
    {"id":"ail", "qty":12}
  ],
  instructions:[
    "Couper le tofu en tranches.",
    "Mariner dans soja, gingembre et ail 10 min.",
    "Griller à la poêle jusqu'à coloration.",
    "Servir chaud."
  ] },
{ id:53, nom:"Œufs pochés sur lit d'épinards", emoji:"🥚", temps:12, portions:1, cal:196, proteines:18.3, glucides:5.3, lipides:11.5, fibres:2.8,
  ingredients:[
    {"id":"oeuf", "qty":110},
    {"id":"epinard", "qty":120},
    {"id":"ail", "qty":8}
  ],
  instructions:[
    "Faire revenir les épinards à l'ail.",
    "Pocher les œufs dans l'eau frémissante 3 min.",
    "Disposer sur le lit d'épinards.",
    "Assaisonner légèrement."
  ] },
{ id:54, nom:"Galettes de pois chiches épicées", emoji:"🧆", temps:25, portions:2, cal:300, proteines:16.3, glucides:43.1, lipides:7.1, fibres:11.7,
  ingredients:[
    {"id":"pois_chiches", "qty":300},
    {"id":"cumin", "qty":4},
    {"id":"ail", "qty":10},
    {"id":"oeuf", "qty":55}
  ],
  instructions:[
    "Mixer les pois chiches avec ail et cumin.",
    "Ajouter un œuf pour lier.",
    "Former des galettes.",
    "Cuire à la poêle 4 min par face."
  ] },
{ id:55, nom:"Buddha bowl tofu et quinoa", emoji:"🥗", temps:25, portions:1, cal:464, proteines:27.7, glucides:31.2, lipides:26.1, fibres:12.7,
  ingredients:[
    {"id":"tofu", "qty":150},
    {"id":"quinoa", "qty":90},
    {"id":"avocat", "qty":80},
    {"id":"carotte", "qty":70},
    {"id":"brocoli", "qty":70}
  ],
  instructions:[
    "Cuire le quinoa.",
    "Griller le tofu en dés.",
    "Cuire le brocoli à la vapeur, râper la carotte.",
    "Assembler tous les éléments dans un bol."
  ] },
{ id:56, nom:"Omelette champignons et fromage râpé léger", emoji:"🥚", temps:12, portions:1, cal:272, proteines:24, glucides:3, lipides:18.5, fibres:0.9,
  ingredients:[
    {"id":"oeuf", "qty":110},
    {"id":"champignon", "qty":90},
    {"id":"fromage_rape", "qty":25}
  ],
  instructions:[
    "Faire revenir les champignons émincés.",
    "Battre les œufs, verser dans la poêle.",
    "Ajouter le fromage râpé.",
    "Plier l'omelette et servir."
  ] },
{ id:57, nom:"Salade grecque protéinée", emoji:"🥗", temps:15, portions:1, cal:309, proteines:21.6, glucides:9.6, lipides:21.1, fibres:2.1,
  ingredients:[
    {"id":"concombre", "qty":100},
    {"id":"tomate", "qty":90},
    {"id":"oignon", "qty":30},
    {"id":"mozzarella_light", "qty":90},
    {"id":"huile_olive", "qty":10}
  ],
  instructions:[
    "Couper concombre et tomate en dés.",
    "Émincer l'oignon rouge finement.",
    "Ajouter la mozzarella en cubes.",
    "Assaisonner d'huile d'olive et origan."
  ] },
{ id:58, nom:"Taboulé de quinoa", emoji:"🥗", temps:20, portions:2, cal:135, proteines:5.4, glucides:23.8, lipides:2, fibres:4.4,
  ingredients:[
    {"id":"quinoa", "qty":180},
    {"id":"tomate", "qty":160},
    {"id":"concombre", "qty":120},
    {"id":"persil", "qty":12},
    {"id":"citron", "qty":30}
  ],
  instructions:[
    "Cuire le quinoa et laisser refroidir.",
    "Couper tomate et concombre en petits dés.",
    "Mélanger avec persil haché.",
    "Assaisonner de citron et huile d'olive."
  ] },
{ id:59, nom:"Poêlée de légumes d'été", emoji:"🥘", temps:20, portions:2, cal:69, proteines:3.4, glucides:12.3, lipides:0.8, fibres:5.4,
  ingredients:[
    {"id":"courgette", "qty":160},
    {"id":"aubergine", "qty":160},
    {"id":"poivron", "qty":140},
    {"id":"tomate", "qty":140},
    {"id":"ail", "qty":10}
  ],
  instructions:[
    "Couper tous les légumes en dés.",
    "Faire revenir l'ail dans l'huile.",
    "Ajouter les légumes progressivement selon temps de cuisson.",
    "Mijoter 15 min à couvert."
  ] },
{ id:60, nom:"Soupe de légumes minceur", emoji:"🍲", temps:30, portions:3, cal:66, proteines:2.6, glucides:12.7, lipides:0.5, fibres:4.1,
  ingredients:[
    {"id":"courgette", "qty":200},
    {"id":"carotte", "qty":200},
    {"id":"oignon", "qty":90},
    {"id":"poireau", "qty":150},
    {"id":"ail", "qty":10}
  ],
  instructions:[
    "Faire revenir l'oignon et l'ail.",
    "Ajouter les légumes coupés en morceaux.",
    "Couvrir d'eau, cuire 20 min.",
    "Mixer si désiré."
  ] },
{ id:61, nom:"Salade de chou-fleur rôti et pois chiches", emoji:"🥗", temps:30, portions:2, cal:209, proteines:11.4, glucides:32.8, lipides:3.5, fibres:11.2,
  ingredients:[
    {"id":"chou_fleur", "qty":300},
    {"id":"pois_chiches", "qty":200},
    {"id":"cumin", "qty":4},
    {"id":"citron", "qty":25}
  ],
  instructions:[
    "Rôtir le chou-fleur au four avec cumin 20 min.",
    "Mélanger avec les pois chiches.",
    "Assaisonner au citron.",
    "Servir tiède ou froid."
  ] },
{ id:62, nom:"Ratatouille maison", emoji:"🍆", temps:40, portions:3, cal:70, proteines:3.4, glucides:12.4, lipides:0.8, fibres:5.5,
  ingredients:[
    {"id":"aubergine", "qty":240},
    {"id":"courgette", "qty":240},
    {"id":"poivron", "qty":200},
    {"id":"tomate", "qty":240},
    {"id":"ail", "qty":14}
  ],
  instructions:[
    "Couper tous les légumes en dés.",
    "Faire revenir séparément puis réunir.",
    "Ajouter tomates concassées et ail.",
    "Mijoter 25 min à couvert."
  ] },
{ id:63, nom:"Porridge avoine, banane et amandes", emoji:"🥣", temps:10, portions:1, cal:456, proteines:17.4, glucides:62, lipides:14.5, fibres:9.5,
  ingredients:[
    {"id":"flocons_avoine", "qty":50},
    {"id":"banane", "qty":100},
    {"id":"amandes", "qty":15},
    {"id":"lait_demi_ecreme", "qty":200}
  ],
  instructions:[
    "Faire chauffer le lait avec les flocons d'avoine.",
    "Cuire 5 min en remuant.",
    "Ajouter la banane coupée en rondelles.",
    "Parsemer d'amandes effilées."
  ] },
{ id:64, nom:"Bowl skyr, fruits rouges et graines de chia", emoji:"🥣", temps:5, portions:1, cal:220, proteines:19.1, glucides:28.8, lipides:3.8, fibres:6.9,
  ingredients:[
    {"id":"skyr", "qty":150},
    {"id":"fruits_rouges_mix", "qty":100},
    {"id":"graines_chia", "qty":10},
    {"id":"miel", "qty":12}
  ],
  instructions:[
    "Verser le skyr dans un bol.",
    "Ajouter les fruits rouges.",
    "Saupoudrer de graines de chia.",
    "Ajouter un filet de miel."
  ] },
{ id:65, nom:"Pancakes protéinés à la banane", emoji:"🥞", temps:15, portions:2, cal:379, proteines:20.4, glucides:41.9, lipides:14, fibres:6.1,
  ingredients:[
    {"id":"oeuf", "qty":220},
    {"id":"banane", "qty":160},
    {"id":"flocons_avoine", "qty":80}
  ],
  instructions:[
    "Mixer banane, œufs et flocons d'avoine.",
    "Laisser reposer 5 min.",
    "Cuire des petites pancakes à la poêle.",
    "Servir avec fruits frais."
  ] },
{ id:66, nom:"Toast avocat et œuf poché", emoji:"🍞", temps:12, portions:1, cal:399, proteines:15.4, glucides:31.5, lipides:21.4, fibres:11.4,
  ingredients:[
    {"id":"pain_complet", "qty":70},
    {"id":"avocat", "qty":90},
    {"id":"oeuf", "qty":55},
    {"id":"citron", "qty":15}
  ],
  instructions:[
    "Toaster le pain complet.",
    "Écraser l'avocat avec citron et sel.",
    "Pocher l'œuf 3 min.",
    "Tartiner le pain et déposer l'œuf dessus."
  ] },
{ id:67, nom:"Smoothie protéiné banane et fromage blanc", emoji:"🥤", temps:5, portions:1, cal:256, proteines:15.9, glucides:44, lipides:2.3, fibres:3.1,
  ingredients:[
    {"id":"banane", "qty":120},
    {"id":"fromage_blanc_0", "qty":150},
    {"id":"lait_demi_ecreme", "qty":100},
    {"id":"miel", "qty":10}
  ],
  instructions:[
    "Mettre tous les ingrédients dans un blender.",
    "Mixer jusqu'à consistance lisse.",
    "Ajuster avec un peu de lait si trop épais.",
    "Servir frais."
  ] },
{ id:68, nom:"Compote pomme-banane sans sucre ajouté", emoji:"🍎", temps:20, portions:2, cal:124, proteines:1.2, glucides:30.8, lipides:0.4, fibres:4.5,
  ingredients:[
    {"id":"pomme", "qty":200},
    {"id":"banane", "qty":160}
  ],
  instructions:[
    "Couper les fruits en morceaux.",
    "Cuire à couvert avec un fond d'eau 15 min.",
    "Mixer ou écraser selon la texture désirée.",
    "Laisser refroidir avant de servir."
  ] },
{ id:69, nom:"Yaourt grec, noix et miel", emoji:"🥣", temps:5, portions:1, cal:315, proteines:11.3, glucides:16.7, lipides:23.3, fibres:1,
  ingredients:[
    {"id":"yaourt_grec", "qty":150},
    {"id":"noix", "qty":15},
    {"id":"miel", "qty":12}
  ],
  instructions:[
    "Verser le yaourt grec dans un bol.",
    "Concasser les noix grossièrement.",
    "Parsemer sur le yaourt.",
    "Arroser d'un filet de miel."
  ] },
{ id:70, nom:"Riz cantonais protéiné maison", emoji:"🍚", temps:20, portions:2, cal:322, proteines:24, glucides:37.6, lipides:8.6, fibres:2.8,
  ingredients:[
    {"id":"riz_blanc", "qty":180},
    {"id":"oeuf", "qty":110},
    {"id":"jambon_volaille", "qty":140},
    {"id":"carotte", "qty":100},
    {"id":"mais", "qty":80}
  ],
  instructions:[
    "Cuire le riz et laisser refroidir si possible.",
    "Faire revenir carotte et maïs.",
    "Ajouter œufs battus, mélanger.",
    "Incorporer le riz et le jambon de volaille, sauter 5 min."
  ] },
{ id:71, nom:"Pâtes complètes au poulet et courgette", emoji:"🍝", temps:25, portions:2, cal:341, proteines:44.1, glucides:24.1, lipides:6.7, fibres:4.6,
  ingredients:[
    {"id":"pates_completes", "qty":180},
    {"id":"poulet_blanc", "qty":300},
    {"id":"courgette", "qty":160},
    {"id":"ail", "qty":10},
    {"id":"parmesan", "qty":20}
  ],
  instructions:[
    "Cuire les pâtes complètes.",
    "Sauter le poulet en dés avec ail et courgette.",
    "Mélanger avec les pâtes.",
    "Parsemer de parmesan."
  ] },
{ id:72, nom:"Risotto léger aux champignons", emoji:"🍚", temps:30, portions:2, cal:206, proteines:10.5, glucides:31, lipides:4.2, fibres:2,
  ingredients:[
    {"id":"riz_blanc", "qty":180},
    {"id":"champignon", "qty":200},
    {"id":"oignon", "qty":60},
    {"id":"parmesan", "qty":25},
    {"id":"ail", "qty":10}
  ],
  instructions:[
    "Faire revenir oignon et ail.",
    "Ajouter le riz, nacrer 2 min.",
    "Mouiller progressivement avec du bouillon en remuant.",
    "Incorporer les champignons et le parmesan en fin de cuisson."
  ] },
{ id:73, nom:"Patate douce farcie au thon", emoji:"🍠", temps:35, portions:1, cal:363, proteines:35.9, glucides:48.9, lipides:2.9, fibres:7.1,
  ingredients:[
    {"id":"patate_douce", "qty":220},
    {"id":"thon_boite", "qty":120},
    {"id":"yaourt_nature", "qty":50},
    {"id":"oignon", "qty":30}
  ],
  instructions:[
    "Cuire la patate douce entière au four 30 min.",
    "Mélanger thon émietté avec yaourt et oignon.",
    "Couper la patate en deux, l'évider légèrement.",
    "Garnir du mélange et servir."
  ] },
{ id:74, nom:"Boulgour aux légumes et pois chiches", emoji:"🌾", temps:25, portions:2, cal:272, proteines:12.4, glucides:49.4, lipides:3.2, fibres:14,
  ingredients:[
    {"id":"boulgour", "qty":180},
    {"id":"pois_chiches", "qty":200},
    {"id":"courgette", "qty":140},
    {"id":"poivron", "qty":140},
    {"id":"citron", "qty":25}
  ],
  instructions:[
    "Cuire le boulgour.",
    "Sauter courgette et poivron.",
    "Mélanger avec pois chiches.",
    "Assaisonner au citron et huile d'olive."
  ] },
{ id:75, nom:"Spaghetti de courgette au saumon fumé", emoji:"🍝", temps:20, portions:1, cal:220, proteines:25.1, glucides:7.8, lipides:9.7, fibres:2.9,
  ingredients:[
    {"id":"courgette", "qty":200},
    {"id":"saumon_fume", "qty":100},
    {"id":"citron", "qty":20},
    {"id":"ail", "qty":8}
  ],
  instructions:[
    "Tailler la courgette en spaghetti à l'aide d'un économe ou spiraliseur.",
    "Sauter rapidement avec ail.",
    "Ajouter le saumon émietté.",
    "Assaisonner au citron."
  ] },
{ id:76, nom:"Riz complet, crevettes et brocoli au curry", emoji:"🍚", temps:25, portions:2, cal:276, proteines:34.5, glucides:26.6, lipides:3, fibres:4.7,
  ingredients:[
    {"id":"riz_complet", "qty":180},
    {"id":"crevettes", "qty":280},
    {"id":"brocoli", "qty":160},
    {"id":"curry_poudre", "qty":6}
  ],
  instructions:[
    "Cuire le riz complet.",
    "Sauter les crevettes 3 min.",
    "Ajouter le brocoli et le curry, cuire 5 min.",
    "Mélanger avec le riz."
  ] },
{ id:77, nom:"Semoule, poulet épicé et légumes", emoji:"🌾", temps:25, portions:2, cal:306, proteines:39.1, glucides:27.3, lipides:3.2, fibres:4,
  ingredients:[
    {"id":"semoule", "qty":180},
    {"id":"poulet_blanc", "qty":300},
    {"id":"carotte", "qty":140},
    {"id":"paprika", "qty":4},
    {"id":"cumin", "qty":3}
  ],
  instructions:[
    "Préparer la semoule selon le paquet.",
    "Sauter le poulet épicé de paprika et cumin.",
    "Ajouter les carottes en rondelles.",
    "Servir sur la semoule."
  ] },
{ id:78, nom:"Poêlée de bœuf, haricots verts et ail", emoji:"🥩", temps:20, portions:2, cal:276, proteines:35.1, glucides:5.9, lipides:12.2, fibres:2.8,
  ingredients:[
    {"id":"steak_boeuf", "qty":300},
    {"id":"haricot_vert", "qty":200},
    {"id":"ail", "qty":10}
  ],
  instructions:[
    "Couper le bœuf en lanières.",
    "Saisir à feu vif 3 min.",
    "Ajouter haricots verts et ail.",
    "Cuire 8 min en mélangeant."
  ] },
{ id:79, nom:"Filet de poulet sauce yaourt-citron", emoji:"🍗", temps:20, portions:2, cal:239, proteines:43.6, glucides:3.1, lipides:4.3, fibres:0.5,
  ingredients:[
    {"id":"poulet_blanc", "qty":360},
    {"id":"yaourt_nature", "qty":100},
    {"id":"citron", "qty":25},
    {"id":"persil", "qty":8}
  ],
  instructions:[
    "Cuire le poulet à la poêle.",
    "Préparer une sauce yaourt-citron-persil.",
    "Napper le poulet chaud de cette sauce.",
    "Servir immédiatement."
  ] },
{ id:80, nom:"Cabillaud, lentilles et persillade", emoji:"🐟", temps:30, portions:2, cal:323, proteines:44.6, glucides:31.8, lipides:2, fibres:12.2,
  ingredients:[
    {"id":"cabillaud", "qty":340},
    {"id":"lentilles_vertes", "qty":300},
    {"id":"persil", "qty":12},
    {"id":"ail", "qty":10}
  ],
  instructions:[
    "Cuire les lentilles 20 min.",
    "Cuire le cabillaud à la poêle ou au four.",
    "Préparer une persillade (ail+persil haché).",
    "Servir le poisson sur les lentilles, parsemé de persillade."
  ] },
{ id:81, nom:"Dinde façon kebab maison", emoji:"🌮", temps:25, portions:2, cal:394, proteines:47.6, glucides:32.3, lipides:7.5, fibres:2.4,
  ingredients:[
    {"id":"dinde_blanc", "qty":340},
    {"id":"tortilla_ble", "qty":120},
    {"id":"salade_verte", "qty":60},
    {"id":"tomate", "qty":80},
    {"id":"yaourt_nature", "qty":60}
  ],
  instructions:[
    "Émincer et épicer la dinde.",
    "Cuire à feu vif 8 min.",
    "Garnir les tortillas de salade et tomate.",
    "Ajouter dinde et un peu de sauce yaourt."
  ] },
{ id:82, nom:"Poulet rôti aux herbes et carottes", emoji:"🍗", temps:40, portions:2, cal:248, proteines:42.8, glucides:8.8, lipides:2.9, fibres:3,
  ingredients:[
    {"id":"poulet_blanc", "qty":360},
    {"id":"carotte", "qty":200},
    {"id":"ail", "qty":12},
    {"id":"basilic", "qty":8}
  ],
  instructions:[
    "Disposer le poulet et les carottes sur une plaque.",
    "Assaisonner d'ail et d'herbes.",
    "Enfourner 30 min à 200°C.",
    "Vérifier la cuisson avant de servir."
  ] },
{ id:83, nom:"Saumon teriyaki, riz et edamame", emoji:"🐟", temps:25, portions:2, cal:501, proteines:37.3, glucides:32.2, lipides:22.4, fibres:0.4,
  ingredients:[
    {"id":"saumon", "qty":340},
    {"id":"riz_blanc", "qty":180},
    {"id":"sauce_soja", "qty":20},
    {"id":"miel", "qty":16}
  ],
  instructions:[
    "Mariner le saumon dans soja et miel.",
    "Cuire le riz.",
    "Saisir le saumon 4 min par face.",
    "Servir sur le riz avec la sauce réduite."
  ] },
{ id:84, nom:"Œufs cocotte aux champignons", emoji:"🥚", temps:20, portions:1, cal:203, proteines:21.1, glucides:5.1, lipides:11.4, fibres:1,
  ingredients:[
    {"id":"oeuf", "qty":110},
    {"id":"champignon", "qty":100},
    {"id":"fromage_blanc_0", "qty":50}
  ],
  instructions:[
    "Faire revenir les champignons.",
    "Disposer dans un ramequin avec le fromage blanc.",
    "Casser un œuf par-dessus.",
    "Cuire au four ou bain-marie 12 min."
  ] },
{ id:85, nom:"Salade de lentilles, thon et oignon rouge", emoji:"🥗", temps:15, portions:1, cal:338, proteines:45, glucides:36.2, lipides:2.1, fibres:13.9,
  ingredients:[
    {"id":"lentilles_vertes", "qty":160},
    {"id":"thon_boite", "qty":120},
    {"id":"oignon_rouge", "qty":40},
    {"id":"citron", "qty":20}
  ],
  instructions:[
    "Mélanger lentilles cuites et thon émietté.",
    "Ajouter l'oignon rouge émincé.",
    "Assaisonner au citron et huile d'olive.",
    "Servir frais ou tiède."
  ] },
{ id:86, nom:"Poulet mariné au paprika fumé", emoji:"🍗", temps:25, portions:2, cal:283, proteines:42.2, glucides:3.3, lipides:10.1, fibres:1.2,
  ingredients:[
    {"id":"poulet_blanc", "qty":360},
    {"id":"paprika", "qty":6},
    {"id":"ail", "qty":12},
    {"id":"huile_olive", "qty":14}
  ],
  instructions:[
    "Mélanger huile, ail et paprika fumé.",
    "Mariner le poulet 15 min.",
    "Griller à la poêle 6 min par face.",
    "Servir chaud."
  ] },
{ id:87, nom:"Velouté de courgette protéiné", emoji:"🍲", temps:25, portions:2, cal:73, proteines:6.9, glucides:10.1, lipides:0.6, fibres:2.3,
  ingredients:[
    {"id":"courgette", "qty":300},
    {"id":"oignon", "qty":70},
    {"id":"fromage_blanc_0", "qty":120},
    {"id":"ail", "qty":8}
  ],
  instructions:[
    "Faire revenir oignon et ail.",
    "Ajouter courgettes coupées et eau.",
    "Cuire 15 min puis mixer.",
    "Ajouter le fromage blanc hors du feu."
  ] },
{ id:88, nom:"Bœuf sauté, riz et brocoli sauce soja", emoji:"🥩", temps:25, portions:2, cal:366, proteines:37.5, glucides:30.7, lipides:8.1, fibres:2.8,
  ingredients:[
    {"id":"boeuf_hache_5", "qty":300},
    {"id":"riz_blanc", "qty":180},
    {"id":"brocoli", "qty":180},
    {"id":"sauce_soja", "qty":18},
    {"id":"ail", "qty":10}
  ],
  instructions:[
    "Cuire le riz.",
    "Sauter le bœuf avec ail.",
    "Ajouter brocoli, cuire à couvert 5 min.",
    "Déglacer à la sauce soja et servir sur le riz."
  ] },
{ id:89, nom:"Aubergines farcies au bœuf", emoji:"🍆", temps:40, portions:2, cal:263, proteines:31.3, glucides:11.6, lipides:9.4, fibres:6.1,
  ingredients:[
    {"id":"aubergine", "qty":300},
    {"id":"boeuf_hache_5", "qty":240},
    {"id":"tomate", "qty":160},
    {"id":"oignon", "qty":70},
    {"id":"parmesan", "qty":20}
  ],
  instructions:[
    "Couper les aubergines en deux, évider.",
    "Faire revenir bœuf, oignon, tomate et chair d'aubergine.",
    "Farcir les aubergines du mélange.",
    "Enfourner 20 min avec parmesan."
  ] },
{ id:90, nom:"Salade de pâtes complètes au poulet", emoji:"🥗", temps:20, portions:2, cal:344, proteines:38, glucides:24.5, lipides:9.6, fibres:4.7,
  ingredients:[
    {"id":"pates_completes", "qty":180},
    {"id":"poulet_blanc", "qty":280},
    {"id":"tomate", "qty":140},
    {"id":"concombre", "qty":120},
    {"id":"huile_olive", "qty":12}
  ],
  instructions:[
    "Cuire les pâtes complètes, refroidir.",
    "Griller le poulet et couper en dés.",
    "Mélanger avec tomate et concombre.",
    "Assaisonner d'huile d'olive."
  ] },
{ id:91, nom:"Filet de cabillaud, purée de chou-fleur", emoji:"🐟", temps:30, portions:2, cal:182, proteines:33.9, glucides:5.9, lipides:1.7, fibres:3.4,
  ingredients:[
    {"id":"cabillaud", "qty":340},
    {"id":"chou_fleur", "qty":300},
    {"id":"ail", "qty":8},
    {"id":"citron", "qty":20}
  ],
  instructions:[
    "Cuire le chou-fleur à l'eau 15 min.",
    "Mixer avec une pointe d'ail en purée.",
    "Cuire le cabillaud à la poêle.",
    "Servir avec la purée et un trait de citron."
  ] },
{ id:92, nom:"Poêlée tofu, champignons et soja", emoji:"⬜", temps:20, portions:2, cal:215, proteines:23.5, glucides:6.9, lipides:12.3, fibres:2.2,
  ingredients:[
    {"id":"tofu", "qty":300},
    {"id":"champignon", "qty":200},
    {"id":"sauce_soja", "qty":18},
    {"id":"ail", "qty":10}
  ],
  instructions:[
    "Saisir le tofu en dés.",
    "Ajouter champignons et ail.",
    "Cuire 8 min à feu moyen.",
    "Déglacer à la sauce soja."
  ] },
{ id:93, nom:"Pita poulet, crudités et yaourt", emoji:"🌯", temps:15, portions:1, cal:422, proteines:46.1, glucides:44.4, lipides:5.1, fibres:2.8,
  ingredients:[
    {"id":"poulet_blanc", "qty":160},
    {"id":"pain_pita", "qty":70},
    {"id":"tomate", "qty":60},
    {"id":"concombre", "qty":60},
    {"id":"yaourt_nature", "qty":50}
  ],
  instructions:[
    "Griller le poulet émincé.",
    "Garnir le pain pita de crudités.",
    "Ajouter le poulet.",
    "Napper d'un peu de sauce yaourt."
  ] },
{ id:94, nom:"Filet de dinde sauce tomate-basilic", emoji:"🦃", temps:25, portions:2, cal:221, proteines:44.6, glucides:5.1, lipides:2, fibres:1.4,
  ingredients:[
    {"id":"dinde_blanc", "qty":360},
    {"id":"tomate", "qty":200},
    {"id":"basilic", "qty":10},
    {"id":"ail", "qty":10}
  ],
  instructions:[
    "Saisir les filets de dinde.",
    "Ajouter tomate concassée et ail.",
    "Mijoter 12 min.",
    "Parsemer de basilic frais."
  ] },
{ id:95, nom:"Crevettes, courgette et citron au four", emoji:"🍤", temps:20, portions:2, cal:175, proteines:33.1, glucides:5.8, lipides:1.8, fibres:1.6,
  ingredients:[
    {"id":"crevettes", "qty":300},
    {"id":"courgette", "qty":200},
    {"id":"citron", "qty":25},
    {"id":"ail", "qty":10}
  ],
  instructions:[
    "Disposer crevettes et courgettes sur plaque.",
    "Arroser d'huile, ail et citron.",
    "Enfourner 12 min à 200°C.",
    "Servir chaud."
  ] },
{ id:96, nom:"Riz au thon et petits pois", emoji:"🍚", temps:20, portions:2, cal:276, proteines:29.1, glucides:35.2, lipides:1.9, fibres:2,
  ingredients:[
    {"id":"riz_blanc", "qty":180},
    {"id":"thon_boite", "qty":200},
    {"id":"oignon", "qty":60},
    {"id":"mais", "qty":80}
  ],
  instructions:[
    "Cuire le riz.",
    "Faire revenir l'oignon.",
    "Ajouter le thon émietté et le maïs.",
    "Mélanger avec le riz chaud."
  ] },
{ id:97, nom:"Steak de saumon, asperges et citron", emoji:"🐟", temps:20, portions:1, cal:462, proteines:36.7, glucides:2.8, lipides:31.5, fibres:0.7,
  ingredients:[
    {"id":"saumon", "qty":180},
    {"id":"citron", "qty":20},
    {"id":"huile_olive", "qty":8},
    {"id":"ail", "qty":8}
  ],
  instructions:[
    "Saisir le saumon côté peau 5 min.",
    "Retourner, ajouter ail.",
    "Cuire 3 min de plus.",
    "Arroser de citron avant de servir."
  ] },
{ id:98, nom:"Poulet, quinoa et légumes rôtis", emoji:"🍗", temps:35, portions:2, cal:404, proteines:46.9, glucides:23.9, lipides:11.8, fibres:4.5,
  ingredients:[
    {"id":"poulet_blanc", "qty":360},
    {"id":"quinoa", "qty":180},
    {"id":"courgette", "qty":140},
    {"id":"poivron", "qty":140},
    {"id":"huile_olive", "qty":14}
  ],
  instructions:[
    "Rôtir les légumes au four 20 min.",
    "Cuire le quinoa.",
    "Griller le poulet.",
    "Assembler le tout dans un bol."
  ] },
{ id:99, nom:"Velouté de carotte et gingembre", emoji:"🍲", temps:25, portions:3, cal:58, proteines:1.5, glucides:12, lipides:0.3, fibres:4,
  ingredients:[
    {"id":"carotte", "qty":360},
    {"id":"gingembre", "qty":20},
    {"id":"oignon", "qty":90}
  ],
  instructions:[
    "Faire revenir oignon et gingembre.",
    "Ajouter les carottes et de l'eau.",
    "Cuire 20 min jusqu'à tendreté.",
    "Mixer jusqu'à consistance lisse."
  ] },
{ id:100, nom:"Omelette thon et tomate", emoji:"🥚", temps:12, portions:1, cal:256, proteines:34.8, glucides:3.2, lipides:11.9, fibres:0.7,
  ingredients:[
    {"id":"oeuf", "qty":110},
    {"id":"thon_boite", "qty":80},
    {"id":"tomate", "qty":60}
  ],
  instructions:[
    "Battre les œufs.",
    "Ajouter le thon émietté et la tomate en dés.",
    "Cuire à la poêle 4-5 min.",
    "Plier et servir."
  ] },
{ id:101, nom:"Bol de riz complet, œuf et avocat", emoji:"🍚", temps:20, portions:1, cal:381, proteines:13.6, glucides:37.3, lipides:19, fibres:8.1,
  ingredients:[
    {"id":"riz_complet", "qty":150},
    {"id":"oeuf", "qty":55},
    {"id":"avocat", "qty":80},
    {"id":"sauce_soja", "qty":10}
  ],
  instructions:[
    "Cuire le riz complet.",
    "Faire un œuf au plat ou poché.",
    "Couper l'avocat en lamelles.",
    "Assembler dans un bol, napper de sauce soja."
  ] },
{ id:102, nom:"Poulet au four, citron et romarin", emoji:"🍗", temps:35, portions:2, cal:279, proteines:41.9, glucides:2.3, lipides:9.8, fibres:0.7,
  ingredients:[
    {"id":"poulet_blanc", "qty":360},
    {"id":"citron", "qty":40},
    {"id":"ail", "qty":12},
    {"id":"huile_olive", "qty":14}
  ],
  instructions:[
    "Disposer le poulet avec rondelles de citron et ail.",
    "Arroser d'huile d'olive.",
    "Enfourner 25 min à 200°C.",
    "Servir avec le jus de cuisson."
  ] },
{ id:103, nom:"Galette de quinoa et légumes", emoji:"🌾", temps:25, portions:2, cal:206, proteines:11.7, glucides:23.2, lipides:7.3, fibres:4.1,
  ingredients:[
    {"id":"quinoa", "qty":180},
    {"id":"oeuf", "qty":110},
    {"id":"carotte", "qty":100},
    {"id":"persil", "qty":8}
  ],
  instructions:[
    "Cuire le quinoa et laisser refroidir.",
    "Mélanger avec œuf battu, carotte râpée et persil.",
    "Former des galettes.",
    "Cuire à la poêle 4 min par face."
  ] },
{ id:104, nom:"Filet de bœuf, champignons sauce légère", emoji:"🥩", temps:20, portions:1, cal:339, proteines:47.5, glucides:7.1, lipides:12.7, fibres:1.4,
  ingredients:[
    {"id":"filet_boeuf", "qty":180},
    {"id":"champignon", "qty":120},
    {"id":"yaourt_nature", "qty":50},
    {"id":"ail", "qty":8}
  ],
  instructions:[
    "Saisir le filet de bœuf à la poêle.",
    "Réserver, faire revenir champignons et ail.",
    "Ajouter le yaourt hors du feu.",
    "Napper le bœuf de cette sauce."
  ] },
{ id:105, nom:"Crevettes au curry et lait de coco léger", emoji:"🍤", temps:20, portions:2, cal:199, proteines:34.8, glucides:7.4, lipides:3, fibres:1.6,
  ingredients:[
    {"id":"crevettes", "qty":320},
    {"id":"curry_poudre", "qty":6},
    {"id":"lait_amande", "qty":160},
    {"id":"oignon", "qty":60},
    {"id":"coriandre", "qty":8}
  ],
  instructions:[
    "Faire revenir l'oignon.",
    "Ajouter curry et lait d'amande.",
    "Ajouter les crevettes, cuire 5 min.",
    "Parsemer de coriandre."
  ] },
{ id:106, nom:"Saumon fumé, avocat et œuf dur", emoji:"🥗", temps:10, portions:1, cal:446, proteines:35.7, glucides:3, lipides:31.3, fibres:7.1,
  ingredients:[
    {"id":"saumon_fume", "qty":120},
    {"id":"avocat", "qty":100},
    {"id":"oeuf", "qty":55},
    {"id":"citron", "qty":15}
  ],
  instructions:[
    "Faire cuire l'œuf dur 9 min.",
    "Couper avocat et saumon fumé.",
    "Disposer joliment dans une assiette.",
    "Assaisonner de citron."
  ] },
{ id:107, nom:"Poulet au four mariné yaourt-curry", emoji:"🍗", temps:35, portions:2, cal:254, proteines:44.2, glucides:5.5, lipides:4.7, fibres:1.4,
  ingredients:[
    {"id":"poulet_blanc", "qty":360},
    {"id":"yaourt_nature", "qty":100},
    {"id":"curry_poudre", "qty":6},
    {"id":"citron", "qty":20},
    {"id":"ail", "qty":10}
  ],
  instructions:[
    "Mariner le poulet dans yaourt, curry, citron et ail 20 min (ou plus).",
    "Disposer sur plaque.",
    "Enfourner 25 min à 200°C.",
    "Servir chaud."
  ] },
{ id:108, nom:"Riz, pois chiches et épices douces", emoji:"🍚", temps:25, portions:2, cal:320, proteines:12.1, glucides:59, lipides:3.8, fibres:10,
  ingredients:[
    {"id":"riz_blanc", "qty":180},
    {"id":"pois_chiches", "qty":220},
    {"id":"cumin", "qty":4},
    {"id":"paprika", "qty":3},
    {"id":"oignon", "qty":60}
  ],
  instructions:[
    "Cuire le riz.",
    "Faire revenir l'oignon avec cumin et paprika.",
    "Ajouter les pois chiches.",
    "Mélanger avec le riz chaud."
  ] },
{ id:109, nom:"Brochettes de dinde et légumes au four", emoji:"🍢", temps:30, portions:2, cal:261, proteines:40.2, glucides:5.7, lipides:8.1, fibres:2.2,
  ingredients:[
    {"id":"dinde_blanc", "qty":320},
    {"id":"poivron", "qty":160},
    {"id":"courgette", "qty":160},
    {"id":"huile_olive", "qty":12}
  ],
  instructions:[
    "Couper dinde et légumes en cubes.",
    "Enfiler sur brochettes en alternant.",
    "Arroser d'huile d'olive.",
    "Cuire au four 20 min à 200°C en tournant."
  ] },
{ id:110, nom:"Soupe miso au tofu et champignons", emoji:"🍲", temps:20, portions:2, cal:145, proteines:16, glucides:4.9, lipides:8.3, fibres:1.6,
  ingredients:[
    {"id":"tofu", "qty":200},
    {"id":"champignon", "qty":150},
    {"id":"sauce_soja", "qty":16},
    {"id":"gingembre", "qty":10}
  ],
  instructions:[
    "Faire chauffer un bouillon avec gingembre.",
    "Ajouter le tofu en dés et champignons.",
    "Cuire 8 min.",
    "Ajouter un peu de sauce soja avant de servir."
  ] },
{ id:111, nom:"Salade de boulgour, poulet et grenade", emoji:"🥗", temps:20, portions:2, cal:237, proteines:35.2, glucides:17.8, lipides:2.4, fibres:4.6,
  ingredients:[
    {"id":"boulgour", "qty":180},
    {"id":"poulet_blanc", "qty":280},
    {"id":"citron", "qty":25},
    {"id":"persil", "qty":10}
  ],
  instructions:[
    "Cuire le boulgour.",
    "Griller le poulet et couper en dés.",
    "Mélanger avec persil et citron.",
    "Servir tiède ou froid."
  ] },
{ id:112, nom:"Cabillaud sauce vierge tomate-basilic", emoji:"🐟", temps:20, portions:2, cal:215, proteines:31.7, glucides:4, lipides:7.5, fibres:1.6,
  ingredients:[
    {"id":"cabillaud", "qty":340},
    {"id":"tomate", "qty":200},
    {"id":"basilic", "qty":10},
    {"id":"huile_olive", "qty":12},
    {"id":"citron", "qty":20}
  ],
  instructions:[
    "Cuire le cabillaud à la poêle ou vapeur.",
    "Préparer une sauce vierge avec tomate en dés, basilic, huile et citron.",
    "Napper le poisson de cette sauce.",
    "Servir frais ou tiède."
  ] },
{ id:113, nom:"Poêlée de dinde, haricots verts et amandes", emoji:"🦃", temps:20, portions:2, cal:262, proteines:42.6, glucides:6.8, lipides:6.8, fibres:4.1,
  ingredients:[
    {"id":"dinde_blanc", "qty":320},
    {"id":"haricot_vert", "qty":200},
    {"id":"amandes", "qty":20},
    {"id":"ail", "qty":10}
  ],
  instructions:[
    "Sauter la dinde en lanières.",
    "Ajouter haricots verts et ail.",
    "Cuire 8 min.",
    "Parsemer d'amandes effilées grillées."
  ] },
{ id:114, nom:"Riz complet aux légumes et œuf au plat", emoji:"🍚", temps:20, portions:1, cal:295, proteines:12.7, glucides:44.3, lipides:7.4, fibres:6.3,
  ingredients:[
    {"id":"riz_complet", "qty":150},
    {"id":"oeuf", "qty":55},
    {"id":"carotte", "qty":80},
    {"id":"poivron", "qty":80}
  ],
  instructions:[
    "Cuire le riz complet.",
    "Sauter carotte et poivron.",
    "Cuire un œuf au plat.",
    "Assembler dans un bol."
  ] },
{ id:115, nom:"Salade de concombre, feta light et menthe", emoji:"🥗", temps:10, portions:1, cal:178, proteines:18.5, glucides:4.7, lipides:9.8, fibres:1,
  ingredients:[
    {"id":"concombre", "qty":120},
    {"id":"mozzarella_light", "qty":80},
    {"id":"citron", "qty":15}
  ],
  instructions:[
    "Couper le concombre en rondelles.",
    "Émietter le fromage léger dessus.",
    "Assaisonner au citron et huile d'olive.",
    "Servir frais."
  ] },
{ id:116, nom:"Poulet effiloché à la mexicaine", emoji:"🍗", temps:35, portions:2, cal:247, proteines:43.3, glucides:8.3, lipides:3.6, fibres:2.7,
  ingredients:[
    {"id":"poulet_blanc", "qty":360},
    {"id":"tomate", "qty":200},
    {"id":"paprika", "qty":4},
    {"id":"cumin", "qty":4},
    {"id":"oignon", "qty":70}
  ],
  instructions:[
    "Cuire le poulet entier ou en morceaux dans un bouillon épicé 25 min.",
    "Effilocher à la fourchette.",
    "Faire revenir avec tomate, paprika et cumin.",
    "Servir chaud."
  ] },
{ id:117, nom:"Filet de saumon, lentilles et persillade citronnée", emoji:"🐟", temps:30, portions:2, cal:527, proteines:47.1, glucides:30, lipides:22.9, fibres:11.6,
  ingredients:[
    {"id":"saumon", "qty":340},
    {"id":"lentilles_vertes", "qty":280},
    {"id":"persil", "qty":10},
    {"id":"citron", "qty":20},
    {"id":"ail", "qty":10}
  ],
  instructions:[
    "Cuire les lentilles 20 min.",
    "Cuire le saumon à la poêle ou au four.",
    "Préparer une persillade citronnée.",
    "Servir le saumon sur les lentilles, nappé de persillade."
  ] },
{ id:118, nom:"Wrap dinde, houmous et crudités", emoji:"🌮", temps:15, portions:1, cal:451, proteines:47.7, glucides:36.8, lipides:11.6, fibres:5.6,
  ingredients:[
    {"id":"dinde_blanc", "qty":160},
    {"id":"tortilla_ble", "qty":60},
    {"id":"houmous", "qty":50},
    {"id":"salade_verte", "qty":40},
    {"id":"tomate", "qty":50}
  ],
  instructions:[
    "Mixer les pois chiches en houmous simple (avec un peu de citron et huile).",
    "Griller la dinde émincée.",
    "Tartiner la tortilla de houmous.",
    "Garnir de dinde et crudités, rouler."
  ] },
{ id:119, nom:"Poêlée de chou-fleur et bœuf épicé", emoji:"🥦", temps:25, portions:2, cal:253, proteines:35.1, glucides:7, lipides:8.2, fibres:3.8,
  ingredients:[
    {"id":"chou_fleur", "qty":300},
    {"id":"boeuf_hache_5", "qty":300},
    {"id":"paprika", "qty":4},
    {"id":"ail", "qty":10}
  ],
  instructions:[
    "Faire revenir le bœuf haché avec ail.",
    "Ajouter le chou-fleur en petits bouquets.",
    "Saupoudrer de paprika.",
    "Cuire 12 min à couvert."
  ] },
{ id:120, nom:"Saumon, quinoa et épinards citronnés", emoji:"🐟", temps:25, portions:2, cal:483, proteines:40.4, glucides:20.6, lipides:24.2, fibres:4.6,
  ingredients:[
    {"id":"saumon", "qty":340},
    {"id":"quinoa", "qty":180},
    {"id":"epinard", "qty":160},
    {"id":"citron", "qty":25}
  ],
  instructions:[
    "Cuire le quinoa.",
    "Cuire le saumon à la poêle.",
    "Faire tomber les épinards avec citron.",
    "Assembler le tout dans une assiette."
  ] },
{ id:121, nom:"Brochettes de crevettes et citron vert", emoji:"🍢", temps:20, portions:2, cal:163, proteines:32.1, glucides:4.2, lipides:1.7, fibres:1,
  ingredients:[
    {"id":"crevettes", "qty":300},
    {"id":"citron_vert", "qty":30},
    {"id":"ail", "qty":10},
    {"id":"paprika", "qty":3}
  ],
  instructions:[
    "Mariner les crevettes au citron, ail et paprika.",
    "Enfiler sur brochettes.",
    "Griller 2-3 min par face.",
    "Servir avec un quartier de citron."
  ] },
{ id:122, nom:"Pâtes complètes, tomate et mozzarella light", emoji:"🍝", temps:20, portions:2, cal:273, proteines:21.3, glucides:26.2, lipides:9.9, fibres:5,
  ingredients:[
    {"id":"pates_completes", "qty":180},
    {"id":"tomate", "qty":220},
    {"id":"mozzarella_light", "qty":140},
    {"id":"basilic", "qty":10}
  ],
  instructions:[
    "Cuire les pâtes complètes.",
    "Préparer une sauce tomate simple à l'ail.",
    "Mélanger avec les pâtes.",
    "Ajouter mozzarella et basilic frais."
  ] },
{ id:123, nom:"Filet de poulet, sauce champignons-moutarde", emoji:"🍗", temps:25, portions:2, cal:254, proteines:46, glucides:4.2, lipides:4.5, fibres:0.9,
  ingredients:[
    {"id":"poulet_blanc", "qty":360},
    {"id":"champignon", "qty":180},
    {"id":"moutarde", "qty":16},
    {"id":"yaourt_nature", "qty":80}
  ],
  instructions:[
    "Saisir le poulet, réserver.",
    "Faire revenir les champignons.",
    "Ajouter moutarde et yaourt hors du feu.",
    "Remettre le poulet, napper de sauce."
  ] },
{ id:124, nom:"Salade de lentilles, carotte et cumin", emoji:"🥗", temps:15, portions:2, cal:189, proteines:12.9, glucides:32.8, lipides:1.3, fibres:13,
  ingredients:[
    {"id":"lentilles_vertes", "qty":260},
    {"id":"carotte", "qty":160},
    {"id":"cumin", "qty":4},
    {"id":"citron", "qty":20}
  ],
  instructions:[
    "Mélanger lentilles cuites et carotte râpée.",
    "Assaisonner de cumin et citron.",
    "Laisser mariner 10 min au frais.",
    "Servir frais."
  ] },
{ id:125, nom:"Cabillaud pané aux amandes", emoji:"🐟", temps:25, portions:2, cal:268, proteines:37.4, glucides:1.9, lipides:11.5, fibres:2.2,
  ingredients:[
    {"id":"cabillaud", "qty":340},
    {"id":"amandes", "qty":30},
    {"id":"oeuf", "qty":55},
    {"id":"citron", "qty":20}
  ],
  instructions:[
    "Concasser grossièrement les amandes.",
    "Tremper le cabillaud dans l'œuf battu puis les amandes.",
    "Cuire à la poêle 4 min par face.",
    "Servir avec un trait de citron."
  ] },
{ id:126, nom:"Riz, dinde et légumes sauce curry doux", emoji:"🍚", temps:25, portions:2, cal:325, proteines:40, glucides:33.5, lipides:2.5, fibres:4.1,
  ingredients:[
    {"id":"riz_blanc", "qty":180},
    {"id":"dinde_blanc", "qty":300},
    {"id":"curry_poudre", "qty":6},
    {"id":"carotte", "qty":120},
    {"id":"poivron", "qty":120}
  ],
  instructions:[
    "Cuire le riz.",
    "Sauter la dinde en dés.",
    "Ajouter carotte, poivron et curry.",
    "Mijoter 10 min, servir sur le riz."
  ] },
{ id:127, nom:"Salade tiède de quinoa, courgette et feta light", emoji:"🥗", temps:20, portions:2, cal:247, proteines:18.4, glucides:22.9, lipides:9.2, fibres:3.9,
  ingredients:[
    {"id":"quinoa", "qty":180},
    {"id":"courgette", "qty":200},
    {"id":"mozzarella_light", "qty":120},
    {"id":"citron", "qty":20}
  ],
  instructions:[
    "Cuire le quinoa.",
    "Griller la courgette en tranches.",
    "Mélanger avec le fromage et le quinoa.",
    "Assaisonner au citron."
  ] },
{ id:128, nom:"Filet de bœuf grillé, salsa tomate-oignon", emoji:"🥩", temps:20, portions:1, cal:307, proteines:43, glucides:7.3, lipides:11.1, fibres:2.5,
  ingredients:[
    {"id":"filet_boeuf", "qty":180},
    {"id":"tomate", "qty":100},
    {"id":"oignon", "qty":40},
    {"id":"coriandre", "qty":6},
    {"id":"citron", "qty":15}
  ],
  instructions:[
    "Griller le steak à la cuisson désirée.",
    "Préparer une salsa avec tomate, oignon, coriandre et citron.",
    "Laisser reposer la viande 3 min.",
    "Servir nappé de salsa."
  ] },
{ id:129, nom:"Omelette aux poivrons et oignons", emoji:"🥚", temps:15, portions:1, cal:196, proteines:15.7, glucides:8.8, lipides:11.3, fibres:2.2,
  ingredients:[
    {"id":"oeuf", "qty":110},
    {"id":"poivron", "qty":80},
    {"id":"oignon", "qty":50}
  ],
  instructions:[
    "Faire revenir poivron et oignon émincés.",
    "Battre les œufs et verser dans la poêle.",
    "Cuire à feu doux 5 min.",
    "Plier et servir."
  ] },
{ id:130, nom:"Saumon, riz complet et brocolis vapeur", emoji:"🐟", temps:25, portions:2, cal:491, proteines:39.3, glucides:25, lipides:23.4, fibres:4.5,
  ingredients:[
    {"id":"saumon", "qty":340},
    {"id":"riz_complet", "qty":180},
    {"id":"brocoli", "qty":200},
    {"id":"citron", "qty":20}
  ],
  instructions:[
    "Cuire le riz complet.",
    "Cuire le saumon à la poêle ou au four.",
    "Cuire le brocoli à la vapeur.",
    "Assembler avec un trait de citron."
  ] },
{ id:131, nom:"Poulet sauce tomate-basilic et pâtes", emoji:"🍗", temps:25, portions:2, cal:307, proteines:40.7, glucides:25.8, lipides:3.8, fibres:5,
  ingredients:[
    {"id":"poulet_blanc", "qty":300},
    {"id":"tomate", "qty":200},
    {"id":"basilic", "qty":10},
    {"id":"pates_completes", "qty":180},
    {"id":"ail", "qty":10}
  ],
  instructions:[
    "Cuire les pâtes complètes.",
    "Saisir le poulet en dés.",
    "Ajouter tomate, ail et basilic, mijoter 10 min.",
    "Mélanger avec les pâtes."
  ] },
{ id:132, nom:"Bol petit-déjeuner protéiné complet", emoji:"🥣", temps:10, portions:1, cal:356, proteines:24.2, glucides:49.4, lipides:6.5, fibres:10.2,
  ingredients:[
    {"id":"skyr", "qty":150},
    {"id":"flocons_avoine", "qty":40},
    {"id":"fruits_rouges_mix", "qty":80},
    {"id":"graines_chia", "qty":10},
    {"id":"miel", "qty":10}
  ],
  instructions:[
    "Mélanger le skyr et les flocons d'avoine.",
    "Laisser reposer 5 min si possible.",
    "Ajouter les fruits rouges et chia.",
    "Terminer avec un filet de miel."
  ] },
{ id:133, nom:"Filet de dinde, purée de pois chiches citronnée", emoji:"🦃", temps:25, portions:2, cal:390, proteines:50.8, glucides:34.2, lipides:4.9, fibres:9.6,
  ingredients:[
    {"id":"dinde_blanc", "qty":340},
    {"id":"pois_chiches", "qty":240},
    {"id":"citron", "qty":25},
    {"id":"ail", "qty":10}
  ],
  instructions:[
    "Cuire la dinde à la poêle.",
    "Mixer les pois chiches avec ail et citron en purée.",
    "Réchauffer la purée si besoin.",
    "Servir la dinde sur la purée."
  ] },
{ id:134, nom:"Salade de thon, pois chiches et poivron", emoji:"🥗", temps:10, portions:1, cal:425, proteines:47.9, glucides:44.8, lipides:5.6, fibres:13.3,
  ingredients:[
    {"id":"thon_boite", "qty":140},
    {"id":"pois_chiches", "qty":150},
    {"id":"poivron", "qty":80},
    {"id":"citron", "qty":20}
  ],
  instructions:[
    "Mélanger thon émietté et pois chiches.",
    "Ajouter le poivron coupé en dés.",
    "Assaisonner au citron et huile d'olive.",
    "Servir frais."
  ] },
{ id:135, nom:"Poêlée de crevettes, courgette et ail", emoji:"🍤", temps:15, portions:2, cal:176, proteines:33.2, glucides:5.9, lipides:1.8, fibres:1.4,
  ingredients:[
    {"id":"crevettes", "qty":300},
    {"id":"courgette", "qty":200},
    {"id":"ail", "qty":12},
    {"id":"persil", "qty":8}
  ],
  instructions:[
    "Faire revenir l'ail dans l'huile.",
    "Ajouter la courgette en dés, cuire 5 min.",
    "Ajouter les crevettes, cuire 3 min.",
    "Parsemer de persil."
  ] },
{ id:136, nom:"Burger de poulet healthy", emoji:"🍔", temps:25, portions:2, cal:478, proteines:45.4, glucides:42.3, lipides:12.5, fibres:5.8,
  ingredients:[
    {"id":"poulet_blanc", "qty":320},
    {"id":"pain_burger", "qty":160},
    {"id":"salade_verte", "qty":50},
    {"id":"tomate", "qty":60},
    {"id":"avocat", "qty":80}
  ],
  instructions:[
    "Griller le filet de poulet entier.",
    "Toaster le pain complet.",
    "Garnir de salade, tomate et avocat.",
    "Assembler le burger."
  ] },
{ id:137, nom:"Velouté de brocoli protéiné", emoji:"🍲", temps:25, portions:2, cal:98, proteines:9.3, glucides:12.3, lipides:0.8, fibres:4.6,
  ingredients:[
    {"id":"brocoli", "qty":300},
    {"id":"oignon", "qty":70},
    {"id":"fromage_blanc_0", "qty":120},
    {"id":"ail", "qty":8}
  ],
  instructions:[
    "Faire revenir oignon et ail.",
    "Ajouter le brocoli et de l'eau, cuire 15 min.",
    "Mixer jusqu'à consistance lisse.",
    "Ajouter le fromage blanc hors du feu."
  ] },
{ id:138, nom:"Filet de poulet, sauce tomate épicée", emoji:"🍗", temps:25, portions:2, cal:245, proteines:43.2, glucides:8.4, lipides:3.2, fibres:2.5,
  ingredients:[
    {"id":"poulet_blanc", "qty":360},
    {"id":"tomate", "qty":200},
    {"id":"paprika", "qty":4},
    {"id":"ail", "qty":10},
    {"id":"oignon", "qty":60}
  ],
  instructions:[
    "Saisir le poulet, réserver.",
    "Faire revenir oignon et ail.",
    "Ajouter tomate concassée et paprika.",
    "Remettre le poulet, mijoter 10 min."
  ] },
{ id:139, nom:"Salade de saumon fumé et pomme de terre", emoji:"🥗", temps:25, portions:2, cal:278, proteines:23.1, glucides:27.4, lipides:8.3, fibres:3.9,
  ingredients:[
    {"id":"saumon_fume", "qty":180},
    {"id":"pomme_terre", "qty":300},
    {"id":"citron", "qty":20},
    {"id":"oignon", "qty":40}
  ],
  instructions:[
    "Cuire les pommes de terre à l'eau.",
    "Couper en rondelles, laisser tiédir.",
    "Ajouter le saumon fumé et l'oignon émincé.",
    "Assaisonner au citron."
  ] },
{ id:140, nom:"Tofu croustillant, riz et légumes vapeur", emoji:"⬜", temps:25, portions:2, cal:347, proteines:25.3, glucides:35.4, lipides:12.7, fibres:4.9,
  ingredients:[
    {"id":"tofu", "qty":300},
    {"id":"riz_blanc", "qty":180},
    {"id":"brocoli", "qty":160},
    {"id":"carotte", "qty":100},
    {"id":"sauce_soja", "qty":16}
  ],
  instructions:[
    "Cuire le riz.",
    "Saisir le tofu jusqu'à coloration.",
    "Cuire brocoli et carotte à la vapeur.",
    "Assembler avec un trait de sauce soja."
  ] },
{ id:141, nom:"Steak de bœuf, salade et pomme de terre vapeur", emoji:"🥩", temps:25, portions:1, cal:456, proteines:44.4, glucides:35.2, lipides:14.7, fibres:5.2,
  ingredients:[
    {"id":"steak_boeuf", "qty":180},
    {"id":"pomme_terre", "qty":200},
    {"id":"salade_verte", "qty":60}
  ],
  instructions:[
    "Cuire les pommes de terre à la vapeur 20 min.",
    "Griller le steak selon cuisson désirée.",
    "Préparer une petite salade verte.",
    "Servir l'ensemble."
  ] },
{ id:142, nom:"Curry de crevettes et épinards", emoji:"🍛", temps:20, portions:2, cal:193, proteines:34.6, glucides:5.9, lipides:3, fibres:2.8,
  ingredients:[
    {"id":"crevettes", "qty":300},
    {"id":"epinard", "qty":160},
    {"id":"curry_poudre", "qty":6},
    {"id":"lait_amande", "qty":140}
  ],
  instructions:[
    "Faire chauffer le curry avec le lait d'amande.",
    "Ajouter les épinards, laisser réduire.",
    "Ajouter les crevettes, cuire 4 min.",
    "Servir chaud."
  ] },
{ id:143, nom:"Filet de poulet farci aux épinards et fromage", emoji:"🍗", temps:35, portions:2, cal:253, proteines:47.8, glucides:4.7, lipides:3.1, fibres:1.9,
  ingredients:[
    {"id":"poulet_blanc", "qty":360},
    {"id":"epinard", "qty":160},
    {"id":"fromage_blanc_0", "qty":100},
    {"id":"ail", "qty":10}
  ],
  instructions:[
    "Inciser le filet de poulet pour créer une poche.",
    "Mélanger épinards cuits, fromage blanc et ail.",
    "Farcir le poulet et fermer avec un pic.",
    "Cuire au four 25 min à 190°C."
  ] },
{ id:144, nom:"Riz, thon et avocat façon poke bowl", emoji:"🍚", temps:15, portions:1, cal:469, proteines:37, glucides:45.6, lipides:13.7, fibres:6.3,
  ingredients:[
    {"id":"riz_blanc", "qty":150},
    {"id":"thon_boite", "qty":120},
    {"id":"avocat", "qty":80},
    {"id":"sauce_soja", "qty":12},
    {"id":"concombre", "qty":60}
  ],
  instructions:[
    "Cuire le riz et laisser tiédir.",
    "Couper thon, avocat et concombre en dés.",
    "Disposer sur le riz.",
    "Arroser de sauce soja."
  ] },
{ id:145, nom:"Poêlée de dinde, chou-fleur et curry", emoji:"🦃", temps:25, portions:2, cal:221, proteines:41.5, glucides:7.3, lipides:2.4, fibres:3.9,
  ingredients:[
    {"id":"dinde_blanc", "qty":320},
    {"id":"chou_fleur", "qty":240},
    {"id":"curry_poudre", "qty":6},
    {"id":"oignon", "qty":60}
  ],
  instructions:[
    "Faire revenir l'oignon.",
    "Ajouter la dinde en dés, cuire 5 min.",
    "Ajouter le chou-fleur et le curry.",
    "Mijoter 12 min à couvert."
  ] },
{ id:146, nom:"Salade de pâtes, thon et tomates cerises", emoji:"🥗", temps:20, portions:2, cal:239, proteines:30.7, glucides:24.1, lipides:2.4, fibres:4.6,
  ingredients:[
    {"id":"pates_completes", "qty":180},
    {"id":"thon_boite", "qty":200},
    {"id":"tomate_cerise", "qty":160},
    {"id":"basilic", "qty":10}
  ],
  instructions:[
    "Cuire les pâtes complètes, refroidir.",
    "Mélanger avec thon émietté et tomates.",
    "Ajouter basilic frais.",
    "Assaisonner d'huile d'olive."
  ] },
{ id:147, nom:"Filet de cabillaud, riz et sauce citron-aneth", emoji:"🐟", temps:25, portions:2, cal:261, proteines:33.3, glucides:25.9, lipides:1.5, fibres:0.9,
  ingredients:[
    {"id":"cabillaud", "qty":340},
    {"id":"riz_blanc", "qty":180},
    {"id":"citron", "qty":25},
    {"id":"persil", "qty":10}
  ],
  instructions:[
    "Cuire le riz.",
    "Cuire le cabillaud à la vapeur ou poêle.",
    "Préparer une sauce légère citron-persil.",
    "Servir le poisson sur le riz, nappé de sauce."
  ] },
{ id:148, nom:"Bœuf émincé, poivrons et riz complet", emoji:"🥩", temps:25, portions:2, cal:374, proteines:37, glucides:25.3, lipides:13.2, fibres:3.2,
  ingredients:[
    {"id":"steak_boeuf", "qty":300},
    {"id":"poivron", "qty":180},
    {"id":"riz_complet", "qty":180},
    {"id":"sauce_soja", "qty":16}
  ],
  instructions:[
    "Cuire le riz complet.",
    "Émincer et saisir le bœuf à feu vif.",
    "Ajouter les poivrons, cuire 5 min.",
    "Déglacer à la sauce soja, servir sur le riz."
  ] },
{ id:149, nom:"Galette d'avoine au thon et persil", emoji:"🥣", temps:20, portions:2, cal:318, proteines:32.5, glucides:24.8, lipides:9.1, fibres:4.1,
  ingredients:[
    {"id":"flocons_avoine", "qty":80},
    {"id":"thon_boite", "qty":160},
    {"id":"oeuf", "qty":110},
    {"id":"persil", "qty":8}
  ],
  instructions:[
    "Mélanger flocons d'avoine, thon émietté et œuf.",
    "Ajouter le persil haché.",
    "Former des galettes.",
    "Cuire à la poêle 4 min par face."
  ] },
{ id:150, nom:"Poulet grillé, houmous maison et crudités", emoji:"🍗", temps:25, portions:2, cal:393, proteines:50.3, glucides:31.9, lipides:5.5, fibres:9.5,
  ingredients:[
    {"id":"poulet_blanc", "qty":360},
    {"id":"pois_chiches", "qty":200},
    {"id":"citron", "qty":20},
    {"id":"concombre", "qty":100},
    {"id":"carotte", "qty":100}
  ],
  instructions:[
    "Mixer pois chiches, citron et un peu d'huile en houmous.",
    "Griller le poulet.",
    "Préparer un assortiment de crudités.",
    "Servir le poulet avec houmous et crudités."
  ] },
{ id:151, nom:"Carbonara légère aux lardons de bœuf halal", emoji:"🍝", temps:20, portions:2, cal:393, proteines:29.7, glucides:22.7, lipides:21.2, fibres:3.7,
  ingredients:[
    {"id":"pates_completes", "qty":180},
    {"id":"lardons_boeuf", "qty":120},
    {"id":"oeuf", "qty":110},
    {"id":"parmesan", "qty":25},
    {"id":"ail", "qty":6}
  ],
  instructions:[
    "Cuire les pâtes complètes al dente.",
    "Faire revenir les lardons de bœuf halal à sec jusqu'à coloration.",
    "Battre les œufs avec le parmesan.",
    "Hors du feu, mélanger pâtes chaudes, lardons et préparation à l'œuf pour napper sans cuire l'œuf."
  ] },
{ id:152, nom:"Quiche sans pâte aux lardons de dinde et épinards", emoji:"🥧", temps:40, portions:4, cal:240, proteines:26.6, glucides:3.2, lipides:13.9, fibres:0.8,
  ingredients:[
    {"id":"lardons_dinde", "qty":200},
    {"id":"oeuf", "qty":220},
    {"id":"epinard", "qty":150},
    {"id":"fromage_blanc_0", "qty":150},
    {"id":"fromage_rape", "qty":50}
  ],
  instructions:[
    "Faire revenir les lardons de dinde et les épinards.",
    "Battre les œufs avec le fromage blanc et le fromage râpé.",
    "Mélanger avec les lardons et épinards.",
    "Verser dans un moule huilé, cuire 30 min à 180°C."
  ] },
{ id:153, nom:"Choucroute revisitée saucisse de volaille", emoji:"🥬", temps:40, portions:3, cal:255, proteines:24, glucides:12.5, lipides:13.1, fibres:6.1,
  ingredients:[
    {"id":"choucroute", "qty":600},
    {"id":"saucisse_volaille", "qty":240},
    {"id":"jambon_volaille", "qty":150},
    {"id":"oignon", "qty":60}
  ],
  instructions:[
    "Faire revenir l'oignon émincé.",
    "Ajouter la choucroute, laisser mijoter 20 min à couvert.",
    "Ajouter les saucisses de volaille et le jambon de volaille.",
    "Poursuivre la cuisson 15 min."
  ] },
{ id:154, nom:"Tartiflette légère au jambon de volaille", emoji:"🧀", temps:45, portions:3, cal:370, proteines:26.1, glucides:38.9, lipides:12.3, fibres:4.9,
  ingredients:[
    {"id":"pomme_terre", "qty":600},
    {"id":"jambon_volaille", "qty":180},
    {"id":"oignon", "qty":80},
    {"id":"fromage_blanc_20", "qty":150},
    {"id":"fromage_rape", "qty":80}
  ],
  instructions:[
    "Cuire les pommes de terre en rondelles à la vapeur 15 min.",
    "Faire revenir l'oignon et le jambon de volaille.",
    "Mélanger avec les pommes de terre et le fromage blanc.",
    "Gratiner au four avec le fromage râpé 15 min à 200°C."
  ] },
{ id:155, nom:"Pizza healthy au pepperoni de bœuf halal", emoji:"🍕", temps:25, portions:2, cal:484, proteines:29.1, glucides:42.9, lipides:22.4, fibres:2.5,
  ingredients:[
    {"id":"pain_pita", "qty":140},
    {"id":"tomate", "qty":120},
    {"id":"mozzarella_light", "qty":120},
    {"id":"pepperoni_boeuf", "qty":100},
    {"id":"basilic", "qty":5}
  ],
  instructions:[
    "Étaler une fine couche de tomate concassée sur les pains pita.",
    "Garnir de mozzarella et pepperoni de bœuf halal.",
    "Cuire au four 10 min à 220°C.",
    "Parsemer de basilic frais avant de servir."
  ] },
{ id:156, nom:"Pâtes carbonara version protéinée", emoji:"🍝", temps:20, portions:2, cal:383, proteines:35.8, glucides:25.9, lipides:16.2, fibres:4,
  ingredients:[
    {"id":"pates_completes", "qty":200},
    {"id":"lardons_dinde", "qty":140},
    {"id":"oeuf", "qty":110},
    {"id":"fromage_blanc_0", "qty":80},
    {"id":"parmesan", "qty":20}
  ],
  instructions:[
    "Cuire les pâtes complètes.",
    "Saisir les lardons de dinde.",
    "Mélanger œufs, fromage blanc et parmesan.",
    "Assembler hors du feu pour une sauce crémeuse sans trop de gras."
  ] },
{ id:157, nom:"Croque-monsieur léger au jambon de volaille", emoji:"🥪", temps:12, portions:1, cal:373, proteines:29.4, glucides:30.1, lipides:13.8, fibres:4.9,
  ingredients:[
    {"id":"pain_complet", "qty":70},
    {"id":"jambon_volaille", "qty":80},
    {"id":"fromage_rape", "qty":30},
    {"id":"moutarde", "qty":8}
  ],
  instructions:[
    "Tartiner le pain de moutarde.",
    "Garnir de jambon de volaille et fromage râpé.",
    "Passer au four ou à la poêle jusqu'à ce que le fromage fonde.",
    "Servir chaud."
  ] },
{ id:158, nom:"Lentilles, saucisse de bœuf halal et carottes", emoji:"🍲", temps:35, portions:2, cal:390, proteines:25.7, glucides:37, lipides:16.9, fibres:13.3,
  ingredients:[
    {"id":"lentilles_vertes", "qty":280},
    {"id":"saucisse_boeuf", "qty":160},
    {"id":"carotte", "qty":120},
    {"id":"oignon", "qty":60},
    {"id":"ail", "qty":6}
  ],
  instructions:[
    "Faire revenir oignon, ail et carottes.",
    "Ajouter les lentilles et couvrir d'eau, cuire 20 min.",
    "Saisir la saucisse de bœuf à part.",
    "Servir les lentilles avec la saucisse tranchée."
  ] },
{ id:159, nom:"Salade de pâtes au chorizo de bœuf halal", emoji:"🥗", temps:20, portions:2, cal:340, proteines:16.2, glucides:27.9, lipides:19.1, fibres:5.4,
  ingredients:[
    {"id":"pates_completes", "qty":200},
    {"id":"chorizo_boeuf", "qty":100},
    {"id":"tomate", "qty":120},
    {"id":"poivron", "qty":80},
    {"id":"huile_olive", "qty":10}
  ],
  instructions:[
    "Cuire les pâtes, laisser refroidir.",
    "Faire revenir légèrement le chorizo de bœuf halal pour le déglacer.",
    "Mélanger pâtes, tomate et poivron.",
    "Ajouter le chorizo, assaisonner d'huile d'olive."
  ] },
{ id:160, nom:"Wrap merguez et crudités", emoji:"🌮", temps:15, portions:2, cal:434, proteines:20.4, glucides:33.9, lipides:25, fibres:2.4,
  ingredients:[
    {"id":"tortilla_ble", "qty":120},
    {"id":"merguez", "qty":160},
    {"id":"salade_verte", "qty":60},
    {"id":"tomate", "qty":80},
    {"id":"yaourt_nature", "qty":60}
  ],
  instructions:[
    "Griller les merguez à la poêle ou au four.",
    "Garnir les tortillas de salade et tomate.",
    "Ajouter les merguez tranchées.",
    "Napper d'un peu de yaourt nature, rouler."
  ] },
{ id:161, nom:"Œufs au plat, bacon de dinde et avocat", emoji:"🍳", temps:12, portions:1, cal:492, proteines:32.9, glucides:17.7, lipides:31.4, fibres:7.8,
  ingredients:[
    {"id":"oeuf", "qty":110},
    {"id":"bacon_dinde", "qty":60},
    {"id":"avocat", "qty":80},
    {"id":"pain_complet", "qty":35}
  ],
  instructions:[
    "Cuire le bacon de dinde à la poêle jusqu'à coloration.",
    "Cuire les œufs au plat dans la même poêle.",
    "Toaster le pain complet, garnir d'avocat écrasé.",
    "Servir avec les œufs et le bacon."
  ] },
{ id:162, nom:"Riz cantonais au jambon de bœuf halal", emoji:"🍚", temps:20, portions:2, cal:318, proteines:25.3, glucides:33.5, lipides:8.8, fibres:3,
  ingredients:[
    {"id":"riz_blanc", "qty":180},
    {"id":"jambon_boeuf", "qty":140},
    {"id":"oeuf", "qty":110},
    {"id":"carotte", "qty":80},
    {"id":"petit_pois", "qty":60},
    {"id":"sauce_soja", "qty":12}
  ],
  instructions:[
    "Cuire le riz et laisser refroidir.",
    "Faire revenir carotte et petits pois.",
    "Ajouter œufs battus, mélanger, puis le jambon de bœuf en dés.",
    "Incorporer le riz, sauter 5 min, déglacer à la sauce soja."
  ] },
{ id:163, nom:"Galettes de pommes de terre au lardons de bœuf", emoji:"🥔", temps:30, portions:2, cal:329, proteines:20.5, glucides:31.7, lipides:13.8, fibres:4.1,
  ingredients:[
    {"id":"pomme_terre", "qty":360},
    {"id":"lardons_boeuf", "qty":120},
    {"id":"oeuf", "qty":55},
    {"id":"persil", "qty":6}
  ],
  instructions:[
    "Râper les pommes de terre, essorer.",
    "Mélanger avec œuf battu, lardons de bœuf et persil.",
    "Former des galettes.",
    "Cuire à la poêle 4-5 min par face."
  ] },
{ id:164, nom:"Sandwich club au poulet et bacon de dinde", emoji:"🥪", temps:15, portions:1, cal:447, proteines:47.2, glucides:35.7, lipides:10.7, fibres:6.6,
  ingredients:[
    {"id":"pain_complet", "qty":80},
    {"id":"poulet_blanc", "qty":120},
    {"id":"bacon_dinde", "qty":50},
    {"id":"salade_verte", "qty":30},
    {"id":"tomate", "qty":50}
  ],
  instructions:[
    "Griller le poulet et le bacon de dinde.",
    "Toaster le pain complet.",
    "Garnir de salade et tomate.",
    "Assembler en sandwich avec poulet et bacon."
  ] },
{ id:165, nom:"Pâtes à la sauce tomate et merguez émiettée", emoji:"🍝", temps:25, portions:2, cal:381, proteines:20.3, glucides:31.3, lipides:20.8, fibres:5.8,
  ingredients:[
    {"id":"pates_completes", "qty":200},
    {"id":"merguez", "qty":160},
    {"id":"tomate", "qty":200},
    {"id":"oignon", "qty":60},
    {"id":"ail", "qty":6}
  ],
  instructions:[
    "Émietter et faire revenir la merguez.",
    "Ajouter oignon, ail puis tomate concassée.",
    "Mijoter 12 min.",
    "Mélanger avec les pâtes cuites."
  ] },
{ id:166, nom:"Soupe de lentilles au jambon de volaille fumé", emoji:"🍲", temps:30, portions:3, cal:200, proteines:19.1, glucides:27.4, lipides:2.2, fibres:10.1,
  ingredients:[
    {"id":"lentilles_vertes", "qty":300},
    {"id":"jambon_volaille", "qty":150},
    {"id":"carotte", "qty":120},
    {"id":"oignon", "qty":80},
    {"id":"poireau", "qty":100}
  ],
  instructions:[
    "Faire revenir oignon, carotte et poireau.",
    "Ajouter les lentilles et couvrir d'eau, cuire 20 min.",
    "Ajouter le jambon de volaille coupé en dés.",
    "Mijoter 5 min de plus."
  ] },
{ id:167, nom:"Pâtes à la carbonara de courgette et lardons dinde", emoji:"🍝", temps:20, portions:2, cal:377, proteines:33.7, glucides:26.1, lipides:16.3, fibres:4.8,
  ingredients:[
    {"id":"pates_completes", "qty":200},
    {"id":"lardons_dinde", "qty":140},
    {"id":"courgette", "qty":150},
    {"id":"oeuf", "qty":110},
    {"id":"parmesan", "qty":20}
  ],
  instructions:[
    "Cuire les pâtes, ajouter la courgette en fin de cuisson.",
    "Saisir les lardons de dinde.",
    "Mélanger œufs et parmesan.",
    "Assembler hors du feu avec les pâtes et la courgette."
  ] },
{ id:168, nom:"Burger façon kebab maison", emoji:"🍔", temps:25, portions:2, cal:512, proteines:33.2, glucides:45.9, lipides:21.8, fibres:3.3,
  ingredients:[
    {"id":"pain_burger", "qty":160},
    {"id":"kebab_viande", "qty":240},
    {"id":"salade_verte", "qty":60},
    {"id":"tomate", "qty":80},
    {"id":"yaourt_nature", "qty":60}
  ],
  instructions:[
    "Faire chauffer la viande à kebab à la poêle.",
    "Toaster légèrement les pains.",
    "Garnir de salade, tomate et viande.",
    "Napper de sauce yaourt et refermer le burger."
  ] },
{ id:169, nom:"Œufs cocotte au jambon de bœuf et champignons", emoji:"🥚", temps:20, portions:1, cal:263, proteines:31.1, glucides:4.9, lipides:13.7, fibres:0.8,
  ingredients:[
    {"id":"oeuf", "qty":110},
    {"id":"jambon_boeuf", "qty":60},
    {"id":"champignon", "qty":80},
    {"id":"fromage_blanc_0", "qty":40}
  ],
  instructions:[
    "Faire revenir les champignons.",
    "Disposer dans un ramequin avec le jambon de bœuf en dés.",
    "Ajouter le fromage blanc puis casser les œufs.",
    "Cuire au four ou bain-marie 12 min."
  ] },
{ id:170, nom:"Riz pilaf, saucisse de volaille et poivrons", emoji:"🍚", temps:25, portions:2, cal:298, proteines:16.6, glucides:30.6, lipides:11.9, fibres:2.3,
  ingredients:[
    {"id":"riz_basmati", "qty":180},
    {"id":"saucisse_volaille", "qty":160},
    {"id":"poivron", "qty":120},
    {"id":"oignon", "qty":60},
    {"id":"paprika", "qty":2}
  ],
  instructions:[
    "Faire revenir l'oignon et le paprika.",
    "Ajouter le riz, nacrer 2 min, mouiller d'eau, cuire 15 min.",
    "Saisir la saucisse de volaille tranchée avec les poivrons.",
    "Mélanger avec le riz cuit."
  ] },
{ id:171, nom:"Salade César au poulet et bacon de dinde croustillant", emoji:"🥗", temps:15, portions:1, cal:392, proteines:53.4, glucides:4.5, lipides:17.2, fibres:1.3,
  ingredients:[
    {"id":"poulet_blanc", "qty":140},
    {"id":"bacon_dinde", "qty":50},
    {"id":"salade_verte", "qty":100},
    {"id":"parmesan", "qty":15},
    {"id":"yaourt_grec", "qty":50}
  ],
  instructions:[
    "Griller le poulet et couper en dés.",
    "Cuire le bacon de dinde jusqu'à le rendre croustillant.",
    "Préparer une sauce avec yaourt grec et parmesan.",
    "Mélanger tous les éléments avec la salade."
  ] },
{ id:172, nom:"Pâtes façon amatriciana sans porc", emoji:"🍝", temps:25, portions:2, cal:306, proteines:19.9, glucides:30, lipides:12.6, fibres:6.1,
  ingredients:[
    {"id":"pates_completes", "qty":200},
    {"id":"lardons_boeuf", "qty":120},
    {"id":"tomate", "qty":200},
    {"id":"oignon", "qty":60},
    {"id":"paprika", "qty":2}
  ],
  instructions:[
    "Faire revenir les lardons de bœuf halal.",
    "Ajouter oignon puis tomate concassée et paprika.",
    "Mijoter 12 min.",
    "Mélanger avec les pâtes cuites."
  ] },
{ id:173, nom:"Galette saucisse façon healthy", emoji:"🥞", temps:20, portions:2, cal:293, proteines:16.4, glucides:18.1, lipides:19, fibres:2.2,
  ingredients:[
    {"id":"sarrasin", "qty":160},
    {"id":"saucisse_boeuf", "qty":180},
    {"id":"moutarde", "qty":10}
  ],
  instructions:[
    "Préparer ou réchauffer les galettes de sarrasin.",
    "Griller les saucisses de bœuf halal.",
    "Disposer la saucisse sur la galette.",
    "Servir avec un trait de moutarde."
  ] },
{ id:174, nom:"Quiche lorraine sans pâte au jambon de dinde", emoji:"🥧", temps:40, portions:4, cal:215, proteines:23.5, glucides:3.9, lipides:12, fibres:0,
  ingredients:[
    {"id":"jambon_volaille", "qty":200},
    {"id":"oeuf", "qty":220},
    {"id":"lait_demi_ecreme", "qty":150},
    {"id":"fromage_rape", "qty":60},
    {"id":"fromage_blanc_0", "qty":100}
  ],
  instructions:[
    "Battre les œufs avec le lait et le fromage blanc.",
    "Ajouter le jambon de volaille en dés et le fromage râpé.",
    "Verser dans un moule huilé.",
    "Cuire au four 30 min à 180°C."
  ] },
{ id:175, nom:"Poêlée de chou et saucisse de bœuf halal", emoji:"🥬", temps:25, portions:2, cal:244, proteines:14.5, glucides:11.9, lipides:16.4, fibres:4.4,
  ingredients:[
    {"id":"chou_blanc", "qty":300},
    {"id":"saucisse_boeuf", "qty":160},
    {"id":"oignon", "qty":60},
    {"id":"cumin", "qty":2}
  ],
  instructions:[
    "Faire revenir l'oignon.",
    "Ajouter le chou émincé, cuire 10 min à couvert.",
    "Saisir la saucisse de bœuf à part, trancher.",
    "Mélanger le tout, assaisonner de cumin."
  ] },
{ id:176, nom:"Pâtes carbonara au saumon fumé (variante mer)", emoji:"🍝", temps:18, portions:2, cal:342, proteines:30.9, glucides:25.4, lipides:13.3, fibres:4.2,
  ingredients:[
    {"id":"pates_completes", "qty":200},
    {"id":"saumon_fume", "qty":140},
    {"id":"oeuf", "qty":110},
    {"id":"fromage_blanc_0", "qty":80},
    {"id":"citron", "qty":15}
  ],
  instructions:[
    "Cuire les pâtes complètes.",
    "Mélanger œufs, fromage blanc et un peu de citron.",
    "Couper le saumon fumé en lanières.",
    "Assembler hors du feu avec les pâtes chaudes."
  ] },
{ id:177, nom:"Sandwich pita kebab healthy", emoji:"🥙", temps:15, portions:1, cal:533, proteines:36.9, glucides:45.8, lipides:22, fibres:2.9,
  ingredients:[
    {"id":"pain_pita", "qty":70},
    {"id":"kebab_viande", "qty":140},
    {"id":"salade_verte", "qty":40},
    {"id":"tomate", "qty":50},
    {"id":"yaourt_nature", "qty":40}
  ],
  instructions:[
    "Chauffer la viande à kebab à la poêle.",
    "Garnir le pain pita de salade et tomate.",
    "Ajouter la viande.",
    "Napper d'une sauce au yaourt."
  ] },
{ id:178, nom:"Choucroute express au jambon et saucisse halal", emoji:"🥬", temps:30, portions:2, cal:271, proteines:26.4, glucides:11.8, lipides:14, fibres:5.9,
  ingredients:[
    {"id":"choucroute", "qty":400},
    {"id":"jambon_boeuf", "qty":120},
    {"id":"saucisse_volaille", "qty":160},
    {"id":"ail", "qty":6}
  ],
  instructions:[
    "Faire chauffer la choucroute avec l'ail.",
    "Ajouter le jambon et la saucisse de volaille.",
    "Mijoter 15 min à couvert.",
    "Servir bien chaud."
  ] },
{ id:179, nom:"Pizza poulet façon healthy", emoji:"🍕", temps:25, portions:2, cal:421, proteines:38.6, glucides:43.5, lipides:9.6, fibres:2.8,
  ingredients:[
    {"id":"pain_pita", "qty":140},
    {"id":"poulet_blanc", "qty":160},
    {"id":"tomate", "qty":100},
    {"id":"mozzarella_light", "qty":120},
    {"id":"oignon", "qty":50}
  ],
  instructions:[
    "Étaler la tomate sur les pains pita.",
    "Garnir de poulet émincé cuit, oignon et mozzarella.",
    "Cuire au four 10 min à 220°C.",
    "Servir chaud."
  ] },
{ id:180, nom:"Spaghetti bolognaise allégée", emoji:"🍝", temps:30, portions:3, cal:257, proteines:23, glucides:27.9, lipides:5.5, fibres:5.7,
  ingredients:[
    {"id":"pates_completes", "qty":280},
    {"id":"boeuf_hache_5", "qty":240},
    {"id":"tomate", "qty":250},
    {"id":"oignon", "qty":80},
    {"id":"carotte", "qty":60}
  ],
  instructions:[
    "Faire revenir le bœuf haché avec oignon et carotte.",
    "Ajouter la tomate concassée.",
    "Mijoter 20 min à couvert.",
    "Servir sur les pâtes complètes cuites."
  ] },
{ id:181, nom:"Salade de pâtes au saucisson de bœuf halal", emoji:"🥗", temps:15, portions:2, cal:303, proteines:15.9, glucides:26.9, lipides:15.4, fibres:5,
  ingredients:[
    {"id":"pates_completes", "qty":200},
    {"id":"saucisson_boeuf", "qty":80},
    {"id":"tomate_cerise", "qty":120},
    {"id":"concombre", "qty":100},
    {"id":"huile_olive", "qty":10}
  ],
  instructions:[
    "Cuire les pâtes, laisser refroidir.",
    "Couper le saucisson de bœuf halal en rondelles.",
    "Mélanger avec tomates cerises et concombre.",
    "Assaisonner d'huile d'olive."
  ] },
{ id:182, nom:"Tacos bœuf épicé maison", emoji:"🌮", temps:20, portions:2, cal:372, proteines:31, glucides:34.3, lipides:11.2, fibres:3.4,
  ingredients:[
    {"id":"tortilla_ble", "qty":120},
    {"id":"boeuf_hache_5", "qty":240},
    {"id":"poivron", "qty":100},
    {"id":"oignon", "qty":60},
    {"id":"paprika", "qty":3}
  ],
  instructions:[
    "Faire revenir le bœuf haché avec paprika.",
    "Ajouter poivron et oignon, cuire 8 min.",
    "Garnir les tortillas chaudes.",
    "Servir immédiatement."
  ] },
{ id:183, nom:"Nuggets de poulet maison et purée de patate douce", emoji:"🍗", temps:35, portions:2, cal:374, proteines:17.4, glucides:44, lipides:13.2, fibres:4.5,
  ingredients:[
    {"id":"nuggets_poulet", "qty":200},
    {"id":"patate_douce", "qty":300}
  ],
  instructions:[
    "Cuire les nuggets de poulet au four selon indication.",
    "Cuire la patate douce à l'eau 20 min.",
    "Écraser en purée.",
    "Servir ensemble."
  ] },
{ id:184, nom:"Pâtes au jambon de volaille et petits pois", emoji:"🍝", temps:20, portions:2, cal:331, proteines:26.5, glucides:32.5, lipides:10.8, fibres:7.1,
  ingredients:[
    {"id":"pates_completes", "qty":200},
    {"id":"jambon_volaille", "qty":160},
    {"id":"petit_pois", "qty":120},
    {"id":"creme_fraiche_legere", "qty":60},
    {"id":"parmesan", "qty":15}
  ],
  instructions:[
    "Cuire les pâtes et les petits pois.",
    "Faire chauffer le jambon de volaille en dés.",
    "Ajouter la crème légère hors du feu.",
    "Mélanger le tout avec les pâtes, parsemer de parmesan."
  ] },
{ id:185, nom:"Salade lyonnaise au bacon de dinde et œuf poché", emoji:"🥗", temps:18, portions:1, cal:317, proteines:24.9, glucides:19.4, lipides:16.2, fibres:1.9,
  ingredients:[
    {"id":"salade_verte", "qty":80},
    {"id":"bacon_dinde", "qty":60},
    {"id":"oeuf", "qty":55},
    {"id":"croutons", "qty":25},
    {"id":"moutarde", "qty":8}
  ],
  instructions:[
    "Cuire le bacon de dinde croustillant.",
    "Pocher l'œuf 3 min.",
    "Préparer une vinaigrette à la moutarde.",
    "Dresser la salade avec bacon, œuf poché et croûtons."
  ] },
{ id:186, nom:"Wraps poulet façon kebab épicé", emoji:"🌮", temps:18, portions:2, cal:317, proteines:29.4, glucides:31.5, lipides:7.3, fibres:2.4,
  ingredients:[
    {"id":"tortilla_ble", "qty":120},
    {"id":"poulet_blanc", "qty":200},
    {"id":"paprika", "qty":3},
    {"id":"salade_verte", "qty":60},
    {"id":"yaourt_nature", "qty":50}
  ],
  instructions:[
    "Émincer et épicer le poulet au paprika.",
    "Cuire à feu vif 8 min.",
    "Garnir les tortillas de salade et poulet.",
    "Napper de sauce yaourt, rouler."
  ] },
{ id:187, nom:"Riz sauté au jambon de bœuf et légumes", emoji:"🍚", temps:20, portions:2, cal:239, proteines:18.2, glucides:33, lipides:3.3, fibres:3,
  ingredients:[
    {"id":"riz_blanc", "qty":180},
    {"id":"jambon_boeuf", "qty":140},
    {"id":"carotte", "qty":80},
    {"id":"petit_pois", "qty":60},
    {"id":"sauce_soja", "qty":12}
  ],
  instructions:[
    "Cuire le riz et laisser tiédir.",
    "Faire revenir carotte et petits pois.",
    "Ajouter le jambon de bœuf en dés.",
    "Incorporer le riz, déglacer à la sauce soja."
  ] },
{ id:188, nom:"Burger bacon-poulet healthy", emoji:"🍔", temps:25, portions:2, cal:449, proteines:44.6, glucides:41.9, lipides:10.7, fibres:3.1,
  ingredients:[
    {"id":"pain_burger", "qty":160},
    {"id":"poulet_blanc", "qty":240},
    {"id":"bacon_dinde", "qty":80},
    {"id":"salade_verte", "qty":50},
    {"id":"tomate", "qty":60}
  ],
  instructions:[
    "Griller le poulet et le bacon de dinde.",
    "Toaster légèrement les pains.",
    "Garnir de salade et tomate.",
    "Assembler le burger avec poulet et bacon."
  ] },
{ id:189, nom:"Soupe choucroute légère au jambon de volaille", emoji:"🍲", temps:30, portions:3, cal:144, proteines:13.7, glucides:18.9, lipides:2.2, fibres:5.7,
  ingredients:[
    {"id":"choucroute", "qty":400},
    {"id":"jambon_volaille", "qty":180},
    {"id":"pomme_terre", "qty":200},
    {"id":"oignon", "qty":60}
  ],
  instructions:[
    "Faire revenir l'oignon.",
    "Ajouter choucroute, pommes de terre en dés et eau.",
    "Mijoter 20 min.",
    "Ajouter le jambon de volaille en fin de cuisson."
  ] },
{ id:190, nom:"Pâtes au pepperoni de bœuf et tomate", emoji:"🍝", temps:20, portions:2, cal:307, proteines:15.5, glucides:28.4, lipides:15.6, fibres:5.3,
  ingredients:[
    {"id":"pates_completes", "qty":200},
    {"id":"pepperoni_boeuf", "qty":100},
    {"id":"tomate", "qty":200},
    {"id":"basilic", "qty":5},
    {"id":"ail", "qty":6}
  ],
  instructions:[
    "Cuire les pâtes complètes.",
    "Faire revenir ail et tomate concassée.",
    "Ajouter le pepperoni de bœuf, chauffer 5 min.",
    "Mélanger avec les pâtes, parsemer de basilic."
  ] },
{ id:191, nom:"Croque healthy poulet-fromage", emoji:"🥪", temps:12, portions:1, cal:406, proteines:38, glucides:29.2, lipides:12.9, fibres:4.9,
  ingredients:[
    {"id":"pain_complet", "qty":70},
    {"id":"poulet_blanc", "qty":100},
    {"id":"fromage_rape", "qty":30},
    {"id":"moutarde", "qty":8}
  ],
  instructions:[
    "Griller le poulet émincé.",
    "Tartiner le pain de moutarde.",
    "Garnir de poulet et fromage râpé.",
    "Passer au four jusqu'à ce que le fromage fonde."
  ] },
{ id:192, nom:"Riz, merguez émiettée et poivrons grillés", emoji:"🍚", temps:25, portions:2, cal:360, proteines:16.8, glucides:30, lipides:19.9, fibres:1.5,
  ingredients:[
    {"id":"riz_blanc", "qty":180},
    {"id":"merguez", "qty":160},
    {"id":"poivron", "qty":120},
    {"id":"cumin", "qty":2}
  ],
  instructions:[
    "Cuire le riz.",
    "Émietter et cuire la merguez à la poêle.",
    "Griller les poivrons.",
    "Mélanger le tout, assaisonner de cumin."
  ] },
{ id:193, nom:"Omelette au jambon de bœuf et fromage", emoji:"🥚", temps:12, portions:1, cal:400, proteines:39.9, glucides:2.4, lipides:26.2, fibres:0,
  ingredients:[
    {"id":"oeuf", "qty":165},
    {"id":"jambon_boeuf", "qty":60},
    {"id":"fromage_rape", "qty":25}
  ],
  instructions:[
    "Battre les œufs.",
    "Ajouter le jambon de bœuf en dés.",
    "Cuire à la poêle, ajouter le fromage à mi-cuisson.",
    "Plier et servir chaud."
  ] },
{ id:194, nom:"Salade savoyarde légère au jambon de volaille", emoji:"🥗", temps:15, portions:1, cal:330, proteines:29.2, glucides:29.6, lipides:10.6, fibres:4.3,
  ingredients:[
    {"id":"salade_verte", "qty":80},
    {"id":"jambon_volaille", "qty":100},
    {"id":"pomme_terre", "qty":150},
    {"id":"fromage_rape", "qty":25},
    {"id":"vinaigre_balsamique", "qty":8}
  ],
  instructions:[
    "Cuire les pommes de terre à l'eau, couper en dés.",
    "Mélanger avec la salade et le jambon de volaille.",
    "Parsemer de fromage râpé.",
    "Assaisonner de vinaigre balsamique."
  ] },
{ id:195, nom:"Galettes de sarrasin saucisse de volaille", emoji:"🥞", temps:20, portions:2, cal:369, proteines:26.3, glucides:19.1, lipides:22, fibres:2.2,
  ingredients:[
    {"id":"sarrasin", "qty":160},
    {"id":"saucisse_volaille", "qty":180},
    {"id":"fromage_rape", "qty":40},
    {"id":"oeuf", "qty":55}
  ],
  instructions:[
    "Préparer les galettes de sarrasin.",
    "Griller la saucisse de volaille, trancher.",
    "Garnir la galette de fromage, saucisse et œuf.",
    "Plier et servir chaud."
  ] },
];
