// "use client";

// import airoplane from "@/assets/airoplane.png";
// import cloud from "@/assets/cloud.png";
// import PlaneWindow from "@/assets/plane-window.png";
// import plane from "@/assets/plane.png";
// import background from "@/assets/sky-bg.png";
// import SunnyDay from "@/assets/sunny-day.png";
// import Loader from "@/components/Loader";
// import {
//   AnimatePresence,
//   motion,
//   useMotionValueEvent,
//   useScroll,
// } from "framer-motion";
// import dynamic from "next/dynamic";
// import { useEffect, useRef, useState } from "react";
// import CTAButton from "@/components/CTAButton";
// const Navbar = dynamic(() => import("@/components/Navbar"));
// const Hero = dynamic(() => import("@/app/_components/Hero"));
// const Hero2 = dynamic(() => import("../_components/Hero2"));
// const Features = dynamic(() => import("../_components/Features"));
// const Branding1 = dynamic(() => import("../_components/Branding1"));
// const Faq = dynamic(() => import("@/app/_components/Faq"));
// const Footer = dynamic(() => import("@/components/Footer"));

// let images = [
//   background.src,
//   SunnyDay.src,
//   cloud.src,
//   PlaneWindow.src,
//   airoplane.src,
//   "https://picsum.photos/1080/1080",
//   plane.src,
// ];

// export default function Home() {
//   const heroRef = useRef<HTMLElement | null>(null);
//   const hero2Ref = useRef<HTMLElement | null>(null);
//   const featuresRef = useRef<HTMLElement | null>(null);
//   const brandingRef = useRef<HTMLElement | null>(null);
//   const faqRef = useRef<HTMLElement | null>(null);
//   const footerRef = useRef<HTMLElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const sectionRefs = [
//     heroRef,
//     hero2Ref,
//     featuresRef,
//     brandingRef,
//     faqRef,
//     footerRef,
//   ];
//   const [loaded, setLoaded] = useState(false);
//   const { scrollY } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });
//   useEffect(() => {
//     const loadAssets = async () => {
//       await Promise.all(
//         images.map((image) => {
//           return new Promise<void>((resolve, reject) => {
//             const img = new Image();
//             img.src = image;

//             img.onload = () => resolve();
//             img.onerror = () => reject(); // good practice
//           });
//         })
//       );

//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       setLoaded(true);
//     };

//     loadAssets();
//   }, []);
//   const [section, setSection] = useState(1);
//   const lastSectionChange = useRef(0);
//   const THROTTLE_MS = 600; // minimum time between section changes
//   const isJumping = useRef(false);

//   useEffect(() => {
//     // We no longer need manual wheel/touch jump logic as we've enabled CSS Scroll Snapping.
//     // This provides the best experience across all devices (Trackpad, Mouse, Mobile).
//   }, []);

//   useMotionValueEvent(scrollY, "change", (y) => {
//     const triggerLine = y + window.innerHeight * 0.5; // Trigger at center of viewport

//     let newIndex = -1;
//     sectionRefs.forEach((ref, index) => {
//       const sectionEl = ref.current;
//       if (!sectionEl) return;

//       const top = sectionEl.offsetTop;
//       const bottom = top + sectionEl.offsetHeight;

//       if (triggerLine >= top && triggerLine < bottom) {
//         newIndex = index;
//       }
//     });

//     if (newIndex !== -1 && newIndex + 1 !== section) {
//       setSection(newIndex + 1);
//     }
//   });

//   return loaded ? (
//     <>
//       {section !== 6 && <CTAButton />}
//       <Navbar section={section} />
//       <AnimatePresence mode="wait" initial={false}>
//         {section !== 5 && (
//           <motion.img
//             key={[3, 4].includes(section) ? "sunny" : "sky"}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             src={[3, 4].includes(section) ? images[1] : images[0]}
//             className="w-full max-h-screen h-full fixed inset-0 -z-10 object-cover"
//             transition={{ duration: 1, ease: "easeInOut" }}
//           />
//         )}
//       </AnimatePresence>
//       <div ref={containerRef} className="relative">
//         {/* Sticky UI */}
//         <div className="sticky top-0 overflow-hidden">
//           <AnimatePresence mode="popLayout">
//             <motion.div
//               key={section}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.8 }}
//               className="w-full h-full"
//             >
//               {section === 1 && <Hero />}
//               {section === 2 && <Hero2 ref={hero2Ref} />}
//               {section === 3 && <Features />}
//               {section === 4 && <Branding1 ref={brandingRef} />}
//               {section === 5 && <Faq ref={faqRef} />}
//               {section === 6 && <Footer />}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Dummy Sections with Scroll Snapping */}
//         <section
//           ref={sectionRefs[0] as any}
//           className="min-h-screen snap-start snap-always"
//         />

