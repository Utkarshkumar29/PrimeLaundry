'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gem, Leaf, Cpu, HeartHandshake, Quote } from 'lucide-react';

const BLUE      = '#10549c';
const BLUE_DARK = '#0a3d75';
const GREEN     = '#44b24c';
const CREAM     = '#f7f5f0';
const EASE = [0.22, 1, 0.36, 1] as const;

const pillars = [
  { icon: Gem,           title: 'Quality First',       desc: 'Every garment treated with precision and care'                             },
  { icon: Leaf,          title: 'Eco Conscious',        desc: 'Organic, anti-bacterial detergents — safe for you and the planet'          },
  { icon: Cpu,           title: 'Tech Enabled',         desc: 'App-based scheduling, real-time tracking, and digital invoicing'           },
  { icon: HeartHandshake,title: 'Customer Obsessed',    desc: '24/7 support and a 100% satisfaction guarantee on every order'             },
];

const storyCards = [
  {
    quote: 'PrimeLaundry was founded with a singular mission: to make professional, hotel-quality fabric care accessible to every Indian household.',
    highlight: 'Our Mission',
    color: BLUE,
  },
  {
    quote: 'We grew up watching our mothers spend hours on laundry. We decided that story needed a better ending — and built one.',
    highlight: 'Our Story',
    color: GREEN,
  },
  {
    quote: 'Since 2019, we have served over one lakh families across India. Every garment is tracked, treated, and returned with luxury precision.',
    highlight: 'Our Impact',
    color: BLUE_DARK,
  },
];

export default function AboutSection() {
  return (
    <section id="about" style={{ background: '#fff', padding: '80px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        {/* ── Section label + heading ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}>
          <span style={{
            color: GREEN, fontSize: 11, fontWeight: 700,
            letterSpacing: '0.25em', textTransform: 'uppercase',
            fontFamily: "'DM Sans', sans-serif", display: 'block', marginBottom: 12,
          }}>Who We Are</span>
          <h2 style={{
            fontFamily: "'Fraunces', serif", fontWeight: 900,
            fontSize: 'clamp(2rem, 4vw, 3rem)', color: BLUE_DARK,
            letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: 600,
          }}>
            More Than Just Laundry —{' '}
            <em style={{ fontWeight: 400, color: BLUE }}>We're a Promise</em>
          </h2>
        </motion.div>

        {/* ── Story cards row ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
          marginBottom: 72,
        }}>
          {storyCards.map((card, i) => (
            <motion.div key={card.highlight}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: EASE, delay: i * 0.1 }}
              style={{
                borderRadius: 24, padding: '32px 28px',
                background: i === 0
                  ? `linear-gradient(145deg, ${BLUE} 0%, ${BLUE_DARK} 100%)`
                  : i === 1
                  ? '#fff'
                  : CREAM,
                border: i === 1
                  ? `2px solid ${GREEN}`
                  : i === 2
                  ? '1.5px solid #e8edf5'
                  : 'none',
                boxShadow: i === 0
                  ? '0 20px 50px rgba(10,61,117,0.2)'
                  : i === 1
                  ? '0 8px 32px rgba(68,178,76,0.15)'
                  : '0 4px 20px rgba(0,0,0,0.05)',
                position: 'relative',
                overflow: 'hidden',
              }}>

              {/* Decorative quote icon */}
              <Quote
                size={48}
                style={{
                  position: 'absolute', bottom: -8, right: 12,
                  color: i === 0 ? 'rgba(255,255,255,0.06)' : 'rgba(16,84,156,0.07)',
                }}
              />

              {/* Highlight badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '4px 12px', borderRadius: 100, marginBottom: 20,
                background: i === 0
                  ? 'rgba(68,178,76,0.2)'
                  : i === 1
                  ? 'rgba(68,178,76,0.1)'
                  : 'rgba(16,84,156,0.08)',
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
                  background: i === 0 ? GREEN : i === 1 ? GREEN : BLUE,
                }} />
                <span style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 10,
                  fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: i === 0 ? '#86e88b' : i === 1 ? GREEN : BLUE,
                }}>{card.highlight}</span>
              </div>

              {/* Quote text */}
              <p style={{
                fontFamily: "'Fraunces', serif",
                fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                fontWeight: 500,
                lineHeight: 1.75,
                fontStyle: 'italic',
                color: i === 0 ? 'rgba(255,255,255,0.92)' : BLUE_DARK,
                position: 'relative', zIndex: 1,
              }}>
                "{card.quote}"
              </p>

              {/* Bottom accent line */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: 3,
                background: i === 0
                  ? `linear-gradient(90deg, ${GREEN}, transparent)`
                  : i === 1
                  ? `linear-gradient(90deg, ${GREEN}, transparent)`
                  : `linear-gradient(90deg, ${BLUE}, transparent)`,
              }} />
            </motion.div>
          ))}
        </div>

        {/* ── Bottom split: extra copy + pillars ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64, alignItems: 'start',
        }} className="about-split">

          {/* Left: extra paragraph */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, ease: EASE }}>

            <p style={{
              color: '#475569', fontSize: 16, lineHeight: 1.85,
              fontFamily: "'DM Sans', sans-serif", marginBottom: 20,
            }}>
              From a single shirt to a full household wardrobe, from delicate silks to everyday
              cottons — we treat every fabric as if it were our own. That is not a tagline.
              That is our culture.
            </p>
            <p style={{
              color: '#475569', fontSize: 16, lineHeight: 1.85,
              fontFamily: "'DM Sans', sans-serif",
            }}>
              Built on trust, quality, and genuine convenience — every garment that enters our
              care is tracked, treated, and returned with the precision of a luxury service.
            </p>

            {/* Est. badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 14,
              marginTop: 32, padding: '14px 22px', borderRadius: 16,
              background: CREAM, border: '1.5px solid #e8edf5',
            }}>
              <div style={{
                width: 4, height: 40, borderRadius: 2,
                background: `linear-gradient(to bottom, ${GREEN}, ${BLUE})`,
              }} />
              <div>
                <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 700,
                  fontSize: 15, color: BLUE_DARK, marginBottom: 2 }}>
                  Est. 2019
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12,
                  color: '#64748b' }}>Raipur, Chhattisgarh · India</p>
              </div>
            </div>
          </motion.div>

          {/* Right: pillars */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div key={pillar.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.55 }}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: 16,
                      padding: '18px 20px', borderRadius: 16,
                      border: '1.5px solid transparent',
                      transition: 'all 0.25s ease',
                      cursor: 'default',
                    }}
                    whileHover={{
                      background: '#f0f7ff',
                      borderColor: 'rgba(16,84,156,0.12)',
                    } as any}>
                    <div style={{
                      width: 46, height: 46, borderRadius: 14, flexShrink: 0,
                      background: 'rgba(68,178,76,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={21} color={GREEN} />
                    </div>
                    <div>
                      <h3 style={{
                        fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                        fontSize: 15, color: BLUE_DARK, marginBottom: 5,
                      }}>{pillar.title}</h3>
                      <p style={{
                        fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                        color: '#64748b', lineHeight: 1.65,
                      }}>{pillar.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-split { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}