"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Clock,
  MapPin,
  ArrowRight,
  Flame,
  Filter,
} from "lucide-react";
import { siteData, getEnabledDeityPoojas } from "@/config/siteData";
import { SectionHeader } from "@/components/ui/SectionHeader";

const filterCategories = [
  "All Poojas",
  "Deity Worship",
  "Havan & Jaap",
  "Home & Sanskaar",
] as const;

type FilterType = (typeof filterCategories)[number];

export default function DeityPoojaServicesPage() {
  const allPoojas = getEnabledDeityPoojas();
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("All Poojas");

  const filteredPoojas =
    selectedFilter === "All Poojas"
      ? allPoojas
      : allPoojas.filter((item) => item.filterCategory === selectedFilter);

  return (
    <div className="relative py-12 sm:py-16 md:py-20">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[720px] h-[360px] rounded-full bg-gold-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb + Switch Pill */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[var(--text-muted)]">
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gold-400 font-semibold">Deity Poojas</span>
          </div>

          <Link
            href="/shraadh-sanskaar"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-400/40 bg-slate-800/30 hover:bg-slate-800/60 text-slate-200 text-xs font-semibold transition-all hover:scale-105"
          >
            <span>Looking for Shraadh / Pitru Karya? Switch Page →</span>
          </Link>
        </div>

        {/* Hero Header */}
        <SectionHeader
          badge={siteData.deityPoojaSection.badge}
          heading={siteData.deityPoojaSection.heading}
          subtitle={siteData.deityPoojaSection.subtitle}
        />

        {/* Sanskrit Shloka Banner */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="font-devanagari text-lg sm:text-xl text-gold-300 font-semibold tracking-wide py-3 px-6 rounded-2xl bg-gold-500/10 border border-gold-400/30 shadow-sm inline-block">
            {siteData.deityPoojaSection.shloka}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold mr-2">
            <Filter className="w-3.5 h-3.5 text-gold-400" />
            <span>Filter By:</span>
          </div>
          {filterCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                selectedFilter === cat
                  ? "btn-gold-primary shadow-gold-glow scale-105"
                  : "bg-[var(--bg-card)] border border-[var(--border-gold)] text-[var(--text-secondary)] hover:border-gold-400 hover:text-[var(--text-primary)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pooja Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPoojas.map((pooja, index) => (
            <motion.div
              key={pooja.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: (index % 3) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="luxury-card rounded-3xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Floating "With Complete Samagri" Badge */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-obsidian border-b border-[var(--border-gold)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={pooja.image}
                    alt={pooja.title}
                    className="luxury-card-image w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Top-Right Badge */}
                  <div className="absolute top-3.5 right-3.5 z-10 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-gold-400/60 text-gold-300 text-xs font-semibold tracking-wide shadow-gold-glow">
                    <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                    <span>{pooja.badge}</span>
                  </div>

                  {/* Deity Tag Bottom-Left */}
                  <div className="absolute bottom-3 left-4 z-10 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-200">
                    <Flame className="w-3.5 h-3.5 text-gold-400" />
                    <span>{pooja.deityOrCategory}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="relative z-10 p-6 pb-4">
                  <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] group-hover:text-gold-400 transition-colors mb-2.5 leading-snug">
                    {pooja.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                    {pooja.description}
                  </p>
                </div>
              </div>

              {/* Card Meta & CTA */}
              <div className="relative z-10 px-6 pb-6 pt-2 space-y-4">
                <div className="flex items-center justify-between py-2.5 px-4 rounded-xl bg-[var(--bg-primary)]/70 border border-[var(--border-gold)]/60 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>{pooja.duration}</span>
                  </div>
                  <span className="h-3 w-[1px] bg-[var(--border-gold)]" />
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>{pooja.modes[0]}</span>
                  </div>
                </div>

                <Link
                  href={`/book-consultation?category=pooja&service=${encodeURIComponent(
                    pooja.title
                  )}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl btn-gold-primary text-sm font-semibold"
                >
                  <span>Book This Pooja</span>
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
