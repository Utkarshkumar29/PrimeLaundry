"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle2, ChevronDown } from "lucide-react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwHNpNcFxpY599mD1Jqa7r0Ge4Sfd404leSK-FgRf6rrDvYPHXaGQwtwkCd97BhOoae/exec";

const BRAND_BLUE      = "#10549c";
const BRAND_BLUE_DARK = "#0a3d75";
const BRAND_GREEN     = "#44b24c";
const BRAND_CREAM     = "#f7f5f0";
const DARK_TEXT       = "#0a1f3d";

const SLOW = { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const };
const MED  = { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const };

type FormState = "idle" | "loading" | "success" | "error";

// ── Investment tiers from PDF ─────────────────────────────────────────────────
const investmentTiers = [
  {
    id: "entry",
    label: "Prime Entry",
    investment: "₹14 Lakhs",
    capacity: "500 pcs/day",
    revenue: "₹3.25L/month",
    roi: "Quick ROI",
    color: "#64748b",
  },
  {
    id: "silver",
    label: "Prime Basic",
    badge: "Silver",
    investment: "₹25–28 Lakhs",
    capacity: "1,000 pcs/day",
    revenue: "₹5–10L/month",
    roi: "12–24 months",
    color: "#94a3b8",
  },
  {
    id: "gold",
    label: "Prime Premium",
    badge: "Gold ★",
    investment: "₹35–40 Lakhs",
    capacity: "2,000 pcs/day",
    revenue: "₹10–15L/month",
    roi: "12–24 months",
    color: BRAND_GREEN,
    popular: true,
  },
  {
    id: "platinum",
    label: "Platinum",
    investment: "₹1 Crore",
    capacity: "5,000 pcs/day",
    revenue: "₹15–20L/month",
    roi: "18–28 months",
    color: "#cbd5e1",
  },
];

// ── Why us points from PDF ────────────────────────────────────────────────────
const trustPoints = [
  { num: "01", title: "No experience needed",              sub: "We train you and your staff at our Head Office, Raipur" },
  { num: "02", title: "City-level exclusivity guaranteed", sub: "Your territory is protected — no competing franchises"   },
  { num: "03", title: "Confirmed orders from day one",     sub: "Pipeline built before you open your doors"              },
  { num: "04", title: "24×7 operations support",           sub: "Dedicated team — always on, never alone"                },
];

// ── Stats from PDF ────────────────────────────────────────────────────────────
const stats = [
  { value: "₹2.2L Cr", label: "Market Size"     },
  { value: "500+",     label: "Entrepreneurs"   },
  { value: "100+",     label: "Stores by 2026"  },
  { value: "5,000+",   label: "Jobs Created"    },
];

// ── Services from PDF ─────────────────────────────────────────────────────────
const services = [
  "Dry Cleaning", "Laundry & Wash", "Steam Ironing",
  "Carpet Cleaning", "Curtain Cleaning", "Shoe Cleaning",
  "Bag Cleaning", "Toy Cleaning", "Express Delivery",
];

