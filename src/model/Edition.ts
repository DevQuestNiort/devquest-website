// Informations fixes de chaque édition (voir src/data/config/editions.json).

export interface Edition {
  year: string;
  /** Ville affichée sur les logos. */
  city: string;
  /**
   * Date affichée sur les logos. Renseignée uniquement pour l'édition à venir :
   * les logos des éditions passées n'affichent que la ville.
   */
  date?: string;
}
