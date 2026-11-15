# श्री श्री विद्या Astrology — Development & Architecture Guide

## 1. Overview & Aesthetic Direction
- **Brand:** श्री श्री विद्या Astrology (`Divine Vedic Guidance`)
- **Design System:** *Royal Celestial Heritage*
  - **Default Theme (`Royal Obsidian` — Dark Mode):** `#070609` primary background, `#110F16` glassmorphic cards, metallic champagne-gold borders (`#D4AF37` / `#F3DFA5`), radial gold spotlight hover physics.
  - **Secondary Theme (`Sacred Ivory` — Light Mode):** `#FAF7F2` warm parchment background, `#FFFFFF` cards, deep maroon (`#5E121D`) and antique gold (`#9A721C`) accents.
- **Tech Stack:**
  - **Framework:** Next.js 14.2 (App Router, TypeScript)
  - **Styling:** Tailwind CSS + Custom CSS Variables (`src/app/globals.css`)
  - **Motion & Smooth Scroll:** `framer-motion` + `lenis`
  - **Icons:** `lucide-react`
  - **Typography (`next/font/google`):** `Cormorant_Garamond` (headings), `Plus_Jakarta_Sans` (body/UI), `Noto_Serif_Devanagari` (Sanskrit/Hindi accents)

---

## 2. How to View This Website on Your Local Mac (From This Headless Linux VM)

Because this Linux machine (`harness-dev-vm`, External IP: `34.100.217.29`, Internal IP: `10.160.0.3`) is a remote/headless VM, opening a browser *inside* the VM lacks GPU acceleration and is slow. Instead, you can view the site directly in **Safari / Chrome / Arc on your Mac** using any of the methods below:

### Method A: SSH Local Port Forwarding from Your Mac Terminal (Recommended)
Run this command in your **Mac's Terminal** (replace the SSH host/flag with how you normally SSH into this VM):

```bash
ssh -L 3001:localhost:3001 rj12_rj1@34.100.217.29
```

*(Or if you use Google Cloud SDK `gcloud` on your Mac)*:
```bash
gcloud compute ssh rj12_rj1@harness-dev-vm -- -L 3001:localhost:3001
```

Once connected, open **Chrome or Safari on your Mac** and visit:
- **Landing Page:** `http://localhost:3001`
- **Booking Wizard:** `http://localhost:3001/book-consultation`

### Method B: VS Code / Cursor "Ports" Tab (If Connected via Remote-SSH)
1. Open the bottom panel in VS Code / Cursor (`Cmd + J`) and click the **Ports** tab.
2. Click **Forward a Port** and enter `3001`.
3. Open `http://localhost:3001` in your Mac browser.

### Method C: Direct VM IP Access (If Port 3001 is Open in Your VM Firewall)
The server is bound to `0.0.0.0:3001` (`-H 0.0.0.0 -p 3001`). If TCP port `3001` is allowed in your firewall rules:
- Visit `http://34.100.217.29:3001` directly from your Mac browser.

---

## 3. Resolution of `ChunkLoadError: Loading chunk app/layout failed`
The error occurred previously because:
1. `next dev` was started over an existing `.next` production build cache while the headless VM browser simultaneously triggered 404 compilation storms for missing `.mp4` placeholder videos (`/assets/hero-ritual.mp4` and `/assets/sacred-ceremony.mp4`).
2. **Fixes Applied:**
   - Generated valid, ultra-lightweight (`3.1 KB`) H.264 `.mp4` placeholder files for `/assets/hero-ritual.mp4`, `/assets/sacred-ceremony.mp4`, and all 5 `/assets/videos/*.mp4` files so **zero 404 errors** occur on page load.
   - Configured `chunkLoadTimeout: 120000` (120 seconds) inside `next.config.mjs`.
   - Rebuilt a clean production bundle (`npm run build`) and started the optimized production server on `0.0.0.0:3001` (`npm run start`), which serves pre-compiled static chunks in `<5ms` and completely eliminates dev-bundler timeouts.

---

## 4. Project Directory Structure

