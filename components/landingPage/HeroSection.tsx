'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Shield, Star, X, CheckCircle2, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const BLUE      = '#10549c';
const BLUE_DARK = '#0a3d75';
const GREEN     = '#44b24c';
const WA_NUMBER = '919131979530';
const EASE = [0.22, 1, 0.36, 1] as const;

// UPDATED stats
const stats = [
  {
    icon: TrendingUp,
    value: '₹15L – ₹20L',
    label: 'Monthly Revenue Potential',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Franchise Partners by 2029 (Expected)',
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Brand & Ops Support',
  },
  {
    icon: Star,
    value: '4.9★',
    label: 'Franchisee Satisfaction',
  },
];

const franchiseModels = [
  {
    id: 'basic',
    badge: 'Prime Basics',
    title: 'Prime Basics Warehouse',
    subtitle: 'Small to Mid Size Cities',
    investment: '₹28.80 Lakhs',
    capacity: '1,000 Pieces / Day',
    revenue: '₹30,000 – ₹35,000 / Day',
    includes: [
      'Industrial Machinery & Equipment',
      'Full Store Setup & Branding',
      'Staff Training at Head Office',
      'Operations Support & CRM',
      'Confirmed Orders Provided',
      'City-Level Exclusivity',
    ],
    color: BLUE,
    popular: false,
  },
  {
    id: 'elite',
    badge: 'Prime Elite ★',
    title: 'Prime Elite Warehouse',
    subtitle: 'High Demand / Metro / Large Cities',
    investment: '₹35.95 Lakhs',
    capacity: '2,000 Pieces / Day',
    revenue: '₹50,000 – ₹60,000 / Day',
    includes: [
      'Advanced Machinery & Equipment',
      'Full Store Setup & Premium Branding',
      'Staff Training at Head Office',
      'Operations Support & CRM',
      'Confirmed Orders Provided',
      'City-Level Exclusivity',
    ],
    color: GREEN,
    popular: true,
  },
];

function openFranchiseWA(model: string) {
  const msg = encodeURIComponent(
    `Hi Prime Laundry Team! 👋\n\nI'm interested in the *${model}* franchise.\n\nName: \nCity: \nPhone: \n\nPlease share complete details.`
  );
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
}

