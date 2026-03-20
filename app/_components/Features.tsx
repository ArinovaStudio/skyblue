"use client";
import React, { useRef } from "react";
import background from "@/assets/sunny-day.png";
import Image from "next/image";
import { roxter, syne } from "@/utils/fonts";
import { motion, useInView } from "framer-motion";
import airoplane from "@/assets/airoplane.png";
import { fetcher, SITE_NAME } from "@/lib/constants";
import { FeatureCard, FeatureCardSkeleton } from "./FeatureCard";
import ErrorLoading from "@/components/ErrorLoading";
import useSWR from "swr";
// const features = [
//   {
//     title: "TRRIP SUPPORT",
//     description:
//       "We offer a full range of services from Fuel to Trip Support, from Permit Provisioning to Air Charters, from 24x7 Flight Dispatch to Aircraft Sales. Each of our services is delivered with attention to detail, ensuring you peace of mind both in the skies and on the ground.",
//   },
//   {
//     title: "AIR CRAFFT BROKERAGE",
//     description:
//       "We provide you with a single source global fuel supply at over 4000 world-wide locations, at discounted rates. Every single fuel uplift is coordinated by our 24x7 Ops Team ensuring prompt service at the bay.",
//   },
//   {
//     title: "AIR CRRAFT MANAGEMENT",
//     description:
//       "We provide comprehensive and personalized Flight Planning and Trip Support Services, such as Fuel Provisioning, Permits, Ground Handling, Catering, Hotel, Transport etc. Our dedicated and experienced 24x7 Ops Team ensures you have a smooth trip that is tailored to your particular needs.",
//   },
//   {
//     title: "creew leasing",
//     description:
//       "We provide comprehensive and personalized Flight Planning and Trip Support Services, such as Fuel Provisioning, Permits, Ground Handling, Catering, Hotel, Transport etc. Our dedicated and experienced 24x7 Ops Team ensures you have a smooth trip that is tailored to your particular needs.",
//   },
// ];
export function transformFeatures(tasks: any[]) {
  return tasks.map((task) => {
    const obj: any = {
      id: task.gid,
      title: "",
      description: "",
    };

    task.custom_fields.forEach((field: any) => {
      if (field.name === "title") {
        obj.title = field.text_value || "";
      }

      if (field.name === "feature_description") {
        obj.description = field.text_value || "";
      }
    });

    return obj;
  });
}
export default function Features() {
  const { data, isLoading, error } = useSWR("/api/features", fetcher);
  const features = data?.data ? transformFeatures(data.data) : [];
  return (
    <div className="h-screen flex items-center justify-center w-full relative overflow-hidden px-4 md:px-6 py-6">
      {/* Background */}
      <Image
        src={background.src}
        alt="Sky background"
        fill
        className="object-cover -z-10"
      />

      {/* Center Title */}
      <h1
        className={`absolute uppercase text-white text-sm sm:text-2xl md:text-3xl ${roxter.className}`}
      >
        {SITE_NAME}
      </h1>

      <h1
        className={`absolute uppercase [-webkit-text-stroke:1px_#ffffff] text-transparent text-sm sm:text-2xl md:text-3xl z-50 text-center ${roxter.className}`}
      >
        {SITE_NAME}
      </h1>

      {/* Airplane */}
      <motion.div
        initial={{ scale: 0, x: -40 }}
        whileInView={{ x: 0, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="absolute"
      >
        <img
          src={airoplane.src}
          alt="Plane"
          className="h-20 w-20 sm:h-32 sm:w-32 md:h-40 md:w-40 rotate-180 rotate-y-180!"
        />
      </motion.div>

      {/* Grid */}
      <ErrorLoading
        loading={isLoading}
        error={error}
        loadingCard={FeatureCardSkeleton}
        loadingCount={4}
        loadingCols={2}
        loadingRows={2}
        className="w-full overflow-scroll"
        loaderClassName="mx-auto max-w-[1200px] place-items-center w-full min-h-[400px]"
      >
        <div className="mx-auto max-w-[1200px] max-md:py-16 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 md:gap-x-20 w-full h-full items-center">
          {features.map((feature: any, index: number) => {
            return <FeatureCard key={index} index={index} feature={feature} />;
          })}
        </div>
      </ErrorLoading>
    </div>
  );
}

