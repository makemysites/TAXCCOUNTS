import React from "react";
import type { Metadata } from "next";
import { FIRM, CONTACT } from "@/lib/firm-content";

export const metadata: Metadata = {
  title: `Terms of Service | ${FIRM.name}`,
  description: `Read the Terms of Service governing the use of the ${FIRM.name} website and initial cross-border consultation terms.`,
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-cream py-16 sm:py-24 font-sans animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-border shadow-sm p-8 sm:p-12 space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-navy mb-2">
              Terms of Service
            </h1>
            <p className="text-xs text-muted">Last Updated: July 2026</p>
          </div>

          <div className="prose prose-sm text-navy/90 leading-relaxed space-y-6">
            <p>
              Welcome to the website of <strong>{FIRM.legalName}</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing or using this website, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <h2 className="text-lg font-serif font-bold text-navy pt-4 border-t border-border">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing this website, you confirm that you have read, understood, and agreed to these Terms of Service. If you do not agree to these terms, you must discontinue your use of this site immediately.
            </p>

            <h2 className="text-lg font-serif font-bold text-navy pt-4 border-t border-border">
              2. No Professional-Client Relationship
            </h2>
            <p>
              The information provided on this website is for general informational and educational purposes only. Accessing this website, submitting an inquiry through a contact form, or scheduling a free consultation <strong>does not create a Chartered Accountant-client relationship</strong>. A formal professional relationship is only established once we have explicitly agreed to represent you and both parties have signed a formal engagement letter.
            </p>

            <h2 className="text-lg font-serif font-bold text-navy pt-4 border-t border-border">
              3. Information Disclaimers
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>No Tax or Legal Advice:</strong> The articles, deadline calendars, and checklists on this site are general summaries and do not constitute professional tax, accounting, audit, or legal advice. Tax codes and regulations are highly subjective and vary based on individual facts. You should not act upon this information without consulting a qualified advisor.
              </li>
              <li>
                <strong>Estimate Calculators:</strong> Any interactive calculators or estimators provided on this site are designed to provide directional approximations only. They carry no authority, do not calculate actual tax liability, and should not be used for filing purposes.
              </li>
            </ul>

            <h2 className="text-lg font-serif font-bold text-navy pt-4 border-t border-border">
              4. Description of Services
            </h2>
            <p>
              This website outlines our practice areas (including NRI Taxation, DTAA Planning, Bookkeeping, CFO Advisory, and FDI Advisory). We reserve the right to alter, modify, or discontinue services at any time without notice. Tiers or &ldquo;starting at&rdquo; price ranges represent general guides, and final pricing is determined exclusively in a signed engagement letter.
            </p>

            <h2 className="text-lg font-serif font-bold text-navy pt-4 border-t border-border">
              5. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your access to, use of, or inability to use this website, or from any errors or omissions in the content.
            </p>

            <h2 className="text-lg font-serif font-bold text-navy pt-4 border-t border-border">
              6. Intellectual Property
            </h2>
            <p>
              All content on this website (including text, graphics, logos, layout structures, and code) is the property of {FIRM.name} and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or modify any materials from this site without our express written permission.
            </p>

            <h2 className="text-lg font-serif font-bold text-navy pt-4 border-t border-border">
              7. Third-Party Websites & Services
            </h2>
            <p>
              This site links to external platforms (including TaxDome, Cal.com, and WhatsApp). We do not control or assume responsibility for the content, privacy policies, or practices of any third-party services.
            </p>

            <h2 className="text-lg font-serif font-bold text-navy pt-4 border-t border-border">
              8. Governing Law
            </h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Bengaluru (or the location of the firm's principal office).
            </p>

            <h2 className="text-lg font-serif font-bold text-navy pt-4 border-t border-border">
              9. Contact Information
            </h2>
            <p>
              If you have any questions or concerns regarding these Terms of Service, please contact us at:
              <br />
              <strong>Email:</strong> {CONTACT.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
