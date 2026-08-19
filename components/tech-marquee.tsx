"use client";

import { useReducedMotion } from "motion/react";

import { skillGroups } from "@/content/skills";
import { TechBadge } from "@/components/tech-badge";

const skills = skillGroups.flatMap((group) => group.skills);

function SkillRow({ copy }: { copy: number }) {
  return (
    <ul
      className="flex shrink-0 gap-2 pr-2"
      aria-hidden={copy === 1 ? true : undefined}
    >
      {skills.map((skill) => (
        <li key={`${copy}-${skill}`}>
          <TechBadge>{skill}</TechBadge>
        </li>
      ))}
    </ul>
  );
}

export function TechMarquee() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <ul className="flex flex-wrap justify-center gap-2" aria-hidden="true">
        {skills.map((skill) => (
          <li key={skill}>
            <TechBadge>{skill}</TechBadge>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="tech-marquee" aria-hidden="true">
      <div className="tech-marquee-track flex w-max">
        <SkillRow copy={0} />
        <SkillRow copy={1} />
      </div>
    </div>
  );
}
