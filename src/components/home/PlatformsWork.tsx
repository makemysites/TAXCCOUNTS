import React from "react";

// SVG Logo components scaled to match the dark brand theme (larger heights)
const TallyLogo = () => (
  <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 text-white">
    <path d="M15 25 C15 20, 18 15, 25 15 C27 15, 29 16, 30 18 C32 15, 36 15, 39 17 C41 15, 45 15, 47 18 C49 22, 47 25, 42 27 C37 29, 23 29, 15 25 Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 25 C25 21, 35 21, 38 25" stroke="currentColor" strokeWidth="2"/>
    <text x="56" y="27" fill="currentColor" fontSize="18" fontWeight="700" fontFamily="var(--font-sans)">Tally</text>
  </svg>
);

const ZohoLogo = () => (
  <svg viewBox="0 0 110 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8">
    <rect x="2" y="8" width="22" height="24" rx="4" fill="#E2231A"/>
    <text x="8" y="25" fill="white" fontSize="15" fontWeight="900" fontFamily="var(--font-sans)">Z</text>
    <rect x="28" y="8" width="22" height="24" rx="4" fill="#F8B019"/>
    <text x="34" y="25" fill="white" fontSize="15" fontWeight="900" fontFamily="var(--font-sans)">O</text>
    <rect x="54" y="8" width="22" height="24" rx="4" fill="#00A850"/>
    <text x="60" y="25" fill="white" fontSize="15" fontWeight="900" fontFamily="var(--font-sans)">H</text>
    <rect x="80" y="8" width="22" height="24" rx="4" fill="#0080C5"/>
    <text x="86" y="25" fill="white" fontSize="15" fontWeight="900" fontFamily="var(--font-sans)">O</text>
  </svg>
);

const QuickBooksLogo = () => (
  <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9">
    <circle cx="20" cy="20" r="16" fill="#2CA01C"/>
    <circle cx="15" cy="22" r="5" stroke="white" strokeWidth="2.5"/>
    <path d="M19 13 V22" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="25" cy="18" r="5" stroke="white" strokeWidth="2.5"/>
    <path d="M21 18 V27" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <text x="44" y="26" fill="white" fontSize="17" fontWeight="700" fontFamily="var(--font-sans)">quickbooks</text>
  </svg>
);

const XeroLogo = () => (
  <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 text-[#00B7E5]">
    <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="2.5"/>
    <text x="15" y="26" fill="currentColor" fontSize="18" fontWeight="700" fontFamily="var(--font-sans)">x</text>
    <text x="42" y="27" fill="white" fontSize="20" fontWeight="700" fontFamily="var(--font-sans)">xero</text>
  </svg>
);

const HDFCLogo = () => (
  <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9">
    <rect x="5" y="5" width="30" height="30" fill="#004C8F" rx="4"/>
    <rect x="10" y="10" width="20" height="20" fill="white"/>
    <rect x="15" y="15" width="10" height="10" fill="#E20613"/>
    <text x="44" y="26" fill="white" fontSize="17" fontWeight="800" fontFamily="var(--font-sans)">HDFC BANK</text>
  </svg>
);

const KotakLogo = () => (
  <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9">
    <circle cx="20" cy="20" r="15" fill="#EE1C25"/>
    <path d="M14 11 V29 M14 20 L24 11 M18 21.5 L26 29" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <text x="44" y="26" fill="white" fontSize="18" fontWeight="800" fontFamily="var(--font-sans)">kotak</text>
  </svg>
);

const SBILogo = () => (
  <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9">
    <path fillRule="evenodd" clipRule="evenodd" d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5ZM20 15C17.2386 15 15 17.2386 15 20C15 22.4282 16.7303 24.4516 19 24.9155V35H21V24.9155C23.2697 24.4516 25 22.4282 25 20C25 17.2386 22.7614 15 20 15Z" fill="#00B0EC"/>
    <text x="44" y="27" fill="white" fontSize="20" fontWeight="700" fontFamily="var(--font-sans)">SBI</text>
  </svg>
);

const PLATFORMS = [
  { name: "Tally", logo: <TallyLogo /> },
  { name: "Zoho", logo: <ZohoLogo /> },
  { name: "QuickBooks", logo: <QuickBooksLogo /> },
  { name: "Xero", logo: <XeroLogo /> },
  { name: "HDFC Bank", logo: <HDFCLogo /> },
  { name: "Kotak Bank", logo: <KotakLogo /> },
  { name: "SBI", logo: <SBILogo /> }
];

export default function PlatformsWork() {
  return (
    <section className="py-20 lg:py-24 bg-navy text-white border-b border-white/5 relative overflow-hidden">
      {/* Decorative grid overlay for premium look */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col gap-12 lg:gap-16 items-center text-center">
          
          {/* Top Row: Title block centered */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="font-serif italic text-gold-light text-base block">
              Our Integrations
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight text-white tracking-tight">
              Platforms We Work With
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mx-auto" />
            <p className="text-xs md:text-sm text-cream/75 leading-relaxed font-sans max-w-md mx-auto">
              Guiding your business to smarter financial decisions.
            </p>
          </div>

          {/* Bottom Row: Infinite Horizontal Marquee (Full width below) */}
          <div className="w-full relative overflow-hidden py-4 select-none">
            {/* Fade gradients on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />

            {/* Scrolling Track Container */}
            <div className="animate-marquee flex w-max gap-6">
              
              {/* First Track copy */}
              <div className="flex gap-6 shrink-0">
                {PLATFORMS.map((platform, idx) => (
                  <div
                    key={`track1-${idx}`}
                    className="w-[240px] h-[120px] shrink-0 bg-white/[0.04] border border-white/[0.08] hover:border-gold/30 hover:bg-white/[0.08] rounded-2xl flex items-center justify-center p-5 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgb(197,165,90,0.08)] group cursor-default"
                  >
                    <div className="w-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      {platform.logo}
                    </div>
                  </div>
                ))}
              </div>

              {/* Second Track copy for seamless infinite loop */}
              <div className="flex gap-6 shrink-0">
                {PLATFORMS.map((platform, idx) => (
                  <div
                    key={`track2-${idx}`}
                    className="w-[240px] h-[120px] shrink-0 bg-white/[0.04] border border-white/[0.08] hover:border-gold/30 hover:bg-white/[0.08] rounded-2xl flex items-center justify-center p-5 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgb(197,165,90,0.08)] group cursor-default"
                  >
                    <div className="w-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      {platform.logo}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
