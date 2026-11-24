// Galeries d'images de la page /assets (voir src/data/config/asset-galleries.json).
// Chaque galerie devient un onglet qui liste les images de son dossier.

export interface AssetGalleryConfig {
  /** Identifiant de l'onglet, utilisé dans l'URL (/assets#id). */
  id: string;
  /** Titre de l'onglet. */
  label: string;
  /** Phrase affichée au-dessus de la galerie. */
  description?: string;
  /** Dossier des images, relatif à public/ (ex. "img/2027/banner"). */
  dir: string;
  /** Préfixe du nom de fichier téléchargé : <prefix>-<nom du fichier d'origine>.png */
  downloadPrefix: string;
  /** Largeur minimale d'une colonne de la grille, en pixels. */
  columnMinWidth: number;
}

/** Infos écrites par scripts/thumbnails.mjs dans public/thumbs/<dir>/manifest.json. */
export type ThumbnailManifest = Record<
  string,
  { width: number; height: number; thumb: string }
>;
