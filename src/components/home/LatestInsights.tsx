import React from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-posts";
import {
  Percent,
  Coins,
  Globe2,
  Building2,
  Rocket
} from "lucide-react";

// Visual config for the card headers
const BLOG_CARD_DECORATIONS = [
  {
    gradient: "from-[#0B5BA0] to-[#031A30]",
    icon: Coins,
    label: "GST"
  },
  {
    gradient: "from-[#C5A55A] to-[#8c6d31]",
    icon: Percent,
    label: "INCOME TAX"
  },
  {
    gradient: "from-[#0F1A2E] to-[#1e3a8a]",
    icon: Globe2,
    label: "USA TAX"
  },
  {
    gradient: "from-[#065f46] to-[#042f2e]",
    icon: Building2,
    label: "BUSINESS"
  },
  {
    gradient: "from-[#701a75] to-[#4a044e]",
    icon: Rocket,
    label: "STARTUP"
  }
];

export default function LatestInsights() {
  // Take the first 5 posts as they correspond to the requested 5 topics
  const insights = BLOG_POSTS.slice(0, 5);

  return (
    <section className="py-20 lg:py-24 bg-cream-dark/15 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 space-y-2">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy">
            Latest Insights
          </h2>
          <p className="text-xs md:text-sm text-navy/70 leading-relaxed font-sans">
            Stay updated with the latest tax and business updates
          </p>
        </div>

        {/* 5 Cards Row - Horizontal Scrollable on Mobile, Grid on Desktop */}
        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin lg:grid lg:grid-cols-5 lg:overflow-x-visible lg:pb-0 snap-x">
          {insights.map((post, idx) => {
            const dec = BLOG_CARD_DECORATIONS[idx] || BLOG_CARD_DECORATIONS[0];
            const IconComponent = dec.icon;
            
            return (
              <div
                key={post.slug}
                className="bg-white rounded-2xl border border-border shadow-sm flex flex-col justify-between overflow-hidden min-w-[280px] w-[280px] sm:min-w-[300px] sm:w-[300px] lg:w-auto lg:min-w-0 snap-align-start hover:shadow-md transition-shadow group shrink-0"
              >
                {/* Visual Header with Yellow Badge */}
                <div className={`relative h-40 bg-gradient-to-br ${dec.gradient} flex items-center justify-center text-white/20 overflow-hidden`}>
                  {/* Decorative mesh */}
                  <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none">
                    <svg width="100%" height="100%">
                      <pattern id={`card-grid-${idx}`} width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      </pattern>
                      <rect width="100%" height="100%" fill={`url(#card-grid-${idx})`} />
                    </svg>
                  </div>
                  
                  {/* Refined Champagne Gold Badge */}
                  <span className="absolute top-4 left-4 bg-gold-light text-navy font-sans font-bold text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded shadow-sm z-10 select-none">
                    {dec.label}
                  </span>
                  
                  {/* Centered Large Icon */}
                  <IconComponent className="w-16 h-16 text-white/30 stroke-[1.25] group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="font-serif text-sm font-bold text-navy leading-snug group-hover:text-accent transition-colors line-clamp-3">
                      <Link href={`/resources/${post.slug}`}>{post.title}</Link>
                    </h3>
                  </div>
                  
                  {/* Date and Read More */}
                  <div className="pt-6 mt-6 border-t border-border/60 space-y-3">
                    <span className="block text-[10px] text-muted font-sans font-medium">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <Link
                      href={`/resources/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-accent group-hover:text-accent-hover transition-colors"
                    >
                      <span>Read More</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore all Insights CTA at the bottom */}
        <div className="mt-12 text-center">
          <Link
            href="/resources"
            className="inline-flex items-center justify-center rounded-full bg-navy px-8 py-3 text-xs uppercase tracking-wider font-bold text-white shadow hover:bg-navy-dark transition-colors"
          >
            Explore All Insights
          </Link>
        </div>

      </div>
    </section>
  );
}
