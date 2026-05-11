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

/** Responsive dimensions by container width */
function getCfg(w: number) {
  if (w < 420)  return { R: 120, C: 88,  N: 38, PAD: 74  };
  if (w < 560)  return { R: 152, C: 108, N: 44, PAD: 86  };
  if (w < 720)  return { R: 192, C: 136, N: 50, PAD: 98  };
  if (w < 900)  return { R: 242, C: 168, N: 56, PAD: 112 };
  if (w < 1100) return { R: 282, C: 192, N: 60, PAD: 120 };
  return              { R: 320, C: 212, N: 64, PAD: 132 };
}

function getPos(i: number, total: number, r: number) {
  const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
  return { x: Math.cos(angle) * r, y: Math.sin(angle) * r };
}

export default function OrbitalServices() {
  const [active, setActive]   = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [winW, setWinW]       = useState(1200);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef   = useRef<HTMLDivElement>(null);
  const [contW, setContW]     = useState(800);

  useEffect(() => {
    setMounted(true);
    const measure = () => {
      setWinW(window.innerWidth);
      if (wrapRef.current) setContW(wrapRef.current.offsetWidth);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const isMobile = winW < 500;

  /* Scale orbital to fit container width */
  const { R, C, N, PAD } = getCfg(contW);
  const rawSize = (R + N / 2 + PAD + 12) * 2;
  const CANVAS  = Math.min(rawSize, contW);
  const sc      = CANVAS / rawSize;            // uniform scale factor
  const sR  = R   * sc;
  const sN  = N   * sc;
  const sC  = C   * sc;
  const sPAD = PAD * sc;

  /* Draw rings on canvas */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isMobile) return;
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

    /* Outer halo */
    ctx.beginPath();
    ctx.arc(cx, cy, sR + sN / 2 + 10, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(68,178,76,0.05)';
    ctx.lineWidth   = 1;
    ctx.stroke();

    /* Main orbit — solid */
    ctx.beginPath();
    ctx.arc(cx, cy, sR, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(68,178,76,0.4)';
    ctx.lineWidth   = Math.max(1.5, 2 * sc);
    ctx.setLineDash([]);
    ctx.stroke();

    /* Inner ring */
    ctx.beginPath();
    ctx.arc(cx, cy, sR * 0.42, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(16,84,156,0.08)';
    ctx.lineWidth   = 1;
    ctx.stroke();
  }, [CANVAS, sR, sN, sc, isMobile]);

  if (!mounted) return null;

  return (
    <section id="services" style={{
      background: '#ffffff',
      padding: '80px 0 64px',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      overflow: 'hidden',
    }}>

      {/* ── Heading ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}
        style={{ textAlign: 'center', marginBottom: 36, padding: '0 24px' }}
      >
        <p style={{
          color: GREEN, fontSize: 11, fontWeight: 700,
          letterSpacing: '0.25em', textTransform: 'uppercase',
          fontFamily: "'Inter', sans-serif", marginBottom: 10,
        }}>What We Offer</p>
        <h2 style={{
          fontFamily: "'Fraunces', serif", fontWeight: 900,
          fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: DARK,
          letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 8,
        }}>
          9 Services,{' '}
          <em style={{ color: GREEN, fontStyle: 'italic' }}>One Brand</em>
        </h2>
        <p style={{ color: '#94a3b8', fontFamily: "'Inter', sans-serif", fontSize: 14 }}>
          Tap any service to explore
        </p>
      </motion.div>

      {/* ── Measure container ── */}
      <div ref={wrapRef} style={{ width: '100%', maxWidth: 1100, padding: '0 16px' }}>

        {/* ══ MOBILE: 3-col icon grid ══ */}
        {isMobile && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 10,
            maxWidth: 420, margin: '0 auto',
          }}>
            {services.map((svc, i) => {
              const Icon  = svc.icon;
              const isAct = active === i;
              return (
                <motion.button
                  key={svc.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4, ease: EASE }}
                  onClick={() => setActive(isAct ? null : i)}
                  style={{
                    background: isAct
                      ? `linear-gradient(135deg, ${GREEN}, ${GREEN_DK})`
                      : '#fff',
                    border: `2px solid ${isAct ? GREEN_DK : 'rgba(68,178,76,0.3)'}`,
                    borderRadius: 14,
                    padding: '14px 6px',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', gap: 6,
                    cursor: 'pointer',
                    boxShadow: isAct
                      ? '0 6px 20px rgba(68,178,76,0.35)'
                      : '0 2px 10px rgba(10,31,61,0.06)',
                    transition: 'all 0.25s ease',
                    minHeight: 80,
                  }}
                >
                  <Icon size={22} color={isAct ? '#fff' : GREEN} strokeWidth={1.7} />
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 9, fontWeight: 700,
                    letterSpacing: '0.02em', textTransform: 'uppercase',
                    color: isAct ? '#fff' : DARK,
                    textAlign: 'center', lineHeight: 1.25,
                  }}>{svc.title}</span>
                  {svc.tag && (
                    <span style={{
                      fontSize: 7.5, fontWeight: 700, letterSpacing: '0.08em',
                      textTransform: 'uppercase', fontFamily: "'Inter', sans-serif",
                      color: isAct ? '#fff' : GREEN,
                      background: isAct ? 'rgba(255,255,255,0.2)' : 'rgba(68,178,76,0.1)',
                      borderRadius: 100, padding: '1px 5px',
                    }}>{svc.tag}</span>
                  )}
                </motion.button>
              );
            })}
          </div>
        )}

        {/* ══ TABLET + DESKTOP: Orbital diagram ══ */}
        {!isMobile && (
          <div style={{
            position: 'relative',
            width: CANVAS,
            height: CANVAS,
            margin: '0 auto',
          }}>
            {/* Canvas rings */}
            <canvas ref={canvasRef}
              style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }} />

            {/* SVG connectors */}
            <svg
              style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}
              width={CANVAS} height={CANVAS}
            >
              {services.map((_, i) => {
                const { x, y } = getPos(i, services.length, sR);
                const cx    = CANVAS / 2;
                const isAct = active === i;
                const logoR = sC / 2 + 4;
                const dist  = Math.sqrt(x * x + y * y);
                const ux = x / dist, uy = y / dist;
                return (
                  <line key={i}
                    x1={cx + ux * logoR} y1={cx + uy * logoR}
                    x2={cx + x}          y2={cx + y}
                    stroke={isAct ? GREEN : 'rgba(68,178,76,0.22)'}
                    strokeWidth={isAct ? Math.max(1.5, 2.5 * sc) : Math.max(1, 1.5 * sc)}
                    style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }}
                  />
                );
              })}
            </svg>

            {/* Center logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE }}
              style={{
                position: 'absolute',
                top: '50%', left: '50%',
                marginTop:  -(sC * 0.375),
                marginLeft: -(sC / 2),
                width: sC, height: sC * 0.75,
                zIndex: 5,
              }}
            >
              <Image
                src="/logo.webp"
                alt="Prime Laundry"
                fill
                style={{ objectFit: 'contain', mixBlendMode: 'multiply' }}
                priority
              />
            </motion.div>

            {/* Nodes + labels */}
            {services.map((svc, i) => {
              const { x, y } = getPos(i, services.length, sR);
              const Icon  = svc.icon;
              const isAct = active === i;
              const nx    = CANVAS / 2 + x;
              const ny    = CANVAS / 2 + y;
              const GAP   = sN / 2 + 7;
              const lblSize = Math.max(9, Math.round(sN * 0.19));
              const lblW    = Math.max(70, sPAD * 0.9);

              const isLeft  = x < -sR * 0.2;
              const isRight = x >  sR * 0.2;
              const isTop   = y < -sR * 0.2;

              let labelStyle: React.CSSProperties = {
                position: 'absolute', zIndex: 7,
                pointerEvents: 'none',
                lineHeight: 1.25,
              };

              if (isLeft) {
                labelStyle = { ...labelStyle,
                  right: CANVAS - (nx - sN / 2 - GAP),
                  top: ny, transform: 'translateY(-50%)',
                  textAlign: 'right', width: lblW };
              } else if (isRight) {
                labelStyle = { ...labelStyle,
                  left: nx + sN / 2 + GAP,
                  top: ny, transform: 'translateY(-50%)',
                  textAlign: 'left', width: lblW };
              } else if (isTop) {
                labelStyle = { ...labelStyle,
                  left: nx, bottom: CANVAS - (ny - sN / 2 - GAP),
                  transform: 'translateX(-50%)',
                  textAlign: 'center', width: lblW * 1.2 };
              } else {
                labelStyle = { ...labelStyle,
                  left: nx, top: ny + sN / 2 + GAP,
                  transform: 'translateX(-50%)',
                  textAlign: 'center', width: lblW * 1.2 };
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
                      fontFamily: "'Inter', sans-serif",
                      fontSize: lblSize,
                      fontWeight: 700,
                      color: isAct ? GREEN : DARK,
                      textTransform: 'uppercase',
                      letterSpacing: '-0.005em',
                      transition: 'color 0.3s',
                      /* prevent long labels from overflowing */
                      wordBreak: 'break-word',
                    }}>{svc.title}</span>
                    {svc.tag && (
                      <span style={{
                        display: 'inline-block',
                        fontSize: Math.max(7, lblSize - 2),
                        fontWeight: 700, letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        fontFamily: "'Inter', sans-serif",
                        color: GREEN, background: 'rgba(68,178,76,0.1)',
                        borderRadius: 100, padding: '1px 5px', marginTop: 2,
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
                      width: sN, height: sN,
                      top:  ny - sN / 2,
                      left: nx - sN / 2,
                      borderRadius: '50%',
                      background: isAct
                        ? `linear-gradient(135deg, ${GREEN}, ${GREEN_DK})`
                        : '#ffffff',
                      border: `${Math.max(1.5, 2.5 * sc)}px solid ${isAct ? GREEN_DK : GREEN}`,
                      boxShadow: isAct
                        ? `0 0 0 5px rgba(68,178,76,0.18), 0 8px 24px rgba(68,178,76,0.4)`
                        : `0 0 0 4px rgba(68,178,76,0.1), 0 4px 16px rgba(10,31,61,0.1)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', zIndex: 6, padding: 0,
                      pointerEvents: 'auto',
                      transition: 'background 0.3s, box-shadow 0.3s',
                    }}
                  >
                    <Icon size={sN * 0.44} color={isAct ? '#fff' : GREEN} strokeWidth={1.7} />
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>{/* /wrapRef */}

      {/* ── Detail card (shared for both views) ── */}
      <AnimatePresence>
        {active !== null && (
          <motion.div key={active}
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.32, ease: EASE }}
            style={{
              background: DARK, borderRadius: 20,
              padding: '24px 22px',
              maxWidth: 460, width: 'calc(100% - 32px)',
              marginTop: 20,
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
                        fontSize: '1.2rem', color: '#fff',
                        letterSpacing: '-0.01em',
                        marginBottom: svc.tag ? 4 : 0,
                      }}>{svc.title}</h3>
                      {svc.tag && (
                        <span style={{
                          fontSize: 9, fontWeight: 700, letterSpacing: '0.1em',
                          textTransform: 'uppercase', fontFamily: "'Inter', sans-serif",
                          color: GREEN, background: 'rgba(68,178,76,0.12)',
                          borderRadius: 100, padding: '2px 8px', display: 'inline-block',
                        }}>{svc.tag}</span>
                      )}
                    </div>
                  </div>

                  <p style={{
                    fontFamily: "'Inter', sans-serif", fontSize: 14,
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
                      fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 13,
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