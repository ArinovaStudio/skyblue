"use client";

import React from "react";
import { motion } from "framer-motion";
import { roxter, streach, syne, dmSans } from "@/utils/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import LiquidGlass from "@/elements/LiquidGlass";

export default function TermsPage() {
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
            Terms & <span className="text-primary">Conditions</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`${syne.className} mt-4 text-foreground/60 uppercase tracking-[0.4em] text-xs md:text-sm`}
          >
            Service Agreement - 2026
          </motion.p>
        </section>

        {/* --- Content --- */}
        <section className="max-w-4xl mx-auto px-6 pb-24">
          <LiquidGlass className="p-8 md:p-12 !rounded-3xl shadow-xl bg-white/5 border-white/10">
            <div className={`${dmSans.className} space-y-10 text-foreground/80 leading-relaxed`}>
              
              <section>
                <h2 className={`${roxter.className} text-2xl text-white uppercase mb-4`}>1. Acceptance of Terms</h2>
                <p>
                  By accessing the SkyBlue platform or utilizing our charter services, you agree to be bound by these Terms and Conditions. These terms constitute a legally binding agreement between you and SkyBlue Aviation.
                </p>
              </section>

              <section>
                <h2 className={`${roxter.className} text-2xl text-white uppercase mb-4`}>2. Booking and Payments</h2>
                <p>
                  All bookings are subject to aircraft availability and final confirmation by SkyBlue. Full payment is required at the time of booking unless otherwise agreed in writing. Payments are processed through secure, high-end financial institutions to ensure the safety of your transactions.
                </p>
              </section>

              <section>
                <h2 className={`${roxter.className} text-2xl text-white uppercase mb-4`}>3. Cancellation Policy</h2>
                <p>
                  Cancellations made more than 48 hours prior to departure are eligible for a partial refund as per our specific tier-based refund policy. Cancellations within 24 hours of departure will incur the full charter cost.
                </p>
              </section>

              <section>
                <h2 className={`${roxter.className} text-2xl text-white uppercase mb-4`}>4. Passenger Responsibility</h2>
                <p>
                  Passengers are responsible for possessing valid travel documentation (passports, visas, etc.) and adhering to all safety protocols communicated by the flight crew. SkyBlue reserves the right to refuse boarding to any passenger who poses a safety risk.
                </p>
              </section>

              <section>
                <h2 className={`${roxter.className} text-2xl text-white uppercase mb-4`}>5. Liability</h2>
                <p>
                  SkyBlue Aviation acts as an agent or operator and maintains comprehensive insurance coverage. Our liability is limited to the terms set forth in our specific aircraft insurance policies and international aviation conventions.
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
