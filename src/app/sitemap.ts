import { MetadataRoute } from "next";

const BASE_URLS = [
  "https://rosiecleanshuntsville.com",
  "https://housecleaninghuntsville.com",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const base of BASE_URLS) {
    entries.push({
      url: base,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    });
  }

  return entries;
}
