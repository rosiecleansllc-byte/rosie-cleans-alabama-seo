import type { Metadata } from "next";
import CityPage from "@/components/CityPage";
import { harvestData } from "@/lib/cities/harvest";
import { generateSeoMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generateSeoMetadata({
  title: harvestData.seo.title,
  description: harvestData.seo.description,
  canonical: harvestData.seo.canonicalUrl,
  noindex: !harvestData.published,
});

export default function HarvestPage() {
  return (
    <CityPage
      city={harvestData}
      domain="rosiecleansalabama.com"
      variant="brand"
    />
  );
}
