// ============================================================================
// MASTER SITE CONFIGURATION (`src/config/siteData.ts`)
// ============================================================================
// Every section and every service/pooja/video item has an `enabled: boolean`
// flag. Set `enabled: false` or delete an entry from any array to cleanly
// remove it from the landing page, navigation bar, and booking dropdowns.
// ============================================================================

export type LuxuryIconName =
  | "compass"
  | "home"
  | "heart"
  | "gem"
  | "briefcase"
  | "activity"
  | "trending-up"
  | "flame"
  | "sparkles"
  | "sun"
  | "moon"
  | "shield"
  | "video"
  | "users";

export interface AstrologyServiceItem {
  id: string;
  slug: string;
  enabled: boolean;
  title: string;
  description: string;
  icon: LuxuryIconName;
  badges: string[];
  ctaText: string;
}

export interface PoojaServiceItem {
  id: string;
  slug: string;
  enabled: boolean;
  title: string;
  description: string;
  duration: string;
  mode: string;
  pill: string;
  image: string;
  ctaText: string;
}

export interface VideoGalleryItem {
  id: string;
  enabled: boolean;
  title: string;
  category: string;
  description: string;
  videoUrl: string;
  posterUrl: string;
  duration?: string;
}

export interface ConsultationOptionItem {
  id: string;
  enabled: boolean;
  title: string;
  description: string;
  icon: LuxuryIconName;
  bullets: string[];
}

