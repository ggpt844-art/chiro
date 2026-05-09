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
      "Top Choice Award winner 7 years running, plus Consumer Choice Award winner in Peel Region.",
  },
  {
    icon: ShieldCheck,
    title: "A Gentle, Scientific Approach",
    blurb:
      "Modern, evidence-based techniques delivered with a calm, patient-first bedside manner.",
  },
  {
    icon: Users,
    title: "Care for the Whole Family",
    blurb:
      "From toddlers to grandparents, Dr. Sandy adjusts every patient with care tailored to their body.",
  },
  {
    icon: Heart,
    title: "12,000+ Patients Adjusted",
    blurb:
      "Trusted by Mississauga families since 2014. We measure success in pain-free mornings, not appointments booked.",
  },
];

export const reviews = [
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

export const hours = [
  { day: "Monday", time: "9:00 AM – 7:00 PM" },
  { day: "Tuesday", time: "11:00 AM – 7:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 8:00 PM" },
  { day: "Thursday", time: "Closed" },
  { day: "Friday", time: "9:00 AM – 4:00 PM" },
  { day: "Saturday", time: "9:00 AM – 2:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export const awards = [
  {
    title: "Consumer Choice",
    year: "2021",
    region: "Peel Region",
    category: "Chiropractor",
    variant: "red" as const,
  },
  {
    title: "Top Choice",
    year: "2019–2026",
    region: "Mississauga",
    category: "Chiropractic Office",
    variant: "gold" as const,
  },
  {
    title: "Best of Mississauga",
    year: "2023",
    region: "Mississauga News",
    category: "Health & Wellness",
    variant: "sage" as const,
  },
  {
    title: "Patients' Choice",
    year: "2024",
    region: "Peel Region",
    category: "Family Chiropractic",
    variant: "gold" as const,
  },
];

export const faqItems: FaqItem[] = [
  {
    q: "Where is Powerflow Chiropractic located?",
    a: "We are located in the heart of Mississauga, Ontario. Easy access by car or public transit, with free patient parking on site.",
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
    a: "Most new patients are seen within the same week. Call or WhatsApp us and we'll find a time that works for you, often as soon as tomorrow.",
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
