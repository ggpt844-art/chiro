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
  yearFounded: 2014,
  patientCount: "12,000+",
  rating: 4.9,
  reviewCount: 250,
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
  { label: "Reviews", href: "/#reviews" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
] as const;
