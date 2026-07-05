"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BOOKING } from "@/lib/firm-content";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-gradient-to-br from-[#CBE0F3] via-[#E6F0FA] to-[#F3F8FC] pt-8 lg:pt-12 pb-8 border-b border-border/80"
    >
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main Content Grid */}
          <div
  className={`relative mx-auto flex max-w-[1500px] flex-col lg:flex-row gap-10 lg:gap-8 items-center px-6 sm:px-8 transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* ── Left Column: Copy & Stats ──────────────────────── */}
        {/* <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"> */}
        {/* <div className="w-full lg:w-1/2 space-y-10 text-center lg:text-left lg:-translate-x-10"> */}
        <div className="w-full lg:w-[46%] space-y-7 text-center lg:text-left">
          <div className="space-y-6">
            <h1 className="max-w-[650px] font-serif text-[3rem] sm:text-[3.8rem] leading-[1.05] font-semibold tracking-[-0.03em] text-navy">
              Empowering Businesses{" "}
              <span className="text-accent block sm:inline">Beyond Borders.</span>
            </h1>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto lg:mx-0" />
            <div className="space-y-4 pt-2">
              <p className="max-w-[560px] text-lg sm:text-xl font-bold text-navy leading-relaxed font-sans mx-auto lg:mx-0">
                Accounting. Taxation. Compliance. Advisory. Delivered with Precision.
              </p>
              <p className="max-w-[560px] text-sm md:text-base leading-relaxed text-navy/70 font-sans mx-auto lg:mx-0">
                Supporting businesses across India, USA, UK, Canada, Australia, UAE, Singapore, and New Zealand with trusted financial and business solutions.
              </p>
            </div>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-col gap-5 sm:flex-row  sm:justify-center lg:justify-start pt-3">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg bg-navy px-12 py-4 text-sm uppercase tracking-wider font-bold text-white shadow hover:bg-navy/90 transition-colors"
            >
              Our Services
            </Link>

            <a
              href={BOOKING.calComUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-navy/30 bg-white px-12 py-4 text-sm uppercase tracking-wider font-bold text-navy shadow-sm hover:bg-cream-dark transition-colors"
            >
              Talk to an Expert &rarr;
            </a>
          </div>

          {/* Horizontal Stats Row - Positioned with expert-tuned margins */}
          <div className="pt-6 mt-4 lg:mt-6 border-t border-border/70 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-lg mx-auto lg:mx-0">
            {[
              { value: "12+", label: "Years of Experience" },
              { value: "2,500+", label: "Happy Clients" },
              { value: "20+", label: "Countries Served" },
              { value: "50+", label: "Finance Experts" }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-1 text-center lg:text-left border-r last:border-r-0 border-border/60">
                <span className="block text-3xl font-bold font-serif text-navy">
                  {stat.value}
                </span>
                <span className="block text-[13px] text-muted uppercase tracking-wider font-bold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right Column: Interactive Circular Orbital Diagram ─ */}
        {/* ── Right Column: Interactive Circular Orbital Diagram ─ */}
        <div className="w-full lg:w-[54%] flex items-center justify-center relative min-h-[360px] sm:min-h-[460px] md:min-h-[520px] max-w-[650px] mx-auto lg:mx-0 overflow-hidden">
          {/* Responsive Scaling Container to prevent horizontal layout clipping on mobile */}
          <div className="relative w-[460px] h-[460px] flex items-center justify-center scale-[0.68] sm:scale-[0.85] md:scale-[0.95] lg:scale-100 transition-transform duration-300">
            
            {/* Orbit line background — fully visible for stronger connection */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full border-2 border-dashed border-navy/60 animate-[spin_100s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border-2 border-dashed border-navy/40 animate-[spin_80s_linear_infinite_reverse]" />

            {/* Center Skyline Circle - Large, covers height */}
            <div className="relative w-64 h-64 md:w-[19rem] md:h-[19rem] rounded-full border border-border shadow-2xl overflow-hidden bg-white z-10">
              <img
                src="/images/world_map_countries.png"
                alt="Handshake over global city skyline representing cross-border partnerships"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Orbiting Badge 1: Accounting & Bookkeeping (Top Right) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" style={{ transform: "rotate(315deg) translate(230px) rotate(-315deg)" }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-border flex items-center justify-center shadow-md text-accent shrink-0">
                  <svg className="w-6 h-6 md:w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-1/2 left-[54px] -translate-y-1/2 text-left font-sans hidden md:block">
                <span className="block text-[11px] md:text-xs font-bold text-navy whitespace-nowrap leading-tight">Accounting &</span>
                <span className="block text-[10px] md:text-[11px] text-muted font-bold leading-tight mt-0.5">Bookkeeping</span>
              </div>
            </div>

            {/* Orbiting Badge 2: Taxation & Compliance (Middle Right) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" style={{ transform: "rotate(0deg) translate(230px) rotate(0deg)" }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-border flex items-center justify-center shadow-md text-accent shrink-0">
                  <svg className="w-6 h-6 md:w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-[46%] left-[54px] -translate-y-1/2 text-left font-sans hidden md:block">
                <span className="block text-[11px] md:text-xs font-bold text-navy whitespace-nowrap leading-tight">Taxation &</span>
                <span className="block text-[10px] md:text-[11px] text-muted font-bold leading-tight mt-0.5">Compliance</span>
              </div>
            </div>

            {/* Orbiting Badge 3: Business Incorporation (Lower Right) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" style={{ transform: "rotate(45deg) translate(230px) rotate(-45deg)" }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-border flex items-center justify-center shadow-md text-accent shrink-0">
                  <svg className="w-6 h-6 md:w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-1/2 left-[54px] -translate-y-1/2 text-left font-sans hidden md:block">
                <span className="block text-[11px] md:text-xs font-bold text-navy whitespace-nowrap leading-tight">Business</span>
                <span className="block text-[10px] md:text-[11px] text-muted font-bold leading-tight mt-0.5">Incorporation</span>
              </div>
            </div>

            {/* Orbiting Badge 4: Payroll Management (Bottom Center) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" style={{ transform: "rotate(90deg) translate(230px) rotate(-90deg)" }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-border flex items-center justify-center shadow-md text-accent shrink-0">
                  <svg className="w-6 h-6 md:w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 text-center font-sans hidden md:block" style={{ top: "calc(50% + 260px)" }}>
              <span className="block text-[11px] md:text-xs font-bold text-navy whitespace-nowrap leading-tight">Payroll</span>
              <span className="block text-[10px] md:text-[11px] text-muted font-bold leading-tight mt-0.5">Management</span>
            </div>

            {/* Orbiting Badge 5: Virtual CFO Services (Bottom Left) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" style={{ transform: "rotate(135deg) translate(230px) rotate(-135deg)" }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-border flex items-center justify-center shadow-md text-accent shrink-0">
                  <svg className="w-6 h-6 md:w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-1/2 right-[54px] -translate-y-1/2 text-right font-sans hidden md:block">
                <span className="block text-[11px] md:text-xs font-bold text-navy whitespace-nowrap leading-tight">Virtual CFO</span>
                <span className="block text-[10px] md:text-[11px] text-muted font-bold leading-tight mt-0.5">Services</span>
              </div>
            </div>

            {/* Orbiting Badge 6: Financial Reporting (Lower Left) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" style={{ transform: "rotate(180deg) translate(230px) rotate(-180deg)" }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-border flex items-center justify-center shadow-md text-accent shrink-0">
                  <svg className="w-6 h-6 md:w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 2v-6m-9-3h18a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-1/2 right-[54px] -translate-y-1/2 text-right font-sans hidden md:block">
                <span className="block text-[11px] md:text-xs font-bold text-navy whitespace-nowrap leading-tight">Financial</span>
                <span className="block text-[10px] md:text-[11px] text-muted font-bold leading-tight mt-0.5">Reporting</span>
              </div>
            </div>

            {/* Orbiting Badge 7: Advisory & Consulting (Middle Left) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" style={{ transform: "rotate(225deg) translate(230px) rotate(-225deg)" }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-border flex items-center justify-center shadow-md text-accent shrink-0">
                  <svg className="w-6 h-6 md:w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-1/2 right-[54px] -translate-y-1/2 text-right font-sans hidden md:block">
                <span className="block text-[11px] md:text-xs font-bold text-navy whitespace-nowrap leading-tight">Advisory &</span>
                <span className="block text-[10px] md:text-[11px] text-muted font-bold leading-tight mt-0.5">Consulting</span>
              </div>
            </div>

            {/* Orbiting Badge 8: Global Support (Top Left) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" style={{ transform: "rotate(270deg) translate(230px) rotate(-270deg)" }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-border flex items-center justify-center shadow-md text-accent shrink-0">
                  <svg className="w-6 h-6 md:w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-[-64px] left-1/2 -translate-x-1/2 text-center font-sans hidden md:block">
                <span className="block text-[11px] md:text-xs font-bold text-navy whitespace-nowrap leading-tight">Global</span>
                <span className="block text-[10px] md:text-[11px] text-muted font-bold leading-tight mt-0.5">Support</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Credentials Row (Integrated at the bottom of the Hero section) ── */}
      <div className="w-full bg-white border-t border-border py-10 mt-6 lg:mt-8 shadow-sm relative z-20">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center divide-y lg:divide-y-0 lg:divide-x divide-border">
            
            {/* Item 1: Registered In India */}
            <div className="flex items-center gap-4 pt-5 first:pt-0 md:pt-0 lg:pl-0">
              <span className="p-3 rounded-lg bg-accent/5 text-accent shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              <div className="text-left font-sans leading-tight">
                <span className="block text-sm font-bold text-navy">Registered</span>
                <span className="block text-sm text-navy/70 font-medium">In India</span>
              </div>
            </div>

            {/* Item 2: Serving Clients Worldwide */}
            <div className="flex items-center gap-4 pt-5 md:pt-0 lg:pl-4">
              <span className="p-3 rounded-lg bg-accent/5 text-accent shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2.945M11 3.935V5.5A2.5 2.5 0 018.5 8h-.5a2 2 0 00-2 2 2 2 0 01-2 2H3.055M11 20.065V18.5a2.5 2.5 0 00-2.5-2.5h-.5a2 2 0 01-2-2 2 2 0 00-2-2H3.055m17.89 0H19a2 2 0 01-2-2v-1a2 2 0 00-2-2 2 2 0 01-2-2V3.935M20.945 11H19a2 2 0 00-2 2v1a2 2 0 01-2 2 2 2 0 00-2 2v2.945" />
                </svg>
              </span>
              <div className="text-left font-sans leading-tight">
                <span className="block text-sm font-bold text-navy">Serving Clients</span>
                <span className="block text-sm text-navy/70 font-medium">Worldwide</span>
              </div>
            </div>

            {/* Item 3: CA & CPA Experts */}
            <div className="flex items-center gap-4 pt-5 md:pt-0 lg:pl-4">
              <span className="p-3 rounded-lg bg-accent/5 text-accent shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <div className="text-left font-sans leading-tight">
                <span className="block text-sm font-bold text-navy">CA & CPA</span>
                <span className="block text-sm text-navy/70 font-medium">Experts</span>
              </div>
            </div>

            {/* Item 4: Secure & Confidential */}
            <div className="flex items-center gap-4 pt-5 md:pt-0 lg:pl-4">
              <span className="p-3 rounded-lg bg-accent/5 text-accent shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <div className="text-left font-sans leading-tight">
                <span className="block text-sm font-bold text-navy">Secure &</span>
                <span className="block text-sm text-navy/70 font-medium">Confidential</span>
              </div>
            </div>

            {/* Item 5: GST & Income Tax Experts */}
            <div className="flex items-center gap-4 pt-5 md:pt-0 lg:pl-4">
              <span className="p-3 rounded-lg bg-accent/5 text-accent shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m5.99 5h.01M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </span>
              <div className="text-left font-sans leading-tight">
                <span className="block text-sm font-bold text-navy">GST & Income</span>
                <span className="block text-sm text-navy/70 font-medium">Tax Experts</span>
              </div>
            </div>

            {/* Item 6: Company Incorporation Specialists */}
            <div className="flex items-center gap-4 pt-5 md:pt-0 lg:pl-4">
              <span className="p-3 rounded-lg bg-accent/5 text-accent shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
                </svg>
              </span>
              <div className="text-left font-sans leading-tight">
                <span className="block text-sm font-bold text-navy">Company Inc.</span>
                <span className="block text-sm text-navy/70 font-medium">Specialists</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
