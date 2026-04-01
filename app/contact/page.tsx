"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { roxter, streach, syne, dmSans } from "@/utils/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import LiquidGlass from "@/elements/LiquidGlass";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FAQCard } from "@/app/_components/FaqCard";
import { LucideMail, LucidePhone, LucideMapPin, LucideSend } from "lucide-react";
import toast from "react-hot-toast";

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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Your message has been sent. Our team will contact you shortly.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <SmoothScroll>
      <main className="bg-background text-foreground min-h-screen">
        <Navbar section={1} />

        {/* --- Hero Section --- */}
        <section className="pt-40 pb-20 px-6 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`${streach.className} text-5xl md:text-8xl uppercase tracking-tighter`}
          >
            Connect with <br /> <span className="text-primary">Precision</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`${syne.className} mt-6 text-foreground/60 uppercase tracking-[0.4em] text-sm md:text-lg`}
          >
            Your seamless journey begins here
          </motion.p>
        </section>

        {/* --- Contact Content --- */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 pb-24 grid lg:grid-cols-2 gap-20">
          
          {/* Left Column: Info & FAQ */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-12"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <LiquidGlass className="p-8 group hover:bg-white/20 transition-all cursor-default">
                <LucideMail className="mb-4 text-primary" size={32} />
                <h3 className={`${roxter.className} text-xl uppercase mb-2`}>Email</h3>
                <p className={`${dmSans.className} text-sm opacity-70`}>concierge@skyblue.aero</p>
              </LiquidGlass>
              
              <LiquidGlass className="p-8 group hover:bg-white/20 transition-all cursor-default">
                <LucidePhone className="mb-4 text-primary" size={32} />
                <h3 className={`${roxter.className} text-xl uppercase mb-2`}>Direct Line</h3>
                <p className={`${dmSans.className} text-sm opacity-70`}>+1 (800) SKY-BLUE</p>
              </LiquidGlass>
              
              <LiquidGlass className="p-8 md:col-span-2 group hover:bg-white/20 transition-all cursor-default">
                <LucideMapPin className="mb-4 text-primary" size={32} />
                <h3 className={`${roxter.className} text-xl uppercase mb-2`}>Global Headquarters</h3>
                <p className={`${dmSans.className} text-sm opacity-70 leading-relaxed`}>
                  Suite 450, Aviation Plaza, <br />
                  Mumbai International Airport, India
                </p>
              </LiquidGlass>
            </div>

            <div className="mt-12">
              <h2 className={`${roxter.className} text-3xl uppercase mb-8`}>Travel Inquiries FAQ</h2>
              <div className="space-y-2">
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
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <LiquidGlass className="p-10 !rounded-3xl shadow-2xl bg-white/5 border-white/10">
              <h2 className={`${roxter.className} text-3xl uppercase mb-8 text-white`}>Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className={`${syne.className} text-[10px] uppercase tracking-widest text-white/50 px-1`}>First Name</label>
                    <Input required placeholder="John" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className={`${syne.className} text-[10px] uppercase tracking-widest text-white/50 px-1`}>Last Name</label>
                    <Input required placeholder="Doe" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className={`${syne.className} text-[10px] uppercase tracking-widest text-white/50 px-1`}>Email Address</label>
                  <Input required type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12" />
                </div>

                <div className="space-y-2">
                  <label className={`${syne.className} text-[10px] uppercase tracking-widest text-white/50 px-1`}>Subject</label>
                  <Input required placeholder="Corporate Charter Inquiry" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12" />
                </div>

                <div className="space-y-2">
                  <label className={`${syne.className} text-[10px] uppercase tracking-widest text-white/50 px-1`}>Message</label>
                  <Textarea required placeholder="Tell us about your travel requirements..." className="bg-white/5 border-white/10 text-white placeholder:text-white/20 min-h-[150px] resize-none" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${dmSans.className} w-full py-4 bg-white text-background rounded-full font-bold uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-3 disabled:opacity-50`}
                >
                  {isSubmitting ? "Sending..." : "Send Request"}
                  {!isSubmitting && <LucideSend size={18} />}
                </button>
              </form>
            </LiquidGlass>
          </motion.div>

        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
