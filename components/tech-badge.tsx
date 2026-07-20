import * as React from "react";

import { cn } from "@/lib/utils";

export function TechBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-white/15 hover:text-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TechStack({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li key={item}>
          <TechBadge>{item}</TechBadge>
        </li>
      ))}
    </ul>
  );
}
