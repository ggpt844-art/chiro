/**
 * Single source of truth for clinic info.
 * Edit here and every page (home, /about, /services, footer, schema) updates.
 */
export const CLINIC = {
  name: "Powerflow Chiropractic",
  tagline: "Life · Power · Freedom",
  doctor: {
    name: "Dr. Sandy Bhasin",
    short: "Dr. Sandy",
    credentials: "B.Sc, D.C",
    title: "Founder · Doctor of Chiropractic",
    education: {
      undergrad: "B.Sc, University of Toronto (1996)",
      doctorate: "Doctor of Chiropractic, Life West Chiropractic, San Francisco (1999)",
    },
    media: [
      "Eye on Asia Television (Health & Wellness contributor)",
      "Geetmala Radio with Darshan Sahota (Health & Wellness contributor)",
    ],
  },
  phone: "9058963393",
  phoneDisplay: "(905) 896-3393",
  whatsapp: "19058963393",
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
  mapsQuery:
    "Powerflow Chiropractic, 33 City Centre Dr #143, Mississauga, ON L5B 2N5",
  /** Short landmark line — used in footer + about teaser. */
  landmark: "Steps from Square One Shopping Mall · near Hwy 10 & the 403",
  yearsInPractice: 24,
  adjustmentsPerformed: 300_000,
  rating: 4.9,
  reviewCount: 250,
  /** Sum of award-year wins across major awards (7 Top Choice + 5 Consumer Choice). */
  awardYearWins: 12,
  social: {
    instagram: "https://www.instagram.com/powerflow.chiropractic/",
    facebook: "https://www.facebook.com/powerflowchiropractic/",
    google: "https://www.google.com/search?q=Powerflow+Chiropractic+Mississauga",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
] as const;
