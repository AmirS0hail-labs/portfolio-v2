import { cn } from "@/lib/utils";

type StatusDotProps = {
  className?: string;
};

export function StatusDot({ className }: StatusDotProps) {
  return <span className={cn("status-dot", className)} aria-hidden="true" />;
}
