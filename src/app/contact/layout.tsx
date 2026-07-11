import type { Metadata } from "next";
import { FIRM, COUNTRIES_SERVED_TEXT } from "@/lib/firm-content";

export const metadata: Metadata = {
  title: "Contact Us & Book a Consultation",
  description: `Get in touch with ${FIRM.name} — send an inquiry, chat on WhatsApp, or book a free 20-minute video consultation. Serving clients in ${COUNTRIES_SERVED_TEXT}.`,
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
