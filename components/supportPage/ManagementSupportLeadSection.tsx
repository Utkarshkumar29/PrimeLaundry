'use client'
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Loader2,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  MapPin,
  Sparkles,
  Headphones,
} from "lucide-react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwHNpNcFxpY599mD1Jqa7r0Ge4Sfd404leSK-FgRf6rrDvYPHXaGQwtwkCd97BhOoae/exec";

// ── Brand tokens (matching AboutSection) ──────────────────────────────────────
const BLUE = "#10549c";
const BLUE_DARK = "#061e3f";
const GREEN = "#44b24c";
const GREEN_DK = "#339940";
const CREAM = "#f7f5f0";
const EASE = [0.22, 1, 0.36, 1];

// ── Data ──────────────────────────────────────────────────────────────────────
const investmentTiers = [
  {
    id: "basic",
    label: "Prime Basics",
    badge: "Warehouse Franchise Model",
    investment: "₹28–35 Lakhs",
    capacity: "1,000 Pieces / Day",
    revenue: "₹30,000 – ₹35,000 / Day",
    roi: "12–24 months",
    suitable: "Small to Mid Size Cities",
    color: "#94a3b8",
    popular: false,
  },
  {
    id: "elite",
    label: "Prime Elite",
    badge: "Warehouse Franchise Model",
    investment: "₹35–45 Lakhs",
    capacity: "2,000 Pieces / Day",
    revenue: "₹50,000 – ₹60,000 / Day",
    roi: "12–24 months",
    suitable: "Metro / High Demand / Large Cities",
    color: GREEN,
    popular: true,
  },
];

const trustPoints = [
  {
    num: "01",
    title: "No experience needed",
    sub: "We train you and your staff at our Head Office, Raipur",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80",
    Icon: Sparkles,
    tag: "Onboarding",
  },
  {
    num: "02",
    title: "City-level exclusivity",
    sub: "Your territory is protected — no competing franchises",
    img: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=700&q=80",
    Icon: MapPin,
    tag: "Territory",
  },
  {
    num: "03",
    title: "Confirmed orders day one",
    sub: "Pipeline built before you open your doors",
    img: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=700&q=80",
    Icon: ShieldCheck,
    tag: "Day-1 Revenue",
  },
  {
    num: "04",
    title: "24×7 operations support",
    sub: "Dedicated team — always on, never alone",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80",
    Icon: Headphones,
    tag: "Always-On",
  },
];

const stats = [
  { value: "₹2.2L Cr", label: "Market Size" },
  { value: "500+", label: "Entrepreneurs" },
  { value: "100+", label: "Stores by 2026" },
  { value: "5,000+", label: "Jobs Created" },
];

const services = [
  "Dry Cleaning",
  "Laundry & Wash",
  "Steam Ironing",
  "Carpet Cleaning",
  "Curtain Cleaning",
  "Shoe Cleaning",
  "Bag Cleaning",
  "Toy Cleaning",
  "Express Delivery",
];

// ── Hooks ─────────────────────────────────────────────────────────────────────
function useBreakpoint() {
  const [width, setWidth] = useState(1024);
  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return { isMobile: width < 640, isTablet: width < 900, isDesktop: width >= 900 };
}

