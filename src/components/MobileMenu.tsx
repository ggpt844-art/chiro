"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import LionMark from "./LionMark";

type NavLink = { label: string; href: string; tag?: string };

const links: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "First Visit", href: "/#first-visit" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
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
        className="grid place-items-center w-11 h-11 rounded-full hover:bg-[#1a1a1a]/5 text-[#1a1a1a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b73026]"
      >
        <Menu size={26} />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-[#fdfaf4] flex flex-col p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex items-center justify-between mb-10">
            <LionMark size={42} withWordmark />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid place-items-center w-11 h-11 rounded-full bg-[#1a1a1a]/5 hover:bg-[#1a1a1a]/10 text-[#1a1a1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b73026]"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 flex-1">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3.5 text-2xl font-semibold text-[#1a1a1a]/90 hover:text-[#b73026] transition-colors border-b border-black/10 flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.tag && (
                  <span className="text-[10px] text-[#b73026] bg-[#b73026]/10 px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
                    {link.tag}
                  </span>
                )}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-2.5">
            <a
              href={`tel:${phone}`}
              onClick={() => setOpen(false)}
              className="rounded-full bg-[#b73026] text-white px-6 py-4 text-base font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#b73026]/20"
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
