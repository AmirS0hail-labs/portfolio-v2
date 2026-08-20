import * as React from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  /** Trailing sage pulse-square. Off for Contact. */
  pulse?: boolean;
  /** Chrome icon centered on the hairline under the heading. */
  icon?: LucideIcon;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
  pulse = true,
  icon: Icon,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow || index ? (
        <span className="inline-flex items-center gap-2.5 text-xs font-medium tracking-[0.22em] text-accent-sage uppercase">
          {index ? (
            <span className="font-mono tracking-wider">{index}</span>
          ) : null}
          <span className="h-0.5 w-8 bg-accent-sage" />
          {eyebrow ? <span>{eyebrow}</span> : null}
        </span>
      ) : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
        {pulse ? <span className="title-pulse" aria-hidden="true" /> : null}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-foreground/90 sm:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
      {Icon ? (
        <div className="flex w-full items-center gap-3 pt-1" aria-hidden="true">
          <span className="section-rule flex-1" />
          <Icon
            className="size-3.5 shrink-0 text-accent-sage"
            strokeWidth={1.75}
          />
          <span className="section-rule flex-1" />
        </div>
      ) : null}
    </div>
  );
}
