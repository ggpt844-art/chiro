"use client";

import { useState } from "react";
import { Phone, ChevronRight, RotateCcw, Check } from "lucide-react";

const STEPS: { q: string; options: string[] }[] = [
  {
    q: "Where is your main concern?",
    options: [
      "Neck pain or headaches",
      "Upper back or shoulders",
      "Lower back or sciatica",
      "Hips or general posture",
      "Not sure — general check-up",
    ],
  },
  {
    q: "How long has it been bothering you?",
    options: ["A few days", "Weeks", "Months", "Years"],
  },
  {
    q: "Have you tried anything else for it?",
    options: [
      "No, this would be my first try",
      "Massage or physiotherapy",
      "Pain medication",
      "Other treatments",
    ],
  },
];

type Props = {
  phone: string;
  phoneDisplay: string;
};

/**
 * Optional 3-step "is this for me?" quiz.
 * - Always renders a "Skip · call us" link so the user can bail at any step.
 * - Big tap targets, single primary action per screen.
 * - No data is sent anywhere; result is encouragement + a phone CTA.
 */
export default function Quiz({ phone, phoneDisplay }: Props) {
  const [step, setStep] = useState<number>(-1);
  const [answers, setAnswers] = useState<string[]>([]);

  const choose = (option: string) => {
    setAnswers((prev) => [...prev, option]);
    setStep((s) => s + 1);
  };

  const reset = () => {
    setStep(-1);
    setAnswers([]);
  };

  // Intro
  if (step === -1) {
    return (
      <div className="rounded-3xl bg-white ring-1 ring-black/5 shadow-sm p-7 max-w-md mx-auto text-center">
        <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
          Optional · 30 seconds
        </p>
        <h3 className="font-display text-[26px] font-black leading-tight text-[#1a1a1a]">
          Is this for me?
        </h3>
        <p className="mt-3 text-[#2c2c2c] text-[15px] leading-relaxed">
          Three quick questions so Dr. Sandy can be ready before you walk in.
        </p>
        <button
          type="button"
          onClick={() => setStep(0)}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#b73026] text-white px-7 py-3.5 font-bold text-sm hover:bg-[#8e1f17] transition-colors shadow-md shadow-[#b73026]/20"
        >
          Start <ChevronRight size={16} />
        </button>
        <a
          href={`tel:${phone}`}
          className="block mt-4 text-[#b73026] text-sm font-semibold underline-offset-4 hover:underline"
        >
          Or skip · call us at {phoneDisplay}
        </a>
      </div>
    );
  }

  // Result
  if (step >= STEPS.length) {
    return (
      <div className="rounded-3xl bg-white ring-1 ring-black/5 shadow-sm p-7 max-w-md mx-auto text-center">
        <span className="grid place-items-center w-12 h-12 mx-auto mb-4 rounded-full bg-[#b73026]/10 text-[#b73026]">
          <Check size={22} strokeWidth={2.5} />
        </span>
        <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
          Good news
        </p>
        <h3 className="font-display text-[26px] font-black leading-tight text-[#1a1a1a]">
          Yes — we can likely help.
        </h3>
        <p className="mt-3 text-[#2c2c2c] text-[15px] leading-relaxed">
          Based on your answers, a free spinal check-up with Dr. Sandy is a
          good next step. He&apos;ll do a posture exam, a range-of-motion
          screening, and walk you through a plan. No pressure, no contracts.
        </p>
        <a
          href={`tel:${phone}`}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#b73026] text-white px-7 py-4 font-bold text-base hover:bg-[#8e1f17] transition-colors shadow-md shadow-[#b73026]/20 w-full"
        >
          <Phone size={18} />
          Call to book · {phoneDisplay}
        </a>
        <button
          type="button"
          onClick={reset}
          className="mt-4 inline-flex items-center gap-1.5 text-[#2c2c2c] text-sm font-semibold hover:text-[#b73026] transition-colors"
        >
          <RotateCcw size={13} /> Start over
        </button>
        <p className="sr-only">
          Your answers were: {answers.join(", ")}.
        </p>
      </div>
    );
  }

  const current = STEPS[step];
  return (
    <div className="rounded-3xl bg-white ring-1 ring-black/5 shadow-sm p-7 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-5 gap-4">
        <span className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold">
          Step {step + 1} of {STEPS.length}
        </span>
        <a
          href={`tel:${phone}`}
          className="inline-flex items-center gap-1 text-[#b73026] text-xs font-bold underline-offset-4 hover:underline whitespace-nowrap"
        >
          <Phone size={12} /> Skip · call us
        </a>
      </div>

      {/* progress bar */}
      <div className="h-1.5 w-full rounded-full bg-[#fdfaf4] overflow-hidden mb-6">
        <div
          className="h-full bg-[#b73026] transition-all duration-500"
          style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          aria-hidden
        />
      </div>

      <h3 className="font-display text-[22px] sm:text-[24px] font-black leading-tight text-[#1a1a1a]">
        {current.q}
      </h3>
      <ul className="mt-5 flex flex-col gap-2.5">
        {current.options.map((option) => (
          <li key={option}>
            <button
              type="button"
              onClick={() => choose(option)}
              className="w-full text-left rounded-2xl bg-[#fdfaf4] hover:bg-[#b73026] hover:text-white ring-1 ring-black/5 hover:ring-[#b73026] px-5 py-4 text-[15px] font-semibold text-[#1a1a1a] transition-colors"
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
