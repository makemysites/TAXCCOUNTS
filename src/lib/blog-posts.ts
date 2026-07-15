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
    slug: "itr-filing-ay-2026-27-nri-deadlines",
    title: "ITR Season AY 2026-27: Deadlines and New Rules Every NRI Must Know",
    metaTitle: "NRI ITR Filing AY 2026-27 | July 31 Deadline, New Rules & Forms",
    metaDescription:
      "The July 31, 2026 ITR deadline is close. Key changes for NRIs this season: no 87A rebate, mandatory Aadhaar, expanded capital gains disclosure, and extended revised-return windows.",
    excerpt:
      "The July 31 deadline for AY 2026-27 is around the corner — and this is the last filing season under the old 1961 Act. Here's what's different for NRIs this year, and the deadlines you can't afford to miss.",
    date: "2026-07-12",
    author: "Dinesh Singathi",
    category: "NRI Taxation",
    readTime: "6 min read",
    content: `
<h2>The Headline Deadline: July 31, 2026</h2>
<p>For NRIs with income in India — rent, interest, capital gains — the due date to file your return for AY 2026-27 (income earned in FY 2025-26) is <strong>July 31, 2026</strong>. ITR-2, the form most NRIs use, was released on the e-filing portal on May 27, 2026, so there is no reason to wait.</p>
<p>If you have business or professional income (ITR-3/ITR-4, non-audit), you now get until <strong>August 31, 2026</strong> — and this extension is a permanent change under the Finance Act, 2026, not a one-off.</p>

<h2>This Is the Last Season Under the 1961 Act</h2>
<p>The new Income Tax Act, 2025 came into force on April 1, 2026 — but it applies from Tax Year 2026-27 onwards. Your AY 2026-27 return is still governed by the familiar Income-tax Act, 1961. The first filing under the new law happens in 2027.</p>

<h2>What's Changed for NRIs This Year</h2>
<ul>
<li><strong>New Tax Regime is the default</strong> — including for NRIs. But note carefully: the enhanced Section 87A rebate (income up to ₹12 lakh effectively tax-free) is available <em>only to resident individuals</em>. NRIs pay tax from the first rupee above the basic exemption limit — ₹4 lakh under the New Regime, ₹2.5 lakh under the Old.</li>
<li><strong>Aadhaar is now mandatory</strong> — from AY 2026-27 you must quote your 12-digit Aadhaar number; the Aadhaar Enrolment ID is no longer accepted.</li>
<li><strong>Expanded capital gains disclosure</strong> — the updated ITR forms require more granular capital gains reporting, and the July 23, 2024 before/after split has been removed.</li>
<li><strong>Don't accept a pre-filled ITR-1</strong> — NRIs cannot file ITR-1 (Sahaj). If the portal defaults you into it, switch to ITR-2/ITR-3, or you'll receive a defective return notice.</li>
<li><strong>Returning NRIs:</strong> Form 10EE (for the Section 89A foreign retirement account benefit) must be filed by the ITR due date. Miss it, and the benefit is lost for the year entirely.</li>
</ul>

<h2>If You Miss the Deadline</h2>
<ul>
<li><strong>Late fee (Section 234F):</strong> ₹1,000 if total income is up to ₹5 lakh; ₹5,000 otherwise — plus 1% per month interest under Section 234A on unpaid tax.</li>
<li><strong>Regime lock-in:</strong> A belated return means you cannot switch to the Old Regime for that year.</li>
<li><strong>Losses lapse:</strong> Capital and business losses generally cannot be carried forward if the original return is late.</li>
<li><strong>Longer correction windows:</strong> Budget 2026 extended the revised-return deadline to March 31, 2027 (a fee applies after December 31, 2026), and an Updated Return (ITR-U) can now be filed up to 48 months after the assessment year ends.</li>
</ul>

<h2>Filing From Abroad?</h2>
<p>We prepare and file NRI returns end-to-end — residential status computation, DTAA credit mapping, and coordination with your US or UK accountant. Book a call before the rush week of July 25–31.</p>
    `,
  },
  {
    slug: "gst-2-new-rate-slabs-business-checklist",
    title: "GST 2.0 in FY 2026-27: The New 5%–18%–40% Structure and Your Compliance Checklist",
    metaTitle: "GST 2.0 Rate Slabs FY 2026-27 | 5%, 18%, 40% Structure Explained",
    metaDescription:
      "India's GST 2.0 reform replaced the old five-slab structure with 5%, 18% and 40% rates. What changed, what the 12% slab abolition means for your invoices, and the FY 2026-27 compliance checklist.",
    excerpt:
      "The 56th GST Council meeting rewrote India's GST rate structure — most goods now fall under just 5% or 18%, with a new 40% slab for luxury and sin goods. Here's what your business must do differently in FY 2026-27.",
    date: "2026-07-08",
    author: "Dinesh Singathi",
    category: "GST",
    readTime: "6 min read",
    content: `
<h2>The Biggest GST Overhaul Since 2017</h2>
<p>The 56th GST Council meeting (September 3, 2025) unveiled "GST 2.0" — a simplification of the rate structure that took effect from September 22, 2025 and is now fully operative for FY 2026-27. The old 0%, 5%, 12%, 18% and 28% slabs have been consolidated into primarily <strong>two rates — 5% and 18%</strong> — with a new <strong>40% slab</strong> for select luxury and sin goods. Niche rates (3% and 0.25% for gold, diamonds and precious stones) continue.</p>

<h2>What Got Cheaper</h2>
<ul>
<li><strong>Household essentials:</strong> hair oil, shampoo, toothpaste, soap and similar items moved from 18% to 5%; specified Indian breads are now Nil-rated.</li>
<li><strong>Insurance:</strong> individual health and life insurance premiums now attract <strong>Nil GST</strong>.</li>
<li><strong>Healthcare:</strong> 33 life-saving medicines moved to Nil; several cancer and rare-disease drugs dropped from 12% to 5%; diagnostic kits, thermometers and glucometers are at 5%.</li>
<li><strong>Big-ticket goods:</strong> air conditioners, large TVs, dishwashers, small cars and motorcycles are roughly 10 percentage points cheaper.</li>
<li><strong>Agriculture:</strong> tractors, tractor tyres and parts, drip irrigation and farm machinery moved to 5%.</li>
</ul>

<h2>The New 40% Slab</h2>
<p>Tobacco products, pan masala, aerated and caffeinated beverages, large passenger vehicles, motorcycles above 350cc, yachts, personal aircraft, casinos, online money gaming, betting and lotteries now sit at 40%. The old Compensation Cess on vehicles, ACs and tobacco has been folded into this consolidated rate. (Cigarettes, zarda, unmanufactured tobacco and beedi remain under the old cess structure until a later notified date.)</p>

<h2>Your FY 2026-27 Compliance Checklist</h2>
<ul>
<li><strong>Kill the 12% rate in your systems.</strong> The 12% slab is abolished for most goods — invoices issued with 12% GST after September 22, 2025 are incorrect and attract penalties under Section 122 of the CGST Act. Audit your billing software, POS systems and rate masters.</li>
<li><strong>New invoice series:</strong> invoice, debit note and credit note numbering must restart with a fresh series from April 1, 2026.</li>
<li><strong>Exporters:</strong> file a fresh Letter of Undertaking (LUT) for FY 2026-27.</li>
<li><strong>ITC discipline unchanged:</strong> input tax credit still depends on your supplier uploading invoices to GSTR-1 and the amounts reflecting in your GSTR-2B. Reconcile monthly.</li>
<li><strong>Composition scheme:</strong> rates are unchanged — 1% for traders/manufacturers, 5% for restaurants, 6% for specified service providers.</li>
</ul>

<h2>Need a Rate Review?</h2>
<p>If your product mix spans the reclassified categories, a one-time rate mapping review protects you from Section 122 penalties and blocked credits. We do this as a fixed-scope engagement — get in touch.</p>
    `,
  },
  {
    slug: "income-tax-act-2025-in-force",
    title: "The Income Tax Act 2025 Is Now in Force: What Actually Changes for You",
    metaTitle: "Income Tax Act 2025 Effective April 2026 | Tax Year, New Forms, Key Changes",
    metaDescription:
      "India's Income Tax Act 2025 replaced the 1961 Act from April 1, 2026. Tax Year replaces Assessment Year, Form 16 becomes Form 130, and HRA rules expand — but tax rates stay the same.",
    excerpt:
      "After 65 years, the Income-tax Act 1961 is history. The new Act is leaner — 536 sections instead of 819 — and changes the vocabulary of Indian tax. Here's what's genuinely different, and what's just renumbered.",
    date: "2026-07-02",
    author: "Dinesh Singathi",
    category: "Income Tax",
    readTime: "7 min read",
    content: `
<h2>A New Statute After 65 Years</h2>
<p>On April 1, 2026, the <strong>Income Tax Act, 2025</strong> came into force, fully replacing the Income-tax Act, 1961 — a statute that had been amended 65 times and had swollen to 819 sections across 47 chapters. The new Act is a cleaner 536-section law written for a digital economy, and the old Income Tax Rules, 1962 (500+ rules) have been replaced by the Income Tax Rules, 2026 — just 333 rules, notified on March 20, 2026.</p>

<h2>First, What Does NOT Change</h2>
<p><strong>Your tax liability.</strong> The new Act imposes no new tax and Budget 2026 made no changes to the slabs for FY 2026-27. The New Regime remains the default, the Section 87A rebate continues to make income up to ₹12 lakh effectively tax-free for residents (₹12.75 lakh for salaried taxpayers with the ₹75,000 standard deduction), and both regimes carry forward.</p>
<p>Also important: your AY 2026-27 return (for FY 2025-26 income) is still filed under the <em>old</em> 1961 Act. The first filing under the new law happens in 2027.</p>

<h2>The Vocabulary Change: "Tax Year"</h2>
<p>The confusing "Previous Year" / "Assessment Year" pairing is gone. From April 1, 2026, there is a single term — the <strong>Tax Year</strong>. Income earned during FY 2026-27 is simply Tax Year 2026-27. One term, one period.</p>

<h2>New Form Numbers You'll Start Seeing</h2>
<ul>
<li><strong>Form 16 → Form 130</strong> (salary TDS certificate)</li>
<li><strong>Form 16A → Form 131</strong> (non-salary TDS credit)</li>
<li><strong>Forms 15G and 15H → merged into a single Form 121</strong> (nil-TDS declarations)</li>
<li><strong>PAN application forms 49A/49AA → four new category-specific forms</strong></li>
</ul>

<h2>Substantive Changes Worth Knowing</h2>
<ul>
<li><strong>HRA expansion:</strong> the 50% HRA exemption now covers Bengaluru, Pune, Hyderabad and Ahmedabad — eight cities in total. Taxpayers must also disclose their relationship with the landlord.</li>
<li><strong>Share buybacks:</strong> from April 1, 2026, buyback proceeds are taxed as capital gains in shareholders' hands (previously deemed dividends).</li>
<li><strong>TDS on interest:</strong> the threshold rises to ₹1 lakh — a meaningful relief for senior citizens and deposit-heavy savers.</li>
<li><strong>Updated returns:</strong> the window to file an updated return is now four years instead of two.</li>
<li><strong>STT:</strong> Budget 2026 raised Securities Transaction Tax rates — F&amp;O traders will feel higher transaction costs.</li>
</ul>

<h2>Transition Is Protected</h2>
<p>The repeal does not disturb anything relating to earlier tax years — completed assessments stay valid and pending proceedings continue under transitional provisions. The department has also released a section-mapping utility to cross-reference 1961 Act sections against the 2025 Act.</p>

<h2>What Should You Do?</h2>
<p>For most taxpayers: nothing urgent, but expect new form numbers on every TDS certificate you receive from FY 2026-27. For businesses and NRIs with ongoing assessments or notices, the section renumbering makes professional review worthwhile before responding to any departmental communication that cites the new Act.</p>
    `,
  },
  {
    slug: "us-remittance-tax-2026-nri-guide",
    title: "The 1% US Remittance Tax Is Live: What NRIs Sending Money to India Should Do",
    metaTitle: "US Remittance Tax 2026 | 1% Excise on Cash Transfers — NRI Guide",
    metaDescription:
      "The US 1% remittance transfer tax took effect January 1, 2026 under the One Big Beautiful Bill Act. Who actually pays it, why bank-funded transfers are exempt, and what it means for NRIs.",
    excerpt:
      "A new 1% federal excise tax now applies to certain money transfers from the US. The good news: most NRIs will never pay it — if they fund transfers the right way. Here's the full picture.",
    date: "2026-06-30",
    author: "Dinesh Singathi",
    category: "USA Tax",
    readTime: "5 min read",
    content: `
<h2>What the Tax Is</h2>
<p>Effective <strong>January 1, 2026</strong>, the US imposes a 1% federal excise tax on certain remittance transfers sent abroad. It was enacted under Section 70604 of the One Big Beautiful Bill Act (signed July 4, 2025), which added new Section 4475 to the Internal Revenue Code. Early drafts proposed 5%; the final rate is 1% — and it applies to all senders regardless of citizenship or immigration status.</p>

<h2>The Key Detail: It's About How You Fund the Transfer</h2>
<ul>
<li><strong>Taxed:</strong> transfers funded with physical cash, a money order, or a cashier's check handed to a remittance provider.</li>
<li><strong>Exempt:</strong> transfers funded from a US bank account, or with a US-issued debit or credit card. Transfers of $15 or less are also excluded, as are genuine commercial/business remittances.</li>
</ul>
<p>Translation: if you send money to India through your bank, a wire, or an app like Wise or Remitly funded from your bank account, <strong>the tax does not apply to you</strong>. It only hits cash-funded transfers at physical counters — for example, $10 extra on a $1,000 cash transfer.</p>

<h2>Who Collects It</h2>
<p>The remittance provider collects the tax at the point of transfer, deposits it semimonthly, and reports quarterly to the IRS on Form 720. You do not report or pay anything separately on your Form 1040. In April 2026, Treasury and the IRS issued proposed regulations clarifying definitions, and earlier penalty-relief guidance (Notice 2025-55) covers providers during the first quarters of 2026.</p>

<h2>The India Side: No Tax on Receipt</h2>
<p>Money you send from abroad to your parents', spouse's, or other close relatives' bank account in India is <strong>not taxed as income in their hands</strong> — Indian law does not treat an inward remittance itself as income. The TCS you may have read about (Section 206C(1G)) applies to <em>outward</em> remittances above ₹10 lakh made by Indian residents under the LRS — it has nothing to do with your inward transfers.</p>

<h2>Practical Takeaways for NRIs</h2>
<ul>
<li>Fund transfers from your US bank account or card — never cash at a counter — and the 1% tax never touches you.</li>
<li>Keep gift documentation for large transfers to family; while receipt isn't taxed, gifts to non-relatives above ₹50,000 can be taxable for the recipient.</li>
<li>Watch for IRS guidance on Section 36C, which may allow a credit for remittance tax paid — not yet issued as of mid-2026.</li>
</ul>

<h2>Planning a Large Transfer?</h2>
<p>For property purchases, family support structures, or repatriation planning between the US and India, the remittance tax is the smallest piece of the puzzle — FEMA limits, TCS, and DTAA positions matter far more. Talk to us before you move six figures.</p>
    `,
  },
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
