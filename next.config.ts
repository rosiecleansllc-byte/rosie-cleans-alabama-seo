import type { NextConfig } from "next";

const WORDPRESS_URL = "https://rosiecleansalabama.com/house-cleaning-huntsville/";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  async redirects() {
    const ENABLE_WORDPRESS_REDIRECT =
      process.env.ENABLE_WORDPRESS_REDIRECT === "true";

    if (ENABLE_WORDPRESS_REDIRECT) {
      return [
        {
          source: "/",
          destination: WORDPRESS_URL,
          permanent: true,
        },
      ];
    }

    return [];
  },

  images: {
    formats: ["image/avif", "image/webp"],
  },

  compress: true,

  experimental: {
    optimizePackageImports: ["next/font"],
  },
};

export default nextConfig;
