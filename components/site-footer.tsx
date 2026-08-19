import Link from "next/link";

import { site } from "@/content/site";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const socials = [
  {
    label: "LinkedIn",
    href: site.linkedin,
    Icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    href: site.github,
    Icon: GitHubIcon,
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-background">
      <div className="flex w-full flex-col gap-8 px-3 py-8 sm:px-4 lg:px-5">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="font-mono text-sm text-muted-foreground">
            <span aria-hidden="true">{"// "}</span>
            {site.role}
          </p>

          <ul className="flex items-center gap-2">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  aria-label={label}
                  title={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-white/20 hover:bg-white/5 hover:text-foreground",
                  )}
                >
                  <Icon className="size-[18px]" />
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center rounded-full border border-border bg-transparent px-4 py-2 font-mono text-sm text-foreground transition-colors hover:border-white/20 hover:bg-white/5"
          >
            {site.email}
          </a>
        </div>

        <div className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {year} {site.name}
          </p>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
