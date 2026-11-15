"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Sparkles, Flame, Users } from "lucide-react";
import { siteData } from "@/config/siteData";
import { SectionHeader } from "@/components/ui/SectionHeader";

const highlightIcons = [BookOpen, Flame, Sparkles, Users];

export function AboutSection() {
  if (!siteData.about.enabled) return null;

  return (
    <section
      id={siteData.about.id}
      className="relative py-20 md:py-28 overflow-hidden border-t border-[var(--border-gold)]/50"
    >
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-gold-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={siteData.about.badge}
          heading={siteData.about.heading}
          subtitle={siteData.about.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Ornate Double-Bordered Champagne-Gold Arch Frame + Rotating Halo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[390px]">
              {/* Rotating Sacred Geometry Halo Behind Portrait */}
              <div className="pointer-events-none absolute -inset-6 flex items-center justify-center">
                <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-dashed border-gold-400/35 animate-spin-slow" />
                <div className="absolute w-60 h-60 sm:w-64 sm:h-64 rounded-full border border-gold-500/20 animate-spin-reverse-slow" />
              </div>

              {/* Outer Champagne-Gold Arch Container */}
              <div className="relative p-3 rounded-t-[200px] rounded-b-3xl border-2 border-gold-400/60 bg-gradient-to-b from-gold-500/15 via-[var(--bg-card)] to-[var(--bg-card)] shadow-gold-glow-lg">
                {/* Inner Second Gold Arch Border */}
                <div className="relative overflow-hidden rounded-t-[188px] rounded-b-2xl border border-gold-300/45 bg-obsidian aspect-[4/5]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={siteData.about.image}
                    alt={siteData.about.bioTitle}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />

                  {/* Bottom Nameplate Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-5 text-center">
                    <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-gold-300 font-semibold">
                      {siteData.brand.panditName}
                    </span>
                    <p className="font-serif text-lg text-white font-semibold mt-0.5">
                      {siteData.about.bioTitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Title, 3 Paragraphs & 4 Highlight Feature Boxes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-xs font-semibold tracking-widest uppercase text-gold-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Rigveda & Yajurveda Karamkand Mastery</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-gold-gradient">
              {siteData.about.bioTitle}
            </h3>

            <div className="space-y-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              {siteData.about.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* 4 Highlight Feature Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {siteData.about.highlights.map((highlight, idx) => {
                const IconComponent =
                  highlightIcons[idx % highlightIcons.length];
                return (
                  <div
                    key={highlight}
                    className="luxury-card rounded-2xl p-4 sm:p-5 flex items-center gap-4"
                  >
                    <div className="relative z-10 w-12 h-12 rounded-xl border border-gold-400/50 bg-gold-500/15 flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5 text-gold-400" />
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-serif text-lg font-bold text-[var(--text-primary)] leading-snug">
                        {highlight}
                      </h4>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">
                        Strict Shastric Standard
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
