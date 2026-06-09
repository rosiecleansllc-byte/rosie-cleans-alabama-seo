import { Metadata } from "next";

interface SeoOptions {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  city?: string;
  noindex?: boolean;
}

const DEFAULT_OG_IMAGE = "/images/og-default.jpg";
const SITE_NAME = "Rosie Cleans Alabama";
const PHONE = "256-469-1885";

export function generateSeoMetadata(options: SeoOptions): Metadata {
  const {
    title,
    description,
    canonical,
    ogTitle,
    ogDescription,
    ogImage = DEFAULT_OG_IMAGE,
    noindex = false,
  } = options;

  return {
    title,
    description,
    keywords: undefined,
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: {
      canonical,
    },
    openGraph: {
      title: ogTitle || title,
      description: ogDescription || description,
      url: canonical,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogTitle || title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle || title,
      description: ogDescription || description,
      images: [ogImage],
    },
    other: {
      "theme-color": "#1E6B52",
      "contact": PHONE,
    },
  };
}
