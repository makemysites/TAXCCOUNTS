"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BOOKING, COUNTRIES_SERVED_TEXT } from "@/lib/firm-content";

const STATS = [
  { value: "12+", label: "Years of Expertise" },
  { value: "500+", label: "Returns Filed" },
  { value: "7", label: "Countries Served" },
  { value: "100%", label: "Secure Filings" },
];

/* Orbiting service badges — angle in degrees around the centre circle */
const ORBIT_SERVICES = [
  { angle: 315, label1: "Accounting &", label2: "Bookkeeping", labelSide: "right", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { angle: 0, label1: "Taxation &", label2: "Compliance", labelSide: "right", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { angle: 45, label1: "Business", label2: "Incorporation", labelSide: "right", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { angle: 90, label1: "Payroll", label2: "Management", labelSide: "bottom", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2" },
  { angle: 135, label1: "Virtual CFO", label2: "Services", labelSide: "left", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
  { angle: 180, label1: "Financial", label2: "Reporting", labelSide: "left", icon: "M9 17v-2m3 2v-4m3 2v-6m-9-3h18a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" },
  { angle: 225, label1: "Advisory &", label2: "Consulting", labelSide: "left", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { angle: 270, label1: "Global", label2: "Support", labelSide: "top", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
];

const CREDENTIALS = [
  { line1: "Registered", line2: "In India", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { line1: "Serving Clients", line2: "Worldwide", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2.945M11 3.935V5.5A2.5 2.5 0 018.5 8h-.5a2 2 0 00-2 2 2 2 0 01-2 2H3.055M11 20.065V18.5a2.5 2.5 0 00-2.5-2.5h-.5a2 2 0 01-2-2 2 2 0 00-2-2H3.055m17.89 0H19a2 2 0 01-2-2v-1a2 2 0 00-2-2 2 2 0 01-2-2V3.935M20.945 11H19a2 2 0 00-2 2v1a2 2 0 01-2 2 2 2 0 00-2 2v2.945" },
  { line1: "CA & CPA", line2: "Experts", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z" },
  { line1: "Secure &", line2: "Confidential", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
  { line1: "GST & Income", line2: "Tax Experts", icon: "M9 14l6-6m-5.5.5h.01m5.99 5h.01M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
  { line1: "Company Inc.", line2: "Specialists", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-navy text-white -mt-18"
    >
      {/* Layered atmosphere: deep navy gradient + gold glow + fine grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(11,91,160,0.25),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(197,165,90,0.08),transparent_60%)] pointer-events-none" />
      {/* Subtle dark scrim on the left to lift text contrast over the glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Main Content Grid */}
      <div
        className={`relative mx-auto flex max-w-7xl flex-col lg:flex-row gap-10 lg:gap-12 items-center px-6 sm:px-8 pt-28 lg:pt-32 pb-14 lg:pb-16 transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {/* ── Left Column: Copy & Stats ──────────────────────── */}
        <div className="w-full lg:w-[52%] text-center lg:text-left">
          <span className="eyebrow eyebrow-light justify-center lg:justify-start">
            Tax & Accounting Professionals · Cross-Border
          </span>

          <h1 className="mt-7 max-w-170 mx-auto lg:mx-0 font-serif text-[2.5rem] sm:text-5xl lg:text-[3.6rem] leading-[1.08] font-semibold tracking-[-0.02em] text-white">
            Empowering Businesses{" "}
            <span className="text-gold-light italic">Beyond Borders.</span>
          </h1>

          <p className="mt-7 max-w-140 mx-auto lg:mx-0 text-lg sm:text-xl font-medium text-white leading-relaxed">
            Accounting. Taxation. Compliance. Advisory.
            <span className="text-gold-light"> Delivered with precision.</span>
          </p>
          <p className="mt-4 max-w-135 mx-auto lg:mx-0 text-[15px] leading-relaxed text-white/75">
            Supporting businesses across {COUNTRIES_SERVED_TEXT} with trusted
            financial and business solutions.
          </p>

          {/* Dual CTAs */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={BOOKING.calComUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              Talk to an Expert
              <span aria-hidden="true">&rarr;</span>
            </a>
            <Link href="/services" className="btn btn-outline-light">
              Explore Services
            </Link>
          </div>

          {/* Stats Row */}
          <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-7 max-w-xl mx-auto lg:mx-0">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <span className="block font-serif text-3xl sm:text-[2rem] font-semibold text-white">
                  {stat.value}
                </span>
                <span className="mt-1.5 block text-[11px] text-white/65 uppercase tracking-[0.14em] font-semibold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right Column: Orbital Services Diagram ─────────── */}
        <div className="w-full lg:w-[48%] flex flex-col items-center justify-center relative">
          {/* Sized stage: height matches the diagram's *visual* (scaled) size so
              content below never overlaps the orbit */}
          <div className="relative w-full h-[330px] sm:h-[440px] md:h-[600px] lg:h-[540px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] flex items-center justify-center scale-[0.62] sm:scale-[0.82] md:scale-95 lg:scale-100">
            {/* Orbit rings: solid outer track + rotating dashed gold inner ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full border border-white/15" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border-2 border-dashed border-gold/40 motion-safe:animate-[spin_90s_linear_infinite]" />

            {/* Centre circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-72 md:h-72 rounded-full shadow-[0_0_80px_rgba(11,91,160,0.45)] ring-1 ring-white/20 overflow-hidden bg-white z-10">
              <img
                src="/images/world_map_countries.png"
                alt="World map highlighting the countries we serve"
                className="object-cover w-full h-full scale-105"
              />
              <div className="absolute inset-0 rounded-full ring-inset ring-8 ring-navy/10" />
            </div>

            {/* Orbiting service badges */}
            {ORBIT_SERVICES.map((s) => (
              <div
                key={s.label2 + s.angle}
                className="absolute top-1/2 left-1/2 z-20"
                style={{
                  transform: `translate(-50%, -50%) rotate(${s.angle}deg) translate(230px) rotate(-${s.angle}deg)`,
                }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center text-navy shrink-0 ring-1 ring-gold/40 shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-110 hover:ring-2 hover:ring-gold/70">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                    </svg>
                  </div>
                </div>

                {/* Label */}
                <div
                  className={`absolute hidden md:max-lg:block min-[1400px]:block leading-tight whitespace-nowrap ${
                    s.labelSide === "right"
                      ? "top-1/2 left-11.5 -translate-y-1/2 text-left"
                      : s.labelSide === "left"
                      ? "top-1/2 right-11.5 -translate-y-1/2 text-right"
                      : s.labelSide === "bottom"
                      ? "top-11.5 left-1/2 -translate-x-1/2 text-center"
                      : "bottom-11.5 left-1/2 -translate-x-1/2 text-center"
                  }`}
                >
                  <span className="block text-xs font-bold text-white">{s.label1}</span>
                  <span className="block text-[11px] text-white/80 font-semibold mt-0.5">{s.label2}</span>
                </div>
              </div>
            ))}
            </div>
          </div>

          {/* Service legend chips — shown wherever the radial labels don't fit:
              phones (<768px) and laptop/tablet-landscape widths (1024–1400px) */}
          <div className="flex md:max-lg:hidden min-[1400px]:hidden mt-6 flex-wrap justify-center gap-2 px-2 relative z-10">
            {ORBIT_SERVICES.map((s) => (
              <span
                key={`chip-${s.label2}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/15 px-3 py-1.5 text-[11px] font-semibold text-white/85 whitespace-nowrap"
              >
                <svg className="w-3.5 h-3.5 text-gold-light shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                </svg>
                {s.label1} {s.label2}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Credentials Strip ─────────────────────────────────── */}
      <div className="relative z-20 border-t border-white/15 bg-navy shadow-[0_-1px_0_rgba(197,165,90,0.25)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-7 lg:gap-y-0 lg:divide-x lg:divide-white/10">
            {CREDENTIALS.map((c) => (
              <div
                key={c.line1}
                className="flex items-center gap-3 lg:px-5 lg:first:pl-0 lg:last:pr-0"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-gold/15 ring-1 ring-gold/30 text-gold-light shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                  </svg>
                </span>
                <div className="text-left leading-tight">
                  <span className="block text-[13px] font-bold text-white">{c.line1}</span>
                  <span className="block text-[12px] text-white/70 font-medium">{c.line2}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
