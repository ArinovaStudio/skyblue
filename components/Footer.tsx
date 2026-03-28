"use client";

import Image from "next/image";
import bg from "@/assets/footer-bg.png";
import plane from "@/assets/plane.png";
import { LucideFacebook } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

function Footer() {
  const getCurrentYear = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  };

  const transition = { duration: 1, delay: 0.5 };

  return (
    <footer className="h-screen max-h-screen relative overflow-hidden flex flex-col justify-between">
      {/* Background (if you want to use it) */}
      <Image
        src={bg}
        alt="footer background"
        fill
        className="object-cover -z-10"
      />

      {/* Top Hero */}
      <div className="relative flex flex-col items-center justify-center py-10 md:py-12 max-md:top-15 px-6">
        <motion.h1
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={transition}
          className="font-streach uppercase text-white text-4xl md:text-[80px] lg:text-[100px] text-center leading-none"
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
        className="w-full backdrop-blur-sm bg-gradient-to-b from-transparent via-white/10 to-white/30 px-6 lg:px-12 py-2 md:py-10 h-[57%]"
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
              viewport={{ once: true }}
              className="font-syne font-bold text-white text-base mt-4"
            >
              info@skyblue.aero
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="font-syne font-bold text-white text-base mt-1"
            >
              9086345xx2
            </motion.p>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              viewport={{ once: true }}
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
          className="flex flex-wrap gap-2 md:gap-3 mt-4 text-black font-syne font-bold text-xs md:text-base uppercase"
        >
          <Link href="/">About Us</Link>
          <span>|</span>
          <Link href="/">Privacy Policy</Link>
          <span>|</span>
          <Link href="/">Terms & Conditions</Link>
          <span>|</span>
          <Link href="/">Refund Policy</Link>
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
    </footer>
  );
}

export default Footer;