import React from "react";
import Link from "next/link";
import { FIRM, CREDENTIALS, SERVICES, CONTACT, COUNTRIES } from "@/lib/firm-content";
import Logo from "@/components/shared/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-20 pb-28 md:pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(11,91,160,0.18),transparent_55%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-14 border-b border-white/10">
          {/* Column 1: Firm Info */}
          <div className="space-y-5">
            <Link href="/" className="inline-flex">
              <Logo light size="lg" />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              {FIRM.description}
            </p>
            <div className="text-[11px] text-muted space-y-1 font-sans font-semibold">
              {CREDENTIALS.icaiMembershipNo && (
                <div>ICAI Membership No: {CREDENTIALS.icaiMembershipNo}</div>
              )}
              {CREDENTIALS.firmRegistrationNo && (
                <div>Firm Registration No (FRN): {CREDENTIALS.firmRegistrationNo}</div>
              )}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-xs font-bold text-gold-light uppercase tracking-[0.2em] mb-6">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-white/65">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-xs font-bold text-gold-light uppercase tracking-[0.2em] mb-6">
              Firm & Resources
            </h3>
            <ul className="space-y-3 text-sm text-white/65">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Our Firm
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Transparent Pricing
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Learning Center
                </Link>
              </li>
              <li>
                <Link href="/resources/faq" className="hover:text-white transition-colors">
                  General FAQ
                </Link>
              </li>
              <li>
                <Link href="/resources/tax-calendar" className="hover:text-white transition-colors">
                  Filing Calendars
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xs font-bold text-gold-light uppercase tracking-[0.2em] mb-6">
              Contact & Hours
            </h3>
            <div className="text-sm text-white/65 space-y-3.5">
              {CONTACT.phone && (
                <p className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-gold-light shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-white transition-colors font-semibold text-white/85">
                    {CONTACT.phone}
                  </a>
                </p>
              )}
              <p className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gold-light shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors font-semibold text-white/85 break-all">
                  {CONTACT.email}
                </a>
              </p>
              <div className="pt-4 mt-1 text-[13px] border-t border-white/10 space-y-1.5">
                <div className="font-semibold text-white/80">Office Hours (IST)</div>
                <div className="text-white/50">{CONTACT.officeHours.ist}</div>
                <div className="font-semibold text-white/80 pt-1.5">Office Hours (ET)</div>
                <div className="text-white/50">{CONTACT.officeHours.usEastern}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Active markets strip */}
        <div className="py-8 border-b border-white/10">
          <div className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4">
            Active Markets
          </div>
          <div className="flex flex-wrap gap-2">
            {COUNTRIES.map((c) => (
              <span
                key={c.code}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 text-[13px] font-medium text-white/70 rounded-full"
                title={c.name}
              >
                <span aria-hidden="true">{c.flag}</span>
                <span>{c.name}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-white/45">
          <div className="text-center md:text-left max-w-2xl">
            &copy; {currentYear} {FIRM.legalName}. All rights reserved.
            <div className="mt-1.5 text-[11px] text-white/30">
              Disclaimer: The contents of this site are for informational purposes only and do not constitute professional audit, tax, or financial advice.
            </div>
          </div>
          <div className="flex space-x-8 shrink-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
