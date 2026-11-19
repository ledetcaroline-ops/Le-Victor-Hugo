/* Règles de la commande en ligne : articles, prix et heures de retrait.
   Ce fichier sert à la fois à la page commander.html et au serveur de paiement,
   pour que les prix payés soient toujours ceux de contenu.js (impossibles à truquer).
   Pas besoin de le modifier : tout se règle dans contenu.js. */
(function (racine) {
  const ACCOMPAGNEMENTS = {
    frites: { fr: "Frites", en: "Fries" },
    coleslaw: { fr: "Coleslaw", en: "Coleslaw" }
  };

  // "15,90 €" → 1590 ; "+1,50 €" → 150
  function centimes(prix) {
    const n = parseFloat(String(prix || "").replace(/[^\d,.]/g, "").replace(",", "."));
    return Number.isFinite(n) ? Math.round(n * 100) : 0;
  }

  function texte(obj, lang) {
    return (obj && typeof obj === "object" ? obj[lang] ?? obj.fr : obj) || "";
  }

  function catalogue(C, lang) {
    const t = (o) => texte(o, lang);
    const articles = [];
    C.burgers.forEach((b, i) => articles.push({
      id: "burger-" + i, categorie: "burgers", nom: t(b.nom), description: t(b.description),
      photo: b.photo, vege: !!b.vege, prix: centimes(C.prixBurger), accompagnement: true, supplements: true
    }));
    const m = C.burgerDuMoment;
    if (m && m.prix) articles.push({
      id: "moment", categorie: "burgers", nom: t(m.nom) || (lang === "en" ? "Burger of the month" : "Burger du moment"),
      description: t(m.description), photo: m.photo, prix: centimes(m.prix), accompagnement: true, supplements: true, moment: true
    });
    const e = C.menuEnfant;
    articles.push({
      id: "enfant", categorie: "enfant", nom: t(e.nom), description: t(e.description),
      prix: centimes(e.prix), accompagnement: true, parfum: true
    });
    C.accompagnements.forEach((a, i) => articles.push({ id: "cote-" + i, categorie: "cotes", nom: t(a.nom), prix: centimes(a.prix) }));
    C.desserts.forEach((d, i) => articles.push({ id: "dessert-" + i, categorie: "desserts", nom: t(d.nom), description: t(d.detail), prix: centimes(d.prix) }));

    return {
      articles,
      supplements: C.supplements.map((s, i) => ({ id: i, nom: t(s.nom), prix: centimes(s.prix) })),
      parfums: t(C.glaces.parfums).split(/,\s*/).filter(Boolean),
      accompagnements: Object.keys(ACCOMPAGNEMENTS).map((id) => ({ id, nom: ACCOMPAGNEMENTS[id][lang] || ACCOMPAGNEMENTS[id].fr }))
    };
  }

  /* Vérifie une ligne du panier et calcule son prix.
     ligne = { id, quantite, accompagnement, supplements: [numéros], parfum: numéro }
     Renvoie null si la ligne n'est pas valable. */
  function prixLigne(cat, ligne) {
    const article = cat.articles.find((a) => a.id === ligne.id);
    const quantite = Number(ligne.quantite);
    if (!article || !Number.isInteger(quantite) || quantite < 1 || quantite > 20) return null;

    let prixUnitaire = article.prix;
    const details = [];
    if (article.accompagnement) {
      const acc = cat.accompagnements.find((a) => a.id === ligne.accompagnement);
      if (!acc) return null;
      details.push(acc.nom);
    }
    if (article.supplements && Array.isArray(ligne.supplements)) {
      for (const n of new Set(ligne.supplements)) {
        const s = cat.supplements[n];
        if (!s) return null;
        prixUnitaire += s.prix;
        details.push("+ " + s.nom);
      }
    }
    if (article.parfum) {
      const p = cat.parfums[ligne.parfum];
      if (!p) return null;
      details.push(p);
    }
    return { article, quantite, prixUnitaire, details };
  }

  // Jour ("mardi"…) et heure actuelle à Montreuil-sur-Mer, quel que soit le fuseau du visiteur
  function maintenantParis(date) {
    const p = {};
    new Intl.DateTimeFormat("fr-FR", { timeZone: "Europe/Paris", weekday: "long", hour: "2-digit", minute: "2-digit", hourCycle: "h23" })
      .formatToParts(date || new Date()).forEach((x) => { p[x.type] = x.value; });
    return { jour: p.weekday, minutes: Number(p.hour) * 60 + Number(p.minute) };
  }

  const enMinutes = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };
  const enHeure = (min) => String(Math.floor(min / 60)).padStart(2, "0") + ":" + String(min % 60).padStart(2, "0");

  // Heures de retrait encore possibles aujourd'hui (liste vide = commandes fermées)
  function creneaux(C, date) {
    const r = C.commandeEnLigne;
    if (!r || !r.ouverte) return [];
    const { jour, minutes } = maintenantParis(date);
    if (!r.joursOuverts.includes(jour)) return [];
    const liste = [];
    r.creneaux.forEach((s) => {
      for (let m = enMinutes(s.debut); m <= enMinutes(s.fin); m += r.intervalle) {
        if (m >= minutes + r.delaiMinimum) liste.push(enHeure(m));
      }
    });
    return liste;
  }

  const API = { centimes, texte, catalogue, prixLigne, creneaux };
  if (typeof module !== "undefined" && module.exports) module.exports = API;
  else racine.COMMANDE = API;
})(this);
