"use client";

import Link from "next/link";
import { trackBookOnlineClick, trackPhoneClick } from "@/lib/analytics";

const BOOKING_URL = "https://rosiecleansalabama.com";
const PHONE = "256-469-1885";
const PHONE_HREF = "tel:+12564691885";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="font-bold text-gray-900 text-base sm:text-lg leading-tight">
              Rosie Cleans<span className="text-brand-green"> Alabama</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-brand-green transition-colors">
              Services
            </a>
            <a href="#why-us" className="hover:text-brand-green transition-colors">
              Why Us
            </a>
            <a href="#faq" className="hover:text-brand-green transition-colors">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={PHONE_HREF}
              onClick={() => trackPhoneClick("header")}
              className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-brand-green transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {PHONE}
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackBookOnlineClick("header")}
              className="btn-primary text-sm px-4 py-2"
            >
              Book Online
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
