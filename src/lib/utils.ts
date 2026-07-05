/**
 * Utility Functions
 * =================
 * Shared helpers used across the site. No external dependencies.
 */

/**
 * Conditionally join class names. Filters out falsy values.
 * Lightweight alternative to clsx + tailwind-merge.
 *
 * @example cn('base-class', isActive && 'active', className)
 */
export function cn(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format a date string for display in blog posts and articles.
 * Returns format like "15 March 2025".
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Format a date string as a short date: "15 Mar 2025".
 */
export function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/**
 * Format a phone number for display.
 * Strips the country code prefix for cleaner display.
 */
export function formatPhoneDisplay(rawPhone: string): string {
  // +919876543210 → 98765 43210
  const digits = rawPhone.replace(/\D/g, "");
  if (digits.startsWith("91") && digits.length === 12) {
    const local = digits.slice(2);
    return `${local.slice(0, 5)} ${local.slice(5)}`;
  }
  return rawPhone;
}

/**
 * Convert a string to a URL-friendly slug.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

/**
 * Truncate text to a maximum length, adding an ellipsis.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}

/**
 * Calculate reading time in minutes for a given text body.
 * Assumes ~200 words per minute.
 */
export function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

/**
 * Generate the current financial year string (India: April–March).
 * E.g., returns "2025-26" if the current date is between April 2025 and March 2026.
 */
export function currentFinancialYear(): string {
  const now = new Date();
  const month = now.getMonth(); // 0-indexed
  const year = now.getFullYear();
  // Financial year starts in April (month index 3)
  const startYear = month >= 3 ? year : year - 1;
  const endYear = startYear + 1;
  return `${startYear}-${String(endYear).slice(2)}`;
}
