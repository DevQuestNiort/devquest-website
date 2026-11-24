// Apparition / disparition programmée de contenus (sections, boutons, menu).
//
// Deux façons de programmer, cumulables :
// - par feature : les dates sont déclarées une fois dans
//   src/data/config/features.json (ex. "billetterie") et partagées par tous
//   les contenus qui y font référence ;
// - par dates directes (showFrom / showUntil) sur le contenu lui-même.
// Si les deux sont présentes, le contenu n'est visible que si les deux le permettent.
//
// Le site est statique : le HTML est figé au build. Les dates sont donc
// évaluées deux fois :
// - au build (et au premier rendu dans le navigateur) avec l'heure du build,
//   pour que le HTML généré et l'hydratation React concordent ;
// - puis dans le navigateur avec l'heure réelle (voir useNow).
// Un redéploiement nocturne (.github/workflows/deploy.yml) garde le HTML à jour.

import featuresData from "@/data/config/features.json";

/** Fuseau dans lequel sont écrites les dates sans fuseau explicite. */
const TIME_ZONE = "Europe/Paris";

/** Heure du build, injectée par next.config.mjs (identique côté build et navigateur). */
export const BUILD_TIME = Date.parse(process.env.NEXT_PUBLIC_BUILD_TIME ?? "") || Date.now();

export interface Schedule {
  /** Nom d'une feature de features.json, dont les dates s'appliquent. */
  feature?: string;
  /** Visible à partir de cette date (incluse). Ex. "2026-12-01" ou "2026-11-27T12:00". */
  showFrom?: string;
  /** Visible jusqu'à cette date (exclue). Même format. */
  showUntil?: string;
}

const LOCAL_DATE = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2})(?::(\d{2}))?)?$/;

/** Décalage (ms) du fuseau de Paris par rapport à UTC à l'instant donné. */
function parisOffset(utc: number): number {
  const name = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    timeZoneName: "longOffset",
  })
    .formatToParts(new Date(utc))
    .find((part) => part.type === "timeZoneName")!.value; // ex. "GMT+01:00"
  const match = /GMT([+-])(\d{2}):(\d{2})/.exec(name);
  if (!match) return 0;
  const minutes = Number(match[2]) * 60 + Number(match[3]);
  return (match[1] === "-" ? -1 : 1) * minutes * 60_000;
}

/**
 * Convertit une date écrite à l'heure de Paris ("2026-11-27" = minuit,
 * "2026-11-27T12:00") en timestamp. Une date avec fuseau explicite
 * ("...Z", "...+01:00") est prise telle quelle. Lève une erreur si le format
 * est invalide : au build, l'erreur fait échouer la génération du site.
 */
export function parseScheduleDate(value: string): number {
  const local = LOCAL_DATE.exec(value);
  if (local) {
    const [, y, mo, d, h = "0", mi = "0", s = "0"] = local;
    const asUtc = Date.UTC(+y, +mo - 1, +d, +h, +mi, +s);
    // Deux passes : l'heure d'été peut changer entre l'heure UTC et l'heure locale.
    const first = asUtc - parisOffset(asUtc);
    return asUtc - parisOffset(first);
  }
  const parsed = Date.parse(value);
  if (Number.isNaN(parsed)) {
    throw new Error(
      `Date de programmation invalide : « ${value} » (attendu : "AAAA-MM-JJ" ou "AAAA-MM-JJTHH:MM")`,
    );
  }
  return parsed;
}

export interface Feature {
  /** À quoi sert la feature et où elle est utilisée (documentation). */
  description?: string;
  showFrom?: string;
  showUntil?: string;
}

export const FEATURES: Record<string, Feature> = featuresData;

// Vérifie les dates de toutes les features au chargement : une date mal
// écrite fait échouer le build, même si la feature n'est encore utilisée nulle part.
for (const [name, feature] of Object.entries(FEATURES)) {
  for (const date of [feature.showFrom, feature.showUntil]) {
    if (!date) continue;
    try {
      parseScheduleDate(date);
    } catch (error) {
      throw new Error(`features.json, feature « ${name} » : ${(error as Error).message}`);
    }
  }
}

function inDateRange(now: number, showFrom?: string, showUntil?: string): boolean {
  if (showFrom && now < parseScheduleDate(showFrom)) return false;
  if (showUntil && now >= parseScheduleDate(showUntil)) return false;
  return true;
}

/**
 * Le contenu doit-il être visible à l'instant `now` ? Combine la feature
 * (si indiquée) et les dates directes : il faut que les deux l'autorisent.
 */
export function isScheduledVisible(
  now: number,
  { feature, showFrom, showUntil }: Schedule,
): boolean {
  if (feature) {
    const declared = FEATURES[feature];
    if (!declared) {
      throw new Error(
        `Feature inconnue : « ${feature} ». Features déclarées dans features.json : ${Object.keys(FEATURES).join(", ")}`,
      );
    }
    if (!inDateRange(now, declared.showFrom, declared.showUntil)) return false;
  }
  return inDateRange(now, showFrom, showUntil);
}

/** Raccourci : la feature est-elle active à l'instant `now` ? */
export function isFeatureActive(now: number, feature: string): boolean {
  return isScheduledVisible(now, { feature });
}
