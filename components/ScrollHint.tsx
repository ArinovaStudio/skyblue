"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
  visible: boolean;
  label?: string;
  color?: string;
};

/**
 * ScrollHint
 *
 * Animated chevron/scroll hint shown on the first section.
 * Fades out when the user reaches any section beyond the first.
 */
export default function ScrollHint({
  visible,
  label = "scroll",
  color = "rgba(255,255,255,0.5)",
}: Props) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="scroll-hint"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4 }}
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 36,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            zIndex: 30,
            color,
            userSelect: "none",
          }}
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
            }}
          >
            <div
              style={{
                width: 1,
                height: 24,
                backgroundColor: color,
              }}
            />
            {/* chevron arrow */}
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path
                d="M1 1L5 5L9 1"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
          <span
            style={{
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "inherit",
            }}
          >
            {label}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}