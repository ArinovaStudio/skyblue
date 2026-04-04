"use client";

import { AnimatePresence, motion } from "framer-motion";

type BgConfig = {
  color?: string;
  gradient?: string;
  image?: string;
  overlay?: string;
};

type Props = {
  sectionIndex: number;
  backgrounds: BgConfig[];
  crossfadeDuration?: number; // seconds (default 0.4)
};

function getStyle(bg: BgConfig): React.CSSProperties {
  return {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    ...(bg.image
      ? { backgroundImage: bg.image }
      : bg.gradient
      ? { backgroundImage: bg.gradient }
      : { backgroundColor: bg.color ?? "#87ceeb" }),
  };
}

export default function BackgroundTransition({
  sectionIndex,
  backgrounds,
  crossfadeDuration = 0.4,
}: Props) {
  const safeBg =
    backgrounds[sectionIndex] ??
    backgrounds[Math.min(sectionIndex, backgrounds.length - 1)] ??
    { color: "#87ceeb" };

  return (
    <>
      {/* Persistent base — always opaque, never fades, blocks any black void */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -3,
          ...getStyle(safeBg),
        }}
      />

      {/* Animated layer — new bg fades in on top */}
      <AnimatePresence mode="sync">
        <motion.div
          key={sectionIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: crossfadeDuration, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: -2,
            ...getStyle(safeBg),
          }}
        />
      </AnimatePresence>

      {safeBg.overlay && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: -1,
            backgroundColor: safeBg.overlay,
            pointerEvents: "none",
          }}
        />
      )}
    </>
  );
}