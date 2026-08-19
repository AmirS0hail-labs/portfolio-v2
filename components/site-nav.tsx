"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Home,
  Layers,
  Mail,
  Menu,
  User,
  type LucideIcon,
} from "lucide-react";

import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const sectionIds = ["home", "case-studies", "projects", "about", "contact"];

const navIcons: Record<string, LucideIcon> = {
  Home,
  "Case Studies": BookOpen,
  Projects: Layers,
  About: User,
  Contact: Mail,
};

const chromePill = "surface-chrome rounded-full backdrop-blur-xl";

export function SiteNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = React.useState("home");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  const hashOf = (href: string) => href.split("#")[1] ?? "";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 lg:px-5">
      <nav
        aria-label="Primary"
        className="relative flex items-center justify-between"
      >
        <Link
          href="/"
          className={cn(
            chromePill,
            "inline-flex items-center gap-2 px-2.5 py-1.5 text-sm font-semibold tracking-tight",
          )}
        >
          <span className="flex size-7 items-center justify-center rounded-full border border-accent-sage/45 bg-card text-xs font-bold text-foreground">
            AS
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>

        <ul
          className={cn(
            chromePill,
            "absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-0.5 p-1 lg:flex",
          )}
        >
          {site.nav.map((item) => {
            const isActive = isHome && active === hashOf(item.href);
            const Icon = navIcons[item.label];
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-[background-color,color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isActive
                      ? "bg-accent-mahogany text-foreground"
                      : "text-accent-sage hover:bg-accent-mahogany/55 hover:text-foreground motion-safe:hover:-translate-y-px",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {Icon ? (
                    <Icon className="size-3.5 shrink-0" aria-hidden="true" />
                  ) : null}
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            variant="ghost"
            className={cn(
              chromePill,
              "hidden h-10 px-4 hover:bg-accent-mahogany/55 lg:inline-flex",
            )}
          >
            <Link
              href="/#contact"
              onClick={() => trackEvent("cta_contact", { placement: "nav" })}
            >
              <Mail className="size-4" aria-hidden="true" />
              Contact Me
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(chromePill, "size-10 lg:hidden")}
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader className="p-6 pb-2">
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col gap-1 px-4">
                {site.nav.map((item) => {
                  const Icon = navIcons[item.label];
                  return (
                    <li key={item.href}>
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-base font-medium text-accent-sage transition-colors hover:bg-accent-mahogany/55 hover:text-foreground"
                        >
                          {Icon ? (
                            <Icon
                              className="size-4 shrink-0"
                              aria-hidden="true"
                            />
                          ) : null}
                          {item.label}
                        </Link>
                      </SheetClose>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-auto p-6">
                <SheetClose asChild>
                  <Button asChild className="w-full">
                    <Link
                      href="/#contact"
                      onClick={() =>
                        trackEvent("cta_contact", { placement: "nav_mobile" })
                      }
                    >
                      <Mail className="size-4" aria-hidden="true" />
                      Contact Me
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
