"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { hero } from "@/content/hero";
import type { AccentColor } from "@/content/types";
import { Button } from "@/components/ui/button";
import { FloatingPill } from "@/components/floating-pill";
import { StatusDot } from "@/components/status-dot";
import { cn } from "@/lib/utils";

const accentText: Record<AccentColor, string> = {
  rose: "text-accent-rose",
  sage: "text-accent-sage",
  default: "text-foreground",
};

const ease = [0.22, 1, 0.36, 1] as const;

function pill(label: string) {
  const found = hero.pills.find((entry) => entry.label === label);
  if (!found) {
    throw new Error(`Missing hero pill: ${label}`);
  }
  return found;
}

const lane = {
  high: "sm:top-0 sm:-translate-y-[40%]",
  mid: "sm:top-[0.2em]",
  low: "sm:top-auto sm:bottom-0 sm:translate-y-[28%]",
} as const;

function LinePills({
  left,
  right,
  leftLane = "mid",
  rightLane = "mid",
}: {
  left?: ReactNode;
  right?: ReactNode;
  leftLane?: keyof typeof lane;
  rightLane?: keyof typeof lane;
}) {
  return (
    <span className="mt-3 flex flex-wrap justify-center gap-2 sm:contents">
      {left ? (
        <span
          className={cn(
            "sm:absolute sm:right-full sm:mt-0 sm:mr-4 sm:block",
            lane[leftLane],
          )}
        >
          {left}
        </span>
      ) : null}
      {right ? (
        <span
          className={cn(
            "sm:absolute sm:left-full sm:mt-0 sm:ml-5 sm:block",
            lane[rightLane],
          )}
        >
          {right}
        </span>
      ) : null}
    </span>
  );
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const MotionDiv = shouldReduceMotion ? "div" : motion.div;
  const MotionSpan = shouldReduceMotion ? "span" : motion.span;
  const MotionP = shouldReduceMotion ? "p" : motion.p;

  const lineProps = (index: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.05 + index * 0.08, ease },
        };

  const backend = pill("Backend");
  const endToEnd = pill("End-to-end");
  const insurtech = pill("Insurtech");
  const productMinded = pill("Product-minded");
  const islamabad = pill("Based in Islamabad");

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-svh items-center justify-center overflow-x-clip px-3 pt-24 pb-16 sm:overflow-visible sm:px-4 lg:px-5"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_78%)] opacity-40" />
      </div>

      <div className="relative z-10 flex w-full max-w-[90rem] flex-col items-center text-center">
        <h1 className="font-display text-[clamp(2.7rem,11vw,9.25rem)] leading-[0.9] font-semibold tracking-[-0.04em] sm:leading-[0.88]">
          <span className="block">
            <MotionSpan
              {...lineProps(0)}
              className={cn(
                "relative inline-block whitespace-nowrap",
                accentText[hero.headline[0].accent],
              )}
            >
              {hero.headline[0].text}
              <LinePills
                leftLane="mid"
                rightLane="high"
                left={
                  <FloatingPill
                    label={backend.label}
                    accent={backend.accent}
                    entranceDelay={0.42}
                    floatDelay={0.15}
                    floatDuration={3.8}
                  />
                }
                right={
                  <FloatingPill
                    label={endToEnd.label}
                    accent={endToEnd.accent}
                    entranceDelay={0.5}
                    floatDelay={0.45}
                    floatDuration={4.6}
                  />
                }
              />
            </MotionSpan>
          </span>

          <span className="mt-[0.04em] block">
            <MotionSpan
              {...lineProps(1)}
              className={cn(
                "relative inline-block whitespace-nowrap",
                accentText[hero.headline[1].accent],
              )}
            >
              {hero.headline[1].text}
              <span className="mt-2 flex justify-center sm:absolute sm:top-auto sm:bottom-0 sm:left-full sm:mt-0 sm:ml-5 sm:block sm:translate-y-[32%]">
                <span
                  aria-hidden="true"
                  className="block font-mono text-xs tracking-wide whitespace-nowrap text-accent-sage sm:text-sm"
                >
                  {"// "}
                  {islamabad.label}
                </span>
              </span>
            </MotionSpan>
          </span>

          <span className="mt-[0.04em] block">
            <MotionSpan
              {...lineProps(2)}
              className={cn(
                "relative inline-block whitespace-nowrap",
                accentText[hero.headline[2].accent],
              )}
            >
              {hero.headline[2].text}
              <LinePills
                leftLane="mid"
                rightLane="low"
                left={
                  <FloatingPill
                    label={insurtech.label}
                    accent={insurtech.accent}
                    entranceDelay={0.54}
                    floatDelay={0.95}
                    floatDuration={4.1}
                  />
                }
                right={
                  <FloatingPill
                    label={productMinded.label}
                    accent={productMinded.accent}
                    entranceDelay={0.58}
                    floatDelay={0.7}
                    floatDuration={4.4}
                  />
                }
              />
            </MotionSpan>
          </span>
        </h1>

        <MotionP
          {...(shouldReduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.72, ease },
              })}
          className="mt-8 max-w-xl text-base leading-relaxed text-foreground sm:mt-10 sm:text-lg"
        >
          {hero.subheadline}
        </MotionP>

        <MotionDiv
          {...(shouldReduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.82, ease },
              })}
          className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg" className="group">
            <Link href={hero.cta.href}>
              <StatusDot />
              {hero.cta.label}
            </Link>
          </Button>
          {hero.secondaryCta ? (
            <Button asChild size="lg" variant="outline">
              <Link href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </Link>
            </Button>
          ) : null}
        </MotionDiv>
      </div>
    </section>
  );
}
