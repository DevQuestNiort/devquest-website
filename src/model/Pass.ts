// Contenu du pass participant (voir src/data/2027/pass.json).

export interface PassItem {
  /** Chemin d'une icône de public/ (ex. /icons-rp/potion.png). */
  icon: string;
  label: string;
  /** Précision affichée sous le libellé. */
  details?: string;
}

export interface PassData {
  /** Phrase sur la durée de validité du pass. */
  validity: string;
  items: PassItem[];
  /** Ce qu'on peut acheter en plus de sa place. */
  options?: PassItem[];
}
