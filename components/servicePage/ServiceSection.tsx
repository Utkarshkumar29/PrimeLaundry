'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import OrbitalServices from './OrbitalServices'; // ← import

const BLUE      = '#10549c';
const BLUE_DARK = '#0a3d75';
const GREEN     = '#44b24c';
const GREEN_DK  = '#339940';
const CREAM     = '#f7f5f0';
const DARK      = '#0a1f3d';
const EASE = [0.22, 1, 0.36, 1] as const;

export default function ServiceSection() {
  return (
    <main style={{ background: '#fff', minHeight: '100vh', paddingTop: 80 }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{
  position: 'relative',
  minHeight: '72vh',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  paddingBottom: 48,
}}>

  {/* Background image (DIFFERENT vibe from About) */}
  <div style={{
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    backgroundImage: "url('https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=1600&q=85')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(0.5)',
  }} />

  {/* Cinematic gradient (same SYSTEM, not same look) */}
  <div style={{
    position: 'absolute',
    inset: 0,
    zIndex: 1,
    background: `linear-gradient(110deg,
      rgba(10,31,61,0.95) 0%,
      rgba(16,84,156,0.75) 45%,
      rgba(10,31,61,0.25) 100%)`,
  }} />

  {/* Texture */}
  <div style={{
    position: 'absolute',
    inset: 0,
    zIndex: 1,
    pointerEvents: 'none',
    opacity: 0.04,
    backgroundImage: `radial-gradient(circle, ${GREEN} 1px, transparent 1px)`,
    backgroundSize: '36px 36px',
  }} />

  {/* Watermark (different word) */}
  <div style={{
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
    fontFamily: "'Fraunces', serif",
    fontSize: 'clamp(5rem,15vw,13rem)',
    fontWeight: 900,
    lineHeight: 0.85,
    letterSpacing: '-0.05em',
    color: 'rgba(255,255,255,0.04)',
    pointerEvents: 'none',
  }}>
    CLEAN<br />CARE
  </div>

  {/* Content */}
  <div style={{
    position: 'relative',
    zIndex: 2,
    maxWidth: 1280,
    margin: '0 auto',
    width: '100%',
    padding: '100px 32px 80px',
  }}>

    {/* Label */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        background: 'rgba(68,178,76,0.15)',
        border: '1px solid rgba(68,178,76,0.4)',
        borderRadius: 100,
        padding: '6px 16px',
        marginBottom: 24,
      }}
    >
      <span style={{
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: GREEN
      }} />
      <span style={{
        color: '#7dd880',
        fontSize: 12,
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}>
        Premium Services
      </span>
    </motion.div>

    {/* Heading (NEW TEXT) */}
    <motion.h1
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
      style={{
        fontFamily: "'Fraunces', serif",
        fontWeight: 900,
        fontSize: 'clamp(2.6rem,6vw,5rem)',
        color: '#fff',
        letterSpacing: '-0.03em',
        lineHeight: 0.95,
        marginBottom: 20,
        maxWidth: 680,
      }}
    >
      Care for Every Fabric,<br />
      <em style={{ color: GREEN }}>Handled Like New.</em>
    </motion.h1>

    {/* Description (NEW TEXT) */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.22, ease: EASE }}
      style={{
        color: 'rgba(255,255,255,0.65)',
        fontSize: 17,
        fontFamily: "'DM Sans', sans-serif",
        lineHeight: 1.75,
        maxWidth: 520,
        marginBottom: 36,
      }}
    >
      From daily wear to delicate fabrics — our services are designed
      to deliver spotless results with consistency, care, and speed.
    </motion.p>

    {/* Service highlights (instead of stats → keeps it unique) */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.34 }}
      style={{ display: 'flex', gap: 36, flexWrap: 'wrap' }}
    >
      {[
        { val: '9+', lbl: 'Service Types' },
        { val: '24h', lbl: 'Quick Turnaround' },
        { val: '100%', lbl: 'Fabric Care' },
        { val: 'Doorstep', lbl: 'Pickup & Delivery' },
      ].map(s => (
        <div key={s.lbl}>
          <div style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 900,
            fontSize: 'clamp(1.5rem,3vw,2.2rem)',
            color: GREEN,
            lineHeight: 1,
          }}>{s.val}</div>
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.38)',
            marginTop: 4,
          }}>{s.lbl}</div>
        </div>
      ))}
    </motion.div>

  </div>

  {/* Wave */}
  <div style={{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 3,
    lineHeight: 0,
    pointerEvents: 'none',
  }}>
    <svg viewBox="0 0 1440 64" preserveAspectRatio="none"
      style={{ width: '100%', height: 64 }}>
      <path d="M0 64 L0 36 Q360 0 720 32 Q1080 64 1440 28 L1440 64 Z" fill="#fff" />
    </svg>
  </div>

