/* Page de commande en ligne : affiche la carte, gère le panier et envoie au paiement.
   Les articles et les prix viennent de contenu.js (via catalogue.js). */

const TEXTES = {
  fr: {
    retour: "← Retour au site", surtitre: "À emporter", titre: "Commander en ligne",
    intro: "Composez votre commande, payez par carte et passez la récupérer au 3 place Gambetta.",
    ferme: "La commande en ligne est fermée pour le moment. Vous pouvez commander du mardi au samedi, aux heures du service. Une question ? Appelez-nous au ",
    burgers: "Les burgers", servis: "Servis avec frites ou coleslaw maison", enfant: "Menu enfant",
    cotes: "À côté", desserts: "Desserts", vege: "Végétarien", moment: "Du moment",
    ajouter: "Ajouter", choisir: "Choisir", panier: "Votre commande", vide: "Votre panier est vide.",
    total: "Total", nom: "Prénom et nom", telephone: "Téléphone", retrait: "Heure de retrait",
    commentaire: "Une précision ? (allergie, cuisson…)", payer: "Payer",
    securite: "Paiement sécurisé par carte bancaire via Stripe.", voir: "Voir ma commande",
    accompagnement: "Accompagnement", supplements: "Suppléments", parfum: "Parfum de la glace",
    article: "article", articles: "articles", retirer: "Retirer",
    errPanier: "Ajoutez au moins un article à votre commande.",
    errNom: "Indiquez votre prénom et votre nom.",
    errTel: "Indiquez un numéro de téléphone valable, pour qu’on puisse vous joindre.",
    errRetrait: "Choisissez une heure de retrait.",
    errPaiement: "Le paiement en ligne n’est pas disponible pour le moment. Vous pouvez commander par téléphone au ",
    annule: "Le paiement a été annulé : votre commande n’est pas passée. Vous pouvez réessayer.",
    envoi: "Redirection vers le paiement…"
  },
  en: {
    retour: "← Back to the site", surtitre: "Takeaway", titre: "Order online",
    intro: "Build your order, pay by card and pick it up at 3 place Gambetta.",
    ferme: "Online ordering is closed right now. You can order Tuesday to Saturday, during kitchen hours. Any question? Call us on ",
    burgers: "Burgers", servis: "Served with homemade fries or coleslaw", enfant: "Kids’ menu",
    cotes: "Sides", desserts: "Desserts", vege: "Vegetarian", moment: "Of the month",
    ajouter: "Add", choisir: "Choose", panier: "Your order", vide: "Your basket is empty.",
    total: "Total", nom: "Full name", telephone: "Phone", retrait: "Pick-up time",
    commentaire: "Anything we should know? (allergies…)", payer: "Pay",
    securite: "Secure card payment via Stripe.", voir: "View my order",
    accompagnement: "Side", supplements: "Extras", parfum: "Ice cream flavour",
    article: "item", articles: "items", retirer: "Remove",
    errPanier: "Add at least one item to your order.",
    errNom: "Please enter your full name.",
    errTel: "Please enter a valid phone number so we can reach you.",
    errRetrait: "Please choose a pick-up time.",
    errPaiement: "Online payment isn’t available right now. You can order by phone on ",
    annule: "Payment was cancelled: your order has not been placed. You can try again.",
    envoi: "Taking you to payment…"
  }
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const euros = (c) => (c / 100).toFixed(2).replace(".", ",") + " €";

function el(tag, classe, texte) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texte !== undefined) e.textContent = texte;
  return e;
}

let lang = "fr";
let cat;
let panier = [];
try { panier = JSON.parse(localStorage.getItem("panier")) || []; } catch (e) {}

const T = (cle) => TEXTES[lang][cle];
const sauver = () => { try { localStorage.setItem("panier", JSON.stringify(panier)); } catch (e) {} };

