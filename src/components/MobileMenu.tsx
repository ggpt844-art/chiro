"use client";

import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import LionMark from "./LionMark";

type NavLink = { label: string; href: string; tag?: string };

const links: NavLink[] = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about", tag: "Coming soon" },
  { label: "Meet Dr. Sandy", href: "#doctor" },
  { label: "Services", href: "#services" },
  { label: "Treatments", href: "#treatments" },
  { label: "First Visit", href: "#first-visit" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog", tag: "Coming soon" },
  { label: "Contact", href: "#contact" },
];

type Props = {
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
};

export default function MobileMenu({ phone, phoneDisplay, whatsapp }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="grid place-items-center w-11 h-11 rounded-full hover:bg-white/5 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2a93b]"
      >
        <Menu size={26} />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-[#1a1a1a]/97 backdrop-blur-sm flex flex-col p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex items-center justify-between mb-10">
            <LionMark size={36} withWordmark inverted />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid place-items-center w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2a93b]"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 flex-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3.5 text-2xl font-semibold text-white/90 hover:text-[#f2a93b] transition-colors border-b border-white/10 flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.tag && (
                  <span className="text-[10px] text-[#f2a93b]/80 bg-[#f2a93b]/10 px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
                    {link.tag}
                  </span>
                )}
              </a>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-2.5">
            <a
              href={`tel:${phone}`}
              onClick={() => setOpen(false)}
              className="rounded-full bg-[#f2a93b] text-[#1a1a1a] px-6 py-4 text-base font-bold flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              {phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-full bg-[#25d366] text-white px-6 py-4 text-base font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </>
  );
}
