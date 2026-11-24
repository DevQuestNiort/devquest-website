// Export des logos SVG affichés : SVG autonome (couleurs résolues, police et halo
// embarqués), téléchargement en SVG ou en image matricielle.

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

const SVG_NS = "http://www.w3.org/2000/svg";

/**
 * Lit un halo posé en CSS (`filter: drop-shadow(<couleur> 0px 0px <rayon>px)`, forme calculée
 * par le navigateur). Renvoie null s'il n'y en a pas.
 */
function readHalo(svg: SVGSVGElement): { color: string; radius: number } | null {
  const filter = getComputedStyle(svg).filter;
  if (!filter || filter === "none" || !filter.includes("drop-shadow")) return null;
  const radius = Number(/(\d+(?:\.\d+)?)px\s*\)\s*$/.exec(filter)?.[1] ?? 0);
  const color = /(rgba?\([^)]*\)|#[0-9a-f]{3,8}|[a-z]+)/i.exec(
    filter.replace("drop-shadow(", ""),
  )?.[1];
  return radius > 0 && color ? { color, radius } : null;
}

/**
 * Construit un SVG autonome à partir du logo affiché : couleurs (variables CSS) résolues,
 * police embarquée, dimensions fixées à `width` (hauteur au ratio du viewBox). Un halo CSS est
 * converti en filtre SVG, et l'image est agrandie pour qu'il ne soit pas coupé.
 */
export async function buildStandaloneSvg(svg: SVGSVGElement, width: number) {
  const [viewX, viewY, viewWidth, viewHeight] = svg
    .getAttribute("viewBox")!
    .split(" ")
    .map(Number);

  const clone = svg.cloneNode(true) as SVGSVGElement;
  inlineComputedStyles(svg, clone);
  clone.setAttribute("xmlns", SVG_NS);
  clone.removeAttribute("class");
  clone.style.filter = "";

  // Marge (en unités du viewBox) pour loger le halo : ~1,5 × son rayon à l'écran.
  let pad = 0;
  const halo = readHalo(svg);
  if (halo) {
    const unitsPerPixel = viewWidth / svg.getBoundingClientRect().width;
    pad = halo.radius * 1.5 * unitsPerPixel;
    const filterId = "dq-halo";
    const defs = document.createElementNS(SVG_NS, "defs");
    defs.innerHTML = `<filter id="${filterId}" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0" dy="0" stdDeviation="${
      (halo.radius / 2) * unitsPerPixel
    }" flood-color="${halo.color}"/></filter>`;
    const group = document.createElementNS(SVG_NS, "g");
    group.setAttribute("filter", `url(#${filterId})`);
    while (clone.firstChild) group.appendChild(clone.firstChild);
    clone.append(defs, group);
  }

  const outViewWidth = viewWidth + 2 * pad;
  const outViewHeight = viewHeight + 2 * pad;
  // `width` correspond au logo seul : la marge du halo s'ajoute autour.
  const outWidth = Math.round((width * outViewWidth) / viewWidth);
  const outHeight = Math.round((width * outViewHeight) / viewWidth);
  clone.setAttribute(
    "viewBox",
    `${viewX - pad} ${viewY - pad} ${outViewWidth} ${outViewHeight}`,
  );
  clone.setAttribute("width", String(outWidth));
  clone.setAttribute("height", String(outHeight));

  const style = document.createElementNS(SVG_NS, "style");
  style.textContent = await embedFonts(svg);
  clone.prepend(style);

  return {
    markup: new XMLSerializer().serializeToString(clone),
    width: outWidth,
    height: outHeight,
  };
}

export function triggerDownload(href: string, filename: string) {
  const link = document.createElement("a");
  link.download = filename;
  link.href = href;
  link.click();
}

