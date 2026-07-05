"use client";

import React from "react";
import { TESTIMONIALS } from "@/lib/firm-content";

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-serif italic text-accent text-base block">
            Client Stories
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy">
            What Our Clients Say
          </h2>
          <p className="text-sm md:text-base text-navy/80 leading-relaxed font-sans">
            Real feedback from the NRIs and international business owners who trust us with their financial compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-cream-dark/30 rounded-xl p-8 border border-border flex flex-col justify-between relative overflow-hidden shadow-sm"
            >
              {/* Decorative quote mark */}
              <span className="absolute -top-4 -left-2 text-8xl font-serif text-accent/10 select-none pointer-events-none">
                &ldquo;
              </span>

              <div className="relative z-10">
                <p className="text-sm md:text-base text-navy/90 font-sans italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex items-center justify-between mt-auto">
                <div>
                  <div className="font-bold text-navy font-serif text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted font-sans mt-0.5">
                    {t.location}
                  </div>
                </div>

                {t.service && (
                  <span className="inline-flex px-2 py-0.5 bg-accent/5 text-accent text-[9px] uppercase font-bold tracking-widest rounded border border-accent/20">
                    {t.service}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-muted font-sans">
          Reviews are collected and verified from our Google Business Profile.
        </div>
      </div>
    </section>
  );
}
