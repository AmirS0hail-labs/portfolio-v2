"use client";

import {
  useEffect,
  useLayoutEffect,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";

import {
  greetingAt,
  greetings,
  INTRO_CYCLE_MS,
  INTRO_FADE_MS,
  INTRO_FAIL_OPEN_MS,
  INTRO_STORAGE_KEY,
} from "@/content/intro";
import { cn } from "@/lib/utils";

type IntroState = "idle" | "playing" | "exiting";

function subscribeIntro() {
  return () => {};
}

function getIntroPending() {
  return document.documentElement.dataset.intro === "pending";
}

function getIntroPendingServer() {
  return false;
}

function clearIntroAttribute() {
  document.documentElement.removeAttribute("data-intro");
}

function markIntroSeen() {
  try {
    sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
  } catch {
    // Private mode / blocked storage — skip is best-effort.
  }
}

export function IntroOverlay() {
  const pending = useSyncExternalStore(
    subscribeIntro,
    getIntroPending,
    getIntroPendingServer,
  );
  const [hasPlayed, setHasPlayed] = useState(false);
  const [state, setState] = useState<IntroState>("idle");
  const [index, setIndex] = useState(0);
  const [percent, setPercent] = useState(0);

  const canPlay = greetings.length > 0;
  const greeting = greetingAt(index);

  if (pending && state === "idle" && !hasPlayed && canPlay) {
    setHasPlayed(true);
    setState("playing");
  }

  if (state !== "idle" && !greeting) {
    setState("idle");
  }

  useLayoutEffect(() => {
    const html = document.documentElement;
    if (state === "playing") {
      html.dataset.intro = "playing";
      return;
    }
    if (state === "exiting") {
      html.dataset.intro = "exiting";
      return;
    }
    // Keep the pre-hydration canvas cover until playing commits.
    if (html.dataset.intro === "pending") return;
    html.removeAttribute("data-intro");
  }, [state]);

  // Hydration stalled with the black cover still up — show the page.
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (document.documentElement.dataset.intro !== "pending") return;
      clearIntroAttribute();
      setHasPlayed(true);
      setState("idle");
    }, INTRO_FAIL_OPEN_MS);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (state !== "playing") return;
    if (!canPlay) {
      clearIntroAttribute();
      setState("idle");
      return;
    }

    const last = greetings.length - 1;
    const start = performance.now();
    const greetingMs = INTRO_CYCLE_MS / greetings.length;
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = Math.max(0, now - start);
      const t = Math.min(elapsed / INTRO_CYCLE_MS, 1);
      const nextIndex = Math.max(
        0,
        Math.min(Math.floor(elapsed / greetingMs), last),
      );
      setPercent(Math.round(t * 100));
      setIndex(nextIndex);
      if (elapsed >= INTRO_CYCLE_MS) {
        setPercent(100);
        setIndex(last);
        setState("exiting");
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [state, canPlay]);

  useEffect(() => {
    if (state !== "exiting") return;

    const timeout = window.setTimeout(() => {
      markIntroSeen();
      setState("idle");
    }, INTRO_FADE_MS);

    return () => window.clearTimeout(timeout);
  }, [state]);

  if (state === "idle" || !greeting) {
    return null;
  }

  return createPortal(
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[200] flex flex-col bg-background text-foreground",
        state === "exiting" &&
          "pointer-events-none opacity-0 transition-opacity duration-[250ms] ease-canvas",
      )}
    >
      <p className="flex flex-1 items-center justify-center px-6 text-center">
        <span className="inline-flex items-center gap-3 text-[clamp(1.75rem,5vw,2.75rem)] font-medium tracking-tight">
          <span
            className="size-2 shrink-0 rounded-full bg-accent-sage"
            aria-hidden="true"
          />
          <span lang={greeting.lang} dir={greeting.dir}>
            {greeting.text}
          </span>
        </span>
      </p>

      <p className="pointer-events-none absolute right-5 bottom-10 font-display text-[clamp(3rem,11vw,6rem)] leading-none font-semibold text-foreground tabular-nums sm:right-8 sm:bottom-12">
        {percent}%
      </p>

      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-foreground/12">
        <div
          className="h-full"
          style={{
            width: `${percent}%`,
            backgroundImage:
              "linear-gradient(to right, var(--accent-sage), var(--accent-rose), var(--foreground))",
          }}
        />
      </div>
    </div>,
    document.body,
  );
}
