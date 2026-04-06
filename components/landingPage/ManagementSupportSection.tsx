"use client";

import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  MapPin,
  Ruler,
  Megaphone,
  Users,
  Wrench,
  Headphones,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";
import { PillarCard } from "./PillarCard";

const pillars = [
  {
    num: "01",
    icon: MonitorSmartphone,
    title: "CRM Software",
    tag: "Full Automation",
    desc: "In-house fully automated system with app-based convenience, online & offline order management, paperless invoicing and GST compliance.",
    highlight: false,
  },
  {
    num: "02",
    icon: MapPin,
    title: "Location Finalization",
    tag: "Site Selection",
    desc: "Market survey, target audience selection, accessibility assessment with rider waiting space and future viability checks.",
    highlight: false,
  },
  {
    num: "03",
    icon: Ruler,
    title: "Project & Design",
    tag: "Full Handholding",
    desc: "Store selection, landlord guidance, 2D design planning, vendor finalization and complete launch execution support.",
    highlight: true,
  },
  {
    num: "04",
    icon: Megaphone,
    title: "Marketing Support",
    tag: "Online & Offline",
    desc: "Instagram, Facebook & Google Ads. Kiosk promotions, App downloads, pre-launch countdown and opening day creatives.",
    highlight: false,
  },
  {
    num: "05",
    icon: Users,
    title: "Manpower Support",
    tag: "48hr Replacement",
    desc: "Hiring, training & replacement at no extra cost. Company Training Centre in Raipur with 48-hour quick replacement guarantee.",
    highlight: false,
  },
  {
    num: "06",
    icon: Wrench,
    title: "Technical Assistance",
    tag: "10+ Yrs Experience",
    desc: "Dedicated operations team of 15 experts with over 10 years of industry experience. Regular store visits for quality assurance.",
    highlight: true,
  },
  {
    num: "07",
    icon: Headphones,
    title: "Customer Support",
    tag: "24×7 Dedicated",
    desc: "Round-the-clock assistance, order booking on call, quick issue resolution, escalation handling and customer retention support.",
    highlight: false,
  },
  {
    num: "08",
    icon: ClipboardCheck,
    title: "Audits",
    tag: "3-Layer Audit System",
    desc: "Operational, machine and financial audits. CRM billing matched with garments, in-house technicians and complete financial transparency.",
    highlight: false,
  },
];

const SLOW = { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const };
const MED = { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const };

export default function ManagementSupportSection() {
  return (
    <section id="support" className="overflow-hidden">

      {/* ── HERO — Full bleed dark, massive type, image behind ───────────── */}
      <div
        className="relative min-h-screen flex flex-col justify-end pb-16 px-8 md:px-16 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Strong dark gradient from bottom */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(10,15,30,0.55) 0%, rgba(10,15,30,0.95) 70%, #0A0F1E 100%)",
          }}
        />

        {/* Large watermark text top-right */}
        <div
          className="absolute top-0 right-0 select-none pointer-events-none leading-none font-black"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(8rem, 20vw, 22rem)",
            color: "rgba(255,255,255,0.03)",
            lineHeight: 0.85,
            letterSpacing: "-0.05em",
          }}
        >
          SUP
          <br />
          PORT
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...MED, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div style={{ width: 40, height: 2, background: "#00E5C8" }} />
            <span
              className="text-xs font-bold tracking-[0.3em] uppercase"
              style={{ color: "#00E5C8", fontFamily: "'DM Sans', sans-serif" }}
            >
              Management Support
            </span>
          </motion.div>

          {/* Giant heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SLOW, delay: 0.2 }}
            className="font-black text-white leading-[0.9] mb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3.5rem, 9vw, 9rem)",
              letterSpacing: "-0.03em",
            }}
          >
            We Run It
            <br />
            <em style={{ color: "#00E5C8" }}>With</em> You.
          </motion.h1>

          {/* Bottom row — description + stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SLOW, delay: 0.4 }}
            className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16"
          >
            <p
              className="text-base md:text-lg max-w-md"
              style={{ color: "#94a3b8", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}
            >
              8 dedicated support pillars from day one to long-term growth.
              You focus on ownership — we handle everything else.
            </p>

            {/* Stat row */}
            <div className="flex gap-10">
              {[
                { value: "8", label: "Pillars" },
                { value: "15+", label: "Experts" },
                { value: "24×7", label: "Support" },
                { value: "48hr", label: "Replace" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...MED, delay: 0.5 + i * 0.08 }}
                >
                  <div
                    className="text-2xl md:text-3xl font-black"
                    style={{ color: "#00E5C8", fontFamily: "'Playfair Display', serif" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-xs uppercase tracking-widest mt-1"
                    style={{ color: "#475569", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── 8 PILLARS — Bold card grid on cream ─────────────────────────── */}
      <div style={{ background: "#F5F0E8" }}>

        {/* Section label */}
        <div
          className="px-8 md:px-16 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          style={{ borderBottom: "1.5px solid rgba(10,15,30,0.12)" }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ...MED }}
            className="text-2xl md:text-4xl font-black"
            style={{ fontFamily: "'Playfair Display', serif", color: "#0A0F1E", letterSpacing: "-0.02em" }}
          >
            The 8 Pillars of{" "}
            <em style={{ color: "#00E5C8" }}>Support</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ...MED, delay: 0.1 }}
            className="text-sm max-w-sm"
            style={{ color: "#64748b", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}
          >
            Every pillar is a dedicated team working alongside you from day one.
          </motion.p>
        </div>

        {/* Card grid — 4 columns on desktop */}
        <div className="p-8 md:p-16">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {pillars.map((pillar, i) => (
      <PillarCard key={pillar.num} pillar={pillar} i={i} />
    ))}
  </div>
</div>
      </div>

      {/* ── CLOSING STRIP ────────────────────────────────────────────────── */}
      <div
        className="py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8"
        style={{
          background: "#0A0F1E",
          borderTop: "3px solid #00E5C8",
        }}
      >
        <div>
          <p
            className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
            style={{ color: "#00E5C8", fontFamily: "'DM Sans', sans-serif" }}
          >
            Ready to get started?
          </p>
          <h3
            className="text-3xl md:text-4xl font-black text-white"
            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.02em" }}
          >
            Your support team is waiting.
          </h3>
        </div>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base"
          style={{ background: "#00E5C8", color: "#0A0F1E", fontFamily: "'DM Sans', sans-serif" }}
        >
          Apply for Franchise <ArrowRight size={18} />
        </motion.a>
      </div>

    </section>
  );
}