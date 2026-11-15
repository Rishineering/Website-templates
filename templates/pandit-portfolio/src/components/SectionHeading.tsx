interface SectionHeadingProps {
  eyebrow: string;
  index: string;
  title: string;
  /** The phrase inside the title that should be italicised. */
  emphasis?: string;
  description?: string;
  align?: "left" | "center";
}

function TitleWithEmphasis({
  title,
  emphasis,
}: {
  title: string;
  emphasis?: string;
}) {
  if (!emphasis || !title.includes(emphasis)) {
    return <>{title}</>;
  }

  const [before, ...rest] = title.split(emphasis);
  const after = rest.join(emphasis);

  return (
    <>
      {before}
      <em className="font-serif italic text-terracotta">{emphasis}</em>
      {after}
    </>
  );
}

export default function SectionHeading({
  eyebrow,
  index,
  title,
  emphasis,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div
        className={`flex items-center gap-4 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-terracotta/50" aria-hidden="true" />
        <span className="eyebrow">
          {index} <span className="mx-1 text-ink/25">—</span> {eyebrow}
        </span>
      </div>

      <h2 className="mt-7 font-serif text-[clamp(2.15rem,4.4vw,3.85rem)] leading-[1.04] tracking-[-0.018em] text-ink [text-wrap:balance]">
        <TitleWithEmphasis title={title} emphasis={emphasis} />
      </h2>

      {description ? (
        <p
          className={`mt-6 text-[15.5px] leading-[1.8] text-ink/70 md:text-base ${
            centered ? "mx-auto max-w-xl" : "max-w-xl"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
