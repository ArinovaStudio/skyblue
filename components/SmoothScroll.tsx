"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      prevent: (node) => !!node.closest("[data-lenis-prevent]"),
    });

    // 🔥 throttle lock
    let isLocked = false;

    lenis.on("scroll", () => {
      if (isLocked) return;

      // ✅ your logic (count scroll once)
      console.log("Counted scroll");

      isLocked = true;

      setTimeout(() => {
        isLocked = false;
      }, 5000);
    });

    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}