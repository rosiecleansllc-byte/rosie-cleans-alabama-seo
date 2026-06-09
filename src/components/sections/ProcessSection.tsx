const steps = [
  {
    number: "01",
    title: "Request Pricing",
    description: "Tell us about your home — size, service type, and any special needs. We'll provide a clear upfront estimate with no surprises.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Book Online",
    description: "Choose your date and time, confirm your booking, and receive an instant confirmation email. No phone calls needed.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "We Clean",
    description: "Our professional team arrives on time with all supplies and follows a detailed checklist to clean every inch thoroughly.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Enjoy Your Home",
    description: "Walk into a freshly cleaned home. Payment is processed only after service completion — always on your terms.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#75D3DF" }}>
            Simple Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2 mb-3 tracking-tight">
            How It Works
          </h2>
          <p className="max-w-xl mx-auto text-base sm:text-lg" style={{ color: "#888888" }}>
            Four simple steps from booking to relaxing in a clean home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center p-6 rounded-2xl border"
              style={{ backgroundColor: "#1A1A1A", borderColor: "#2a2a2a" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(117,211,223,0.12)", color: "#75D3DF" }}
              >
                {step.icon}
              </div>
              <span className="text-2xl font-black mb-2 font-mono tracking-tight" style={{ color: "#75D3DF" }}>
                {step.number}
              </span>
              <h3 className="font-bold text-white text-base mb-2">{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
