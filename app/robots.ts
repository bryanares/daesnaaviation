/**
 * app/robots.ts
 * ─────────────────────────────────────────────────────────────
 * Generates robots.txt — allows full indexing by all crawlers.
 * TODO: Replace BASE_URL with production domain before going live.
 */

import type { MetadataRoute } from "next";

// TODO: Replace with production domain
const BASE_URL = "https://daesnaengineering.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
