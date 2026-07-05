import React from "react";
import {
  PhoneCall,
  FolderOpen,
  Sliders,
  CheckSquare,
  ShieldCheck
} from "lucide-react";

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
    desc: "Our chartered accountants prepare and file your tax returns accurately.",
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
    <section className="py-20 lg:py-24 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-navy">
            Our Client Process
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Desktop Connected Steps */}
        <div className="relative hidden lg:block max-w-6xl mx-auto">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-12 right-12 h-0.5 bg-border -translate-y-12 z-0" />
          
          <div className="grid grid-cols-5 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center space-y-4 group">
                  {/* Step Bubble */}
                  <div className="w-20 h-20 rounded-full bg-white border border-border/80 flex items-center justify-center text-navy shadow-sm relative group-hover:scale-105 group-hover:border-accent group-hover:shadow-md transition-all duration-300">
                    {/* Number Badge */}
                    <span className="absolute -top-2 -right-2 bg-navy text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                      {step.num}
                    </span>
                    <IconComponent className="w-7 h-7 text-navy/80 stroke-[1.25] group-hover:text-accent transition-colors" />
                  </div>
                  
                  {/* Text Details */}
                  <div className="space-y-1.5 pt-2">
                    <h3 className="font-serif text-base font-bold text-navy group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[11px] text-navy/70 leading-relaxed font-sans max-w-[190px] mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Steps */}
        <div className="relative lg:hidden max-w-md mx-auto pl-8 space-y-10">
          {/* Vertical line connector */}
          <div className="absolute top-2 bottom-2 left-6 w-0.5 bg-border z-0" />
          
          {PROCESS_STEPS.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div key={idx} className="relative z-10 flex items-start gap-6 group">
                {/* Step Circle */}
                <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-navy shadow-sm shrink-0 -ml-8 group-hover:scale-105 group-hover:border-accent transition-all duration-300">
                  <IconComponent className="w-4 h-4 text-navy/80 stroke-[1.25] group-hover:text-accent transition-colors" />
                </div>
                
                {/* Text Content */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-wider font-sans block">
                    Step {step.num}
                  </span>
                  <h3 className="font-serif text-base font-bold text-navy group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-navy/75 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