/* ---------- La carte ---------- */
function afficherCarte() {
  const sections = [
    ["burgers", T("burgers"), T("servis") + " · " + CONTENU.prixBurger],
    ["enfant", T("enfant"), COMMANDE.texte(CONTENU.menuEnfant.age, lang)],
    ["cotes", T("cotes")],
    ["desserts", T("desserts")]
  ];
  $("#carte").replaceChildren(...sections.map(([categorie, titre, sous]) => {
    const section = el("section", "categorie");
    section.append(el("h2", "", titre));
    if (sous) section.append(el("p", "categorie-sous", sous));
    const liste = el("div", "categorie-liste " + (categorie === "burgers" ? "avec-photos" : ""));
    cat.articles.filter((a) => a.categorie === categorie).forEach((a) => {
      const carte = el("article", "article");
      if (a.photo) {
        const img = el("img"); img.src = a.photo; img.alt = ""; img.loading = "lazy";
        carte.append(img);
      }
      const corps = el("div", "article-corps");
      const nom = el("h3", "", a.nom);
      if (a.vege) nom.append(" ", el("span", "pastille", T("vege")));
      if (a.moment) nom.append(" ", el("span", "pastille", T("moment")));
      corps.append(nom);
      if (a.description) corps.append(el("p", "", a.description));
      const bas = el("div", "article-bas");
      bas.append(el("span", "article-prix", euros(a.prix)));
      const options = a.accompagnement || a.parfum;
      const bouton = el("button", "bouton bouton-petit", options ? T("choisir") : "+ " + T("ajouter"));
      bouton.type = "button";
      bouton.addEventListener("click", () => options ? ouvrirOptions(a) : ajouter({ id: a.id, quantite: 1 }));
      bas.append(bouton);
      corps.append(bas);
      carte.append(corps);
      liste.append(carte);
    });
    section.append(liste);
    return section;
  }));
}

/* ---------- Fenêtre d'options ---------- */
let enCours = null;

function ligneOptions() {
  const f = $("#options-form");
  return {
    id: enCours.id,
    quantite: Number($("#options-quantite").value),
    accompagnement: f.elements.accompagnement ? f.elements.accompagnement.value : undefined,
    supplements: [...f.querySelectorAll("input[name=supplement]:checked")].map((c) => Number(c.value)),
    parfum: enCours.parfum ? Number($("#options-parfum select").value) : undefined
  };
}

function majPrixOptions() {
  const calcul = COMMANDE.prixLigne(cat, ligneOptions());
  $("#options-prix").textContent = calcul ? euros(calcul.prixUnitaire * calcul.quantite) : "";
}

function ouvrirOptions(article) {
  enCours = article;
  $("#options-nom").textContent = article.nom;
  $("#options-desc").textContent = article.description || "";
  $("#options-quantite").value = 1;

  const acc = $("#options-acc");
  acc.replaceChildren(el("legend", "", T("accompagnement")), ...cat.accompagnements.map((a, i) => {
    const l = el("label", "choix");
    const r = el("input"); r.type = "radio"; r.name = "accompagnement"; r.value = a.id; r.checked = i === 0;
    l.append(r, " ", a.nom);
    return l;
  }));

  const sup = $("#options-sup");
  sup.hidden = !article.supplements;
  sup.replaceChildren(el("legend", "", T("supplements")), ...cat.supplements.map((s) => {
    const l = el("label", "choix");
    const c = el("input"); c.type = "checkbox"; c.name = "supplement"; c.value = s.id;
    l.append(c, " ", s.nom, " ", el("span", "choix-prix", "+" + euros(s.prix)));
    return l;
  }));

  const parfum = $("#options-parfum");
  parfum.hidden = !article.parfum;
  parfum.querySelector("select").replaceChildren(...cat.parfums.map((p, i) => {
    const o = el("option", "", p); o.value = i; return o;
  }));

  majPrixOptions();
  $("#options").returnValue = ""; // sinon la touche Échap reprendrait le dernier choix
  $("#options").showModal();
}

$("#options-form").addEventListener("change", majPrixOptions);
$$("[data-q]").forEach((b) => b.addEventListener("click", () => {
  const q = $("#options-quantite");
  q.value = Math.min(20, Math.max(1, Number(q.value) + Number(b.dataset.q)));
  majPrixOptions();
}));
$("#options").addEventListener("close", () => {
  if ($("#options").returnValue === "ajouter" && enCours) ajouter(ligneOptions());
  enCours = null;
});

/* ---------- Panier ---------- */
const memeChoix = (a, b) => a.id === b.id && a.accompagnement === b.accompagnement && a.parfum === b.parfum &&
  JSON.stringify([...(a.supplements || [])].sort()) === JSON.stringify([...(b.supplements || [])].sort());

function ajouter(ligne) {
  const existante = panier.find((l) => memeChoix(l, ligne));
  if (existante) existante.quantite = Math.min(20, existante.quantite + ligne.quantite);
  else panier.push(ligne);
  sauver();
  afficherPanier();
}

