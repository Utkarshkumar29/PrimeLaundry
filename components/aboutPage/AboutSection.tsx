'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Target, Eye, TrendingUp, Users, Store, Briefcase, CheckCircle2 } from 'lucide-react';

const BLUE      = '#10549c';
const BLUE_DARK = '#0a3d75';
const GREEN     = '#44b24c';
const CREAM     = '#f7f5f0';
const EASE = [0.22, 1, 0.36, 1] as const;

const visionPoints = [
  "India's most trusted tech-driven laundry chain",
  'Generate employment for 5,000+ people',
  'Expand to 100+ stores by 2026',
  'Create 500 entrepreneurs through FOCO model',
];

const milestones = [
  { year: '2019', text: 'Founded in Raipur, Chhattisgarh' },
  { year: '2021', text: 'Launched FOCO franchise model' },
  { year: '2023', text: 'Crossed 30+ franchise locations' },
  { year: '2026', text: 'Target: 100+ stores across India' },
];

const marketStats = [
  { val: '₹2.2L Cr', label: 'Total India Laundry Market Size' },
  { val: '₹5,000 Cr', label: 'Organised Segment (Today)' },
  { val: '44x', label: 'Growth Potential Headroom' },
  { val: '2019', label: 'Year Prime Laundry Founded' },
];

const whyPoints = [
  { title: 'Consumer Behaviour',  desc: 'Laundry choices are shaped by lifestyle, time-pressure, and rising hygiene expectations — not just personal preference.' },
  { title: 'Technology Advantage', desc: "Prime Laundry's modern washers, dryers, and in-house CRM make the business faster, more trackable, and more profitable." },
  { title: 'Market Opportunity',  desc: "India's organised laundry segment is just 2% of the total market — an enormous, untapped growth story waiting to be written." },
];

