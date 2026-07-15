import React from "react";
import type { Metadata } from "next";
import { FOUNDER, CREDENTIALS, FIRM, BOOKING, DIRECTORS } from "@/lib/firm-content";
import DirectorsSection from "@/components/about/DirectorsSection";

export const metadata: Metadata = {
  title: "About Our Firm & Values",
  description: `Learn about the professional credentials, core values, and team behind ${FIRM.name}, led by CA ${FOUNDER.name}.`,
};

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen py-12 md:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="eyebrow eyebrow-center justify-center">
            Who We Are
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-navy leading-tight">
            About {FIRM.name}
          </h1>
          <p className="text-sm md:text-base text-navy/80 leading-relaxed max-w-xl mx-auto">
            A specialized cross-border tax practice built to help international families and businesses manage their Indian compliance without friction.
          </p>
        </div>

        {/* Note from Founder Section */}
        <div className="bg-white rounded-2xl border border-border p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-5 flex justify-center lg:sticky lg:top-28">
            <div className="relative p-2 bg-cream rounded-xl border border-border w-full max-w-md">
              <img
                src={FOUNDER.photoUrl}
                alt={`${FOUNDER.name}, founder of ${FIRM.name}, in a professional modern office setting`}
                className="rounded-lg overflow-hidden object-cover w-full h-[450px]"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] text-accent font-bold uppercase tracking-widest font-sans">
                Founder Message
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-navy">
                A Note from {FOUNDER.shortName}
              </h2>
              <p className="text-xs text-muted font-bold font-sans">
                {FOUNDER.title}
                {CREDENTIALS.icaiMembershipNo && ` | Membership No: ${CREDENTIALS.icaiMembershipNo}`}
              </p>
            </div>

            <div className="text-sm md:text-base text-navy/85 leading-relaxed space-y-4 font-sans">
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
                <p className="text-sm md:text-base text-navy/80 leading-relaxed font-sans">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Directors Section */}
        <div className="mb-16 pt-8 border-t border-border">
          <div className="text-center mb-12 space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-navy">
              Our Directors
            </h2>
            <p className="text-sm text-navy/60 font-sans">Click on a profile to view full biography and qualifications.</p>
          </div>
          <DirectorsSection directors={DIRECTORS} />
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-12 bg-navy text-white p-8 md:p-12 rounded-2xl relative overflow-hidden shadow-[0_24px_60px_-20px_rgba(6,47,82,0.3)] text-center max-w-3xl mx-auto space-y-6">
          {/* Atmosphere */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,91,160,0.3),transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(197,165,90,0.1),transparent_55%)] pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Ready to Speak with {FOUNDER.shortName}?
            </h2>
            <p className="text-sm md:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
              Schedule a brief video consultation to discuss your ties to India, review your current filing setup, and identify double-tax optimization points.
            </p>
            <div className="pt-2 flex justify-center">
              <a
                href={BOOKING.calComUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                Book a Strategy Call
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
