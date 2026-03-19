import { AnimatePresence } from "framer-motion";
import React from "react";
import Features from "./Features";
import Branding2 from "./Branding2";
import Branding1 from "./Branding1";
import Branding3 from "./Branding3";

export default function SecondSection() {
  return (
    <>
      <Features />
      <Branding1 />
      <Branding2 />
      <Branding3 />
    </>
  );
}
