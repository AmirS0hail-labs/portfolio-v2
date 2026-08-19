"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
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
      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      <span className="absolute inset-0 rounded-2xl" aria-hidden="true" />
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
  const shouldReduceMotion = useReducedMotion();
  const number = String(index + 1).padStart(2, "0");
  const href = `/case-studies/${caseStudy.slug}`;

  return (
    <motion.article
      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "surface-panel group relative flex h-full flex-col",
        featured
          ? "gap-8 rounded-2xl p-6 sm:p-8 lg:p-10"
          : "justify-between gap-5 rounded-2xl p-5 sm:p-6",
      )}
    >
      {featured ? (
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-12">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-accent-sage">
                {number}
              </span>
              <Badge variant="sage">{caseStudy.org}</Badge>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-display text-2xl leading-snug font-semibold tracking-tight sm:text-3xl">
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
            <div className="rounded-2xl border border-border/80 bg-background/45 px-7 py-6 lg:min-w-[17rem]">
              <p className="flex flex-wrap items-baseline gap-2">
                <span className="text-sm text-muted-foreground line-through decoration-white/30">
                  {caseStudy.metric.from}
                </span>
                <span className="text-muted-foreground">→</span>
                <span className="font-display text-4xl font-semibold tracking-tight text-accent-rose sm:text-5xl">
                  {caseStudy.metric.to}
                </span>
              </p>
              <p className="mt-2 max-w-[16rem] text-xs leading-relaxed text-muted-foreground">
                {caseStudy.metric.label}
                {caseStudy.metric.note ? ` · ${caseStudy.metric.note}` : ""}
              </p>
            </div>
          ) : null}
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-xs text-accent-sage">
                {number}
              </span>
              <Badge variant="sage">{caseStudy.org}</Badge>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-display text-xl leading-snug font-semibold tracking-tight">
                {caseStudy.title}
              </h3>
              <p className="text-sm text-muted-foreground">{caseStudy.role}</p>
            </div>

            <p className="text-[15px] leading-relaxed text-foreground">
              {caseStudy.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <StackList items={caseStudy.stack} limit={5} />
            <ReadLink href={href} title={caseStudy.title} />
          </div>
        </>
      )}
    </motion.article>
  );
}
