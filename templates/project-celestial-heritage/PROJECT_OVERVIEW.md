# Project Celestial Heritage (श्री वैदिक पूजा एवं संस्कार केंद्र)

> **Dedicated Documentation for Project 1**  
> **Standalone Directory:** `/home/rj12_rj1/Desktop/Dev Projects (OC)/project-celestial-heritage/`  
> **Monorepo Directory:** `/home/rj12_rj1/Desktop/Dev Projects (OC)/Website-templates/templates/project-celestial-heritage/`  
> **Live GitHub Pages URL:** [https://rishineering.github.io/Website-templates/vedic-luxury-web/](https://rishineering.github.io/Website-templates/vedic-luxury-web/)

---

## 1. Project Purpose & Scope

Project Celestial Heritage is an ultra-luxury Vedic portal for a revered Vedic Pandit specializing in two essential pillars of Hindu spiritual life:
1. **Deity Poojas & Auspicious Sanskaars (देव कार्य एवं शुभ अनुष्ठान):** Worship of Hindu deities, Abhishek, Havans, Jaaps, Griha Pravesh, and auspicious family rites.
2. **Shraadh, Pitru Karya & After-Death Sanskaars (पितृ कार्य एवं मरणोपरांत संस्कार):** Antim Sanskaar, Terahvin, Pind Daan, Narayan Bali, Tripindi Shraadh, Garud Puran Paath, and ancestral peace rites.

---

## 2. Design System & Aesthetics

### Themes
- **Royal Obsidian (Dark Mode - Default):**
  - Background: `#070609` (Primary), `#0D0B12` (Secondary)
  - Card Surfaces: `rgba(17, 15, 22, 0.84)` with metallic champagne-gold borders (`#D4AF37`)
  - Accent: Royal Kumkum Crimson (`#7F1D2B`) & Radiant Gold (`#F3DFA5`)
- **Sacred Saffron / Kesariya (Light Mode):**
  - Background: Vibrant saffron-orange sunburst (`#FF9E2C` → `#FFBE6B` → `#FFD699`) with a full-page gradient (`#FFA73B` → `#FFC878` → `#FFB347`)
  - Card Surfaces: Soft ivory-saffron cream (`#FFF5E6`) with warm terracotta-gold borders
  - Typography: Deep Sindoor Mahogany (`#240702`) and Rich Rosewood (`#6E1406`) for high-contrast legibility

### Typography
- **Headings:** `Cormorant_Garamond` (weights: 500, 600, 700)
- **Body & UI:** `Plus_Jakarta_Sans` (weights: 400, 500, 600)
- **Sanskrit / Devanagari:** `Noto_Serif_Devanagari` (weights: 500, 600, 700)

---

## 3. Route Map & Page Architecture

### 1. `/` (Homepage)
- **Top Announcement Bar:** Authentic Vedic Pooja & Pitru Shraadh with Complete Samagri.
- **Hero Section:** Certified Vedic Karamkand badge, Devanagari subheadline, trust pills, and 3 primary CTAs.
- **2-Card Sacred Gateway (`ServiceGatewaysSection.tsx`):**
  - **Left Card:** *Hindu Deity Poojas & Auspicious Rituals* (Kumkum/Gold glow, Lotus watermark, links to `/pooja-services`).
  - **Right Card:** *Shraadh, Pitru Karya & Antim Sanskaar* (Antique Silver/Amber glow, Tulsi watermark, links to `/shraadh-sanskaar`).
- **About Pandit Ji (`AboutSection.tsx`):** Double-bordered arch portrait with rotating sacred geometry halo, bio paragraphs, and 4 highlight boxes.
- **Sacred Ceremony Showcase (`SacredCeremonySection.tsx`):** Gold-framed HTML5 video player with prominent overlay badge `"YOUR VIDEO HERE • आपका वीडियो यहाँ लगेगा"`.
- **Sacred Video Gallery (`VideoGallerySection.tsx`):** 5 video cards with lightbox player and `"YOUR VIDEO HERE"` badges.
- **Consultation Logistics (`ConsultationOptionsSection.tsx`):** At-Home, Ghat/Tirth, and Urgent Guidance options.
- **Final CTA Banner (`FinalCtaSection.tsx`):** Links to both gateway pages and WhatsApp concierge.

### 2. `/pooja-services` (Deity Poojas & Auspicious Rituals)
- **Header:** Breadcrumb, switch pill to Shraadh page, and Sanskrit shloka banner.
- **Filter Pills:** `"All Poojas"`, `"Deity Worship"`, `"Havan & Jaap"`, `"Home & Sanskaar"`.
- **10 Removable Cards:** Ganesh Sthapana, Mahalakshmi & Kuber, Rudrabhishek, Satyanarayan, Durga Saptashati, Mahamrityunjaya Jaap, Saraswati Vidyarambha, Sundarkand, Navgrah Shanti, Griha Pravesh.
- **Action:** Booking buttons link to `/book-consultation?category=pooja&service=<title>`.

### 3. `/shraadh-sanskaar` (Shraadh & After-Death Sanskaars)
- **Header:** Breadcrumb, switch pill to Pooja page, and ancestral peace mantra (`॥ ॐ पितृ देवताभ्यो नमः ॥`).
- **Urgent Guidance Callout:** Direct bereavement assistance for Antim Sanskaar, Dasha, and Terahvin dates.
- **Filter Pills:** `"All Sanskaars"`, `"Antim & Terahvin Rites"`, `"Pind Daan & Shraadh"`, `"Pitru Dosh & Moksha"`.
- **10 Removable Cards:** Antim Sanskaar, Dasha/Terahvin Kriya, Pind Daan, Garud Puran Katha, Varshik Barsi, Tripindi Shraadh, Narayan Bali, Asthi Visarjan, Masik Shraadh, Shanti Path.
- **Action:** Booking buttons link to `/book-consultation?category=shraadh&service=<title>`.

### 4. `/book-consultation` (Interactive 3-Step Wizard)
- Reads URL query parameters (`?category=` and `?service=`) to pre-fill choices automatically.
- **Step 1:** Full Name, 10-digit mobile number, city/locality.
- **Step 2:** Category radio buttons, dynamic ritual dropdown, Samagri choice (*Pandit Ji will bring Complete Samagri* vs *List Only*), venue selector, preferred date/Tithi, time slot.
- **Step 3:** Gotra/Nakshatra notes, confirmation modal, and URL-encoded WhatsApp redirect.

---

## 4. Master Configuration (`src/config/siteData.ts`)

All content and feature toggles live in `src/config/siteData.ts`:
- **Contact Numbers:** Lines 85–92 (keep blank by default).
- **Pandit Ji Image:** Line 133 (`siteData.about.image`).
- **Hero Video:** Line 112 (`siteData.hero.videoSrc`).
- **Ceremony Video:** Line 159 (`siteData.ceremony.videoSrc`).
- **Deity Pooja Services:** Array `deityPoojaServices` (each with `id`, `slug`, `enabled: true`).
- **Shraadh Sanskaar Services:** Array `shraadhSanskaarServices` (each with `id`, `slug`, `enabled: true`).

---

## 5. Build & Development Commands

```bash
# Run standalone dev server
cd "/home/rj12_rj1/Desktop/Dev Projects (OC)/project-celestial-heritage"
npm run dev

# Run static production build
GITHUB_PAGES=true npm run build
```
