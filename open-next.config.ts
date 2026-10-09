import { defineCloudflareConfig } from "@opennextjs/cloudflare";

/**
 * Configuration OpenNext pour Cloudflare Workers.
 * Le cache incremental par defaut utilise le systeme de fichiers, qui n'existe
 * pas sur Workers : R2 est le stockage compatible.
 * https://opennext.js.org/cloudflare/caching
 */
export default defineCloudflareConfig({});
