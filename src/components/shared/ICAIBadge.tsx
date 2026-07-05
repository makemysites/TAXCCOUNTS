import { CREDENTIALS } from "@/lib/firm-content";

interface ICAIBadgeProps {
  showNumber?: boolean;
  className?: string;
}

export default function ICAIBadge({
  showNumber = true,
  className = "",
}: ICAIBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full bg-navy px-4 py-1.5 ${className}`}
      role="status"
      aria-label={`${CREDENTIALS.icaiBadgeText}${showNumber ? `, Membership No. ${CREDENTIALS.icaiMembershipNo}` : ""}`}
    >
      {/* Shield / badge icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 text-accent shrink-0"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>

      <span className="text-sm font-semibold text-accent whitespace-nowrap">
        {CREDENTIALS.icaiBadgeText}
      </span>

      {showNumber && (
        <span className="text-xs text-accent-light whitespace-nowrap">
          #{CREDENTIALS.icaiMembershipNo}
        </span>
      )}
    </div>
  );
}
