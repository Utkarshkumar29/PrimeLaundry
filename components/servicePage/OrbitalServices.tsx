'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Wind, Shirt, Zap, Flame, Sparkles, Package,
  ShoppingBag, Footprints, Home, ArrowRight, X,
} from 'lucide-react';

const GREEN    = '#44b24c';
const GREEN_DK = '#339940';
const BLUE     = '#10549c';
const DARK     = '#0a1f3d';
const EASE     = [0.22, 1, 0.36, 1] as const;

const services = [
  { icon: Shirt,       title: 'Dry Cleaning',    desc: 'Expert dry cleaning for delicate fabrics, suits, sarees & ethnic wear using premium in-house chemicals.',    tag: 'Most Popular' },
  { icon: Home,        title: 'Curtain Cleaning', desc: 'Professional cleaning for all curtain types — sheer, blackout, and heavy drapes — with full fabric care.',    tag: null           },
  { icon: Zap,         title: 'Express Delivery', desc: '24-hour turnaround for urgent orders. Same-day pickup and delivery available in select areas.',                tag: '24hr'         },
  { icon: Wind,        title: 'Laundry Cleaning', desc: 'Wash & fold, wash & iron for everyday garments. Modern washers ensuring hygiene, freshness & fabric care.',   tag: null           },
  { icon: Flame,       title: 'Steam Ironing',    desc: 'Professional steam ironing that removes stubborn creases while preserving fabric quality and texture.',        tag: null           },
  { icon: Sparkles,    title: 'Toy Cleaning',     desc: 'Safe, chemical-free deep cleaning for soft toys and plush items. Hygienic and completely child-safe.',        tag: 'Unique'       },
  { icon: Package,     title: 'Carpet Cleaning',  desc: 'Deep extraction cleaning for carpets & rugs. Removes embedded dirt, allergens and odours effectively.',       tag: null           },
  { icon: ShoppingBag, title: 'Bag Cleaning',     desc: 'Specialised cleaning for leather bags, totes, backpacks and handbags with material-appropriate products.',    tag: null           },
  { icon: Footprints,  title: 'Shoe Cleaning',    desc: 'Expert restoration and deep cleaning for sneakers, leather shoes, heels and all formal footwear.',            tag: null           },
];

function getPos(i: number, total: number, r: number) {
  const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
  return { x: Math.cos(angle) * r, y: Math.sin(angle) * r };
}

