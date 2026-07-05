import React from "react";
import {
  Users,
  ShieldCheck,
  Coins,
  Clock,
  UserCheck,
  Globe,
  FileSpreadsheet,
  HeartHandshake
} from "lucide-react";

const WHY_CHOOSE_US_ITEMS = [
  {
    title: "Experienced Professionals",
    desc: "A team of Chartered Accountants and cross-border experts with years of practical experience.",
    icon: Users,
  },
  {
    title: "Confidential Services",
    desc: "Strict compliance protocols and secure data vaults to ensure complete privacy and confidentiality.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Pricing",
    desc: "Clear upfront quotes with no hidden fees, helping you budget with absolute certainty.",
    icon: Coins,
  },
  {
    title: "Timely Delivery",
    desc: "Strict adherence to local and international tax filing deadlines, preventing penalties.",
    icon: Clock,
  },
  {
    title: "Dedicated Relationship Manager",
    desc: "One central point of contact for all your cross-border bookkeeping and tax files.",
    icon: UserCheck,
  },
  {
    title: "Global Expertise",
    desc: "Deep knowledge of both Indian income tax code and international tax regimes (US, Canada, UAE, etc.).",
    icon: Globe,
  },
  {
    title: "Digital Documentation",
    desc: "Secure online client portal (TaxDome) to upload documents and view filings anytime, anywhere.",
    icon: FileSpreadsheet,
  },
  {
    title: "Personalized Consultation",
    desc: "Customized planning sessions tailored to your individual tax status and wealth goals.",
    icon: HeartHandshake,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-24 bg-cream-dark/30 relative overflow-hidden border-b border-border">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none select-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="light-why-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#light-why-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-serif italic text-accent text-base block">
            Why TAXCCOUNTS
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-navy">
            Why Choose Us
          </h2>
          {/* Gold Underline Accent */}
          <div className="w-16 h-1 bg-gold mx-auto mt-2 rounded-full" />
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {WHY_CHOOSE_US_ITEMS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-border/40 shadow-[0_4px_20px_-4px_rgba(6,47,82,0.04)] hover:-translate-y-1 hover:shadow-[0_12px_30px_-6px_rgba(6,47,82,0.08)] hover:border-gold/25 transition-all duration-300 group"
              >
                {/* Gold Circle Icon wrapper */}
                <div className="w-12 h-12 rounded-full bg-gold-light/15 border border-gold-light/35 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white group-hover:scale-105 transition-all duration-300 mb-5 shadow-sm">
                  <IconComponent className="w-5 h-5 stroke-[1.5]" />
                </div>
                
                {/* Typography */}
                <h3 className="font-serif text-sm font-bold text-navy mb-2 leading-snug group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-navy/70 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
