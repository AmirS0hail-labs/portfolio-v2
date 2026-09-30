import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import type { QuietPage as QuietPageContent } from "@/content/quiet-pages";

export function QuietPage({ page }: { page: QuietPageContent }) {
  return (
    <article className="mx-auto w-full max-w-6xl px-3 pt-28 pb-24 sm:px-4 sm:pt-32 lg:px-5">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-accent-sage transition-[color,transform] duration-[var(--duration-hover)] ease-canvas hover:text-foreground motion-safe:hover:-translate-x-0.5"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Home
      </Link>

      <header className="hairline mt-8 flex max-w-3xl flex-col gap-5 border-b pb-10">
        <p className="text-xs font-medium tracking-[0.22em] text-accent-sage uppercase">
          {page.label}
        </p>
        <h1 className="font-display text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {page.title}
        </h1>
      </header>

      <div className="mt-10 flex max-w-3xl flex-col gap-5">
        {page.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="text-base leading-relaxed text-foreground sm:text-lg"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
