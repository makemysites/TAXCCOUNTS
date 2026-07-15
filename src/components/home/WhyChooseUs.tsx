import React from "react";
import Link from "next/link";
import {
  Users,
  Coins,
  Clock,
  UserCheck,
  Globe,
  ShieldCheck
} from "lucide-react";
import Reveal from "@/components/shared/Reveal";

const WHY_CHOOSE_US_ITEMS = [
  {
    title: "Experienced Professionals",
    desc: "A team of tax professionals and cross-border experts with years of practical experience.",
    icon: Users,
  },
  {
    title: "Global Expertise",
    desc: "Deep knowledge of both Indian income tax code and international tax regimes (US, Canada, UAE, etc.).",
    icon: Globe,
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
    title: "Secure Digital Portal",
    desc: "Strict confidentiality protocols plus a secure client portal (TaxDome) to upload documents and view filings anytime.",
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">

          {/* Left: Sticky editorial intro */}
          <Reveal className="w-full lg:w-[38%] lg:sticky lg:top-32 text-center lg:text-left">
            <span className="eyebrow justify-center lg:justify-start">
              Why TAXCCOUNTS
            </span>
            <h2 className="mt-6 font-serif text-[2rem] sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] tracking-tight text-navy">
              A partner,{" "}
              <span className="italic text-gold-dark">not just a preparer.</span>
            </h2>
            <p className="mt-6 text-base text-muted leading-relaxed max-w-md mx-auto lg:mx-0">
              Everything about how we work is designed for people whose
              finances cross borders — one team, one system, and one person
              who answers when you call.
            </p>

            {/* Proof point */}
            <div className="mt-9 pt-8 border-t border-border flex items-center justify-center lg:justify-start gap-5">
              <span className="font-serif text-5xl font-semibold text-navy leading-none">
                12+
              </span>
              <span className="text-sm text-muted leading-snug text-left">
                years guiding NRIs and global
                <br className="hidden sm:block" /> businesses across 8 countries
              </span>
            </div>

            <div className="mt-9">
              <Link href="/about" className="btn btn-navy">
                Meet the Team
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </Reveal>

          {/* Right: 2×3 feature grid */}
          <div className="w-full lg:w-[62%] grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_CHOOSE_US_ITEMS.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <Reveal key={item.title} delay={(idx % 2) * 90}>
                  <div className="group h-full rounded-2xl bg-white border border-border p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_18px_40px_-18px_rgba(6,47,82,0.18)]">
                    <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center text-gold-dark transition-colors duration-300 group-hover:bg-gold group-hover:text-white">
                      <IconComponent className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <h3 className="mt-5 text-[15px] font-bold text-navy leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
