"use client";

import { useEffect, useState } from "react";
import { DownloadLogoPng } from "@/components/DevQuestLogo";
import { LogoControls } from "./LogoControls";
import { LogoMark } from "./LogoMark";
import {
  DEFAULT_OPTIONS,
  type LogoOptions,
  PRESETS,
  SCALES,
  SIZE_MAX,
  SIZE_MIN,
  buildFilename,
  optionsToQuery,
  queryToOptions,
} from "./logoOptions";
import styles from "./LogoBuilder.module.scss";

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

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.builder}>
      <LogoControls options={options} onChange={set} name="builder">
        <fieldset>
          <legend>Taille</legend>
          <label>
            Hauteur : {options.size} px
            <input
              type="range"
              min={SIZE_MIN}
              max={SIZE_MAX}
              step={5}
              value={options.size}
              onChange={(e) => set("size", Number(e.target.value))}
            />
          </label>
          <div className={styles.row}>
            Résolution du PNG :
            {SCALES.map((scale) => (
              <label key={scale}>
                <input
                  type="radio"
                  name="builder-scale"
                  checked={options.scale === scale}
                  onChange={() => set("scale", scale)}
                />
                ×{scale}
              </label>
            ))}
          </div>
        </fieldset>
      </LogoControls>

      <div className={styles.output}>
        {/* data-theme : applique la palette de l'édition choisie à l'aperçu seul. */}
        <div className={styles.preview} data-theme={options.edition}>
          <DownloadLogoPng filename={buildFilename(options)} scale={options.scale}>
            <div className={styles.stage}>
              <LogoMark options={options} height={options.size} />
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
                  scale: options.scale,
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
