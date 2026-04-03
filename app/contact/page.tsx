"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { roxter, streach, syne, dmSans } from "@/utils/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FAQCard } from "@/app/_components/FaqCard";
import { LucideMail, LucidePhone, LucideMapPin, LucideSend } from "lucide-react";
import toast from "react-hot-toast";
import Image from "next/image";
import bg from "@/assets/footer-bg.png";
import plane from "@/assets/plane.png";
import { LucideFacebook } from "lucide-react";
import Link from "next/link";

const contactFaqs = [
  {
    question: "How far in advance should I book?",
    answer: "For most domestic flights, we can arrange takeoff within 4 hours. For international travel requiring specific permits, we recommend 24-48 hours notice.",
  },
  {
    question: "What safety standards do you follow?",
    answer: "SkyBlue adheres to Wyvern Wingman and ARGUS Platinum standards, the highest safety ratings in the private aviation industry.",
  },
  {
    question: "Can I bring my pets on board?",
    answer: "Absolutely. We are proud to be a pet-friendly carrier. Most of our aircraft allow pets in the cabin so they can travel in comfort with you.",
  },
  {
    question: "Do you offer catering services?",
    answer: "Yes, we provide bespoke gourmet catering tailored to your dietary requirements and preferences on every flight.",
  },
];

export default function ContactPage() {
  const [isOpen, setIsOpen] = useState<null | number>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Your message has been sent. Our team will contact you shortly.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const getCurrentYear = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  };

  const transition = { duration: 1, delay: 0.5 };

  return (
    <SmoothScroll>
      <main>
        <div className="bg-white text-black min-h-screen">
          <Navbar section={5} />

        {/* --- Hero Section - 100vh Full Screen Split --- */}
        <section className="w-full h-screen flex flex-col md:flex-row relative bg-black">
           {/* Left side text */}
           <div className="w-full md:w-1/2 h-full flex flex-col justify-center p-12 md:p-24 z-10">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className={`${streach.className} text-[3rem] md:text-[8rem] lg:text-[10rem] text-white uppercase tracking-tighter leading-none`}
              >
                Inquire
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={`${syne.className} mt-8 text-white/50 uppercase tracking-[0.5em] text-sm`}
              >
                Global Concierge Team
              </motion.p>
           </div>
           
           {/* Right side image */}
           <div className="absolute md:relative inset-0 md:w-1/2 w-full h-full overflow-hidden">
             <motion.img
               initial={{ scale: 1.1 }}
               animate={{ scale: 1 }}
               transition={{ duration: 2, ease: "easeOut" }}
               src="https://picsum.photos/1080/1086"
               alt="Contact"
               className="w-full h-full object-cover opacity-30 md:opacity-100 grayscale"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 md:via-transparent to-transparent md:bg-none" />
           </div>
        </section>

        {/* --- Two Column Form & Info --- */}
        <section className="w-full flex flex-col lg:flex-row bg-white min-h-screen border-b border-black/10">
          
          {/* Left Column: Direct Info & FAQ */}
          <div className="w-full lg:w-1/2 p-12 md:p-24 border-b lg:border-b-0 lg:border-r border-black/10 flex flex-col gap-24">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8">
              <div className="flex flex-col gap-4">
                <LucideMail className="text-black/30" size={40} strokeWidth={1} />
                <h3 className={`${syne.className} text-sm uppercase tracking-widest font-bold text-black`}>Email</h3>
                <p className={`${dmSans.className} text-xl text-black/60 font-light`}>concierge@skyblue.aero</p>
              </div>
              
              <div className="flex flex-col gap-4">
                <LucidePhone className="text-black/30" size={40} strokeWidth={1} />
                <h3 className={`${syne.className} text-sm uppercase tracking-widest font-bold text-black`}>Direct Line</h3>
                <p className={`${dmSans.className} text-xl text-black/60 font-light`}>+1 (800) SKY-BLUE</p>
              </div>
              
              <div className="md:col-span-2 flex flex-col gap-4 border-t border-black/10 pt-16">
                <LucideMapPin className="text-black/30" size={40} strokeWidth={1} />
                <h3 className={`${syne.className} text-sm uppercase tracking-widest font-bold text-black`}>Global Headquarters</h3>
                <p className={`${dmSans.className} text-xl text-black/60 font-light leading-relaxed`}>
                  Suite 450, Aviation Plaza, <br />
                  Mumbai International Airport, <br />
                  India 400099
                </p>
              </div>
            </div>

            <div>
              <h2 className={`${roxter.className} text-4xl md:text-5xl uppercase mb-12 text-black leading-none`}>
                Common <br /> Inquiries
              </h2>
              <div className="flex flex-col w-full border-t border-black/10">
                {contactFaqs.map((faq, i) => (
                   <FAQCard
                     key={i}
                     item={faq}
                     i={i}
                     isOpen={isOpen}
                     setIsOpen={setIsOpen}
                   />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-1/2 p-12 md:p-24 bg-[#F9F9F9] flex flex-col justify-center">
             <div className="max-w-xl mx-auto w-full">
                <h2 className={`${roxter.className} text-4xl md:text-5xl uppercase mb-16 text-black leading-none`}>
                  Request <br /> Flight
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-black/10 pb-12">
                    <div className="flex flex-col gap-4">
                      <label className={`${syne.className} text-xs uppercase tracking-[0.2em] font-bold text-black/50`}>First Name</label>
                      <input required placeholder="John" className="bg-transparent border-0 border-b border-black/20 pb-4 text-xl placeholder:text-black/20 focus:outline-none focus:border-black transition-colors rounded-none w-full text-black font-light" />
                    </div>
                    <div className="flex flex-col gap-4">
                      <label className={`${syne.className} text-xs uppercase tracking-[0.2em] font-bold text-black/50`}>Last Name</label>
                      <input required placeholder="Doe" className="bg-transparent border-0 border-b border-black/20 pb-4 text-xl placeholder:text-black/20 focus:outline-none focus:border-black transition-colors rounded-none w-full text-black font-light" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-4 border-b border-black/10 pb-12">
                    <label className={`${syne.className} text-xs uppercase tracking-[0.2em] font-bold text-black/50`}>Email Address</label>
                    <input required type="email" placeholder="john@company.com" className="bg-transparent border-0 border-b border-black/20 pb-4 text-xl placeholder:text-black/20 focus:outline-none focus:border-black transition-colors rounded-none w-full text-black font-light" />
                  </div>

                  <div className="flex flex-col gap-4 border-b border-black/10 pb-12">
                    <label className={`${syne.className} text-xs uppercase tracking-[0.2em] font-bold text-black/50`}>Inquiry Details</label>
                    <textarea required placeholder="Discuss routing, dates, and aircraft preferences..." className="bg-transparent border-0 border-b border-black/20 pb-4 text-xl placeholder:text-black/20 focus:outline-none focus:border-black transition-colors rounded-none w-full min-h-[150px] resize-none text-black font-light" />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${dmSans.className} mt-8 py-6 px-12 bg-black text-white hover:bg-black/80 transition-colors uppercase tracking-[0.2em] text-sm flex items-center justify-between group disabled:opacity-50`}
                  >
                    <span>{isSubmitting ? "Transmitting..." : "Submit Inquiry"}</span>
                    {!isSubmitting && <LucideSend size={18} className="group-hover:translate-x-2 transition-transform" />}
                  </button>
                </form>
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
      </main>
    </SmoothScroll>
  );
}
