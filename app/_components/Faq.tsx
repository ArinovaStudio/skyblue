"use client"

import { fetcher } from "@/lib/constants"
import { useState } from "react"
import useSWR from "swr"
import { motion, useScroll, useTransform } from "framer-motion"

import { FAQCard, FAQCardSkeleton } from "./FaqCard"
import ErrorLoading from "@/components/ErrorLoading"

const clients = [
  { id: 1, name: "Adani", logo: "https://picsum.photos/1080/1080" },
  { id: 2, name: "Adani", logo: "https://picsum.photos/1080/1080" },
  { id: 3, name: "Adani", logo: "https://picsum.photos/1080/1080" },
  { id: 4, name: "Adani", logo: "https://picsum.photos/1080/1080" },
  { id: 5, name: "Adani", logo: "https://picsum.photos/1080/1080" },
  { id: 6, name: "Adani", logo: "https://picsum.photos/1080/1080" },
  { id: 7, name: "Adani", logo: "https://picsum.photos/1080/1080" },
]

export function transformFaqs(tasks: any[]) {
  return tasks.map((task) => {
    const obj: any = { id: task.gid }

    task.custom_fields.forEach((field: any) => {
      if (field.type === "text") {
        obj[field.name] = field.text_value
      }
    })

    return obj
  })
}

export default function Faq({ ref }: { ref?: any }) {

  const [isOpen, setIsOpen] = useState<number | null>(null)

  const { data, isLoading, error } = useSWR("/api/faqs", fetcher)

  const faqs = data?.data ? transformFaqs(data.data) : []

  const { scrollYProgress } = useScroll({
    target: ref || undefined,
    offset: ["start start", "end end"],
  });
  
  // Translate the FAQ section manually based on scroll
  const yFaq = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <div className="flex h-screen flex-col items-center py-18 md:pt-20 px-3 md:px-6 gap-6 overflow-hidden">

      {/* Top Section */}
      <motion.div style={{ y: yFaq }} className="max-w-[1300px] w-full flex flex-col lg:flex-row gap-6 lg:gap-8 items-start pb-20">

        {/* FAQ LIST */}
        <div className="w-full lg:w-[55%]">

          <h1 className="uppercase font-roxter text-2xl md:text-4xl text-gray-300">
            skyblue
          </h1>

          <p className="uppercase font-syne text-xs md:text-base text-gray-600 font-bold mt-1">
            A BETTER WAY TO FLY
          </p>

          <div className="flex flex-col gap-4 mt-6">

            <ErrorLoading
              error={error}
              emptyMessage="No Faqs found"
              loadingCard={FAQCardSkeleton}
              loading={isLoading}
              dataLength={faqs.length}
              loadingCount={4}
              loadingRows={4}
              loadingCols={1}
            >

              {faqs.map((faq, i) => (
                <FAQCard
                  key={faq.id || i}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  i={i}
                  item={faq}
                />
              ))}

            </ErrorLoading>

          </div>

        </div>

        {/* SIDE IMAGE (STATIC) */}
        <div
          className="w-full lg:w-[45%] flex justify-center items-center max-md:hidden md:max-h-[450px]"
        >
          <div className="w-full h-full bg-gray-200 overflow-hidden">
            <img
              src="https://picsum.photos/1080/1080"
              alt="FAQ"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </motion.div>

      {/* Clients */}
      <h1 className="font-streach mt-2 uppercase text-2xl md:text-4xl text-center">
        our clients
      </h1>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4 w-full max-w-[1300px]">

        {clients.map((item, i) => (
          <div
            key={item.id + i}
            className="w-full h-15 sm:h-20 md:h-24 bg-red-400"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

      </div>

    </div>
  )
}