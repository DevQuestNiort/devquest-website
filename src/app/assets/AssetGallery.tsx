import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import type { AssetGalleryConfig, ThumbnailManifest } from "@/model/AssetGallery";
import { GalleryToolbar } from "./GalleryToolbar";
import { GalleryItem } from "./GalleryItem";
import styles from "./AssetGallery.module.scss";

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp"]);
const publicDir = path.join(process.cwd(), "public");

interface GalleryImage {
  src: string;
  thumb: string;
  downloadName: string;
  width?: number;
  height?: number;
  sizeLabel: string;
}

function formatSize(bytes: number): string {
  return bytes >= 1024 * 1024
    ? `${(bytes / 1024 / 1024).toFixed(1).replace(".", ",")} Mo`
    : `${Math.round(bytes / 1024)} Ko`;
}

/**
 * Lit le dossier de la galerie au moment du build : ajouter une image dans le
 * dossier suffit pour qu'elle apparaisse (après `npm run thumbnails` pour avoir
 * une miniature légère ; sinon l'original est affiché).
 */
function readGallery(config: AssetGalleryConfig): GalleryImage[] {
  const dir = path.join(publicDir, config.dir);
  if (!existsSync(dir)) return [];

  const manifestPath = path.join(publicDir, "thumbs", config.dir, "manifest.json");
  const manifest: ThumbnailManifest = existsSync(manifestPath)
    ? JSON.parse(readFileSync(manifestPath, "utf8"))
    : {};

  const files = readdirSync(dir)
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort();

  return files.map((file) => {
    const src = encodeURI(`/${config.dir}/${file}`);
    const info = manifest[file];
    const { name, ext } = path.parse(file);
    return {
      src,
      thumb: info ? encodeURI(info.thumb) : src,
      // Préfixe + nom du fichier : « devquest-2027-carte-fee-bleue.png ».
      downloadName: `${config.downloadPrefix}-${name}${ext.toLowerCase()}`,
      width: info?.width,
      height: info?.height,
      sizeLabel: formatSize(statSync(path.join(dir, file)).size),
    };
  });
}

export function AssetGallery({ config }: { readonly config: AssetGalleryConfig }) {
  const images = readGallery(config);

  return (
    <div className={styles.gallery}>
      {config.description && <p>{config.description}</p>}
      <GalleryToolbar
        name={config.id}
        preview={images[0]?.thumb}
        images={images.map((image) => image.src)}
      />
      {images.length === 0 ? (
        <p>Aucune image pour le moment.</p>
      ) : (
        <ul
          className={styles.grid}
          style={{ "--column-min": `${config.columnMinWidth}px` } as React.CSSProperties}
        >
          {images.map((image) => (
            <GalleryItem
              key={image.src}
              src={image.src}
              thumb={image.thumb}
              filename={image.downloadName.replace(/\.[^.]+$/, "")}
              width={image.width}
              height={image.height}
              info={`${image.width && image.height ? `${image.width} × ${image.height} px · ` : ""}${image.sizeLabel}`}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
