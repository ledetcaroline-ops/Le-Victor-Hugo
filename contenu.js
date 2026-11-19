/* ==========================================================================
   LE VICTOR HUGO BURGER — CONTENU DU SITE
   --------------------------------------------------------------------------
   C'est le SEUL fichier à modifier pour mettre le site à jour.
   Règles simples :
   - Changez uniquement le texte entre guillemets "…".
   - Gardez les virgules à la fin des lignes et les guillemets autour du texte.
   - Chaque texte existe en français (fr) et en anglais (en).
   - Pour une apostrophe, utilisez ’ (apostrophe typographique) ou l'apostrophe
     normale ' : les deux marchent car le texte est entre guillemets doubles.
   Voir le guide MODIFIER-LE-SITE.md pour des exemples.
   ========================================================================== */

const CONTENU = {

  /* ---------- Coordonnées ---------- */
  telephone: "03 21 06 88 37",
  adresse: "3 place Gambetta, 62170 Montreuil-sur-Mer",
  instagram: "https://www.instagram.com/levictorhugoburger/",
  facebook: "",      // ← collez ici le lien de la page Facebook
  avisGoogle: "",    // ← collez ici le lien vers la fiche Google (pour les avis)

  /* ---------- Le burger du moment (change chaque mois) ---------- */
  burgerDuMoment: {
    mois:  { fr: "Ce mois-ci", en: "This month" },
    nom:   { fr: "", en: "" },   // ← nom du burger s'il en a un (laissé vide = pas de nom)
    description: {
      fr: "Bun brioché, bœuf Angus, morbier, lard fumé, oignons caramélisés, salade, mayonnaise maison",
      en: "Brioche bun, Angus beef, Morbier cheese, smoked bacon, caramelised onions, lettuce, homemade mayonnaise"
    },
    prix: "16,90 €",
    photo: "images/photographe/burger-du-moment.jpg"
  },

  /* ---------- La carte (change chaque saison) ---------- */
  saison: { fr: "Carte d’automne", en: "Autumn menu" },
  prixBurger: "15,90 €",

  burgers: [
    {
      nom: { fr: "Le Victor Hugo", en: "The Victor Hugo" },
      description: {
        fr: "Bun brioché, bœuf Angus, cheddar maison, lard fumé, oignons frits, pickles, salade, sauce signature",
        en: "Brioche bun, Angus beef, homemade cheddar, smoked bacon, crispy onions, pickles, lettuce, signature sauce"
      },
      photo: "images/photographe/burger-victor-hugo.jpg",
      vege: false
    },
    {
      nom: { fr: "Le Villageois", en: "The Villageois" },
      description: {
        fr: "Bun brioché, bœuf Angus, Maroilles le Beffroi AOP, oignons caramélisés, pickles, salade, sauce signature",
        en: "Brioche bun, Angus beef, Maroilles le Beffroi PDO cheese, caramelised onions, pickles, lettuce, signature sauce"
      },
      photo: "images/photographe/burger-villageois.jpg",
      vege: false
    },
    {
      nom: { fr: "Le Poulet Raoul", en: "The Poulet Raoul" },
      description: {
        fr: "Bun brioché, poulet mariné, Tomme de Raoul fumée, champignons poêlés, salade, crème moutarde à l’ancienne",
        en: "Brioche bun, marinated chicken, smoked Tomme de Raoul cheese, pan-fried mushrooms, lettuce, wholegrain mustard cream"
      },
      photo: "images/photographe/burger-poulet-raoul.jpg",
      vege: false
    },
    {
      nom: { fr: "Le Végé d’automne", en: "The Autumn Veggie" },
      description: {
        fr: "Bun brioché, galette de butternut, Saint-Nectaire, noix, salade, crème moutarde à l’ancienne",
        en: "Brioche bun, butternut squash patty, Saint-Nectaire cheese, walnuts, lettuce, wholegrain mustard cream"
      },
      photo: "images/photographe/burger-vege.jpg",
      vege: true
    }
  ],

  accompagnements: [
    { nom: { fr: "Frites ou coleslaw maison (portion seule)", en: "Homemade fries or coleslaw (side only)" }, prix: "4,50 €" }
  ],

  supplements: [
    { nom: { fr: "Double burger", en: "Double patty" }, prix: "+5 €" },
    { nom: { fr: "Lard fumé", en: "Smoked bacon" }, prix: "+2 €" },
    { nom: { fr: "Œuf", en: "Egg" }, prix: "+1 €" },
    { nom: { fr: "Cheddar sur les frites", en: "Cheddar on fries" }, prix: "+2 €" }
  ],

  menuEnfant: {
    nom: { fr: "Le Petit Hugo", en: "The Little Hugo" },
    age: { fr: "jusqu’à 12 ans", en: "up to age 12" },
    prix: "11,90 €",
    description: {
      fr: "Bun du boulanger, bœuf Angus, cheddar maison, ketchup + frites ou coleslaw + sirop à l’eau + 1 boule de glace au choix",
      en: "Baker’s bun, Angus beef, homemade cheddar, ketchup + fries or coleslaw + fruit cordial + 1 scoop of ice cream"
    }
  },

  // photo : laissez "" si le dessert n'a pas de photo
  desserts: [
    { nom: { fr: "Mousse au chocolat", en: "Chocolate mousse" }, prix: "6 €", photo: "images/photographe/mousse-chocolat.jpg" },
    { nom: { fr: "Tiramisu spéculoos", en: "Speculoos tiramisu" }, prix: "6 €", photo: "images/photographe/tiramisu.jpg" },
    { nom: { fr: "Affogato", en: "Affogato" }, prix: "4 €", photo: "" },
    { nom: { fr: "Café gourmand", en: "Café gourmand (coffee & mini desserts)" }, prix: "7,50 €", photo: "images/photographe/cafe-gourmand.jpg" },
    {
      nom: { fr: "Gaufre liégeoise", en: "Liège waffle" },
      detail: { fr: "Nutella, sucre, caramel beurre salé ou chocolat noir", en: "Nutella, sugar, salted caramel or dark chocolate" },
      prix: "5 €",
      photo: "images/photographe/gaufre.jpg"
    }
  ],

  glaces: {
    detail: { fr: "Artisan glacier — Maison Antolin", en: "Artisan ice cream — Maison Antolin" },
    parfums: {
      fr: "Vanille, chocolat, café, caramel, spéculoos, pistache, stracciatella, rhum-raisin, citron, fraise, framboise",
      en: "Vanilla, chocolate, coffee, caramel, speculoos, pistachio, stracciatella, rum & raisin, lemon, strawberry, raspberry"
    },
    prix: [
      { nom: { fr: "1 boule", en: "1 scoop" }, prix: "2 €" },
      { nom: { fr: "2 boules", en: "2 scoops" }, prix: "3,50 €" },
      { nom: { fr: "3 boules", en: "3 scoops" }, prix: "5 €" }
    ],
    supplements: {
      fr: "Chantilly, caramel beurre salé ou chocolat noir +1 € · boule de glace +1,50 €",
      en: "Whipped cream, salted caramel or dark chocolate +€1 · extra scoop +€1.50"
    }
  },

  /* ---------- Le matin ---------- */
  petitDej: {
    prix: "7,90 €",   // ← prix de la formule (laissé vide "" = pas de prix affiché)
    description: {
      fr: "Pain brioché ou pancakes avec une boisson chaude.",
      en: "Brioche bread or pancakes with a hot drink."
    },
    choix: {
      fr: "Au choix : confiture maison, Nutella, sirop d’érable, caramel beurre salé ou chocolat noir.",
      en: "Your choice of: homemade jam, Nutella, maple syrup, salted caramel or dark chocolate."
    },
    option: {
      fr: "+ 2 € pour un jus d’orange pressé ou un jus de pomme artisanal.",
      en: "+ €2 for a freshly squeezed orange juice or an artisan apple juice."
    },
    gourmands: {
      fr: "Et pour les gourmands, nos pancakes sont aussi à déguster au dessert ou au goûter !",
      en: "And for those with a sweet tooth, our pancakes are also served for dessert or as an afternoon treat!"
    }
  },

  /* ---------- Commande en ligne à emporter ---------- */
  commandeEnLigne: {
    ouverte: true,   // ← mettez false pour mettre les commandes en ligne en pause (coup de feu, fermeture…)
    joursOuverts: ["mardi", "mercredi", "jeudi", "vendredi", "samedi"],
    // Heures de retrait proposées : premier et dernier créneau de chaque service
    creneaux: [
      { debut: "12:00", fin: "13:45" },
      { debut: "19:00", fin: "21:15" }
    ],
    intervalle: 15,     // minutes entre deux créneaux
    delaiMinimum: 20    // minutes minimum entre la commande et le retrait
  },

  /* ---------- Horaires ---------- */
  horaires: [
    { jour: { fr: "Lundi", en: "Monday" }, texte: { fr: "Fermé", en: "Closed" } },
    { jour: { fr: "Mardi – Samedi", en: "Tuesday – Saturday" }, texte: {
        fr: "Bar dès 9h30 · Cuisine 12h–14h et 19h–21h30",
        en: "Bar from 9:30am · Kitchen 12–2pm and 7–9:30pm" } },
    { jour: { fr: "Dimanche", en: "Sunday" }, texte: { fr: "Fermé", en: "Closed" } }
  ],

  /* ---------- Textes de présentation ---------- */
  accroche: {
    fr: "Des burgers faits maison avec des produits locaux, servis sur la place Gambetta.",
    en: "Homemade burgers with local produce, served on Place Gambetta."
  },
  histoire: {
    fr: [
      "Au cœur de Montreuil-sur-Mer, Le Victor Hugo est un lieu de vie où l’on aime se retrouver, partager et profiter des plaisirs simples.",
      "Depuis son ouverture en novembre 2025, le Victor Hugo cultive une idée simple : proposer une cuisine généreuse et faite maison, dans une ambiance conviviale et décontractée.",
      "Ici, les burgers sont à l’honneur, préparés avec soin, accompagnés de frites maison et de recettes qui évoluent au fil des saisons. Une cuisine sans prétention, où le goût et la qualité des produits restent essentiels.",
      "Mais le Victor Hugo, c’est aussi bien plus qu’un restaurant. C’est un café le matin, une pause gourmande dans l’après-midi, un verre entre amis en fin de journée ou un dîner à partager.",
      "Un lieu vivant, accueillant et sans chichis, où l’on vient aussi bien pour manger que pour passer un bon moment.",
      "Bienvenue au Victor Hugo, tout simplement."
    ],
    en: [
      "In the heart of Montreuil-sur-Mer, Le Victor Hugo is a lively place where people love to get together, share and enjoy life’s simple pleasures.",
      "Since opening in November 2025, the Victor Hugo has held on to one simple idea: generous, homemade food in a warm and relaxed atmosphere.",
      "Burgers take centre stage here, made with care and served with homemade fries, alongside recipes that change with the seasons. Unpretentious food, where taste and quality ingredients come first.",
      "But the Victor Hugo is much more than a restaurant. It’s a coffee in the morning, a sweet break in the afternoon, a drink with friends at the end of the day, or a dinner to share.",
      "A lively, welcoming, no-fuss place, where you come as much to eat as to have a good time.",
      "Welcome to the Victor Hugo, simply."
    ]
  },

  /* ---------- Annonce (bandeau en haut du site) ----------
     Pratique pour une fermeture exceptionnelle ou un évènement.
     Laissez fr et en vides ("") pour ne rien afficher. */
  annonce: { fr: "", en: "" }
};
