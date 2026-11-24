"use client";

import { type Corner, RASTER_FORMATS } from "@/components/DevQuestLogo";
import { useGalleryLogo } from "./GalleryLogoContext";
import { ImageWithLogo } from "./ImageWithLogo";
import { LogoControls } from "./LogoControls";
import builderStyles from "./LogoBuilder.module.scss";
import styles from "./ImageComposer.module.scss";

const CORNERS: { value: Corner; label: string }[] = [
  { value: "top-left", label: "Haut gauche" },
  { value: "top-right", label: "Haut droite" },
  { value: "center", label: "Centre" },
  { value: "bottom-left", label: "Bas gauche" },
  { value: "bottom-right", label: "Bas droite" },
];

/**
 * Réglages du logo incrusté (communs à toutes les images) avec un aperçu sur
 * l'image `preview`.
 */
export function ImageComposer({ preview }: { readonly preview: string }) {
  const { options, setOption, placement, setPlacement, format, setFormat } = useGalleryLogo();

  return (
    <div className={styles.composer}>
      <div className={styles.output}>
        <div className={styles.preview}>
          <ImageWithLogo src={preview} showLogo />
        </div>
        <p className={styles.hint}>
          Ces réglages s&apos;appliquent à toutes les images cochées « Avec logo ».
        </p>
      </div>

      <div className={styles.controls}>
        <LogoControls options={options} onChange={setOption} name="composer">
          <fieldset>
            <legend>Position</legend>
            <div className={styles.corners}>
              {CORNERS.map((corner) => (
                <label
                  key={corner.value}
                  className={corner.value === "center" ? styles.center : undefined}
                >
                  <input
                    type="radio"
                    name="composer-corner"
                    checked={placement.corner === corner.value}
                    onChange={() => setPlacement("corner", corner.value)}
                  />
                  {corner.label}
                </label>
              ))}
            </div>
            <label>
              Taille du logo : {placement.sizePercent} % de la largeur
              <input
                type="range"
                min={5}
                max={40}
                value={placement.sizePercent}
                onChange={(e) => setPlacement("sizePercent", Number(e.target.value))}
              />
            </label>
            <label>
              Marge : {placement.corner === "center" ? "sans objet au centre" : `${placement.marginPercent} %`}
              <input
                type="range"
                min={0}
                max={10}
                disabled={placement.corner === "center"}
                value={placement.marginPercent}
                onChange={(e) => setPlacement("marginPercent", Number(e.target.value))}
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Format de téléchargement</legend>
            <div className={builderStyles.row}>
              {RASTER_FORMATS.map((f) => (
                <label key={f.value}>
                  <input
                    type="radio"
                    name="composer-format"
                    checked={format === f.value}
                    onChange={() => setFormat(f.value)}
                  />
                  {f.label}
                </label>
              ))}
            </div>
          </fieldset>
        </LogoControls>
      </div>
    </div>
  );
}
