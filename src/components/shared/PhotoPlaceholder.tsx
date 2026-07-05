interface PhotoPlaceholderProps {
  width?: string;
  height?: string;
  className?: string;
  label?: string;
}

export default function PhotoPlaceholder({
  width = "100%",
  height = "300px",
  className = "",
  label = "[REAL PHOTO REQUIRED]",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center border-2 border-dashed border-gray-400 bg-gray-100 rounded-lg ${className}`}
      style={{ width, height }}
      role="img"
      aria-label={label}
    >
      {/* Camera icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 text-gray-400 mb-3"
        aria-hidden="true"
      >
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>

      <span className="text-sm font-medium text-gray-400 text-center px-4 select-none">
        {label}
      </span>
    </div>
  );
}
