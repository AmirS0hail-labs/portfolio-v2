import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, ShieldAlert } from "lucide-react";

import type { CaseStudy } from "@/content/types";
import { Badge } from "@/components/ui/badge";
import { TechBadge } from "@/components/tech-badge";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type NavLink = { slug: string; title: string };

function DetailHeading({
  index,
  children,
}: {
  index: string;
  children: string;
}) {
  return (
    <h2 className="flex items-center gap-3 font-display text-xl font-semibold tracking-tight sm:text-2xl">
      <span className="font-mono text-xs font-medium tracking-wider text-accent-sage">
        {index}
      </span>
      <span className="h-px w-6 bg-accent-sage" aria-hidden="true" />
      {children}
    </h2>
  );
}

export function CaseStudyDetail({
  caseStudy,
  prev,
  next,
}: {
  caseStudy: CaseStudy;
  prev?: NavLink;
  next?: NavLink;
}) {
  return (
    <article className="mx-auto w-full max-w-6xl px-3 pt-28 pb-24 sm:px-4 sm:pt-32 lg:px-5">
      <Link
        href="/#case-studies"
        className="inline-flex items-center gap-1.5 text-sm text-accent-sage transition-[color,transform] duration-300 hover:text-foreground motion-safe:hover:-translate-x-0.5"
      >
        <ArrowLeft className="size-4" />
        All case studies
      </Link>

      <header className="mt-8 flex flex-col gap-5 border-b border-border pb-10">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="sage">{caseStudy.org}</Badge>
          <span className="text-sm text-muted-foreground">
            {caseStudy.role}
          </span>
        </div>

        <h1 className="font-display max-w-4xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {caseStudy.title}
        </h1>

        <p className="max-w-3xl text-lg leading-relaxed text-foreground">
          {caseStudy.summary}
        </p>

        {caseStudy.metric ? (
          <p className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-lg text-muted-foreground line-through decoration-white/30">
              {caseStudy.metric.from}
            </span>
            <span className="text-muted-foreground">→</span>
            <span className="font-display text-3xl font-semibold tracking-tight text-accent-rose sm:text-4xl">
              {caseStudy.metric.to}
            </span>
            <span className="text-sm text-muted-foreground">
              {caseStudy.metric.label}
              {caseStudy.metric.note ? ` · ${caseStudy.metric.note}` : ""}
            </span>
          </p>
        ) : null}
      </header>

      <div className="mt-12 flex flex-col gap-14">
        <Reveal>
          <section className="flex flex-col gap-5">
            <DetailHeading index="01">What I built</DetailHeading>
            <ul className="flex max-w-3xl flex-col gap-3">
              {caseStudy.contributions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 size-4 shrink-0 text-accent-sage" />
                  <span className="text-[15px] leading-relaxed text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section className="flex flex-col gap-4">
            <DetailHeading index="02">Result</DetailHeading>
            <p className="max-w-3xl text-[15px] leading-relaxed text-foreground">
              {caseStudy.result}
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section className="flex flex-col gap-5">
            <DetailHeading index="03">A look at it</DetailHeading>
            <div
              className={cn(
                "grid items-stretch gap-4",
                caseStudy.visuals.length === 1 && "max-w-3xl",
                caseStudy.visuals.length === 2 && "sm:grid-cols-2",
                caseStudy.visuals.length >= 3 &&
                  "sm:grid-cols-2 lg:grid-cols-3",
              )}
            >
              {caseStudy.visuals.map((visual) => (
                <MediaPlaceholder
                  key={visual.caption}
                  visual={visual}
                  className="h-full w-full aspect-[16/10]"
                />
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="flex flex-col gap-4">
            <DetailHeading index="04">Stack</DetailHeading>
            <ul className="flex flex-wrap gap-2">
              {caseStudy.stack.map((tech) => (
                <li key={tech}>
                  <TechBadge>{tech}</TechBadge>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        {caseStudy.privacyNote ? (
          <div className="flex max-w-3xl items-start gap-3 rounded-xl border border-border bg-background/40 p-5">
            <ShieldAlert className="mt-0.5 size-5 shrink-0 text-accent-sage" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {caseStudy.privacyNote}
            </p>
          </div>
        ) : null}
      </div>

      <nav
        aria-label="More case studies"
        className="mt-16 flex items-center justify-between gap-6 border-t border-border pt-8"
      >
        {prev ? (
          <Link
            href={`/case-studies/${prev.slug}`}
            className="group flex max-w-[48%] flex-col gap-1 text-left transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:-translate-x-0.5"
          >
            <span className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-accent-sage uppercase transition-colors group-hover:text-foreground">
              <ArrowLeft className="size-3 transition-transform duration-300 group-hover:-translate-x-0.5" />
              Previous
            </span>
            <span className="truncate text-sm font-medium text-foreground">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/case-studies/${next.slug}`}
            className="group flex max-w-[48%] flex-col gap-1 text-right transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:translate-x-0.5"
          >
            <span className="inline-flex items-center justify-end gap-1.5 font-mono text-xs tracking-wider text-accent-sage uppercase transition-colors group-hover:text-foreground">
              Next
              <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
            <span className="truncate text-sm font-medium text-foreground">
              {next.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
