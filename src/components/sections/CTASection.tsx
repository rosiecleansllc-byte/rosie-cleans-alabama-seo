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
        <div className="bg-gradient-to-br from-brand-green-dark to-brand-green rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
              Ready for a Cleaner Home in {cityName}?
            </h2>
            <p className="text-green-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of {cityName} homeowners who trust Rosie Cleans
              Alabama for professional, reliable home cleaning. Easy online
              booking. Payment only after service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackBookOnlineClick("final-cta")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-brand-green font-bold text-base sm:text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-green-50 transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Online Now
              </a>
              <a
                href={PHONE_HREF}
                onClick={() => trackPhoneClick("final-cta")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold text-base sm:text-lg px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {PHONE}
              </a>
            </div>

            <p className="text-green-200 text-xs sm:text-sm mt-6">
              No upfront payment required · Pay after cleaning is complete · Easy reschedule
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
