import React from "react";
import { BOOKING } from "@/lib/firm-content";

export default function BottomCTA() {
  return (
    <section className="pb-16 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Banner Card Container */}
        <div className="relative bg-white rounded-3xl border border-border/80 shadow-[0_8px_30px_rgb(6,47,82,0.02)] overflow-hidden w-full min-h-[300px] flex items-center">
          
          {/* Decorative Grid Background */}
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#062f52_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Left Column: Content */}
          <div className="relative z-20 w-full md:w-[55%] pl-6 pr-6 py-12 sm:pl-12 sm:pr-0 text-center md:text-left space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-navy">
              Let Us Handle Your Finances,<br />You Focus on Growth.
            </h2>
            
            {/* Gold Accent Divider */}
            <div className="w-16 h-1 bg-gold rounded-full mx-auto md:mx-0" />
            
            <p className="text-xs sm:text-sm text-navy/70 font-sans tracking-wide">
              Trusted by businesses worldwide.
            </p>
            
            <div className="pt-2">
              <a
                href={BOOKING.calComUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-gold/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>Book Free Consultation</span>
                <span className="text-sm font-semibold">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-fidelity dashboard widgets (Desktop only) */}
          <div className="absolute right-0 top-0 bottom-0 w-[45%] hidden md:flex items-center justify-center overflow-hidden pr-8 lg:pr-12 pointer-events-none select-none">
            {/* Smooth Left Fade Overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />

            {/* Dashboard Mockup Grid wrapper */}
            <div className="w-full max-w-[380px] h-[220px] relative opacity-[0.9] hover:opacity-100 transition-opacity duration-500">
              
              {/* Widget 1: Revenue Bar Chart Card */}
              <div className="absolute top-0 left-4 w-[180px] bg-cream-dark/40 border border-border/80 backdrop-blur-md rounded-2xl p-4 shadow-xs space-y-2.5">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-bold text-navy/60 uppercase tracking-wider">Growth</span>
                  <span className="text-[10px] font-bold text-accent">+24.5%</span>
                </div>
                <div className="flex items-end gap-1.5 h-12 pt-1">
                  <div className="w-full bg-navy-light/10 h-[30%] rounded-xs" />
                  <div className="w-full bg-navy-light/10 h-[45%] rounded-xs" />
                  <div className="w-full bg-navy-light/20 h-[60%] rounded-xs" />
                  <div className="w-full bg-gold/40 h-[75%] rounded-xs animate-[pulse_2s_infinite]" />
                  <div className="w-full bg-gold h-full rounded-xs" />
                </div>
              </div>

              {/* Widget 2: Tax Saved Stats Card (Overlaps and rises) */}
              <div className="absolute bottom-2 right-2 w-[190px] bg-white border border-border/80 backdrop-blur-md rounded-2xl p-3.5 shadow-md space-y-2 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-light/25 flex items-center justify-center text-gold">
                    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[8px] font-bold text-navy/40 uppercase tracking-wider">Tax Saved</div>
                    <div className="text-xs font-bold text-navy">Global Optimizations</div>
                  </div>
                </div>
              </div>

              {/* Widget 3: Miniature Calculator (Centered right) */}
              <div className="absolute top-8 right-6 w-[120px] bg-navy-dark text-white rounded-xl p-2.5 shadow-lg space-y-2 z-10 border border-white/5">
                <div className="bg-white/5 rounded-md p-1 px-1.5 text-right text-[9px] font-mono text-white/80">
                  84,950.00
                </div>
                <div className="grid grid-cols-4 gap-1 text-[7px] font-bold text-center">
                  <div className="bg-white/10 rounded-xs p-0.5">C</div>
                  <div className="bg-white/10 rounded-xs p-0.5">+/-</div>
                  <div className="bg-white/10 rounded-xs p-0.5">%</div>
                  <div className="bg-gold rounded-xs p-0.5">/</div>
                  <div className="bg-white/5 rounded-xs p-0.5">7</div>
                  <div className="bg-white/5 rounded-xs p-0.5">8</div>
                  <div className="bg-white/5 rounded-xs p-0.5">9</div>
                  <div className="bg-gold rounded-xs p-0.5">*</div>
                  <div className="bg-white/5 rounded-xs p-0.5">4</div>
                  <div className="bg-white/5 rounded-xs p-0.5">5</div>
                  <div className="bg-white/5 rounded-xs p-0.5">6</div>
                  <div className="bg-gold rounded-xs p-0.5">-</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
