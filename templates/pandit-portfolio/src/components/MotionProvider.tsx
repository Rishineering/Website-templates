"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Respects the visitor's reduced-motion preference at the animation layer.
 * Keeping this decision on the client (instead of branching during render)
 * prevents hydration mismatches between server and browser.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
