/**
 * ─────────────────────────────────────────────────────────────
 *  PANDIT PORTFOLIO (PROJECT DIGITAL ASHRAM) — MASTER CONTENT
 * ─────────────────────────────────────────────────────────────
 *  Everything on the site is driven from this file.
 *  Toggle any section or item with its `enabled` flag.
 *
 *  ▸ Phone numbers are intentionally left blank. Add them in
 *    `contact` below (digits only for the WhatsApp number).
 *  ▸ Replace the SVG placeholders in `public/assets/` with your
 *    own imagery, keeping the same filenames or updating paths.
 * ─────────────────────────────────────────────────────────────
 */

export type IconName =
  | "sun"
  | "home"
  | "flame"
  | "lotus"
  | "moon"
  | "star";

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  sanskritMantra: string;
  description: string;
  duration: string;
  icon: IconName;
  image: string;
  /** Bento width on a 6-column grid. */
  span: 2 | 3 | 4;
  enabled: boolean;
  fullArticle: string[];
  highlights: string[];
  whatToPrepare: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  context: string;
  enabled: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  enabled: boolean;
}

/* ── Identity ─────────────────────────────────────────────── */

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const pandit = {
  name: "Aravind Sharma",
  fullName: "Pandit Aravind Sharma",
  shortName: "Pandit Aravind",
  lineage: "Jyotish · Vastu · Sadhana",
  location: "Pune, India",
  yearsOfPractice: 22,
};

export const contact = {
  /** Leave empty until ready — the booking engine handles it gracefully. */
  phone: "",
  /** WhatsApp number in international format, digits only (e.g. "919876543210"). */
  whatsappNumber: "",
  email: "",
  availability: "By appointment · In person in Pune & online, anywhere",
  hours: "Mon – Sat · 9 am to 7 pm IST",
};

export const siteMeta = {
  title: "Pandit Aravind Sharma — Vedic Astrology & Vastu (Digital Ashram)",
  description:
    "A sacred saffron Digital Ashram of Vedic astrology, Vastu and personal sadhana. Personal sittings with Pandit Aravind Sharma, in Pune and online.",
  url: "https://example.com",
};

/* ── Navigation ───────────────────────────────────────────── */

export const navigation: NavItem[] = [
  { label: "Philosophy", href: "#philosophy", enabled: true },
  { label: "Offerings", href: "#offerings", enabled: true },
  { label: "Voices", href: "#voices", enabled: true },
  { label: "Journal", href: "#journal", enabled: false },
];

/* ── Sections on / off ────────────────────────────────────── */

export const sections = {
  hero: { enabled: true },
  philosophy: { enabled: true },
  offerings: { enabled: true },
  testimonials: { enabled: true },
  booking: { enabled: true },
  footer: { enabled: true },
};

/* ── Hero ─────────────────────────────────────────────────── */

export const hero = {
  eyebrow: "Namaste, I am Pandit Aravind Sharma",
  /** Each string is its own line. The final line is set in italic terracotta. */
  headlineLines: [
    "Guiding your journey",
    "through ancient",
    "Vedic wisdom.",
  ],
  paragraph:
    "For more than two decades I have sat with people in the quiet, uncertain moments of life. My work is simple — to read what the sky and your home are already saying, and to help you find your way back to steadiness. No predictions, no fear. Only companionship and clarity.",
  primaryCta: { label: "Explore Offerings", href: "#offerings" },
  secondaryCta: { label: "Contact Now", href: "#book" },
  footnoteLeft: "Jyotish · Vastu · Sadhana",
  footnoteRight: "Pune & online, anywhere",
  mandala: `${BASE_PATH}/assets/mandala-accent.svg`,
};

/* ── Philosophy / About ───────────────────────────────────── */

