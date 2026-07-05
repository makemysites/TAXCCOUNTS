import React from "react";
import type { Metadata } from "next";
import { FOUNDER, CREDENTIALS, FIRM, BOOKING } from "@/lib/firm-content";
import PhotoPlaceholder from "@/components/shared/PhotoPlaceholder";

export const metadata: Metadata = {
  title: "About Our Firm & Values",
  description: `Learn about the professional credentials, core values, and team behind Anand & Associates, led by CA ${FOUNDER.name}.`,
};

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen py-12 md:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-serif italic text-accent text-base block">
            Who Are We
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-navy leading-tight">
            About Anand & Associates
          </h1>
          <p className="text-sm md:text-base text-navy/80 leading-relaxed max-w-xl mx-auto">
            A specialized cross-border tax practice built to help international families and businesses manage their Indian compliance without friction.
          </p>
        </div>

        {/* Note from Founder Section */}
        <div className="bg-white rounded-2xl border border-border p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-5 flex justify-center lg:sticky lg:top-28">
            <div className="relative p-2 bg-cream rounded-xl border border-border w-full max-w-md">
              <PhotoPlaceholder
                width="100%"
                height="450px"
                label="[REAL PHOTO REQUIRED] — CA Priya Anand"
                className="rounded-lg overflow-hidden"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] text-accent font-bold uppercase tracking-widest font-sans">
                Founder Message
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-navy">
                A Note from Priya
              </h2>
              <p className="text-xs text-muted font-bold font-sans">
                {FOUNDER.title} | Membership No: {CREDENTIALS.icaiMembershipNo}
              </p>
            </div>

            <div className="text-xs md:text-sm text-navy/85 leading-relaxed space-y-4 font-sans">
              {FOUNDER.bio.split("\n\n").map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-border/60 grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="font-bold text-navy block">Qualifications:</span>
                <ul className="list-disc pl-4 text-navy/80 mt-1 space-y-1">
                  {FOUNDER.qualifications.map((q, idx) => (
                    <li key={idx}>{q}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="font-bold text-navy block">Specializations:</span>
                <ul className="list-disc pl-4 text-navy/80 mt-1 space-y-1">
                  {FOUNDER.specializations.map((s, idx) => (
                    <li key={idx}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16 pt-8 border-t border-border">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-navy text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Accountability",
                desc: "You can count on us to meet deadlines, stand behind our work, and take responsibility for the financial systems we manage."
              },
              {
                title: "Proactive Service",
                desc: "We focus on planning ahead rather than reacting after the fact, ensuring clients optimize their tax structures throughout the year."
              },
              {
                title: "Transparent Communication",
                desc: "We believe financial guidance should be clear and understandable, without unnecessary complexity or hidden charges."
              },
              {
                title: "Client-First Mindset",
                desc: "Our work is guided entirely by the long-term compliance security and financial success of the business owners we serve."
              }
            ].map((val, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-border p-6 space-y-3 shadow-sm">
                <h3 className="font-serif text-base font-bold text-navy">{val.title}</h3>
                <p className="text-xs md:text-sm text-navy/80 leading-relaxed font-sans">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet the Team Section */}
        <div className="mb-16 pt-8 border-t border-border">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-navy text-center mb-12">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "CA Priya Anand",
                role: "Founder & Principal",
                desc: "12+ years of experience in cross-border tax planning, FEMA compliance, and offshore business bookkeeping systems."
              },
              {
                name: "Darlene Tria",
                role: "Lead Reconciliations Manager",
                desc: "Ensures monthly bank data feeds, ledgers, and offshore bookkeeping reconciliations are completed accurately and on schedule."
              },
              {
                name: "Joegee Carlos, CPA",
                role: "US Liaison Consultant",
                desc: "Coordinates tax credit optimization (Form 1116) and US filings (Form 1040) directly with clients' US domestic CPAs."
              }
            ].map((team, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-border p-6 text-center space-y-3 shadow-sm flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border border-border overflow-hidden bg-cream mb-2 flex items-center justify-center font-serif text-navy text-xl font-bold">
                  {team.name.split(" ").slice(-1)[0][0]}
                </div>
                <h3 className="font-serif text-base font-bold text-navy">{team.name}</h3>
                <span className="text-[10px] text-accent font-bold uppercase tracking-widest font-sans block">{team.role}</span>
                <p className="text-xs text-navy/80 font-sans leading-relaxed">{team.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-12 bg-white p-8 md:p-12 rounded-2xl border border-border shadow-sm text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl font-serif font-bold text-navy">
            Ready to Speak with Priya?
          </h2>
          <p className="text-xs sm:text-sm text-navy/85 max-w-xl mx-auto leading-relaxed">
            Schedule a brief video consultation to discuss your ties to India, review your current filing setup, and identify double-tax optimization points.
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href={BOOKING.calComUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-accent hover:bg-accent-hover text-white font-bold text-xs uppercase tracking-wider rounded-full shadow transition-all"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
