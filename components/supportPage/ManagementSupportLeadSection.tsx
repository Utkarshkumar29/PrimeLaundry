"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwHNpNcFxpY599mD1Jqa7r0Ge4Sfd404leSK-FgRf6rrDvYPHXaGQwtwkCd97BhOoae/exec";

const SLOW = { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const };
const MED = { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const };

type FormState = "idle" | "loading" | "success" | "error";

const trustPoints = [
  { num: "01", title: "No experience needed", sub: "We train you and your staff from scratch" },
  { num: "02", title: "City-level exclusivity guaranteed", sub: "Your territory, protected" },
  { num: "03", title: "Confirmed orders from day one", sub: "Pipeline built before you open" },
  { num: "04", title: "24×7 operations support", sub: "Always on, never alone" },
];

function LeadForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", city: "", investment: "", message: "" });
  const [state, setState] = useState<FormState>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.email) return;
    setState("loading");
    try {
      const params = new URLSearchParams({ ...form, source: window.location.pathname });
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

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 14px",
    borderRadius: 10,
    border: "1.5px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.06)",
    fontSize: 13.5,
    fontFamily: "'DM Sans', sans-serif",
    color: "#ffffff",
    outline: "none",
    transition: "border-color 0.25s ease, background 0.25s ease",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.4)",
    marginBottom: 6,
    fontFamily: "'DM Sans', sans-serif",
  };

  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...MED }}
        className="flex flex-col items-center justify-center text-center py-16 gap-5"
      >
        <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(0,229,200,0.15)" }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00E5C8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h3 className="text-2xl font-black" style={{ fontFamily: "'Playfair Display', serif", color: "#fff" }}>We'll be in touch!</h3>
        <p className="text-sm max-w-xs" style={{ color: "#64748b", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>
          Your enquiry has been received. Our franchise team will contact you within 24 hours.
        </p>
        <button onClick={() => setState("idle")} className="text-xs font-semibold underline mt-2" style={{ color: "#00E5C8", fontFamily: "'DM Sans', sans-serif" }}>
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
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" style={inputStyle}
            onFocus={(e) => { e.target.style.borderColor = "#00E5C8"; e.target.style.background = "rgba(0,229,200,0.05)"; }}
            onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.06)"; }} />
        </div>
        <div>
          <label style={labelStyle}>Phone *</label>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" style={inputStyle}
            onFocus={(e) => { e.target.style.borderColor = "#00E5C8"; e.target.style.background = "rgba(0,229,200,0.05)"; }}
            onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.06)"; }} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3.5">
        <div>
          <label style={labelStyle}>Email *</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" style={inputStyle}
            onFocus={(e) => { e.target.style.borderColor = "#00E5C8"; e.target.style.background = "rgba(0,229,200,0.05)"; }}
            onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.06)"; }} />
        </div>
        <div>
          <label style={labelStyle}>Your City</label>
          <input name="city" value={form.city} onChange={handleChange} placeholder="Mumbai, Delhi…" style={inputStyle}
            onFocus={(e) => { e.target.style.borderColor = "#00E5C8"; e.target.style.background = "rgba(0,229,200,0.05)"; }}
            onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.06)"; }} />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Investment Range</label>
        <select name="investment" value={form.investment} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}
          onFocus={(e) => { e.target.style.borderColor = "#00E5C8"; e.target.style.background = "rgba(0,229,200,0.05)"; }}
          onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.06)"; }}>
          <option value="" style={{ background: "#0A0F1E" }}>Select your budget</option>
          <option value="Prime Entry — ₹14L" style={{ background: "#0A0F1E" }}>Prime Entry — ₹14L</option>
          <option value="Prime Basic (Silver) — ₹25–28L" style={{ background: "#0A0F1E" }}>Prime Basic (Silver) — ₹25–28L</option>
          <option value="Prime Premium (Gold) — ₹35–40L" style={{ background: "#0A0F1E" }}>Prime Premium (Gold) — ₹35–40L</option>
          <option value="Platinum — ₹1 Crore" style={{ background: "#0A0F1E" }}>Platinum — ₹1 Crore</option>
        </select>
      </div>

      <div>
        <label style={labelStyle}>Message (Optional)</label>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your location, questions, or anything else…"
          rows={3} style={{ ...inputStyle, resize: "vertical" }}
          onFocus={(e) => { e.target.style.borderColor = "#00E5C8"; e.target.style.background = "rgba(0,229,200,0.05)"; }}
          onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.06)"; }} />
      </div>

      {state === "error" && (
        <p className="text-sm" style={{ color: "#ef4444", fontFamily: "'DM Sans', sans-serif" }}>
          Something went wrong. Please try again or contact us directly.
        </p>
      )}

      <motion.button
        onClick={handleSubmit}
        disabled={state === "loading" || !form.name || !form.phone || !form.email}
        whileHover={{ scale: state === "loading" ? 1 : 1.02, y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="w-full py-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 mt-2"
        style={{
          background: !form.name || !form.phone || !form.email ? "rgba(255,255,255,0.08)" : "#00E5C8",
          color: !form.name || !form.phone || !form.email ? "rgba(255,255,255,0.2)" : "#0A0F1E",
          fontFamily: "'DM Sans', sans-serif",
          cursor: !form.name || !form.phone || !form.email ? "not-allowed" : "pointer",
          transition: "all 0.3s ease",
        }}
      >
        {state === "loading" ? (
          <><Loader2 size={16} className="animate-spin" /> Submitting…</>
        ) : (
          <>Get Franchise Support <ArrowRight size={16} /></>
        )}
      </motion.button>

      <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.2)", fontFamily: "'DM Sans', sans-serif" }}>
        * Required fields. We respect your privacy and never share your data.
      </p>
    </div>
  );
}