export const philosophy = {
  eyebrow: "A little about me",
  heading: "A practice built on listening.",
  portrait: {
    src: `${BASE_PATH}/assets/portrait-placeholder.svg`,
    alt: "A minimal line-art portrait placeholder of Pandit Aravind Sharma",
  },
  caption: "Pandit Aravind Sharma · Pune",
  /** Paragraphs are rendered in order; the first is given a drop cap. */
  letter: [
    "Namaste, and thank you for finding your way here.",
    "I came to this path the way most of us do — through a question I could not answer alone. My grandfather kept a worn copy of the Brihat Parashara Hora Shastra by his bedside, and as a boy I would fall asleep to the smell of its old paper while he explained, patiently, that the stars do not command us. They remind us.",
    "I do not believe in frightening people with their charts. A birth chart is not a verdict. It is a map of tendencies, seasons and invitations — a way of seeing where you are being asked to grow gently, and where you have been pushing against a door that was never locked.",
    "My sittings are unhurried. We talk first, as people. Then we look at what the sky has to say. Whatever we find, you leave with something you can actually live with: a practice, a small shift in your home, or simply a steadier way of holding the question.",
    "If you are here, something in you is looking for that steadiness. I would be glad to sit with you.",
  ],
  signature: "Aravind",
  signatureRole: "Pandit Aravind Sharma",
  facts: [
    { label: "In practice since", value: "2004" },
    { label: "Lineage", value: "Natha tradition" },
    { label: "Sittings held", value: "1,400+" },
  ],
};

/* ── Offerings ────────────────────────────────────────────── */

