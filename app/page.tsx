import { Hero } from "@/components/sections/hero";
import { CaseStudies } from "@/components/sections/case-studies";
import { Projects } from "@/components/sections/projects";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { IntroOverlay } from "@/components/intro-overlay";

export default function Home() {
  return (
    <>
      <IntroOverlay />
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