export async function exportSvg(svg: SVGSVGElement, width: number, filename: string) {
  const { markup } = await buildStandaloneSvg(svg, width);
  const url = URL.createObjectURL(new Blob([markup], { type: "image/svg+xml" }));
  try {
    triggerDownload(url, `${filename}.svg`);
  } finally {
    // Laisse le temps au navigateur de démarrer le téléchargement.
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}

export async function exportPng(svg: SVGSVGElement, width: number, filename: string) {
  const out = await buildStandaloneSvg(svg, width);
  const url = URL.createObjectURL(new Blob([out.markup], { type: "image/svg+xml" }));
  try {
    const image = new Image();
    image.src = url;
    await image.decode();
    const canvas = document.createElement("canvas");
    canvas.width = out.width;
    canvas.height = out.height;
    canvas.getContext("2d")!.drawImage(image, 0, 0, out.width, out.height);
    triggerDownload(canvas.toDataURL("image/png"), `${filename}.png`);
  } finally {
    URL.revokeObjectURL(url);
  }
}

export type LogoFormat = "png" | "svg";

export const EXPORTERS: Record<LogoFormat, typeof exportPng> = {
  png: exportPng,
  svg: exportSvg,
};


// ─── Image + logo incrusté ───────────────────────────────────────────────────

export type RasterFormat = "png" | "jpeg" | "webp";

export const RASTER_FORMATS: { value: RasterFormat; label: string; extension: string }[] = [
  { value: "png", label: "PNG", extension: "png" },
  { value: "jpeg", label: "JPEG", extension: "jpg" },
  { value: "webp", label: "WebP", extension: "webp" },
];

export type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

export interface LogoPlacement {
  corner: Corner;
  /** Largeur du logo, en % de la largeur de l'image. */
  sizePercent: number;
  /** Marge entre le logo et les bords, en % de la largeur de l'image. */
  marginPercent: number;
}

async function loadImage(src: string): Promise<HTMLImageElement> {
  const image = new Image();
  image.src = src;
  await image.decode();
  return image;
}

/** Pose le logo dans le coin demandé de l'image déjà dessinée sur `context`. */
async function drawLogo(
  context: CanvasRenderingContext2D,
  logo: SVGSVGElement,
  placement: LogoPlacement,
  width: number,
  height: number,
) {
  // Le SVG exporté peut être plus grand que le logo (marge du halo) : on recale
  // pour que ce soit le logo lui-même, pas sa marge, qui respecte la marge voulue.
  const logoWidth = Math.round((width * placement.sizePercent) / 100);
  const margin = Math.round((width * placement.marginPercent) / 100);
  const out = await buildStandaloneSvg(logo, logoWidth);
  const haloPad = (out.width - logoWidth) / 2;
  const logoHeight = out.height - 2 * haloPad;
  const left = placement.corner.endsWith("left");
  const top = placement.corner.startsWith("top");
  const x = (left ? margin : width - margin - logoWidth) - haloPad;
  const y = (top ? margin : height - margin - logoHeight) - haloPad;

  const url = URL.createObjectURL(new Blob([out.markup], { type: "image/svg+xml" }));
  try {
    const logoImage = await loadImage(url);
    context.drawImage(logoImage, x, y, out.width, out.height);
  } finally {
    URL.revokeObjectURL(url);
  }
}

/**
 * Dessine l'image en pleine résolution, y incruste le logo affiché (`logo`, même rendu que
 * l'aperçu : couleurs, police, halo) dans le coin demandé, puis télécharge le résultat au
 * format voulu. Sans logo (`null`), sert simplement à convertir l'image.
 */
export async function exportImage(
  imageSrc: string,
  logo: SVGSVGElement | null,
  placement: LogoPlacement,
  format: RasterFormat,
  filename: string,
) {
  const image = await loadImage(imageSrc);
  const width = image.naturalWidth;
  const height = image.naturalHeight;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d")!;
  context.drawImage(image, 0, 0);
  if (logo) await drawLogo(context, logo, placement, width, height);

  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, `image/${format}`, 0.9),
  );
  if (!blob) throw new Error(`Export ${format} impossible dans ce navigateur`);
  // Un navigateur qui ne sait pas encoder le format demandé (ex. WebP sous
  // Safari) renvoie un PNG : on nomme le fichier d'après ce qu'il contient.
  const produced =
    RASTER_FORMATS.find((f) => blob.type === `image/${f.value}`) ?? RASTER_FORMATS[0];
  const blobUrl = URL.createObjectURL(blob);
  triggerDownload(blobUrl, `${filename}.${produced.extension}`);
  setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
  return { requested: format, produced: produced.value };
}
