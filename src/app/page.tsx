import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PlatformsWork from "@/components/home/PlatformsWork";
import CountriesServe from "@/components/home/CountriesServe";
import ClientProcess from "@/components/home/ClientProcess";
import Testimonials from "@/components/home/Testimonials";
import LatestInsights from "@/components/home/LatestInsights";
import Reveal from "@/components/shared/Reveal";
import { SEO, FIRM, FOUNDER } from "@/lib/firm-content";

export const metadata: Metadata = {
  title: SEO.defaultTitle,
  description: SEO.defaultDescription,
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── About Section ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
            {/* Left: Copy */}
            <Reveal className="w-full lg:w-1/2 text-center lg:text-left">
              <span className="eyebrow justify-center lg:justify-start">
                About the Firm
              </span>
              <h2 className="mt-6 font-serif text-[2rem] sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] tracking-tight text-navy">
                Structured accounting systems for cross-border taxpayers.
              </h2>
              <div className="mt-8 space-y-5 text-[15px] md:text-base text-muted leading-relaxed">
                <p>
                  {FIRM.name} was founded by {FOUNDER.name}, a {FOUNDER.qualifications[2]} specializing in accounting and compliance. Our practice supports businesses, startups, and NRIs in organizing their finances, optimizing tax strategies, and navigating cross-border regulatory compliance.
                </p>
                <p>
                  We integrate bookkeeping, tax strategy, payroll, and
                  regulatory compliance (FEMA, RBI, DTAA credits) into a
                  single, cohesive system so your cross-border finances work
                  together seamlessly.
                </p>
              </div>
              <div className="mt-9">
                <Link href="/about" className="btn btn-navy">
                  About Our Firm
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </Reveal>

            {/* Right: Portrait with offset gold frame */}
            <Reveal delay={120} className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[440px]">
                <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border border-gold/50" aria-hidden="true" />
                <div className="absolute -bottom-5 -left-5 w-36 h-36 rounded-2xl bg-gold/10" aria-hidden="true" />
                <div className="relative rounded-2xl overflow-hidden shadow-[0_24px_60px_-20px_rgba(6,47,82,0.35)]">
                  <img
                    src={FOUNDER.photoUrl}
                    alt={`${FOUNDER.name}, founder of ${FIRM.name}, in a professional modern office setting`}
                    className="object-cover w-full h-[460px]"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ServicesPreview />

      <WhyChooseUs />

      <CountriesServe />

      <ClientProcess />

      <Testimonials />

      <PlatformsWork />

      <LatestInsights />
    </>
  );
}
