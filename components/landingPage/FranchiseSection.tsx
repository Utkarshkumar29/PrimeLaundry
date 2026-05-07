"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  TrendingUp, Warehouse, Tag, BarChart3,
  CheckCircle2, ArrowRight,
  ShieldCheck, Settings2, HeadphonesIcon,
} from "lucide-react";

// ── Brand tokens ──────────────────────────────────────────────────────────────
const BLUE         = "#10549c";
const BLUE_DARK    = "#0a3d75";
const GREEN        = "#44b24c";
const GREEN_DK     = "#339940";
const CREAM        = "#f7f5f0";
const DARK         = "#0a1f3d";
const BRAND_BLUE   = "#10549c";
const BRAND_BLUE_DARK = "#0a3d75";
const BRAND_GREEN  = "#44b24c";
const BRAND_GREEN_DARK = "#339940";
const BRAND_CREAM  = "#f7f5f0";
const DARK_TEXT    = "#0a1f3d";

const EASE = [0.22, 1, 0.36, 1] as const;
const MED  = { duration: 0.85, ease: EASE };
const SLOW = { duration: 1.1,  ease: EASE };

type FormState = "idle" | "loading" | "success" | "error";

// ── Data ──────────────────────────────────────────────────────────────────────
const whyCards = [
  {
    badge: "💰", icon: TrendingUp,
    title: "Own Your City", subtitle: "High Revenue Potential",
    points: [
      "Processing Capacity: 2,000+ garments/day",
      "Estimated Revenue: ₹50,000 – ₹70,000/day",
      "City-level monopoly with first-mover advantage",
    ],
  },
  {
    badge: "🚀", icon: Warehouse,
    title: "India's First Warehouse-Based Laundry Model", subtitle: "Built for Scale",
    points: [
      "Centralized high-efficiency processing hub",
      "Eliminates retail overheads → higher profit margins",
      "Built for scale, automation & consistency",
    ],
  },
  {
    badge: "💸", icon: Tag,
    title: "Affordable Luxury Pricing", subtitle: "Starting ₹12/garment",
    points: [
      "Services starting at just ₹12 per garment",
      "Premium quality at mass-market pricing",
      "High volume = high profit scalability",
    ],
  },
  {
    badge: "📊", icon: BarChart3,
    title: "Strong Unit Economics", subtitle: "Fast Break-Even",
    points: [
      "Low operational cost vs traditional laundries",
      "Bulk processing = higher margins per piece",
      "ROI-focused model with fast break-even",
    ],
  },
];

/* ── Onboarding steps with relevant images ── */
const onboardingSteps = [
  {
    num: "01", title: "LOI Signed",
    desc: "LOI signed by both parties. Location blocked with signing amount. Project Manager visits site.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80",
    tag: "Day 1",
  },
  {
    num: "02", title: "Store Agreement",
    desc: "Location finalized per specs. Agreement executed. 2D layout drawing provided by company.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&q=80",
    tag: "Week 1",
  },
  {
    num: "03", title: "Store Construction",
    desc: "Construction as per 2D drawing with full vendor handholding from our operations team.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80",
    tag: "Week 2–3",
  },
  {
    num: "04", title: "Staff Training",
    desc: "Complete training at Head Office. Support via manuals & on-job sessions. 24hr replacement.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80",
    tag: "Week 4–5",
  },
  {
    num: "05", title: "Dry Run",
    desc: "2–3 day dry run after machine installation to ensure everything is launch-ready.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=80",
    tag: "Week 6–7",
  },
  {
    num: "06", title: "Store Opening",
    desc: "Official launch with marketing creatives, kiosk promotions & offline team deployed.",
    img: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=700&q=80",
    tag: "Week 8",
  },
];

// ── Animation variants ────────────────────────────────────────────────────────
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
    <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase mb-3"
      style={{ color: BRAND_GREEN, fontFamily: "'DM Sans', sans-serif" }}>
      {text}
    </span>
  );
}

