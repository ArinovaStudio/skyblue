"use client";

import React from "react";
import { motion } from "framer-motion";
import { roxter, streach, syne, dmSans } from "@/utils/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import LiquidGlass from "@/elements/LiquidGlass";

export default function PrivacyPage() {
  return (
    <SmoothScroll>
      <main className="bg-background text-foreground min-h-screen">
        <Navbar section={1} />

        {/* --- Header --- */}
        <section className="pt-40 pb-16 px-6 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`${streach.className} text-4xl md:text-7xl uppercase tracking-tighter`}
          >
            Privacy <span className="text-primary">Policy</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`${syne.className} mt-4 text-foreground/60 uppercase tracking-[0.4em] text-xs md:text-sm`}
          >
            Last Updated: April 2026
          </motion.p>
        </section>

        {/* --- Content --- */}
        <section className="max-w-4xl mx-auto px-6 pb-24">
          <LiquidGlass className="p-8 md:p-12 !rounded-3xl shadow-xl bg-white/5 border-white/10">
            <div className={`${dmSans.className} space-y-10 text-foreground/80 leading-relaxed`}>
              
              <section>
                <h2 className={`${roxter.className} text-2xl text-white uppercase mb-4`}>1. Information We Collect</h2>
                <p>
                  At SkyBlue, we collect personal information necessary to provide our premium aviation services. This includes your name, contact details, passport information for international travel, and payment details. We also collect technical data such as IP addresses and browser information to improve our digital experience.
                </p>
              </section>

              <section>
                <h2 className={`${roxter.className} text-2xl text-white uppercase mb-4`}>2. How We Use Your Data</h2>
                <p>
                  Your information is used strictly to facilitate flight bookings, manage your travel itinerary, and ensure compliance with international aviation safety and security protocols. We may also use your contact details to provide updates about your journey or occasional corporate announcements.
                </p>
              </section>

              <section>
                <h2 className={`${roxter.className} text-2xl text-white uppercase mb-4`}>3. Data Protection</h2>
                <p>
                  We implement industry-leading security measures, including end-to-end encryption and secure vault storage for sensitive financial and identity data. Your privacy is managed with the same level of precision and care as our flight operations.
                </p>
              </section>

              <section>
                <h2 className={`${roxter.className} text-2xl text-white uppercase mb-4`}>4. Third-Party Sharing</h2>
                <p>
                  We only share your data with trusted partners essential to your journey—such as ground handling agents, catering services, and customs officials. We never sell your personal information to third-party marketing firms.
                </p>
              </section>

              <section>
                <h2 className={`${roxter.className} text-2xl text-white uppercase mb-4`}>5. Your Rights</h2>
                <p>
                  You have the right to access, correct, or request the deletion of your personal data at any time. For such inquiries, please contact our Data Protection Officer at privacy@skyblue.aero.
                </p>
              </section>

            </div>
          </LiquidGlass>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
