import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { FIRM, SEO, ANALYTICS } from "@/lib/firm-content";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BottomCTA from "@/components/layout/BottomCTA";
import MobileBookingCTA from "@/components/layout/MobileBookingCTA";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});



export const metadata: Metadata = {
  title: {
    default: SEO.defaultTitle,
    template: `%s | ${FIRM.name}`,
  },
  description: SEO.defaultDescription,
  keywords: [...SEO.defaultKeywords],
  openGraph: {
    siteName: SEO.siteName,
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
    locale: SEO.locale,
    type: "website",
  },
  metadataBase: new URL(FIRM.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${playfairDisplay.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* Plausible Analytics Script */}
        <script
          defer
          data-domain={ANALYTICS.plausibleDomain}
          src="https://plausible.io/js/script.js"
        ></script>
      </head>
      <body className="min-h-full flex flex-col font-sans bg-cream text-navy">
        <Header />
        
        {/* Schema Markup for the Professional Service */}
        <SchemaMarkup type="ProfessionalService" />

        <main id="main-content" className="flex-grow pt-[72px] outline-none">
          {children}
        </main>

        <BottomCTA />

        <Footer />
        <MobileBookingCTA />
      </body>
    </html>
  );
}
