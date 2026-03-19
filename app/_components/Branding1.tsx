"use client";
import React, { useRef, useState } from "react";
import background from "@/assets/sunny-day.png";
import Image from "next/image";
import { roxter, syne } from "@/utils/fonts";
import { motion, useInView, useMotionValueEvent } from "framer-motion";
import airoplane from "@/assets/airoplane.png";
import { SITE_NAME, STYLED_SITE_NAME } from "@/lib/constants";
const features = [
  {
    title: "TRRIP SUPPORT",
    description:
      "We offer a full range of services from Fuel to Trip Support, from Permit Provisioning to Air Charters, from 24x7 Flight Dispatch to Aircraft Sales. Each of our services is delivered with attention to detail, ensuring you peace of mind both in the skies and on the ground.",
  },
  {
    title: "AIR CRAFFT BROKERAGE",
    description:
      "We provide you with a single source global fuel supply at over 4000 world-wide locations, at discounted rates. Every single fuel uplift is coordinated by our 24x7 Ops Team ensuring prompt service at the bay.",
  },
  {
    title: "AIR CRRAFT MANAGEMENT",
    description:
      "We provide comprehensive and personalized Flight Planning and Trip Support Services, such as Fuel Provisioning, Permits, Ground Handling, Catering, Hotel, Transport etc. Our dedicated and experienced 24x7 Ops Team ensures you have a smooth trip that is tailored to your particular needs.",
  },
  {
    title: "creew leasing",
    description:
      "We provide comprehensive and personalized Flight Planning and Trip Support Services, such as Fuel Provisioning, Permits, Ground Handling, Catering, Hotel, Transport etc. Our dedicated and experienced 24x7 Ops Team ensures you have a smooth trip that is tailored to your particular needs.",
  },
];
export default function Branding1({ scrollProgress }: { scrollProgress: any }) {
  const [section, setSection] = useState(4);
  const [isDone, setIsDone] = useState(false);
  useMotionValueEvent(scrollProgress, "change", (v: number) => {
    if (v < 0.5) setSection(4);
    else if (v < 0.6) setSection(5);
    else setSection(6);
  });
  return (
    <div className="h-screen flex items-center py-10 justify-center w-full relative overflow-hidden">
      <h1
        className={`font-streach absolute uppercase text-white text-5xl ${roxter.className}`}
      >
        {SITE_NAME}
      </h1>
      <h1
        className={`font-streach absolute uppercase [-webkit-text-stroke:1px_#ffffff] text-transparent text-5xl z-50 text-center ${roxter.className}`}
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
            : { y: 1100, scale: 2.5 }
        }
        onViewportEnter={() => {
          setIsDone(true);
        }}
        transition={{ duration: 1, delay: isDone ? 0 : 1 }}
        viewport={{ once: true }}
        className="absolute -top-70 z-100"
      >
        <img
          src={airoplane.src}
          alt={"Plane"}
          className="rotate-180 h-250 object-cover rotate-y-180!"
        />
      </motion.div>
      <div className="w-full md:max-h-[75%] px-5 h-full absolute grid grid-cols-2">
        <div className="h-full flex items-start justify-center">
          <motion.span
            initial={{ x: -350 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className={`text-background ${roxter.className} uppercase text-8xl`}
          >
            fly in
          </motion.span>
        </div>
        <div className="h-full flex flex-col gap-5 items-end text-right justify-end">
          <motion.span
            initial={{ x: 350 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className={`uppercase text-7xl text-background ${roxter.className}`}
          >
            LUXURY
          </motion.span>
          <motion.span
            initial={{ y: 150 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className={`uppercase text-xl text-background ${syne.className} font-extrabold [font-stretch:normal] [font-variation-settings:'wdth'_100]`}
          >
            luxury that <br /> actually{" "}
            <span className="font-streach">feels</span>
          </motion.span>
        </div>
      </div>
    </div>
  );
}
