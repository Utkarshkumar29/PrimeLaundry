"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MonitorSmartphone, MapPin, Ruler, Megaphone,
  Users, Wrench, Headphones, ClipboardCheck,
  ArrowRight, PhoneCall,
} from "lucide-react";

const pillars = [
  {
    num: "01", icon: MonitorSmartphone, title: "CRM Software", tag: "Full Automation",
    desc: "In-house fully automated system with app-based convenience, online & offline order management, paperless invoicing and GST compliance.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    num: "02", icon: MapPin, title: "Location Finalization", tag: "Site Selection",
    desc: "Market survey, target audience selection, accessibility assessment with rider waiting space and future viability checks.",
    img: "https://images.unsplash.com/photo-1524813686514-a57563d77965?w=600&q=80",
  },
  {
    num: "03", icon: Ruler, title: "Project & Design", tag: "Full Handholding",
    desc: "Store selection, landlord guidance, 2D design planning, vendor finalization and complete launch execution support.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
  },
  {
    num: "04", icon: Megaphone, title: "Marketing Support", tag: "Online & Offline",
    desc: "Instagram, Facebook & Google Ads. Kiosk promotions, App downloads, pre-launch countdown and opening day creatives.",
    img: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&q=80",
  },
  {
    num: "05", icon: Users, title: "Manpower Support", tag: "24hr Replacement",
    desc: "Hiring, training & replacement at no extra cost. Company Training Centre in Raipur with 48-hour quick replacement guarantee.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
  },
  {
    num: "06", icon: Wrench, title: "Technical Assistance", tag: "10+ Yrs Experience",
    desc: "Dedicated operations team of 15 experts with over 10 years of industry experience. Regular store visits for quality assurance.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  },
  {
    num: "07", icon: Headphones, title: "Customer Support", tag: "24×7 Dedicated",
    desc: "Round-the-clock assistance, order booking on call, quick issue resolution, escalation handling and customer retention support.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
  },
  {
    num: "08", icon: ClipboardCheck, title: "Audits", tag: "3-Layer Audit",
    desc: "Operational, machine and financial audits. CRM billing matched with garments, in-house technicians and complete financial transparency.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  },
];

const BRAND_BLUE      = "#10549c";
const BRAND_BLUE_DARK = "#0a3d75";
const BRAND_GREEN     = "#44b24c";
const BRAND_GREEN_DARK = "#339940";
const BRAND_CREAM     = "#f7f5f0";
const DARK_TEXT       = "#0a1f3d";

const SLOW = { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const };
const MED  = { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const };

const WHATSAPP_URL = `https://wa.me/919131979530?text=${encodeURIComponent("Hi! I'm interested in the Prime Laundry franchise. Please share more details.")}`;

// ── Split card: image left/right alternating ──────────────────────────────────
function PillarCard({ pillar, i }: { pillar: typeof pillars[0]; i: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = pillar.icon;
  const imageRight = i % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ ...SLOW, delay: i * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 20,
        overflow: "hidden",
        background: hovered ? BRAND_BLUE_DARK : "#fff",
        border: `1px solid ${hovered ? "transparent" : "rgba(10,31,61,0.09)"}`,
        boxShadow: hovered
          ? "0 20px 52px rgba(10,31,61,0.22)"
          : "0 2px 16px rgba(10,31,61,0.06)",
        display: "flex",
        flexDirection: imageRight ? "row" : "row-reverse",
        minHeight: 220,
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        transition: "all 0.38s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {/* Image — 35% width */}
      <div style={{
        width: "35%",
        flexShrink: 0,
        position: "relative",
        overflow: "hidden",
        minHeight: 220,
      }}>
        <img
          src={pillar.img}
          alt={pillar.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.55s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: hovered ? "rgba(10,61,117,0.35)" : "rgba(10,61,117,0.15)",
          transition: "background 0.38s ease",
        }} />
        {/* Step badge */}
        <div style={{
          position: "absolute", top: 14, left: 14,
          width: 38, height: 38, borderRadius: "50%",
          background: BRAND_GREEN,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "'Fraunces', serif", fontWeight: 900,
          fontSize: 14, color: "#fff",
          boxShadow: "0 2px 10px rgba(68,178,76,0.45)",
        }}>
          {pillar.num}
        </div>
      </div>

      {/* Text — 65% */}
      <div style={{
        flex: 1,
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Green top stripe */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 3,
          background: BRAND_GREEN,
        }} />

        {/* Ghost number */}
        <span style={{
          position: "absolute", bottom: -10, right: 10,
          fontFamily: "'Fraunces', serif", fontSize: "5.5rem",
          fontWeight: 900, lineHeight: 1,
          color: hovered ? "rgba(255,255,255,0.05)" : "rgba(10,31,61,0.05)",
          pointerEvents: "none", userSelect: "none",
          transition: "color 0.38s ease",
        }}>
          {pillar.num}
        </span>

        {/* Icon + tag row */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 11, flexShrink: 0,
            background: hovered ? "rgba(68,178,76,0.2)" : "rgba(68,178,76,0.1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.35s ease",
          }}>
            <Icon size={18} color={BRAND_GREEN} />
          </div>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 10, fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: BRAND_GREEN,
          }}>
            {pillar.tag}
          </span>
        </div>

        {/* Title — bigger */}
        <h3 style={{
          fontFamily: "'Fraunces', serif", fontWeight: 800,
          fontSize: "1.2rem",              // ← was 1.05rem
          lineHeight: 1.25,
          color: hovered ? "#fff" : DARK_TEXT,
          marginBottom: 10,
          transition: "color 0.35s ease",
        }}>
          {pillar.title}
        </h3>

        {/* Description — bigger */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.875rem",            // ← was 0.78rem
          lineHeight: 1.7,
          color: hovered ? "rgba(255,255,255,0.65)" : "#475569",
          transition: "color 0.35s ease",
          margin: 0,
        }}>
          {pillar.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function ManagementSupportSection() {
  return (
    <section id="support" style={{ overflow: "hidden" }}>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundImage: "url('https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        {/* Overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(10,61,117,0.90) 0%, rgba(10,61,117,0.72) 50%, rgba(10,61,117,0.55) 100%)",
        }} />

        {/* Watermark */}
        <div style={{
          position: "absolute", top: 0, right: 0,
          fontFamily: "'Fraunces', serif",
          fontSize: "clamp(7rem, 18vw, 20rem)",
          fontWeight: 900, lineHeight: 0.85,
          letterSpacing: "-0.05em",
          color: "rgba(255,255,255,0.04)",
          pointerEvents: "none", userSelect: "none",
        }}>
          SUP<br />PORT
        </div>

        {/* Content — matches site max-width */}
        <div style={{
          position: "relative", zIndex: 10,
          maxWidth: 1280, margin: "0 auto",
          width: "100%", padding: "120px 32px 80px",
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ ...MED, delay: 0.1 }}
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}
          >
            <div style={{ width: 36, height: 2, background: BRAND_GREEN }} />
            <span style={{
              color: BRAND_GREEN, fontFamily: "'DM Sans', sans-serif",
              fontSize: 11, fontWeight: 700,
              letterSpacing: "0.3em", textTransform: "uppercase",
            }}>
              Management Support
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
            transition={{ ...SLOW, delay: 0.2 }}
            style={{
              fontFamily: "'Fraunces', serif", fontWeight: 900,
              fontSize: "clamp(3rem, 7vw, 7.5rem)",
              color: "#fff", lineHeight: 0.92,
              letterSpacing: "-0.03em", marginBottom: "1.5rem",
              maxWidth: 700,
            }}
          >
            We Run It<br />
            <em style={{ color: BRAND_GREEN, fontStyle: "italic" }}>With</em> You.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ ...SLOW, delay: 0.35 }}
            style={{
              color: "rgba(255,255,255,0.65)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem", lineHeight: 1.75,
              maxWidth: 440, marginBottom: "2.5rem",
            }}
          >
            8 dedicated support pillars from day one to long-term growth.
            You focus on ownership — we handle everything else.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ ...SLOW, delay: 0.45 }}
            style={{ display: "flex", gap: 40, flexWrap: "wrap" }}
          >
            {[
              { value: "8",    label: "Pillars"      },
              { value: "15+",  label: "Experts"      },
              { value: "24×7", label: "Support"      },
              { value: "24hr", label: "Replacement"  },
            ].map((s) => (
              <div key={s.label}>
                <div style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  fontWeight: 900, color: BRAND_GREEN, lineHeight: 1,
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 10, fontWeight: 600,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.38)", marginTop: 4,
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── 8 PILLARS ─────────────────────────────────────────────── */}
      <div style={{ background: BRAND_CREAM }}>

        {/* Section header */}
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          padding: "56px 32px 40px",
          display: "flex", flexDirection: "column",
          gap: 8,
          borderBottom: "1px solid rgba(10,31,61,0.08)",
        }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...MED }}
              style={{
                fontFamily: "'Fraunces', serif", fontWeight: 900,
                fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
                color: DARK_TEXT, letterSpacing: "-0.02em", lineHeight: 1.1,
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
                color: "#64748b", fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.85rem", lineHeight: 1.7, maxWidth: 320,
              }}
            >
              Every pillar is a dedicated team working alongside you from day one.
            </motion.p>
          </div>
        </div>

        {/* Card grid — 2 columns, image+text split cards */}
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          padding: "40px 32px 64px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
          gap: 20,
        }}>
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.num} pillar={pillar} i={i} />
          ))}
        </div>
      </div>

      {/* ── CTA BANNER ────────────────────────────────────────────── */}
      <div style={{
        background: `linear-gradient(135deg, ${BRAND_BLUE} 0%, ${BRAND_BLUE_DARK} 100%)`,
        borderTop: `3px solid ${BRAND_GREEN}`,
        padding: "72px 32px",
        position: "relative", overflow: "hidden",
      }}>
        {/* Subtle glow */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(68,178,76,0.08) 0%, transparent 70%)",
        }} />

        <div style={{
          maxWidth: 1280, margin: "0 auto",
          position: "relative", zIndex: 10,
          display: "flex", flexDirection: "column",
          alignItems: "center", textAlign: "center", gap: 24,
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.22em",
              textTransform: "uppercase", color: BRAND_GREEN,
              fontFamily: "'DM Sans', sans-serif", marginBottom: 12,
            }}>
              Ready to get started?
            </p>
            <h2 style={{
              fontFamily: "'Fraunces', serif", fontWeight: 900,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1,
              marginBottom: 12,
            }}>
              Your support team is waiting.
            </h2>
            <p style={{
              color: "rgba(255,255,255,0.5)", fontSize: 15,
              fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7,
              maxWidth: 460, margin: "0 auto",
            }}>
              Join 50+ franchise partners already running profitable laundry businesses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}
          >
            <motion.a
              href="/franchise"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(68,178,76,0.5)" }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 28px", borderRadius: 100,
                background: `linear-gradient(135deg, ${BRAND_GREEN}, ${BRAND_GREEN_DARK})`,
                color: "#fff", textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15,
                boxShadow: "0 4px 20px rgba(68,178,76,0.35)",
              }}
            >
              Apply for Franchise <ArrowRight size={16} />
            </motion.a>

            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 28px", borderRadius: 100,
                background: "transparent",
                color: "rgba(255,255,255,0.8)",
                border: "1.5px solid rgba(255,255,255,0.25)",
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15,
              }}
            >
              <PhoneCall size={15} /> WhatsApp Us
            </motion.a>
          </motion.div>

          {/* Trust strip */}
          <div style={{
            display: "flex", flexWrap: "wrap", gap: 20,
            justifyContent: "center",
            paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.08)",
            width: "100%",
          }}>
            {[
              "✓ 8 dedicated support pillars",
              "✓ 15+ operations experts",
              "✓ 24×7 customer support",
              "✓ 24hr staff replacement",
            ].map((pt) => (
              <span key={pt} style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13, color: "rgba(255,255,255,0.4)", fontWeight: 500,
              }}>
                {pt}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}