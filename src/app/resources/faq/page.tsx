"use client";

import React, { useState } from "react";
import { FAQ_SECTIONS } from "@/lib/faq-data";
import { BOOKING, PORTAL } from "@/lib/firm-content";
import { SectionHeading } from "@/components/shared";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (sectionIdx: number, itemIdx: number) => {
    const key = `${sectionIdx}-${itemIdx}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="bg-cream py-16 sm:py-24 font-sans animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block">
            Information Desk
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-navy mt-3 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Detailed answers to queries regarding fees, secure file uploads, cross-border workflows, and consultation scheduling.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-16">
          {FAQ_SECTIONS.map((section, sIdx) => (
            <div key={sIdx} className="space-y-6">
              <div className="border-b border-border pb-3">
                <h2 className="text-xl font-bold font-serif text-navy">
                  {section.title}
                </h2>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  {section.description}
                </p>
              </div>

              <div className="space-y-3">
                {section.items.map((item, itemIdx) => {
                  const key = `${sIdx}-${itemIdx}`;
                  const isOpen = !!openItems[key];

                  return (
                    <div
                      key={itemIdx}
                      className="bg-white rounded-xl border border-border shadow-sm overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleItem(sIdx, itemIdx)}
                        className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-cream/40 transition-colors focus:outline-none"
                        aria-expanded={isOpen}
                      >
                        <span className="font-bold text-navy text-sm sm:text-base leading-snug">
                          {item.question}
                        </span>
                        <span className="shrink-0 w-6 h-6 rounded-full bg-accent/5 text-accent flex items-center justify-center border border-accent/15">
                          <svg
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>

                      {/* Content panel */}
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          isOpen ? "max-h-[500px] border-t border-border/60" : "max-h-0"
                        }`}
                      >
                        <div className="p-6 text-sm text-navy/90 leading-relaxed space-y-3 bg-cream/10">
                          {item.answer.split("\n\n").map((para, pIdx) => (
                            <p key={pIdx}>{para}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Portal Information Note */}
        <div className="mt-16 bg-white p-8 rounded-2xl border border-border shadow-sm flex items-start gap-4 max-w-3xl mx-auto">
          <div className="shrink-0 p-2.5 bg-accent/5 border border-accent/15 text-accent rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <div className="space-y-2 text-sm md:text-base">
            <h3 className="font-bold text-navy font-serif">Secure Document Exchange</h3>
            <p className="text-muted leading-relaxed">
              We never collect bank statements, tax history, or PAN cards via email or contact forms due to compliance mandates (such as GLBA). All file handovers occur inside our secure client portal.
            </p>
            {PORTAL.url && (
              <a
                href={PORTAL.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold text-accent hover:underline pt-1 text-xs"
              >
                <span>Go to Client Portal</span>
                <span>&rarr;</span>
              </a>
            )}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-navy rounded-2xl p-8 sm:p-12 text-center text-white border border-navy-light/30 shadow-lg">
          <h2 className="text-2xl font-serif font-bold text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed mb-8">
            Our initial consultations are free. Schedule a 20-minute slot and we'll analyze your cross-border tax query together.
          </p>
          <a
            href={BOOKING.calComUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-accent hover:bg-accent-light text-navy-dark font-bold text-sm rounded-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all font-sans inline-block"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
