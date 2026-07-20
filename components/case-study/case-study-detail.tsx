import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, ShieldAlert } from "lucide-react";

import type { AccentColor, CaseStudy } from "@/content/types";
import { Badge } from "@/components/ui/badge";
import { TechBadge } from "@/components/tech-badge";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type NavLink = { slug: string; title: string };

const accentText: Record<AccentColor, string> = {
  blue: "text-accent-blue",
  violet: "text-accent-violet",
  default: "text-foreground",
};

const accentBullet: Record<AccentColor, string> = {
  blue: "text-accent-blue",
  violet: "text-accent-violet",
  default: "text-muted-foreground",
};

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
    <article className="mx-auto w-full max-w-4xl px-6 pt-28 pb-24 sm:pt-32">
      <Link
        href="/#case-studies"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        All case studies
      </Link>

      <header className="mt-8 flex flex-col gap-5 border-b border-border pb-10">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant={caseStudy.accent === "violet" ? "violet" : "blue"}>
            {caseStudy.org}
          </Badge>
          <span className="text-sm text-muted-foreground">
            {caseStudy.role}
          </span>
        </div>

        <h1 className="font-display text-3xl leading-tight font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {caseStudy.title}
        </h1>

        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {caseStudy.summary}
        </p>

        {caseStudy.metric ? (
          <div className="mt-2 flex flex-wrap items-end gap-x-4 gap-y-2 rounded-2xl border border-border bg-white/[0.02] px-6 py-5">
            <div className="flex items-baseline gap-3">
              <span className="text-2xl text-muted-foreground line-through decoration-white/30">
                {caseStudy.metric.from}
              </span>
              <ArrowRight className="size-5 text-muted-foreground" />
              <span
                className={cn(
                  "text-4xl font-semibold tracking-tight",
                  accentText[caseStudy.accent],
                )}
              >
                {caseStudy.metric.to}
              </span>
            </div>
            <span className="text-sm text-muted-foreground">
              {caseStudy.metric.label}
              {caseStudy.metric.note ? ` · ${caseStudy.metric.note}` : ""}
            </span>
          </div>
        ) : null}
      </header>

      <div className="mt-12 flex flex-col gap-14">
        <Reveal>
          <section className="flex flex-col gap-5">
            <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
              What I built
            </h2>
            <ul className="flex flex-col gap-3">
              {caseStudy.contributions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    className={cn(
                      "mt-1 size-4 shrink-0",
                      accentBullet[caseStudy.accent],
                    )}
                  />
                  <span className="text-[15px] leading-relaxed text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
              Result
            </h2>
            <p className="max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
              {caseStudy.result}
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section className="flex flex-col gap-5">
            <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
              A look at it
            </h2>
            <div
              className={cn(
                "grid gap-4",
                caseStudy.visuals.length > 1 && "sm:grid-cols-2",
              )}
            >
              {caseStudy.visuals.map((visual) => (
                <MediaPlaceholder key={visual.caption} visual={visual} />
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
              Stack
            </h2>
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
          <div className="flex items-start gap-3 rounded-xl border border-border bg-white/[0.02] p-5">
            <ShieldAlert className="mt-0.5 size-5 shrink-0 text-accent-violet" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {caseStudy.privacyNote}
            </p>
          </div>
        ) : null}
      </div>

      <nav
        aria-label="More case studies"
        className="mt-16 flex items-center justify-between gap-4 border-t border-border pt-8"
      >
        {prev ? (
          <Link
            href={`/case-studies/${prev.slug}`}
            className="group flex max-w-[48%] flex-col gap-1 text-left"
          >
            <span className="inline-flex items-center gap-1 text-xs tracking-wider text-muted-foreground uppercase">
              <ArrowLeft className="size-3" /> Previous
            </span>
            <span className="truncate text-sm font-medium text-foreground group-hover:text-accent-blue">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/case-studies/${next.slug}`}
            className="group flex max-w-[48%] flex-col gap-1 text-right"
          >
            <span className="inline-flex items-center justify-end gap-1 text-xs tracking-wider text-muted-foreground uppercase">
              Next <ArrowRight className="size-3" />
            </span>
            <span className="truncate text-sm font-medium text-foreground group-hover:text-accent-blue">
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