//         <section
//           ref={sectionRefs[1] as any}
//           className="min-h-[120vh] snap-start snap-always" 
//         />

//         <section
//           ref={sectionRefs[2] as any}
//           className="min-h-[120vh] snap-start snap-always"
//         />

//         <section
//           ref={sectionRefs[3] as any}
//           className="min-h-[120vh] snap-start snap-always"
//         />

//         <section
//           ref={sectionRefs[4] as any}
//           className="min-h-[120vh] snap-start snap-always"
//         />

//         <section
//           ref={sectionRefs[5] as any}
//           className="min-h-[120vh] snap-start snap-always"
//         />
//       </div>
//     </>
//   ) : (
//     <>
//       <Loader />
//       <div ref={containerRef}></div>
//     </>
//   );
// }


// // MAINE CODE

"use client";

import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import ScrollTriggerLayout from "@/components/ScrollTriggerLayout";
import SectionTransition from "@/components/SectionTransition";
import BackgroundTransition from "@/components/BackgroundTransition";
import SectionDots from "@/components/SectionDots";
import ScrollHint from "@/components/ScrollHint";

import background from "@/assets/sky-bg.png";
import SunnyDay from "@/assets/sunny-day.png";
import airoplane from "@/assets/airoplane.png";
import cloud from "@/assets/cloud.png";
import PlaneWindow from "@/assets/plane-window.png";
import plane from "@/assets/plane.png";

import Hero from "@/app/_components/Hero";
import Hero2 from "@/app/_components/Hero2";
import Features from "@/app/_components/Features";
import Branding1 from "@/app/_components/Branding1";
import Faq from "@/app/_components/Faq";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CTAButton from "@/components/CTAButton";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

let images = [
  background.src,
  SunnyDay.src,
  cloud.src,
  PlaneWindow.src,
  airoplane.src,
  plane.src,
];

const backgrounds = [
  { image: `url(${background.src})` },   // 0 — Hero
  { image: `url(${background.src})` },   // 1 — Hero2
  { image: `url(${SunnyDay.src})` },     // 2 — Features
  { image: `url(${SunnyDay.src})` },     // 3 — Branding
  { image: `url(${background.src})` },   // 4 — FAQ
  { image: `url(${background.src})` },   // 5 — Footer
];

const ANIMATION_MS = 600;
const WHEEL_THRESHOLD = 250;

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   const loadAssets = async () => {
  //     await Promise.all(
  //       images.map(
  //         (src) =>
  //           new Promise<void>((resolve) => {
  //             const img = new Image();
  //             img.src = src;
  //             img.onload = () => resolve();
  //             img.onerror = () => resolve(); // resolve even on error so we don't hang
  //           })
  //       )
  //     );
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //     setLoaded(true);
  //   };

  //   loadAssets();
  // }, []);

  useEffect(() => {
  Promise.allSettled(
    images.map((src) => {
      const img = new Image();
      img.src = src;
      return img.decode?.();
    })
  ).then(() => setLoaded(true));
}, []);

  const { section, isTransitioning, direction, goTo } = useScrollTrigger({
    totalSections: backgrounds.length,
    wheelThreshold: WHEEL_THRESHOLD,
    animationMs: ANIMATION_MS,
    cooldownMs: 650,
  });

  const isLastSection = section === backgrounds.length - 1;


  if (!loaded) return <Loader />;

  return (
    <>
      {!isLastSection && <CTAButton />}
      <Navbar section={section + 1} />

      <ScrollTriggerLayout
        isTransitioning={isTransitioning}
        direction={direction}
        animationMs={ANIMATION_MS}
      >
        <BackgroundTransition sectionIndex={section} backgrounds={backgrounds} />

        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <SectionTransition sectionKey={section} direction={direction}>

            {section === 0 && <Hero />}

            {section === 1 && (
              <Hero2
                active={section === 1}
                entryDirection={direction}
                // User scrolled past all Hero2 internal steps → go to Features
                onScrollForward={() => goTo(2, 1)}
                // User scrolled back on first Hero2 step → go back to Hero
                onScrollBackward={() => goTo(0, -1)}
              />
            )}

            {section === 2 && <Features />}
            {section === 3 &&
              <Branding1
                active={section === 3}
                entryDirection={direction}
                onScrollForward={() => goTo(4, 1)}
                onScrollBackward={() => goTo(2, -1)}
              />
            }
            {section === 4 && <Faq />}
            {section === 5 && <Footer />}

          </SectionTransition>
        </div>

        <SectionDots
          total={backgrounds.length}
          current={section}
          position="right"
          onDotClick={(idx) => goTo(idx, idx > section ? 1 : -1)}
        />

        <ScrollHint visible={section === 0} />
      </ScrollTriggerLayout>
    </>
  );
}