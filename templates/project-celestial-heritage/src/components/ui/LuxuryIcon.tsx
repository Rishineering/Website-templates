import React from "react";
import {
  Flame,
  Sparkles,
  Sun,
  Moon,
  ShieldCheck,
  Video,
  Users,
  BookOpen,
  Flower2,
  Droplets,
  Feather,
  Clock,
  MapPin,
} from "lucide-react";
import { LuxuryIconName } from "@/config/siteData";

interface LuxuryIconProps {
  name: LuxuryIconName;
  className?: string;
}

export function LuxuryIcon({ name, className = "w-6 h-6" }: LuxuryIconProps) {
  switch (name) {
    case "flame":
      return <Flame className={className} />;
    case "sparkles":
      return <Sparkles className={className} />;
    case "sun":
      return <Sun className={className} />;
    case "moon":
      return <Moon className={className} />;
    case "shield":
      return <ShieldCheck className={className} />;
    case "video":
      return <Video className={className} />;
    case "users":
      return <Users className={className} />;
    case "book":
      return <BookOpen className={className} />;
    case "lotus":
      return <Flower2 className={className} />;
    case "droplet":
      return <Droplets className={className} />;
    case "feather":
      return <Feather className={className} />;
    case "clock":
      return <Clock className={className} />;
    case "map-pin":
      return <MapPin className={className} />;
    default:
      return <Sparkles className={className} />;
  }
}
