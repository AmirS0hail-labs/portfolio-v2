import * as React from "react";

import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-20 sm:py-28",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
