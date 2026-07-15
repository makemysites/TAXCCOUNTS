import React from "react";

const PLATFORMS = [
  {
    logo: (
      <div className="flex items-center gap-4">
        <div className="w-9 h-9 bg-[#004c8f] flex items-center justify-center shrink-0 rounded-[6px] shadow-sm">
          <div className="w-6.5 h-6.5 border-[2.5px] border-[#ed1c24] bg-white flex items-center justify-center">
            <div className="w-2 h-2 bg-[#004c8f]" />
          </div>
        </div>
        <span className="font-sans font-extrabold tracking-wider uppercase text-xs sm:text-sm text-white/90">HDFC Bank</span>
      </div>
    ),
  },
  {
    logo: (
      <div className="flex items-center gap-4">
        <div className="w-9 h-9 bg-[#e01e26] rounded-full flex items-center justify-center shrink-0 shadow-sm">
          <span className="text-white font-bold text-base font-sans">k</span>
        </div>
        <span className="font-sans font-bold lowercase text-base sm:text-lg tracking-tight text-white/90">kotak</span>
      </div>
    ),
  },
  {
    logo: (
      <div className="flex items-center gap-4">
        <div className="w-9 h-9 bg-[#00b0e9] rounded-full flex items-center justify-center shrink-0 relative shadow-sm">
          <div className="w-3 h-3 bg-[#071526] rounded-full" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.75 h-4.5 bg-[#071526]" />
        </div>
        <span className="font-serif font-bold text-base sm:text-lg tracking-[0.1em] text-white/90">SBI</span>
      </div>
    ),
  },
  {
    logo: (
      <div className="flex items-center gap-4">
        <svg className="w-7 h-7 text-white shrink-0" fill="none" stroke="currentColor" strokeWidth="2.25" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
        <span className="font-sans font-bold text-base sm:text-lg text-white/90">Tally</span>
      </div>
    ),
  },
  {
    logo: (
      <div className="flex items-center gap-1.5 shrink-0 select-none">
        <div className="w-7.5 h-7.5 bg-[#e01e26] rounded flex items-center justify-center font-extrabold text-white text-sm font-sans">Z</div>
        <div className="w-7.5 h-7.5 bg-[#ffcc00] rounded flex items-center justify-center font-extrabold text-white text-sm font-sans">O</div>
        <div className="w-7.5 h-7.5 bg-[#00a859] rounded flex items-center justify-center font-extrabold text-white text-sm font-sans">H</div>
        <div className="w-7.5 h-7.5 bg-[#00b0e9] rounded flex items-center justify-center font-extrabold text-white text-sm font-sans">O</div>
      </div>
    ),
  },
  {
    logo: (
      <div className="flex items-center gap-4">
        <div className="w-9 h-9 bg-[#00b7e5] rounded-full flex items-center justify-center shrink-0 shadow-sm">
          <span className="text-white font-extrabold text-base font-sans">x</span>
        </div>
        <span className="font-sans font-extrabold text-base sm:text-lg text-white/90 tracking-wider lowercase">xero</span>
      </div>
    ),
  },
  {
    logo: (
      <div className="flex items-center gap-4">
        <div className="w-9 h-9 bg-[#2ca01c] rounded-full flex items-center justify-center shrink-0 shadow-sm">
          <span className="text-white font-bold text-base font-sans">qb</span>
        </div>
        <span className="font-sans font-bold text-sm sm:text-base text-white/90 lowercase tracking-tight">QuickBooks</span>
      </div>
    ),
  },
  {
    logo: (
      <div className="flex items-center gap-4">
        <div className="w-9 h-9 bg-[#185adb] rounded-lg flex items-center justify-center shrink-0 shadow-sm">
          <svg className="w-5.5 h-5.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <span className="font-sans font-bold text-base sm:text-lg text-white/90">TaxDome</span>
      </div>
    ),
  },
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