// ── Tier Selector ─────────────────────────────────────────────────────────────
function TierSelector({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const selected = investmentTiers.find((t) => t.id === value);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        type="button"
        data-testid="tier-selector-trigger"
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          padding: "12px 14px",
          borderRadius: 10,
          border: `1.5px solid ${open ? GREEN : "rgba(255,255,255,0.1)"}`,
          background: open ? "rgba(68,178,76,0.08)" : "rgba(255,255,255,0.06)",
          fontSize: 13.5,
          fontFamily: "'DM Sans', sans-serif",
          color: selected ? "#fff" : "rgba(255,255,255,0.42)",
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
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: selected.color,
                  flexShrink: 0,
                  display: "inline-block",
                }}
              />
              {selected.label} — {selected.investment}
            </span>
          ) : (
            "Select your investment range"
          )}
        </span>
        <ChevronDown
          size={16}
          style={{
            color: "rgba(255,255,255,0.5)",
            transition: "transform 0.25s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            flexShrink: 0,
          }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="tier-selector-dropdown"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              left: 0,
              right: 0,
              zIndex: 9999,
              background: BLUE_DARK,
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 14,
              overflowY: "auto",
              maxHeight: 280,
              boxShadow: "0 20px 48px rgba(10,31,61,0.5)",
            }}
          >
            {investmentTiers.map((tier, i) => (
              <button
                key={tier.id}
                type="button"
                data-testid={`tier-option-${tier.id}`}
                onClick={() => {
                  onChange(tier.id);
                  setOpen(false);
                }}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  background: value === tier.id ? "rgba(68,178,76,0.14)" : "transparent",
                  border: "none",
                  borderBottom:
                    i < investmentTiers.length - 1
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (value !== tier.id)
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    value === tier.id ? "rgba(68,178,76,0.14)" : "transparent";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1 }}>
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: tier.color,
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ textAlign: "left" }}>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#fff",
                        fontFamily: "'DM Sans', sans-serif",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      {tier.label}
                      {tier.popular && (
                        <span
                          style={{
                            fontSize: 9,
                            fontWeight: 700,
                            background: GREEN,
                            color: "#fff",
                            padding: "2px 6px",
                            borderRadius: 4,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                          }}
                        >
                          Popular
                        </span>
                      )}
                      {tier.badge && !tier.popular && (
                        <span
                          style={{
                            fontSize: 9,
                            color: tier.color,
                            fontWeight: 600,
                            opacity: 0.85,
                          }}
                        >
                          {tier.badge}
                        </span>
                      )}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "rgba(255,255,255,0.45)",
                        fontFamily: "'DM Sans', sans-serif",
                        marginTop: 2,
                      }}
                    >
                      {tier.capacity} · {tier.revenue}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: tier.color,
                    fontFamily: "'Fraunces', serif",
                    flexShrink: 0,
                  }}
                >
                  {tier.investment}
                </div>
                {value === tier.id && (
                  <CheckCircle2 size={14} style={{ color: GREEN, flexShrink: 0 }} />
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
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    investment: "",
    message: "",
  });
  const [state, setState] = useState("idle");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.email) return;
    setState("loading");
    try {
      const tierLabel =
        investmentTiers.find((t) => t.id === form.investment)?.label ?? form.investment;
      const params = new URLSearchParams({
        ...form,
        investment: tierLabel,
        source: "Frachise Form",
      });
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      setState("success");
      setForm({ name: "", phone: "", email: "", city: "", investment: "", message: "" });
    } catch {
      setState("error");
    }
  };

  const isReady = !!(form.name && form.phone && form.email);

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 10,
    border: "1.5px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.06)",
    fontSize: 13.5,
    fontFamily: "'DM Sans', sans-serif",
    color: "#ffffff",
    outline: "none",
    transition: "border-color 0.25s ease, background 0.25s ease",
  };

  const labelStyle = {
    display: "block",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.5)",
    marginBottom: 7,
    fontFamily: "'DM Sans', sans-serif",
  };

  const focusOn = (e) => {
    e.target.style.borderColor = GREEN;
    e.target.style.background = "rgba(68,178,76,0.08)";
  };
  const focusOff = (e) => {
    e.target.style.borderColor = "rgba(255,255,255,0.1)";
    e.target.style.background = "rgba(255,255,255,0.06)";
  };

  if (state === "success") {
    return (
      <motion.div
        data-testid="form-success"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "48px 12px",
          gap: 14,
        }}
      >
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "rgba(68,178,76,0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CheckCircle2 size={30} color={GREEN} strokeWidth={2.5} />
        </div>
        <h3
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 900,
            fontSize: "1.4rem",
            color: "#fff",
            letterSpacing: "-0.02em",
          }}
        >
          We'll be in touch!
        </h3>
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13.5,
            lineHeight: 1.7,
            maxWidth: 320,
          }}
        >
          Your enquiry has been received. Our franchise team will contact you within 24 hours.
        </p>
        <button
          data-testid="form-reset-btn"
          onClick={() => setState("idle")}
          style={{
            marginTop: 4,
            background: "transparent",
            border: "none",
            color: GREEN,
            fontSize: 12,
            fontWeight: 700,
            fontFamily: "'DM Sans', sans-serif",
            textDecoration: "underline",
            cursor: "pointer",
            letterSpacing: "0.04em",
          }}
        >
          Submit another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <label style={labelStyle}>Full Name *</label>
          <input
            data-testid="form-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            style={inputStyle}
            onFocus={focusOn}
            onBlur={focusOff}
          />
        </div>
        <div>
          <label style={labelStyle}>Phone *</label>
          <input
            data-testid="form-phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 75666 11104"
            style={inputStyle}
            onFocus={focusOn}
            onBlur={focusOff}
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <label style={labelStyle}>Email *</label>
          <input
            data-testid="form-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            style={inputStyle}
            onFocus={focusOn}
            onBlur={focusOff}
          />
        </div>
        <div>
          <label style={labelStyle}>Your City</label>
          <input
            data-testid="form-city"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="Mumbai, Delhi…"
            style={inputStyle}
            onFocus={focusOn}
            onBlur={focusOff}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Investment Range</label>
        <TierSelector
          value={form.investment}
          onChange={(val) => setForm((prev) => ({ ...prev, investment: val }))}
        />
      </div>

      <div>
        <label style={labelStyle}>Message (Optional)</label>
        <textarea
          data-testid="form-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your location, questions, or anything else…"
          rows={3}
          style={{ ...inputStyle, resize: "vertical" }}
          onFocus={focusOn}
          onBlur={focusOff}
        />
      </div>

      {state === "error" && (
        <p
          data-testid="form-error"
          style={{
            color: "#fca5a5",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
          }}
        >
          Something went wrong. Please try again or contact us directly.
        </p>
      )}

      <motion.button
        data-testid="form-submit"
        onClick={handleSubmit}
        disabled={state === "loading" || !isReady}
        whileHover={{ scale: state === "loading" || !isReady ? 1 : 1.02, y: isReady ? -2 : 0 }}
        whileTap={{ scale: 0.97 }}
        style={{
          width: "100%",
          padding: "15px 18px",
          borderRadius: 100,
          background: isReady
            ? `linear-gradient(135deg, ${GREEN}, ${GREEN_DK})`
            : "rgba(255,255,255,0.08)",
          color: isReady ? "#ffffff" : "rgba(255,255,255,0.28)",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: 14,
          cursor: isReady ? "pointer" : "not-allowed",
          boxShadow: isReady ? "0 6px 24px rgba(68,178,76,0.4)" : "none",
          transition: "all 0.3s ease",
          border: "none",
          marginTop: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        {state === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Submitting…
          </>
        ) : (
          <>
            Apply for Franchise <ArrowRight size={16} />
          </>
        )}
      </motion.button>

      <p
        style={{
          textAlign: "center",
          fontSize: 11,
          color: "rgba(255,255,255,0.32)",
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: "0.02em",
        }}
      >
        * Required fields. We respect your privacy and never share your data.
      </p>
    </div>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────
export default function FranchiseSection() {
  const { isMobile, isTablet, isDesktop } = useBreakpoint();
  const px = isMobile ? 16 : isTablet ? 24 : 32;

  return (
    <main
      data-testid="franchise-section"
      style={{ background: "#fff", minHeight: "100vh", paddingTop: 0 }}
    >
      {/* ── HERO ── */}
      <section
        data-testid="franchise-hero"
        style={{
          position: "relative",
          minHeight: "78vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          paddingBottom: 64,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1600&q=85')",
            backgroundSize: "cover",
            backgroundPosition: "center 45%",
            filter: "brightness(0.42)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "linear-gradient(105deg, rgba(10,31,61,0.94) 0%, rgba(10,61,117,0.82) 45%, rgba(10,31,61,0.45) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
            opacity: 0.04,
            backgroundImage: `radial-gradient(circle, ${GREEN} 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 1,
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(4rem,14vw,14rem)",
            fontWeight: 900,
            lineHeight: 0.85,
            letterSpacing: "-0.05em",
            color: "rgba(255,255,255,0.04)",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          FRAN
          <br />
          CHISE
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1280,
            margin: "0 auto",
            width: "100%",
            padding: `100px ${px}px 80px`,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(68,178,76,0.15)",
              border: "1px solid rgba(68,178,76,0.4)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: GREEN,
                display: "inline-block",
              }}
            />
            <span
              style={{
                color: "#7dd880",
                fontSize: 12,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Open for Applications · 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 900,
              fontSize: "clamp(2rem,6vw,5rem)",
              color: "#fff",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              marginBottom: 20,
              maxWidth: 720,
            }}
          >
            Your Support<br />
            <em style={{ color: GREEN, fontStyle: "italic" }}>Team is Waiting.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease: EASE }}
            style={{
              color: "rgba(255,255,255,0.68)",
              fontSize: isMobile ? 15 : 17,
              fontFamily: "'DM Sans', sans-serif",
              lineHeight: 1.75,
              maxWidth: 540,
              marginBottom: 36,
            }}
          >
            India's fastest-growing laundry franchise. FOCO model — Franchise Owned, Company
            Operated. Fill in your details and our team will reach out within 24 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34, ease: EASE }}
            style={{ display: "flex", gap: isMobile ? 20 : 36, flexWrap: "wrap" }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 900,
                    fontSize: "clamp(1.3rem,3vw,2.2rem)",
                    color: GREEN,
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                    marginTop: 4,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 3,
            lineHeight: 0,
            pointerEvents: "none",
          }}
        >
          <svg
            viewBox="0 0 1440 64"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ width: "100%", height: 64, display: "block" }}
          >
            <path d="M0 64 L0 36 Q360 0 720 32 Q1080 64 1440 28 L1440 64 Z" fill="#fff" />
          </svg>
        </div>
      </section>

      {/* ── INTRO / WHY PRIME ── */}
      <section
        data-testid="why-prime"
        style={{ padding: `72px ${px}px`, maxWidth: 1280, margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
            gap: isDesktop ? 64 : 40,
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: isDesktop ? -32 : 0, y: isDesktop ? 0 : 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p
              style={{
                color: GREEN,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontFamily: "'DM Sans', sans-serif",
                marginBottom: 12,
              }}
            >
              Why Prime Laundry
            </p>
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 900,
                fontSize: "clamp(1.6rem,3.5vw,2.8rem)",
                color: BLUE_DARK,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                marginBottom: 20,
              }}
            >
              We run it <em style={{ color: BLUE, fontStyle: "italic" }}>with you</em> — not just sell you a brand.
            </h2>
            <p
              style={{
                color: "#475569",
                fontSize: 15,
                lineHeight: 1.85,
                fontFamily: "'DM Sans', sans-serif",
                marginBottom: 16,
              }}
            >
              Since 2019, <strong style={{ color: BLUE }}>Prime Laundry</strong> has been rewriting India's
              laundry industry with tech-driven, home-curated services. From riverside struggles to
              doorstep convenience — no experience needed, just the commitment to grow.
            </p>
            <p
              style={{
                color: "#475569",
                fontSize: 15,
                lineHeight: 1.85,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Our <strong>FOCO model</strong> means you own the asset, we run the operations — staffing,
              training, marketing, audits & CRM. Minimum <strong style={{ color: GREEN_DK }}>50% profit margin</strong> guaranteed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isDesktop ? 32 : 0, y: isDesktop ? 0 : 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
          >
            {[
              { val: "50%+", label: "Min Profit Margin Guaranteed", featured: true },
              { val: "20%", label: "Royalty on Net Revenue" },
              { val: "24 hr", label: "Staff Replacement SLA" },
              { val: "FOCO", label: "Franchise Owned · Co. Operated" },
            ].map((s, i) => (
              <div
                key={s.label}
                style={{
                  background: s.featured
                    ? `radial-gradient(circle at top right, rgba(68,178,76,0.12) 0%, transparent 65%), radial-gradient(circle at bottom left, rgba(16,84,156,0.3) 0%, transparent 65%), linear-gradient(145deg, #10549c 0%, #0a3d75 45%, #072d57 100%)`
                    : CREAM,
                  borderRadius: 20,
                  padding: isMobile ? "20px 14px" : "28px 20px",
                  textAlign: "center",
                  border: s.featured ? "none" : "1.5px solid #e8edf5",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 900,
                    fontSize: isMobile ? 22 : 28,
                    letterSpacing: "-0.02em",
                    marginBottom: 6,
                    color: s.featured ? GREEN : BLUE,
                  }}
                >
                  {s.val}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    lineHeight: 1.5,
                    color: s.featured ? "rgba(255,255,255,0.65)" : "#64748b",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TRUST POINTS (image cards on cream) ── */}
      <section
        data-testid="trust-points"
        style={{ background: CREAM, padding: `80px ${px}px` }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: 56 }}
          >
            <p
              style={{
                color: GREEN,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontFamily: "'DM Sans', sans-serif",
                marginBottom: 10,
              }}
            >
              Why Franchisees Trust Us
            </p>
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 900,
                fontSize: "clamp(1.6rem,3.5vw,2.8rem)",
                color: BLUE_DARK,
                letterSpacing: "-0.03em",
                marginBottom: 12,
              }}
            >
              Every Franchise. Every Step. Backed.
            </h2>
            <p
              style={{
                color: "#64748b",
                fontSize: 15,
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.7,
                maxWidth: 560,
                margin: "0 auto",
              }}
            >
              Four guarantees that make Prime Laundry the safest, fastest path to entrepreneurship.
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktop
                ? "repeat(4, 1fr)"
                : isTablet
                ? "repeat(2, 1fr)"
                : "1fr",
              gap: 22,
            }}
          >
            {trustPoints.map(({ num, title, sub, img, Icon, tag }, i) => (
              <motion.div
                key={num}
                data-testid={`trust-card-${num}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                whileHover={{ y: -6, boxShadow: "0 20px 52px rgba(10,31,61,0.16)" }}
                style={{
                  borderRadius: 22,
                  overflow: "hidden",
                  background: "#fff",
                  boxShadow: "0 4px 28px rgba(10,31,61,0.09)",
                  border: "1px solid rgba(10,31,61,0.07)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "box-shadow 0.3s",
                }}
              >
                <div
                  style={{
                    height: 170,
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={img}
                    alt={title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(10,31,61,0.78) 0%, rgba(10,31,61,0.1) 60%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: `linear-gradient(90deg, ${GREEN}, ${GREEN_DK})`,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 14,
                      right: 14,
                      fontFamily: "'Fraunces', serif",
                      fontWeight: 900,
                      fontSize: "2.6rem",
                      color: "rgba(255,255,255,0.16)",
                      lineHeight: 1,
                      userSelect: "none",
                    }}
                  >
                    {num}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 14,
                      left: 14,
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "rgba(255,255,255,0.16)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={20} color="#fff" strokeWidth={2} />
                  </div>
                </div>
                <div
                  style={{
                    padding: "18px 18px 22px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: "rgba(68,178,76,0.1)",
                      border: "1px solid rgba(68,178,76,0.25)",
                      borderRadius: 100,
                      padding: "3px 10px",
                      width: "fit-content",
                    }}
                  >
                    <span
                      style={{
                        color: GREEN_DK,
                        fontSize: 9.5,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {tag}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontWeight: 900,
                      fontSize: "1.05rem",
                      color: BLUE_DARK,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.25,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      color: "#64748b",
                      fontSize: 13,
                      lineHeight: 1.7,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Services chips row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            style={{
              marginTop: 56,
              padding: "28px 24px",
              borderRadius: 22,
              background: "#fff",
              border: "1.5px solid #e8edf5",
              boxShadow: "0 4px 20px rgba(10,31,61,0.04)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 14,
                marginBottom: 16,
              }}
            >
              <p
                style={{
                  color: BLUE,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontFamily: "'DM Sans', sans-serif",
                  margin: 0,
                }}
              >
                Services Included in Every Franchise
              </p>
              <span
                style={{
                  fontSize: 11,
                  color: "#94a3b8",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                }}
              >
                {services.length} revenue streams
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {services.map((s) => (
                <span
                  key={s}
                  style={{
                    padding: "7px 14px",
                    borderRadius: 100,
                    background: "rgba(16,84,156,0.06)",
                    border: "1px solid rgba(16,84,156,0.14)",
                    color: BLUE,
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12.5,
                    fontWeight: 600,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LEAD FORM (split layout) ── */}
      <section
        data-testid="lead-form-section"
        style={{ padding: `80px ${px}px`, background: "#fff" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
              gap: isDesktop ? 56 : 40,
              alignItems: "start",
            }}
          >
            {/* LEFT — copy + investment summary */}
            <motion.div
              initial={{ opacity: 0, x: isDesktop ? -32 : 0, y: isDesktop ? 0 : 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <p
                style={{
                  color: GREEN,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontFamily: "'DM Sans', sans-serif",
                  marginBottom: 12,
                }}
              >
                Apply Today
              </p>
              <h2
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 900,
                  fontSize: "clamp(1.6rem,3.5vw,2.8rem)",
                  color: BLUE_DARK,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  marginBottom: 16,
                }}
              >
                Pick your tier.<br />
                <em style={{ color: BLUE, fontStyle: "italic" }}>We'll do the rest.</em>
              </h2>
              <p
                style={{
                  color: "#475569",
                  fontSize: 15,
                  lineHeight: 1.8,
                  fontFamily: "'DM Sans', sans-serif",
                  marginBottom: 28,
                }}
              >
                Four investment tiers, one promise — every franchisee gets day-one orders,
                exclusive territory, and 24×7 ops support.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {investmentTiers.map((tier, i) => (
                  <motion.div
                    key={tier.id}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                    style={{
                      borderRadius: 14,
                      padding: "16px 18px",
                      background: tier.popular ? "rgba(68,178,76,0.06)" : "#fff",
                      border: tier.popular
                        ? "1.5px solid rgba(68,178,76,0.3)"
                        : "1.5px solid #e8edf5",
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      position: "relative",
                    }}
                  >
                    {tier.popular && (
                      <div
                        style={{
                          position: "absolute",
                          top: -10,
                          right: 16,
                          background: GREEN,
                          color: "#fff",
                          fontSize: 9.5,
                          fontWeight: 700,
                          fontFamily: "'DM Sans', sans-serif",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          padding: "3px 10px",
                          borderRadius: 100,
                        }}
                      >
                        Most Popular
                      </div>
                    )}
                    <div
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        background: tier.color,
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 13.5,
                          fontWeight: 700,
                          color: BLUE_DARK,
                        }}
                      >
                        {tier.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 11.5,
                          color: "#64748b",
                          marginTop: 2,
                        }}
                      >
                        {tier.capacity} · {tier.revenue}
                      </div>
                    </div>
                    <div
                      style={{
                        fontFamily: "'Fraunces', serif",
                        fontWeight: 900,
                        fontSize: 16,
                        color: tier.popular ? GREEN_DK : BLUE,
                        letterSpacing: "-0.01em",
                        textAlign: "right",
                        flexShrink: 0,
                      }}
                    >
                      {tier.investment}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT — form card */}
            <motion.div
              initial={{ opacity: 0, x: isDesktop ? 32 : 0, y: isDesktop ? 0 : 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
              style={{
                position: isDesktop ? "sticky" : "static",
                top: isDesktop ? 24 : "auto",
              }}
            >
              <div
                style={{
                  borderRadius: 24,
                  overflow: "hidden",
                  boxShadow: "0 24px 64px rgba(10,31,61,0.18)",
                  background: `radial-gradient(circle at top right, rgba(68,178,76,0.12) 0%, transparent 65%), radial-gradient(circle at bottom left, rgba(16,84,156,0.3) 0%, transparent 65%), linear-gradient(145deg, #10549c 0%, #0a3d75 45%, #072d57 100%)`,
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  style={{
                    padding: "26px 26px 22px",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: `linear-gradient(90deg, ${GREEN}, ${GREEN_DK}, transparent)`,
                    }}
                  />
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 7,
                      background: "rgba(68,178,76,0.15)",
                      border: "1px solid rgba(68,178,76,0.32)",
                      borderRadius: 100,
                      padding: "5px 13px",
                      marginBottom: 14,
                    }}
                  >
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: GREEN,
                        display: "inline-block",
                      }}
                    />
                    <span
                      style={{
                        color: "#7dd880",
                        fontSize: 10.5,
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      Open for Applications
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontWeight: 900,
                      fontSize: "1.6rem",
                      color: "#fff",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.1,
                    }}
                  >
                    Franchise<br />Enquiry Form
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      fontSize: 12.5,
                      fontFamily: "'DM Sans', sans-serif",
                      marginTop: 8,
                      lineHeight: 1.6,
                    }}
                  >
                    We respond within 24 hours. No pressure, no spam.
                  </p>
                </div>
                <div style={{ padding: "24px 26px 28px" }}>
                  <LeadForm />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        data-testid="franchise-cta"
        style={{
          background: `radial-gradient(circle at top right, rgba(68,178,76,0.12) 0%, transparent 65%), radial-gradient(circle at bottom left, rgba(16,84,156,0.3) 0%, transparent 65%), linear-gradient(145deg, #10549c 0%, #0a3d75 45%, #072d57 100%)`,
          padding: `64px ${px}px`,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.04,
            backgroundImage: `radial-gradient(circle, ${GREEN} 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ position: "relative", zIndex: 2 }}
        >
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 900,
              fontSize: "clamp(1.6rem,3.5vw,2.8rem)",
              color: "#fff",
              letterSpacing: "-0.03em",
              marginBottom: 14,
            }}
          >
            Join Prime Laundry.<br />
            <em style={{ color: GREEN, fontStyle: "italic" }}>Become an Entrepreneur.</em>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.62)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              margin: "0 auto 32px",
              maxWidth: 460,
            }}
          >
            Your clean start to a profitable future.
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <motion.a
              data-testid="cta-apply"
              href="#lead-form-section"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector('[data-testid="lead-form-section"]')
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "13px 28px",
                borderRadius: 100,
                background: `linear-gradient(135deg, ${GREEN}, ${GREEN_DK})`,
                color: "#fff",
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                boxShadow: "0 4px 24px rgba(68,178,76,0.4)",
              }}
            >
              Apply for Franchise <ArrowRight size={16} />
            </motion.a>
            <motion.a
              data-testid="cta-pricing"
              href="#why-prime"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector('[data-testid="why-prime"]')
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "13px 28px",
                borderRadius: 100,
                background: "transparent",
                color: "rgba(255,255,255,0.85)",
                border: "1.5px solid rgba(255,255,255,0.28)",
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              View Pricing Models
            </motion.a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
