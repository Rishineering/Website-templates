import React from "react";
import {
  Compass,
  Home,
  Heart,
  Gem,
  Briefcase,
  Activity,
  TrendingUp,
  Flame,
  Sparkles,
  Sun,
  Moon,
  ShieldCheck,
  Video,
  Users,
} from "lucide-react";
import { LuxuryIconName } from "@/config/siteData";

interface LuxuryIconProps {
  name: LuxuryIconName;
  className?: string;
}

export function LuxuryIcon({ name, className = "w-6 h-6" }: LuxuryIconProps) {
  switch (name) {
    case "compass":
      return <Compass className={className} />;
    case "home":
      return <Home className={className} />;
    case "heart":
      return <Heart className={className} />;
    case "gem":
      return <Gem className={className} />;
    case "briefcase":
      return <Briefcase className={className} />;
    case "activity":
      return <Activity className={className} />;
    case "trending-up":
      return <TrendingUp className={className} />;
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
    default:
      return <Sparkles className={className} />;
  }
}
