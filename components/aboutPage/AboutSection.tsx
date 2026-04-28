'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Target, Eye, CheckCircle2 } from 'lucide-react';

const BLUE      = '#10549c';
const BLUE_DARK = '#0a3d75';
const GREEN     = '#44b24c';
const CREAM     = '#f7f5f0';
const EASE = [0.22, 1, 0.36, 1] as const;

const visionPoints = [
  "India's most trusted tech-driven laundry chain",
  'Generate employment for 5,000+ people',
  'Expand to 500+ stores by 2029',
  'Create 500 entrepreneurs through FOCO model',
];

const milestones = [
  { year: '2019', title: 'Brand Foundation',     text: 'Started Prime Laundry Vision',        done: true  },
  { year: '2021', title: 'Customer Growth',       text: 'Built Strong Customer Base',          done: true  },
  { year: '2023', title: 'System Expansion',      text: 'Operational Growth & Scaling',        done: true  },
  { year: '2026', title: 'Franchise Launch',      text: 'Prime Laundry Franchise Model',       done: true  },
  { year: '2027', title: '100+ Locations Target', text: 'Multi-City Expansion Goal',           done: false },
  { year: '2029', title: '500+ Stores Target',    text: 'Across India Network (Expected)',     done: false },
];

const marketStats = [
  { val: '₹2.2L Cr', label: 'Total India Laundry Market Size' },
  { val: '₹5,000 Cr', label: 'Organised Segment (Today)' },
  { val: '44x', label: 'Growth Potential Headroom' },
  { val: '2019', label: 'Year Prime Laundry Founded' },
];

const whyPoints = [
  { title: 'Consumer Behaviour',   desc: 'Laundry choices are shaped by lifestyle, time-pressure, and rising hygiene expectations — not just personal preference.' },
  { title: 'Technology Advantage', desc: "Prime Laundry's modern washers, dryers, and in-house CRM make the business faster, more trackable, and more profitable." },
  { title: 'Market Opportunity',   desc: "India's organised laundry segment is just 2% of the total market — an enormous, untapped growth story waiting to be written." },
];

