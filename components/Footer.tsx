import Image from "next/image";
import React from "react";
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
  const transition = { duration: 1, delay: 3 };
  return (
    <footer className="h-screen relative overflow-hidden">
      {/* Top Hero */}
      <div className="relative flex flex-col items-center justify-center py-20 px-6">
        <motion.h1
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={transition}
          className="font-streach uppercase text-white text-[60px] md:text-[120px] lg:text-[150px] text-center leading-none"
        >
          skybblue
        </motion.h1>

        <motion.div
          initial={{ scale: 0.4 }}
          whileInView={{ scale: 4 }}
          transition={{ duration: 1, delay: 2 }}
          className="relative w-full max-w-[700px] h-[160px] top-16"
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
        className="w-full backdrop-blur-sm bg-gradient-to-b from-black/30 to-white/80 px-6 lg:px-12 py-14"
      >
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row gap-10 justify-between">
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={transition}
            viewport={{ once: true }}
            className="font-syne font-bold text-white text-lg md:text-xl lg:w-[40%]"
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
            <h2 className="font-streach uppercase text-white text-3xl md:text-4xl">
              Contact us
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="font-syne font-bold text-white text-lg mt-6"
            >
              info@skyblue.aero
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="font-syne font-bold text-white text-lg mt-2"
            >
              9086345xx2
            </motion.p>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex gap-3 mt-6"
            >
              <div className="w-12 h-12 bg-white rounded-full grid place-items-center">
                <LucideFacebook size={20} color="black" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 md:gap-5 mt-12 text-black font-syne font-bold text-sm md:text-lg uppercase"
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
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mt-10"
        >
          <p className="font-syne font-semibold text-base md:text-lg">
            © {getCurrentYear()} All copyright are reserved.
          </p>

          <div className="hidden lg:block flex-1 border-t border-black mx-6"></div>

          <p className="font-sans text-base md:text-lg">
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
