"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MonitorSmartphone, MapPin, Ruler, Megaphone,
  Users, Wrench, Headphones, ClipboardCheck,
  ArrowRight,
} from "lucide-react";

const pillars = [
  { num: "01", icon: MonitorSmartphone, title: "CRM Software",         tag: "Full Automation",    desc: "In-house fully automated system with app-based convenience, online & offline order management, paperless invoicing and GST compliance." },
  { num: "02", icon: MapPin,            title: "Location Finalization", tag: "Site Selection",     desc: "Market survey, target audience selection, accessibility assessment with rider waiting space and future viability checks." },
  { num: "03", icon: Ruler,             title: "Project & Design",      tag: "Full Handholding",   desc: "Store selection, landlord guidance, 2D design planning, vendor finalization and complete launch execution support." },
  { num: "04", icon: Megaphone,         title: "Marketing Support",     tag: "Online & Offline",   desc: "Instagram, Facebook & Google Ads. Kiosk promotions, App downloads, pre-launch countdown and opening day creatives." },
  { num: "05", icon: Users,             title: "Manpower Support",      tag: "48hr Replacement",   desc: "Hiring, training & replacement at no extra cost. Company Training Centre in Raipur with 48-hour quick replacement guarantee." },
  { num: "06", icon: Wrench,            title: "Technical Assistance",  tag: "10+ Yrs Experience", desc: "Dedicated operations team of 15 experts with over 10 years of industry experience. Regular store visits for quality assurance." },
  { num: "07", icon: Headphones,        title: "Customer Support",      tag: "24×7 Dedicated",     desc: "Round-the-clock assistance, order booking on call, quick issue resolution, escalation handling and customer retention support." },
  { num: "08", icon: ClipboardCheck,    title: "Audits",                tag: "3-Layer Audit",      desc: "Operational, machine and financial audits. CRM billing matched with garments, in-house technicians and complete financial transparency." },
];

const BRAND_BLUE      = "#10549c";
const BRAND_BLUE_DARK = "#0a3d75";
const BRAND_GREEN     = "#44b24c";
const BRAND_CREAM     = "#f7f5f0";
const DARK_TEXT       = "#0a1f3d";

const SLOW = { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const };
const MED  = { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const };

function PillarCard({ pillar, i }: { pillar: typeof pillars[0]; i: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = pillar.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ ...SLOW, delay: i * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl p-6 flex flex-col relative overflow-hidden cursor-pointer"
      style={{
        background:  hovered ? BRAND_BLUE_DARK : "#ffffff",
        border:      hovered ? `1px solid ${BRAND_BLUE_DARK}` : "1px solid rgba(10,31,61,0.1)",
        boxShadow:   hovered
          ? "0 20px 48px rgba(10,31,61,0.25)"
          : "0 2px 12px rgba(10,31,61,0.07)",
        minHeight:   280,
        transition:  "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
        transform:   hovered ? "translateY(-6px)" : "translateY(0)",
      }}
    >
      {/* Green top stripe */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{ height: 3, background: BRAND_GREEN, borderRadius: "16px 16px 0 0" }}
      />

      {/* Ghost number */}
      <span
        className="absolute bottom-2 right-3 select-none pointer-events-none"
        style={{
          fontFamily: "'Fraunces', serif",
          fontSize: "5.5rem",
          fontWeight: 900,
          lineHeight: 1,
          color: hovered ? "rgba(255,255,255,0.06)" : "rgba(10,31,61,0.06)",
          transition: "color 0.35s ease",
        }}
      >
        {pillar.num}
      </span>

      {/* Icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 flex-shrink-0"
        style={{
          background: hovered ? "rgba(68,178,76,0.2)" : "rgba(68,178,76,0.1)",
          transition: "background 0.35s ease",
        }}
      >
        <Icon size={18} color={BRAND_GREEN} />
      </div>

      {/* Tag */}
      <span
        style={{
          color: BRAND_GREEN,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          marginBottom: 6,
        }}
      >
        {pillar.tag}
      </span>

      {/* Title */}
      <h3
        style={{
          color: hovered ? "#ffffff" : DARK_TEXT,
          fontFamily: "'Fraunces', serif",
          fontSize: "1.05rem",
          fontWeight: 800,
          marginBottom: 10,
          lineHeight: 1.3,
          transition: "color 0.35s ease",
        }}
      >
        {pillar.title}
      </h3>

      {/* Description */}
      <p
        className="mt-auto"
        style={{
          color: hovered ? "rgba(255,255,255,0.58)" : "#64748b",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.8rem",
          lineHeight: 1.65,
          transition: "color 0.35s ease",
        }}
      >
        {pillar.desc}
      </p>
    </motion.div>
  );
}

