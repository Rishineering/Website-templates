import Image from "next/image";
import { philosophy } from "@/config/panditData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Philosophy() {
  const [opening, ...body] = philosophy.letter;

  return (
    <section id="philosophy" className="scroll-mt-24 py-24 md:py-36">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow={philosophy.eyebrow}
            index="01"
            title={philosophy.heading}
            emphasis="listening."
          />
        </Reveal>

        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5" y={30}>
            <div className="lg:sticky lg:top-28">
              <figure className="mx-auto max-w-[23rem] lg:mx-0 lg:max-w-[25rem]">
                <Image
                  src={philosophy.portrait.src}
                  alt={philosophy.portrait.alt}
                  width={600}
                  height={780}
                  unoptimized
                  className="h-auto w-full"
                />
                <figcaption className="mt-6 flex items-center gap-3 text-[9.5px] uppercase tracking-[0.22em] text-ink/70">
                  <span
                    className="h-px w-6 bg-terracotta/60"
                    aria-hidden="true"
                  />
                  {philosophy.caption}
                </figcaption>
              </figure>

              <dl className="mx-auto mt-12 max-w-[23rem] space-y-4 lg:mx-0 lg:max-w-[25rem]">
                {philosophy.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between gap-6 border-b border-ink/10 pb-3.5"
                  >
                    <dt className="text-[9.5px] uppercase tracking-[0.2em] text-ink/70">
                      {fact.label}
                    </dt>
                    <dd className="font-serif text-[15px] text-ink/75">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <p className="font-serif text-[1.55rem] italic leading-[1.5] text-terracotta md:text-[1.75rem]">
                {opening}
              </p>
            </Reveal>

            <div className="mt-8 space-y-6">
              {body.map((paragraph, index) => (
                <Reveal key={paragraph.slice(0, 24)} delay={0.06 * index}>
                  <p
                    className={`text-[15px] leading-[1.9] text-ink/70 md:text-[15.5px] ${
                      index === 0 ? "dropcap" : ""
                    }`}
                  >
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-12 flex items-end justify-between gap-6 border-t border-ink/10 pt-7">
                <div>
                  <p className="font-script text-[2.6rem] leading-none text-terracotta md:text-[3rem]">
                    {philosophy.signature}
                  </p>
                  <p className="mt-3 text-[9px] uppercase tracking-[0.24em] text-ink/70">
                    {philosophy.signatureRole}
                  </p>
                </div>
                <span
                  className="mb-1 h-10 w-10 shrink-0 rounded-full border border-sage/40 p-[9px] text-sage/70"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.9">
                    <circle cx="12" cy="12" r="9.5" />
                    <path d="M12 2.5v19M2.5 12h19" opacity="0.4" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
