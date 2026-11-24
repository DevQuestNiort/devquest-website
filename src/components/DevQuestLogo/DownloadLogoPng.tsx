"use client";

import { useRef, useState } from "react";

import { EXPORTERS, type LogoFormat } from "./exportImage";

interface DownloadLogoPngProperties {
  /** Un logo SVG (ex. `<DevQuestLogoLongDate />`) : le premier `<svg>` rendu est exporté. */
  readonly children: React.ReactNode;
  /** Nom du fichier téléchargé, sans extension. @default "devquest-logo" */
  readonly filename?: string;
  /** Largeur du logo exporté en pixels, la hauteur suit le ratio du logo. @default 1200 */
  readonly width?: number;
  /**
   * Si défini, ignore `width` : hauteur exacte du fichier exporté en pixels,
   * halo compris (la largeur suit les proportions).
   */
  readonly height?: number;
  /** Libellé du bouton PNG. @default "Télécharger en PNG" */
  readonly label?: string;
  /** Libellé du bouton SVG. @default "Télécharger en SVG" */
  readonly svgLabel?: string;
  /** Formats proposés, un bouton par format. @default ["png", "svg"] */
  readonly formats?: ("png" | "svg")[];
}

/**
 * Affiche le logo passé en enfant avec des boutons qui l'exportent en PNG transparent et/ou en
 * SVG, avec les couleurs et textes actuellement affichés (variables CSS de thème résolues,
 * police Teko embarquée).
 */
export default function DownloadLogoPng({
  children,
  filename = "devquest-logo",
  width = 1200,
  height,
  label = "Télécharger en PNG",
  svgLabel = "Télécharger en SVG",
  formats = ["png", "svg"],
}: DownloadLogoPngProperties) {
  const container = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState(false);

  const handleClick = async (format: LogoFormat) => {
    const svg = container.current?.querySelector("svg");
    if (!svg) return;
    setBusy(true);
    try {
      await EXPORTERS[format](svg, height ? { height } : { width }, filename);
    } finally {
      setBusy(false);
    }
  };

  const labels: Record<LogoFormat, string> = { png: label, svg: svgLabel };

  return (
    <div ref={container}>
      {children}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem" }}>
        {formats.map((format) => (
          <button
            key={format}
            type="button"
            onClick={() => handleClick(format)}
            disabled={busy}
          >
            {labels[format]}
          </button>
        ))}
      </div>
    </div>
  );
}
