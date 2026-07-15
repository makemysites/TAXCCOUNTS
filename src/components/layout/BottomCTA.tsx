import React from "react";
import Link from "next/link";
import { BOOKING } from "@/lib/firm-content";
import Reveal from "@/components/shared/Reveal";

export default function BottomCTA() {
  return (
    <section className="py-20 lg:py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="relative rounded-3xl bg-navy text-white overflow-hidden px-8 py-16 sm:px-16 sm:py-20 text-center shadow-[0_32px_80px_-32px_rgba(4,31,56,0.6)]">
            {/* Atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,91,160,0.4),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(197,165,90,0.14),transparent_55%)] pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="eyebrow eyebrow-light eyebrow-center justify-center">
                Get Started
              </span>
              <h2 className="mt-6 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] tracking-tight">
                Let us handle your finances.
                <span className="block text-gold-light italic mt-1">
                  You focus on growth.
                </span>
              </h2>
              <p className="mt-6 text-base text-white/65 leading-relaxed max-w-lg mx-auto">
                A free 20-minute consultation is all it takes to see where your
                cross-border setup is leaking time and tax.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={BOOKING.calComUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                >
                  Book Free Consultation
                  <span aria-hidden="true">&rarr;</span>
                </a>
                <Link href="/pricing" className="btn btn-outline-light">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
