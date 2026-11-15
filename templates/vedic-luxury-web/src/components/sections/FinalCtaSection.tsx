"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Calendar, MessageCircle, ArrowRight } from "lucide-react";
import { siteData, buildWhatsAppUrl } from "@/config/siteData";

export function FinalCtaSection() {
  if (!siteData.finalCta.enabled) return null;

  const consultHref = siteData.servicesSection.enabled
    ? "#services"
    : "/book-consultation";

  return (
    <section className="relative py-20 md:py-28 border-t border-[var(--border-gold)]/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[32px] p-8 sm:p-14 md:p-16 border-2 border-gold-400/55 bg-gradient-to-br from-[#1C141F] via-[#110D16] to-[#231710] text-center overflow-hidden shadow-gold-glow-lg"
        >
          {/* Decorative Rotating Mandala Aura */}
          <div className="pointer-events-none absolute -top-36 -right-36 w-96 h-96 rounded-full border border-dashed border-gold-400/20 animate-spin-slow" />
          <div className="pointer-events-none absolute -bottom-36 -left-36 w-96 h-96 rounded-full border border-dashed border-gold-400/20 animate-spin-reverse-slow" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/50 text-gold-300 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>{siteData.finalCta.badge}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-gold-gradient leading-tight mb-6">
              {siteData.finalCta.heading}
            </h2>

            <p className="text-base sm:text-lg text-gold-100/85 leading-relaxed mb-10">
              {siteData.finalCta.description}
            </p>

            {/* 3 CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={consultHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full btn-gold-primary text-sm sm:text-base"
              >
                <span>{siteData.finalCta.buttons.consultNow}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/book-consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gold-300/60 bg-white/5 hover:bg-gold-500/20 text-white text-sm sm:text-base font-semibold transition-all hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-gold-400" />
                <span>{siteData.finalCta.buttons.bookAppointment}</span>
              </Link>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-emerald-400/50 bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-200 text-sm sm:text-base font-semibold transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>{siteData.finalCta.buttons.whatsappUs}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
