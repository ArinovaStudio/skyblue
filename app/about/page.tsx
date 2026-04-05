"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { roxter, streach, syne, dmSans } from "@/utils/fonts";
import { SITE_NAME } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import LiquidGlass from "@/elements/LiquidGlass";
import bg from "@/assets/footer-bg.png";
import plane from "@/assets/plane.png";
import { LucideFacebook } from "lucide-react";
import Link from "next/link";

const teamStats = [
  { label: "Expert Pilots", value: "50+" },
  { label: "Cabin Staff", value: "120+" },
  { label: "Maintenance Crews", value: "15+" },
  { label: "Global Offices", value: "8" },
];

const images = [
  "/images/about/hero.png",
  "/images/about/interior.png",
  "/images/about/team.png",
  "/images/about/hero.png",
];

export default function AboutPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [open, setOpen] = useState(false);
  const [section, setSection] = React.useState(1);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const getCurrentYear = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  };

  const transition = { duration: 1, delay: 0.5 };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <SmoothScroll>
      <main>
        <div className="bg-white text-black min-h-screen">
          <Navbar section={section} />

          {/* --- Hero Section - 100vh Full Screen --- */}
          <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-[120%]">
              <Image
                src="/images/about/hero.png"
                alt="Private Jet Hero"
                fill
                className="object-cover opacity-60"
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />

            <div className="relative z-10 text-center px-4 w-full mix-blend-difference">
              <motion.h1
                initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className={`${streach.className} text-[3rem] md:text-[10rem] lg:text-[14rem] text-white uppercase tracking-tighter leading-none`}
              >
                Beyond
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className={`${syne.className} mt-8 text-white/80 text-sm md:text-xl uppercase tracking-[0.5em]`}
              >
                Defining the Future of Elite Aviation
              </motion.p>
            </div>
          </section>

          {/* --- Our Story Section --- */}
          <section
            onMouseEnter={() => setSection(5)}
            onMouseLeave={() => setSection(1)}
            className="w-full flex flex-col md:flex-row items-center bg-white min-h-[80vh]">
            <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className={`${roxter.className} text-xl md:text-5xl uppercase mb-12 text-black leading-none`}>
                  Our <br /> Identity
                </h2>
                <div className={`${dmSans.className} space-y-8 text-lg md:text-2xl text-black/70 leading-relaxed font-light`}>
                  <p className="text-[1.2rem]">
                    SkyBlue was born from a singular vision: to transcend the boundaries of commercial travel and offer an experience that is as unique as the individuals we serve. With over two decades of excellence, we have redefined what it means to fly.
                  </p>
                  <p className="text-[1.2rem]">
                    Our commitment goes beyond simply getting you from A to B. We curate every detail—from the thread count of our linens to the precise vintage of our cellar selection—ensuring your journey is a masterpiece of comfort and efficiency.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative overflow-hidden">
              <Image
                src="/images/about/interior.png"
                alt="Luxury Interior"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </section>

          {/* --- Gallery Section (Bento Grid) --- */}
          <section
            onMouseEnter={() => setSection(5)}
            onMouseLeave={() => setSection(1)}
            className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-black/5">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className={`${roxter.className} text-xl md:text-4xl text-black uppercase`}>
                The Experience
              </h2>
              <p className={`${syne.className} mt-4 text-sm text-black/50 uppercase tracking-widest`}>A visual journey of luxury</p>
            </motion.div>

            {/* Premium Sharp-Edged Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[700px] max-w-[1400px] mx-auto">
              {/* Main large image */}
              <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
                className="md:col-span-2 md:row-span-2 relative min-h-[300px] overflow-hidden group"
              >
                <Image src="/images/about/hero.png" alt="Gallery 1" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              </motion.div>

              {/* Top right image */}
              <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
                className="md:col-span-2 relative min-h-[250px] overflow-hidden group"
              >
                <Image src="/images/about/interior.png" alt="Gallery 2" fill className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" />
              </motion.div>

              {/* Bottom middle image */}
              <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }}
                className="relative min-h-[250px] overflow-hidden group"
              >
                <Image src="/images/about/team.png" alt="Gallery 3" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              </motion.div>

              {/* Bottom right image */}
              <motion.div
                onClick={() => {
                  setCurrentImage(0);
                  setOpen(true);
                }}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.6 }}
                className="relative min-h-[250px] overflow-hidden group bg-black flex items-center justify-center cursor-pointer"
              >
                <Image src="/images/about/hero.png" alt="Gallery 4" fill className="object-cover mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000 opacity-40 " />
                <div className="relative z-10 text-center">
                  <h3 className={`${roxter.className} text-white text-3xl uppercase`}>View <br /> Gallery</h3>
                </div>
              </motion.div>
            </div>
          </section>

          {/* --- The Fleet Section - Full Width Edge to Edge --- */}
          <section className="bg-black py-32 text-white border-t border-white/10 w-full overflow-hidden">
            <div className="w-full px-6 lg:px-24">
              <h2 className={`${streach.className} text-[2rem] md:text-[6rem] uppercase mb-24 text-center text-white/10 leading-none`}>
                The Royal Fleet
              </h2>
              <div className="grid lg:grid-cols-3 gap-[1px] bg-white/10">
                {/* Box 1 */}
                <div className="p-12 md:p-20 bg-black hover:bg-white/5 overflow-hidden transition-all flex flex-col justify-center min-h-[400px]]">
                  <span className={`${syne.className} text-xs md:text-sm uppercase tracking-[0.3em] text-white/50 mb-6 block`}>Speed & Performance</span>
                  <h4 className={`${roxter.className} text-2xl md:text-5xl text-white mb-6 uppercase`}>Mach 0.925</h4>
                  <p className={`${dmSans.className} text-lg text-white/60 font-light`}>
                    Our fleet comprises the fastest civil aircraft in operation today, minimizing your time in the air.
                  </p>
                </div>

                {/* Box 2 */}
                <div className="p-12 md:p-20 bg-black hover:bg-white/5 transition-colors flex flex-col justify-center min-h-[400px]">
                  <span className={`${syne.className} text-xs md:text-sm uppercase tracking-[0.3em] text-white/50 mb-6 block`}>Global Reach</span>
                  <h4 className={`${roxter.className} text-2xl md:text-5xl text-white mb-6 uppercase`}>7,500 NM</h4>
                  <p className={`${dmSans.className} text-lg text-white/60 font-light`}>
                    Non-stop connections between distant global hubs. From London to Singapore within reach.
                  </p>
                </div>

                {/* Box 3 */}
                <div className="p-12 md:p-20 bg-black hover:bg-white/5 transition-colors flex flex-col justify-center min-h-[400px]">
                  <span className={`${syne.className} text-xs md:text-sm uppercase tracking-[0.3em] text-white/50 mb-6 block`}>Capacity</span>
                  <h4 className={`${roxter.className} text-2xl md:text-5xl text-white mb-6 uppercase`}>19 Seats</h4>
                  <p className={`${dmSans.className} text-lg text-white/60 font-light`}>
                    Configurable cabins that adapt to your needs, ensuring maximum comfort for all configurations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* --- Services Section - Full Width Edge to Edge --- */}
          <section
            onMouseEnter={() => setSection(5)}
            onMouseLeave={() => setSection(1)}
            className="py-28 px-6 md:px-12 lg:px-24 bg-white border-t border-black/5"
          >
            <div className="max-w-[1200px] mx-auto text-center">

              <h2 className={`${roxter.className} text-xl md:text-4xl uppercase text-black`}>
                Our Services
              </h2>

              {/* Subtitle */}
              <p className={`${syne.className} mt-4 text-sm md:text-base text-black/50 uppercase tracking-[0.4em]`}>
                Aviation Solutions, Precisely Tailored to Every Journey
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20 text-left">

                <div>
                  <h3 className={`${syne.className} font-bold text-xl mb-3`}>Trip Support</h3>
                  <p className={`${dmSans.className} text-black/70`}>
                    Comprehensive global trip support covering permits, fuel coordination,
                    ground handling, and logistics—ensuring every flight operates with
                    precision across all destinations.
                  </p>
                </div>

                <div>
                  <h3 className={`${syne.className} font-bold text-xl mb-3`}>Air Charters</h3>
                  <p className={`${dmSans.className} text-black/70`}>
                    Charter private aircraft on demand with access to a worldwide fleet.
                    Experience unmatched flexibility, complete privacy, and a journey
                    tailored entirely around your schedule.
                  </p>
                </div>

                <div>
                  <h3 className={`${syne.className} font-bold text-xl mb-3`}>Aircraft Brokerage</h3>
                  <p className={`${dmSans.className} text-black/70`}>
                    Specialized aircraft brokerage for acquisition, sale, and leasing—
                    connecting you with the right opportunities through a trusted
                    global network.
                  </p>
                </div>

                <div>
                  <h3 className={`${syne.className} font-bold text-xl mb-3`}>Aircraft Maintenance</h3>
                  <p className={`${dmSans.className} text-black/70`}>
                    Dependable maintenance solutions that uphold the highest standards of
                    safety, compliance, and performance—delivered with meticulous
                    attention to detail.
                  </p>
                </div>

                <div>
                  <h3 className={`${syne.className} font-bold text-xl mb-3`}>Crew Leasing</h3>
                  <p className={`${dmSans.className} text-black/70`}>
                    Access highly trained pilots and cabin crew who bring professionalism,
                    safety, and world-class service to every operation.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* --- Operational Excellence Section --- */}
          <section
            onMouseEnter={() => setSection(5)}
            onMouseLeave={() => setSection(1)}
            className="py-28 px-6 md:px-12 lg:px-24 bg-white border-t border-black/5">

            <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">

              {/* Left Text */}
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className={`${roxter.className} text-xl md:text-4xl uppercase text-black mb-10 leading-none`}>
                  Operational <br /> Excellence
                </h2>

                <div className={`${dmSans.className} text-lg md:text-2xl text-black/70 leading-relaxed font-light space-y-8`}>
                  <p className="text-[1.2rem]">
                    With a fully integrated, CAR 145-certified maintenance organization,
                    SkyBlue Aero maintains complete control over aircraft safety,
                    performance, and turnaround efficiency.
                  </p>

                  <p className="text-[1.2rem]">
                    Backed by our in-house CAMO, we provide end-to-end continuing
                    airworthiness management, ensuring uncompromised compliance and
                    operational excellence.
                  </p>

                  <p className="text-[1.2rem]">
                    Our capabilities are also extended to external operators, offering
                    reliable maintenance and airworthiness solutions beyond our own fleet.
                  </p>
                </div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[450px] md:h-[600px] w-full overflow-hidden"
              >
                <Image
                  src="/images/about/team.png"
                  alt="Aircraft Maintenance Team"
                  fill
                  className="object-cover"
                />
              </motion.div>

            </div>
          </section>

          {/* --- Crew Section - Edge To Edge Grid --- */}
          <section
            onMouseEnter={() => setSection(5)}
            onMouseLeave={() => setSection(1)}
            className="w-full grid md:grid-cols-2 bg-[#F9F9F9] border-b border-black/5">
            <div className="relative h-[60vh] md:h-[90vh] w-full overflow-hidden">
              <Image
                src="/images/about/team.png"
                alt="Our Expert Team"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>

            <div className="flex flex-col justify-center p-12 md:p-24">
              <div className="grid grid-cols-2 gap-x-8 gap-y-16">
                {teamStats.map((stat, i) => (
                  <div key={i} className="flex flex-col border-t border-black/10 pt-6">
                    <h5 className={`${streach.className} text-2xl md:text-3xl text-black`}>{stat.value}</h5>
                    <span className={`${syne.className} text-xs md:text-sm uppercase font-bold tracking-widest text-black/50 mt-4 block`}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-20">
                <p className={`${dmSans.className} text-md md:text-xl font-light text-black/80 leading-relaxed`}>
                  "Our teams are our greatest asset. From the ground crew in Mumbai to flight dispatchers in Zurich, every SkyBlue employee is a custodian of your safety."
                </p>
                <div className="mt-8 flex items-center gap-6">
                  <div className="w-16 h-[1px] bg-black" />
                  <span className={`${syne.className} uppercase font-bold text-sm tracking-[0.2em] text-black`}>Operations Director</span>
                </div>
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
              className="w-full backdrop-blur-sm bg-gradient-to-b from-black/30 to-white/80 px-6 lg:px-12 py-2 md:py-10 h-[40%]"
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


        {open && (
          <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center">

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-8 right-8 text-white text-3xl cursor-pointer"
            >
              ✕
            </button>

            {/* Previous */}
            <button
              onClick={prevImage}
              className="absolute left-10 text-white text-5xl cursor-pointer"
            >
              ‹
            </button>

            {/* Image */}
            <div className="relative w-[90%] max-w-[900px] h-[600px]">
              <Image
                src={images[currentImage]}
                alt="gallery"
                fill
                className="object-contain"
              />
            </div>

            {/* Next */}
            <button
              onClick={nextImage}
              className="absolute right-10 text-white text-5xl cursor-pointer"
            >
              ›
            </button>
          </div>
        )}
      </main>
    </SmoothScroll>
  );
}
