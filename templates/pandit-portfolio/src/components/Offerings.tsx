import { offerings } from "@/config/panditData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";

const spanClass: Record<2 | 3 | 4, string> = {
  2: "lg:col-span-2",
  3: "lg:col-span-3",
  4: "lg:col-span-4",
};

export default function Offerings() {
  const services = offerings.services.filter((service) => service.enabled);

  if (services.length === 0) return null;

  return (
    <section id="offerings" className="scroll-mt-24 py-24 md:py-36">
      <div className="container-page">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow={offerings.eyebrow}
              index="02"
              title={offerings.heading}
              emphasis="sit"
              description={offerings.paragraph}
            />
          </Reveal>

          <Reveal delay={0.12} className="hidden shrink-0 md:block">
            <p className="flex items-center gap-3 pb-1 text-[9px] uppercase tracking-[0.2em] text-ink/70">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-ink/15">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  aria-hidden="true"
                >
                  <path d="M6 1.5v9M1.5 6h9" />
                </svg>
              </span>
              {offerings.hoverHint}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-16 md:gap-5 lg:grid-cols-6">
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              delay={Math.min(index * 0.05, 0.2)}
              y={20}
              className={spanClass[service.span]}
            >
              <ServiceCard service={service} index={index} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-12 flex flex-col gap-4 border-t border-ink/10 pt-6 text-[11px] tracking-[0.01em] text-ink/70 sm:flex-row sm:items-center sm:justify-between">
            <p>Every sitting is held in complete confidence.</p>
            <p className="text-ink/70">
              Not sure where to begin?{" "}
              <a href="#book" className="link-quiet">
                Ask me
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
