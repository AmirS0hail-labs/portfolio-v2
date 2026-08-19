"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import type { CaseStudy } from "@/content/types";
import { Badge } from "@/components/ui/badge";
import { TechBadge } from "@/components/tech-badge";

export function CaseStudyCard({
  caseStudy,
  index,
}: {
  caseStudy: CaseStudy;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="surface-panel group relative flex h-full flex-col justify-between gap-6 rounded-2xl p-6 sm:p-8"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-xs text-accent-sage">
            {String(index + 1).padStart(2, "0")}
          </span>
          <Badge variant="sage">{caseStudy.org}</Badge>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-display text-xl leading-snug font-semibold tracking-tight sm:text-2xl">
            {caseStudy.title}
          </h3>
          <p className="text-sm text-muted-foreground">{caseStudy.role}</p>
        </div>

        <p className="text-[15px] leading-relaxed text-foreground">
          {caseStudy.tagline}
        </p>

        {caseStudy.metric ? (
          <div className="mt-1 flex items-baseline gap-2 rounded-xl border border-border bg-background px-4 py-3">
            <span className="text-sm text-muted-foreground line-through decoration-white/30">
              {caseStudy.metric.from}
            </span>
            <span className="text-muted-foreground">→</span>
            <span className="text-2xl font-semibold tracking-tight text-accent-rose">
              {caseStudy.metric.to}
            </span>
            <span className="ml-1 text-xs text-muted-foreground">
              {caseStudy.metric.label.toLowerCase()}
            </span>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-5">
        <ul className="flex flex-wrap gap-2">
          {caseStudy.stack.slice(0, 5).map((tech) => (
            <li key={tech}>
              <TechBadge>{tech}</TechBadge>
            </li>
          ))}
          {caseStudy.stack.length > 5 ? (
            <li>
              <TechBadge>+{caseStudy.stack.length - 5}</TechBadge>
            </li>
          ) : null}
        </ul>

        <Link
          href={`/case-studies/${caseStudy.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-foreground"
        >
          Read case study
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          <span className="absolute inset-0" aria-hidden="true" />
          <span className="sr-only">: {caseStudy.title}</span>
        </Link>
      </div>
    </motion.article>
  );
}
