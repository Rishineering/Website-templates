/**
 * ─────────────────────────────────────────────────────────────
 *  PANDIT PORTFOLIO — SINGLE SOURCE OF CONTENT
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
  description: string;
  duration: string;
  icon: IconName;
  /** Bento width on a 6-column grid. */
  span: 2 | 3 | 4;
  enabled: boolean;
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
  title: "Pandit Aravind Sharma — Vedic Astrology & Vastu",
  description:
    "A quiet practice of Vedic astrology, Vastu and personal sadhana. Personal sittings with Pandit Aravind Sharma, in Pune and online.",
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
  secondaryCta: { label: "Book a Consultation", href: "#book" },
  footnoteLeft: "Jyotish · Vastu · Sadhana",
  footnoteRight: "Pune & online, anywhere",
  mandala: "/assets/mandala-accent.svg",
};

/* ── Philosophy / About ───────────────────────────────────── */

export const philosophy = {
  eyebrow: "A little about me",
  heading: "A practice built on listening.",
  portrait: {
    src: "/assets/portrait-placeholder.svg",
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
    "Each sitting is personal and unhurried. Choose what feels closest to what you are carrying — we can always begin elsewhere.",
  hoverHint: "Hover or tap to read more",
  services: [
    {
      id: "vedic-astrology",
      title: "Vedic Astrology Reading",
      description:
        "A careful reading of your birth chart — the season you were born into, the gifts you carry, and the questions quietly asking for your attention.",
      duration: "75 minutes",
      icon: "sun",
      span: 4,
      enabled: true,
    },
    {
      id: "vastu",
      title: "Vastu Consultation",
      description:
        "A slow walk through your home to align it with the five elements — without breaking walls or uprooting your life. In person or by video.",
      duration: "90 minutes",
      icon: "home",
      span: 2,
      enabled: true,
    },
    {
      id: "graha-shanti",
      title: "Graha Shanti Puja",
      description:
        "A quiet ceremony to soften the weight of a difficult planetary season, held at the temple or in your home with your family beside you.",
      duration: "2 hours",
      icon: "flame",
      span: 2,
      enabled: true,
    },
    {
      id: "relationship",
      title: "Marriage & Relationship Guidance",
      description:
        "A private space to understand compatibility, timing, and the patterns two people carry into a life together — without blame or prediction.",
      duration: "60 minutes",
      icon: "lotus",
      span: 4,
      enabled: true,
    },
    {
      id: "mantra",
      title: "Personal Mantra & Sadhana",
      description:
        "A practice made for you alone: a mantra, a rhythm, and the small daily ritual that suits your constitution and your season of life.",
      duration: "45 minutes",
      icon: "moon",
      span: 3,
      enabled: true,
    },
    {
      id: "family",
      title: "Child & Family Matters",
      description:
        "For naming ceremonies, education decisions, and the tender questions parents carry — held with care and complete confidentiality.",
      duration: "60 minutes",
      icon: "star",
      span: 3,
      enabled: true,
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

/* ── Booking ──────────────────────────────────────────────── */

export const booking = {
  eyebrow: "Book a sitting",
  heading: "Let’s begin with a conversation.",
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
  cta: "Begin a conversation",
  sentence:
    "A quiet corner of the internet, kept with care in Pune.",
  disclaimer:
    "Astrology and Vastu are offered here as guidance and companionship — never as a substitute for medical, legal or financial advice.",
  credit: "Designed with intention",
};
