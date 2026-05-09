"use client";

import { useEffect, useState } from "react";
import { Calendar, Phone } from "lucide-react";

type Props = {
  phone: string;
  phoneDisplay: string;
};

export default function StickyMobileCTA({ phone, phoneDisplay }: Props) {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-50 transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
      role="region"
      aria-label="Quick booking actions"
    >
      <div className="bg-[#1a1a1a]/95 backdrop-blur-md border-t border-white/10 px-4 pt-3 pb-[max(env(safe-area-inset-bottom),0.75rem)] flex items-center gap-2 shadow-2xl shadow-black/40">
        <a
          href="#book"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#f2a93b] text-[#1a1a1a] px-5 py-3.5 font-bold text-[15px] active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a]"
        >
          <Calendar size={16} />
          Book Free Check-up
        </a>
        <a
          href={`tel:${phone}`}
          aria-label={`Call ${phoneDisplay}`}
          className="grid place-items-center w-12 h-12 rounded-full bg-[#b73026] text-white active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a]"
        >
          <Phone size={18} />
        </a>
      </div>
    </div>
  );
}
