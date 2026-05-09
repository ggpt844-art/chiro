import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SkipLink from "@/components/SkipLink";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const SITE_URL = "https://powerflowchiropractic.ca";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Powerflow Chiropractic | #1 Chiropractor in Mississauga, ON",
    template: "%s | Powerflow Chiropractic",
  },
  description:
    "Voted Mississauga's #1 chiropractor 7 years running. Dr. Sandy Bhasin offers gentle, scientific chiropractic care for the whole family. Free spinal check-up — book today.",
  keywords: [
    "chiropractor Mississauga",
    "best chiropractor Mississauga",
    "Dr. Sandy Bhasin",
    "Powerflow Chiropractic",
    "chiropractor near me",
    "free spinal check-up",
    "chiropractic care Peel Region",
    "sciatica relief Mississauga",
    "back pain Mississauga",
  ],
  authors: [{ name: "Powerflow Chiropractic" }],
  creator: "Powerflow Chiropractic",
  publisher: "Powerflow Chiropractic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: "Powerflow Chiropractic",
    title: "Powerflow Chiropractic | #1 Chiropractor in Mississauga, ON",
    description:
      "Voted Mississauga's #1 chiropractor 7 years running. Free spinal check-up with Dr. Sandy Bhasin.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Powerflow Chiropractic | #1 Chiropractor in Mississauga, ON",
    description:
      "Voted Mississauga's #1 chiropractor 7 years running. Free spinal check-up with Dr. Sandy Bhasin.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#b73026",
  width: "device-width",
  initialScale: 1,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness", "Physician"],
  "@id": `${SITE_URL}/#clinic`,
  name: "Powerflow Chiropractic",
  alternateName: "Dr. Sandy Bhasin Chiropractic",
  description:
    "Family chiropractic clinic in Mississauga led by Dr. Sandy Bhasin, B.Sc, D.C. Gentle, scientific spinal care for adults, children, and seniors.",
  url: SITE_URL,
  telephone: "+1-905-896-3393",
  email: "info@drbhasin.com",
  image: `${SITE_URL}/images/clinic-interior.png`,
  logo: `${SITE_URL}/icon.png`,
  priceRange: "$$",
  medicalSpecialty: "Chiropractic",
  address: {
    "@type": "PostalAddress",
    streetAddress: "33 City Centre Dr #143",
    addressLocality: "Mississauga",
    addressRegion: "ON",
    postalCode: "L5B 2N5",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.5934,
    longitude: -79.6438,
  },
  hasMap: "https://maps.google.com/?q=33+City+Centre+Dr+%23143%2C+Mississauga%2C+ON+L5B+2N5",
  areaServed: [
    { "@type": "City", name: "Mississauga" },
    { "@type": "AdministrativeArea", name: "Peel Region" },
  ],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "09:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "11:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "16:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "14:00" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "250",
    bestRating: "5",
    worstRating: "1",
  },
  award: [
    "Consumer Choice Award 2021 — Peel Region — Chiropractor",
    "Top Choice Award — Mississauga — Chiropractic Office",
  ],
  founder: {
    "@type": "Person",
    name: "Dr. Sandy Bhasin",
    honorificPrefix: "Dr.",
    honorificSuffix: "B.Sc, D.C",
    jobTitle: "Doctor of Chiropractic",
    image: `${SITE_URL}/images/dr-sandy.png`,
  },
  sameAs: [
    "https://www.instagram.com/powerflow.chiropractic/",
    "https://www.facebook.com/powerflowchiropractic/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name: "Powerflow Chiropractic",
  inLanguage: "en-CA",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
    >
      <body className="bg-[#fdfaf4] text-[#1a1a1a] min-h-screen font-sans">
        <SkipLink />
        {children}
        <Script
          id="schema-localbusiness"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
