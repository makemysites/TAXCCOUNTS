"use client";

import React, { useState } from "react";
import { FIRM, CONTACT, SERVICES, BOOKING, PORTAL } from "@/lib/firm-content";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "USA",
    service: "nri-taxation",
    message: "",
  });

  const [status, setStatus] = useState<{
    type: "idle" | "submitting" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill out all required fields." });
      return;
    }

    setStatus({ type: "submitting", message: "Sending your message..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. We'll be in touch within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "USA",
          service: "nri-taxation",
          message: "",
        });
      } else {
        throw new Error(data.message || "Something went wrong.");
      }
    } catch (err: any) {
      setStatus({
        type: "error",
        message: err.message || "Failed to send message. Please try again or email us directly.",
      });
    }
  };

  return (
    <div className="bg-cream min-h-screen py-12 md:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-serif italic text-accent text-base block">
            Connect With Us
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-navy leading-tight">
            Let's Start the Conversation
          </h1>
          <p className="text-sm md:text-base text-navy/80 leading-relaxed max-w-xl mx-auto">
            Fill out the form below to message our team, or use the timezone-aware scheduler to book a free 20-minute video consultation immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-6 bg-white p-8 md:p-10 rounded-2xl border border-border shadow-sm space-y-6">
            <h2 className="font-serif text-xl font-bold text-navy">Send an Inquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-widest text-navy mb-2 font-sans">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Rajesh Kumar"
                  className="w-full px-4 py-3 bg-cream border border-border rounded-lg text-navy font-sans text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-widest text-navy mb-2 font-sans">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. rajesh@example.com"
                    className="w-full px-4 py-3 bg-cream border border-border rounded-lg text-navy font-sans text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-[10px] font-bold uppercase tracking-widest text-navy mb-2 font-sans">
                    Country of Residence <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cream border border-border rounded-lg text-navy font-sans text-sm focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                    <option value="UAE">UAE</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-widest text-navy mb-2 font-sans">
                  Phone / WhatsApp <span className="text-muted normal-case tracking-normal font-medium">(with country code)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +1 408 555 0123"
                  className="w-full px-4 py-3 bg-cream border border-border rounded-lg text-navy font-sans text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-[10px] font-bold uppercase tracking-widest text-navy mb-2 font-sans">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cream border border-border rounded-lg text-navy font-sans text-sm focus:outline-none focus:border-accent transition-colors"
                >
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-widest text-navy mb-2 font-sans">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Describe your tax or compliance situation..."
                  className="w-full px-4 py-3 bg-cream border border-border rounded-lg text-navy font-sans text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {status.message && (
                <div
                  className={`p-4 rounded-lg text-xs font-sans font-semibold ${
                    status.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : status.type === "error"
                      ? "bg-red-50 text-red-800 border border-red-200"
                      : "bg-cream-dark text-navy border border-border"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={status.type === "submitting"}
                className="w-full py-3.5 bg-accent hover:bg-accent-hover text-white font-bold text-xs uppercase tracking-wider rounded-full shadow hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:active:scale-100 font-sans"
              >
                {status.type === "submitting" ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-border flex items-start gap-3 bg-cream-dark/50 p-4 rounded-xl border border-border">
              <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <p className="text-[10px] text-navy/70 leading-relaxed font-sans">
                <strong>Data Protection Security:</strong> We handle sensitive PANs, bank statements, and tax records securely. Please use our encrypted{" "}
                <a href={PORTAL.url} target="_blank" rel="noopener noreferrer" className="text-accent font-bold hover:underline">
                  {PORTAL.label}
                </a>{" "}
                to upload files. We never accept financial documents via email or contact forms.
              </p>
            </div>
          </div>

          {/* Right Column: Info & Booking */}
          <div className="lg:col-span-6 space-y-8">
            {/* Quick Contact Info */}
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm space-y-6">
              <h2 className="font-serif text-xl font-bold text-navy">Direct Contact</h2>

              <div className="space-y-4 text-xs font-sans">
                <p className="flex items-center gap-3">
                  <span className="p-2 bg-cream rounded border border-border text-accent">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-accent font-bold text-navy">
                    {CONTACT.phone}
                  </a>
                </p>

                <p className="flex items-center gap-3">
                  <span className="p-2 bg-cream rounded border border-border text-accent">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 19v-8.93a2 2 0 01.89-1.664l8-5.333a2 2 0 012.22 0l8 5.333A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-2.25-1.5a2 2 0 00-2.22 0l-2.25 1.5" />
                    </svg>
                  </span>
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-accent font-bold text-navy break-all">
                    {CONTACT.email}
                  </a>
                </p>

                <div className="pt-2">
                  <a
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-full shadow active:scale-95 transition-all text-xs uppercase tracking-wider font-sans"
                  >
                    {/* WhatsApp icon */}
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.59 2.001 14.12 1.01 11.5 1.01c-5.436 0-9.861 4.372-9.865 9.802-.001 1.736.486 3.431 1.411 4.937l-.994 3.634 3.738-.979z" />
                    </svg>
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="pt-6 border-t border-border space-y-3">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-navy font-sans">
                  Office Hours
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-navy/80">
                  <div>
                    <span className="font-bold text-navy block mb-0.5">India Time (IST):</span>
                    <span className="text-muted font-medium block">{CONTACT.officeHours.ist}</span>
                  </div>
                  <div>
                    <span className="font-bold text-navy block mb-0.5">US Eastern (ET):</span>
                    <span className="text-muted font-medium block">{CONTACT.officeHours.usEastern}</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="font-bold text-navy block mb-0.5">US Pacific (PT):</span>
                    <span className="text-muted font-medium block">{CONTACT.officeHours.usPacific}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scheduler */}
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm space-y-4">
              <h2 className="font-serif text-xl font-bold text-navy">Schedule Directly</h2>
              <p className="text-xs text-navy/80 font-sans leading-relaxed">
                Pick a slot that works for your timezone. We'll automatically send a Zoom or Google Meet invite.
              </p>

              <div className="border border-border rounded-xl overflow-hidden bg-cream-dark/30 flex flex-col justify-center items-center text-center p-8">
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-navy font-serif text-sm mb-1.5">Strategy Consultation</h3>
                <p className="text-[11px] text-muted max-w-xs mb-6 font-sans">
                  {CONTACT.meetingFormat} Select a date and time to secure your calendar slot.
                </p>
                <a
                  href={BOOKING.calComUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-navy hover:bg-navy-dark text-white text-xs font-bold rounded-full shadow transition-all font-sans uppercase tracking-wider"
                >
                  Open Scheduler &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
