import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function registerLenis(instance: Lenis | null) {
  lenisInstance = instance;
}

/** Smoothly scroll to an element by id (with or without the leading #). */
export function scrollToId(id: string) {
  if (typeof document === "undefined") return;

  const cleanId = id.replace(/^#/, "");
  if (cleanId === "top") {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, {
        duration: 1.2,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const target = document.getElementById(cleanId);
  if (!target) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(target, {
      offset: -72,
      duration: 1.5,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
    });
    return;
  }

  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Pause momentum scrolling while an overlay is open. */
export function setScrollLocked(locked: boolean) {
  if (typeof document === "undefined") return;

  if (lenisInstance) {
    if (locked) lenisInstance.stop();
    else lenisInstance.start();
  }

  document.body.style.overflow = locked ? "hidden" : "";
}
