# Multi-Site Website Templates Hub

This monorepo houses production-ready, ultra-luxury website templates. Each template is an independent, self-contained Next.js application located in the `templates/` directory.

---

## 📁 Repository Structure

```text
Website-templates/
├── README.md                           # Hub overview & hosting instructions
├── .gitignore                          # Global gitignore
├── index.html                          # Live Showcase Hub landing portal
└── templates/
    ├── project-celestial-heritage/     # श्री वैदिक पूजा एवं संस्कार केंद्र (Pooja & Shraadh)
    │   ├── package.json
    │   ├── src/
    │   ├── public/
    │   └── DEVELOPMENT_DETAILS.md
    │
    └── project-digital-ashram/         # Digital Ashram Portfolio (Pandit Aravind Sharma)
        ├── package.json
        ├── src/
        ├── public/
        └── README.md
```

---

## 🌟 Available Templates

| Directory | Project Name & Aesthetic | Core Features | Target Live URL |
| :--- | :--- | :--- | :--- |
| `templates/project-celestial-heritage` | **Project Celestial Heritage** (Royal Obsidian & Gold) | 2 Sacred Gateways (Dev & Pitru Karya), 10 Deity Poojas, 10 Shraadh Sanskaars, 3-Step Wizard | `/vedic-luxury-web/` |
| `templates/project-digital-ashram` | **Project Digital Ashram** (Warm Sand, Terracotta & Sage) | Solo Vedic Pandit portfolio, Bento offerings, Whisper testimonials, conversational booking | `/pandit-portfolio/` |

---

## 🛠 Local Development & Building

To run either project independently:

```bash
# Template 1: Project Celestial Heritage
cd templates/project-celestial-heritage
npm install
npm run dev

# Template 2: Project Digital Ashram
cd templates/project-digital-ashram
npm install
npm run dev
```

---

## 🚀 How to Build & Deploy to GitHub Pages

From the root of this monorepo:

```bash
# 1. Build Project Celestial Heritage
cd templates/project-celestial-heritage
GITHUB_PAGES=true npm run build
cd ../..

# 2. Build Project Digital Ashram
cd templates/project-digital-ashram
GITHUB_PAGES=true npm run build
cd ../..

# 3. Publish to gh-pages branch
# (All built assets from out/ are copied and pushed cleanly to gh-pages)
```