export default function ManagementSupportLeadSection() {
  return (
    <section style={{ background: "#F5F0E8", borderTop: "3px solid #00E5C8", overflow: "hidden" }}>

      {/* ── DARK HERO BAND ── */}
      <div className="relative px-8 md:px-16 py-20 overflow-hidden h-screen flex items-center" style={{ background: "#0A0F1E" }}>
        {/* Watermark */}
        <div className="absolute top-0 right-0 select-none pointer-events-none leading-none font-black"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(8rem,20vw,18rem)", color: "rgba(255,255,255,0.025)", lineHeight: 0.85, letterSpacing: "-0.05em" }}>
          FRAN<br />CHISE
        </div>
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{ backgroundImage: "radial-gradient(circle, #00E5C8 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="relative left-[-200px] z-10 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...MED, delay: 0.1 }}
            className="flex items-center gap-3 mb-6">
            <div style={{ width: 40, height: 2, background: "#00E5C8" }} />
            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#00E5C8", fontFamily: "'DM Sans', sans-serif" }}>
              Franchise Enquiry
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ ...SLOW, delay: 0.2 }}
            className="font-black text-white mb-8"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3.5rem,9vw,8rem)", letterSpacing: "-0.03em", lineHeight: 0.92 }}>
            Your Support<br /><em style={{ color: "#00E5C8" }}>Team is Waiting.</em>
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ ...SLOW, delay: 0.4 }}
            className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
            <p className="text-base max-w-md" style={{ color: "#94a3b8", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.75 }}>
              Fill in your details and our franchise team will reach out within 24 hours to walk you through everything.
            </p>
            <div className="flex gap-10">
              {[{ v: "24hr", l: "Response" }, { v: "15+", l: "Experts" }, { v: "4", l: "Tiers" }].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl md:text-3xl font-black" style={{ color: "#00E5C8", fontFamily: "'Playfair Display', serif" }}>{s.v}</div>
                  <div className="text-xs uppercase tracking-widest mt-1" style={{ color: "#475569", fontFamily: "'DM Sans', sans-serif" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="px-8 md:px-16 py-20 max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">

        {/* LEFT */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ ...SLOW }}>
          <span className="text-xs font-bold tracking-[0.25em] uppercase mb-4 block" style={{ color: "#00E5C8", fontFamily: "'DM Sans', sans-serif" }}>
            Why Prime Laundry
          </span>
          <h2 className="font-black mb-6" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem,4vw,4rem)", color: "#0A0F1E", letterSpacing: "-0.02em", lineHeight: 1.0 }}>
            We run it<br /><em style={{ color: "#00E5C8" }}>with you.</em>
          </h2>
          <p className="text-sm mb-10" style={{ color: "#475569", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8 }}>
            From day one, you have a dedicated team behind every decision. No experience needed — just the commitment to grow.
          </p>

          <div style={{ borderTop: "1px solid rgba(10,15,30,0.08)" }}>
            {trustPoints.map((p, i) => (
              <motion.div key={p.num}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ ...MED, delay: i * 0.1 }}
                className="flex items-start gap-4 py-5"
                style={{ borderBottom: "1px solid rgba(10,15,30,0.08)" }}>
                <span className="text-xs font-bold" style={{ color: "#00E5C8", fontFamily: "'Playfair Display', serif", letterSpacing: "0.1em", paddingTop: 2, minWidth: 24 }}>
                  {p.num}
                </span>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "#0A0F1E", fontFamily: "'DM Sans', sans-serif" }}>{p.title}</div>
                  <div className="text-xs mt-1" style={{ color: "#64748b", fontFamily: "'DM Sans', sans-serif" }}>{p.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — dark form card */}
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ ...SLOW, delay: 0.15 }}
          className="sticky top-8 rounded-3xl overflow-hidden"
          style={{ background: "#0A0F1E", boxShadow: "0 32px 80px rgba(10,15,30,0.2)" }}>

          {/* Card header */}
          <div className="px-9 pt-8 pb-7 relative" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #00E5C8, transparent)" }} />
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{ background: "rgba(0,229,200,0.12)", border: "1px solid rgba(0,229,200,0.2)", color: "#00E5C8", fontFamily: "'DM Sans', sans-serif" }}>
              <span style={{ width: 6, height: 6, background: "#00E5C8", borderRadius: "50%", display: "inline-block" }} />
              Open for Applications
            </div>
            <h3 className="font-black" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
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