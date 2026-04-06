// "use client";

// import { useEffect, useCallback, useRef } from "react";
// import { scrollLock } from "./useScrollTrigger";

// type Options = {
//   /**
//    * Is this section currently active (i.e. visible on screen)?
//    * Lock is only registered when active = true.
//    */
//   active: boolean;

//   /**
//    * Total number of internal steps this section has.
//    * e.g. Hero2 has 2 steps: plane-window view → features view
//    */
//   totalSteps: number;

//   /**
//    * Current internal step index (0-based).
//    */
//   currentStep: number;

//   /**
//    * Called when user scrolls forward inside this section.
//    * Advance your internal state here.
//    */
//   onNext: () => void;

//   /**
//    * Called when user scrolls backward inside this section.
//    * Go back one internal state here.
//    */
//   onPrev: () => void;

//   /**
//    * Called when the section has exhausted all its internal steps
//    * AND the user scrolls forward — meaning "hand off to global next".
//    * Wire this to goTo(nextSectionIdx, 1) in page.tsx.
//    */
//   onExitForward: () => void;

//   /**
//    * Called when the section is on its FIRST internal step
//    * AND the user scrolls backward — meaning "hand off to global prev".
//    * Wire this to goTo(prevSectionIdx, -1) in page.tsx.
//    */
//   onExitBackward: () => void;
// };

// /**
//  * useSectionScrollLock
//  *
//  * Use this in any section component that has multiple internal scroll states.
//  * It registers itself with the global ScrollLockRegistry while active,
//  * intercepts wheel/touch/keyboard scroll, and hands control back to
//  * the page-level scroll system when the section is done.
//  *
//  * Example (Hero2):
//  *
//  *   useSectionScrollLock({
//  *     active: isActiveSection,        // passed from page.tsx as prop
//  *     totalSteps: 2,
//  *     currentStep: isScrolled ? 1 : 0,
//  *     onNext: () => setIsScrolled(true),
//  *     onPrev: () => setIsScrolled(false),
//  *     onExitForward: onScrollForward,  // () => goTo(2, 1)
//  *     onExitBackward: onScrollBackward // () => goTo(0, -1)
//  *   });
//  */
// // export function useSectionScrollLock({
// //   active,
// //   totalSteps,
// //   currentStep,
// //   onNext,
// //   onPrev,
// //   onExitForward,
// //   onExitBackward,
// // }: Options) {
// //   // Keep refs up-to-date so the scroll handler always sees fresh values
// //   const stepRef = useRef(currentStep);
// //   const onNextRef = useRef(onNext);
// //   const onPrevRef = useRef(onPrev);
// //   const onExitFwdRef = useRef(onExitForward);
// //   const onExitBwdRef = useRef(onExitBackward);

// //   useEffect(() => { stepRef.current = currentStep; }, [currentStep]);
// //   useEffect(() => { onNextRef.current = onNext; }, [onNext]);
// //   useEffect(() => { onPrevRef.current = onPrev; }, [onPrev]);
// //   useEffect(() => { onExitFwdRef.current = onExitForward; }, [onExitForward]);
// //   useEffect(() => { onExitBwdRef.current = onExitBackward; }, [onExitBackward]);

// //   const handleScroll = useCallback((dir: 1 | -1) => {
// //     if (dir > 0) {
// //       if (stepRef.current < totalSteps - 1) {
// //         // Still have internal steps to show
// //         onNextRef.current();
// //       } else {
// //         // Last internal step — hand off forward to global system
// //         scrollLock.unlock();
// //         onExitFwdRef.current();
// //       }
// //     } else {
// //       if (stepRef.current > 0) {
// //         // Go back an internal step
// //         onPrevRef.current();
// //       } else {
// //         // First internal step — hand off backward to global system
// //         scrollLock.unlock();
// //         onExitBwdRef.current();
// //       }
// //     }
// //   }, [totalSteps]);

// //   useEffect(() => {
// //     if (active) {
// //       // Register this section as the scroll handler
// //       scrollLock.lock(handleScroll);
// //     } else {
// //       // If this section goes inactive (global moved away), always unlock
// //       scrollLock.unlock();
// //     }

// //     return () => {
// //       // Cleanup on unmount
// //       scrollLock.unlock();
// //     };
// //   }, [active, handleScroll]);
// // }

// export function useSectionScrollLock({
//   active,
//   totalSteps,
//   currentStep,
//   onNext,
//   onPrev,
//   onExitForward,
//   onExitBackward,
// }: Options) {
//   const stepRef = useRef(currentStep);
//   const onNextRef = useRef(onNext);
//   const onPrevRef = useRef(onPrev);
//   const onExitFwdRef = useRef(onExitForward);
//   const onExitBwdRef = useRef(onExitBackward);

//   // ── Add these two ──────────────────────────────────────────────────────
//   const isCoolingDown = useRef(false);
//   const accumulated = useRef(0);           // mirrors useScrollTrigger's accumulator
//   const WHEEL_THRESHOLD = 250;             // match page.tsx
//   const COOLDOWN_MS = 650;                 // match page.tsx
//   // ───────────────────────────────────────────────────────────────────────

//   useEffect(() => { stepRef.current = currentStep; }, [currentStep]);
//   useEffect(() => { onNextRef.current = onNext; }, [onNext]);
//   useEffect(() => { onPrevRef.current = onPrev; }, [onPrev]);
//   useEffect(() => { onExitFwdRef.current = onExitForward; }, [onExitForward]);
//   useEffect(() => { onExitBwdRef.current = onExitBackward; }, [onExitBackward]);

