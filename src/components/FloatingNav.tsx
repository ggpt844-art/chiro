"use client";

import { useState, useEffect } from "react";
import { Phone, Calendar } from "lucide-react";
import LionMark from "./LionMark";

type Props = {
  phone: string;
};

export default function FloatingNav({ phone }: Props) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 top-3 z-40 w-[calc(100%-1.5rem)] max-w-md transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-between gap-2 rounded-full border border-[#b73026]/30 bg-[#1a1a1a]/85 backdrop-blur-md px-3 py-2 shadow-2xl">
        <a
          href="#top"
          aria-label="Powerflow Chiropractic — back to top"
          className="flex items-center gap-2 pl-1 pr-2 text-white"
        >
          <LionMark size={28} inverted />
          <span className="text-[14px] font-bold tracking-tight">Home</span>
        </a>
        <div className="flex items-center gap-2">
          <a
            href="#book"
            className="rounded-full border border-[#f2a93b] text-[#f2a93b] px-3.5 py-1.5 text-[13px] font-semibold hover:bg-[#f2a93b]/10 transition-colors flex items-center gap-1.5"
          >
            <Calendar size={13} />
            Book
          </a>
          <a
            href={`tel:${phone}`}
            className="rounded-full bg-[#f2a93b] text-[#1a1a1a] px-3.5 py-1.5 text-[13px] font-bold hover:bg-[#d8902a] transition-colors flex items-center gap-1.5"
            aria-label="Call Powerflow Chiropractic"
          >
            <Phone size={13} />
            Call
          </a>
        </div>
      </div>
    </div>
  );
}
