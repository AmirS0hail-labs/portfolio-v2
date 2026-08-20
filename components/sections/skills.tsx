import { Code2 } from "lucide-react";

import { skillGroups } from "@/content/skills";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { TechBadge } from "@/components/tech-badge";
import { Reveal } from "@/components/reveal";

export function Skills() {
  return (
    <Section id="skills">
      <Reveal>
        <SectionHeading
          index="05"
          eyebrow="Skills"
          title="The tools I reach for"
          description="Grouped by where they sit in the stack. Backend-leaning, but comfortable end to end."
          icon={Code2}
        />
      </Reveal>

      <Reveal delay={0.08}>
        <dl className="spec-list mt-10">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="spec-row grid gap-3 py-5 sm:grid-cols-[10.5rem_minmax(0,1fr)] sm:items-start sm:gap-8"
            >
              <dt className="font-mono text-xs font-semibold tracking-wider text-accent-sage uppercase">
                {group.category}
              </dt>
              <dd className="flex flex-col gap-2">
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <TechBadge>{skill}</TechBadge>
                    </li>
                  ))}
                </ul>
                {group.note ? (
                  <p className="text-xs text-muted-foreground">{group.note}</p>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
