"use client";

import { useRef, useState } from "react";

interface DownloadLogoPngProperties {
  /** Un logo SVG (ex. `<DevQuestLogoLongDate />`) : le premier `<svg>` rendu est exporté. */
  readonly children: React.ReactNode;
  /** Nom du fichier téléchargé, sans extension. @default "devquest-logo" */
  readonly filename?: string;
  /** Largeur du PNG en pixels, la hauteur suit le ratio du logo. @default 1200 */
  readonly width?: number;
  /** Libellé du bouton. @default "Télécharger en PNG" */
  readonly label?: string;
}

const STYLE_PROPERTIES = ["fill", "stroke", "stroke-width", "paint-order", "font-family", "font-size", "font-weight", "opacity"] as const;

/** Recopie les styles calculés (variables CSS résolues) de l'original vers le clone. */
function inlineComputedStyles(source: Element, target: Element) {
  const computed = getComputedStyle(source);
  const style = (target as SVGElement).style;
  for (const property of STYLE_PROPERTIES) {
    style.setProperty(property, computed.getPropertyValue(property));
  }
  Array.from(source.children).forEach((child, index) => {
    inlineComputedStyles(child, target.children[index]);
  });
}

/** Trouve la police (next/font) utilisée par les textes du logo et la renvoie en `@font-face` base64. */
async function embedFonts(svg: SVGSVGElement): Promise<string> {
  const family = svg.querySelector("text")
    ? getComputedStyle(svg.querySelector("text")!).fontFamily.split(",")[0].trim().replace(/["']/g, "")
    : null;
  if (!family) return "";
  const faces: string[] = [];
  for (const sheet of Array.from(document.styleSheets)) {
    let rules: CSSRuleList;
    try {
      rules = sheet.cssRules;
    } catch {
      continue;
    }
    for (const rule of Array.from(rules)) {
      if (!(rule instanceof CSSFontFaceRule)) continue;
      if (rule.style.getPropertyValue("font-family").replace(/["']/g, "").trim() !== family) continue;
      const url = /url\(["']?([^"')]+)["']?\)/.exec(rule.style.getPropertyValue("src"))?.[1];
      if (!url) continue;
      const blob = await (await fetch(url)).blob();
      const data = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.readAsDataURL(blob);
      });
      faces.push(
        `@font-face{font-family:"${family}";src:url(${data});font-weight:${rule.style.getPropertyValue("font-weight") || "400"};}`,
      );
    }
  }
  return faces.join("");
}

async function exportPng(svg: SVGSVGElement, width: number, filename: string) {
  const [, , viewWidth, viewHeight] = svg.getAttribute("viewBox")!.split(" ").map(Number);
  const height = Math.round((width * viewHeight) / viewWidth);

  const clone = svg.cloneNode(true) as SVGSVGElement;
  inlineComputedStyles(svg, clone);
  clone.setAttribute("width", String(width));
  clone.setAttribute("height", String(height));
  clone.removeAttribute("class");
  clone.style.filter = "";
  const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
  style.textContent = await embedFonts(svg);
  clone.prepend(style);

  const url = URL.createObjectURL(
    new Blob([new XMLSerializer().serializeToString(clone)], { type: "image/svg+xml" }),
  );
  try {
    const image = new Image();
    image.src = url;
    await image.decode();
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d")!.drawImage(image, 0, 0, width, height);
    const link = document.createElement("a");
    link.download = `${filename}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  } finally {
    URL.revokeObjectURL(url);
  }
}

/**
 * Affiche le logo passé en enfant avec un bouton qui l'exporte en PNG transparent, avec les
 * couleurs et textes actuellement affichés (variables CSS de thème résolues, police Teko embarquée).
 */
export default function DownloadLogoPng({
  children,
  filename = "devquest-logo",
  width = 1200,
  label = "Télécharger en PNG",
}: DownloadLogoPngProperties) {
  const container = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState(false);

  const handleClick = async () => {
    const svg = container.current?.querySelector("svg");
    if (!svg) return;
    setBusy(true);
    try {
      await exportPng(svg, width, filename);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div ref={container}>
      {children}
      <div>
        <button type="button" onClick={handleClick} disabled={busy}>
          {label}
        </button>
      </div>
    </div>
  );
}
