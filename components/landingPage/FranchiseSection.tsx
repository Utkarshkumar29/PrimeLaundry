"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  TrendingUp, Warehouse, Tag, BarChart3,
  CheckCircle2, ArrowRight,
  ShieldCheck,
  Settings2,
  HeadphonesIcon,
} from "lucide-react";


const BLUE      = "#10549c";
const BLUE_DARK = "#0a3d75";
const GREEN     = "#44b24c";
const GREEN_DK  = "#339940";
const CREAM     = "#f7f5f0";
const DARK      = "#0a1f3d";

const WA_NUM = "919131979530";
const WA_MSG = encodeURIComponent(
  "Hi! I'd like to book a laundry pickup with Prime Laundry.\n\nName:\nPickup Address:\nService Required:\nPreferred Pickup Time:"
);
const WA_URL = `https://wa.me/${WA_NUM}?text=${WA_MSG}`;

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwHNpNcFxpY599mD1Jqa7r0Ge4Sfd404leSK-FgRf6rrDvYPHXaGQwtwkCd97BhOoae/exec";

const EASE = [0.22, 1, 0.36, 1] as const;
const MED  = { duration: 0.85, ease: EASE };
const SLOW = { duration: 1.1,  ease: EASE };

type FormState = "idle" | "loading" | "success" | "error";
// ── Brand tokens ──────────────────────────────────────────────────────────────
const BRAND_BLUE       = "#10549c";
const BRAND_BLUE_DARK  = "#0a3d75";
const BRAND_GREEN      = "#44b24c";
const BRAND_GREEN_DARK = "#339940";
const BRAND_CREAM      = "#f7f5f0";
const DARK_TEXT        = "#0a1f3d";

// ── Data ──────────────────────────────────────────────────────────────────────
const whyCards = [
  {
    badge: "💰",
    icon: TrendingUp,
    title: "Own Your City",
    subtitle: "High Revenue Potential",
    points: [
      "Processing Capacity: 2,000+ garments/day",
      "Estimated Revenue: ₹50,000 – ₹70,000/day",
      "City-level monopoly with first-mover advantage",
    ],
  },
  {
    badge: "🚀",
    icon: Warehouse,
    title: "India's First Warehouse-Based Laundry Model",
    subtitle: "Built for Scale",
    points: [
      "Centralized high-efficiency processing hub",
      "Eliminates retail overheads → higher profit margins",
      "Built for scale, automation & consistency",
    ],
  },
  {
    badge: "💸",
    icon: Tag,
    title: "Affordable Luxury Pricing",
    subtitle: "Starting ₹12/garment",
    points: [
      "Services starting at just ₹12 per garment",
      "Premium quality at mass-market pricing",
      "High volume = high profit scalability",
    ],
  },
  {
    badge: "📊",
    icon: BarChart3,
    title: "Strong Unit Economics",
    subtitle: "Fast Break-Even",
    points: [
      "Low operational cost vs traditional laundries",
      "Bulk processing = higher margins per piece",
      "ROI-focused model with fast break-even",
    ],
  },
];

const models = [
  {
    tier: "Silver",
    label: "Prime Basic",
    investment: "₹25–28 Lakhs",
    capacity: "1,000 pcs/day",
    area: "1,500–2,000 sq.ft.",
    revenue: "₹5–10L / month",
    roi: "12–24 months",
    manpower: "10–15",
    royalty: "20% on revenue",
    highlight: false,
    accentColor: "#64748b",
  },
  {
    tier: "Gold",
    label: "Prime Premium",
    investment: "₹35–40 Lakhs",
    capacity: "2,000 pcs/day",
    area: "2,500–3,000 sq.ft.",
    revenue: "₹10–15L / month",
    roi: "12–24 months",
    manpower: "15–25",
    royalty: "20% on revenue",
    highlight: true,
    accentColor: BRAND_GREEN,
  },
  {
    tier: "Platinum",
    label: "Platinum",
    investment: "₹1 Crore",
    capacity: "5,000 pcs/day",
    area: "4,000–5,000 sq.ft.",
    revenue: "₹15–20L / month",
    roi: "18–28 months",
    manpower: "35–40",
    royalty: "20% on revenue",
    highlight: false,
    accentColor: "#94a3b8",
  },
];

