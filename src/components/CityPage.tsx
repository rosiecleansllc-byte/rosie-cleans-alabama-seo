import { CityData, PageVariant } from "@/types/city";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import {
  LocalBusinessSchema,
  ServiceSchema,
  FAQSchema,
  BreadcrumbSchema,
} from "@/components/seo/JsonLd";
import { ScrollDepthTracker } from "@/components/analytics/AnalyticsProvider";

interface CityPageProps {
  city: CityData;
  domain: string;
  variant?: PageVariant;
  heroOverride?: {
    headline?: string;
    subheadline?: string;
  };
}

export default function CityPage({
  city,
  domain,
  variant = "brand",
  heroOverride,
}: CityPageProps) {
  const breadcrumbs = [
    { name: "Home", url: `https://${domain}` },
    {
      name: `House Cleaning in ${city.name}, AL`,
      url: `https://${domain}`,
    },
  ];

  return (
    <>
      <LocalBusinessSchema city={city} domain={domain} />
      <ServiceSchema city={city} domain={domain} />
      <FAQSchema faqs={city.faqs} />
      <BreadcrumbSchema items={breadcrumbs} />
      <ScrollDepthTracker />

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <HeroSection
            headline={heroOverride?.headline || city.hero.headline}
            subheadline={heroOverride?.subheadline || city.hero.subheadline}
            variant={variant}
          />
          <TrustSection />
          <ServicesSection services={city.services} cityName={city.name} />
          <WhyChooseSection items={city.whyChoose} cityName={city.name} />
          <ProcessSection />
          <FAQSection faqs={city.faqs} />
          <CTASection cityName={city.name} />
        </main>
        <Footer />
      </div>
    </>
  );
}
