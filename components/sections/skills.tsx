import { skillGroups } from "@/content/skills";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { TechBadge } from "@/components/tech-badge";
import { TechMarquee } from "@/components/tech-marquee";
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
        />
      </Reveal>

      <div className="mt-10">
        <TechMarquee />
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.category} delay={index * 0.05} className="h-full">
            <div className="surface-panel flex h-full flex-col gap-3 rounded-2xl p-5">
              <h3 className="text-sm font-semibold tracking-wider text-accent-sage uppercase">
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
