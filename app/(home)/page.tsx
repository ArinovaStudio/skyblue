"use client";

import airoplane from "@/assets/airoplane.png";
import cloud from "@/assets/cloud.png";
import PlaneWindow from "@/assets/plane-window.png";
import plane from "@/assets/plane.png";
import background from "@/assets/sky-bg.png";
import SunnyDay from "@/assets/sunny-day.png";
import Loader from "@/components/Loader";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState, useCallback } from "react";
import CTAButton from "@/components/CTAButton";
import gsap from "gsap";
import { Observer } from "gsap/dist/Observer";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

const Navbar = dynamic(() => import("@/components/Navbar"));
const Hero = dynamic(() => import("@/app/_components/Hero"));
const Hero2 = dynamic(() => import("../_components/Hero2"));
const Features = dynamic(() => import("../_components/Features"));
const Branding1 = dynamic(() => import("../_components/Branding1"));
const Faq = dynamic(() => import("@/app/_components/Faq"));
const Footer = dynamic(() => import("@/components/Footer"));

if (typeof window !== "undefined") {
  gsap.registerPlugin(Observer, ScrollToPlugin);
}

let images = [
  background.src,
  SunnyDay.src,
  cloud.src,
  PlaneWindow.src,
  airoplane.src,
  "https://picsum.photos/1080/1080",
  plane.src,
];

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const hero2Ref = useRef<HTMLElement | null>(null);
  const featuresRef = useRef<HTMLElement | null>(null);
  const brandingRef = useRef<HTMLElement | null>(null);
  const faqRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = [
    heroRef,
    hero2Ref,
    featuresRef,
    brandingRef,
    faqRef,
    footerRef,
  ];

  const [loaded, setLoaded] = useState(false);
  const [section, setSection] = useState(1);
  const [currentStopIndex, setCurrentStopIndex] = useState(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    const loadAssets = async () => {
      await Promise.all(
        images.map((image) => {
          return new Promise<void>((resolve, reject) => {
            const img = new Image();
            img.src = image;
            img.onload = () => resolve();
            img.onerror = () => reject();
          });
        })
      );
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoaded(true);
    };
    loadAssets();
  }, []);

  // Map logical stops to pixel offsets and parent section IDs
  const getScrollStops = useCallback(() => {
    const stops = [
      { y: 0, sectionID: 1 }, // Stop 0: Hero
      { y: (sectionRefs[1].current?.offsetTop || 0) + 1, sectionID: 2 }, // Stop 1: Hero2 (Plane View)
      {
        y:
          (sectionRefs[1].current?.offsetTop || 0) +
          (sectionRefs[1].current?.offsetHeight || 0) * 0.8,
        sectionID: 2,
      }, // Stop 2: Hero2 (Feature Cards)
      { y: (sectionRefs[2].current?.offsetTop || 0) + 1, sectionID: 3 }, // Stop 3: Features Flyby
      { y: (sectionRefs[3].current?.offsetTop || 0) + 1, sectionID: 4 }, // Stop 4: Branding1 (Stage 1)
      {
        y:
          (sectionRefs[3].current?.offsetTop || 0) +
          (sectionRefs[3].current?.offsetHeight || 0) * 0.45,
        sectionID: 4,
      }, // Stop 5: Branding 1 (Stage 2)
      {
        y:
          (sectionRefs[3].current?.offsetTop || 0) +
          (sectionRefs[3].current?.offsetHeight || 0) * 0.8,
        sectionID: 4,
      }, // Stop 6: Branding 1 (Stage 3)
      { y: (sectionRefs[4].current?.offsetTop || 0) + 1, sectionID: 5 }, // Stop 7: Faq
      { y: (sectionRefs[5].current?.offsetTop || 0) + 1, sectionID: 6 }, // Stop 8: Footer
    ];
    return stops;
  }, [sectionRefs]);

  const goToStop = (index: number) => {
    const stops = getScrollStops();
    if (isAnimating.current || index < 0 || index >= stops.length) return;

    isAnimating.current = true;
    const target = stops[index];

    // Update section ID to drive sticky UI and cross-fades
    setSection(target.sectionID);
    setCurrentStopIndex(index);

    gsap.to(window, {
      scrollTo: { y: target.y, autoKill: false },
      duration: 1.2,
      ease: "power2.inOut",
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  };

  useEffect(() => {
    if (!loaded) return;

    const obs = Observer.create({
      target: window,
      type: "wheel,touch,pointer",
      wheelSpeed: 1,
      onUp: () => !isAnimating.current && goToStop(currentStopIndex - 1),
      onDown: () => !isAnimating.current && goToStop(currentStopIndex + 1),
      tolerance: 25,
      preventDefault: true,
    });

    return () => obs.kill();
  }, [loaded, currentStopIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimating.current) return;
      if (e.key === "ArrowDown") goToStop(currentStopIndex + 1);
      if (e.key === "ArrowUp") goToStop(currentStopIndex - 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentStopIndex]);

  return loaded ? (
    <>
      {section !== 6 && <CTAButton />}
      <Navbar section={section} />
      <AnimatePresence mode="wait" initial={false}>
        {section !== 5 && (
          <motion.img
            key={[3, 4].includes(section) ? "sunny" : "sky"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            src={[3, 4].includes(section) ? images[1] : images[0]}
            className="w-full max-h-screen h-full fixed inset-0 -z-10 object-cover"
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
      <div ref={containerRef} className="relative">
        <div className="sticky top-0 overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={section}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full"
            >
              {section === 1 && <Hero />}
              {section === 2 && <Hero2 ref={hero2Ref} />}
              {section === 3 && <Features />}
              {section === 4 && <Branding1 ref={brandingRef} />}
              {section === 5 && <Faq ref={faqRef} />}
              {section === 6 && <Footer />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dummy Sections with specific heights to accommodate internal transitions */}
        <section ref={sectionRefs[0] as any} className="min-h-screen" />
        <section ref={sectionRefs[1] as any} className="min-h-[140vh]" />
        <section ref={sectionRefs[2] as any} className="min-h-screen" />
        <section ref={sectionRefs[3] as any} className="min-h-[160vh]" />
        <section ref={sectionRefs[4] as any} className="min-h-screen" />
        <section ref={sectionRefs[5] as any} className="min-h-screen" />
      </div>
    </>
  ) : (
    <>
      <Loader />
      <div ref={containerRef}></div>
    </>
  );
}


