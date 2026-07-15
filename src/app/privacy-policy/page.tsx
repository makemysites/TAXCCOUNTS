import React from "react";
import type { Metadata } from "next";
import { FIRM, CONTACT, PORTAL, ANALYTICS } from "@/lib/firm-content";

export const metadata: Metadata = {
  title: `Privacy Policy | ${FIRM.name}`,
  description: `Read about how we collect, store, and manage data at ${FIRM.name}, chartered accountants, and our secure file exchange protocols.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-cream py-16 sm:py-24 font-sans animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-border shadow-sm p-8 sm:p-12 space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-navy mb-2">
              Privacy Policy
            </h1>
            <p className="text-xs text-muted">Last Updated: July 2026</p>
          </div>

          <div className="prose prose-sm text-navy/90 leading-relaxed space-y-6">
            <p>
              At <strong>{FIRM.legalName}</strong>, we respect the privacy of our clients and website visitors. This privacy policy describes how we collect, store, share, and protect your information when you interact with this website.
            </p>

            <h2 className="text-lg font-serif font-bold text-navy pt-4 border-t border-border">
              1. Information We Collect
            </h2>
            <p>
              We gather information through this website in two ways:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Contact Forms:</strong> When you send inquiries, we collect your name, email address, phone number, country of residence, and message content.
              </li>
              <li>
                <strong>Booking Calendars:</strong> When you book a video consultation, our calendar system (Cal.com) collects your scheduling preferences, name, and email.
              </li>
              <li>
                <strong>Web Analytics:</strong> We track visitor analytics (e.g., pages viewed, time on site, referrer sources) through Plausible Analytics.
              </li>
            </ul>

            <h2 className="text-lg font-serif font-bold text-navy pt-4 border-t border-border">
              2. Secure Document Exchange (GLBA Mandate)
            </h2>
            <p className="bg-accent/5 p-4 rounded-lg border border-accent/15 text-sm md:text-base">
              <strong>CRITICAL PROTOCOL:</strong> As a chartered accounting practice handling financial data (such as bank records, PANs, and tax history), we adhere to strict confidentiality principles. We <strong>never accept or solicit financial records over email or contact forms</strong>. All transaction items and tax filings are managed exclusively inside our secure, encrypted client portal (<strong>{PORTAL.name}</strong>). If you send sensitive files via standard mail or chat, they will be deleted.
            </p>

            <h2 className="text-lg font-serif font-bold text-navy pt-4 border-t border-border">
              3. How We Use Your Information
            </h2>
            <p>
              We use your contact and booking data solely to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to inquiries submitted through our contact channels.</li>
              <li>Schedule, manage, and conduct requested video consultations.</li>
              <li>Improve website navigation and content based on aggregate analytics.</li>
            </ul>

            <h2 className="text-lg font-serif font-bold text-navy pt-4 border-t border-border">
              4. Third-Party Service Integrations
            </h2>
            <p>
              We integrate specific third-party tools to handle booking, document exchange, and analytics. Please review their privacy statements:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Cal.com:</strong> Handles timezone-aware booking scheduling. (
                <a href="https://cal.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Cal.com Privacy Policy
                </a>
                )
              </li>
              <li>
                <strong>TaxDome:</strong> Secure client portal for file exchange, document storage, and e-signatures. (
                <a href="https://taxdome.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  TaxDome Privacy Policy
                </a>
                )
              </li>
              <li>
                <strong>Plausible Analytics:</strong> A privacy-conscious, cookie-free web metrics tool. (
                <a href="https://plausible.io/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Plausible Privacy Policy
                </a>
                )
              </li>
            </ul>

            <h2 className="text-lg font-serif font-bold text-navy pt-4 border-t border-border">
              5. Cookies
            </h2>
            <p>
              Our website analytics platform (Plausible) is 100% cookie-free. The website does not store tracking cookies on your device. Minimal essential session cookies may be used by embedded iframe booking widgets (Cal.com) to coordinate dates.
            </p>

            <h2 className="text-lg font-serif font-bold text-navy pt-4 border-t border-border">
              6. Data Security
            </h2>
            <p>
              We enforce SSL/HTTPS encryption across this entire website, preventing unauthorized interception of form fields. Document exchange databases are hosted inside the secure, SOC 2 compliant storage provided by our portal partner (TaxDome).
            </p>

            <h2 className="text-lg font-serif font-bold text-navy pt-4 border-t border-border">
              7. Your Rights
            </h2>
            <p>
              You have the right to request access to the personal data we hold about you, request corrections, or request deletion of your data from our database. Contact us at <strong>{CONTACT.email}</strong> to make a request.
            </p>

            <h2 className="text-lg font-serif font-bold text-navy pt-4 border-t border-border">
              8. Contact Details
            </h2>
            <p>
              For questions regarding this policy or data management practices, please reach out to us at:
              <br />
              <strong>Email:</strong> {CONTACT.email}
              <br />
              <strong>Phone:</strong> {CONTACT.phone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
