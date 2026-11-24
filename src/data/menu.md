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
| `label`       | `string`   |   ✔    | Texte affiché. Peut contenir un symbole typographique (ex. `"Kit partenaires ↗"`), pas d'emoji. |
| `href`        | `string`   |   —    | Cible du lien. Absent si l'item a des `children` (c'est alors un simple déclencheur de dropdown). Externe si l'URL commence par `http` (ouvre dans un nouvel onglet avec `rel="noopener noreferrer"`), interne sinon (`next/link`). |
| `activeMatch` | `string[]` |   —    | Préfixes de chemin additionnels qui doivent aussi activer le lien (surlignage), en plus de `href`. Sans ce champ, l'item n'est actif que sur correspondance exacte avec `href`. Utile quand la page cible (`/schedule/day-1`) ne couvre pas toutes les routes concernées (`/sessions/...`). |
| `children`    | `NavChild[]` |   —   | Transforme l'item en dropdown (desktop) / section repliée (mobile). Si présent, `href` et `activeMatch` sont ignorés. Si aucun enfant n'est visible (voir `showFrom` / `showUntil`), l'item entier est masqué. |
| `feature`     | `string`   |   —    | Nom d'une feature de [features.json](config/features.json) : l'entrée suit ses dates. Voir [Apparition programmée](#apparition-programmée). |
| `showFrom`    | `string`   |   —    | Date d'apparition, à l'heure de Paris : `"2026-12-01"` (minuit) ou `"2026-12-01T12:00"`. Voir [Apparition programmée](#apparition-programmée). |
| `showUntil`   | `string`   |   —    | Date de disparition (exclue), même format. |

### NavChild

| Champ   | Type     | Requis | Description                        |
| ------- | -------- | :----: | ----------------------------------- |
| `label` | `string` |   ✔    | Texte affiché dans le sous-menu.    |
| `href`  | `string` |   ✔    | Toujours interne dans l'usage actuel, mais suit la même règle interne/externe que `NavItem.href`. |
| `feature` / `showFrom` / `showUntil` | `string` | — | Comme pour `NavItem`. |

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

## Apparition programmée

Une entrée (ou un bloc de page) peut apparaître ou disparaître à une date, sans redéployer.
Deux façons, cumulables.

### Par feature (recommandé dès qu'une date sert à plusieurs endroits)

Une feature regroupe les dates d'une fonctionnalité, déclarées **une seule fois** dans
[`config/features.json`](config/features.json) :

```json
{
  "billetterie": {
    "description": "Ouverture de la billetterie : entrée du menu, section de l'accueil.",
    "showFrom": "2027-01-15"
  }
}
```

Chaque contenu y fait référence par son nom ; changer la date dans `features.json` les déplace
tous :

```json
{ "label": "Billetterie", "href": "/billetterie", "feature": "billetterie" }
```

```tsx
<Scheduled feature="billetterie">…section de l'accueil…</Scheduled>
```

Renseigner `description` avec les endroits où la feature est utilisée aide à s'y retrouver.
Un nom de feature inconnu (faute de frappe) fait échouer le build.

### Par dates directes

Pour un contenu ponctuel, les dates se mettent directement dessus :

```json
{ "label": "Programme", "href": "/programme", "showFrom": "2027-04-01T09:00" }
```

```tsx
<Scheduled showUntil="2026-11-27T13:00">…annonce de la réunion…</Scheduled>
```

Avec une feature **et** des dates directes, le contenu n'est visible que si les deux
l'autorisent (ex. `feature="billetterie" showUntil="2027-06-01"` : suit l'ouverture de la
billetterie, mais disparaît le 1er juin).

### Règles communes

- Dates **à l'heure de Paris**, au format `AAAA-MM-JJ` (minuit) ou `AAAA-MM-JJTHH:MM`.
  `showFrom` est inclus, `showUntil` exclu. Une date mal écrite fait échouer le build.
- Le navigateur bascule à la minute près, même sur une page déjà ouverte. Le site est aussi
  reconstruit chaque nuit (`.github/workflows/deploy.yml`) pour que le HTML généré soit à jour.
- Le contenu masqué reste présent dans le code de la page : rien de confidentiel.
- Composant : [`<Scheduled>`](../components/Scheduled/Scheduled.tsx) ; logique :
  [`src/lib/schedule.ts`](../lib/schedule.ts).
