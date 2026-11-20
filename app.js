/* Affiche le contenu de contenu.js dans la page et gère le choix FR / EN.
   Pas besoin de modifier ce fichier pour mettre à jour la carte. */

const TEXTES = {
  fr: {
    "nav.histoire": "Notre histoire", "nav.carte": "La carte", "nav.matin": "Le matin", "nav.emporter": "À emporter", "nav.infos": "Infos & accès",
    "accueil.histoire": "Un lieu de vie au cœur de Montreuil-sur-Mer.",
    "accueil.carte": "Nos burgers maison, les desserts et le petit-déjeuner.",
    "accueil.emporter": "Un coup de fil, et votre commande vous attend bien chaude.",
    "accueil.infos": "Adresse, horaires et itinéraire, place Gambetta.",
    "accueil.voir": "Découvrir",
    "pied.mentions": "Mentions légales",
    "suite.carte": "Découvrir la carte", "suite.emporter": "Commander à emporter",
    "hero.carte": "Voir la carte", "hero.emporter": "Commander à emporter",
    "bandeau.jours": "Du mardi au samedi", "bandeau.resa": "Sans réservation",
    "bandeau.surplace": "Sur place ou à emporter",
    "histoire.surtitre": "Notre histoire", "histoire.titre": "Le Victor Hugo, restaurant de burgers maison à Montreuil-sur-Mer",
    "carte.titre": "Les burgers", "carte.intro": "Tous nos burgers sont servis avec frites ou coleslaw maison",
    "carte.cotes": "À côté", "carte.supplements": "Suppléments", "carte.enfant": "Menu enfant",
    "carte.desserts": "Desserts", "carte.glaces": "Glaces", "carte.vege": "Végétarien",
    "carte.allergenes": "Une allergie ou une question sur un plat ? Demandez-nous, on vous dit tout sur nos ingrédients.",
    "moment.titre": "Burger du moment", "moment.note": "Venez découvrir chaque mois un nouveau burger.",
    "matin.surtitre": "Dès 9h30", "matin.titre": "Le matin, on vous attend aussi !",
    "matin.intro": "Dès le matin, profitez d’un petit-déjeuner gourmand au Victor Hugo : pain brioché ou pancakes moelleux, accompagnés d’une boisson chaude.",
    "matin.formule": "Formule petit-déjeuner",
    "emporter.surtitre": "À emporter", "emporter.titre": "Envie d’un burger à la maison ?",
    "emporter.intro": "On ne prend pas de réservation pour manger sur place : venez directement, on vous trouve une table. Pour emporter, un simple coup de fil suffit.",
    "emporter.e1t": "Appelez-nous", "emporter.e1": "Pendant les heures d’ouverture, dites-nous ce qui vous fait envie.",
    "emporter.e2t": "On vous donne l’heure", "emporter.e2": "Le délai dépend du monde en cuisine, on vous dit quand passer.",
    "emporter.e3t": "Passez récupérer", "emporter.e3": "Votre commande vous attend au 3 place Gambetta, bien chaude.",
    "emporter.appel": "Appeler le", "emporter.bientot": "Bientôt : la commande en ligne, directement sur ce site.",
    "infos.surtitre": "Infos pratiques", "infos.titre": "Nous trouver", "infos.adresse": "Adresse",
    "infos.eglise": "Sur la place Gambetta, en face de l’église",
    "infos.parking": "Places de stationnement tout autour de la place",
    "infos.pmr": "Accessible en fauteuil roulant", "infos.terrasse": "Belle terrasse aux beaux jours",
    "infos.itineraire": "Itinéraire", "infos.horaires": "Horaires",
    "infos.resa": "Pas de réservation : premier arrivé, premier servi.",
    "mobile.appel": "Commander à emporter", "avis": "Laisser un avis Google"
  },
  en: {
    "nav.histoire": "Our story", "nav.carte": "Menu", "nav.matin": "Mornings", "nav.emporter": "Takeaway", "nav.infos": "Find us",
    "accueil.histoire": "A lively spot in the heart of Montreuil-sur-Mer.",
    "accueil.carte": "Our homemade burgers, desserts and breakfast.",
    "accueil.emporter": "One phone call, and your order will be waiting, hot.",
    "accueil.infos": "Address, opening hours and directions, Place Gambetta.",
    "accueil.voir": "Discover",
    "pied.mentions": "Legal notice",
    "suite.carte": "See the menu", "suite.emporter": "Order takeaway",
    "hero.carte": "See the menu", "hero.emporter": "Order takeaway",
    "bandeau.jours": "Tuesday to Saturday", "bandeau.resa": "No reservations",
    "bandeau.surplace": "Eat in or takeaway",
    "histoire.surtitre": "Our story", "histoire.titre": "Le Victor Hugo, a homemade burger restaurant in Montreuil-sur-Mer",
    "carte.titre": "Burgers", "carte.intro": "All burgers come with homemade fries or coleslaw",
    "carte.cotes": "Sides", "carte.supplements": "Extras", "carte.enfant": "Kids’ menu",
    "carte.desserts": "Desserts", "carte.glaces": "Ice cream", "carte.vege": "Vegetarian",
    "carte.allergenes": "Allergies or questions about a dish? Just ask, we’ll tell you everything about our ingredients.",
    "moment.titre": "Burger of the month", "moment.note": "Come and discover a new burger every month.",
    "matin.surtitre": "From 9:30am", "matin.titre": "Mornings are good here too!",
    "matin.intro": "Start your day with a treat at the Victor Hugo: brioche bread or fluffy pancakes, with a hot drink.",
    "matin.formule": "Breakfast deal",
    "emporter.surtitre": "Takeaway", "emporter.titre": "Fancy a burger at home?",
    "emporter.intro": "We don’t take reservations to eat in: just come by and we’ll find you a table. For takeaway, simply give us a call.",
    "emporter.e1t": "Call us", "emporter.e1": "During opening hours, tell us what you’d like.",
    "emporter.e2t": "We give you a time", "emporter.e2": "It depends on how busy the kitchen is, we’ll tell you when to come.",
    "emporter.e3t": "Pick it up", "emporter.e3": "Your order will be waiting, hot, at 3 place Gambetta.",
    "emporter.appel": "Call", "emporter.bientot": "Coming soon: order online, right here on this site.",
    "infos.surtitre": "Practical info", "infos.titre": "Find us", "infos.adresse": "Address",
    "infos.eglise": "On Place Gambetta, opposite the church",
    "infos.parking": "Parking spaces all around the square",
    "infos.pmr": "Wheelchair accessible", "infos.terrasse": "Lovely terrace in good weather",
    "infos.itineraire": "Directions", "infos.horaires": "Opening hours",
    "infos.resa": "No reservations: first come, first served.",
    "mobile.appel": "Order takeaway", "avis": "Leave a Google review"
  }
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function el(tag, classe, texte) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texte !== undefined) e.textContent = texte;
  return e;
}

