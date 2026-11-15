"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  MapPin,
  Phone,
  MessageCircle,
  Calendar,
  ShieldCheck,
  Flame,
  Droplets,
} from "lucide-react";
import {
  siteData,
  getEnabledDeityPoojas,
  getEnabledShraadhSanskaars,
  buildWhatsAppUrl,
} from "@/config/siteData";

export function Footer() {
  const deityPoojas = getEnabledDeityPoojas().slice(0, 4);
  const shraadhSanskaars = getEnabledShraadhSanskaars().slice(0, 4);
  const hasPhone = Boolean(siteData.contact.phoneNumber?.trim());

  return (
    <footer className="relative border-t border-[var(--border-gold)] bg-[var(--bg-secondary)] pt-16 pb-10 overflow-hidden">
      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gold-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[var(--border-gold)]">
          {/* Column 1: Brand & Sanskrit Vidhi */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold-400/60 bg-gold-500/15 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <div className="font-devanagari font-serif text-xl font-bold text-gold-gradient">
                  {siteData.brand.fullTitle}
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  {siteData.brand.subtitle}
                </div>
              </div>
            </Link>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {siteData.brand.tagline}
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-gold-400 font-medium pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Rigveda & Yajurveda Shastric Vidhi Assured</span>
            </div>
          </div>

          {/* Column 2: Deity Poojas Highlights */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-4 h-4 text-gold-400" />
              <h3 className="font-serif text-lg font-semibold text-gold-gradient tracking-wide">
                Deity Poojas & Havans
              </h3>
            </div>
            <ul className="space-y-2.5 text-sm">
              {deityPoojas.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/book-consultation?category=pooja&service=${encodeURIComponent(
                      item.title
                    )}`}
                    className="text-[var(--text-secondary)] hover:text-gold-400 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/pooja-services"
                  className="text-xs uppercase tracking-wider text-gold-400 font-bold hover:underline inline-flex items-center gap-1 mt-1"
                >
                  View All Deity Poojas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Shraadh & Sanskaar Highlights */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Droplets className="w-4 h-4 text-amber-300" />
              <h3 className="font-serif text-lg font-semibold text-gold-gradient tracking-wide">
                Shraadh & Pitru Karya
              </h3>
            </div>
            <ul className="space-y-2.5 text-sm">
              {shraadhSanskaars.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/book-consultation?category=shraadh&service=${encodeURIComponent(
                      item.title
                    )}`}
                    className="text-[var(--text-secondary)] hover:text-amber-300 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/shraadh-sanskaar"
                  className="text-xs uppercase tracking-wider text-amber-300 font-bold hover:underline inline-flex items-center gap-1 mt-1"
                >
                  View All Shraadh Rites →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Urgent Guidance */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-gold-gradient mb-4 tracking-wide">
              Direct Seva Desk
            </h3>

            <div className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
              <span>{siteData.contact.location}</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
              <Phone className="w-4 h-4 text-gold-400 shrink-0" />
              {hasPhone ? (
                <a
                  href={`tel:${siteData.contact.phoneNumber}`}
                  className="hover:text-gold-400 transition-colors"
                >
                  {siteData.contact.displayPhone ||
                    siteData.contact.phoneNumber}
                </a>
              ) : (
                <span className="text-[var(--text-muted)] italic">
                  Contact Number Coming Soon
                </span>
              )}
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full btn-gold-primary text-xs font-semibold"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Ceremony Online</span>
              </Link>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full btn-gold-outline text-xs font-semibold"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Pandit Ji</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p>
            © {new Date().getFullYear()} {siteData.brand.fullTitle}. All Rights
            Reserved.
          </p>
          <p className="font-devanagari text-gold-400/80">
            ॥ ॐ शान्तिः शान्तिः शान्तिः ॥
          </p>
        </div>
      </div>
    </footer>
  );
}
