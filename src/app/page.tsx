import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Calendar,
  Star,
  ShieldCheck,
  HeartPulse,
  Activity,
  ChevronRight,
  Award,
  Users,
  Sparkles,
  MessageCircle,
  Check,
  Zap,
  Heart,
  TrendingUp,
} from "lucide-react";
import FloatingNav from "@/components/FloatingNav";
import FAQ, { type FaqItem } from "@/components/FAQ";
import MobileMenu from "@/components/MobileMenu";
import Reveal from "@/components/Reveal";
import LionMark from "@/components/LionMark";
import HeroVideo from "@/components/HeroVideo";
import AwardBadge from "@/components/AwardBadge";
import GoogleReviewCard from "@/components/GoogleReviewCard";
import InsurancePlate from "@/components/InsurancePlate";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import NewsletterForm from "@/components/NewsletterForm";
import SpineDiagram from "@/components/SpineDiagram";
import CountUp from "@/components/CountUp";
import Quiz from "@/components/Quiz";
import { IMAGE_BLUR } from "@/lib/imageBlur";

// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH — edit clinic info once, propagates everywhere
// ─────────────────────────────────────────────────────────────────────────────
const CLINIC = {
  name: "Powerflow Chiropractic",
  tagline: "Life · Power · Freedom",
  doctor: {
    name: "Dr. Sandy Bhasin",
    short: "Dr. Sandy",
    credentials: "B.Sc, D.C",
    title: "Founder · Doctor of Chiropractic",
  },
  phone: "9058963393",
  phoneDisplay: "(905) 896-3393",
  whatsapp: "19058963393", // for wa.me link
  email: "info@drbhasin.com",
  address: {
    street: "33 City Centre Dr #143",
    line1: "33 City Centre Dr, Suite 143",
    line2: "Mississauga, ON L5B 2N5",
    city: "Mississauga",
    region: "ON",
    postal: "L5B 2N5",
    country: "Canada",
  },
  mapsQuery: "Powerflow Chiropractic, 33 City Centre Dr #143, Mississauga, ON L5B 2N5",
  yearFounded: 2014,
  patientCount: "12,000+",
  rating: 4.9,
  reviewCount: 250,
  social: {
    instagram: "https://www.instagram.com/powerflow.chiropractic/",
    facebook: "https://www.facebook.com/powerflowchiropractic/",
    google: "https://www.google.com/search?q=Powerflow+Chiropractic+Mississauga",
  },
};

// ── Inline social icons (lucide doesn't ship branded ones safely) ──
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
    </svg>
  );
}
function GoogleIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden>
      <path d="M16.319 13.713v5.487h9.075c-0.369 2.356-2.744 6.9-9.075 6.9-5.463 0-9.919-4.525-9.919-10.1s4.456-10.1 9.919-10.1c3.106 0 5.188 1.325 6.375 2.469l4.344-4.181c-2.788-2.612-6.4-4.188-10.719-4.188-8.844 0-16 7.156-16 16s7.156 16 16 16c9.231 0 15.363-6.494 15.363-15.631 0-1.050-0.113-1.85-0.25-2.65l-15.113-0.006z" />
    </svg>
  );
}

// ── Top desktop nav (placeholders for About/Blog use anchors that scroll to section) ──
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Dr. Sandy", href: "#doctor" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const valueStack = [
  { label: "Postural Exam", value: "$75" },
  { label: "Range-of-Motion Screening", value: "$50" },
  { label: "15-min Consultation", value: "$65" },
];

const services = [
  {
    title: "Spinal Adjustments",
    blurb:
      "Gentle, specific corrections that restore proper spinal alignment and nervous-system function.",
    image: "/images/dr-sandy-adjusting.png",
  },
  {
    title: "Family & Pediatric Care",
    blurb:
      "Safe, age-appropriate chiropractic care for kids, parents, and grandparents alike.",
    image: "/images/clinic-interior.png",
  },
  {
    title: "Posture & Wellness",
    blurb:
      "Long-term plans focused on posture, mobility, and keeping you out of pain.",
    image: "/images/dr-sandy-award.png",
  },
];

const treatments = [
  { title: "Free Spinal Check-up", blurb: "A complimentary postural and range-of-motion screening with Dr. Sandy." },
  { title: "Sports & Auto Injury Care", blurb: "Recover from accidents, strains, and athletic injuries with targeted care." },
  { title: "Headache & Migraine Relief", blurb: "Address the root cause of tension headaches and chronic migraines." },
  { title: "Sciatica & Back Pain", blurb: "Get lasting relief from low-back pain, sciatica, and disc-related issues." },
  { title: "Neck Pain & Stiffness", blurb: "Restore mobility and ease tension caused by long days at the desk." },
  { title: "Wellness Maintenance", blurb: "Stay aligned, mobile, and feeling strong with ongoing chiropractic care." },
];

const features = [
  { icon: Award, title: "Voted #1 in Mississauga", blurb: "Top Choice Award winner 7 years running, plus Consumer Choice Award winner in Peel Region." },
  { icon: ShieldCheck, title: "A Gentle, Scientific Approach", blurb: "Modern, evidence-based techniques delivered with a calm, patient-first bedside manner." },
  { icon: Users, title: "Care for the Whole Family", blurb: "From toddlers to grandparents, Dr. Sandy adjusts every patient with care tailored to their body." },
  { icon: Heart, title: "12,000+ Patients Adjusted", blurb: "Trusted by Mississauga families since 2014. We measure success in pain-free mornings, not appointments booked." },
];

