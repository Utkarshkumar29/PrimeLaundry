"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  ArrowRight, CheckCircle2, ShieldCheck,
  Settings2, TrendingUp, HeadphonesIcon,
  Shirt, Wind, Sparkles, Package,
  Footprints, Sofa, BookOpen, Zap,
} from "lucide-react";

const BRAND_BLUE       = "#10549c";
const BRAND_BLUE_DARK  = "#0a3d75";
const BRAND_GREEN      = "#44b24c";
const BRAND_GREEN_DARK = "#339940";
const BRAND_CREAM      = "#f7f5f0";
const DARK_TEXT        = "#0a1f3d";

const WHATSAPP_NUMBER  = "919131979530";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I'd like to book a laundry pickup with Prime Laundry. Please assist me."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const EASE = [0.22, 1, 0.36, 1] as const;
const MED  = { duration: 0.85, ease: EASE };
const SLOW = { duration: 1.1,  ease: EASE };

// ── Customer services ────────────────────────────────────────────────────────
const customerServices = [
  { icon: Shirt,      name: "Wash & Steam Iron",   price: "₹12",  unit: "/ piece",  tag: "Most Popular" },
  { icon: Wind,       name: "Dry Cleaning",         price: "₹49",  unit: "/ piece",  tag: ""             },
  { icon: Sparkles,   name: "Wash & Fold",          price: "₹10",  unit: "/ piece",  tag: ""             },
  { icon: Package,    name: "Curtain Cleaning",     price: "₹99",  unit: "/ piece",  tag: ""             },
  { icon: Footprints, name: "Shoe Cleaning",        price: "₹149", unit: "/ pair",   tag: ""             },
  { icon: Sofa,       name: "Carpet Cleaning",      price: "₹199", unit: "/ piece",  tag: ""             },
  { icon: BookOpen,   name: "Bag Cleaning",         price: "₹199", unit: "/ piece",  tag: ""             },
  { icon: Zap,        name: "Express Delivery",     price: "₹49",  unit: "extra",    tag: "24hr"         },
];

// ── Trust points ─────────────────────────────────────────────────────────────
const trustPoints = [
  { icon: ShieldCheck,      label: "Proven Business Model"        },
  { icon: Settings2,        label: "System Driven Operations"     },
  { icon: TrendingUp,       label: "High Margin Opportunity"      },
  { icon: HeadphonesIcon,   label: "Complete Support at Every Step" },
];

// ── Franchise models ─────────────────────────────────────────────────────────
const franchiseModels = [
  {
    id:         "basics",
    name:       "Prime Basics",
    subtitle:   "Warehouse Franchise Model",
    capacity:   "1,000 Pieces / Day",
    revenue:    "₹30,000 – ₹35,000 / Day",
    investment: "₹28.80 Lakhs",
    suitable:   "Small to Mid Size Cities",
    includes:   [
      "Machinery & Equipment",
      "Store Setup & Design",
      "Branding & Marketing Kit",
      "Staff Training Programme",
      "Operations Support",
      "Confirmed Orders Provided",
    ],
    highlight:  false,
    cta:        "Apply for Franchise",
    ctaHref:    "/franchise",
  },
  {
    id:         "elite",
    name:       "Prime Elite",
    subtitle:   "Warehouse Franchise Model",
    capacity:   "2,000 Pieces / Day",
    revenue:    "₹50,000 – ₹60,000 / Day",
    investment: "₹35.95 Lakhs",
    suitable:   "Metro / High Demand / Large Cities",
    includes:   [
      "Advanced Machinery & Equipment",
      "Full Store Setup & Design",
      "Premium Branding Kit",
      "Staff Training Programme",
      "Full Operations Support",
      "Confirmed Orders Provided",
    ],
    highlight:  true,
    cta:        "Get Details",
    ctaHref:    "/franchise",
  },
];

function useReveal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return { ref, inView };
}

