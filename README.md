# Multi-Site Website Templates Hub (Monorepo Documentation)

> **Repository:** [https://github.com/Rishineering/Website-templates](https://github.com/Rishineering/Website-templates)  
> **Default Branch:** `main` (Source code for all templates)  
> **Deployment Branch:** `gh-pages` (Static production builds served on GitHub Pages)  
> **Hub Live URL:** [https://rishineering.github.io/Website-templates/](https://rishineering.github.io/Website-templates/)  
> **Last Updated:** November 2026

---

## 1. Executive Summary & Monorepo Architecture

This monorepo consolidates multiple bespoke, production-grade Vedic website projects into a single Git repository. Each template is completely independent, containing its own `package.json`, `tsconfig.json`, `src/`, and `public/` directory.

### High-Level Folder Layout

```text
Website-templates/
├── .gitignore                          # Global monorepo ignore rules
├── README.md                           # Master Monorepo Documentation (This File)
├── index.html                          # Root Showcase Hub Portal (links to all live templates)
└── templates/
    ├── project-celestial-heritage/     # Project 1: श्री वैदिक पूजा एवं संस्कार केंद्र
    │   ├── src/
    │   ├── public/
    │   ├── next.config.mjs
    │   ├── package.json
    │   └── PROJECT_OVERVIEW.md         # Dedicated detailed docs for Project 1
    │
    └── project-digital-ashram/         # Project 2: Pandit Aravind Sharma (Digital Ashram)
        ├── src/
        ├── public/
        ├── next.config.ts
        ├── package.json
        └── PROJECT_OVERVIEW.md         # Dedicated detailed docs for Project 2
```

In addition, each template exists as a standalone directory on the development machine for dedicated local testing and dev server running:
- **Project 1 Standalone:** `/home/rj12_rj1/Desktop/Dev Projects (OC)/project-celestial-heritage/`
- **Project 2 Standalone:** `/home/rj12_rj1/Desktop/Dev Projects (OC)/project-digital-ashram/`

---

## 2. The Two Core Projects At A Glance

| Detail | Project 1: Celestial Heritage | Project 2: Digital Ashram |
| :--- | :--- | :--- |
| **Identity** | श्री वैदिक पूजा एवं संस्कार केंद्र (`Pandit Ji`) | Pandit Aravind Sharma (`Pandit Aravind`) |
| **Theme / Aesthetic** | **Royal Obsidian (Dark)** & **Sacred Saffron / Kesariya (Light)** | **Vibrant Saffron & Terracotta** (`#FFC885` to `#FFDFB3`) |
| **Core Specialization** | Two Vedic Pillars:<br>1. **Dev Karya:** Deity Poojas & Auspicious Havans<br>2. **Pitru Karya:** Shraadh & Antim Sanskaars | Personal Spiritual Guide & Vedic Astrologer:<br>• Jyotish · Vastu · Sadhana<br>• Solitary sittings without superstition |
| **Primary Navigation & Pages** | • `/` (2-Card Hero Gateway)<br>• `/pooja-services` (10 Deity Poojas with filters)<br>• `/shraadh-sanskaar` (10 Solemn Rites with filters)<br>• `/book-consultation` (3-Step Booking Wizard) | • `/` (Hero, Philosophy, 6 Bento Offerings, Voices, Booking)<br>• `/offerings/[id]` (6 dedicated in-depth reading pages)<br>• `#book` (Conversational 3-step WhatsApp flow) |
| **Master Config File** | `src/config/siteData.ts` | `src/config/panditData.ts` |
| **Live GitHub Pages URL** | [https://rishineering.github.io/Website-templates/vedic-luxury-web/](https://rishineering.github.io/Website-templates/vedic-luxury-web/) | [https://rishineering.github.io/Website-templates/pandit-portfolio/](https://rishineering.github.io/Website-templates/pandit-portfolio/) |

---

## 3. Detailed Breakdown: Project Celestial Heritage

### Architecture & Tech Stack
- **Framework:** Next.js 14.2 (App Router, TypeScript)
- **Styling:** Tailwind CSS + Custom CSS Variables (`globals.css`)
- **Animation & Motion:** `framer-motion` (scroll reveals, 3D card tilt, modal fades) + `lenis` smooth scrolling
- **Fonts:** `Cormorant_Garamond` (headings), `Plus_Jakarta_Sans` (UI/body), `Noto_Serif_Devanagari` (Sanskrit/Hindi)

### Key Features
1. **Two-Pillar Gateway on Homepage (`/`):**
   - **Left Card:** *Hindu Deity Poojas & Auspicious Rituals* (`/pooja-services`) with gold/crimson glow, Lotus watermark, and highlights.
   - **Right Card:** *Shraadh, Pitru Karya & Antim Sanskaar* (`/shraadh-sanskaar`) with antique silver/amber glow, Tulsi/Diya watermark, and highlights.
2. **Dedicated Route: `/pooja-services`:**
   - 10 full services: Ganesh Sthapana, Mahalakshmi & Kuber, Rudrabhishek, Satyanarayan, Durga Saptashati, Mahamrityunjaya Jaap, Saraswati Vidyarambha, Sundarkand, Navgrah Shanti, Griha Pravesh.
   - Interactive filtering: `"All Poojas"`, `"Deity Worship"`, `"Havan & Jaap"`, `"Home & Sanskaar"`.
   - Direct link pre-populating `/book-consultation?category=pooja&service=...`.
3. **Dedicated Route: `/shraadh-sanskaar`:**
   - 10 solemn services: Antim Sanskaar, Dasha/Terahvin Kriya, Pind Daan & Tarpan, Garud Puran Katha, Varshik Barsi, Tripindi Shraadh, Narayan Bali, Asthi Visarjan, Masik Shraadh, Shanti Path.
   - Urgent bereavement callout banner for immediate WhatsApp or phone assistance.
   - Interactive filtering: `"All Sanskaars"`, `"Antim & Terahvin Rites"`, `"Pind Daan & Shraadh"`, `"Pitru Dosh & Moksha"`.
4. **Interactive 3-Step Booking Wizard (`/book-consultation`):**
   - **Step 1:** Full Name, 10-digit mobile validation, city/locality.
   - **Step 2:** Category radio buttons, dynamic ritual dropdown, Samagri option (*"Pandit Ji will bring Complete Samagri"* vs *"List Only"*), venue selector, preferred date/Tithi, time slot.
   - **Step 3:** Gotra/Nakshatra notes, confirmation modal, and formatted WhatsApp payload redirect (`https://wa.me/...`).
5. **Dual Theme System:**
   - **Royal Obsidian (Dark):** `#070609` background, `#110F16` glass cards, champagne-gold accents.
   - **Sacred Saffron / Kesariya (Light):** Radiant saffron-orange sunburst background (`#FF9E2C` → `#FFBE6B` → `#FFD699`), `#FFF5E6` cards, deep Sindoor/Mahogany text (`#240702` / `#6E1406`).

---

## 4. Detailed Breakdown: Project Digital Ashram

### Architecture & Tech Stack
- **Framework:** Next.js 16.4.6 (Turbopack, App Router, React 19)
- **Styling:** Tailwind CSS v4 with custom `@theme inline` palette
- **Fonts:** `Playfair_Display` (headings), `Plus_Jakarta_Sans` (body), `Caveat` (Pandit Ji's handwritten signature)
- **Animation:** `framer-motion` + `lenis` smooth momentum scrolling

### Key Features
1. **Sacred Saffron Ashram Theme:**
   - Background: Saffron-amber ambient gradients (`#FFC885` to `#FFDFB3`), `#FFF6EB` card surfaces.
   - Typography: Deep Sindoor Espresso (`#2A0802`), Terracotta (`#B9380B`), and Muted Sage (`#9A4509`).
2. **Illustrated 6-Column Bento Offerings Grid:**
   - 6 offerings: Vedic Astrology, Vastu, Graha Shanti, Marriage Guidance, Personal Mantra, Child & Family.
   - Every card has custom sacred SVG artwork (`public/assets/offerings/`) with a clear **`YOUR OFFERING PHOTO HERE`** badge.
3. **Dedicated In-Depth Reading Pages (`/offerings/[id]`):**
   - Static SSG generation via `generateStaticParams()` for all 6 offerings.
   - Displays Sanskrit shloka, detailed multi-paragraph explanation, *"Key Highlights"*, *"What to Keep Ready"*, and a **"Book This Sitting"** button.
   - Pre-selects that specific offering when returning to the homepage contact form.
4. **Whisper Testimonial Carousel:**
   - Autoplay, accessible pause/play toggle, blur cross-fade animation.
5. **Conversational 3-Step Contact Flow (`#book`):**
   - Heading updated to **"Contact *now.*"**
   - Generates WhatsApp message with safe clipboard copy fallback when numbers are empty.

---

## 5. Master Content & Client Onboarding Guide

### Where to Paste Client Information

#### In Project Celestial Heritage (`src/config/siteData.ts`):
```ts
// Lines 85–92: Contact Details
contact: {
  whatsappNumber: "", // Format as "91XXXXXXXXXX" (digits only)
  phoneNumber: "",    // Format as "+91 XXXXX XXXXX"
  displayPhone: "",   // Formatted string for UI display
  email: "",
  location: "Available for At-Home, Temple, Tirth & Online Sankalp Rituals",
}
```

#### In Project Digital Ashram (`src/config/panditData.ts`):
```ts
// Lines 58–66: Contact Details
export const contact = {
  phone: "",          // Format as "+91 XXXXX XXXXX"
  whatsappNumber: "", // Format as "91XXXXXXXXXX" (digits only)
  email: "",
  availability: "By appointment · In person in Pune & online, anywhere",
  hours: "Mon – Sat · 9 am to 7 pm IST",
};
```

### Where to Replace Photos & Videos

#### Project Celestial Heritage:
- **Pandit Ji Portrait:** Replace `public/assets/astrologer-placeholder.svg` (or set `siteData.about.image`).
- **Pooja / Card Illustrations:** Replace `public/assets/pooja-placeholder.svg`.
- **Sacred Ceremony Hero Video:** Replace `public/assets/sacred-ceremony.mp4`.
- **Video Gallery MP4s:** Place real videos in `public/assets/videos/*.mp4`.

#### Project Digital Ashram:
- **Pandit Aravind Portrait:** Replace `public/assets/portrait-placeholder.svg`.
- **Offering Card Artworks:** Replace individual SVGs in `public/assets/offerings/`.

---

## 6. Development & Deployment Cheatsheet

### Running Development Servers Locally
Open two terminal windows:

```bash
# Terminal 1: Project Celestial Heritage
cd "/home/rj12_rj1/Desktop/Dev Projects (OC)/project-celestial-heritage"
npm run dev
# -> Runs on http://localhost:3001

# Terminal 2: Project Digital Ashram
cd "/home/rj12_rj1/Desktop/Dev Projects (OC)/project-digital-ashram"
npm run dev
# -> Runs on http://localhost:3000
```

### Syncing Changes & Pushing Live to GitHub Pages
Whenever edits are made, run this standard pipeline to sync the monorepo and update GitHub Pages:

```bash
# 1. Sync standalone code into the monorepo templates
rsync -av --delete --exclude 'node_modules' --exclude '.next' --exclude 'out' --exclude '.git' \
  "/home/rj12_rj1/Desktop/Dev Projects (OC)/project-celestial-heritage/" \
  "/home/rj12_rj1/Desktop/Dev Projects (OC)/Website-templates/templates/project-celestial-heritage/"

rsync -av --delete --exclude 'node_modules' --exclude '.next' --exclude 'out' --exclude '.git' \
  "/home/rj12_rj1/Desktop/Dev Projects (OC)/project-digital-ashram/" \
  "/home/rj12_rj1/Desktop/Dev Projects (OC)/Website-templates/templates/project-digital-ashram/"

# 2. Build both static production releases
cd "/home/rj12_rj1/Desktop/Dev Projects (OC)/Website-templates/templates/project-celestial-heritage"
GITHUB_PAGES=true npm run build

cd "/home/rj12_rj1/Desktop/Dev Projects (OC)/Website-templates/templates/project-digital-ashram"
GITHUB_PAGES=true npm run build

# 3. Commit and push source code to 'main'
cd "/home/rj12_rj1/Desktop/Dev Projects (OC)/Website-templates"
git add .
git commit -m "feat: sync latest template updates"
git push origin main

# 4. Package and force-push pure static release to 'gh-pages'
rm -rf /tmp/site-build && mkdir -p /tmp/site-build
cp index.html /tmp/site-build/index.html
mkdir -p /tmp/site-build/vedic-luxury-web && cp -r templates/project-celestial-heritage/out/* /tmp/site-build/vedic-luxury-web/
mkdir -p /tmp/site-build/pandit-portfolio && cp -r templates/project-digital-ashram/out/* /tmp/site-build/pandit-portfolio/

cd /tmp/gh-pages-clean
git rm -rf .
cp -r /tmp/site-build/* .
touch .nojekyll
git add .
git commit -m "deploy: update live gh-pages static release"
git push origin gh-pages --force
```

---

## 7. Quality Gates & Verified Status

- **TypeScript:** Strict typecheck passing across all components, configs, and dynamic routes.
- **ESLint:** 0 warnings, 0 errors.
- **Static Export (`output: "export"`):** 100% static compatible with zero server-side runtime dependencies.
- **Asset Integrity:** All SVGs, fonts, and videos are pre-built to prevent 404 broken image errors.
- **Bilingual Accessibility:** All placeholder graphics include explicit English and Hindi guidance (`"YOUR PHOTO HERE • पंडित जी की फोटो यहाँ लगेगी"`).
