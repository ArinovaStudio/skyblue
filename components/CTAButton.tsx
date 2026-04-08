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
    //   <div className="fixed z-[999] bottom-10 left-1/2 -translate-x-1/2  px-4">
    //     <div
    //       className={`p-1 shadow-md bg-white ${
    //         opened ? "rounded-xl " : "rounded-full"
    //       }`}
    //     >
    //       <motion.div
    //         transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
    //         className="flex flex-col relative no-scrollbar justify-center overflow-auto items-center gap-2 max-w-[95vw] prevent"
    //         // animate={{
    //         //   width: opened
    //         //     ? saved
    //         //       ? isMobile
    //         //         ? "95vw"
    //         //         : "72rem"
    //         //       : isMobile
    //         //         ? "90vw"
    //         //         : "36rem"
    //         //     : isMobile
    //         //       ? "65vw"
    //         //       : "17rem",

    //         //   height: opened
    //         //     ? saved
    //         //       ? isMobile
    //         //         ? "90vh"
    //         //         : "85vh"
    //         //       : isMobile
    //         //         ? "62vh"
    //         //         : "50vh"
    //         //     : isMobile
    //         //       ? "2.8rem"
    //         //       : "3.7rem",
    //         // }}
    //         animate={{
    //   width: opened
    //     ? "auto"
    //     : isMobile ? "65vw" : "17rem",

    //   height: opened
    //     ? "auto"
    //     : isMobile ? "2.8rem" : "3.7rem",
    // }}
    //         data-lenis-prevent
    //         data-lenis-prevent-touch
    //       >
    //         <ExpandingFormModal
    //           handleNext={handleNext}
    //           opened={opened}
    //           saved={saved}
    //           handleClose={handleClose}
    //         />
    //         <div
    //           onClick={() => {
    //             if (!opened) {
    //               setOpened(true);
    //               return;
    //             }
    //           }}
    //           className={`flex items-center gap-2 flex-1 max-h-[50px] h-full ${opened && "hidden"}`}
    //         >
    //           <Button className={`max-md:text-xs whitespace-nowrap px-5 py-3.5`}>
    //             Plan a flight
    //           </Button>

    //           <Button className="max-md:text-xs text-sm p-2 md:p-4" varient={"dark"}>
    //             <Plane size={18} />
    //           </Button>
    //         </div>
    //       </motion.div>
    //     </div>
    //   </div>
    <div className="fixed z-[999] bottom-6 left-1/2 -translate-x-1/2 px-4 w-full flex justify-center">
      <motion.div
        layout
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="bg-white shadow-xl overflow-hidden"
        style={{
          borderRadius: opened ? "16px" : "999px",
        }}
        animate={{
          width: opened
            ? saved
              ? "min(95vw, 72rem)"
              : "min(95vw, 36rem)"
            : "min(90vw, 17rem)",

          height: opened
            ? saved
              ? "min(85vh, 700px)"
              : "min(65vh, 400px)"
            : "3.5rem",
        }}
        data-lenis-prevent
        data-lenis-prevent-touch
      >
        {/* CONTENT WRAPPER (IMPORTANT FOR SCROLL) */}
        <div className="h-full w-full overflow-hidden flex flex-col">
          {/* FORM (SCROLLABLE ONLY WHEN OPEN) */}
          {opened && (
            <div className="flex-1 overflow-y-auto no-scrollbar p-4 sm:p-6">
              <ExpandingFormModal
                handleNext={handleNext}
                opened={opened}
                saved={saved}
                handleClose={handleClose}
              />
            </div>
          )}

          {/* CLOSED STATE BUTTON */}
          {!opened && (
            <div
              onClick={() => setOpened(true)}
              className="flex items-center justify-center gap-2 h-full px-3 cursor-pointer"
            >
              <Button className="max-md:text-xs whitespace-nowrap px-5 py-2.5">
                Plan a flight
              </Button>
              <Button
                className="max-md:text-xs text-sm p-2 md:p-4"
                varient={"dark"}
              >
                <Plane size={18} />
              </Button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
