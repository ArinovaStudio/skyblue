// "use client";

// import { useRef, useState } from "react";
// import {
//   AnimatePresence,
//   motion,
//   useMotionValueEvent,
//   useScroll,
// } from "framer-motion";
// import background from "@/assets/sky-bg.png";
// import SunnyDay from "@/assets/sunny-day.png";
// import Hero from "@/app/_components/Hero";
// import Hero2 from "./_components/Hero2";
// import Features from "./_components/Features";
// import Branding1 from "./_components/Branding1";
// import Faq from "@/app/_components/Faq";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";

// export default function Home() {
//   const ref = useRef(null);

//   // useEffect(() => {
//   //   const checkConnection = async () => {
//   //     const res = await fetch("https://app.asana.com/api/1.0/users/me", {
//   //       headers: {
//   //         Authorization: `Bearer ${process.env.NEXT_PUBLIC_ASANA_TOKEN}`,
//   //       },
//   //     });
//   //     const data = await res.json();
//   //     console.log(data);
//   //   };
//   //   checkConnection();
//   // }, []);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const [section, setSection] = useState(1);

//   useMotionValueEvent(scrollYProgress, "change", (v) => {
//     if (v < 0.14) setSection(1);
//     else if (v < 0.28) setSection(2);
//     else if (v < 0.42) setSection(3);
//     else if (v < 0.7) setSection(4);
//     else if (v < 0.9) setSection(7);
//     else setSection(8); // now ~15% scroll space
//   });

//   // 🔥 Section map
//   const sections: Record<number, React.ReactNode> = {
//     1: <Hero scrollProgress={scrollYProgress} />,
//     2: <Hero2 scrollProgress={scrollYProgress} />,
//     3: <Features />,
//     4: <Branding1 scrollProgress={scrollYProgress} />,
//     7: <Faq scrollProgress={scrollYProgress} />,
//     8: <Footer />,
//   };

//   return (
//     <>
//       <Navbar section={section} />
//       <div ref={ref} className="min-h-[1100vh] relative">
//         <div className={`overflow-hidden sticky top-0 min-h-screen`}>
//           <AnimatePresence mode="popLayout">
//             {section !== 7 && (
//               <motion.img
//                 key={[3, 4, 5, 6].includes(section) ? "sunny" : "sky"}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 src={
//                   [3, 4, 5, 6].includes(section) ? SunnyDay.src : background.src
//                 }
//                 className="w-full h-full absolute inset-0 -z-10 object-cover"
//                 transition={{ duration: 0.8, ease: "easeInOut" }}
//               />
//             )}
//           </AnimatePresence>

//           <AnimatePresence mode="popLayout">
//             <motion.div
//               key={section}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.8, ease: "easeInOut" }}
//               className="w-full h-full absolute inset-0"
//             >
//               {sections[section]}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import background from "@/assets/sky-bg.png";
import SunnyDay from "@/assets/sunny-day.png";

import Hero from "@/app/_components/Hero";
import Hero2 from "./_components/Hero2";
import Features from "./_components/Features";
import Branding1 from "./_components/Branding1";
import Faq from "@/app/_components/Faq";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [section, setSection] = useState(1);

  const totalSections = 6;

  // 🔥 Dynamic section detection
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const current = Math.min(
      totalSections,
      Math.max(1, Math.ceil(v * totalSections))
    );
    setSection(current);
  });

  return (
    <>
      <Navbar section={section} />

      <div ref={containerRef} className="relative">
        {/* 🔥 Sticky Background */}
        <div
          className={`sticky top-0 min-h-screen ${
            section === 5 || section === 6
              ? "overflow-y-auto"
              : "overflow-hidden"
          }`}
        >
          <AnimatePresence mode="popLayout">
            {section !== 5 && (
              <motion.img
                key={[3, 4].includes(section) ? "sunny" : "sky"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                src={[3, 4].includes(section) ? SunnyDay.src : background.src}
                className="w-full h-full absolute inset-0 -z-10 object-cover"
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            )}
          </AnimatePresence>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={section}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-full h-full absolute inset-0"
            >
              {section === 1 && <Hero scrollProgress={scrollYProgress} />}
              {section === 2 && <Hero2 scrollProgress={scrollYProgress} />}
              {section === 3 && <Features />}
              {section === 4 && <Branding1 scrollProgress={scrollYProgress} />}
              {section === 5 && <Faq scrollProgress={scrollYProgress} />}
              {section === 6 && <Footer />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 🔥 Real Sections (dynamic height) */}
        <section
          ref={(el) => (sectionRefs.current[0] = el) as any}
          className="min-h-[130vh]"
        />
        <section
          ref={(el) => (sectionRefs.current[1] = el) as any}
          className="min-h-[150vh]"
        />
        <section
          ref={(el) => (sectionRefs.current[2] = el) as any}
          className="min-h-[130vh]"
        />
        <section
          ref={(el) => (sectionRefs.current[3] = el) as any}
          className="min-h-[130vh]"
        />
        <section
          ref={(el) => (sectionRefs.current[4] = el) as any}
          className="min-h-[430vh]"
        />
        <section
          ref={(el) => (sectionRefs.current[5] = el) as any}
          className="min-h-[130vh]"
        />
      </div>
    </>
  );
}