function lignePrix(nom, prix, detail) {
  const li = el("li");
  li.append(el("span", "", nom), el("span", "prix", prix));
  if (detail) li.append(el("small", "", detail));
  return li;
}

// Le site a plusieurs pages : chaque bloc n'est rempli que s'il existe sur la page
function remplir(sel, fn) {
  const e = $(sel);
  if (e) fn(e);
}

function afficher(lang) {
  const C = CONTENU;
  const t = (obj) => (obj && typeof obj === "object" ? obj[lang] ?? obj.fr : obj) || "";
  const texte = (sel, valeur) => remplir(sel, (e) => { e.textContent = valeur; });

  document.documentElement.lang = lang;
  $$("[data-t]").forEach((e) => { e.textContent = TEXTES[lang][e.dataset.t]; });
  $$("[data-c]").forEach((e) => {
    const v = C[e.dataset.c];
    if (Array.isArray(t(v))) {
      e.replaceChildren(...t(v).map((p) =>
        p.startsWith("## ") ? el("h2", "histoire-intertitre", p.slice(3)) :
        p.startsWith("~ ") ? el("p", "histoire-signature", p.slice(2)) :
        el("p", "", p)));
    } else {
      e.textContent = t(v);
    }
  });

  // Annonce
  const annonce = t(C.annonce);
  remplir("#annonce", (e) => { e.hidden = !annonce; e.textContent = annonce; });

  // Burgers
  remplir("#burgers", (e) => e.replaceChildren(...C.burgers.map((b) => {
    const carte = el("article", "burger");
    if (b.photo) {
      const img = el("img");
      img.src = b.photo; img.alt = t(b.nom); img.loading = "lazy";
      carte.append(img);
    }
    const corps = el("div", "burger-corps");
    const titre = el("h3", "", t(b.nom));
    if (b.vege) titre.append(" ", el("span", "pastille", TEXTES[lang]["carte.vege"]));
    corps.append(titre, el("p", "", t(b.description)));
    carte.append(corps);
    return carte;
  })));

  // Burger du moment
  const m = C.burgerDuMoment;
  remplir("#moment img", (img) => { img.src = m.photo; img.alt = TEXTES[lang]["moment.titre"]; });
  texte("#moment-mois", t(m.mois));
  texte("#moment-nom", t(m.nom));
  texte("#moment-desc", t(m.description) + (m.prix ? " · " + m.prix : ""));

  // Accompagnements, suppléments
  remplir("#accompagnements", (e) => e.replaceChildren(...C.accompagnements.map((a) => lignePrix(t(a.nom), a.prix))));
  remplir("#supplements", (e) => e.replaceChildren(...C.supplements.map((s) => lignePrix(t(s.nom), s.prix))));

  // Desserts : en liste, ou en vignettes avec photo sur la page carte
  remplir("#desserts", (e) => e.replaceChildren(...C.desserts.map((d) => lignePrix(t(d.nom), d.prix, t(d.detail)))));
  remplir("#desserts-vignettes", (e) => e.replaceChildren(...C.desserts.map((d) => {
    const carte = el("article", "dessert" + (d.photo ? "" : " sans-photo"));
    if (d.photo) {
      const img = el("img");
      img.src = d.photo; img.alt = t(d.nom); img.loading = "lazy";
      carte.append(img);
    }
    const corps = el("div", "dessert-corps");
    const titre = el("h3");
    titre.append(el("span", "", t(d.nom)), el("span", "prix", d.prix));
    corps.append(titre);
    if (d.detail) corps.append(el("p", "", t(d.detail)));
    carte.append(corps);
    return carte;
  })));

  // Menu enfant
  texte("#enfant-age", t(C.menuEnfant.age));
  texte("#enfant-nom", t(C.menuEnfant.nom));
  remplir("#enfant-prix", (e) => { e.textContent = C.menuEnfant.prix; e.className = "prix"; });
  texte("#enfant-desc", t(C.menuEnfant.description));

  // Glaces
  texte("#glaces-detail", t(C.glaces.detail));
  remplir("#glaces-prix", (e) => e.replaceChildren(...C.glaces.prix.map((g) => lignePrix(t(g.nom), g.prix))));
  texte("#glaces-parfums", t(C.glaces.parfums));
  texte("#glaces-supp", t(C.glaces.supplements));

  // Petit-déjeuner
  texte("#petitdej-prix", C.petitDej.prix);
  texte("#petitdej-desc", t(C.petitDej.description));
  texte("#petitdej-choix", t(C.petitDej.choix));
  texte("#petitdej-option", t(C.petitDej.option));
  texte("#petitdej-gourmands", t(C.petitDej.gourmands));

  // Horaires
  remplir("#horaires", (e) => e.replaceChildren(...C.horaires.flatMap((h) => [el("dt", "", t(h.jour)), el("dd", "", t(h.texte))])));

  // Réseaux
  const liens = [["Instagram", C.instagram], ["Facebook", C.facebook], [TEXTES[lang].avis, C.avisGoogle]]
    .filter(([, url]) => url)
    .map(([nom, url]) => {
      const a = el("a", "", nom);
      a.href = url; a.target = "_blank"; a.rel = "noopener";
      return a;
    });
  remplir("#reseaux", (e) => e.replaceChildren(...liens));

  $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  try { localStorage.setItem("langue", lang); } catch (e) {}
}

