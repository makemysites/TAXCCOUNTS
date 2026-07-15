/**
 * FIRM CONTENT — Single Source of Truth
 * ======================================
 * Every credential, testimonial, statistic, and contact detail lives here.
 * All content values pulled dynamically across the site.
 */

// ─── Firm Identity ───────────────────────────────────────────────────────────

export const FIRM = {
  name: "TAXCCOUNTS PRO",
  legalName: "TAXCCOUNTS PRO India Private Limited",
  tagline:
    "Accounting, Taxation & Global Compliance for Businesses, Startups and NRIs",
  description:
    "TAXCCOUNTS PRO helps businesses, startups, SMEs and NRIs with accounting, taxation, audit, payroll, compliance and cross-border advisory. We combine technology with expert guidance to deliver timely, accurate and practical financial solutions for clients across India and overseas.",
  foundedYear: 2025,
  yearsInPractice: 1,
  url: "https://taxccounts.com",
} as const;

// ─── Principal / Founder ─────────────────────────────────────────────────────

export const FOUNDER = {
  name: "Dinesh Singathi",
  shortName: "Dinesh",
  title: "Founder & Managing Director",
  icaiMembershipNo: null,
  qualifications: [
    "Semi Qualified Chartered Accountant",
    "Master's in Finance",
    "Finance & Taxation Professional",
  ],
  specializations: [
    "Direct & Indirect Taxation",
    "Cross-Border Taxation & NRI Advisory",
    "Accounting & Bookkeeping Outsourcing",
    "Business Advisory & Compliance",
    "Virtual CFO Services",
    "Startup & SME Advisory",
    "Corporate Compliance",
  ],
  memberships: [],
  bio: `I founded TAXCCOUNTS PRO with a simple objective—to make professional accounting, taxation and compliance services accessible, responsive and technology-driven for businesses and individuals across the globe.

Over the years, I have worked with businesses ranging from startups to established enterprises, helping them navigate complex tax laws, regulatory compliance, financial reporting and business growth. My practice has supported hundreds of clients across multiple industries while managing substantial financial portfolios and delivering practical, commercially focused advice.

A significant part of our work involves assisting NRIs, international entrepreneurs and global businesses with Indian tax compliance, cross-border reporting, accounting outsourcing and regulatory matters. We focus on simplifying complex compliance requirements while helping clients remain fully compliant and confident in their business decisions.

At TAXCCOUNTS PRO, we operate through a secure, virtual-first model that enables clients to work with us from anywhere in the world. Through secure document sharing, digital approvals, video consultations and proactive communication, we provide the convenience of a modern accounting firm without compromising on professional standards, responsiveness or personal attention.

Our philosophy is simple: build long-term relationships through integrity, technical excellence, timely delivery and practical business advice that creates measurable value for every client.`,
  photoUrl: "/images/team_dinesh.png",
} as const;

// ─── Directors ───────────────────────────────────────────────────────────────

export const DIRECTORS = [
  {
    name: "Dinesh Singathi",
    role: "Founder & Managing Director",
    desc: "Founder of TAXCCOUNTS PRO. Specializes in direct and indirect taxation, corporate compliance, cross-border NRI tax advisory, and Virtual CFO services.",
    image: "/images/team_dinesh.png"
  },
  {
    name: "Deepak Singathi",
    role: "Director",
    desc: "Director at TAXCCOUNTS PRO. Holds a Master's in Finance from Dayton, Ohio. Specializes in corporate finance, investment planning, and business advisory services.",
    image: "/images/team_deepak.png"
  }
] as const;

// ─── Credentials ─────────────────────────────────────────────────────────────

export const CREDENTIALS = {
  icaiMembershipNo: null,
  firmRegistrationNo: null,
  icaiBadgeText: null,
  googleRating: null,
  googleReviewCount: null,
} as const;

// ─── Contact ─────────────────────────────────────────────────────────────────

