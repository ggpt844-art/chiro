"use client";

import { useState } from "react";
import { Send, CheckCircle2, Phone } from "lucide-react";

type Props = {
  toEmail: string;
  phoneDisplay: string;
  phone: string;
};

/**
 * No-backend contact form.
 * On submit, opens the user's email client with a pre-filled mailto: so
 * the front desk receives the message until a real form backend is wired.
 */
export default function ContactForm({ toEmail, phoneDisplay, phone }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneVal, setPhoneVal] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New website enquiry from ${name || "a patient"}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phoneVal}\n\nMessage:\n${message}\n\n— Sent from powerflowchiropractic.ca`
    );
    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl bg-white ring-1 ring-black/5 p-8 text-center shadow-sm">
        <span className="grid place-items-center w-14 h-14 mx-auto mb-4 rounded-full bg-[#7d9070]/15 text-[#7d9070]">
          <CheckCircle2 size={28} />
        </span>
        <h3 className="font-display text-[22px] font-black leading-tight">
          Your email is opening.
        </h3>
        <p className="mt-3 text-[#2c2c2c] text-[14.5px] leading-relaxed">
          If nothing pops up, call us directly — we&apos;re fastest by phone.
        </p>
        <a
          href={`tel:${phone}`}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#b73026] text-white px-6 py-3 font-bold text-sm hover:bg-[#8e1f17] transition-colors"
        >
          <Phone size={15} />
          {phoneDisplay}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white ring-1 ring-black/5 p-6 sm:p-8 shadow-sm flex flex-col gap-4"
    >
      <Field
        label="Your name"
        required
        type="text"
        autoComplete="name"
        value={name}
        onChange={setName}
      />
      <Field
        label="Email"
        required
        type="email"
        autoComplete="email"
        value={email}
        onChange={setEmail}
      />
      <Field
        label="Phone (optional)"
        type="tel"
        autoComplete="tel"
        value={phoneVal}
        onChange={setPhoneVal}
      />
      <label className="flex flex-col gap-1.5">
        <span className="text-[12.5px] font-semibold text-[#1a1a1a]">
          Your message
        </span>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what's bothering you, or ask any question…"
          className="rounded-xl border border-black/15 bg-[#fdfaf4] px-3.5 py-3 text-[15px] text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#b73026] focus:border-transparent transition resize-y min-h-[120px]"
        />
      </label>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#b73026] text-white px-7 py-4 font-bold text-[15px] hover:bg-[#8e1f17] transition-colors shadow-md shadow-[#b73026]/20"
      >
        <Send size={16} />
        Send Message
      </button>
      <p className="text-[12px] text-[#2c2c2c]/80 text-center">
        We reply within 1 business day. For faster help, call{" "}
        <a
          href={`tel:${phone}`}
          className="text-[#b73026] font-semibold hover:underline"
        >
          {phoneDisplay}
        </a>
        .
      </p>
    </form>
  );
}

function Field({
  label,
  required,
  type,
  autoComplete,
  value,
  onChange,
}: {
  label: string;
  required?: boolean;
  type: "text" | "email" | "tel";
  autoComplete?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[12.5px] font-semibold text-[#1a1a1a]">
        {label}
        {required && <span className="text-[#b73026] ml-0.5">*</span>}
      </span>
      <input
        required={required}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-black/15 bg-[#fdfaf4] px-3.5 py-3 text-[15px] text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#b73026] focus:border-transparent transition"
      />
    </label>
  );
}
