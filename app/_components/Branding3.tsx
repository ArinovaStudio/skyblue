"use client";
import React, { useRef } from "react";
import background from "@/assets/sunny-day.png";
import Image from "next/image";
import { roxter, syne } from "@/utils/fonts";
import { motion, useInView } from "framer-motion";
import airoplane from "@/assets/airoplane.png";
import { SITE_NAME, STYLED_SITE_NAME } from "@/lib/constants";
export default function Branding3() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.6 });
  return (
    <div
      ref={containerRef}
      className="h-screen flex items-center py-10 justify-center w-full relative overflow-hidden"
    >
      <Image
        src={background.src}
        alt="Sky background"
        fill
        className="w-full h-full -z-10 object-fit"
      />
      <motion.h1
        initial={{ opacity: 1, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className={`font-streach absolute z-[-1] uppercase text-white text-4xl ${roxter.className}`}
      >
        {SITE_NAME}
      </motion.h1>
      <motion.h1
        initial={{ opacity: 1, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className={`font-streach absolute z-[-1] uppercase [-webkit-text-stroke:1px_#ffffff] text-transparent text-4xl z-50 text-center ${roxter.className}`}
      >
        {SITE_NAME}
      </motion.h1>
      <div className="absolute z-10">
        <motion.img
          initial={{ y: 500 }}
          animate={{ y: isInView ? 0 : 500 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          src={airoplane.src}
          alt={"Plane"}
          className="rotate-180 scale-160 rotate-y-180!"
        />
      </div>
      <div className="w-full md:max-h-[75%] px-5 pt-12 gap-24 h-full absolute grid grid-cols-2">
        <div className="h-full flex items-start justify-center">
          <span className={`text-background ${roxter.className} uppercase text-8xl`}>fly in</span>
        </div>
        <div className="h-full flex flex-col gap-5 items-end text-right justify-end">
          <span className={`uppercase text-7xl text-background ${roxter.className}`}>LUXURY</span>
          <span className={`uppercase text-xl text-background ${syne.className} font-extrabold [font-stretch:normal] [font-variation-settings:'wdth'_100]`}>luxury that <br/> actually <span className="font-streach">feels</span></span>
        </div>
      </div>
    </div>
  );
}
