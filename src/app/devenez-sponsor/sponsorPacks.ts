import rawData from "@/data/2027/sponsor-packs.json";
import type {
  CountLabel,
  SponsorPack,
  SponsorPacksData,
  SponsorPerk,
} from "@/model/SponsorPack";

/**
 * Vérifie la cohérence du JSON (groupes, clés d'options, types de valeurs).
 * Exécuté au chargement du module : une erreur fait échouer le build.
 */
function validate(data: SponsorPacksData): SponsorPacksData {
  const groupKeys = new Set(data.groups.map((g) => g.key));
  const perksByKey = new Map<string, SponsorPerk>();

  for (const perk of data.perks) {
    if (perksByKey.has(perk.key)) {
      throw new Error(`sponsor-packs.json : option « ${perk.key} » en double`);
    }
    if (!groupKeys.has(perk.group)) {
      throw new Error(
        `sponsor-packs.json : option « ${perk.key} » → groupe inconnu « ${perk.group} »`,
      );
    }
    // Le type dit déjà flag | count, mais le JSON n'est pas vérifié par TS.
    const kind: string = perk.kind;
    if (kind !== "flag" && kind !== "count") {
      throw new Error(
        `sponsor-packs.json : option « ${perk.key} » → kind doit être "flag" ou "count"`,
      );
    }
    perksByKey.set(perk.key, perk);
  }

  for (const pack of data.packs) {
    for (const [key, value] of Object.entries(pack.perks)) {
      const perk = perksByKey.get(key);
      if (!perk) {
        throw new Error(
          `sponsor-packs.json : pack ${pack.code} → option inconnue « ${key} »`,
        );
      }
      const ok =
        perk.kind === "flag"
          ? value === true
          : typeof value === "number" && value > 0;
      if (!ok) {
        throw new Error(
          `sponsor-packs.json : pack ${pack.code} → « ${key} » attend ${
            perk.kind === "flag" ? "true" : "un nombre > 0"
          }`,
        );
      }
    }
  }

  return data;
}

export const { groups, perks, packs } = validate(rawData as SponsorPacksData);

function formatCount(label: CountLabel, n: number): string {
  const template = typeof label === "string" ? label : n > 1 ? label.other : label.one;
  return template.replaceAll("{n}", String(n));
}

/** Libellés des options d'un pack pour un groupe donné (affichage carte). */
export function packPerkLabels(
  pack: SponsorPack,
  group: string,
): { label: string; details?: string }[] {
  return perks.flatMap((perk) => {
    const value = pack.perks[perk.key];
    if (perk.group !== group || value === undefined) return [];
    const label =
      perk.kind === "count" ? formatCount(perk.label, Number(value)) : perk.label;
    return [{ label, details: perk.details }];
  });
}

/** Libellé de ligne d'une option dans le tableau comparatif. */
export function tableLabel(perk: SponsorPerk): string {
  return perk.kind === "count" ? perk.tableLabel : perk.label;
}

/** Contenu d'une case du tableau comparatif. */
export function tableCell(pack: SponsorPack, perk: SponsorPerk): string {
  const value = pack.perks[perk.key];
  if (value === undefined) return "—";
  return perk.kind === "count" ? String(value) : "✓";
}
