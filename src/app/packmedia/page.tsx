import fs from "fs";
import path from "path";
import { PackMedia } from "./PackMedia";

export const dynamic = "force-static";

function readImageDir(dir: string): string[] {
  return fs
    .readdirSync(path.join(process.cwd(), "public", dir))
    .filter((f) => /\.(png|jpg|jpeg|svg|webp)$/i.test(f))
    .sort();
}

export default function Page() {
  const visualFiles = readImageDir("visual");
  const wallpaperFiles = readImageDir("wallpaper");

  return <PackMedia visualFiles={visualFiles} wallpaperFiles={wallpaperFiles} />;
}
