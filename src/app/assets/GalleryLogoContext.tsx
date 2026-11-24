"use client";

import { createContext, useContext, useRef, useState } from "react";
import {
  type LogoPlacement,
  RASTER_FORMATS,
  type RasterFormat,
  exportImage,
} from "@/components/DevQuestLogo";
import { LogoMark } from "./LogoMark";
import { DEFAULT_OPTIONS, type LogoOptions } from "./logoOptions";

/**
 * Largeur de référence du logo incrusté, en px. Le halo est exprimé en px :
 * pour qu'il garde la même proportion dans l'aperçu et dans l'export, le logo
 * est toujours rendu à cette largeur (mis à l'échelle en CSS dans l'aperçu).
 */
export const LOGO_REFERENCE_WIDTH = 240;

const DEFAULT_PLACEMENT: LogoPlacement = {
  corner: "bottom-right",
  sizePercent: 18,
  marginPercent: 3,
};

interface DownloadRequest {
  src: string;
  /** Nom sans extension. */
  filename: string;
  withLogo: boolean;
}

interface GalleryLogoValue {
  options: LogoOptions;
  setOption: <K extends keyof LogoOptions>(key: K, value: LogoOptions[K]) => void;
  placement: LogoPlacement;
  setPlacement: <K extends keyof LogoPlacement>(key: K, value: LogoPlacement[K]) => void;
  format: RasterFormat;
  setFormat: (format: RasterFormat) => void;
  /** Images (par src) où le logo est incrusté. */
  hasLogo: (src: string) => boolean;
  /** Coche ou décoche « Avec logo » pour une ou plusieurs images. */
  setLogo: (srcs: string[], value: boolean) => void;
  /** Télécharge l'image au format choisi, avec ou sans logo. Renvoie un message d'avertissement éventuel. */
  download: (request: DownloadRequest) => Promise<string | null>;
}

const GalleryLogoContext = createContext<GalleryLogoValue | null>(null);

export function useGalleryLogo() {
  const value = useContext(GalleryLogoContext);
  if (!value) throw new Error("useGalleryLogo doit être utilisé dans <GalleryLogoProvider>");
  return value;
}

function extensionOf(path: string) {
  return path.split(".").pop()!.toLowerCase();
}

/**
 * Réglages du logo incrusté, communs à toutes les images des galeries : on le
 * personnalise une fois, puis on coche « Avec logo » sur les images voulues.
 */
export function GalleryLogoProvider({ children }: { readonly children: React.ReactNode }) {
  // Sans texte par défaut : sur une image, un logo compact passe mieux.
  const [options, setOptions] = useState<LogoOptions>({ ...DEFAULT_OPTIONS, text: false });
  const [placement, setPlacementState] = useState<LogoPlacement>(DEFAULT_PLACEMENT);
  const [format, setFormat] = useState<RasterFormat>("png");
  const exportLogo = useRef<HTMLDivElement>(null);
  const [withLogo, setWithLogo] = useState<ReadonlySet<string>>(new Set());

  const value: GalleryLogoValue = {
    options,
    setOption: (key, v) => setOptions((current) => ({ ...current, [key]: v })),
    placement,
    setPlacement: (key, v) => setPlacementState((current) => ({ ...current, [key]: v })),
    format,
    setFormat,
    hasLogo: (src) => withLogo.has(src),
    setLogo: (srcs, checked) =>
      setWithLogo((current) => {
        const next = new Set(current);
        for (const src of srcs) {
          if (checked) next.add(src);
          else next.delete(src);
        }
        return next;
      }),
    download: async ({ src, filename, withLogo }) => {
      const wanted = RASTER_FORMATS.find((f) => f.value === format)!;
      // Rien à transformer : on sert le fichier d'origine tel quel.
      if (!withLogo && extensionOf(src) === wanted.extension) {
        const link = document.createElement("a");
        link.href = src;
        link.download = `${filename}.${wanted.extension}`;
        link.click();
        return null;
      }
      const logo = withLogo ? exportLogo.current?.querySelector("svg") ?? null : null;
      const result = await exportImage(
        src,
        logo,
        placement,
        format,
        withLogo ? `${filename}-logo` : filename,
      );
      return result.produced !== result.requested
        ? `Votre navigateur ne sait pas produire du ${wanted.label} : l'image a été enregistrée en ${result.produced.toUpperCase()}.`
        : null;
    },
  };

  return (
    <GalleryLogoContext.Provider value={value}>
      {children}
      {/* Logo de référence pour l'export, rendu hors écran à largeur fixe. */}
      <div
        ref={exportLogo}
        aria-hidden
        data-theme={options.edition}
        style={{
          position: "fixed",
          left: -10000,
          top: 0,
          width: LOGO_REFERENCE_WIDTH,
          pointerEvents: "none",
        }}
      >
        <LogoMark options={options} style={{ width: "100%", height: "auto", display: "block" }} />
      </div>
    </GalleryLogoContext.Provider>
  );
}
