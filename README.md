# Multi-Site Website Templates Hub

This monorepo houses production-ready, ultra-luxury website templates. Each template is an independent, self-contained Next.js application located in the `templates/` directory.

---

## 📁 Repository Structure

```text
Website-templates/
├── README.md                      # Hub overview & hosting instructions
├── .gitignore                     # Global gitignore
└── templates/
    ├── vedic-luxury-web/          # Royal Celestial Vedic Astrology & Pooja Web App
    │   ├── package.json
    │   ├── src/
    │   ├── public/
    │   └── DEVELOPMENT_DETAILS.md
    │
    ├── pandit-portfolio/          # Sacred Pandit Vedic Rituals & Portfolio Website
    │   ├── package.json
    │   ├── src/
    │   ├── public/
    │   └── README.md
    │
    └── [template-3]/              # Reserved for future templates
```

---

## 🌟 Available Templates

| Directory | Name & Theme | Tech Stack | Status |
| :--- | :--- | :--- | :--- |
| `templates/vedic-luxury-web` | **श्री श्री विद्या Astrology** (Royal Celestial Heritage, 3-Step Wizard, Light/Dark theme) | Next.js 14, Tailwind CSS, Framer Motion, Lenis | Ready |
| `templates/pandit-portfolio` | **Pandit Portfolio Website** (Sacred Vedic Rituals, Offerings, Philosophy) | Next.js 15, Tailwind CSS, Lucide | Ready |

---

## 🚀 How to Host Each Website on Vercel / Cloudflare / Netlify

Because this is a monorepo, you can host **all 3-4 websites from this single GitHub repository for FREE**:

### Hosting on Vercel (Recommended):
1. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
2. Select the repository **`Rishineering/Website-templates`**.
3. Under **"Root Directory"**, click **Edit** and choose the template you want to deploy:
   - For Template 1: select `templates/vedic-luxury-web`
   - For Template 2: select `templates/pandit-portfolio`
4. Leave framework preset as **Next.js** and click **Deploy**.
5. Repeat steps 1–4 to create a separate Vercel project for each template! Each will receive its own live domain (e.g. `vedic-luxury.vercel.app`, `pandit-rituals.vercel.app`).

---

## 🛠 Local Development Instructions

To run any template locally, navigate into its folder:

```bash
# Template 1: Vedic Luxury Web
cd templates/vedic-luxury-web
npm install
npm run dev

# Template 2: Pandit Portfolio
cd templates/pandit-portfolio
npm install
npm run dev
```
