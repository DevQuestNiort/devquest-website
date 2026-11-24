// Options du logo DevQuest (modèle, édition, couleurs, halo…) partagées par le
// constructeur de logo et l'incrustation de logo sur les images de /assets.

import editionsData from "@/data/config/editions.json";
import type { Edition as EditionInfo } from "@/model/Edition";

// ─── Options ─────────────────────────────────────────────────────────────────

export const MODELS = [
  { value: "court", label: "Court" },
  { value: "long", label: "Long" },
  { value: "epee", label: "Épée" },
] as const;

// Ville et date fixées par édition : pas de saisie libre, pour que les logos
// diffusés restent conformes. Seule l'édition à venir a une date.
export const EDITIONS: EditionInfo[] = editionsData;
export const EDITION_YEARS = EDITIONS.map((e) => e.year);

// Les couleurs « thème » passent par les variables CSS : elles prennent la
// palette de l'édition choisie (data-theme posé sur l'aperçu).
export const COLOR_SCHEMES = [
  { value: "theme", label: "Thème", dark: "var(--chapter-color)", light: "var(--main-color)" },
  { value: "inverse", label: "Thème inversé", dark: "var(--main-color)", light: "var(--chapter-color)" },
  { value: "noir", label: "Noir et blanc", dark: "black", light: "white" },
  { value: "blanc", label: "Blanc et noir", dark: "white", light: "black" },
  { value: "perso", label: "Personnalisé", dark: "", light: "" },
] as const;

export const HALO_COLORS = [
  { value: "complementary", label: "Complémentaire", color: "var(--complementary-color)" },
  { value: "chapter", label: "Chapitre", color: "var(--chapter-color)" },
  { value: "main", label: "Sable", color: "var(--main-color)" },
  { value: "blanc", label: "Blanc", color: "white" },
  { value: "noir", label: "Noir", color: "black" },
] as const;

export type Model = (typeof MODELS)[number]["value"];
export type ColorScheme = (typeof COLOR_SCHEMES)[number]["value"];
export type HaloColor = (typeof HALO_COLORS)[number]["value"];

export interface LogoOptions {
  model: Model;
  edition: string;
  colors: ColorScheme;
  customDark: string;
  customLight: string;
  background: boolean;
  /** Ville (et date pour l'édition à venir) de l'édition, ou rien. */
  text: boolean;
  halo: boolean;
  haloColor: HaloColor;
  haloSize: number;
  /** Hauteur exacte du PNG exporté, en pixels, halo compris. */
  size: number;
}

export const DEFAULT_OPTIONS: LogoOptions = {
  model: "court",
  edition: EDITION_YEARS[0],
  colors: "theme",
  customDark: "#1465bb",
  customLight: "#f1ddb6",
  background: true,
  text: true,
  halo: false,
  haloColor: "chapter",
  haloSize: 20,
  size: 512,
};

export const SIZE_MIN = 32;
export const SIZE_MAX = 1024;

// ─── Préréglages (reprennent les variantes de l'ancienne page) ───────────────

export const PRESETS: { label: string; options: Partial<LogoOptions> }[] = [
  { label: "Court, thème", options: {} },
  { label: "Court, noir et blanc", options: { colors: "noir" } },
  { label: "Court, blanc sans fond", options: { colors: "blanc", background: false, text: false } },
  { label: "Court, sans texte", options: { text: false } },
  { label: "Court, avec halo", options: { halo: true } },
  { label: "Long, thème", options: { model: "long" } },
  { label: "Long, noir et blanc", options: { model: "long", colors: "noir" } },
  { label: "Long, avec halo", options: { model: "long", halo: true } },
  { label: "Épée, thème", options: { model: "epee" } },
  { label: "Épée, inversé", options: { model: "epee", colors: "inverse" } },
];

// ─── Lien partageable : options <-> paramètres d'URL ─────────────────────────

const BOOLEAN_KEYS = ["background", "text", "halo"] as const;
const NUMBER_KEYS = ["haloSize", "size"] as const;

export function optionsToQuery(options: LogoOptions): string {
  const params = new URLSearchParams();
  for (const key of Object.keys(options) as (keyof LogoOptions)[]) {
    if (options[key] === DEFAULT_OPTIONS[key]) continue;
    const value = options[key];
    params.set(key, typeof value === "boolean" ? (value ? "1" : "0") : String(value));
  }
  return params.toString();
}

/** Taille entière, ramenée entre SIZE_MIN et SIZE_MAX. */
export function clampSize(size: number): number {
  return Math.min(SIZE_MAX, Math.max(SIZE_MIN, Math.round(size)));
}

function oneOf<T extends string>(value: string | null, allowed: readonly T[], fallback: T): T {
  return value !== null && (allowed as readonly string[]).includes(value) ? (value as T) : fallback;
}

export function queryToOptions(query: string): LogoOptions {
  const params = new URLSearchParams(query);
  const options: LogoOptions = { ...DEFAULT_OPTIONS };
  options.model = oneOf(params.get("model"), MODELS.map((m) => m.value), options.model);
  options.edition = oneOf(params.get("edition"), EDITION_YEARS, options.edition);
  options.colors = oneOf(params.get("colors"), COLOR_SCHEMES.map((c) => c.value), options.colors);
  options.haloColor = oneOf(params.get("haloColor"), HALO_COLORS.map((c) => c.value), options.haloColor);
  for (const key of ["customDark", "customLight"] as const) {
    const value = params.get(key);
    if (value !== null) options[key] = value;
  }
  for (const key of BOOLEAN_KEYS) {
    const value = params.get(key);
    if (value !== null) options[key] = value === "1";
  }
  for (const key of NUMBER_KEYS) {
    const value = Number(params.get(key));
    if (params.has(key) && Number.isFinite(value)) options[key] = value;
  }
  options.size = clampSize(options.size);
  return options;
}

// ─── Dérivés ─────────────────────────────────────────────────────────────────

/**
 * Le logo épée n'existe qu'avec fond : la lame est découpée dans le disque et
 * son ombre est calculée à partir de la couleur claire, qui ne peut pas être vide.
 */
export const supportsNoBackground = (model: Model) => model !== "epee";

export const hasBackground = (options: LogoOptions) =>
  options.background || !supportsNoBackground(options.model);

export function resolveColors(options: LogoOptions) {
  const scheme = COLOR_SCHEMES.find((c) => c.value === options.colors)!;
  const dark = options.colors === "perso" ? options.customDark : scheme.dark;
  const light = options.colors === "perso" ? options.customLight : scheme.light;
  return { dark, light: hasBackground(options) ? light : "none" };
}

export function buildFilename(options: LogoOptions): string {
  const hasText = options.model !== "epee";
  return [
    "devquest-logo",
    options.model,
    options.edition,
    options.colors,
    hasBackground(options) ? null : "sans-fond",
    hasText && !options.text ? "sans-texte" : null,
    options.halo ? "halo" : null,
    `${options.size}px`,
  ]
    .filter(Boolean)
    .join("-");
}

/** Édition sélectionnée (repli sur l'édition à venir si l'année est inconnue). */
export function selectedEdition(options: LogoOptions) {
  return EDITIONS.find((e) => e.year === options.edition) ?? EDITIONS[0];
}
