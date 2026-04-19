'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Users, Shield } from 'lucide-react';

const stats = [
  { icon: TrendingUp, value: '₹8–12L',  label: 'Monthly Revenue Potential' },
  { icon: Users,      value: '50+',     label: 'Active Franchise Partners'  },
  { icon: Shield,     value: '100%',    label: 'Brand & Ops Support'        },
  { icon: Star,       value: '4.9★',    label: 'Franchisee Satisfaction'    },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated floating bubbles on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
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
      bubbles.forEach((b) => {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,255,255,${b.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        b.x += b.vx;
        b.y += b.vy;
        if (b.y + b.r < 0) { b.y = canvas.height + b.r; b.x = Math.random() * canvas.width; }
        if (b.x < -b.r)    b.x = canvas.width + b.r;
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
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(145deg, #10549c 0%, #0a3d75 45%, #072d57 100%)',
      }}
    >
      {/* Animated bubble canvas */}
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      />

      {/* Diagonal green accent band */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', right: -200, top: -100,
          width: 700, height: 700,
          background: 'radial-gradient(circle, rgba(68,178,76,0.12) 0%, transparent 65%)',
          borderRadius: '50%',
        }}/>
        <div style={{
          position: 'absolute', left: -150, bottom: -100,
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(16,84,156,0.3) 0%, transparent 65%)',
          borderRadius: '50%',
        }}/>
        {/* Top right decorative line pattern */}
        <svg style={{ position: 'absolute', top: 0, right: 0, opacity: 0.06 }} width="400" height="400" viewBox="0 0 400 400">
          {Array.from({ length: 8 }, (_, i) => (
            <line key={i} x1={400} y1={i * 55} x2={i * 55} y2={0} stroke="white" strokeWidth="1"/>
          ))}
        </svg>
      </div>

      {/* Main content */}
      <div style={{
        position: 'relative', zIndex: 10,
        maxWidth: 1280, margin: '0 auto',
        padding: '120px 32px 80px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 60, alignItems: 'center',
      }}
      className="hero-grid"
      >
        {/* LEFT — Text content */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(68,178,76,0.15)',
              border: '1px solid rgba(68,178,76,0.4)',
              borderRadius: 100, padding: '6px 16px',
              marginBottom: 24,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#44b24c', flexShrink: 0 }}/>
            <span style={{ color: '#7dd880', fontSize: 13, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: '0.04em' }}>
              NOW ACCEPTING FRANCHISE APPLICATIONS
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 800,
              fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
              color: '#ffffff',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              marginBottom: 24,
            }}
          >
            Own India's{' '}
            <span style={{
              position: 'relative',
              display: 'inline-block',
              color: '#44b24c',
            }}>
              Fastest
              <svg style={{ position: 'absolute', bottom: -4, left: 0, width: '100%' }} viewBox="0 0 160 8" preserveAspectRatio="none" height="6">
                <path d="M2 6 Q80 2 158 6" stroke="#44b24c" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6"/>
              </svg>
            </span>
            {' '}Growing<br />Laundry Franchise
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 17, lineHeight: 1.75,
              color: 'rgba(255,255,255,0.65)',
              maxWidth: 480, marginBottom: 40,
            }}
          >
            Join the PrimeLaundry network and build a profitable business with full
            brand support, trained staff, CRM software, and a proven system that works.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
            style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(68,178,76,0.55)' }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollTo('#contact')}
              style={{
                padding: '14px 32px', borderRadius: 100,
                background: 'linear-gradient(135deg, #44b24c 0%, #2d9e36 100%)',
                color: '#fff', border: 'none', cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700, fontSize: 15,
                display: 'flex', alignItems: 'center', gap: 8,
                boxShadow: '0 4px 24px rgba(68,178,76,0.4)',
                letterSpacing: '0.01em',
              }}
            >
              Apply for Franchise <ArrowRight size={17}/>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollTo('#how-it-works')}
              style={{
                padding: '14px 28px', borderRadius: 100,
                background: 'transparent',
                color: 'rgba(255,255,255,0.85)',
                border: '1.5px solid rgba(255,255,255,0.25)',
                cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600, fontSize: 15,
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.55)';
                (e.currentTarget as HTMLButtonElement).style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.25)';
                (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.85)';
              }}
            >
              See How It Works
            </motion.button>
          </motion.div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 36 }}
          >
            <div style={{ display: 'flex' }}>
              {['#44b24c','#2d9e36','#10549c','#0a3d75'].map((c, i) => (
                <div key={i} style={{
                  width: 32, height: 32, borderRadius: '50%',
                  background: c, border: '2px solid rgba(255,255,255,0.3)',
                  marginLeft: i === 0 ? 0 : -10,
                }}/>
              ))}
            </div>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', fontFamily: "'DM Sans', sans-serif" }}>
              Trusted by <strong style={{ color: 'rgba(255,255,255,0.85)' }}>50+ franchise partners</strong> across India
            </span>
          </motion.div>
        </div>

        {/* RIGHT — Stats card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 24,
            padding: 40,
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Card header */}
          <div style={{ marginBottom: 32 }}>
            <p style={{
              fontSize: 12, fontWeight: 700, letterSpacing: '0.2em',
              color: '#44b24c', textTransform: 'uppercase',
              fontFamily: "'DM Sans', sans-serif", marginBottom: 8,
            }}>Franchise Opportunity</p>
            <h2 style={{
              fontFamily: "'Fraunces', serif", fontWeight: 700,
              fontSize: 24, color: '#fff', letterSpacing: '-0.02em',
            }}>
              Why Prime Laundry?
            </h2>
          </div>

          {/* Stats grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 16, padding: '20px 16px',
                }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: 'rgba(68,178,76,0.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 12,
                }}>
                  <Icon size={18} color="#44b24c"/>
                </div>
                <div style={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 700, fontSize: 22,
                  color: '#fff', marginBottom: 4,
                }}>{value}</div>
                <div style={{
                  fontSize: 12, color: 'rgba(255,255,255,0.5)',
                  fontFamily: "'DM Sans', sans-serif", lineHeight: 1.4,
                }}>{label}</div>
              </motion.div>
            ))}
          </div>

          {/* Investment range */}
          <div style={{
            background: 'rgba(68,178,76,0.1)',
            border: '1px solid rgba(68,178,76,0.25)',
            borderRadius: 14, padding: '16px 20px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <div>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontFamily: "'DM Sans', sans-serif", marginBottom: 4 }}>
                Investment Range
              </p>
              <p style={{ fontSize: 20, fontWeight: 700, color: '#fff', fontFamily: "'Fraunces', serif" }}>
                ₹8L – ₹15L
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo('#contact')}
              style={{
                padding: '10px 20px', borderRadius: 100,
                background: '#44b24c', color: '#fff',
                border: 'none', cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700, fontSize: 13,
              }}
            >
              Get Details
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave divider */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: 60 }}>
          <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#ffffff"/>
        </svg>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: 100px !important;
          }
        }
      `}</style>
    </section>
  );
}