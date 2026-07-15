import React from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-posts";
import {
  Percent,
  Coins,
  Globe2,
  Building2,
  Rocket,
  ArrowRight
} from "lucide-react";
import Reveal from "@/components/shared/Reveal";

// Visual config for the card headers — kept within the brand palette
const BLOG_CARD_DECORATIONS = [
  { icon: Coins, label: "GST" },
  { icon: Percent, label: "Income Tax" },
  { icon: Globe2, label: "USA Tax" },
  { icon: Building2, label: "Business" },
  { icon: Rocket, label: "Startup" },
];

export default function LatestInsights() {
  // Feature the three most recent posts
  const insights = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading with inline CTA */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <span className="eyebrow">From the Learning Center</span>
              <h2 className="mt-5 font-serif text-[2rem] sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-navy leading-tight">
                Latest Insights
              </h2>
              <p className="mt-4 text-base text-muted leading-relaxed max-w-lg">
                Stay ahead of the latest tax and business updates across your borders.
              </p>
            </div>
            <Link
              href="/resources"
              className="btn btn-outline btn-sm self-start sm:self-end shrink-0"
            >
              All Insights
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {insights.map((post, idx) => {
            const dec = BLOG_CARD_DECORATIONS[idx] || BLOG_CARD_DECORATIONS[0];
            const IconComponent = dec.icon;

            return (
              <Reveal key={post.slug} delay={idx * 100}>
                <Link
                  href={`/resources/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl bg-white border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_44px_-18px_rgba(6,47,82,0.22)]"
                >
                  {/* Visual Header */}
                  <div className="relative h-44 bg-navy flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(197,165,90,0.18),transparent_60%)]" />
                    <div className="absolute inset-0 opacity-[0.06] pointer-events-none select-none">
                      <svg width="100%" height="100%" aria-hidden="true">
                        <pattern id={`card-grid-${idx}`} width="24" height="24" patternUnits="userSpaceOnUse">
                          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill={`url(#card-grid-${idx})`} />
                      </svg>
                    </div>

                    <span className="absolute top-4 left-4 bg-gold text-navy font-bold text-[10px] uppercase tracking-[0.14em] px-3 py-1 rounded-full z-10 select-none">
                      {dec.label}
                    </span>

                    <IconComponent className="w-16 h-16 text-gold-light/30 stroke-[1.25] transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  {/* Card Body */}
                  <div className="p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="block text-xs text-muted font-semibold uppercase tracking-[0.12em]">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <h3 className="mt-3 font-serif text-lg font-semibold text-navy leading-snug group-hover:text-accent transition-colors line-clamp-3">
                        {post.title}
                      </h3>
                    </div>

                    <div className="pt-5 mt-6 border-t border-border/70 flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-accent">
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
