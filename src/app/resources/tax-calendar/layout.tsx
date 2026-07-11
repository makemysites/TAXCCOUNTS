import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India & US Tax Deadline Calendar",
  description:
    "Key compliance dates for Indian direct taxes (ITR, GST, TDS) and US federal requirements (IRS returns, FBAR, estimated taxes) — filterable by jurisdiction and category.",
};

export default function TaxCalendarLayout({ children }: { children: React.ReactNode }) {
  return children;
}
