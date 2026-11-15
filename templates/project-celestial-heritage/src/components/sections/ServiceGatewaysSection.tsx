"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Flame,
  Droplets,
  CheckCircle2,
  Flower2,
} from "lucide-react";
import { siteData, getEnabledServiceGateways } from "@/config/siteData";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ServiceGatewaysSection() {
  const gateways = getEnabledServiceGateways();

  if (!siteData.serviceGatewaysSection.enabled || gateways.length === 0) {
    return null;
  }

  return (
    <section
      id={siteData.serviceGatewaysSection.id}
      className="relative py-20 md:py-28 border-t border-[var(--border-gold)]/50"
    >
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={siteData.serviceGatewaysSection.badge}
          heading={siteData.serviceGatewaysSection.heading}
          subtitle={siteData.serviceGatewaysSection.subtitle}
        />

        {/* 2 Dramatic Side-by-Side Architectural Gateway Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {gateways.map((card, index) => {
            const isDeity = card.id === "deity-pooja";

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`luxury-card relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden border-2 transition-all duration-500 group ${
                  isDeity
                    ? "border-gold-400/55 dark:bg-gradient-to-br dark:from-[#1E1410] dark:via-[var(--bg-card)] dark:to-[#2B1015] hover:border-gold-400"
                    : "border-amber-500/40 dark:border-slate-400/35 dark:bg-gradient-to-br dark:from-[#141419] dark:via-[var(--bg-card)] dark:to-[#1E1E28] hover:border-amber-500"
                }`}
              >
                {/* Decorative Watermark Emblem */}
                <div className="pointer-events-none absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  {isDeity ? (
                    <Flower2 className="w-72 h-72 text-gold-400" />
                  ) : (
                    <Droplets className="w-72 h-72 text-amber-600 dark:text-slate-300" />
                  )}
                </div>

                <div className="relative z-10">
                  {/* Top Sanskrit Shubh Pill & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="sacred-badge">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{card.sanskritTag}</span>
                    </span>

                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-md group-hover:scale-105 transition-transform ${
                        isDeity
                          ? "border-gold-400/60 bg-gold-500/20 text-gold-400 shadow-gold-glow"
                          : "border-amber-500/45 bg-amber-500/15 text-amber-700 dark:text-amber-200"
                      }`}
                    >
                      {isDeity ? (
                        <Flame className="w-7 h-7" />
                      ) : (
                        <Droplets className="w-7 h-7" />
                      )}
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-gold-gradient mb-2 leading-tight">
                    {card.title}
                  </h3>

                  {/* Card Subtitle */}
                  <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold mb-4">
                    {card.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-7">
                    {card.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-3 pt-5 border-t border-[var(--border-gold)]/60 mb-8">
                    {card.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-3 text-sm sm:text-base text-[var(--text-primary)] font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-gold-400" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary Gateway CTA Button */}
                <div className="relative z-10 pt-2">
                  <Link
                    href={card.targetRoute}
                    className={`w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold shadow-lg transition-all ${
                      isDeity
                        ? "btn-gold-primary"
                        : "btn-gold-outline hover:btn-gold-primary"
                    }`}
                  >
                    <span>{card.ctaText}</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
