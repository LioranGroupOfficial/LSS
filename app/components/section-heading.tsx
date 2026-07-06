type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`space-y-4 ${alignment}`.trim()}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      {description ? (
        <p className="max-w-3xl text-lg leading-8 text-[var(--text-soft)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
