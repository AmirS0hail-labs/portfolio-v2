import Link from "next/link";
import { Mail } from "lucide-react";

import { site } from "@/content/site";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const socials = [
  {
    label: "LinkedIn",
    href: site.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: "GitHub",
    href: site.github,
    Icon: GitHubIcon,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${site.email}`,
    Icon: Mail,
    external: false,
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-background">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-6 px-6 py-8 sm:flex-row">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <span className="text-sm font-medium text-foreground">
            {site.name}
          </span>
          <span className="text-xs text-muted-foreground">
            {site.role} · {site.location}
          </span>
        </div>

        <ul className="flex items-center gap-2">
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

        <p className="text-xs text-muted-foreground">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
