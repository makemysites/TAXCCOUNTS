import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getServicePage, getAllServiceSlugs, SERVICE_RELATED } from "@/lib/services-data";
import { BOOKING, SERVICES } from "@/lib/firm-content";
import { getBlogPost } from "@/lib/blog-posts";
import { BookConsultationButton, SectionHeading } from "@/components/shared";
import ProcessTimeline from "@/components/services/ProcessTimeline";
import ServiceFAQ from "@/components/services/ServiceFAQ";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function ServiceNichePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-cream py-16 sm:py-24 font-sans animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Service Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">
            Practice Area
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-navy mt-3 mb-6">
            {service.title}
          </h1>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <p className="text-base sm:text-lg lg:text-xl text-muted leading-relaxed">
            {service.heroSubtitle}
          </p>
        </div>

        {/* Two Column Layout: What it Solves vs Who it's For */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20 bg-white rounded-2xl p-8 sm:p-12 border border-border shadow-sm">
          {/* Left Column: Narrative Problem Solving */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-navy mb-4">
              What This Service Solves
            </h2>
            <div className="prose text-sm sm:text-base text-charcoal leading-relaxed space-y-4">
              {service.whatItSolves.split("\n\n").map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* Right Column: Ideal Prospect Bullet Points */}
          <div className="lg:border-l lg:border-border lg:pl-12 space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-navy">
              Who It's For
            </h2>
            <ul className="space-y-4">
              {service.whoItsFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-accent/10 text-accent rounded-full shrink-0 flex items-center justify-center text-xs font-bold">
                    &bull;
                  </span>
                  <span className="text-sm sm:text-base text-charcoal">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-20">
          <SectionHeading
            title="Our Engagement Process"
            subtitle="How we onboard, analyze, compute, and complete your compliance filing without back-and-forth delays."
            centered={true}
            className="mb-12"
          />
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-border shadow-sm max-w-4xl mx-auto">
            <ProcessTimeline steps={service.process} />
          </div>
        </div>

        {/* Pricing Tiers Box */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-border shadow-sm max-w-4xl mx-auto mb-20">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-navy mb-4 text-center">
            Engagement & Pricing Details
          </h2>
          <p className="text-sm text-charcoal leading-relaxed text-center max-w-2xl mx-auto mb-8 font-sans">
            {service.pricingNote}
          </p>
          <div className="flex justify-center">
            <BookConsultationButton text={service.ctaText} variant="primary" size="lg" />
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Common Questions"
            subtitle={`Frequently asked questions about ${service.title}.`}
            centered={true}
            className="mb-12"
          />
          <ServiceFAQ items={service.faq} />
        </div>

        {/* Related Services & Guides */}
        {(() => {
          const related = SERVICE_RELATED[service.slug];
          if (!related) return null;

          const relatedServices = related.services
            .map((s) => SERVICES.find((svc) => svc.slug === s))
            .filter((s) => s !== undefined);
          const relatedPosts = related.posts
            .map((p) => getBlogPost(p))
            .filter((p) => p !== undefined);

          if (relatedServices.length === 0 && relatedPosts.length === 0) return null;

          return (
            <div className="max-w-4xl mx-auto mt-20 pt-16 border-t border-border">
              <SectionHeading
                title="Explore Related Services & Guides"
                subtitle="Cross-border situations rarely fit in one box — these may also apply to you."
                centered={true}
                className="mb-12"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedServices.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    className="group bg-white rounded-xl border border-border shadow-sm p-6 hover:border-accent transition-colors block"
                  >
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-2">
                      Service
                    </span>
                    <h3 className="font-serif font-bold text-navy group-hover:text-accent transition-colors mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed line-clamp-3">
                      {svc.description}
                    </p>
                  </Link>
                ))}
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/resources/${post.slug}`}
                    className="group bg-white rounded-xl border border-border shadow-sm p-6 hover:border-accent transition-colors block"
                  >
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-2">
                      Guide &middot; {post.readTime}
                    </span>
                    <h3 className="font-serif font-bold text-navy group-hover:text-accent transition-colors mb-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
