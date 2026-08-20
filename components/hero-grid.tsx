"use client";

import { useCallback, useRef, useState, type MouseEvent } from "react";
import { useReducedMotion } from "motion/react";

/** Must match `--grid-size` in `app/globals.css`. */
const CELL = 72;
const RIPPLE_MS = 2400;

type Cell = { col: number; row: number };
type Ripple = { id: number; x: number; y: number };

function isInteractive(target: EventTarget | null) {
  return target instanceof Element
    ? Boolean(target.closest("a, button, [data-interactive]"))
    : false;
}

function cellFromPoint(
  el: HTMLElement,
  clientX: number,
  clientY: number,
): { col: number; row: number; x: number; y: number } {
  const rect = el.getBoundingClientRect();
  const x = clientX - rect.left;
  const y = clientY - rect.top;
  return {
    col: Math.floor(x / CELL),
    row: Math.floor(y / CELL),
    x,
    y,
  };
}

const gridMask = "hero-grid-mask";

export function HeroGrid() {
  const shouldReduceMotion = useReducedMotion();
  const layerRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<Cell | null>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleId = useRef(0);

  const onMove = useCallback((event: MouseEvent<HTMLDivElement>) => {
    if (isInteractive(event.target)) {
      setHover(null);
      return;
    }
    const el = layerRef.current;
    if (!el) return;
    const next = cellFromPoint(el, event.clientX, event.clientY);
    setHover((prev) =>
      prev && prev.col === next.col && prev.row === next.row
        ? prev
        : { col: next.col, row: next.row },
    );
  }, []);

  const onClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
    if (isInteractive(event.target)) return;
    const el = layerRef.current;
    if (!el) return;
    const next = cellFromPoint(el, event.clientX, event.clientY);
    const id = ++rippleId.current;
    const x = next.col * CELL + CELL / 2;
    const y = next.row * CELL + CELL / 2;
    setRipples((list) => [...list, { id, x, y }]);
    window.setTimeout(() => {
      setRipples((list) => list.filter((item) => item.id !== id));
    }, RIPPLE_MS);
  }, []);

  if (shouldReduceMotion) {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className={`bg-grid absolute inset-0 opacity-40 ${gridMask}`} />
      </div>
    );
  }

  return (
    <div
      ref={layerRef}
      aria-hidden="true"
      className="absolute inset-0 z-0 overflow-hidden"
      onMouseMove={onMove}
      onMouseLeave={() => setHover(null)}
      onClick={onClick}
    >
      <div className={`pointer-events-none absolute inset-0 ${gridMask}`}>
        <div className="bg-grid absolute inset-0 opacity-40" />
        {hover ? (
          <div
            className="hero-grid-cell pointer-events-none absolute"
            style={{
              width: CELL,
              height: CELL,
              left: hover.col * CELL,
              top: hover.row * CELL,
            }}
          />
        ) : null}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="hero-grid-ripple pointer-events-none absolute"
            style={{ left: ripple.x, top: ripple.y }}
          />
        ))}
      </div>
    </div>
  );
}
