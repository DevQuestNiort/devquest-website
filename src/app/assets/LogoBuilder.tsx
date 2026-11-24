"use client";

import { useEffect, useState } from "react";
import { DownloadLogoPng } from "@/components/DevQuestLogo";
import { LogoControls } from "./LogoControls";
import { LogoMark } from "./LogoMark";
import {
  DEFAULT_OPTIONS,
  type LogoOptions,
  PRESETS,
  SIZE_MAX,
  SIZE_MIN,
  buildFilename,
  clampSize,
  optionsToQuery,
  queryToOptions,
} from "./logoOptions";
import styles from "./LogoBuilder.module.scss";

/** Hauteur maximale de l'aperçu à l'écran, en px. */
const PREVIEW_MAX = 260;

export function LogoBuilder() {
  const [options, setOptions] = useState<LogoOptions>(DEFAULT_OPTIONS);
  const [copied, setCopied] = useState(false);

  // Charge les réglages depuis l'URL au premier affichage (lien partagé).
  useEffect(() => {
    setOptions(queryToOptions(window.location.search));
  }, []);

  // Garde l'URL synchronisée, sans recharger ni empiler d'historique.
  useEffect(() => {
    const query = optionsToQuery(options);
    const { pathname, hash } = window.location;
    const url = `${pathname}${query ? `?${query}` : ""}${hash}`;
    window.history.replaceState(null, "", url);
  }, [options]);

  const set = <K extends keyof LogoOptions>(key: K, value: LogoOptions[K]) =>
    setOptions((current) => ({ ...current, [key]: value }));

  // Saisie libre dans le champ ; la valeur n'est ramenée entre SIZE_MIN et
  // SIZE_MAX qu'à la validation (sinon taper « 512 » bloquerait sur « 5 »).
  const [sizeInput, setSizeInput] = useState(String(DEFAULT_OPTIONS.size));
  useEffect(() => setSizeInput(String(options.size)), [options.size]);
  const commitSize = () => {
    const value = Number(sizeInput);
    const size = Number.isFinite(value) && sizeInput.trim() !== "" ? clampSize(value) : options.size;
    set("size", size);
    setSizeInput(String(size));
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.builder}>
      <LogoControls options={options} onChange={set} name="builder">
        <fieldset>
          <legend>Taille du PNG</legend>
          <div className={styles.row}>
            <label>
              Hauteur
              <input
                type="number"
                min={SIZE_MIN}
                max={SIZE_MAX}
                step={1}
                value={sizeInput}
                onChange={(e) => setSizeInput(e.target.value)}
                onBlur={commitSize}
                onKeyDown={(e) => e.key === "Enter" && commitSize()}
                className={styles.sizeInput}
              />
              px
            </label>
          </div>
          <input
            type="range"
            min={SIZE_MIN}
            max={SIZE_MAX}
            step={1}
            value={options.size}
            onChange={(e) => set("size", Number(e.target.value))}
            aria-label="Hauteur du PNG"
          />
          <small>
            De {SIZE_MIN} à {SIZE_MAX} px, halo compris. La largeur suit les
            proportions du logo.
          </small>
        </fieldset>
      </LogoControls>

      <div className={styles.output}>
        {/* data-theme : applique la palette de l'édition choisie à l'aperçu seul. */}
        <div className={styles.preview} data-theme={options.edition}>
          <DownloadLogoPng filename={buildFilename(options)} height={options.size}>
            <div className={styles.stage}>
              {/* Aperçu plafonné : l'export, lui, fait exactement options.size px. */}
              <LogoMark options={options} height={Math.min(options.size, PREVIEW_MAX)} />
            </div>
          </DownloadLogoPng>
        </div>
        <p className={styles.filename}>{buildFilename(options)}</p>
        <button type="button" onClick={copyLink}>
          {copied ? "Lien copié !" : "Copier le lien de ce logo"}
        </button>
      </div>

      <div className={styles.presets}>
        <h3>Préréglages</h3>
        <div className={styles.presetList}>
          {PRESETS.map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() =>
                setOptions({
                  ...DEFAULT_OPTIONS,
                  edition: options.edition,
                  size: options.size,
                  ...preset.options,
                })
              }
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
