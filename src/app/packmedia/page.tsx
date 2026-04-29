import fs from "fs";
import path from "path";
import { PackMedia } from "./PackMedia";

export const dynamic = "force-static";

export default function Page() {
  const visualDir = path.join(process.cwd(), "public", "visual");
  const visualFiles = fs
    .readdirSync(visualDir)
    .filter((f) => /\.(png|jpg|jpeg|svg|webp)$/i.test(f))
    .sort();

  return <PackMedia visualFiles={visualFiles} />;
}