export const CONTACT = {
  phone: null,
  phoneRaw: null,
  email: "info@taxccounts.com",
  whatsappUrl: null,
  address: null,
  googleMapsUrl: null,
  officeHours: {
    ist: "Monday – Saturday, 9:30 AM – 6:30 PM IST",
    usEastern: "By Appointment",
    usPacific: "By Appointment",
  },
  paymentMethods:
    "Bank Transfer, UPI, Razorpay and international wire transfer. Invoices are issued electronically with secure payment instructions.",
  meetingFormat:
    "Consultations are available in person and virtually via Zoom or Google Meet. Secure document exchange is available through our client portal.",
} as const;

// ─── Booking / Portal ────────────────────────────────────────────────────────

export const BOOKING = {
  calComUrl: "/contact",
  calComEmbedUrl: null,
} as const;

export const PORTAL = {
  name: "Secure Client Portal",
  url: null,
  label: "Client Portal",
  description:
    "Securely upload documents, exchange messages and review engagement files online.",
} as const;

// ─── Countries Served ────────────────────────────────────────────────────────

export const COUNTRIES = [
  { name: "India", code: "IN", flag: "🇮🇳" },
  { name: "USA", code: "US", flag: "🇺🇸" },
  { name: "Canada", code: "CA", flag: "🇨🇦" },
  { name: "United Kingdom", code: "GB", flag: "🇬🇧" },
  { name: "United Arab Emirates", code: "AE", flag: "🇦🇪" },
  { name: "Australia", code: "AU", flag: "🇦🇺" },
  { name: "Singapore", code: "SG", flag: "🇸🇬" },
] as const;

export const COUNTRIES_SERVED_TEXT =
  "India, USA, Canada, United Kingdom, United Arab Emirates, Australia & Singapore";

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
    startingPrice: "₹10,000",
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
    startingPrice: "$250/month",
    priceCurrency: "USD",
  },
  {
    slug: "virtual-cfo",
    title: "Virtual CFO Services",
    shortTitle: "Virtual CFO",
    description:
      "Strategic financial guidance — cash flow forecasting, fundraising support, board-ready reporting, and KPI dashboards — without the cost of a full-time CFO.",
    icon: "TrendingUp",
    startingPrice: "$750/month",
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

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  service?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Filing taxes in two countries used to take weeks of back-and-forth. TAXCCOUNTS PRO turned it into one phone call.",
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
  { label: "Years in Practice", value: "1+", icon: "Award" },
  { label: "NRI Returns Filed", value: "2,500+", icon: "FileCheck" },
  { label: "Countries Served", value: "7", icon: "Globe2" },
  { label: "Client Retention Rate", value: "94%", icon: "Users" },
] as const;

// ─── Pricing (Placeholder Ranges) ───────────────────────────────────────────

export const PRICING = {
  nriItrFiling: {
    label: "NRI ITR Filing",
    startingAt: "₹10,000",
    note: "Single ITR with salary/rental/interest income. Complex returns (capital gains, multiple properties, DTAA credits) quoted after review.",
  },
  bookkeeping: {
    label: "Outsourced Bookkeeping",
    startingAt: "$250/month",
    note: "Up to 200 transactions/month with monthly P&L and balance sheet. Higher volumes quoted separately.",
  },
  virtualCfo: {
    label: "Virtual CFO",
    startingAt: "$750/month",
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
  siteName: "TAXCCOUNTS PRO",
  defaultTitle:
    "TAXCCOUNTS PRO — Accounting, Taxation & Global Compliance for Businesses, Startups and NRIs",
  defaultDescription:
    "TAXCCOUNTS PRO helps businesses, startups, SMEs and NRIs with accounting, taxation, audit, payroll, compliance and cross-border advisory. We combine technology with expert guidance to deliver timely, accurate and practical financial solutions for clients across India and overseas.",
  defaultKeywords: [
    "TAXCCOUNTS PRO",
    "accounting outsourcing India",
    "NRI tax filing India",
    "cross border taxation",
    "virtual CFO India",
    "startup advisory India",
    "corporate compliance India",
  ],
  ogImage: "/og-image.png",
  locale: "en_IN",
} as const;

// ─── Analytics ───────────────────────────────────────────────────────────────

export const ANALYTICS = {
  plausibleDomain: "taxccounts.com",
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