export const offerings = {
  eyebrow: "Offerings",
  heading: "Ways we can sit together.",
  paragraph:
    "Each sitting is personal and unhurried. Click 'Read Now' on any card to explore the full guide for that offering, or book your sitting directly.",
  hoverHint: "Click Read Now for full guide · Or Book Now",
  services: [
    {
      id: "vedic-astrology",
      title: "Vedic Astrology Reading",
      subtitle: "Janma Kundli, Dasha Seasons & Life Direction",
      sanskritMantra: "॥ ॐ आदित्याय विद्महे दिवाकराय धीमहि तन्नः सूर्यः प्रचोदयात् ॥",
      description:
        "A careful reading of your birth chart — the season you were born into, the gifts you carry, and the questions quietly asking for your attention.",
      duration: "75 minutes",
      icon: "sun",
      image: `${BASE_PATH}/assets/offerings/vedic-astrology.svg`,
      span: 4,
      enabled: true,
      fullArticle: [
        "In the Parashara tradition of Jyotish, your Janma Kundli (birth chart) is not a fixed sentence — it is a living portrait of the sky at the moment you took your first breath. It reveals the natural rhythm of your temperament, the seasons (Mahadashas and Antardashas) unfolding in your life right now, and where your effort will bear the deepest fruit.",
        "During our 75-minute sitting, we begin not with technical jargon, but with what you are actually living through: a crossroads in your work, a recurring pattern in relationships, a question of timing, or a quiet restlessness you cannot quite name. From there, we examine your Rashi chart, Navamsha (D-9), Dashamsha (D-10), and current planetary transits (Gochara).",
        "You will never hear fatalistic predictions or fear-based remedies from me. Instead, you leave with a clear understanding of the season you are in — when to act boldly, when to wait with patience, and simple, grounded daily adjustments that bring you back into harmony with your own chart.",
      ],
      highlights: [
        "Complete analysis of Lagna, Moon Nakshatra, Navamsha & Dashamsha charts",
        "Clarity on your current Vimshottari Dasha & upcoming 3-year planetary window",
        "Practical, non-superstitious guidance for career, health, finances & purpose",
        "Written summary of key dates and personal practices shared after our sitting",
      ],
      whatToPrepare: [
        "Date of birth, exact time of birth (from birth certificate or hospital record if possible), and city of birth",
        "Two or three honest questions or areas of life you want us to focus on",
        "A quiet space where you can speak freely for 75 minutes without interruption",
      ],
    },
    {
      id: "vastu",
      title: "Vastu Consultation",
      subtitle: "Harmonizing Your Home with the Five Elements",
      sanskritMantra: "॥ ॐ वास्तुपुरुषाय नमः · पञ्चभूतात्मने नमः ॥",
      description:
        "A slow walk through your home to align it with the five elements — without breaking walls or uprooting your life. In person or by video.",
      duration: "90 minutes",
      icon: "home",
      image: `${BASE_PATH}/assets/offerings/vastu.svg`,
      span: 2,
      enabled: true,
      fullArticle: [
        "Vastu Shastra is the ancient art of listening to a space. Every home has a breath and a centre of gravity — the Brahmasthan — along with directional zones governed by the five elements (Pancha Mahabhuta): Earth, Water, Fire, Air, and Space.",
        "Most people hesitate to seek Vastu guidance because they fear being told to tear down walls or rebuild their kitchen. My approach is rooted in gentle, non-destructive alignment. We work with the home you already have — using light, placement of furniture, copper and brass elements, sacred geometry, and how each room is used.",
        "Whether we walk through your home in person in Pune or tour it together over a live video call with your floor plan, we look at how the space is holding your sleep, your work, and your family's peace — and make quiet shifts you can feel within days.",
      ],
      highlights: [
        "Directional compass & 16-zone Vastu Purusha Mandala assessment of your floor plan",
        "100% non-structural adjustments — zero demolition or costly renovations",
        "Specific placement guidance for sleeping quarters, study/work desk, and home altar (Puja Ghar)",
        "Remedial balancing using natural elements, lighting, brass/copper yantras, and sacred plants",
      ],
      whatToPrepare: [
        "A rough or architectural floor plan of your home/office with North marked",
        "Brief history of how long you have lived in the space and what feels unsettled",
        "If online: a phone or tablet ready for a slow video walkthrough of the rooms",
      ],
    },
    {
      id: "graha-shanti",
      title: "Graha Shanti Puja",
      subtitle: "Sacred Fire & Planetary Peace Ceremony",
      sanskritMantra: "॥ ॐ ब्रह्मा मुरारिस्त्रिपुरांतकारी भानुः शशी भूमिसुतो बुधश्च ॥",
      description:
        "A quiet ceremony to soften the weight of a difficult planetary season, held at the temple or in your home with your family beside you.",
      duration: "2 hours",
      icon: "flame",
      image: `${BASE_PATH}/assets/offerings/graha-shanti.svg`,
      span: 2,
      enabled: true,
      fullArticle: [
        "There are periods in every life — a heavy Sade Sati, a Rahu-Ketu transition, or a challenging Mars or Saturn sub-period — when effort alone feels uphill. In the Vedic tradition, Graha Shanti is not a transaction to 'bribe' the planets; it is a deeply meditative ritual of humility, gratitude, and realignment with cosmic order (Rita).",
        "Conducted either at your home with your family gathered around the sacred fire (Havan Kund) or at the temple on your behalf via Sankalp, the ceremony weaves together Ganapati invocation, Navagraha Kalash Sthapana, Vedic mantra chanting in authentic swara, and sacred Ahutis of pure cow's ghee, sesame, and specific planetary herbs (Samidha).",
        "The atmosphere is unhurried and deeply peaceful. I explain the meaning of each step in plain language as we proceed, so every member of your family feels connected to the prayer.",
      ],
      highlights: [
        "Personalized Sankalp tailored to your Janma Nakshatra, Rashi, and Gotra",
        "Authentic Vedic Navagraha Mantra Japa and sacred Havan with pure Samagri",
        "Clear explanation of every ritual step so the family participates with understanding",
        "Available in-person at your home/temple or via live interactive video Sankalp",
      ],
      whatToPrepare: [
        "Names, Birth Nakshatras (or birth details), and Gotra of participating family members",
        "All sacred Pooja Samagri and Havan herbs are arranged and brought by us",
        "Clean, traditional attire and a quiet two-hour morning window",
      ],
    },
    {
      id: "relationship",
      title: "Marriage & Relationship Guidance",
      subtitle: "Synastry, Compatibility & Shared Seasons",
      sanskritMantra: "॥ समञ्जन्तु विश्वे देवाः समापो हृदयानि नौ ॥",
      description:
        "A private space to understand compatibility, timing, and the patterns two people carry into a life together — without blame or prediction.",
      duration: "60 minutes",
      icon: "lotus",
      image: `${BASE_PATH}/assets/offerings/relationship.svg`,
      span: 4,
      enabled: true,
      fullArticle: [
        "When two people come together, two entire histories, temperaments, and planetary rhythms meet. Traditional Ashtakoota Guna Milan (the 36-point matching system) is only the surface. Two charts with high points can still struggle if their emotional moons or communication rhythms clash, while charts with modest points can thrive when understood with maturity.",
        "In this sitting — whether you are considering marriage, preparing for a life together, or navigating a tender season inside an existing marriage — we look beneath surface scores. We examine how each person processes emotion (Moon & 4th house), how you handle conflict and commitment (7th house & Navamsha), and how your current Dasha periods interact.",
        "Above all, this sitting is a space free of blame or superstition (including fear-mongering around Manglik Dosha). We focus on how to honour each other's nature and build a steadier partnership.",
      ],
      highlights: [
        "Deep relational synastry beyond superficial 36-point Guna Milan scores",
        "Honest, fear-free evaluation of Manglik / Kuja Dosha and Navamsha (D-9) harmony",
        "Auspicious Vivah Muhurat selection for couples planning their wedding ceremony",
        "Compassionate counsel for partners navigating a difficult shared Dasha",
      ],
      whatToPrepare: [
        "Birth date, time, and place for both partners",
        "Whether you are attending together or individually, an open mind and honest questions",
      ],
    },
    {
      id: "mantra",
      title: "Personal Mantra & Sadhana",
      subtitle: "A Daily Spiritual Practice Made for Your Constitution",
      sanskritMantra: "॥ मननात् त्रायते इति मन्त्रः · ॐ तत् सत् ॥",
      description:
        "A practice made for you alone: a mantra, a rhythm, and the small daily ritual that suits your constitution and your season of life.",
      duration: "45 minutes",
      icon: "moon",
      image: `${BASE_PATH}/assets/offerings/mantra.svg`,
      span: 3,
      enabled: true,
      fullArticle: [
        "The Sanskrit word 'Mantra' means 'that which protects and steadies the mind through contemplation.' Many people want a daily spiritual practice, yet feel overwhelmed by generic advice or rituals that do not fit the rhythm of their household and work.",
        "In our 45-minute Sadhana sitting, we look at your Ishta Devata (the form of the divine most natural to your soul's inclination in the chart), your Moon's Nakshatra, and the quality of your mind right now. Together, we craft a simple, sustainable daily practice — often just 12 to 20 minutes at dawn or dusk.",
        "You receive clear instruction on pronunciation, breath, how to work with a Rudraksha or Tulsi Japa Mala, and how to keep the practice alive even on your busiest days.",
      ],
      highlights: [
        "Identification of your personal Ishta Devata and supporting planetary Mantra",
        "One-on-one guidance on sacred pronunciation (Ucharan), rhythm, and Japa Mala use",
        "A realistic 15-minute daily routine designed around your actual life schedule",
        "Audio recording of the mantra pronunciation sent to you after our sitting",
      ],
      whatToPrepare: [
        "Your birth details (date, time, and place of birth)",
        "A notebook and a Rudraksha or Tulsi mala if you already keep one",
      ],
    },
    {
      id: "family",
      title: "Child & Family Matters",
      subtitle: "Namakaran, Vidyarambha & Parenting with Insight",
      sanskritMantra: "॥ ॐ भद्रं कर्णेभिः शृणुयाम देवाः भद्रं पश्येमाक्षभिर्यजत्राः ॥",
      description:
        "For naming ceremonies, education decisions, and the tender questions parents carry — held with care and complete confidentiality.",
      duration: "60 minutes",
      icon: "star",
      image: `${BASE_PATH}/assets/offerings/family.svg`,
      span: 3,
      enabled: true,
      fullArticle: [
        "Every child arrives with their own temperament, curiosity, and way of learning. As parents, one of the greatest gifts we can offer is to see a child for who they truly are — rather than forcing them into a mould that does not fit their nature.",
        "This sitting supports families at key thresholds: selecting auspicious Nakshatra syllables and names for a newborn (Namakaran Sanskaar), choosing favorable dates for Annaprashan or Vidyarambha, or understanding an older child's natural academic and creative strengths.",
        "For young children, I never read charts in a deterministic way; instead, I help parents understand the child's emotional needs (Moon sign & Nakshatra), learning style (Mercury & 5th house), and how to nurture their confidence gently.",
      ],
      highlights: [
        "Nakshatra-based newborn naming (Namakaran) syllables and numerological harmony",
        "Auspicious Muhurat selection for Annaprashan, Mundan, and Vidyarambha Sanskaars",
        "Understanding your child's emotional constitution, learning style & natural gifts",
        "Held in complete warmth and family confidentiality",
      ],
      whatToPrepare: [
        "Exact birth date, time, and hospital/city of birth for the child (and parents)",
        "Any specific family traditions or naming preferences you wish to honour",
      ],
    },
  ] satisfies Service[],
};

