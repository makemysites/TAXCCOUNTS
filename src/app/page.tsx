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
import { SEO, FIRM } from "@/lib/firm-content";

export const metadata: Metadata = {
  title: SEO.defaultTitle,
  description: SEO.defaultDescription,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      
      {/* ── About Section (Right: Image, Left: Info) ──────────────── */}
      <section className="py-20 lg:py-24 bg-cream-dark/20 border-b border-border animate-fade-in">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left: Copy */}
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
              <span className="font-serif italic text-accent text-base block">
                About The Company
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight text-navy">
                Structured accounting systems for cross-border taxpayers.
              </h2>
              <div className="w-12 h-1 bg-gold rounded-full mx-auto lg:mx-0" />
              <p className="text-xs md:text-sm text-navy/80 leading-relaxed font-sans">
                {FIRM.name} was founded by CA Priya Anand, a Chartered Accountant with over 12 years of experience in global taxation. Over that time, the firm has helped hundreds of NRIs and cross-border businesses organize their finances, identify tax optimization points, and navigate regulatory rules.
              </p>
              <p className="text-xs md:text-sm text-navy/80 leading-relaxed font-sans">
                We integrate bookkeeping, tax strategy, payroll, and regulatory compliance (FEMA, RBI, DTAA credits) into a single, cohesive system so your cross-border finances work together seamlessly.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent border-b border-accent/20 pb-0.5 hover:text-accent-hover hover:border-accent transition-colors"
                >
                  <span>About Our Firm</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right: Representative Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative p-2 bg-white rounded-[140px_0px_140px_0px] border border-border shadow-md w-full max-w-[420px] overflow-hidden">
                <div className="rounded-[130px_0px_130px_0px] overflow-hidden w-full h-[440px]">
                  <img
                    src="/images/about_company.png"
                    alt="CA Priya Anand, founder of TAXCCOUNTS, in a professional modern office setting"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ServicesPreview />
      
      <WhyChooseUs />
      
      <PlatformsWork />
      
      <CountriesServe />
      
      <ClientProcess />
      
      <Testimonials />
      
      <LatestInsights />
    </>
  );
}
