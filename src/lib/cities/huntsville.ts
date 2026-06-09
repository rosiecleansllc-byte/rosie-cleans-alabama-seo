import { CityData } from "@/types/city";

export const huntsvilleData: CityData = {
  slug: "huntsville",
  name: "Huntsville",
  state: "Alabama",
  county: "Madison County",
  published: true,
  domain: "rosiecleanshuntsville.com",
  hero: {
    headline: "House Cleaning in Huntsville, AL",
    subheadline:
      "Professional home cleaning services from Rosie Cleans Alabama.",
  },
  seo: {
    title: "House Cleaning in Huntsville, AL | Rosie Cleans Alabama",
    description:
      "Professional house cleaning services in Huntsville, AL. Recurring cleaning, deep cleaning, move-in/move-out, post-construction & office cleaning. Book online today!",
    ogTitle:
      "Trusted House Cleaning Services in Huntsville, AL | Rosie Cleans Alabama",
    ogDescription:
      "Huntsville's trusted cleaning team. Recurring, deep cleaning, move-in/out, post-construction & commercial cleaning. Easy online booking. Call 256-469-1885.",
    keywords: [
      "house cleaning Huntsville AL",
      "cleaning services Huntsville Alabama",
      "maid service Huntsville",
      "deep cleaning Huntsville",
      "move out cleaning Huntsville AL",
      "recurring house cleaning Huntsville",
      "post construction cleaning Huntsville",
      "office cleaning Huntsville Alabama",
    ],
    canonicalUrl: "https://rosiecleansalabama.com/house-cleaning-huntsville/",
  },
  schema: {
    serviceArea: "Huntsville, Alabama",
    latitude: 34.7304,
    longitude: -86.5861,
    areaServed: [
      "Huntsville",
      "South Huntsville",
      "North Huntsville",
      "West Huntsville",
      "Downtown Huntsville",
      "Hampton Cove",
      "Jones Valley",
      "Meridian Hills",
    ],
  },
  services: [
    {
      id: "recurring",
      name: "Recurring House Cleaning",
      description:
        "Keep your Huntsville home consistently clean with weekly, bi-weekly, or monthly service. Our professional teams are thorough and reliable every visit.",
      icon: "repeat",
    },
    {
      id: "deep-cleaning",
      name: "First-Time Deep Cleaning",
      description:
        "Starting fresh? Our comprehensive first-time deep clean covers every corner of your home — from baseboards to ceiling fans — leaving it clean.",
      icon: "sparkles",
    },
    {
      id: "move-in",
      name: "Move-In Cleaning",
      description:
        "Move into a clean home. We deep clean before you unpack so every surface, cabinet, and appliance is fresh and ready for your family.",
      icon: "home",
    },
    {
      id: "move-out",
      name: "Move-Out Cleaning",
      description:
        "Protect your security deposit and leave a great impression. Our thorough move-out clean meets landlord and property manager standards.",
      icon: "truck",
    },
    {
      id: "post-construction",
      name: "Post-Construction Cleaning",
      description:
        "After the contractors leave, we handle the dust, debris, and mess. Our post-construction cleaning gets your new or renovated space move-in ready.",
      icon: "hard-hat",
    },
    {
      id: "post-renovation",
      name: "Post-Renovation Cleaning",
      description:
        "Renovation dust goes everywhere. Our specialized post-renovation cleaning removes fine dust, residue, and construction materials from every surface.",
      icon: "paint-roller",
    },
    {
      id: "commercial",
      name: "Office & Commercial Cleaning",
      description:
        "A clean workplace boosts productivity and impresses clients. We provide reliable office and commercial cleaning for Huntsville businesses.",
      icon: "building",
    },
    {
      id: "bathroom-deep",
      name: "Bathroom Deep Cleaning",
      description:
        "Thorough scrubbing of tiles, fixtures, and all surfaces for a truly sanitized bathroom.",
      icon: "droplets",
      isAddOn: true,
    },
    {
      id: "interior-windows",
      name: "Interior Windows",
      description:
        "Interior window cleaning including sills, tracks, and frames.",
      icon: "window",
      isAddOn: true,
    },
    {
      id: "inside-oven",
      name: "Inside Oven Cleaning",
      description:
        "Deep cleaning of oven interior removing grease and baked-on residue.",
      icon: "flame",
      isAddOn: true,
    },
    {
      id: "inside-fridge",
      name: "Inside Refrigerator",
      description:
        "Complete interior refrigerator cleaning including shelves, drawers, and door seals.",
      icon: "thermometer",
      isAddOn: true,
    },
    {
      id: "inside-cabinets",
      name: "Inside Cabinets",
      description:
        "Thorough interior cabinet cleaning — wiping down all shelves and surfaces.",
      icon: "layout",
      isAddOn: true,
    },
    {
      id: "range-hood",
      name: "Range Hood Cleaning",
      description:
        "Degreasing and cleaning of range hood filters, exterior, and interior surfaces.",
      icon: "wind",
      isAddOn: true,
    },
    {
      id: "stovetop",
      name: "Stovetop Detail",
      description:
        "Detailed stovetop cleaning including burners, grates, and surrounding surfaces.",
      icon: "zap",
      isAddOn: true,
    },
  ],
  faqs: [
    {
      question: "How much does house cleaning cost in Huntsville, AL?",
      answer:
        "Pricing depends on your home's size, condition, and the type of cleaning service you need. We provide transparent estimated pricing when you request a quote online. Payment is only charged after service completion — you never pay until you're happy with the results. Most recurring cleanings for a 3-bedroom home in Huntsville range from $120–$180 per visit.",
    },
    {
      question: "What is included in a first-time deep cleaning?",
      answer:
        "Our first-time deep cleaning is the most thorough service we offer. It covers all rooms top-to-bottom: dusting ceiling fans and light fixtures, cleaning baseboards and door frames, scrubbing bathrooms thoroughly, deep cleaning kitchen surfaces and appliances (exterior), mopping all floors, and vacuuming all carpets. It is the ideal starting point before transitioning to recurring cleaning.",
    },
    {
      question: "How does recurring house cleaning work?",
      answer:
        "After your first-time deep clean, you can schedule recurring service weekly, every two weeks, or monthly. We send the same trusted team to your home each visit. Recurring clients receive priority scheduling and discounted rates. You can manage your bookings, reschedule, and add services entirely online.",
    },
    {
      question: "What does move-out cleaning include?",
      answer:
        "Our move-out cleaning is designed to meet landlord and property manager standards. We clean all rooms thoroughly including inside appliances (oven, refrigerator), inside cabinets, baseboards, windows (interior), and all surfaces. This service is typically required to recover your security deposit and is one of our most requested services.",
    },
    {
      question: "Do you offer office cleaning in Huntsville?",
      answer:
        "Yes! We provide professional office and commercial cleaning services throughout Huntsville and the surrounding areas. Services include regular office cleaning, restroom sanitization, kitchen/break room cleaning, floor care, and more. Contact us for a customized commercial cleaning quote.",
    },
    {
      question: "Do I need to provide cleaning supplies?",
      answer:
        "No — we bring all professional-grade cleaning supplies and equipment to every job. Our products are effective, safe, and thoroughly clean your home. If you have specific product preferences or sensitivities, just let us know and we will do our best to accommodate.",
    },
    {
      question: "Is it okay if I have pets?",
      answer:
        "Absolutely. We love pets and are comfortable cleaning in pet-friendly homes. We use pet-safe cleaning products. Please let us know about your pets when booking so our team can be prepared. If your pet is anxious around strangers, you may want to secure them during the cleaning.",
    },
    {
      question: "How do I schedule a cleaning appointment?",
      answer:
        "Booking is easy and completely online. Visit our website, select your service type, enter your home details, choose a date and time, and confirm your booking. You will receive a confirmation email immediately. You can also call us at 256-469-1885 if you prefer to book by phone.",
    },
    {
      question: "What is your arrival window?",
      answer:
        "We provide a 2-hour arrival window for your appointment. You will receive a reminder the day before and a notification when our team is on the way. We respect your time and work to arrive within the scheduled window every visit.",
    },
    {
      question: "When do I pay for my cleaning service?",
      answer:
        "Payment is processed after your cleaning is complete — never before. We accept all major credit cards. You will receive an invoice after service, and payment is collected electronically. We never charge until the job is done and you are satisfied.",
    },
  ],
  whyChoose: [
    {
      title: "Consistent, Reliable Teams",
      description:
        "We send the same trusted professionals to your home so you always know who to expect. No surprises, no strangers.",
      icon: "shield-check",
    },
    {
      title: "Clear Communication",
      description:
        "Reminders before every visit, notifications when we're on the way, and easy online account management.",
      icon: "message-circle",
    },
    {
      title: "Professional Systems",
      description:
        "Nothing gets missed. We use proven processes that deliver consistent results every visit.",
      icon: "clipboard-check",
    },
    {
      title: "Easy Online Scheduling",
      description:
        "Book, reschedule, or manage your account entirely online — no phone calls required. Flexible scheduling that fits your life.",
      icon: "calendar",
    },
    {
      title: "Trusted Local Service",
      description:
        "We are locally owned and operated in Alabama. We know Huntsville and take pride in serving our community.",
      icon: "map-pin",
    },
  ],
  wordpress: {
    seoTitle: "House Cleaning in Huntsville, AL | Rosie Cleans Alabama",
    metaDescription:
      "Professional house cleaning services in Huntsville, AL. Recurring cleaning, deep cleaning, move-in/move-out, post-construction & office cleaning. Book online today!",
    urlSlug: "house-cleaning-huntsville",
    h1: "House Cleaning in Huntsville, AL",
    heroCopy:
      "Professional home cleaning services from Rosie Cleans Alabama. Trusted by hundreds of Huntsville homeowners for recurring cleaning, deep cleaning, move-in/move-out, and more. Easy online booking. Payment after service.",
    servicesCopy:
      "We offer a full range of residential and commercial cleaning services in Huntsville. Whether you need a one-time deep clean, a regular maintenance schedule, or a specialized move-out cleaning, our professional team is ready to help.",
    internalLinking: [
      {
        anchorText: "house cleaning services in Huntsville",
        url: "/house-cleaning-huntsville/",
        context: "Homepage body copy",
      },
      {
        anchorText: "move-out cleaning in Huntsville",
        url: "/move-out-cleaning-huntsville/",
        context: "Services page",
      },
      {
        anchorText: "office cleaning Huntsville",
        url: "/office-cleaning-huntsville/",
        context: "Commercial services section",
      },
    ],
    recommendedImages: [
      {
        filename: "house-cleaning-huntsville-al.jpg",
        altText: "Professional house cleaning service in Huntsville, Alabama",
        caption: "Rosie Cleans Alabama serving Huntsville homeowners",
        usage: "Hero section featured image",
      },
      {
        filename: "cleaning-team-huntsville.jpg",
        altText: "Rosie Cleans Alabama cleaning team in Huntsville",
        caption: "Professional and trusted cleaning professionals",
        usage: "Trust section",
      },
      {
        filename: "deep-cleaning-huntsville.jpg",
        altText:
          "Deep cleaning service for homes in Huntsville, Alabama",
        caption: "Thorough first-time deep cleaning",
        usage: "Services section — deep cleaning card",
      },
    ],
  },
};
