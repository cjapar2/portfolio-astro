// @ts-check
import { defineConfig } from 'astro/config';

const SERVER_PORT = 4321;

const LOCALHOST_URL = `http://localhost:4321/`;

const LIVE_URL = 'https://cjapar2.github.io';

const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST_URL;
if (isBuild) {
    BASE_URL = LIVE_URL;
}
console.log(BASE_URL);
// https://astro.build/config
export default defineConfig({
    server: {port: SERVER_PORT},
    site: BASE_URL,
});
