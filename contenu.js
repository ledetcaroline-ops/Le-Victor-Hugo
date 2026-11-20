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
  /* Notre histoire : un paragraphe par ligne.
     Une ligne qui commence par "## " devient un petit titre,
     une ligne qui commence par "~ " devient la signature. */
  histoire: {
    fr: [
      "Il y a des villes que l’on découvre, et d’autres qui font partie de nous depuis toujours.",
      "Pour nous, Montreuil-sur-Mer, c’est bien plus qu’une adresse. C’est une ville dans laquelle nous avons grandi, construit des souvenirs et imaginé notre avenir.",
      "C’est ici, au cœur de cette ville chargée d’histoire, dans le Pas-de-Calais, que nous avons choisi, ensemble, de donner vie à notre projet : Le Victor Hugo, un restaurant convivial où le burger est à l’honneur.",
      "## Un nom qui ne doit rien au hasard.",
      "À Montreuil-sur-Mer, l’histoire de Victor Hugo et des Misérables occupe une place particulière. Une histoire à laquelle Maxime a lui-même participé, dans le spectacle qui fait vivre cette œuvre au cœur de notre ville.",
      "Un attachement que l’on retrouve jusque dans notre carte, à travers des burgers qui racontent, à leur manière, un petit morceau de notre histoire.",
      "## Notre idée ? Faire du burger une véritable cuisine.",
      "Des produits sélectionnés avec soin, des producteurs et artisans de notre région, des recettes imaginées et travaillées par nos soins, des associations de saveurs qui évoluent au fil des saisons.",
      "Nous aimons les choses simples, à condition qu’elles soient bien faites. Un bon pain, une belle viande, un fromage de caractère, une sauce maison… Chaque détail compte.",
      "C’est ainsi que nous imaginons notre cuisine : des burgers faits maison, des recettes généreuses, des produits de qualité et une carte qui évolue au fil de nos envies et des saisons.",
      "## Mais le Victor Hugo, c’est aussi notre envie de faire vivre un lieu.",
      "Un café le matin, un déjeuner en famille, une pause dans l’après-midi, un verre entre amis ou un dîner autour d’un bon burger. Que vous soyez Montreuillois, de passage dans la région ou en visite sur la Côte d’Opale, nous voulions un endroit où chacun se sente bien, tout simplement.",
      "Pour déjeuner ou dîner à Montreuil-sur-Mer, découvrir nos burgers maison, profiter d’un moment convivial ou commander à emporter, nous sommes heureux de vous accueillir place Gambetta.",
      "Depuis le 6 novembre 2025, cette aventure est devenue notre quotidien.",
      "Et derrière chaque assiette, chaque service et chaque sourire, il y a surtout deux personnes heureuses de faire vivre leur projet dans une ville qui leur tient à cœur.",
      "Bienvenue chez nous.",
      "~ Emma & Maxime"
    ],
    en: [
      "Some towns you discover, and others have always been part of who you are.",
      "For us, Montreuil-sur-Mer is much more than an address. It’s the town where we grew up, made our memories and dreamed up our future.",
      "It’s here, in the heart of this historic town in the Pas-de-Calais, that we chose, together, to bring our project to life: Le Victor Hugo, a friendly restaurant where burgers take centre stage.",
      "## A name chosen for a reason.",
      "In Montreuil-sur-Mer, the story of Victor Hugo and Les Misérables holds a special place. Maxime has taken part in it himself, in the show that brings the novel to life in the heart of our town.",
      "You’ll find that attachment right down to our menu, with burgers that each tell, in their own way, a little piece of our story.",
      "## Our idea? To make burgers real cooking.",
      "Carefully chosen ingredients, producers and craftspeople from our region, recipes we create and fine-tune ourselves, and flavour pairings that change with the seasons.",
      "We love simple things, as long as they’re done well. Good bread, quality meat, a cheese with character, a homemade sauce… Every detail counts.",
      "That’s how we see our cooking: homemade burgers, generous recipes, quality ingredients and a menu that changes with our ideas and the seasons.",
      "## But the Victor Hugo is also about bringing a place to life.",
      "A coffee in the morning, a family lunch, an afternoon break, a drink with friends or dinner over a good burger. Whether you live in Montreuil, are passing through or visiting the Opal Coast, we wanted a place where everyone simply feels at home.",
      "For lunch or dinner in Montreuil-sur-Mer, to try our homemade burgers, enjoy a friendly moment or order takeaway, we’ll be happy to welcome you on Place Gambetta.",
      "Since 6 November 2025, this adventure has been our everyday life.",
      "And behind every plate, every service and every smile, there are above all two people happy to bring their project to life in a town close to their hearts.",
      "Welcome to our place.",
      "~ Emma & Maxime"
    ]
  },

  /* ---------- Annonce (bandeau en haut du site) ----------
     Pratique pour une fermeture exceptionnelle ou un évènement.
     Laissez fr et en vides ("") pour ne rien afficher. */
  annonce: { fr: "", en: "" }
};
