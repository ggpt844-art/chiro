import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight, Phone, Sparkles } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingNav from "@/components/FloatingNav";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Reveal from "@/components/Reveal";
import AwardBadge from "@/components/AwardBadge";
import CountUp from "@/components/CountUp";
import { CLINIC } from "@/lib/clinic";
import { awards } from "@/lib/content";
import { IMAGE_BLUR } from "@/lib/imageBlur";

export const metadata: Metadata = {
  title: "About Dr. Sandy Bhasin & Powerflow Chiropractic",
  description:
    "Meet Dr. Sandy Bhasin (B.Sc, D.C) and the Powerflow Chiropractic team — a Mississauga family clinic since 2014, voted #1 by Top Choice Awards 7 years running.",
  alternates: { canonical: "https://powerflowchiropractic.ca/about" },
};

export default function AboutPage() {
  return (
    <main id="main" className="relative bg-[#fdfaf4] text-[#1a1a1a]">
      <FloatingNav phone={CLINIC.phone} />
      <StickyMobileCTA phone={CLINIC.phone} phoneDisplay={CLINIC.phoneDisplay} />

      {/* Header band (same chrome as home) */}
      <section className="relative bg-[#fdfaf4] overflow-hidden">
        <div aria-hidden className="drift-x pointer-events-none absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full bg-[#b73026] opacity-[0.07] blur-[120px]" />
        <SiteHeader />
        <div className="relative px-5 pt-6 pb-14 max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              About the Clinic
            </p>
            <h1 className="font-display text-[44px] sm:text-[60px] font-black leading-[1.02] tracking-tight">
              <span className="text-[#b73026] italic">Life. Power. Freedom.</span>
            </h1>
            <p className="mt-5 text-[#2c2c2c] text-[16px] sm:text-[17px] leading-relaxed max-w-xl mx-auto">
              Powerflow Chiropractic is a family clinic in the heart of
              Mississauga, founded by {CLINIC.doctor.name} ({CLINIC.doctor.credentials}) in {CLINIC.yearFounded}. Our mission is to keep your central
              nervous system strong so your body can express its fullest
              physical, mental, and emotional well-being.
            </p>
          </Reveal>
        </div>
      </section>

      {/* By the numbers */}
      <section className="relative bg-white border-y border-black/5 px-5 py-10">
        <ul className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4 text-center">
          {[
            { value: <CountUp to={12000} duration={1400} suffix="+" />, label: "Patient adjustments" },
            { value: <CountUp to={10} duration={900} suffix="+ yrs" />, label: "Serving Mississauga" },
            { value: <CountUp to={CLINIC.rating} duration={1100} decimals={1} />, label: `Google rating · ${CLINIC.reviewCount}+ reviews` },
            { value: awards.length.toString(), label: "Industry awards earned" },
          ].map((stat) => (
            <li key={stat.label} className="flex flex-col items-center px-2">
              <div className="font-display text-[30px] sm:text-[36px] font-black text-[#b73026] leading-none">
                {stat.value}
              </div>
              <div className="mt-2 text-[12px] sm:text-[13px] text-[#2c2c2c] uppercase tracking-wider font-semibold leading-snug max-w-[160px]">
                {stat.label}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Meet Dr. Sandy — full */}
      <section id="dr-sandy" className="px-5 py-20 bg-[#fdfaf4]">
        <div className="max-w-3xl mx-auto grid md:grid-cols-[1fr_1.1fr] gap-10 items-start">
          <Reveal>
            <div className="relative aspect-[4/5] w-full rounded-[28px] overflow-hidden ring-1 ring-black/5 shadow-xl">
              <Image
                src="/images/dr-sandy.png"
                alt={`${CLINIC.doctor.name}, ${CLINIC.doctor.credentials}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 380px"
                placeholder="blur"
                blurDataURL={IMAGE_BLUR}
                priority
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                Meet Your Chiropractor
              </p>
              <h2 className="font-display text-[36px] sm:text-[44px] font-black leading-tight tracking-tight">
                {CLINIC.doctor.name}, <span className="text-[#b73026] italic">{CLINIC.doctor.credentials}</span>
              </h2>
              <p className="text-[#2c2c2c] text-sm font-semibold mt-1.5">
                {CLINIC.doctor.title}
              </p>
              <span className="inline-block mt-4 rounded-full bg-[#b73026]/10 text-[#b73026] px-3 py-1 text-[10.5px] font-bold tracking-[0.18em] uppercase">
                CCO Licensed · Since {CLINIC.yearFounded}
              </span>
              <div className="mt-5 space-y-4 text-[#2c2c2c] text-[15.5px] leading-relaxed">
                <p>
                  Dr. Sandy has been delivering specific, scientific
                  chiropractic care to the Mississauga community for over a
                  decade. He believes everyone deserves a strong nervous system
                  and a life of motion — and he&apos;s adjusted{" "}
                  <strong className="text-[#1a1a1a]">{CLINIC.patientCount} patients</strong>{" "}
                  to prove it.
                </p>
                <p>
                  His approach is calm, gentle, and patient-first. No long
                  lectures, no scare tactics. Just honest answers about your
                  spine and a plan that actually fits your life — whether
                  you&apos;re a new parent, a desk worker with neck pain, an
                  athlete recovering from injury, or a grandparent who just
                  wants to keep moving.
                </p>
                <p>
                  Dr. Sandy is also a proud husband, father, and lifelong
                  learner — constantly studying the latest research in
                  chiropractic, biomechanics, and neuroscience so his patients
                  get modern, evidence-based care.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/#book"
                  className="inline-flex items-center gap-2 rounded-full bg-[#b73026] text-white px-7 py-3.5 font-bold text-sm hover:bg-[#8e1f17] transition-colors shadow-md shadow-[#b73026]/20"
                >
                  <Calendar size={16} />
                  Book with Dr. Sandy
                </Link>
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[#1a1a1a]/20 text-[#1a1a1a] px-6 py-3.5 font-semibold text-sm hover:bg-[#1a1a1a]/5 transition-colors"
                >
                  <Phone size={16} />
                  {CLINIC.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission band (red moment) */}
      <section className="px-5 py-16 bg-[#b73026] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto text-center">
          <p className="text-white/80 text-[11px] tracking-[0.25em] uppercase font-bold mb-3 inline-flex items-center gap-2">
            <Sparkles size={12} /> Our Mission
          </p>
          <h2 className="font-display text-[34px] sm:text-[42px] font-black leading-tight">
            Life · Power · Freedom
          </h2>
          <p className="mt-5 text-white/90 text-[16px] sm:text-[17px] leading-relaxed">
            We focus on keeping your central nervous system strong to allow for
            the maximum expression of physical, mental, and emotional
            well-being. Every adjustment, every plan, every conversation in
            this clinic is built around that one idea.
          </p>
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="relative bg-[#f5efe2] px-5 pt-16 pb-20 border-y border-black/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-2">
                Recognized &amp; Awarded
              </p>
              <h2 className="font-display text-[28px] sm:text-[34px] font-black leading-tight tracking-tight">
                Mississauga&apos;s most awarded chiropractic office.
              </h2>
              <p className="mt-4 text-[#2c2c2c] text-[15px] max-w-md mx-auto leading-relaxed">
                Voted by patients across the Peel Region for excellence in
                care, professionalism, and patient outcomes.
              </p>
            </div>
          </Reveal>

          <div className="flex gap-4 overflow-x-auto no-scrollbar md:grid md:grid-cols-4 md:gap-5 pb-2 -mx-5 px-5 md:mx-0 md:px-0">
            {awards.map((a, i) => (
              <Reveal key={a.title} delay={i * 100}>
                <AwardBadge {...a} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="mt-12 max-w-4xl mx-auto rounded-[28px] overflow-hidden bg-white ring-1 ring-black/5 shadow-xl grid md:grid-cols-[1.1fr_1fr] items-stretch">
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[360px]">
                <Image
                  src="/images/dr-sandy-award.png"
                  alt="Dr. Sandy Bhasin holding the Consumer Choice Award 2021 — Peel Region — Chiropractor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                  placeholder="blur"
                  blurDataURL={IMAGE_BLUR}
                />
              </div>
              <div className="p-7 md:p-10 flex flex-col justify-center">
                <p className="text-[#b73026] text-[10.5px] tracking-[0.28em] uppercase font-bold mb-3">
                  Verified · 2021
                </p>
                <h3 className="font-display text-[26px] md:text-[30px] font-black leading-tight">
                  Consumer Choice Award<br />
                  <span className="text-[#b73026]">Peel Region · Chiropractor</span>
                </h3>
                <p className="mt-4 text-[#2c2c2c] text-[14.5px] leading-relaxed">
                  Voted by patients across the Peel Region as the top
                  chiropractic office for excellence in care, professionalism,
                  and patient outcomes.
                </p>
                <p className="mt-2 text-[#2c2c2c]/70 text-[13px] leading-relaxed">
                  One of {awards.length} regional and provincial awards earned
                  by Powerflow Chiropractic since {CLINIC.yearFounded}.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The clinic — interior shot */}
      <section className="px-5 py-20 bg-[#fdfaf4]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                Inside the Clinic
              </p>
              <h2 className="font-display text-[32px] sm:text-[38px] font-black leading-tight tracking-tight">
                A calm, modern space — built for healing.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="rounded-[28px] overflow-hidden aspect-[16/10] relative ring-1 ring-black/5 shadow-xl">
              <Image
                src="/images/clinic-interior.png"
                alt="Inside Powerflow Chiropractic — front desk with the Powerflow lion logo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 720px"
                placeholder="blur"
                blurDataURL={IMAGE_BLUR}
              />
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 text-center">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 text-[#b73026] font-bold text-sm hover:gap-2 transition-all"
              >
                Get directions to the clinic
                <ChevronRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 bg-white border-t border-black/5">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-display text-[28px] sm:text-[32px] font-black leading-tight">
            Ready to meet Dr. Sandy?
          </h2>
          <p className="mt-3 text-[#2c2c2c] text-[15px] leading-relaxed">
            Book a free spinal check-up — most new patients are seen within the
            week.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b73026] text-white px-7 py-4 font-bold text-[15px] hover:bg-[#8e1f17] transition-colors shadow-lg shadow-[#b73026]/20"
            >
              <Calendar size={16} />
              Claim Free Check-up
            </Link>
            <a
              href={`tel:${CLINIC.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1a1a1a]/20 text-[#1a1a1a] px-7 py-4 font-semibold text-[15px] hover:bg-[#1a1a1a]/5 transition-colors"
            >
              <Phone size={16} />
              {CLINIC.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