// Google-review styled (with reviewer metadata)
const reviews = [
  {
    name: "Jason S.",
    initial: "J",
    date: "2 weeks ago",
    body: "Being an incredible chiropractor is an understatement when it comes to Dr. Sandy. Best decision I made for my back. Friendly staff, modern clinic, and zero pressure to commit to a long plan.",
    reviewCount: 47,
    localGuide: true,
    avatarColor: "#b73026",
  },
  {
    name: "Priya K.",
    initial: "P",
    date: "1 month ago",
    body: "The whole team is warm, professional, and so easy to work with. My migraines are basically gone after a few months of care. I send my whole family here now.",
    reviewCount: 12,
    localGuide: false,
    avatarColor: "#7d9070",
  },
  {
    name: "Marcus L.",
    initial: "M",
    date: "3 weeks ago",
    body: "I came in barely able to walk after a car accident. A few months later I'm back at the gym. Forever grateful to Dr. Sandy and the front desk team.",
    reviewCount: 89,
    localGuide: true,
    avatarColor: "#f2a93b",
  },
  {
    name: "Anita D.",
    initial: "A",
    date: "2 months ago",
    body: "First chiropractor that actually listened. He explained everything clearly, didn't push extra visits, and my neck pain from desk work is finally gone.",
    reviewCount: 5,
    localGuide: false,
    avatarColor: "#1a73e8",
  },
];

