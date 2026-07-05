/**
 * FIRM CONTENT — Single Source of Truth
 * ======================================
 * Every credential, testimonial, statistic, and contact detail lives here.
 * When the real CA's facts arrive, update THIS file only — the entire site
 * pulls from these exports. No hardcoded values anywhere else.
 *
 * ⚠️ PLACEHOLDER DATA — Replace every value before this site goes live.
 */

// ─── Firm Identity ───────────────────────────────────────────────────────────

export const FIRM = {
  name: "TAXCCOUNTS",
  legalName: "TAXCCOUNTS",
  tagline: "Cross-border tax and compliance for NRIs and US businesses working with India",
  description:
    "We help NRIs in the US, UK, Canada, and UAE file taxes correctly in both countries, and we give small US businesses a reliable offshore accounting partner they never have to chase.",
  foundedYear: 2014,
  yearsInPractice: 12,
  url: "https://www.anandassociates.example.com",
} as const;

// ─── Principal / Founder ─────────────────────────────────────────────────────

export const FOUNDER = {
  name: "CA Priya Anand",
  shortName: "Priya Anand",
  title: "Chartered Accountant & Founder",
  icaiMembershipNo: "123456",
  qualifications: [
    "Chartered Accountant (ICAI)",
    "Certified Information Systems Auditor (CISA)",
    "B.Com (Hons), University of Delhi",
  ],
  specializations: [
    "NRI Taxation & Cross-Border Compliance",
    "US–India DTAA Planning",
    "Virtual CFO for International Businesses",
  ],
  memberships: [
    "Institute of Chartered Accountants of India (ICAI)",
    "Western India Regional Council (WIRC)",
  ],
  bio: `I started Anand & Associates twelve years ago after spending five years at a Big Four firm watching NRI clients struggle with the same problem: no single advisor who actually understood both the Indian and US sides of their finances.

Most NRIs were paying one CA in India and a separate CPA in the US, with neither talking to the other. Returns got filed late, DTAA credits were missed, and repatriation became a guessing game.

I built this practice to solve that. One point of contact, one team that speaks both tax codes, and a process designed around video calls and secure document exchange — because our clients are in California and Texas, not down the street.

If you have financial ties to India and you're tired of explaining your situation to a new advisor every April, I'd like to talk.`,
  // ⚠️ [REAL PHOTO REQUIRED] — Replace with actual headshot path
  photoUrl: null,
} as const;

// ─── Credentials ─────────────────────────────────────────────────────────────

export const CREDENTIALS = {
  icaiMembershipNo: "123456",
  firmRegistrationNo: "012345S", // FRN
  icaiBadgeText: "ICAI Registered",
  // Star rating — set to null if no Google rating yet
  googleRating: 4.8,
  googleReviewCount: 47,
} as const;

// ─── Contact ─────────────────────────────────────────────────────────────────

export const CONTACT = {
  phone: "+91-98765-43210",
  phoneRaw: "+919876543210", // For tel: links
  email: "hello@anandassociates.example.com",
  whatsappUrl: "https://wa.me/919876543210",
  // No physical office — set to null
  address: null,
  googleMapsUrl: null,
  // Office hours
  officeHours: {
    ist: "Mon–Fri, 10:00 AM – 7:00 PM IST",
    usEastern: "Mon–Fri, 12:30 AM – 9:30 AM ET",
    usPacific: "Mon–Thu, 9:30 PM – 6:30 AM PT (previous day)",
  },
  // How international fees are collected
  paymentMethods:
    "Wire transfer (SWIFT), Wise, or Razorpay international payments. We send an invoice with clear instructions — no chasing required.",
  meetingFormat:
    "All consultations happen over Zoom or Google Meet. We'll send a calendar invite with a video link after you book.",
} as const;

// ─── Booking / Portal ────────────────────────────────────────────────────────

export const BOOKING = {
  // ⚠️ Replace with real Cal.com URL once account is created
  calComUrl: "https://cal.com/anandassociates/consultation",
  calComEmbedUrl: "https://cal.com/anandassociates/consultation?embed=true",
} as const;

export const PORTAL = {
  name: "TaxDome",
  url: "https://app.taxdome.com", // ⚠️ Replace with client's actual portal URL
  label: "Client Portal",
  description: "Securely upload documents, sign returns, and message our team.",
} as const;

// ─── Countries Served ────────────────────────────────────────────────────────

export const COUNTRIES = [
  { name: "India", code: "IN", flag: "🇮🇳" },
  { name: "USA", code: "US", flag: "🇺🇸" },
  { name: "UK", code: "GB", flag: "🇬🇧" },
  { name: "Canada", code: "CA", flag: "🇨🇦" },
  { name: "UAE", code: "AE", flag: "🇦🇪" },
  { name: "New Zealand", code: "NZ", flag: "🇳🇿" },
  { name: "Australia", code: "AU", flag: "🇦🇺" },
  { name: "Singapore", code: "SG", flag: "🇸🇬" },

] as const;

export const COUNTRIES_SERVED_TEXT = "India, USA, UK, Canada & UAE";

// ─── Services ────────────────────────────────────────────────────────────────

export interface ServiceSummary {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string; // Lucide icon name
  startingPrice: string | null;
  priceCurrency: string;
}

