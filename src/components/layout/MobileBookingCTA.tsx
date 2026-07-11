"use client";

import React, { useState, useEffect } from "react";
import { BOOKING, CONTACT } from "@/lib/firm-content";

export default function MobileBookingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA only after scrolling down 500px
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border p-3 shadow-2xl flex gap-3 md:hidden transition-all duration-300 transform ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={`tel:${CONTACT.phoneRaw}`}
        className="flex items-center justify-center w-12 h-12 bg-cream-dark text-navy rounded-lg border border-border active:scale-95 transition-all"
        aria-label="Call office"
      >
        <svg className="w-5 h-5 text-navy/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </a>
      <a
        href={BOOKING.calComUrl}
        className="flex-1 bg-navy text-white font-bold py-3 rounded-lg text-center shadow active:scale-95 transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-sans hover:bg-navy-dark"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span>Book Consultation</span>
      </a>
    </div>
  );
}
