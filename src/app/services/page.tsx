import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FIRM, BOOKING } from "@/lib/firm-content";

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

        {/* Detailed Modules walkthrough */}
        <div className="space-y-16 max-w-4xl mx-auto">
          {[
            {
              title: "Bookkeeping & Financial Reporting",
              desc: "Accurate financial records are the foundation of our entire system. We categorize transactions across your domestic and international accounts, reconcile bank statement feeds, and ensure your ledger matches local and global compliance standards.",
              features: [
                "Monthly bank and credit card reconciliations",
                "Cross-border transaction mapping & exchange rate tracking",
                "Monthly P&L, balance sheets, and cash flow reports",
                "Client trust account audits (specific for law practices)"
              ]
            },
            {
              title: "Tax Strategy & Returns",
              desc: "We plan and optimize taxes throughout the year instead of scrambling in April. We coordinate entity-level tax positions in India and the US, evaluate capital gains exposure on global assets, and optimize double-tax (DTAA) treaty credits.",
              features: [
                "Proactive US-India DTAA double-tax mapping",
                "Indian ITR filing for NRIs (salary, rental, gains, inheritance)",
                "Corporate tax returns (Form 1120 / Partnership Form 1065 / Indian ITR-5 & 6)",
                "Compliant global asset reporting (FBAR & FATCA)"
              ]
            },
            {
              title: "Payroll Management",
              desc: "Processing payroll correctly is crucial when working across timezones. We handle payroll calculations, record maintenance, and associated compliance filings so you can pay founders and offshore teams on time, every time.",
              features: [
                "End-to-end payroll processing and direct deposits",
                "Compliance calculations and tax withholding filings",
                "Contractor payout management across borders",
                "Integration with QuickBooks and Gusto payroll structures"
              ]
            },
            {
              title: "Advisory & Business Guidance",
              desc: "All client engagements include year-round advisory support. We help you make sense of the financial reports, review compensation models, and navigate regulatory compliance (FEMA, RBI, local disclosures) without charging hourly fees.",
              features: [
                "Ongoing virtual CFO planning calls",
                "FEMA compliance, RBI approvals, and Form 15CA/CB support",
                "Transfer pricing reviews for US-India subsidiaries",
                "Direct contact lines (Zoom, WhatsApp) included"
              ]
            }
          ].map((module, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 md:p-10 border border-border shadow-sm flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition-all duration-300"
            >
              {/* Step indicator */}
              <div className="w-10 h-10 rounded-full bg-cream border border-border flex items-center justify-center font-serif text-base font-bold text-accent shadow-sm shrink-0">
                0{idx + 1}
              </div>
              <div className="space-y-6 flex-1">
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-navy">
                    {module.title}
                  </h2>
                  <p className="text-xs md:text-sm text-navy/80 mt-3 leading-relaxed">
                    {module.desc}
                  </p>
                </div>
                <div className="space-y-2.5 pt-4 border-t border-border/60">
                  <h3 className="text-xs font-bold text-navy uppercase tracking-wider font-sans">Core Capabilities:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {module.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-navy/80 font-sans">
                        <span className="text-accent">&#8226;</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
