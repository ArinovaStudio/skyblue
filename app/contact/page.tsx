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

  return (
    <SmoothScroll>
      <main className="bg-white text-black min-h-screen">
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

        <Footer />
      </main>
    </SmoothScroll>
  );
}
