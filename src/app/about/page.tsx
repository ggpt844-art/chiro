import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight, Phone, Sparkles, Radio, GraduationCap } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingNav from "@/components/FloatingNav";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Reveal from "@/components/Reveal";
import AwardBadge from "@/components/AwardBadge";
import CountUp from "@/components/CountUp";
import { CLINIC } from "@/lib/clinic";
import { awards, team } from "@/lib/content";
import { IMAGE_BLUR } from "@/lib/imageBlur";

export const metadata: Metadata = {
  title: "About Dr. Sandy Bhasin & Powerflow Chiropractic",
  description:
    "Meet Dr. Sandy Bhasin (B.Sc, D.C) and the Powerflow Chiropractic team — 24 years of practice, 300,000+ adjustments, 7-year Top Choice and 5-year Consumer Choice award winner in Mississauga.",
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
              Mississauga — {CLINIC.landmark.toLowerCase()}. {CLINIC.doctor.name}{" "}
              ({CLINIC.doctor.credentials}) has been in his own practice for{" "}
              {CLINIC.yearsInPractice} years and personally performed over{" "}
              {CLINIC.adjustmentsPerformed.toLocaleString()} adjustments. Our mission
              is to keep your central nervous system strong so your body can
              express its fullest physical, mental, and emotional well-being.
            </p>
          </Reveal>
        </div>
      </section>

      {/* By the numbers */}
      <section className="relative bg-white border-y border-black/5 px-5 py-10">
        <ul className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4 text-center">
          {[
            { value: <CountUp to={CLINIC.adjustmentsPerformed} duration={1600} suffix="+" />, label: "Adjustments performed" },
            { value: <CountUp to={CLINIC.yearsInPractice} duration={900} suffix=" yrs" />, label: "In his own practice" },
            { value: <CountUp to={CLINIC.rating} duration={1100} decimals={1} />, label: `Google rating · ${CLINIC.reviewCount}+ reviews` },
            { value: <CountUp to={CLINIC.awardYearWins} duration={900} />, label: "Award years won" },
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
            <div className="relative aspect-[4/3] w-full rounded-[28px] overflow-hidden ring-1 ring-black/5 shadow-xl">
              <Image
                src="/images/dr-sandy-spine-model.png"
                alt={`${CLINIC.doctor.name} in his Mississauga clinic, holding an anatomical spine model used to teach patients how chiropractic care works`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 420px"
                placeholder="blur"
                blurDataURL={IMAGE_BLUR}
                priority
              />
            </div>
            <p className="mt-3 text-[12.5px] text-[#2c2c2c]/75 leading-snug px-1">
              Dr. Sandy in the Powerflow clinic — every new patient gets walked
              through their spine, on a real model, before any adjustment.
            </p>
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
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#b73026]/10 text-[#b73026] px-3 py-1 text-[10.5px] font-bold tracking-[0.18em] uppercase">
                  <GraduationCap size={12} /> Life West &apos;99 · U of T &apos;96
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7d9070]/15 text-[#3f5236] px-3 py-1 text-[10.5px] font-bold tracking-[0.18em] uppercase">
                  {CLINIC.yearsInPractice} Years In Practice
                </span>
              </div>
              <div className="mt-5 space-y-4 text-[#2c2c2c] text-[15.5px] leading-relaxed">
                <p>
                  Dr. Sandy has been in his own chiropractic practice for{" "}
                  <strong className="text-[#1a1a1a]">{CLINIC.yearsInPractice} years</strong>{" "}
                  and has personally performed over{" "}
                  <strong className="text-[#1a1a1a]">{CLINIC.adjustmentsPerformed.toLocaleString()} adjustments</strong>{" "}
                  on Mississauga families — from infants to grandparents.
                </p>
                <p>
                  He graduated from <strong className="text-[#1a1a1a]">Life West Chiropractic</strong>{" "}
                  in San Francisco (1999) after completing his B.Sc at the
                  <strong className="text-[#1a1a1a]"> University of Toronto</strong> (1996).
                  His focus has always been gentle, specific techniques —
                  matched to the patient in front of him, not a one-size-fits-all
                  protocol.
                </p>
                <p>
                  Dr. Sandy attends post-graduate seminars every year to stay
                  current with the latest research in chiropractic, biomechanics,
                  and neuroscience, so his patients get modern, evidence-based
                  care delivered with a calm, patient-first bedside manner.
                </p>
                <p className="flex items-start gap-2 pt-2 text-[14px] text-[#2c2c2c]/85">
                  <Radio size={16} className="text-[#b73026] mt-0.5 shrink-0" />
                  <span>
                    Regular Health &amp; Wellness contributor on{" "}
                    <em>Eye on Asia Television</em> and the <em>Geetmala Radio</em>{" "}
                    program with Darshan Sahota.
                  </span>
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

      {/* Team strip */}
      <section id="team" className="px-5 py-16 bg-[#f5efe2] border-y border-black/5">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                Meet the Team
              </p>
              <h2 className="font-display text-[28px] sm:text-[34px] font-black leading-tight tracking-tight">
                The people who keep <span className="text-[#b73026] italic">your visit calm</span>.
              </h2>
              <p className="mt-3 text-[#2c2c2c] text-[14.5px] max-w-md mx-auto leading-relaxed">
                Behind every adjustment is a team that handles your booking,
                insurance, and assessment so Dr. Sandy can focus on you.
              </p>
            </div>
          </Reveal>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 50} as="li">
                <div className="rounded-2xl bg-white ring-1 ring-black/5 p-5 text-center h-full hover:shadow-md transition-shadow">
                  <div className="mx-auto w-12 h-12 rounded-full bg-[#b73026]/10 text-[#b73026] grid place-items-center font-display font-black text-[18px] mb-3">
                    {m.name.charAt(0)}
                  </div>
                  <p className="font-bold text-[15px] text-[#1a1a1a] leading-tight">
                    {m.name}
                  </p>
                  <p className="mt-1 text-[#2c2c2c] text-[11.5px] leading-snug">
                    {m.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
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
                  Verified · 2021–2025
                </p>
                <h3 className="font-display text-[26px] md:text-[30px] font-black leading-tight">
                  Consumer Choice Award<br />
                  <span className="text-[#b73026]">Peel Region · Chiropractor</span>
                </h3>
                <p className="mt-4 text-[#2c2c2c] text-[14.5px] leading-relaxed">
                  Voted by patients across the Peel Region as the top
                  chiropractic office for excellence in care, professionalism,
                  and patient outcomes — <strong>5 years running</strong>.
                </p>
                <p className="mt-2 text-[#2c2c2c]/70 text-[13px] leading-relaxed">
                  Combined with the <strong>Top Choice Award</strong> for
                  Mississauga (7 years running, 2019–2025), Dr. Sandy is one of
                  the most consistently award-winning chiropractors in the GTA.
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
