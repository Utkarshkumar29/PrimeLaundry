'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Target, Eye, CheckCircle2 } from 'lucide-react';

const BLUE      = '#10549c';
const BLUE_DARK = '#0a3d75';
const GREEN     = '#44b24c';
const GREEN_DK  = '#339940';
const CREAM     = '#f7f5f0';
const EASE = [0.22, 1, 0.36, 1] as const;

const visionPoints = [
  "India's most trusted tech-driven laundry chain",
  'Generate employment for 5,000+ people',
  'Expand to 500+ stores by 2029',
  'Create 500 entrepreneurs through FOCO model',
];

const milestones = [
  { year: '2019', title: 'Brand Foundation',     text: 'Started Prime Laundry Vision',    done: true  },
  { year: '2021', title: 'Customer Growth',       text: 'Built Strong Customer Base',      done: true  },
  { year: '2023', title: 'System Expansion',      text: 'Operational Growth & Scaling',    done: true  },
  { year: '2026', title: 'Franchise Launch',      text: 'Prime Laundry Franchise Model',   done: true  },
  { year: '2027', title: '100+ Locations Target', text: 'Multi-City Expansion Goal',       done: false },
  { year: '2029', title: '500+ Stores Target',    text: 'Across India Network (Expected)', done: false },
];

const marketStats = [
  { val: '₹2.2L Cr', label: 'Total India Laundry Market Size' },
  { val: '₹5,000 Cr', label: 'Organised Segment (Today)' },
  { val: '44x', label: 'Growth Potential Headroom' },
  { val: '2019', label: 'Year Prime Laundry Founded' },
];

/*
  WHY cards — redesigned with:
  - Better, more relevant images
  - A stat chip overlaid on image (data-driven)
  - Category tag + footer with key insight
  - Hover lift effect
*/
const whyPoints = [
  {
    title: 'Changing Consumer Behaviour',
    tag: 'Consumer Trend',
    desc: "India's urban workforce demands time-saving, reliable laundry — working professionals no longer want to spend weekends washing when doorstep pickup exists.",
    img: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=700&q=80',
    emoji: '🧺',
    stat: { val: '₹2.2L Cr', lbl: 'Market Size' },
    footer: 'Lifestyle + Hygiene Shift',
  },
  {
    title: 'Industrial Technology Advantage',
    tag: 'Technology',
    desc: "Prime Laundry's warehouse-grade washers, commercial dryers, and proprietary CRM make every unit trackable, profitable, and scalable from Day 1.",
    img: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=700&q=80',
    emoji: '⚙️',
    stat: { val: 'CRM', lbl: 'Tech Enabled' },
    footer: 'Warehouse-Grade Equipment',
  },
  {
    title: 'Massive Untapped Market',
    tag: 'Market Opportunity',
    desc: "India's organised laundry segment is just 2% of a ₹2.2 lakh crore market — a 44× growth opportunity in a sector that's barely begun to scale.",
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=700&q=80',
    emoji: '📈',
    stat: { val: '44×', lbl: 'Growth Room' },
    footer: '2% Organised · 98% Untapped',
  },
];

/*
  Images chosen for meaning:
  MISSION → photo-1558618666 = ironing / carefully handling clothes
            Communicates: care, precision, service, people doing the work
  VISION  → photo-1524492412937 = India Gate / Indian monument at dusk
            Communicates: India, scale, pride, national ambition
*/
const MISSION_IMG = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85';
const VISION_IMG  = 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=85';

