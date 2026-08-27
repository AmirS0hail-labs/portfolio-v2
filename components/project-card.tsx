import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/content/types";
import { Badge } from "@/components/ui/badge";
import { TechBadge } from "@/components/tech-badge";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  const isLink = Boolean(project.href);

  const inner = (
    <div className="flex min-w-0 flex-1 flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <h3 className="work-row-title font-display text-lg font-semibold tracking-tight">
            {project.name}
          </h3>
          {project.current ? <Badge variant="sage">Current</Badge> : null}
          {isLink ? (
            <ArrowUpRight className="size-4 text-accent-sage transition-[color,transform] duration-[var(--duration-hover)] ease-canvas group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
          ) : null}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>

      <ul className="flex flex-wrap gap-2 sm:max-w-[42%] sm:justify-end">
        {project.stack.map((tech) => (
          <li key={tech}>
            <TechBadge>{tech}</TechBadge>
          </li>
        ))}
      </ul>
    </div>
  );

  const className = cn(
    "work-row group flex flex-col gap-3 py-6 motion-safe:hover:gap-2 motion-safe:hover:py-4",
    isLink ? "relative" : "cursor-default",
  );

  if (isLink) {
    return (
      <Link
        href={project.href!}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {inner}
      </Link>
    );
  }

  return <article className={className}>{inner}</article>;
}
