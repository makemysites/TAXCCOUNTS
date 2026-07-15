"use client";

import { useState, useEffect } from "react";
import type { Director } from "@/lib/firm-content";

interface DirectorsSectionProps {
  directors: Director[];
}

export default function DirectorsSection({ directors }: DirectorsSectionProps) {
  const [selected, setSelected] = useState<Director | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <>
      {/* Director Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {directors.map((dir, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(dir)}
            className="group bg-white rounded-2xl border border-border p-6 text-center space-y-3 shadow-sm flex flex-col items-center hover:-translate-y-1.5 hover:shadow-[0_20px_44px_-18px_rgba(6,47,82,0.2)] hover:border-gold/40 transition-all duration-300 cursor-pointer w-full"
          >
            <div className="w-28 h-28 rounded-full border-2 border-border group-hover:border-gold/50 overflow-hidden bg-cream mb-2 flex items-center justify-center transition-all duration-300">
              <img
                src={dir.image}
                alt={dir.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-navy group-hover:text-accent transition-colors duration-200">{dir.name}</h3>
              <span className="text-[10px] text-accent font-bold uppercase tracking-widest font-sans block mt-1">{dir.role}</span>
            </div>
            <p className="text-sm text-navy/70 font-sans leading-relaxed">{dir.desc}</p>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-accent/70 group-hover:text-accent transition-colors duration-200 mt-2">
              View Full Profile
              <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        ))}
      </div>

      {/* Modal Overlay */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-8 overflow-y-auto bg-navy/70 backdrop-blur-sm"
          onClick={() => setSelected(null)}
          aria-modal="true"
          role="dialog"
          aria-label={`Profile of ${selected.name}`}
        >
          <div
            className="relative bg-white rounded-2xl shadow-[0_32px_80px_-20px_rgba(6,47,82,0.4)] w-full max-w-3xl my-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header – Navy band */}
            <div className="relative bg-navy px-8 pt-10 pb-8 overflow-hidden">
              {/* Atmosphere glows */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(11,91,160,0.5),transparent_60%)] pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(197,165,90,0.15),transparent_55%)] pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors duration-200 z-10"
                aria-label="Close profile"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-end gap-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-gold/40 overflow-hidden bg-cream shrink-0 shadow-lg">
                  <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-[10px] text-gold font-bold uppercase tracking-[0.15em] font-sans mb-1">{selected.role}</p>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">{selected.name}</h2>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="px-8 py-8 space-y-8 overflow-y-auto max-h-[65vh]">

              {/* Bio paragraphs */}
              <div className="space-y-4 text-sm md:text-base text-navy/80 leading-relaxed font-sans">
                {selected.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Specializations & Qualifications grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-border/60">
                {/* Specializations */}
                <div>
                  <h4 className="text-[10px] text-accent font-bold uppercase tracking-widest font-sans mb-3">
                    Areas of Specialization
                  </h4>
                  <ul className="space-y-2">
                    {selected.specializations.map((s, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-navy/80 font-sans">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Qualifications */}
                <div>
                  <h4 className="text-[10px] text-accent font-bold uppercase tracking-widest font-sans mb-3">
                    Professional Qualifications
                  </h4>
                  <ul className="space-y-2">
                    {selected.qualifications.map((q, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-navy/80 font-sans">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-8 py-5 border-t border-border bg-cream/60 flex justify-end">
              <button
                onClick={() => setSelected(null)}
                className="text-sm font-bold text-navy/60 hover:text-navy transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