/* ── Testimonials ─────────────────────────────────────────── */

export const testimonials = {
  eyebrow: "Voices",
  heading: "What people say, quietly.",
  items: [
    {
      quote:
        "I came expecting a prediction and left with something far more useful — a way of looking at my own life. Pandit ji speaks like a friend who happens to know the stars.",
      name: "Meera",
      context: "Astrology reading · Pune",
      enabled: true,
    },
    {
      quote:
        "He never once made me feel afraid of my chart. That alone changed how I make decisions.",
      name: "Rohan",
      context: "Birth chart reading · London",
      enabled: true,
    },
    {
      quote:
        "Our house never felt like ours. After the vastu sitting it does. My mother still leaves the lamp exactly where he placed it.",
      name: "Kavya",
      context: "Vastu consultation · Bengaluru",
      enabled: true,
    },
    {
      quote:
        "There is no hurry in him. In twenty minutes, the question I had carried for a year became small enough to hold.",
      name: "Ananya",
      context: "Sadhana guidance · New York",
      enabled: true,
    },
    {
      quote:
        "He remembered a small detail from my chart three years later. That kind of attention is rare.",
      name: "Vikram",
      context: "Family consultation · Dubai",
      enabled: true,
    },
  ] satisfies Testimonial[],
};

/* ── Booking / Contact ────────────────────────────────────── */

