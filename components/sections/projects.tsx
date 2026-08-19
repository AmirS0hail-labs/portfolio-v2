import { projects } from "@/content/projects";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";

export function Projects() {
  return (
    <Section id="projects">
      <Reveal>
        <SectionHeading
          index="02"
          eyebrow="Projects"
          title="Other things I've built"
          description="Smaller products and internal tools across Rails, Next.js, and CI automation."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.06} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
