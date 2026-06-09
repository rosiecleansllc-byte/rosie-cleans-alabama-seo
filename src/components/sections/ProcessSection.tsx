const steps = [
  {
    number: "01",
    title: "Request Pricing",
    description:
      "Tell us about your home — size, service type, and any special needs. We'll provide a clear, upfront estimate with no surprises.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Book Online",
    description:
      "Choose your date and time, confirm your booking, and receive an instant confirmation email. No phone calls, no back-and-forth.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "We Clean",
    description:
      "Our professional team arrives in your arrival window and follows a detailed checklist to make sure every inch of your home is cleaned thoroughly.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Enjoy Your Home",
    description:
      "Walk into a freshly cleaned home. Payment is processed after service completion. Easy, reliable, and completely on your terms.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 sm:py-20 bg-brand-green-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-green-light font-semibold text-sm uppercase tracking-wide">
            Simple Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2 mb-4">
            How It Works
          </h2>
          <p className="text-green-100 max-w-xl mx-auto text-base sm:text-lg">
            Getting a clean home has never been easier. Four simple steps from
            booking to relaxing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-white/20 z-0 -translate-x-4" />
              )}
              <div className="relative z-10 flex flex-col items-center text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors duration-200">
                <div className="w-12 h-12 bg-brand-green-light/30 rounded-xl flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <span className="text-brand-green-light font-bold text-2xl mb-2 font-mono">
                  {step.number}
                </span>
                <h3 className="font-bold text-white text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-green-100 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
