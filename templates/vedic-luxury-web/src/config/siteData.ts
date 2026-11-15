// ============================================================================
// MASTER SITE CONFIGURATION (`src/config/siteData.ts`)
// Project Celestial Heritage — Vedic Pandit & Karamkand Services
// ============================================================================
// Every section and every service/ritual/video item has an `enabled: boolean`
// flag. Set `enabled: false` or delete an entry from any array to cleanly
// remove it from the landing page, navigation bar, and booking dropdowns.
// ============================================================================

export type LuxuryIconName =
  | "flame"
  | "sparkles"
  | "sun"
  | "moon"
  | "shield"
  | "video"
  | "users"
  | "book"
  | "lotus"
  | "droplet"
  | "feather"
  | "clock"
  | "map-pin";

export interface ServiceGatewayItem {
  id: "deity-pooja" | "shraadh-sanskaar";
  enabled: boolean;
  sanskritTag: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  ctaText: string;
  targetRoute: string;
  accent: "gold-crimson" | "alabaster-silver";
}

export interface DeityPoojaItem {
  id: string;
  slug: string;
  enabled: boolean;
  title: string;
  deityOrCategory: string;
  filterCategory: "Deity Worship" | "Havan & Jaap" | "Home & Sanskaar";
  description: string;
  duration: string;
  samagriIncluded: boolean;
  modes: string[];
  image: string;
  badge: string;
}

export interface ShraadhSanskaarItem {
  id: string;
  slug: string;
  enabled: boolean;
  title: string;
  categoryTag: string;
  filterCategory: "Antim & Terahvin Rites" | "Pind Daan & Shraadh" | "Pitru Dosh & Moksha";
  description: string;
  duration: string;
  samagriIncluded: boolean;
  modes: string[];
  image: string;
  badge: string;
}

