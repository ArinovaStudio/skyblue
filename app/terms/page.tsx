"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { roxter, streach, syne, dmSans } from "@/utils/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Image from "next/image";
import bg from "@/assets/footer-bg.png";
import plane from "@/assets/plane.png";
import { LucideFacebook } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  const [section, setSection] = React.useState(1);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const getCurrentYear = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  };

  const transition = { duration: 1, delay: 0.5 };
  return (
    <SmoothScroll>
      <main>
        <div className="bg-white text-black min-h-screen">
          <Navbar section={section} />

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
          <section
            onMouseEnter={() => setSection(5)}
            onMouseLeave={() => setSection(1)}
            className="w-full bg-white text-black flex justify-center py-24 md:py-40">
            <div className="max-w-[1000px] w-full px-6 md:px-12">
              <div className={`${dmSans.className} space-y-24 text-black/70 text-lg md:text-2xl leading-[1.8] font-light`}>

                <section>
                  <div className="flex items-center gap-6 mb-8">
                    <span className={`${syne.className} text-sm font-bold tracking-[0.2em] text-black/30`}>01</span>
                    <div className="h-[1px] flex-1 bg-black/10" />
                  </div>
                  <h2 className={`${roxter.className} text-sm md:text-xl text-black uppercase mb-8 leading-none`}>
                    Acceptance of Terms
                  </h2>
                  <p className="text-[1rem]">
                    By accessing the SkyBlue platform or utilizing our charter services, you agree to be bound by these Terms and Conditions. These terms constitute a legally binding agreement between you and SkyBlue Aviation.
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-6 mb-8">
                    <span className={`${syne.className} text-sm font-bold tracking-[0.2em] text-black/30`}>02</span>
                    <div className="h-[1px] flex-1 bg-black/10" />
                  </div>
                  <h2 className={`${roxter.className} text-sm md:text-xl text-black uppercase mb-8 leading-none`}>
                    Booking and Payments
                  </h2>
                  <p className="text-[1rem]">
                    All bookings are subject to aircraft availability and final confirmation by SkyBlue. Full payment is required at the time of booking unless otherwise agreed in writing. Payments are processed through secure, high-end financial institutions to ensure the safety of your transactions.
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-6 mb-8">
                    <span className={`${syne.className} text-sm font-bold tracking-[0.2em] text-black/30`}>03</span>
                    <div className="h-[1px] flex-1 bg-black/10" />
                  </div>
                  <h2 className={`${roxter.className} text-sm md:text-xl text-black uppercase mb-8 leading-none`}>Cancellation Policy</h2>
                  <p className="text-[1rem]">
                    Cancellations made more than 48 hours prior to departure are eligible for a partial refund as per our specific tier-based refund policy. Cancellations within 24 hours of departure will incur the full charter cost.
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-6 mb-8">
                    <span className={`${syne.className} text-sm font-bold tracking-[0.2em] text-black/30`}>04</span>
                    <div className="h-[1px] flex-1 bg-black/10" />
                  </div>
                  <h2 className={`${roxter.className} text-sm md:text-xl text-black uppercase mb-8 leading-none`}>Passenger Responsibility</h2>
                  <p className="text-[1rem]">
                    Passengers are responsible for possessing valid travel documentation (passports, visas, etc.) and adhering to all safety protocols communicated by the flight crew. SkyBlue reserves the right to refuse boarding to any passenger who poses a safety risk.
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-6 mb-8">
                    <span className={`${syne.className} text-sm font-bold tracking-[0.2em] text-black/30`}>05</span>
                    <div className="h-[1px] flex-1 bg-black/10" />
                  </div>
                  <h2 className={`${roxter.className} text-sm md:text-xl text-black uppercase mb-8 leading-none`}>Liability</h2>
                  <p className="text-[1rem]">
                    SkyBlue Aviation acts as an agent or operator and maintains comprehensive insurance coverage. Our liability is limited to the terms set forth in our specific aircraft insurance policies and international aviation conventions.
                  </p>
                </section>

              </div>
            </div>
          </section>
        </div>

        <footer className="min-h-screen relative flex flex-col justify-between overflow-hidden">

          {/* Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src={bg}
              alt="footer background"
              fill
              priority
              className="object-cover"
            />

            {/* fade from white to transparent */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-transparent" />
          </div>

          {/* CONTENT WRAPPER (fix) */}
          <div className="relative z-10 flex flex-col justify-between min-h-screen">

            {/* Top Hero */}
            <div className="relative flex flex-col items-center justify-center py-10 md:py-12 max-md:top-15 px-6 mt-40">
              <motion.h1
                initial={{ scale: 0 }}
                whileInView={{ scale: 1.3 }}
                transition={transition}
                className="font-streach uppercase text-black text-4xl md:text-[80px] lg:text-[100px] text-center leading-none"
              >
                skybblue
              </motion.h1>

              <motion.div
                initial={{ scale: 0.4 }}
                whileInView={{ scale: 5 }}
                transition={{ duration: 1, delay: 1 }}
                className="relative w-full max-w-[120px] h-[50px] md:max-w-[500px] md:h-[120px] top-20"
              >
                <Image
                  src={plane}
                  alt="flying plane"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>

            {/* Glass Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={transition}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full backdrop-blur-sm bg-gradient-to-b from-black/30 to-white/80 px-6 lg:px-12 py-6 md:py-10"
            >
              {/* Top Row */}
              <div className="flex flex-col lg:flex-row gap-6 md:gap-8 justify-between">

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={transition}
                  viewport={{ once: true }}
                  className="font-syne font-bold text-white text-base md:text-lg lg:w-[40%]"
                >
                  Fly beyond commercial limits with SkyAero. A private jet booking
                  experience crafted for elite travelers who demand precision,
                  privacy, and prestige.
                </motion.p>

                {/* Contact */}
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={transition}
                  viewport={{ once: true }}
                  className="flex flex-col items-start lg:items-end"
                >
                  <h2 className="font-streach uppercase text-white text-2xl md:text-3xl">
                    Contact us
                  </h2>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="font-syne font-bold text-white text-base mt-4"
                  >
                    info@skyblue.aero
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="font-syne font-bold text-white text-base mt-1"
                  >
                    9086345xx2
                  </motion.p>

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    className="flex gap-3 mt-4"
                  >
                    <div className="w-10 h-10 bg-white rounded-full grid place-items-center">
                      <LucideFacebook size={18} color="black" />
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Footer Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={transition}
                className="flex flex-wrap gap-2 md:gap-3 mt-20 text-black font-syne font-bold text-xs md:text-base uppercase"
              >
                <Link href="/about">About Us</Link>
                <span>|</span>
                <Link href="/privacy">Privacy Policy</Link>
                <span>|</span>
                <Link href="/terms">Terms & Conditions</Link>
                <span>|</span>
                <Link href="/contact">Contact Us</Link>
              </motion.div>

              {/* Bottom Row */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={transition}
                className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mt-6"
              >
                <p className="font-syne font-semibold text-sm md:text-base">
                  © {getCurrentYear()} All copyright are reserved.
                </p>

                <div className="hidden lg:block flex-1 border-t border-black mx-6"></div>

                <p className="font-sans text-sm md:text-base">
                  Designed by{" "}
                  <Link href="https://arinova.studio" className="font-syne font-bold">
                    Arinova Studio
                  </Link>{" "}
                  X{" "}
                  <Link
                    href="https://outrightcreators.com"
                    className="font-syne font-bold"
                  >
                    Outright Creators
                  </Link>
                </p>
              </motion.div>
            </motion.div>

          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
}
