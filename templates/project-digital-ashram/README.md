# Pandit Portfolio Website — Digital Ashram

A bespoke, intimate, text-driven "Digital Ashram" portfolio website for a solo Pandit, Astrologer, and spiritual guide. Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, and Lenis momentum scrolling.

---

## Quick Start

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Run ESLint
npm run lint

# Build for production
npm run build

# Preview production build
npm run start
```

---

## 1. Updating Pandit Info & Contact Details

All content is centralized in **`src/config/panditData.ts`**. You do not need to touch UI components to update copy or contact points.

### Setting your WhatsApp & Phone Numbers
Locate the `contact` export in `src/config/panditData.ts`:

```typescript
export const contact = {
  /** Displayed in footer/header if needed */
  phone: "+91 98765 43210",

  /**
   * WhatsApp number in international format, DIGITS ONLY (no +, no spaces, no hyphens).
   * Example for India: "919876543210"
   * Example for US:    "14155552671"
   */
  whatsappNumber: "919876543210",

  /** Email address for written enquiries */
  email: "aravind@vedicashram.example",

  /** Hours / availability caption */
  availability: "Sittings Tuesday through Sunday · By prior appointment",
};
```

> **Note on WhatsApp Fallback:** When `whatsappNumber` is left as an empty string `""`, the 3-step booking form gracefully detects it, generates the fully formatted message, and presents a one-click "Copy formatted message" panel rather than opening a broken link.

---

## 2. Replacing Imagery & Assets

All visuals live in **`public/assets/`**:

| Asset | Path | Description | Recommended Replacement |
|---|---|---|---|
| **Portrait** | `public/assets/portrait-placeholder.svg` | Displayed in the Philosophy section (3:4 ratio) | Drop a real photograph (JPG/WebP/PNG) into `public/assets/portrait.jpg` and update `philosophy.portrait.src` in `panditData.ts`. |
| **Watermark Mandala** | `public/assets/mandala-accent.svg` | Hero background rotating watermark (2–3% opacity) | Clean SVG line mandala, geometric yantra, or sacred geometry artwork. |

---

## 3. Toggling Sections & Offerings

Every major section and service card has an `enabled: boolean` flag in `src/config/panditData.ts`:

```typescript
export const sections = {
  hero: true,
  philosophy: true,
  offerings: true,
  testimonials: true,
  booking: true,
};

// Inside offerings.services:
{
  id: "vastu",
  title: "Vastu Shastra Consultation",
  enabled: true, // set to false to hide this card from the Bento grid
  ...
}
```

---

## 4. Design & Typography Tokens

- **Palette:**
  - Sand `#F7F5F0` (warm base)
  - Charcoal Ink `#2D2D2D` (typography)
  - Terracotta `#B85C38` (accent / actions / dropcaps)
  - Muted Sage `#899A82` (booking section wash)
- **Headings:** Playfair Display (`font-serif`)
- **Body & UI:** Plus Jakarta Sans (`font-sans`)
- **Signature:** Caveat (`font-script`)
- **Grain:** Subtle paper noise overlay applied globally (`.grain`)
- **Accessibility:** Tested with WCAG 2.1 AA / Axe-core (0 violations), native reduced-motion support, keyboard-accessible bento cards and 3-step form.
