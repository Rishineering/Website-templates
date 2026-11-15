"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SectionHeaderProps {
  badge: string;
  heading: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({
  badge,
  heading,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-14 md:mb-16`}
    >
      <div className="inline-flex items-center gap-2 sacred-badge mb-4">
        <Sparkles className="w-3.5 h-3.5 text-gold-400" />
        <span>{badge}</span>
      </div>

      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gold-gradient leading-tight">
        {heading}
      </h2>

      {/* Ornate Sacred Geometry Divider */}
      <div
        className={`flex items-center gap-3 mt-4 mb-4 ${
          centered ? "justify-center" : "justify-start"
        }`}
      >
        <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold-500/70" />
        <span className="w-2 h-2 rotate-45 border border-gold-400 bg-gold-500/30" />
        <span className="w-2.5 h-2.5 rotate-45 border border-gold-300 bg-gold-400" />
        <span className="w-2 h-2 rotate-45 border border-gold-400 bg-gold-500/30" />
        <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold-500/70" />
      </div>

      {subtitle && (
        <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
