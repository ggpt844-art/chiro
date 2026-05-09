import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ChevronRight, PlayCircle, Phone } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingNav from "@/components/FloatingNav";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Reveal from "@/components/Reveal";
import NewsletterForm from "@/components/NewsletterForm";
import { CLINIC } from "@/lib/clinic";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Health Tips & Videos — Powerflow Chiropractic Blog",
  description:
    "Short videos from Dr. Sandy Bhasin on posture, sleep, recovery, and everyday habits to keep your spine strong. Multi-award-winning chiropractor in Mississauga.",
  alternates: { canonical: "https://powerflowchiropractic.ca/blog" },
};

export default function BlogPage() {
  return (
    <main id="main" className="relative bg-[#fdfaf4] text-[#1a1a1a]">
      <FloatingNav phone={CLINIC.phone} />
      <StickyMobileCTA phone={CLINIC.phone} phoneDisplay={CLINIC.phoneDisplay} />

      <section className="relative bg-[#fdfaf4] overflow-hidden">
        <div aria-hidden className="drift-x pointer-events-none absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full bg-[#b73026] opacity-[0.07] blur-[120px]" />
        <SiteHeader />
        <div className="relative px-5 pt-6 pb-14 max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[#b73026] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              The Powerflow Blog
            </p>
            <h1 className="font-display text-[44px] sm:text-[60px] font-black leading-[1.02] tracking-tight">
              Short videos. <span className="text-[#b73026] italic">Real answers.</span>
            </h1>
            <p className="mt-5 text-[#2c2c2c] text-[16px] sm:text-[17px] leading-relaxed max-w-xl mx-auto">
              Dr. Sandy breaks down posture, sleep, recovery, and the everyday
              habits that keep your spine strong — in plain English, in under 5
              minutes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-20 bg-[#fdfaf4]">
        <ul className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts.map((post, i) => (
            <Reveal key={post.title} delay={i * 80} as="li">
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl bg-white ring-1 ring-black/5 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div className="relative aspect-[16/10] bg-gradient-to-br from-[#b73026] to-[#8e1f17] grid place-items-center overflow-hidden">
                  <PlayCircle
                    size={56}
                    className="text-white opacity-90 group-hover:scale-110 transition-transform duration-300"
                    strokeWidth={1.5}
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md px-2.5 py-1 text-[10.5px] font-bold tracking-[0.18em] uppercase text-white">
                    {post.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-[19px] font-bold leading-snug text-[#1a1a1a]">
                    {post.title}
                  </h2>
                  <div className="mt-4 flex items-center justify-between text-[12.5px]">
                    <span className="inline-flex items-center gap-1.5 text-[#2c2c2c]">
                      <Calendar size={13} />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#b73026] font-bold group-hover:gap-2 transition-all">
                      Watch <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={500}>
          <div className="mt-14 max-w-md mx-auto rounded-3xl bg-white ring-1 ring-black/5 p-7 text-center shadow-sm">
            <h3 className="font-display text-[22px] font-black leading-tight">
              New videos in your inbox.
            </h3>
            <p className="mt-2 text-[#2c2c2c] text-[14px] leading-relaxed">
              No spam. Unsubscribe anytime.
            </p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-16 bg-white border-t border-black/5">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-display text-[28px] sm:text-[32px] font-black leading-tight">
            Want it personalized to your spine?
          </h2>
          <p className="mt-3 text-[#2c2c2c] text-[15px] leading-relaxed">
            Book a free spinal check-up — Dr. Sandy will tell you exactly which
            of these habits matter most for your body.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b73026] text-white px-7 py-4 font-bold text-[15px] hover:bg-[#8e1f17] transition-colors shadow-lg shadow-[#b73026]/20"
            >
              Book Free Check-up
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
