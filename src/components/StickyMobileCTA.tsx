"use client";

import { useEffect, useState } from "react";
import { Calendar, Phone, MessageCircle } from "lucide-react";

type Props = {
  phone: string;
  phoneDisplay: string;
};

/**
 * Mobile-only sticky bottom bar.
 * After the user has scrolled past the #book section, the primary action
 * swaps from "Book Free Check-up" → "Call Dr. Sandy" so the bar stays
 * useful instead of pointing back at a section the user already saw.
 */
export default function StickyMobileCTA({ phone, phoneDisplay }: Props) {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [pastBook, setPastBook] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      setShow(window.scrollY > 600);
      const book = document.getElementById("book");
      if (book) {
        const rect = book.getBoundingClientRect();
        setPastBook(rect.bottom < 0);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-50 transition-all duration-300 ${
        show
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
      role="region"
      aria-label="Quick booking actions"
    >
      <div className="bg-white/95 backdrop-blur-md border-t border-black/10 px-4 pt-3 pb-[max(env(safe-area-inset-bottom),0.75rem)] flex items-center gap-2 shadow-2xl shadow-black/15">
        {pastBook ? (
          <a
            href={`tel:${phone}`}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#b73026] text-white px-5 py-3.5 font-bold text-[15px] active:scale-95 transition-transform shadow-lg shadow-[#b73026]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b73026] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <Phone size={16} />
            Call Dr. Sandy
          </a>
        ) : (
          <a
            href="#book"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#b73026] text-white px-5 py-3.5 font-bold text-[15px] active:scale-95 transition-transform shadow-lg shadow-[#b73026]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b73026] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <Calendar size={16} />
            Book Free Check-up
          </a>
        )}
        {pastBook ? (
          <a
            href={`https://wa.me/1${phone}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="grid place-items-center w-12 h-12 rounded-full bg-[#25d366] text-white active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25d366] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <MessageCircle size={18} />
          </a>
        ) : (
          <a
            href={`tel:${phone}`}
            aria-label={`Call ${phoneDisplay}`}
            className="grid place-items-center w-12 h-12 rounded-full bg-[#1a1a1a] text-white active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <Phone size={18} />
          </a>
        )}
      </div>
    </div>
  );
}
