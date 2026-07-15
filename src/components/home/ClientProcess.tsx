import React from "react";
import {
  PhoneCall,
  FolderOpen,
  Sliders,
  CheckSquare,
  ShieldCheck
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Free Consultation",
    desc: "We analyze your tax status, residency days, and business or asset setup.",
    icon: PhoneCall,
  },
  {
    num: "02",
    title: "Document Collection",
    desc: "Upload bank statements, tax documents, and passport stamps in our secure portal.",
    icon: FolderOpen,
  },
  {
    num: "03",
    title: "Planning",
    desc: "We calculate tax optimization options and identify double-tax avoidance credits.",
    icon: Sliders,
  },
  {
    num: "04",
    title: "Execution",
    desc: "Our tax professionals prepare and file your tax returns accurately.",
    icon: CheckSquare,
  },
  {
    num: "05",
    title: "Compliance & Support",
    desc: "We handle responses to tax notices and provide ongoing support.",
    icon: ShieldCheck,
  },
];

export default function ClientProcess() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title="Our Client Process"
            subtitle="Five clear steps from first call to filed returns — you always know where things stand."
            className="mb-20"
          />
        </Reveal>

        {/* Desktop Connected Steps */}
        <div className="relative hidden lg:block max-w-6xl mx-auto">
          {/* Connector Line */}
          <div className="absolute top-10 left-16 right-16 h-px bg-gold/40 z-0" aria-hidden="true" />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <Reveal key={step.num} delay={idx * 100}>
                  <div className="flex flex-col items-center text-center group">
                    {/* Step Bubble */}
                    <div className="relative w-20 h-20 rounded-full bg-white border border-border flex items-center justify-center shadow-[0_8px_24px_-10px_rgba(6,47,82,0.18)] transition-all duration-300 group-hover:border-gold/60 group-hover:shadow-[0_12px_32px_-10px_rgba(197,165,90,0.4)]">
                      <span className="absolute -top-2 -right-1 bg-navy text-gold-light text-[11px] font-bold px-2 py-0.5 rounded-full">
                        {step.num}
                      </span>
                      <IconComponent className="w-7 h-7 text-navy stroke-[1.5] group-hover:text-gold-dark transition-colors" />
                    </div>

                    <h3 className="mt-6 font-serif text-lg font-semibold text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[13px] text-muted leading-relaxed max-w-[200px] mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Steps */}
        <div className="relative lg:hidden max-w-md mx-auto pl-8 space-y-10">
          <div className="absolute top-2 bottom-2 left-6 w-px bg-gold/40 z-0" aria-hidden="true" />

          {PROCESS_STEPS.map((step) => {
            const IconComponent = step.icon;
            return (
              <Reveal key={step.num}>
                <div className="relative z-10 flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center shadow-sm shrink-0 -ml-8 group-hover:border-gold/60 transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-navy stroke-[1.5]" />
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-gold-dark uppercase tracking-[0.18em] block">
                      Step {step.num}
                    </span>
                    <h3 className="mt-1 font-serif text-lg font-semibold text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
