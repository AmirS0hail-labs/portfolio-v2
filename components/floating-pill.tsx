"use client";

import { motion, useReducedMotion } from "motion/react";

import type { AccentColor } from "@/content/types";
import { cn } from "@/lib/utils";

const accentDot: Record<AccentColor, string> = {
  rose: "bg-accent-rose",
  sage: "bg-accent-sage",
  default: "bg-muted-foreground",
};

const accentRing: Record<AccentColor, string> = {
  rose: "border-accent-rose/30",
  sage: "border-accent-sage/80",
  default: "border-border",
};

type FloatingPillProps = {
  label: string;
  accent?: AccentColor;
  className?: string;
  /** Optional chrome prefix (e.g. "//") — not part of locked copy. */
  prefix?: string;
  /** Reveal entrance delay (seconds). */
  entranceDelay?: number;
  /** Idle float delay (seconds). */
  floatDelay?: number;
  /** Idle float loop duration (seconds). */
  floatDuration?: number;
  /** When false, fade in only — no idle drift. */
  float?: boolean;
};

export function FloatingPill({
  label,
  accent = "default",
  className,
  prefix,
  entranceDelay = 0,
  floatDelay = 0,
  floatDuration = 4,
  float = true,
}: FloatingPillProps) {
  const shouldReduceMotion = useReducedMotion();
  const canFloat = float && !shouldReduceMotion;

  return (
    <motion.span
      aria-hidden="true"
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={
        shouldReduceMotion
          ? undefined
          : canFloat
            ? { opacity: 1, y: [0, -12, -4, -14, 0], x: [0, 5, 0, -4, 0] }
            : { opacity: 1 }
      }
      transition={
        shouldReduceMotion
          ? undefined
          : canFloat
            ? {
                opacity: {
                  duration: 0.45,
                  delay: entranceDelay,
                  ease: [0.22, 1, 0.36, 1],
                },
                y: {
                  duration: floatDuration,
                  delay: floatDelay,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                x: {
                  duration: floatDuration * 1.15,
                  delay: floatDelay,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
            : {
                opacity: {
                  duration: 0.45,
                  delay: entranceDelay,
                  ease: [0.22, 1, 0.36, 1],
                },
              }
      }
      className={cn(
        "pointer-events-none inline-flex shrink-0 items-center gap-1.5 rounded-full border border-accent-sage/80 bg-background/90 px-2.5 py-1 font-mono text-[10px] tracking-wide text-accent-sage backdrop-blur-md select-none sm:text-[11px]",
        accentRing[accent],
        className,
      )}
    >
      <span className={cn("size-1.5 rounded-full", accentDot[accent])} />
      {prefix ? (
        <span className="text-muted-foreground" aria-hidden="true">
          {prefix}
        </span>
      ) : null}
      {label}
    </motion.span>
  );
}
