const trustPoints = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Professional Cleaning Teams",
    description:
      "Every cleaner is background-checked, trained, and held to the highest professional standards. We invest in our people so you can trust who enters your home.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Easy Online Booking",
    description:
      "Schedule, reschedule, or manage your account entirely online — no phone calls required. Pick your service, choose a date, and you're done.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Clear Estimated Pricing",
    description:
      "No surprises. Get a transparent price estimate upfront when you book. Our pricing is straightforward and based on your home's size and service type.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Payment After Service",
    description:
      "We never charge you until your cleaning is complete. Your card is processed after the job is done — not before. No risk, no hassle.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Satisfaction-Focused",
    description:
      "We care deeply about your experience. If something isn't right, let us know and we'll make it right. Your satisfaction is our top priority.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Insured & Protected",
    description:
      "Rosie Cleans Alabama is fully insured. You can relax knowing your home and belongings are protected on every visit.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 sm:py-20 bg-white" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-green font-semibold text-sm uppercase tracking-wide">
            Why Huntsville Trusts Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
            Cleaning You Can Count On
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            We built Rosie Cleans Alabama around the things that matter most to
            homeowners — reliability, communication, and results you can see.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-brand-green/30 hover:shadow-md transition-all duration-200 bg-white"
            >
              <div className="w-12 h-12 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-green group-hover:text-white transition-all duration-200">
                {point.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
