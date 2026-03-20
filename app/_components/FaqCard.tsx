"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function FAQCardSkeleton() {
  return (
    <div className="w-full py-3 border-b border-gray-200">
      
      {/* Header */}
      <div className="flex justify-between items-center gap-3">
        
        {/* Question Skeleton */}
        <Skeleton className="h-5 w-[70%] rounded-md" />

        {/* Icon Skeleton */}
        <Skeleton className="h-6 w-6 rounded-md" />
      </div>

      {/* Answer Skeleton */}
      <div className="mt-3 space-y-2">
        <Skeleton className="h-3 w-[90%] rounded-md" />
      </div>
    </div>
  );
}


export function FAQCard({
  item,
  i,
  isOpen,
  setIsOpen,
}: {
  item: any;
  i: number;
  isOpen: any;
  setIsOpen: any;
}) {
  return (
    <div
      key={i}
      className={`w-full py-3 border-b border-gray-200 cursor-pointer transition-all duration-500 ${
        isOpen === i ? "max-h-72" : "max-h-20"
      } overflow-hidden`}
      onClick={() => setIsOpen(isOpen === i ? null : i)}
    >
      <div className="flex justify-between items-center gap-3">
        <h2 className="font-syne font-bold text-base md:text-lg text-gray-900">
          {item.question}
        </h2>
        <span className="text-xl md:text-2xl font-bold">+</span>
      </div>

      <p
        className={`text-xs md:text-sm mt-2 transition-all duration-300 ${
          isOpen === i
            ? "opacity-100 translate-y-0"
            : "opacity-0 max-md:hidden -translate-y-4"
        }`}
      >
        {item.answer}
      </p>
    </div>
  );
}
