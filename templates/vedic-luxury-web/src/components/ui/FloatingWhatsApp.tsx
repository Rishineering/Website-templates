"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/config/siteData";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 p-1.5 sm:pr-4 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white border border-gold-300/60 shadow-[0_10px_30px_rgba(16,185,129,0.45)] hover:shadow-[0_14px_38px_rgba(212,175,55,0.5)] hover:-translate-y-1 transition-all duration-300"
    >
      <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-emerald-700/80 border border-gold-300/40">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30" />
        <MessageCircle className="relative w-5 h-5 text-white fill-white/15" />
      </span>
      <span className="hidden sm:flex flex-col text-left pr-1">
        <span className="text-[10px] uppercase tracking-widest text-gold-200 font-semibold leading-none">
          Instant Guidance
        </span>
        <span className="text-xs font-bold tracking-wide leading-tight mt-0.5">
          WhatsApp Us
        </span>
      </span>
    </a>
  );
}
