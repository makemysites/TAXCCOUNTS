import React from "react";
import type { Metadata } from "next";
import { FIRM, BOOKING } from "@/lib/firm-content";

export const metadata: Metadata = {
  title: "Simple, Transparent Pricing",
  description: "Transparent service pricing packages for cross-border tax, outsourced bookkeeping, and virtual CFO advisory.",
};

export default function PricingPage() {
  return (
    <div className="bg-cream min-h-screen py-12 md:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-serif italic text-accent text-base block">
            Pricing
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-navy leading-tight">
            Simple, Transparent Pricing for Your Accounting System
          </h1>
          <p className="text-sm md:text-base text-navy/80 leading-relaxed max-w-xl mx-auto">
            {FIRM.name} offers structured financial support for cross-border businesses, consultants, and NRIs. Choose the system that fits your practice.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto mb-16">
          {/* Card 1: Core Accounting */}
          <div className="bg-white rounded-2xl border border-border p-8 md:p-10 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] text-accent font-bold uppercase tracking-widest font-sans">
                  The Foundation
                </span>
                <h2 className="font-serif text-2xl font-bold text-navy">
                  Core Accounting System
                </h2>
              </div>
              <div className="flex items-baseline gap-1.5 py-4 border-y border-border">
                <span className="text-3xl sm:text-4xl font-semibold font-serif text-navy">$300</span>
                <span className="text-xs text-muted font-sans font-semibold uppercase tracking-wider">/ month</span>
              </div>
              <p className="text-xs md:text-sm text-navy/85 leading-relaxed font-sans">
                A structured accounting package designed specifically for solo professionals, consultants, and micro-businesses (typically 1–5 employees) with cross-border compliance needs.
              </p>
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-navy uppercase tracking-wider font-sans">What's Included:</h3>
                <ul className="space-y-2.5 text-xs text-navy/80 font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">&#10003;</span>
                    <span>Monthly bookkeeping & bank reconciliations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">&#10003;</span>
                    <span>Monthly financial reports (P&L, Balance Sheet)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">&#10003;</span>
                    <span>Proactive cross-border tax planning (DTAA credit mapping)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">&#10003;</span>
                    <span>Indian corporate tax filing / US IRS return coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">&#10003;</span>
                    <span>Secure portal document exchange (TaxDome)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">&#10003;</span>
                    <span>Direct email and phone support included</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <a
                href={BOOKING.calComUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-accent hover:bg-accent-hover text-white text-center font-bold text-xs uppercase tracking-wider rounded-full shadow transition-all"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Card 2: CFO Advisory */}
          <div className="bg-white rounded-2xl border border-accent/30 p-8 md:p-10 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent text-white text-[9px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-bl-lg">
              Most Advanced
            </div>
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] text-accent font-bold uppercase tracking-widest font-sans">
                  Strategic Scale
                </span>
                <h2 className="font-serif text-2xl font-bold text-navy">
                  CFO Advisory Package
                </h2>
              </div>
              <div className="flex items-baseline gap-1.5 py-4 border-y border-border">
                <span className="text-3xl sm:text-4xl font-semibold font-serif text-navy">$800</span>
                <span className="text-xs text-muted font-sans font-semibold uppercase tracking-wider">/ month</span>
              </div>
              <p className="text-xs md:text-sm text-navy/85 leading-relaxed font-sans">
                For businesses requiring deeper financial oversight and strategic guidance. This includes the full bookkeeping foundation, plus active cash flow forecasting and KPI dashboards.
              </p>
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-navy uppercase tracking-wider font-sans">What's Included:</h3>
                <ul className="space-y-2.5 text-xs text-navy/80 font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">&#10003;</span>
                    <span className="font-semibold text-navy">Everything in Core Accounting System</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">&#10003;</span>
                    <span>Ongoing cash flow forecasting and scenario planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">&#10003;</span>
                    <span>Performance dashboards & monthly strategy review calls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">&#10003;</span>
                    <span>Entity structuring & international transfer pricing advice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">&#10003;</span>
                    <span>Board-ready reports and fundraising prep support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">&#10003;</span>
                    <span>Priority Slack/WhatsApp support line with CA Priya Anand</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <a
                href={BOOKING.calComUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-navy hover:bg-navy-dark text-white text-center font-bold text-xs uppercase tracking-wider rounded-full shadow transition-all"
              >
                Schedule Strategy Session
              </a>
            </div>
          </div>
        </div>

        {/* Plan Comparison Table */}
        <div className="max-w-5xl mx-auto mb-20">
          <h3 className="font-serif text-2xl font-semibold text-navy mb-4 text-center">
            Compare the Two Plans
          </h3>
          <p className="text-xs sm:text-sm text-muted text-center max-w-xl mx-auto mb-10 font-sans leading-relaxed">
            Both plans include the full bookkeeping foundation. The CFO Advisory Package adds forward-looking strategy on top of it.
          </p>
          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left border-collapse font-sans text-xs sm:text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs w-1/2">
                      What You Get
                    </th>
                    <th className="px-6 py-4 text-center">
                      <div className="font-serif font-bold text-base normal-case tracking-normal">Core Accounting</div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-white/70">$300 / month</div>
                    </th>
                    <th className="px-6 py-4 text-center bg-navy-dark">
                      <div className="font-serif font-bold text-base normal-case tracking-normal">CFO Advisory</div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-accent">$800 / month</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-navy/85">
                  {[
                    { feature: "Monthly bookkeeping & bank reconciliations", core: true, cfo: true },
                    { feature: "Monthly financial reports (P&L, Balance Sheet)", core: true, cfo: true },
                    { feature: "Cross-border tax planning (DTAA credit mapping)", core: true, cfo: true },
                    { feature: "Indian corporate tax filing / US IRS return coordination", core: true, cfo: true },
                    { feature: "Secure portal document exchange (TaxDome)", core: true, cfo: true },
                    { feature: "Direct email and phone support", core: true, cfo: true },
                    { feature: "Cash flow forecasting & scenario planning", core: false, cfo: true },
                    { feature: "Performance dashboards & monthly strategy calls", core: false, cfo: true },
                    { feature: "Entity structuring & transfer pricing advice", core: false, cfo: true },
                    { feature: "Board-ready reports & fundraising prep", core: false, cfo: true },
                    { feature: "Priority WhatsApp line with CA Priya Anand", core: false, cfo: true },
                  ].map((row) => (
                    <tr key={row.feature} className="hover:bg-cream/30 transition-colors">
                      <td className="px-6 py-3.5 font-medium">{row.feature}</td>
                      <td className="px-6 py-3.5 text-center">
                        {row.core ? (
                          <span className="text-emerald-500 font-bold">&#10003;</span>
                        ) : (
                          <span className="text-muted/50">&mdash;</span>
                        )}
                      </td>
                      <td className="px-6 py-3.5 text-center bg-cream/40">
                        {row.cfo ? (
                          <span className="text-emerald-500 font-bold">&#10003;</span>
                        ) : (
                          <span className="text-muted/50">&mdash;</span>
                        )}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-cream/60">
                    <td className="px-6 py-4 font-bold text-navy">Best for</td>
                    <td className="px-6 py-4 text-center text-xs leading-relaxed">
                      Solo professionals & micro-businesses (1&ndash;5 people) needing clean books and on-time filings
                    </td>
                    <td className="px-6 py-4 text-center text-xs leading-relaxed bg-cream/40">
                      Growing businesses that need strategic financial oversight, forecasting, and investor-ready reporting
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Specialized One-Time Services Section */}
        <div className="mb-20 pt-12 border-t border-border">
          <h3 className="font-serif text-2xl font-semibold text-navy mb-4 text-center">
            Specialized One-Time Compliance Services
          </h3>
          <p className="text-xs sm:text-sm text-muted text-center max-w-xl mx-auto mb-12 font-sans leading-relaxed">
            Need support with specific cross-border tasks rather than monthly books? We offer fixed-price filings and custom consulting engagements.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card A: NRI ITR */}
            <div className="bg-white rounded-xl border border-border p-6 flex flex-col justify-between shadow-xs">
              <div className="space-y-4">
                <span className="text-[9px] text-accent font-bold uppercase tracking-widest font-sans">NRI Compliance</span>
                <h4 className="font-serif text-base font-bold text-navy">Indian NRI ITR Filing</h4>
                <div className="text-xl font-bold font-serif text-accent pt-1 pb-3 border-b border-border/60">
                  Starts at ₹15,000 <span className="text-[10px] text-muted font-sans font-medium">/ return</span>
                </div>
                <p className="text-xs text-navy/80 font-sans leading-relaxed">
                  Filing individual tax returns in India for non-residents. Covers rental income, capital gains on Indian mutual funds/shares, NRO interest, and salary.
                </p>
                <ul className="space-y-1.5 text-xs text-navy/70 font-sans">
                  <li>&#8226; US-India DTAA double-tax mapping</li>
                  <li>&#8226; Foreign asset disclosure support</li>
                  <li>&#8226; 15CA/15CB remittance planning</li>
                </ul>
              </div>
              <a
                href={BOOKING.calComUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-2.5 mt-6 bg-cream hover:bg-cream-dark text-navy font-bold text-xs uppercase tracking-wider rounded-lg border border-border transition-all"
              >
                Inquire &rarr;
              </a>
            </div>

            {/* Card B: DTAA planning */}
            <div className="bg-white rounded-xl border border-border p-6 flex flex-col justify-between shadow-xs">
              <div className="space-y-4">
                <span className="text-[9px] text-accent font-bold uppercase tracking-widest font-sans">Tax Strategy</span>
                <h4 className="font-serif text-base font-bold text-navy">Cross-Border Tax Planning</h4>
                <div className="text-xl font-bold font-serif text-accent pt-1 pb-3 border-b border-border/60">
                  Custom Quote <span className="text-[10px] text-muted font-sans font-medium">(Starts at $1,000)</span>
                </div>
                <p className="text-xs text-navy/80 font-sans leading-relaxed">
                  Advanced tax structure advisory for dual-taxpayers. Ideal for structuring inheritance, gift tax, or cross-border stock option assets.
                </p>
                <ul className="space-y-1.5 text-xs text-navy/70 font-sans">
                  <li>&#8226; Retirement account planning (401k/NRE)</li>
                  <li>&#8226; FATCA & FBAR filing reviews</li>
                  <li>&#8226; Subsidiary transfer pricing setup</li>
                </ul>
              </div>
              <a
                href={BOOKING.calComUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-2.5 mt-6 bg-cream hover:bg-cream-dark text-navy font-bold text-xs uppercase tracking-wider rounded-lg border border-border transition-all"
              >
                Schedule Assessment
              </a>
            </div>

            {/* Card C: FDI incorporation */}
            <div className="bg-white rounded-xl border border-border p-6 flex flex-col justify-between shadow-xs">
              <div className="space-y-4">
                <span className="text-[9px] text-accent font-bold uppercase tracking-widest font-sans">Entity Setup</span>
                <h4 className="font-serif text-base font-bold text-navy">FDI & Indian Incorporation</h4>
                <div className="text-xl font-bold font-serif text-accent pt-1 pb-3 border-b border-border/60">
                  Custom Quote <span className="text-[10px] text-muted font-sans font-medium">/ project</span>
                </div>
                <p className="text-xs text-navy/80 font-sans leading-relaxed">
                  Incorporating a subsidiary or private limited company in India. End-to-end management of FEMA compliance and RBI reporting.
                </p>
                <ul className="space-y-1.5 text-xs text-navy/70 font-sans">
                  <li>&#8226; Subsidiary entity incorporation</li>
                  <li>&#8226; Share capital inflow reporting (FDI)</li>
                  <li>&#8226; PAN/TAN & GST registration setup</li>
                </ul>
              </div>
              <a
                href={BOOKING.calComUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-2.5 mt-6 bg-cream hover:bg-cream-dark text-navy font-bold text-xs uppercase tracking-wider rounded-lg border border-border transition-all"
              >
                Inquire &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Add-ons & Notes Section */}
        <div className="max-w-4xl mx-auto pt-12 border-t border-border space-y-12">
          
          {/* Add-Ons */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-navy mb-6 text-center">
              Add-On Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-border p-6 space-y-2">
                <h4 className="font-serif text-sm font-bold text-navy">Additional Employees</h4>
                <p className="text-xs text-navy/80 font-sans">
                  Our core packages include payroll processing for up to 3 employees. Team members beyond this are billed separately.
                </p>
                <div className="text-xs text-accent font-bold pt-1">
                  Pricing: $10 – $20 per employee / month
                </div>
              </div>

              <div className="bg-white rounded-xl border border-border p-6 space-y-2">
                <h4 className="font-serif text-sm font-bold text-navy">Owner’s Individual Taxes</h4>
                <p className="text-xs text-navy/80 font-sans">
                  We prepare individual tax returns (US Form 1040 and Indian ITR) with full Double Tax Avoidance Agreement (DTAA) optimization.
                </p>
                <div className="text-xs text-accent font-bold pt-1">
                  Pricing: $1,000 – $2,500+ annually based on asset complexity
                </div>
              </div>
            </div>
          </div>

          {/* Cleanup Note */}
          <div className="bg-cream-dark/60 rounded-2xl border border-border p-8 text-center space-y-3 max-w-2xl mx-auto">
            <h3 className="font-serif text-lg font-bold text-navy">One-Time Setup & Historical Cleanup Work</h3>
            <p className="text-xs md:text-sm text-navy/80 font-sans leading-relaxed">
              If your books are behind by several months or require significant historical cleanup, we handle this as a separate, one-time project before the monthly service cycle begins. We will quote a fixed project fee after reviewing your records.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
