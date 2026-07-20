import { Hero } from "@/components/sections/hero";
import { CaseStudies } from "@/components/sections/case-studies";
import { Projects } from "@/components/sections/projects";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <CaseStudies />
      <Projects />
      <About />
      <Testimonials />
      <Skills />
      <Contact />
    </>
  );
}
