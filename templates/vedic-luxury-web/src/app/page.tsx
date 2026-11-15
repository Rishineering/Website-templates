import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SacredCeremonySection } from "@/components/sections/SacredCeremonySection";
import { AstrologyServicesSection } from "@/components/sections/AstrologyServicesSection";
import { PoojaServicesSection } from "@/components/sections/PoojaServicesSection";
import { VideoGallerySection } from "@/components/sections/VideoGallerySection";
import { ConsultationOptionsSection } from "@/components/sections/ConsultationOptionsSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <AboutSection />
      <SacredCeremonySection />
      <AstrologyServicesSection />
      <PoojaServicesSection />
      <VideoGallerySection />
      <ConsultationOptionsSection />
      <FinalCtaSection />
    </div>
  );
}
