"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, CheckCircle2, X, Loader2,
  ShieldCheck, Settings2, TrendingUp, HeadphonesIcon,
  PhoneCall, Zap,
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

// ── Enquiry Modal ──────────────────────────────────────────────────────────────
function EnquiryModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", city: "", investment: "", message: "",
  });
  const [state, setState] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.email) return;
    setState("loading");
    try {
      const params = new URLSearchParams({ ...form, source: "pricing-page" });
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

  const inp: React.CSSProperties = {
    width: "100%", padding: "11px 14px", borderRadius: 10,
    border: "1.5px solid rgba(10,31,61,0.12)", background: "#f8fafc",
    fontSize: 13.5, fontFamily: "'DM Sans', sans-serif", color: DARK,
    outline: "none", transition: "border-color 0.2s", boxSizing: "border-box",
  };
  const lbl: React.CSSProperties = {
    display: "block", fontSize: 10, fontWeight: 700,
    letterSpacing: "0.12em", textTransform: "uppercase" as const,
    color: "#94a3b8", marginBottom: 6, fontFamily: "'DM Sans', sans-serif",
  };
  const fo = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = GREEN; e.target.style.background = "rgba(68,178,76,0.04)";
  };
  const fb = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "rgba(10,31,61,0.12)"; e.target.style.background = "#f8fafc";
  };

  const ready = !!(form.name && form.phone && form.email);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(10,31,61,0.55)", backdropFilter: "blur(6px)",
            display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 24 }}
            transition={{ ...MED }}
            onClick={e => e.stopPropagation()}
            style={{
              background: "#fff", borderRadius: 24, width: "100%", maxWidth: 520,
              maxHeight: "90vh", overflowY: "auto",
              boxShadow: "0 32px 80px rgba(10,31,61,0.25)",
            }}
          >
            {/* Header */}
            <div style={{
              padding: "24px 28px 20px",
              borderBottom: "1px solid rgba(10,31,61,0.07)", position: "relative",
            }}>
              <div style={{
                height: 3, position: "absolute", top: 0, left: 0, right: 0,
                background: `linear-gradient(90deg, ${GREEN}, rgba(68,178,76,0.2))`,
                borderRadius: "24px 24px 0 0",
              }} />
              <button
                onClick={onClose}
                style={{
                  position: "absolute", top: 20, right: 20,
                  background: "rgba(10,31,61,0.06)", border: "none", borderRadius: 8,
                  width: 32, height: 32, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <X size={16} color="#64748b" />
              </button>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "rgba(68,178,76,0.1)", border: "1px solid rgba(68,178,76,0.2)",
                borderRadius: 100, padding: "4px 12px", marginBottom: 10,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: GREEN, display: "inline-block" }} />
                <span style={{
                  fontSize: 10, fontWeight: 700, color: GREEN,
                  fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase",
                }}>Open for Applications</span>
              </div>
              <h3 style={{
                fontFamily: "'Fraunces', serif", fontWeight: 900,
                fontSize: "1.5rem", color: DARK, letterSpacing: "-0.02em", lineHeight: 1.1,
              }}>Franchise Enquiry Form</h3>
            </div>

            {/* Body */}
            <div style={{ padding: "24px 28px" }}>
              {state === "success" ? (
                <div style={{ textAlign: "center", padding: "32px 0" }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: "50%",
                    background: "rgba(68,178,76,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 16px",
                  }}>
                    <CheckCircle2 size={28} color={GREEN} />
                  </div>
                  <h4 style={{
                    fontFamily: "'Fraunces', serif", fontWeight: 900,
                    fontSize: "1.3rem", color: DARK, marginBottom: 8,
                  }}>We'll be in touch!</h4>
                  <p style={{ color: "#64748b", fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7 }}>
                    Your enquiry has been received. Our franchise team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setState("idle")}
                    style={{
                      marginTop: 16, fontSize: 12, color: GREEN,
                      fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                      background: "none", border: "none", cursor: "pointer", textDecoration: "underline",
                    }}
                  >Submit another enquiry</button>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div>
                      <label style={lbl}>Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" style={inp} onFocus={fo} onBlur={fb} />
                    </div>
                    <div>
                      <label style={lbl}>Phone *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 7566611104" style={inp} onFocus={fo} onBlur={fb} />
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div>
                      <label style={lbl}>Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" style={inp} onFocus={fo} onBlur={fb} />
                    </div>
                    <div>
                      <label style={lbl}>Your City</label>
                      <input name="city" value={form.city} onChange={handleChange} placeholder="Mumbai, Delhi…" style={inp} onFocus={fo} onBlur={fb} />
                    </div>
                  </div>
                  <div>
                    <label style={lbl}>Investment Range</label>
                    <select name="investment" value={form.investment} onChange={handleChange} style={{ ...inp, cursor: "pointer" }} onFocus={fo} onBlur={fb}>
                      <option value="">Select your budget</option>
                      <option value="Prime Basics — ₹28.80L">Prime Basics — ₹28.80L</option>
                      <option value="Prime Elite — ₹35.95L">Prime Elite — ₹35.95L</option>
                    </select>
                  </div>
                  <div>
                    <label style={lbl}>Message (Optional)</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your city, questions, or anything else…" rows={3} style={{ ...inp, resize: "vertical" }} onFocus={fo} onBlur={fb} />
                  </div>
                  {state === "error" && (
                    <p style={{ color: "#ef4444", fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>
                      Something went wrong. Please try again.
                    </p>
                  )}
                  <motion.button
                    onClick={handleSubmit}
                    disabled={state === "loading" || !ready}
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                    style={{
                      width: "100%", padding: "13px", borderRadius: 100, border: "none",
                      cursor: "pointer",
                      background: ready ? `linear-gradient(135deg, ${GREEN}, ${GREEN_DK})` : "rgba(10,31,61,0.08)",
                      color: ready ? "#fff" : "#94a3b8",
                      fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14,
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                      boxShadow: ready ? "0 4px 20px rgba(68,178,76,0.3)" : "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {state === "loading"
                      ? <><Loader2 size={16} className="animate-spin" /> Submitting…</>
                      : <>Submit Enquiry <ArrowRight size={15} /></>}
                  </motion.button>
                  <p style={{ textAlign: "center", fontSize: 11, color: "#94a3b8", fontFamily: "'DM Sans', sans-serif" }}>
                    * Required. We never share your data.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function PricingSection() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <main style={{ background: "#fff", minHeight: "100vh", paddingTop: 80 }}>
      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />

      {/* ════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════ */}
      <section style={{
        background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DARK} 100%)`,
        padding: "80px 32px 96px", position: "relative", overflow: "hidden",
      }}>
        {/* dot texture */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.04,
          backgroundImage: `radial-gradient(circle, ${GREEN} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />
        {/* ghost lettering */}
        <div style={{
          position: "absolute", top: 0, right: 0,
          fontFamily: "'Fraunces', serif",
          fontSize: "clamp(6rem,16vw,14rem)",
          fontWeight: 900, lineHeight: 0.85, letterSpacing: "-0.05em",
          color: "rgba(255,255,255,0.03)", pointerEvents: "none", userSelect: "none",
        }}>PRI<br />CING</div>

        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={MED}
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}
          >
            <div style={{ width: 36, height: 2, background: GREEN }} />
            <span style={{
              color: GREEN, fontSize: 11, fontWeight: 700,
              letterSpacing: "0.3em", textTransform: "uppercase",
              fontFamily: "'DM Sans', sans-serif",
            }}>Transparent Pricing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ ...SLOW, delay: 0.1 }}
            style={{
              fontFamily: "'Fraunces', serif", fontWeight: 900,
              fontSize: "clamp(2.8rem,6vw,5.5rem)", color: "#fff",
              letterSpacing: "-0.03em", lineHeight: 0.95,
              marginBottom: 20, maxWidth: 700,
            }}
          >
            Clean Clothes.<br />
            <em style={{ color: GREEN }}>Clear Pricing.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ ...SLOW, delay: 0.25 }}
            style={{
              color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif",
              fontSize: 16, lineHeight: 1.75, maxWidth: 460, marginBottom: 40,
            }}
          >
            Whether you're a customer looking for laundry pickup or an investor exploring
            franchise opportunities — we have the right plan for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ ...SLOW, delay: 0.35 }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
          >
            <a href="#customer" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "12px 26px", borderRadius: 100,
              background: `linear-gradient(135deg, ${GREEN}, ${GREEN_DK})`,
              color: "#fff", textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14,
              boxShadow: "0 4px 20px rgba(68,178,76,0.35)",
            }}>
              Customer Pricing <ArrowRight size={15} />
            </a>
            <a href="#franchise" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "12px 26px", borderRadius: 100,
              border: "1.5px solid rgba(255,255,255,0.22)",
              color: "rgba(255,255,255,0.85)", textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 14,
            }}>
              Franchise Models
            </a>
          </motion.div>
        </div>
      </section>

      {/* Wave */}
      <div style={{ background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DARK} 100%)`, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
          style={{ width: "100%", height: 48, display: "block" }}>
          <path d="M0 48 L0 24 Q360 0 720 24 Q1080 48 1440 24 L1440 48 Z" fill="#fff" />
        </svg>
      </div>

      {/* ════════════════════════════════════════════
          CUSTOMER PRICING — single card: Wash & Steam Iron
      ════════════════════════════════════════════ */}
      <section id="customer" style={{ background: "#fff", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={MED}
            style={{ marginBottom: 52 }}
          >
            <p style={{
              color: GREEN, fontSize: 11, fontWeight: 700,
              letterSpacing: "0.22em", textTransform: "uppercase",
              fontFamily: "'DM Sans', sans-serif", marginBottom: 10,
            }}>For Customers</p>
            <div style={{
              display: "flex", alignItems: "flex-end",
              justifyContent: "space-between", flexWrap: "wrap", gap: 16,
            }}>
              <h2 style={{
                fontFamily: "'Fraunces', serif", fontWeight: 900,
                fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: DARK,
                letterSpacing: "-0.03em", lineHeight: 1.1,
              }}>Customer Pricing</h2>
              
            </div>
          </motion.div>

          {/* ── Single pricing card: Wash & Steam Iron ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={MED}
            style={{
              display: "flex", justifyContent: "center", marginBottom: 56,
            }}
          >
            <motion.div
              whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(10,31,61,0.13)" }}
              style={{
                background: CREAM, borderRadius: 24,
                border: "1px solid rgba(10,31,61,0.07)",
                boxShadow: "0 4px 20px rgba(10,31,61,0.07)",
                position: "relative", overflow: "hidden",
                width: "100%", maxWidth: 420,
                transition: "box-shadow 0.3s ease",
              }}
            >
              {/* green top bar */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 4,
                background: `linear-gradient(90deg, ${GREEN}, ${GREEN_DK})`,
                borderRadius: "24px 24px 0 0",
              }} />

              {/* Popular badge */}
              <div style={{
                position: "absolute", top: 18, right: 18,
                background: GREEN, color: "#fff",
                fontSize: 10, fontWeight: 700, letterSpacing: "0.08em",
                textTransform: "uppercase", padding: "3px 10px", borderRadius: 6,
                fontFamily: "'DM Sans', sans-serif",
              }}>Most Popular</div>

              <div style={{ padding: "36px 32px 32px" }}>

                {/* Icon */}
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: "rgba(68,178,76,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 20,
                }}>
                  {/* Iron / shirt icon */}
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
                    stroke={GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
                  </svg>
                </div>

                {/* Service name */}
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                  fontWeight: 700, color: "#64748b",
                  letterSpacing: "0.05em", textTransform: "uppercase",
                  marginBottom: 6,
                }}>Service</p>
                <h3 style={{
                  fontFamily: "'Fraunces', serif", fontWeight: 900,
                  fontSize: "1.7rem", color: DARK,
                  letterSpacing: "-0.02em", lineHeight: 1.1,
                  marginBottom: 20,
                }}>Wash & Steam Iron</h3>

                {/* Price display */}
                <div style={{
                  background: "#fff",
                  border: `1.5px solid rgba(68,178,76,0.25)`,
                  borderRadius: 16, padding: "20px 24px",
                  marginBottom: 24,
                  display: "flex", alignItems: "center",
                  justifyContent: "space-between",
                }}>
                  <div>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif", fontSize: 10,
                      fontWeight: 700, color: "#94a3b8",
                      letterSpacing: "0.15em", textTransform: "uppercase",
                      marginBottom: 4,
                    }}>Starting from</p>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                      <span style={{
                        fontFamily: "'Fraunces', serif", fontWeight: 900,
                        fontSize: "3rem", color: DARK, lineHeight: 1,
                      }}>₹12</span>
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 15, color: "#64748b", fontWeight: 600,
                      }}> / piece</span>
                    </div>
                  </div>
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: `linear-gradient(135deg, ${GREEN}, ${GREEN_DK})`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 4px 14px rgba(68,178,76,0.35)",
                  }}>
                    <Zap size={22} color="#fff" />
                  </div>
                </div>

                {/* Mini feature pills */}
                <div style={{
                  display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28,
                }}>
                  {["Doorstep Pickup", "2–4 hr Turnaround", "Premium Quality"].map(tag => (
                    <span key={tag} style={{
                      fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600,
                      color: GREEN, background: "rgba(68,178,76,0.09)",
                      border: "1px solid rgba(68,178,76,0.2)",
                      borderRadius: 100, padding: "4px 12px",
                    }}>{tag}</span>
                  ))}
                </div>

                {/* CTA */}
                <motion.a
                  href={WA_URL} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(68,178,76,0.45)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    gap: 10, padding: "15px 28px", borderRadius: 100,
                    background: `linear-gradient(135deg, ${GREEN}, ${GREEN_DK})`,
                    color: "#fff", textDecoration: "none",
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15,
                    boxShadow: "0 4px 20px rgba(68,178,76,0.35)",
                  }}
                >
                  {/* WhatsApp icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Book Pickup via WhatsApp
                </motion.a>

                <p style={{
                  textAlign: "center", marginTop: 12,
                  fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#94a3b8",
                }}>Instant response · No advance payment required</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Divider */}
      <div style={{ background: CREAM, height: 3, borderTop: `1px solid rgba(10,31,61,0.06)` }} />

      {/* ════════════════════════════════════════════
          FRANCHISE MODELS
      ════════════════════════════════════════════ */}
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

      {/* ════════════════════════════════════════════
          WHY PRIME LAUNDRY — investor-focused stats
      ════════════════════════════════════════════ */}
      <section style={{ background: CREAM, padding: "64px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={MED}
            style={{ textAlign: "center", marginBottom: 40 }}
          >
            <p style={{ color: GREEN, fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif", marginBottom: 10 }}>Why Invest</p>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(1.6rem,3vw,2.4rem)", color: DARK, letterSpacing: "-0.02em" }}>Why Prime Laundry?</h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...MED, delay: 0 }}
              style={{ background: `linear-gradient(135deg, ${BLUE}, ${BLUE_DARK})`, borderRadius: 20, padding: "32px 24px", textAlign: "center", boxShadow: "0 2px 12px rgba(10,31,61,0.06)" }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "2.2rem", letterSpacing: "-0.02em", marginBottom: 8, color: GREEN }}>1000+</div>
              <div style={{ fontSize: 13, fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>Confirmed Daily Orders</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...MED, delay: 0.08 }}
              style={{ background: "#fff", borderRadius: 20, padding: "32px 24px", textAlign: "center", border: "1.5px solid rgba(10,31,61,0.08)", boxShadow: "0 2px 12px rgba(10,31,61,0.06)" }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "2.2rem", letterSpacing: "-0.02em", marginBottom: 8, color: BLUE }}>₹28.8L</div>
              <div style={{ fontSize: 13, fontFamily: "'DM Sans', sans-serif", color: "#64748b", lineHeight: 1.5 }}>Franchise Investment Starts</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...MED, delay: 0.16 }}
              style={{ background: "#fff", borderRadius: 20, padding: "32px 24px", textAlign: "center", border: "1.5px solid rgba(10,31,61,0.08)", boxShadow: "0 2px 12px rgba(10,31,61,0.06)" }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "2.2rem", letterSpacing: "-0.02em", marginBottom: 8, color: BLUE }}>50%+</div>
              <div style={{ fontSize: 13, fontFamily: "'DM Sans', sans-serif", color: "#64748b", lineHeight: 1.5 }}>Potential Profit Margin</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...MED, delay: 0.24 }}
              style={{ background: "#fff", borderRadius: 20, padding: "32px 24px", textAlign: "center", border: "1.5px solid rgba(10,31,61,0.08)", boxShadow: "0 2px 12px rgba(10,31,61,0.06)" }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "2.2rem", letterSpacing: "-0.02em", marginBottom: 8, color: BLUE }}>Complete</div>
              <div style={{ fontSize: 13, fontFamily: "'DM Sans', sans-serif", color: "#64748b", lineHeight: 1.5 }}>Setup & Launch Support</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════ */}
      <section style={{
        background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DARK} 100%)`,
        padding: "72px 32px", borderTop: `3px solid ${GREEN}`,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(68,178,76,0.07) 0%, transparent 70%)" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2, textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GREEN, fontFamily: "'DM Sans', sans-serif", marginBottom: 12 }}>Get Started Today</p>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 14 }}>
              Customer or Investor —<br />
              <em style={{ color: GREEN }}>We Have a Plan for You.</em>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.7, maxWidth: 460, margin: "0 auto 36px" }}>
              Book a laundry pickup today or explore franchise opportunities with Prime Laundry.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
              <motion.a
                href={WA_URL} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(68,178,76,0.5)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "13px 28px", borderRadius: 100,
                  background: `linear-gradient(135deg, ${GREEN}, ${GREEN_DK})`,
                  color: "#fff", textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15,
                  boxShadow: "0 4px 20px rgba(68,178,76,0.35)",
                }}
              >
                Book Pickup <ArrowRight size={15} />
              </motion.a>
              <motion.button
                onClick={() => setEnquiryOpen(true)}
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "13px 28px", borderRadius: 100,
                  background: "transparent", color: "rgba(255,255,255,0.8)",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15,
                  cursor: "pointer",
                }}
              >
                <PhoneCall size={15} /> Franchise Enquiry
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}