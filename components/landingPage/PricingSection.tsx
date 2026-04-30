"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  ArrowRight, CheckCircle2, ShieldCheck,
  Settings2, TrendingUp, HeadphonesIcon, Zap,
} from "lucide-react";

/* ── Brand tokens ─────────────────────────────────────────── */
const B  = "#10549c";
const BD = "#0a3d75";
const G  = "#44b24c";
const GD = "#339940";
const CR = "#f7f5f0";

const WA_NUM = "917566611104";
const WA_MSG = encodeURIComponent(
  "Hi Prime Laundry! 👋\n\nI'd like to book a pickup.\n\nName: \nAddress: \nService: \nTime: "
);
const WA_URL = `https://wa.me/${WA_NUM}?text=${WA_MSG}`;

const EASE = [0.22, 1, 0.36, 1] as const;
const MED  = { duration: 0.7,  ease: EASE };
const SLOW = { duration: 1.0,  ease: EASE };

/* ── Hook ─────────────────────────────────────────────────── */
function useReveal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return { ref, inView };
}

/* ── WhatsApp SVG icon ────────────────────────────────────── */
function WAIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════
   MAIN EXPORT
════════════════════════════════════════════════════════════ */
export default function PricingSection() {
  const custR = useReveal();
  const frnR  = useReveal();

  return (
    <section id="pricing" style={{ overflow: "hidden" }}>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PART 1 — CUSTOMER PRICING
          Single service card: Wash & Steam Iron ₹12/piece
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div style={{ background: CR, padding: "88px 24px 96px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>

          {/* Section heading */}
          <motion.div
            ref={custR.ref}
            initial={{ opacity: 0, y: 28 }}
            animate={custR.inView ? { opacity: 1, y: 0 } : {}}
            transition={MED}
            style={{ textAlign: "center", marginBottom: 60 }}
          >
            <span style={{
              display: "inline-block", marginBottom: 12,
              padding: "5px 18px", borderRadius: 100,
              background: "rgba(68,178,76,0.12)", border: "1px solid rgba(68,178,76,0.25)",
              color: G, fontFamily: "'DM Sans', sans-serif",
              fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
            }}>For Customers</span>
            <h2 style={{
              fontFamily: "'Fraunces', serif", fontWeight: 900,
              fontSize: "clamp(2.2rem,4.5vw,3.2rem)",
              color: BD, letterSpacing: "-0.035em", lineHeight: 1.05, marginBottom: 14,
            }}>Customer Pricing</h2>
            <p style={{
              color: "#64748b", fontFamily: "'DM Sans', sans-serif",
              fontSize: 16, lineHeight: 1.7, maxWidth: 480, margin: "0 auto",
            }}>
              Premium quality laundry — starting at just{" "}
              <strong style={{ color: G }}>₹12/piece</strong>.
              Transparent pricing, zero hidden charges.
            </p>
          </motion.div>

          {/* ── Single card: Wash & Steam Iron ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={custR.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...MED, delay: 0.1 }}
            style={{ display: "flex", justifyContent: "center", marginBottom: 56 }}
          >
            <motion.div
              whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(10,31,61,0.14)" }}
              style={{
                background: "#fff", borderRadius: 24,
                border: `2px solid ${G}`,
                boxShadow: "0 8px 32px rgba(68,178,76,0.14)",
                position: "relative", overflow: "hidden",
                width: "100%", maxWidth: 440,
                transition: "box-shadow 0.3s ease",
              }}
            >
              {/* Green top bar */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 4,
                background: `linear-gradient(90deg, ${G}, ${GD})`,
              }} />

              {/* Most Popular badge */}
              <div style={{
                position: "absolute", top: 16, right: 16,
                background: G, color: "#fff",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 9, fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                padding: "3px 10px", borderRadius: 6,
              }}>Most Popular</div>

              <div style={{ padding: "36px 32px 32px" }}>

                {/* Icon */}
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: "rgba(68,178,76,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 20,
                }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
                    stroke={G} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
                  </svg>
                </div>

                {/* Label */}
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  color: "#94a3b8", marginBottom: 6,
                }}>Service</p>
                <h3 style={{
                  fontFamily: "'Fraunces', serif", fontWeight: 900,
                  fontSize: "1.8rem", color: BD,
                  letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 24,
                }}>Wash & Steam Iron</h3>

                {/* Price box */}
                <div style={{
                  background: CR,
                  border: "1.5px solid rgba(68,178,76,0.2)",
                  borderRadius: 16, padding: "20px 22px",
                  marginBottom: 24,
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                }}>
                  <div>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700,
                      letterSpacing: "0.15em", textTransform: "uppercase",
                      color: "#94a3b8", marginBottom: 4,
                    }}>Starting from</p>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                      <span style={{
                        fontFamily: "'Fraunces', serif", fontWeight: 900,
                        fontSize: "3.2rem", color: G, lineHeight: 1,
                      }}>₹12</span>
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 16, color: "#64748b", fontWeight: 600,
                      }}> / piece</span>
                    </div>
                  </div>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: `linear-gradient(135deg, ${G}, ${GD})`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 4px 16px rgba(68,178,76,0.35)",
                  }}>
                    <Zap size={24} color="#fff" />
                  </div>
                </div>

                {/* Feature pills */}
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
                  {["Doorstep Pickup", "2–4 hr Turnaround", "Premium Quality"].map(tag => (
                    <span key={tag} style={{
                      fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600,
                      color: G, background: "rgba(68,178,76,0.09)",
                      border: "1px solid rgba(68,178,76,0.2)",
                      borderRadius: 100, padding: "4px 12px",
                    }}>{tag}</span>
                  ))}
                </div>

                {/* CTA */}
                <motion.a
                  href={WA_URL} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 32px rgba(37,211,102,0.45)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    gap: 10, padding: "15px 28px", borderRadius: 100,
                    background: "#25D366",
                    color: "#fff", textDecoration: "none",
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15,
                    boxShadow: "0 6px 24px rgba(37,211,102,0.38)",
                  }}
                >
                  <WAIcon size={18} />
                  Book Pickup via WhatsApp
                </motion.a>

                <p style={{
                  textAlign: "center", marginTop: 10,
                  fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#94a3b8",
                }}>Instant response · No advance payment required</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PART 2 — FRANCHISE INVESTMENT MODELS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div style={{
        background: `linear-gradient(160deg, ${BD} 0%, #061e3f 100%)`,
        padding: "88px 24px 96px",
        position: "relative", overflow: "hidden",
      }}>
        {/* Dot grid texture */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.045,
          backgroundImage: `radial-gradient(circle, ${G} 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }} />
        {/* Green glow */}
        <div style={{
          position: "absolute", top: -120, right: -120,
          width: 480, height: 480, borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(68,178,76,0.08) 0%, transparent 70%)",
        }} />

        <div style={{ maxWidth: 1060, margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* Heading */}
          <motion.div
            ref={frnR.ref}
            initial={{ opacity: 0, y: 28 }}
            animate={frnR.inView ? { opacity: 1, y: 0 } : {}}
            transition={MED}
            style={{ textAlign: "center", marginBottom: 40 }}
          >
            <span style={{
              display: "inline-block", marginBottom: 12,
              padding: "5px 18px", borderRadius: 100,
              background: "rgba(68,178,76,0.14)", border: "1px solid rgba(68,178,76,0.28)",
              color: G, fontFamily: "'DM Sans', sans-serif",
              fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
            }}>For Investors</span>
            <h2 style={{
              fontFamily: "'Fraunces', serif", fontWeight: 900,
              fontSize: "clamp(2.2rem,4.5vw,3.2rem)",
              color: "#fff", letterSpacing: "-0.035em", lineHeight: 1.05, marginBottom: 14,
            }}>Franchise Investment Models</h2>
            <p style={{
              color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif",
              fontSize: 16, lineHeight: 1.7, maxWidth: 520, margin: "0 auto",
            }}>
              Two warehouse-based FOCO models — confirmed orders from Day 1,
              full operations managed by Prime Laundry.
            </p>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={frnR.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...MED, delay: 0.14 }}
            style={{
              display: "flex", flexWrap: "wrap",
              justifyContent: "center", gap: 10, marginBottom: 56,
            }}
          >
            {[
              { Icon: ShieldCheck,    label: "Proven Business Model"          },
              { Icon: Settings2,      label: "System Driven Operations"       },
              { Icon: TrendingUp,     label: "High Margin Opportunity"        },
              { Icon: HeadphonesIcon, label: "Complete Support at Every Step" },
            ].map(({ Icon, label }) => (
              <div key={label} style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: 100, padding: "9px 18px",
              }}>
                <Icon size={15} color={G} />
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.8)",
                }}>{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Model cards — hardcoded from Aashiya's data */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24, maxWidth: 860, margin: "0 auto",
          }}>

            {/* ── Prime Basics ── */}
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              animate={frnR.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...SLOW, delay: 0 }}
              whileHover={{ y: -8, transition: { duration: 0.28 } }}
              style={{
                borderRadius: 28, overflow: "hidden",
                border: "1.5px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.04)",
                display: "flex", flexDirection: "column",
              }}
            >
              {/* Header */}
              <div style={{
                padding: "36px 28px 24px",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.03)",
              }}>
                <span style={{
                  display: "inline-block", padding: "3px 12px", borderRadius: 6,
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 10, fontWeight: 700,
                  letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10,
                }}>Warehouse Franchise Model</span>
                <h3 style={{
                  fontFamily: "'Fraunces', serif", fontWeight: 900,
                  fontSize: "1.9rem", color: "#fff",
                  letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 4,
                }}>Prime Basics</h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13, color: "rgba(255,255,255,0.38)", marginBottom: 22,
                }}>Best for: Small to Mid Size Cities</p>
                <div style={{
                  display: "inline-flex", flexDirection: "column",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 14, padding: "14px 20px", width: "100%",
                }}>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)", marginBottom: 4,
                  }}>Total Investment</span>
                  <span style={{
                    fontFamily: "'Fraunces', serif", fontWeight: 900,
                    fontSize: "2.4rem", lineHeight: 1, color: "#fff",
                  }}>₹28.80 Lakhs</span>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "24px 28px 32px", flex: 1 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 8 }}>
                  <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "12px 14px" }}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.3)", marginBottom: 4 }}>Daily Capacity</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.9)", lineHeight: 1.3 }}>1,000 Pieces / Day</p>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "12px 14px" }}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.3)", marginBottom: 4 }}>Revenue / Day</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.9)", lineHeight: 1.3 }}>₹30,000 – ₹35,000</p>
                  </div>
                </div>
                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "12px 14px", marginBottom: 24 }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.3)", marginBottom: 4 }}>Suitable For</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.9)" }}>Small to Mid Size Cities</p>
                </div>

                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.28)", marginBottom: 12 }}>What's Included</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 28 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <CheckCircle2 size={14} color="rgba(68,178,76,0.65)" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>Machinery & Equipment</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <CheckCircle2 size={14} color="rgba(68,178,76,0.65)" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>Store Setup & Design</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <CheckCircle2 size={14} color="rgba(68,178,76,0.65)" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>Branding & Marketing Kit</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <CheckCircle2 size={14} color="rgba(68,178,76,0.65)" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>Staff Training Programme</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <CheckCircle2 size={14} color="rgba(68,178,76,0.65)" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>Operations Support</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <CheckCircle2 size={14} color={G} strokeWidth={2.5} style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, color: "rgba(68,178,76,0.9)" }}>Confirmed Orders Provided</span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 10 }}>
                  <motion.a href="/franchise"
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    style={{
                      flex: 1, display: "flex", alignItems: "center",
                      justifyContent: "center", gap: 8,
                      padding: "14px 20px", borderRadius: 100,
                      background: "transparent", border: `1.5px solid ${G}`,
                      color: G, textDecoration: "none",
                      fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14,
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = "rgba(68,178,76,0.1)"}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = "transparent"}
                  >
                    Apply for Franchise <ArrowRight size={15} />
                  </motion.a>
                  <motion.a
                    href={`https://wa.me/${WA_NUM}?text=${encodeURIComponent("Hi! I'm interested in the Prime Basics franchise (₹28.80 Lakhs). Please share details.")}`}
                    target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }}
                    title="Chat on WhatsApp"
                    style={{
                      width: 48, height: 48, borderRadius: "50%", flexShrink: 0,
                      border: "1.5px solid rgba(37,211,102,0.35)",
                      background: "rgba(37,211,102,0.08)", color: "#25D366",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      textDecoration: "none", transition: "all 0.2s ease",
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = "rgba(37,211,102,0.18)"}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = "rgba(37,211,102,0.08)"}
                  >
                    <WAIcon size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* ── Prime Elite ── */}
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              animate={frnR.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...SLOW, delay: 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.28 } }}
              style={{
                borderRadius: 28, overflow: "hidden",
                border: `2px solid ${G}`,
                background: "rgba(68,178,76,0.07)",
                boxShadow: "0 24px 64px rgba(68,178,76,0.2)",
                display: "flex", flexDirection: "column",
                position: "relative",
              }}
            >
              {/* Recommended pill */}
              <div style={{
                position: "absolute", top: -1, left: "50%",
                transform: "translateX(-50%)",
                background: `linear-gradient(135deg, ${G}, ${GD})`,
                color: "#fff", fontFamily: "'DM Sans', sans-serif",
                fontSize: 10, fontWeight: 700,
                letterSpacing: "0.14em", textTransform: "uppercase",
                padding: "5px 20px", borderRadius: "0 0 12px 12px",
                boxShadow: "0 4px 16px rgba(68,178,76,0.4)",
              }}>Recommended</div>

              {/* Header */}
              <div style={{
                padding: "36px 28px 24px",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(68,178,76,0.09)",
              }}>
                <span style={{
                  display: "inline-block", padding: "3px 12px", borderRadius: 6,
                  background: "rgba(68,178,76,0.2)", color: G,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 10, fontWeight: 700,
                  letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10,
                }}>Warehouse Franchise Model</span>
                <h3 style={{
                  fontFamily: "'Fraunces', serif", fontWeight: 900,
                  fontSize: "1.9rem", color: "#fff",
                  letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 4,
                }}>Prime Elite</h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13, color: "rgba(255,255,255,0.38)", marginBottom: 22,
                }}>Best for: Metro / High Demand / Large Cities</p>
                <div style={{
                  display: "inline-flex", flexDirection: "column",
                  background: "rgba(68,178,76,0.14)",
                  border: "1px solid rgba(68,178,76,0.3)",
                  borderRadius: 14, padding: "14px 20px", width: "100%",
                }}>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)", marginBottom: 4,
                  }}>Total Investment</span>
                  <span style={{
                    fontFamily: "'Fraunces', serif", fontWeight: 900,
                    fontSize: "2.4rem", lineHeight: 1, color: G,
                  }}>₹35.95 Lakhs</span>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "24px 28px 32px", flex: 1 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 8 }}>
                  <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "12px 14px" }}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.3)", marginBottom: 4 }}>Daily Capacity</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, color: G, lineHeight: 1.3 }}>2,000 Pieces / Day</p>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "12px 14px" }}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.3)", marginBottom: 4 }}>Revenue / Day</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, color: G, lineHeight: 1.3 }}>₹50,000 – ₹60,000</p>
                  </div>
                </div>
                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "12px 14px", marginBottom: 24 }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.3)", marginBottom: 4 }}>Suitable For</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, color: G }}>Metro / High Demand / Large Cities</p>
                </div>

                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.28)", marginBottom: 12 }}>What's Included</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 28 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <CheckCircle2 size={14} color="rgba(68,178,76,0.65)" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>Advanced Machinery & Equipment</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <CheckCircle2 size={14} color="rgba(68,178,76,0.65)" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>Full Store Setup & Design</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <CheckCircle2 size={14} color="rgba(68,178,76,0.65)" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>Premium Branding Kit</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <CheckCircle2 size={14} color="rgba(68,178,76,0.65)" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>Staff Training Programme</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <CheckCircle2 size={14} color="rgba(68,178,76,0.65)" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>Full Operations Support</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <CheckCircle2 size={14} color={G} strokeWidth={2.5} style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, color: G }}>Confirmed Orders Provided</span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 10 }}>
                  <motion.a href="/franchise"
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    style={{
                      flex: 1, display: "flex", alignItems: "center",
                      justifyContent: "center", gap: 8,
                      padding: "14px 20px", borderRadius: 100,
                      background: `linear-gradient(135deg, ${G}, ${GD})`,
                      border: "none", color: "#fff", textDecoration: "none",
                      fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14,
                      boxShadow: "0 4px 20px rgba(68,178,76,0.38)",
                      transition: "all 0.25s ease",
                    }}
                  >
                    Get Details <ArrowRight size={15} />
                  </motion.a>
                  <motion.a
                    href={`https://wa.me/${WA_NUM}?text=${encodeURIComponent("Hi! I'm interested in the Prime Elite franchise (₹35.95 Lakhs). Please share details.")}`}
                    target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }}
                    title="Chat on WhatsApp"
                    style={{
                      width: 48, height: 48, borderRadius: "50%", flexShrink: 0,
                      border: "1.5px solid rgba(37,211,102,0.35)",
                      background: "rgba(37,211,102,0.08)", color: "#25D366",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      textDecoration: "none", transition: "all 0.2s ease",
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = "rgba(37,211,102,0.18)"}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = "rgba(37,211,102,0.08)"}
                  >
                    <WAIcon size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={frnR.inView ? { opacity: 1 } : {}}
            transition={{ ...MED, delay: 0.55 }}
            style={{
              textAlign: "center", marginTop: 40,
              color: "rgba(255,255,255,0.2)",
              fontFamily: "'DM Sans', sans-serif", fontSize: 12,
            }}
          >
            * Investment includes machinery, setup, branding & training.
            Prices subject to location. Contact us for a detailed breakdown.
          </motion.p>
        </div>
      </div>

    </section>
  );
} 