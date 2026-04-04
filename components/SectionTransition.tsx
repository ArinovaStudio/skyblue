"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type Props = {
  sectionKey: string | number;
  children: React.ReactNode;
  direction?: 1 | -1;
  duration?: number;
};

const variants = {
  enter: (dir: number) => ({
    opacity: 0,
    y: dir > 0 ? 30 : -30,
  }),
  center: {
    opacity: 1,
    y: 0,
  },
  exit: (dir: number) => ({
    opacity: 0,
    y: dir > 0 ? -30 : 30,
  }),
};

/**
 * SectionTransition
 *
 * Wraps section content in a Framer Motion AnimatePresence so that
 * when the section key changes, the old content fades/slides out
 * and the new content fades/slides in — underneath the curtain wipe.
 *
 * This is optional — you can replace with any animation you like,
 * or remove entirely if the curtain is sufficient.
 */
export default function SectionTransition({
  sectionKey,
  children,
  direction = 1,
  duration = 0.35,
}: Props) {
  return (
    <AnimatePresence mode="wait" custom={direction} initial={false}>
      <motion.div
        key={sectionKey}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          duration,
          ease: [0.32, 0, 0.67, 0],
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}