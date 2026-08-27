"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Clock,
  Globe,
  ImageIcon,
  Lock,
  MonitorPlay,
  PlayCircle,
  ShieldAlert,
  X,
  ExternalLink,
  ZoomIn,
} from "lucide-react";

import type { Sensitivity, Visual } from "@/content/types";
import { cn } from "@/lib/utils";

const aspectClass: Record<NonNullable<Visual["aspect"]>, string> = {
  video: "aspect-video",
  wide: "aspect-[16/10]",
  square: "aspect-square",
};

const sensitivityConfig: Record<
  Sensitivity,
  {
    label: string;
    chip: string;
    Icon: React.ComponentType<{ className?: string }>;
  }
> = {
  public: {
    label: "Public asset",
    chip: "border-accent-sage/80 bg-accent-sage/15 text-accent-sage",
    Icon: Globe,
  },
  internal: {
    label: "Internal — redacted only",
    chip: "border-accent-sage/80 bg-accent-sage/15 text-accent-sage",
    Icon: Lock,
  },
  synthetic: {
    label: "Synthetic / redacted only",
    chip: "border-accent-sage/80 bg-accent-sage/15 text-accent-sage",
    Icon: ShieldAlert,
  },
  pending: {
    label: "Asset pending",
    chip: "border-accent-sage/80 bg-accent-sage/15 text-accent-sage",
    Icon: Clock,
  },
};

const kindIcon: Record<
  Visual["kind"],
  React.ComponentType<{ className?: string }>
> = {
  image: ImageIcon,
  video: PlayCircle,
  embed: MonitorPlay,
};

export function MediaPlaceholder({
  visual,
  className,
  priority = false,
}: {
  visual: Visual;
  className?: string;
  priority?: boolean;
}) {
  const aspect = aspectClass[visual.aspect ?? "wide"];
  const sensitivity = sensitivityConfig[visual.sensitivity];
  const KindIcon = kindIcon[visual.kind];
  const SensitivityIcon = sensitivity.Icon;

  // When a real (already-safe) asset is provided, render it instead of the placeholder.
  if (visual.src) {
    const trigger = (
      <figure
        className={cn(
          "surface-panel group relative overflow-hidden rounded-xl cursor-pointer ring-1 ring-border/50 hover:ring-border transition-all",
          aspect,
          className,
        )}
      >
        {visual.kind === "video" ? (
          <video
            className="size-full object-cover"
            src={visual.src}
            controls
            playsInline
            preload="metadata"
            aria-label={visual.caption}
          />
        ) : (
          <>
            <Image
              src={visual.src}
              alt={visual.caption}
              fill
              priority={priority}
              quality={90}
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-contain"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10 flex items-center justify-center">
              <ZoomIn className="size-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 drop-shadow-md" />
            </div>
          </>
        )}
      </figure>
    );

    if (visual.kind === "video") {
      return trigger; // video controls are native
    }

    return (
      <Dialog.Root>
        <Dialog.Trigger asChild>
          {trigger}
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed inset-4 z-50 flex items-center justify-center data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:inset-10">
            <div className="relative flex h-full w-full flex-col overflow-hidden">
              <div className="flex-1 relative min-h-0">
                <Image
                  src={visual.src}
                  alt={visual.caption}
                  fill
                  quality={90}
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <div className="flex flex-col gap-1 text-white">
                  <span className="font-medium">{visual.caption}</span>
                  {visual.note && <span className="text-sm text-white/70">{visual.note}</span>}
                </div>
                <div className="flex items-center gap-2">
                  {visual.href && (
                    <Link
                      href={visual.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
                    >
                      Visit site <ExternalLink className="size-4" />
                    </Link>
                  )}
                  <Dialog.Close asChild>
                    <button
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors"
                      aria-label="Close"
                    >
                      <X className="size-4" />
                    </button>
                  </Dialog.Close>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  }

  return (
    <figure
      className={cn(
        "surface-panel relative flex h-full min-h-0 flex-col overflow-hidden rounded-xl",
        aspect,
        className,
      )}
    >
      <span
        className={cn(
          "absolute top-3 left-3 z-10 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium",
          sensitivity.chip,
        )}
      >
        <SensitivityIcon className="size-3" />
        {sensitivity.label}
      </span>

      <div className="bg-grid flex min-h-0 flex-1 flex-col items-center justify-center gap-3 p-6 text-center">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-accent-sage/40 bg-accent-sage/[0.08] text-accent-sage">
          <KindIcon className="size-5" />
        </span>
        <figcaption className="line-clamp-2 text-sm font-medium text-foreground/90">
          {visual.caption}
        </figcaption>
        {visual.note ? (
          <p className="line-clamp-3 max-w-xs text-xs leading-relaxed text-muted-foreground">
            {visual.note}
          </p>
        ) : null}
      </div>
    </figure>
  );
}
