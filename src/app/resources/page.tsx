import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FIRM } from "@/lib/firm-content";
import { SectionHeading } from "@/components/shared";
import ChecklistCapture from "@/components/resources/ChecklistCapture";
import BlogGrid from "@/components/resources/BlogGrid";

export const metadata: Metadata = {
  title: `Resources & Tax Guides | ${FIRM.name}`,
  description: `Access our library of cross-border tax guides, filing checklists, tax calendars, and answers to the compliance questions NRIs and international founders ask most.`,
};

export default function ResourcesPage() {
  return (
    <div className="bg-cream py-16 sm:py-24 font-sans animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold text-accent uppercase tracking-widest">
            Knowledge Hub
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy mt-3 mb-6">
            Tax guides, resources & deadlines
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Practical, plain-English answers to complex US–India and NRI taxation questions. No jargon, just clear compliance action items.
          </p>
        </div>

        {/* Featured resources cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* FAQ Card */}
          <Link
            href="/resources/faq"
            className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-accent/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 bg-accent/5 text-accent rounded-lg border border-accent/15 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold font-serif text-navy mb-2 group-hover:text-accent transition-colors">
                General FAQ
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                Fees, document exchange security, and engagement timelines. Get answers to common onboarding questions.
              </p>
            </div>
            <span className="text-xs font-bold text-accent uppercase tracking-wider inline-flex items-center gap-1 mt-6">
              <span>Read FAQs</span>
              <span>&rarr;</span>
            </span>
          </Link>

          {/* Tax Calendar Card */}
          <Link
            href="/resources/tax-calendar"
            className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-accent/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 bg-accent/5 text-accent rounded-lg border border-accent/15 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold font-serif text-navy mb-2 group-hover:text-accent transition-colors">
                Deadline Calendar
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                Indian financial dates (ITR, TDS, GST) alongside US tax due dates and foreign account disclosure (FBAR) filings.
              </p>
            </div>
            <span className="text-xs font-bold text-accent uppercase tracking-wider inline-flex items-center gap-1 mt-6">
              <span>View Deadlines</span>
              <span>&rarr;</span>
            </span>
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <div className="mb-20">
          <SectionHeading
            title="Latest Tax Insights"
            subtitle="Articles and guides written by our team to help you navigate cross-border regulatory codes."
            centered={false}
            className="mb-12"
          />

          <BlogGrid />
        </div>

        {/* Email Gated Checklist Download - Delegated component */}
        <div className="max-w-4xl mx-auto">
          <ChecklistCapture />
        </div>
      </div>
    </div>
  );
}
