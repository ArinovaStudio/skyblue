"use client";

import cloud from "@/assets/cloud.png";
import { STYLED_SITE_NAME } from "@/lib/constants";
import {
  motion,
  useAnimation,
  useInView,
  useTransform
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Hero({scrollProgress}: {scrollProgress: any}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();
  const hasMounted = useRef(false);
  const [delay, setDelay] = useState(false);
  const transition = { duration: 1, delay: delay ? 0 : 1 };
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1
      });
      if (!delay) {
        setDelay(true);
      }
      console.log("In View");
    } else {
      controls.start({
        scale: 0.2,
      });
      console.log("Out Of View");
    }
  }, [isInView, controls]);
  const viewport = { once: false};
  const textValue = useTransform(scrollProgress,[0,0.25],[1,0.4]);
  return (
    <div ref={ref} className="relative h-full overflow-hidden">

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="relative">
          <motion.h1
            viewport={viewport}
            initial={{ opacity: 1, y: -500 }}
            animate={controls}
            transition={transition}
            style={{scale: textValue}}
            className="font-streach absolute uppercase text-white text-[2.6rem] md:text-[9rem]"
          >
            {STYLED_SITE_NAME}
          </motion.h1>
          <motion.h1
            viewport={viewport}
            style={{scale: textValue}}
            initial={{ opacity: 1, y: -500 }}
            animate={controls}
            transition={transition}
            className="font-streach absolute uppercase [-webkit-text-stroke:4px_#ffffff] text-transparent relative text-[2.6rem] md:text-[9rem] z-50 text-center"
          >
            {STYLED_SITE_NAME}
          </motion.h1>
        </div>
        <div className="w-full h-2/3 absolute bottom-0">
          <motion.img
            viewport={viewport}
            src={cloud.src}
            alt="plane"
            initial={{ opacity: 1, y: 540, filter: "brightness(50%)" }}
            animate={{ opacity: 1, y: 0, filter: "brightness(105%)" }}
            exit={{opacity: 0}}
            transition={transition}
            className="absolute max-md:object-cover bottom-0 h-150 w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
