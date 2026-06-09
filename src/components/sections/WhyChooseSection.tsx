import React from "react";
import { WhyChooseItem } from "@/types/city";

const iconMap: Record<string, React.ReactElement> = {
  "shield-check": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  "message-circle": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  "clipboard-check": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  calendar: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  "map-pin": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

interface WhyChooseSectionProps {
  items: WhyChooseItem[];
  cityName: string;
}

export default function WhyChooseSection({ items, cityName }: WhyChooseSectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-brand-green font-semibold text-sm uppercase tracking-wide">
              The Rosie Difference
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
              Why {cityName} Chooses Rosie Cleans
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              We're not just another cleaning company. We're a local team that
              shows up reliably, communicates clearly, and delivers consistent
              results — every single visit.
            </p>
            <div className="bg-brand-green/5 border border-brand-green/20 rounded-2xl p-5">
              <p className="text-gray-700 text-sm leading-relaxed italic">
                "Rosie Cleans is the only cleaning service I've found in
                Huntsville that shows up on time, every time, and actually
                cleans the way I'd clean myself. Total game changer for our
                family."
              </p>
              <p className="text-brand-green font-semibold text-sm mt-3">
                — Satisfied {cityName} Customer
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 hover:bg-brand-green/5 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center flex-shrink-0">
                  {iconMap[item.icon] || iconMap["shield-check"]}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
