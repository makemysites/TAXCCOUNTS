import React from "react";
import Link from "next/link";
import { SERVICES } from "@/lib/firm-content";
import { FileText, Globe, BookOpen, TrendingUp, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";

// Map string icon names to Lucide icon components
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText: FileText,
  Globe: Globe,
  BookOpen: BookOpen,
  TrendingUp: TrendingUp,
};

export default function ServicesPreview() {
  const topServices = SERVICES.slice(0, 4);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Services Built Around Your Borders"
            subtitle="Four core practice areas, coordinated as one system — so nothing falls between your countries."
            className="mb-16"
          />
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {topServices.map((service, idx) => {
            const IconComponent = ICON_MAP[service.icon] || FileText;
            return (
              <Reveal key={service.slug} delay={idx * 90}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-cream p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_20px_44px_-18px_rgba(6,47,82,0.22)]"
                >
                  <div>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-navy text-gold-light inline-flex items-center justify-center transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                      <IconComponent className="w-6 h-6 stroke-[1.5]" />
                    </div>

                    <h3 className="mt-6 font-serif text-xl font-semibold text-navy leading-snug group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-4">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-border/70 flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-accent">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="text-center">
          <Link href="/services" className="btn btn-outline">
            Explore All Services
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