function CardShell({ children, className = "", style = {} }: {
  children: React.ReactNode; className?: string; style?: React.CSSProperties;
}) {
  return (
    <div className={`rounded-2xl p-7 relative overflow-hidden h-full ${className}`}
      style={{ background: "#ffffff", border: "1px solid rgba(10,31,61,0.08)", boxShadow: "0 4px 28px rgba(10,31,61,0.07)", ...style }}>
      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={{ background: BRAND_GREEN }} />
      {children}
    </div>
  );
}

// ── Onboarding step card with image ──────────────────────────────────────────
function OnboardingCard({
  step, delay, featured = false,
}: {
  step: typeof onboardingSteps[0];
  delay: number;
  featured?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: EASE, delay }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      style={{
        borderRadius: 22, overflow: "hidden",
        background: "#fff",
        border: featured ? `2px solid ${BRAND_GREEN}` : "1px solid rgba(10,31,61,0.08)",
        boxShadow: featured
          ? "0 12px 48px rgba(68,178,76,0.18)"
          : "0 4px 24px rgba(10,31,61,0.07)",
        display: "flex", flexDirection: "column",
        height: "100%", cursor: "default",
      }}
    >
      {/* ── Image ── */}
      <div style={{ position: "relative", height: 180, overflow: "hidden", flexShrink: 0 }}>
        <img
          src={step.img} alt={step.title}
          style={{
            width: "100%", height: "100%",
            objectFit: "cover", display: "block",
            transition: "transform 0.55s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        />
        {/* Gradient overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: featured
            ? "linear-gradient(to bottom, rgba(10,61,117,0.40) 0%, rgba(10,31,61,0.75) 100%)"
            : "linear-gradient(to bottom, rgba(10,31,61,0.20) 0%, rgba(10,31,61,0.65) 100%)",
        }} />
        {/* Green top bar */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: `linear-gradient(90deg, ${BRAND_GREEN}, ${BRAND_GREEN_DARK})`,
        }} />
        {/* Step badge + title over image */}
        <div style={{ position: "absolute", bottom: 14, left: 16, display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 40, height: 40, borderRadius: "50%", flexShrink: 0,
            background: featured
              ? `linear-gradient(135deg, ${BRAND_GREEN}, ${BRAND_GREEN_DARK})`
              : "rgba(255,255,255,0.15)",
            backdropFilter: "blur(6px)",
            border: `2px solid ${featured ? BRAND_GREEN_DARK : "rgba(255,255,255,0.35)"}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Fraunces', serif", fontWeight: 900,
            fontSize: 14, color: "#fff",
            boxShadow: featured ? "0 4px 14px rgba(68,178,76,0.45)" : "none",
          }}>{step.num}</div>
          <h3 style={{
            fontFamily: "'Fraunces', serif", fontWeight: 900,
            fontSize: "1.05rem", color: "#fff",
            letterSpacing: "-0.01em", lineHeight: 1.2,
            textShadow: "0 1px 6px rgba(0,0,0,0.4)",
          }}>{step.title}</h3>
        </div>
        {/* Tag pill top-right */}
        <div style={{
          position: "absolute", top: 14, right: 14,
          background: featured
            ? `linear-gradient(135deg, ${BRAND_GREEN}, ${BRAND_GREEN_DARK})`
            : "rgba(0,0,0,0.45)",
          backdropFilter: "blur(6px)",
          borderRadius: 100, padding: "3px 10px",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 9, fontWeight: 700,
          letterSpacing: "0.1em", textTransform: "uppercase",
          color: "#fff",
        }}>{step.tag}</div>
      </div>

      {/* ── Text body ── */}
      <div style={{ padding: "20px 22px 24px", flex: 1, position: "relative", overflow: "hidden" }}>
        {/* Ghost number */}
        <span style={{
          position: "absolute", bottom: -12, right: 8,
          fontFamily: "'Fraunces', serif", fontSize: "5rem",
          fontWeight: 900, lineHeight: 1,
          color: featured ? "rgba(68,178,76,0.06)" : "rgba(10,31,61,0.04)",
          pointerEvents: "none", userSelect: "none",
        }}>{step.num}</span>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 14, lineHeight: 1.78, color: "#475569",
        }}>{step.desc}</p>
        <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 24, height: 2,
            background: featured ? BRAND_GREEN : "rgba(16,84,156,0.25)",
            borderRadius: 2,
          }} />
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 10, fontWeight: 700,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: featured ? BRAND_GREEN : "#94a3b8",
          }}>Step {step.num}</span>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function FranchiseSection() {
  const heroR    = useReveal();
  const whyR     = useReveal();
  const modelsR  = useReveal();
  const processR = useReveal();
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <section id="franchise" className="overflow-hidden">

      {/* ══════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════ */}
      <div
        className="relative px-6 text-center overflow-hidden flex flex-col justify-center items-center"
        style={{
          minHeight: "100vh", paddingTop: "120px", paddingBottom: "80px",
          backgroundImage: "url('https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1600&q=80')",
          backgroundSize: "cover", backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(135deg, rgba(10,61,117,0.92) 0%, rgba(10,61,117,0.78) 100%)" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(68,178,76,0.08) 0%, transparent 70%)" }} />

        <div ref={heroR.ref} className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center gap-6">
          <motion.div variants={fromTop} custom={0} initial="hidden" animate={heroR.inView ? "visible" : "hidden"}>
            <SectionLabel text="Franchise Opportunity" />
          </motion.div>
          <motion.h2 variants={scaleIn} custom={0.15} initial="hidden" animate={heroR.inView ? "visible" : "hidden"}
            className="text-4xl md:text-6xl font-bold leading-tight text-white"
            style={{ fontFamily: "'Fraunces', serif", letterSpacing: "-0.03em" }}>
            Your Clean Start To A{" "}
            <em style={{ color: BRAND_GREEN, fontStyle: "italic" }}>Profitable Future</em>
          </motion.h2>
          <motion.p variants={fromBottom} custom={0.3} initial="hidden" animate={heroR.inView ? "visible" : "hidden"}
            className="text-lg md:text-xl max-w-2xl"
            style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'DM Sans', sans-serif" }}>
            India&apos;s fastest-growing laundry franchise — proven systems, guaranteed orders, and city-level exclusivity.
          </motion.p>
          <motion.div variants={scaleIn} custom={0.45} initial="hidden" animate={heroR.inView ? "visible" : "hidden"}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border text-sm font-semibold"
            style={{ borderColor: BRAND_GREEN, color: BRAND_GREEN, background: "rgba(68,178,76,0.08)", fontFamily: "'DM Sans', sans-serif" }}>
            ✦ &quot;No customer search. Only confirmed orders.&quot; ✦
          </motion.div>
          <motion.div variants={fromBottom} custom={0.55} initial="hidden" animate={heroR.inView ? "visible" : "hidden"}
            className="flex flex-wrap justify-center gap-4">
            <a href="/franchise" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base"
              style={{ background: `linear-gradient(135deg, ${BRAND_GREEN}, ${BRAND_GREEN_DARK})`, color: "#fff", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 20px rgba(68,178,76,0.35)" }}>
              Apply for Franchise <ArrowRight size={18} />
            </a>
            <a href="#models" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base"
              style={{ border: "1.5px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.85)", fontFamily: "'DM Sans', sans-serif" }}>
              View Plans
            </a>
          </motion.div>
          {/* Stats */}
          <motion.div variants={scaleIn} custom={0.65} initial="hidden" animate={heroR.inView ? "visible" : "hidden"}
            className="w-full" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "32px" }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Confirmed Daily Orders",     value: "1000+",   sub: "Guaranteed pipeline from day one",  v: fromLeft,   d: 0.7 },
                { label: "Franchise Investment Starts", value: "₹28.8L", sub: "Onwards — entry level model",       v: fromBottom, d: 0.8 },
                { label: "Potential Profit Margin",    value: "50%+",    sub: "Minimum guaranteed margin",         v: fromBottom, d: 0.9 },
                { label: "Setup & Launch Support",     value: "Complete",sub: "End-to-end by our expert team",     v: fromRight,  d: 0.7 },
              ].map(s => (
                <motion.div key={s.label} variants={s.v} custom={s.d} initial="hidden" animate={heroR.inView ? "visible" : "hidden"}
                  className="rounded-xl px-5 py-5 text-center"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}>
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.4rem,2.5vw,1.9rem)", fontWeight: 900, color: BRAND_GREEN, lineHeight: 1.1, marginBottom: 6 }}>{s.value}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.85)", marginBottom: 4 }}>{s.label}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.35)", lineHeight: 1.4 }}>{s.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          2. WHY FRANCHISE
      ══════════════════════════════════════════════════════════════ */}
      <div className="py-24 px-6" style={{ background: BRAND_CREAM }}>
        <div ref={whyR.ref} className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <motion.div variants={fromTop} custom={0} initial="hidden" animate={whyR.inView ? "visible" : "hidden"}>
              <SectionLabel text="Why Partner With Us" />
            </motion.div>
            <motion.h2 variants={scaleIn} custom={0.1} initial="hidden" animate={whyR.inView ? "visible" : "hidden"}
              className="text-3xl md:text-5xl font-bold"
              style={{ fontFamily: "'Fraunces', serif", color: DARK_TEXT, letterSpacing: "-0.02em" }}>
              A Business That Works <em style={{ color: BRAND_BLUE }}>For</em> You
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "20px", gridAutoRows: "1fr" }}>
            {whyCards.map((card, i) => {
              const directions = [fromLeft, fromTop, fromRight, fromBottom];
              const variant = directions[i % directions.length];
              return (
                <motion.div key={card.title} variants={variant} custom={i * 0.22}
                  initial="hidden" animate={whyR.inView ? "visible" : "hidden"}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  style={{ height: "100%" }}>
                  <CardShell style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    <div className="flex items-center gap-3 mb-4">
                      <motion.span className="text-3xl" whileHover={{ scale: 1.25, rotate: 8, transition: { duration: 0.2 } }} style={{ display: "inline-block" }}>
                        {card.badge}
                      </motion.span>
                      <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: BRAND_GREEN, fontFamily: "'DM Sans', sans-serif" }}>{card.subtitle}</p>
                    </div>
                    <h3 className="text-xl font-bold mb-5" style={{ color: DARK_TEXT, fontFamily: "'Fraunces', serif" }}>{card.title}</h3>
                    <ul className="space-y-3 mt-auto">
                      {card.points.map((pt, pi) => (
                        <motion.li key={pt} variants={variant} custom={i * 0.22 + 0.2 + pi * 0.1}
                          initial="hidden" animate={whyR.inView ? "visible" : "hidden"}
                          className="flex items-start gap-2 text-sm"
                          style={{ color: "#475569", fontFamily: "'DM Sans', sans-serif" }}>
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

      {/* ══════════════════════════════════════════════════════════════
          3. FRANCHISE MODELS
      ══════════════════════════════════════════════════════════════ */}
      <section id="models" style={{ background: BLUE_DARK, padding: "80px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={MED}
            style={{ textAlign: "center", marginBottom: 20 }}>
            <p style={{ color: GREEN, fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif", marginBottom: 10 }}>For Investors</p>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 14 }}>Franchise Investment Models</h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.7, maxWidth: 500, margin: "0 auto" }}>
              Two warehouse-based models — choose the scale that fits your city and ambition.
            </p>
          </motion.div>

          {/* Trust pills */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...MED, delay: 0.15 }}
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, marginBottom: 52 }}>
            {[
              { Icon: ShieldCheck,    label: "Proven Business Model"          },
              { Icon: Settings2,      label: "System Driven Operations"       },
              { Icon: TrendingUp,     label: "High Margin Opportunity"        },
              { Icon: HeadphonesIcon, label: "Complete Support at Every Step" },
            ].map(({ Icon, label }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 100, padding: "8px 16px" }}>
                <Icon size={13} color={GREEN} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{label}</span>
              </div>
            ))}
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, maxWidth: 900, margin: "0 auto" }}>

            {/* Prime Basics */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...SLOW, delay: 0 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              style={{ borderRadius: 24, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", display: "flex", flexDirection: "column" }}>
              <div style={{ padding: "32px 28px 20px", borderBottom: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}>
                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans', sans-serif", marginBottom: 6 }}>Warehouse Franchise Model</p>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "1.8rem", color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 18 }}>Prime Basics</h3>
                <div style={{ display: "inline-flex", alignItems: "baseline", gap: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "12px 18px" }}>
                  <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "2rem", lineHeight: 1, color: "#fff" }}>₹28.80 Lakhs</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>total investment</span>
                </div>
              </div>
              <div style={{ padding: "24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 22 }}>
                  {[
                    { l: "Capacity",        v: "1,000 Pieces / Day",        full: false },
                    { l: "ROI",             v: "12 – 18 Months",            full: false },
                    { l: "Potential Revenue",v: "₹30,000 – ₹35,000 / Day",  full: true  },
                    { l: "Suitable For",    v: "Small to Mid Size Cities",   full: true  },
                  ].map(r => (
                    <div key={r.l} style={{ gridColumn: r.full ? "1/-1" : "auto", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "10px 14px" }}>
                      <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif", marginBottom: 3 }}>{r.l}</p>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.9)", fontFamily: "'DM Sans', sans-serif" }}>{r.v}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", fontFamily: "'DM Sans', sans-serif", marginBottom: 10 }}>What's Included</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24, flex: 1 }}>
                  {["Machinery & Equipment", "Store Setup & Design", "Branding & Marketing Kit", "Staff Training Programme", "Operations Support", "Confirmed Orders Provided"].map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <CheckCircle2 size={13} color={item === "Confirmed Orders Provided" ? GREEN : "rgba(68,178,76,0.65)"} strokeWidth={2.5} />
                      <span style={{ fontSize: 13, color: item === "Confirmed Orders Provided" ? "rgba(68,178,76,0.9)" : "rgba(255,255,255,0.72)", fontFamily: "'DM Sans', sans-serif", fontWeight: item === "Confirmed Orders Provided" ? 700 : 400 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <motion.button onClick={() => setEnquiryOpen(true)} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  style={{ width: "100%", padding: "14px", borderRadius: 100, border: `1.5px solid ${GREEN}`, background: "transparent", color: GREEN, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "all 0.3s ease" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(68,178,76,0.1)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}>
                  Apply for Franchise <ArrowRight size={15} />
                </motion.button>
              </div>
            </motion.div>

            {/* Prime Elite */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...SLOW, delay: 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              style={{ borderRadius: 24, overflow: "hidden", border: `2px solid ${GREEN}`, background: "rgba(68,178,76,0.07)", display: "flex", flexDirection: "column" }}>
              <div style={{ background: GREEN, color: "#fff", textAlign: "center", padding: "5px 0", fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Recommended</div>
              <div style={{ padding: "24px 28px 20px", borderBottom: "1px solid rgba(255,255,255,0.07)", background: "rgba(68,178,76,0.06)" }}>
                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: GREEN, fontFamily: "'DM Sans', sans-serif", marginBottom: 6 }}>Warehouse Franchise Model</p>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "1.8rem", color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 18 }}>Prime Elite</h3>
                <div style={{ display: "inline-flex", alignItems: "baseline", gap: 8, background: "rgba(68,178,76,0.15)", border: "1px solid rgba(68,178,76,0.3)", borderRadius: 14, padding: "12px 18px" }}>
                  <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "2rem", lineHeight: 1, color: GREEN }}>₹35.95 Lakhs</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>total investment</span>
                </div>
              </div>
              <div style={{ padding: "24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 22 }}>
                  {[
                    { l: "Capacity",         v: "2,000 Pieces / Day",         full: false },
                    { l: "ROI",              v: "12 – 18 Months",             full: false },
                    { l: "Potential Revenue", v: "₹50,000 – ₹60,000 / Day",   full: true  },
                    { l: "Suitable For",     v: "Metro / High Demand / Large", full: true  },
                  ].map(r => (
                    <div key={r.l} style={{ gridColumn: r.full ? "1/-1" : "auto", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "10px 14px" }}>
                      <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif", marginBottom: 3 }}>{r.l}</p>
                      <p style={{ fontSize: 13, fontWeight: 700, color: GREEN, fontFamily: "'DM Sans', sans-serif" }}>{r.v}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", fontFamily: "'DM Sans', sans-serif", marginBottom: 10 }}>What's Included</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24, flex: 1 }}>
                  {["Advanced Machinery & Equipment", "Full Store Setup & Design", "Premium Branding Kit", "Staff Training Programme", "Full Operations Support", "Confirmed Orders Provided"].map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <CheckCircle2 size={13} color={item === "Confirmed Orders Provided" ? GREEN : "rgba(68,178,76,0.65)"} strokeWidth={2.5} />
                      <span style={{ fontSize: 13, color: item === "Confirmed Orders Provided" ? GREEN : "rgba(255,255,255,0.72)", fontFamily: "'DM Sans', sans-serif", fontWeight: item === "Confirmed Orders Provided" ? 700 : 400 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <motion.button onClick={() => setEnquiryOpen(true)} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  style={{ width: "100%", padding: "14px", borderRadius: 100, border: "none", background: `linear-gradient(135deg, ${GREEN}, ${GREEN_DK})`, color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, boxShadow: "0 4px 20px rgba(68,178,76,0.35)", transition: "all 0.3s ease" }}>
                  Get Details <ArrowRight size={15} />
                </motion.button>
              </div>
            </motion.div>

          </div>
          <p style={{ textAlign: "center", marginTop: 28, color: "rgba(255,255,255,0.2)", fontFamily: "'DM Sans', sans-serif", fontSize: 11 }}>
            * Investment includes machinery, setup, branding & training. Prices subject to location.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. ONBOARDING — image cards
      ══════════════════════════════════════════════════════════════ */}
      <div style={{ padding: "88px 32px", background: BRAND_CREAM }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Heading */}
          <div ref={processR.ref} style={{ textAlign: "center", marginBottom: 64 }}>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={processR.inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: EASE }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(68,178,76,0.1)", border: "1px solid rgba(68,178,76,0.22)", borderRadius: 100, padding: "5px 16px", marginBottom: 14 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: BRAND_GREEN, display: "inline-block" }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: BRAND_GREEN }}>Franchise Onboarding</span>
              </div>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 24 }} animate={processR.inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, ease: EASE, delay: 0.08 }}
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(2rem,4.5vw,3.2rem)", color: DARK_TEXT, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 14 }}>
              Your Journey With{" "}
              <em style={{ color: BRAND_GREEN, fontStyle: "italic" }}>Prime Laundry</em>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={processR.inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, ease: EASE, delay: 0.16 }}
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "#64748b", lineHeight: 1.7, maxWidth: 500, margin: "0 auto" }}>
              From your first enquiry to confirmed daily orders — 8 weeks to launch.
            </motion.p>
          </div>

          {/* Row 1: steps 01 & 02 */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 20 }}>
            <OnboardingCard step={onboardingSteps[0]} delay={0}   />
            <OnboardingCard step={onboardingSteps[1]} delay={0.1} />
          </div>

          {/* Row 2: steps 03, 04, 05 */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginBottom: 20 }}>
            <OnboardingCard step={onboardingSteps[2]} delay={0.12} />
            <OnboardingCard step={onboardingSteps[3]} delay={0.20} />
            <OnboardingCard step={onboardingSteps[4]} delay={0.28} />
          </div>

          {/* Row 3: step 06 full width featured */}
          <OnboardingCard step={onboardingSteps[5]} delay={0.18} featured />

        </div>
      </div>

    </section>
  );
}