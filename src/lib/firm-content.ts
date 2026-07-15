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
    "Associate Certified Practising Accountant (ACPA Australia)",
    "Associate Certified Management Accountant (ACMA Australia)",
    "Master of Commerce (M.Com)",
    "Bachelor of Commerce (B.Com)",
    "GST Practitioner – Government of India",
  ],
  specializations: [
    "International Taxation & Cross-Border Advisory",
    "Financial Reporting (IFRS, Ind AS & Global Standards)",
    "Corporate Tax, GST & Regulatory Advisory",
    "Audit, Assurance & Internal Controls",
    "Virtual CFO & Strategic Finance",
    "Financial Planning, Budgeting & FP&A",
    "Business Structuring & Global Expansion",
    "Corporate Governance & Regulatory Compliance",
    "Transfer Pricing & International Transactions",
    "Mergers, Acquisitions & Financial Due Diligence",
    "Enterprise Risk Management",
    "ERP Implementation & Finance Transformation",
    "Startup, SME & Investor Advisory",
  ],
  memberships: [
    "ACPA (Australia)",
    "ACMA (Australia)",
  ],
  bio: `Dinesh Singathi is the Founder and Managing Director of Taxccounts Pro India Private Limited, bringing over 13 years of professional experience in accounting, taxation, audit, corporate finance, financial reporting, regulatory compliance, and strategic business advisory. He founded the firm with a clear objective — to make professional financial services accessible, technology-driven, and responsive for businesses and individuals across the globe.

With internationally recognized qualifications and deep cross-border expertise, Dinesh has advised startups, SMEs, multinational corporations, and high-net-worth individuals across India, the United States, Canada, the United Kingdom, the UAE, Australia, and beyond. His practical, commercially focused approach enables clients to make confident decisions while maintaining the highest standards of compliance and financial integrity.`,
  photoUrl: "/images/team_dinesh.png",
} as const;

// ─── Directors ───────────────────────────────────────────────────────────────

export interface Director {
  name: string;
  role: string;
  desc: string;
  image: string;
  bio: string[];
  specializations: string[];
  qualifications: string[];
}

export const DIRECTORS: Director[] = [
  {
    name: "Dinesh Singathi",
    role: "Founder & Managing Director",
    desc: "Founder of Taxccounts Pro with 13+ years of experience in international taxation, financial reporting, audit, and Virtual CFO services.",
    image: "/images/team_dinesh.png",
    bio: [
      "Dinesh Singathi is the Founder and Managing Director of Taxccounts Pro India Private Limited, bringing over 13 years of professional experience in accounting, taxation, audit, corporate finance, financial reporting, regulatory compliance, and strategic business advisory. Having studied at the Institute of Chartered Accountants of India (ICAI) and complemented by internationally recognized professional qualifications, he possesses extensive expertise in helping businesses navigate complex financial, regulatory, and cross-border challenges.",
      "Over the course of his career, Dinesh has advised startups, SMEs, multinational corporations, family-owned businesses, and high-net-worth individuals across India, the United States, Canada, the United Kingdom, the UAE, Australia, and other international markets. His experience spans financial reporting under IFRS and Ind AS, international taxation, corporate structuring, audit and assurance, Virtual CFO services, business valuations, financial planning, governance, enterprise risk management, and strategic finance.",
      "As a finance leader, he has successfully led multi-entity finance operations, implemented digital finance transformation and ERP solutions, established robust governance and internal control frameworks, and advised organizations on business expansion, regulatory compliance, and long-term value creation. His practical, commercially focused approach enables clients to make confident business decisions while maintaining the highest standards of compliance and financial integrity.",
      "Under his leadership, Taxccounts Pro has evolved into a modern professional services firm delivering integrated accounting, taxation, advisory, and compliance solutions to businesses operating in an increasingly global economy."
    ],
    specializations: [
      "International Taxation & Cross-Border Advisory",
      "Financial Reporting (IFRS, Ind AS & Global Accounting Standards)",
      "Corporate Tax, GST & Regulatory Advisory",
      "Audit, Assurance & Internal Controls",
      "Virtual CFO & Strategic Finance",
      "Financial Planning, Budgeting & FP&A",
      "Business Structuring & Global Expansion Advisory",
      "Corporate Governance & Regulatory Compliance",
      "Transfer Pricing & International Transactions",
      "Mergers, Acquisitions & Financial Due Diligence",
      "Enterprise Risk Management",
      "ERP Implementation & Finance Transformation",
      "Startup, SME & Investor Advisory"
    ],
    qualifications: [
      "Associate Certified Practising Accountant (ACPA Australia)",
      "Associate Certified Management Accountant (ACMA Australia)",
      "Master of Commerce (M.Com)",
      "Bachelor of Commerce (B.Com)",
      "GST Practitioner Certificate"
    ]
  },
  {
    name: "Deepak Singathi",
    role: "Director",
    desc: "Director at Taxccounts Pro with 5+ years of international experience in FP&A, business intelligence, financial modeling, and digital finance transformation.",
    image: "/images/team_deepak.png",
    bio: [
      "Deepak Singathi is a Director at Taxccounts Pro India Private Limited, bringing over 5 years of international experience in financial analysis, corporate finance, business intelligence, strategic planning, and digital finance transformation. Holding a Master's degree in Finance from the University of Dayton, Ohio, USA, he combines strong analytical expertise with a technology-driven approach to help organizations make informed financial and strategic decisions.",
      "Before joining Taxccounts Pro, Deepak worked on high-impact financial transformation and analytics engagements for globally recognized financial institutions, including Capital One and American Express, where he specialized in capital markets, wealth management, financial modeling, credit risk, pricing strategies, business intelligence, and regulatory reporting. His experience spans the full spectrum of financial analysis, data-driven decision-making, process optimization, and enterprise reporting.",
      "At Taxccounts Pro, Deepak plays a key role in advising businesses on financial planning, business performance, investment analysis, budgeting, forecasting, profitability enhancement, and digital finance transformation. He works closely with clients to develop scalable financial strategies, implement modern accounting technologies, strengthen reporting frameworks, and deliver actionable insights that support sustainable business growth.",
      "With expertise in financial analytics, business intelligence, automation, and strategic finance, Deepak helps organizations leverage data and technology to improve operational efficiency, enhance financial performance, and support informed executive decision-making in today's evolving global business environment."
    ],
    specializations: [
      "Financial Planning & Analysis (FP&A)",
      "Business Intelligence & Data Analytics",
      "Financial Modeling & Valuation",
      "Capital Markets & Investment Analysis",
      "Wealth Management & Portfolio Analytics",
      "Business Strategy & Performance Management",
      "Budgeting, Forecasting & Profitability Analysis",
      "Virtual CFO Support",
      "Digital Finance Transformation",
      "ERP Implementation & Process Automation",
      "Business Process Optimization",
      "Dashboard Development (Power BI & Tableau)",
      "Financial Risk Analysis & Regulatory Reporting",
      "Management Information Systems (MIS)"
    ],
    qualifications: [
      "Master of Finance (University of Dayton, Ohio, USA)",
      "Certified Business Analysis Professional (CBAP)",
      "Bachelor of Business Administration (BBA)"
    ]
  }
];

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
  { label: "Returns Filed", value: "500+", icon: "FileCheck" },
  { label: "Countries Served", value: "7", icon: "Globe2" },
  { label: "Client Satisfaction", value: "99%", icon: "Users" },
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
