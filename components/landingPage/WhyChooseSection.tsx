'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Timer, Leaf, Award } from 'lucide-react';

/* ── Brand tokens ── */
const GREEN = '#44b24c';
const EASE  = [0.22, 1, 0.36, 1] as const;

const features = [
  { icon: Truck,  title: 'Free Pickup & Drop',       desc: 'Complimentary doorstep pickup and delivery on every order — no minimum spend required.' },
  { icon: Timer,  title: '24-Hour Express Service',   desc: 'Need it fast? Our express track delivers freshly cleaned clothes within 24 hours.' },
  { icon: Leaf,   title: 'Organic & Anti-Bacterial',  desc: 'All washes use certified organic, anti-bacterial detergents — safe for children and sensitive skin.' },
  { icon: Award,  title: 'Professional Fabric Care',  desc: 'Trained specialists handle every fabric type — silk, wool, cashmere, denim, and more.' },
];

export default function WhyChooseSection() {
  return (
    <section style={{
      /* ✅ Same gradient as VisionMissionSection & PricingSection dark half */
      background: `
  radial-gradient(circle at top right, rgba(68,178,76,0.12) 0%, transparent 65%),
  radial-gradient(circle at bottom left, rgba(16,84,156,0.3) 0%, transparent 65%),
  linear-gradient(145deg, #10549c 0%, #0a3d75 45%, #072d57 100%)
`,
      padding: '88px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Dot-grid texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.04,
        backgroundImage: 'radial-gradient(circle, #44b24c 1px, transparent 1px)',
        backgroundSize: '36px 36px',
      }} />
      {/* Green glow bottom-left */}
      <div style={{
        position: 'absolute', bottom: -200, left: -120,
        width: 540, height: 540, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(68,178,76,0.10) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 2 }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ marginBottom: 56 }}
        >
          <span style={{
            color: GREEN, fontSize: 11, fontWeight: 700,
            letterSpacing: '0.25em', textTransform: 'uppercase',
            fontFamily: "'DM Sans', sans-serif", display: 'block', marginBottom: 12,
          }}>Our Difference</span>
          <h2 style={{
            fontFamily: "'Fraunces', serif", fontWeight: 900,
            fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff',
            letterSpacing: '-0.03em', lineHeight: 1.1,
          }}>
            Why{' '}
            <em style={{
              fontStyle: 'italic', fontWeight: 400,
              background: 'linear-gradient(135deg, #44b24c 0%, #82e888 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>PrimeLaundry?</em>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 16,
        }}>
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: EASE }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1.5px solid rgba(255,255,255,0.08)',
                borderRadius: 20,
                padding: '24px 22px',
                display: 'flex', gap: 18, alignItems: 'flex-start',
                transition: 'border-color 0.25s ease',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(68,178,76,0.35)'}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)'}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                background: 'rgba(68,178,76,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <feature.icon size={22} color={GREEN} />
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                  fontSize: 15, color: '#fff', marginBottom: 8,
                }}>{feature.title}</h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)',
                }}>{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}