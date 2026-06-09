"use client";

import { trackBookOnlineClick, trackPhoneClick } from "@/lib/analytics";

const BOOKING_URL = "https://rosiecleansalabama.com";
const PHONE = "256-469-1885";
const PHONE_HREF = "tel:+12564691885";

interface CTASectionProps {
  cityName: string;
}

export default function CTASection({ cityName }: CTASectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden"
          style={{ backgroundColor: "#111111" }}
        >
          {/* Subtle dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          {/* Teal glow */}
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: "#75D3DF" }}
          />

          <div className="relative">
            <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: "#75D3DF" }}>
              Get Started Today
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight tracking-tight">
              Ready for a Cleaner Home in {cityName}?
            </h2>
            <p className="text-base sm:text-lg mb-8 max-w-xl mx-auto" style={{ color: "#888888" }}>
              Join hundreds of {cityName} homeowners who trust Rosie Cleans Alabama. Easy online booking. Payment only after service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackBookOnlineClick("final-cta")}
                className="btn-primary w-full sm:w-auto text-base px-8 py-4"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Online Now
              </a>
              <a
                href={PHONE_HREF}
                onClick={() => trackPhoneClick("final-cta")}
                className="btn-outline-white w-full sm:w-auto text-base px-8 py-4"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {PHONE}
              </a>
            </div>

            <p className="text-xs mt-6" style={{ color: "#555555" }}>
              No upfront payment required · Pay after cleaning is complete · Easy reschedule
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