</section>

    
      {/* ── SERVICES SECTION → OrbitalServices ─────────────────── */}
      <section style={{
        background: `radial-gradient(
          ellipse 80% 60% at 50% 40%,
          rgba(16,84,156,0.04) 0%, transparent 70%
        ), #fff`,
        padding: '64px 16px 48px',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 12 }}
        >
          <p style={{
            color: GREEN, fontSize: 11, fontWeight: 700,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            fontFamily: "'DM Sans', sans-serif", marginBottom: 10,
          }}>What We Offer</p>
        </motion.div>

        {/* Orbital diagram — self-contained component */}
        <OrbitalServices />
      </section>

      {/* ── TECH STRIP ───────────────────────────────────────── */}
      <section style={{ background: CREAM, padding: '64px 32px' }}>
        <div
          style={{
            maxWidth: 1280, margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 48, alignItems: 'center',
          }}
          className="about-grid"
        >
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p style={{
              color: GREEN, fontSize: 12, fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              fontFamily: "'DM Sans', sans-serif", marginBottom: 12,
            }}>Why Prime Laundry?</p>
            <h2 style={{
              fontFamily: "'Fraunces', serif", fontWeight: 900,
              fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: BLUE_DARK,
              letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 20,
            }}>
              Powered by In-House<br />Premium Chemicals
            </h2>
            <p style={{
              color: '#475569', fontSize: 15, lineHeight: 1.8,
              fontFamily: "'DM Sans', sans-serif", marginBottom: 24,
            }}>
              Unlike competitors who use off-the-shelf solvents, Prime Laundry
              manufactures its own premium cleaning chemicals in-house —
              ensuring unmatched hygiene, fabric care, and consistent quality
              across every garment.
            </p>
            {[
              'Eco-friendly & biodegradable formulas',
              'Gentle on silk, wool & cashmere',
              'No toxic chemical residues',
              'GST-compliant paperless invoicing',
            ].map(pt => (
              <div key={pt} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                marginBottom: 10,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14, color: '#334155',
              }}>
                <CheckCircle2 size={16} color={GREEN} strokeWidth={2.5} />
                {pt}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
          >
            {[
              { val: '9+',    label: 'Service Types'       },
              { val: '2000+', label: 'Pcs/Day Capacity'    },
              { val: '100%',  label: 'In-house Chemicals'  },
              { val: '24hr',  label: 'Express Option'      },
            ].map(({ val, label }) => (
              <div key={label} style={{
                background: '#fff', borderRadius: 18, padding: '28px 20px',
                border: '1.5px solid #e8edf5',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                textAlign: 'center',
              }}>
                <div style={{
                  fontFamily: "'Fraunces', serif", fontWeight: 900,
                  fontSize: 36, color: BLUE, letterSpacing: '-0.03em',
                  marginBottom: 6,
                }}>{val}</div>
                <div style={{
                  color: '#64748b', fontSize: 13,
                  fontFamily: "'DM Sans', sans-serif",
                }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section style={{
        background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DARK} 100%)`,
        padding: '64px 32px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          opacity: 0.04,
          backgroundImage: `radial-gradient(circle, ${GREEN} 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }} />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(68,178,76,0.07) 0%, transparent 70%)',
        }} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ position: 'relative', zIndex: 2 }}
        >
          <h2 style={{
            fontFamily: "'Fraunces', serif", fontWeight: 900,
            fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: '#fff',
            letterSpacing: '-0.03em', marginBottom: 14,
          }}>Ready to experience the difference?</h2>
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 16, marginBottom: 32,
          }}>Book your first order or enquire about a franchise.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a href="#contact"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
              style={{
                padding: '13px 28px', borderRadius: 100,
                background: `linear-gradient(135deg, ${GREEN}, ${GREEN_DK})`,
                color: '#fff', textDecoration: 'none',
                fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15,
                display: 'inline-flex', alignItems: 'center', gap: 8,
                boxShadow: '0 4px 20px rgba(68,178,76,0.4)',
              }}
            >
              Get Franchise <ArrowRight size={16} />
            </motion.a>
            <motion.a href="/"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              style={{
                padding: '13px 28px', borderRadius: 100,
                background: 'transparent',
                color: 'rgba(255,255,255,0.8)',
                border: '1.5px solid rgba(255,255,255,0.25)',
                textDecoration: 'none',
                fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15,
              }}
            >
              Back to Home
            </motion.a>
          </div>
        </motion.div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}