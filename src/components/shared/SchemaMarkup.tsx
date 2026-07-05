import {
  FIRM,
  CONTACT,
  SERVICES,
  COUNTRIES,
  FOUNDER,
  CREDENTIALS,
} from "@/lib/firm-content";

interface SchemaMarkupProps {
  type: "ProfessionalService" | "Article";
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
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: FIRM.legalName,
    description: FIRM.description,
    url: FIRM.url,
    foundingDate: String(FIRM.foundedYear),
    telephone: CONTACT.phoneRaw,
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
    ...(CREDENTIALS.googleRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: CREDENTIALS.googleRating,
        reviewCount: CREDENTIALS.googleReviewCount,
        bestRating: 5,
      },
    }),
    priceRange: "$$",
    sameAs: [CONTACT.whatsappUrl],
  };
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

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const schema =
    type === "ProfessionalService"
      ? buildProfessionalServiceSchema()
      : buildArticleSchema(data);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