```text
vedic-luxury-web/
├── public/
│   └── assets/
│       ├── astrologer-placeholder.svg   # Regal gold-and-obsidian Acharya portrait SVG
│       ├── hero-bg-fallback.svg         # Celestial mandala & astrolabe SVG background
│       ├── pooja-placeholder.svg        # Sacred Purna Kalash & Jyoti SVG placeholder
│       ├── hero-ritual.mp4              # Valid lightweight placeholder MP4 (replace anytime)
│       ├── sacred-ceremony.mp4          # Valid lightweight placeholder MP4 (replace anytime)
│       └── videos/                      # 5 valid lightweight placeholder MP4s for Video Gallery
├── src/
│   ├── config/
│   │   └── siteData.ts                  # 100% Modular Master Configuration File
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx               # Top announcement bar + glass navbar + theme toggle
│   │   │   └── Footer.tsx               # Luxury 4-column footer with dynamic links
│   │   ├── providers/
│   │   │   ├── ThemeProvider.tsx        # Royal Obsidian (Dark) <-> Sacred Ivory (Light)
│   │   │   └── SmoothScrollProvider.tsx # Lenis smooth scrolling provider
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx          # Hero section with rotating astrolabe & 3 CTAs
│   │   │   ├── AboutSection.tsx         # Double-bordered gold arch portrait + 4 highlights
│   │   │   ├── SacredCeremonySection.tsx# Gold-framed custom HTML5 video showcase
│   │   │   ├── AstrologyServicesSection.tsx # 7 removable Astrology service cards
│   │   │   ├── PoojaServicesSection.tsx     # 10 removable Pooja cards ("With Samagri")
│   │   │   ├── VideoGallerySection.tsx      # 5 removable video cards + lightbox modal
│   │   │   ├── ConsultationOptionsSection.tsx # 3 consultation mode cards
│   │   │   └── FinalCtaSection.tsx          # Final CTA banner
│   │   └── ui/
│   │       ├── FloatingWhatsApp.tsx     # Fixed bottom-right pulsing WhatsApp concierge
│   │       ├── LuxuryIcon.tsx           # Dynamic icon mapper
│   │       └── SectionHeader.tsx        # Sacred pill badge + ornate divider + heading
│   └── app/
│       ├── globals.css                  # CSS variables, gold gradients, card hover physics
│       ├── layout.tsx                   # Google Fonts + Providers + Navbar/Footer shell
│       ├── page.tsx                     # Modular landing page
│       └── book-consultation/
│           └── page.tsx                 # 3-Step Booking Wizard + WhatsApp Redirect Engine
```

---

## 5. Master Configuration Guide (`src/config/siteData.ts` Line Numbers)

All site content, contact numbers, media paths, and section/service visibility flags live in `src/config/siteData.ts`:

### A. Paste Client's Phone & WhatsApp Numbers (`Lines 85–93`)
```ts
contact: {
  whatsappNumber: "", // Line 86: Format as "91XXXXXXXXXX" (no + or spaces)
  phoneNumber: "",    // Line 87: Format as "+91 XXXXX XXXXX"
  displayPhone: "",   // Line 88: Optional formatted number for display
  email: "",          // Line 89
  location: "India (Online & Offline Consultations Available)",
}
```
*Fallback behavior when blank:* WhatsApp buttons still open `https://wa.me/?text=...` with the pre-filled message, and Call buttons gracefully display `"Contact Number Coming Soon"`.

### B. Replace Dummy Astrologer Photo & Video Paths
- **Astrologer Portrait Image:** **Line `133`** (`siteData.about.image`) — Replace `"/assets/astrologer-placeholder.svg"` with your photo path (e.g., `"/assets/astrologer.jpg"`).
- **Astrologer Name:** **Line `78`** (`siteData.brand.astrologerName: "Acharya Ji"`).
- **Hero Background Video:** **Line `112`** (`siteData.hero.videoSrc: "/assets/hero-ritual.mp4"`).
- **Sacred Ceremony Video:** **Line `159`** (`siteData.ceremony.videoSrc: "/assets/sacred-ceremony.mp4"`).

### C. Toggle or Remove Any Section or Individual Service
Every section and item has `enabled: true`. Changing `enabled: false` (or deleting an object from its array) automatically removes it from the landing page, navigation links, footer, and `/book-consultation` service dropdown:
- **Top Announcement Bar:** **Line `99`** (`siteData.topBar.enabled`)
- **Hero Section:** **Line `107`** (`siteData.hero.enabled`)
- **About the Astrologer Section:** **Line `128`** (`siteData.about.enabled`)
- **Sacred Ceremony Section:** **Line `154`** (`siteData.ceremony.enabled`)
- **Astrology Services Section:** **Line `169`** (`siteData.servicesSection.enabled`)
  - **7 Individual Astrology Services (`siteData.astrologyServices`):** **Lines `175–253`** (`enabled` flags on lines `179, 190, 201, 212, 223, 234, 245`)
- **Pooja Services Section:** **Line `261`** (`siteData.poojaSection.enabled`)
  - **10 Individual Pooja Services (`siteData.poojaServices`):** **Lines `267–396`** (`enabled` flags on lines `271, 284, 297, 310, 323, 335, 348, 360, 373, 386`)
- **Video Gallery Section:** **Line `404`** (`siteData.videoGallerySection.enabled`)
  - **5 Individual Videos (`siteData.videoGallery`):** **Lines `410–456`** (`enabled` flags on lines `413, 422, 431, 440, 449`)
- **Consultation Options Section:** **Line `464`** (`siteData.consultationSection.enabled`)
  - **3 Consultation Cards (`siteData.consultationOptions`):** **Lines `470–513`**
- **Final CTA Banner:** **Line `519`** (`siteData.finalCta.enabled`)
- **Booking Consultation Fee (`₹199.99`):** **Line `539`** (`siteData.booking.consultationFee`)

---

## 6. Commands Reference

```bash
# Clean build & start fast production server on port 3001 (0.0.0.0)
rm -rf .next && npm run build && npm run start

# Run development server with hot-reload on port 3001 (0.0.0.0)
rm -rf .next && npm run dev
```