export const siteData = {
  // --------------------------------------------------------------------------
  // 1. BRAND & GLOBAL IDENTITY
  // --------------------------------------------------------------------------
  brand: {
    titleDevanagari: "श्री श्री विद्या",
    titleEnglish: "Astrology",
    fullTitle: "श्री श्री विद्या Astrology",
    subtitle: "Divine Vedic Guidance",
    astrologerName: "Acharya Ji",
    tagline: "Transform Your Life with Ancient Wisdom & Spiritual Guidance",
  },

  // --------------------------------------------------------------------------
  // 2. CONTACT DETAILS (KEEP BLANK BY DEFAULT — PASTE CLIENT NUMBERS HERE)
  // --------------------------------------------------------------------------
  contact: {
    whatsappNumber: "", // Keep blank! Format later as "91XXXXXXXXXX"
    phoneNumber: "",    // Keep blank! Format later as "+91 XXXXX XXXXX"
    displayPhone: "",   // Keep blank!
    email: "",
    location: "India (Online & Offline Consultations Available)",
    defaultWhatsAppText:
      "Namaste! I would like to inquire about Vedic Astrology & Pooja consultations.",
  },

  // --------------------------------------------------------------------------
  // 3. TOP ANNOUNCEMENT BAR
  // --------------------------------------------------------------------------
  topBar: {
    enabled: true,
    text: "✨ Authentic Vedic Astrology Services | Online & Offline Consultations Available",
  },

  // --------------------------------------------------------------------------
  // 4. HERO SECTION
  // --------------------------------------------------------------------------
  hero: {
    enabled: true,
    badge: "Certified Vedic Astrologer",
    headline: "Divine Vedic Guidance",
    subheadline: "श्री श्री विद्या Astrology",
    tagline: "Transform Your Life with Ancient Wisdom & Spiritual Guidance",
    videoSrc: "/assets/hero-ritual.mp4",
    fallbackBgSvg: "/assets/hero-bg-fallback.svg",
    trustPills: ["Trusted Expert", "Online & Offline", "1000+ Clients"],
    ctas: {
      primary: "Consult Now",
      secondary: "Book Appointment",
      whatsapp: "WhatsApp",
    },
  },

  // --------------------------------------------------------------------------
  // 5. ABOUT THE ASTROLOGER SECTION (`id: "about"`)
  // --------------------------------------------------------------------------
  about: {
    id: "about",
    navLabel: "About",
    enabled: true,
    badge: "KNOW YOUR ASTROLOGER",
    heading: "About the Astrologer",
    subtitle: "Bridging ancient wisdom with modern guidance",
    // Replace this dummy SVG path with the real astrologer photo (e.g., "/assets/astrologer.jpg")
    image: "/assets/astrologer-placeholder.svg",
    bioTitle: "Dedicated Vedic Practitioner",
    paragraphs: [
      "We are dedicated practitioners of Vedic astrology, committed to preserving and sharing ancient wisdom in the modern world.",
      "Our services combine traditional Vedic principles with contemporary understanding, offering both online and offline consultations.",
      "Whether you seek clarity in career, harmony in relationships, or spiritual growth — we guide your journey.",
    ],
    highlights: [
      "Authentic Vedic Knowledge",
      "Online & Offline Services",
      "Experienced Practitioners",
      "Trusted by Thousands",
    ],
  },

  // --------------------------------------------------------------------------
  // 6. SACRED CEREMONY FEATURED VIDEO (`id: "ceremony"`)
  // --------------------------------------------------------------------------
  ceremony: {
    id: "ceremony",
    navLabel: "Ceremony",
    enabled: true,
    badge: "WATCH OUR RITUALS",
    heading: "Sacred Ceremony",
    subtitle:
      "Witness the sanctity, Vedic precision, and spiritual resonance of our traditional rituals",
    videoSrc: "/assets/sacred-ceremony.mp4",
    posterSvg: "/assets/pooja-placeholder.svg",
  },

  // --------------------------------------------------------------------------
  // 7. ASTROLOGY SERVICES SECTION (`id: "services"`, 7 Removable Cards)
  // --------------------------------------------------------------------------
  servicesSection: {
    id: "services",
    navLabel: "Astrology Services",
    enabled: true,
    badge: "OUR EXPERTISE",
    heading: "Astrology Services",
    subtitle: "Comprehensive Vedic astrology solutions for all life aspects",
  },

  astrologyServices: [
    {
      id: "astro-1",
      slug: "kundli-analysis",
      enabled: true,
      title: "Kundli Analysis",
      description:
        "Detailed birth chart reading with predictions for career, marriage, health, and finances.",
      icon: "compass",
      badges: ["Online Available", "Offline Available"],
      ctaText: "Book Consultation",
    },
    {
      id: "astro-2",
      slug: "vastu-consultation",
      enabled: true,
      title: "Vastu Consultation",
      description:
        "Harmonize your space with ancient Vastu Shastra for prosperity and peace.",
      icon: "home",
      badges: ["Online Available", "Offline Available"],
      ctaText: "Book Consultation",
    },
    {
      id: "astro-3",
      slug: "matchmaking",
      enabled: true,
      title: "Matchmaking",
      description:
        "Comprehensive Kundli matching for compatible and successful marriages.",
      icon: "heart",
      badges: ["Online Available", "Offline Available"],
      ctaText: "Book Consultation",
    },
    {
      id: "astro-4",
      slug: "remedies",
      enabled: true,
      title: "Remedies",
      description:
        "Personalized gemstone recommendations and spiritual remedies for life challenges.",
      icon: "gem",
      badges: ["Online Available", "Offline Available"],
      ctaText: "Book Consultation",
    },
    {
      id: "astro-5",
      slug: "career-guidance",
      enabled: true,
      title: "Career Guidance",
      description:
        "Strategic insights for career growth, job changes, and professional success.",
      icon: "briefcase",
      badges: ["Online Available", "Offline Available"],
      ctaText: "Book Consultation",
    },
    {
      id: "astro-6",
      slug: "health-astrology",
      enabled: true,
      title: "Health Astrology",
      description:
        "Predict health issues and receive preventive astrological guidance.",
      icon: "activity",
      badges: ["Online Available", "Offline Available"],
      ctaText: "Book Consultation",
    },
    {
      id: "astro-7",
      slug: "business-astrology",
      enabled: true,
      title: "Business Astrology",
      description:
        "Auspicious timing and strategic guidance for business ventures.",
      icon: "trending-up",
      badges: ["Online Available", "Offline Available"],
      ctaText: "Book Consultation",
    },
  ] as AstrologyServiceItem[],

  // --------------------------------------------------------------------------
  // 8. POOJA SERVICES SECTION (`id: "pooja"`, 10 Removable Cards)
  // --------------------------------------------------------------------------
  poojaSection: {
    id: "pooja",
    navLabel: "Pooja Services",
    enabled: true,
    badge: "SACRED RITUALS",
    heading: "Pooja Services",
    subtitle: "Divine ceremonies for prosperity, health, and spiritual growth",
  },

  poojaServices: [
    {
      id: "pooja-1",
      slug: "mahamrityunjaya-jaap",
      enabled: true,
      title: "Mahamrityunjaya Jaap",
      description:
        "Powerful mantra for health, longevity, and protection from diseases",
      duration: "3-5 hours",
      mode: "Online/Offline",
      pill: "With Samagri",
      image: "/assets/pooja-placeholder.svg",
      ctaText: "Book Pooja",
    },
    {
      id: "pooja-2",
      slug: "lakshmi-pooja",
      enabled: true,
      title: "Lakshmi Pooja",
      description:
        "Invoke Goddess Lakshmi for wealth, prosperity, and abundance",
      duration: "2-3 hours",
      mode: "Online/Offline",
      pill: "With Samagri",
      image: "/assets/pooja-placeholder.svg",
      ctaText: "Book Pooja",
    },
    {
      id: "pooja-3",
      slug: "saraswati-pooja",
      enabled: true,
      title: "Saraswati Pooja",
      description:
        "Blessings for knowledge, wisdom, and academic excellence",
      duration: "2-3 hours",
      mode: "Online/Offline",
      pill: "With Samagri",
      image: "/assets/pooja-placeholder.svg",
      ctaText: "Book Pooja",
    },
    {
      id: "pooja-4",
      slug: "vivah-badha-nivaran",
      enabled: true,
      title: "Vivah Badha Nivaran",
      description:
        "Remove obstacles in marriage and find suitable life partner",
      duration: "3-4 hours",
      mode: "Online/Offline",
      pill: "With Samagri",
      image: "/assets/pooja-placeholder.svg",
      ctaText: "Book Pooja",
    },
    {
      id: "pooja-5",
      slug: "kaal-sarp-dosh-nivaran",
      enabled: true,
      title: "Kaal Sarp Dosh Nivaran",
      description: "Powerful ritual to remove Kaal Sarp Dosha effects",
      duration: "Full day",
      mode: "Online/Offline",
      pill: "With Samagri",
      image: "/assets/pooja-placeholder.svg",
      ctaText: "Book Pooja",
    },
    {
      id: "pooja-6",
      slug: "kuber-pooja",
      enabled: true,
      title: "Kuber Pooja",
      description:
        "Worship Lord Kuber for financial growth and stability",
      duration: "2-3 hours",
      mode: "Online/Offline",
      pill: "With Samagri",
      image: "/assets/pooja-placeholder.svg",
      ctaText: "Book Pooja",
    },
    {
      id: "pooja-7",
      slug: "navgrah-shanti-pooja",
      enabled: true,
      title: "Navgrah Shanti Pooja",
      description: "Pacify all nine planets for overall well-being",
      duration: "3-4 hours",
      mode: "Online/Offline",
      pill: "With Samagri",
      image: "/assets/pooja-placeholder.svg",
      ctaText: "Book Pooja",
    },
    {
      id: "pooja-8",
      slug: "hanuman-pooja",
      enabled: true,
      title: "Hanuman Pooja",
      description:
        "Seek Lord Hanuman's blessings for strength and courage",
      duration: "2 hours",
      mode: "Online/Offline",
      pill: "With Samagri",
      image: "/assets/pooja-placeholder.svg",
      ctaText: "Book Pooja",
    },
    {
      id: "pooja-9",
      slug: "mangal-dosh-nivaran",
      enabled: true,
      title: "Mangal Dosh Nivaran",
      description:
        "Remove Mangal Dosha for harmonious married life",
      duration: "3-4 hours",
      mode: "Online/Offline",
      pill: "With Samagri",
      image: "/assets/pooja-placeholder.svg",
      ctaText: "Book Pooja",
    },
    {
      id: "pooja-10",
      slug: "ganesha-pooja",
      enabled: true,
      title: "Ganesha Pooja",
      description:
        "Remove obstacles and seek blessings for new beginnings",
      duration: "2 hours",
      mode: "Online/Offline",
      pill: "With Samagri",
      image: "/assets/pooja-placeholder.svg",
      ctaText: "Book Pooja",
    },
  ] as PoojaServiceItem[],

  // --------------------------------------------------------------------------
  // 9. VIDEO GALLERY SECTION (`id: "videos"`, 5 Removable Videos)
  // --------------------------------------------------------------------------
  videoGallerySection: {
    id: "videos",
    navLabel: "Video Gallery",
    enabled: true,
    badge: "WATCH & LEARN",
    heading: "Video Gallery",
    subtitle: "Sacred rituals and spiritual teachings",
  },

  videoGallery: [
    {
      id: "video-1",
      enabled: true,
      title: "Bhagwat Moolpath",
      category: "Pooja",
      description: "Sacred recitation of Bhagwat Purana",
      videoUrl: "/assets/videos/bhagwat-moolpath.mp4",
      posterUrl: "/assets/pooja-placeholder.svg",
    },
    {
      id: "video-2",
      enabled: true,
      title: "Tripura Sundari Sahasranam",
      category: "Mantra",
      description: "1000 names of Goddess Tripura Sundari",
      videoUrl: "/assets/videos/tripura-sundari.mp4",
      posterUrl: "/assets/pooja-placeholder.svg",
    },
    {
      id: "video-3",
      enabled: true,
      title: "Moolpath Pujanam",
      category: "Pooja",
      description: "Complete sacred ritual ceremony",
      videoUrl: "/assets/videos/moolpath-pujanam.mp4",
      posterUrl: "/assets/pooja-placeholder.svg",
    },
    {
      id: "video-4",
      enabled: true,
      title: "Navgrah Shanti",
      category: "Pooja",
      description: "Nine planetary peace ritual",
      videoUrl: "/assets/videos/navgrah-shanti.mp4",
      posterUrl: "/assets/pooja-placeholder.svg",
    },
    {
      id: "video-5",
      enabled: true,
      title: "Kaal Sarp Dosh Nivaran",
      category: "Remedies",
      description: "Powerful remedy for Kaal Sarp Dosha",
      videoUrl: "/assets/videos/kaal-sarp-dosh.mp4",
      posterUrl: "/assets/pooja-placeholder.svg",
    },
  ] as VideoGalleryItem[],

  // --------------------------------------------------------------------------
  // 10. CONSULTATION OPTIONS SECTION (`id: "consultation"`, 3 Removable Cards)
  // --------------------------------------------------------------------------
  consultationSection: {
    id: "consultation",
    navLabel: "Consultation",
    enabled: true,
    badge: "HOW WE HELP",
    heading: "Consultation Options",
    subtitle: "Choose the consultation mode that works best for you",
  },

  consultationOptions: [
    {
      id: "consult-1",
      enabled: true,
      title: "Online Consultation",
      description:
        "Connect from anywhere through WhatsApp, Call, or Video consultation",
      icon: "video",
      bullets: [
        "WhatsApp Audio/Video Call",
        "Phone Consultation",
        "Kundli Sent on Email",
        "Convenient & Flexible",
      ],
    },
    {
      id: "consult-2",
      enabled: true,
      title: "Offline Consultation",
      description:
        "In-person consultation for detailed analysis and spiritual guidance",
      icon: "users",
      bullets: [
        "Face-to-Face Meeting",
        "Detailed Chart Analysis",
        "Personalized Remedies",
        "Sacred Rituals Available",
      ],
    },
    {
      id: "consult-3",
      enabled: true,
      title: "Confidential & Professional",
      description:
        "All consultations are completely confidential with professional guidance",
      icon: "shield",
      bullets: [
        "100% Confidential",
        "Professional Approach",
        "Ethical Guidance",
        "Result-Oriented Solutions",
      ],
    },
  ] as ConsultationOptionItem[],

  // --------------------------------------------------------------------------
  // 11. FINAL CTA BANNER SECTION
  // --------------------------------------------------------------------------
  finalCta: {
    enabled: true,
    badge: "READY TO TRANSFORM YOUR LIFE?",
    heading: "Start Your Spiritual Journey Today",
    description:
      "Take the first step towards clarity, prosperity, and peace. Our expert Vedic astrology guidance is just a click away. Book your appointment now and experience the power of ancient wisdom.",
    buttons: {
      consultNow: "Consult Now",
      bookAppointment: "Book Appointment",
      whatsappUs: "WhatsApp Us",
    },
  },

  // --------------------------------------------------------------------------
  // 12. MULTI-STEP BOOKING ENGINE CONFIGURATION (`/book-consultation`)
  // --------------------------------------------------------------------------
  booking: {
    badge: "Expert Vedic Astrologer",
    heading: "BOOK YOUR CONSULTATION",
    subheading:
      "Complete the 3-step sacred appointment request below for personalized Vedic guidance",
    consultationFee: "₹199.99",
    consultationTypes: [
      {
        id: "Online",
        title: "Online",
        subtitle: "Video, Audio, or WhatsApp from anywhere in the world",
      },
      {
        id: "Offline",
        title: "Offline",
        subtitle: "In-person sacred consultation & detailed chart reading",
      },
    ],
    consultationModes: [
      "Video Call",
      "Phone Call",
      "WhatsApp Chat",
      "In-Person Visit",
    ],
    timeSlots: [
      "9:00 AM - 11:00 AM",
      "11:00 AM - 1:00 PM",
      "1:00 PM - 3:00 PM",
      "3:00 PM - 5:00 PM",
      "5:00 PM - 7:00 PM",
      "7:00 PM - 9:00 PM",
    ],
    whyChooseUs: [
      "Expert Vedic Astrologer",
      "1000+ Consultations",
      "Certified Expert",
      "Confidential & Secure",
    ],
  },
};

