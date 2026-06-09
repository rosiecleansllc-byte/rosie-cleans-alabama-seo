import { CityData } from "@/types/city";

export const madisonData: CityData = {
  slug: "madison",
  name: "Madison",
  state: "Alabama",
  county: "Madison County",
  published: false,
  hero: {
    headline: "House Cleaning in Madison, AL",
    subheadline:
      "Professional home cleaning services from Rosie Cleans Alabama.",
  },
  seo: {
    title: "House Cleaning in Madison, AL | Rosie Cleans Alabama",
    description:
      "Professional house cleaning services in Madison, AL. Recurring cleaning, deep cleaning, move-in/move-out & office cleaning. Book online today!",
    keywords: [
      "house cleaning Madison AL",
      "cleaning services Madison Alabama",
      "maid service Madison AL",
      "deep cleaning Madison",
      "move out cleaning Madison AL",
      "recurring house cleaning Madison",
    ],
    canonicalUrl: "https://rosiecleansalabama.com/house-cleaning-madison/",
  },
  schema: {
    serviceArea: "Madison, Alabama",
    latitude: 34.699,
    longitude: -86.7483,
    areaServed: [
      "Madison",
      "Downtown Madison",
      "Heritage Estates",
      "Nolen Farm",
      "Old Madison Pike area",
    ],
  },
  services: [
    {
      id: "recurring",
      name: "Recurring House Cleaning",
      description:
        "Keep your Madison home consistently clean with weekly, bi-weekly, or monthly service.",
      icon: "repeat",
    },
    {
      id: "deep-cleaning",
      name: "First-Time Deep Cleaning",
      description:
        "Our comprehensive first-time deep clean covers every corner of your Madison home.",
      icon: "sparkles",
    },
    {
      id: "move-in",
      name: "Move-In Cleaning",
      description:
        "Move into a clean Madison home. We deep clean before you unpack.",
      icon: "home",
    },
    {
      id: "move-out",
      name: "Move-Out Cleaning",
      description:
        "Protect your security deposit. Our thorough move-out clean meets Madison property manager standards.",
      icon: "truck",
    },
    {
      id: "post-construction",
      name: "Post-Construction Cleaning",
      description:
        "After the contractors leave, we handle the dust and debris in your Madison property.",
      icon: "hard-hat",
    },
    {
      id: "post-renovation",
      name: "Post-Renovation Cleaning",
      description:
        "Renovation dust goes everywhere. We remove it all from every surface in your Madison home.",
      icon: "paint-roller",
    },
    {
      id: "commercial",
      name: "Office & Commercial Cleaning",
      description:
        "Reliable office and commercial cleaning for Madison businesses.",
      icon: "building",
    },
  ],
  faqs: [
    {
      question: "Do you offer house cleaning services in Madison, AL?",
      answer:
        "Yes! Rosie Cleans Alabama proudly serves Madison and the surrounding areas. We offer recurring cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleaning, and office cleaning.",
    },
    {
      question: "How much does cleaning cost in Madison, AL?",
      answer:
        "Pricing is based on your home's size and the type of service needed. Request a free online estimate. Payment is only charged after service completion.",
    },
    {
      question: "How do I book a cleaning in Madison?",
      answer:
        "Book easily online at rosiecleansalabama.com or call us at 256-469-1885. Choose your service, home size, and preferred date — we'll handle the rest.",
    },
    {
      question: "What areas of Madison do you serve?",
      answer:
        "We serve all of Madison, AL including Heritage Estates, Nolen Farm, the Old Madison Pike corridor, and surrounding neighborhoods.",
    },
    {
      question: "Do you bring your own cleaning supplies?",
      answer:
        "Yes, we bring all professional-grade cleaning supplies and equipment to every job in Madison.",
    },
    {
      question: "Is move-out cleaning available in Madison?",
      answer:
        "Absolutely. Our move-out cleaning is designed to meet landlord standards and help you recover your security deposit.",
    },
    {
      question: "Do you clean offices in Madison, AL?",
      answer:
        "Yes! We offer professional office and commercial cleaning services for Madison businesses. Contact us for a customized quote.",
    },
    {
      question: "Are your cleaning products safe for pets and children?",
      answer:
        "We use safe, professional-grade products. Let us know about any sensitivities and we'll accommodate your preferences.",
    },
    {
      question: "What is the difference between recurring and deep cleaning?",
      answer:
        "A deep clean is our most thorough service — ideal as a first clean or for homes that haven't been professionally cleaned recently. Recurring cleaning maintains that high standard on a regular schedule.",
    },
    {
      question: "When do I pay for cleaning in Madison?",
      answer:
        "Payment is charged after your cleaning is complete, never before. We accept all major credit cards.",
    },
  ],
  whyChoose: [
    {
      title: "Consistent, Reliable Teams",
      description:
        "The same trusted professionals visit your Madison home every time.",
      icon: "shield-check",
    },
    {
      title: "Clear Communication",
      description:
        "Reminders, on-the-way notifications, and easy online account management.",
      icon: "message-circle",
    },
    {
      title: "Professional Systems",
      description:
        "Detailed checklists ensure nothing is missed on any visit.",
      icon: "clipboard-check",
    },
    {
      title: "Easy Online Scheduling",
      description: "Book and manage your Madison cleanings entirely online.",
      icon: "calendar",
    },
    {
      title: "Trusted Local Service",
      description:
        "Locally owned and operated in Alabama, proudly serving the Madison community.",
      icon: "map-pin",
    },
  ],
  wordpress: {
    seoTitle: "House Cleaning in Madison, AL | Rosie Cleans Alabama",
    metaDescription:
      "Professional house cleaning in Madison, AL. Recurring, deep cleaning, move-in/out & office cleaning. Easy booking, payment after service. Call 256-469-1885.",
    urlSlug: "house-cleaning-madison",
    h1: "House Cleaning in Madison, AL",
    heroCopy:
      "Professional home cleaning services in Madison, Alabama from Rosie Cleans Alabama. Trusted recurring cleaning, deep cleaning, move-in/move-out, and commercial cleaning. Easy online booking.",
    servicesCopy:
      "We serve Madison homeowners and businesses with professional cleaning services tailored to your needs. From one-time deep cleans to reliable recurring service, Rosie Cleans Alabama has you covered.",
    internalLinking: [
      {
        anchorText: "house cleaning services in Madison",
        url: "/house-cleaning-madison/",
        context: "Homepage body copy",
      },
      {
        anchorText: "Huntsville cleaning services",
        url: "/house-cleaning-huntsville/",
        context: "Related cities section",
      },
    ],
    recommendedImages: [
      {
        filename: "house-cleaning-madison-al.jpg",
        altText: "Professional house cleaning service in Madison, Alabama",
        caption: "Rosie Cleans Alabama serving Madison homeowners",
        usage: "Hero section featured image",
      },
    ],
  },
};
