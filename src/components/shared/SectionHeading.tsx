interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  dark = false,
  className = "",
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : "text-left"} ${className}`}>
      {eyebrow && (
        <span
          className={`eyebrow mb-5 ${centered ? "eyebrow-center" : ""} ${
            dark ? "eyebrow-light" : ""
          }`}
        >
          {eyebrow}
        </span>
      )}

      <Tag
        className={`font-serif text-[2rem] leading-[1.15] sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </Tag>

      {subtitle && (
        <p
          className={`mt-5 text-base sm:text-lg leading-relaxed max-w-2xl ${
            dark ? "text-white/70" : "text-muted"
          } ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
