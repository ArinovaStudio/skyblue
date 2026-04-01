"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
  return (
    <SmoothScroll>
      <main className="bg-background text-foreground min-h-screen">
        <Navbar section={1} />
        
        {/* --- Hero Section --- */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/about/hero.png"
            alt="Private Jet Hero"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="relative z-10 text-center px-4">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`${streach.className} text-4xl md:text-8xl lg:text-9xl text-white uppercase tracking-tighter`}
            >
              Beyond the <br /> <span className="text-transparent outline-text [-webkit-text-stroke:2px_white]">Horizon</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`${syne.className} mt-6 text-white/80 text-lg md:text-2xl uppercase tracking-widest`}
            >
              Defining the Future of Elite Aviation
            </motion.p>
          </div>
        </section>

        {/* --- Our Story Section --- */}
        <section className="py-24 px-6 md:px-12 lg:px-24 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`${roxter.className} text-4xl md:text-6xl uppercase mb-8`}>
              Our Identity
            </h2>
            <div className={`${dmSans.className} space-y-6 text-lg text-foreground/80 leading-relaxed`}>
              <p>
                SkyBlue was born from a singular vision: to transcend the boundaries of commercial travel and offer an experience that is as unique as the individuals we serve. With over two decades of excellence, we have redefined what it means to fly.
              </p>
              <p>
                Our commitment goes beyond simply getting you from point A to point B. We curate every detail—from the thread count of our linens to the precise vintage of our cellar selection—ensuring that your journey is a masterpiece of comfort and efficiency.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/about/interior.png"
              alt="Luxury Interior"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className={`${syne.className} text-white uppercase text-sm tracking-widest opacity-70`}>Craftsmanship</span>
              <h3 className={`${roxter.className} text-white text-2xl uppercase`}>Unrivaled Comfort</h3>
            </div>
          </motion.div>
        </section>

        {/* --- The Fleet Section --- */}
        <section className="bg-primary py-24 text-primary-foreground overflow-hidden">
          <div className="px-6 md:px-12 lg:px-24">
            <h2 className={`${streach.className} text-5xl md:text-8xl uppercase mb-16 text-center opacity-20`}>
              The Royal Fleet
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <LiquidGlass className="p-8 flex flex-col gap-6">
                <span className={`${syne.className} text-xs uppercase tracking-[0.3em] text-white/50`}>Speed & Performance</span>
                <h4 className={`${roxter.className} text-3xl text-white`}>Mach 0.925</h4>
                <p className="text-sm opacity-70">
                  Our fleet comprises the fastest civil aircraft in operation today, minimizing your time in the air and maximizing your impact on the ground.
                </p>
              </LiquidGlass>
              
              <LiquidGlass className="p-8 flex flex-col gap-6">
                <span className={`${syne.className} text-xs uppercase tracking-[0.3em] text-white/50`}>Global Reach</span>
                <h4 className={`${roxter.className} text-3xl text-white`}>7,500 NM Range</h4>
                <p className="text-sm opacity-70">
                  Non-stop connections between distant global hubs. From London to Singapore, or New York to Tokyo, the world is within your reach.
                </p>
              </LiquidGlass>

              <LiquidGlass className="p-8 flex flex-col gap-6">
                <span className={`${syne.className} text-xs uppercase tracking-[0.3em] text-white/50`}>Passenger Capacity</span>
                <h4 className={`${roxter.className} text-3xl text-white`}>Up to 19 Seats</h4>
                <p className="text-sm opacity-70">
                  Configurable cabins that adapt to your needs, whether it's a silent workspace for executives or a luxurious lounge for family travel.
                </p>
              </LiquidGlass>
            </div>
          </div>
        </section>

        {/* --- Crew / Team Section --- */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
             >
                <div className="grid grid-cols-2 gap-8">
                  {teamStats.map((stat, i) => (
                    <div key={i} className="border-l-2 border-primary pl-6 py-4">
                      <h5 className={`${streach.className} text-4xl text-primary`}>{stat.value}</h5>
                      <span className={`${syne.className} text-xs uppercase font-bold tracking-widest text-foreground/60`}>
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-12 bg-secondary/30 p-8 rounded-xl border border-border">
                  <p className={`${dmSans.className} text-lg italic text-foreground/70`}>
                    "Our teams are our greatest asset. From the ground crew in Mumbai to our flight dispatchers in Zurich, every SkyBlue employee is a custodian of your safety and comfort."
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="w-10 h-1 border-t-2 border-primary" />
                    <span className={`${syne.className} uppercase font-bold text-sm tracking-widest`}>Operations Director</span>
                  </div>
                </div>
             </motion.div>
             
             <motion.div
               initial={{ x: 50, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               viewport={{ once: true }}
               className="order-1 md:order-2 relative h-[500px] rounded-2xl overflow-hidden"
             >
                <Image
                  src="/images/about/team.png"
                  alt="Our Expert Team"
                  fill
                  className="object-cover"
                />
             </motion.div>
          </div>
        </section>

        {/* --- Ending CTA Section --- */}
        <section className="py-24 px-6 text-center bg-[#372D22]">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className={`${roxter.className} text-white text-5xl md:text-7xl uppercase mb-8`}>
              Ready for takeoff?
            </h2>
            <p className={`${syne.className} text-white/60 uppercase tracking-[0.5em] mb-12`}>
              Your journey begins with a single inquiry
            </p>
            <div className="flex justify-center">
              <LiquidGlass className="inline-block px-12 py-4 cursor-pointer hover:bg-white/20 transition-all">
                <span className={`${dmSans.className} text-white font-bold uppercase tracking-widest`}>Secure your flight</span>
              </LiquidGlass>
            </div>
          </motion.div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
