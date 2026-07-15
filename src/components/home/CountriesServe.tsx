import React from "react";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

const SERVED_COUNTRIES = [
  {
    name: "India",
    flag: (
      <svg className="w-8 h-5 rounded shadow-xs shrink-0" viewBox="0 0 3 2">
        <rect width="3" height="2" fill="#FF9933" />
        <rect y="0.67" width="3" height="1.33" fill="#FFFFFF" />
        <rect y="1.33" width="3" height="0.67" fill="#128807" />
        <circle cx="1.5" cy="1" r="0.2" fill="#000080" />
      </svg>
    )
  },
  {
    name: "USA",
    flag: (
      <svg className="w-8 h-5 rounded shadow-xs shrink-0" viewBox="0 0 74 39">
        <rect width="74" height="39" fill="#FFFFFF" />
        <rect y="0" width="74" height="3" fill="#B22234" />
        <rect y="6" width="74" height="3" fill="#B22234" />
        <rect y="12" width="74" height="3" fill="#B22234" />
        <rect y="18" width="74" height="3" fill="#B22234" />
        <rect y="24" width="74" height="3" fill="#B22234" />
        <rect y="30" width="74" height="3" fill="#B22234" />
        <rect y="36" width="74" height="3" fill="#B22234" />
        <rect width="30" height="21" fill="#3C3B6E" />
      </svg>
    )
  },
  {
    name: "Canada",
    flag: (
      <svg className="w-8 h-5 rounded shadow-xs shrink-0" viewBox="0 0 2 1">
        <rect width="2" height="1" fill="#FF0000" />
        <rect x="0.5" width="1" height="1" fill="#FFFFFF" />
        <path d="M 1 0.25 L 1.04 0.38 L 1.16 0.38 L 1.07 0.46 L 1.11 0.59 L 1 0.51 L 0.89 0.59 L 0.93 0.46 L 0.84 0.38 L 0.96 0.38 Z" fill="#FF0000" />
      </svg>
    )
  },
  {
    name: "UK",
    flag: (
      <svg className="w-8 h-5 rounded shadow-xs shrink-0" viewBox="0 0 60 30">
        <clipPath id="t">
          <rect width="60" height="30" />
        </clipPath>
        <g clipPath="url(#t)">
          <rect width="60" height="30" fill="#012169" />
          <path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" strokeWidth="6" />
          <path d="M0 0 L60 30 M60 0 L0 30" stroke="#C8102E" strokeWidth="4" />
          <path d="M30 0 V30 M0 15 H60" stroke="#fff" strokeWidth="10" />
          <path d="M30 0 V30 M0 15 H60" stroke="#C8102E" strokeWidth="6" />
        </g>
      </svg>
    )
  },
  {
    name: "Australia",
    flag: (
      <svg className="w-8 h-5 rounded shadow-xs shrink-0" viewBox="0 0 60 30">
        <rect width="60" height="30" fill="#012169" />
        <g transform="scale(0.5)">
          <rect width="60" height="30" fill="#012169" />
          <path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" strokeWidth="6" />
          <path d="M0 0 L60 30 M60 0 L0 30" stroke="#C8102E" strokeWidth="4" />
          <path d="M30 0 V30 M0 15 H60" stroke="#fff" strokeWidth="10" />
          <path d="M30 0 V30 M0 15 H60" stroke="#C8102E" strokeWidth="6" />
        </g>
        <circle cx="45" cy="8" r="1.5" fill="#fff" />
        <circle cx="52" cy="12" r="1.5" fill="#fff" />
        <circle cx="48" cy="18" r="1.5" fill="#fff" />
        <circle cx="42" cy="22" r="1.5" fill="#fff" />
        <circle cx="15" cy="22" r="2.5" fill="#fff" />
      </svg>
    )
  },
  {
    name: "New Zealand",
    flag: (
      <svg className="w-8 h-5 rounded shadow-xs shrink-0" viewBox="0 0 60 30">
        <rect width="60" height="30" fill="#012169" />
        <g transform="scale(0.5)">
          <rect width="60" height="30" fill="#012169" />
          <path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" strokeWidth="6" />
          <path d="M0 0 L60 30 M60 0 L0 30" stroke="#C8102E" strokeWidth="4" />
          <path d="M30 0 V30 M0 15 H60" stroke="#fff" strokeWidth="10" />
          <path d="M30 0 V30 M0 15 H60" stroke="#C8102E" strokeWidth="6" />
        </g>
        <circle cx="45" cy="8" r="2" fill="#fff" />
        <circle cx="45" cy="8" r="1.2" fill="#C8102E" />
        <circle cx="52" cy="12" r="2" fill="#fff" />
        <circle cx="52" cy="12" r="1.2" fill="#C8102E" />
        <circle cx="48" cy="18" r="2" fill="#fff" />
        <circle cx="48" cy="18" r="1.2" fill="#C8102E" />
        <circle cx="42" cy="22" r="2" fill="#fff" />
        <circle cx="42" cy="22" r="1.2" fill="#C8102E" />
      </svg>
    )
  },
  {
    name: "UAE (Dubai)",
    flag: (
      <svg className="w-8 h-5 rounded shadow-xs shrink-0" viewBox="0 0 4 3">
        <rect width="4" height="3" fill="#FFFFFF" />
        <rect width="1" height="3" fill="#FF0000" />
        <rect x="1" width="3" height="1" fill="#00732F" />
        <rect x="1" y="2" width="3" height="1" fill="#000000" />
      </svg>
    )
  },
  {
    name: "Singapore",
    flag: (
      <svg className="w-8 h-5 rounded shadow-xs shrink-0" viewBox="0 0 3 2">
        <rect width="3" height="1" fill="#FF0000" />
        <rect y="1" width="3" height="1" fill="#FFFFFF" />
        <circle cx="0.5" cy="0.5" r="0.25" fill="#FFFFFF" />
        <circle cx="0.6" cy="0.5" r="0.25" fill="#FF0000" />
      </svg>
    )
  }
];

