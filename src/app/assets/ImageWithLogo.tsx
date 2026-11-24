"use client";

import { useEffect, useRef, useState } from "react";
import { LOGO_REFERENCE_WIDTH, useGalleryLogo } from "./GalleryLogoContext";
import { LogoMark } from "./LogoMark";
import styles from "./ImageWithLogo.module.scss";

/** Largeur affichée d'un élément, mise à jour quand il change de taille. */
function useWidth(ref: React.RefObject<HTMLElement>) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return width;
}

interface ImageWithLogoProperties {
  readonly src: string;
  readonly showLogo: boolean;
  readonly width?: number;
  readonly height?: number;
  readonly lazy?: boolean;
}

/**
 * Image avec, si `showLogo`, le logo incrusté tel qu'il sera exporté (réglages
 * communs du GalleryLogoProvider). Le logo est rendu à sa largeur de référence
 * puis réduit : même rapport logo / halo que dans le fichier téléchargé.
 */
export function ImageWithLogo({ src, showLogo, width, height, lazy }: ImageWithLogoProperties) {
  const { options, placement } = useGalleryLogo();
  const ref = useRef<HTMLDivElement>(null);
  const imageWidth = useWidth(ref);

  const scale = (imageWidth * placement.sizePercent) / 100 / LOGO_REFERENCE_WIDTH;
  const margin = (imageWidth * placement.marginPercent) / 100;
  // Au centre : ancré au milieu de l'image, réduit depuis son propre centre.
  // Dans un coin : ancré au coin (marge comprise), réduit depuis ce coin.
  const position: React.CSSProperties =
    placement.corner === "center"
      ? {
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: "center",
        }
      : (() => {
          const [vertical, horizontal] = placement.corner.split("-") as [
            "top" | "bottom",
            "left" | "right",
          ];
          return {
            [vertical]: margin,
            [horizontal]: margin,
            transform: `scale(${scale})`,
            transformOrigin: `${vertical} ${horizontal}`,
          };
        })();

  return (
    // data-theme : la palette de l'édition choisie s'applique au logo.
    <div ref={ref} className={styles.frame} data-theme={options.edition}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        width={width}
        height={height}
        loading={lazy ? "lazy" : undefined}
        decoding="async"
      />
      {showLogo && imageWidth > 0 && (
        <div
          className={styles.logo}
          style={{ width: LOGO_REFERENCE_WIDTH, ...position }}
        >
          <LogoMark
            options={options}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      )}
    </div>
  );
}
