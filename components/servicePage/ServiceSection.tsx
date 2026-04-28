'use client';

import { motion } from 'framer-motion';
import {
  Wind, Shirt, Zap, Flame, Sparkles, Package,
  ShoppingBag, Footprints, Home, ArrowRight,
  CheckCircle2
} from 'lucide-react';

const BLUE      = '#10549c';
const BLUE_DARK = '#0a3d75';
const GREEN     = '#44b24c';
const CREAM     = '#f7f5f0';

const services = [
  { icon: Shirt,       title: 'Dry Cleaning',     desc: 'Expert dry cleaning for delicate fabrics, suits, sarees & ethnic wear using premium in-house chemicals.',         tag: 'Most Popular' },
  { icon: Home,        title: 'Curtain Cleaning',  desc: 'Professional cleaning for all curtain types — sheer, blackout, and heavy drapes — with care for fabric shape.',    tag: null           },
  { icon: Zap,         title: 'Express Delivery',  desc: '24-hour turnaround for urgent orders. Same-day pickup and delivery available in select areas.',                     tag: '24hr Turnaround'},
  { icon: Wind,        title: 'Laundry Cleaning',  desc: 'Wash & fold, wash & iron for everyday garments. Modern washers ensuring hygiene, freshness & fabric care.',        tag: null           },
  { icon: Flame,       title: 'Steam Ironing',     desc: 'Professional steam ironing that removes stubborn creases while preserving fabric quality and texture.',             tag: null           },
  { icon: Sparkles,    title: 'Toy Cleaning',      desc: 'Safe, chemical-free deep cleaning for soft toys and plush items. Hygienic and child-safe.',                        tag: 'Unique Service'},
  { icon: Package,     title: 'Carpet Cleaning',   desc: 'Deep extraction cleaning for carpets & rugs. Removes embedded dirt, allergens and odours effectively.',            tag: null           },
  { icon: ShoppingBag, title: 'Bag Cleaning',      desc: 'Specialised cleaning for leather bags, tote bags, backpacks and handbags with material-appropriate products.',     tag: null           },
  { icon: Footprints,  title: 'Shoe Cleaning',     desc: 'Expert restoration and deep cleaning for all shoe types — sneakers, leather shoes, heels and formal wear.',        tag: null           },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay: i * 0.07 } }),
};