export const booking = {
  eyebrow: "Book a sitting",
  heading: "Contact now.",
  intro:
    "Three quiet questions. At the end, your answers open in WhatsApp — nothing is sent until you press send there.",
  steps: {
    one: "Who am I speaking with?",
    two: "How can I assist you today?",
    three: "When and how shall we connect?",
  },
  timePreferences: [
    "Morning · 8 am – 11 am IST",
    "Afternoon · 12 pm – 4 pm IST",
    "Evening · 5 pm – 8 pm IST",
    "Anytime that suits you",
  ],
  modes: ["Online", "In person (Offline)"],
  submitLabel: "Send to WhatsApp",
  successNote:
    "You’ll be taken to WhatsApp with this message ready to send.",
  fallbackNote:
    "WhatsApp isn’t connected yet. Add your number in src/config/panditData.ts — meanwhile, your message is ready below.",
};

/* ── Footer ───────────────────────────────────────────────── */

export const footer = {
  eyebrow: "A quiet invitation",
  invitation:
    "If something in you is asking, I would be glad to sit with it.",
  cta: "Contact now",
  sentence:
    "A quiet corner of the internet, kept with care in Pune.",
  disclaimer:
    "Astrology and Vastu are offered here as guidance and companionship — never as a substitute for medical, legal or financial advice.",
  credit: "Designed with intention",
};
