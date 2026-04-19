'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
  { label: 'Our Process',  href: '/OurProcess'        },
  { label: 'Services',     href: '#services'          },
  { label: 'How It Works', href: '#how-it-works'      },
  { label: 'Pricing',      href: '#pricing'           },
  { label: 'Support',      href: '/ManagementSupport' },
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
  borderRadius: 10, padding: '11px 14px',
  fontSize: 14, fontFamily: "'DM Sans', sans-serif",
  color: '#0a1f3d', outline: 'none',
  transition: 'border-color 0.2s',
};

export default function Footer() {
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


      {/* ── MAIN FOOTER ────────────────────────────────────── */}
      <div style={{ background: '#fff', borderTop: '3px solid #44b24c' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px 0' }}>
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '48px 40px' }}
          >
            {/* BRAND */}
            <motion.div variants={up} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <Image
                src="/logo.png"
                alt="Prime Laundry"
                width={180} height={60}
                style={{ height: 56, width: 'auto', objectFit: 'contain' }}
              />
              </div>
              <p style={{
                color: '#64748b', fontSize: 14, lineHeight: 1.75,
                fontFamily: "'DM Sans', sans-serif", maxWidth: 240,
              }}>
                Clean Clothes. Happy Life. Premium laundry & dry cleaning delivered to your doorstep across India.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { icon: Phone,  text: '+91 98765 43210'       },
                  { icon: Mail,   text: 'hello@primelaundry.in' },
                  { icon: MapPin, text: 'Raipur, Chhattisgarh'  },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#64748b', fontFamily: "'DM Sans', sans-serif" }}>
                    <Icon size={14} color="#44b24c"/>
                    {text}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {socials.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} aria-label={label}
                    style={{
                      width: 36, height: 36, borderRadius: '50%',
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
                    <Icon size={15}/>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* QUICK LINKS */}
            <motion.div variants={up}>
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#10549c', fontFamily: "'DM Sans', sans-serif", marginBottom: 20,
              }}>Quick Links</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <button
                      onClick={() => href.startsWith('#') ? scrollTo(href) : undefined}
                      style={{
                        background: 'none', border: 'none', cursor: 'pointer', padding: '8px 12px',
                        borderRadius: 8, display: 'flex', alignItems: 'center', gap: 8,
                        color: '#64748b', fontSize: 14, fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 500, width: '100%', textAlign: 'left',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = '#f0faf0';
                        (e.currentTarget as HTMLButtonElement).style.color = '#2d9e36';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                        (e.currentTarget as HTMLButtonElement).style.color = '#64748b';
                      }}
                    >
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#44b24c', flexShrink: 0 }}/>
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CONTACT FORM */}
            <motion.div variants={up}>
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#10549c', fontFamily: "'DM Sans', sans-serif", marginBottom: 20,
              }}>Get in Touch</p>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  style={{
                    background: '#f0faf0', border: '1.5px solid #44b24c',
                    borderRadius: 14, padding: '28px 20px', textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: 28, color: '#44b24c', marginBottom: 8 }}>✓</div>
                  <p style={{ fontWeight: 700, color: '#10549c', fontFamily: "'DM Sans', sans-serif" }}>Message sent!</p>
                  <p style={{ fontSize: 13, color: '#64748b', marginTop: 4, fontFamily: "'DM Sans', sans-serif" }}>We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
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
                      padding: '12px', borderRadius: 10,
                      background: 'linear-gradient(135deg, #44b24c, #2d9e36)',
                      color: '#fff', border: 'none', cursor: 'pointer',
                      fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                      boxShadow: '0 4px 16px rgba(68,178,76,0.3)',
                    }}
                  >
                    <Send size={15}/> Send Message
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
              marginTop: 48, paddingTop: 20, paddingBottom: 24,
              borderTop: '1px solid #e2e8f0',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              flexWrap: 'wrap', gap: 12,
            }}
          >
            <p style={{ color: '#94a3b8', fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>
              © 2026 PrimeLaundry. All Rights Reserved.
            </p>
            <div style={{ display: 'flex', gap: 24 }}>
              {['Privacy Policy', 'Terms of Service'].map((label) => (
                <a key={label} href="#"
                  style={{ color: '#94a3b8', fontSize: 12, fontFamily: "'DM Sans', sans-serif", textDecoration: 'none', transition: 'color 0.2s' }}
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