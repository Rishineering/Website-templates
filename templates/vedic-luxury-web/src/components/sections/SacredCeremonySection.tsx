"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Sparkles } from "lucide-react";
import { siteData } from "@/config/siteData";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SacredCeremonySection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoAvailable, setVideoAvailable] = useState(true);

  if (!siteData.ceremony.enabled) return null;

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (!video || !videoAvailable) {
      setIsPlaying((prev) => !prev);
      return;
    }
    if (video.paused) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setVideoAvailable(false);
          setIsPlaying((prev) => !prev);
        });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    } else {
      setIsMuted((prev) => !prev);
    }
  };

  return (
    <section
      id={siteData.ceremony.id}
      className="relative py-20 md:py-28 border-t border-[var(--border-gold)]/50 bg-[var(--bg-secondary)]/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={siteData.ceremony.badge}
          heading={siteData.ceremony.heading}
          subtitle={siteData.ceremony.subtitle}
        />

        {/* Luxury Double-Framed Gold Video Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-4xl p-2.5 sm:p-4 rounded-3xl border-2 border-gold-400/55 bg-gradient-to-b from-gold-500/20 via-[var(--bg-card)] to-gold-700/15 shadow-gold-glow-lg"
        >
          {/* Decorative Corner Filigree Accents */}
          <span className="pointer-events-none absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-gold-300 rounded-tl-lg" />
          <span className="pointer-events-none absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-gold-300 rounded-tr-lg" />
          <span className="pointer-events-none absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-gold-300 rounded-bl-lg" />
          <span className="pointer-events-none absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-gold-300 rounded-br-lg" />

          <div
            onClick={handleTogglePlay}
            className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gold-400/40 bg-obsidian cursor-pointer group"
          >
            {/* Fallback Sacred Kalash Poster */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={siteData.ceremony.posterSvg}
              alt={siteData.ceremony.heading}
              className={`w-full h-full object-cover transition-transform duration-1000 ${
                isPlaying ? "scale-105" : "group-hover:scale-105"
              }`}
            />

            {/* HTML5 Video Player */}
            <video
              ref={videoRef}
              poster={siteData.ceremony.posterSvg}
              preload="metadata"
              playsInline
              onEnded={() => setIsPlaying(false)}
              onError={() => setVideoAvailable(false)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                isPlaying ? "opacity-45" : "opacity-0"
              }`}
            >
              <source src={siteData.ceremony.videoSrc} type="video/mp4" />
            </video>

            {/* Dark Luxury Gradient Vignette */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 transition-opacity duration-500 ${
                isPlaying && videoAvailable ? "opacity-25 hover:opacity-60" : "opacity-85"
              }`}
            />

            {/* Animated Sacred Mantra Ring when playing preview */}
            {isPlaying && !videoAvailable && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/55 backdrop-blur-xs p-6 text-center">
                <div className="w-28 h-28 rounded-full border-2 border-dashed border-gold-400 animate-spin-slow flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8 text-gold-300 animate-pulse" />
                </div>
                <p className="font-devanagari text-xl sm:text-2xl text-gold-300 font-semibold">
                  ॥ ॐ श्री महागणपतये नमः ॥
                </p>
                <p className="text-xs sm:text-sm text-gold-100/80 mt-2 max-w-md">
                  Sacred Ceremony Showcase Preview — Place{" "}
                  <code className="text-gold-300 px-1.5 py-0.5 rounded bg-white/10">
                    public/assets/sacred-ceremony.mp4
                  </code>{" "}
                  to stream live ritual footage.
                </p>
              </div>
            )}

            {/* Center Glowing Liquid-Gold Play / Pause Overlay Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div
                className={`relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full btn-gold-primary shadow-gold-glow-lg transition-all duration-300 ${
                  isPlaying
                    ? "opacity-0 group-hover:opacity-95 scale-90"
                    : "opacity-100 group-hover:scale-110"
                }`}
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-300 opacity-30" />
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-obsidian fill-obsidian" />
                ) : (
                  <Play className="w-8 h-8 text-obsidian fill-obsidian ml-1" />
                )}
              </div>

              {!isPlaying && (
                <div className="mt-4 flex flex-col items-center gap-1.5 text-center">
                  <span className="px-5 py-2 rounded-full bg-black/85 border border-gold-400 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white shadow-gold-glow">
                    YOUR VIDEO HERE • आपका वीडियो यहाँ लगेगा
                  </span>
                  <span className="text-[11px] font-semibold text-gold-300/90 tracking-wide bg-black/60 px-3 py-1 rounded-full">
                    Click to play preview | Drop sacred ceremony video in assets
                  </span>
                </div>
              )}
            </div>

            {/* Bottom Bar Inside Video Frame */}
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 flex items-center justify-between text-white">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-300 font-semibold block">
                  {siteData.ceremony.badge}
                </span>
                <h3 className="font-serif text-lg sm:text-2xl font-bold text-white">
                  {siteData.ceremony.heading} — {siteData.brand.fullTitle}
                </h3>
              </div>

              <button
                type="button"
                onClick={handleToggleMute}
                aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                className="p-2.5 rounded-full bg-black/60 border border-gold-400/50 text-gold-300 hover:bg-gold-500/20 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