//   const handleScroll = useCallback((dir: 1 | -1) => {
//     // ── Accumulate instead of firing instantly ─────────────────────────
//     accumulated.current += dir * 80;       // each scroll tick adds 80 (same cap as useScrollTrigger)

//     if (Math.abs(accumulated.current) < WHEEL_THRESHOLD) return;  // not enough yet
//     if (isCoolingDown.current) return;     // still cooling down from last action

//     // Threshold crossed — commit the action
//     const committedDir = accumulated.current > 0 ? 1 : -1;
//     accumulated.current = 0;
//     isCoolingDown.current = true;
//     setTimeout(() => { isCoolingDown.current = false; }, COOLDOWN_MS);
//     // ───────────────────────────────────────────────────────────────────

//     if (committedDir > 0) {
//       if (stepRef.current < totalSteps - 1) {
//         onNextRef.current();
//       } else {
//         scrollLock.unlock();
//         onExitFwdRef.current();
//       }
//     } else {
//       if (stepRef.current > 0) {
//         onPrevRef.current();
//       } else {
//         scrollLock.unlock();
//         onExitBwdRef.current();
//       }
//     }
//   }, [totalSteps]);

//   useEffect(() => {
//     if (active) {
//       accumulated.current = 0;            // reset accumulator when section becomes active
//       isCoolingDown.current = false;
//       scrollLock.lock(handleScroll);
//     } else {
//       scrollLock.unlock();
//     }
//     return () => { scrollLock.unlock(); };
//   }, [active, handleScroll]);
// }

"use client";

import { useEffect, useCallback, useRef } from "react";
import { scrollLock } from "./useScrollTrigger";

type Options = {
  active: boolean;
  totalSteps: number;
  currentStep: number;
  onNext: () => void;
  onPrev: () => void;
  onExitForward: () => void;
  onExitBackward: () => void;
  stepCooldownMs?: number;
};

/**
 * useSectionScrollLock
 *
 * Locks the global scroll system as soon as `active` becomes true —
 * NO delay, NO isReady state. The lock is registered synchronously.
 *
 * Per-step cooldown gates each action:
 *  - First scroll in any direction fires immediately
 *  - All scroll events blocked for `stepCooldownMs` after each fire
 *  - This makes every step "sticky" regardless of scroll speed
 *
 * Entry cooldown:
 *  - On mount/activation, a short entry cooldown prevents the same
 *    scroll gesture that triggered the page transition from also
 *    immediately firing the first internal step.
 */
export function useSectionScrollLock({
  active,
  totalSteps,
  currentStep,
  onNext,
  onPrev,
  onExitForward,
  onExitBackward,
  stepCooldownMs = 1500,
}: Options) {
  const stepRef = useRef(currentStep);
  const onNextRef = useRef(onNext);
  const onPrevRef = useRef(onPrev);
  const onExitFwdRef = useRef(onExitForward);
  const onExitBwdRef = useRef(onExitBackward);
  const totalStepsRef = useRef(totalSteps);

  useEffect(() => { stepRef.current = currentStep; }, [currentStep]);
  useEffect(() => { onNextRef.current = onNext; }, [onNext]);
  useEffect(() => { onPrevRef.current = onPrev; }, [onPrev]);
  useEffect(() => { onExitFwdRef.current = onExitForward; }, [onExitForward]);
  useEffect(() => { onExitBwdRef.current = onExitBackward; }, [onExitBackward]);
  useEffect(() => { totalStepsRef.current = totalSteps; }, [totalSteps]);

  // Gate: true = ignore all incoming scroll events
  const isCooling = useRef(false);
  const cooldownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startCooldown = useCallback(() => {
    if (cooldownTimer.current) clearTimeout(cooldownTimer.current);
    isCooling.current = true;
    cooldownTimer.current = setTimeout(() => {
      isCooling.current = false;
    }, stepCooldownMs);
  }, [stepCooldownMs]);

  const handleScroll = useCallback((dir: 1 | -1) => {
    // Hard gate — drop everything during cooldown
    if (isCooling.current) return;

    // Fire immediately, then start cooldown
    startCooldown();

    if (dir > 0) {
      if (stepRef.current < totalStepsRef.current - 1) {
        onNextRef.current();
      } else {
        // Done — hand off forward, clear cooldown so page system isn't gated
        if (cooldownTimer.current) clearTimeout(cooldownTimer.current);
        isCooling.current = false;
        scrollLock.unlock();
        onExitFwdRef.current();
      }
    } else {
      if (stepRef.current > 0) {
        onPrevRef.current();
      } else {
        if (cooldownTimer.current) clearTimeout(cooldownTimer.current);
        isCooling.current = false;
        scrollLock.unlock();
        onExitBwdRef.current();
      }
    }
  }, [startCooldown]);

  useEffect(() => {
    if (!active) {
      scrollLock.unlock();
      if (cooldownTimer.current) clearTimeout(cooldownTimer.current);
      isCooling.current = false;
      return;
    }

    // Lock immediately — no delay, no isReady
    isCooling.current = false;
    scrollLock.lock(handleScroll);

    // Entry cooldown: prevent the page-transition scroll from firing step 1
    // This replaces the old isReady/650ms delay approach
    startCooldown();

    return () => {
      scrollLock.unlock();
      if (cooldownTimer.current) clearTimeout(cooldownTimer.current);
      isCooling.current = false;
    };
  }, [active, handleScroll, startCooldown]);
}