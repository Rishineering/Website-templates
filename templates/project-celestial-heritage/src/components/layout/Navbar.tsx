"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sun,
  Moon,
  Menu,
  X,
  Sparkles,
  Calendar,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";
import { siteData, getNavLinks, buildWhatsAppUrl } from "@/config/siteData";
import { useTheme } from "@/components/providers/ThemeProvider";

export function Navbar() {
  const pathname = usePathname();
  const isBookingPage = pathname?.startsWith("/book-consultation");
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = getNavLinks();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Announcement Bar */}
      {siteData.topBar.enabled && (
        <div className="w-full bg-gradient-to-r from-[#1A120B] via-[#2C1E10] to-[#1A120B] border-b border-gold-500/30 text-gold-100 py-2 px-4 text-center text-xs sm:text-sm font-medium tracking-wide">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
            <span>{siteData.topBar.text}</span>
          </div>
        </div>
      )}

      {/* Main Luxury Glass Navigation */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          scrolled
            ? "bg-[var(--bg-glass-nav)] backdrop-blur-xl border-[var(--border-gold)] py-3 shadow-gold-glow"
            : "bg-[var(--bg-glass-nav)] backdrop-blur-md border-[var(--border-gold)]/60 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Title */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-full border border-gold-400/60 bg-gradient-to-br from-gold-500/20 via-obsidian-surface to-gold-700/20 flex items-center justify-center shadow-gold-glow group-hover:border-gold-300 transition-all">
              <Sparkles className="w-5 h-5 text-gold-400 group-hover:rotate-12 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-devanagari font-serif text-lg sm:text-xl font-bold tracking-wide text-gold-gradient leading-tight">
                {siteData.brand.fullTitle}
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                {siteData.brand.subtitle}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          {!isBookingPage ? (
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    pathname === link.href
                      ? "text-gold-400 font-semibold"
                      : "text-[var(--text-secondary)] hover:text-gold-400"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ) : (
            <div className="hidden md:flex items-center">
              <span className="text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">
                Vedic Pooja & Sanskaar Booking
              </span>
            </div>
          )}

          {/* Right Actions: Theme Toggle + CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Switch to Sacred Saffron Mode"
                  : "Switch to Royal Obsidian Mode"
              }
              title={
                theme === "dark"
                  ? "Sacred Saffron Mode (Kesariya)"
                  : "Royal Obsidian Mode (Dark)"
              }
              className="flex items-center gap-2 px-3 py-2 rounded-full border border-[var(--border-gold)] bg-[var(--bg-card)] hover:border-gold-400 text-xs font-medium text-[var(--text-primary)] transition-all"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="w-4 h-4 text-orange-400" />
                  <span className="hidden xl:inline text-[var(--text-secondary)]">
                    Sacred Saffron
                  </span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-[#7C2D12]" />
                  <span className="hidden xl:inline text-[var(--text-secondary)]">
                    Royal Obsidian
                  </span>
                </>
              )}
            </button>

            {isBookingPage ? (
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full btn-gold-outline text-xs sm:text-sm font-semibold"
              >
                <ArrowLeft className="w-4 h-4 text-gold-400" />
                <span>Return Home</span>
              </Link>
            ) : (
              <>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full btn-gold-outline text-xs sm:text-sm font-semibold"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>

                <Link
                  href="/book-consultation"
                  className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-gold-primary text-xs sm:text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Pandit Ji</span>
                </Link>
              </>
            )}

            {/* Mobile Hamburger Button */}
            {!isBookingPage && (
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
                className="lg:hidden p-2.5 rounded-full border border-[var(--border-gold)] bg-[var(--bg-card)] text-[var(--text-primary)]"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-gold-400" />
                ) : (
                  <Menu className="w-5 h-5 text-gold-400" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Drawer */}
        {!isBookingPage && mobileMenuOpen && (
          <div className="lg:hidden border-t border-[var(--border-gold)] bg-[var(--bg-secondary)] px-6 py-5 space-y-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[var(--text-primary)] hover:text-gold-400 py-1 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="pt-3 border-t border-[var(--border-gold)] flex flex-col sm:flex-row gap-3">
              <Link
                href="/book-consultation"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full btn-gold-primary text-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Pandit Ji</span>
              </Link>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full btn-gold-outline text-sm font-semibold"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
