"use client";

import LiquidGlass from "@/elements/LiquidGlass";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Button from "@/elements/Button";
import { LucideArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function PillComponent({ children, Visit, className }: any) {
  return (
    <LiquidGlass className={`${className} px-6 py-2`}>
      {Visit ? <Link href={Visit}>{children}</Link> : children}
    </LiquidGlass>
  );
}

function Navbar({ section }: { section: number }) {
  const [open, setOpen] = useState(false);

  const options = [
    { name: "Trip support", link: "#" },
    { name: "Brokerage", link: "#" },
    { name: "Maintenance", link: "#" },
    { name: "Crew leasing", link: "#" },
  ];

  return (
    <>
      {/* Navbar */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="fixed top-6 left-0 w-full px-4 md:px-10 z-50 flex justify-between items-center"
      >
        {/* Logo */}
        <PillComponent Visit="/">
          <Image
            src={logo}
            alt="SkyBlue Logo"
            width={90}
            height={90}
            className={section === 5 ? "!invert" : ""}
          />
        </PillComponent>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <LiquidGlass className="flex items-center px-6 py-3 gap-10">
            {options.map((opt) => (
              <Link
                href={opt.link}
                key={opt.name}
                className="group font-roxter uppercase text-sm inline-block perspective-[1000px]"
              >
                {opt.name.split("").map((char, i) => (
                  <span
                    key={i}
                    className={`inline-block transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:rotate-x-360 ${
                      section === 5 ? "text-foreground" : "text-background"
                    }`}
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </Link>
            ))}
          </LiquidGlass>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <PillComponent Visit="/" className="pl-4 pr-3 py-1">
            <div className="flex items-center gap-3">
              <p
                className={`uppercase ${
                  section === 5 ? "text-foreground" : "text-background"
                }`}
              >
                Contact us
              </p>
              <Button
                className={`p-2 ${
                  section === 5
                    ? "!bg-foreground !text-background"
                    : "bg-background"
                }`}
              >
                <LucideArrowRight size={18} className="-rotate-45" />
              </Button>
            </div>
          </PillComponent>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden z-50 ${
            section === 5 ? "text-black" : "text-white"
          }`}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-40"
          >
            {options.map((opt, index) => (
              <motion.div
                key={opt.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={opt.link}
                  onClick={() => setOpen(false)}
                  className="text-white text-2xl uppercase"
                >
                  {opt.name}
                </Link>
              </motion.div>
            ))}

            <PillComponent Visit="/">
              <div className="flex items-center gap-3">
                <p className="uppercase text-white">Contact us</p>
                <Button className="p-2">
                  <LucideArrowRight size={18} className="-rotate-45" />
                </Button>
              </div>
            </PillComponent>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;