// Liens d'appel et itinéraire
const numero = "+33" + CONTENU.telephone.replace(/\s/g, "").replace(/^0/, "");
$$("[data-tel]").forEach((a) => { a.href = "tel:" + numero; });
remplir("#itineraire", (a) => { a.href = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(CONTENU.adresse); });
remplir("#annee", (e) => { e.textContent = new Date().getFullYear(); });

// Langue : celle choisie avant, sinon celle du navigateur
let langue = "fr";
try { langue = localStorage.getItem("langue") || (navigator.language.startsWith("fr") ? "fr" : "en"); } catch (e) {}
$$("[data-lang]").forEach((b) => b.addEventListener("click", () => afficher(b.dataset.lang)));
afficher(langue);

// Chaque page s'ouvre en haut (sauf si le lien vise un endroit précis de la page)
try { if ("scrollRestoration" in history) history.scrollRestoration = "manual"; } catch (e) {}
// (scrollIntoView remonte aussi la page quand le site est affiché dans un cadre, comme l'aperçu de test)
function allerEnHaut() {
  window.scrollTo(0, 0);
  const haut = document.querySelector(".annonce:not([hidden])") || document.querySelector(".entete") || document.body;
  try { haut.scrollIntoView({ block: "start", behavior: "instant" }); } catch (e) { haut.scrollIntoView(true); }
  // Sur téléphone, mettre le « focus » sur le logo fait aussi remonter le cadre de l'aperçu
  const logo = document.querySelector(".entete-logo");
  if (logo && document.activeElement === document.body) {
    try { logo.focus({ focusVisible: false }); logo.blur(); } catch (e) {}
  }
}
if (!location.hash) {
  allerEnHaut();
  window.addEventListener("load", () => { allerEnHaut(); setTimeout(allerEnHaut, 300); });
}

// Vidéo de l'accueil : à l'arrêt si la personne a demandé moins d'animations
try {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) document.querySelectorAll("video[autoplay]").forEach((v) => { v.removeAttribute("autoplay"); v.pause(); });
} catch (e) {}
