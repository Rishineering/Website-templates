"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteData, getEnabledAstrologyServices } from "@/config/siteData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LuxuryIcon } from "@/components/ui/LuxuryIcon";

export function AstrologyServicesSection() {
  const services = getEnabledAstrologyServices();

  if (!siteData.servicesSection.enabled || services.length === 0) {
    return null;
  }

  return (
    <section
      id={siteData.servicesSection.id}
      className="relative py-20 md:py-28 border-t border-[var(--border-gold)]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={siteData.servicesSection.badge}
          heading={siteData.servicesSection.heading}
          subtitle={siteData.servicesSection.subtitle}
        />

        {/* Responsive Luxury Grid for the 7 Removable Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="luxury-card rounded-3xl p-7 flex flex-col justify-between group"
            >
              <div className="relative z-10">
                {/* Top Icon Emblem + Ornamental Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl border border-gold-400/50 bg-gradient-to-br from-gold-500/20 via-gold-500/5 to-transparent flex items-center justify-center shadow-gold-glow group-hover:scale-105 transition-transform">
                    <LuxuryIcon
                      name={service.icon}
                      className="w-6 h-6 text-gold-400"
                    />
                  </div>
                  <span className="font-serif text-xs uppercase tracking-[0.22em] text-gold-400/70">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl sm:text-[26px] font-bold text-[var(--text-primary)] group-hover:text-gold-400 transition-colors mb-3 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-[var(--border-gold)]/60 space-y-5">
                {/* Availability Badges ("Online Available", "Offline Available") */}
                <div className="flex flex-wrap items-center gap-2">
                  {service.badges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gold-500/10 border border-gold-400/30 text-[var(--text-primary)]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                      <span>{badge}</span>
                    </span>
                  ))}
                </div>

                {/* Book Consultation CTA */}
                <Link
                  href={`/book-consultation?service=${service.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl btn-gold-primary text-sm font-semibold"
                >
                  <span>{service.ctaText}</span>
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
