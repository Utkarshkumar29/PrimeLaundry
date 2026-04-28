'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const TwitterIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const FacebookIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const YoutubeIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const quickLinks = [
  { label: 'About',  href: '/about'        },
  { label: 'Services',     href: '/services'          },
  { label: 'Our Process', href: '/OurProcess'      },
  { label: 'ManagementSupport',      href: '/ManagementSupport'           },
  { label: 'Contact',      href: '#contact' },
];

const socials = [
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: TwitterIcon,   href: '#', label: 'Twitter'   },
  { icon: FacebookIcon,  href: '#', label: 'Facebook'  },
  { icon: YoutubeIcon,   href: '#', label: 'YouTube'   },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };
const up = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

const inputBase: React.CSSProperties = {
  width: '100%', boxSizing: 'border-box',
  background: '#f7f9fc',
  border: '1.5px solid #e2e8f0',
  borderRadius: 10, padding: '13px 16px',
  fontSize: 15, fontFamily: "'DM Sans', sans-serif",
  color: '#0a1f3d', outline: 'none',
  transition: 'border-color 0.2s',
};

export default function Footer() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', phone: '', email: '', message: '' });
  };

  const scrollTo = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <footer id="contact">
      <div style={{ background: '#fff', borderTop: '3px solid #44b24c' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 32px 0' }}>
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '56px 48px' }}
          >

            {/* BRAND */}
            <motion.div variants={up} style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              <div>
                <Image
                  src="/logo.png"
                  alt="Prime Laundry"
                  width={200} height={68}
                  style={{ height: 64, width: 'auto', objectFit: 'contain' }}
                />
              </div>
              <p style={{
                color: '#4a5568', fontSize: 16, lineHeight: 1.8,
                fontFamily: "'DM Sans', sans-serif", maxWidth: 260,
              }}>
                Clean Clothes. Happy Life. Premium laundry & dry cleaning delivered to your doorstep across India.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { icon: Phone,  text: '+91 98765 43210'       },
                  { icon: Mail,   text: 'hello@primelaundry.in' },
                  { icon: MapPin, text: 'Raipur, Chhattisgarh'  },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, color: '#4a5568', fontFamily: "'DM Sans', sans-serif" }}>
                    <Icon size={16} color="#44b24c" style={{ flexShrink: 0 }}/>
                    {text}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                {socials.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} aria-label={label}
                    style={{
                      width: 40, height: 40, borderRadius: '50%',
                      border: '1.5px solid #e2e8f0', background: '#f7f9fc',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#94a3b8', textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = '#44b24c';
                      (e.currentTarget as HTMLAnchorElement).style.color = '#44b24c';
                      (e.currentTarget as HTMLAnchorElement).style.background = '#f0faf0';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e2e8f0';
                      (e.currentTarget as HTMLAnchorElement).style.color = '#94a3b8';
                      (e.currentTarget as HTMLAnchorElement).style.background = '#f7f9fc';
                    }}
                  >
                    <Icon size={17}/>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* QUICK LINKS */}
            <motion.div variants={up}>
      <p
        style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#10549c",
          fontFamily: "'DM Sans', sans-serif",
          marginBottom: 22,
        }}
      >
        Quick Links
      </p>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {quickLinks.map(({ label, href }) => (
          <li key={label}>
            <button
              onClick={() => {
                if (href.startsWith("#")) {
                  scrollTo(href);
                } else {
                  router.push(href);
                }
              }}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "10px 12px",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "#4a5568",
                fontSize: 16,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                width: "100%",
                textAlign: "left",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLButtonElement;
                target.style.background = "#f0faf0";
                target.style.color = "#2d9e36";
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLButtonElement;
                target.style.background = "transparent";
                target.style.color = "#4a5568";
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#44b24c",
                  flexShrink: 0,
                }}
              />
              {label}
            </button>
          </li>
        ))}
      </ul>
    </motion.div>

            {/* CONTACT FORM */}
            <motion.div variants={up}>
              <p style={{
                fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#10549c', fontFamily: "'DM Sans', sans-serif", marginBottom: 22,
              }}>Get in Touch</p>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  style={{
                    background: '#f0faf0', border: '1.5px solid #44b24c',
                    borderRadius: 14, padding: '32px 24px', textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: 32, color: '#44b24c', marginBottom: 10 }}>✓</div>
                  <p style={{ fontWeight: 700, fontSize: 17, color: '#10549c', fontFamily: "'DM Sans', sans-serif" }}>Message sent!</p>
                  <p style={{ fontSize: 15, color: '#64748b', marginTop: 6, fontFamily: "'DM Sans', sans-serif" }}>We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { type: 'text',  key: 'name',  ph: 'Your Name'     },
                    { type: 'tel',   key: 'phone', ph: 'Phone Number'  },
                    { type: 'email', key: 'email', ph: 'Email Address' },
                  ].map(({ type, key, ph }) => (
                    <input key={key} type={type} placeholder={ph}
                      value={(form as any)[key]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      required={type !== 'tel'}
                      style={inputBase}
                      onFocus={(e) => (e.target.style.borderColor = '#44b24c')}
                      onBlur={(e)  => (e.target.style.borderColor = '#e2e8f0')}
                    />
                  ))}
                  <textarea placeholder="Your Message" rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputBase, resize: 'none' }}
                    onFocus={(e) => (e.target.style.borderColor = '#44b24c')}
                    onBlur={(e)  => (e.target.style.borderColor = '#e2e8f0')}
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                    style={{
                      padding: '14px', borderRadius: 10,
                      background: 'linear-gradient(135deg, #44b24c, #2d9e36)',
                      color: '#fff', border: 'none', cursor: 'pointer',
                      fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                      boxShadow: '0 4px 16px rgba(68,178,76,0.3)',
                    }}
                  >
                    <Send size={16}/> Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>

          </motion.div>

          {/* BOTTOM BAR */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.4 }}
            style={{
              marginTop: 56, paddingTop: 22, paddingBottom: 28,
              borderTop: '1px solid #e2e8f0',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              flexWrap: 'wrap', gap: 12,
            }}
          >
            <p style={{ color: '#94a3b8', fontSize: 15, fontFamily: "'DM Sans', sans-serif" }}>
              © 2026 PrimeLaundry. All Rights Reserved.
            </p>
            <div style={{ display: 'flex', gap: 28 }}>
              {['Privacy Policy', 'Terms of Service'].map((label) => (
                <a key={label} href="#"
                  style={{ color: '#94a3b8', fontSize: 14, fontFamily: "'DM Sans', sans-serif", textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#44b24c')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#94a3b8')}
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