export interface VideoGalleryItem {
  id: string;
  enabled: boolean;
  title: string;
  category: "Dev Pooja" | "Pitru Karya" | "Havan & Mantra";
  description: string;
  videoUrl: string;
  posterUrl: string;
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
    titleDevanagari: "श्री वैदिक पूजा एवं संस्कार केंद्र",
    titleEnglish: "Project Celestial Heritage",
    fullTitle: "श्री वैदिक पूजा एवं संस्कार केंद्र",
    subtitle: "Vedic Pandit & Karamkand Services",
    panditName: "Pandit Ji",
    tagline:
      "Performing auspicious Deity Poojas and solemn Ancestral Shraadh rites with strict adherence to Vedic Vidhi and purity.",
  },

  // --------------------------------------------------------------------------
  // 2. CONTACT DETAILS (KEEP BLANK BY DEFAULT — PASTE CLIENT NUMBERS HERE)
  // --------------------------------------------------------------------------
  contact: {
    whatsappNumber: "", // Keep blank! Format later as "91XXXXXXXXXX"
    phoneNumber: "",    // Keep blank! Format later as "+91 XXXXX XXXXX"
    displayPhone: "",   // Keep blank! Format later as "+91 XXXXX XXXXX"
    email: "",
    location: "Available for At-Home, Temple, Tirth & Online Sankalp Rituals",
    defaultWhatsAppText:
      "Namaste Pandit Ji! I would like to inquire regarding Vedic Pooja / Shraadh Sanskaar Vidhi.",
  },

  // --------------------------------------------------------------------------
  // 3. TOP ANNOUNCEMENT BAR
  // --------------------------------------------------------------------------
  topBar: {
    enabled: true,
    text: "✨ Authentic Vedic Pooja, Anushthan & Pitru Shraadh Sanskaar | With Complete Pooja Samagri",
  },

  // --------------------------------------------------------------------------
  // 4. HERO SECTION
  // --------------------------------------------------------------------------
  hero: {
    enabled: true,
    badge: "Vedic Karamkand & Ritual Specialist",
    headline: "Sacred Vedic Poojas & Sanskaars",
    subheadline: "श्री वैदिक पूजा एवं संस्कार केंद्र",
    tagline:
      "Performing auspicious Deity Poojas and solemn Ancestral Shraadh rites with strict adherence to Vedic Vidhi and purity.",
    videoSrc: "/assets/hero-ritual.mp4",
    fallbackBgSvg: "/assets/hero-bg-fallback.svg",
    trustPills: [
      "Rigveda & Yajurveda Vidhi",
      "Dev & Pitru Karya Specialist",
      "Complete Samagri Provided",
      "At-Home & Tirth Venues",
    ],
    ctas: {
      primary: "Select Sacred Seva",
      secondary: "Book Pandit Ji",
      whatsapp: "WhatsApp Inquiry",
    },
  },

  // --------------------------------------------------------------------------
  // 5. ABOUT THE PANDIT JI SECTION (`id: "about"`)
  // --------------------------------------------------------------------------
  about: {
    id: "about",
    navLabel: "About Pandit Ji",
    enabled: true,
    badge: "VEDIC TRADITION & LINEAGE",
    heading: "About Pandit Ji",
    subtitle: "Preserving pure Vedic Karamkand, Mantra Ucharan & Shastra Vidhi",
    image: "/assets/astrologer-placeholder.svg",
    bioTitle: "Revered Vedic Karamkand Practitioner",
    paragraphs: [
      "With rigorous traditional training in Rigveda and Yajurveda Karamkand, Pandit Ji conducts every ritual in strict alignment with sacred Shastras, authentic Vedic phonetics (Veda Swara), and complete purity.",
      "Our services encompass both pillars of Vedic Sanatan tradition: auspicious Dev Karya (Deity worship, Griha Pravesh, Havans, and Vivah Sanskaar) and solemn Pitru Karya (Antim Sanskaar, Terahvin, Pind Daan, and Moksha rites).",
      "Every ceremony is conducted with dignified reverence and complete arrangements — including pure authentic Pooja Samagri, Havan Kund, and personalized guidance for the family.",
    ],
    highlights: [
      "Pure Vedic Mantra Recitation",
      "Dev & Pitru Karya Mastery",
      "Complete Pooja Samagri Provided",
      "Compassionate Family Guidance",
    ],
  },

  // --------------------------------------------------------------------------
  // 6. 2-CARD PRIMARY SERVICE GATEWAYS (HOMEPAGE HERO SELECTION)
  // --------------------------------------------------------------------------
  serviceGatewaysSection: {
    id: "services",
    navLabel: "Sacred Offerings",
    enabled: true,
    badge: "SACRED VEDIC OFFERINGS",
    heading: "Select Your Sacred Seva",
    subtitle:
      "Choose between auspicious Deity Poojas for prosperity or solemn Shraadh Sanskaars for ancestral peace",
  },

  serviceGateways: [
    {
      id: "deity-pooja",
      enabled: true,
      sanskritTag: "देव कार्य • शुभ अनुष्ठान",
      title: "Hindu Deity Poojas & Auspicious Rituals",
      subtitle: "Prosperity, Health, Family Harmony & Auspicious Milestones",
      description:
        "Invoke divine blessings for health, wealth, harmony, and new beginnings through authentic Vedic Poojas, Havans, and Jaaps dedicated to Hindu deities.",
      highlights: [
        "Ganesh, Lakshmi, Shiva & Durga Poojas",
        "Griha Pravesh, Vastu & Vivah Sanskaar",
        "Mahamrityunjaya & Navgrah Havan",
        "Complete Pooja Samagri Provided",
      ],
      ctaText: "Explore Deity Poojas",
      targetRoute: "/pooja-services",
      accent: "gold-crimson",
    },
    {
      id: "shraadh-sanskaar",
      enabled: true,
      sanskritTag: "पितृ कार्य • मोक्ष संस्कार",
      title: "Shraadh, Pitru Karya & Antim Sanskaar",
      subtitle: "Solemn Rites for Departed Souls, Ancestral Peace & Moksha",
      description:
        "Sacred, dignified Vedic rites for departed souls, ancestral peace (Pitru Shanti), and liberation (Moksha), performed strictly according to Garuda Purana and Vedic Shastras.",
      highlights: [
        "Antim Sanskaar & Dasha/Terahvin Vidhi",
        "Pind Daan, Tarpan & Varshik Shraadh",
        "Narayan Bali & Tripindi Shraadh",
        "Garud Puran Paath & Shanti Havan",
      ],
      ctaText: "Explore Shraadh & Sanskaar",
      targetRoute: "/shraadh-sanskaar",
      accent: "alabaster-silver",
    },
  ] as ServiceGatewayItem[],

  // --------------------------------------------------------------------------
  // 7. DEITY POOJA SERVICES (`/pooja-services`, 10 Removable Cards)
  // --------------------------------------------------------------------------
  deityPoojaSection: {
    enabled: true,
    badge: "DEV KARYA • AUSPICIOUS BLESSINGS",
    heading: "Hindu Deity Poojas & Auspicious Anushthans",
    subtitle:
      "Sacred Vedic worship, Havans, and Abhishek ceremonies performed with pure Samagri and devotion",
    shloka: "॥ ॐ नमः शिवाय • ॐ गं गणपतये नमः • ॐ श्रीं महालक्ष्म्यै नमः ॥",
  },

  deityPoojaServices: [
    {
      id: "dev-1",
      slug: "ganesh-sthapana",
      enabled: true,
      title: "Ganesh Sthapana & Atharvashirsha Path",
      deityOrCategory: "Lord Ganesha",
      filterCategory: "Deity Worship",
      description:
        "Remove obstacles, invoke auspiciousness, and bless new ventures with detailed Vedic Shodashopachara pooja and 21 Avartan Atharvashirsha recitation.",
      duration: "2-3 hours",
      samagriIncluded: true,
      modes: ["At Home", "Temple", "Online Sankalp"],
      image: "/assets/pooja-placeholder.svg",
      badge: "With Complete Samagri",
    },
    {
      id: "dev-2",
      slug: "mahalakshmi-kuber-pooja",
      enabled: true,
      title: "Mahalakshmi & Kuber Pooja",
      deityOrCategory: "Goddess Lakshmi & Lord Kuber",
      filterCategory: "Deity Worship",
      description:
        "Invoke divine wealth, business prosperity, and financial stability with Shree Suktam Path, Kanakdhara recitation, and sacred Kuber Havan.",
      duration: "2-3 hours",
      samagriIncluded: true,
      modes: ["At Home", "Office / Business", "Temple"],
      image: "/assets/pooja-placeholder.svg",
      badge: "With Complete Samagri",
    },
    {
      id: "dev-3",
      slug: "rudrabhishek",
      enabled: true,
      title: "Laghu & Maha Rudrabhishek",
      deityOrCategory: "Lord Shiva",
      filterCategory: "Deity Worship",
      description:
        "Sacred Rudri Path with Panchamrit Abhishek of Shiva Lingam for health, mental tranquility, longevity, and destruction of negative energies.",
      duration: "3-4 hours",
      samagriIncluded: true,
      modes: ["At Home", "Shiva Temple", "Online Sankalp"],
      image: "/assets/pooja-placeholder.svg",
      badge: "With Complete Samagri",
    },
    {
      id: "dev-4",
      slug: "satyanarayan-katha",
      enabled: true,
      title: "Shri Satyanarayan Maha Pooja & Katha",
      deityOrCategory: "Lord Vishnu",
      filterCategory: "Home & Sanskaar",
      description:
        "Traditional full 5-adhyaya Katha recitation, Vishnu Sahasranama, Panchamrit, and Prasad distribution for family harmony and auspicious milestones.",
      duration: "2-3 hours",
      samagriIncluded: true,
      modes: ["At Home", "Community Hall", "Temple"],
      image: "/assets/pooja-placeholder.svg",
      badge: "With Complete Samagri",
    },
    {
      id: "dev-5",
      slug: "durga-saptashati-chandi-path",
      enabled: true,
      title: "Sampoorna Durga Saptashati / Chandi Path",
      deityOrCategory: "Goddess Durga",
      filterCategory: "Havan & Jaap",
      description:
        "Powerful Devi recitation of 700 verses from Markandeya Purana with Navarna Mantra Jaap and Chandi Havan for divine protection and victory over distress.",
      duration: "4-6 hours",
      samagriIncluded: true,
      modes: ["At Home", "Temple"],
      image: "/assets/pooja-placeholder.svg",
      badge: "With Complete Samagri",
    },
    {
      id: "dev-6",
      slug: "mahamrityunjaya-jaap-havan",
      enabled: true,
      title: "Mahamrityunjaya Mantra Jaap & Havan",
      deityOrCategory: "Lord Shiva",
      filterCategory: "Havan & Jaap",
      description:
        "Sankalp-based 11,000 / 21,000 / 1.25 Lakh mantra jaap with consecrated sacrificial Ahutis for overcoming chronic illnesses, untimely demise, and accidents.",
      duration: "Full Day / Multi-day",
      samagriIncluded: true,
      modes: ["At Home", "Temple", "Sacred Tirth"],
      image: "/assets/pooja-placeholder.svg",
      badge: "With Complete Samagri",
    },
    {
      id: "dev-7",
      slug: "saraswati-pooja-vidyarambha",
      enabled: true,
      title: "Saraswati Pooja & Vidyarambha Sanskaar",
      deityOrCategory: "Goddess Saraswati",
      filterCategory: "Home & Sanskaar",
      description:
        "Sacred blessings for children initiating education, academic excellence, memory enhancement, and mastery in arts, speech, and literature.",
      duration: "2 hours",
      samagriIncluded: true,
      modes: ["At Home", "School / Institute", "Temple"],
      image: "/assets/pooja-placeholder.svg",
      badge: "With Complete Samagri",
    },
    {
      id: "dev-8",
      slug: "sundarkand-hanuman-havan",
      enabled: true,
      title: "Sundarkand Path & Hanuman Chalisa Havan",
      deityOrCategory: "Lord Hanuman",
      filterCategory: "Havan & Jaap",
      description:
        "Melodious recitation of Goswami Tulsidas's Sundarkand followed by 108 Hanuman Chalisa samput and Havan to banish fear, planetary doshas, and enemies.",
      duration: "3 hours",
      samagriIncluded: true,
      modes: ["At Home", "Temple"],
      image: "/assets/pooja-placeholder.svg",
      badge: "With Complete Samagri",
    },
    {
      id: "dev-9",
      slug: "navgrah-shanti-havan",
      enabled: true,
      title: "Navgrah Shanti Pooja & Havan",
      deityOrCategory: "Nine Celestial Deities",
      filterCategory: "Havan & Jaap",
      description:
        "Pacify malefic planetary influences (Surya to Ketu) with specific samidhas, planetary grains, Navgrah Yantra worship, and Vedic Ahutis.",
      duration: "3-4 hours",
      samagriIncluded: true,
      modes: ["At Home", "Temple"],
      image: "/assets/pooja-placeholder.svg",
      badge: "With Complete Samagri",
    },
    {
      id: "dev-10",
      slug: "griha-pravesh-vastu-shanti",
      enabled: true,
      title: "Griha Pravesh & Vastu Shanti Pooja",
      deityOrCategory: "Vastu Purusha & Deities",
      filterCategory: "Home & Sanskaar",
      description:
        "Auspicious new home entry ritual with Vastu Purusha pooja, Navgrah Sthapana, Ganpati pooja, Dwar pooja, and purifying Havan for domestic peace and prosperity.",
      duration: "3-4 hours",
      samagriIncluded: true,
      modes: ["At New Home / Flat", "New Commercial Space"],
      image: "/assets/pooja-placeholder.svg",
      badge: "With Complete Samagri",
    },
  ] as DeityPoojaItem[],

  // --------------------------------------------------------------------------
  // 8. SHRAADH & AFTER-DEATH SANSKAAR (`/shraadh-sanskaar`, 10 Removable Cards)
  // --------------------------------------------------------------------------
  shraadhSanskaarSection: {
    enabled: true,
    badge: "PITRU KARYA • MOKSHA & PEACE",
    heading: "Shraadh, Pitru Karya & After-Death Sanskaar",
    subtitle:
      "Dignified Vedic rites for departed ancestors and peaceful transition, guided strictly by Garuda Purana and Vedic Shastras",
    shloka: "॥ ॐ पितृगणाय विद्महे जगत धारिणे धीमहि तन्नो पितरो प्रचोदयात् ॥",
    urgentNotice:
      "Need urgent guidance for Antim Sanskaar, Dasha, or Terahvin dates? Connect directly on WhatsApp or Call for immediate Vedic assistance and full Samagri arrangement.",
  },

  shraadhSanskaarServices: [
    {
      id: "pitru-1",
      slug: "antim-sanskaar-antyeshti",
      enabled: true,
      title: "Antim Sanskaar (Antyeshti) Complete Vidhi",
      categoryTag: "Final Rites",
      filterCategory: "Antim & Terahvin Rites",
      description:
        "Complete Vedic last rites, Mukhagni vidhi, sacred chants, and ritual steps performed with utmost solemnity and compassionate family guidance.",
      duration: "As per requirement",
      samagriIncluded: true,
      modes: ["Crematorium / Mukti Dham", "Ghat", "Hospital / Residence"],
      image: "/assets/pooja-placeholder.svg",
      badge: "Vidhi & Samagri Included",
    },
    {
      id: "pitru-2",
      slug: "dasha-ekadasha-terahvin-kriya",
      enabled: true,
      title: "Dasha, Ekadasha & Terahvin (10th to 13th Day) Kriya",
      categoryTag: "Post-Demise Rites",
      filterCategory: "Antim & Terahvin Rites",
      description:
        "Sequential post-cremation rituals: Dasha Shuddhi, Ekadasha Pind Daan, Dwadasha Sapindikaran, Pagdi Rasam, and 13th Day Brahmin Bhoj sankalp.",
      duration: "3-5 hours",
      samagriIncluded: true,
      modes: ["Residence", "Community Hall", "River Ghat"],
      image: "/assets/pooja-placeholder.svg",
      badge: "Vidhi & Samagri Included",
    },
    {
      id: "pitru-3",
      slug: "pind-daan-pitru-tarpan",
      enabled: true,
      title: "Pind Daan & Pitru Tarpan Vidhi",
      categoryTag: "Ancestral Offering",
      filterCategory: "Pind Daan & Shraadh",
      description:
        "Sacred offerings of barley flour Pindas, black sesame, Kusha grass, and Tarpana water to satisfy and nourish ancestors across generations.",
      duration: "2-3 hours",
      samagriIncluded: true,
      modes: ["Sacred River / Ghat", "Residence", "Online Sankalp"],
      image: "/assets/pooja-placeholder.svg",
      badge: "Vidhi & Samagri Included",
    },
    {
      id: "pitru-4",
      slug: "garud-puran-katha-vachan",
      enabled: true,
      title: "Garud Puran Katha Vachan (9 or 13 Days)",
      categoryTag: "Sacred Recitation",
      filterCategory: "Antim & Terahvin Rites",
      description:
        "Daily recitation and philosophical discourse of the Garuda Purana during the mourning period to grant solace to the family and liberation to the soul.",
      duration: "2 hours daily",
      samagriIncluded: true,
      modes: ["At Residence", "Online Daily Stream"],
      image: "/assets/pooja-placeholder.svg",
      badge: "Pustak & Path Included",
    },
    {
      id: "pitru-5",
      slug: "varshik-shraadh-pitru-paksha",
      enabled: true,
      title: "Varshik Shraadh (Barsi) & Pitru Paksha Shraadh",
      categoryTag: "Annual Tithi Rites",
      filterCategory: "Pind Daan & Shraadh",
      description:
        "Annual death anniversary Shraadh (Barsi) and Mahalaya Pitru Paksha Tithi rituals to seek ancestral blessings for children, health, and lineage.",
      duration: "2-3 hours",
      samagriIncluded: true,
      modes: ["Residence", "Temple / Ghat"],
      image: "/assets/pooja-placeholder.svg",
      badge: "Vidhi & Samagri Included",
    },
    {
      id: "pitru-6",
      slug: "tripindi-shraadh-pooja",
      enabled: true,
      title: "Tripindi Shraadh Pooja",
      categoryTag: "Pitru Dosh Nivaran",
      filterCategory: "Pitru Dosh & Moksha",
      description:
        "Special Pind Daan dedicated to Brahma, Vishnu, and Rudra to liberate unsatisfied souls across three generations and resolve chronic Pitru Dosha.",
      duration: "3-4 hours",
      samagriIncluded: true,
      modes: ["Sacred Tirth (Gaya / Haridwar / Trimbak)", "Local River Ghat"],
      image: "/assets/pooja-placeholder.svg",
      badge: "Vidhi & Samagri Included",
    },
    {
      id: "pitru-7",
      slug: "narayan-bali-nagbali",
      enabled: true,
      title: "Narayan Bali & Nagbali Sanskaar",
      categoryTag: "Special Moksha Vidhi",
      filterCategory: "Pitru Dosh & Moksha",
      description:
        "Specific high-level Vedic ritual prescribed in Garuda Purana for untimely or accidental demises, childlessness, or severe curses of the departed.",
      duration: "Full Day",
      samagriIncluded: true,
      modes: ["Designated Tirth / Ghat", "Special Vedic Setup"],
      image: "/assets/pooja-placeholder.svg",
      badge: "Vidhi & Samagri Included",
    },
    {
      id: "pitru-8",
      slug: "asthi-sanchay-visarjan",
      enabled: true,
      title: "Asthi Sanchay & Asthi Visarjan Vidhi",
      categoryTag: "Sacred Immersion",
      filterCategory: "Antim & Terahvin Rites",
      description:
        "Collection of holy remains (Asthi Sanchayan) and immersion chanting at sacred rivers (Ganga, Yamuna, Godavari) with proper Gotra sankalp.",
      duration: "1-2 hours",
      samagriIncluded: true,
      modes: ["Crematorium", "Sacred River Ghat (Haridwar / Prayag / Local)"],
      image: "/assets/pooja-placeholder.svg",
      badge: "Vidhi & Samagri Included",
    },
    {
      id: "pitru-9",
      slug: "masik-shraadh-chhamahi",
      enabled: true,
      title: "Masik Shraadh & Chhamahi Vidhi",
      categoryTag: "Monthly Rites",
      filterCategory: "Pind Daan & Shraadh",
      description:
        "Observance of the monthly Shraadh rituals during the first mourning year leading up to the 6-month Chhamahi and annual Varshik milestone.",
      duration: "2 hours",
      samagriIncluded: true,
      modes: ["Residence", "River Ghat"],
      image: "/assets/pooja-placeholder.svg",
      badge: "Vidhi & Samagri Included",
    },
    {
      id: "dev-10-peace",
      slug: "shanti-path-gayatri-havan",
      enabled: true,
      title: "Shanti Path & Gayatri Havan",
      categoryTag: "Peace & Purification",
      filterCategory: "Pitru Dosh & Moksha",
      description:
        "Purifying Gayatri and Maha Shanti Havan performed after the completion of mourning rites to cleanse the home and restore peace and spiritual positivity.",
      duration: "2-3 hours",
      samagriIncluded: true,
      modes: ["At Residence", "Temple"],
      image: "/assets/pooja-placeholder.svg",
      badge: "Vidhi & Samagri Included",
    },
  ] as ShraadhSanskaarItem[],

  // --------------------------------------------------------------------------
  // 9. SACRED CEREMONY FEATURED VIDEO (`id: "ceremony"`)
  // --------------------------------------------------------------------------
  ceremony: {
    id: "ceremony",
    navLabel: "Ritual Video",
    enabled: true,
    badge: "SACRED KARAMKAND",
    heading: "Witness Pure Vedic Ceremonies",
    subtitle:
      "Experience the sanctity, authentic Vedic swaras, and strict ritual purity of our Havans and Anushthans",
    videoSrc: "/assets/sacred-ceremony.mp4",
    posterSvg: "/assets/pooja-placeholder.svg",
  },

  // --------------------------------------------------------------------------
  // 10. VIDEO GALLERY SECTION (`id: "videos"`, 5 Removable Videos)
  // --------------------------------------------------------------------------
  videoGallerySection: {
    id: "videos",
    navLabel: "Video Gallery",
    enabled: true,
    badge: "WATCH & LEARN",
    heading: "Sacred Ritual Gallery",
    subtitle: "Vedic Anushthans, Pitru Tarpan, and Mantra Recitation Highlights",
  },

  videoGallery: [
    {
      id: "video-1",
      enabled: true,
      title: "Maha Rudrabhishek Vidhi",
      category: "Dev Pooja",
      description: "Sacred Panchamrit Snan and Rudri Path chanting for Lord Shiva",
      videoUrl: "/assets/videos/bhagwat-moolpath.mp4",
      posterUrl: "/assets/pooja-placeholder.svg",
    },
    {
      id: "video-2",
      enabled: true,
      title: "Garud Puran Katha Discourse",
      category: "Pitru Karya",
      description: "Spiritual discourse on soul transition and liberation during mourning rites",
      videoUrl: "/assets/videos/tripura-sundari.mp4",
      posterUrl: "/assets/pooja-placeholder.svg",
    },
    {
      id: "video-3",
      enabled: true,
      title: "Mahamrityunjaya Consecrated Havan",
      category: "Havan & Mantra",
      description: "Sacred fire sacrificial Ahutis for longevity and divine protection",
      videoUrl: "/assets/videos/moolpath-pujanam.mp4",
      posterUrl: "/assets/pooja-placeholder.svg",
    },
    {
      id: "video-4",
      enabled: true,
      title: "Pitru Tarpan & Pind Daan Vidhi",
      category: "Pitru Karya",
      description: "Sacred offerings of barley flour Pindas and sesame water at the ghat",
      videoUrl: "/assets/videos/navgrah-shanti.mp4",
      posterUrl: "/assets/pooja-placeholder.svg",
    },
    {
      id: "video-5",
      enabled: true,
      title: "Navgrah Shanti Havan Anushthan",
      category: "Dev Pooja",
      description: "Pacification ritual for all nine planetary deities with authentic samidhas",
      videoUrl: "/assets/videos/kaal-sarp-dosh.mp4",
      posterUrl: "/assets/pooja-placeholder.svg",
    },
  ] as VideoGalleryItem[],

  // --------------------------------------------------------------------------
  // 11. CONSULTATION & ARRANGEMENT OPTIONS SECTION (`id: "consultation"`)
  // --------------------------------------------------------------------------
  consultationSection: {
    id: "consultation",
    navLabel: "How We Assist",
    enabled: true,
    badge: "COMPLETE DEDICATION",
    heading: "Ritual Logistics & Guidance Options",
    subtitle: "Flexible arrangements tailored to your family's needs and sacred venue",
  },

  consultationOptions: [
    {
      id: "opt-1",
      enabled: true,
      title: "At-Home & Residence Seva",
      description:
        "Pandit Ji travels to your home with complete authentic Samagri, Havan Kund, and sacred utensils for seamless ceremonies.",
      icon: "users",
      bullets: [
        "Complete Pure Samagri Included",
        "Havan Kund & Brass Pooja Utensils",
        "Clear Step-by-Step Family Guidance",
        "Punctual & Devotional Execution",
      ],
    },
    {
      id: "opt-2",
      enabled: true,
      title: "Ghat, Temple & Tirth Seva",
      description:
        "Assistance and complete Vidhi at Crematoriums, holy river Ghats, Temples, or sacred Tirth locations (Haridwar, Gaya, etc.).",
      icon: "droplet",
      bullets: [
        "Antim Sanskaar & Asthi Visarjan",
        "Pind Daan & Tripindi Shraadh",
        "Priority Ritual Space Coordination",
        "Proper Shastric Muhurat Alignment",
      ],
    },
    {
      id: "opt-3",
      enabled: true,
      title: "Urgent Guidance & Online Sankalp",
      description:
        "Immediate telephone or WhatsApp guidance for urgent rites, Tithi calculation, or live online sankalp ceremonies for families abroad.",
      icon: "shield",
      bullets: [
        "Immediate Bereavement Support",
        "Tithi, Shuddhi & Pagdi Scheduling",
        "Live Video Stream Sankalp",
        "100% Confidential & Compassionate",
      ],
    },
  ] as ConsultationOptionItem[],

  // --------------------------------------------------------------------------
  // 12. FINAL CTA BANNER SECTION
  // --------------------------------------------------------------------------
  finalCta: {
    enabled: true,
    badge: "REVERENCE • PURITY • VEDIC VIDHI",
    heading: "Book Pandit Ji for Your Sacred Ceremony",
    description:
      "Whether seeking auspicious divine blessings for your family or performing solemn ancestral rites with dignified Vedic perfection, we are here to guide you with complete dedication and pure Samagri.",
    buttons: {
      deityPooja: "Explore Deity Poojas",
      shraadhSanskaar: "Shraadh & Sanskaar",
      whatsappUs: "Connect on WhatsApp",
    },
  },

  // --------------------------------------------------------------------------
  // 13. MULTI-STEP BOOKING ENGINE CONFIGURATION (`/book-consultation`)
  // --------------------------------------------------------------------------
  booking: {
    badge: "Vedic Pandit & Karamkand Services",
    heading: "BOOK YOUR SACRED CEREMONY",
    subheading:
      "Fill in the 3-step appointment details below to schedule your Deity Pooja or Shraadh Sanskaar with Pandit Ji",
    categories: [
      {
        id: "pooja",
        title: "Deity Pooja & Auspicious Ritual",
        subtitle: "Ganesh, Lakshmi, Shiva, Griha Pravesh, Havan & Jaap",
        icon: "flame",
      },
      {
        id: "shraadh",
        title: "Shraadh & After-Death Sanskaar",
        subtitle: "Antim Sanskaar, Terahvin, Pind Daan, Barsi & Pitru Shanti",
        icon: "droplet",
      },
    ],
    samagriOptions: [
      "Pandit Ji will bring Complete Samagri (Recommended)",
      "We will arrange Samagri (Send List)",
    ],
    venues: [
      "At Our Residence / Home",
      "Temple / Ghat / Crematorium / Hall",
      "Online Sankalp / Remote Guidance",
    ],
    timeSlots: [
      "Morning (Brahma Muhurat / 6:00 AM - 9:00 AM)",
      "Mid-Morning (9:00 AM - 12:00 PM)",
      "Afternoon (Aparahna / 12:00 PM - 3:00 PM for Shraadh)",
      "Evening (5:00 PM - 8:00 PM)",
      "Urgent / Immediate Assistance",
    ],
    whyChooseUs: [
      "Rigveda & Yajurveda Certified Vidhi",
      "Both Dev & Pitru Karya Specialization",
      "Complete Pooja Samagri Provided",
      "Compassionate & Punctual Guidance",
    ],
  },
};

