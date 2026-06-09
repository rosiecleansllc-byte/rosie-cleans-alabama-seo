import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/cities/madison", "/cities/athens", "/cities/decatur", "/cities/harvest"],
      },
    ],
    sitemap: [
      "https://rosiecleanshuntsville.com/sitemap.xml",
      "https://housecleaninghuntsville.com/sitemap.xml",
    ],
  };
}
