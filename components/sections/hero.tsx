"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { hero } from "@/content/hero";
import { site } from "@/content/site";
import type { AccentColor } from "@/content/types";
import { Button } from "@/components/ui/button";
import { FloatingPill } from "@/components/floating-pill";
import { cn } from "@/lib/utils";

const accentText: Record<AccentColor, string> = {
  blue: "text-accent-blue",
  violet: "text-accent-violet",
  default: "text-foreground",
};

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Absolute positions for the floating pills on large screens.
const pillPositions = [
  "left-[4%] top-[26%] -rotate-3 xl:left-[10%]",
  "right-[5%] top-[30%] rotate-3 xl:right-[11%]",
  "left-[8%] bottom-[24%] rotate-2 xl:left-[14%]",
  "right-[6%] bottom-[22%] -rotate-2 xl:right-[13%]",
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const MotionDiv = shouldReduceMotion ? "div" : motion.div;
  const MotionH1 = shouldReduceMotion ? "h1" : motion.h1;

  const motionProps = shouldReduceMotion
    ? {}
    : {
        variants: container,
        initial: "hidden" as const,
        animate: "show" as const,
      };

  const itemProps = shouldReduceMotion ? {} : { variants: item };

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background: dotted grid + accent glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-60" />
        <div className="absolute -top-1/4 -left-1/4 size-[36rem] rounded-full bg-accent-blue/15 blur-[120px]" />
        <div className="absolute -right-1/4 -bottom-1/4 size-[36rem] rounded-full bg-accent-violet/15 blur-[120px]" />
      </div>

      {/* Floating pills — absolute on large screens */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        {hero.pills.map((pill, i) => (
          <FloatingPill
            key={pill.label}
            label={pill.label}
            accent={pill.accent}
            floatDelay={i * 0.6}
            entranceDelay={0.5 + i * 0.12}
            className={cn("absolute", pillPositions[i])}
          />
        ))}
      </div>

      <MotionDiv
        {...motionProps}
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-6 text-center"
      >
        <motion.span
          {...itemProps}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-md"
        >
          <span className="size-2 rounded-full bg-gradient-to-br from-accent-blue to-accent-violet" />
          {site.name} — {site.location}
        </motion.span>

        <MotionH1
          {...itemProps}
          className="font-display text-5xl leading-[0.95] font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {hero.headline.map((line) => (
            <motion.span
              key={line.text}
              {...(shouldReduceMotion ? {} : { variants: item })}
              className={cn("block", accentText[line.accent])}
            >
              {line.text}
            </motion.span>
          ))}
        </MotionH1>

        <motion.p
          {...itemProps}
          className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {hero.subheadline}
        </motion.p>

        {/* Floating pills — inline row on small/medium screens */}
        <motion.ul
          {...itemProps}
          className="flex flex-wrap items-center justify-center gap-2.5 lg:hidden"
        >
          {hero.pills.map((pill) => (
            <li key={pill.label}>
              <FloatingPill label={pill.label} accent={pill.accent} />
            </li>
          ))}
        </motion.ul>

        <motion.div
          {...itemProps}
          className="flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg">
            <Link href={hero.cta.href}>{hero.cta.label}</Link>
          </Button>
          {hero.secondaryCta ? (
            <Button asChild size="lg" variant="outline">
              <Link href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </Link>
            </Button>
          ) : null}
        </motion.div>
      </MotionDiv>
    </section>
  );
}
