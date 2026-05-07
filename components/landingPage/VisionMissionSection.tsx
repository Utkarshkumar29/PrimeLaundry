'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Telescope, Target, Diamond } from 'lucide-react';

/* ── Brand tokens ──────────────────────────────────────── */
const B  = "#10549c";
const BD = "#0a3d75";
const G  = "#44b24c";
const GD = "#339940";

const EASE = [0.22, 1, 0.36, 1] as const;
const MED  = { duration: 0.75, ease: EASE };

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 56 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } },
};

/*
  ── Images — each directly matched to the card theme ──────────
  VISION  : Mumbai skyline at sunset (Marine Drive) — 500+ cities
  MISSION : Indian woman in Delhi working (customer service) — effortless & affordable for every Indian
  VALUES  : Happy customer receiving doorstep delivery — empathy, care, trust
*/
const VISION_IMG  = "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=85";  // Mumbai Marine Drive night
const MISSION_IMG = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=85";  // Indian team / service
const VALUES_IMG  = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=85";  // handshake / trust / partnership

/* ── Card ─────────────────────────────────────────────── */
function Card({
  icon: Icon, label, img, children,
}: {
  icon: React.ElementType;
  label: string;
  img: string;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 24,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        background: hovered ? BD : "#fff",
        border: `1.5px solid ${hovered ? G : "rgba(10,31,61,0.09)"}`,
        boxShadow: hovered
          ? "0 24px 60px rgba(10,31,61,0.22), 0 0 0 1px rgba(68,178,76,0.15)"
          : "0 4px 24px rgba(10,31,61,0.07)",
        transition: "all 0.38s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {/* ── Image area ── */}
      <div style={{ position: "relative", height: 220, overflow: "hidden", flexShrink: 0 }}>
        <img
          src={img}
          alt={label}
          style={{
            width: "100%", height: "100%", objectFit: "cover", display: "block",
            transform: hovered ? "scale(1.07)" : "scale(1)",
            transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
        {/* Dark gradient overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: hovered
            ? "linear-gradient(to bottom, rgba(10,61,117,0.55) 0%, rgba(10,31,61,0.85) 100%)"
            : "linear-gradient(to bottom, rgba(10,31,61,0.25) 0%, rgba(10,31,61,0.72) 100%)",
          transition: "background 0.4s ease",
        }} />

        {/* Icon badge + title */}
        <div style={{
          position: "absolute", bottom: 16, left: 20,
          display: "flex", alignItems: "center", gap: 10,
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: 13,
            background: hovered ? G : "rgba(68,178,76,0.85)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 14px rgba(68,178,76,0.45)",
            transition: "background 0.35s ease",
            flexShrink: 0,
          }}>
            <Icon size={20} color="#fff" />
          </div>
          <h3 style={{
            fontFamily: "'Fraunces', serif", fontWeight: 900,
            fontSize: "1.35rem", color: "#fff",
            letterSpacing: "-0.02em", lineHeight: 1.1,
            textShadow: "0 1px 8px rgba(0,0,0,0.4)",
          }}>{label}</h3>
        </div>

        {/* Green top accent bar */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: `linear-gradient(90deg, ${G}, ${GD})`,
        }} />
      </div>

      {/* ── Text body ── */}
      <div style={{
        padding: "26px 26px 30px",
        flex: 1,
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Faint watermark */}
        <span style={{
          position: "absolute", bottom: -12, right: 10,
          fontFamily: "'Fraunces', serif", fontSize: "5rem",
          fontWeight: 900, lineHeight: 1,
          color: hovered ? "rgba(255,255,255,0.04)" : "rgba(10,31,61,0.04)",
          pointerEvents: "none", userSelect: "none",
          transition: "color 0.38s ease",
        }}>{label.split(' ')[1] ?? label.split(' ')[0]}</span>

        {children}
      </div>
    </motion.div>
  );
}

/* ── Main export ──────────────────────────────────────── */
export default function VisionMissionSection() {
  return (
    <section
      id="vision"
      style={{
        background: `linear-gradient(160deg, ${BD} 0%, #061e3f 100%)`,
        padding: "96px 32px 104px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.04,
        backgroundImage: `radial-gradient(circle, ${G} 1px, transparent 1px)`,
        backgroundSize: "36px 36px",
      }} />

      {/* Green ambient glow */}
      <div style={{
        position: "absolute", top: -200, left: "50%", transform: "translateX(-50%)",
        width: 700, height: 400, borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle, rgba(68,178,76,0.07) 0%, transparent 70%)",
      }} />

      {/* Ghost watermark */}
      <div style={{
        position: "absolute", bottom: -40, right: -20,
        fontFamily: "'Fraunces', serif",
        fontSize: "clamp(8rem, 18vw, 18rem)",
        fontWeight: 900, lineHeight: 0.85,
        letterSpacing: "-0.05em",
        color: "rgba(255,255,255,0.025)",
        pointerEvents: "none", userSelect: "none",
      }}>DNA</div>

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={MED}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16,
            padding: "6px 20px", borderRadius: 100,
            background: "rgba(68,178,76,0.12)", border: "1px solid rgba(68,178,76,0.25)",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: G, display: "inline-block" }} />
            <span style={{
              color: G, fontFamily: "'DM Sans', sans-serif",
              fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase",
            }}>Our Foundation</span>
          </div>

          <h2 style={{
            fontFamily: "'Fraunces', serif", fontWeight: 900,
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.0,
            marginBottom: 16,
          }}>
            What <em style={{ color: G, fontStyle: "italic" }}>Drives</em> Us
          </h2>

          <p style={{
            color: "rgba(255,255,255,0.48)", fontFamily: "'DM Sans', sans-serif",
            fontSize: 16, lineHeight: 1.75, maxWidth: 480, margin: "0 auto",
          }}>
            Built on purpose, guided by values, and fuelled by a passion for clean.
          </p>
        </motion.div>

        {/* ── Cards ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {/* ── VISION: Mumbai skyline → 500+ cities target ── */}
          <Card icon={Telescope} label="Our Vision" img={VISION_IMG}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem", lineHeight: 1.8,
              color: "rgba(100,116,139,1)",
            }}>
              To become <strong style={{ color: G }}>India's most trusted</strong> and loved laundry & dry cleaning brand — delivering world-class fabric care to every doorstep, in every city.
            </p>
            <div style={{
              marginTop: 22, paddingTop: 18,
              borderTop: "1px solid rgba(10,31,61,0.08)",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <div style={{ width: 28, height: 2, background: G, borderRadius: 2 }} />
              <span style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700,
                letterSpacing: "0.18em", textTransform: "uppercase", color: G,
              }}>500+ Cities Target by 2029</span>
            </div>
          </Card>

          {/* ── MISSION: Indian service worker → effortless for every Indian ── */}
          <Card icon={Target} label="Our Mission" img={MISSION_IMG}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem", lineHeight: 1.8,
              color: "rgba(100,116,139,1)",
            }}>
              To make premium laundry <strong style={{ color: G }}>effortless and affordable</strong> for every Indian household by combining cutting-edge technology, eco-friendly practices, and heartfelt service.
            </p>
            <div style={{
              marginTop: 22, paddingTop: 18,
              borderTop: "1px solid rgba(10,31,61,0.08)",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <div style={{ width: 28, height: 2, background: G, borderRadius: 2 }} />
              <span style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700,
                letterSpacing: "0.18em", textTransform: "uppercase", color: G,
              }}>Serving Since 2019</span>
            </div>
          </Card>

          {/* ── VALUES: Handshake / partnership → integrity, trust, empathy ── */}
          <Card icon={Diamond} label="Our Values" img={VALUES_IMG}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
              {[
                "Integrity in every interaction",
                "Excellence in every garment",
                "Sustainability in every wash",
                "Empathy for every customer",
                "Innovation in every process",
              ].map((val, i) => (
                <li key={val} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                    background: "rgba(68,178,76,0.12)",
                    border: "1px solid rgba(68,178,76,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginTop: 1,
                  }}>
                    <span style={{
                      fontFamily: "'Fraunces', serif", fontWeight: 900,
                      fontSize: 9, color: G,
                    }}>0{i + 1}</span>
                  </div>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.95rem", lineHeight: 1.6,
                    color: "#475569",
                    fontWeight: 500,
                  }}>{val}</span>
                </li>
              ))}
            </ul>
          </Card>

        </motion.div>

        {/* ── Bottom stats strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...MED, delay: 0.4 }}
          style={{
            marginTop: 64,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 1,
            borderRadius: 20, overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {[
            { value: "2019",  label: "Founded"        },
            { value: "50%+",  label: "Profit Margin"  },
            { value: "24×7",  label: "Operations"     },
            { value: "500+",  label: "Stores by 2029" },
          ].map((s, i) => (
            <div key={s.label} style={{
              padding: "28px 24px",
              background: i === 0 ? "rgba(68,178,76,0.12)" : "rgba(255,255,255,0.04)",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
              textAlign: "center",
            }}>
              <div style={{
                fontFamily: "'Fraunces', serif", fontWeight: 900,
                fontSize: "2rem", lineHeight: 1,
                color: i === 0 ? G : "#fff",
                marginBottom: 6,
              }}>{s.value}</div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 11,
                fontWeight: 600, letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
              }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}