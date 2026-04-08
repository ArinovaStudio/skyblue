// "use client";

// import { useRef, useState, useCallback, useEffect } from "react";

// export type ScrollTriggerOptions = {
//   totalSections: number;
//   wheelThreshold?: number;
//   animationMs?: number;
//   cooldownMs?: number;
// };

// /**
//  * ScrollLockRegistry — a global singleton that sections use to say
//  * "I'm not done yet, don't advance the page."
//  *
//  * A section calls lockScroll() when it has internal states to show.
//  * It calls unlockScroll() when it's fully done and ready to hand off.
//  */
// class ScrollLockRegistry {
//   private locked = false;
//   private onScrollWhileLocked: ((dir: 1 | -1) => void) | null = null;

//   lock(handler: (dir: 1 | -1) => void) {
//     this.locked = true;
//     this.onScrollWhileLocked = handler;
//   }

//   unlock() {
//     this.locked = false;
//     this.onScrollWhileLocked = null;
//   }

//   isLocked() {
//     return this.locked;
//   }

//   notifyScroll(dir: 1 | -1) {
//     if (this.locked && this.onScrollWhileLocked) {
//       this.onScrollWhileLocked(dir);
//     }
//   }
// }

// export const scrollLock = new ScrollLockRegistry();

// export type ScrollTriggerReturn = {
//   section: number;
//   isTransitioning: boolean;
//   direction: 1 | -1;
//   goTo: (idx: number, dir: 1 | -1) => void;
// };

// export function useScrollTrigger({
//   totalSections,
//   wheelThreshold = 300,
//   animationMs = 500,
//   cooldownMs = 700,
// }: ScrollTriggerOptions): ScrollTriggerReturn {
//   const [section, setSection] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [direction, setDirection] = useState<1 | -1>(1);

//   const sectionRef = useRef(0);
//   const isLocked = useRef(false);
//   const accumulated = useRef(0);
//   const touchStartY = useRef(0);

//   const goTo = useCallback(
//     (targetIdx: number, dir: 1 | -1) => {
//       if (isLocked.current) return;
//       if (targetIdx < 0 || targetIdx >= totalSections) return;
//       if (targetIdx === sectionRef.current) return;

//       isLocked.current = true;
//       accumulated.current = 0;

//       setDirection(dir);
//       setIsTransitioning(true);

//       setTimeout(() => {
//         sectionRef.current = targetIdx;
//         setSection(targetIdx);
//       }, animationMs * 0.45);

//       setTimeout(() => {
//         setIsTransitioning(false);
//         setTimeout(() => {
//           isLocked.current = false;
//         }, cooldownMs);
//       }, animationMs);
//     },
//     [totalSections, animationMs, cooldownMs]
//   );

//   // ── Wheel ──────────────────────────────────────────────────────────────
//   useEffect(() => {
//     const onWheel = (e: WheelEvent) => {
//       e.preventDefault();

//       // If a section has locked scroll for internal use, delegate to it
//       if (scrollLock.isLocked()) {
//         const dir = e.deltaY > 0 ? 1 : -1;
//         scrollLock.notifyScroll(dir);
//         accumulated.current = 0;
//         return;
//       }

//       if (isLocked.current) return;

//       const delta = Math.sign(e.deltaY) * Math.min(Math.abs(e.deltaY), 80);
//       accumulated.current += delta;

//       if (accumulated.current >= wheelThreshold) {
//         accumulated.current = 0;
//         goTo(sectionRef.current + 1, 1);
//       } else if (accumulated.current <= -wheelThreshold) {
//         accumulated.current = 0;
//         goTo(sectionRef.current - 1, -1);
//       }
//     };

//     window.addEventListener("wheel", onWheel, { passive: false });
//     return () => window.removeEventListener("wheel", onWheel);
//   }, [goTo, wheelThreshold]);

//   // ── Touch ──────────────────────────────────────────────────────────────
//   useEffect(() => {
//     const onTouchStart = (e: TouchEvent) => {
//       touchStartY.current = e.touches[0].clientY;
//     };

//     const onTouchEnd = (e: TouchEvent) => {
//       const delta = touchStartY.current - e.changedTouches[0].clientY;
//       if (Math.abs(delta) < 60) return;
//       const dir = delta > 0 ? 1 : -1;

//       if (scrollLock.isLocked()) {
//         scrollLock.notifyScroll(dir);
//         return;
//       }

