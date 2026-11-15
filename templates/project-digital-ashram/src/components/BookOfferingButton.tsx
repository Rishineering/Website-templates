"use client";

import { useRouter } from "next/navigation";

interface BookOfferingButtonProps {
  serviceId: string;
  label?: string;
}

export default function BookOfferingButton({
  serviceId,
  label = "Book This Sitting Now",
}: BookOfferingButtonProps) {
  const router = useRouter();

  const handleBookClick = () => {
    try {
      window.sessionStorage.setItem("pandit:preselect-service", serviceId);
    } catch {
      // ignore storage errors
    }
    router.push("/#book");
  };

  return (
    <button
      type="button"
      onClick={handleBookClick}
      className="inline-flex items-center justify-center gap-3 rounded-full bg-ink px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-sand-soft shadow-md transition-all duration-300 hover:bg-terracotta"
    >
      <span>{label}</span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        aria-hidden="true"
      >
        <path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" />
      </svg>
    </button>
  );
}