// ── Investment Tier Selector ──────────────────────────────────────────────────
function TierSelector({
  value, onChange
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const selected = investmentTiers.find(t => t.id === value);

  return (
    <div style={{ position: "relative" }}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          padding: "11px 14px",
          borderRadius: 10,
          border: `1.5px solid ${open ? BRAND_GREEN : "rgba(255,255,255,0.08)"}`,
          background: open ? "rgba(68,178,76,0.06)" : "rgba(255,255,255,0.06)",
          fontSize: 13.5,
          fontFamily: "'DM Sans', sans-serif",
          color: selected ? "#fff" : "rgba(255,255,255,0.35)",
          outline: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.25s ease",
        }}
      >
        <span>
          {selected ? (
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{
                width: 8, height: 8, borderRadius: "50%",
                background: selected.color, flexShrink: 0,
                display: "inline-block",
              }} />
              {selected.label} — {selected.investment}
            </span>
          ) : "Select your investment range"}
        </span>
        <ChevronDown
          size={16}
          style={{
            color: "rgba(255,255,255,0.4)",
            transition: "transform 0.25s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      {/* Dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.div
          className="tier-dropdown"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              left: 0, right: 0,
              zIndex: 50,
              background: "#0a3d75",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 14,
              maxHeight: 280,
              boxShadow: "0 20px 48px rgba(10,31,61,0.4)",
            }}
          >
            {investmentTiers.map((tier, i) => (
              <button
                key={tier.id}
                type="button"
                onClick={() => { onChange(tier.id); setOpen(false); }}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  background: value === tier.id ? "rgba(68,178,76,0.12)" : "transparent",
                  border: "none",
                  borderBottom: i < investmentTiers.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { if (value !== tier.id) (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.04)"; }}
                onMouseLeave={(e) => { if (value !== tier.id) (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
              >
                {/* Left */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1 }}>
                  <div style={{
                    width: 10, height: 10, borderRadius: "50%",
                    background: tier.color, flexShrink: 0,
                  }} />
                  <div style={{ textAlign: "left" }}>
                    <div style={{
                      fontSize: 13, fontWeight: 700,
                      color: "#fff", fontFamily: "'DM Sans', sans-serif",
                      display: "flex", alignItems: "center", gap: 6,
                    }}>
                      {tier.label}
                      {tier.popular && (
                        <span style={{
                          fontSize: 9, fontWeight: 700,
                          background: BRAND_GREEN, color: "#fff",
                          padding: "2px 6px", borderRadius: 4,
                          letterSpacing: "0.1em", textTransform: "uppercase",
                        }}>
                          Popular
                        </span>
                      )}
                      {tier.badge && !tier.popular && (
                        <span style={{
                          fontSize: 9, color: tier.color,
                          fontWeight: 600, opacity: 0.8,
                        }}>
                          {tier.badge}
                        </span>
                      )}
                    </div>
                    <div style={{
                      fontSize: 11, color: "rgba(255,255,255,0.4)",
                      fontFamily: "'DM Sans', sans-serif", marginTop: 1,
                    }}>
                      {tier.capacity} · {tier.revenue}
                    </div>
                  </div>
                </div>

                {/* Right — investment */}
                <div style={{
                  fontSize: 13, fontWeight: 700,
                  color: tier.color, fontFamily: "'Fraunces', serif",
                  flexShrink: 0,
                }}>
                  {tier.investment}
                </div>

                {/* Check */}
                {value === tier.id && (
                  <CheckCircle2 size={14} style={{ color: BRAND_GREEN, flexShrink: 0 }} />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Lead Form ─────────────────────────────────────────────────────────────────
function LeadForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", city: "", investment: "", message: "" });
  const [state, setState] = useState<FormState>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.email) return;
    setState("loading");
    try {
      const tierLabel = investmentTiers.find(t => t.id === form.investment)?.label ?? form.investment;
      const params = new URLSearchParams({ ...form, investment: tierLabel, source: window.location.pathname });
      await fetch(SCRIPT_URL, {
        method: "POST", mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      setState("success");
      setForm({ name: "", phone: "", email: "", city: "", investment: "", message: "" });
    } catch {
      setState("error");
    }
  };

  const isReady = form.name && form.phone && form.email;

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "11px 14px", borderRadius: 10,
    border: "1.5px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.06)",
    fontSize: 13.5, fontFamily: "'DM Sans', sans-serif",
    color: "#ffffff", outline: "none",
    transition: "border-color 0.25s ease, background 0.25s ease",
  };

  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: 10, fontWeight: 700,
    letterSpacing: "0.12em", textTransform: "uppercase",
    color: "rgba(255,255,255,0.4)", marginBottom: 6,
    fontFamily: "'DM Sans', sans-serif",
  };

  const focusOn  = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = BRAND_GREEN;
    e.target.style.background  = "rgba(68,178,76,0.06)";
  };
  const focusOff = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "rgba(255,255,255,0.08)";
    e.target.style.background  = "rgba(255,255,255,0.06)";
  };

  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ ...MED }}
        className="flex flex-col items-center justify-center text-center py-16 gap-5"
      >
        <div className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: "rgba(68,178,76,0.15)" }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
            stroke={BRAND_GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h3 className="text-2xl font-black" style={{ fontFamily: "'Fraunces', serif", color: "#fff" }}>
          We'll be in touch!
        </h3>
        <p className="text-sm max-w-xs"
          style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>
          Your enquiry has been received. Our franchise team will contact you within 24 hours.
        </p>
        <button onClick={() => setState("idle")}
          className="text-xs font-semibold underline mt-2"
          style={{ color: BRAND_GREEN, fontFamily: "'DM Sans', sans-serif" }}>
          Submit another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col gap-3.5">
      <div className="grid grid-cols-2 gap-3.5">
        <div>
          <label style={labelStyle}>Full Name *</label>
          <input name="name" value={form.name} onChange={handleChange}
            placeholder="Your full name" style={inputStyle}
            onFocus={focusOn} onBlur={focusOff} />
        </div>
        <div>
          <label style={labelStyle}>Phone *</label>
          <input name="phone" value={form.phone} onChange={handleChange}
            placeholder="+91 98765 43210" style={inputStyle}
            onFocus={focusOn} onBlur={focusOff} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3.5">
        <div>
          <label style={labelStyle}>Email *</label>
          <input name="email" type="email" value={form.email} onChange={handleChange}
            placeholder="you@example.com" style={inputStyle}
            onFocus={focusOn} onBlur={focusOff} />
        </div>
        <div>
          <label style={labelStyle}>Your City</label>
          <input name="city" value={form.city} onChange={handleChange}
            placeholder="Mumbai, Delhi…" style={inputStyle}
            onFocus={focusOn} onBlur={focusOff} />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Investment Range</label>
        <TierSelector
          value={form.investment}
          onChange={(val) => setForm(prev => ({ ...prev, investment: val }))}
        />
      </div>

      <div>
        <label style={labelStyle}>Message (Optional)</label>
        <textarea name="message" value={form.message} onChange={handleChange}
          placeholder="Tell us about your location, questions, or anything else…"
          rows={3} style={{ ...inputStyle, resize: "vertical" }}
          onFocus={focusOn} onBlur={focusOff} />
      </div>

      {state === "error" && (
        <p className="text-sm" style={{ color: "#ef4444", fontFamily: "'DM Sans', sans-serif" }}>
          Something went wrong. Please try again or contact us directly.
        </p>
      )}

      <motion.button
        onClick={handleSubmit}
        disabled={state === "loading" || !isReady}
        whileHover={{ scale: state === "loading" ? 1 : 1.02, y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="w-full py-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 mt-1"
        style={{
          background: isReady ? `linear-gradient(135deg, ${BRAND_GREEN}, #339940)` : "rgba(255,255,255,0.08)",
          color: isReady ? "#ffffff" : "rgba(255,255,255,0.2)",
          fontFamily: "'DM Sans', sans-serif",
          cursor: isReady ? "pointer" : "not-allowed",
          boxShadow: isReady ? "0 4px 20px rgba(68,178,76,0.35)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        {state === "loading" ? (
          <><Loader2 size={16} className="animate-spin" /> Submitting…</>
        ) : (
          <>Apply for Franchise <ArrowRight size={16} /></>
        )}
      </motion.button>

      <p className="text-xs text-center"
        style={{ color: "rgba(255,255,255,0.2)", fontFamily: "'DM Sans', sans-serif" }}>
        * Required fields. We respect your privacy and never share your data.
      </p>
    </div>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function ManagementSupportLeadSection() {
  return (
    <section style={{ background: BRAND_CREAM, borderTop: `3px solid ${BRAND_GREEN}`, overflow: "hidden" }}>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <div
        className="relative px-8 md:px-16 overflow-hidden flex items-center"
        style={{ minHeight: "100vh", background: BRAND_BLUE_DARK }}
      >
        {/* Watermark */}
        <div className="absolute top-0 right-0 select-none pointer-events-none leading-none font-black"
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(8rem,20vw,18rem)",
            color: "rgba(255,255,255,0.03)",
            lineHeight: 0.85, letterSpacing: "-0.05em",
          }}>
          FRAN<br />CHISE
        </div>

        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, ${BRAND_GREEN} 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }} />

        <div className="relative z-10 max-w-5xl pt-28 pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ ...MED, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div style={{ width: 40, height: 2, background: BRAND_GREEN }} />
            <span className="text-xs font-bold tracking-[0.3em] uppercase"
              style={{ color: BRAND_GREEN, fontFamily: "'DM Sans', sans-serif" }}>
              Franchise Enquiry
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
            transition={{ ...SLOW, delay: 0.2 }}
            className="font-black text-white mb-6"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(3rem,8vw,7rem)",
              letterSpacing: "-0.03em", lineHeight: 0.92,
            }}
          >
            Your Support<br />
            <em style={{ color: BRAND_GREEN }}>Team is Waiting.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ ...SLOW, delay: 0.35 }}
            className="text-base max-w-lg mb-10"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.75 }}
          >
            India's fastest-growing laundry franchise. FOCO model — Franchise Owned, Company Operated.
            Fill in your details and our team will reach out within 24 hours.
          </motion.p>

          {/* Stats from PDF */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ ...SLOW, delay: 0.45 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((s) => (
              <div key={s.label}
                className="rounded-xl px-4 py-4"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: "1.6rem", fontWeight: 900, color: BRAND_GREEN }}>
                  {s.value}
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginTop: 4 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────── */}
      <div className="px-8 md:px-16 py-20 max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">

        {/* LEFT ─────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ ...SLOW }}
        >
          <span className="text-xs font-bold tracking-[0.25em] uppercase mb-4 block"
            style={{ color: BRAND_GREEN, fontFamily: "'DM Sans', sans-serif" }}>
            Why Prime Laundry
          </span>
          <h2 className="font-black mb-4"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(2.2rem,4vw,3.5rem)",
              color: DARK_TEXT, letterSpacing: "-0.02em", lineHeight: 1.0,
            }}
          >
            We run it<br />
            <em style={{ color: BRAND_BLUE }}>with you.</em>
          </h2>
          <p className="text-sm mb-8"
            style={{ color: "#475569", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8 }}>
            Since 2019, Prime Laundry has been rewriting the laundry industry with tech-driven,
            home-curated services. From riverside struggles to doorstep convenience —
            no experience needed, just the commitment to grow.
          </p>

          {/* Trust points */}
          <div style={{ borderTop: "1px solid rgba(10,31,61,0.08)", marginBottom: 32 }}>
            {trustPoints.map((p, i) => (
              <motion.div key={p.num}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ ...MED, delay: i * 0.1 }}
                className="flex items-start gap-4 py-4"
                style={{ borderBottom: "1px solid rgba(10,31,61,0.08)" }}
              >
                <span className="text-xs font-bold"
                  style={{ color: BRAND_GREEN, fontFamily: "'Fraunces', serif", letterSpacing: "0.1em", paddingTop: 2, minWidth: 24 }}>
                  {p.num}
                </span>
                <div>
                  <div className="text-sm font-semibold"
                    style={{ color: DARK_TEXT, fontFamily: "'DM Sans', sans-serif" }}>{p.title}</div>
                  <div className="text-xs mt-1"
                    style={{ color: "#64748b", fontFamily: "'DM Sans', sans-serif" }}>{p.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Services grid from PDF */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ ...MED, delay: 0.2 }}
          >
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: BRAND_BLUE, fontFamily: "'DM Sans', sans-serif" }}>
              Services Included
            </p>
            <div className="flex flex-wrap gap-2">
              {services.map((s) => (
                <span key={s}
                  style={{
                    padding: "5px 12px", borderRadius: 20,
                    background: "rgba(16,84,156,0.07)",
                    border: "1px solid rgba(16,84,156,0.12)",
                    color: BRAND_BLUE,
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12, fontWeight: 600,
                  }}>
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* FOCO model callout from PDF */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ ...MED, delay: 0.3 }}
            className="mt-8 rounded-2xl p-6 relative overflow-hidden"
            style={{
              background: BRAND_BLUE_DARK,
              border: `1px solid rgba(68,178,76,0.2)`,
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: BRAND_GREEN, borderRadius: "16px 16px 0 0" }} />
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
              style={{ color: BRAND_GREEN, fontFamily: "'DM Sans', sans-serif" }}>
              FOCO Model
            </p>
            <p className="text-sm font-bold text-white mb-1"
              style={{ fontFamily: "'Fraunces', serif", fontSize: "1rem" }}>
              Franchise Owned, Company Operated
            </p>
            <p className="text-xs"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>
              You own the asset. We run the operations — staffing, training, marketing, audits & CRM. Minimum 50% profit margin guaranteed.
            </p>
            <div className="flex gap-6 mt-4">
              {[{ v: "50%+", l: "Min Margin" }, { v: "20%", l: "Royalty" }, { v: "48hr", l: "Staff Replace" }].map(s => (
                <div key={s.l}>
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: "1.2rem", fontWeight: 900, color: BRAND_GREEN }}>{s.v}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginTop: 2 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — form card ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ ...SLOW, delay: 0.15 }}
          className="sticky top-8 rounded-3xl overflow-hidden"
          style={{ background: BRAND_BLUE_DARK, boxShadow: "0 32px 80px rgba(10,31,61,0.25)" }}
        >
          {/* Card header */}
          <div className="px-9 pt-8 pb-7 relative"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
              background: `linear-gradient(90deg, ${BRAND_GREEN}, transparent)`,
            }} />
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{
                background: "rgba(68,178,76,0.12)",
                border: "1px solid rgba(68,178,76,0.25)",
                color: BRAND_GREEN, fontFamily: "'DM Sans', sans-serif",
              }}>
              <span style={{ width: 6, height: 6, background: BRAND_GREEN, borderRadius: "50%", display: "inline-block" }} />
              Open for Applications
            </div>
            <h3 className="font-black"
              style={{
                fontFamily: "'Fraunces', serif", fontSize: "1.75rem",
                color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1,
              }}>
              Franchise<br />Enquiry Form
            </h3>
          </div>

          <div className="px-9 py-8">
            <LeadForm />
          </div>
        </motion.div>

      </div>

    </section>
  );
}