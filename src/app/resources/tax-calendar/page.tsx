"use client";

import React, { useEffect, useState } from "react";
import { TAX_DEADLINES, TAX_CALENDAR_META } from "@/lib/tax-calendar-data";
import { BOOKING } from "@/lib/firm-content";
import { SectionHeading } from "@/components/shared";

const MONTH_INDEX: Record<string, number> = {
  January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
  July: 6, August: 7, September: 8, October: 9, November: 10, December: 11,
};

function nextOccurrence(dateStr: string, today: Date): Date {
  const [monthName, dayStr] = dateStr.split(" ");
  const month = MONTH_INDEX[monthName];
  const day = parseInt(dayStr, 10);
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const candidate = new Date(today.getFullYear(), month, day);
  return candidate >= startOfToday
    ? candidate
    : new Date(today.getFullYear() + 1, month, day);
}

export default function TaxCalendarPage() {
  const [countryFilter, setCountryFilter] = useState<"All" | "India" | "USA">("All");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  // Set after mount to avoid a hydration mismatch between build-time and client dates
  const [today, setToday] = useState<Date | null>(null);

  useEffect(() => {
    setToday(new Date());
  }, []);

  // Extract unique categories for filtering
  const categories = ["All", ...Array.from(new Set(TAX_DEADLINES.map((d) => d.category)))];

  // Filter deadlines based on selections
  const filtered = TAX_DEADLINES.filter((d) => {
    const countryMatch = countryFilter === "All" || d.country === countryFilter;
    const categoryMatch = categoryFilter === "All" || d.category === categoryFilter;
    return countryMatch && categoryMatch;
  });

  const filteredDeadlines = today
    ? filtered
        .map((d) => {
          const due = nextOccurrence(d.date, today);
          return {
            ...d,
            displayDate: `${d.date}, ${due.getFullYear()}`,
            dueTime: due.getTime(),
          };
        })
        .sort((a, b) => a.dueTime - b.dueTime)
    : filtered.map((d) => ({ ...d, displayDate: d.date, dueTime: 0 }));

  const nextDueTime = today && filteredDeadlines.length > 0 ? filteredDeadlines[0].dueTime : null;

  return (
    <div className="bg-cream py-16 sm:py-24 font-sans animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block">
            Filing Calendar
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-navy mt-3 mb-6">
            Tax Deadline Calendar
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Key compliance dates for Indian direct taxes (ITR, GST, TDS) and US federal tax requirements (IRS returns, FBAR disclosures, estimated schedules).
          </p>
        </div>

        {/* Filter Controls */}
        <div className="bg-white p-6 rounded-2xl border border-border shadow-sm mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            {/* Country Tabs */}
            <div>
              <span className="text-xs font-bold text-navy uppercase tracking-wider block mb-2 sm:inline sm:mb-0 sm:mr-3">
                Jurisdiction:
              </span>
              <div className="inline-flex bg-cream p-1 rounded-lg border border-border">
                {(["All", "India", "USA"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setCountryFilter(tab)}
                    className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${
                      countryFilter === tab
                        ? "bg-navy text-white shadow-sm"
                        : "text-muted hover:text-navy"
                    }`}
                  >
                    {tab === "All" ? "All Dates" : tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Dropdown */}
            <div className="flex items-center gap-2">
              <label
                htmlFor="category-select"
                className="text-xs font-bold text-navy uppercase tracking-wider shrink-0"
              >
                Filing Category:
              </label>
              <select
                id="category-select"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-3 py-2 bg-cream border border-border rounded-lg text-navy/90 font-sans text-xs focus:outline-none focus:border-accent"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Deadlines Table (desktop / tablet) */}
        <div className="hidden sm:block bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-sans">
              <thead>
                <tr className="bg-navy text-white text-xs font-bold uppercase tracking-wider border-b border-accent/15">
                  <th className="px-6 py-4">Filing Due Date</th>
                  <th className="px-6 py-4">Jurisdiction</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Filing Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                {filteredDeadlines.length > 0 ? (
                  filteredDeadlines.map((item, idx) => {
                    const isNext = nextDueTime !== null && item.dueTime === nextDueTime;
                    return (
                      <tr
                        key={idx}
                        className={`transition-colors ${
                          isNext ? "bg-accent/5" : "hover:bg-cream/30"
                        }`}
                      >
                        {/* Date */}
                        <td className="px-6 py-4 font-serif font-bold text-navy whitespace-nowrap">
                          <div>{item.displayDate}</div>
                          {isNext && (
                            <span className="inline-block mt-1 px-2 py-0.5 bg-accent text-white text-[10px] font-sans font-bold uppercase tracking-wider rounded">
                              Up Next
                            </span>
                          )}
                        </td>

                        {/* Country Badge */}
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded border ${
                              item.country === "India"
                                ? "bg-accent/5 text-navy border-accent/15"
                                : "bg-accent/5 text-accent border-accent/25"
                            }`}
                          >
                            {item.country}
                          </span>
                        </td>

                        {/* Category Badge */}
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-0.5 bg-cream text-muted text-xs rounded border border-border">
                            {item.category}
                          </span>
                        </td>

                        {/* Description & Note */}
                        <td className="px-6 py-4">
                          <div className="font-bold text-navy">{item.description}</div>
                          {item.note && (
                            <div className="text-xs text-muted mt-1 max-w-xl font-normal leading-relaxed">
                              {item.note}
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-muted font-sans font-medium">
                      No deadlines match your current filters. Try resetting the country or category toggle.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Deadline Cards (mobile) */}
        <div className="sm:hidden space-y-3">
          {filteredDeadlines.length > 0 ? (
            filteredDeadlines.map((item, idx) => {
              const isNext = nextDueTime !== null && item.dueTime === nextDueTime;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-xl border shadow-sm p-5 space-y-3 ${
                    isNext ? "border-accent" : "border-border"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-serif font-bold text-navy text-base">
                      {item.displayDate}
                    </span>
                    {isNext && (
                      <span className="px-2 py-0.5 bg-accent text-white text-[10px] font-bold uppercase tracking-wider rounded">
                        Up Next
                      </span>
                    )}
                  </div>
                  <div className="font-bold text-navy text-sm leading-snug">
                    {item.description}
                  </div>
                  {item.note && (
                    <p className="text-xs text-muted leading-relaxed">{item.note}</p>
                  )}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span
                      className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded border ${
                        item.country === "India"
                          ? "bg-accent/5 text-navy border-accent/15"
                          : "bg-accent/5 text-accent border-accent/25"
                      }`}
                    >
                      {item.country}
                    </span>
                    <span className="px-2 py-1 bg-cream text-muted text-[10px] rounded border border-border">
                      {item.category}
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="bg-white rounded-xl border border-border shadow-sm px-6 py-12 text-center text-muted font-medium text-sm">
              No deadlines match your current filters. Try resetting the country or category toggle.
            </div>
          )}
        </div>

        {/* Disclaimer Section */}
        <div className="mt-8 bg-white p-6 rounded-xl border border-border shadow-sm text-xs text-muted leading-relaxed font-sans max-w-4xl mx-auto flex gap-3">
          <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p>
            <strong>Compliance Disclaimer:</strong> {TAX_CALENDAR_META.disclaimer}
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-navy rounded-2xl p-8 sm:p-12 text-center text-white border border-navy-light/30 shadow-lg">
          <h2 className="text-2xl font-serif font-bold text-white mb-4">
            Delegate your tax compliance workload
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed mb-8">
            Never guess when a filing is due. We manage registration dates, compute returns, and handle submissions securely. Book a consultation.
          </p>
          <a
            href={BOOKING.calComUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-accent hover:bg-accent-light text-navy-dark font-bold text-sm rounded-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all font-sans inline-block"
          >
            Connect With An Advisor
          </a>
        </div>
      </div>
    </div>
  );
}
