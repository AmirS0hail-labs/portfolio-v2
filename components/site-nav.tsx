"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
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

export function SiteNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState("home");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        aria-label="Primary"
        className={cn(
          "flex w-full max-w-5xl items-center justify-between gap-3 rounded-full border px-3 py-2 transition-all duration-300",
          scrolled
            ? "border-border bg-background/80 shadow-lg shadow-black/30 backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full px-2 py-1 text-sm font-semibold tracking-tight"
        >
          <span className="flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-accent-violet text-xs font-bold text-background">
            AS
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => {
            const isActive = isHome && active === hashOf(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-white/10 text-foreground"
                      : "text-muted-foreground hover:bg-white/5 hover:text-foreground",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href="/#contact">Contact Me</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="size-9 md:hidden"
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
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <SheetClose asChild>
                      <Link
                        href={item.href}
                        className="block rounded-lg px-3 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
              <div className="mt-auto p-6">
                <SheetClose asChild>
                  <Button asChild className="w-full">
                    <Link href="/#contact">Contact Me</Link>
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
