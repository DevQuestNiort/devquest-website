import path from "node:path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.BASE_PATH || '',
    output: "export",
    // Heure du build, pour la programmation de contenus (src/lib/schedule.ts) :
    // inlinée à l'identique dans le HTML généré et dans le JS du navigateur.
    env: {
        NEXT_PUBLIC_BUILD_TIME: new Date().toISOString(),
    },
    images: {
        unoptimized: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')],
    },
};

export default nextConfig;
