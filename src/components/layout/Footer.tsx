import React from "react";
import Link from "next/link";
import { FIRM, CREDENTIALS, SERVICES, CONTACT, COUNTRIES } from "@/lib/firm-content";
import Logo from "@/components/shared/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream-dark text-navy pt-16 pb-24 md:pb-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-border">
          {/* Column 1: Firm Info */}
          <div className="space-y-4">
            <Link href="/" className="flex flex-col">
              <Logo heightClassName="h-10 sm:h-12" />
            </Link>
            <p className="text-xs text-navy/80 font-sans leading-relaxed">
              {FIRM.description}
            </p>
            <div className="text-[11px] text-muted space-y-1 font-sans font-semibold">
              <div>ICAI Membership No: {CREDENTIALS.icaiMembershipNo}</div>
              <div>Firm Registration No (FRN): {CREDENTIALS.firmRegistrationNo}</div>
            </div>
            {/* Countries served badges */}
            <div className="pt-2">
              <div className="text-[10px] font-bold text-navy uppercase tracking-wider font-sans mb-2">
                Active Markets
              </div>
              <div className="flex flex-wrap gap-1.5">
                {COUNTRIES.map((c) => (
                  <span
                    key={c.code}
                    className="inline-flex items-center gap-1 px-2 py-0.5 bg-white text-[11px] font-medium text-navy rounded border border-border"
                    title={c.name}
                  >
                    <span>{c.flag}</span>
                    <span>{c.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: How We Work / Services */}
          <div>
            <h3 className="text-xs font-bold text-navy uppercase tracking-wider mb-4 font-sans">
              Services & Systems
            </h3>
            <ul className="space-y-2 text-xs font-semibold text-navy/70 font-sans">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-accent transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-xs font-bold text-navy uppercase tracking-wider mb-4 font-sans">
              Learning & Support
            </h3>
            <ul className="space-y-2 text-xs font-semibold text-navy/70 font-sans">
              <li>
                <Link href="/pricing" className="hover:text-accent transition-colors">
                  Transparent Pricing
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-accent transition-colors">
                  Learning Center (Blog)
                </Link>
              </li>
              <li>
                <Link href="/resources/faq" className="hover:text-accent transition-colors">
                  General FAQ
                </Link>
              </li>
              <li>
                <Link href="/resources/tax-calendar" className="hover:text-accent transition-colors">
                  Filing Calendars
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Our Firm
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-navy uppercase tracking-wider mb-4 font-sans">
              Contact & Hours
            </h3>
            <div className="text-xs text-navy/80 space-y-2.5 font-sans font-medium">
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-accent transition-colors font-bold text-navy">
                  {CONTACT.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 19v-8.93a2 2 0 01.89-1.664l8-5.333a2 2 0 012.22 0l8 5.333A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-2.25-1.5a2 2 0 00-2.22 0l-2.25 1.5" />
                </svg>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-accent transition-colors font-bold text-navy break-all">
                  {CONTACT.email}
                </a>
              </p>
              <div className="pt-2 text-[10px] border-t border-border space-y-1">
                <div className="font-bold text-navy">Office Hours (IST):</div>
                <div className="text-muted font-medium">{CONTACT.officeHours.ist}</div>
                <div className="font-bold text-navy mt-1.5">Office Hours (ET):</div>
                <div className="text-muted font-medium">{CONTACT.officeHours.usEastern}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-muted space-y-4 md:space-y-0 font-sans font-medium">
          <div className="text-center md:text-left">
            &copy; {currentYear} {FIRM.legalName}. All rights reserved.
            <div className="mt-1 text-[9px] text-muted/60 font-light">
              Disclaimer: The contents of this site are for informational purposes only and do not constitute professional audit, tax, or financial advice.
            </div>
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
