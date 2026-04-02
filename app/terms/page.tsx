"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { roxter, streach, syne, dmSans } from "@/utils/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function TermsPage() {
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
              src="https://picsum.photos/1920/1081?grayscale"
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
              Terms & Conditions
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`${syne.className} mt-8 text-white/50 uppercase tracking-[0.5em] text-sm md:text-base`}
            >
              Service Agreement - 2026
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
                  Acceptance <br /> of Terms
                </h2>
                <p>
                  By accessing the SkyBlue platform or utilizing our charter services, you agree to be bound by these Terms and Conditions. These terms constitute a legally binding agreement between you and SkyBlue Aviation.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-6 mb-8">
                  <span className={`${syne.className} text-sm font-bold tracking-[0.2em] text-black/30`}>02</span>
                  <div className="h-[1px] flex-1 bg-black/10" />
                </div>
                <h2 className={`${roxter.className} text-2xl md:text-5xl text-black uppercase mb-8 leading-none`}>
                  Booking <br /> and Payments
                </h2>
                <p>
                  All bookings are subject to aircraft availability and final confirmation by SkyBlue. Full payment is required at the time of booking unless otherwise agreed in writing. Payments are processed through secure, high-end financial institutions to ensure the safety of your transactions.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-6 mb-8">
                  <span className={`${syne.className} text-sm font-bold tracking-[0.2em] text-black/30`}>03</span>
                  <div className="h-[1px] flex-1 bg-black/10" />
                </div>
                <h2 className={`${roxter.className} text-2xl md:text-5xl text-black uppercase mb-8 leading-none`}>Cancellation Policy</h2>
                <p>
                  Cancellations made more than 48 hours prior to departure are eligible for a partial refund as per our specific tier-based refund policy. Cancellations within 24 hours of departure will incur the full charter cost.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-6 mb-8">
                  <span className={`${syne.className} text-sm font-bold tracking-[0.2em] text-black/30`}>04</span>
                  <div className="h-[1px] flex-1 bg-black/10" />
                </div>
                <h2 className={`${roxter.className} text-2xl md:text-5xl text-black uppercase mb-8 leading-none`}>Passenger Responsibility</h2>
                <p>
                  Passengers are responsible for possessing valid travel documentation (passports, visas, etc.) and adhering to all safety protocols communicated by the flight crew. SkyBlue reserves the right to refuse boarding to any passenger who poses a safety risk.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-6 mb-8">
                  <span className={`${syne.className} text-sm font-bold tracking-[0.2em] text-black/30`}>05</span>
                  <div className="h-[1px] flex-1 bg-black/10" />
                </div>
                <h2 className={`${roxter.className} text-2xl md:text-5xl text-black uppercase mb-8 leading-none`}>Liability</h2>
                <p>
                  SkyBlue Aviation acts as an agent or operator and maintains comprehensive insurance coverage. Our liability is limited to the terms set forth in our specific aircraft insurance policies and international aviation conventions.
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
