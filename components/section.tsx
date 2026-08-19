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
        "mx-auto w-full max-w-6xl scroll-mt-24 px-3 py-20 sm:px-4 sm:py-28 lg:px-5",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
