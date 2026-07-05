/**
 * FAQ Data — Content for the FAQ page.
 * All answers sourced from firm-content.ts placeholder data.
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSection {
  title: string;
  description: string;
  items: FAQItem[];
}

export const FAQ_SECTIONS: FAQSection[] = [
  {
    title: "Fees & Pricing",
    description: "What our services cost and how billing works.",
    items: [
      {
        question: "How much does NRI ITR filing cost?",
        answer:
          "NRI ITR filing starts at ₹15,000 for straightforward returns involving salary, interest, or a single rental property. Returns involving capital gains, multiple properties, or DTAA credit coordination are quoted after a free initial review, because the complexity varies significantly.",
      },
      {
        question: "What does outsourced bookkeeping cost?",
        answer:
          "Bookkeeping starts at $300/month for up to 200 transactions, including monthly P&L, balance sheet, and bank reconciliation. Higher transaction volumes and add-on services (accounts payable/receivable management, invoicing) are priced separately — we'll quote it upfront before you commit.",
      },
      {
        question: "How does Virtual CFO pricing work?",
        answer:
          "Virtual CFO services start at $800/month. The base tier includes a monthly financial review, cash flow forecasting, a KPI dashboard, and one strategy call. Board reporting, fundraising support, and additional modeling hours are available at higher tiers.",
      },
      {
        question: "Do you charge for the first consultation?",
        answer:
          "No. The initial consultation is always free. It's a 20-minute video call where we understand your situation, assess whether we're the right fit, and give you an honest idea of what the engagement would involve and cost.",
      },
      {
        question: "How do international clients pay?",
        answer:
          "We accept wire transfers (SWIFT), Wise transfers, and Razorpay international payments. We send an invoice with clear instructions — no chasing required. All fees for international clients are quoted in USD unless you prefer INR.",
      },
    ],
  },
  {
    title: "Getting Started",
    description: "What to expect when you first work with us.",
    items: [
      {
        question: "What happens in the first consultation?",
        answer:
          "It's a 20-minute video call (Zoom or Google Meet) where we listen to your situation — what income or assets are involved, what countries you have ties to, what you're currently struggling with. We'll tell you whether we can help, what the engagement would look like, and give you a rough cost estimate. No obligation.",
      },
      {
        question: "What documents do I need for the first call?",
        answer:
          "Nothing — just come with your questions. We'll send you a detailed checklist after the call if we move forward. For NRI tax filing, the typical list includes Form 16/16A, AIS (Annual Information Statement), bank statements for Indian accounts, and property documents if applicable.",
      },
      {
        question: "How long does it take to get started?",
        answer:
          "Most clients are onboarded within a week of the initial call. For bookkeeping, setup (connecting to your accounting software, reviewing chart of accounts) typically takes 3–5 business days.",
      },
      {
        question: "Do I need to come to your office?",
        answer:
          "No. All consultations happen over Zoom or Google Meet. We work with clients across India, the US, UK, Canada, and UAE — video calls and secure document exchange are how this practice is built.",
      },
    ],
  },
  {
    title: "How the Engagement Works",
    description: "The process from start to finish.",
    items: [
      {
        question: "Who will handle my account?",
        answer:
          "Every client has a dedicated point of contact on our team. For complex engagements (cross-border tax planning, Virtual CFO), CA Priya Anand is personally involved in the strategy and review.",
      },
      {
        question: "How do you communicate with clients?",
        answer:
          "Primarily through our client portal (for documents and formal communication), email, and scheduled video calls. For quick questions, we're also available on WhatsApp — though we don't recommend sending sensitive documents over WhatsApp.",
      },
      {
        question: "What if I have a question between scheduled calls?",
        answer:
          "Email us or send a message through the client portal. We respond within one business day — usually faster. For Virtual CFO clients, we're available for ad-hoc calls as part of the engagement.",
      },
      {
        question: "How do you handle deadlines?",
        answer:
          "We track every deadline (ITR, GST, TDS, IRS if applicable) and send reminders well in advance. We've never missed a filing deadline — and we flag potential issues before they become problems.",
      },
    ],
  },
  {
    title: "Document Exchange & Security",
    description: "How we keep your sensitive information safe.",
    items: [
      {
        question: "How do I send sensitive financial documents?",
        answer:
          "Through our secure client portal (TaxDome). Never over email. The portal uses encryption for storage and transmission, and you control access to your documents. We'll send you a login link during onboarding.",
      },
      {
        question: "Is my data safe?",
        answer:
          "Yes. We use TaxDome, which provides encrypted document storage, secure messaging, and audit trails. We don't store your documents on personal devices or share them outside our team. Our privacy policy covers exactly what data we collect and how it's used.",
      },
      {
        question: "Can I sign returns electronically?",
        answer:
          "Yes. We use digital signatures through the client portal. You review the return on a video call, approve it, and sign electronically — no printing, scanning, or posting.",
      },
      {
        question: "Do you ever ask for financial documents via email or WhatsApp?",
        answer:
          "No. We will never ask you to send PAN cards, bank statements, tax returns, or other sensitive documents over email or WhatsApp. Everything goes through the client portal. If you receive such a request claiming to be from us, it's not from us — contact us directly.",
      },
    ],
  },
  {
    title: "International Clients",
    description: "Specific questions for clients outside India.",
    items: [
      {
        question: "How do you handle the time zone difference?",
        answer:
          "We schedule calls at times that work for your time zone — we regularly take calls in the evening IST to accommodate US Eastern and Pacific time zones. Our team is available Mon–Fri, 10:00 AM – 7:00 PM IST (12:30 AM – 9:30 AM US Eastern).",
      },
      {
        question: "Can you work with my US CPA?",
        answer:
          "Absolutely. For NRI clients, we routinely coordinate with US CPAs — providing the Indian return summary, DTAA credit calculations, and any documentation they need for the 1040. We can speak directly with your CPA if that's easier.",
      },
      {
        question: "What countries do you serve?",
        answer:
          "We actively serve clients in India, the USA, UK, Canada, and UAE. If you're in another country with financial ties to India, reach out — there's a good chance we can help.",
      },
      {
        question: "Do I need to travel to India for any of this?",
        answer:
          "No. Everything is handled remotely — video consultations, digital signatures, secure document exchange through the portal. You don't need to be in India for any part of the engagement.",
      },
    ],
  },
];
