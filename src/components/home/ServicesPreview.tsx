import React from "react";
import Link from "next/link";
import { SERVICES } from "@/lib/firm-content";
import { FileText, Globe, BookOpen, TrendingUp } from "lucide-react";

// Map string icon names to Lucide icon components
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText: FileText,
  Globe: Globe,
  BookOpen: BookOpen,
  TrendingUp: TrendingUp,
};

export default function ServicesPreview() {
  // Get the top 4 services as requested
  const topServices = SERVICES.slice(0, 4);

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-serif italic text-accent text-base block">
            Our Offerings
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-navy">
            Services Provided
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-2 rounded-full" />
        </div>

        {/* Services Grid (4 cols on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {topServices.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || FileText;
            return (
              <div
                key={service.slug}
                className="bg-cream rounded-2xl border border-border p-6 hover:shadow-md transition-shadow flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 rounded-xl bg-accent/5 border border-accent/15 flex items-center justify-center text-accent group-hover:scale-105 group-hover:bg-accent group-hover:text-white transition-all">
                    <IconComponent className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  
                  {/* Title & Desc */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-base font-bold text-navy group-hover:text-accent transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-navy/75 leading-relaxed font-sans line-clamp-4">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Details link */}
                <div className="pt-4 mt-6 border-t border-border/50 flex justify-end">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent group-hover:text-accent-hover transition-colors"
                  >
                    <span>Learn More</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore All CTA Button */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full bg-accent px-10 py-4 text-xs uppercase tracking-wider font-bold text-white shadow hover:bg-accent-hover transition-colors"
          >
            Explore All Services
          </Link>
        </div>

      </div>
    </section>
  );
}
