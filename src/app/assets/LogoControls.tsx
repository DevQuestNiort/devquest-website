"use client";

import {
  COLOR_SCHEMES,
  EDITION_YEARS,
  HALO_COLORS,
  type HaloColor,
  type LogoOptions,
  MODELS,
  hasBackground,
  selectedEdition,
  supportsNoBackground,
} from "./logoOptions";
import styles from "./LogoBuilder.module.scss";

interface LogoControlsProperties {
  readonly options: LogoOptions;
  readonly onChange: <K extends keyof LogoOptions>(key: K, value: LogoOptions[K]) => void;
  /** Préfixe des attributs name des boutons radio (plusieurs formulaires par page). */
  readonly name: string;
  /** Réglages supplémentaires, ajoutés après ceux du logo. */
  readonly children?: React.ReactNode;
}

/** Réglages du logo : modèle, édition, couleurs, texte, halo. */
export function LogoControls({ options, onChange: set, name, children }: LogoControlsProperties) {
  const edition = selectedEdition(options);

  return (
    <form className={styles.controls} onSubmit={(e) => e.preventDefault()}>
      <fieldset>
        <legend>Modèle</legend>
        {MODELS.map((m) => (
          <label key={m.value}>
            <input
              type="radio"
              name={`${name}-model`}
              checked={options.model === m.value}
              onChange={() => set("model", m.value)}
            />
            {m.label}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Édition</legend>
        <select
          value={options.edition}
          onChange={(e) => set("edition", e.target.value)}
          aria-label="Édition"
        >
          {EDITION_YEARS.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </fieldset>

      <fieldset>
        <legend>Couleurs</legend>
        {COLOR_SCHEMES.map((c) => (
          <label key={c.value}>
            <input
              type="radio"
              name={`${name}-colors`}
              checked={options.colors === c.value}
              onChange={() => set("colors", c.value)}
            />
            {c.label}
          </label>
        ))}
        {options.colors === "perso" && (
          <div className={styles.row}>
            <label>
              Sombre
              <input
                type="color"
                value={options.customDark}
                onChange={(e) => set("customDark", e.target.value)}
              />
            </label>
            <label>
              Clair
              <input
                type="color"
                value={options.customLight}
                onChange={(e) => set("customLight", e.target.value)}
              />
            </label>
          </div>
        )}
        <label>
          <input
            type="checkbox"
            checked={hasBackground(options)}
            disabled={!supportsNoBackground(options.model)}
            onChange={(e) => set("background", e.target.checked)}
          />
          Avec fond (parties claires remplies)
          {!supportsNoBackground(options.model) && (
            <small>(toujours avec fond pour l&apos;épée)</small>
          )}
        </label>
      </fieldset>

      {options.model !== "epee" && (
        <fieldset>
          <legend>Texte</legend>
          <label>
            <input
              type="checkbox"
              checked={options.text}
              onChange={(e) => set("text", e.target.checked)}
            />
            {edition.date
              ? `Avec la ville et la date (${edition.city}, ${edition.date})`
              : `Avec la ville (${edition.city})`}
          </label>
        </fieldset>
      )}

      <fieldset>
        <legend>Halo</legend>
        <label>
          <input
            type="checkbox"
            checked={options.halo}
            onChange={(e) => set("halo", e.target.checked)}
          />
          Avec halo
        </label>
        {options.halo && (
          <>
            <select
              value={options.haloColor}
              onChange={(e) => set("haloColor", e.target.value as HaloColor)}
              aria-label="Couleur du halo"
            >
              {HALO_COLORS.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
            <label>
              Intensité : {options.haloSize}
              <input
                type="range"
                min={5}
                max={60}
                value={options.haloSize}
                onChange={(e) => set("haloSize", Number(e.target.value))}
              />
            </label>
          </>
        )}
      </fieldset>

      {children}
    </form>
  );
}
