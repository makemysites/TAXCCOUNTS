"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { ArrowRight, BookOpen } from "lucide-react";

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Dynamically extract categories
  const rawCategories = Array.from(new Set(BLOG_POSTS.map((post) => post.category)));
  const categories = ["All", ...rawCategories];

  // Filter posts
  const filteredPosts =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

  return (
    <div className="space-y-12">
      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center justify-center gap-3 pb-4 border-b border-border/60">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-bold rounded-lg border transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-navy border-navy text-white shadow-sm"
                  : "bg-white border-border text-navy/80 hover:bg-cream-dark hover:text-navy"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid of Articles */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-xl overflow-hidden border border-border shadow-xs flex flex-col justify-between hover:shadow-md hover:border-accent/25 hover:scale-[1.01] transition-all duration-300 group"
            >
              <div className="p-6 space-y-4">
                {/* Meta details */}
                <div className="flex items-center gap-2 text-[10px] font-sans font-bold">
                  <span className="px-2 py-0.5 bg-accent/5 text-accent uppercase tracking-wider rounded border border-accent/10">
                    {post.category}
                  </span>
                  <span className="text-muted">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-serif font-bold text-navy line-clamp-2 leading-snug group-hover:text-accent transition-colors duration-300">
                  <Link href={`/resources/${post.slug}`}>{post.title}</Link>
                </h3>

                {/* Excerpt */}
                <p className="text-sm md:text-base text-navy/80 font-sans leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 border-t border-border/60 flex items-center justify-between bg-cream-dark/10">
                <span className="text-[10px] sm:text-xs text-muted font-sans font-medium">
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <Link
                  href={`/resources/${post.slug}`}
                  className="text-xs font-bold text-accent group-hover:text-accent-hover transition-colors inline-flex items-center gap-1 uppercase tracking-wider"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white border border-border rounded-2xl max-w-md mx-auto space-y-3">
          <BookOpen className="w-12 h-12 text-muted/40 mx-auto" />
          <h4 className="font-serif text-lg font-bold text-navy">No guides found</h4>
          <p className="text-xs text-muted max-w-xs mx-auto leading-relaxed">
            We haven't published any articles under the "{activeCategory}" category yet. Check back soon for updates!
          </p>
        </div>
      )}
    </div>
  );
}
