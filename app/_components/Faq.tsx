"use client";
import { fetcher } from "@/lib/constants";
import { motion, useMotionValueEvent, useScroll, useAnimationFrame, useMotionValue } from "framer-motion";
import React, { useState } from "react";
import useSWR from "swr";
import { FAQCard, FAQCardSkeleton } from "./FaqCard";
import ErrorLoading from "@/components/ErrorLoading";
import adani from "@/assets/logo/adani.png";
import airindia from "@/assets/logo/airindia.png";
import reliance from "@/assets/logo/reliance.png";
import adityabirla from "@/assets/logo/aditya-birla.png";
import falcon from "@/assets/logo/falcon.png";
import bharatpetrol from "@/assets/logo/bharat-petrol.png";
import chinaaviation from "@/assets/logo/china-Aviation.png";
import hp from "@/assets/logo/hp.png";
import jetaviation from "@/assets/logo/jet-aviation.png";
import mai from "@/assets/logo/mai.png";
import regent from "@/assets/logo/regent.png";
import vista from "@/assets/logo/vista-jet.png";

const clients = [
  { id: 1, name: "Adani", logo: adani.src },
  { id: 2, name: "Adani", logo: airindia.src },
  { id: 3, name: "Adani", logo: reliance.src },
  { id: 4, name: "Adani", logo: adityabirla.src },
  { id: 5, name: "Adani", logo: falcon.src },
  { id: 6, name: "Adani", logo: bharatpetrol.src },
  { id: 7, name: "Adani", logo: chinaaviation.src },
  { id: 8, name: "Adani", logo: hp.src },
  { id: 9, name: "Adani", logo: jetaviation.src },
  { id: 10, name: "Adani", logo: mai.src },
  { id: 11, name: "Adani", logo: regent.src },
  { id: 12, name: "Adani", logo: vista.src },
];
export function transformFaqs(tasks: any[]) {
  return tasks.map((task) => {
    const obj: any = {
      id: task.gid,
    };

    task.custom_fields.forEach((field: any) => {
      if (field.type === "text") {
        obj[field.name] = field.text_value;
      }
    });

    return obj;
  });
}
function Faq({ ref }: { ref?: any }) {
  const [isOpen, setIsOpen] = useState<null | number>(null);
  const { data, isLoading, error } = useSWR("/api/faqs", fetcher);
  const faqs = data?.data ? transformFaqs(data.data) : [];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });
  // Removed expand logic to prevent disruptive layout jumps during section transitions

  const x = useMotionValue(0);

  const speed = 50; // px per second (tune this)

  useAnimationFrame((t, delta) => {
    const moveBy = (speed * delta) / 1000;
    x.set(x.get() - moveBy);

    // reset manually when half passed (no visual jump)
    if (x.get() <= -window.innerWidth) {
      x.set(0);
    }
  });

  return (
    <div className="flex h-screen flex-col items-center py-20 md:pt-30 px-3 md:px-6 gap-6">
      {/* Top Section */}
      <div className="max-w-[1300px] overflow-auto md:h-[460px] w-full flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
        {/* FAQ */}
        <div className="w-full lg:w-[55%]">
          <h1 className="uppercase font-roxter text-2xl md:text-4xl text-gray-300">
            skyblue
          </h1>
          <p className="uppercase font-syne text-xs md:text-base text-gray-600 font-bold mt-1">
            A BETTER WAY TO FLY
          </p>

          <div className="flex flex-col  gap-4 mt-6">
            {/* {faqData.map((item, i) => (
              <FAQCard item={item} i={i} isOpen={isOpen} setIsOpen={setIsOpen}/>
            ))} */}
            <ErrorLoading
              error={error}
              emptyMessage="No Faqs found"
              loadingCard={FAQCardSkeleton}
              loading={isLoading}
              dataLength={faqs.length}
              loadingCount={4}
              loadingRows={4}
              loadingCols={1}
            >
              {faqs.map((faq, i) => {
                return (
                  <FAQCard
                    key={i}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    i={i}
                    item={faq}
                  />
                );
              })}
            </ErrorLoading>
          </div>
        </div>

        {/* Image - Simplified transition */}
        <motion.div
          layout
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ transformOrigin: "center center" }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
          className="hidden md:flex flex-1 w-full md:w-[45%] md:max-h-[450px] relative overflow-hidden justify-center items-center rounded-2xl bg-gray-900/10 backdrop-blur-sm shadow-2xl"
        >
          <div className="w-full h-full">
            <img
              src="https://picsum.photos/1080/1080"
              alt="FAQ illustration"
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

      </div>

      {/* Clients */}
      <div>
        <h1 className="font-streach mt-2 uppercase text-2xl md:text-4xl text-center">
          our clients
        </h1>

        {/* <div className="overflow-hidden w-full max-w-[1300px]">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            }}
          >
            {[...clients, ...clients].map((item, i) => (
              <div
                key={item.id + "-" + i}
                className="min-w-[120px] h-20 flex items-center justify-center"
              >
                <img
                  src={typeof item.logo === "string" ? item.logo : item.logo.src}
                  alt={item.name}
                  className="h-full w-full object-contain p-2"
                />
              </div>
            ))}
          </motion.div>
        </div> */}

        <div className="overflow-hidden w-full max-w-[1300px]">
      <motion.div style={{ x }} className="flex gap-4">
        {[...clients, ...clients].map((item: any, i: number) => (
          <div
            key={item.id + "-" + i}
            className="min-w-[120px] h-20 flex items-center justify-center"
          >
            <img
              src={typeof item.logo === "string" ? item.logo : item.logo.src}
              alt={item.name}
              className="h-full w-full object-contain p-2"
            />
          </div>
        ))}
      </motion.div>
    </div>
      </div>
    </div>
  );
}

export default Faq;
