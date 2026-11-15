interface MarkProps {
  className?: string;
  size?: number;
}

/** Small eight-point sun mark used as the site's seal. */
export default function MandalaMark({ className = "", size = 30 }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 3.2 18.4 13.6 28.8 16 18.4 18.4 16 28.8 13.6 18.4 3.2 16 13.6 13.6Z" />
      <circle cx="16" cy="16" r="5.1" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
