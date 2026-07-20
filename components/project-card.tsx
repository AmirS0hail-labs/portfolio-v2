"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/content/types";
import { Badge } from "@/components/ui/badge";
import { TechBadge } from "@/components/tech-badge";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion();
  const isLink = Boolean(project.href);

  const inner = (
    <>
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold tracking-tight">
          {project.name}
        </h3>
        <div className="flex items-center gap-2">
          {project.current ? <Badge variant="violet">Current</Badge> : null}
          {isLink ? (
            <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
          ) : null}
        </div>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <ul className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.stack.map((tech) => (
          <li key={tech}>
            <TechBadge>{tech}</TechBadge>
          </li>
        ))}
      </ul>
    </>
  );

  const className = cn(
    "group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-white/20",
  );

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="h-full"
    >
      {isLink ? (
        <Link
          href={project.href!}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {inner}
        </Link>
      ) : (
        <div className={className}>{inner}</div>
      )}
    </motion.div>
  );
}