export const SERVICES: ServiceSummary[] = [
  {
    slug: "nri-taxation",
    title: "NRI Taxation & ITR Filing",
    shortTitle: "NRI Tax Filing",
    description:
      "Accurate ITR filing for NRIs with income in India — rental, capital gains, interest, or salary. We handle the forms, the deadlines, and the coordination with your US or UK return.",
    icon: "FileText",
    startingPrice: "₹15,000",
    priceCurrency: "INR",
  },
  {
    slug: "cross-border-tax",
    title: "US–India Cross-Border Tax Planning (DTAA)",
    shortTitle: "Cross-Border Tax",
    description:
      "Legally minimize your tax burden across both countries using the Double Tax Avoidance Agreement. We identify credits you're entitled to and structure your affairs so you don't pay twice.",
    icon: "Globe",
    startingPrice: null,
    priceCurrency: "USD",
  },
  {
    slug: "bookkeeping",
    title: "Outsourced Bookkeeping for Foreign Businesses",
    shortTitle: "Bookkeeping",
    description:
      "Monthly books, reconciliations, and financial reports for US and UK businesses — delivered on time, every time, without you having to chase us.",
    icon: "BookOpen",
    startingPrice: "$300/month",
    priceCurrency: "USD",
  },
  {
    slug: "virtual-cfo",
    title: "Virtual CFO Services",
    shortTitle: "Virtual CFO",
    description:
      "Strategic financial guidance — cash flow forecasting, fundraising support, board-ready reporting, and KPI dashboards — without the cost of a full-time CFO.",
    icon: "TrendingUp",
    startingPrice: "$800/month",
    priceCurrency: "USD",
  },
  {
    slug: "fdi-advisory",
    title: "FDI Advisory & Company Incorporation",
    shortTitle: "FDI Advisory",
    description:
      "Setting up a business in India? We handle FEMA compliance, RBI approvals, entity structuring, and ongoing regulatory filings so you can focus on building.",
    icon: "Building2",
    startingPrice: null,
    priceCurrency: "INR",
  },
];

// ─── Testimonials ────────────────────────────────────────────────────────────
// ⚠️ Placeholder — replace with real testimonials or Google reviews before launch

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  service?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Filing taxes in two countries used to take weeks of back-and-forth. Anand & Associates turned it into one phone call.",
    name: "Rajesh K.",
    location: "California",
    service: "NRI Tax Filing",
  },
  {
    quote:
      "They handle our US entity's bookkeeping every month without us having to chase them. That alone was worth switching.",
    name: "Meera S.",
    location: "Texas",
    service: "Bookkeeping",
  },
  {
    quote:
      "Finally an advisor who understood both the Indian and US sides of my finances.",
    name: "David T.",
    location: "Toronto",
    service: "Cross-Border Tax",
  },
];

// ─── Trust Stats ─────────────────────────────────────────────────────────────

export const TRUST_STATS = [
  { label: "Years in Practice", value: "12+", icon: "Award" },
  { label: "NRI Returns Filed", value: "2,500+", icon: "FileCheck" },
  { label: "Countries Served", value: "5", icon: "Globe2" },
  { label: "Client Retention Rate", value: "94%", icon: "Users" },
] as const;

// ─── Pricing (Placeholder Ranges) ───────────────────────────────────────────

export const PRICING = {
  nriItrFiling: {
    label: "NRI ITR Filing",
    startingAt: "₹15,000",
    note: "Single ITR with salary/rental/interest income. Complex returns (capital gains, multiple properties, DTAA credits) quoted after review.",
  },
  bookkeeping: {
    label: "Outsourced Bookkeeping",
    startingAt: "$300/month",
    note: "Up to 200 transactions/month with monthly P&L and balance sheet. Higher volumes quoted separately.",
  },
  virtualCfo: {
    label: "Virtual CFO",
    startingAt: "$800/month",
    note: "Includes monthly financial review, cash flow forecasting, and one strategy call. Board reporting and fundraising support at higher tiers.",
  },
  crossBorderTax: {
    label: "Cross-Border Tax Planning",
    startingAt: "Custom",
    note: "Depends on the complexity of your cross-border situation. We'll quote after an initial consultation — the first call is free.",
  },
  fdiAdvisory: {
    label: "FDI Advisory & Incorporation",
    startingAt: "Custom",
    note: "Entity incorporation, FEMA compliance, and RBI filings priced based on structure and sector. Initial assessment is free.",
  },
} as const;

// ─── SEO / Metadata ─────────────────────────────────────────────────────────

export const SEO = {
  siteName: "Anand & Associates, Chartered Accountants",
  defaultTitle:
    "Anand & Associates — CA for NRIs & Cross-Border Tax | India, USA, UK",
  defaultDescription:
    "Chartered Accountant firm specializing in NRI taxation, US–India cross-border tax planning (DTAA), outsourced bookkeeping, and virtual CFO services. Serving clients in India, USA, UK, Canada, and UAE.",
  defaultKeywords: [
    "CA for NRI",
    "NRI tax filing India",
    "US India cross-border tax",
    "DTAA tax planning",
    "chartered accountant for NRI",
    "NRI ITR filing",
    "outsourced bookkeeping India",
    "virtual CFO India",
    "FDI advisory India",
  ],
  ogImage: "/og-image.png", // ⚠️ Create or replace with real OG image
  locale: "en_IN",
} as const;

// ─── Analytics ───────────────────────────────────────────────────────────────

export const ANALYTICS = {
  // ⚠️ Replace with real Plausible domain once set up
  plausibleDomain: "anandassociates.example.com",
} as const;

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: SERVICES.map((s) => ({
      label: s.shortTitle,
      href: `/services/${s.slug}`,
      description: s.description,
    })),
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blog", href: "/resources", description: "Tax tips, guides, and updates" },
      { label: "FAQ", href: "/resources/faq", description: "Common questions answered" },
      {
        label: "Tax Calendar",
        href: "/resources/tax-calendar",
        description: "India & US filing deadlines",
      },
    ],
  },
  { label: "Contact", href: "/contact" },
] as const;