export default function ManagementSupportSection() {
  return (
    <section id="support" className="overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <div
        className="relative flex flex-col justify-center px-8 md:px-16 overflow-hidden"
        style={{
          minHeight: "100vh",
          backgroundImage: "url('https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(10,61,117,0.88) 0%, rgba(10,61,117,0.75) 50%, rgba(10,61,117,0.60) 100%)`,
          }}
        />

        {/* Watermark */}
        <div
          className="absolute top-0 right-0 select-none pointer-events-none font-black leading-none"
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(7rem, 18vw, 20rem)",
            color: "rgba(255,255,255,0.04)",
            letterSpacing: "-0.05em",
            lineHeight: 0.85,
          }}
        >
          SUP<br />PORT
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl pt-28 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...MED, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div style={{ width: 36, height: 2, background: BRAND_GREEN }} />
            <span style={{
              color: BRAND_GREEN,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}>
              Management Support
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SLOW, delay: 0.2 }}
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(3.2rem, 8vw, 8.5rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              marginBottom: "2rem",
            }}
          >
            We Run It<br />
            <em style={{ color: BRAND_GREEN, fontStyle: "italic" }}>With</em> You.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SLOW, delay: 0.35 }}
            style={{
              color: "rgba(255,255,255,0.68)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.75,
              maxWidth: 420,
              marginBottom: "2.5rem",
            }}
          >
            8 dedicated support pillars from day one to long-term growth.
            You focus on ownership — we handle everything else.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SLOW, delay: 0.45 }}
            className="flex gap-8 md:gap-12 flex-wrap"
          >
            {[
              { value: "8",    label: "Pillars"  },
              { value: "15+",  label: "Experts"  },
              { value: "24×7", label: "Support"  },
              { value: "48hr", label: "Replacement" },
            ].map((s, i) => (
              <div key={s.label}>
                <div style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontWeight: 900,
                  color: BRAND_GREEN,
                  lineHeight: 1,
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.38)",
                  marginTop: 4,
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── 8 PILLARS ────────────────────────────────────────────── */}
      <div style={{ background: BRAND_CREAM }}>

        {/* Section header */}
        <div
          className="px-8 md:px-16 pt-14 pb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-3"
          style={{ borderBottom: "1px solid rgba(10,31,61,0.08)" }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ...MED }}
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
              fontWeight: 900,
              color: DARK_TEXT,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            The 8 Pillars of{" "}
            <em style={{ color: BRAND_BLUE, fontStyle: "italic" }}>Support</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ...MED, delay: 0.1 }}
            style={{
              color: "#64748b",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.85rem",
              lineHeight: 1.7,
              maxWidth: 320,
            }}
          >
            Every pillar is a dedicated team working alongside you from day one.
          </motion.p>
        </div>

        {/* Card grid */}
        <div className="px-8 md:px-16 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((pillar, i) => (
              <PillarCard key={pillar.num} pillar={pillar} i={i} />
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA BANNER ─────────────────────────────────────── */}
      <div style={{
        background: 'linear-gradient(135deg, #10549c 0%, #0a3d75 100%)',
        padding: '64px 32px',
      }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', textAlign: 'center', gap: 24,
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{
              fontSize: 12, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
              color: '#7dd880', fontFamily: "'DM Sans', sans-serif", marginBottom: 12,
            }}>
              Ready to get started?
            </p>
            <h2 style={{
              fontFamily: "'Fraunces', serif", fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1,
              marginBottom: 8,
            }}>
              Your support team is waiting.
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.55)', fontSize: 16,
              fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7,
            }}>
              Join 50+ franchise partners already running profitable laundry businesses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(68,178,76,0.5)' }}
              whileTap={{ scale: 0.96 }}
              
              style={{
                padding: '13px 28px', borderRadius: 100,
                background: 'linear-gradient(135deg, #44b24c, #2d9e36)',
                color: '#fff', border: 'none', cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15,
                display: 'flex', alignItems: 'center', gap: 8,
                boxShadow: '0 4px 20px rgba(68,178,76,0.35)',
              }}
            >
              Apply for Franchise <ArrowRight size={16}/>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              
              style={{
                padding: '13px 28px', borderRadius: 100,
                background: 'transparent',
                color: 'rgba(255,255,255,0.8)',
                border: '1.5px solid rgba(255,255,255,0.25)',
                cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15,
              }}
            >
              Explore Services
            </motion.button>
          </motion.div>
        </div>
      </div>

    </section>
  );
}