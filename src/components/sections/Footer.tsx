import Link from "next/link";

const BOOKING_URL = "https://rosiecleansalabama.com";
const PHONE = "256-469-1885";
const PHONE_HREF = "tel:+12564691885";
const PRIMARY_URL = "https://rosiecleansalabama.com";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="font-bold text-white text-lg">
                Rosie Cleans Alabama
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Professional house cleaning services for busy homeowners throughout
              Huntsville and North Alabama.
            </p>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-brand-green-light font-semibold hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {PHONE}
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Recurring Cleaning",
                "Deep Cleaning",
                "Move-In Cleaning",
                "Move-Out Cleaning",
                "Post-Construction",
                "Office Cleaning",
              ].map((service) => (
                <li key={service}>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand-green-light transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              {["Huntsville, AL", "Madison, AL", "Athens, AL", "Decatur, AL", "Harvest, AL"].map(
                (area) => (
                  <li key={area}>
                    <span className="text-gray-400">{area}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-green-light transition-colors"
                >
                  Book Online
                </a>
              </li>
              <li>
                <a
                  href={PRIMARY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-green-light transition-colors"
                >
                  rosiecleansalabama.com
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-brand-green-light transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href={PHONE_HREF}
                  className="text-gray-400 hover:text-brand-green-light transition-colors"
                >
                  Call {PHONE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {currentYear} Rosie Cleans Alabama. All rights reserved.</p>
          <p>
            Proudly serving Huntsville & North Alabama.{" "}
            <a
              href={PRIMARY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-green-light hover:text-white transition-colors"
            >
              rosiecleansalabama.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
