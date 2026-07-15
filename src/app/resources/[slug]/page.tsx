import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getAllBlogSlugs, getRelatedPosts } from "@/lib/blog-posts";
import { FIRM, FOUNDER, BOOKING } from "@/lib/firm-content";
import { formatDate } from "@/lib/utils";
import SchemaMarkup from "@/components/shared/SchemaMarkup";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-cream py-16 sm:py-24 font-sans animate-fade-in">
      <SchemaMarkup
        type="Article"
        data={{
          headline: post.title,
          author: post.author,
          datePublished: post.date,
          description: post.metaDescription,
          url: `${FIRM.url}/resources/${post.slug}`,
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/resources"
          className="text-xs font-bold text-accent hover:underline inline-flex items-center gap-1 mb-8 uppercase tracking-wider"
        >
          <span>&larr;</span>
          <span>Back to Resources</span>
        </Link>

        {/* Article Container */}
        <article className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden p-8 sm:p-12">
          {/* Header */}
          <header className="pb-8 border-b border-border/80 mb-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="px-2.5 py-1 bg-accent/5 text-navy uppercase tracking-wider rounded">
                {post.category}
              </span>
              <span className="text-muted">{post.readTime}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-sm md:text-base text-muted pt-2">
              <span className="font-semibold text-navy/90">{post.author}</span>
              <span className="text-gray-300">&bull;</span>
              <span>{formatDate(post.date)}</span>
            </div>
          </header>

          {/* Table of Contents & Body Content */}
          {(() => {
            let headings: { text: string; id: string }[] = [];
            const parsedContent = post.content.replace(/<h2>(.*?)<\/h2>/g, (match, headingText) => {
              const id = headingText
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "");
              headings.push({ text: headingText, id });
              return `<h2 id="${id}" class="scroll-mt-24">${headingText}</h2>`;
            });

            return (
              <>
                {headings.length > 0 && (
                  <div className="mb-8 p-5 bg-cream-dark/40 border border-border rounded-xl font-sans">
                    <h3 className="text-xs font-bold text-navy uppercase tracking-wider mb-3">
                      Table of Contents
                    </h3>
                    <ul className="space-y-2 text-sm md:text-base">
                      {headings.map((h) => (
                        <li key={h.id}>
                          <a
                            href={`#${h.id}`}
                            className="text-accent font-semibold hover:underline hover:text-accent-hover transition-colors flex items-center gap-1.5"
                          >
                            <span className="text-accent/50">•</span>
                            <span>{h.text}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Body Content */}
                <div
                  className="prose prose-sm sm:prose max-w-none text-navy/90 font-sans leading-relaxed space-y-6 
                    prose-headings:font-serif prose-headings:font-bold prose-headings:text-navy prose-headings:mt-8 prose-headings:mb-4
                    prose-h2:text-xl prose-h2:sm:text-2xl prose-h3:text-lg
                    prose-p:mt-0 prose-p:mb-4
                    prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
                    prose-li:text-navy/90
                    prose-strong:text-navy font-medium
                    prose-a:text-accent prose-a:underline hover:prose-a:text-accent transition-colors"
                  dangerouslySetInnerHTML={{ __html: parsedContent }}
                />
              </>
            );
          })()}

          {/* Author Block */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-start gap-6 bg-cream p-6 rounded-xl border border-border/60">
            <div className="shrink-0 w-12 h-12 rounded-full border border-border overflow-hidden bg-white flex items-center justify-center shadow-xs">
              <img
                src={FOUNDER.photoUrl}
                alt={FOUNDER.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2 text-sm md:text-base font-sans">
              <div className="font-bold text-navy text-base">{FOUNDER.name}</div>
              <div className="text-xs text-muted font-medium">{FOUNDER.title}</div>
              <p className="text-muted leading-relaxed">
                {FOUNDER.name} is the founder of {FIRM.name}. He specializes in cross-border taxation, helping NRIs, startups and global companies structure their compliance and assets correctly.
              </p>
              <Link href="/about" className="text-xs font-bold text-accent hover:underline block pt-1">
                Read Founder Bio &rarr;
              </Link>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {(() => {
          const relatedPosts = getRelatedPosts(slug, 3);
          if (relatedPosts.length === 0) return null;
          return (
            <div className="mt-12">
              <h2 className="text-xl font-serif font-bold text-navy mb-6">
                Continue Reading
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/resources/${related.slug}`}
                    className="group bg-white rounded-xl border border-border shadow-sm p-6 hover:border-accent transition-colors block"
                  >
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-2">
                      {related.category} &middot; {related.readTime}
                    </span>
                    <h3 className="font-serif font-bold text-navy text-sm leading-snug group-hover:text-accent transition-colors mb-2">
                      {related.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed line-clamp-3">
                      {related.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Dynamic bottom CTA based on category */}
        <div className="mt-12 bg-navy rounded-2xl p-8 sm:p-12 text-center text-white border border-navy-light/30 shadow-lg">
          <h2 className="text-2xl font-serif font-bold text-white mb-4">
            Have questions about {post.category}?
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-sans max-w-xl mx-auto leading-relaxed mb-8">
            Treating tax codes in isolation causes missed credits and double taxation. Schedule a free 20-minute consultation to review your assets.
          </p>
          <a
            href={BOOKING.calComUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center px-8 py-4 bg-accent hover:bg-accent-light text-navy-dark font-bold text-sm rounded-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all font-sans"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
