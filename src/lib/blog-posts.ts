/**
 * Blog Posts Data — Sample blog content for the resources section.
 */

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  content: string; // Rich text content (rendered as HTML)
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "latest-gst-updates-india",
    title: "Latest GST Updates and Compliance Changes in India",
    metaTitle: "Latest GST Updates & Compliance Changes in India | FY 2026-27",
    metaDescription: "Stay updated with the latest GST rate changes, compliance requirements, GSTR filing updates, and input tax credit rules in India.",
    excerpt: "Understand the newest GST notifications, rate adjustments, and compliance changes in India for businesses and service providers.",
    date: "2026-06-18",
    author: "Dinesh Singathi",
    category: "GST",
    readTime: "5 min read",
    content: `
<h2>Recent GST Notification Updates</h2>
<p>The GST Council has introduced several key compliance changes aimed at streamlining tax administration, reducing disputes, and promoting ease of doing business. For service providers, traders, and manufacturing firms, understanding these updates is critical to avoid interest, penalties, and blocked input tax credits.</p>

<h2>Key Changes in Input Tax Credit (ITC) Rules</h2>
<p>One of the most significant changes revolves around Rule 36(4) and the strict matching of ITC with GSTR-2B. Under the updated regulations:</p>
<ul>
<li><strong>No Invoice, No ITC:</strong> Taxpayers can only claim ITC if the corresponding invoice has been uploaded by the supplier in their GSTR-1 and is reflected in the recipient's GSTR-2B.</li>
<li><strong>Vendor Compliance:</strong> Keeping track of compliant vendors is now more critical than ever. If your supplier fails to file GSTR-1, your ITC will be blocked, causing direct cash flow issues.</li>
</ul>

<h2>E-Invoicing Expansion</h2>
<p>E-invoicing has been made mandatory for businesses with an aggregate turnover exceeding ₹5 crore in any preceding financial year. This integration ensures real-time reporting of B2B transactions to the GST portal, reducing manual GSTR-1 entry errors and matching discrepancies.</p>

<h2>Filing Due Dates and Penalties</h2>
<p>Always file GSTR-1 by the 11th of the succeeding month (for monthly filers) and GSTR-3B by the 20th. Late fees accrue daily, and consistently delayed filing can result in the suspension of your GST registration. Make sure to audit your ledgers monthly to reconcile any mismatch before filing returns.</p>
    `,
  },
  {
    slug: "income-tax-slab-changes-india",
    title: "Income Tax Slab Changes: What You Need to Know",
    metaTitle: "Income Tax Slab Changes & Budget Updates | TAXCCOUNTS",
    metaDescription: "Get a clear guide to the latest Indian income tax slabs, comparing the New Tax Regime vs Old Tax Regime and outlining rebates.",
    excerpt: "A detailed breakdown of the new tax regime versus the old tax regime, income tax slab updates, and rebate eligibility rules.",
    date: "2026-06-05",
    author: "Dinesh Singathi",
    category: "Income Tax",
    readTime: "6 min read",
    content: `
<h2>New Tax Regime vs. Old Tax Regime</h2>
<p>Choosing between the Old and New tax regimes remains a critical decision for every taxpayer in India. The government has restructured the New Tax Regime to make it the default option, providing lower tax rates but removing most exemptions like HRA, LTA, and Section 80C deductions.</p>

<h2>Slab Structure Under the New Tax Regime (AY 2026-27)</h2>
<p>The revised slabs under the New Tax Regime are:</p>
<ul>
<li><strong>Up to ₹4,00,000:</strong> Nil</li>
<li><strong>₹4,00,001 to ₹8,00,000:</strong> 5%</li>
<li><strong>₹8,00,001 to ₹12,00,000:</strong> 10%</li>
<li><strong>₹12,00,001 to ₹16,00,000:</strong> 15%</li>
<li><strong>₹16,00,001 to ₹20,00,000:</strong> 20%</li>
<li><strong>₹20,00,001 to ₹24,00,000:</strong> 25%</li>
<li><strong>Above ₹24,00,000:</strong> 30%</li>
</ul>

<h2>Standard Deduction and Rebate</h2>
<p>Under the New Tax Regime, a standard deduction of ₹75,000 is allowed for salaried individuals. Furthermore, the tax rebate under Section 87A has been increased, meaning individuals with a taxable income of up to ₹12,00,000 (₹12,75,000 for salaried taxpayers after the standard deduction) pay zero income tax under the New Regime.</p>

<h2>Which Regime Should You Choose?</h2>
<p>For individuals with substantial investments in tax-saving instruments (PPF, ELSS, Insurance, Home Loan Interest under Section 24), the Old Tax Regime may still be beneficial. However, for those looking for simpler compliance without locking up capital in long-term investments, the New Tax Regime is highly attractive. Speak to us for a custom comparative report based on your numbers.</p>
    `,
  },
  {
    slug: "us-tax-filing-guide-non-resident-business",
    title: "US Tax Filing Guide for Non-Resident Business Owners",
    metaTitle: "US LLC Tax Guide for Non-US Residents | Form 5472 & 1120",
    metaDescription: "Essential tax guide for non-US residents owning US LLCs. Learn about Form 5472, Form 1120, and how to stay compliant with the IRS.",
    excerpt: "Essential tax filing requirements for non-US residents owning US LLCs or C-Corps. Learn about Form 5472, Form 1120, and withholding rules.",
    date: "2026-05-22",
    author: "Dinesh Singathi",
    category: "USA Tax",
    readTime: "7 min read",
    content: `
<h2>US LLC Structure for Non-US Residents</h2>
<p>Forming a US LLC (Limited Liability Company) is highly popular among global consultants, e-commerce sellers, and software development agencies. However, being a non-resident owner brings specific tax disclosure requirements that can carry heavy penalties if ignored.</p>

<h2>Form 5472 and pro-forma Form 1120</h2>
<p>If you own a Single-Member US LLC that is disregarded for tax purposes, and you are a non-US resident, the IRS classifies your LLC as a Foreign-Owned Disregarded Entity. This mandates filing:</p>
<ul>
<li><strong>Form 5472:</strong> Information return of a 25% foreign-owned US corporation or a foreign-owned US disregarded entity.</li>
<li><strong>Form 1120:</strong> US Corporation Income Tax Return (only a pro-forma version with basic LLC details).</li>
</ul>
<p><strong>Crucial Warning:</strong> The penalty for failing to file Form 5472 on time is a staggering $25,000 per year. Even if your LLC had zero US source income, you must still file this information disclosure form if there was any 'reportable transaction' (including forming the LLC, capital contributions, or paying administrative fees).</p>

<h2>Effectively Connected Income (ECI)</h2>
<p>Non-US residents are only subject to US income tax on income that is effectively connected with the conduct of a trade or business in the United States (ECI). If you do not have physical operations, employees, or dependent agents in the US, your income is typically not ECI and is not taxed in the US, but your filing requirements remain mandatory. We help founders structure their repatriation properly to ensure double-taxation credits are applied correctly.</p>
    `,
  },
  {
    slug: "step-by-step-register-private-limited-company",
    title: "Step by Step Guide to Register a Private Limited Company",
    metaTitle: "Register a Private Limited Company in India | Step-by-Step Guide",
    metaDescription: "A comprehensive guide to incorporating a Private Limited Company in India, covering DSC, DIN, SPICe+ form, and post-incorporation rules.",
    excerpt: "A complete walkthrough of registering a Private Limited Company in India. Covers DSC, DIN, SPICe+ form, and post-incorporation compliance.",
    date: "2026-04-30",
    author: "Dinesh Singathi",
    category: "Business",
    readTime: "8 min read",
    content: `
<h2>Why Choose a Private Limited Company?</h2>
<p>A Private Limited (Pvt Ltd) structure is the gold standard for startups and businesses aiming to raise venture capital or protect owners with limited liability. It offers a separate legal identity, ease of equity funding, and credibility with international clients.</p>

<h2>The Step-by-Step Registration Process</h2>
<p>The Ministry of Corporate Affairs (MCA) has streamlined incorporation under the SPICe+ web form. Here is the process:</p>
<ol>
<li><strong>Digital Signature Certificates (DSC):</strong> Obtain DSCs for all proposed directors. This is required to digitally sign the electronic incorporation forms.</li>
<li><strong>Director Identification Number (DIN):</strong> Applied for during the SPICe+ filing.</li>
<li><strong>Name Approval:</strong> Run a search on MCA to verify name availability. Apply for name reservation using the RUN (Reserve Unique Name) service or directly within Part A of SPICe+.</li>
<li><strong>SPICe+ Part B Incorporation:</strong> Fill out details regarding company address, capital structure, directors, and subscribers. Submit alongside electronic Memorandum of Association (eMOA) and Articles of Association (eAOA).</li>
<li><strong>PAN and TAN:</strong> Automatically generated along with the Certificate of Incorporation (COI).</li>
</ol>

<h2>Post-Incorporation Compliance Checklist</h2>
<p>Once incorporated, you must complete these compliance milestones within strict timelines:</p>
<ul>
<li><strong>Commencement of Business (Form INC-20A):</strong> Must be filed within 180 days of incorporation, showing proof that subscribers paid their share capital. Do not start business operations or borrow funds before this.</li>
<li><strong>Appointment of Auditor:</strong> The Board must appoint the company's first statutory auditor within 30 days of incorporation.</li>
<li><strong>Bank Account Opening:</strong> Open a corporate current account to receive capital contributions.</li>
</ul>
    `,
  },
  {
    slug: "financial-planning-tips-startups",
    title: "Financial Planning Tips for Startups in 2026",
    metaTitle: "Startup Financial Planning & Runway Management Tips | 2026",
    metaDescription: "Learn key financial planning tips for early-stage startups, including runway management, unit economics, and tax incentives.",
    excerpt: "Key financial strategies for early-stage startups. How to manage runway, plan cash flows, handle tax compliance, and structure investments.",
    date: "2026-05-12",
    author: "Dinesh Singathi",
    category: "Startup",
    readTime: "6 min read",
    content: `
<h2>Mastering Cash Runway & Burn Rate</h2>
<p>For early-stage startups, survival depends entirely on runway management. Your burn rate—the speed at which you spend cash—must be measured monthly. Knowing your exact runway (cash balance divided by net monthly burn) gives founders the visibility needed to time fundraising or adjust pricing.</p>

<h2>Set Up Professional Bookkeeping Early</h2>
<p>Waiting until tax season to organize your receipts is a recipe for disaster. Set up cloud-based accounting systems (like QuickBooks or Zoho Books) from day one. Clear bookkeeping not only ensures tax compliance but is also the first thing investors inspect during due diligence. Clean, board-ready reports build trust instantly.</p>

<h2>Optimize Unit Economics</h2>
<p>Scale doesn't fix broken unit economics. Understand your Customer Acquisition Cost (CAC) and Customer Lifetime Value (LTV). Focus on achieving a positive contribution margin early, ensuring that each transaction is profitable before spending heavily on growth marketing.</p>

<h2>Leverage Government Schemes and Tax Benefits</h2>
<p>In India, registering under the Startup India initiative unlocks huge benefits, including a 3-year income tax holiday (under Section 80-IAC) and exemptions from angel tax (under Section 56(2)(viib)). Similar R&D tax credits and state-level incentives exist in other countries. Our team helps startups navigate these applications to conserve capital.</p>
    `,
  },
  {
    slug: "nri-itr-filing-guide",
    title: "The NRI's Complete Guide to Filing ITR in India (AY 2026-27)",
    metaTitle: "NRI ITR Filing Guide AY 2026-27 | Step-by-Step for NRIs in the US & UK",
    metaDescription:
      "Step-by-step guide to filing your Indian income tax return as an NRI. Covers residential status, taxable income, DTAA credits, and common mistakes to avoid.",
    excerpt:
      "If you're an NRI with income in India — rental, interest, capital gains, or salary arrears — you probably need to file an ITR. Here's exactly how it works, what you need, and the mistakes that cost most NRIs money.",
    date: "2026-06-25",
    author: "Dinesh Singathi",
    category: "NRI Taxation",
    readTime: "8 min read",
    content: `
<h2>Do NRIs Need to File ITR in India?</h2>
<p>Short answer: if your total income in India exceeds ₹2.5 lakh in a financial year, yes. This includes rental income, interest on NRO/NRE deposits, capital gains from selling property or mutual funds, and salary arrears.</p>
<p>Even if your income is below the threshold, filing can make sense — it helps you claim TDS refunds and maintains a clean compliance record, which matters when you need to repatriate funds or apply for loans in India.</p>

<h2>Step 1: Determine Your Residential Status</h2>
<p>This is where most NRIs — and frankly, some CAs — get it wrong. Your residential status under Section 6 of the Income Tax Act determines which income is taxable in India.</p>
<ul>
<li><strong>NRI (Non-Resident Indian):</strong> Only Indian-sourced income is taxable in India.</li>
<li><strong>RNOR (Resident but Not Ordinarily Resident):</strong> Indian-sourced income is taxable; foreign income is not — but only for a limited transition period.</li>
<li><strong>Resident:</strong> Worldwide income is taxable in India.</li>
</ul>
<p>The calculation depends on how many days you spent in India during the financial year and the preceding years. Get this wrong, and everything downstream — your taxable income, your DTAA credits, your return — is wrong too.</p>

<h2>Step 2: Identify Your Taxable Income</h2>
<p>For most NRIs, the common income heads are:</p>
<ul>
<li><strong>House Property:</strong> Rental income from Indian property (after standard 30% deduction)</li>
<li><strong>Capital Gains:</strong> Profits from selling Indian property, stocks, or mutual funds</li>
<li><strong>Other Sources:</strong> Interest on NRO deposits, FD interest, dividend income</li>
<li><strong>Salary:</strong> If you received salary arrears or worked in India for part of the year</li>
</ul>

<h2>Step 3: Claim DTAA Benefits</h2>
<p>If you're paying tax in both India and the US (or UK, Canada, UAE), the Double Tax Avoidance Agreement ensures you don't pay twice. You're entitled to a credit in one country for tax paid in the other.</p>
<p>This is where having an advisor who understands both tax codes matters. Your Indian CA should compute the DTAA credit and provide documentation your US CPA can use on your 1040.</p>

<h2>Step 4: File and Follow Up</h2>
<p>NRI returns are typically filed online using the ITR-2 or ITR-3 form (depending on the income heads). The deadline for non-audit cases is July 31.</p>
<p>After filing, monitor for processing. If the IT department issues a notice or a demand, respond promptly — don't ignore it.</p>

<h2>Common Mistakes That Cost NRIs Money</h2>
<ul>
<li>Filing as a Resident when you're actually an NRI (or vice versa)</li>
<li>Missing DTAA credits — paying tax twice on the same income</li>
<li>Not claiming TDS refunds on NRO interest or property sale proceeds</li>
<li>Ignoring capital gains on mutual fund redemptions</li>
<li>Filing late and paying interest under Section 234A</li>
</ul>

<h2>Need Help?</h2>
<p>If your Indian tax situation involves multiple income sources, DTAA credits, or property transactions, it's worth having a CA who specializes in NRI returns handle it. We offer a free initial consultation — book a call and we'll walk through your situation.</p>
    `,
  },
  {
    slug: "dtaa-benefits-explained",
    title: "How the India–US DTAA Actually Works (Plain English)",
    metaTitle: "India–US DTAA Explained | Double Tax Avoidance for NRIs",
    metaDescription:
      "Plain-English explanation of how the India–US Double Tax Avoidance Agreement works, what income types it covers, and how NRIs can use it to avoid paying tax twice.",
    excerpt:
      "The India–US Double Tax Avoidance Agreement means you shouldn't pay tax on the same income in both countries. But 'shouldn't' and 'don't' are two different things. Here's how to make sure it actually works in your favor.",
    date: "2026-04-15",
    author: "Dinesh Singathi",
    category: "Cross-Border Tax",
    readTime: "6 min read",
    content: `
<h2>What Is the DTAA?</h2>
<p>The Double Tax Avoidance Agreement is a treaty between India and the US (similar treaties exist with the UK, Canada, UAE, and others) that allocates taxing rights on different types of income. Its purpose is simple: prevent the same income from being taxed twice.</p>
<p>It does this through two main mechanisms:</p>
<ul>
<li><strong>Tax credits:</strong> If you pay tax on income in one country, you can claim a credit for that tax in the other country.</li>
<li><strong>Exemptions:</strong> Certain types of income may be exempt from tax in one country entirely.</li>
</ul>

<h2>How Different Income Types Are Treated</h2>
<p>The DTAA doesn't treat all income the same. Here's a simplified overview:</p>
<ul>
<li><strong>Salary:</strong> Generally taxable in the country where the work is performed. If you work in the US, your salary is taxable there — not in India (unless you're a Resident for Indian tax purposes).</li>
<li><strong>Rental Income:</strong> Taxable in the country where the property is located. Your Bengaluru flat's rental income is taxable in India, but you get a credit when filing your US return.</li>
<li><strong>Interest:</strong> Can be taxed in both countries, but the DTAA typically caps the rate in the source country (often 10–15%). You claim a credit in your resident country.</li>
<li><strong>Capital Gains:</strong> Rules vary by asset type. Immovable property gains are taxable where the property is. Securities gains can be more complex.</li>
<li><strong>Dividends:</strong> Similar to interest — taxable in both, with treaty-rate caps and credits.</li>
</ul>

<h2>How to Actually Claim the Benefit</h2>
<p>Having a DTAA is one thing. Actually using it requires coordination between your Indian and US filings:</p>
<ol>
<li>File your Indian return and pay any tax due in India</li>
<li>Obtain documentation of Indian tax paid (TDS certificates, challan receipts)</li>
<li>On your US return (Form 1040), claim the Foreign Tax Credit using Form 1116</li>
<li>Alternatively, you can take the foreign tax as an itemized deduction — but the credit is almost always more beneficial</li>
</ol>
<p>The key mistake: filing the two returns independently, without coordination. When your Indian CA and US CPA don't talk to each other, credits get missed, timing mismatches create issues, and you end up paying more than you should.</p>

<h2>⚠️ Important Disclaimer</h2>
<p>This article provides a high-level overview of DTAA provisions and is not a substitute for personalized tax advice. Treaty interpretation depends on your specific facts and circumstances. Consult a qualified tax advisor before making decisions based on this information.</p>

<h2>Need a Second Opinion on Your Cross-Border Tax?</h2>
<p>If you're filing in both countries and not sure whether you're claiming the right credits, book a free consultation. We'll review your situation and tell you what you might be leaving on the table.</p>
    `,
  },
  {
    slug: "documents-checklist-nri",
    title: "Documents NRIs Need for ITR Filing: The Complete Checklist",
    metaTitle: "NRI ITR Filing Checklist | Documents Required for NRI Tax Return",
    metaDescription:
      "Complete checklist of documents NRIs need to file their Indian income tax return. Passport, Form 16, AIS, property documents, bank statements, and more.",
    excerpt:
      "Every year, NRI clients ask us the same question: 'What documents do I need to send?' Here's the complete checklist — save it, and you'll never scramble at filing time again.",
    date: "2026-05-02",
    author: "Dinesh Singathi",
    category: "NRI Taxation",
    readTime: "4 min read",
    content: `
<h2>Essential Documents (Everyone Needs These)</h2>
<ul>
<li><strong>Passport:</strong> For residency status calculation — we need the pages showing entry/exit stamps for the financial year</li>
<li><strong>PAN Card:</strong> Your Permanent Account Number</li>
<li><strong>Aadhaar Card:</strong> Now linked to PAN; required for e-filing</li>
<li><strong>Annual Information Statement (AIS):</strong> Download from the income tax portal — this shows all reported income</li>
<li><strong>Form 26AS:</strong> TDS certificate from the tax portal — shows tax already deducted at source</li>
</ul>

<h2>If You Have Salary Income</h2>
<ul>
<li><strong>Form 16:</strong> Issued by your employer if you worked in India during the year</li>
<li><strong>Salary slips:</strong> For any months worked in India</li>
<li><strong>EPF withdrawal details:</strong> If you withdrew from your Provident Fund</li>
</ul>

<h2>If You Have Rental Income</h2>
<ul>
<li><strong>Rental agreement:</strong> Copy of the lease agreement</li>
<li><strong>Rent receipts or bank statements:</strong> Showing rental credits</li>
<li><strong>Property tax receipts:</strong> Municipal tax paid during the year</li>
<li><strong>Home loan statement:</strong> If applicable — for interest deduction under Section 24</li>
</ul>

<h2>If You Have Capital Gains</h2>
<ul>
<li><strong>Property sale deed:</strong> For real estate transactions</li>
<li><strong>Purchase deed:</strong> Original purchase price and date</li>
<li><strong>Mutual fund statements:</strong> Consolidated account statement from CAMS/KFintech</li>
<li><strong>Stock/equity transaction statements:</strong> From your broker (Zerodha, ICICI Direct, etc.)</li>
<li><strong>Cost Inflation Index documentation:</strong> For indexation of long-term gains</li>
</ul>

<h2>If You Have Interest/Dividend Income</h2>
<ul>
<li><strong>NRO/NRE account statements:</strong> Showing interest credited</li>
<li><strong>Fixed deposit certificates:</strong> With TDS details</li>
<li><strong>Dividend statements:</strong> From companies or mutual funds</li>
</ul>

<h2>For DTAA Credit Claims</h2>
<ul>
<li><strong>US tax return (1040):</strong> Previous year, to establish credit position</li>
<li><strong>Tax Residency Certificate (TRC):</strong> From the IRS or relevant authority</li>
<li><strong>Form 10F:</strong> Required for claiming DTAA benefits in India</li>
</ul>

<h2>How to Send These to Us</h2>
<p><strong>Never send financial documents over email or WhatsApp.</strong> We'll provide you with a secure portal login (TaxDome) where you can upload everything. The portal uses encryption, and only our team has access.</p>

<h2>Don't Have Everything? That's OK.</h2>
<p>Most NRIs don't have every document perfectly organized on day one. Start with what you have, and we'll tell you exactly what's missing during the review. Book a free consultation to get started.</p>
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  const current = getBlogPost(slug);
  if (!current) return [];
  const others = BLOG_POSTS.filter((p) => p.slug !== slug);
  const sameCategory = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);
  return [...sameCategory, ...rest].slice(0, count);
}
