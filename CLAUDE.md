# DevQuest website

## Conventions de contenu

- **Pas d'emoji dans le site** : ni dans les titres, les textes, les boutons, les
  menus, ni dans les données JSON affichées. Pour illustrer, utiliser les icônes
  du site (`public/icons-rp/`). Les symboles typographiques (✓, —, ↗, ©) restent
  autorisés. Exception : les contenus fournis par des tiers (titres et résumés
  des sessions, bios des speakers dans `src/data/<année>/`) sont repris tels quels.

## Documentation

- Ajouter des images, des galeries ou une nouvelle édition sur la page `/assets` :
  [src/data/config/assets.md](src/data/config/assets.md). Après tout ajout d'image dans une
  galerie, lancer `npm run thumbnails` et commiter les miniatures générées.
