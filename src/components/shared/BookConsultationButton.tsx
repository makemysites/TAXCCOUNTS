import { BOOKING } from "@/lib/firm-content";

interface BookConsultationButtonProps {
  variant?: "primary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  text?: string;
}

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
} as const;

const variantClasses = {
  primary:
    "bg-gold text-navy font-semibold hover:bg-gold-dark focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
  outline:
    "border-2 border-gold text-gold font-semibold hover:bg-gold hover:text-navy focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
  white:
    "bg-white text-navy font-semibold hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
} as const;

export default function BookConsultationButton({
  variant = "primary",
  size = "md",
  className = "",
  text = "Book a Consultation",
}: BookConsultationButtonProps) {
  return (
    <a
      href={BOOKING.calComUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${text} — opens scheduling page in a new tab`}
      className={`inline-flex items-center justify-center rounded-lg transition-colors duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {text}
    </a>
  );
}