// ============================================================================
// HELPER FUNCTIONS FOR MODULAR FILTERING & WHATSAPP / PHONE LINKS
// ============================================================================

export function getEnabledAstrologyServices(): AstrologyServiceItem[] {
  return (siteData.astrologyServices || []).filter((item) => item.enabled);
}

export function getEnabledPoojaServices(): PoojaServiceItem[] {
  return (siteData.poojaServices || []).filter((item) => item.enabled);
}

export function getEnabledVideos(): VideoGalleryItem[] {
  return (siteData.videoGallery || []).filter((item) => item.enabled);
}

export function getEnabledConsultationOptions(): ConsultationOptionItem[] {
  return (siteData.consultationOptions || []).filter((item) => item.enabled);
}

export function getAllEnabledBookableServices(): {
  label: string;
  slug: string;
  category: "Astrology Service" | "Pooja Service";
}[] {
  const astrology = getEnabledAstrologyServices().map((s) => ({
    label: s.title,
    slug: s.slug,
    category: "Astrology Service" as const,
  }));
  const pooja = getEnabledPoojaServices().map((p) => ({
    label: p.title,
    slug: p.slug,
    category: "Pooja Service" as const,
  }));
  return [...astrology, ...pooja];
}

export function buildWhatsAppUrl(customMessage?: string): string {
  const rawPhone = (siteData.contact.whatsappNumber || "").replace(/\D/g, "");
  const message = customMessage || siteData.contact.defaultWhatsAppText;
  const encoded = encodeURIComponent(message);
  if (rawPhone) {
    return `https://wa.me/${rawPhone}?text=${encoded}`;
  }
  return `https://wa.me/?text=${encoded}`;
}

