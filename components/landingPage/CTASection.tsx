'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

/* ── Brand tokens ── */
const GREEN = '#44b24c';
const GDARK = '#2d9e36';
const EASE  = [0.22, 1, 0.36, 1] as const;

const WA_NUM = '919131979530';
const WA_MSG = encodeURIComponent(
  "Hi Prime Laundry! 👋\n\nI'd like to book a laundry pickup.\n\nName: \nAddress: \nPreferred time: \n\nPlease confirm."
);
const BOOK_URL = `https://wa.me/${WA_NUM}?text=${WA_MSG}`;

export default function CTASection() {
  return (
    <section style={{
      /* ✅ Same gradient as VisionMissionSection & PricingSection dark half */
      background: `
  radial-gradient(circle at top right, rgba(68,178,76,0.12) 0%, transparent 65%),
  radial-gradient(circle at bottom left, rgba(16,84,156,0.3) 0%, transparent 65%),
  linear-gradient(145deg, #10549c 0%, #0a3d75 45%, #072d57 100%)
`,
      padding: '96px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.04,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />
      {/* Green glow orb — centre */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(68,178,76,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 860, margin: '0 auto', padding: '0 32px',
        textAlign: 'center', position: 'relative', zIndex: 2,
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {/* Pill badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 18px', borderRadius: 100, marginBottom: 28,
            background: 'rgba(68,178,76,0.12)',
            border: '1px solid rgba(68,178,76,0.3)',
          }}>
            <Sparkles size={13} color={GREEN} />
            <span style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 11,
              fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
              color: GREEN,
            }}>Book Your First Pickup Today</span>
          </div>

          {/* Heading */}
          <h2 style={{
            fontFamily: "'Fraunces', serif", fontWeight: 900,
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: '#fff',
            letterSpacing: '-0.035em', lineHeight: 1.05, marginBottom: 20,
          }}>
            Ready for Perfectly{' '}
            <em style={{
              fontStyle: 'italic', fontWeight: 400,
              background: 'linear-gradient(135deg, #44b24c 0%, #82e888 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Clean Clothes?</em>
          </h2>

          {/* Subtext */}
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.75,
            color: 'rgba(255,255,255,0.55)', maxWidth: 500, margin: '0 auto 40px',
          }}>
            Book via WhatsApp in 30 seconds. Pickup confirmed.
            First order gets{' '}
            <span style={{ color: GREEN, fontWeight: 700 }}>20% off</span> — no code needed.
          </p>

          {/* CTA button */}
          <motion.a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06, boxShadow: '0 16px 48px rgba(68,178,76,0.55)' }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '16px 36px', borderRadius: 100,
              background: `linear-gradient(135deg, ${GREEN} 0%, ${GDARK} 100%)`,
              color: '#fff', textDecoration: 'none',
              fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16,
              letterSpacing: '0.01em',
              boxShadow: '0 8px 32px rgba(68,178,76,0.42)',
            }}
          >
            Book a Pickup Now
            <ArrowRight size={18} />
          </motion.a>

          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 12,
            color: 'rgba(255,255,255,0.28)', marginTop: 16,
          }}>
            Free pickup · No commitment · Instant WhatsApp confirmation
          </p>
        </motion.div>
      </div>
    </section>
  );
}