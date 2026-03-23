"use client";
import React, { useRef, useState, useEffect } from "react";
import background from "@/assets/sunny-day.png";
import Image from "next/image";
import { roxter, syne } from "@/utils/fonts";
import { motion, useMotionValueEvent } from "framer-motion";
import airoplane from "@/assets/airoplane.png";
import { SITE_NAME, STYLED_SITE_NAME } from "@/lib/constants";

export default function Branding1({ scrollProgress }: { scrollProgress: any }) {
  const [section, setSection] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);
  useMotionValueEvent(scrollProgress, "change", (v: number) => {
    if (v < 0.55) setSection(4);
    else if (v < 0.60) setSection(5);
    else setSection(6);
  });
  return (
    <div
      ref={containerRef}
      className="h-screen flex items-center py-10 justify-center w-full relative overflow-hidden"
    >
      <h1
        className={`font-streach absolute uppercase text-white text-3xl md:text-5xl ${roxter.className}`}
      >
        {SITE_NAME}
      </h1>
      <h1
        className={`font-streach absolute uppercase [-webkit-text-stroke:1px_#ffffff] text-transparent text-3xl md:text-5xl z-50 text-center ${roxter.className}`}
      >
        {SITE_NAME}
      </h1>
      <motion.div
        initial={{ y: -500 }}
        whileInView={
          section === 4
            ? { y: 0 }
            : section === 5
            ? { scale: 1.7, y: 400 }
            : { scale: 2.5, y: 800 }
        }
        transition={{ duration: 1.7, ease: "easeInOut" }}
        viewport={{ once: false }}
        className="absolute -top-70 z-100"
      >
        <img
          src={airoplane.src}
          alt={"Plane"}
          className="rotate-180 h-250 object-cover rotate-y-180!"
        />
      </motion.div>
      <div className="w-full max-h-[75%] px-5 h-full absolute grid grid-cols-2">
        <div className="h-full flex items-start justify-center">
          <motion.span
            initial={{ x: -150 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: false }}
            className={`text-background ${roxter.className} uppercase text-5xl md:text-8xl`}
          >
            fly in
          </motion.span>
        </div>
        <div className="h-full flex flex-col gap-5 items-end text-right justify-end">
          <motion.span
            initial={{ x: 150 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: false }}
            className={`uppercase text-5xl md:text-7xl text-background ${roxter.className}`}
          >
            LUXURY
          </motion.span>
          <motion.span
            initial={{ y: 150 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: false }}
            className={`uppercase text-sm md:text-xl text-background ${syne.className} font-extrabold [font-stretch:normal] [font-variation-settings:'wdth'_100]`}
          >
            luxury that <br /> actually{" "}
            <span className="font-streach">feels</span>
          </motion.span>
        </div>
      </div>
    </div>
  );
}
