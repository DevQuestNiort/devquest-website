# menu.json

Données du menu de navigation, consommées par [PageHeader.tsx](../components/PageHeader/PageHeader.tsx)
(nav desktop + drawer mobile, rendus à partir du même tableau `items`).

## Structure

```json
{
  "items": [ /* NavItem[] */ ]
}
```

### NavItem

| Champ         | Type       | Requis | Description                                                                 |
| ------------- | ---------- | :----: | ----------------------------------------------------------------------------|
| `label`       | `string`   |   ✔    | Texte affiché. Peut contenir un emoji ou un symbole (ex. `"Kit partenaires ↗"`). |
| `href`        | `string`   |   —    | Cible du lien. Absent si l'item a des `children` (c'est alors un simple déclencheur de dropdown). Externe si l'URL commence par `http` (ouvre dans un nouvel onglet avec `rel="noopener noreferrer"`), interne sinon (`next/link`). |
| `activeMatch` | `string[]` |   —    | Préfixes de chemin additionnels qui doivent aussi activer le lien (surlignage), en plus de `href`. Sans ce champ, l'item n'est actif que sur correspondance exacte avec `href`. Utile quand la page cible (`/schedule/day-1`) ne couvre pas toutes les routes concernées (`/sessions/...`). |
| `children`    | `NavChild[]` |   —   | Transforme l'item en dropdown (desktop) / section repliée (mobile). Si présent, `href` et `activeMatch` sont ignorés. |

### NavChild

| Champ   | Type     | Requis | Description                        |
| ------- | -------- | :----: | ----------------------------------- |
| `label` | `string` |   ✔    | Texte affiché dans le sous-menu.    |
| `href`  | `string` |   ✔    | Toujours interne dans l'usage actuel, mais suit la même règle interne/externe que `NavItem.href`. |

## Détection "actif"

- Item avec `children` : actif si le chemin courant commence par le `href` d'un des enfants.
- Item sans `children`, sans `activeMatch` : actif si le chemin courant est **exactement égal** à `href`.
- Item sans `children`, avec `activeMatch` : actif si le chemin courant **commence par** un des préfixes listés (le `href` lui-même n'est pas testé automatiquement — l'inclure dans `activeMatch` si besoin).
- Un enfant (`NavChild`) est actif si le chemin courant est exactement égal à son `href`.

⚠️ Ne pas mettre `"/"` dans `activeMatch` : comme toutes les routes commencent par `/`, ce serait toujours vrai.

## Exemple : ajouter un lien simple

```json
{ "label": "Sponsors", "href": "/sponsors" }
```

## Exemple : ajouter un lien externe

```json
{ "label": "Billetterie ↗", "href": "https://www.billetweb.fr/devquest-2026-billetterie" }
```

## Exemple : ajouter un item de dropdown

```json
{
  "label": "Communauté",
  "children": [
    { "label": "⚔️ La Guilde", "href": "/guilde" }
  ]
}
```
