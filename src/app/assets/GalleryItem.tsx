"use client";

import { useState } from "react";
import { useGalleryLogo } from "./GalleryLogoContext";
import { ImageWithLogo } from "./ImageWithLogo";
import styles from "./AssetGallery.module.scss";

interface GalleryItemProperties {
  /** Image originale. */
  readonly src: string;
  /** Miniature affichée. */
  readonly thumb: string;
  /** Nom du fichier téléchargé, sans extension. */
  readonly filename: string;
  readonly width?: number;
  readonly height?: number;
  /** Dimensions et poids, déjà formatés. */
  readonly info: string;
}

/**
 * Une image de galerie : miniature (avec le logo incrusté si « Avec logo » est
 * coché, selon les réglages communs), infos et téléchargement.
 */
export function GalleryItem({ src, thumb, filename, width, height, info }: GalleryItemProperties) {
  const { download, hasLogo, setLogo } = useGalleryLogo();
  const withLogo = hasLogo(src);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const onDownload = async () => {
    setBusy(true);
    setMessage(null);
    try {
      setMessage(await download({ src, filename, withLogo }));
    } catch {
      setMessage("Le téléchargement a échoué. Réessayez, ou choisissez un autre format.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <li className={styles.item}>
      <a href={src} target="_blank" rel="noopener noreferrer" title="Ouvrir l'original">
        <ImageWithLogo src={thumb} showLogo={withLogo} width={width} height={height} lazy />
      </a>
      <div className={styles.meta}>{info}</div>
      <div className={styles.actions}>
        <label className={styles.withLogo}>
          <input
            type="checkbox"
            checked={withLogo}
            onChange={(e) => setLogo([src], e.target.checked)}
          />
          Avec logo
        </label>
        <button type="button" className={styles.download} onClick={onDownload} disabled={busy}>
          {busy ? "Préparation…" : "Télécharger"}
        </button>
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </li>
  );
}
