import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { CaseStudy } from "@/content/types";
import { Badge } from "@/components/ui/badge";
import { TechBadge } from "@/components/tech-badge";
import { cn } from "@/lib/utils";

function StackList({ items, limit }: { items: string[]; limit?: number }) {
  const visible = limit ? items.slice(0, limit) : items;
  const extra = limit ? Math.max(0, items.length - limit) : 0;

  return (
    <ul className="flex flex-wrap gap-2">
      {visible.map((tech) => (
        <li key={tech}>
          <TechBadge>{tech}</TechBadge>
        </li>
      ))}
      {extra > 0 ? (
        <li>
          <TechBadge>+{extra}</TechBadge>
        </li>
      ) : null}
    </ul>
  );
}

function ReadLink({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
    >
      Read case study
      <ArrowUpRight className="size-4 transition-transform duration-[var(--duration-hover)] ease-canvas group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      <span className="absolute inset-0" aria-hidden="true" />
      <span className="sr-only">: {title}</span>
    </Link>
  );
}

export function CaseStudyCard({
  caseStudy,
  index,
  featured = false,
}: {
  caseStudy: CaseStudy;
  index: number;
  featured?: boolean;
}) {
  const number = String(index + 1).padStart(2, "0");
  const href = `/case-studies/${caseStudy.slug}`;

  return (
    <article
      className={cn(
        "work-row group relative flex flex-col",
        featured
          ? "gap-5 py-8 motion-safe:hover:gap-3 motion-safe:hover:py-6"
          : "gap-3 py-6 motion-safe:hover:gap-2 motion-safe:hover:py-4",
      )}
    >
      {featured ? (
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-accent-sage">
                {number}
              </span>
              <Badge variant="sage">{caseStudy.org}</Badge>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="work-row-title font-display text-2xl leading-snug font-semibold tracking-tight sm:text-3xl">
                {caseStudy.title}
              </h3>
              <p className="text-sm text-muted-foreground">{caseStudy.role}</p>
            </div>

            <p className="max-w-xl text-[15px] leading-relaxed text-foreground sm:text-base">
              {caseStudy.tagline}
            </p>

            <StackList items={caseStudy.stack} limit={6} />
            <ReadLink href={href} title={caseStudy.title} />
          </div>

          {caseStudy.metric ? (
            <div className="lg:min-w-[15rem] lg:pt-1 lg:text-right">
              <p className="flex flex-wrap items-baseline gap-2 lg:justify-end">
                <span className="text-sm text-muted-foreground line-through decoration-white/30">
                  {caseStudy.metric.from}
                </span>
                <span className="text-muted-foreground">→</span>
                <span className="font-display text-4xl font-semibold tracking-tight text-accent-rose sm:text-5xl">
                  {caseStudy.metric.to}
                </span>
              </p>
              <p className="mt-2 max-w-[16rem] text-xs leading-relaxed text-muted-foreground lg:ml-auto">
                {caseStudy.metric.label}
                {caseStudy.metric.note ? ` · ${caseStudy.metric.note}` : ""}
              </p>
            </div>
          ) : null}
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
            <div className="flex min-w-0 items-baseline gap-3">
              <span className="font-mono text-xs text-accent-sage">
                {number}
              </span>
              <h3 className="work-row-title font-display text-xl leading-snug font-semibold tracking-tight">
                {caseStudy.title}
              </h3>
            </div>
            <p className="pl-8 text-sm text-muted-foreground sm:pl-0 sm:text-right">
              {caseStudy.org} · {caseStudy.role}
            </p>
          </div>
          <div className="pl-8 sm:pl-[2.15rem]">
            <ReadLink href={href} title={caseStudy.title} />
          </div>
        </>
      )}
    </article>
  );
}