// ============================================================================
// HELPER FUNCTIONS FOR FILTERING, NAV, AND WHATSAPP PAYLOADS
// ============================================================================

export function getEnabledServiceGateways(): ServiceGatewayItem[] {
  return (siteData.serviceGateways || []).filter((item) => item.enabled);
}

export function getEnabledDeityPoojas(): DeityPoojaItem[] {
  return (siteData.deityPoojaServices || []).filter((item) => item.enabled);
}

export function getEnabledShraadhSanskaars(): ShraadhSanskaarItem[] {
  return (siteData.shraadhSanskaarServices || []).filter((item) => item.enabled);
}

export function getEnabledVideos(): VideoGalleryItem[] {
  return (siteData.videoGallery || []).filter((item) => item.enabled);
}

export function getEnabledConsultationOptions(): ConsultationOptionItem[] {
  return (siteData.consultationOptions || []).filter((item) => item.enabled);
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
  links.push({ label: "Home", href: "/" });
  if (siteData.about.enabled) {
    links.push({ label: siteData.about.navLabel, href: "/#about" });
  }
  if (siteData.deityPoojaSection.enabled && getEnabledDeityPoojas().length > 0) {
    links.push({ label: "Deity Poojas", href: "/pooja-services" });
  }
  if (siteData.shraadhSanskaarSection.enabled && getEnabledShraadhSanskaars().length > 0) {
    links.push({ label: "Shraadh & Sanskaar", href: "/shraadh-sanskaar" });
  }
  if (siteData.videoGallerySection.enabled && getEnabledVideos().length > 0) {
    links.push({ label: "Sacred Videos", href: "/#videos" });
  }
  return links;
}
