"use client";

import { useState } from "react";
import { FAQ } from "@/types/city";
import { trackFaqExpand } from "@/lib/analytics";

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number, question: string) {
    if (openIndex !== index) trackFaqExpand(question);
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: "#F5F5F5" }} id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#75D3DF" }}>
            Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-2 mb-3 tracking-tight" style={{ color: "#111111" }}>
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg" style={{ color: "#555555" }}>
            Everything you need to know about our cleaning services.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border overflow-hidden transition-colors duration-150"
                style={{ borderColor: isOpen ? "#75D3DF" : "#E0E0E0" }}
              >
                <button
                  onClick={() => toggle(index, faq.question)}
                  className="w-full flex items-center justify-between text-left p-5 sm:p-6 gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sm sm:text-base leading-snug" style={{ color: "#111111" }}>
                    {faq.question}
                  </span>
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{
                      backgroundColor: isOpen ? "#75D3DF" : "#F5F5F5",
                      color: isOpen ? "#111111" : "#555555",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                    <div className="h-px mb-4" style={{ backgroundColor: "#E0E0E0" }} />
                    <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#555555" }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