export function getNavLinks() {
  const links: { label: string; href: string }[] = [];
  if (siteData.about.enabled) {
    links.push({ label: siteData.about.navLabel, href: `/#${siteData.about.id}` });
  }
  if (siteData.ceremony.enabled) {
    links.push({
      label: siteData.ceremony.navLabel,
      href: `/#${siteData.ceremony.id}`,
    });
  }
  if (siteData.servicesSection.enabled && getEnabledAstrologyServices().length > 0) {
    links.push({
      label: siteData.servicesSection.navLabel,
      href: `/#${siteData.servicesSection.id}`,
    });
  }
  if (siteData.poojaSection.enabled && getEnabledPoojaServices().length > 0) {
    links.push({
      label: siteData.poojaSection.navLabel,
      href: `/#${siteData.poojaSection.id}`,
    });
  }
  if (siteData.videoGallerySection.enabled && getEnabledVideos().length > 0) {
    links.push({
      label: siteData.videoGallerySection.navLabel,
      href: `/#${siteData.videoGallerySection.id}`,
    });
  }
  if (
    siteData.consultationSection.enabled &&
    getEnabledConsultationOptions().length > 0
  ) {
    links.push({
      label: siteData.consultationSection.navLabel,
      href: `/#${siteData.consultationSection.id}`,
    });
  }
  return links;
}
