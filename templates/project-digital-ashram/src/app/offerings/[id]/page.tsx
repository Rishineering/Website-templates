import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { offerings, pandit, contact } from "@/config/panditData";
import MandalaMark from "@/components/MandalaMark";
import ServiceIcon from "@/components/ServiceIcon";
import BookOfferingButton from "@/components/BookOfferingButton";
import SiteFooter from "@/components/SiteFooter";

export function generateStaticParams() {
  return offerings.services.map((service) => ({
    id: service.id,
  }));
}

export default async function OfferingReadingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const enabledServices = offerings.services.filter((s) => s.enabled);
  const serviceIndex = enabledServices.findIndex((s) => s.id === id);
  const service = enabledServices[serviceIndex];

  if (!service) {
    notFound();
  }

  const otherServices = enabledServices.filter((s) => s.id !== service.id);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Sacred Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-terracotta/20 bg-sand/90 backdrop-blur-md">
        <div className="container-page flex h-[74px] items-center justify-between md:h-[84px]">
          <Link
            href="/"
            className="flex items-center gap-3 text-left text-ink transition-colors hover:text-terracotta"
          >
            <MandalaMark size={26} className="shrink-0 text-terracotta" />
            <span className="flex flex-col">
              <span className="font-serif text-[17px] leading-none tracking-[-0.01em]">
                {pandit.name}
              </span>
              <span className="mt-[7px] text-[8px] uppercase leading-none tracking-[0.26em] text-ink/75">
                Jyotish · {pandit.location.split(",")[0]}
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/#offerings"
              className="inline-flex items-center gap-2 rounded-full border border-terracotta/35 bg-sand-soft px-4 py-2 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-terracotta hover:text-terracotta"
            >
              <svg
                width="13"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                aria-hidden="true"
              >
                <path d="M13 5H1M5 1 1 5l4 4" />
              </svg>
              <span>All Offerings</span>
            </Link>

            <BookOfferingButton serviceId={service.id} label="Contact Now" />
          </div>
        </div>
      </header>

      {/* Main Editorial Reading Content */}
      <main id="main" className="flex-1 py-14 md:py-24">
        <article className="container-page">
          {/* Breadcrumb & Index */}
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-terracotta/20 pb-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-terracotta/15 text-terracotta">
                  <ServiceIcon name={service.icon} />
                </span>
                <p className="eyebrow">
                  Offering {String(serviceIndex + 1).padStart(2, "0")} —{" "}
                  {service.subtitle}
                </p>
              </div>

              <span className="inline-flex items-center gap-2 rounded-full border border-terracotta/30 bg-sand-soft px-4 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-terracotta">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                Duration: {service.duration}
              </span>
            </div>

            {/* Title & Sanskrit Shloka */}
            <h1 className="mt-8 font-serif text-[clamp(2.35rem,5.2vw,4.35rem)] leading-[1.06] tracking-[-0.02em] text-ink">
              {service.title}
            </h1>

            <p className="mt-5 inline-block rounded-2xl border border-terracotta/25 bg-sand-soft px-5 py-3 font-serif text-base italic text-terracotta shadow-xs md:text-lg">
              {service.sanskritMantra}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-[1.8] text-ink-soft md:text-[17.5px]">
              {service.description}
            </p>

            {/* Featured Offering Artwork */}
            <div className="mt-10 overflow-hidden rounded-[1.75rem] border-2 border-terracotta/30 bg-[#2A0802] shadow-[0_28px_70px_-25px_rgba(124,45,18,0.4)]">
              <Image
                src={service.image}
                alt={service.title}
                width={1200}
                height={630}
                unoptimized
                priority
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Two-Column Editorial Reading Layout */}
            <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left 7 Cols: Deep Reading Article */}
              <div className="space-y-6 lg:col-span-7">
                <h2 className="font-serif text-2xl text-ink md:text-3xl">
                  About This <em className="italic text-terracotta">Sitting</em>
                </h2>

                {service.fullArticle.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={`text-[15.5px] leading-[1.92] text-ink-soft md:text-[16px] ${
                      idx === 0 ? "dropcap" : ""
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}

                {/* Pandit Signature Note */}
                <div className="mt-10 rounded-2xl border border-terracotta/25 bg-sand-soft p-6 sm:p-8">
                  <p className="font-serif text-lg italic leading-relaxed text-ink">
                    “Every sitting is held without haste or fear. We look at
                    your chart and your space as companions — so you leave with
                    clarity you can live with.”
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-terracotta/15 pt-4">
                    <div>
                      <p className="font-script text-3xl text-terracotta">
                        {pandit.shortName}
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                        {pandit.fullName} · {pandit.location}
                      </p>
                    </div>
                    <BookOfferingButton
                      serviceId={service.id}
                      label="Book This Sitting"
                    />
                  </div>
                </div>
              </div>

              {/* Right 5 Cols: Highlights & What to Prepare */}
              <aside className="space-y-7 lg:col-span-5">
                {/* Card 1: What is Included */}
                <div className="rounded-[1.5rem] border border-terracotta/25 bg-sand-soft p-6 sm:p-7 shadow-sm">
                  <p className="eyebrow">01 — What We Cover</p>
                  <h3 className="mt-2 font-serif text-xl text-ink">
                    Key Highlights of This Offering
                  </h3>
                  <ul className="mt-5 space-y-3.5">
                    {service.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[13.5px] leading-relaxed text-ink-soft"
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-terracotta" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card 2: How to Prepare */}
                <div className="rounded-[1.5rem] border border-terracotta/25 bg-sand-soft p-6 sm:p-7 shadow-sm">
                  <p className="eyebrow">02 — Preparation</p>
                  <h3 className="mt-2 font-serif text-xl text-ink">
                    What to Keep Ready
                  </h3>
                  <ul className="mt-5 space-y-3.5">
                    {service.whatToPrepare.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[13.5px] leading-relaxed text-ink-soft"
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sage" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card 3: Direct Contact CTA Box */}
                <div className="rounded-[1.5rem] border-2 border-terracotta/40 bg-gradient-to-br from-sand-soft to-sand-deep p-6 sm:p-7 text-center">
                  <p className="eyebrow">Ready to Begin?</p>
                  <h3 className="mt-2 font-serif text-2xl text-ink">
                    Contact <em className="italic text-terracotta">now.</em>
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                    {contact.availability} · {contact.hours}
                  </p>
                  <div className="mt-6 flex justify-center">
                    <BookOfferingButton
                      serviceId={service.id}
                      label="Book This Offering"
                    />
                  </div>
                </div>
              </aside>
            </div>

            {/* Explore Other Offerings Section */}
            <div className="mt-20 border-t border-terracotta/20 pt-14">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <p className="eyebrow">Continue Exploring</p>
                  <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-ink">
                    Other Sacred Offerings
                  </h2>
                </div>
                <Link
                  href="/#offerings"
                  className="link-quiet text-xs uppercase tracking-[0.18em]"
                >
                  View All 6 Offerings →
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {otherServices.slice(0, 3).map((other) => (
                  <Link
                    key={other.id}
                    href={`/offerings/${other.id}`}
                    className="group rounded-2xl border border-terracotta/25 bg-sand-soft p-5 transition-all hover:-translate-y-1 hover:border-terracotta"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-terracotta">
                      {other.duration}
                    </p>
                    <h3 className="mt-1.5 font-serif text-xl text-ink group-hover:text-terracotta">
                      {other.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-ink-soft">
                      {other.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-terracotta">
                      <span>Read Now</span> →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
