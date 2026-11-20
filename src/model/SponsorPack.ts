// Données des packs sponsors (voir src/data/2027/sponsor-packs.json).

export interface SponsorPerkGroup {
  key: string;
  title: string;
  icon: string;
}

/** Libellé avec gabarit `{n}`, éventuellement décliné singulier / pluriel. */
export type CountLabel = string | { one: string; other: string };

/**
 * Une option est soit présente/absente (flag), soit chiffrée (count).
 * - label : libellé dans les cartes
 * - tableLabel : libellé de ligne dans le tableau comparatif (count uniquement)
 * - details : explication plus longue (sous le libellé dans le tableau,
 *   en info-bulle dans les cartes)
 */
export type SponsorPerk = { key: string; group: string; details?: string } & (
  | { kind: "flag"; label: string }
  | { kind: "count"; label: CountLabel; tableLabel: string }
);

export interface SponsorPack {
  code: string;
  icon: string;
  name: string;
  price: string;
  /** Prix d'un second stand, si l'extension est possible. */
  extension?: string;
  /** true pour une option flag, un nombre pour une option count ; absent = non inclus. */
  perks: Record<string, true | number>;
}

export interface SponsorPacksData {
  groups: SponsorPerkGroup[];
  /** L'ordre de ce catalogue donne l'ordre d'affichage (cartes et tableau). */
  perks: SponsorPerk[];
  packs: SponsorPack[];
}