export default function AboutSection() {
  return (
    <main style={{ background: '#fff', minHeight: '100vh', paddingTop: 80 }}>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{
        background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DARK} 100%)`,
        padding: '72px 32px 88px',
        position: 'relative', overflow: 'hidden',
      }}>
        <svg style={{ position: 'absolute', top: 0, right: 0, opacity: 0.06 }} width="360" height="360" viewBox="0 0 360 360">
          {Array.from({ length: 7 }, (_, i) => (
            <line key={i} x1="360" y1={i * 55} x2={i * 55} y2="0" stroke="white" strokeWidth="1" />
          ))}
        </svg>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(68,178,76,0.15)', border: '1px solid rgba(68,178,76,0.4)',
              borderRadius: 100, padding: '6px 16px', marginBottom: 20 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: GREEN }} />
            <span style={{ color: '#7dd880', fontSize: 12, fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Since 2019 · Raipur, India
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 800,
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: '#fff',
              letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            From <span style={{ color: GREEN }}>"Uff Laundry!"</span><br />
            to <span style={{ fontStyle: 'italic' }}>"Wow Prime!"</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ color: 'rgba(255,255,255,0.65)', fontSize: 17,
              fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, maxWidth: 540 }}>
            Prime Laundry is rewriting India's laundry story — from riverside
            struggles to tech-enabled, doorstep-delivered premium experiences.
          </motion.p>
        </div>
      </section>

      <div style={{ background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DARK} 100%)`, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
          style={{ width: '100%', height: 48, display: 'block' }}>
          <path d="M0 48 L0 24 Q360 0 720 24 Q1080 48 1440 24 L1440 48 Z" fill="#fff" />
        </svg>
      </div>

      {/* ── INTRODUCTION ─────────────────────────────────────────────── */}
      <section style={{ padding: '72px 32px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}
          className="split-grid">
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}>
            <p style={{ color: GREEN, fontSize: 12, fontWeight: 700, letterSpacing: '0.2em',
              textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", marginBottom: 12 }}>
              Who We Are
            </p>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: BLUE_DARK,
              letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 20 }}>
              Laundry isn't just about cleaning clothes — it's about care, convenience & trust.
            </h2>
            <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.85,
              fontFamily: "'DM Sans', sans-serif", marginBottom: 16 }}>
              <strong style={{ color: BLUE }}>Prime Laundry</strong> is a premier laundry and
              dry-cleaning brand revolutionizing the industry with its{' '}
              <strong>Franchise Owned Company Operated (FOCO)</strong> model.
              By combining traditional craftsmanship with cutting-edge technology,
              we ensure every garment gets the perfect treatment.
            </p>
            <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.85,
              fontFamily: "'DM Sans', sans-serif" }}>
              With a clear mission to make laundry services effortless, reliable, and premium,
              Prime Laundry is setting new benchmarks in quality, hygiene & customer satisfaction.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {marketStats.map(({ val, label }, i) => (
              <div key={label} style={{
                background: i === 0 ? `linear-gradient(135deg, ${BLUE}, ${BLUE_DARK})` : CREAM,
                borderRadius: 20, padding: '28px 20px', textAlign: 'center',
                border: i === 0 ? 'none' : '1.5px solid #e8edf5',
              }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800,
                  fontSize: 28, letterSpacing: '-0.02em', marginBottom: 6,
                  color: i === 0 ? GREEN : BLUE }}>
                  {val}
                </div>
                <div style={{ fontSize: 12, lineHeight: 1.5,
                  color: i === 0 ? 'rgba(255,255,255,0.6)' : '#64748b',
                  fontFamily: "'DM Sans', sans-serif" }}>
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MISSION & VISION ─────────────────────────────────────────── */}
      <section style={{ background: CREAM, padding: '72px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}
          className="split-grid">

          {/* MISSION */}
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}
            style={{ background: `linear-gradient(145deg, ${BLUE} 0%, ${BLUE_DARK} 100%)`,
              borderRadius: 24, padding: '44px 36px',
              position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', bottom: -20, right: -20, opacity: 0.06 }}>
              <Target size={160} color="white" strokeWidth={0.8} />
            </div>
            <div style={{ width: 48, height: 48, borderRadius: 14,
              background: 'rgba(68,178,76,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 20 }}>
              <Target size={24} color={GREEN} />
            </div>
            <p style={{ color: GREEN, fontSize: 11, fontWeight: 700, letterSpacing: '0.2em',
              textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", marginBottom: 8 }}>
              Our Mission
            </p>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 800,
              fontSize: 36, color: '#fff', letterSpacing: '-0.03em',
              lineHeight: 1.1, marginBottom: 20 }}>
              MISSION
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 16,
              fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8 }}>
              To lead the laundry & dry-cleaning sector with tech-driven,
              home-curated services & set new industry standards.
            </p>
          </motion.div>

          {/* VISION */}
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            style={{ background: '#fff', borderRadius: 24, padding: '44px 36px',
              border: '1.5px solid #e8edf5',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', bottom: -20, right: -20, opacity: 0.04 }}>
              <Eye size={160} color={BLUE} strokeWidth={0.8} />
            </div>
            <div style={{ width: 48, height: 48, borderRadius: 14,
              background: 'rgba(16,84,156,0.07)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 20 }}>
              <Eye size={24} color={BLUE} />
            </div>
            <p style={{ color: GREEN, fontSize: 11, fontWeight: 700, letterSpacing: '0.2em',
              textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", marginBottom: 8 }}>
              Our Vision
            </p>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 800,
              fontSize: 36, color: BLUE_DARK, letterSpacing: '-0.03em',
              lineHeight: 1.1, marginBottom: 20 }}>
              VISION
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {visionPoints.map((pt) => (
                <div key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: 10,
                  fontSize: 14, color: '#334155', fontFamily: "'DM Sans', sans-serif",
                  lineHeight: 1.6 }}>
                  <CheckCircle2 size={16} color={GREEN} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 2 }} />
                  {pt}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────────────── */}
      <section style={{ padding: '72px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 52 }}>
            <p style={{ color: GREEN, fontSize: 12, fontWeight: 700, letterSpacing: '0.2em',
              textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", marginBottom: 10 }}>
              Our Journey
            </p>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: BLUE_DARK,
              letterSpacing: '-0.03em' }}>
              Built for the Long Run
            </h2>
          </motion.div>

          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0,
              width: 2, background: '#e8edf5', transform: 'translateX(-50%)' }} className="timeline-line" />

            {milestones.map((m, i) => (
              <motion.div key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                style={{ display: 'flex', justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start',
                  paddingLeft: i % 2 === 0 ? 0 : 'calc(50% + 32px)',
                  paddingRight: i % 2 === 0 ? 'calc(50% + 32px)' : 0,
                  marginBottom: 32, position: 'relative' }}
                className="timeline-item"
              >
                {/* Dot */}
                <div style={{ position: 'absolute', left: '50%', top: 18, transform: 'translateX(-50%)',
                  width: 14, height: 14, borderRadius: '50%',
                  background: GREEN, border: '3px solid #fff',
                  boxShadow: '0 0 0 3px rgba(68,178,76,0.25)' }} />

                <div style={{ background: '#fff', border: '1.5px solid #e8edf5',
                  borderRadius: 16, padding: '20px 22px', maxWidth: 280,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                  <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800,
                    fontSize: 22, color: BLUE, marginBottom: 4 }}>{m.year}</div>
                  <div style={{ fontSize: 14, color: '#475569',
                    fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>{m.text}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY MODERN LAUNDRY ───────────────────────────────────────── */}
      <section style={{ background: CREAM, padding: '72px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: GREEN, fontSize: 12, fontWeight: 700, letterSpacing: '0.2em',
              textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", marginBottom: 10 }}>
              The Opportunity
            </p>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: BLUE_DARK,
              letterSpacing: '-0.03em', marginBottom: 12 }}>
              Why Modern Laundry Services Matter
            </h2>
            <p style={{ color: '#64748b', fontSize: 15, fontFamily: "'DM Sans', sans-serif",
              lineHeight: 1.7, maxWidth: 500, margin: '0 auto' }}>
              From Chore to Convenience.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {whyPoints.map(({ title, desc }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }}
                style={{ background: '#fff', borderRadius: 20, padding: '32px 26px',
                  border: '1.5px solid #e8edf5',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  borderTop: `3px solid ${GREEN}` }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800,
                  fontSize: 44, color: 'rgba(16,84,156,0.08)', marginBottom: 2, lineHeight: 1 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700,
                  fontSize: 20, color: BLUE_DARK, marginBottom: 12 }}>{title}</h3>
                <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.8,
                  fontFamily: "'DM Sans', sans-serif" }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section style={{
        background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DARK} 100%)`,
        padding: '72px 32px', textAlign: 'center',
      }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 800,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#fff',
            letterSpacing: '-0.03em', marginBottom: 14 }}>
            Join Prime Laundry.<br />Become an Entrepreneur.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: "'DM Sans', sans-serif",
            fontSize: 16, marginBottom: 32, maxWidth: 460, margin: '0 auto 32px' }}>
            Your clean start to a profitable future.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a href="/franchise" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 28px', borderRadius: 100,
                background: `linear-gradient(135deg, ${GREEN}, #2d9e36)`,
                color: '#fff', textDecoration: 'none',
                fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15,
                boxShadow: '0 4px 24px rgba(68,178,76,0.4)' }}>
              Apply for Franchise <ArrowRight size={16} />
            </motion.a>
            <motion.a href="/pricing" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 28px', borderRadius: 100,
                background: 'transparent', color: 'rgba(255,255,255,0.8)',
                border: '1.5px solid rgba(255,255,255,0.25)', textDecoration: 'none',
                fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15 }}>
              View Pricing Models
            </motion.a>
          </div>
        </motion.div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .split-grid { grid-template-columns: 1fr !important; }
          .timeline-line { left: 20px !important; }
          .timeline-item {
            justify-content: flex-start !important;
            padding-left: 52px !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
    </main>
  );
}