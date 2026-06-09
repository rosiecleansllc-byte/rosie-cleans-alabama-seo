import React from "react";
import { ServiceItem } from "@/types/city";

const serviceIcons: Record<string, React.ReactElement> = {
  repeat: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  sparkles: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  home: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  truck: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
    </svg>
  ),
  "hard-hat": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  "paint-roller": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  building: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  droplets: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M3 12h1m16 0h1m-2.05-6.95l-.707.707M6.757 17.243l-.707.707m0-11.9l.707.707M17.243 17.25l.707.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
    </svg>
  ),
  window: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 12h16M12 4v16" />
    </svg>
  ),
  flame: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
    </svg>
  ),
  thermometer: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v11.586l-1.707 1.707A1 1 0 007 17v1a2 2 0 002 2h6a2 2 0 002-2v-1a1 1 0 00-.293-.707L15 14.586V3a1 1 0 00-1-1h-4a1 1 0 00-1 1z" />
    </svg>
  ),
  layout: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
    </svg>
  ),
  wind: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>
  ),
  zap: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
};

const BOOKING_URL = "https://rosiecleansalabama.com";

interface ServicesSectionProps {
  services: ServiceItem[];
  cityName: string;
}

export default function ServicesSection({ services, cityName }: ServicesSectionProps) {
  const primaryServices = services.filter((s) => !s.isAddOn);
  const addOns = services.filter((s) => s.isAddOn);
  const kitchenAddOns = addOns.filter((s) =>
    ["inside-oven", "inside-fridge", "inside-cabinets", "range-hood", "stovetop"].includes(s.id)
  );
  const otherAddOns = addOns.filter(
    (s) => !["inside-oven", "inside-fridge", "inside-cabinets", "range-hood", "stovetop"].includes(s.id)
  );

  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: "#F5F5F5" }} id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#75D3DF" }}>
            What We Offer
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-2 mb-3 tracking-tight" style={{ color: "#111111" }}>
            Cleaning Services in {cityName}
          </h2>
          <p className="max-w-xl mx-auto text-base sm:text-lg" style={{ color: "#555555" }}>
            From weekly maintenance to move-out deep cleans, we have a service for every situation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {primaryServices.map((service) => (
            <a
              key={service.id}
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-6 rounded-2xl border border-[#E0E0E0] bg-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 hover:border-teal"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 flex-shrink-0 transition-all duration-200"
                style={{ backgroundColor: "#F0FBFC", color: "#75D3DF" }}
              >
                {serviceIcons[service.icon] || serviceIcons.sparkles}
              </div>
              <h3 className="font-bold text-base mb-2 transition-colors" style={{ color: "#111111" }}>
                {service.name}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "#555555" }}>
                {service.description}
              </p>
              <div className="mt-4 flex items-center text-sm font-semibold" style={{ color: "#75D3DF" }}>
                Book Now
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {addOns.length > 0 && (
          <div className="bg-white rounded-2xl border p-6 sm:p-8" style={{ borderColor: "#E0E0E0" }}>
            <h3 className="font-bold text-base mb-1" style={{ color: "#111111" }}>Add-On Services</h3>
            <p className="text-sm mb-6" style={{ color: "#555555" }}>
              Enhance any cleaning with these optional extras.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherAddOns.map((service) => (
                <div key={service.id} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#F0FBFC", color: "#75D3DF" }}>
                    {serviceIcons[service.icon] || serviceIcons.sparkles}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#111111" }}>{service.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#555555" }}>{service.description}</p>
                  </div>
                </div>
              ))}
              {kitchenAddOns.length > 0 && (
                <div className="sm:col-span-2 pt-2">
                  <p className="font-semibold text-sm mb-3" style={{ color: "#111111" }}>Kitchen Essentials</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {kitchenAddOns.map((service) => (
                      <div key={service.id} className="flex items-start gap-2.5">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#F0FBFC", color: "#75D3DF" }}>
                          {serviceIcons[service.icon] || serviceIcons.sparkles}
                        </div>
                        <div>
                          <p className="font-medium text-sm" style={{ color: "#111111" }}>{service.name}</p>
                          <p className="text-xs mt-0.5" style={{ color: "#555555" }}>{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
