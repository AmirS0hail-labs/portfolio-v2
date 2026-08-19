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
        "inline-flex items-center rounded-md border border-accent-sage/80 bg-accent-sage/15 px-2.5 py-1 font-mono text-xs text-accent-sage transition-[border-color,color,background-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent-sage hover:bg-accent-sage/25 hover:text-foreground",
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
