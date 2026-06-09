import { headers } from "next/headers";
import type { Metadata } from "next";
import CityPage from "@/components/CityPage";
import { huntsvilleData } from "@/lib/cities/huntsville";
import { generateSeoMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generateSeoMetadata({
  title: "House Cleaning in Huntsville, AL | Rosie Cleans Alabama",
  description:
    "Professional house cleaning services in Huntsville, AL. Recurring cleaning, deep cleaning, move-in/move-out, post-construction & office cleaning. Book online today!",
  canonical: "https://rosiecleansalabama.com/house-cleaning-huntsville/",
  ogTitle:
    "Trusted House Cleaning Services in Huntsville, AL | Rosie Cleans Alabama",
  ogDescription:
    "Huntsville's trusted cleaning team. Easy online booking. Call 256-469-1885.",
});

export default async function HomePage() {
  const headersList = await headers();
  const host = headersList.get("host") || "";
  const domain = host.replace(/^www\./, "").split(":")[0];

  if (domain === "housecleaninghuntsville.com") {
    return (
      <CityPage
        city={huntsvilleData}
        domain="housecleaninghuntsville.com"
        variant="search-intent"
        heroOverride={{
          headline: "House Cleaning Service in Huntsville, AL",
          subheadline:
            "Trusted recurring, deep cleaning, move-in/move-out, post-construction, post-renovation, and office cleaning services.",
        }}
      />
    );
  }

  return (
    <CityPage
      city={huntsvilleData}
      domain={domain || "rosiecleanshuntsville.com"}
      variant="brand"
    />
  );
}
