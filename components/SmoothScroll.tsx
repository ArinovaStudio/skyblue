"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,                // 🔥 smooth but responsive
      duration: 0.9,            // 🔥 no lag feeling
      smoothWheel: true,
      wheelMultiplier: 1.3,     // 🔥 balanced speed
      touchMultiplier: 1.2,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });

    // 🔥 IMPORTANT: Sync with animation frame
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 🔥 expose globally (optional but useful)
    (window as any).lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}