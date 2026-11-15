"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { siteData, getEnabledConsultationOptions } from "@/config/siteData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LuxuryIcon } from "@/components/ui/LuxuryIcon";

export function ConsultationOptionsSection() {
  const options = getEnabledConsultationOptions();

  if (!siteData.consultationSection.enabled || options.length === 0) {
    return null;
  }

  return (
    <section
      id={siteData.consultationSection.id}
      className="relative py-20 md:py-28 border-t border-[var(--border-gold)]/50 bg-[var(--bg-secondary)]/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={siteData.consultationSection.badge}
          heading={siteData.consultationSection.heading}
          subtitle={siteData.consultationSection.subtitle}
        />

        {/* 3 Consultation Option Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="luxury-card rounded-3xl p-8 flex flex-col justify-between"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl border border-gold-400/50 bg-gold-500/15 flex items-center justify-center mb-6 shadow-gold-glow">
                  <LuxuryIcon
                    name={option.icon}
                    className="w-6 h-6 text-gold-400"
                  />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gold-gradient mb-3">
                  {option.title}
                </h3>

                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
                  {option.description}
                </p>

                <ul className="space-y-3.5 pt-4 border-t border-[var(--border-gold)]/60">
                  {option.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-3 text-sm sm:text-base text-[var(--text-primary)] font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
