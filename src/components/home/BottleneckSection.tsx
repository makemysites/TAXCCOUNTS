import React from "react";
import Link from "next/link";
import PhotoPlaceholder from "@/components/shared/PhotoPlaceholder";

export default function BottleneckSection() {
  return (
    <section className="py-20 lg:py-32 bg-cream-dark/30 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Column: Leaf Image Frame */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-last lg:order-first">
            <div className="relative p-2 bg-white rounded-[140px_0px_140px_0px] border border-border shadow-md w-full max-w-[420px] overflow-hidden">
              <div className="rounded-[130px_0px_130px_0px] overflow-hidden w-full">
                <PhotoPlaceholder
                  width="100%"
                  height="440px"
                  label="[REAL PHOTO REQUIRED] — Fragmented Setup vs Systems"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Copy */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <span className="font-serif italic text-accent text-base block">
              The Bottleneck Problem
            </span>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-navy">
              Fragmented financial vendors turn you into the bottleneck.
            </h2>
            <div className="space-y-4 text-xs md:text-sm text-navy/80 leading-relaxed font-sans">
              <p>
                Most independent professionals and NRIs rely on separate providers—a bookkeeper in one country, a tax CPA in another, and a separate payroll company. Each one handles their piece, but no one is responsible for making everything work together.
              </p>
              <p>
                You end up in the middle, translating tax rules, copying ledger statements, and trying to avoid double-tax exposure. We replace that fragmented setup with a single, coordinated system.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-xs uppercase tracking-wider font-bold text-white shadow hover:bg-accent-hover transition-colors"
              >
                View Pricing & Packages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
