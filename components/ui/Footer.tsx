"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

/* ── Brand tokens ── */
const BLUE  = '#10549c';
const GREEN = '#44b24c';
const GDARK = '#2d9e36';

/* ── Colorful social icons ── */
const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
        <stop offset="0%"  stopColor="#ffd600"/>
        <stop offset="20%" stopColor="#ff7a00"/>
        <stop offset="40%" stopColor="#ff0069"/>
        <stop offset="70%" stopColor="#d300c5"/>
        <stop offset="100%" stopColor="#7638fa"/>
      </radialGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5.5" ry="5.5" fill="url(#ig-grad)"/>
    <circle cx="12" cy="12" r="4.5" stroke="#fff" strokeWidth="1.8" fill="none"/>
    <circle cx="17.3" cy="6.7" r="1.1" fill="#fff"/>
  </svg>
);

const LinkedInIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <rect width="24" height="24" rx="5" fill="#0A66C2"/>
    <path d="M7.5 9.5H5V19H7.5V9.5Z" fill="#fff"/>
    <circle cx="6.25" cy="6.75" r="1.5" fill="#fff"/>
    <path d="M19 19H16.5V14.25C16.5 13.01 15.49 12 14.25 12C13.01 12 12 13.01 12 14.25V19H9.5V9.5H12V11C12.74 9.97 14.01 9.5 15.25 9.5C17.32 9.5 19 11.18 19 13.25V19Z" fill="#fff"/>
  </svg>
);

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <rect width="24" height="24" rx="5" fill="#1877F2"/>
    <path d="M13.5 19V13.5H15.5L15.8 11.2H13.5V9.8C13.5 9.1 13.7 8.7 14.7 8.7H15.9V6.6C15.1 6.5 14.3 6.5 13.5 6.5C11.6 6.5 10.3 7.6 10.3 9.6V11.2H8.3V13.5H10.3V19H13.5Z" fill="#fff"/>
  </svg>
);

const YoutubeIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <rect width="24" height="24" rx="5" fill="#FF0000"/>
    <path d="M19.6 8.2C19.4 7.5 18.8 6.9 18.1 6.7C16.8 6.4 12 6.4 12 6.4C12 6.4 7.2 6.4 5.9 6.7C5.2 6.9 4.6 7.5 4.4 8.2C4.1 9.5 4.1 12 4.1 12C4.1 12 4.1 14.5 4.4 15.8C4.6 16.5 5.2 17.1 5.9 17.3C7.2 17.6 12 17.6 12 17.6C12 17.6 16.8 17.6 18.1 17.3C18.8 17.1 19.4 16.5 19.6 15.8C19.9 14.5 19.9 12 19.9 12C19.9 12 19.9 9.5 19.6 8.2Z" fill="#FF0000"/>
    <polygon points="10.2,14.6 14.8,12 10.2,9.4" fill="#fff"/>
  </svg>
);

const socials = [
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/prime_laundry_raipur?utm_source=qr",
    label: "Instagram",
    hoverBg: "rgba(255,0,105,0.08)",
    hoverBorder: "#ff0069",
  },
  {
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/prime-laundry-8bbb24348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    label: "LinkedIn",
    hoverBg: "rgba(10,102,194,0.08)",
    hoverBorder: "#0A66C2",
  },


];

