"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Sparkles, Film } from "lucide-react";
import {
  siteData,
  getEnabledVideos,
  VideoGalleryItem,
} from "@/config/siteData";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function VideoGallerySection() {
  const videos = getEnabledVideos();
  const [activeVideo, setActiveVideo] = useState<VideoGalleryItem | null>(null);

  if (!siteData.videoGallerySection.enabled || videos.length === 0) {
    return null;
  }

  return (
    <section
      id={siteData.videoGallerySection.id}
      className="relative py-20 md:py-28 border-t border-[var(--border-gold)]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={siteData.videoGallerySection.badge}
          heading={siteData.videoGallerySection.heading}
          subtitle={siteData.videoGallerySection.subtitle}
        />

        {/* 5 Removable Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: (index % 3) * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => setActiveVideo(video)}
              className="luxury-card rounded-3xl overflow-hidden cursor-pointer group flex flex-col justify-between"
            >
              {/* Thumbnail / Video Preview */}
              <div className="relative aspect-video w-full overflow-hidden bg-obsidian border-b border-[var(--border-gold)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={video.posterUrl}
                  alt={video.title}
                  className="luxury-card-image w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/30" />

                {/* Top-Left Category Tag ("Pooja", "Mantra", "Remedies") */}
                <div className="absolute top-3.5 left-3.5 z-10 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/75 border border-gold-400/60 text-gold-300 text-xs font-semibold uppercase tracking-wider">
                  <Film className="w-3 h-3 text-gold-400" />
                  <span>{video.category}</span>
                </div>

                {/* Center Gold Play Button & Placeholder Notice */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-13 h-13 rounded-full btn-gold-primary flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition-transform mb-2">
                    <Play className="w-5 h-5 text-obsidian fill-obsidian ml-0.5" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-black/80 border border-gold-400/80 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white shadow-md">
                    YOUR VIDEO HERE
                  </span>
                </div>
              </div>

              {/* Card Text */}
              <div className="relative z-10 p-6">
                <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] group-hover:text-gold-400 transition-colors mb-2">
                  {video.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Luxury Video Lightbox Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-lg p-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-3xl border-2 border-gold-400/60 bg-obsidian-surface p-4 sm:p-6 shadow-gold-glow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                    {activeVideo.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {activeVideo.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="p-2 rounded-full border border-gold-400/40 text-gold-300 hover:bg-gold-500/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-gold-400/30 bg-obsidian">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeVideo.posterUrl}
                  alt={activeVideo.title}
                  className="w-full h-full object-cover opacity-50"
                />
                <video
                  controls
                  autoPlay
                  poster={activeVideo.posterUrl}
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={activeVideo.videoUrl} type="video/mp4" />
                </video>
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/40">
                  <Sparkles className="w-8 h-8 text-gold-400 mb-2 animate-pulse" />
                  <p className="font-serif text-xl text-gold-200 font-semibold">
                    {activeVideo.title}
                  </p>
                  <p className="text-xs sm:text-sm text-gold-100/80 mt-1">
                    {activeVideo.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
