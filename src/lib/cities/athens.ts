import { CityData } from "@/types/city";

export const athensData: CityData = {
  slug: "athens",
  name: "Athens",
  state: "Alabama",
  county: "Limestone County",
  published: false,
  hero: {
    headline: "House Cleaning in Athens, AL",
    subheadline:
      "Professional home cleaning services from Rosie Cleans Alabama.",
  },
  seo: {
    title: "House Cleaning in Athens, AL | Rosie Cleans Alabama",
    description:
      "Professional house cleaning services in Athens, AL. Recurring cleaning, deep cleaning, move-in/move-out & office cleaning. Book online today!",
    keywords: [
      "house cleaning Athens AL",
      "cleaning services Athens Alabama",
      "maid service Athens AL",
      "deep cleaning Athens",
      "move out cleaning Athens AL",
    ],
    canonicalUrl: "https://rosiecleansalabama.com/house-cleaning-athens/",
  },
  schema: {
    serviceArea: "Athens, Alabama",
    latitude: 34.8026,
    longitude: -86.9719,
    areaServed: [
      "Athens",
      "Downtown Athens",
      "Athens area neighborhoods",
      "Limestone County",
    ],
  },
  services: [
    {
      id: "recurring",
      name: "Recurring House Cleaning",
      description:
        "Keep your Athens home consistently clean with regular professional service.",
      icon: "repeat",
    },
    {
      id: "deep-cleaning",
      name: "First-Time Deep Cleaning",
      description:
        "A comprehensive top-to-bottom deep clean for your Athens home.",
      icon: "sparkles",
    },
    {
      id: "move-in",
      name: "Move-In Cleaning",
      description:
        "Start fresh in your new Athens home with a professional move-in clean.",
      icon: "home",
    },
    {
      id: "move-out",
      name: "Move-Out Cleaning",
      description:
        "Leave your Athens rental spotless and protect your security deposit.",
      icon: "truck",
    },
    {
      id: "post-construction",
      name: "Post-Construction Cleaning",
      description:
        "Professional post-construction cleanup for Athens properties.",
      icon: "hard-hat",
    },
    {
      id: "post-renovation",
      name: "Post-Renovation Cleaning",
      description:
        "Remove renovation dust and debris from your Athens home.",
      icon: "paint-roller",
    },
    {
      id: "commercial",
      name: "Office & Commercial Cleaning",
      description:
        "Professional cleaning for Athens offices and commercial spaces.",
      icon: "building",
    },
  ],
  faqs: [
    {
      question: "Do you offer house cleaning in Athens, AL?",
      answer:
        "Yes! Rosie Cleans Alabama serves Athens and Limestone County. We offer recurring, deep cleaning, move-in/out, post-construction, and office cleaning.",
    },
    {
      question: "How do I book a cleaning in Athens?",
      answer:
        "Book online at rosiecleansalabama.com or call 256-469-1885. Easy scheduling, payment after service.",
    },
    {
      question: "What cleaning services do you offer in Athens?",
      answer:
        "We offer recurring house cleaning, first-time deep cleaning, move-in cleaning, move-out cleaning, post-construction cleaning, post-renovation cleaning, and office/commercial cleaning.",
    },
    {
      question: "How much does cleaning cost in Athens, AL?",
      answer:
        "Pricing is based on home size and service type. Request an estimate online. Payment is charged only after service is complete.",
    },
    {
      question: "Do you serve all of Limestone County?",
      answer:
        "We primarily serve Athens and surrounding areas. Contact us to confirm service availability for your specific location.",
    },
    {
      question: "Do you bring cleaning supplies to Athens homes?",
      answer:
        "Yes, we bring all supplies and equipment. No need to provide anything.",
    },
    {
      question: "Is your cleaning service pet-friendly?",
      answer:
        "Yes! We use pet-safe products and are comfortable in pet-friendly homes.",
    },
    {
      question: "What is included in move-out cleaning in Athens?",
      answer:
        "Our move-out clean covers all rooms including inside appliances, cabinets, baseboards, and interior windows — everything needed to meet landlord standards.",
    },
    {
      question: "Do you offer commercial cleaning in Athens?",
      answer:
        "Yes, we clean offices and commercial properties in Athens. Contact us for a custom quote.",
    },
    {
      question: "How often should I schedule recurring cleaning?",
      answer:
        "Most clients choose bi-weekly service. Weekly and monthly options are also available depending on your home and lifestyle.",
    },
  ],
  whyChoose: [
    {
      title: "Consistent, Reliable Teams",
      description: "The same trusted team visits your Athens home every time.",
      icon: "shield-check",
    },
    {
      title: "Clear Communication",
      description: "Reminders and notifications keep you in the loop.",
      icon: "message-circle",
    },
    {
      title: "Professional Systems",
      description: "Detailed checklists ensure every inch is cleaned.",
      icon: "clipboard-check",
    },
    {
      title: "Easy Online Scheduling",
      description: "Book and manage cleanings entirely online.",
      icon: "calendar",
    },
    {
      title: "Trusted Local Service",
      description:
        "Locally owned in Alabama, proud to serve the Athens community.",
      icon: "map-pin",
    },
  ],
  wordpress: {
    seoTitle: "House Cleaning in Athens, AL | Rosie Cleans Alabama",
    metaDescription:
      "Professional house cleaning in Athens, AL. Recurring, deep cleaning, move-in/out & office cleaning. Easy booking, payment after service. Call 256-469-1885.",
    urlSlug: "house-cleaning-athens",
    h1: "House Cleaning in Athens, AL",
    heroCopy:
      "Professional home cleaning services in Athens, Alabama from Rosie Cleans Alabama. Trusted recurring, deep cleaning, move-in/move-out, and commercial cleaning.",
    servicesCopy:
      "Rosie Cleans Alabama brings professional cleaning expertise to Athens homeowners and businesses. Book online today.",
    internalLinking: [
      {
        anchorText: "house cleaning in Athens",
        url: "/house-cleaning-athens/",
        context: "Homepage body",
      },
      {
        anchorText: "Huntsville cleaning services",
        url: "/house-cleaning-huntsville/",
        context: "Related cities",
      },
    ],
    recommendedImages: [
      {
        filename: "house-cleaning-athens-al.jpg",
        altText: "Professional house cleaning in Athens, Alabama",
        caption: "Rosie Cleans Alabama serving Athens homeowners",
        usage: "Hero image",
      },
    ],
  },
};
