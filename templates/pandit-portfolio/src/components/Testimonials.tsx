"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { testimonials } from "@/config/panditData";
import SectionHeading from "./SectionHeading";

const AUTO_MS = 7200;

export default function Testimonials() {
  const items = testimonials.items.filter((item) => item.enabled);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const reduce = useReducedMotion();

  const move = useCallback(
    (direction: number) => {
      if (items.length < 2) return;
      setActive((current) => {
        const next = (current + direction + items.length) % items.length;
        return next;
      });
    },
    [items.length],
  );

  useEffect(() => {
    if (paused || !autoplay || reduce || items.length < 2) return;

    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % items.length),
      AUTO_MS,
    );

    return () => window.clearInterval(timer);
  }, [paused, autoplay, reduce, items.length, active]);

  if (items.length === 0) return null;

  const current = items[active];

  return (
    <section id="voices" className="relative scroll-mt-24 overflow-hidden py-24 md:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(137,154,130,0.10),transparent_68%)]"
      />

      <div className="container-page relative">
        <motion.div
          initial={false}
          className="mx-auto max-w-3xl text-center"
        >
          <SectionHeading
            eyebrow={testimonials.eyebrow}
            index="03"
            title={testimonials.heading}
            emphasis="quietly."
            align="center"
          />
        </motion.div>

        <div
          className="mx-auto mt-14 max-w-4xl md:mt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="relative flex min-h-[330px] flex-col items-center justify-center md:min-h-[300px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.figure
                key={active}
                initial={{ opacity: 0, y: 14, filter: "blur(3px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(3px)" }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full"
              >
                <blockquote className="mx-auto max-w-3xl font-serif text-[clamp(1.4rem,3vw,2.35rem)] italic leading-[1.4] tracking-[-0.01em] text-ink/85 [text-wrap:balance]">
                  <span className="text-terracotta/50">“</span>
                  {current.quote}
                  <span className="text-terracotta/50">”</span>
                </blockquote>
                <figcaption className="mt-9 flex flex-col items-center gap-2">
                  <span className="h-px w-6 bg-sage/70" aria-hidden="true" />
                  <span className="font-serif text-[15px] not-italic text-ink/80">
                    {current.name}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.22em] text-ink/70">
                    {current.context}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-7">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous testimonial"
              className="p-2 text-ink/55 transition-colors duration-300 hover:text-terracotta"
            >
              <svg
                width="22"
                height="10"
                viewBox="0 0 22 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                aria-hidden="true"
              >
                <path d="M21 5H2M6 1 2 5l4 4" />
              </svg>
            </button>

            <p
              className="min-w-[62px] text-center text-[9px] tracking-[0.24em] text-ink/70"
              aria-live="polite"
            >
              {String(active + 1).padStart(2, "0")}
              <span className="mx-2 text-ink/15">/</span>
              {String(items.length).padStart(2, "0")}
            </p>

            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next testimonial"
              className="p-2 text-ink/55 transition-colors duration-300 hover:text-terracotta"
            >
              <svg
                width="22"
                height="10"
                viewBox="0 0 22 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                aria-hidden="true"
              >
                <path d="M1 5h19M16 1l4 4-4 4" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => setAutoplay((value) => !value)}
              aria-label={autoplay ? "Pause testimonials" : "Play testimonials"}
              aria-pressed={!autoplay}
              className="ml-1 p-2 text-ink/45 transition-colors duration-300 hover:text-terracotta"
            >
              {autoplay ? (
                <svg
                  width="9"
                  height="10"
                  viewBox="0 0 9 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  aria-hidden="true"
                >
                  <path d="M2.5 1v8M6.5 1v8" />
                </svg>
              ) : (
                <svg
                  width="9"
                  height="10"
                  viewBox="0 0 9 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  aria-hidden="true"
                >
                  <path d="M2 1.2 8 5l-6 3.8V1.2Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
