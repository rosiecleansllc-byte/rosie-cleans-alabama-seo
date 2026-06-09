import React from "react";
import { WhyChooseItem } from "@/types/city";

const iconMap: Record<string, React.ReactElement> = {
  "shield-check": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  "message-circle": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  "clipboard-check": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  calendar: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  "map-pin": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
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
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#75D3DF" }}>
              The Rosie Difference
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-2 mb-4 tracking-tight" style={{ color: "#111111" }}>
              Why {cityName} Chooses Rosie Cleans
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: "#555555" }}>
              We're not just another cleaning company. We're a local team that shows up reliably, communicates clearly, and delivers consistent results — every single visit.
            </p>
            <div className="rounded-2xl p-5 border" style={{ backgroundColor: "#F0FBFC", borderColor: "#D6F4F7" }}>
              <p className="text-sm leading-relaxed italic" style={{ color: "#1A1A1A" }}>
                "Rosie Cleans is the only cleaning service I've found in Huntsville that shows up on time, every time, and actually cleans the way I'd clean myself. Total game changer for our family."
              </p>
              <p className="font-semibold text-sm mt-3" style={{ color: "#75D3DF" }}>
                — Satisfied {cityName} Customer
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {items.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 rounded-xl transition-colors duration-200 bg-[#F5F5F5] hover:bg-teal-50"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(117,211,223,0.15)", color: "#75D3DF" }}
                >
                  {iconMap[item.icon] || iconMap["shield-check"]}
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1" style={{ color: "#111111" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#555555" }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