//       if (isLocked.current) return;
//       goTo(sectionRef.current + dir, dir);
//     };

//     window.addEventListener("touchstart", onTouchStart, { passive: true });
//     window.addEventListener("touchend", onTouchEnd, { passive: true });
//     return () => {
//       window.removeEventListener("touchstart", onTouchStart);
//       window.removeEventListener("touchend", onTouchEnd);
//     };
//   }, [goTo]);

//   // ── Keyboard ───────────────────────────────────────────────────────────
//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "ArrowDown" || e.key === "PageDown") {
//         e.preventDefault();
//         if (scrollLock.isLocked()) { scrollLock.notifyScroll(1); return; }
//         if (isLocked.current) return;
//         goTo(sectionRef.current + 1, 1);
//       } else if (e.key === "ArrowUp" || e.key === "PageUp") {
//         e.preventDefault();
//         if (scrollLock.isLocked()) { scrollLock.notifyScroll(-1); return; }
//         if (isLocked.current) return;
//         goTo(sectionRef.current - 1, -1);
//       }
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [goTo]);

//   return { section, isTransitioning, direction, goTo };
// }

"use client";

import { useRef, useState, useCallback, useEffect } from "react";

class ScrollLockRegistry {
  private locked = false;
  private handler: ((dir: 1 | -1) => void) | null = null;

  lock(handler: (dir: 1 | -1) => void) {
    this.locked = true;
    this.handler = handler;
  }

  unlock() {
    this.locked = false;
    this.handler = null;
  }

  isLocked() { return this.locked; }

  notify(dir: 1 | -1) {
    if (this.locked && this.handler) this.handler(dir);
  }
}

export const scrollLock = new ScrollLockRegistry();

export type ScrollTriggerOptions = {
  totalSections: number;
  wheelThreshold?: number;
  animationMs?: number;
  cooldownMs?: number;
  disabled?: boolean; // ✅ NEW
};

export type ScrollTriggerReturn = {
  section: number;
  isTransitioning: boolean;
  direction: 1 | -1;
  goTo: (idx: number, dir: 1 | -1) => void;
};

export function useScrollTrigger({
  totalSections,
  wheelThreshold = 300,
  animationMs = 500,
  cooldownMs = 700,
  disabled = false, // ✅ NEW
}: ScrollTriggerOptions): ScrollTriggerReturn {
  const [section, setSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);

  const sectionRef = useRef(0);
  const isLocked = useRef(false);
  const accumulated = useRef(0);
  const touchStartY = useRef(0);

  const goTo = useCallback(
    (targetIdx: number, dir: 1 | -1) => {
      if (disabled) return; // 🔥 BLOCK when disabled
      if (isLocked.current) return;
      if (targetIdx < 0 || targetIdx >= totalSections) return;
      if (targetIdx === sectionRef.current) return;

      isLocked.current = true;
      accumulated.current = 0;

      setDirection(dir);
      setIsTransitioning(true);

      setTimeout(() => {
        sectionRef.current = targetIdx;
        setSection(targetIdx);
      }, animationMs * 0.45);

      setTimeout(() => {
        setIsTransitioning(false);
        setTimeout(() => {
          isLocked.current = false;
        }, cooldownMs);
      }, animationMs);
    },
    [totalSections, animationMs, cooldownMs, disabled]
  );

  // ✅ WHEEL
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (disabled) return; // 🔥 DO NOTHING (allow modal scroll)

      e.preventDefault();

      if (isLocked.current) return;

      accumulated.current +=
        Math.sign(e.deltaY) * Math.min(Math.abs(e.deltaY), 80);

      if (accumulated.current >= wheelThreshold) {
        accumulated.current = 0;
        goTo(sectionRef.current + 1, 1);
      } else if (accumulated.current <= -wheelThreshold) {
        accumulated.current = 0;
        goTo(sectionRef.current - 1, -1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [goTo, wheelThreshold, disabled]);

  // ✅ TOUCH
  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (disabled) return;

      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) < 60) return;

      const dir: 1 | -1 = delta > 0 ? 1 : -1;

      if (isLocked.current) return;

      goTo(sectionRef.current + dir, dir);
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [goTo, disabled]);

  // ✅ KEYBOARD
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (disabled) return;

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        if (isLocked.current) return;
        goTo(sectionRef.current + 1, 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        if (isLocked.current) return;
        goTo(sectionRef.current - 1, -1);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo, disabled]);

  return { section, isTransitioning, direction, goTo };
}