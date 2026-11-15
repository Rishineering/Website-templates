import type { IconName } from "@/config/panditData";

interface ServiceIconProps {
  name: IconName;
  className?: string;
}

export default function ServiceIcon({ name, className = "" }: ServiceIconProps) {
  const common = {
    width: 38,
    height: 38,
    viewBox: "0 0 40 40",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.1,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className,
  };

  switch (name) {
    case "sun":
      return (
        <svg {...common}>
          <circle cx="20" cy="20" r="6.6" />
          <circle cx="20" cy="20" r="2.2" fill="currentColor" stroke="none" opacity="0.55" />
          <path d="M20 4.5v4.2M20 31.3v4.2M4.5 20h4.2M31.3 20h4.2M9 9l3 3M28 28l3 3M31 9l-3 3M12 28l-3 3" />
        </svg>
      );
    case "home":
      return (
        <svg {...common}>
          <path d="M7.5 19 20 7.5 32.5 19" />
          <path d="M11 16.5V33h18V16.5" />
          <path d="M20 33v-8.5" />
          <circle cx="20" cy="19.5" r="2.4" />
        </svg>
      );
    case "flame":
      return (
        <svg {...common}>
          <path d="M20 5.5c4.4 6.2 6.2 9.4 6.2 13.1a6.2 6.2 0 1 1-12.4 0c0-3.7 1.8-6.9 6.2-13.1Z" />
          <path d="M8.5 30.5h23" />
          <path d="M11.5 33.5h17" opacity="0.5" />
          <path d="M20 23.5c1.4-2 2-3 2-4.2a2 2 0 0 0-4 0c0 1.2.6 2.2 2 4.2Z" opacity="0.7" />
        </svg>
      );
    case "lotus":
      return (
        <svg {...common}>
          <path d="M20 27.5c-4.6 0-8.5-3-10-7 3.8-.6 7.3 1.2 10 4.4 2.7-3.2 6.2-5 10-4.4-1.5 4-5.4 7-10 7Z" />
          <path d="M20 24.9c-3.3-2.8-4.4-6.4-3-10.4 2.3 1.2 4 3.4 4.7 5.9.7-2.5 2.4-4.7 4.7-5.9 1.4 4 .3 7.6-3 10.4" />
          <path d="M20 24.9V33" opacity="0.55" />
          <path d="M10 27.5c-1.8 1.4-3 3.4-3.5 5.5M30 27.5c1.8 1.4 3 3.4 3.5 5.5" opacity="0.5" />
        </svg>
      );
    case "moon":
      return (
        <svg {...common}>
          <path d="M27.2 7.2c-8.5 1.8-13.6 8.5-11.4 16.7 2 7.7 9.8 11.7 16.2 8.5-9.4.6-15.3-8.1-12.1-16.6 1.2-3.2 3.8-6 7.3-8.6Z" />
          <circle cx="30" cy="11" r="1.1" fill="currentColor" stroke="none" />
          <circle cx="33.5" cy="17" r="0.8" fill="currentColor" stroke="none" opacity="0.6" />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <path d="M20 5v30M5 20h30M9.4 9.4l21.2 21.2M30.6 9.4 9.4 30.6" opacity="0.55" />
          <circle cx="20" cy="20" r="4.2" />
          <circle cx="20" cy="20" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return null;
  }
}
