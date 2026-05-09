"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type FaqItem = { q: string; a: string };

type Props = {
  items: FaqItem[];
};

export default function FAQ({ items }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div
            key={item.q}
            className="rounded-2xl border border-[#1a1a1a]/10 bg-white overflow-hidden hover:border-[#b73026]/30 transition-colors"
          >
            <button
              onClick={() => setOpen(isOpen ? null : idx)}
              className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2a93b] focus-visible:ring-inset"
              aria-expanded={isOpen}
            >
              <span className="text-[17px] md:text-[18px] font-semibold text-[#1a1a1a] leading-snug">
                {item.q}
              </span>
              <span
                className={`shrink-0 grid place-items-center w-9 h-9 rounded-full transition-colors ${
                  isOpen ? "bg-[#b73026] text-white" : "bg-[#f5efe2] text-[#1a1a1a]"
                }`}
                aria-hidden
              >
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[15px] md:text-[16px] text-[#4a4a4a] leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
