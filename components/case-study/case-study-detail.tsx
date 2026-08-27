import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ShieldAlert } from "lucide-react";

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
      <span className="section-rule w-6 shrink-0" aria-hidden="true" />
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
        className="inline-flex items-center gap-1.5 text-sm text-accent-sage transition-[color,transform] duration-[var(--duration-hover)] ease-canvas hover:text-foreground motion-safe:hover:-translate-x-0.5"
      >
        <ArrowLeft className="size-4" />
        All case studies
      </Link>

      <header className="hairline mt-8 flex flex-col gap-5 border-b pb-10">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="sage">{caseStudy.org}</Badge>
          <span className="text-sm text-muted-foreground">
            {caseStudy.role}
          </span>
        </div>

        <h1 className="max-w-4xl font-display text-3xl leading-tight font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {caseStudy.title}
        </h1>

        {caseStudy.href ? (
          <Link
            href={caseStudy.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-1.5 text-sm text-accent-sage transition-[color,transform] duration-[var(--duration-hover)] ease-canvas hover:text-foreground"
          >
            View live site
            <ArrowUpRight className="size-4" />
          </Link>
        ) : null}

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
              {caseStudy.visuals.map((visual, index) => (
                <MediaPlaceholder
                  key={visual.caption}
                  visual={visual}
                  priority={index === 0}
                  className="aspect-[16/10] h-full w-full"
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
          <div className="hairline-box flex max-w-3xl items-start gap-3 rounded-xl bg-background/40 p-5">
            <ShieldAlert className="mt-0.5 size-5 shrink-0 text-accent-sage" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {caseStudy.privacyNote}
            </p>
          </div>
        ) : null}
      </div>

      {prev || next ? (
        <nav aria-label="More case studies" className="work-list mt-16">
          {prev ? (
            <Link
              href={`/case-studies/${prev.slug}`}
              className="work-row group flex flex-col gap-1 py-6 motion-safe:hover:gap-0.5 motion-safe:hover:py-4"
            >
              <span className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-accent-sage uppercase">
                <ArrowLeft className="size-3" />
                Previous
              </span>
              <span className="work-row-title font-display text-sm font-medium">
                {prev.title}
              </span>
            </Link>
          ) : null}
          {next ? (
            <Link
              href={`/case-studies/${next.slug}`}
              className="work-row group flex flex-col gap-1 py-6 text-right motion-safe:hover:gap-0.5 motion-safe:hover:py-4"
            >
              <span className="inline-flex items-center justify-end gap-1.5 font-mono text-xs tracking-wider text-accent-sage uppercase">
                Next
                <ArrowRight className="size-3" />
              </span>
              <span className="work-row-title font-display text-sm font-medium">
                {next.title}
              </span>
            </Link>
          ) : null}
        </nav>
      ) : null}
    </article>
  );
}
