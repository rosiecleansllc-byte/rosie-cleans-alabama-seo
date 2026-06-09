"use client";

import { trackBookOnlineClick, trackPhoneClick } from "@/lib/analytics";

const BOOKING_URL = "https://rosiecleansalabama.com";
const PHONE = "256-469-1885";
const PHONE_HREF = "tel:+12564691885";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  variant?: "brand" | "search-intent";
}

const trustBadges = [
  { icon: "⭐", text: "5-Star Rated" },
  { icon: "🔒", text: "Pay After Cleaning" },
  { icon: "✅", text: "Background Checked" },
  { icon: "📅", text: "Easy Online Booking" },
];

export default function HeroSection({ headline, subheadline }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#F0FBFC" }}>
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, #75D3DF 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Teal glow top-left */}
      <div
        className="absolute -top-32 -left-32 w-80 h-80 rounded-full opacity-30 blur-3xl"
        style={{ backgroundColor: "#75D3DF" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          {/* Location badge */}
          <div
            className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest"
            style={{ backgroundColor: "rgba(117,211,223,0.25)", color: "#4BB8C8" }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#4BB8C8" }} />
            Serving Huntsville &amp; North Alabama
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-5" style={{ color: "#111111" }}>
            {headline}
          </h1>

          <p className="text-base sm:text-lg leading-relaxed mb-9 max-w-xl" style={{ color: "#555555" }}>
            {subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackBookOnlineClick("hero")}
              className="btn-primary text-sm sm:text-base px-6 py-3.5"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Online Now
            </a>
            <a
              href={PHONE_HREF}
              onClick={() => trackPhoneClick("hero")}
              className="inline-flex items-center justify-center gap-2 font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl border-2 transition-all duration-200 hover:bg-white"
              style={{ borderColor: "#111111", color: "#111111" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {PHONE}
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border bg-white"
                style={{ borderColor: "#D6F4F7", color: "#555555" }}
              >
                <span className="text-base leading-none">{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
