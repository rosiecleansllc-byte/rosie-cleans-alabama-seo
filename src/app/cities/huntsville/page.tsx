import type { Metadata } from "next";
import CityPage from "@/components/CityPage";
import { huntsvilleData } from "@/lib/cities/huntsville";
import { generateSeoMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generateSeoMetadata({
  title: huntsvilleData.seo.title,
  description: huntsvilleData.seo.description,
  canonical: huntsvilleData.seo.canonicalUrl,
  ogTitle: huntsvilleData.seo.ogTitle,
  ogDescription: huntsvilleData.seo.ogDescription,
});

export default function HuntsvillePage() {
  return (
    <CityPage
      city={huntsvilleData}
      domain="rosiecleanshuntsville.com"
      variant="brand"
    />
  );
}
