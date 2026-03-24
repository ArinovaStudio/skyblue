"use client";
import Button from "@/elements/Button";
import LiquidGlass from "@/elements/LiquidGlass";
import { motion } from "framer-motion";
import { Plane, X } from "lucide-react";
import { ExpandingFormModal } from "./CustomExpandingFormModal";
import { useState } from "react";
import useMobile from "@/hooks/useMobile";
import { Button as SButton } from "./ui/button";
export default function CTAButton() {
  const [saved, setSaved] = useState(false);
  const [opened, setOpened] = useState(false);
  const isMobile = useMobile();
  const handleNext = () => {
    if (!saved) {
      setSaved(true);
    } else {
      setSaved(false);
      setOpened(false);
    }
  };
  const handleClose = () => {
    setSaved(false);
    setOpened(false);
  };
  return (
    <div className="fixed z-[999] bottom-10 left-1/2 -translate-x-1/2  px-4">
      <div
        className={`p-1 shadow-md bg-white ${
          opened ? "rounded-xl " : "rounded-full"
        }`}
      >
        <motion.div
          layout
          transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
          className="flex flex-col relative justify-center overflow-hidden items-center gap-2"
          animate={{
            width: opened
              ? saved
                ? "72rem"
                : "36rem"
              : isMobile
              ? "13rem"
              : "17rem",
            height: opened
              ? saved
                ? "80vh"
                : "50vh"
              : isMobile
              ? "2.5rem"
              : "3.7rem",
          }}
        >
          {opened && (
            <SButton
              type="button"
              size={"icon"}
              onClick={handleClose}
              className="absolute right-5 top-5"
            >
              <X />
            </SButton>
          )}
          <ExpandingFormModal
            handleNext={handleNext}
            opened={opened}
            saved={saved}
          />
          <div
            onClick={() => {
              if (!opened) {
                setOpened(true);
                return;
              }
            }}
            className={`flex items-center gap-2 flex-1 max-h-[50px] h-full ${
              opened || saved ? "absolute bottom-2" : ""
            }`}
          >
            <Button className="max-md:text-xs whitespace-nowrap px-5 py-3.5">
              Plan a flight
            </Button>

            <Button className="max-md:text-xs p-2 md:p-4" varient={"dark"}>
              <Plane size={18} />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