export default function OrbitalServices() {
  const [active, setActive]   = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Sizes
  const [R,    setR]    = useState(300);  // orbit radius — bigger
  const [C,    setC]    = useState(200);  // center logo diameter
  const [N,    setN]    = useState(64);   // node size — bigger
  const [LTXT, setLTXT] = useState(140);  // label width

  useEffect(() => {
    setMounted(true);
    function resize() {
      const w = window.innerWidth;
      if (w < 400)       { setR(120); setC(88);  setN(38); setLTXT(76);  }
      else if (w < 560)  { setR(160); setC(110); setN(46); setLTXT(92);  }
      else if (w < 760)  { setR(210); setC(150); setN(54); setLTXT(110); }
      else if (w < 1024) { setR(255); setC(180); setN(58); setLTXT(125); }
      else               { setR(300); setC(210); setN(64); setLTXT(140); }
    }
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  // Canvas size: enough to fit orbit + labels
  const CANVAS = (R + N / 2 + LTXT + 20) * 2;

  // Draw orbit rings on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = CANVAS * dpr;
    canvas.height = CANVAS * dpr;
    canvas.style.width  = `${CANVAS}px`;
    canvas.style.height = `${CANVAS}px`;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, CANVAS, CANVAS);

    const cx = CANVAS / 2, cy = CANVAS / 2;

    // Outer subtle halo
    ctx.beginPath();
    ctx.arc(cx, cy, R + N / 2 + 10, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(68,178,76,0.05)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Main orbit — SOLID single continuous line (not dashed)
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(68,178,76,0.4)';
    ctx.lineWidth = 2;
    ctx.setLineDash([]);
    ctx.stroke();

    // Inner ring (decorative)
    ctx.beginPath();
    ctx.arc(cx, cy, R * 0.42, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(16,84,156,0.08)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }, [CANVAS, R, N]);

  if (!mounted) return null;

  return (
    <section id="services" style={{
      background: '#ffffff',
      padding: '80px 16px 64px',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}
        style={{ textAlign: 'center', marginBottom: 32 }}
      >
        <p style={{
          color: GREEN, fontSize: 11, fontWeight: 700,
          letterSpacing: '0.25em', textTransform: 'uppercase',
          fontFamily: "'DM Sans', sans-serif", marginBottom: 10,
        }}>What We Offer</p>
        <h2 style={{
          fontFamily: "'Fraunces', serif", fontWeight: 900,
          fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: DARK,
          letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 8,
        }}>
          9 Services,{' '}
          <em style={{ color: GREEN, fontStyle: 'italic' }}>One Brand</em>
        </h2>
        <p style={{ color: '#94a3b8', fontFamily: "'DM Sans', sans-serif", fontSize: 14 }}>
          Tap any service to explore
        </p>
      </motion.div>

      {/* Orbital diagram */}
      <div style={{ position: 'relative', width: CANVAS, height: CANVAS, maxWidth: '100vw' }}>

        {/* Canvas: orbit rings */}
        <canvas ref={canvasRef}
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }} />

        {/* SVG: connector lines from center to each node — solid, single */}
        <svg
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}
          width={CANVAS} height={CANVAS}>
          {services.map((_, i) => {
            const { x, y } = getPos(i, services.length, R);
            const cx = CANVAS / 2;
            const isAct = active === i;
            // Line from edge of center logo to orbit point
            const logoR = C / 2 + 6;
            const dist  = Math.sqrt(x * x + y * y);
            const ux    = x / dist, uy = y / dist;
            return (
              <line key={i}
                x1={cx + ux * logoR}
                y1={cx + uy * logoR}
                x2={cx + x}
                y2={cx + y}
                stroke={isAct ? GREEN : 'rgba(68,178,76,0.25)'}
                strokeWidth={isAct ? 2.5 : 1.5}
                style={{ transition: 'all 0.35s ease' }}
              />
            );
          })}
        </svg>

        {/* CENTER: Real Prime Laundry logo — no border, natural shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{
            position: 'absolute',
            top:  '50%', left: '50%',
            marginTop:  -(C * 0.375),
            marginLeft: -(C / 2),
            width: C,
            height: C * 0.75,
            zIndex: 5,
          }}
        >
          <Image
            src="/logo.webp"
            alt="Prime Laundry"
            fill
            style={{
              objectFit: 'contain',
              // multiply blends the black background away on white — logo colours show perfectly
              mixBlendMode: 'multiply',
            }}
            priority
          />
        </motion.div>

        {/* 9 service nodes + labels */}
        {services.map((svc, i) => {
          const { x, y } = getPos(i, services.length, R);
          const Icon  = svc.icon;
          const isAct = active === i;
          const nx = CANVAS / 2 + x;
          const ny = CANVAS / 2 + y;
          const isLeft  = x < -R * 0.2;
          const isRight = x >  R * 0.2;
          const GAP = N / 2 + 10;

          let labelStyle: React.CSSProperties = {
            position: 'absolute', zIndex: 7,
            pointerEvents: 'none', width: LTXT, lineHeight: 1.3,
          };
          if (isLeft) {
            labelStyle = { ...labelStyle,
              right: CANVAS - (nx - N / 2 - GAP),
              top: ny, transform: 'translateY(-50%)',
              textAlign: 'right' };
          } else if (isRight) {
            labelStyle = { ...labelStyle,
              left: nx + N / 2 + GAP,
              top: ny, transform: 'translateY(-50%)',
              textAlign: 'left' };
          } else if (y < 0) {
            labelStyle = { ...labelStyle,
              left: nx, bottom: CANVAS - (ny - N / 2 - GAP),
              transform: 'translateX(-50%)',
              textAlign: 'center', width: LTXT * 1.2 };
          } else {
            labelStyle = { ...labelStyle,
              left: nx, top: ny + N / 2 + GAP,
              transform: 'translateX(-50%)',
              textAlign: 'center', width: LTXT * 1.2 };
          }

          return (
            <motion.div key={svc.title}
              style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: EASE, delay: 0.08 + i * 0.07 }}
            >
              {/* Label */}
              <div style={labelStyle}>
                <span style={{
                  display: 'block',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: Math.max(N * 0.20, 11),
                  fontWeight: 700, color: isAct ? GREEN : DARK,
                  letterSpacing: '-0.01em', transition: 'color 0.3s',
                  textTransform: 'uppercase',
                }}>{svc.title}</span>
                {svc.tag && (
                  <span style={{
                    display: 'inline-block', fontSize: 9, fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    fontFamily: "'DM Sans', sans-serif",
                    color: GREEN, background: 'rgba(68,178,76,0.1)',
                    borderRadius: 100, padding: '2px 7px', marginTop: 3,
                  }}>{svc.tag}</span>
                )}
              </div>

              {/* Node button */}
              <motion.button
                whileHover={{ scale: 1.18 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setActive(isAct ? null : i)}
                style={{
                  position: 'absolute',
                  width: N, height: N,
                  top:  ny - N / 2,
                  left: nx - N / 2,
                  borderRadius: '50%',
                  background: isAct
                    ? `linear-gradient(135deg, ${GREEN}, ${GREEN_DK})`
                    : '#ffffff',
                  border: `2.5px solid ${isAct ? GREEN_DK : GREEN}`,
                  boxShadow: isAct
                    ? `0 0 0 5px rgba(68,178,76,0.18), 0 8px 24px rgba(68,178,76,0.4)`
                    : `0 0 0 4px rgba(68,178,76,0.1), 0 4px 16px rgba(10,31,61,0.1)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', zIndex: 6, padding: 0,
                  pointerEvents: 'auto',
                  transition: 'background 0.3s, box-shadow 0.3s',
                }}
              >
                <Icon size={N * 0.44} color={isAct ? '#fff' : GREEN} strokeWidth={1.7} />
              </motion.button>
            </motion.div>
          );
        })}
      </div>

      {/* Detail card */}
      <AnimatePresence>
        {active !== null && (
          <motion.div key={active}
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.32, ease: EASE }}
            style={{
              background: DARK, borderRadius: 20, padding: '24px 26px',
              maxWidth: 460, width: 'calc(100% - 32px)',
              marginTop: 8, marginBottom: 8,
              border: '1.5px solid rgba(68,178,76,0.25)',
              boxShadow: '0 20px 56px rgba(10,31,61,0.2)',
              position: 'relative', overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 3,
              background: `linear-gradient(90deg, ${GREEN}, ${GREEN_DK})`,
            }} />
            <button onClick={() => setActive(null)} style={{
              position: 'absolute', top: 14, right: 14,
              background: 'rgba(255,255,255,0.07)', border: 'none',
              borderRadius: 8, width: 30, height: 30, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <X size={14} color="rgba(255,255,255,0.5)" />
            </button>
            {(() => {
              const svc  = services[active];
              const Icon = svc.icon;
              return (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                      background: 'rgba(68,178,76,0.14)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={20} color={GREEN} />
                    </div>
                    <div>
                      <h3 style={{
                        fontFamily: "'Fraunces', serif", fontWeight: 900,
                        fontSize: '1.2rem', color: '#fff', letterSpacing: '-0.01em',
                        marginBottom: svc.tag ? 4 : 0,
                      }}>{svc.title}</h3>
                      {svc.tag && (
                        <span style={{
                          fontSize: 9, fontWeight: 700, letterSpacing: '0.1em',
                          textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif",
                          color: GREEN, background: 'rgba(68,178,76,0.12)',
                          borderRadius: 100, padding: '2px 8px', display: 'inline-block',
                        }}>{svc.tag}</span>
                      )}
                    </div>
                  </div>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                    lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', marginBottom: 18,
                  }}>{svc.desc}</p>
                  <a
                    href={`https://wa.me/919131979530?text=${encodeURIComponent(`Hi! I'd like to enquire about your ${svc.title} service.`)}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      padding: '11px 22px', borderRadius: 100,
                      background: `linear-gradient(135deg, ${GREEN}, ${GREEN_DK})`,
                      color: '#fff', textDecoration: 'none',
                      fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 13,
                      boxShadow: '0 4px 14px rgba(68,178,76,0.32)',
                    }}
                  >
                    Book this service <ArrowRight size={14} />
                  </a>
                </>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}