const hours = [
  { day: "Monday", time: "9:00 AM – 7:00 PM" },
  { day: "Tuesday", time: "11:00 AM – 7:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 8:00 PM" },
  { day: "Thursday", time: "Closed" },
  { day: "Friday", time: "9:00 AM – 4:00 PM" },
  { day: "Saturday", time: "9:00 AM – 2:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const awards = [
  { title: "Consumer Choice", year: "2021", region: "Peel Region", category: "Chiropractor", variant: "red" as const },
  { title: "Top Choice", year: "2019–2026", region: "Mississauga", category: "Chiropractic Office", variant: "gold" as const },
  { title: "Best of Mississauga", year: "2023", region: "Mississauga News", category: "Health & Wellness", variant: "sage" as const },
  { title: "Patients' Choice", year: "2024", region: "Peel Region", category: "Family Chiropractic", variant: "gold" as const },
];

const faqItems: FaqItem[] = [
  { q: "Where is Powerflow Chiropractic located?", a: "We are located in the heart of Mississauga, Ontario. Easy access by car or public transit, with free patient parking on site." },
  { q: "Do I need a referral to see a chiropractor?", a: "No. You do not need a doctor's referral to book an appointment with us. Anyone can book a free spinal check-up directly." },
  { q: "Do you accept insurance?", a: "Yes. We accept most major Canadian extended health insurance providers including Sun Life, Manulife, Canada Life, Green Shield, Desjardins, and more. We are happy to verify your coverage before your visit." },
  { q: "What is included in the free spinal check-up?", a: "The free spinal check-up includes a postural exam ($75 value), a range-of-motion screening ($50 value), and a 15-minute consultation with Dr. Sandy ($65 value) to discuss your concerns and next steps. Total $190 value, free for new patients." },
  { q: "Is chiropractic care safe for children and seniors?", a: "Absolutely. Dr. Sandy uses gentle, specific techniques that are safe and effective for patients of all ages, from infants to seniors." },
  { q: "How long does an appointment take?", a: "Initial visits typically take 30 to 45 minutes. Follow-up adjustments are usually 10 to 15 minutes." },
  { q: "How quickly can I be seen?", a: "Most new patients are seen within the same week. Call or WhatsApp us and we'll find a time that works for you, often as soon as tomorrow." },
];

const firstVisitSteps = [
  { title: "Book Online or Call", blurb: "Choose a time that works for you. Most patients are seen within the week." },
  { title: "Quick Insurance Check", blurb: "We verify your benefits before you walk in — zero surprises at checkout." },
  { title: "Free Spinal Check-up", blurb: "A 30-minute postural exam and range-of-motion screening with Dr. Sandy." },
  { title: "Personalized Care Plan", blurb: "We walk through your findings and design a plan tailored to your goals." },
  { title: "Your First Adjustment", blurb: "Gentle, specific, and tailored to your body. You leave standing taller." },
];

const instagramShots = [
  "/images/dr-sandy-adjusting.png",
  "/images/clinic-interior.png",
  "/images/dr-sandy-award.png",
  "/images/dr-sandy.png",
  "/images/dr-sandy-adjusting.png",
  "/images/clinic-interior.png",
];

export default function Home() {
  return (
    <main id="main" className="relative bg-[#fdfaf4] text-[#1a1a1a]">
      <span id="top" aria-hidden />
      <FloatingNav phone={CLINIC.phone} />
      <StickyMobileCTA phone={CLINIC.phone} phoneDisplay={CLINIC.phoneDisplay} />

      {/* ────────────────────────── HERO ────────────────────────── */}
      <section className="relative bg-[#fdfaf4] text-[#1a1a1a] overflow-hidden">
        {/* Soft brand wash — slow drift only, no scroll parallax (vestibular-safe) */}
        <div aria-hidden className="drift-x pointer-events-none absolute -top-40 -right-40 w-[460px] h-[460px] rounded-full bg-[#b73026] opacity-[0.08] blur-[120px]" />
        <div aria-hidden className="drift-y pointer-events-none absolute top-1/3 -left-40 w-[360px] h-[360px] rounded-full bg-[#b73026] opacity-[0.06] blur-[120px]" />

        {/* Top header — light pill on cream */}
        <header className="relative z-30 flex items-center justify-between gap-4 px-5 md:px-10 pt-5 pb-4">
          <Link href="#top" aria-label="Powerflow Chiropractic — home" className="flex items-center gap-3">
            <LionMark size={48} />
            <div className="leading-[0.95]">
              <div className="font-black tracking-wide text-[15px] text-[#1a1a1a]">POWERFLOW</div>
              <div className="text-[#b73026] text-[9px] tracking-[0.3em] font-bold mt-0.5">CHIROPRACTIC</div>
              <div className="text-[#2c2c2c] text-[8px] tracking-wider mt-0.5">Dr. Sandy Bhasin &amp; Associates</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7 text-[14px] font-semibold text-[#1a1a1a]/75">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-[#b73026] transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${CLINIC.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="hidden md:inline-grid place-items-center w-10 h-10 rounded-full bg-[#25d366] text-white hover:bg-[#1ebe57] transition-colors"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href="#book"
              className="hidden sm:inline-flex rounded-full bg-[#b73026] text-white px-5 py-2.5 text-sm font-bold hover:bg-[#8e1f17] transition-colors items-center gap-2 shadow-md shadow-[#b73026]/20"
            >
              <Calendar size={15} />
              Book Now
            </a>
            <MobileMenu phone={CLINIC.phone} phoneDisplay={CLINIC.phoneDisplay} whatsapp={CLINIC.whatsapp} />
          </div>
        </header>

        {/* Hero content */}
        <div className="relative px-5 pt-8 md:pt-14 pb-14 lg:pb-24">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#b73026]/20 px-3.5 py-1.5 text-[11px] tracking-widest uppercase text-[#b73026] font-bold mb-7 shadow-sm">
              <Sparkles size={12} />
              Voted #1 in Mississauga · 7 years running
            </div>
            <h1 className="font-display text-[48px] sm:text-[64px] md:text-[76px] leading-[0.98] font-black tracking-[-0.02em]">
              You don&apos;t have to{" "}
              <span className="text-[#b73026] italic">live in pain.</span>
            </h1>
            <p className="mt-7 text-[#2c2c2c] text-[16px] sm:text-[17px] leading-relaxed max-w-lg mx-auto">
              <strong className="text-[#1a1a1a]">{CLINIC.patientCount} Mississauga patients adjusted</strong> by {CLINIC.doctor.name} since {CLINIC.yearFounded}. Gentle, scientific chiropractic care for the whole family — most new patients feel relief their first visit.
            </p>

            {/* CTA + value-stack */}
            <div className="mt-9 grid sm:grid-cols-[auto_auto] gap-3 justify-center items-center">
              <a
                href="#book"
                className="group rounded-full bg-[#b73026] text-white px-7 py-4 font-bold text-[15px] inline-flex items-center justify-center gap-2 hover:bg-[#8e1f17] transition-all shadow-xl shadow-[#b73026]/25 hover:shadow-[#b73026]/40 hover:-translate-y-0.5"
              >
                <Calendar size={18} />
                Claim Free Spinal Check-up
                <span className="hidden sm:inline-block ml-1 text-[12px] font-black bg-white text-[#b73026] rounded-full px-2 py-0.5 tracking-wider">
                  $190 VALUE
                </span>
              </a>
              <a
                href={`tel:${CLINIC.phone}`}
                className="rounded-full border border-[#1a1a1a]/20 text-[#1a1a1a] px-6 py-4 font-semibold text-[15px] inline-flex items-center justify-center gap-2 hover:bg-[#1a1a1a]/5 transition-colors"
              >
                <Phone size={18} />
                {CLINIC.phoneDisplay}
              </a>
            </div>

            {/* Urgency strip */}
            <div className="mt-5 inline-flex items-center gap-3 text-[12.5px] text-[#2c2c2c]">
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#7d9070] opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7d9070]" />
                </span>
                <strong className="text-[#1a1a1a]">Next available: Tomorrow 11:00 AM</strong>
              </span>
              <span aria-hidden className="opacity-30">·</span>
              <span>Only 6 free check-ups this week</span>
            </div>

            {/* Mini value-stack chips */}
            <ul className="mt-6 flex flex-wrap justify-center gap-1.5 text-[11.5px] text-[#2c2c2c]">
              {valueStack.map((v) => (
                <li key={v.label} className="inline-flex items-center gap-1.5 rounded-full bg-white ring-1 ring-black/5 px-2.5 py-1 shadow-sm">
                  <Check size={11} className="text-[#7d9070]" />
                  {v.label} <span className="text-[#2c2c2c]/50 line-through ml-0.5">{v.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hero VIDEO card — uses real Dr. Sandy adjustment photo as poster */}
          <Reveal delay={150}>
            <HeroVideo
              src="https://videos.pexels.com/video-files/4099268/4099268-hd_1920_1080_25fps.mp4"
              poster="/images/dr-sandy-adjusting.png"
              className="mt-12 max-w-md lg:max-w-lg mx-auto rounded-[28px] overflow-hidden aspect-[4/5] shadow-2xl shadow-black/15 ring-1 ring-black/5"
            />
            <div className="relative max-w-md lg:max-w-lg mx-auto -mt-20 px-6 pb-1 z-10 flex items-end justify-between">
              <div className="absolute -top-44 left-4 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-3 py-1.5 text-[11px] font-semibold text-[#1a1a1a] ring-1 ring-black/10 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#b73026] opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#b73026]" />
                </span>
                Now booking
              </div>
              <div className="flex items-center gap-2 text-[#1a1a1a] text-sm font-semibold">
                <span className="grid place-items-center w-9 h-9 rounded-full bg-[#b73026] text-white ring-2 ring-[#fdfaf4] shadow-md">
                  <HeartPulse size={16} />
                </span>
                Powerflow Clinic · Mississauga
              </div>
              <div className="flex items-center gap-1 text-[#b73026] text-sm font-bold">
                <Star size={14} fill="currentColor" />
                {CLINIC.rating} / 5
                <span className="text-[#2c2c2c]/70 font-normal text-[11px] ml-1">({CLINIC.reviewCount}+)</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────────────────── BY THE NUMBERS (truth-grounded trust strip) ────────────────────────── */}
      <section
        aria-label="Powerflow Chiropractic by the numbers"
        className="relative bg-white border-y border-black/5 px-5 py-10"
      >
        <ul className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4 text-center">
          {[
            {
              value: <CountUp to={12000} duration={1400} suffix="+" />,
              label: "Patient adjustments",
            },
            {
              value: <CountUp to={10} duration={900} suffix="+ yrs" />,
              label: "Serving Mississauga",
            },
            {
              value: <CountUp to={CLINIC.rating} duration={1100} decimals={1} />,
              label: `Google rating · ${CLINIC.reviewCount}+ reviews`,
            },
            {
              value: "Same-week",
              label: "Most new patients seen within days",
            },
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

      {/* ────────────────────────── AWARDS STRIP ────────────────────────── */}
      <section id="awards" aria-label="Awards and recognition" className="relative bg-[#f5efe2] text-[#1a1a1a] pt-12 pb-16 border-y border-black/5">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-2">
                Recognized &amp; Awarded
              </p>
              <h2 className="font-display text-[28px] sm:text-[34px] font-black leading-tight tracking-tight">
                Mississauga&apos;s most awarded chiropractic office.
              </h2>
            </div>
          </Reveal>

          {/* Award badges — horizontal scroll on mobile, grid on desktop */}
          <div className="flex gap-4 overflow-x-auto no-scrollbar md:grid md:grid-cols-4 md:gap-5 pb-2 -mx-5 px-5 md:mx-0 md:px-0">
            {awards.map((a, i) => (
              <Reveal key={a.title} delay={i * 100}>
                <AwardBadge {...a} />
              </Reveal>
            ))}
          </div>

          {/* Real photo proof: Dr. Sandy holding the Consumer Choice award */}
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
                  Voted by patients across the Peel Region as the top chiropractic office for excellence in care, professionalism, and patient outcomes.
                </p>
                <p className="mt-2 text-[#2c2c2c]/70 text-[13px] leading-relaxed">
                  One of {awards.length} regional and provincial awards earned by Powerflow Chiropractic since {CLINIC.yearFounded}.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────────────────── MISSION CARD (overlaps awards) ────────────────────────── */}
      <section className="relative -mt-10 z-10 px-5">
        <div className="max-w-md mx-auto rounded-3xl bg-[#b73026] text-white p-7 shadow-2xl shadow-[#b73026]/20 text-center ring-1 ring-[#b73026]/10">
          <p className="text-white/80 text-[11px] tracking-[0.25em] uppercase font-semibold mb-3">
            Proudly Canadian · Family Owned
          </p>
          <h2 className="font-display text-2xl font-black leading-tight">
            Life · Power · Freedom
          </h2>
          <p className="mt-3 text-white/85 text-[14px] leading-relaxed">
            Our mission is to keep your central nervous system strong so your
            body can express its fullest physical, mental, and emotional
            well-being.
          </p>
          <a
            href={`tel:${CLINIC.phone}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-[#b73026] px-6 py-3 font-bold text-sm hover:bg-[#fdfaf4] transition-colors shadow-md"
          >
            <Phone size={16} />
            Call Now · {CLINIC.phoneDisplay}
          </a>
        </div>
      </section>

      {/* ────────────────────────── SIMPLE INTRO ────────────────────────── */}
      <section className="px-5 pt-20 pb-10">
        <div className="max-w-md mx-auto">
          <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
            About the Clinic
          </p>
          <h2 className="text-[34px] sm:text-[42px] font-black leading-[1.05] tracking-tight">
            Let us take care of your <span className="text-[#b73026]">spine</span>
          </h2>
          <p className="mt-5 text-[#2c2c2c] text-[16px] leading-relaxed">
            Experience simple, stress-free chiropractic care for the whole
            family at Powerflow Chiropractic in Mississauga. From routine
            spinal check-ups to long-term wellness plans, we make staying
            aligned and pain-free easy and convenient for everyone.
          </p>
        </div>

        <Reveal delay={150}>
          <div className="mt-10 max-w-md mx-auto rounded-[28px] overflow-hidden aspect-[4/3] relative ring-1 ring-black/5 shadow-xl">
            <Image
              src="/images/clinic-interior.png"
              alt="Inside Powerflow Chiropractic — front desk with the Powerflow lion logo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 480px"
              placeholder="blur"
              blurDataURL={IMAGE_BLUR}
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase text-[#b73026]">
                Our Clinic
              </span>
              <a
                href="#contact"
                className="rounded-full bg-[#1a1a1a]/90 backdrop-blur px-3.5 py-1.5 text-[11px] font-bold text-white inline-flex items-center gap-1 hover:bg-[#b73026] transition-colors"
              >
                Get directions <ChevronRight size={12} />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ────────────────────────── MEET DR. SANDY ────────────────────────── */}
      <section id="doctor" className="px-5 py-20 bg-[#f5efe2] relative bg-noise-light">
        <div className="max-w-md mx-auto text-center relative">
          <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
            The Doctor
          </p>
          <h2 className="font-display text-[40px] sm:text-[48px] font-black leading-tight tracking-tight">
            Meet <span className="text-[#b73026] italic">Dr. Sandy</span>
          </h2>
        </div>

        <Reveal delay={150}>
          <div className="mt-10 max-w-md mx-auto">
            <div className="rounded-[28px] overflow-hidden bg-white ring-1 ring-black/5 shadow-xl relative">
              <div className="relative aspect-[1/1]">
                <Image
                  src="/images/dr-sandy.png"
                  alt={`${CLINIC.doctor.name}, ${CLINIC.doctor.credentials}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 480px"
                  placeholder="blur"
                  blurDataURL={IMAGE_BLUR}
                  priority
                />
              </div>
              <div className="p-7 text-center">
                <span className="inline-block rounded-full bg-[#b73026]/10 text-[#b73026] px-3 py-1 text-[10.5px] font-bold tracking-[0.18em] uppercase mb-4">
                  CCO Licensed · Since {CLINIC.yearFounded}
                </span>
                <h3 className="font-display text-[26px] font-black leading-tight">
                  {CLINIC.doctor.name}, {CLINIC.doctor.credentials}
                </h3>
                <p className="text-[#2c2c2c] text-[14px] mt-1.5 font-medium">
                  {CLINIC.doctor.title}
                </p>
                <p className="text-[#2c2c2c] text-[15px] mt-5 leading-relaxed">
                  Dr. Sandy has been delivering specific, scientific chiropractic care to the Mississauga community for over a decade. He believes everyone deserves a strong nervous system and a life of motion — and he&apos;s adjusted <strong className="text-[#1a1a1a]">{CLINIC.patientCount} patients</strong> to prove it.
                </p>
                <div className="mt-6 grid grid-cols-3 divide-x divide-black/10 rounded-2xl bg-[#fdfaf4] py-4">
                  <div>
                    <div className="font-display text-[24px] font-black text-[#b73026] leading-none">
                      <CountUp to={12} duration={1100} suffix="k+" />
                    </div>
                    <div className="text-[10.5px] text-[#2c2c2c] tracking-wider uppercase font-semibold mt-1">Patients</div>
                  </div>
                  <div>
                    <div className="font-display text-[24px] font-black text-[#b73026] leading-none">
                      <CountUp to={10} duration={900} suffix="+" />
                    </div>
                    <div className="text-[10.5px] text-[#2c2c2c] tracking-wider uppercase font-semibold mt-1">Years</div>
                  </div>
                  <div>
                    <div className="font-display text-[24px] font-black text-[#b73026] leading-none">
                      <CountUp to={CLINIC.rating} duration={1100} decimals={1} />
                    </div>
                    <div className="text-[10.5px] text-[#2c2c2c] tracking-wider uppercase font-semibold mt-1">Rating</div>
                  </div>
                </div>
                <a
                  href="#book"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#b73026] text-white px-7 py-3.5 font-bold text-sm hover:bg-[#8e1f17] transition-colors shadow-lg shadow-[#b73026]/20"
                >
                  Book with Dr. Sandy
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ────────────────────────── YOUR FIRST VISIT (TIMELINE) ────────────────────────── */}
      <section id="first-visit" className="px-5 py-20 bg-[#fdfaf4]">
        <div className="max-w-md mx-auto text-center">
          <Reveal>
            <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              What to Expect
            </p>
            <h2 className="text-[34px] sm:text-[42px] font-black leading-[1.05] tracking-tight">
              Your <span className="text-[#b73026]">First Visit</span>
            </h2>
            <p className="mt-4 text-[#2c2c2c] text-[15px] leading-relaxed">
              Simple, calm, and stress-free. Here&apos;s exactly what happens
              from the moment you book.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 max-w-md mx-auto relative">
          {/* connecting vertical line */}
          <div
            aria-hidden
            className="absolute left-[27px] top-3 bottom-3 w-px bg-gradient-to-b from-[#b73026]/40 via-[#b73026]/20 to-transparent"
          />
          <ol className="flex flex-col gap-8">
            {firstVisitSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 110} as="li">
                <div className="flex gap-5">
                  <span className="relative shrink-0 grid place-items-center w-14 h-14 rounded-full bg-[#b73026] text-white font-black text-[15px] shadow-lg shadow-[#b73026]/30 ring-4 ring-[#fdfaf4]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-2.5">
                    <h3 className="font-bold text-[18px] leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-[#2c2c2c] text-[14px] mt-1.5 leading-relaxed">
                      {step.blurb}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={firstVisitSteps.length * 110}>
          <div className="mt-12 text-center">
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-[#b73026] text-white px-7 py-4 font-bold text-[15px] hover:bg-[#8e1f17] transition-colors shadow-lg shadow-[#b73026]/20"
            >
              <Calendar size={16} />
              Book Your Free Visit
            </a>
          </div>
        </Reveal>
      </section>

      {/* ────────────────────────── WHY CHOOSE US ────────────────────────── */}
      <section id="why" className="px-5 py-20">
        <div className="max-w-md mx-auto text-center">
          <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
            Why Choose Us
          </p>
          <h2 className="text-[34px] font-black leading-[1.05] tracking-tight">
            Modern. Gentle. <br />
            Built around <span className="text-[#b73026]">you</span>.
          </h2>
        </div>
        <div className="mt-10 max-w-md mx-auto flex flex-col gap-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="rounded-2xl p-6 bg-white ring-1 ring-black/5 shadow-sm flex gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <span className="shrink-0 grid place-items-center w-12 h-12 rounded-2xl bg-[#b73026]/10 text-[#b73026]">
                  <f.icon size={22} />
                </span>
                <div>
                  <h3 className="font-bold text-[17px]">{f.title}</h3>
                  <p className="text-[#2c2c2c] text-[14px] mt-1.5 leading-relaxed">
                    {f.blurb}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ────────────────────────── WHAT WE TREAT (spine diagram) ────────────────────────── */}
      <section id="what-we-treat" className="px-5 py-20 bg-[#fdfaf4]">
        <div className="max-w-md mx-auto text-center mb-10">
          <Reveal>
            <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              What We Treat
            </p>
            <h2 className="font-display text-[34px] sm:text-[42px] font-black leading-[1.05] tracking-tight">
              Where it hurts — <span className="text-[#b73026] italic">we can help</span>.
            </h2>
            <p className="mt-4 text-[#2c2c2c] text-[15px] leading-relaxed">
              Most people we see come in with one of these four areas. Tap the
              region closest to your pain and we&apos;ll walk you through what
              to expect.
            </p>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <div className="max-w-2xl mx-auto rounded-[28px] bg-white ring-1 ring-black/5 shadow-sm p-6 sm:p-10">
            <SpineDiagram />
          </div>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-8 max-w-md mx-auto text-center">
            <a
              href={`tel:${CLINIC.phone}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#b73026] text-white px-7 py-3.5 font-bold text-sm hover:bg-[#8e1f17] transition-colors shadow-md shadow-[#b73026]/20"
            >
              <Phone size={16} />
              Talk to Dr. Sandy about your area
            </a>
          </div>
        </Reveal>
      </section>

      {/* ────────────────────────── NO-PRESSURE PROMISE (anxiety relief) ────────────────────────── */}
      <section id="promise" className="px-5 py-16 bg-white border-y border-black/5">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold text-center mb-3">
              Our Promise
            </p>
            <h2 className="text-center font-display text-[28px] sm:text-[34px] font-black leading-tight tracking-tight">
              No surprises. <span className="text-[#b73026] italic">No pressure.</span>
            </h2>
            <p className="mt-4 text-center text-[#2c2c2c] text-[15px] max-w-md mx-auto leading-relaxed">
              We know patients have been burned before. Here is what you will{" "}
              <strong className="text-[#1a1a1a]">never</strong> get from us.
            </p>
          </Reveal>
          <ul className="mt-9 grid sm:grid-cols-3 gap-4">
            {[
              {
                title: "No long-term contracts",
                body: "Pay-as-you-go. No 3-year plans, no buy-in fees, no commitments. Stop any time.",
              },
              {
                title: "No high-pressure sales",
                body: "Dr. Sandy will recommend a plan, then leave the decision to you. Take it home, sleep on it.",
              },
              {
                title: "No upselling",
                body: "If chiropractic isn't right for you, we'll tell you and refer you to someone who is.",
              },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 100} as="li">
                <div className="rounded-2xl bg-[#fdfaf4] ring-1 ring-black/5 p-6 h-full">
                  <span className="grid place-items-center w-10 h-10 mb-4 rounded-full bg-[#b73026]/10 text-[#b73026]">
                    <Check size={18} strokeWidth={2.5} />
                  </span>
                  <h3 className="font-bold text-[16.5px] text-[#1a1a1a]">{p.title}</h3>
                  <p className="text-[#2c2c2c] text-[14px] mt-1.5 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ────────────────────────── INSURANCE ────────────────────────── */}
      <section id="insurance" className="px-5 py-16 bg-[#f5efe2] border-y border-black/5">
        <div className="max-w-md mx-auto text-center">
          <Reveal>
            <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Direct Billing
            </p>
            <h2 className="text-[28px] sm:text-[32px] font-black leading-tight tracking-tight">
              We accept most major{" "}
              <span className="text-[#b73026]">insurance plans</span>
            </h2>
            <p className="mt-4 text-[#2c2c2c] text-[15px] leading-relaxed">
              No surprises at checkout. We&apos;ll verify your benefits and
              bill your provider directly when possible.
            </p>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <div className="mt-8 max-w-2xl mx-auto">
            <InsurancePlate />
          </div>
          <p className="mt-6 text-center text-[13px] text-[#2c2c2c]">
            Don&apos;t see your provider?{" "}
            <a
              href={`tel:${CLINIC.phone}`}
              className="text-[#b73026] font-bold underline-offset-4 hover:underline"
            >
              Give us a call
            </a>{" "}
            and we&apos;ll figure it out.
          </p>
        </Reveal>
      </section>

      {/* ────────────────────────── SERVICES ────────────────────────── */}
      <section id="services" className="px-5 py-20 bg-[#fdfaf4] text-[#1a1a1a]">
        <div className="max-w-md mx-auto">
          <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3 text-center">
            Services
          </p>
          <h2 className="font-display text-[36px] font-black leading-tight tracking-tight text-center">
            What we <span className="text-[#b73026] italic">help with</span>
          </h2>
        </div>

        <div className="mt-10 max-w-md mx-auto flex flex-col gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 120} as="article">
              <div className="group rounded-3xl overflow-hidden bg-white ring-1 ring-black/5 shadow-sm hover:ring-[#b73026]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 480px"
                    placeholder="blur"
                    blurDataURL={IMAGE_BLUR}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="text-[#2c2c2c] text-[14px] mt-2 leading-relaxed">
                    {s.blurb}
                  </p>
                  <a
                    href="#book"
                    className="mt-4 inline-flex items-center gap-1 text-[#b73026] font-semibold text-sm group-hover:gap-2 transition-all"
                  >
                    Book an appointment
                    <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Treatments grid */}
        <div className="mt-14 max-w-md mx-auto">
          <h3 className="font-display text-2xl font-bold text-center mb-6">
            Common <span className="text-[#b73026] italic">Treatments</span>
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {treatments.map((t) => (
              <a
                key={t.title}
                href="#book"
                className="group flex items-center justify-between gap-4 rounded-2xl bg-white hover:bg-[#fdfaf4] ring-1 ring-black/5 hover:ring-[#b73026]/30 px-5 py-4 transition-all shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="font-semibold text-[15px] text-[#1a1a1a]">{t.title}</div>
                  <div className="text-[#2c2c2c] text-[13px] mt-0.5">
                    {t.blurb}
                  </div>
                </div>
                <ChevronRight
                  size={18}
                  className="shrink-0 text-[#b73026] group-hover:translate-x-1 transition-transform"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────── REVIEWS ────────────────────────── */}
      <section id="reviews" className="px-5 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
            Patient Stories
          </p>
          <h2 className="font-display text-[40px] sm:text-[48px] font-black leading-[1.02] tracking-tight">
            What our <span className="text-[#b73026] italic">patients</span> say
          </h2>
          <div className="mt-5 inline-flex items-center gap-3 rounded-full bg-white ring-1 ring-black/10 px-4 py-2 shadow-sm">
            <div className="flex gap-0.5 text-[#fbbc04]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" stroke="none" />
              ))}
            </div>
            <span className="text-[13px] font-bold text-[#1a1a1a]">
              {CLINIC.rating} on Google
            </span>
            <span className="text-[12px] text-[#2c2c2c]">
              · {CLINIC.reviewCount}+ reviews
            </span>
          </div>
        </div>

        <div className="mt-10 max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <GoogleReviewCard {...r} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={reviews.length * 100}>
          <div className="mt-8 max-w-3xl mx-auto">
            <a
              href={CLINIC.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-[#1a1a1a] text-white px-5 py-4 flex items-center justify-between gap-4 hover:bg-[#b73026] transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="grid place-items-center w-9 h-9 rounded-full bg-white text-[#1a1a1a]">
                  <GoogleIcon size={16} />
                </span>
                <span className="font-bold text-[15px]">
                  Read all {CLINIC.reviewCount}+ reviews on Google
                </span>
              </span>
              <ChevronRight size={18} />
            </a>
          </div>
        </Reveal>
      </section>

      {/* ────────────────────────── QUIZ — optional, ultra-short ────────────────────────── */}
      <section
        id="quiz"
        className="px-5 py-16 bg-[#fdfaf4] border-y border-black/5"
      >
        <Reveal>
          <div className="max-w-md mx-auto text-center mb-6">
            <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Not sure if it&apos;s for you?
            </p>
            <h2 className="font-display text-[28px] sm:text-[32px] font-black leading-tight tracking-tight">
              Take a 30-second check.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <Quiz phone={CLINIC.phone} phoneDisplay={CLINIC.phoneDisplay} />
        </Reveal>
      </section>

      {/* ────────────────────────── INSTAGRAM ────────────────────────── */}
      <section id="instagram" className="px-5 py-20 bg-[#fdfaf4] text-[#1a1a1a]">
        <div className="max-w-md mx-auto text-center">
          <Reveal>
            <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Follow Along
            </p>
            <h2 className="font-display text-[32px] font-black leading-tight tracking-tight">
              On <span className="text-[#b73026] italic">Instagram</span>
            </h2>
            <a
              href={CLINIC.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-[#2c2c2c] text-[14px] hover:text-[#b73026] transition-colors"
            >
              <InstagramIcon size={16} />
              @powerflow.chiropractic
            </a>
          </Reveal>
        </div>

        <div className="mt-10 max-w-md mx-auto grid grid-cols-3 gap-2">
          {instagramShots.map((src, i) => (
            <Reveal key={`${src}-${i}`} delay={i * 70}>
              <a
                href={CLINIC.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative aspect-square overflow-hidden rounded-xl ring-1 ring-black/5"
              >
                <Image
                  src={src}
                  alt={`Powerflow Chiropractic Instagram post ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 33vw, 160px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#1a1a1a]/0 group-hover:bg-[#1a1a1a]/30 transition-colors grid place-items-center text-white opacity-0 group-hover:opacity-100">
                  <InstagramIcon size={22} />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <div className="mt-8 text-center">
            <a
              href={CLINIC.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#b73026] text-[#b73026] px-6 py-3 font-bold text-sm hover:bg-[#b73026] hover:text-white transition-colors"
            >
              <InstagramIcon size={16} />
              Follow us on Instagram
            </a>
          </div>
        </Reveal>
      </section>

      {/* ────────────────────────── BOOK CTA — sole bold red moment ────────────────────────── */}
      <section
        id="book"
        className="divider-curve-down px-5 py-20 bg-[#b73026] text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-md mx-auto text-center">
          <p className="text-white/80 text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
            Book Today
          </p>
          <h2 className="font-display text-[36px] font-black leading-tight tracking-tight">
            Ready for your free spinal check-up?
          </h2>
          <p className="mt-4 text-white/85 text-[15px] leading-relaxed">
            Call or text us — most new patients are seen within the week.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={`tel:${CLINIC.phone}`}
              className="rounded-full bg-white text-[#b73026] px-6 py-4 font-bold text-[16px] inline-flex items-center justify-center gap-2 hover:bg-[#fdfaf4] transition-colors shadow-lg"
            >
              <Phone size={18} />
              {CLINIC.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${CLINIC.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25d366] text-white px-6 py-4 font-bold text-[15px] inline-flex items-center justify-center gap-2 hover:bg-[#1ebe57] transition-colors"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
            <a
              href={`sms:${CLINIC.phone}`}
              className="rounded-full border border-white/40 text-white px-6 py-4 font-semibold text-[15px] inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              <Activity size={18} />
              Text Us to Book
            </a>
          </div>
          <p className="mt-6 text-white/85 text-[12.5px]">
            <Zap size={11} className="inline mr-1" />
            Most new patients seen within the week. Free parking on site.
          </p>
        </div>
      </section>

      {/* ────────────────────────── BLOG (placeholder) ────────────────────────── */}
      <section id="blog" className="px-5 py-20 bg-[#f5efe2] relative bg-noise-light">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Health Tips · Coming Soon
            </p>
            <h2 className="font-display text-[36px] sm:text-[42px] font-black leading-[1.05] tracking-tight">
              The <span className="text-[#b73026] italic">Powerflow</span> Blog
            </h2>
            <p className="mt-4 text-[#2c2c2c] text-[15px] leading-relaxed max-w-lg mx-auto">
              Practical posture, sleep, desk-setup, and recovery guides from Dr. Sandy. We&apos;re writing them now — drop your email and we&apos;ll send the first three when they go live.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <NewsletterForm />
          </Reveal>
          <Reveal delay={300}>
            <ul className="mt-12 grid sm:grid-cols-3 gap-3 text-left">
              {[
                { tag: "Posture", title: "5 desk-setup fixes for a pain-free workday" },
                { tag: "Sleep", title: "Best sleeping positions for back &amp; neck pain" },
                { tag: "Recovery", title: "What actually happens during a chiropractic adjustment" },
              ].map((post) => (
                <li
                  key={post.title}
                  className="rounded-2xl bg-white ring-1 ring-black/5 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 opacity-60"
                  aria-label="Coming soon"
                >
                  <span className="inline-block text-[10.5px] font-bold tracking-[0.18em] uppercase text-[#b73026] mb-2">
                    {post.tag} · Soon
                  </span>
                  <p className="font-display text-[16.5px] font-bold leading-snug text-[#1a1a1a]" dangerouslySetInnerHTML={{ __html: post.title }} />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ────────────────────────── FAQ ────────────────────────── */}
      <section id="faq" className="divider-curve-down relative px-5 py-20 bg-[#fdfaf4]">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Common Questions
            </p>
            <h2 className="text-[34px] font-black leading-[1.05] tracking-tight">
              Frequently Asked
            </h2>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* ────────────────────────── CONTACT / FOOTER ────────────────────────── */}
      <footer
        id="contact"
        className="px-5 pt-20 pb-10 bg-[#1a1a1a] text-white"
      >
        <div className="max-w-md mx-auto">
          <p className="text-[#fdfaf4] text-[11px] tracking-[0.25em] uppercase font-bold mb-3 text-center">
            Visit Us
          </p>
          <h2 className="font-display text-[34px] font-black leading-[1.05] tracking-tight text-center">
            We&apos;d love to see you.
          </h2>

          {/* Contact rows */}
          <div className="mt-10 flex flex-col gap-4">
            <a
              href={`tel:${CLINIC.phone}`}
              className="flex items-center gap-4 rounded-2xl bg-white/5 ring-1 ring-white/10 px-5 py-4 hover:bg-white/10 transition-colors"
            >
              <span className="grid place-items-center w-11 h-11 rounded-full bg-[#b73026]">
                <Phone size={18} />
              </span>
              <div>
                <div className="text-white/80 text-[12px] uppercase tracking-wider">
                  Phone
                </div>
                <div className="font-semibold">{CLINIC.phoneDisplay}</div>
              </div>
            </a>
            <a
              href={`https://wa.me/${CLINIC.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-white/5 ring-1 ring-white/10 px-5 py-4 hover:bg-white/10 transition-colors"
            >
              <span className="grid place-items-center w-11 h-11 rounded-full bg-[#25d366]">
                <MessageCircle size={18} />
              </span>
              <div>
                <div className="text-white/80 text-[12px] uppercase tracking-wider">
                  WhatsApp
                </div>
                <div className="font-semibold">Chat with the front desk</div>
              </div>
            </a>
            <a
              href={`mailto:${CLINIC.email}`}
              className="flex items-center gap-4 rounded-2xl bg-white/5 ring-1 ring-white/10 px-5 py-4 hover:bg-white/10 transition-colors"
            >
              <span className="grid place-items-center w-11 h-11 rounded-full bg-[#b73026]">
                <Mail size={18} />
              </span>
              <div>
                <div className="text-white/80 text-[12px] uppercase tracking-wider">
                  Email
                </div>
                <div className="font-semibold">{CLINIC.email}</div>
              </div>
            </a>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(CLINIC.mapsQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl bg-white/5 ring-1 ring-white/10 px-5 py-4 hover:bg-white/10 transition-colors"
            >
              <span className="grid place-items-center w-11 h-11 rounded-full bg-[#b73026]">
                <MapPin size={18} />
              </span>
              <div>
                <div className="text-white/80 text-[12px] uppercase tracking-wider">
                  Address
                </div>
                <div className="font-semibold leading-tight">
                  {CLINIC.address.line1}
                  <br />
                  <span className="text-white/85 text-sm font-normal">
                    {CLINIC.address.line2}
                  </span>
                  <br />
                  <span className="text-white/80 text-[12px] font-normal block mt-1.5">
                    Free patient parking on site · Wheelchair-accessible entrance ·
                    Suite 143 in the City Centre Drive medical building (Square One area)
                  </span>
                </div>
              </div>
              <ChevronRight size={18} className="ml-auto text-white/75 self-center" />
            </a>
          </div>

          {/* Map embed */}
          <Reveal>
            <div className="mt-4 rounded-3xl overflow-hidden ring-1 ring-white/10 bg-[#222] aspect-[4/3] relative">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(CLINIC.mapsQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                title="Powerflow Chiropractic — Mississauga, ON"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
              />
              {/* Subtle dark overlay tint to match brand */}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#b73026]/10 rounded-3xl" />
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(CLINIC.mapsQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-[#fdfaf4] text-sm font-semibold hover:gap-2 hover:text-white transition-all"
            >
              Get directions
              <ChevronRight size={16} />
            </a>
          </Reveal>

          {/* Hours */}
          <div className="mt-8 rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
            <div className="flex items-center gap-2 mb-4 text-[#fdfaf4]">
              <Clock size={16} />
              <h3 className="font-bold uppercase tracking-wider text-sm">
                Working Hours
              </h3>
            </div>
            <ul className="flex flex-col gap-2.5">
              {hours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between text-[14px]"
                >
                  <span className="text-white/70">{h.day}</span>
                  <span
                    className={`font-semibold ${
                      h.time === "Closed" ? "text-white/75" : "text-white"
                    }`}
                  >
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href={CLINIC.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid place-items-center w-11 h-11 rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-[#b73026] hover:text-white transition-colors">
              <InstagramIcon />
            </a>
            <a href={CLINIC.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid place-items-center w-11 h-11 rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-[#b73026] hover:text-white transition-colors">
              <FacebookIcon />
            </a>
            <a href={CLINIC.social.google} target="_blank" rel="noopener noreferrer" aria-label="Google Reviews" className="grid place-items-center w-11 h-11 rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-[#b73026] hover:text-white transition-colors">
              <GoogleIcon />
            </a>
          </div>

          {/* Bottom strip */}
          <div className="mt-12 pt-6 border-t border-white/10 text-center text-white/75 text-xs">
            © 2026 Powerflow Chiropractic. All rights reserved.
          </div>
        </div>
      </footer>

      {/* FAQ rich-result schema (gives us collapsible FAQ tiles in Google search) */}
      <Script
        id="schema-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </main>
  );
}
