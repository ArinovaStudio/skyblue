"use client";
import React, { useRef } from "react";
import background from "@/assets/sunny-day.png";
import Image from "next/image";
import { roxter, syne } from "@/utils/fonts";
import { motion, useInView } from "framer-motion";
import airoplane from "@/assets/airoplane.png";
import { SITE_NAME } from "@/lib/constants";
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
export default function Features() {
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

      <h1
        className={`font-streach absolute uppercase text-white text-3xl ${roxter.className}`}
      >
        {SITE_NAME}
      </h1>
      <h1
        className={`font-streach absolute uppercase [-webkit-text-stroke:1px_#ffffff] text-transparent text-3xl z-50 text-center ${roxter.className}`}
      >
        {SITE_NAME}
      </h1>
      <motion.div
        initial={{ scale: 0, x: -40 }}
        whileInView={{ x: 0, scale: 1 }}
        transition={{ duration: 1,delay: 1 }}
        viewport={{once:true}}
        className="absolute"
      >
        <img
          src={airoplane.src}
          alt={"Plane"}
          className="h-50 w-50 rotate-180 rotate-y-180!"
        />
      </motion.div>

      <div className="max-w-[1200px] gap-10 gap-x-20 grid md:grid-cols-2 w-full h-full">
        {features.map((feature, index) => {
          return <FeatureCard key={index} index={index} feature={feature} />;
        })}
      </div>
    </div>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  index: number;
  feature: { title: string; description: string };
}) {
  return (
    <motion.div
      className="h-full flex flex-col justify-center items-start space-y-5 w-full"
      initial={{ opacity: 0, x: index % 2 ? 200 : -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
    >
      <motion.div
        className={`text-background font-bold text-xl ${roxter.className}`}
        initial={{ opacity: 0, x: index % 2 ? 10 : -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
      >
        {feature.title}
      </motion.div>

      <motion.div
        className="w-20 h-[1.5px] bg-white"
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: 80 }}
        transition={{ delay: 1, duration: 0.5 }}
        viewport={{ once: true }}
      />

      <motion.div
        className={`text-background max-w-lg text-lg font-thin! ${syne.className}`}
        initial={{ opacity: 0, x: index % 2 ? 10 : -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
      >
        {feature.description}
      </motion.div>
    </motion.div>
  );
}
