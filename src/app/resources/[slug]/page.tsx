import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getAllBlogSlugs } from "@/lib/blog-posts";
import { FOUNDER, BOOKING } from "@/lib/firm-content";
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
      <SchemaMarkup type="Article" data={post} />

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
            <div className="flex items-center gap-3 text-xs sm:text-sm text-muted pt-2">
              <span className="font-semibold text-navy/90">{post.author}</span>
              <span className="text-gray-300">&bull;</span>
              <span>{formatDate(post.date)}</span>
            </div>
          </header>

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
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Block */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-start gap-6 bg-cream p-6 rounded-xl border border-border/60">
            <div className="shrink-0 w-12 h-12 rounded-full bg-navy text-accent flex items-center justify-center font-bold text-lg font-serif">
              PA
            </div>
            <div className="space-y-2 text-xs sm:text-sm font-sans">
              <div className="font-bold text-navy text-base">{FOUNDER.name}</div>
              <div className="text-xs text-muted font-medium">{FOUNDER.title}</div>
              <p className="text-muted leading-relaxed">
                Priya Anand is the principal advisor at Anand & Associates, chartered accountants. She specializes in US–India cross-border taxation, helping NRIs and companies structure their assets and compliance correctly.
              </p>
              <Link href="/about" className="text-xs font-bold text-accent hover:underline block pt-1">
                Read Principal Bio &rarr;
              </Link>
            </div>
          </div>
        </article>

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
