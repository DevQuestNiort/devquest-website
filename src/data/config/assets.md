# Page Assets : ajouter des assets

La page [`/assets`](../../app/assets/Assets.tsx) met à disposition des sponsors, partenaires
et de la communauté les logos et visuels du DevQuest. Elle est organisée en onglets :

- **Constructeur de logo** : génère le logo à la demande (modèle, édition, couleurs, halo,
  taille), en PNG ou SVG. Rien à ajouter à la main.
- **Une galerie par dossier d'images** (Bannières, Cartes…) : chaque image s'affiche en
  miniature et se télécharge en PNG, JPEG ou WebP, avec ou sans le logo incrusté.

Les galeries se construisent toutes seules à partir des dossiers : **ajouter une image ne
demande aucune modification de code.**

## Ajouter une image dans une galerie existante

1. Déposer le fichier dans le dossier de la galerie (voir le tableau ci-dessous).
2. Générer les miniatures :

   ```sh
   npm run thumbnails
   ```

3. Commiter **l'image et les fichiers générés** dans `public/thumbs/` (miniature `.webp` et
   `manifest.json` mis à jour), puis déployer.

| Onglet    | Dossier                   | Exemple de fichier   | Nom au téléchargement                   |
| --------- | ------------------------- | -------------------- | --------------------------------------- |
| Bannières | `public/img/2027/banner/` | `dragon-lune-doree.png` | `devquest-2027-banniere-dragon-lune-doree.png` |
| Couvertures et fonds d'écran | `public/img/2027/cover/` | `foret-champignons-lumineux.png` | `devquest-2027-couverture-foret-champignons-lumineux.png` |
| Cartes    | `public/img/2027/card/`   | `fee-bleue.png`      | `devquest-2027-carte-fee-bleue.png`     |

Bon à savoir :

- **Formats acceptés** : `.png`, `.jpg`, `.jpeg`, `.webp`. Les autres fichiers du dossier sont
  ignorés.
- **Nommer le fichier d'après ce qu'il montre** (`fee-bleue.png`, `chevalier-chateau-1.png`) :
  ce nom est repris au téléchargement, après le préfixe de la galerie. Minuscules, sans accent
  ni espace, mots séparés par des tirets. Éviter les noms générés par les outils d'IA
  (`u6292796384_a_wide_banner_of...`), illisibles pour les personnes qui téléchargent.
- **Ordre d'affichage** : alphabétique, par nom de fichier. Les variantes d'un même sujet se
  retrouvent donc côte à côte si elles partagent le début de leur nom (`lutin-1`, `lutin-2`…).
- **Taille** : déposer l'image en pleine résolution, c'est elle qui est téléchargée. Le poids
  n'est pas un problème pour la page, qui n'affiche que les miniatures.
- **Si on oublie `npm run thumbnails`**, l'image apparaît quand même, mais la page charge
  l'original à la place de la miniature (beaucoup plus lourd) et n'affiche pas ses dimensions.

## Retirer ou remplacer une image

- **Retirer** : supprimer le fichier, relancer `npm run thumbnails` (qui supprime la miniature
  devenue inutile), commiter.
- **Remplacer** : écraser le fichier en gardant son nom, relancer `npm run thumbnails` (la
  miniature est régénérée car l'image est plus récente qu'elle), commiter.

## Ajouter une galerie (un nouvel onglet)

Par exemple pour des fonds d'écran :

1. Créer le dossier et y déposer les images, par exemple `public/img/2027/wallpaper/`.
2. Ajouter une entrée dans [`asset-galleries.json`](asset-galleries.json). L'ordre des
   entrées donne l'ordre des onglets, après le constructeur de logo :

   ```json
   {
     "id": "fonds-ecran",
     "label": "Fonds d'écran",
     "description": "Pour votre bureau ou votre visio.",
     "dir": "img/2027/wallpaper",
     "downloadPrefix": "devquest-2027-fond-ecran",
     "columnMinWidth": 360
   }
   ```

3. `npm run thumbnails`, puis commiter le dossier, les miniatures et le JSON.

| Champ            | Requis | Description |
| ---------------- | :----: | ----------- |
| `id`             | oui    | Identifiant de l'onglet, utilisé dans l'URL : `/assets#fonds-ecran` ouvre directement cet onglet. Minuscules et tirets, unique. |
| `label`          | oui    | Titre de l'onglet. |
| `description`    | non    | Phrase affichée au-dessus de la galerie. |
| `dir`            | oui    | Dossier des images, **relatif à `public/`**, sans `/` au début ni à la fin. |
| `downloadPrefix` | oui    | Début du nom des fichiers téléchargés, suivi du nom du fichier d'origine (`devquest-2027-fond-ecran-` + `foret.png`). |
| `columnMinWidth` | oui    | Largeur minimale d'une vignette dans la grille, en pixels. Environ `360` pour des images larges (bannières), `220` pour des images carrées. |

## Préparer une nouvelle édition

La ville et la date affichées sur les logos sont fixées par édition dans
[`editions.json`](editions.json) : personne ne peut saisir son propre texte.

1. Ajouter l'édition **en tête** du fichier, avec sa ville et sa date. Elle devient l'édition
   proposée par défaut dans le constructeur et pour le logo incrusté.
2. **Retirer la date de l'édition précédente** : les logos des éditions passées n'affichent
   que la ville.
3. Vérifier que le thème de couleurs de l'année existe dans
   [`_colors.scss`](../../styles/_colors.scss) (bloc `[data-theme="<année>"]`). Sans lui, les
   couleurs « Thème » du logo ne correspondront pas à l'édition.
4. Pour les galeries de la nouvelle année : créer les dossiers (`public/img/<année>/...`) et
   ajouter les entrées correspondantes dans `asset-galleries.json`, comme ci-dessus.

```json
[
  { "year": "2028", "city": "Niort", "date": "8 & 9 Juin" },
  { "year": "2027", "city": "Niort" },
  { "year": "2026", "city": "Niort" }
]
```

## Le script des miniatures

[`scripts/thumbnails.mjs`](../../../scripts/thumbnails.mjs), lancé par `npm run thumbnails`,
parcourt les galeries de `asset-galleries.json` et, pour chacune :

- crée une miniature WebP de 600 px de large de chaque image dans `public/thumbs/<dir>/`
  (les miniatures déjà à jour sont conservées) ;
- supprime les miniatures dont l'image a disparu ;
- écrit `public/thumbs/<dir>/manifest.json` (dimensions des originaux, chemin des
  miniatures), lu par la page au moment du build.

Il utilise `sharp`, déjà installé avec les dépendances du projet (via Storybook). Il tourne
**en local uniquement** : le déploiement ne génère pas les miniatures, d'où l'importance de les
commiter. Si le script indique que `sharp` est introuvable, relancer une installation des
dépendances.
