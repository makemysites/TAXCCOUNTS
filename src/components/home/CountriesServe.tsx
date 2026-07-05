import React from "react";
import Link from "next/link";

const SERVED_COUNTRIES = [
  { 
    name: "India", 
    flag: (
      <svg className="w-8 h-5 border border-border/80 rounded shadow-xs shrink-0" viewBox="0 0 3 2">
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
      <svg className="w-8 h-5 border border-border/80 rounded shadow-xs shrink-0" viewBox="0 0 74 39">
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
      <svg className="w-8 h-5 border border-border/80 rounded shadow-xs shrink-0" viewBox="0 0 2 1">
        <rect width="2" height="1" fill="#FF0000" />
        <rect x="0.5" width="1" height="1" fill="#FFFFFF" />
        <path d="M 1 0.25 L 1.04 0.38 L 1.16 0.38 L 1.07 0.46 L 1.11 0.59 L 1 0.51 L 0.89 0.59 L 0.93 0.46 L 0.84 0.38 L 0.96 0.38 Z" fill="#FF0000" />
      </svg>
    ) 
  },
  { 
    name: "UK", 
    flag: (
      <svg className="w-8 h-5 border border-border/80 rounded shadow-xs shrink-0" viewBox="0 0 60 30">
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
      <svg className="w-8 h-5 border border-border/80 rounded shadow-xs shrink-0" viewBox="0 0 60 30">
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
      <svg className="w-8 h-5 border border-border/80 rounded shadow-xs shrink-0" viewBox="0 0 60 30">
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
      <svg className="w-8 h-5 border border-border/80 rounded shadow-xs shrink-0" viewBox="0 0 4 3">
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
      <svg className="w-8 h-5 border border-border/80 rounded shadow-xs shrink-0" viewBox="0 0 3 2">
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
    <section className="py-20 lg:py-24 bg-cream-dark/20 border-b border-border animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-10 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy leading-tight">
            Countries We Serve
          </h2>
          <div className="w-12 h-1 bg-gold rounded-full" />
        </div>

        {/* Columns lockup with 75% map and 25% countries list */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Left Column: World Map Image (75% width, 440px locked height on desktop) */}
          <div className="w-full lg:w-[75%] flex flex-col justify-between">
            <div className="relative bg-white rounded-2xl border border-border/80 shadow-md p-4 overflow-hidden w-full h-[380px] lg:h-[440px] flex items-center justify-center">
              <img
                src="/images/world_map_served.png"
                alt="World map showing highlighted countries we serve"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Right Column: Country Grid List (25% width, responsive layout) */}
          <div className="w-full lg:w-[25%] flex flex-col justify-between">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-col lg:justify-between lg:h-full w-full h-auto gap-4 lg:gap-0">
              {SERVED_COUNTRIES.map((c, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 transition-all duration-300 group h-fit cursor-default py-2"
                >
                  <span className="shrink-0 select-none group-hover:scale-110 transition-transform duration-300">
                    {c.flag}
                  </span>
                  <span className="text-navy font-semibold text-xs tracking-wider uppercase group-hover:text-gold transition-colors duration-300">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* Global CTA button below the grid block */}
        <div className="mt-10 text-center lg:text-left">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-navy/35 bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-navy shadow-sm hover:bg-cream-dark hover:border-navy transition-all"
          >
            <span>Explore Global Services</span>
            <span className="text-sm font-semibold">&rarr;</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
