# Modifier le site du Victor Hugo

Tout le contenu est dans **un seul fichier : `contenu.js`**. Ouvrez-le avec un éditeur de texte (TextEdit en mode texte brut, ou VS Code), modifiez le texte entre guillemets, enregistrez, puis rechargez la page.

## Changer le burger du moment (chaque mois)

1. Mettez la photo du nouveau burger dans le dossier `images/` (par exemple `burger-novembre.jpg`).
2. Dans `contenu.js`, partie `burgerDuMoment`, modifiez :
   - `nom` : le nom du burger (ou laissez `""` s'il n'en a pas) ;
   - `description` : la composition, en français (`fr`) et en anglais (`en`) ;
   - `photo` : `"images/burger-novembre.jpg"`.

## Changer la carte (chaque saison)

- `saison` : par exemple `"Carte d’hiver"` / `"Winter menu"`.
- `burgers` : chaque burger a un `nom`, une `description`, une `photo`, et `vege: true` s'il est végétarien.
- Pour ajouter un burger, copiez un bloc `{ … },` complet et collez-le juste après.

## Autres réglages

- **Prix de la formule petit-déj** : `petitDej.prix`, par exemple `"6,50 €"`.
- **Liens Facebook et avis Google** : `facebook` et `avisGoogle`.
- **Fermeture exceptionnelle** : remplissez `annonce`, par exemple `{ fr: "Fermé le 24 décembre", en: "Closed on 24 December" }`. Un bandeau s'affiche alors en haut du site. Remettez `""` pour l'enlever.

## Si la page s'affiche vide après une modification

Il manque souvent une virgule ou un guillemet. Annulez votre dernière modification (Cmd+Z), enregistrez, puis réessayez.