const onboardingSteps = [
  { num: "01", title: "LOI Signed",        desc: "LOI signed by both parties. Location blocked with signing amount. Project Manager visits site." },
  { num: "02", title: "Store Agreement",   desc: "Location finalized per specs. Agreement executed. 2D layout drawing provided by company." },
  { num: "03", title: "Store Construction",desc: "Construction as per 2D drawing with full vendor handholding from our operations team." },
  { num: "04", title: "Staff Training",    desc: "Complete training at Head Office. Support via manuals & on-job sessions. 24hr replacement." },
  { num: "05", title: "Dry Run",           desc: "2–3 day dry run after machine installation to ensure everything is launch-ready." },
  { num: "06", title: "Store Opening",     desc: "Official launch with marketing creatives, kiosk promotions & offline team deployed." },
];

// ── Variants ──────────────────────────────────────────────────────────────────
const fromLeft   = { hidden: { opacity: 0, x: -80 }, visible: (d = 0) => ({ opacity: 1, x: 0, transition: { duration: 1.1, delay: d, ease: [0.22, 1, 0.36, 1] as const } }) };
const fromRight  = { hidden: { opacity: 0, x: 80  }, visible: (d = 0) => ({ opacity: 1, x: 0, transition: { duration: 1.1, delay: d, ease: [0.22, 1, 0.36, 1] as const } }) };
const fromBottom = { hidden: { opacity: 0, y: 70  }, visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 1.1, delay: d, ease: [0.22, 1, 0.36, 1] as const } }) };
const fromTop    = { hidden: { opacity: 0, y: -50 }, visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 1.0, delay: d, ease: [0.22, 1, 0.36, 1] as const } }) };
const scaleIn    = { hidden: { opacity: 0, scale: 0.88 }, visible: (d = 0) => ({ opacity: 1, scale: 1, transition: { duration: 1.0, delay: d, ease: [0.22, 1, 0.36, 1] as const } }) };

function useReveal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, inView };
}

function SectionLabel({ text }: { text: string }) {
  return (
    <span
      className="inline-block text-xs font-semibold tracking-[0.22em] uppercase mb-3"
      style={{ color: BRAND_GREEN, fontFamily: "'DM Sans', sans-serif" }}
    >
      {text}
    </span>
  );
}

