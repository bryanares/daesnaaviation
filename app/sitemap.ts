/**
 * app/sitemap.ts
 * Single-page site — home URL only.
 * TODO: Replace BASE_URL with production domain before going live.
 */

import type { MetadataRoute } from "next";

const BASE_URL = "https://daesnaengineering.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
