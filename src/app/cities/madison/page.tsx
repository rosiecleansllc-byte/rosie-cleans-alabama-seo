import type { Metadata } from "next";
import CityPage from "@/components/CityPage";
import { madisonData } from "@/lib/cities/madison";
import { generateSeoMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generateSeoMetadata({
  title: madisonData.seo.title,
  description: madisonData.seo.description,
  canonical: madisonData.seo.canonicalUrl,
  noindex: !madisonData.published,
});

export default function MadisonPage() {
  return (
    <CityPage
      city={madisonData}
      domain="rosiecleansalabama.com"
      variant="brand"
    />
  );
}
