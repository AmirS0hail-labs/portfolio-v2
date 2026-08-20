import { GraduationCap, MapPin, User } from "lucide-react";

import { about } from "@/content/about";
import { site } from "@/content/site";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <Section id="about">
      <Reveal>
        <SectionHeading
          eyebrow="About"
          index="03"
          title="A little about me"
          icon={User}
        />
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20.5rem] lg:items-start">
        <Reveal delay={0.05}>
          <div className="flex max-w-2xl flex-col gap-5 text-[15px] leading-relaxed text-foreground sm:text-base">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="surface-panel flex flex-col gap-4 rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-accent-sage/40 bg-accent-sage/[0.08] text-accent-sage">
                <GraduationCap className="size-5" />
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs tracking-wider text-accent-sage uppercase">
                  Education
                </span>
                <span className="font-medium text-foreground">
                  {about.education.degree}
                </span>
                <span className="text-sm text-muted-foreground">
                  {about.education.school}
                </span>
                <span className="text-sm text-muted-foreground">
                  {about.education.period}
                </span>
              </div>
            </div>

            <div className="h-px bg-border" />

            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-accent-sage/40 bg-accent-sage/[0.08] text-accent-sage">
                <MapPin className="size-5" />
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs tracking-wider text-accent-sage uppercase">
                  Based in
                </span>
                <span className="font-medium text-foreground">
                  {site.location}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
