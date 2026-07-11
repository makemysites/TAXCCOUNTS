/**
 * Services Data — Detailed content for each service sub-page.
 * Imports from firm-content.ts for shared data.
 */

import { SERVICES, BOOKING, CONTACT } from "./firm-content";

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface ServiceFAQItem {
  question: string;
  answer: string;
}

export interface ServicePageData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  whatItSolves: string;
  whoItsFor: string[];
  process: ServiceProcess[];
  faq: ServiceFAQItem[];
  pricingNote: string | null;
  ctaText: string;
}

export const SERVICE_PAGES: Record<string, ServicePageData> = {
  "nri-taxation": {
    slug: "nri-taxation",
    title: "NRI Taxation & ITR Filing",
    metaTitle: "NRI Tax Filing & ITR Services | CA for NRIs in USA, UK, Canada",
    metaDescription:
      "Accurate ITR filing for NRIs with Indian income — rental, capital gains, interest. DTAA credits applied correctly. Starting at ₹15,000. Book a free consultation.",
    heroSubtitle:
      "You live abroad. You still have income in India. You need one advisor who handles your Indian returns correctly — and coordinates with your US or UK return so nothing falls through the cracks.",
    whatItSolves: `Most NRIs either miss filing deadlines because no one's tracking them, or overpay because their Indian CA doesn't understand the DTAA credits they're entitled to.

We handle the full cycle: determine your residential status under Section 6, compute income under the right heads, apply treaty benefits, file on time, and send you a clear summary you can hand to your US CPA if needed.

No back-and-forth over WhatsApp at midnight. No guessing whether that Bengaluru rental flat counts as a taxable asset. One call, one team, done.`,
    whoItsFor: [
      "NRIs in the US, UK, Canada, or UAE with rental income from Indian property",
      "NRIs with capital gains from selling property or mutual funds in India",
      "NRIs with Indian salary arrears, EPF withdrawals, or interest income",
      "Returning NRIs (RNORs) navigating the transition year",
    ],
    process: [
      {
        step: 1,
        title: "Free Initial Call",
        description:
          "A 20-minute video call to understand your situation — income sources, residential status, prior filings. No charge, no obligation.",
      },
      {
        step: 2,
        title: "Document Collection",
        description:
          "We send you a checklist and a secure portal link. Upload Form 16, AIS, bank statements, and property documents — never over email.",
      },
      {
        step: 3,
        title: "Computation & DTAA Review",
        description:
          "We compute your income, apply the correct residential status, claim DTAA credits where applicable, and prepare the return.",
      },
      {
        step: 4,
        title: "Review & Sign",
        description:
          "You review the computation statement on a video call. Once approved, we file electronically and send you the acknowledgment.",
      },
      {
        step: 5,
        title: "Post-Filing Support",
        description:
          "We monitor for processing, handle any notices from the IT department, and provide a summary you can share with your overseas tax advisor.",
      },
    ],
    faq: [
      {
        question: "Do I need to file in India even if I have no income there?",
        answer:
          "If your total Indian income exceeds ₹2.5 lakh in a financial year, yes. Even below that threshold, filing can be useful for claiming TDS refunds or establishing a clean compliance record.",
      },
      {
        question: "How do you determine my residential status?",
        answer:
          "We count your days in India under Section 6 of the Income Tax Act. NRI, Resident, and RNOR each have different tax implications — we'll walk you through it in the initial call.",
      },
      {
        question: "Can you coordinate with my US CPA?",
        answer:
          "Absolutely. We provide a summary of your Indian return that your US CPA can use to claim foreign tax credits on your 1040. We can also speak directly with your CPA if needed.",
      },
      {
        question: "How do DTAA benefits apply to my situation?",
        answer:
          "The India–US DTAA (and similar treaties with the UK, Canada, and UAE) can reduce or eliminate double taxation on specific income types. We identify which articles apply and ensure the credits are claimed on both sides.",
      },
      {
        question: "What documents do I need to send?",
        answer:
          "At minimum: Form 16/16A (if applicable), Annual Information Statement (AIS), bank statements for Indian accounts, property purchase/sale deeds (if applicable), and your passport for residency calculation.",
      },
    ],
    pricingNote:
      "NRI ITR filing starts at ₹15,000 for straightforward returns (salary/interest/single rental property). Complex returns involving capital gains, multiple properties, or DTAA credit coordination are quoted after the initial review — the first call is always free.",
    ctaText: "Get Your NRI Return Filed Correctly",
  },

  "cross-border-tax": {
    slug: "cross-border-tax",
    title: "US–India Cross-Border Tax Planning (DTAA)",
    metaTitle:
      "US–India Cross-Border Tax Planning | DTAA Advisory | Chartered Accountant",
    metaDescription:
      "Legally minimize your tax burden across India and the US using DTAA provisions. Expert cross-border tax planning for NRIs and businesses with ties to both countries.",
    heroSubtitle:
      "You shouldn't pay tax twice on the same income. The India–US Double Tax Avoidance Agreement exists to prevent that — but only if someone structures your affairs to use it correctly.",
    whatItSolves: `Cross-border taxation is where most advisors — even good ones — drop the ball. Your Indian CA files your Indian return. Your US CPA files your 1040. Neither one coordinates with the other, and you end up paying more than you owe because DTAA credits weren't claimed, or were claimed incorrectly.

We sit in the middle. We understand both tax codes, both filing timelines, and the treaty provisions that connect them. We structure your income, investments, and repatriation so that every dollar or rupee is taxed once — in the jurisdiction that gives you the better rate.

This isn't tax evasion. It's using the legal framework both countries agreed to. We just make sure you actually use it.`,
    whoItsFor: [
      "NRIs with significant assets or income in both India and the US/UK",
      "US citizens or Green Card holders with Indian investments",
      "Indian entrepreneurs with US subsidiaries or clients",
      "Families planning cross-border estate and succession matters",
    ],
    process: [
      {
        step: 1,
        title: "Comprehensive Review",
        description:
          "We map your complete financial picture across both countries — income sources, assets, investments, and existing tax positions.",
      },
      {
        step: 2,
        title: "Treaty Analysis",
        description:
          "We identify which DTAA articles apply to each income stream and calculate the optimal credit structure.",
      },
      {
        step: 3,
        title: "Planning & Restructuring",
        description:
          "We recommend structural changes — timing of income, investment vehicles, repatriation strategies — to minimize total cross-border tax.",
      },
      {
        step: 4,
        title: "Coordinated Filing",
        description:
          "We file your Indian returns and provide detailed working papers to your US CPA. If you don't have a US CPA, we can refer one from our network.",
      },
      {
        step: 5,
        title: "Ongoing Advisory",
        description:
          "Tax laws change. We review your cross-border position annually and adjust the strategy as needed.",
      },
    ],
    faq: [
      {
        question: "What is the DTAA and how does it help me?",
        answer:
          "The Double Tax Avoidance Agreement between India and the US (and similar treaties with other countries) allocates taxing rights on different types of income. It ensures you're not taxed twice — you get credit in one country for tax paid in the other.",
      },
      {
        question: "Do I need this if I already have a CPA in the US?",
        answer:
          "Most US CPAs handle the US side well but don't have deep knowledge of Indian tax law or treaty provisions. We bridge that gap — we can work alongside your existing CPA.",
      },
      {
        question: "Can you help with FBAR and FATCA reporting?",
        answer:
          "We advise on the Indian-side implications. For the actual FBAR/FATCA filing (which is a US obligation), we coordinate with your US CPA or can refer you to one who specializes in it.",
      },
      {
        question: "Is this legal? It sounds like tax avoidance.",
        answer:
          "It's fully legal. The DTAA was negotiated between the two governments specifically to prevent double taxation. We're using the framework both countries agreed to — nothing aggressive or grey-area.",
      },
    ],
    pricingNote:
      "Cross-border tax planning is quoted after an initial consultation, because the complexity varies significantly. The first call is always free. ⚠️ Specific DTAA and tax planning advice in this section should be reviewed by the CA before publishing.",
    ctaText: "Stop Paying Tax Twice",
  },

  bookkeeping: {
    slug: "bookkeeping",
    title: "Outsourced Bookkeeping for Foreign Businesses",
    metaTitle:
      "Outsourced Bookkeeping for US & UK Businesses | From $300/month",
    metaDescription:
      "Reliable, offshore bookkeeping for US and UK businesses. Monthly P&L, balance sheet, and reconciliations delivered on time. No chasing required. From $300/month.",
    heroSubtitle:
      "You run a business in the US or UK. You need someone to keep the books clean, close them on time every month, and not require constant supervision. That's us.",
    whatItSolves: `Most small US businesses either do bookkeeping themselves (badly), hire a local bookkeeper who charges $60–80/hour, or use an offshore team that needs constant hand-holding.

We're the third option done right. You get a dedicated team that knows US GAAP, closes your books by the 10th of every month, and delivers a P&L and balance sheet without you asking. If something looks off — an unusual charge, a missing invoice — we flag it proactively instead of waiting for you to notice.

Our clients tell us the best part is what they don't have to do: no chasing, no reminders, no surprises at tax time.`,
    whoItsFor: [
      "US small businesses spending too much time on their own books",
      "Startups that need clean books for investors but can't justify a full-time hire",
      "UK businesses looking for cost-effective, reliable bookkeeping",
      "E-commerce businesses with high transaction volumes",
    ],
    process: [
      {
        step: 1,
        title: "Setup & Onboarding",
        description:
          "We connect to your accounting software (QuickBooks, Xero, or equivalent), review your chart of accounts, and establish the monthly workflow.",
      },
      {
        step: 2,
        title: "Monthly Close",
        description:
          "We categorize transactions, reconcile bank and credit card accounts, and close the books by the 10th of the following month.",
      },
      {
        step: 3,
        title: "Reporting",
        description:
          "You receive a P&L, balance sheet, and cash flow summary every month. No asking — it just shows up.",
      },
      {
        step: 4,
        title: "Tax-Season Prep",
        description:
          "When your CPA or tax preparer needs the year-end package, it's already done. No scrambling.",
      },
    ],
    faq: [
      {
        question: "What accounting software do you work with?",
        answer:
          "We work with QuickBooks Online, Xero, Zoho Books, and FreshBooks. If you use something else, we can likely adapt — ask us.",
      },
      {
        question: "How do you handle the time zone difference?",
        answer:
          "Our team works IST hours, which means your books are being worked on while you sleep. Any questions or flags go into a shared channel — you see them when your day starts.",
      },
      {
        question: "What if I have more than 200 transactions a month?",
        answer:
          "The $300/month starting price covers up to 200 transactions. Higher volumes are priced per-transaction above that — we'll quote it upfront.",
      },
      {
        question: "Do you handle payroll?",
        answer:
          "We handle payroll journal entries and reconciliation. For actual payroll processing (running pay, tax withholding, filings), we recommend Gusto or ADP and integrate with them.",
      },
    ],
    pricingNote:
      "Outsourced bookkeeping starts at $300/month for up to 200 transactions. Includes monthly P&L, balance sheet, and bank reconciliation. Higher volumes and add-on services (AP/AR management, invoicing) priced separately.",
    ctaText: "Get Your Books Off Your Plate",
  },

  "virtual-cfo": {
    slug: "virtual-cfo",
    title: "Virtual CFO Services",
    metaTitle:
      "Virtual CFO Services for Growing Businesses | Strategic Finance from $800/month",
    metaDescription:
      "CFO-level financial strategy without the full-time cost. Cash flow forecasting, fundraising support, board reporting, and KPI dashboards. From $800/month.",
    heroSubtitle:
      "Your business has outgrown bookkeeping but isn't ready for a $200K/year CFO. You need someone who can build the financial models, talk to investors, and tell you where the cash is going.",
    whatItSolves: `A bookkeeper records what happened. A CFO helps you decide what should happen next.

If you're raising a round, your investors will expect board-ready financials, a 13-week cash flow forecast, and KPI dashboards that aren't cobbled together in a spreadsheet the night before. If you're not raising, you still need someone who can spot a cash crunch three months out or tell you whether that new hire actually makes financial sense.

That's what a Virtual CFO does — but at a fraction of the cost of a full-time hire, and with the flexibility to scale up or down as your needs change.`,
    whoItsFor: [
      "Startups preparing for fundraising who need investor-ready financials",
      "Growing businesses that have outgrown bookkeeper-level financial management",
      "Companies navigating a cash flow crunch or rapid growth",
      "Founders who want a strategic finance partner, not just a number-cruncher",
    ],
    process: [
      {
        step: 1,
        title: "Financial Assessment",
        description:
          "We review your current financial setup, identify gaps, and build a 90-day roadmap for the engagement.",
      },
      {
        step: 2,
        title: "Systems & Dashboards",
        description:
          "We set up KPI dashboards, cash flow models, and reporting templates tailored to your business and your stakeholders.",
      },
      {
        step: 3,
        title: "Monthly Strategy Call",
        description:
          "A dedicated call to review financials, discuss upcoming decisions, and adjust forecasts.",
      },
      {
        step: 4,
        title: "Ongoing Support",
        description:
          "We're available between calls for ad-hoc questions, investor prep, board materials, and financial modeling.",
      },
    ],
    faq: [
      {
        question: "What's the difference between a Virtual CFO and a bookkeeper?",
        answer:
          "A bookkeeper records transactions and produces financial statements. A CFO interprets those numbers, builds forecasts, advises on strategy, and represents the financial side of your business to investors and the board. We can do both if you don't already have a bookkeeper.",
      },
      {
        question: "How much time do you spend on my business each month?",
        answer:
          "The base tier includes 8–10 hours/month: a monthly financial review, one strategy call, and async support. Higher tiers include more hours for fundraising support, board prep, and hands-on modeling.",
      },
      {
        question: "Can you help with fundraising?",
        answer:
          "Yes. We build the financial model, prepare the data room, and can join investor calls to handle financial Q&A. This typically falls under our higher-tier packages.",
      },
      {
        question: "Do I need to switch my accounting software?",
        answer:
          "No. We work with whatever you already use — QuickBooks, Xero, or even spreadsheets. We'll recommend upgrades only if your current setup genuinely can't support the reporting you need.",
      },
    ],
    pricingNote:
      "Virtual CFO services start at $800/month. Includes monthly financial review, cash flow forecasting, KPI dashboard, and one strategy call. Board reporting, fundraising support, and additional modeling hours available at higher tiers.",
    ctaText: "Get a CFO Without the Full-Time Cost",
  },

  "fdi-advisory": {
    slug: "fdi-advisory",
    title: "FDI Advisory & Company Incorporation",
    metaTitle:
      "FDI Advisory & Company Incorporation in India | FEMA Compliance",
    metaDescription:
      "Setting up a business in India? We handle FEMA compliance, RBI approvals, entity structuring, and regulatory filings. Free initial assessment.",
    heroSubtitle:
      "You want to set up or invest in an Indian entity. The regulatory framework — FEMA, RBI, Companies Act — is navigable, but only if someone who's done it before is steering. ⚠️ Content in this section should be reviewed by the CA before publishing.",
    whatItSolves: `Foreign direct investment into India comes with a regulatory layer that catches most businesses off guard. Which sectors allow 100% FDI? Which require government approval? What are the RBI reporting timelines? How do you repatriate profits without violating FEMA?

We've helped US, UK, and UAE businesses set up Indian subsidiaries, joint ventures, and branch offices. We handle the entity structuring, incorporate the company, file the necessary RBI and FEMA returns, and keep you compliant on an ongoing basis.

The goal is simple: you focus on the business opportunity, we handle the regulatory machinery.`,
    whoItsFor: [
      "Foreign companies setting up an Indian subsidiary or branch office",
      "NRIs investing in Indian businesses or real estate through proper channels",
      "Joint ventures between Indian and foreign partners",
      "Startups with foreign founders incorporating in India",
    ],
    process: [
      {
        step: 1,
        title: "Sector & Structure Analysis",
        description:
          "We assess FDI eligibility for your sector, recommend the optimal entity structure (subsidiary, LLP, branch, JV), and outline the regulatory path.",
      },
      {
        step: 2,
        title: "Incorporation",
        description:
          "We handle the Companies Act filings, obtain DIN/DSC for directors, and get the entity registered with MCA, GST, PAN, and TAN.",
      },
      {
        step: 3,
        title: "RBI & FEMA Compliance",
        description:
          "We file the required FC-GPR / FC-TRS forms with the RBI, ensure FEMA compliance, and set up the reporting calendar.",
      },
      {
        step: 4,
        title: "Ongoing Compliance",
        description:
          "Annual filings, RBI returns, transfer pricing documentation (if applicable), and board meeting compliance — handled on a retainer basis.",
      },
    ],
    faq: [
      {
        question: "Can a US company own 100% of an Indian subsidiary?",
        answer:
          "In most sectors, yes — India allows 100% FDI under the automatic route for many industries. Some sectors (defense, media, insurance) have caps or require government approval. We'll tell you exactly where your business falls.",
      },
      {
        question: "How long does incorporation take?",
        answer:
          "Typically 15–25 business days from document submission to certificate of incorporation, assuming all documents are in order. We handle the entire process.",
      },
      {
        question: "What is FEMA and why does it matter?",
        answer:
          "The Foreign Exchange Management Act governs all cross-border transactions involving Indian entities. Non-compliance can result in penalties and restrictions on repatriation. We ensure every transaction is FEMA-compliant.",
      },
      {
        question: "Can you help repatriate profits from India?",
        answer:
          "Yes. We structure dividend distributions, royalty payments, and inter-company transactions to be compliant with FEMA, transfer pricing rules, and DTAA provisions. ⚠️ Specific repatriation advice should be reviewed by the CA.",
      },
    ],
    pricingNote:
      "FDI advisory and incorporation are priced based on entity structure and sector complexity. Initial assessment is free — book a call and we'll scope it out.",
    ctaText: "Set Up Your Indian Business the Right Way",
  },
};

export function getServicePage(slug: string): ServicePageData | undefined {
  return SERVICE_PAGES[slug];
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(SERVICE_PAGES);
}

// Related services and blog guides shown at the bottom of each service page.
export const SERVICE_RELATED: Record<string, { services: string[]; posts: string[] }> = {
  "nri-taxation": {
    services: ["cross-border-tax", "fdi-advisory"],
    posts: ["nri-itr-filing-guide", "documents-checklist-nri"],
  },
  "cross-border-tax": {
    services: ["nri-taxation", "virtual-cfo"],
    posts: ["dtaa-benefits-explained", "us-tax-filing-guide-non-resident-business"],
  },
  bookkeeping: {
    services: ["virtual-cfo", "cross-border-tax"],
    posts: ["financial-planning-tips-startups", "us-tax-filing-guide-non-resident-business"],
  },
  "virtual-cfo": {
    services: ["bookkeeping", "fdi-advisory"],
    posts: ["financial-planning-tips-startups", "step-by-step-register-private-limited-company"],
  },
  "fdi-advisory": {
    services: ["cross-border-tax", "bookkeeping"],
    posts: ["step-by-step-register-private-limited-company", "us-tax-filing-guide-non-resident-business"],
  },
};
