import React from "react";
import { BOOKING, CONTACT } from "@/lib/firm-content";

export default function CTABanner() {
  return (
    <section className="bg-navy py-16 text-white overflow-hidden relative border-t border-border">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 h-40 w-40 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-40 w-40 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
        <span className="font-serif italic text-accent text-sm md:text-base block">
          Get Started
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-white">
          Ready to simplify your global tax & bookkeeping?
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-white/80 font-sans max-w-xl mx-auto leading-relaxed">
          Book a free 20-minute strategy call. We will review your cross-border setup, explain how the system would work for you, and outline a clear compliance plan. No sales pitch, no obligation.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
          <a
            href={BOOKING.calComUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3 bg-accent hover:bg-accent-hover text-white font-bold rounded-full shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all text-center text-xs uppercase tracking-wider"
          >
            Book a Video Call
          </a>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3 border border-white/30 hover:border-white hover:bg-white/10 text-white font-bold rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all text-center text-xs uppercase tracking-wider inline-flex justify-center items-center gap-2"
          >
            {/* WhatsApp logo */}
            <svg
              className="w-4 h-4 fill-current text-green-400"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.59 2.001 14.12 1.01 11.5 1.01c-5.436 0-9.861 4.372-9.865 9.802-.001 1.736.486 3.431 1.411 4.937l-.994 3.634 3.738-.979z" />
            </svg>
            <span>WhatsApp Chat</span>
          </a>
        </div>

        <div className="pt-4 text-[10px] text-white/50 font-sans">
          All consultations occur over Zoom or Google Meet. Meeting details will be sent automatically.
        </div>
      </div>
    </section>
  );
}
