"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { roxter, streach, syne, dmSans } from "@/utils/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function PrivacyPage() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <SmoothScroll>
      <main className="bg-white text-black min-h-screen">
        <Navbar section={1} />

        {/* --- Hero Section - Full Screen --- */}
        <section className="relative h-[70vh] md:h-screen w-full flex items-center justify-center overflow-hidden bg-black">
          <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-[120%]">
             <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10" />
             <img 
               src="https://picsum.photos/1920/1080?grayscale" 
               alt="Background" 
               className="w-full h-full object-cover opacity-50" 
             />
          </motion.div>
          
          <div className="relative z-20 text-center px-4 w-full">
            <motion.h1
              initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className={`${streach.className} text-4xl md:text-[8rem] lg:text-[10rem] text-white uppercase tracking-tighter leading-none`}
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`${syne.className} mt-8 text-white/50 uppercase tracking-[0.5em] text-sm md:text-base`}
            >
              Last Updated: April 2026
            </motion.p>
          </div>
        </section>

        {/* --- Content --- */}
        <section className="w-full bg-white text-black flex justify-center py-24 md:py-40">
          <div className="max-w-[1000px] w-full px-6 md:px-12">
            <div className={`${dmSans.className} space-y-24 text-black/70 text-lg md:text-2xl leading-[1.8] font-light`}>
              
              <section>
                <div className="flex items-center gap-6 mb-8">
                   <span className={`${syne.className} text-sm font-bold tracking-[0.2em] text-black/30`}>01</span>
                   <div className="h-[1px] flex-1 bg-black/10" />
                </div>
                <h2 className={`${roxter.className} text-2xl md:text-5xl text-black uppercase mb-8 leading-none`}>
                  Information <br /> We Collect
                </h2>
                <p>
                  At SkyBlue, we collect personal information necessary to provide our premium aviation services. This includes your name, contact details, passport information for international travel, and payment details. We also collect technical data such as IP addresses and browser information to improve our digital experience.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-6 mb-8">
                   <span className={`${syne.className} text-sm font-bold tracking-[0.2em] text-black/30`}>02</span>
                   <div className="h-[1px] flex-1 bg-black/10" />
                </div>
                <h2 className={`${roxter.className} text-2xl md:text-5xl text-black uppercase mb-8 leading-none`}>
                  How We Use <br /> Your Data
                </h2>
                <p>
                  Your information is used strictly to facilitate flight bookings, manage your travel itinerary, and ensure compliance with international aviation safety and security protocols. We may also use your contact details to provide updates about your journey or occasional corporate announcements.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-6 mb-8">
                   <span className={`${syne.className} text-sm font-bold tracking-[0.2em] text-black/30`}>03</span>
                   <div className="h-[1px] flex-1 bg-black/10" />
                </div>
                <h2 className={`${roxter.className} text-2xl md:text-5xl text-black uppercase mb-8 leading-none`}>Data Protection</h2>
                <p>
                  We implement industry-leading security measures, including end-to-end encryption and secure vault storage for sensitive financial and identity data. Your privacy is managed with the same level of precision and care as our flight operations.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-6 mb-8">
                   <span className={`${syne.className} text-sm font-bold tracking-[0.2em] text-black/30`}>04</span>
                   <div className="h-[1px] flex-1 bg-black/10" />
                </div>
                <h2 className={`${roxter.className} text-2xl md:text-5xl text-black uppercase mb-8 leading-none`}>Third-Party Sharing</h2>
                <p>
                  We only share your data with trusted partners essential to your journey—such as ground handling agents, catering services, and customs officials. We never sell your personal information to third-party marketing firms.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-6 mb-8">
                   <span className={`${syne.className} text-sm font-bold tracking-[0.2em] text-black/30`}>05</span>
                   <div className="h-[1px] flex-1 bg-black/10" />
                </div>
                <h2 className={`${roxter.className} text-2xl md:text-5xl text-black uppercase mb-8 leading-none`}>Your Rights</h2>
                <p>
                  You have the right to access, correct, or request the deletion of your personal data at any time. For such inquiries, please contact our Data Protection Officer at privacy@skyblue.aero.
                </p>
              </section>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