export default function CountriesServe() {
  return (
    <section className="py-24 lg:py-32 bg-navy text-white relative overflow-hidden">
      {/* Atmosphere — echoes the hero */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(11,91,160,0.3),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(197,165,90,0.1),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">

        {/* Section Header */}
        <Reveal className="mb-14">
          <span className="eyebrow eyebrow-light">Global Reach</span>
          <h2 className="mt-5 font-serif text-[2rem] sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-white leading-tight">
            Countries We Serve
          </h2>
          <p className="mt-5 text-base text-white/60 leading-relaxed max-w-xl">
            Wherever your income, entities, or investments sit, we already know
            the filing rules on both sides.
          </p>
        </Reveal>

        {/* Map + country list lockup */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* Left: World Map card */}
          <Reveal className="w-full lg:w-[72%]">
            <div className="relative bg-cream rounded-2xl p-4 overflow-hidden w-full h-[380px] lg:h-[460px] flex items-center justify-center shadow-[0_32px_80px_-32px_rgba(0,0,0,0.5)] ring-1 ring-white/15">
              <img
                src="/images/world_map_served.png"
                alt="World map showing highlighted countries we serve"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </Reveal>

          {/* Right: Country list as glass rows */}
          <Reveal delay={120} className="w-full lg:w-[28%]">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:h-full lg:content-between">
              {SERVED_COUNTRIES.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center gap-3.5 rounded-xl bg-white/5 border border-white/10 px-4 py-3 transition-all duration-300 hover:border-gold/40 hover:bg-white/10 group cursor-default"
                >
                  <span className="shrink-0 select-none group-hover:scale-110 transition-transform duration-300">
                    {c.flag}
                  </span>
                  <span className="text-white/85 font-bold text-[13px] tracking-[0.08em] uppercase group-hover:text-gold-light transition-colors duration-300">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

        </div>

        {/* CTA */}
        <Reveal className="mt-12 text-center lg:text-left">
          <Link href="/services" className="btn btn-outline-light">
            <span>Explore Global Services</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </Reveal>

      </div>
    </section>
  );
}
