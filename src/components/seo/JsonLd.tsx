import { CityData } from "@/types/city";

const PHONE = "256-469-1885";
const PHONE_URI = "tel:+12564691885";
const BOOKING_URL = "https://rosiecleansalabama.com";
const LOGO_URL = "https://rosiecleansalabama.com/wp-content/uploads/logo.png";

interface LocalBusinessSchemaProps {
  city: CityData;
  domain: string;
}

export function LocalBusinessSchema({ city, domain }: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HousePainter", "HomeAndConstructionBusiness"],
    "@id": `https://${domain}/#localbusiness`,
    name: "Rosie Cleans Alabama",
    alternateName: "Rosie Cleans",
    description: city.seo.description,
    url: `https://${domain}`,
    telephone: PHONE_URI,
    priceRange: "$$",
    image: LOGO_URL,
    logo: LOGO_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: "AL",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: city.schema.latitude,
      longitude: city.schema.longitude,
    },
    areaServed: city.schema.areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://rosiecleansalabama.com",
      "https://www.facebook.com/rosiecleansalabama",
    ],
    hasMap: `https://www.google.com/maps?q=Rosie+Cleans+Alabama+${city.name}+AL`,
    currenciesAccepted: "USD",
    paymentAccepted: "Credit Card",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}

interface ServiceSchemaProps {
  city: CityData;
  domain: string;
}

export function ServiceSchema({ city, domain }: ServiceSchemaProps) {
  const services = city.services.filter((s) => !s.isAddOn);
  const schema = {
    "@context": "https://schema.org",
    "@graph": services.map((service) => ({
      "@type": "Service",
      "@id": `https://${domain}/#service-${service.id}`,
      name: service.name,
      description: service.description,
      provider: {
        "@type": "LocalBusiness",
        name: "Rosie Cleans Alabama",
        "@id": `https://${domain}/#localbusiness`,
      },
      areaServed: {
        "@type": "City",
        name: city.name,
        containedInPlace: {
          "@type": "State",
          name: city.state,
        },
      },
      url: `https://${domain}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}

interface FAQSchemaProps {
  faqs: { question: string; answer: string }[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
