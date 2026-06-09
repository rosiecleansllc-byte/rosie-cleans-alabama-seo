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
    if (openIndex !== index) {
      trackFaqExpand(question);
    }
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="py-16 sm:py-20 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-green font-semibold text-sm uppercase tracking-wide">
            Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Everything you need to know about our cleaning services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-brand-green/30 transition-colors duration-200"
            >
              <button
                onClick={() => toggle(index, faq.question)}
                className="w-full flex items-center justify-between text-left p-5 sm:p-6 gap-4"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900 text-sm sm:text-base leading-snug">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
                    openIndex === index
                      ? "bg-brand-green text-white rotate-180"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                  <div className="h-px bg-gray-100 mb-4" />
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
