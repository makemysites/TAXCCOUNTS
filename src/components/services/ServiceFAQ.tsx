"use client";

import { useState, useCallback } from "react";

interface ServiceFAQProps {
  items: { question: string; answer: string }[];
}

export default function ServiceFAQ({ items }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div
            key={index}
            className={`transition-colors duration-200 ${isOpen ? "bg-gold/5" : ""}`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 py-5 px-4 sm:px-6 text-left cursor-pointer group"
              >
                <span
                  className={`text-base sm:text-lg font-semibold leading-snug transition-colors duration-200 ${
                    isOpen
                      ? "text-navy"
                      : "text-charcoal group-hover:text-navy"
                  }`}
                >
                  {item.question}
                </span>

                {/* Chevron icon */}
                <span className="shrink-0 ml-2" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-5 w-5 transition-transform duration-300 ease-in-out ${
                      isOpen
                        ? "rotate-180 text-gold"
                        : "text-muted group-hover:text-gold"
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
            </h3>

            {/* Expandable panel — CSS grid transition for smooth height animation */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-4 sm:px-6 pb-6 pt-0">
                  {/* Gold accent bar */}
                  <div
                    className="mb-3 h-0.5 w-8 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                  <p className="text-muted text-base leading-relaxed max-w-2xl">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