// Franchise models modal
function FranchiseModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(10,15,40,0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.96 }}
        transition={{ duration: 0.35, ease: EASE }}
        onClick={e => e.stopPropagation()}
        style={{
          background: BLUE_DARK,
          borderRadius: 24,
          padding: '36px 32px',
          maxWidth: 760,
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
        }}
      >
        {/* Close */}
        <button onClick={onClose} style={{
          position: 'absolute', top: 20, right: 20,
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 10, padding: 8, cursor: 'pointer', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <X size={18} />
        </button>

        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <span style={{ color: GREEN, fontFamily: "'DM Sans', sans-serif",
            fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
            display: 'block', marginBottom: 8 }}>Franchise Investment Models</span>
          <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 800,
            fontSize: 'clamp(1.6rem,3vw,2.2rem)', color: '#fff',
            letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Choose Your Model
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontFamily: "'DM Sans', sans-serif",
            fontSize: 14, marginTop: 8 }}>
            FOCO Model — You invest, we operate. Confirmed orders from Day 1.
          </p>
        </div>

        {/* Models */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}
          className="modal-grid">
          {franchiseModels.map(model => (
            <div key={model.id} style={{
              borderRadius: 20, overflow: 'hidden',
              border: model.popular ? `2px solid ${GREEN}` : '1.5px solid rgba(255,255,255,0.1)',
              background: model.popular ? 'rgba(68,178,76,0.06)' : 'rgba(255,255,255,0.04)',
              boxShadow: model.popular ? `0 16px 40px rgba(68,178,76,0.18)` : 'none',
              position: 'relative',
            }}>
              <div style={{ height: 3, background: model.popular
                ? `linear-gradient(90deg, ${GREEN}, #2d9e36)` : BLUE }} />

              {model.popular && (
                <div style={{ position: 'absolute', top: 14, right: 14,
                  background: GREEN, color: '#fff', borderRadius: 100,
                  padding: '3px 12px', fontSize: 9, fontWeight: 700,
                  fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.1em',
                  textTransform: 'uppercase' }}>Recommended</div>
              )}

              <div style={{ padding: '22px 20px' }}>
                <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: 6,
                  background: model.popular ? 'rgba(68,178,76,0.2)' : 'rgba(255,255,255,0.08)',
                  color: model.color, fontFamily: "'DM Sans', sans-serif",
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.08em',
                  textTransform: 'uppercase', marginBottom: 10 }}>{model.badge}</span>

                <h4 style={{ fontFamily: "'Fraunces', serif", fontWeight: 800,
                  fontSize: '1.15rem', color: '#fff', letterSpacing: '-0.01em',
                  lineHeight: 1.2, marginBottom: 4 }}>{model.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12, marginBottom: 16 }}>Best for: {model.subtitle}</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
                  {[
                    { l: 'Investment',   v: model.investment },
                    { l: 'Capacity',     v: model.capacity   },
                    { l: 'Daily Revenue',v: model.revenue    },
                  ].map(item => (
                    <div key={item.l} style={{ borderRadius: 10, padding: '10px 12px',
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 700,
                        letterSpacing: '0.12em', textTransform: 'uppercase' as const,
                        color: 'rgba(255,255,255,0.35)', marginBottom: 3 }}>{item.l}</div>
                      <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800,
                        fontSize: '1rem', color: item.l === 'Daily Revenue' ? model.color : '#fff' }}>{item.v}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 18 }}>
                  {model.includes.slice(0, 4).map(inc => (
                    <div key={inc} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                      <CheckCircle2 size={12} color={model.color} style={{ flexShrink: 0 }} />
                      <span style={{ fontFamily: "'DM Sans', sans-serif",
                        fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{inc}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 8 }}>
                  <motion.button onClick={() => openFranchiseWA(model.title)}
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    style={{ flex: 1, padding: '11px 16px', borderRadius: 100, border: 'none',
                      cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 700, fontSize: 13,
                      background: model.popular ? `linear-gradient(135deg, ${GREEN}, #2d9e36)` : 'rgba(255,255,255,0.1)',
                      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                      boxShadow: model.popular ? '0 4px 16px rgba(68,178,76,0.35)' : 'none' }}>
                    Apply Now <ArrowRight size={13} />
                  </motion.button>
                  <button onClick={() => openFranchiseWA(model.title)}
                    style={{ width: 40, height: 40, borderRadius: '50%',
                      border: '1.5px solid rgba(37,211,102,0.3)',
                      background: 'rgba(37,211,102,0.08)', color: '#25D366',
                      cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MessageCircle size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 600px) {
            .modal-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showModels, setShowModels] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    const bubbles = Array.from({ length: 22 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 6 + Math.random() * 28,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -(0.2 + Math.random() * 0.5),
      opacity: 0.04 + Math.random() * 0.08,
    }));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bubbles.forEach(b => {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,255,255,${b.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        b.x += b.vx; b.y += b.vy;
        if (b.y + b.r < 0) { b.y = canvas.height + b.r; b.x = Math.random() * canvas.width; }
        if (b.x < -b.r) b.x = canvas.width + b.r;
        if (b.x > canvas.width + b.r) b.x = -b.r;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <>
      <AnimatePresence>
        {showModels && <FranchiseModal onClose={() => setShowModels(false)} />}
      </AnimatePresence>

      <section id="home" style={{
  position: 'relative', minHeight: '100vh',
  display: 'flex', flexDirection: 'column', justifyContent: 'center',
  overflow: 'hidden',
}}>
  {/* Background image */}
  {/* Background image */}
<div style={{
  position: 'absolute', inset: 0,
  backgroundImage: "url('https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?w=1600&q=80')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  filter: 'brightness(0.5)',   // ← darken image itself
}} />

{/* Strong blue overlay across full width */}
<div style={{
  position: 'absolute', inset: 0,
  background: 'rgba(7, 38, 80, 0.82)',
}} />

{/* Heavier dark gradient on left where text lives */}


{/* Subtle green glow top-right for depth */}
<div style={{
  position: 'absolute', inset: 0, pointerEvents: 'none',
  background: 'radial-gradient(ellipse 40% 50% at 85% 30%, rgba(68,178,76,0.12) 0%, transparent 65%)',
}} />

        {/* Main grid */}
        <div style={{ position: 'relative', zIndex: 10, maxWidth: 1280, margin: '0 auto',
          padding: '120px 32px 80px', display: 'grid',
          gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}
          className="hero-grid">

          {/* LEFT */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(68,178,76,0.15)', border: '1px solid rgba(68,178,76,0.4)',
                borderRadius: 100, padding: '6px 16px', marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: GREEN, flexShrink: 0 }}/>
              <span style={{ color: '#7dd880', fontSize: 13, fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600, letterSpacing: '0.04em' }}>
                NOW ACCEPTING FRANCHISE APPLICATIONS
              </span>
            </motion.div>

            <motion.h1
  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
  style={{
    fontFamily: "'Fraunces', serif", fontWeight: 900,
    fontSize: 'clamp(2.6rem, 5vw, 4.2rem)', color: '#ffffff',
    lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 20,
  }}
>
  India's First{' '}
  <span style={{ position: 'relative', display: 'inline-block', color: GREEN }}>
    Warehouse-Based
    <svg
      style={{ position: 'absolute', bottom: -4, left: 0, width: '100%' }}
      viewBox="0 0 220 8" preserveAspectRatio="none" height="6"
    >
      <path d="M2 6 Q110 2 218 6" stroke={GREEN} strokeWidth="2.5"
        fill="none" strokeLinecap="round" opacity="0.6"/>
    </svg>
  </span>
  <br />Laundry Franchise
</motion.h1>

            <motion.p
  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
  style={{
    fontFamily: "'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.75,
    color: 'rgba(255,255,255,0.65)', maxWidth: 480, marginBottom: 16,
  }}
>
  Join the PrimeLaundry network and build a profitable business with full
  brand support, trained staff, CRM software, and a proven system that works.
</motion.p>

{/* Highlight pill */}
<motion.div
  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: EASE, delay: 0.28 }}
  style={{
    display: 'inline-flex', alignItems: 'center', gap: 10,
    background: 'rgba(68,178,76,0.12)',
    border: '1px solid rgba(68,178,76,0.3)',
    borderRadius: 100, padding: '10px 20px',
    marginBottom: 36,
  }}
>
  <span style={{
    width: 8, height: 8, borderRadius: '50%',
    background: GREEN, flexShrink: 0,
    boxShadow: '0 0 0 3px rgba(68,178,76,0.25)',
    animation: 'pulse-dot 2s ease infinite',
  }} />
  <span style={{
    fontFamily: "'Fraunces', serif", fontWeight: 700,
    fontSize: 15, color: '#fff', letterSpacing: '-0.01em',
    fontStyle: 'italic',
  }}>
    No Customer Search.{' '}
    <span style={{ color: GREEN }}>Only Confirmed Orders.</span>
  </span>
</motion.div>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
              style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              {/* Apply → opens enquiry form/contact */}
              <Link href={'/supportPage'}>
              <motion.button whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(68,178,76,0.55)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollTo('#contact')}
                style={{ padding: '14px 32px', borderRadius: 100,
                  background: `linear-gradient(135deg, ${GREEN} 0%, #2d9e36 100%)`,
                  color: '#fff', border: 'none', cursor: 'pointer',
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15,
                  display: 'flex', alignItems: 'center', gap: 8,
                  boxShadow: '0 4px 24px rgba(68,178,76,0.4)', letterSpacing: '0.01em' }}>
                Apply for Franchise <ArrowRight size={17}/>
              </motion.button>
              </Link>

              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                onClick={() => scrollTo('#how-it-works')}
                style={{ padding: '14px 28px', borderRadius: 100, background: 'transparent',
                  color: 'rgba(255,255,255,0.85)', border: '1.5px solid rgba(255,255,255,0.25)',
                  cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600, fontSize: 15, transition: 'border-color 0.2s, color 0.2s' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.55)';
                  (e.currentTarget as HTMLButtonElement).style.color = '#fff';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.25)';
                  (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.85)';
                }}>
                See How It Works
              </motion.button>
            </motion.div>

            {/* ✅ "Trusted by" line REMOVED */}
          </div>

          {/* RIGHT — Stats card */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 24, padding: 40, backdropFilter: 'blur(12px)' }}>

            <div style={{ marginBottom: 28 }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: GREEN,
                textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", marginBottom: 8 }}>
                Franchise Opportunity
              </p>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700,
                fontSize: 24, color: '#fff', letterSpacing: '-0.02em' }}>Why Prime Laundry?</h2>
            </div>

            {/* Stats grid — UPDATED values */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 28 }}>
              {stats.map(({ icon: Icon, value, label }, i) => (
                <motion.div key={label}
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 16, padding: '18px 14px' }}>
                  <div style={{ width: 34, height: 34, borderRadius: 10,
                    background: 'rgba(68,178,76,0.18)', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', marginBottom: 10 }}>
                    <Icon size={17} color={GREEN}/>
                  </div>
                  <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 700,
                    fontSize: 18, color: '#fff', marginBottom: 4, lineHeight: 1.2 }}>{value}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)',
                    fontFamily: "'DM Sans', sans-serif", lineHeight: 1.4 }}>{label}</div>
                </motion.div>
              ))}
            </div>

            {/* Investment range — UPDATED + opens modal */}
            <div style={{ background: 'rgba(68,178,76,0.1)', border: '1px solid rgba(68,178,76,0.25)',
              borderRadius: 14, padding: '16px 20px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
              <div>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)',
                  fontFamily: "'DM Sans', sans-serif", marginBottom: 4 }}>Investment Range</p>
                <p style={{ fontSize: 16, fontWeight: 700, color: '#fff',
                  fontFamily: "'Fraunces', serif", lineHeight: 1.2 }}>
                  Starting From ₹28 Lakhs
                </p>
                <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)',
                  fontFamily: "'DM Sans', sans-serif", marginTop: 2 }}>(Expected Range)</p>
              </div>
              {/* Get Details → opens franchise models modal */}
              <Link href={'/franchise'}>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setShowModels(true)}
                style={{ padding: '10px 18px', borderRadius: 100, background: GREEN,
                  color: '#fff', border: 'none', cursor: 'pointer',
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 13,
                  flexShrink: 0, boxShadow: '0 3px 12px rgba(68,178,76,0.35)' }}>
                Get Details
              </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: 60 }}>
            <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#ffffff"/>
          </svg>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hero-grid { grid-template-columns: 1fr !important; padding-top: 100px !important; }
          }
        `}</style>
        <style>{`
  @media (max-width: 768px) {
    .hero-grid { grid-template-columns: 1fr !important; padding-top: 100px !important; }
  }
  @keyframes pulse-dot {
    0%, 100% { box-shadow: 0 0 0 3px rgba(68,178,76,0.25); }
    50%       { box-shadow: 0 0 0 6px rgba(68,178,76,0.08); }
  }
`}</style>
      </section>
    </>
  );
}