"use client";
import Image from "next/image";
import background from "@/assets/sky-bg.png";
import PlaneWindow from "@/assets/plane-window.png";
import LiquidGlass from "@/elements/LiquidGlass";
import Button from "@/elements/Button";
import { Plane } from "lucide-react";
import {
  delay,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { SITE_NAME } from "@/lib/constants";
import { roxter, syne } from "@/utils/fonts";

import { div } from "framer-motion/client";

function Hero2({ scrollProgress }: { scrollProgress: any }) {
  const [onceDone,setOnceDone] = useState(false);
  const transition = { duration: 1, delay: onceDone ? 0:1 };
  const [isExpanded, setIsExpanded] = useState(false);
  useMotionValueEvent(scrollProgress, "change", (v: number) => {
    if (v >= 0.17 && v <= 0.24) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  });
  return (
    <div className="h-full relative flex items-center justify-center overflow-hidden">
      <motion.img
        src={PlaneWindow.src}
        initial={{scale: 5}}
        alt="Plane window"
        onViewportEnter={()=>{setOnceDone(true)}}
        transition={transition}
        animate={{ scale: isExpanded ? 1 : 5 }}
        viewport={{ once: false }}
        className="w-full h-full -z-[5] absolute object-cover"
      />
      <div className="absolute flex md:grid md:grid-cols-3 justify-between items-center text-background px-5 w-full h-full">
        <motion.div
          viewport={{ once: false, amount: "some" }}
          initial={{ opacity: 1, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={`flex flex-col max-md:absolute max-md:top-[20%] justify-start uppercase overflow-hidden items-start gap-2 ${roxter.className}`}
        >
          <span className={`text-3xl md:text-8xl`}>book</span>
          <span className={`text-xl md:text-5xl`}>private jet</span>
        </motion.div>
        <motion.div
          viewport={{ once: false, amount: "some" }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`overflow-hidden max-md:absolute left-23 text-center text-3xl ${roxter.className}`}
        >
          {SITE_NAME}
        </motion.div>
        <div className="flex max-md:max-h-[500px] flex-col justify-between overflow-hidden items-end gap-5">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            viewport={{ once: false, amount: "some" }}
            className="uppercase max-md:pt-6 font-streach flex flex-col items-start md:pr-5"
          >
            <span className="text-3xl md:text-5xl">10+</span>{" "}
            <span className="text-xl md:text-3xl">jeets</span>
          </motion.span>
          <div className="h-100 w-10">
            <span
              className={`uppercase flex items-center whitespace-nowrap text-background/90 gap-5 rotate-90`}
            >
              <div className="min-w-10 md:min-w-30 border-1 border-background/40" />{" "}
              Scroll down{" "}
              <div className="min-w-10 md:min-w-30 border-1 border-background/40" />
            </span>
          </div>
          <motion.span
            initial={{ x: 20 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: "some" }}
            className={`${syne.className} max-md:bottom-12 max-md:left-0 max-md:text-center w-full max-w-md text-right font-thin! text-lg pr-5`}
          >
            SkyAero enables seamless private jet bookings —connecting you to
            luxury aircraft, global destinations, and uncompromising comfort.
          </motion.span>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
