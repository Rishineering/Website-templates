"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import type { Service } from "@/config/panditData";
import { scrollToId } from "@/lib/scroll";
import ServiceIcon from "./ServiceIcon";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLElement>(null);
  const lastTouch = useRef(0);

  const recentlyTouched = () =>
    lastTouch.current > 0 && performance.now() - lastTouch.current < 1200;

  const closeIfFocusLeft = () => {
    if (!cardRef.current?.contains(document.activeElement)) setOpen(false);
  };

  const handleBook = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    window.dispatchEvent(
      new CustomEvent<string>("pandit:select-service", {
        detail: service.id,
      }),
    );
    scrollToId("book");
  };

  return (
    <motion.article
      ref={cardRef}
      tabIndex={0}
      data-open={open}
      onMouseEnter={() => {
        if (!recentlyTouched()) setOpen(true);
      }}
      onMouseLeave={() => {
        if (!recentlyTouched()) closeIfFocusLeft();
      }}
      onFocus={(event) => {
        // Keyboard focus opens the card; a pointer tap should not.
        if (!recentlyTouched() && event.currentTarget.matches(":focus-visible")) {
          setOpen(true);
        }
      }}
      onBlur={closeIfFocusLeft}
      onPointerDown={(event) => {
        if (event.pointerType === "mouse") return;
        lastTouch.current = performance.now();
        if ((event.target as HTMLElement).closest("button, a, input")) return;
        setOpen((value) => !value);
      }}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return;
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setOpen((value) => !value);
        }
      }}
      animate={{
        y: open ? -4 : 0,
        boxShadow: open
          ? "0 26px 55px -30px rgba(184, 92, 56, 0.5)"
          : "0 0 0 0 rgba(184, 92, 56, 0)",
      }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex h-[330px] cursor-pointer flex-col overflow-hidden rounded-[1.35rem] border p-6 transition-colors duration-500 md:h-[360px] md:p-8 ${
        open
          ? "border-terracotta/25 bg-[#fcfbf7]"
          : "border-ink/[0.09] bg-sand-soft"
      }`}
    >
      <div className="flex items-start justify-between">
        <span
          className={`transition-colors duration-500 ${
            open ? "text-terracotta" : "text-ink/55"
          }`}
        >
          <ServiceIcon name={service.icon} />
        </span>
        <span
          className={`text-[9px] tracking-[0.22em] transition-colors duration-500 ${
            open ? "text-terracotta/70" : "text-ink/25"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="relative mt-auto h-[200px] md:h-[205px]">
        <motion.div
          aria-hidden={open}
          className="absolute inset-x-0 bottom-0"
          animate={{ opacity: open ? 0 : 1, y: open ? -8 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="max-w-[17ch] font-serif text-[1.45rem] leading-[1.18] tracking-[-0.012em] text-ink md:text-[1.55rem]">
            {service.title}
          </h3>
          <span className="mt-4 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-ink/70">
            <span className="h-px w-5 bg-current" aria-hidden="true" />
            <span className="hidden sm:inline">Read</span>
            <span className="sm:hidden">Tap to read</span>
          </span>
        </motion.div>

        <motion.div
          aria-hidden={!open}
      className={`absolute inset-x-0 bottom-0 flex h-full flex-col justify-end ${
            open ? "pointer-events-auto" : "pointer-events-none"
          }`}
          animate={{ opacity: open ? 1 : 0, y: open ? 0 : 8 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <h4 className="font-serif text-[1.12rem] leading-snug tracking-[-0.005em] text-ink">
            {service.title}
          </h4>
          <p className="mt-2.5 text-[13px] leading-[1.62] text-ink/70">
            {service.description}
          </p>
          <div className="mt-5 flex items-center justify-between gap-4 border-t border-ink/10 pt-4">
            <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.16em] text-ink/70">
              <span
                className="h-1 w-1 rounded-full bg-sage"
                aria-hidden="true"
              />
              {service.duration}
            </span>
            <button
              type="button"
              onClick={handleBook}
              tabIndex={open ? 0 : -1}
              className="inline-flex items-center gap-1.5 border-b border-ink/30 pb-0.5 text-[9.5px] uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:border-terracotta hover:text-terracotta"
            >
              Book Now
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.1"
                aria-hidden="true"
              >
                <path d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}
