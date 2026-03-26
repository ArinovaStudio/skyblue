"use client";
import React, { useEffect, useState } from "react";
import LoadingPlane from "@/assets/plane-loading.png";
import Image from "next/image";
import { syne } from "@/utils/fonts";

export default function Loader() {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 10; // smooth random loading

      if (value >= 100) {
        value = 100;
        clearInterval(interval);
      }

      setProgress(Math.floor(value));
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background fixed top-0 w-full flex justify-center z-[9999] items-center">
      <div className="flex flex-col justify-center items-center gap-1">
        {/* <div className="relative rotate-y-180 h-25 w-35">
          <Image priority src={LoadingPlane} alt={"Loading..."} fill sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute right-[100%] scale-103 right-100 left-2 top-13  bottom-0 bg-gradient-to-br w-28 h-6 rounded-full from-gray-700 to-gray-900 opacity-[0.2] blur-xs z-150" />
        </div> */}
        <div className="relative h-25 w-35 flex items-center justify-center">

          <span className="text-4xl md:text-5xl font-extrabold tracking-tight tabular-nums">
            {progress}%
          </span>

          {/* subtle shadow/glow (optional but nice) */}
          {/* <div className="absolute left-2 top-13 w-28 h-6 rounded-full 
    bg-gradient-to-br from-gray-700 to-gray-900 
    opacity-[0.2] blur-sm" /> */}

        </div>

        {/* <span className={`uppercase bg-orange-500 text-5xl text-gray-500 bg-clip-text font-extrabold ${syne.className}`}>Loading</span> */}
        <div className="flex flex-col items-center gap-2 w-[220px]">

          {/* TEXT ROW */}
          <div className="flex w-full justify-between items-end">

            <h1 className={`uppercase text-3xl font-extrabold ${syne.className}`}>
              Loading
            </h1>

            {/* <span className="text-lg font-semibold opacity-70">
              {progress}%
            </span> */}

          </div>

          {/* PROGRESS BAR */}
          <div className="w-full h-[6px] bg-gray-700/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