export default function ServiceSection() {
  return (
    <main style={{ background: '#fff', minHeight: '100vh', paddingTop: 80 }}>

      {/* ── HERO STRIP ───────────────────────────────────────────────── */}
      <section style={{
        background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DARK} 100%)`,
        padding: '72px 32px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative lines */}
        <svg style={{ position: 'absolute', top: 0, right: 0, opacity: 0.06 }} width="360" height="360" viewBox="0 0 360 360">
          {Array.from({ length: 7 }, (_, i) => (
            <line key={i} x1="360" y1={i * 55} x2={i * 55} y2="0" stroke="white" strokeWidth="1" />
          ))}
        </svg>

        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(68,178,76,0.15)', border: '1px solid rgba(68,178,76,0.4)',
              borderRadius: 100, padding: '6px 16px', marginBottom: 20 }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: GREEN }} />
            <span style={{ color: '#7dd880', fontSize: 12, fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Clean. Fresh. Hassle-free
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 800,
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: '#fff',
              letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}
          >
            Our <span style={{ color: GREEN }}>Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            style={{ color: 'rgba(255,255,255,0.65)', fontSize: 17,
              fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, maxWidth: 520 }}
          >
            From everyday laundry to specialised dry cleaning — 9 services designed
            to keep every fabric in your life looking its best.
          </motion.p>
        </div>
      </section>

      {/* Wave divider */}
      <div style={{ background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DARK} 100%)`, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: 48, display: 'block' }}>
          <path d="M0 48 L0 24 Q360 0 720 24 Q1080 48 1440 24 L1440 48 Z" fill="#fff" />
        </svg>
      </div>

      {/* ── SERVICE CARDS ─────────────────────────────────────────────── */}
      <section style={{ padding: '64px 32px 80px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(16,84,156,0.12)' }}
                style={{
                  background: '#fff',
                  border: '1.5px solid #e8edf5',
                  borderRadius: 20,
                  padding: '28px 24px',
                  position: 'relative',
                  cursor: 'default',
                  transition: 'box-shadow 0.3s, transform 0.3s',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                }}
              >
                {/* Tag */}
                {s.tag && (
                  <div style={{
                    position: 'absolute', top: 20, right: 20,
                    background: i === 0 ? GREEN : 'rgba(16,84,156,0.08)',
                    color: i === 0 ? '#fff' : BLUE,
                    fontSize: 11, fontWeight: 700,
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                    borderRadius: 100, padding: '4px 10px',
                  }}>
                    {s.tag}
                  </div>
                )}

                {/* Icon */}
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: 'rgba(16,84,156,0.07)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 18,
                }}>
                  <Icon size={24} color={BLUE} strokeWidth={1.8} />
                </div>

                <h3 style={{
                  fontFamily: "'Fraunces', serif", fontWeight: 700,
                  fontSize: 20, color: BLUE_DARK,
                  marginBottom: 10, letterSpacing: '-0.01em',
                }}>{s.title}</h3>

                <p style={{
                  color: '#64748b', fontSize: 14, lineHeight: 1.75,
                  fontFamily: "'DM Sans', sans-serif",
                }}>{s.desc}</p>

                {/* Bottom accent */}
                <div style={{
                  marginTop: 20, paddingTop: 16,
                  borderTop: '1px solid #f0f4f8',
                  display: 'flex', alignItems: 'center', gap: 6,
                  color: GREEN, fontSize: 13, fontWeight: 600,
                  fontFamily: "'DM Sans', sans-serif",
                  cursor: 'pointer',
                }}>
                  Book this service <ArrowRight size={14} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── TECH STRIP ───────────────────────────────────────────────── */}
      <section style={{ background: CREAM, padding: '64px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}
          className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}
          >
            <p style={{ color: GREEN, fontSize: 12, fontWeight: 700, letterSpacing: '0.2em',
              textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", marginBottom: 12 }}>
              Why Prime Laundry?
            </p>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: BLUE_DARK,
              letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 20 }}>
              Powered by In-House<br />Premium Chemicals
            </h2>
            <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.8,
              fontFamily: "'DM Sans', sans-serif", marginBottom: 24 }}>
              Unlike competitors who use off-the-shelf solvents, Prime Laundry manufactures
              its own premium cleaning chemicals in-house — ensuring unmatched hygiene,
              fabric care, and consistent quality across every garment.
            </p>
            {['Eco-friendly & biodegradable formulas', 'Gentle on silk, wool & cashmere', 'No toxic chemical residues', 'GST-compliant paperless invoicing'].map((pt) => (
              <div key={pt} style={{ display: 'flex', alignItems: 'center', gap: 10,
                marginBottom: 10, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#334155' }}>
                <CheckCircle2 size={16} color={GREEN} strokeWidth={2.5} />
                {pt}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
          >
            {[
              { val: '9+',   label: 'Service Types'    },
              { val: '2000+', label: 'Pcs/Day Capacity' },
              { val: '100%', label: 'In-house Chemicals'},
              { val: '24hr', label: 'Express Option'   },
            ].map(({ val, label }) => (
              <div key={label} style={{
                background: '#fff', borderRadius: 18, padding: '28px 20px',
                border: '1.5px solid #e8edf5',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                textAlign: 'center',
              }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 800,
                  fontSize: 36, color: BLUE, letterSpacing: '-0.03em', marginBottom: 6 }}>
                  {val}
                </div>
                <div style={{ color: '#64748b', fontSize: 13,
                  fontFamily: "'DM Sans', sans-serif" }}>
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section style={{
        background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DARK} 100%)`,
        padding: '64px 32px',
        textAlign: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 800,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#fff',
            letterSpacing: '-0.03em', marginBottom: 14 }}>
            Ready to experience the difference?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: "'DM Sans', sans-serif",
            fontSize: 16, marginBottom: 32 }}>
            Book your first order or enquire about a franchise.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
              style={{ padding: '13px 28px', borderRadius: 100,
                background: `linear-gradient(135deg, ${GREEN}, #2d9e36)`,
                color: '#fff', textDecoration: 'none',
                fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15,
                display: 'inline-flex', alignItems: 'center', gap: 8,
                boxShadow: '0 4px 20px rgba(68,178,76,0.4)' }}>
              Get Franchise <ArrowRight size={16} />
            </motion.a>
            <motion.a href="/" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              style={{ padding: '13px 28px', borderRadius: 100,
                background: 'transparent', color: 'rgba(255,255,255,0.8)',
                border: '1.5px solid rgba(255,255,255,0.25)', textDecoration: 'none',
                fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15 }}>
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