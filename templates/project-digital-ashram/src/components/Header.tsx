"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { navigation, pandit } from "@/config/panditData";
import { scrollToId, setScrollLocked } from "@/lib/scroll";
import MandalaMark from "./MandalaMark";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();

  const visibleNav = navigation.filter((item) => item.enabled);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setScrollLocked(menuOpen);

    const main = document.getElementById("main");
    const footer = document.querySelector("footer");
    if (menuOpen) {
      main?.setAttribute("inert", "");
      footer?.setAttribute("inert", "");
    } else {
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    }

    return () => {
      setScrollLocked(false);
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = useCallback((href: string) => {
    setMenuOpen(false);
    window.setTimeout(() => scrollToId(href), 60);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled
            ? "border-b border-ink/8 bg-sand/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-page flex h-[74px] items-center justify-between md:h-[84px]">
          <button
            type="button"
            onClick={() => scrollToId("top")}
            className="flex items-center gap-3 text-left text-ink"
          >
            <MandalaMark
              size={26}
              className="shrink-0 text-terracotta transition-colors duration-500"
            />
            <span className="flex flex-col">
              <span className="font-serif text-[17px] leading-none tracking-[-0.01em]">
                {pandit.name}
              </span>
              <span className="mt-[7px] text-[8px] uppercase leading-none tracking-[0.26em] text-ink/70">
                Jyotish · {pandit.location.split(",")[0]}
              </span>
            </span>
            <span className="sr-only">— back to top</span>
          </button>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-9 md:flex lg:gap-11"
          >
            {visibleNav.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => go(item.href)}
                className="text-[12.5px] tracking-[0.01em] text-ink/70 transition-colors duration-300 hover:text-ink"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => go("#book")}
              className="hidden items-center gap-2.5 text-[11px] uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:text-terracotta sm:flex"
            >
              <span className="h-1 w-1 rounded-full bg-terracotta" aria-hidden="true" />
              Book a sitting
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex h-9 w-9 flex-col items-center justify-center gap-[6px] md:hidden"
            >
              <span
                className={`h-px w-5 bg-ink transition-transform duration-300 ${
                  menuOpen ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-5 bg-ink transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-40 flex flex-col bg-sand md:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container-page flex flex-1 flex-col justify-between pb-10 pt-[104px]">
              <nav aria-label="Mobile" className="flex flex-col">
                {visibleNav.map((item, index) => (
                  <motion.button
                    key={item.href}
                    type="button"
                    onClick={() => go(item.href)}
                    initial={reduce ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.08 + index * 0.06,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-baseline gap-4 border-b border-ink/8 py-5 text-left"
                  >
                    <span className="text-[9px] tracking-[0.2em] text-ink/45">
                      0{index + 1}
                    </span>
                    <span className="font-serif text-[2.15rem] leading-none tracking-[-0.02em]">
                      {item.label}
                    </span>
                  </motion.button>
                ))}
                <motion.button
                  type="button"
                  onClick={() => go("#book")}
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 + visibleNav.length * 0.06,
                    duration: 0.5,
                  }}
                  className="mt-10 flex items-center gap-3 self-start rounded-full bg-ink px-7 py-3.5 text-[11px] uppercase tracking-[0.16em] text-sand"
                >
                  <span className="h-1 w-1 rounded-full bg-terracotta" aria-hidden="true" />
                  Book a sitting
                </motion.button>
              </nav>

              <div className="space-y-2 border-t border-ink/8 pt-6">
                <p className="eyebrow">By appointment</p>
                <p className="text-[13px] leading-relaxed text-ink/70">
                  {pandit.location} · Online, anywhere
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
