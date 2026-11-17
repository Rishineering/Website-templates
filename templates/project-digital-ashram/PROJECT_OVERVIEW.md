# Project Digital Ashram (Pandit Aravind Sharma)

> **Dedicated Documentation for Project 2**  
> **Standalone Directory:** `/home/rj12_rj1/Desktop/Dev Projects (OC)/project-digital-ashram/`  
> **Monorepo Directory:** `/home/rj12_rj1/Desktop/Dev Projects (OC)/Website-templates/templates/project-digital-ashram/`  
> **Live GitHub Pages URL:** [https://rishineering.github.io/Website-templates/pandit-portfolio/](https://rishineering.github.io/Website-templates/pandit-portfolio/)

---

## 1. Project Purpose & Scope

Project Digital Ashram is an intimate, text-driven "Digital Ashram" portfolio website for a solo Vedic Astrologer, Vastu practitioner, and spiritual guide (**Pandit Aravind Sharma**). 

The practice emphasizes quiet listening, fear-free horoscope interpretation, and compassionate guidance without fatalistic superstition.

---

## 2. Design System & Sacred Saffron Aesthetic

### Color Palette
- **Primary Saffron Background:** Ambient radial and linear gradients (`#FFC885` to `#FFDFB3`)
- **Card Surfaces:** Warm Ivory-Saffron (`#FFF6EB`)
- **Primary Typography:** Deep Sindoor Espresso (`#2A0802`)
- **Secondary Typography:** Deep Terracotta-Rust (`#5C1B09`)
- **Accent Accents:** Kumkum Vermilion (`#B9380B`) and Muted Saffron-Sage (`#9A4509`)

### Typography
- **Headings:** `Playfair_Display` (editorial serif)
- **Body & UI:** `Plus_Jakarta_Sans`
- **Signature:** `Caveat` (Pandit Ji's handwritten signature)

### Texture & Micro-Interactions
- Fixed paper grain overlay (`.grain`) with subtle texture.
- Rotating line mandala watermark (2% opacity) in the Hero.
- Lenis smooth momentum scrolling with global `#` anchor interception and keyboard skip-link.

---

## 3. Page Architecture & Features

### 1. `/` (Homepage)
- **Header:** Sticky minimal navigation with Pandit Ji's name, Pune location, primary anchor links, and a *"Book a sitting"* CTA.
- **Hero Section:** Rotating mandala watermark, three-line headline, philosophical intro, and primary/secondary CTAs.
- **Philosophy / About (`#philosophy`):** Editorial two-column letter with framed portrait placeholder, drop-cap opening, and handwritten signature.
- **Bento Offerings Grid (`#offerings`):**
  - 6 services: Vedic Astrology, Vastu, Graha Shanti, Marriage Guidance, Personal Mantra, Child & Family.
  - Every card features custom sacred SVG artwork (`public/assets/offerings/*.svg`) with a **`YOUR OFFERING PHOTO HERE`** badge.
  - Cards include two distinct action buttons:
    - **`Read Now`:** Navigates to `/offerings/[id]` for the complete guide.
    - **`Book Now`:** Scrolls to the contact form and automatically pre-selects that service.
- **Voices / Testimonials (`#voices`):** Autoplay quote carousel with blur cross-fade animation and accessible pause/play toggle.
- **Contact & Booking (`#book`):**
  - Section heading: **"Contact *now.*"**
  - 3-step conversational form (Name/Mobile → Service Pill selection → Time/Mode).
  - Generates a WhatsApp message (`https://wa.me/...`) with a safe clipboard copy fallback when numbers are empty.
- **Site Footer:** Reassuring invitation, navigation links, contact metadata, and back-to-top button.

### 2. `/offerings/[id]` (Dedicated In-Depth Reading Pages)
- Static Site Generation via `generateStaticParams()` for all 6 offerings:
  - `/offerings/vedic-astrology/`
  - `/offerings/vastu/`
  - `/offerings/graha-shanti/`
  - `/offerings/relationship/`
  - `/offerings/mantra/`
  - `/offerings/family/`
- **Page Structure:**
  - Dedicated sticky navigation with *"All Offerings"* return button and *"Contact Now"* CTA.
  - Breadcrumb, duration badge, title, and sacred Sanskrit shloka.
  - Full-width hero artwork for the offering.
  - Two-column editorial layout: multi-paragraph deep-dive reading on the left, *"Key Highlights"* and *"What to Keep Ready"* cards on the right.
  - **"Book This Sitting Now"** button that automatically pre-selects that offering on the homepage form.
  - *"Other Sacred Offerings"* carousel at the bottom for continuous exploration.

---

## 4. Master Content Configuration (`src/config/panditData.ts`)

All content and feature toggles live in `src/config/panditData.ts`:
- **Pandit Details:** Lines 49–56 (name, lineage, location, years of practice).
- **Contact Details:** Lines 58–66 (phone and WhatsApp numbers kept blank by default).
- **Offerings Array:** `offerings.services` contains all 6 services with `title`, `subtitle`, `sanskritMantra`, `description`, `duration`, `image`, `fullArticle`, `highlights`, and `whatToPrepare`.
- **Testimonials:** `testimonials.items` contains quotes, client names, and locations.
- **Booking Copy:** `booking.heading` set to `"Contact now."`.

---

## 5. Build & Development Commands

```bash
# Run standalone dev server
cd "/home/rj12_rj1/Desktop/Dev Projects (OC)/project-digital-ashram"
npm run dev

# Run static production build
GITHUB_PAGES=true npm run build
```
