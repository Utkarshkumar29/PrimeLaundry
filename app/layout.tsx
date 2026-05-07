import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BubbleCursor from "@/components/ui/BubbleCursor";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ── Viewport ─────────────────────────────────────────────────── */
export const viewport: Viewport = {
  themeColor: "#10549c",
  width: "device-width",
  initialScale: 1,
};

/* ── Metadata ─────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.primelaundry.in"),

  title: {
    default:  "Prime Laundry — Clean Clothes. Happy Life.",
    template: "%s | Prime Laundry",
  },
  description:
    "India's fastest-growing laundry & dry cleaning franchise. Premium fabric care starting ₹12/piece. Doorstep pickup & delivery across India.",

  // ── Favicon / Icons ─────────────────────────────────────────
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.png", sizes: "32x32",   type: "image/png" },
      { url: "/icon.png", sizes: "16x16",   type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple:    "/icon.png",
  },

  // ── Open Graph ───────────────────────────────────────────────
  openGraph: {
    title:       "Prime Laundry — Clean Clothes. Happy Life.",
    description: "India's fastest-growing laundry & dry cleaning franchise. Premium service starting ₹12/piece. Doorstep pickup & delivery.",
    url:         "https://www.primelaundry.in",
    siteName:    "Prime Laundry",
    locale:      "en_IN",
    type:        "website",
    images: [
      {
        url:    "/og-image.png",   // create a 1200×630 branded banner in /public
        width:  1200,
        height: 630,
        alt:    "Prime Laundry – Premium Dry Cleaning & Laundry Service India",
      },
    ],
  },

  // ── Twitter / X ──────────────────────────────────────────────
  twitter: {
    card:        "summary_large_image",
    title:       "Prime Laundry — Clean Clothes. Happy Life.",
    description: "India's fastest-growing laundry & dry cleaning franchise. Premium service starting ₹12/piece.",
    images:      ["/og-image.png"],
  },

  // ── Robots ───────────────────────────────────────────────────
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-image-preview": "large",
      "max-snippet":       -1,
      "max-video-preview": -1,
    },
  },

  // ── Keywords ─────────────────────────────────────────────────
  keywords: [
    "prime laundry",
    "laundry service india",
    "dry cleaning india",
    "laundry franchise india",
    "doorstep laundry pickup",
    "laundry franchise opportunity",
    "FOCO franchise india",
    "premium laundry service",
    "dry cleaning franchise",
    "laundry service delhi",
    "laundry service noida",
    "primelaundry.in",
  ],

  authors:         [{ name: "Prime Laundry", url: "https://www.primelaundry.in" }],
  applicationName: "Prime Laundry",
  category:        "business",
};

/* ── JSON-LD structured data ──────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. Organisation — powers Knowledge Panel logo + info
    {
      "@type":       "Organization",
      "@id":         "https://www.primelaundry.in/#organization",
      "name":        "Prime Laundry",
      "url":         "https://www.primelaundry.in",
      "logo": {
        "@type":  "ImageObject",
        "url":    "https://www.primelaundry.in/icon.png",
        "width":  512,
        "height": 512,
      },
      "description": "India's first warehouse-based laundry & dry cleaning franchise. FOCO model with confirmed orders from Day 1.",
      "foundingDate": "2019",
      "address": {
        "@type":           "PostalAddress",
        "streetAddress":   "Shop no-GF, City Arcade, 16B, Gaur City 2 Rd",
        "addressLocality": "Noida",
        "addressRegion":   "Uttar Pradesh",
        "postalCode":      "201318",
        "addressCountry":  "IN",
      },
      "contactPoint": {
        "@type":             "ContactPoint",
        "telephone":         "+91-9131979530",
        "contactType":       "customer service",
        "availableLanguage": ["English", "Hindi"],
      },
      "sameAs": [
        // "https://www.instagram.com/primelaundry",
        // "https://www.facebook.com/primelaundry",
      ],
    },

    // 2. LocalBusiness — boosts Google Maps & local search ranking
    {
      "@type":     "LocalBusiness",
      "@id":       "https://www.primelaundry.in/#localbusiness",
      "name":      "Prime Dry Clean & Laundry",
      "image":     "https://www.primelaundry.in/icon.png",
      "url":       "https://www.primelaundry.in",
      "telephone": "+91-9131979530",
      "priceRange": "₹₹",
      "address": {
        "@type":           "PostalAddress",
        "streetAddress":   "Shop no-GF, City Arcade, 16B, Gaur City 2 Rd",
        "addressLocality": "Noida",
        "addressRegion":   "Uttar Pradesh",
        "postalCode":      "201318",
        "addressCountry":  "IN",
      },
      "geo": {
        "@type":     "GeoCoordinates",
        "latitude":  28.6139,
        "longitude": 77.2090,
      },
      "openingHoursSpecification": {
        "@type":      "OpeningHoursSpecification",
        "dayOfWeek":  ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens":      "08:00",
        "closes":     "22:00",
      },
      "aggregateRating": {
        "@type":       "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "25",
      },
    },

    // 3. WebSite — enables Sitelinks search box in Google
    {
      "@type":       "WebSite",
      "@id":         "https://www.primelaundry.in/#website",
      "url":         "https://www.primelaundry.in",
      "name":        "Prime Laundry",
      "description": "India's fastest-growing laundry & dry cleaning franchise.",
      "publisher":   { "@id": "https://www.primelaundry.in/#organization" },
      "inLanguage":  "en-IN",
    },
  ],
};

/* ══════════════════════════════════════════════════════════════
   ROOT LAYOUT
══════════════════════════════════════════════════════════════ */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* ── JSON-LD structured data for Google rich results ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ── Explicit favicon tags (reinforces Next.js metadata) ── */}
        <link rel="icon"             href="/icon.png" type="image/png" />
        <link rel="shortcut icon"    href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />

        {/* ── Preconnect for performance ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">
        {/* ── Your existing components — untouched ── */}
        <BubbleCursor />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}