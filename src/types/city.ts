export interface CityData {
  slug: string;
  name: string;
  state: string;
  county: string;
  published: boolean;
  domain?: string;
  hero: {
    headline: string;
    subheadline: string;
  };
  seo: {
    title: string;
    description: string;
    ogTitle?: string;
    ogDescription?: string;
    keywords: string[];
    canonicalUrl: string;
  };
  schema: {
    serviceArea: string;
    latitude: number;
    longitude: number;
    areaServed: string[];
  };
  services: ServiceItem[];
  faqs: FAQ[];
  whyChoose: WhyChooseItem[];
  wordpress: WordPressAssets;
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  isAddOn?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  icon: string;
}

export interface WordPressAssets {
  seoTitle: string;
  metaDescription: string;
  urlSlug: string;
  h1: string;
  heroCopy: string;
  servicesCopy: string;
  internalLinking: InternalLink[];
  recommendedImages: RecommendedImage[];
}

export interface InternalLink {
  anchorText: string;
  url: string;
  context: string;
}

export interface RecommendedImage {
  filename: string;
  altText: string;
  caption: string;
  usage: string;
}

export type PageVariant = "brand" | "search-intent";
