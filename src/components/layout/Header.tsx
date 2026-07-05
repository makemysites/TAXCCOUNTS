"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FIRM, NAV_ITEMS, PORTAL, CONTACT, BOOKING } from "@/lib/firm-content";
import { cn } from "@/lib/utils";
import Logo from "@/components/shared/Logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

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
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-border/80 py-2"
            : "bg-white border-border/40 py-4"
        )}
      >

        {/* Main Nav Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <Link href="/" className="flex flex-col group">
              <Logo />
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
                          isActive
                            ? "text-accent bg-accent/5"
                            : "text-navy/85 hover:text-navy hover:bg-navy/5"
                        )}
                        aria-expanded={activeDropdown === item.label ? "true" : "false"}
                        onClick={() => toggleDropdown(item.label)}
                      >
                        <span>{item.label}</span>
                        <svg
                          className={cn(
                            "w-3.5 h-3.5 transition-transform duration-200 text-navy/60 group-hover:text-navy",
                            activeDropdown === item.label && "rotate-180"
                          )}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Dropdown Menu */}
                      <div
                        className={cn(
                          "absolute left-1/2 -translate-x-1/2 mt-1 w-screen max-w-sm bg-white rounded-lg shadow-xl border border-border overflow-hidden transition-all duration-200 origin-top transform z-50 p-4 grid gap-2",
                          activeDropdown === item.label
                            ? "opacity-100 scale-y-100 pointer-events-auto"
                            : "opacity-0 scale-y-95 pointer-events-none"
                        )}
                      >
                        {item.label === "Services" ? (
                          <div className="grid grid-cols-1 gap-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="group/item flex items-start p-2 rounded-md hover:bg-cream-dark transition-colors"
                              >
                                <div className="flex-1">
                                  <div className="text-xs font-bold text-navy group-hover/item:text-accent transition-colors">
                                    {child.label}
                                  </div>
                                  <div className="text-[11px] text-muted mt-0.5 font-sans line-clamp-1">
                                    {child.description}
                                  </div>
                                </div>
                              </Link>
                            ))}
                            <div className="mt-2 pt-2 border-t border-border flex justify-between items-center text-[11px]">
                              <span className="text-muted">Need details?</span>
                              <Link
                                href="/services"
                                className="text-accent font-bold hover:underline"
                              >
                                How We Work &rarr;
                              </Link>
                            </div>
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 gap-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="group/item flex items-start p-2 rounded-md hover:bg-cream-dark transition-colors"
                              >
                                <div>
                                  <div className="text-xs font-bold text-navy group-hover/item:text-accent transition-colors">
                                    {child.label}
                                  </div>
                                  <div className="text-[11px] text-muted mt-0.5 font-sans">
                                    {child.description}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
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
                      isActive
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
              <Link
                href={BOOKING.calComUrl}
                className="px-6 py-2.5 bg-gold text-navy font-bold text-xs uppercase tracking-wider rounded-full shadow-md hover:bg-gold-light hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Book a Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-3 md:hidden">
              <a
                href={PORTAL.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 bg-cream hover:bg-accent hover:text-white text-navy font-bold text-xs rounded border border-border"
              >
                Portal
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-navy hover:text-accent p-1 focus:outline-none"
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
              <Logo heightClassName="h-8" />
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
                className="block w-full text-center py-3 bg-accent hover:bg-accent-hover text-white font-bold text-xs uppercase tracking-wider rounded-full shadow transition-all"
              >
                Book a Consultation
              </a>
              <div className="text-center text-[10px] text-muted space-y-1">
                <div>Office hours: IST & US Hours</div>
                <a href={`tel:${CONTACT.phoneRaw}`} className="block hover:underline text-navy font-semibold">
                  Call: {CONTACT.phone}
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