function CardShell({ children, className = "", style = {} }: {
  children: React.ReactNode; className?: string; style?: React.CSSProperties;
}) {
  return (
    <div
      className={`rounded-2xl p-7 relative overflow-hidden h-full ${className}`}
      style={{
        background: "#ffffff",
        border: "1px solid rgba(10,31,61,0.08)",
        boxShadow: "0 4px 28px rgba(10,31,61,0.07)",
        ...style,
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
        style={{ background: BRAND_GREEN }}
      />
      {children}
    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function FranchiseSection() {
  const heroR    = useReveal();
  const whyR     = useReveal();
  const modelsR  = useReveal();
  const processR = useReveal();
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <section id="franchise" className="overflow-hidden">

      {/* ── 1. HERO ──────────────────────────────────────────────────────────── */}
      <div
        className="relative px-6 text-center overflow-hidden flex flex-col justify-center items-center"
        style={{
          minHeight: "100vh",
          paddingTop: "120px",
          paddingBottom: "80px",
          backgroundImage: "url('https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `linear-gradient(135deg, rgba(10,61,117,0.92) 0%, rgba(10,61,117,0.78) 100%)` }} />
        {/* Green glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(68,178,76,0.08) 0%, transparent 70%)" }} />

        <div ref={heroR.ref} className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center gap-6">

          <motion.div variants={fromTop} custom={0} initial="hidden" animate={heroR.inView ? "visible" : "hidden"}>
            <SectionLabel text="Franchise Opportunity" />
          </motion.div>

          <motion.h2
            variants={scaleIn} custom={0.15} initial="hidden" animate={heroR.inView ? "visible" : "hidden"}
            className="text-4xl md:text-6xl font-bold leading-tight text-white"
            style={{ fontFamily: "'Fraunces', serif", letterSpacing: "-0.03em" }}
          >
            Your Clean Start To A{" "}
            <em style={{ color: BRAND_GREEN, fontStyle: "italic" }}>Profitable Future</em>
          </motion.h2>

          <motion.p
            variants={fromBottom} custom={0.3} initial="hidden" animate={heroR.inView ? "visible" : "hidden"}
            className="text-lg md:text-xl max-w-2xl"
            style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'DM Sans', sans-serif" }}
          >
            India&apos;s fastest-growing laundry franchise — proven systems,
            guaranteed orders, and city-level exclusivity.
          </motion.p>

          <motion.div
            variants={scaleIn} custom={0.45} initial="hidden" animate={heroR.inView ? "visible" : "hidden"}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border text-sm font-semibold"
            style={{
              borderColor: BRAND_GREEN, color: BRAND_GREEN,
              background: "rgba(68,178,76,0.08)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            ✦ &quot;No customer search. Only confirmed orders.&quot; ✦
          </motion.div>

          <motion.div
            variants={fromBottom} custom={0.55} initial="hidden" animate={heroR.inView ? "visible" : "hidden"}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="/franchise"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:opacity-90"
              style={{ background: `linear-gradient(135deg, ${BRAND_GREEN}, ${BRAND_GREEN_DARK})`, color: "#fff", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 20px rgba(68,178,76,0.35)" }}
            >
              Apply for Franchise <ArrowRight size={18} />
            </a>
            <a
              href="#models"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:bg-white/10"
              style={{ border: "1.5px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.85)", fontFamily: "'DM Sans', sans-serif" }}
            >
              View Plans
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={scaleIn} custom={0.65} initial="hidden" animate={heroR.inView ? "visible" : "hidden"}
            className="w-full"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "32px" }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
  { label: "Confirmed Daily Orders",    value: "1000+",      sub: "Guaranteed pipeline from day one", v: fromLeft,   d: 0.7 },
  { label: "Franchise Investment Starts", value: "₹28.8L",  sub: "Onwards — entry level model",      v: fromBottom, d: 0.8 },
  { label: "Potential Profit Margin",   value: "50%+",       sub: "Minimum guaranteed margin",        v: fromBottom, d: 0.9 },
  { label: "Setup & Launch Support",    value: "Complete",   sub: "End-to-end by our expert team",    v: fromRight,  d: 0.7 },
].map((s) => (
  <motion.div
    key={s.label}
    variants={s.v} custom={s.d} initial="hidden" animate={heroR.inView ? "visible" : "hidden"}
    className="rounded-xl px-5 py-5 text-center"
    style={{
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.1)",
      backdropFilter: "blur(8px)",
    }}
  >
    <div
      style={{
        fontFamily: "'Fraunces', serif",
        fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
        fontWeight: 900,
        color: BRAND_GREEN,
        lineHeight: 1.1,
        marginBottom: 6,
      }}
    >
      {s.value}
    </div>
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 12, fontWeight: 700,
        color: "rgba(255,255,255,0.85)",
        marginBottom: 4,
        letterSpacing: "0.01em",
      }}
    >
      {s.label}
    </div>
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 10,
        color: "rgba(255,255,255,0.35)",
        lineHeight: 1.4,
      }}
    >
      {s.sub}
    </div>
  </motion.div>
))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── 2. WHY FRANCHISE ─────────────────────────────────────────────────── */}
      <div className="py-24 px-6" style={{ background: BRAND_CREAM }}>
        <div ref={whyR.ref} className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <motion.div variants={fromTop} custom={0} initial="hidden" animate={whyR.inView ? "visible" : "hidden"}>
              <SectionLabel text="Why Partner With Us" />
            </motion.div>
            <motion.h2
              variants={scaleIn} custom={0.1} initial="hidden" animate={whyR.inView ? "visible" : "hidden"}
              className="text-3xl md:text-5xl font-bold"
              style={{ fontFamily: "'Fraunces', serif", color: DARK_TEXT, letterSpacing: "-0.02em" }}
            >
              A Business That Works <em style={{ color: BRAND_BLUE }}>For</em> You
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "20px", gridAutoRows: "1fr" }}>
            {whyCards.map((card, i) => {
              const directions = [fromLeft, fromTop, fromRight, fromBottom];
              const variant = directions[i % directions.length];
              return (
                <motion.div
                  key={card.title}
                  variants={variant} custom={i * 0.22}
                  initial="hidden" animate={whyR.inView ? "visible" : "hidden"}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  style={{ height: "100%" }}
                >
                  <CardShell style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    <div className="flex items-center gap-3 mb-4">
                      <motion.span
                        className="text-3xl"
                        whileHover={{ scale: 1.25, rotate: 8, transition: { duration: 0.2 } }}
                        style={{ display: "inline-block" }}
                      >
                        {card.badge}
                      </motion.span>
                      <p className="text-xs font-semibold tracking-widest uppercase"
                        style={{ color: BRAND_GREEN, fontFamily: "'DM Sans', sans-serif" }}>
                        {card.subtitle}
                      </p>
                    </div>
                    <h3 className="text-xl font-bold mb-5"
                      style={{ color: DARK_TEXT, fontFamily: "'Fraunces', serif" }}>
                      {card.title}
                    </h3>
                    <ul className="space-y-3 mt-auto">
                      {card.points.map((pt, pi) => (
                        <motion.li
                          key={pt}
                          variants={variant} custom={i * 0.22 + 0.2 + pi * 0.1}
                          initial="hidden" animate={whyR.inView ? "visible" : "hidden"}
                          className="flex items-start gap-2 text-sm"
                          style={{ color: "#475569", fontFamily: "'DM Sans', sans-serif" }}
                        >
                          <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0" style={{ color: BRAND_GREEN }} />
                          {pt}
                        </motion.li>
                      ))}
                    </ul>
                  </CardShell>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── 3. BUSINESS MODELS ───────────────────────────────────────────────── */}
       <section id="franchise" style={{ background: BLUE_DARK, padding: "80px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={MED}
            style={{ textAlign: "center", marginBottom: 20 }}
          >
            <p style={{
              color: GREEN, fontSize: 11, fontWeight: 700,
              letterSpacing: "0.22em", textTransform: "uppercase",
              fontFamily: "'DM Sans', sans-serif", marginBottom: 10,
            }}>For Investors</p>
            <h2 style={{
              fontFamily: "'Fraunces', serif", fontWeight: 900,
              fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff",
              letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 14,
            }}>Franchise Investment Models</h2>
            <p style={{
              color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif",
              fontSize: 15, lineHeight: 1.7, maxWidth: 500, margin: "0 auto",
            }}>
              Two warehouse-based models — choose the scale that fits your city and ambition.
            </p>
          </motion.div>

          {/* Trust pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ ...MED, delay: 0.15 }}
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, marginBottom: 52 }}
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
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 100, padding: "8px 16px",
              }}>
                <Icon size={13} color={GREEN} />
                <span style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 12,
                  fontWeight: 600, color: "rgba(255,255,255,0.8)",
                }}>{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Franchise cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24, maxWidth: 900, margin: "0 auto",
          }}>

            {/* ── Prime Basics ── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ ...SLOW, delay: 0 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              style={{
                borderRadius: 24, overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.04)",
                display: "flex", flexDirection: "column",
              }}
            >
              {/* Card header */}
              <div style={{
                padding: "32px 28px 20px",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.02)",
              }}>
                <p style={{
                  fontSize: 9, fontWeight: 700, letterSpacing: "0.2em",
                  textTransform: "uppercase", color: "rgba(255,255,255,0.35)",
                  fontFamily: "'DM Sans', sans-serif", marginBottom: 6,
                }}>Warehouse Franchise Model</p>
                <h3 style={{
                  fontFamily: "'Fraunces', serif", fontWeight: 900,
                  fontSize: "1.8rem", color: "#fff",
                  letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 18,
                }}>Prime Basics</h3>
                <div style={{
                  display: "inline-flex", alignItems: "baseline", gap: 8,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 14, padding: "12px 18px",
                }}>
                  <span style={{
                    fontFamily: "'Fraunces', serif", fontWeight: 900,
                    fontSize: "2rem", lineHeight: 1, color: "#fff",
                  }}>₹28-35 Lakhs</span>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12, color: "rgba(255,255,255,0.35)",
                  }}>total investment</span>
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: "24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 22 }}>
                  <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "10px 14px" }}>
                    <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif", marginBottom: 3 }}>Capacity</p>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.9)", fontFamily: "'DM Sans', sans-serif" }}>1,000 Pieces / Day</p>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "10px 14px" }}>
                    <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif", marginBottom: 3 }}>ROI</p>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.9)", fontFamily: "'DM Sans', sans-serif" }}>12 – 18 Months</p>
                  </div>
                  <div style={{ gridColumn: "1 / -1", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "10px 14px" }}>
                    <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif", marginBottom: 3 }}>Potential Revenue</p>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.9)", fontFamily: "'DM Sans', sans-serif" }}>₹30,000 – ₹35,000 / Day</p>
                  </div>
                  <div style={{ gridColumn: "1 / -1", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "10px 14px" }}>
                    <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif", marginBottom: 3 }}>Suitable For</p>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.9)", fontFamily: "'DM Sans', sans-serif" }}>Small to Mid Size Cities</p>
                  </div>
                </div>

                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", fontFamily: "'DM Sans', sans-serif", marginBottom: 10 }}>What's Included</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24, flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <CheckCircle2 size={13} color="rgba(68,178,76,0.65)" strokeWidth={2.5} />
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.72)", fontFamily: "'DM Sans', sans-serif" }}>Machinery & Equipment</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <CheckCircle2 size={13} color="rgba(68,178,76,0.65)" strokeWidth={2.5} />
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.72)", fontFamily: "'DM Sans', sans-serif" }}>Store Setup & Design</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <CheckCircle2 size={13} color="rgba(68,178,76,0.65)" strokeWidth={2.5} />
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.72)", fontFamily: "'DM Sans', sans-serif" }}>Branding & Marketing Kit</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <CheckCircle2 size={13} color="rgba(68,178,76,0.65)" strokeWidth={2.5} />
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.72)", fontFamily: "'DM Sans', sans-serif" }}>Staff Training Programme</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <CheckCircle2 size={13} color="rgba(68,178,76,0.65)" strokeWidth={2.5} />
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.72)", fontFamily: "'DM Sans', sans-serif" }}>Operations Support</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <CheckCircle2 size={13} color={GREEN} strokeWidth={2.5} />
                    <span style={{ fontSize: 13, color: "rgba(68,178,76,0.9)", fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>Confirmed Orders Provided</span>
                  </div>
                </div>

                <motion.button
                  onClick={() => setEnquiryOpen(true)}
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  style={{
                    width: "100%", padding: "14px", borderRadius: 100,
                    border: `1.5px solid ${GREEN}`, background: "transparent",
                    color: GREEN, fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700, fontSize: 14, cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(68,178,76,0.1)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
                >
                  Apply for Franchise <ArrowRight size={15} />
                </motion.button>
              </div>
            </motion.div>

            {/* ── Prime Elite ── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ ...SLOW, delay: 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              style={{
                borderRadius: 24, overflow: "hidden",
                border: `2px solid ${GREEN}`,
                background: "rgba(68,178,76,0.07)",
                display: "flex", flexDirection: "column",
              }}
            >
              {/* Recommended banner */}
              <div style={{
                background: GREEN, color: "#fff", textAlign: "center",
                padding: "5px 0", fontFamily: "'DM Sans', sans-serif",
                fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
              }}>Recommended</div>

              {/* Card header */}
              <div style={{
                padding: "24px 28px 20px",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(68,178,76,0.06)",
              }}>
                <p style={{
                  fontSize: 9, fontWeight: 700, letterSpacing: "0.2em",
                  textTransform: "uppercase", color: GREEN,
                  fontFamily: "'DM Sans', sans-serif", marginBottom: 6,
                }}>Warehouse Franchise Model</p>
                <h3 style={{
                  fontFamily: "'Fraunces', serif", fontWeight: 900,
                  fontSize: "1.8rem", color: "#fff",
                  letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 18,
                }}>Prime Elite</h3>
                <div style={{
                  display: "inline-flex", alignItems: "baseline", gap: 8,
                  background: "rgba(68,178,76,0.15)",
                  border: "1px solid rgba(68,178,76,0.3)",
                  borderRadius: 14, padding: "12px 18px",
                }}>
                  <span style={{
                    fontFamily: "'Fraunces', serif", fontWeight: 900,
                    fontSize: "2rem", lineHeight: 1, color: GREEN,
                  }}>₹35-45 Lakhs</span>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12, color: "rgba(255,255,255,0.35)",
                  }}>total investment</span>
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: "24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 22 }}>
                  <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "10px 14px" }}>
                    <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif", marginBottom: 3 }}>Capacity</p>
                    <p style={{ fontSize: 13, fontWeight: 700, color: GREEN, fontFamily: "'DM Sans', sans-serif" }}>2,000 Pieces / Day</p>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "10px 14px" }}>
                    <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif", marginBottom: 3 }}>ROI</p>
                    <p style={{ fontSize: 13, fontWeight: 700, color: GREEN, fontFamily: "'DM Sans', sans-serif" }}>12 – 18 Months</p>
                  </div>
                  <div style={{ gridColumn: "1 / -1", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "10px 14px" }}>
                    <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif", marginBottom: 3 }}>Potential Revenue</p>
                    <p style={{ fontSize: 13, fontWeight: 700, color: GREEN, fontFamily: "'DM Sans', sans-serif" }}>₹50,000 – ₹60,000 / Day</p>
                  </div>
                  <div style={{ gridColumn: "1 / -1", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "10px 14px" }}>
                    <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif", marginBottom: 3 }}>Suitable For</p>
                    <p style={{ fontSize: 13, fontWeight: 700, color: GREEN, fontFamily: "'DM Sans', sans-serif" }}>High Demand / Metro / Large Cities</p>
                  </div>
                </div>

                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", fontFamily: "'DM Sans', sans-serif", marginBottom: 10 }}>What's Included</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24, flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <CheckCircle2 size={13} color="rgba(68,178,76,0.65)" strokeWidth={2.5} />
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.72)", fontFamily: "'DM Sans', sans-serif" }}>Advanced Machinery & Equipment</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <CheckCircle2 size={13} color="rgba(68,178,76,0.65)" strokeWidth={2.5} />
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.72)", fontFamily: "'DM Sans', sans-serif" }}>Full Store Setup & Design</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <CheckCircle2 size={13} color="rgba(68,178,76,0.65)" strokeWidth={2.5} />
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.72)", fontFamily: "'DM Sans', sans-serif" }}>Premium Branding Kit</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <CheckCircle2 size={13} color="rgba(68,178,76,0.65)" strokeWidth={2.5} />
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.72)", fontFamily: "'DM Sans', sans-serif" }}>Staff Training Programme</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <CheckCircle2 size={13} color="rgba(68,178,76,0.65)" strokeWidth={2.5} />
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.72)", fontFamily: "'DM Sans', sans-serif" }}>Full Operations Support</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <CheckCircle2 size={13} color={GREEN} strokeWidth={2.5} />
                    <span style={{ fontSize: 13, color: GREEN, fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>Confirmed Orders Provided</span>
                  </div>
                </div>

                <motion.button
                  onClick={() => setEnquiryOpen(true)}
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  style={{
                    width: "100%", padding: "14px", borderRadius: 100, border: "none",
                    background: `linear-gradient(135deg, ${GREEN}, ${GREEN_DK})`,
                    color: "#fff", fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700, fontSize: 14, cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    boxShadow: "0 4px 20px rgba(68,178,76,0.35)",
                    transition: "all 0.3s ease",
                  }}
                >
                  Get Details <ArrowRight size={15} />
                </motion.button>
              </div>
            </motion.div>

          </div>

          <p style={{
            textAlign: "center", marginTop: 28,
            color: "rgba(255,255,255,0.2)",
            fontFamily: "'DM Sans', sans-serif", fontSize: 11,
          }}>
            * Investment includes machinery, setup, branding & training. Prices subject to location.
          </p>
        </div>
      </section>

      {/* ── 4. ONBOARDING ────────────────────────────────────────────────────── */}
      <div className="py-24 px-6" style={{ background: BRAND_CREAM }}>
        <div ref={processR.ref} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div variants={fromTop} custom={0} initial="hidden" animate={processR.inView ? "visible" : "hidden"}>
              <SectionLabel text="Franchise Onboarding" />
            </motion.div>
            <motion.h2
              variants={scaleIn} custom={0.1} initial="hidden" animate={processR.inView ? "visible" : "hidden"}
              className="text-3xl md:text-5xl font-bold"
              style={{ fontFamily: "'Fraunces', serif", color: DARK_TEXT, letterSpacing: "-0.02em" }}
            >
              Your Journey With PrimeLaundry
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-5">
              {[onboardingSteps[0], onboardingSteps[1]].map((step, i) => (
                <motion.div key={step.num}
                  variants={fromLeft} custom={i * 0.2}
                  initial="hidden" animate={processR.inView ? "visible" : "hidden"}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="rounded-2xl p-7 relative overflow-hidden flex-1"
                  style={{ background: "#fff", border: "1px solid rgba(10,31,61,0.08)", boxShadow: "0 2px 16px rgba(10,31,61,0.05)" }}
                >
                  <span className="absolute -top-3 -right-1 text-8xl font-black select-none pointer-events-none"
                    style={{ color: "rgba(68,178,76,0.07)", fontFamily: "'Fraunces', serif" }}>
                    {step.num}
                  </span>
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-4 text-sm font-bold"
                    style={{ background: "rgba(68,178,76,0.1)", color: BRAND_GREEN, fontFamily: "'DM Sans', sans-serif" }}>
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold mb-2"
                    style={{ color: DARK_TEXT, fontFamily: "'Fraunces', serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed"
                    style={{ color: "#64748b", fontFamily: "'DM Sans', sans-serif" }}>
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-5">
              {[onboardingSteps[2], onboardingSteps[3]].map((step, i) => (
                <motion.div key={step.num}
                  variants={fromRight} custom={i * 0.2}
                  initial="hidden" animate={processR.inView ? "visible" : "hidden"}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="rounded-2xl p-7 relative overflow-hidden flex-1"
                  style={{ background: "#fff", border: "1px solid rgba(10,31,61,0.08)", boxShadow: "0 2px 16px rgba(10,31,61,0.05)" }}
                >
                  <span className="absolute -top-3 -right-1 text-8xl font-black select-none pointer-events-none"
                    style={{ color: "rgba(68,178,76,0.07)", fontFamily: "'Fraunces', serif" }}>
                    {step.num}
                  </span>
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-4 text-sm font-bold"
                    style={{ background: "rgba(68,178,76,0.1)", color: BRAND_GREEN, fontFamily: "'DM Sans', sans-serif" }}>
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold mb-2"
                    style={{ color: DARK_TEXT, fontFamily: "'Fraunces', serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed"
                    style={{ color: "#64748b", fontFamily: "'DM Sans', sans-serif" }}>
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {[onboardingSteps[4], onboardingSteps[5]].map((step, i) => (
              <motion.div key={step.num}
                variants={fromBottom} custom={i * 0.22}
                initial="hidden" animate={processR.inView ? "visible" : "hidden"}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="rounded-2xl p-7 relative overflow-hidden"
                style={{ background: "#fff", border: "1px solid rgba(10,31,61,0.08)", boxShadow: "0 2px 16px rgba(10,31,61,0.05)" }}
              >
                <span className="absolute -top-3 -right-1 text-8xl font-black select-none pointer-events-none"
                  style={{ color: "rgba(68,178,76,0.07)", fontFamily: "'Fraunces', serif" }}>
                  {step.num}
                </span>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-4 text-sm font-bold"
                  style={{ background: "rgba(68,178,76,0.1)", color: BRAND_GREEN, fontFamily: "'DM Sans', sans-serif" }}>
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-2"
                  style={{ color: DARK_TEXT, fontFamily: "'Fraunces', serif" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed"
                  style={{ color: "#64748b", fontFamily: "'DM Sans', sans-serif" }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 5. CTA ───────────────────────────────────────────────────────────── */}
      

    </section>
  );
}