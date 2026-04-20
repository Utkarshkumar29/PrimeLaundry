import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prime Laundry",
  description:
    "India's fastest growing laundry & dry cleaning franchise. Premium FOCO model with full brand, tech, and operations support. Join 50+ franchise partners across India.",
  keywords: "laundry franchise, dry cleaning franchise, Prime Laundry, FOCO model, laundry business India",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Prime Laundry — Franchise Opportunity",
    description: "Own India's fastest growing laundry franchise. ₹8L–₹1Cr investment. 50%+ profit margin.",
    url: "https://www.primelaundry.co.in",
    siteName: "Prime Laundry",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}