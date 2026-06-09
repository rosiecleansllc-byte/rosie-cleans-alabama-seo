const BOOKING_URL = "https://rosiecleansalabama.com";
const PHONE = "256-469-1885";
const PHONE_HREF = "tel:+12564691885";
const PRIMARY_URL = "https://rosiecleansalabama.com";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#F0FBFC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#75D3DF" }}>
                <span className="font-bold text-sm" style={{ color: "#111111" }}>R</span>
              </div>
              <span className="font-bold text-base tracking-tight" style={{ color: "#111111" }}>Rosie Cleans Alabama</span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#555555" }}>
              Professional house cleaning services for busy homeowners throughout Huntsville and North Alabama.
            </p>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: "#4BB8C8" }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {PHONE}
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm mb-4 uppercase tracking-wide" style={{ color: "#111111" }}>Services</h3>
            <ul className="space-y-2.5">
              {["Recurring Cleaning", "Deep Cleaning", "Move-In Cleaning", "Move-Out Cleaning", "Post-Construction", "Office Cleaning"].map((s) => (
                <li key={s}>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors hover:text-teal-dark"
                    style={{ color: "#555555" }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-sm mb-4 uppercase tracking-wide" style={{ color: "#111111" }}>Service Areas</h3>
            <ul className="space-y-2.5">
              {["Huntsville, AL", "Madison, AL", "Athens, AL", "Decatur, AL", "Harvest, AL"].map((area) => (
                <li key={area}>
                  <span className="text-sm" style={{ color: "#555555" }}>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4 uppercase tracking-wide" style={{ color: "#111111" }}>Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Book Online", href: BOOKING_URL, external: true },
                { label: "rosiecleansalabama.com", href: PRIMARY_URL, external: true },
                { label: "FAQ", href: "#faq", external: false },
                { label: `Call ${PHONE}`, href: PHONE_HREF, external: false },
              ].map(({ label, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-sm transition-colors hover:text-teal-dark"
                    style={{ color: "#555555" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: "1px solid #D6F4F7", color: "#555555" }}
        >
          <p>© {currentYear} Rosie Cleans Alabama. All rights reserved.</p>
          <p>
            Proudly serving Huntsville &amp; North Alabama.{" "}
            <a
              href={PRIMARY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: "#4BB8C8" }}
            >
              rosiecleansalabama.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
