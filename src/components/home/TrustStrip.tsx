import React from "react";

export default function TrustStrip() {
  return (
    <section aria-label="Global Reach Countries" className="w-full relative z-20 -mt-10 lg:-mt-12">
      
      {/* ── Lower Row: Countries (Full-width light cream block with larger flags) ── */}
      <div className="w-full bg-cream py-7 md:py-8 border-t border-b border-navy/15 shadow-[inset_0_1px_0_rgba(6,47,82,0.08)] mt-0 md:mt-0">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-center gap-6 md:gap-10 flex-nowrap overflow-x-auto pb-0 scrollbar-thin">
            
            {/* India Flag */}
            <div className="flex items-center gap-3">
              <svg className="w-12 h-7 border border-border/80 rounded shadow-sm shrink-0" viewBox="0 0 3 2">
                <rect width="3" height="2" fill="#FF9933"/>
                <rect y="0.67" width="3" height="1.33" fill="#FFFFFF"/>
                <rect y="1.33" width="3" height="0.67" fill="#128807"/>
                <circle cx="1.5" cy="1" r="0.2" fill="#000080"/>
              </svg>
              <span className="text-base md:text-xl font-bold text-navy">India</span>
            </div>

            {/* USA Flag */}
            <div className="flex items-center gap-3">
              <svg className="w-10 h-6 border border-border/80 rounded shadow-sm shrink-0" viewBox="0 0 74 39">
                <rect width="74" height="39" fill="#FFFFFF"/>
                <rect y="0" width="74" height="3" fill="#B22234"/>
                <rect y="6" width="74" height="3" fill="#B22234"/>
                <rect y="12" width="74" height="3" fill="#B22234"/>
                <rect y="18" width="74" height="3" fill="#B22234"/>
                <rect y="24" width="74" height="3" fill="#B22234"/>
                <rect y="30" width="74" height="3" fill="#B22234"/>
                <rect y="36" width="74" height="3" fill="#B22234"/>
                <rect width="30" height="21" fill="#3C3B6E"/>
              </svg>
              <span className="text-base md:text-lg font-bold text-navy">USA</span>
            </div>

            {/* Canada Flag */}
            <div className="flex items-center gap-3">
              <svg className="w-12 h-7 border border-border/80 rounded shadow-sm shrink-0" viewBox="0 0 2 1">
                <rect width="2" height="1" fill="#FF0000"/>
                <rect x="0.5" width="1" height="1" fill="#FFFFFF"/>
                <path d="M 1 0.3 L 1.05 0.45 L 1.2 0.45 L 1.1 0.55 L 1.15 0.7 L 1 0.6 L 0.85 0.7 L 0.9 0.55 L 0.8 0.45 L 0.95 0.45 Z" fill="#FF0000"/>
              </svg>
              <span className="text-base md:text-xl font-bold text-navy">Canada</span>
            </div>

            {/* Australia Flag */}
            <div className="flex items-center gap-3">
              <svg className="w-12 h-7 border border-border/80 rounded shadow-sm shrink-0" viewBox="0 0 2 1">
                <rect width="2" height="1" fill="#00008B"/>
                <path d="M 0 0 L 1 0.5 M 0 0.5 L 1 0" stroke="#FFFFFF" strokeWidth="0.1"/>
                <path d="M 0.5 0 L 0.5 0.5 M 0 0.25 L 1 0.25" stroke="#FFFFFF" strokeWidth="0.15"/>
                <path d="M 0.5 0 L 0.5 0.5 M 0 0.25 L 1 0.25" stroke="#FF0000" strokeWidth="0.08"/>
              </svg>
              <span className="text-base md:text-xl font-bold text-navy">Australia</span>
            </div>

            {/* New Zealand Flag */}
            <div className="flex items-center gap-3">
              <svg className="w-12 h-7 border border-border/80 rounded shadow-sm shrink-0" viewBox="0 0 2 1">
                <rect width="2" height="1" fill="#00008B"/>
                <path d="M 0 0 L 1 0.5 M 0 0.5 L 1 0" stroke="#FFFFFF" strokeWidth="0.1"/>
                <path d="M 0.5 0 L 0.5 0.5 M 0 0.25 L 1 0.25" stroke="#FFFFFF" strokeWidth="0.15"/>
                <path d="M 0.5 0 L 0.5 0.5 M 0 0.25 L 1 0.25" stroke="#FF0000" strokeWidth="0.08"/>
              </svg>
              <span className="text-base md:text-xl font-bold text-navy">New Zealand</span>
            </div>

            {/* UAE Flag */}
            <div className="flex items-center gap-3">
              <svg className="w-10 h-6 border border-border/80 rounded shadow-sm shrink-0" viewBox="0 0 4 3">
                <rect width="4" height="3" fill="#FFFFFF"/>
                <rect width="1" height="3" fill="#FF0000"/>
                <rect x="1" width="3" height="1" fill="#00732F"/>
                <rect x="1" y="2" width="3" height="1" fill="#000000"/>
              </svg>
              <span className="text-base md:text-lg font-bold text-navy">UAE (Dubai)</span>
            </div>

            {/* Singapore Flag */}
            <div className="flex items-center gap-3">
              <svg className="w-12 h-7 border border-border/80 rounded shadow-sm shrink-0" viewBox="0 0 3 2">
                <rect width="3" height="2" fill="#FFFFFF"/>
                <rect width="3" height="1" fill="#FF0000"/>
                <circle cx="0.6" cy="0.5" r="0.2" fill="#FFFFFF"/>
              </svg>
              <span className="text-base md:text-xl font-bold text-navy">Singapore</span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
