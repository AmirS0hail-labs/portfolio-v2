import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-svh max-w-2xl flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="text-gradient-brand font-display text-7xl font-semibold">
        404
      </span>
      <h1 className="font-display text-2xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Button asChild>
        <Link href="/">Back home</Link>
      </Button>
    </section>
  );
}
