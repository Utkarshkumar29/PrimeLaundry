"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp, Warehouse, Tag, BarChart3,
  CheckCircle2, ArrowRight,
} from "lucide-react";

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
  { num: "04", title: "Staff Training",    desc: "Complete training at Head Office. Support via manuals & on-job sessions. 48hr replacement." },
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
                { label: "Market Size",           value: "₹2,20,000 Cr", v: fromLeft,   d: 0.7 },
                { label: "Organised Segment",     value: "₹5,000 Cr",    v: fromBottom, d: 0.8 },
                { label: "Target Stores by 2026", value: "100+",         v: fromBottom, d: 0.9 },
                { label: "Entrepreneurs Created", value: "500+",         v: fromRight,  d: 0.7 },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  variants={s.v} custom={s.d} initial="hidden" animate={heroR.inView ? "visible" : "hidden"}
                  className="rounded-xl px-5 py-5 text-center"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <div className="text-2xl font-bold mb-1" style={{ color: BRAND_GREEN, fontFamily: "'Fraunces', serif" }}>{s.value}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}>{s.label}</div>
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
      <div className="py-24 px-6" id="models" style={{ background: BRAND_BLUE_DARK }}>
        <div ref={modelsR.ref} className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <motion.div variants={fromTop} custom={0} initial="hidden" animate={modelsR.inView ? "visible" : "hidden"}>
              <SectionLabel text="Business Models" />
            </motion.div>
            <motion.h2
              variants={scaleIn} custom={0.1} initial="hidden" animate={modelsR.inView ? "visible" : "hidden"}
              className="text-3xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "'Fraunces', serif", letterSpacing: "-0.02em" }}
            >
              Choose Your Scale
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {models.map((m, i) => {
              const variant = i === 0 ? fromLeft : i === 1 ? fromTop : fromRight;
              return (
                <motion.div
                  key={m.tier}
                  variants={variant} custom={i * 0.2}
                  initial="hidden" animate={modelsR.inView ? "visible" : "hidden"}
                  whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
                  className="rounded-2xl p-7 relative flex flex-col"
                  style={{
                    background: m.highlight
                      ? "rgba(68,178,76,0.1)"
                      : "rgba(255,255,255,0.04)",
                    border: m.highlight
                      ? `1.5px solid ${BRAND_GREEN}`
                      : "1px solid rgba(255,255,255,0.09)",
                  }}
                >
                  {m.highlight && (
                    <div
                      className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase whitespace-nowrap"
                      style={{ background: BRAND_GREEN, color: "#fff", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Most Popular
                    </div>
                  )}
                  <span className="text-xs font-bold tracking-[0.2em] uppercase mb-1"
                    style={{ color: m.accentColor, fontFamily: "'DM Sans', sans-serif" }}>
                    {m.tier}
                  </span>
                  <h3 className="text-2xl font-bold mb-1 text-white"
                    style={{ fontFamily: "'Fraunces', serif" }}>
                    {m.label}
                  </h3>
                  <div className="text-3xl font-bold mb-6"
                    style={{ color: m.accentColor, fontFamily: "'Fraunces', serif" }}>
                    {m.investment}
                  </div>
                  <div className="space-y-3 flex-1">
                    {[
                      { label: "Processing Capacity", value: m.capacity  },
                      { label: "Area Required",        value: m.area      },
                      { label: "Monthly Revenue",      value: m.revenue   },
                      { label: "Expected ROI",         value: m.roi       },
                      { label: "Manpower Required",    value: m.manpower  },
                      { label: "Profit Margin",        value: "Min 50%"   },
                      { label: "Royalty",              value: m.royalty   },
                    ].map((row) => (
                      <div key={row.label}
                        className="flex items-center justify-between text-sm py-2"
                        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                      >
                        <span style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}>{row.label}</span>
                        <span className="font-semibold" style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'DM Sans', sans-serif" }}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="/franchise"
                    className="mt-7 w-full py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300"
                    style={{
                      background: m.highlight ? BRAND_GREEN : "transparent",
                      color: m.highlight ? "#fff" : BRAND_GREEN,
                      border: m.highlight ? "none" : `1.5px solid ${BRAND_GREEN}`,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                    onMouseEnter={(e) => { if (!m.highlight) (e.currentTarget as HTMLAnchorElement).style.background = "rgba(68,178,76,0.1)"; }}
                    onMouseLeave={(e) => { if (!m.highlight) (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
                  >
                    Apply for {m.label} <ArrowRight size={15} />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

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