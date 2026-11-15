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
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden border-2 transition-all duration-500 group ${
                  isDeity
                    ? "border-gold-400/50 bg-gradient-to-br from-[#1E1410] via-[var(--bg-card)] to-[#2B1015] hover:border-gold-300 hover:shadow-[0_24px_55px_-10px_rgba(212,175,55,0.35)]"
                    : "border-slate-400/35 bg-gradient-to-br from-[#141419] via-[var(--bg-card)] to-[#1E1E28] hover:border-amber-200/60 hover:shadow-[0_24px_55px_-10px_rgba(226,232,240,0.2)]"
                }`}
              >
                {/* Decorative Watermark Emblem */}
                <div className="pointer-events-none absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  {isDeity ? (
                    <Flower2 className="w-72 h-72 text-gold-400" />
                  ) : (
                    <Droplets className="w-72 h-72 text-slate-300" />
                  )}
                </div>

                <div className="relative z-10">
                  {/* Top Sanskrit Shubh Pill & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border ${
                        isDeity
                          ? "bg-gold-500/15 border-gold-400/40 text-gold-300"
                          : "bg-slate-700/20 border-slate-400/30 text-slate-200"
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{card.sanskritTag}</span>
                    </span>

                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-md group-hover:scale-105 transition-transform ${
                        isDeity
                          ? "border-gold-400/60 bg-gold-500/20 text-gold-300 shadow-gold-glow"
                          : "border-slate-400/40 bg-slate-700/20 text-slate-100"
                      }`}
                    >
                      {isDeity ? (
                        <Flame className="w-7 h-7 text-gold-400" />
                      ) : (
                        <Droplets className="w-7 h-7 text-slate-200" />
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
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 ${
                            isDeity ? "text-gold-400" : "text-amber-200"
                          }`}
                        />
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
                        : "bg-gradient-to-r from-amber-100 via-amber-200 to-amber-100 text-obsidian hover:brightness-105"
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
