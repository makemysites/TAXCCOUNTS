interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className = "",
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : "text-left"} ${className}`}>
      <Tag className="font-serif text-navy text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight">
        {title}
      </Tag>

      {/* Gold accent bar */}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-gold ${centered ? "mx-auto" : ""}`}
        aria-hidden="true"
      />

      {subtitle && (
        <p className={`mt-4 text-muted text-base sm:text-lg max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
