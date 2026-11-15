"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Calendar,
  MessageCircle,
  ArrowRight,
  Flame,
  CheckCircle2,
} from "lucide-react";
import { siteData, buildWhatsAppUrl } from "@/config/siteData";

export function HeroSection() {
  if (!siteData.hero.enabled) return null;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 md:py-28">
      {/* Background Layer: Dark Obsidian Mandala in Dark Mode vs Radiant Saffron-Orange Sunburst in Light Mode */}
      <div className="absolute inset-0 z-0">
        {/* DARK MODE BACKGROUND */}
        <div className="hidden dark:block absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={siteData.hero.fallbackBgSvg}
            alt="Celestial Vedic Mandala"
            className="w-full h-full object-cover opacity-75"
          />
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={siteData.hero.fallbackBgSvg}
            className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-lighten pointer-events-none"
          >
            <source src={siteData.hero.videoSrc} type="video/mp4" />
          </video>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(7,6,9,0.82) 0%, rgba(7,6,9,0.58) 50%, rgba(7,6,9,1) 100%)",
            }}
          />
        </div>

        {/* LIGHT / SACRED SAFFRON MODE BACKGROUND */}
        <div
          className="block dark:hidden absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 28%, rgba(255, 140, 0, 0.45) 0%, rgba(255, 167, 38, 0.28) 42%, rgba(255, 204, 128, 0.65) 100%), linear-gradient(180deg, #FF9E2C 0%, #FFBE6B 48%, #FFD699 100%)",
          }}
        >
          {/* Subtle Saffron Surya Rays & Sacred Geometry */}
          <div
            className="absolute inset-0 opacity-35"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 42%, rgba(180, 45, 8, 0.16) 0%, transparent 60%)",
            }}
          />
        </div>

        {/* Rotating Sacred Astrolabe Ring Overlay (Visible in both modes) */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="w-[620px] h-[620px] sm:w-[820px] sm:h-[820px] rounded-full border border-[#B43C08]/25 dark:border-gold-500/15 animate-spin-slow flex items-center justify-center">
            <div className="w-[460px] h-[460px] sm:w-[640px] sm:h-[640px] rounded-full border border-dashed border-[#B43C08]/30 dark:border-gold-400/20 animate-spin-reverse-slow" />
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Vedic Karamkand Specialist Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#9A2408]/45 dark:border-gold-400/50 bg-[#FFF5E6]/85 dark:bg-gold-500/10 backdrop-blur-md mb-6 shadow-gold-glow"
        >
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#7A1805] dark:text-gold-200">
            {siteData.hero.badge}
          </span>
        </motion.div>

        {/* Subheadline (Devanagari Brand Name) */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-devanagari font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#6E1406] dark:text-gold-400 mb-3 tracking-wide"
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

        {/* Ornate Sacred Flame Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="h-[1.5px] w-16 sm:w-28 bg-gradient-to-r from-transparent to-[#9A2408] dark:to-gold-400" />
          <Flame className="w-5 h-5 text-gold-400 animate-pulse" />
          <span className="h-[1.5px] w-16 sm:w-28 bg-gradient-to-l from-transparent to-[#9A2408] dark:to-gold-400" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[var(--text-secondary)] font-medium leading-relaxed mb-9"
        >
          {siteData.hero.tagline}
        </motion.p>

        {/* 4 Trust Pills */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.38 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10"
        >
          {siteData.hero.trustPills.map((pill) => (
            <div
              key={pill}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-gold)] backdrop-blur-md text-xs sm:text-sm font-semibold text-[var(--text-primary)] shadow-sm"
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
            href="#services"
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full border border-emerald-700/60 dark:border-emerald-500/40 bg-emerald-700 hover:bg-emerald-600 dark:bg-emerald-950/30 dark:hover:bg-emerald-900/40 text-white dark:text-emerald-200 text-sm sm:text-base font-semibold transition-all hover:-translate-y-0.5 shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-white dark:text-emerald-400" />
            <span>{siteData.hero.ctas.whatsapp}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
