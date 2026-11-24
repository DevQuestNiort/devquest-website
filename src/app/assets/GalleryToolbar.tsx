"use client";

import { useEffect, useRef, useState } from "react";
import { RASTER_FORMATS } from "@/components/DevQuestLogo";
import { useGalleryLogo } from "./GalleryLogoContext";
import { ImageComposer } from "./ImageComposer";
import styles from "./AssetGallery.module.scss";

interface GalleryToolbarProperties {
  /** Préfixe des attributs name (une barre par galerie). */
  readonly name: string;
  /** Image utilisée pour l'aperçu de la personnalisation du logo. */
  readonly preview?: string;
  /** Images de la galerie (src), pour « Logo sur toutes les images ». */
  readonly images: string[];
}

/**
 * Réglages communs à toutes les images : format de téléchargement et
 * personnalisation du logo incrusté.
 */
export function GalleryToolbar({ name, preview, images }: GalleryToolbarProperties) {
  const { format, setFormat, hasLogo, setLogo } = useGalleryLogo();
  const [customizing, setCustomizing] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const allRef = useRef<HTMLInputElement>(null);

  const checkedCount = images.filter(hasLogo).length;
  const allChecked = images.length > 0 && checkedCount === images.length;
  // État « partiel » de la case quand seules certaines images ont le logo.
  useEffect(() => {
    if (allRef.current) {
      allRef.current.indeterminate = checkedCount > 0 && !allChecked;
    }
  }, [checkedCount, allChecked]);

  // L'outil n'est monté qu'à l'ouverture de la fenêtre.
  useEffect(() => {
    if (customizing) dialogRef.current?.showModal();
  }, [customizing]);

  return (
    <div className={styles.toolbar}>
      <fieldset className={styles.formats}>
        <legend>Format de téléchargement</legend>
        {RASTER_FORMATS.map((f) => (
          <label key={f.value}>
            <input
              type="radio"
              name={`${name}-format`}
              checked={format === f.value}
              onChange={() => setFormat(f.value)}
            />
            {f.label}
          </label>
        ))}
        <small>
          PNG : sans perte, plus lourd. JPEG : léger, accepté partout. WebP :
          très léger, mais pas lu par tous les outils.
        </small>
      </fieldset>

      {preview && (
        <div className={styles.logoSettings}>
          <button type="button" className={styles.secondary} onClick={() => setCustomizing(true)}>
            Personnaliser le logo
          </button>
          <label className={styles.withLogo}>
            <input
              ref={allRef}
              type="checkbox"
              checked={allChecked}
              onChange={(e) => setLogo(images, e.target.checked)}
            />
            Logo sur toutes les images
          </label>
          <small>Modèle, couleurs et position du logo des images cochées « Avec logo ».</small>
        </div>
      )}

      {customizing && preview && (
        <dialog
          ref={dialogRef}
          className={styles.dialog}
          onClose={() => setCustomizing(false)}
          aria-label="Personnaliser le logo"
        >
          <div className={styles.dialogHeader}>
            <h3>Personnaliser le logo</h3>
            <button type="button" onClick={() => dialogRef.current?.close()}>
              Fermer
            </button>
          </div>
          <ImageComposer preview={preview} />
        </dialog>
      )}
    </div>
  );
}