export default function AboutSection() {
  return (
    <main style={{ background: '#fff', minHeight: '100vh', paddingTop: 80 }}>

      {/* ── HERO ── */}
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

      {/* ── INTRODUCTION ── */}
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
            </p>
            <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.85, fontFamily: "'DM Sans', sans-serif" }}>
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
                  color: i === 0 ? GREEN : BLUE }}>{val}</div>
                <div style={{ fontSize: 12, lineHeight: 1.5,
                  color: i === 0 ? 'rgba(255,255,255,0.6)' : '#64748b',
                  fontFamily: "'DM Sans', sans-serif" }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      {/* ── MISSION & VISION ── */}
<section style={{ background: CREAM, padding: '72px 32px' }}>
  <div style={{ maxWidth: 1280, margin: '0 auto' }}>

    {/* Section label */}
    <motion.div
      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5 }}
      style={{ textAlign: 'center', marginBottom: 48 }}
    >
      <p style={{
        color: GREEN, fontSize: 12, fontWeight: 700,
        letterSpacing: '0.2em', textTransform: 'uppercase',
        fontFamily: "'DM Sans', sans-serif", marginBottom: 10,
      }}>
        Purpose & Direction
      </p>
      <h2 style={{
        fontFamily: "'Fraunces', serif", fontWeight: 800,
        fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
        color: BLUE_DARK, letterSpacing: '-0.03em',
      }}>
        Mission & Vision
      </h2>
    </motion.div>

    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 28,
    }} className="split-grid">

      {/* ── MISSION CARD ── */}
      <motion.div
        initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}
        style={{
          background: `linear-gradient(145deg, ${BLUE} 0%, ${BLUE_DARK} 100%)`,
          borderRadius: 24, padding: '44px 36px',
          position: 'relative', overflow: 'hidden',
          display: 'flex', flexDirection: 'column', gap: 0,
        }}
      >
        {/* Background watermark */}
        <div style={{ position: 'absolute', bottom: -24, right: -24, opacity: 0.06 }}>
          <Target size={180} color="white" strokeWidth={0.7} />
        </div>

        {/* Top glow accent */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 4,
          background: `linear-gradient(90deg, ${GREEN}, rgba(68,178,76,0.15))`,
          borderRadius: '24px 24px 0 0',
        }} />

        {/* Icon */}
        <div style={{
          width: 52, height: 52, borderRadius: 14,
          background: 'rgba(68,178,76,0.18)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 24, flexShrink: 0,
        }}>
          <Target size={26} color={GREEN} />
        </div>

        <p style={{
          color: GREEN, fontSize: 11, fontWeight: 700,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          fontFamily: "'DM Sans', sans-serif", marginBottom: 6,
        }}>
          Our Mission
        </p>
        <h2 style={{
          fontFamily: "'Fraunces', serif", fontWeight: 800,
          fontSize: 38, color: '#fff',
          letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20,
        }}>
          MISSION
        </h2>

        <p style={{
          color: 'rgba(255,255,255,0.78)', fontSize: 15.5,
          fontFamily: "'DM Sans', sans-serif", lineHeight: 1.85,
          marginBottom: 32,
        }}>
          To lead the laundry & dry-cleaning sector with tech-driven,
          home-curated services & set new industry standards.
        </p>

        {/* Mission pillars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
          {[
            { icon: '⚡', text: 'Tech-driven operations at every step'       },
            { icon: '🏠', text: 'Home-curated, doorstep-delivered service'   },
            { icon: '📊', text: 'Setting new industry benchmarks in quality' },
          ].map((pt) => (
            <div key={pt.text} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 12, padding: '11px 14px',
            }}>
              <span style={{ fontSize: 16, flexShrink: 0 }}>{pt.icon}</span>
              <span style={{
                color: 'rgba(255,255,255,0.85)', fontSize: 13.5,
                fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5,
              }}>
                {pt.text}
              </span>
            </div>
          ))}
        </div>

        {/* Since badge */}
        <div style={{
          marginTop: 'auto',
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(68,178,76,0.15)',
          border: '1px solid rgba(68,178,76,0.3)',
          borderRadius: 100, padding: '8px 18px',
          alignSelf: 'flex-start',
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: '50%',
            background: GREEN, flexShrink: 0, display: 'inline-block',
          }} />
          <span style={{
            color: '#7dd880', fontSize: 13,
            fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
          }}>
            On a mission since 2019
          </span>
        </div>
      </motion.div>

      {/* ── VISION CARD ── */}
      <motion.div
        initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
        style={{
          background: '#fff', borderRadius: 24, padding: '44px 36px',
          border: '1.5px solid #e8edf5',
          boxShadow: '0 4px 32px rgba(0,0,0,0.06)',
          position: 'relative', overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
        }}
      >
        {/* Green top accent */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 4,
          background: `linear-gradient(90deg, ${GREEN}, rgba(68,178,76,0.2))`,
          borderRadius: '24px 24px 0 0',
        }} />

        {/* Watermark */}
        <div style={{ position: 'absolute', bottom: -24, right: -24, opacity: 0.04 }}>
          <Eye size={180} color={BLUE} strokeWidth={0.7} />
        </div>

        {/* Icon */}
        <div style={{
          width: 52, height: 52, borderRadius: 14,
          background: 'rgba(16,84,156,0.07)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 24,
        }}>
          <Eye size={26} color={BLUE} />
        </div>

        <p style={{
          color: GREEN, fontSize: 11, fontWeight: 700,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          fontFamily: "'DM Sans', sans-serif", marginBottom: 6,
        }}>
          Our Vision
        </p>
        <h2 style={{
          fontFamily: "'Fraunces', serif", fontWeight: 800,
          fontSize: 38, color: BLUE_DARK,
          letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 8,
        }}>
          VISION
        </h2>
        <p style={{
          color: '#94a3b8', fontSize: 13,
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: 1.6, marginBottom: 28,
          fontStyle: 'italic',
        }}>
          Where Prime Laundry is headed by 2029.
        </p>

        {/* Vision points */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {visionPoints.map((pt, i) => (
            <motion.div
              key={pt}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.08, ease: EASE }}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: 12,
                background: i === 2
                  ? 'rgba(68,178,76,0.06)'
                  : 'rgba(16,84,156,0.03)',
                border: i === 2
                  ? '1px solid rgba(68,178,76,0.25)'
                  : '1px solid rgba(16,84,156,0.07)',
                borderRadius: 12, padding: '13px 14px',
              }}
            >
              <div style={{
                width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                background: i === 2
                  ? 'rgba(68,178,76,0.15)'
                  : 'rgba(16,84,156,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <CheckCircle2
                  size={14}
                  color={i === 2 ? GREEN : BLUE}
                  strokeWidth={2.5}
                />
              </div>
              <div>
                <p style={{
                  fontSize: 14,
                  fontWeight: i === 2 ? 700 : 500,
                  color: i === 2 ? '#1a3a1a' : '#334155',
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: 1.5, margin: 0,
                }}>
                  {pt}
                </p>
                {i === 2 && (
                  <p style={{
                    fontSize: 11, color: GREEN,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600, marginTop: 3,
                    letterSpacing: '0.05em',
                  }}>
                    Target Year · 2029
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future tag */}
        <div style={{
          marginTop: 'auto',
          display: 'flex', gap: 10, flexWrap: 'wrap',
        }}>
          {[
            { label: '500+', sub: 'Stores' },
            { label: '5K+',  sub: 'Jobs'   },
            { label: '500',  sub: 'Entrepreneurs' },
          ].map((s) => (
            <div key={s.label} style={{
              flex: 1, minWidth: 80,
              background: CREAM,
              border: '1.5px solid #e8edf5',
              borderRadius: 14, padding: '12px 14px',
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: "'Fraunces', serif", fontWeight: 800,
                fontSize: 22, color: BLUE_DARK, lineHeight: 1,
              }}>
                {s.label}
              </div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 11,
                color: '#94a3b8', marginTop: 4, fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  </div>
</section>

      {/* ── TIMELINE ── */}
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>

          {/* Heading */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ color: GREEN, fontSize: 12, fontWeight: 700, letterSpacing: '0.2em',
              textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", marginBottom: 10 }}>
              Our Journey
            </p>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: BLUE_DARK, letterSpacing: '-0.03em' }}>
              Built for the Long Run
            </h2>
          </motion.div>

          {/* Roadmap */}
          <div style={{ position: 'relative' }}>
            {/* Center spine */}
            <div style={{
              position: 'absolute', left: '50%', top: 0, bottom: 0,
              width: 2, transform: 'translateX(-50%)',
              background: `linear-gradient(to bottom, ${GREEN} 0%, rgba(68,178,76,0.15) 100%)`,
            }} className="timeline-line" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div key={m.year}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 48px 1fr',
                      alignItems: 'center',
                      marginBottom: i < milestones.length - 1 ? 8 : 0,
                    }}
                  >
                    {/* Left slot */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 28 }}>
                      {isLeft ? (
                        <MilestoneCard m={m} align="right" />
                      ) : (
                        <YearPill year={m.year} done={m.done} />
                      )}
                    </div>

                    {/* Center dot */}
                    <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
                      <div style={{
                        width: 18, height: 18, borderRadius: '50%',
                        background: m.done ? GREEN : '#e2e8f0',
                        border: `3px solid ${m.done ? '#fff' : '#cbd5e1'}`,
                        boxShadow: m.done ? `0 0 0 4px rgba(68,178,76,0.2)` : 'none',
                        transition: 'all 0.3s',
                      }} />
                    </div>

                    {/* Right slot */}
                    <div style={{ paddingLeft: 28 }}>
                      {isLeft ? (
                        <YearPill year={m.year} done={m.done} />
                      ) : (
                        <MilestoneCard m={m} align="left" />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY MODERN LAUNDRY ── */}
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
                  border: '1.5px solid #e8edf5', boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
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

      {/* ── CTA ── */}
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
        }
      `}</style>
    </main>
  );
}

/* ── Sub-components ── */

function MilestoneCard({
  m, align,
}: {
  m: { year: string; title: string; text: string; done: boolean };
  align: 'left' | 'right';
}) {
  const GREEN  = '#44b24c';
  const BLUE_DARK = '#0a3d75';
  const BLUE   = '#10549c';

  return (
    <div style={{
      background: '#fff',
      border: `1.5px solid ${m.done ? 'rgba(68,178,76,0.2)' : '#e8edf5'}`,
      borderRadius: 16,
      padding: '18px 22px',
      maxWidth: 300,
      width: '100%',
      boxShadow: m.done
        ? '0 4px 20px rgba(68,178,76,0.08)'
        : '0 2px 10px rgba(0,0,0,0.04)',
      textAlign: align,
      position: 'relative',
      opacity: m.done ? 1 : 0.6,
    }}>
      {/* Done badge */}
      {m.done && (
        <div style={{
          position: 'absolute', top: -10,
          ...(align === 'right' ? { right: 16 } : { left: 16 }),
          background: GREEN, borderRadius: 100,
          padding: '2px 10px',
          fontSize: 10, fontWeight: 700,
          color: '#fff', fontFamily: "'DM Sans', sans-serif",
          letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>
          ✓ Done
        </div>
      )}

      <p style={{
        fontFamily: "'Fraunces', serif", fontWeight: 800,
        fontSize: 17, color: BLUE_DARK, marginBottom: 3,
        letterSpacing: '-0.01em',
      }}>
        {m.title}
      </p>
      <p style={{
        fontSize: 13, color: '#64748b',
        fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5,
      }}>
        {m.text}
      </p>
    </div>
  );
}

function YearPill({ year, done }: { year: string; done: boolean }) {
  const GREEN = '#44b24c';
  const BLUE  = '#10549c';
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      padding: '8px 18px', borderRadius: 100,
      background: done
        ? `linear-gradient(135deg, ${GREEN}, #2d9e36)`
        : 'rgba(16,84,156,0.06)',
      border: done ? 'none' : '1.5px dashed #cbd5e1',
      fontFamily: "'Fraunces', serif", fontWeight: 800,
      fontSize: 16, color: done ? '#fff' : BLUE,
      letterSpacing: '-0.01em',
      boxShadow: done ? '0 3px 12px rgba(68,178,76,0.25)' : 'none',
      opacity: done ? 1 : 0.55,
    }}>
      {year}
    </div>
  );
}