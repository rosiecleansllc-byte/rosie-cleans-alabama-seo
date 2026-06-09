import type { Metadata } from "next";
import CityPage from "@/components/CityPage";
import { decaturData } from "@/lib/cities/decatur";
import { generateSeoMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generateSeoMetadata({
  title: decaturData.seo.title,
  description: decaturData.seo.description,
  canonical: decaturData.seo.canonicalUrl,
  noindex: !decaturData.published,
});

export default function DecaturPage() {
  return (
    <CityPage
      city={decaturData}
      domain="rosiecleansalabama.com"
      variant="brand"
    />
  );
}