export default function AboutSection() {
  return (
    <main style={{ background: '#fff', minHeight: '100vh', paddingTop: 80 }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '72vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingBottom: 48 }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, backgroundImage: "url('https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=1600&q=85')", backgroundSize: 'cover', backgroundPosition: 'center 40%', filter: 'brightness(0.45)' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: `linear-gradient(105deg, rgba(10,31,61,0.92) 0%, rgba(10,61,117,0.80) 45%, rgba(10,31,61,0.40) 100%)` }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', opacity: 0.04, backgroundImage: `radial-gradient(circle, ${GREEN} 1px, transparent 1px)`, backgroundSize: '36px 36px' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, zIndex: 1, fontFamily: "'Fraunces', serif", fontSize: 'clamp(5rem,16vw,14rem)', fontWeight: 900, lineHeight: 0.85, letterSpacing: '-0.05em', color: 'rgba(255,255,255,0.04)', pointerEvents: 'none', userSelect: 'none' }}>ABO<br />UT</div>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', width: '100%', padding: '100px 32px 80px' }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(68,178,76,0.15)', border: '1px solid rgba(68,178,76,0.4)', borderRadius: 100, padding: '6px 16px', marginBottom: 24 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: GREEN, display: 'inline-block' }} />
            <span style={{ color: '#7dd880', fontSize: 12, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Since 2019 · Raipur, India</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: 'clamp(2.6rem,6vw,5rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 0.95, marginBottom: 20, maxWidth: 680 }}>
            From <em style={{ color: GREEN }}>"Uff Laundry!"</em><br />to <em style={{ fontStyle: 'italic' }}>"Wow Prime!"</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.22, ease: EASE }}
            style={{ color: 'rgba(255,255,255,0.65)', fontSize: 17, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.75, maxWidth: 520, marginBottom: 36 }}>
            Prime Laundry is rewriting India's laundry story — from riverside struggles to tech-enabled, doorstep-delivered premium experiences.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.34, ease: EASE }} style={{ display: 'flex', gap: 36, flexWrap: 'wrap' }}>
            {[{ val: '2019', lbl: 'Founded' }, { val: '500+', lbl: 'Stores by 2029' }, { val: '24×7', lbl: 'Operations' }, { val: 'FOCO', lbl: 'Business Model' }].map(s => (
              <div key={s.lbl}>
                <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: 'clamp(1.5rem,3vw,2.2rem)', color: GREEN, lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', marginTop: 4 }}>{s.lbl}</div>
              </div>
            ))}
          </motion.div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3, lineHeight: 0, pointerEvents: 'none' }}>
          <svg viewBox="0 0 1440 64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: 64, display: 'block' }}>
            <path d="M0 64 L0 36 Q360 0 720 32 Q1080 64 1440 28 L1440 64 Z" fill="#fff" />
          </svg>
        </div>
      </section>

      {/* ── INTRODUCTION ── */}
      <section style={{ padding: '72px 32px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="split-grid">
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}>
            <p style={{ color: GREEN, fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", marginBottom: 12 }}>Who We Are</p>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: BLUE_DARK, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 20 }}>
              Laundry isn't just about cleaning clothes — it's about care, convenience & trust.
            </h2>
            <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.85, fontFamily: "'DM Sans', sans-serif", marginBottom: 16 }}>
              <strong style={{ color: BLUE }}>Prime Laundry</strong> is a premier laundry and dry-cleaning brand revolutionizing the industry with its <strong>Franchise Owned Company Operated (FOCO)</strong> model.
            </p>
            <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.85, fontFamily: "'DM Sans', sans-serif" }}>
              With a clear mission to make laundry services effortless, reliable, and premium, Prime Laundry is setting new benchmarks in quality, hygiene & customer satisfaction.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {marketStats.map(({ val, label }, i) => (
              <div key={label} style={{ background: i === 0 ? `linear-gradient(135deg, ${BLUE}, ${BLUE_DARK})` : CREAM, borderRadius: 20, padding: '28px 20px', textAlign: 'center', border: i === 0 ? 'none' : '1.5px solid #e8edf5' }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: 28, letterSpacing: '-0.02em', marginBottom: 6, color: i === 0 ? GREEN : BLUE }}>{val}</div>
                <div style={{ fontSize: 12, lineHeight: 1.5, color: i === 0 ? 'rgba(255,255,255,0.6)' : '#64748b', fontFamily: "'DM Sans', sans-serif" }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          MISSION & VISION — Fixed images
          MISSION: Ironing / hands carefully pressing clothes = care, service, craft
          VISION:  India Gate at dusk = India, national scale, pride, ambition
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: CREAM, padding: '72px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: GREEN, fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", marginBottom: 10 }}>Purpose & Direction</p>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: BLUE_DARK, letterSpacing: '-0.03em' }}>Mission & Vision</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }} className="split-grid">

            {/* MISSION CARD */}
            <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease: EASE }}
              style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 8px 40px rgba(10,31,61,0.12)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: 250, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
                <img src={MISSION_IMG} alt="Caring for every garment — our mission"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(160deg, rgba(16,84,156,0.25) 0%, rgba(10,31,61,0.92) 100%)` }} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${GREEN}, ${GREEN_DK})` }} />
                <div style={{ position: 'absolute', top: 12, right: 18, fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: '5rem', color: 'rgba(255,255,255,0.07)', lineHeight: 1, userSelect: 'none' }}>M</div>
                <div style={{ position: 'absolute', top: 16, left: 16, display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(68,178,76,0.22)', border: '1px solid rgba(68,178,76,0.45)', borderRadius: 100, padding: '5px 12px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: GREEN_DK, display: 'inline-block' }} />
                  <span style={{ color: '#7dd880', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', fontFamily: "'DM Sans', sans-serif" }}>PURPOSE</span>
                </div>
                <div style={{ position: 'absolute', bottom: 22, left: 22, display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `linear-gradient(135deg, ${GREEN}, ${GREEN_DK})`, boxShadow: '0 4px 16px rgba(68,178,76,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Target size={26} color="#fff" strokeWidth={2} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 3 }}>Our Mission</p>
                    <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: '1.6rem', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>Why We Exist</h3>
                  </div>
                </div>
              </div>
              <div style={{ background: `linear-gradient(145deg, ${BLUE} 0%, ${BLUE_DARK} 100%)`, padding: '26px 26px 30px', flex: 1, display: 'flex', flexDirection: 'column', gap: 18 }}>
                <p style={{ 
  color: 'rgba(255,255,255,0.78)', 
  fontSize: '15px', 
  lineHeight: 1.85, 
  fontFamily: "'DM Sans', sans-serif" 
}}>
                  To lead the laundry & dry-cleaning sector with tech-driven, home-curated services & set new industry standards.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {['Tech-driven operations at every step', 'Home-curated, doorstep-delivered service', 'Setting new industry benchmarks in quality'].map(text => (
                    <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 11, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 11, padding: '10px 13px' }}>
                      <div style={{ width: 26, height: 26, borderRadius: '50%', flexShrink: 0, background: 'rgba(68,178,76,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CheckCircle2 size={13} color={GREEN} strokeWidth={2.5} />
                      </div>
                      <span style={{ color: 'rgba(255,255,255,0.84)', fontSize: 13, lineHeight: 1.5, fontFamily: "'DM Sans', sans-serif" }}>{text}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(68,178,76,0.15)', border: '1px solid rgba(68,178,76,0.3)', borderRadius: 100, padding: '8px 16px', alignSelf: 'flex-start', marginTop: 'auto' }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: GREEN, display: 'inline-block' }} />
                  <span style={{ color: '#7dd880', fontSize: 13, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>On a mission since 2019</span>
                </div>
              </div>
            </motion.div>

            {/* VISION CARD */}
            <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease: EASE, delay: 0.12 }}
              style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 8px 40px rgba(10,31,61,0.10)', display: 'flex', flexDirection: 'column', border: '1.5px solid #e8edf5' }}>
              <div style={{ height: 250, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
                <img src={VISION_IMG} alt="India Gate — our vision for India"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 50%', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(10,31,61,0.2) 0%, rgba(10,31,61,0.88) 100%)' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${GREEN}, ${GREEN_DK})` }} />
                <div style={{ position: 'absolute', top: 12, right: 18, fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: '5rem', color: 'rgba(255,255,255,0.09)', lineHeight: 1, userSelect: 'none' }}>V</div>
                <div style={{ position: 'absolute', top: 16, left: 16, display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.28)', borderRadius: 100, padding: '5px 12px', backdropFilter: 'blur(8px)' }}>
                  <span style={{ color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', fontFamily: "'DM Sans', sans-serif" }}>🚀 AMBITION 2029</span>
                </div>
                <div style={{ position: 'absolute', bottom: 22, left: 22, display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.35)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Eye size={26} color="#fff" strokeWidth={2} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 3 }}>Our Vision</p>
                    <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: '1.6rem', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>Where We're Going</h3>
                  </div>
                </div>
              </div>
              <div style={{ background: '#fff', padding: '26px 26px 30px', flex: 1, display: 'flex', flexDirection: 'column', gap: 18 }}>
                <p style={{ color: '#64748b', fontSize: 13, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6, fontStyle: 'italic' }}>Where Prime Laundry is headed by 2029.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {visionPoints.map((pt, i) => (
                    <motion.div key={pt} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.1 + i * 0.08, ease: EASE }}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: 11, background: i === 2 ? 'rgba(68,178,76,0.06)' : 'rgba(16,84,156,0.03)', border: i === 2 ? '1px solid rgba(68,178,76,0.25)' : '1px solid rgba(16,84,156,0.07)', borderRadius: 11, padding: '12px 13px' }}>
                      <div style={{ width: 26, height: 26, borderRadius: '50%', flexShrink: 0, background: i === 2 ? 'rgba(68,178,76,0.15)' : 'rgba(16,84,156,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CheckCircle2 size={13} color={i === 2 ? GREEN : BLUE} strokeWidth={2.5} />
                      </div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: i === 2 ? 700 : 500, color: i === 2 ? '#1a3a1a' : '#334155', fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5, margin: 0 }}>{pt}</p>
                        {i === 2 && <p style={{ fontSize: 11, color: GREEN, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, marginTop: 3, letterSpacing: '0.05em' }}>Target Year · 2029</p>}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 'auto' }}>
                  {[{ label: '500+', sub: 'Stores' }, { label: '5K+', sub: 'Jobs' }, { label: '500', sub: 'Entrepreneurs' }].map(s => (
                    <div key={s.label} style={{ flex: 1, minWidth: 80, background: CREAM, border: '1.5px solid #e8edf5', borderRadius: 14, padding: '12px', textAlign: 'center' }}>
                      <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: 22, color: BLUE_DARK, lineHeight: 1 }}>{s.label}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: '#94a3b8', marginTop: 4, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ color: GREEN, fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", marginBottom: 10 }}>Our Journey</p>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: BLUE_DARK, letterSpacing: '-0.03em' }}>Built for the Long Run</h2>
          </motion.div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, transform: 'translateX(-50%)', background: `linear-gradient(to bottom, ${GREEN} 0%, rgba(68,178,76,0.15) 100%)` }} className="timeline-line" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div key={m.year} initial={{ opacity: 0, x: isLeft ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
                    style={{ display: 'grid', gridTemplateColumns: '1fr 48px 1fr', alignItems: 'center', marginBottom: i < milestones.length - 1 ? 8 : 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 28 }}>
                      {isLeft ? <MilestoneCard m={m} align="right" /> : <YearPill year={m.year} done={m.done} />}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
                      <div style={{ width: 18, height: 18, borderRadius: '50%', background: m.done ? GREEN : '#e2e8f0', border: `3px solid ${m.done ? '#fff' : '#cbd5e1'}`, boxShadow: m.done ? '0 0 0 4px rgba(68,178,76,0.2)' : 'none' }} />
                    </div>
                    <div style={{ paddingLeft: 28 }}>
                      {isLeft ? <YearPill year={m.year} done={m.done} /> : <MilestoneCard m={m} align="left" />}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          WHY MODERN LAUNDRY — Redesigned
          Each card now has: category tag, data stat chip on image,
          a footer insight line, and hover lift effect
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: CREAM, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ color: GREEN, fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", marginBottom: 10 }}>The Opportunity</p>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: BLUE_DARK, letterSpacing: '-0.03em', marginBottom: 12 }}>Why Modern Laundry Services Matter</h2>
            <p style={{ color: '#64748b', fontSize: 15, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, maxWidth: 520, margin: '0 auto' }}>India's laundry industry is at an inflection point. Here's what's driving the revolution.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {whyPoints.map(({ title, tag, desc, img, emoji, stat, footer }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 20px 52px rgba(10,31,61,0.16)' }}
                style={{ borderRadius: 22, overflow: 'hidden', background: '#fff', boxShadow: '0 4px 28px rgba(10,31,61,0.09)', border: '1px solid rgba(10,31,61,0.07)', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.3s' }}>

                {/* Image zone */}
                <div style={{ height: 210, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
                  <img src={img} alt={title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.06)'}
                    onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,31,61,0.72) 0%, rgba(10,31,61,0.08) 55%)' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${GREEN}, ${GREEN_DK})` }} />
                  {/* Number watermark */}
                  <div style={{ position: 'absolute', top: 14, right: 14, fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: '3.2rem', color: 'rgba(255,255,255,0.1)', lineHeight: 1, userSelect: 'none' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  {/* Emoji chip bottom-left */}
                  <div style={{ position: 'absolute', bottom: 14, left: 14, width: 46, height: 46, borderRadius: 13, background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>
                    {emoji}
                  </div>
                  {/* Data stat chip bottom-right */}
                  <div style={{ position: 'absolute', bottom: 14, right: 14, background: 'rgba(68,178,76,0.88)', backdropFilter: 'blur(8px)', borderRadius: 10, padding: '6px 12px' }}>
                    <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: 16, color: '#fff', lineHeight: 1 }}>{stat.val}</div>
                    <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.8)', fontWeight: 600, letterSpacing: '0.08em', marginTop: 2 }}>{stat.lbl}</div>
                  </div>
                </div>

                {/* Text body */}
                <div style={{ padding: '22px 22px 26px', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {/* Category tag */}
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(68,178,76,0.1)', border: '1px solid rgba(68,178,76,0.25)', borderRadius: 100, padding: '4px 12px', width: 'fit-content' }}>
                    <span style={{ color: GREEN_DK, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif" }}>{tag}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: '1.2rem', color: BLUE_DARK, letterSpacing: '-0.01em', lineHeight: 1.25 }}>{title}</h3>
                  <p style={{ color: '#64748b', fontSize: 13.5, lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", flex: 1 }}>{desc}</p>
                  {/* Divider + footer insight */}
                  <div style={{ height: 1, background: '#f0f4f8', margin: '4px 0' }} />
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 12, color: '#94a3b8', fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>{footer}</span>
                    <span style={{ fontSize: 12, color: BLUE, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
                      
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DARK} 100%)`, padding: '72px 32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.04, backgroundImage: `radial-gradient(circle, ${GREEN} 1px, transparent 1px)`, backgroundSize: '36px 36px' }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(68,178,76,0.07) 0%, transparent 70%)' }} />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: '#fff', letterSpacing: '-0.03em', marginBottom: 14 }}>
            Join Prime Laundry.<br />Become an Entrepreneur.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: "'DM Sans', sans-serif", fontSize: 16, margin: '0 auto 32px', maxWidth: 460 }}>Your clean start to a profitable future.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a href="/franchise" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', borderRadius: 100, background: `linear-gradient(135deg, ${GREEN}, ${GREEN_DK})`, color: '#fff', textDecoration: 'none', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15, boxShadow: '0 4px 24px rgba(68,178,76,0.4)' }}>
              Apply for Franchise <ArrowRight size={16} />
            </motion.a>
            <motion.a href="/pricing" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', borderRadius: 100, background: 'transparent', color: 'rgba(255,255,255,0.8)', border: '1.5px solid rgba(255,255,255,0.25)', textDecoration: 'none', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15 }}>
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

function MilestoneCard({ m, align }: { m: { year: string; title: string; text: string; done: boolean }; align: 'left' | 'right' }) {
  return (
    <div style={{ background: '#fff', border: `1.5px solid ${m.done ? 'rgba(68,178,76,0.2)' : '#e8edf5'}`, borderRadius: 16, padding: '18px 22px', maxWidth: 300, width: '100%', boxShadow: m.done ? '0 4px 20px rgba(68,178,76,0.08)' : '0 2px 10px rgba(0,0,0,0.04)', textAlign: align, position: 'relative', opacity: m.done ? 1 : 0.6 }}>
      {m.done && <div style={{ position: 'absolute', top: -10, ...(align === 'right' ? { right: 16 } : { left: 16 }), background: '#44b24c', borderRadius: 100, padding: '2px 10px', fontSize: 10, fontWeight: 700, color: '#fff', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase' }}>✓ Done</div>}
      <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: 17, color: '#0a3d75', marginBottom: 3, letterSpacing: '-0.01em' }}>{m.title}</p>
      <p style={{ fontSize: 13, color: '#64748b', fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}>{m.text}</p>
    </div>
  );
}

function YearPill({ year, done }: { year: string; done: boolean }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '8px 18px', borderRadius: 100, background: done ? 'linear-gradient(135deg,#44b24c,#339940)' : 'rgba(16,84,156,0.06)', border: done ? 'none' : '1.5px dashed #cbd5e1', fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: 16, color: done ? '#fff' : '#10549c', letterSpacing: '-0.01em', boxShadow: done ? '0 3px 12px rgba(68,178,76,0.25)' : 'none', opacity: done ? 1 : 0.55 }}>
      {year}
    </div>
  );
}