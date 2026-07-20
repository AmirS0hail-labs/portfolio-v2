import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

const socials = [
  {
    label: "LinkedIn",
    href: site.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  { label: "GitHub", href: site.github, Icon: GitHubIcon, external: true },
  { label: "Email", href: `mailto:${site.email}`, Icon: Mail, external: false },
];

export function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -top-16 -left-16 size-64 rounded-full bg-accent-blue/15 blur-[90px]" />
            <div className="absolute -right-16 -bottom-16 size-64 rounded-full bg-accent-violet/15 blur-[90px]" />
          </div>

          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6">
            <span className="inline-flex items-center gap-2.5 text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
              <span className="h-px w-7 bg-gradient-to-r from-accent-blue to-accent-violet" />
              Contact
            </span>

            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s build something{" "}
              <span className="text-gradient-brand">reliable</span>.
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Have an ambiguous problem that needs to become shipped software?
              I&apos;m happy to talk through it. The fastest way to reach me is
              email.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={`mailto:${site.email}`}>
                  <Mail className="size-4" />
                  {site.email}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>

            <ul className="mt-2 flex items-center gap-2">
              {socials.map(({ label, href, Icon, external }) => (
                <li key={label}>
                  <Link
                    href={href}
                    aria-label={label}
                    title={label}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={cn(
                      "flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-white/20 hover:bg-white/5 hover:text-foreground",
                    )}
                  >
                    <Icon className="size-[18px]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