const quickLinks = [
  { label: "About",              href: "/about"              },
  { label: "Services",           href: "/services"           },
  { label: "Our Process",        href: "/OurProcess"         },
  { label: "Management Support", href: "/ManagementSupport"  },
  { label: "Contact",            href: "#contact"            },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const up = {
  hidden:   { opacity: 0, y: 28 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const inputBase: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  background: "#f7f9fc",
  border: "1.5px solid #e2e8f0",
  borderRadius: 10,
  padding: "13px 16px",
  fontSize: 15,
  fontFamily: "'DM Sans', sans-serif",
  color: BLUE,
  outline: "none",
  transition: "border-color 0.2s",
};

export default function Footer() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact">
      <div style={{ background: "#fff", borderTop: `3px solid ${GREEN}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 32px 0" }}>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "56px 48px",
            }}
          >
            {/* ── BRAND ── */}
            <motion.div variants={up} style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <Image
                src="/logo.webp"
                alt="Prime Laundry"
                width={200}
                height={68}
                style={{ height: 64, width: "auto", objectFit: "contain" }}
              />

              <p style={{
                color: "#4a5568", fontSize: 16, lineHeight: 1.8,
                fontFamily: "'DM Sans', sans-serif", maxWidth: 260,
              }}>
                Clean Clothes. Happy Life. Premium laundry &amp; dry cleaning
                delivered to your doorstep across India.
              </p>

              {/* Contact details */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { icon: Phone,  text: "+91 7566611104"                                    },
                  { icon: Mail,   text: "Primelaundrypvt.ltd@gmail.com"                     },
                  { icon: MapPin, text: "MIG 35 gali no 5 kavita nagar Avanti vihar 492001" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} style={{
                    display: "flex", alignItems: "flex-start", gap: 10,
                    fontSize: 14, color: "#4a5568",
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    <Icon size={15} color={GREEN} style={{ flexShrink: 0, marginTop: 2 }} />
                    {text}
                  </div>
                ))}
              </div>

              {/* Social icons — colorful */}
              <div style={{ display: "flex", gap: 10 }}>
                {socials.map(({ icon: Icon, href, label, hoverBg, hoverBorder }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      width: 40, height: 40, borderRadius: "50%",
                      border: "1.5px solid #e2e8f0",
                      background: "#f7f9fc",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      textDecoration: "none",
                      transition: "all 0.2s",
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = hoverBorder;
                      el.style.background  = hoverBg;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = "#e2e8f0";
                      el.style.background  = "#f7f9fc";
                    }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* ── QUICK LINKS ── */}
            <motion.div variants={up}>
              <p style={{
                fontSize: 12, fontWeight: 700, letterSpacing: "0.18em",
                textTransform: "uppercase", color: BLUE,
                fontFamily: "'DM Sans', sans-serif", marginBottom: 24,
              }}>
                Quick Links
              </p>

              <ul style={{
                listStyle: "none", padding: 0, margin: 0,
                display: "flex", flexDirection: "column", gap: 6,
              }}>
                {quickLinks.map(({ label, href }, i) => (
                  <li key={label}>
                    <motion.button
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      onClick={() => href.startsWith("#") ? scrollTo(href) : router.push(href)}
                      style={{
                        background: "none", border: "none", cursor: "pointer",
                        padding: "11px 14px", borderRadius: 12,
                        display: "flex", alignItems: "center", gap: 12,
                        width: "100%", textAlign: "left",
                        transition: "all 0.25s ease",
                        position: "relative", overflow: "hidden",
                      }}
                      onMouseEnter={(e) => {
                        const btn = e.currentTarget as HTMLButtonElement;
                        btn.style.background  = "linear-gradient(90deg, rgba(68,178,76,0.08), rgba(68,178,76,0.03))";
                        btn.style.paddingLeft = "18px";
                      }}
                      onMouseLeave={(e) => {
                        const btn = e.currentTarget as HTMLButtonElement;
                        btn.style.background  = "none";
                        btn.style.paddingLeft = "14px";
                      }}
                    >
                      {/* Left accent bar */}
                      <span style={{
                        position: "absolute", left: 0, top: "20%", bottom: "20%",
                        width: 3, borderRadius: 4,
                        background: `linear-gradient(180deg, ${GREEN}, ${GDARK})`,
                        opacity: 0, transition: "opacity 0.25s ease",
                      }} />

                      {/* Number badge */}
                      <span style={{
                        width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                        background: `rgba(16,84,156,0.07)`,
                        border: `1px solid rgba(16,84,156,0.1)`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "'Fraunces', serif", fontWeight: 900,
                        fontSize: 11, color: BLUE,
                      }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      {/* Label */}
                      <span style={{
                        fontSize: 15, fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 500, color: "#334155", flex: 1,
                      }}>
                        {label}
                      </span>

                      {/* Arrow */}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        style={{ flexShrink: 0 }}>
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </motion.button>
                  </li>
                ))}
              </ul>

              {/* Divider + tagline */}
              <div style={{
                marginTop: 28, height: 1,
                background: `linear-gradient(90deg, ${GREEN}, rgba(68,178,76,0.1), transparent)`,
                borderRadius: 2,
              }} />
              <p style={{
                marginTop: 16, fontSize: 13, color: "#94a3b8",
                fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6, fontStyle: "italic",
              }}>
                "From Chore to Convenience —<br/>experience the Prime difference."
              </p>
            </motion.div>

            {/* ── CONTACT FORM ── */}
            <motion.div variants={up}>
              <p style={{
                fontSize: 12, fontWeight: 700, letterSpacing: "0.18em",
                textTransform: "uppercase", color: BLUE,
                fontFamily: "'DM Sans', sans-serif", marginBottom: 22,
              }}>
                Get in Touch
              </p>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    background: "#f0faf0", border: `1.5px solid ${GREEN}`,
                    borderRadius: 14, padding: "32px 24px", textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 32, color: GREEN, marginBottom: 10 }}>✓</div>
                  <p style={{ fontWeight: 700, fontSize: 17, color: BLUE, fontFamily: "'DM Sans', sans-serif" }}>
                    Message sent!
                  </p>
                  <p style={{ fontSize: 15, color: "#64748b", marginTop: 6, fontFamily: "'DM Sans', sans-serif" }}>
                    We'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { type: "text",  key: "name",    ph: "Your Name"      },
                    { type: "tel",   key: "phone",   ph: "Phone Number"   },
                    { type: "email", key: "email",   ph: "Email Address"  },
                  ].map(({ type, key, ph }) => (
                    <input
                      key={key}
                      type={type}
                      placeholder={ph}
                      value={(form as any)[key]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      required={type !== "tel"}
                      style={inputBase}
                      onFocus={(e) => (e.target.style.borderColor = GREEN)}
                      onBlur={(e)  => (e.target.style.borderColor = "#e2e8f0")}
                    />
                  ))}
                  <textarea
                    placeholder="Your Message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputBase, resize: "none" }}
                    onFocus={(e) => (e.target.style.borderColor = GREEN)}
                    onBlur={(e)  => (e.target.style.borderColor = "#e2e8f0")}
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      padding: "14px", borderRadius: 10,
                      background: `linear-gradient(135deg, ${GREEN}, ${GDARK})`,
                      color: "#fff", border: "none", cursor: "pointer",
                      fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16,
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                      boxShadow: "0 4px 16px rgba(68,178,76,0.3)",
                    }}
                  >
                    <Send size={16}/> Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>

          {/* ── BOTTOM BAR ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{
              marginTop: 56, paddingTop: 22, paddingBottom: 28,
              borderTop: "1px solid #e2e8f0",
              display: "flex", justifyContent: "space-between",
              alignItems: "center", flexWrap: "wrap", gap: 12,
            }}
          >
            <p style={{ color: "#94a3b8", fontSize: 15, fontFamily: "'DM Sans', sans-serif" }}>
              © 2026 PrimeLaundry. All Rights Reserved.
            </p>
            <div style={{ display: "flex", gap: 28 }}>
              {["Privacy Policy", "Terms of Service"].map((label) => (
                <a
                  key={label}
                  href="#"
                  style={{
                    color: "#94a3b8", fontSize: 14,
                    fontFamily: "'DM Sans', sans-serif",
                    textDecoration: "none", transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = GREEN)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8")}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}