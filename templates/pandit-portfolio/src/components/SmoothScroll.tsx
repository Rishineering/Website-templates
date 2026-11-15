"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { registerLenis } from "@/lib/scroll";

/**
 * Buttery momentum scrolling. Disabled entirely when the visitor
 * prefers reduced motion — native scrolling takes over.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduce) return;

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
      syncTouch: false,
    });

    registerLenis(lenis);

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // Route every in-page anchor through Lenis for consistent momentum.
    const onAnchorClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      if (href === "#top") {
        event.preventDefault();
        lenis.scrollTo(0, {
          duration: 1.5,
          easing: (t: number) => 1 - Math.pow(1 - t, 4),
        });
        return;
      }

      const target = document.getElementById(href.slice(1));
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, {
        offset: -72,
        duration: 1.5,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
      });
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      cancelAnimationFrame(frame);
      registerLenis(null);
      lenis.destroy();
    };
  }, []);

  return null;
}
