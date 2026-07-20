"use client";

import { motion, useReducedMotion } from "motion/react";

import type { AccentColor } from "@/content/types";
import { cn } from "@/lib/utils";

const accentDot: Record<AccentColor, string> = {
  blue: "bg-accent-blue",
  violet: "bg-accent-violet",
  default: "bg-muted-foreground",
};

const accentRing: Record<AccentColor, string> = {
  blue: "border-accent-blue/25",
  violet: "border-accent-violet/25",
  default: "border-border",
};

type FloatingPillProps = {
  label: string;
  accent?: AccentColor;
  className?: string;
  /** Idle-float animation delay (seconds). */
  floatDelay?: number;
  /** Reveal entrance delay (seconds). */
  entranceDelay?: number;
};

export function FloatingPill({
  label,
  accent = "default",
  className,
  floatDelay = 0,
  entranceDelay = 0,
}: FloatingPillProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.span
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.85 }}
      animate={
        shouldReduceMotion ? undefined : { opacity: 1, scale: 1, y: [0, -8, 0] }
      }
      transition={
        shouldReduceMotion
          ? undefined
          : {
              opacity: { duration: 0.5, delay: entranceDelay },
              scale: { duration: 0.5, delay: entranceDelay },
              y: {
                duration: 5,
                delay: floatDelay,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }
      }
      className={cn(
        "inline-flex items-center gap-2 rounded-full border bg-card/70 px-3.5 py-1.5 text-sm font-medium text-foreground/90 shadow-lg shadow-black/30 backdrop-blur-md select-none",
        accentRing[accent],
        className,
      )}
    >
      <span className={cn("size-1.5 rounded-full", accentDot[accent])} />
      {label}
    </motion.span>
  );
}
