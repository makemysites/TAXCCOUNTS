/**
 * Tax Calendar Data — Indian and US filing deadlines.
 */

export interface TaxDeadline {
  date: string;
  description: string;
  country: "India" | "USA";
  category: string;
  note?: string;
}

export const TAX_DEADLINES: TaxDeadline[] = [
  // Indian Deadlines
  {
    date: "April 15",
    description: "Advance Tax — 4th Installment Due",
    country: "India",
    category: "Income Tax",
  },
  {
    date: "April 30",
    description: "GSTR-3B for March (Monthly filers)",
    country: "India",
    category: "GST",
  },
  {
    date: "May 15",
    description: "TDS Return (Q4: Jan–Mar) — Form 24Q, 26Q, 27Q",
    country: "India",
    category: "TDS",
  },
  {
    date: "May 31",
    description: "TDS Certificate — Form 16 (Salary) issuance deadline",
    country: "India",
    category: "TDS",
  },
  {
    date: "June 15",
    description: "Advance Tax — 1st Installment Due (45%)",
    country: "India",
    category: "Income Tax",
    note: "For taxpayers whose estimated tax liability exceeds ₹10,000",
  },
  {
    date: "July 15",
    description: "TDS Return (Q1: Apr–Jun) — Form 24Q, 26Q, 27Q",
    country: "India",
    category: "TDS",
  },
  {
    date: "July 31",
    description: "ITR Filing Deadline — Individuals (Non-Audit)",
    country: "India",
    category: "Income Tax",
    note: "This is the most common deadline for NRIs. Extensions may be available but filing on time avoids interest under Section 234A.",
  },
  {
    date: "September 15",
    description: "Advance Tax — 2nd Installment Due (75%)",
    country: "India",
    category: "Income Tax",
  },
  {
    date: "September 30",
    description: "Annual GST Return — GSTR-9",
    country: "India",
    category: "GST",
  },
  {
    date: "October 15",
    description: "TDS Return (Q2: Jul–Sep) — Form 24Q, 26Q, 27Q",
    country: "India",
    category: "TDS",
  },
  {
    date: "October 31",
    description: "ITR Filing Deadline — Audit Cases (Businesses & Professionals)",
    country: "India",
    category: "Income Tax",
    note: "Applicable to businesses requiring audit under Section 44AB",
  },
  {
    date: "November 30",
    description: "ITR Filing Deadline — Transfer Pricing Cases",
    country: "India",
    category: "Income Tax",
  },
  {
    date: "December 15",
    description: "Advance Tax — 3rd Installment Due (100%)",
    country: "India",
    category: "Income Tax",
  },
  {
    date: "December 31",
    description: "Belated / Revised ITR Filing Deadline",
    country: "India",
    category: "Income Tax",
    note: "Last date to file belated or revised returns for the previous assessment year",
  },
  {
    date: "January 15",
    description: "TDS Return (Q3: Oct–Dec) — Form 24Q, 26Q, 27Q",
    country: "India",
    category: "TDS",
  },

  // US Deadlines
  {
    date: "January 31",
    description: "W-2 and 1099 forms — Employer/payer deadline to issue",
    country: "USA",
    category: "Information Returns",
  },
  {
    date: "March 15",
    description: "S-Corp & Partnership Returns (1120-S, 1065) — Filing deadline",
    country: "USA",
    category: "Business Tax",
    note: "6-month extension available via Form 7004",
  },
  {
    date: "April 15",
    description: "Individual Returns (1040) — Filing deadline",
    country: "USA",
    category: "Individual Tax",
    note: "NRIs and US citizens abroad get an automatic 2-month extension to June 15, but interest accrues from April 15.",
  },
  {
    date: "April 15",
    description: "FBAR (FinCEN 114) — Filing deadline",
    country: "USA",
    category: "Foreign Reporting",
    note: "Automatic extension to October 15. Required if aggregate foreign account balances exceed $10,000 at any point during the year.",
  },
  {
    date: "April 15",
    description: "Quarterly Estimated Tax — 1st Quarter",
    country: "USA",
    category: "Estimated Tax",
  },
  {
    date: "June 15",
    description: "Quarterly Estimated Tax — 2nd Quarter",
    country: "USA",
    category: "Estimated Tax",
  },
  {
    date: "June 15",
    description: "US Citizens/Residents Abroad — Extended filing deadline",
    country: "USA",
    category: "Individual Tax",
    note: "Automatic 2-month extension for taxpayers living abroad. File Form 4868 for additional extension to October 15.",
  },
  {
    date: "September 15",
    description: "Quarterly Estimated Tax — 3rd Quarter",
    country: "USA",
    category: "Estimated Tax",
  },
  {
    date: "September 15",
    description: "S-Corp & Partnership Returns — Extended deadline",
    country: "USA",
    category: "Business Tax",
  },
  {
    date: "October 15",
    description: "Individual Returns (1040) — Extended filing deadline",
    country: "USA",
    category: "Individual Tax",
    note: "Must have filed Form 4868 by April 15 (or June 15 if abroad).",
  },
  {
    date: "October 15",
    description: "FBAR (FinCEN 114) — Extended deadline",
    country: "USA",
    category: "Foreign Reporting",
  },
  {
    date: "January 15",
    description: "Quarterly Estimated Tax — 4th Quarter",
    country: "USA",
    category: "Estimated Tax",
  },
];

export const TAX_CALENDAR_META = {
  title: "Tax Deadline Calendar — India & US Filing Dates",
  metaTitle: "India & US Tax Deadline Calendar | NRI Filing Dates 2024–2025",
  metaDescription:
    "Complete tax deadline calendar for NRIs — Indian ITR, GST, TDS filing dates alongside US IRS deadlines, FBAR, and estimated tax due dates. Never miss a deadline.",
  disclaimer:
    "These dates are based on standard deadlines and may change due to government extensions or updates. Always confirm current deadlines with your tax advisor. This calendar is for informational purposes only and does not constitute tax advice.",
};
