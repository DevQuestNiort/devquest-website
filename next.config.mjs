import path from "node:path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.BASE_PATH || '',
    output: "export",
    images: {
        unoptimized: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')],
    },
};

export default nextConfig;
