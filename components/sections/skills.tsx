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
          eyebrow="Skills"
          title="The tools I reach for"
          description="Grouped by where they sit in the stack. Backend-leaning, but comfortable end to end."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.category} delay={index * 0.05} className="h-full">
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold tracking-wider text-foreground uppercase">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <TechBadge>{skill}</TechBadge>
                  </li>
                ))}
              </ul>
              {group.note ? (
                <p className="mt-auto text-xs text-muted-foreground">
                  {group.note}
                </p>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
