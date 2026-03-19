"use client";
import LiquidGlass from "@/elements/LiquidGlass";
import React from "react";
import { motion } from "framer-motion";
import Button from "@/elements/Button";
import { Plane } from "lucide-react";
export default function CTAButton() {
  return (
    <div className="fixed z-[999] bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4">
      <LiquidGlass className="p-1">
        <motion.div
          initial={{ opacity: 0, y: -80, x: -80 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center overflow-hidden items-center gap-2"
        >
          <Button className="max-md:text-xs whitespace-nowrap px-5 py-3.5">Plan a flight</Button>
          <Button className="max-md:text-xs p-4" varient={"dark"}>
            <Plane size={18} />
          </Button>
        </motion.div>
      </LiquidGlass>
    </div>
  );
}
