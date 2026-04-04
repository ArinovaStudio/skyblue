"use client";

import { useEffect, useState } from "react";

type Props = {
  scrollRef: React.RefObject<HTMLDivElement>;
  triggerRatio?: number;
  color?: string;
  height?: number;
};

/**
 * ScrollProgressBar
 *
 * A thin bar at the top of the viewport that fills from 0→100%
 * as scroll approaches the trigger point, then resets.
 *
 * Purely cosmetic — gives users a visual hint that something will
 * happen as they scroll.
 */
export default function ScrollProgressBar({
  scrollRef,
  triggerRatio = 0.6,
  color = "rgba(255,255,255,0.6)",
  height = 2,
}: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const maxScroll = scrollHeight - clientHeight;
      const triggerY = maxScroll * triggerRatio;
      const pct = Math.min(100, (scrollTop / triggerY) * 100);
      setProgress(pct);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [scrollRef, triggerRatio]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height,
        zIndex: 40,
        backgroundColor: "rgba(255,255,255,0.1)",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          backgroundColor: color,
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}