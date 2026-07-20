import * as React from "react";
import Image from "next/image";
import {
  Clock,
  Globe,
  ImageIcon,
  Lock,
  MonitorPlay,
  PlayCircle,
  ShieldAlert,
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
    chip: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    Icon: Globe,
  },
  internal: {
    label: "Internal — redacted only",
    chip: "border-amber-400/30 bg-amber-400/10 text-amber-300",
    Icon: Lock,
  },
  synthetic: {
    label: "Synthetic / redacted only",
    chip: "border-accent-violet/30 bg-accent-violet/10 text-accent-violet",
    Icon: ShieldAlert,
  },
  pending: {
    label: "Asset pending",
    chip: "border-accent-blue/30 bg-accent-blue/10 text-accent-blue",
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
    return (
      <figure
        className={cn(
          "group relative overflow-hidden rounded-xl border border-border bg-muted",
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
          <Image
            src={visual.src}
            alt={visual.caption}
            fill
            priority={priority}
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        )}
        <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-black/80 to-transparent px-4 py-3 text-sm text-foreground/90">
          <span>{visual.caption}</span>
          <span
            className={cn(
              "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium",
              sensitivity.chip,
            )}
          >
            <SensitivityIcon className="size-3" />
            {sensitivity.label}
          </span>
        </figcaption>
      </figure>
    );
  }

  return (
    <figure
      className={cn(
        "relative flex flex-col overflow-hidden rounded-xl border border-dashed border-white/12 bg-card/60",
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

      <div className="bg-grid flex flex-1 flex-col items-center justify-center gap-3 p-6 text-center">
        <span className="flex size-12 items-center justify-center rounded-full border border-border bg-white/[0.03] text-muted-foreground">
          <KindIcon className="size-5" />
        </span>
        <figcaption className="text-sm font-medium text-foreground/90">
          {visual.caption}
        </figcaption>
        {visual.note ? (
          <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
            {visual.note}
          </p>
        ) : null}
      </div>
    </figure>
  );
}
