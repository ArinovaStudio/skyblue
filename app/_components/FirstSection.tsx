"use client";
import { useRef, useState } from "react";

import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Hero from "./Hero";
import Hero2 from "./Hero2";

export default function FirstSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [section, setSection] = useState(1);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v >= 0 && v <= 0.3) {
      setSection(1);
    } else {
      setSection(2);
    }
  });
  return (
    <div ref={ref} className="h-[280vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        {section === 1 ? (
          <Hero scrollProgress={scrollYProgress} />
        ) : (
          <Hero2 scrollProgress={scrollYProgress} />
        )}
      </div>

    </div>
  );
}
