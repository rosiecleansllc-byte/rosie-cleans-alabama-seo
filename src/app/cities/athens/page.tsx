import type { Metadata } from "next";
import CityPage from "@/components/CityPage";
import { athensData } from "@/lib/cities/athens";
import { generateSeoMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generateSeoMetadata({
  title: athensData.seo.title,
  description: athensData.seo.description,
  canonical: athensData.seo.canonicalUrl,
  noindex: !athensData.published,
});

export default function AthensPage() {
  return (
    <CityPage
      city={athensData}
      domain="rosiecleansalabama.com"
      variant="brand"
    />
  );
}
