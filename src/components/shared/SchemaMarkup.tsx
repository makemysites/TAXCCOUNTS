import {
  FIRM,
  CONTACT,
  SERVICES,
  COUNTRIES,
  FOUNDER,
  CREDENTIALS,
} from "@/lib/firm-content";
import { FAQ_SECTIONS } from "@/lib/faq-data";

interface SchemaMarkupProps {
  type: "ProfessionalService" | "Article" | "FAQPage";
  data?: {
    headline?: string;
    author?: string;
    datePublished?: string;
    dateModified?: string;
    description?: string;
    url?: string;
    image?: string;
  };
}

function buildProfessionalServiceSchema() {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: FIRM.legalName,
    description: FIRM.description,
    url: FIRM.url,
    foundingDate: String(FIRM.foundedYear),
    telephone: CONTACT.phoneRaw || undefined,
    email: CONTACT.email,
    areaServed: COUNTRIES.map((c) => ({
      "@type": "Country",
      name: c.name,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "CA Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
    founder: {
      "@type": "Person",
      name: FOUNDER.shortName,
      jobTitle: FOUNDER.title,
    },
    priceRange: "$$",
  };

  if (CREDENTIALS.googleRating && CREDENTIALS.googleReviewCount) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: CREDENTIALS.googleRating,
      reviewCount: CREDENTIALS.googleReviewCount,
      bestRating: 5,
    };
  }

  if (CONTACT.whatsappUrl) {
    schema.sameAs = [CONTACT.whatsappUrl];
  }

  return schema;
}

function buildArticleSchema(data: SchemaMarkupProps["data"]) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data?.headline ?? "",
    author: {
      "@type": "Person",
      name: data?.author ?? FOUNDER.shortName,
    },
    publisher: {
      "@type": "Organization",
      name: FIRM.legalName,
      url: FIRM.url,
    },
    datePublished: data?.datePublished ?? "",
    ...(data?.dateModified && { dateModified: data.dateModified }),
    description: data?.description ?? "",
    ...(data?.url && { mainEntityOfPage: data.url }),
    ...(data?.image && {
      image: {
        "@type": "ImageObject",
        url: data.image,
      },
    }),
  };
}

function buildFAQPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_SECTIONS.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      }))
    ),
  };
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const schema =
    type === "ProfessionalService"
      ? buildProfessionalServiceSchema()
      : type === "FAQPage"
      ? buildFAQPageSchema()
      : buildArticleSchema(data);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
