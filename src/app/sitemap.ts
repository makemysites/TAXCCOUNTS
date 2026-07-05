import { MetadataRoute } from "next";
import { FIRM } from "@/lib/firm-content";
import { getAllServiceSlugs } from "@/lib/services-data";
import { getAllBlogSlugs } from "@/lib/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = FIRM.url;
  const currentDate = new Date();

  // Core pages
  const staticRoutes = [
    { url: `${baseUrl}`, lastModified: currentDate, changeFrequency: "daily" as const, priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/services`, lastModified: currentDate, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified: currentDate, changeFrequency: "weekly" as const, priority: 0.6 },
    { url: `${baseUrl}/resources/faq`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/resources/tax-calendar`, lastModified: currentDate, changeFrequency: "weekly" as const, priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: currentDate, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, lastModified: currentDate, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  // Dynamic Service pages (5 routes)
  const serviceSlugs = getAllServiceSlugs();
  const serviceRoutes = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Dynamic Blog pages (3 routes)
  const blogSlugs = getAllBlogSlugs();
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/resources/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
