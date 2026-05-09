import {
  Award,
  ShieldCheck,
  Users,
  Heart,
  type LucideIcon,
} from "lucide-react";
import type { FaqItem } from "@/components/FAQ";

export const valueStack = [
  { label: "Postural Exam", value: "$75" },
  { label: "Range-of-Motion Screening", value: "$50" },
  { label: "15-min Consultation", value: "$65" },
];

export const services = [
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

export const treatments = [
  {
    title: "Free Spinal Check-up",
    blurb:
      "A complimentary postural and range-of-motion screening with Dr. Sandy.",
  },
  {
    title: "Sports & Auto Injury Care",
    blurb:
      "Recover from accidents, strains, and athletic injuries with targeted care.",
  },
  {
    title: "Headache & Migraine Relief",
    blurb: "Address the root cause of tension headaches and chronic migraines.",
  },
  {
    title: "Sciatica & Back Pain",
    blurb:
      "Get lasting relief from low-back pain, sciatica, and disc-related issues.",
  },
  {
    title: "Neck Pain & Stiffness",
    blurb: "Restore mobility and ease tension caused by long days at the desk.",
  },
  {
    title: "Wellness Maintenance",
    blurb:
      "Stay aligned, mobile, and feeling strong with ongoing chiropractic care.",
  },
];

export const features: { icon: LucideIcon; title: string; blurb: string }[] = [
  {
    icon: Award,
    title: "Voted #1 in Mississauga",
    blurb:
      "Top Choice Award winner 7 years running (2019–2025), plus Consumer Choice Award winner 5 years running in Peel Region (2021–2025).",
  },
  {
    icon: ShieldCheck,
    title: "A Gentle, Scientific Approach",
    blurb:
      "Modern, evidence-based techniques delivered with a calm, patient-first bedside manner. Continuing post-graduate education every year.",
  },
  {
    icon: Users,
    title: "Care for the Whole Family",
    blurb:
      "From infants to grandparents, Dr. Sandy adjusts every patient with care tailored to their body.",
  },
  {
    icon: Heart,
    title: "300,000+ Adjustments Performed",
    blurb:
      "Twenty-four years in his own practice — measured in pain-free mornings, not appointments booked.",
  },
];

/**
 * Condition-led testimonials, paraphrased and condensed from real
 * patient reviews on drbhasin.com so the homepage cards stop reading
 * as generic copy. Names use first-name + initial for privacy.
 */
export const reviews = [
  {
    name: "Thomas H.",
    initial: "T",
    date: "Patient since 2011",
    body: "I was bedridden with severe leg pain — pain-killers stopped working and I needed a walker. Dr. Sandy told me on day one he could help. Months later I'm walking 3–5 km almost every day. I'm 90–95% back to normal.",
    reviewCount: 23,
    localGuide: false,
    avatarColor: "#b73026",
  },
  {
    name: "Anita K.",
    initial: "A",
    date: "Migraines",
    body: "I used to get migraines twice a week and lived on pain killers. Since starting care with Dr. Sandy I no longer suffer the headaches, I sleep through the night, and I'm off the medication.",
    reviewCount: 8,
    localGuide: true,
    avatarColor: "#7d9070",
  },
  {
    name: "Marcus L.",
    initial: "M",
    date: "Post-accident recovery",
    body: "After a car accident I could barely walk and turning my head felt impossible. Regular visits to Dr. Sandy gave me my mobility back — most people wouldn't recognize me as the same person from a few months ago.",
    reviewCount: 47,
    localGuide: true,
    avatarColor: "#f2a93b",
  },
  {
    name: "Priya & Ravi",
    initial: "P",
    date: "Parents of a colicky baby",
    body: "Our son cried 3–4 hours every night from 3 weeks old. We started chiropractic care with Dr. Sandy at 8 weeks. After a few sessions he was a different baby — sleeping longer, comfortable. We started care ourselves after that.",
    reviewCount: 5,
    localGuide: false,
    avatarColor: "#1a73e8",
  },
];

/** Real hours from drbhasin.com/contact (split-shift schedule). */
export const hours = [
  { day: "Monday", time: "10:00 AM – 1:00 PM · 3:00 PM – 6:00 PM" },
  { day: "Tuesday", time: "3:00 PM – 6:00 PM" },
  { day: "Wednesday", time: "10:00 AM – 1:00 PM · 3:00 PM – 6:00 PM" },
  { day: "Thursday", time: "3:00 PM – 6:00 PM" },
  { day: "Friday", time: "Closed" },
  { day: "Saturday", time: "9:00 AM – 1:00 PM" },
  { day: "Sunday", time: "Closed" },
];

/**
 * Real awards. Top Choice Award: 7 years (2019–2025).
 * Consumer Choice Award (Peel Region): 5 years (2021–2025).
 */
export const awards = [
  {
    title: "Top Choice",
    year: "2019–2025",
    region: "Mississauga",
    category: "Chiropractic Office",
    variant: "gold" as const,
  },
  {
    title: "Consumer Choice",
    year: "2021–2025",
    region: "Peel Region",
    category: "Chiropractor",
    variant: "red" as const,
  },
  {
    title: "7 Years Running",
    year: "Top Choice",
    region: "Mississauga",
    category: "Voted by Patients",
    variant: "sage" as const,
  },
  {
    title: "5 Years Running",
    year: "Consumer Choice",
    region: "Peel Region",
    category: "Voted by Patients",
    variant: "gold" as const,
  },
];

export const faqItems: FaqItem[] = [
  {
    q: "Where is Powerflow Chiropractic located?",
    a: "We are located at 33 City Centre Dr, Suite 143, Mississauga — steps from Square One Shopping Mall, near Hwy 10 and the 403. Free patient parking on site.",
  },
  {
    q: "Do I need a referral to see a chiropractor?",
    a: "No. You do not need a doctor's referral to book an appointment with us. Anyone can book a free spinal check-up directly.",
  },
  {
    q: "Do you accept insurance?",
    a: "Yes. We accept most major Canadian extended health insurance providers including Sun Life, Manulife, Canada Life, Green Shield, Desjardins, and more. We are happy to verify your coverage before your visit.",
  },
  {
    q: "What is included in the free spinal check-up?",
    a: "The free spinal check-up includes a postural exam ($75 value), a range-of-motion screening ($50 value), and a 15-minute consultation with Dr. Sandy ($65 value) to discuss your concerns and next steps. Total $190 value, free for new patients.",
  },
  {
    q: "Is chiropractic care safe for children and seniors?",
    a: "Absolutely. Dr. Sandy uses gentle, specific techniques that are safe and effective for patients of all ages, from infants to seniors.",
  },
  {
    q: "How long does an appointment take?",
    a: "Initial visits typically take 30 to 45 minutes. Follow-up adjustments are usually 10 to 15 minutes.",
  },
  {
    q: "How quickly can I be seen?",
    a: "Most new patients are seen within the same week. Call or text us at (905) 896-3393 and we'll find a time that works for you.",
  },
  {
    q: "How experienced is Dr. Sandy?",
    a: "Dr. Sandy Bhasin has been in his own practice for 24 years and has personally performed over 300,000 chiropractic adjustments. He graduated from Life West Chiropractic in San Francisco (1999) after completing his B.Sc at the University of Toronto (1996).",
  },
];

export const firstVisitSteps = [
  {
    title: "Book Online or Call",
    blurb:
      "Choose a time that works for you. Most patients are seen within the week.",
  },
  {
    title: "Quick Insurance Check",
    blurb:
      "We verify your benefits before you walk in — zero surprises at checkout.",
  },
  {
    title: "Free Spinal Check-up",
    blurb:
      "A 30-minute postural exam and range-of-motion screening with Dr. Sandy.",
  },
  {
    title: "Personalized Care Plan",
    blurb:
      "We walk through your findings and design a plan tailored to your goals.",
  },
  {
    title: "Your First Adjustment",
    blurb:
      "Gentle, specific, and tailored to your body. You leave standing taller.",
  },
];

export const instagramShots = [
  "/images/dr-sandy-adjusting.png",
  "/images/clinic-interior.png",
  "/images/dr-sandy-award.png",
  "/images/dr-sandy.png",
  "/images/dr-sandy-adjusting.png",
  "/images/clinic-interior.png",
];

export const promiseCards = [
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
];

/**
 * Real video-blog post titles from drbhasin.com/blog.
 * Each post is a video by Dr. Sandy. We link back to drbhasin.com
 * so visitors land on the existing post until videos are migrated.
 */
export const blogPosts = [
  {
    title: "5 Dangers of Sitting All Day",
    tag: "Posture",
    date: "May 4, 2026",
    href: "https://www.drbhasin.com/blog/",
  },
  {
    title: "Great Posture: The Secret to Better Health",
    tag: "Posture",
    date: "Apr 27, 2026",
    href: "https://www.drbhasin.com/blog/",
  },
  {
    title: "Poor Health, Poor Grades",
    tag: "Kids & Students",
    date: "Apr 20, 2026",
    href: "https://www.drbhasin.com/blog/",
  },
  {
    title: "TMJ: Natural Options to Bring Relief",
    tag: "Pain Relief",
    date: "Apr 13, 2026",
    href: "https://www.drbhasin.com/blog/",
  },
  {
    title: "My Favourite Pillow as a Chiropractor",
    tag: "Sleep",
    date: "Apr 6, 2026",
    href: "https://www.drbhasin.com/blog/",
  },
  {
    title: "3 Stretches to Build Low-Back Power",
    tag: "Recovery",
    date: "Mar 30, 2026",
    href: "https://www.drbhasin.com/blog/",
  },
];

/**
 * Real clinic team from drbhasin.com.
 * Grouped by role for the team strip on /about.
 */
export const team = [
  { name: "Ummul", role: "Clinic Manager" },
  { name: "Sadhna", role: "Clinical Coordinator" },
  { name: "Devika", role: "Clinical Coordinator" },
  { name: "Nicole", role: "Clinical Coordinator" },
  { name: "Shandeep", role: "Doctor's Assistant" },
  { name: "Gagan", role: "Assessment Assistant" },
  { name: "Ushbah", role: "Assessment Assistant" },
  { name: "Parnit", role: "Assessment Assistant" },
  { name: "Roshni", role: "Assessment Assistant" },
  { name: "Salima", role: "Assessment Assistant" },
];
