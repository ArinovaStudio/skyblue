"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { roxter, streach, syne, dmSans } from "@/utils/fonts";
import { SITE_NAME } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import LiquidGlass from "@/elements/LiquidGlass";

const teamStats = [
  { label: "Expert Pilots", value: "50+" },
  { label: "Cabin Staff", value: "120+" },
  { label: "Maintenance Crews", value: "15+" },
  { label: "Global Offices", value: "8" },
];

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <SmoothScroll>
      <main className="bg-white text-black min-h-screen">
        <Navbar section={1} />
        
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
        <section className="w-full flex flex-col md:flex-row items-center bg-white min-h-[80vh]">
          <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={`${roxter.className} text-5xl md:text-8xl uppercase mb-12 text-black leading-none`}>
                Our <br/> Identity
              </h2>
              <div className={`${dmSans.className} space-y-8 text-lg md:text-2xl text-black/70 leading-relaxed font-light`}>
                <p>
                  SkyBlue was born from a singular vision: to transcend the boundaries of commercial travel and offer an experience that is as unique as the individuals we serve. With over two decades of excellence, we have redefined what it means to fly.
                </p>
                <p>
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
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-black/5">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`${roxter.className} text-4xl md:text-6xl text-black uppercase`}>
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
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.6 }}
              className="relative min-h-[250px] overflow-hidden group bg-black flex items-center justify-center"
            >
              <Image src="/images/about/hero.png" alt="Gallery 4" fill className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-40 " />
              {/* <div className="relative z-10 text-center">
              mix-blend-luminosity  //in image tag add this
                 <h3 className={`${roxter.className} text-white text-3xl uppercase`}>View <br /> Gallery</h3>
              </div> */}
            </motion.div>
          </div>
        </section>

        {/* --- The Fleet Section - Full Width Edge to Edge --- */}
        <section className="bg-black py-32 text-white border-t border-white/10 w-full overflow-hidden">
          <div className="w-full px-6 lg:px-24">
            <h2 className={`${streach.className} text-[3rem] md:text-[8rem] uppercase mb-24 text-center text-white/10 leading-none`}>
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

        {/* --- Crew Section - Edge To Edge Grid --- */}
        <section className="w-full grid md:grid-cols-2 bg-[#F9F9F9] border-b border-black/5">
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
                    <h5 className={`${streach.className} text-5xl md:text-7xl text-black`}>{stat.value}</h5>
                    <span className={`${syne.className} text-xs md:text-sm uppercase font-bold tracking-widest text-black/50 mt-4 block`}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-20">
                <p className={`${dmSans.className} text-2xl md:text-3xl font-light text-black/80 leading-relaxed`}>
                  "Our teams are our greatest asset. From the ground crew in Mumbai to flight dispatchers in Zurich, every SkyBlue employee is a custodian of your safety."
                </p>
                <div className="mt-8 flex items-center gap-6">
                  <div className="w-16 h-[1px] bg-black" />
                  <span className={`${syne.className} uppercase font-bold text-sm tracking-[0.2em] text-black`}>Operations Director</span>
                </div>
              </div>
           </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
