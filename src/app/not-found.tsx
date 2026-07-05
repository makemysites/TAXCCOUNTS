import React from "react";
import Link from "next/link";
import { FIRM } from "@/lib/firm-content";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] bg-cream flex flex-col justify-center items-center px-4 py-16 text-center font-sans animate-fade-in">
      <div className="max-w-md space-y-6">
        {/* Large 404 styled block */}
        <div className="text-7xl sm:text-8xl font-serif font-bold text-accent select-none tracking-tight">
          404
        </div>
        
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-navy">
          Page Not Found
        </h1>
        
        <p className="text-sm sm:text-base text-muted leading-relaxed">
          The page you are looking for doesn't exist, has been moved, or has an outdated URL structure.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-navy hover:bg-navy-light text-white font-bold text-sm rounded shadow transition-all"
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-navy text-navy font-bold text-sm rounded hover:bg-navy/5 transition-all"
          >
            Contact Advisor
          </Link>
        </div>

        <div className="pt-8 text-xs text-muted/60">
          &copy; {new Date().getFullYear()} {FIRM.legalName}
        </div>
      </div>
    </div>
  );
}
