"use client";

import { useEffect, useRef } from "react";

type Props = {
  isTransitioning: boolean;
  direction: 1 | -1;
  animationMs?: number;
  color?: string; // set to "transparent" or omit to have no visible flash
};

export default function CurtainTransition({
  isTransitioning,
  direction,
  animationMs = 500,
  color = "transparent",
}: Props) {
  const curtainRef = useRef<HTMLDivElement>(null);
  const prevTransitioning = useRef(false);

  useEffect(() => {
    const el = curtainRef.current;
    if (!el) return;

    const halfMs = animationMs * 0.5;

    if (isTransitioning && !prevTransitioning.current) {
      const startY = direction > 0 ? "100%" : "-100%";
      el.style.transition = "none";
      el.style.transform = `translateY(${startY})`;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.transition = `transform ${halfMs}ms cubic-bezier(0.77, 0, 0.18, 1)`;
          el.style.transform = "translateY(0%)";
        });
      });

      const timer = setTimeout(() => {
        const endY = direction > 0 ? "-100%" : "100%";
        el.style.transition = `transform ${halfMs}ms cubic-bezier(0.77, 0, 0.18, 1)`;
        el.style.transform = `translateY(${endY})`;
      }, halfMs + 60);

      return () => clearTimeout(timer);
    }

    prevTransitioning.current = isTransitioning;
  }, [isTransitioning, direction, animationMs]);

  // If transparent, render nothing — background handles the visual transition
  if (!color || color === "transparent") return null;

  return (
    <div
      ref={curtainRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 50,
        pointerEvents: isTransitioning ? "all" : "none",
        transform: "translateY(100%)",
        backgroundColor: color,
        willChange: "transform",
      }}
    />
  );
}