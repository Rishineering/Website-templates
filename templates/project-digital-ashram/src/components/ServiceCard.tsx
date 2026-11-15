"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/config/panditData";
import { scrollToId } from "@/lib/scroll";
import ServiceIcon from "./ServiceIcon";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
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
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-terracotta/25 bg-sand-soft shadow-[0_18px_45px_-22px_rgba(124,45,18,0.28)] transition-all duration-500 hover:border-terracotta/60 hover:shadow-[0_26px_60px_-20px_rgba(185,56,11,0.42)]"
    >
      {/* Top Offering Artwork Banner */}
      <Link
        href={`/offerings/${service.id}`}
        className="relative block h-48 w-full overflow-hidden border-b border-terracotta/20 bg-[#2A0802] sm:h-52"
      >
        <Image
          src={service.image}
          alt={service.title}
          width={800}
          height={420}
          unoptimized
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Subtle Top Overlay Badges */}
        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/50 bg-[#1F0602]/80 text-amber-300 backdrop-blur-md">
            <ServiceIcon name={service.icon} />
          </span>

          <span className="rounded-full border border-amber-300/40 bg-[#1F0602]/80 px-3 py-1 text-[10px] font-semibold tracking-[0.22em] text-amber-200 backdrop-blur-md">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </Link>

      {/* Card Content Body */}
      <div className="flex flex-1 flex-col justify-between p-6 md:p-7">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-terracotta">
            {service.subtitle}
          </p>

          <Link href={`/offerings/${service.id}`} className="block mt-1.5">
            <h3 className="font-serif text-[1.45rem] leading-[1.2] tracking-[-0.012em] text-ink transition-colors group-hover:text-terracotta md:text-[1.6rem]">
              {service.title}
            </h3>
          </Link>

          <p className="mt-3 text-[13.5px] leading-[1.68] text-ink-soft">
            {service.description}
          </p>
        </div>

        {/* Card Footer: Duration + Read Now & Book Now Buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-terracotta/15 pt-4">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
            <span
              className="h-1.5 w-1.5 rounded-full bg-terracotta"
              aria-hidden="true"
            />
            {service.duration}
          </span>

          <div className="flex items-center gap-3">
            <Link
              href={`/offerings/${service.id}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-terracotta/35 bg-terracotta/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-terracotta transition-all duration-300 hover:bg-terracotta hover:text-sand-soft"
            >
              <span>Read Now</span>
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                aria-hidden="true"
              >
                <path d="M2 6h8M6.5 2.5 10 6l-3.5 3.5" />
              </svg>
            </Link>

            <button
              type="button"
              onClick={handleBook}
              className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-sand-soft transition-colors duration-300 hover:bg-terracotta"
            >
              <span>Book Now</span>
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                aria-hidden="true"
              >
                <path d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
