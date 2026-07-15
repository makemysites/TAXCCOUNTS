"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, CONTACT, BOOKING } from "@/lib/firm-content";
import { cn } from "@/lib/utils";
import Logo from "@/components/shared/Logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Over the dark homepage hero the header is transparent; it turns solid
  // white as soon as the user scrolls (or on any inner page).
  const isHome = pathname === "/";
  const dark = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          dark
            ? "bg-transparent border-white/10 py-4"
            : scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-border/80 py-2"
            : "bg-white border-border/40 py-4"
        )}
      >

        {/* Main Nav Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <Link href="/" className="flex flex-col group">
              <Logo light={dark} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1 lg:space-x-3 items-center">
              {NAV_ITEMS.map((item) => {
                const hasChildren = "children" in item;
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

                if (hasChildren) {
                  return (
                    <div
                      key={item.label}
                      className="relative group"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className={cn(
                          "px-3 py-2 text-xs uppercase tracking-wider font-semibold transition-colors duration-200 flex items-center space-x-1 rounded-md",
                          dark
                            ? isActive
                              ? "text-gold-light bg-white/10"
                              : "text-white/80 hover:text-white hover:bg-white/10"
                            : isActive
                            ? "text-accent bg-accent/5"
                            : "text-navy/85 hover:text-navy hover:bg-navy/5"
                        )}
                        aria-expanded={activeDropdown === item.label ? "true" : "false"}
                        onClick={() => toggleDropdown(item.label)}
                      >
                        <span>{item.label}</span>
                        <svg
                          className={cn(
                            "w-3.5 h-3.5 transition-transform duration-200",
                            dark ? "text-white/60 group-hover:text-white" : "text-navy/60 group-hover:text-navy",
                            activeDropdown === item.label && "rotate-180"
                          )}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Dropdown Menu — pt-3 bridges the hover gap so it doesn't flicker shut */}
                      <div
                        className={cn(
                          "absolute left-1/2 -translate-x-1/2 top-full pt-3 w-screen max-w-sm transition-all duration-200 origin-top transform z-50",
                          activeDropdown === item.label
                            ? "opacity-100 scale-y-100 pointer-events-auto visible"
                            : "opacity-0 scale-y-95 pointer-events-none invisible"
                        )}
                      >
                        <div
                          className={cn(
                            "rounded-xl overflow-hidden p-4 grid gap-2",
                            dark
                              ? "bg-navy-dark/95 backdrop-blur-md ring-1 ring-white/15 shadow-[0_24px_60px_-16px_rgba(0,0,0,0.6)]"
                              : "bg-white border border-border shadow-xl"
                          )}
                        >
                          <div className="grid grid-cols-1 gap-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={cn(
                                  "group/item flex items-start p-2.5 rounded-lg transition-colors",
                                  dark ? "hover:bg-white/5" : "hover:bg-cream-dark"
                                )}
                              >
                                <div className="flex-1">
                                  <div
                                    className={cn(
                                      "text-[13px] font-bold transition-colors",
                                      dark
                                        ? "text-white group-hover/item:text-gold-light"
                                        : "text-navy group-hover/item:text-accent"
                                    )}
                                  >
                                    {child.label}
                                  </div>
                                  <div
                                    className={cn(
                                      "text-xs mt-0.5 font-sans line-clamp-1",
                                      dark ? "text-white/50" : "text-muted"
                                    )}
                                  >
                                    {child.description}
                                  </div>
                                </div>
                              </Link>
                            ))}
                            {item.label === "Services" && (
                              <div
                                className={cn(
                                  "mt-2 pt-3 border-t flex justify-between items-center text-xs",
                                  dark ? "border-white/10" : "border-border"
                                )}
                              >
                                <span className={dark ? "text-white/50" : "text-muted"}>
                                  Need details?
                                </span>
                                <Link
                                  href="/services"
                                  className={cn(
                                    "font-bold hover:underline",
                                    dark ? "text-gold-light" : "text-accent"
                                  )}
                                >
                                  How We Work &rarr;
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 text-xs uppercase tracking-wider font-semibold transition-colors duration-200 rounded-md",
                      dark
                        ? isActive
                          ? "text-gold-light bg-white/10"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                        : isActive
                        ? "text-accent bg-accent/5"
                        : "text-navy/85 hover:text-navy hover:bg-navy/5"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right CTAs */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href={BOOKING.calComUrl} className="btn btn-gold btn-sm">
                Book a Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-3 md:hidden">
              <a
                href={BOOKING.calComUrl}
                className="px-4 py-1.5 bg-gold hover:bg-gold-light text-navy font-bold text-xs uppercase tracking-wider rounded-full shadow-sm transition-colors"
              >
                Book
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={cn(
                  "p-1 focus:outline-none transition-colors",
                  dark ? "text-white hover:text-gold-light" : "text-navy hover:text-accent"
                )}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Backdrop for mobile menu */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-navy/20 backdrop-blur-xs z-30 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Navigation Panel */}
        <div
          className={cn(
            "fixed inset-y-0 right-0 z-40 w-full max-w-xs bg-white border-l border-border shadow-2xl p-6 transition-transform duration-300 transform md:hidden",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex justify-between items-center pb-6 border-b border-border">
            <div className="flex flex-col">
              <Logo size="sm" />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-navy hover:text-accent focus:outline-none"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="mt-8 space-y-6 flex flex-col justify-between h-[calc(100%-100px)] overflow-y-auto">
            <div className="space-y-4">
              {NAV_ITEMS.map((item) => {
                const hasChildren = "children" in item;
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

                if (hasChildren) {
                  return (
                    <div key={item.label} className="space-y-2">
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className={cn(
                          "w-full text-left font-bold text-sm uppercase tracking-wider flex justify-between items-center py-2",
                          isActive ? "text-accent" : "text-navy"
                        )}
                      >
                        <span>{item.label}</span>
                        <svg
                          className={cn(
                            "w-4 h-4 transition-transform duration-200 text-navy/70",
                            activeDropdown === item.label && "rotate-180"
                          )}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div
                        className={cn(
                          "pl-4 border-l border-border space-y-2 overflow-hidden transition-all duration-200",
                          activeDropdown === item.label ? "max-h-96 opacity-100 py-1" : "max-h-0 opacity-0"
                        )}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block text-xs font-semibold text-navy/70 hover:text-accent py-1"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "block font-bold text-sm uppercase tracking-wider py-2 transition-colors",
                      isActive ? "text-accent" : "text-navy hover:text-accent"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="space-y-4 pt-6 border-t border-border">
              <a
                href={BOOKING.calComUrl}
                className="block w-full text-center py-3.5 bg-gold hover:bg-gold-light text-navy font-bold text-xs uppercase tracking-wider rounded-full shadow transition-colors"
              >
                Book a Consultation
              </a>
              <div className="text-center text-[10px] text-muted space-y-1 font-sans">
                <div>Office hours: {CONTACT.officeHours.ist}</div>
                {CONTACT.phone && (
                  <a href={`tel:${CONTACT.phoneRaw}`} className="block hover:underline text-navy font-semibold mt-1">
                    Call: {CONTACT.phone}
                  </a>
                )}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
