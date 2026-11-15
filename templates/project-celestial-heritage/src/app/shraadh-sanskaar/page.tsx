"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock,
  MapPin,
  ArrowRight,
  Droplets,
  MessageCircle,
  Phone,
  Filter,
  ShieldAlert,
} from "lucide-react";
import {
  siteData,
  getEnabledShraadhSanskaars,
  buildWhatsAppUrl,
} from "@/config/siteData";
import { SectionHeader } from "@/components/ui/SectionHeader";

const filterCategories = [
  "All Sanskaars",
  "Antim & Terahvin Rites",
  "Pind Daan & Shraadh",
  "Pitru Dosh & Moksha",
] as const;

type FilterType = (typeof filterCategories)[number];

export default function ShraadhSanskaarPage() {
  const allSanskaars = getEnabledShraadhSanskaars();
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("All Sanskaars");
  const hasPhone = Boolean(siteData.contact.phoneNumber?.trim());

  const filteredSanskaars =
    selectedFilter === "All Sanskaars"
      ? allSanskaars
      : allSanskaars.filter((item) => item.filterCategory === selectedFilter);

  return (
    <div className="relative py-12 sm:py-16 md:py-20">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[720px] h-[360px] rounded-full bg-slate-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb + Switch Pill */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[var(--text-muted)]">
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-amber-200 font-semibold">
              Shraadh & Sanskaar
            </span>
          </div>

          <Link
            href="/pooja-services"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-400/40 bg-gold-500/10 hover:bg-gold-500/25 text-gold-300 text-xs font-semibold transition-all hover:scale-105"
          >
            <span>Looking for Deity Poojas? Switch Page →</span>
          </Link>
        </div>

        {/* Hero Header */}
        <SectionHeader
          badge={siteData.shraadhSanskaarSection.badge}
          heading={siteData.shraadhSanskaarSection.heading}
          subtitle={siteData.shraadhSanskaarSection.subtitle}
        />

        {/* Sanskrit Shloka Banner */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="font-devanagari text-lg sm:text-xl text-amber-200 font-semibold tracking-wide py-3 px-6 rounded-2xl bg-slate-800/40 border border-slate-500/30 shadow-sm inline-block">
            {siteData.shraadhSanskaarSection.shloka}
          </p>
        </div>

        {/* Urgent Guidance Callout Banner */}
        <div className="max-w-4xl mx-auto mb-12 p-5 sm:p-6 rounded-2xl border-2 border-amber-300/40 bg-gradient-to-r from-[#20181A] via-[var(--bg-card)] to-[#181822] shadow-gold-glow flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldAlert className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-amber-200">
                Immediate Bereavement Assistance & Shraadh Tithi Guidance
              </h4>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">
                {siteData.shraadhSanskaarSection.urgentNotice}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={buildWhatsAppUrl(
                "Namaste Pandit Ji. We need urgent guidance for Antim Sanskaar / Shraadh ritual."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs sm:text-sm font-semibold transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Urgent WhatsApp</span>
            </a>

            {hasPhone && (
              <a
                href={`tel:${siteData.contact.phoneNumber}`}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl btn-gold-outline text-xs sm:text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call Pandit Ji</span>
              </a>
            )}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold mr-2">
            <Filter className="w-3.5 h-3.5 text-amber-300" />
            <span>Filter By:</span>
          </div>
          {filterCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                selectedFilter === cat
                  ? "bg-amber-100 text-obsidian shadow-md font-bold scale-105"
                  : "bg-[var(--bg-card)] border border-slate-500/30 text-[var(--text-secondary)] hover:border-amber-300 hover:text-[var(--text-primary)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Shraadh Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSanskaars.map((sanskaar, index) => (
            <motion.div
              key={sanskaar.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: (index % 3) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="luxury-card rounded-3xl overflow-hidden flex flex-col justify-between group border-slate-500/35 hover:border-amber-300/60"
            >
              <div>
                {/* Image Container with Floating "Vidhi & Samagri Included" Badge */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-obsidian border-b border-[var(--border-gold)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={sanskaar.image}
                    alt={sanskaar.title}
                    className="luxury-card-image w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Top-Right Badge */}
                  <div className="absolute top-3.5 right-3.5 z-10 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-amber-300/60 text-amber-200 text-xs font-semibold tracking-wide shadow-md">
                    <Droplets className="w-3.5 h-3.5 text-amber-300" />
                    <span>{sanskaar.badge}</span>
                  </div>

                  {/* Category Tag Bottom-Left */}
                  <div className="absolute bottom-3 left-4 z-10 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-100">
                    <Droplets className="w-3.5 h-3.5 text-amber-300" />
                    <span>{sanskaar.categoryTag}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="relative z-10 p-6 pb-4">
                  <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] group-hover:text-amber-200 transition-colors mb-2.5 leading-snug">
                    {sanskaar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                    {sanskaar.description}
                  </p>
                </div>
              </div>

              {/* Card Meta & CTA */}
              <div className="relative z-10 px-6 pb-6 pt-2 space-y-4">
                <div className="flex items-center justify-between py-2.5 px-4 rounded-xl bg-[var(--bg-primary)]/70 border border-[var(--border-gold)]/60 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>{sanskaar.duration}</span>
                  </div>
                  <span className="h-3 w-[1px] bg-[var(--border-gold)]" />
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>{sanskaar.modes[0]}</span>
                  </div>
                </div>

                <Link
                  href={`/book-consultation?category=shraadh&service=${encodeURIComponent(
                    sanskaar.title
                  )}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-amber-100 via-amber-200 to-amber-100 text-obsidian font-bold text-sm hover:brightness-105 transition-all shadow-md"
                >
                  <span>Book Sanskaar / Inquire</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
