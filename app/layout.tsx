import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Prime Laundry — Clean Clothes. Happy Life.",
  description: "India's fastest-growing laundry & dry cleaning franchise. Premium service starting ₹12/piece.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <BubbleCursor />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}