function afficherPanier() {
  // On retire ce qui n'existe plus sur la carte (ex. un burger changé de saison)
  panier = panier.filter((l) => COMMANDE.prixLigne(cat, l));
  let total = 0, nombre = 0;
  $("#panier-lignes").replaceChildren(...panier.map((l, i) => {
    const calcul = COMMANDE.prixLigne(cat, l);
    total += calcul.prixUnitaire * calcul.quantite;
    nombre += calcul.quantite;
    const li = el("li");
    const haut = el("div", "ligne-haut");
    haut.append(el("span", "ligne-nom", calcul.quantite + " × " + calcul.article.nom), el("span", "", euros(calcul.prixUnitaire * calcul.quantite)));
    li.append(haut);
    if (calcul.details.length) li.append(el("p", "ligne-details", calcul.details.join(", ")));
    const actions = el("div", "ligne-actions");
    [["−", -1], ["+", 1]].forEach(([signe, delta]) => {
      const b = el("button", "", signe); b.type = "button";
      b.addEventListener("click", () => {
        l.quantite += delta;
        if (l.quantite < 1) panier.splice(i, 1);
        if (l.quantite > 20) l.quantite = 20;
        sauver(); afficherPanier();
      });
      actions.append(b);
    });
    const retirer = el("button", "ligne-retirer", T("retirer")); retirer.type = "button";
    retirer.addEventListener("click", () => { panier.splice(i, 1); sauver(); afficherPanier(); });
    actions.append(retirer);
    li.append(actions);
    return li;
  }));
  $("#panier-vide").hidden = panier.length > 0;
  $("#total").textContent = euros(total);
  $("#payer-montant").textContent = total ? euros(total) : "";
  $("#barre-panier").hidden = nombre === 0;
  $("#barre-nombre").textContent = nombre + " " + T(nombre > 1 ? "articles" : "article");
  $("#barre-total").textContent = euros(total);
}

/* ---------- Heures de retrait ---------- */
function afficherCreneaux() {
  const liste = COMMANDE.creneaux(CONTENU);
  const select = $("#retrait");
  const avant = select.value;
  select.replaceChildren(...liste.map((h) => { const o = el("option", "", h.replace(":", "h")); o.value = h; return o; }));
  if (liste.includes(avant)) select.value = avant;
  const ferme = liste.length === 0;
  $("#ferme").hidden = !ferme;
  $("#ferme").textContent = ferme ? T("ferme") + CONTENU.telephone + "." : "";
  $("#payer").disabled = ferme;
}

/* ---------- Paiement ---------- */
function erreur(message) {
  $("#erreur").hidden = !message;
  $("#erreur").textContent = message || "";
}

$("#formulaire").addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const f = ev.target.elements;
  const nom = f.nom.value.trim();
  const telephone = f.telephone.value.trim();
  if (!panier.length) return erreur(T("errPanier"));
  if (nom.length < 2) return erreur(T("errNom"));
  if (telephone.replace(/\D/g, "").length < 10) return erreur(T("errTel"));
  if (!f.retrait.value) return erreur(T("errRetrait"));

  erreur("");
  const bouton = $("#payer");
  bouton.disabled = true;
  bouton.firstElementChild.textContent = T("envoi");
  try {
    const reponse = await fetch("/.netlify/functions/creer-paiement", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lignes: panier, nom, telephone, retrait: f.retrait.value, commentaire: f.commentaire.value.trim(), lang })
    });
    const resultat = await reponse.json().catch(() => ({}));
    if (!reponse.ok || !resultat.url) throw { message: resultat.erreur };
    try { sessionStorage.setItem("derniereCommande", JSON.stringify({ retrait: f.retrait.value })); } catch (e) {}
    window.location.href = resultat.url;
  } catch (e) {
    // message du serveur (ex. créneau dépassé), sinon le paiement est injoignable
    erreur((e && !(e instanceof Error) && e.message) || T("errPaiement") + CONTENU.telephone + ".");
    bouton.disabled = false;
    bouton.firstElementChild.textContent = T("payer");
    afficherCreneaux();
  }
});

/* ---------- Langue ---------- */
function afficher(nouvelle) {
  lang = nouvelle;
  document.documentElement.lang = lang;
  cat = COMMANDE.catalogue(CONTENU, lang);
  $$("[data-t]").forEach((e) => { e.textContent = T(e.dataset.t); });
  $$("[data-c]").forEach((e) => { e.textContent = CONTENU[e.dataset.c]; });
  $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  try { localStorage.setItem("langue", lang); } catch (e) {}
  afficherCarte();
  afficherPanier();
  afficherCreneaux();
}

const numero = "+33" + CONTENU.telephone.replace(/\s/g, "").replace(/^0/, "");
$$("[data-tel]").forEach((a) => { a.href = "tel:" + numero; });

let depart = "fr";
try { depart = localStorage.getItem("langue") || (navigator.language.startsWith("fr") ? "fr" : "en"); } catch (e) {}
$$("[data-lang]").forEach((b) => b.addEventListener("click", () => afficher(b.dataset.lang)));
afficher(depart);
if (new URLSearchParams(location.search).has("annule")) erreur(T("annule"));
setInterval(afficherCreneaux, 60000); // les heures passées disparaissent au fil du service
