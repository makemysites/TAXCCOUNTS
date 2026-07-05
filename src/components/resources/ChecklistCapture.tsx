"use client";

import React, { useState } from "react";

export default function ChecklistCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");

    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1200);
  };

  return (
    <div className="bg-navy rounded-2xl p-8 sm:p-12 text-white border border-navy-light/30 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-8">
      <div className="max-w-xl space-y-3">
        <span className="text-[10px] font-bold text-accent uppercase tracking-wider font-sans">
          Free Resource
        </span>
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
          Get the Document Checklist for NRI ITR Filing
        </h2>
        <p className="text-sm text-white/80 font-sans leading-relaxed">
          Don't scramble when filing time comes. Get a downloadable PDF listing every Indian bank record, capital gain certificate, and residency proof stamp you'll need.
        </p>
      </div>

      <div className="shrink-0 w-full md:w-80">
        {status === "success" ? (
          <div className="bg-green-50/10 border border-green-500/30 p-4 rounded-lg text-center font-sans text-sm text-green-300">
            <div className="font-bold mb-1">Checklist Sent!</div>
            Check your inbox for the download link.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 font-sans">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-white text-navy/90 border border-transparent rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-3 bg-accent hover:bg-accent-dark text-navy-dark font-bold text-sm rounded-lg shadow transition-all disabled:opacity-50"
            >
              {status === "submitting" ? "Sending..." : "Download Checklist"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
