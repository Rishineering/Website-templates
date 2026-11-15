import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/config/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        devanagari: ["var(--font-devanagari)", "var(--font-cormorant)", "serif"],
      },
      colors: {
        obsidian: {
          DEFAULT: "#070609",
          surface: "#110F16",
          elevated: "#181520",
        },
        ivory: {
          DEFAULT: "#FAF7F2",
          surface: "#FFFFFF",
          subtle: "#F3EDE2",
        },
        gold: {
          50: "#FDF9EE",
          100: "#F9EFD2",
          200: "#F3DFA5",
          300: "#E9C76E",
          400: "#DFB247",
          500: "#D4AF37",
          600: "#B89028",
          700: "#936E1E",
          800: "#78571D",
          900: "#64481D",
        },
        maroon: {
          DEFAULT: "#5E121D",
          deep: "#3B0A11",
          soft: "#7F1D2B",
        },
      },
      backgroundImage: {
        "gold-metallic":
          "linear-gradient(135deg, #F3DFA5 0%, #D4AF37 35%, #AA7C11 68%, #F6E6B4 100%)",
        "gold-shimmer":
          "linear-gradient(90deg, rgba(212,175,55,0) 0%, rgba(243,223,165,0.6) 50%, rgba(212,175,55,0) 100%)",
        "radial-gold":
          "radial-gradient(circle at center, rgba(212,175,55,0.16) 0%, rgba(212,175,55,0) 70%)",
      },
      boxShadow: {
        "gold-glow": "0 0 30px -5px rgba(212, 175, 55, 0.28)",
        "gold-glow-lg": "0 12px 45px -10px rgba(212, 175, 55, 0.42)",
        "luxury-card": "0 20px 50px -15px rgba(0, 0, 0, 0.7)",
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-reverse-slow": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-gold": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.06)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 48s linear infinite",
        "spin-reverse-slow": "spin-reverse-slow 64s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-gold": "pulse-gold 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
