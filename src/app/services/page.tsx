import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FIRM, SERVICES, BOOKING } from "@/lib/firm-content";
import { FileText, Globe, BookOpen, TrendingUp, Building2, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ComponentType<any>> = {
  FileText: FileText,
  Globe: Globe,
  BookOpen: BookOpen,
  TrendingUp: TrendingUp,
  Building2: Building2,
};

export const metadata: Metadata = {
  title: "Services & How We Work",
  description: "Learn how our integrated, structured accounting system manages bookkeeping, payroll, and global tax compliance together.",
};

export default function ServicesPage() {
  return (
    <div className="bg-cream min-h-screen py-12 md:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-serif italic text-accent text-base block">
            How We Work
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-navy leading-tight">
            A Structured Accounting System for Global Taxpayers
          </h1>
          <p className="text-sm md:text-base text-navy/80 leading-relaxed max-w-2xl mx-auto">
            Bookkeeping, payroll, tax strategy, and financial guidance are managed together so your cross-border operations run as one coordinated structure rather than fragmented vendors.
          </p>
        </div>

        {/* Detailed Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SERVICES.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Globe;
            return (
              <div
                key={service.slug}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-border shadow-sm flex flex-col justify-between hover:shadow-md hover:border-accent/30 hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="space-y-6">
                  {/* Top Header Row */}
                  <div className="flex justify-between items-center">
                    <span className="w-12 h-12 bg-accent/5 text-accent rounded-xl border border-accent/15 flex items-center justify-center shadow-xs shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </span>
                    <span className="font-serif text-3xl font-bold text-accent/15 select-none">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Price */}
                  <div className="space-y-2">
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-navy group-hover:text-accent transition-colors duration-300 leading-tight">
                      {service.title}
                    </h2>
                    {service.startingPrice ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold bg-cream-dark text-accent border border-border">
                        Starts at {service.startingPrice}
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold bg-cream-dark text-muted border border-border">
                        Custom Quote
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-navy/80 leading-relaxed font-sans line-clamp-4">
                    {service.description}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="pt-6 mt-6 border-t border-border/60">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent group-hover:text-accent-hover transition-colors"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing link CTA block */}
        <div className="mt-20 bg-white p-8 md:p-12 rounded-2xl border border-border shadow-sm text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl font-serif font-bold text-navy">
            Transparent Pricing Models
          </h2>
          <p className="text-xs sm:text-sm text-navy/85 max-w-xl mx-auto leading-relaxed">
            We believe you should know exactly what you'll pay and what you'll get before we begin. Explore our package-based pricing structures for small businesses and NRIs.
          </p>
          <div className="pt-2 flex justify-center">
            <Link
              href="/pricing"
              className="px-8 py-3.5 bg-accent hover:bg-accent-hover text-white font-bold text-xs uppercase tracking-wider rounded-full shadow transition-all"
            >
              View Pricing Packages
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
