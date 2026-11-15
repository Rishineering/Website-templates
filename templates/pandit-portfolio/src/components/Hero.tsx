"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { hero, pandit } from "@/config/panditData";
import { scrollToId } from "@/lib/scroll";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.11, delayChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease },
    },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-[74px] md:pt-[84px]"
    >
      {/* Watermarked mandala — barely there, always turning */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-56 -top-64 h-[46rem] w-[46rem] opacity-[0.02] sm:-right-40 sm:-top-56 md:-right-28 md:-top-48 lg:-right-10 lg:h-[54rem] lg:w-[54rem]"
      >
        <Image
          src={hero.mandala}
          alt=""
          width={864}
          height={864}
          unoptimized
          priority
          className="mandala-spin h-full w-full"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_18%,rgba(137,154,130,0.13),transparent_58%)]"
      />

      <div className="container-page relative flex flex-1 items-center py-8 sm:py-16 lg:py-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-[64rem]"
        >
          <motion.div variants={item} className="flex items-center gap-3.5">
            <span
              className="h-1.5 w-1.5 rounded-full bg-terracotta"
              aria-hidden="true"
            />
            <p className="eyebrow text-ink/75 [text-wrap:balance]">{hero.eyebrow}</p>
          </motion.div>

          <h1 aria-label={hero.headlineLines.join(" ")} className="mt-7 font-serif text-[clamp(2rem,7vw,6.4rem)] leading-[1.01] tracking-[-0.025em] text-ink max-[359px]:text-[1.8rem] md:mt-10">
            {hero.headlineLines.map((line, index) => (
              <span key={line} className="block md:pb-[0.04em]">
                <motion.span
                  variants={item}
                  className={`block ${
                    index === hero.headlineLines.length - 1
                      ? "italic text-terracotta"
                      : ""
                  }`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-[33rem] text-[15px] leading-[1.85] text-ink/70 md:mt-9 md:text-[15.5px]"
          >
            {hero.paragraph}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-7 flex flex-col items-start gap-5 sm:mt-10 sm:flex-row sm:items-center sm:gap-9"
          >
            <button
              type="button"
              onClick={() => scrollToId(hero.primaryCta.href)}
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-[1.05rem] text-[11px] uppercase tracking-[0.18em] text-sand transition-colors duration-500 hover:bg-terracotta"
            >
              {hero.primaryCta.label}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.1"
                aria-hidden="true"
              >
                <path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => scrollToId(hero.secondaryCta.href)}
              className="link-quiet text-[13.5px] tracking-[0.01em]"
            >
              {hero.secondaryCta.label}
            </button>
          </motion.div>
        </motion.div>

        <span
          aria-hidden="true"
          className="absolute right-0 top-1/2 hidden -translate-y-1/2 text-[9px] uppercase tracking-[0.42em] text-ink/40 [writing-mode:vertical-rl] xl:block"
        >
          Since 2004 · {pandit.location}
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="container-page relative"
      >
        <div className="flex flex-col items-center justify-between gap-2.5 border-t border-ink/10 py-4 text-center sm:flex-row sm:gap-6 sm:py-5 sm:text-left">
          <p className="text-[9px] uppercase tracking-[0.24em] text-ink/70">
            {hero.footnoteLeft}
          </p>

          <div className="hidden items-center gap-3 sm:flex">
            <span className="text-[9px] uppercase tracking-[0.26em] text-ink/50">
              Scroll
            </span>
            <span className="relative h-7 w-px overflow-hidden bg-ink/10">
              <span className="scroll-cue absolute inset-0 block bg-terracotta/70" />
            </span>
          </div>

          <p className="text-[9px] uppercase tracking-[0.24em] text-ink/70">
            {hero.footnoteRight}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