function SectionLabel({ text }: { text: string }) {
  return (
    <p style={{
      color: BRAND_GREEN, fontSize: 11, fontWeight: 700,
      letterSpacing: "0.22em", textTransform: "uppercase",
      fontFamily: "'DM Sans', sans-serif", marginBottom: 10,
    }}>
      {text}
    </p>
  );
}

export default function PricingSection() {
  const customerR  = useReveal();
  const franchiseR = useReveal();

  return (
    <section id="pricing" style={{ background: "#fff", overflow: "hidden" }}>

      {/* ══════════════════════════════════════════════════════════════
          PART 1 — CUSTOMER PRICING
      ══════════════════════════════════════════════════════════════ */}
      <div style={{ background: BRAND_CREAM, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Heading */}
          <motion.div
            ref={customerR.ref}
            initial={{ opacity: 0, y: 24 }}
            animate={customerR.inView ? { opacity: 1, y: 0 } : {}}
            transition={MED}
            style={{ textAlign: "center", marginBottom: 56 }}
          >
            <SectionLabel text="For Customers" />
            <h2 style={{
              fontFamily: "'Fraunces', serif", fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: DARK_TEXT, letterSpacing: "-0.03em",
              lineHeight: 1.1, marginBottom: 14,
            }}>
              Customer Pricing
            </h2>
            <p style={{
              color: "#64748b", fontFamily: "'DM Sans', sans-serif",
              fontSize: 15, lineHeight: 1.7, maxWidth: 460, margin: "0 auto",
            }}>
              Premium quality laundry & dry cleaning — starting at just ₹12 per piece.
              Transparent pricing, no hidden charges.
            </p>
          </motion.div>

          {/* Service cards grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            marginBottom: 48,
          }}>
            {customerServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.name}
                  initial={{ opacity: 0, y: 32 }}
                  animate={customerR.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ ...MED, delay: i * 0.06 }}
                  whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(10,31,61,0.13)" }}
                  style={{
                    background: "#fff",
                    borderRadius: 18,
                    padding: "24px 20px",
                    border: "1px solid rgba(10,31,61,0.08)",
                    boxShadow: "0 2px 12px rgba(10,31,61,0.05)",
                    position: "relative",
                    overflow: "hidden",
                    transition: "box-shadow 0.3s ease",
                  }}
                >
                  {/* Green top stripe */}
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 3,
                    background: BRAND_GREEN, borderRadius: "18px 18px 0 0",
                  }} />

                  {/* Tag badge */}
                  {svc.tag && (
                    <div style={{
                      position: "absolute", top: 14, right: 14,
                      background: svc.tag === "Most Popular"
                        ? BRAND_GREEN
                        : "rgba(16,84,156,0.1)",
                      color: svc.tag === "Most Popular" ? "#fff" : BRAND_BLUE,
                      fontSize: 9, fontWeight: 700,
                      letterSpacing: "0.08em", textTransform: "uppercase",
                      padding: "3px 8px", borderRadius: 6,
                      fontFamily: "'DM Sans', sans-serif",
                    }}>
                      {svc.tag}
                    </div>
                  )}

                  {/* Icon */}
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: "rgba(68,178,76,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 14,
                  }}>
                    <Icon size={20} color={BRAND_GREEN} />
                  </div>

                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13, fontWeight: 600,
                    color: "#64748b", marginBottom: 6, lineHeight: 1.4,
                  }}>
                    {svc.name}
                  </p>

                  <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                    <span style={{
                      fontFamily: "'Fraunces', serif",
                      fontSize: "1.75rem", fontWeight: 900,
                      color: DARK_TEXT, lineHeight: 1,
                    }}>
                      {svc.price}
                    </span>
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12, color: "#94a3b8", fontWeight: 500,
                    }}>
                      {svc.unit}
                    </span>
                  </div>

                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10, color: "#94a3b8",
                    marginTop: 4,
                  }}>
                    Starting price
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Book Pickup CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={customerR.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...MED, delay: 0.5 }}
            style={{ textAlign: "center" }}
          >
            {/* WhatsApp Book Pickup button */}
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(68,178,76,0.45)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "14px 36px", borderRadius: 100,
                background: `linear-gradient(135deg, ${BRAND_GREEN}, ${BRAND_GREEN_DARK})`,
                color: "#fff", textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15,
                boxShadow: "0 4px 20px rgba(68,178,76,0.35)",
              }}
            >
              {/* WhatsApp icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book Pickup via WhatsApp
            </motion.a>
            <p style={{
              marginTop: 12, color: "#94a3b8",
              fontFamily: "'DM Sans', sans-serif", fontSize: 12,
            }}>
              Instant response · Pickup within 2–4 hours · Serving across India
            </p>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          PART 2 — FRANCHISE INVESTMENT MODELS
      ══════════════════════════════════════════════════════════════ */}
      <div style={{ background: BRAND_BLUE_DARK, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Heading */}
          <motion.div
            ref={franchiseR.ref}
            initial={{ opacity: 0, y: 24 }}
            animate={franchiseR.inView ? { opacity: 1, y: 0 } : {}}
            transition={MED}
            style={{ textAlign: "center", marginBottom: 20 }}
          >
            <SectionLabel text="For Investors" />
            <h2 style={{
              fontFamily: "'Fraunces', serif", fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#fff", letterSpacing: "-0.03em",
              lineHeight: 1.1, marginBottom: 14,
            }}>
              Franchise Investment Models
            </h2>
            <p style={{
              color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans', sans-serif",
              fontSize: 15, lineHeight: 1.7, maxWidth: 500, margin: "0 auto",
            }}>
              Two warehouse-based franchise models designed for profitability —
              choose the scale that fits your city and ambition.
            </p>
          </motion.div>

          {/* Trust points strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={franchiseR.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...MED, delay: 0.15 }}
            style={{
              display: "flex", flexWrap: "wrap",
              justifyContent: "center", gap: 12,
              marginBottom: 52,
            }}
          >
            {trustPoints.map(({ icon: Icon, label }) => (
              <div key={label} style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 100, padding: "8px 16px",
              }}>
                <Icon size={14} color={BRAND_GREEN} />
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12, fontWeight: 600,
                  color: "rgba(255,255,255,0.8)",
                }}>
                  {label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Franchise model cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24, maxWidth: 880, margin: "0 auto",
          }}>
            {franchiseModels.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 40 }}
                animate={franchiseR.inView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...SLOW, delay: i * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                style={{
                  borderRadius: 24, overflow: "hidden",
                  border: m.highlight
                    ? `2px solid ${BRAND_GREEN}`
                    : "1px solid rgba(255,255,255,0.1)",
                  background: m.highlight
                    ? "rgba(68,178,76,0.08)"
                    : "rgba(255,255,255,0.04)",
                  position: "relative",
                  display: "flex", flexDirection: "column",
                }}
              >
                {/* Most Popular badge */}
                {m.highlight && (
                  <div style={{
                    position: "absolute", top: -1, left: "50%",
                    transform: "translateX(-50%)",
                    background: BRAND_GREEN, color: "#fff",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10, fontWeight: 700,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    padding: "4px 16px",
                    borderRadius: "0 0 10px 10px",
                  }}>
                    Recommended
                  </div>
                )}

                {/* Card header */}
                <div style={{
                  padding: "32px 28px 24px",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  background: m.highlight
                    ? "rgba(68,178,76,0.1)"
                    : "rgba(255,255,255,0.03)",
                }}>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10, fontWeight: 700,
                    letterSpacing: "0.2em", textTransform: "uppercase",
                    color: m.highlight ? BRAND_GREEN : "rgba(255,255,255,0.4)",
                    marginBottom: 6,
                  }}>
                    {m.subtitle}
                  </p>
                  <h3 style={{
                    fontFamily: "'Fraunces', serif", fontWeight: 900,
                    fontSize: "1.75rem", color: "#fff",
                    letterSpacing: "-0.02em", lineHeight: 1.1,
                    marginBottom: 20,
                  }}>
                    {m.name}
                  </h3>

                  {/* Investment amount */}
                  <div style={{
                    display: "inline-flex", alignItems: "baseline", gap: 6,
                    background: m.highlight
                      ? "rgba(68,178,76,0.15)"
                      : "rgba(255,255,255,0.06)",
                    border: m.highlight
                      ? "1px solid rgba(68,178,76,0.3)"
                      : "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 12, padding: "10px 16px",
                  }}>
                    <span style={{
                      fontFamily: "'Fraunces', serif", fontWeight: 900,
                      fontSize: "2rem",
                      color: m.highlight ? BRAND_GREEN : "#fff",
                      lineHeight: 1,
                    }}>
                      {m.investment}
                    </span>
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12, color: "rgba(255,255,255,0.4)",
                    }}>
                      total investment
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding: "24px 28px", flex: 1 }}>

                  {/* Key metrics */}
                  <div style={{
                    display: "grid", gridTemplateColumns: "1fr 1fr",
                    gap: 12, marginBottom: 24,
                  }}>
                    {[
                      { label: "Capacity",  value: m.capacity  },
                      { label: "Revenue",   value: m.revenue   },
                      { label: "Suitable For", value: m.suitable, full: true },
                    ].map((row) => (
                      <div
                        key={row.label}
                        style={{
                          gridColumn: (row as any).full ? "1 / -1" : "auto",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.07)",
                          borderRadius: 10, padding: "10px 14px",
                        }}
                      >
                        <p style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 10, fontWeight: 600,
                          letterSpacing: "0.1em", textTransform: "uppercase",
                          color: "rgba(255,255,255,0.35)", marginBottom: 3,
                        }}>
                          {row.label}
                        </p>
                        <p style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 13, fontWeight: 700,
                          color: m.highlight ? BRAND_GREEN : "rgba(255,255,255,0.9)",
                        }}>
                          {row.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Includes */}
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10, fontWeight: 700,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.3)", marginBottom: 12,
                  }}>
                    What's Included
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
                    {m.includes.map((item) => (
                      <div key={item} style={{
                        display: "flex", alignItems: "center", gap: 10,
                      }}>
                        <CheckCircle2
                          size={14}
                          color={m.highlight ? BRAND_GREEN : "rgba(68,178,76,0.7)"}
                          strokeWidth={2.5}
                        />
                        <span style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 13, color: "rgba(255,255,255,0.75)",
                          fontWeight: item === "Confirmed Orders Provided" ? 700 : 400,
                          ...(item === "Confirmed Orders Provided"
                            ? { color: m.highlight ? BRAND_GREEN : "rgba(68,178,76,0.9)" }
                            : {}),
                        }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.a
                    href={m.ctaHref}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: "flex", alignItems: "center",
                      justifyContent: "center", gap: 8,
                      width: "100%", padding: "14px",
                      borderRadius: 100,
                      background: m.highlight
                        ? `linear-gradient(135deg, ${BRAND_GREEN}, ${BRAND_GREEN_DARK})`
                        : "transparent",
                      color: m.highlight ? "#fff" : BRAND_GREEN,
                      border: m.highlight ? "none" : `1.5px solid ${BRAND_GREEN}`,
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 700, fontSize: 14,
                      textDecoration: "none",
                      boxShadow: m.highlight ? "0 4px 20px rgba(68,178,76,0.35)" : "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!m.highlight)
                        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(68,178,76,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      if (!m.highlight)
                        (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                    }}
                  >
                    {m.cta} <ArrowRight size={15} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={franchiseR.inView ? { opacity: 1 } : {}}
            transition={{ ...MED, delay: 0.5 }}
            style={{
              textAlign: "center", marginTop: 36,
              color: "rgba(255,255,255,0.25)",
              fontFamily: "'DM Sans', sans-serif", fontSize: 12,
            }}
          >
            * Investment includes machinery, setup, branding & training. Prices subject to location.
            Contact us for a detailed breakdown.
          </motion.p>
        </div>
      </div>

    </section>
  );
}