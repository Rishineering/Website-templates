import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceGatewaysSection } from "@/components/sections/ServiceGatewaysSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SacredCeremonySection } from "@/components/sections/SacredCeremonySection";
import { VideoGallerySection } from "@/components/sections/VideoGallerySection";
import { ConsultationOptionsSection } from "@/components/sections/ConsultationOptionsSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <ServiceGatewaysSection />
      <AboutSection />
      <SacredCeremonySection />
      <VideoGallerySection />
      <ConsultationOptionsSection />
      <FinalCtaSection />
    </div>
  );
}
