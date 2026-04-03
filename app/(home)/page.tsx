"use client";

import airoplane from "@/assets/airoplane.png";
import cloud from "@/assets/cloud.png";
import PlaneWindow from "@/assets/plane-window.png";
import plane from "@/assets/plane.png";
import background from "@/assets/sky-bg.png";
import SunnyDay from "@/assets/sunny-day.png";
import Loader from "@/components/Loader";
import {
  AnimatePresence,
  motion,
  useScroll,
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import CTAButton from "@/components/CTAButton";
const Navbar = dynamic(() => import("@/components/Navbar"));
const Hero = dynamic(() => import("@/app/_components/Hero"));
const Hero2 = dynamic(() => import("../_components/Hero2"));
const Features = dynamic(() => import("../_components/Features"));
const Branding1 = dynamic(() => import("../_components/Branding1"));
const Faq = dynamic(() => import("@/app/_components/Faq"));
const Footer = dynamic(() => import("@/components/Footer"));

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
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  useEffect(() => {
    const loadAssets = async () => {
      await Promise.all(
        images.map((image) => {
          return new Promise<void>((resolve, reject) => {
            const img = new Image();
            img.src = image;

            img.onload = () => resolve();
            img.onerror = () => reject(); // good practice
          });
        })
      );

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setLoaded(true);
    };

    loadAssets();
  }, []);

  const [section, setSection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {

    if (!loaded) return;

    gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin);

    // Initial ScrollTrigger for section tracking (Used for Navbar/Background imagery)
    const triggers = sectionRefs.map((ref, index) => {
      if (!ref.current) return null;
      return ScrollTrigger.create({
        trigger: ref.current,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => {
          if (self.isActive) {
            setSection(index + 1);
          }
        },
      });
    });

    // Master Scroll Hijack Logic (Gesture to Scroll)
    const nudge = (direction: number) => {
      if (isAnimating || !loaded) return;

      const currentY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate which section we are currently physically in based on scroll position
      let currentSectionIdx = 0;
      sectionRefs.forEach((ref, idx) => {
        if (ref.current && currentY >= ref.current.offsetTop - 10) {
          currentSectionIdx = idx;
        }
      });

      const currentSectionRef = sectionRefs[currentSectionIdx].current;
      if (!currentSectionRef) return;

      const sectionStart = currentSectionRef.offsetTop;
      const sectionEnd = sectionStart + currentSectionRef.offsetHeight;
      
      let targetY;

      if (direction > 0) { // Scrolling DOWN (Up gesture)
        // If we are very close to the end of the current section, jump to next section
        if (currentY + windowHeight >= sectionEnd - 50) {
          if (currentSectionIdx < sectionRefs.length - 1) {
            targetY = sectionRefs[currentSectionIdx + 1].current?.offsetTop;
          } else {
            return; // At the very end
          }
        } else {
          // Otherwise nudge forward within the section
          targetY = Math.min(currentY + windowHeight * 0.6, sectionEnd - windowHeight);
        }
      } else { // Scrolling UP (Down gesture)
        // If we are very close to the start of the current section, jump to previous section
        if (currentY <= sectionStart + 50) {
          if (currentSectionIdx > 0) {
            const prevSection = sectionRefs[currentSectionIdx - 1].current;
            targetY = prevSection ? prevSection.offsetTop : 0;
          } else {
            return; // At the very start
          }
        } else {
          // Otherwise nudge backward within the section
          targetY = Math.max(currentY - windowHeight * 0.6, sectionStart);
        }
      }

      if (targetY !== undefined) {
        gsap.to(window, {
          scrollTo: { y: targetY, autoKill: true },
          duration: 1,
          ease: "power2.inOut",
          onStart: () => setIsAnimating(true),
          onComplete: () => setIsAnimating(false),
        });
      }
    };

    const obs = Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => nudge(-1),
      onUp: () => nudge(1),
      tolerance: 10,
      preventDefault: true,
    });

    return () => {
      triggers.forEach(t => t?.kill());
      obs.kill();
    };
  }, [loaded, isAnimating]);
  return loaded ? (
    <>
      {section !== 6 && <CTAButton />}
      <Navbar section={section} />
      <AnimatePresence mode="sync">
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
      <div ref={containerRef}>
        {/* Sticky UI */}
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

        {/* 🔥 Scroll spacers (define heights) */}
        {/* <section ref={sectionRefs[0] as any} className="h-[15vh]" />
        <section
          ref={sectionRefs[1] as any}
          className="min-h-[200vh] prevent"
          data-lenis-prevent
          data-lenis-prevent-touch
          data-lenis-prevent-wheel
        />
        <section ref={sectionRefs[2] as any} className="min-h-[200vh]" />
        <section ref={sectionRefs[3] as any} className="min-h-[350vh]" />
        <section
          ref={sectionRefs[4] as any}
          className="min-h-[200vh]"
        />
        <section ref={sectionRefs[5] as any} className="min-h-[200vh]" /> */}

        {/* New */}

        <section ref={sectionRefs[0] as any} className="min-h-[100vh]"/>
        <section ref={sectionRefs[1] as any} className="min-h-[220vh]"/>
        <section ref={sectionRefs[2] as any} className="min-h-[100vh]"/>
        <section ref={sectionRefs[3] as any} className="min-h-[150vh]"/>
        <section ref={sectionRefs[4] as any} className="min-h-[110vh]"/>
        <section ref={sectionRefs[5] as any} className="min-h-[100vh]"/>

        {/* <section ref={sectionRefs[0] as any} className="h-[10vh]"/>

        <section
          ref={sectionRefs[1] as any}
          className="lg:min-h-[215vh] min-h-[900vh]"
        />

        <section
          ref={sectionRefs[2] as any}
          className="lg:min-h-[100vh] min-h-[900vh]"
        />

        <section
          ref={sectionRefs[3] as any}
          className="lg:min-h-[150vh] min-h-[900vh]"
        />

        <section
          ref={sectionRefs[4] as any}
          className="lg:min-h-[110vh] min-h-[900vh]"
        />

        <section
          ref={sectionRefs[5] as any}
          className="lg:min-h-[120vh] min-h-[900vh]"
        /> */}
      </div>
    </>
  ) : (
    <>
      <Loader />
      <div ref={containerRef}></div>
    </>
  );
}