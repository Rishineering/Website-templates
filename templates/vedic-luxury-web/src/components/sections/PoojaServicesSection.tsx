"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Globe2, ArrowRight, Sparkles } from "lucide-react";
import { siteData, getEnabledPoojaServices } from "@/config/siteData";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function PoojaServicesSection() {
  const poojas = getEnabledPoojaServices();

  if (!siteData.poojaSection.enabled || poojas.length === 0) {
    return null;
  }

  return (
    <section
      id={siteData.poojaSection.id}
      className="relative py-20 md:py-28 border-t border-[var(--border-gold)]/50 bg-[var(--bg-secondary)]/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={siteData.poojaSection.badge}
          heading={siteData.poojaSection.heading}
          subtitle={siteData.poojaSection.subtitle}
        />

        {/* Responsive Grid for the 10 Removable Pooja Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {poojas.map((pooja, index) => (
            <motion.div
              key={pooja.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: (index % 3) * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="luxury-card rounded-3xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Card Image Container with Top-Right "With Samagri" Floating Pill */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-obsidian border-b border-[var(--border-gold)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={pooja.image}
                    alt={pooja.title}
                    className="luxury-card-image w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top-Right Floating Pill: "With Samagri" */}
                  <div className="absolute top-3.5 right-3.5 z-10 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-gold-400/60 text-gold-300 text-xs font-semibold tracking-wide shadow-gold-glow">
                    <Sparkles className="w-3 h-3 text-gold-400" />
                    <span>{pooja.pill}</span>
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

              {/* Card Footer: Meta (Duration & Mode) + "Book Pooja" CTA */}
              <div className="relative z-10 px-6 pb-6 pt-3 space-y-4">
                <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-[var(--bg-primary)]/60 border border-[var(--border-gold)]/60 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                    <span className="font-medium">{pooja.duration}</span>
                  </div>
                  <span className="h-3.5 w-[1px] bg-[var(--border-gold)]" />
                  <div className="flex items-center gap-1.5">
                    <Globe2 className="w-4 h-4 text-gold-400 shrink-0" />
                    <span className="font-medium">{pooja.mode}</span>
                  </div>
                </div>

                <Link
                  href={`/book-consultation?service=${pooja.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl btn-gold-primary text-sm font-semibold"
                >
                  <span>{pooja.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
