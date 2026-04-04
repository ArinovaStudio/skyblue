"use client";

import React from "react";
import CurtainTransition from "./CurtainTransition";

type Props = {
  children: React.ReactNode;
  isTransitioning: boolean;
  direction: 1 | -1;
  animationMs?: number;
  curtainColor?: string;
  className?: string;
};

/**
 * ScrollTriggerLayout
 *
 * A fixed full-screen container. No scroll div needed anymore —
 * useScrollTrigger listens to wheel/touch/keyboard on window directly.
 *
 * Structure:
 *  ┌─ fixed 100vw × 100vh ──────────────────────────────────────┐
 *  │  <BackgroundTransition />   ← absolute, behind everything  │
 *  │  <children />               ← your section content        │
 *  │  <CurtainTransition />      ← wipe overlay on top         │
 *  └────────────────────────────────────────────────────────────┘
 */
export default function ScrollTriggerLayout({
  children,
  isTransitioning,
  direction,
  animationMs = 500,
  curtainColor,
  className = "",
}: Props) {
  return (
    <div
      className={className}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {children}
      <CurtainTransition
        isTransitioning={isTransitioning}
        direction={direction}
        animationMs={animationMs}
        color={curtainColor}
      />
    </div>
  );
}