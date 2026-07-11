import type { Metadata } from "next";
import { FIRM } from "@/lib/firm-content";
import SchemaMarkup from "@/components/shared/SchemaMarkup";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: `Answers to common questions about ${FIRM.name}'s fees, getting started, engagement process, document security, and international tax workflows for NRIs and cross-border businesses.`,
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup type="FAQPage" />
      {children}
    </>
  );
}
