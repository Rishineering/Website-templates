"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Calendar,
  MessageCircle,
  Compass,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { siteData, buildWhatsAppUrl } from "@/config/siteData";

export function HeroSection() {
  if (!siteData.hero.enabled) return null;

  const consultHref = siteData.servicesSection.enabled
    ? "#services"
    : "/book-consultation";

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 md:py-28">
      {/* Background Fallback Celestial SVG & Optional Ritual Video */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={siteData.hero.fallbackBgSvg}
          alt="Celestial Vedic Mandala"
          className="w-full h-full object-cover opacity-50 dark:opacity-75"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={siteData.hero.fallbackBgSvg}
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-lighten pointer-events-none"
        >
          <source src={siteData.hero.videoSrc} type="video/mp4" />
        </video>

        {/* Rotating Sacred Astrolabe Ring Overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="w-[620px] h-[620px] sm:w-[820px] sm:h-[820px] rounded-full border border-gold-500/15 animate-spin-slow flex items-center justify-center">
            <div className="w-[460px] h-[460px] sm:w-[640px] sm:h-[640px] rounded-full border border-dashed border-gold-400/20 animate-spin-reverse-slow" />
          </div>
        </div>

        {/* Vignette Gradient Overlay for readability in both themes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)]/80 via-[var(--bg-primary)]/55 to-[var(--bg-primary)]" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Certified Vedic Astrologer Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-gold-400/50 bg-gold-500/10 backdrop-blur-md mb-7 shadow-gold-glow"
        >
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-gold-300 dark:text-gold-200">
            {siteData.hero.badge}
          </span>
        </motion.div>

        {/* Subheadline (Devanagari + English Brand Title) */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-devanagari font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-gold-400 mb-3 tracking-wide"
        >
          {siteData.hero.subheadline}
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gold-gradient tracking-tight leading-[1.08] mb-6"
        >
          {siteData.hero.headline}
        </motion.h1>

        {/* Ornate Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent to-gold-400" />
          <Compass className="w-5 h-5 text-gold-400 animate-pulse" />
          <span className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent to-gold-400" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl mx-auto text-base sm:text-xl md:text-2xl text-[var(--text-secondary)] font-normal leading-relaxed mb-9"
        >
          {siteData.hero.tagline}
        </motion.p>

        {/* 3 Trust Pills */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.38 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10"
        >
          {siteData.hero.trustPills.map((pill) => (
            <div
              key={pill}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-gold)] backdrop-blur-md text-xs sm:text-sm font-medium text-[var(--text-primary)] shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
              <span>{pill}</span>
            </div>
          ))}
        </motion.div>

        {/* 3 Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={consultHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full btn-gold-primary text-sm sm:text-base tracking-wide"
          >
            <span>{siteData.hero.ctas.primary}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <Link
            href="/book-consultation"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full btn-gold-outline text-sm sm:text-base font-semibold tracking-wide"
          >
            <Calendar className="w-4 h-4 text-gold-400" />
            <span>{siteData.hero.ctas.secondary}</span>
          </Link>

          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full border border-emerald-500/40 bg-emerald-950/30 hover:bg-emerald-900/40 text-emerald-300 dark:text-emerald-200 text-sm sm:text-base font-semibold transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>{siteData.hero.ctas.whatsapp}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
