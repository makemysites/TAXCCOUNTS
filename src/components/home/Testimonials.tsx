import React from "react";
import { TESTIMONIALS } from "@/lib/firm-content";
import { Star } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Client Stories"
            title="What Our Clients Say"
            subtitle="Real feedback from the NRIs and international business owners who trust us with their financial compliance."
            className="mb-16"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <Reveal key={t.name} delay={idx * 100}>
              <figure className="h-full flex flex-col justify-between rounded-2xl bg-white border border-border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-20px_rgba(6,47,82,0.2)]">
                <div>
                  {/* Star rating */}
                  <div className="flex gap-1 text-gold" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <blockquote className="mt-6 text-[15px] md:text-base text-navy/90 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

                <figcaption className="pt-6 mt-8 border-t border-border flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {/* Initials avatar */}
                    <span className="w-10 h-10 rounded-full bg-navy text-gold-light flex items-center justify-center font-serif font-semibold text-sm shrink-0">
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <div className="font-bold text-navy text-sm">{t.name}</div>
                      <div className="text-[13px] text-muted mt-0.5">{t.location}</div>
                    </div>
                  </div>

                  {t.service && (
                    <span className="inline-flex px-2.5 py-1 bg-gold/10 text-gold-dark text-[10px] uppercase font-bold tracking-[0.12em] rounded-full whitespace-nowrap">
                      {t.service}
                    </span>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center text-[13px] text-muted">
          Reviews are collected and verified from our Google Business Profile.
        </div>
      </div>
    </section>
  );
}
