// Génère les miniatures des galeries de la page /assets.
//
//   npm run thumbnails
//
// Pour chaque galerie de src/data/config/asset-galleries.json, crée une
// miniature WebP de chaque image dans public/thumbs/<dir>/, plus un
// manifest.json (dimensions de l'original + chemin de la miniature).
// Les miniatures déjà à jour sont conservées, celles d'images supprimées sont
// effacées. Les fichiers générés sont à commiter avec les images.
//
// sharp n'est pas une dépendance directe du projet (il vient de Storybook) :
// ce script tourne en local uniquement, jamais pendant le build de déploiement.

import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const galleries = JSON.parse(
  readFileSync(path.join(root, "src/data/config/asset-galleries.json"), "utf8"),
);

const THUMB_WIDTH = 600;
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp"]);

let sharp;
try {
  sharp = (await import("sharp")).default;
} catch {
  console.error("sharp est introuvable. Lancez d'abord une installation des dépendances (npm install).");
  process.exit(1);
}

for (const gallery of galleries) {
  const sourceDir = path.join(publicDir, gallery.dir);
  const thumbDir = path.join(publicDir, "thumbs", gallery.dir);
  if (!existsSync(sourceDir)) {
    console.warn(`[${gallery.id}] dossier absent : public/${gallery.dir}`);
    continue;
  }
  mkdirSync(thumbDir, { recursive: true });

  const files = readdirSync(sourceDir)
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort();

  const manifest = {};
  let created = 0;
  for (const file of files) {
    const source = path.join(sourceDir, file);
    const thumbName = `${path.parse(file).name}.webp`;
    const thumb = path.join(thumbDir, thumbName);

    const metadata = await sharp(source).metadata();
    const upToDate = existsSync(thumb) && statSync(thumb).mtimeMs >= statSync(source).mtimeMs;
    if (!upToDate) {
      await sharp(source)
        .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
        .webp({ quality: 75 })
        .toFile(thumb);
      created++;
    }
    manifest[file] = {
      width: metadata.width,
      height: metadata.height,
      thumb: `/thumbs/${gallery.dir}/${thumbName}`,
    };
  }

  // Supprime les miniatures dont l'image d'origine n'existe plus.
  const expected = new Set(Object.values(manifest).map((entry) => path.basename(entry.thumb)));
  let removed = 0;
  for (const file of readdirSync(thumbDir)) {
    if (file !== "manifest.json" && !expected.has(file)) {
      rmSync(path.join(thumbDir, file));
      removed++;
    }
  }

  writeFileSync(path.join(thumbDir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(
    `[${gallery.id}] ${files.length} image(s) : ${created} miniature(s) créée(s), ${removed} supprimée(s)`,
  );
}
