import { COUNTRIES } from "@/lib/firm-content";

interface CountryFlagsProps {
  compact?: boolean;
  className?: string;
}

export default function CountryFlags({
  compact = false,
  className = "",
}: CountryFlagsProps) {
  if (compact) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 text-xl ${className}`}
        role="list"
        aria-label="Countries served"
      >
        {COUNTRIES.map((country) => (
          <span
            key={country.code}
            role="listitem"
            aria-label={country.name}
            title={country.name}
          >
            {country.flag}
          </span>
        ))}
      </span>
    );
  }

  return (
    <ul
      className={`flex flex-wrap items-center gap-x-5 gap-y-2 ${className}`}
      aria-label="Countries served"
    >
      {COUNTRIES.map((country) => (
        <li key={country.code} className="flex items-center gap-1.5">
          <span className="text-xl" aria-hidden="true">
            {country.flag}
          </span>
          <span className="text-sm font-medium text-charcoal">
            {country.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
