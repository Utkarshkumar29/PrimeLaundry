'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

function getPos(i: number, total: number, r: number) {
  const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
  return { x: Math.cos(angle) * r, y: Math.sin(angle) * r };
}

/** Front-load washing machine — pure SVG, no image needed */
function WashingMachineSVG({ size }: { size: number }) {
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', borderRadius: '50%' }}
    >
      <defs>
        <linearGradient id="wm-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"  stopColor="#eef4fb" />
          <stop offset="100%" stopColor="#cddaec" />
        </linearGradient>
        <linearGradient id="wm-panel" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="#e2eef8" />
          <stop offset="100%" stopColor="#bdd0e8" />
        </linearGradient>
        <radialGradient id="wm-drum-bg" cx="45%" cy="38%" r="65%">
          <stop offset="0%"  stopColor="#163d5c" />
          <stop offset="40%" stopColor="#0c2640" />
          <stop offset="100%" stopColor="#040f1c" />
        </radialGradient>
        <radialGradient id="wm-drum-shine" cx="35%" cy="28%" r="55%">
          <stop offset="0%"  stopColor="rgba(255,255,255,0.18)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <linearGradient id="wm-seal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"  stopColor="#8096aa" />
          <stop offset="100%" stopColor="#4a6070" />
        </linearGradient>
        <linearGradient id="wm-bezel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"  stopColor="#c8d8e8" />
          <stop offset="100%" stopColor="#8cacc4" />
        </linearGradient>
        <linearGradient id="wm-green" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"  stopColor={GREEN} />
          <stop offset="100%" stopColor={GREEN_DK} />
        </linearGradient>
        <filter id="wm-shadow">
          <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="rgba(10,31,61,0.22)" />
        </filter>
      </defs>

      {/* ── BODY ── */}
      <rect x="16" y="18" width="168" height="166" rx="20"
        fill="url(#wm-body)" filter="url(#wm-shadow)" />

      {/* Right & bottom inner shadow */}
      <rect x="164" y="26" width="12" height="150" rx="4" fill="rgba(0,0,0,0.05)" />
      <rect x="16"  y="164" width="168" height="12" rx="4" fill="rgba(0,0,0,0.06)" />

      {/* ── TOP CONTROL PANEL ── */}
      <rect x="16" y="18" width="168" height="40" rx="20" fill="url(#wm-panel)" />
      <rect x="16" y="38" width="168" height="20" fill="url(#wm-panel)" />

      {/* Green accent stripe */}
      <rect x="16" y="18" width="168" height="5" rx="3" fill="url(#wm-green)" />

      {/* LED display */}
      <rect x="34" y="28" width="94" height="20" rx="5"
        fill="#0b1c2a" stroke="#1c3550" strokeWidth="1" />
      <rect x="36" y="30" width="90" height="16" rx="4" fill="#081520" />
      <text x="81" y="42"
        fontFamily="'Courier New', monospace" fontSize="9.5" fontWeight="bold"
        fill={GREEN} textAnchor="middle" letterSpacing="2.5">
        30°C
      </text>
      {/* Indicator dots */}
      <circle cx="133" cy="38" r="2.5" fill={GREEN} opacity="0.9" />
      <circle cx="140" cy="38" r="2.5" fill="rgba(68,178,76,0.3)" />

      {/* Programme knob */}
      <circle cx="158" cy="38" r="11" fill="#ccd8e8" stroke="#a8bcd0" strokeWidth="1.5" />
      <circle cx="158" cy="38" r="6"  fill="#b0c4d8" stroke="#8fafc8" strokeWidth="1" />
      <circle cx="158" cy="38" r="2.5" fill="#6a8aa0" />
      <line x1="158" y1="29" x2="158" y2="33"
        stroke="#3a5a70" strokeWidth="1.5" strokeLinecap="round" />

      {/* ── DOOR ASSEMBLY ── */}
      {/* Outer chrome bezel */}
      <circle cx="100" cy="118" r="70"
        fill="none" stroke="url(#wm-bezel)" strokeWidth="3.5" />

      {/* Rubber gasket */}
      <circle cx="100" cy="118" r="64" fill="url(#wm-seal)" />
      <circle cx="100" cy="118" r="60" fill="#22323f" />
      <circle cx="100" cy="118" r="57" fill="url(#wm-bezel)" />

      {/* ── DRUM GLASS ── */}
      <circle cx="100" cy="118" r="51" fill="url(#wm-drum-bg)" />

      {/* Drum paddles × 3 */}
      {[0, 120, 240].map((deg) => (
        <g key={deg} transform={`rotate(${deg}, 100, 118)`}>
          <rect x="95.5" y="90" width="9" height="24" rx="4.5"
            fill="rgba(255,255,255,0.11)"
            stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
        </g>
      ))}

      {/* Hub */}
      <circle cx="100" cy="118" r="11"
        fill="#163d5c" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
      <circle cx="100" cy="118" r="6.5"
        fill="#0c2236" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
      <circle cx="100" cy="118" r="3" fill="#285880" />

      {/* Water at bottom of drum */}
      <ellipse cx="90"  cy="132" rx="20" ry="9"  fill="rgba(25,90,170,0.2)" />
      <ellipse cx="112" cy="136" rx="14" ry="6"  fill="rgba(25,90,170,0.14)" />

      {/* Shine overlay */}
      <circle cx="100" cy="118" r="51" fill="url(#wm-drum-shine)" />

      {/* Glass highlight */}
      <ellipse cx="81" cy="100" rx="15" ry="10"
        fill="rgba(255,255,255,0.13)"
        transform="rotate(-28, 81, 100)" />
      <ellipse cx="77" cy="97" rx="5.5" ry="3.5"
        fill="rgba(255,255,255,0.22)"
        transform="rotate(-28, 77, 97)" />

      {/* Door handle */}
      <rect x="152" y="112" width="14" height="13" rx="6.5"
        fill="#c8d8e8" stroke="#a0b8cc" strokeWidth="1.5" />
      <rect x="154" y="114" width="10" height="9" rx="4.5"
        fill="#ddeaf6" />

      {/* ── BOTTOM STRIP ── */}
      <rect x="16" y="166" width="168" height="18" rx="6" fill="rgba(0,0,0,0.04)" />

      {/* Filter cap */}
      <circle cx="36"  cy="175" r="6" fill="#c8d8e8" stroke="#a0b8cc" strokeWidth="1" />
      <circle cx="36"  cy="175" r="3" fill="#a0b8cc" />

      {/* Feet */}
      <rect x="28"  y="180" width="24" height="4" rx="2" fill="#aabccc" />
      <rect x="148" y="180" width="24" height="4" rx="2" fill="#aabccc" />

      {/* ── BRAND BADGE ── */}
      <rect x="60" y="150" width="80" height="26" rx="9"
        fill="rgba(8,24,40,0.75)" />
      <text x="100" y="161"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="9.5" fontWeight="bold"
        fill="#ffffff" textAnchor="middle" letterSpacing="1">
        PRIME
      </text>
      <text x="100" y="171"
        fontFamily="Arial, sans-serif"
        fontSize="6.5" fontWeight="bold"
        fill={GREEN} textAnchor="middle" letterSpacing="2">
        LAUNDRY
      </text>
    </svg>
  );
}

export default function OrbitalServices() {
  const [active, setActive]   = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [R, setR]           = useState(260);
  const [CENTER, setCENTER] = useState(205);
  const [NODE, setNODE]     = useState(62);

  useEffect(() => {
    setMounted(true);
    function resize() {
      const w = window.innerWidth;
      if (w < 400)       { setR(118); setCENTER(96);  setNODE(36); }
      else if (w < 560)  { setR(155); setCENTER(124); setNODE(44); }
      else if (w < 760)  { setR(200); setCENTER(158); setNODE(52); }
      else if (w < 1024) { setR(235); setCENTER(186); setNODE(58); }
      else               { setR(260); setCENTER(205); setNODE(62); }
    }
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const LABEL_SPACE = NODE * 2.4;
  const CANVAS      = (R + NODE / 2 + LABEL_SPACE) * 2;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = CANVAS * dpr;
    canvas.height = CANVAS * dpr;
    canvas.style.width  = CANVAS + 'px';
    canvas.style.height = CANVAS + 'px';
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, CANVAS, CANVAS);

    const cx = CANVAS / 2, cy = CANVAS / 2;
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(68,178,76,0.38)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 7]);
    ctx.stroke();
    ctx.setLineDash([]);
  }, [CANVAS, R]);

  return (
    <section
      style={{
        background: '#fff',
        padding: '72px 16px 56px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        style={{ textAlign: 'center', marginBottom: 20 }}
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
      {mounted && (
        <div style={{ position: 'relative', width: CANVAS, height: CANVAS, maxWidth: '100vw' }}>

          <canvas
            ref={canvasRef}
            style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}
          />

          {/* Center — SVG washing machine */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
            style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%,-50%)',
              width: CENTER, height: CENTER,
              borderRadius: '50%',
              overflow: 'hidden',
              zIndex: 5,
              border: '3px solid rgba(68,178,76,0.3)',
              boxShadow: `
                0 0 0 8px rgba(68,178,76,0.07),
                0 0 0 18px rgba(68,178,76,0.03),
                0 20px 60px rgba(10,31,61,0.18)
              `,
              background: '#eaf2f8',
            }}
          >
            <WashingMachineSVG size={CENTER} />
          </motion.div>

          {/* Nodes + labels */}
          {services.map((svc, i) => {
            const { x, y } = getPos(i, services.length, R);
            const Icon  = svc.icon;
            const isAct = active === i;
            const cx = CANVAS / 2 + x;
            const cy = CANVAS / 2 + y;

            const isLeft  = x < -R * 0.15;
            const isRight = x >  R * 0.15;
            const isTop   = !isLeft && !isRight && y < 0;
            const gap = NODE * 0.3;

            let labelStyle: React.CSSProperties = {
              position: 'absolute', zIndex: 4, pointerEvents: 'none',
              maxWidth: LABEL_SPACE - NODE / 2 - gap - 4,
            };
            if (isLeft) {
              labelStyle = { ...labelStyle, right: CANVAS - (cx - NODE / 2 - gap), top: cy, transform: 'translateY(-50%)', textAlign: 'right' };
            } else if (isRight) {
              labelStyle = { ...labelStyle, left: cx + NODE / 2 + gap, top: cy, transform: 'translateY(-50%)', textAlign: 'left' };
            } else if (isTop) {
              labelStyle = { ...labelStyle, left: cx, bottom: CANVAS - (cy - NODE / 2 - gap), transform: 'translateX(-50%)', textAlign: 'center', maxWidth: LABEL_SPACE };
            } else {
              labelStyle = { ...labelStyle, left: cx, top: cy + NODE / 2 + gap, transform: 'translateX(-50%)', textAlign: 'center', maxWidth: LABEL_SPACE };
            }

            return (
              <motion.div
                key={svc.title}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: EASE, delay: 0.08 + i * 0.06 }}
              >
                <div style={labelStyle}>
                  <span style={{
                    display: 'block',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: Math.max(NODE * 0.19, 10),
                    fontWeight: 700,
                    color: isAct ? GREEN : DARK,
                    lineHeight: 1.25,
                    letterSpacing: '-0.01em',
                    transition: 'color 0.3s',
                  }}>{svc.title}</span>
                  {svc.tag && (
                    <span style={{
                      display: 'inline-block', fontSize: 8, fontWeight: 700,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      fontFamily: "'DM Sans', sans-serif",
                      color: GREEN, background: 'rgba(68,178,76,0.1)',
                      borderRadius: 100, padding: '1px 6px', marginTop: 2,
                    }}>{svc.tag}</span>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActive(isAct ? null : i)}
                  style={{
                    position: 'absolute',
                    width: NODE, height: NODE,
                    top: cy - NODE / 2, left: cx - NODE / 2,
                    borderRadius: '50%',
                    background: isAct ? `linear-gradient(135deg, ${GREEN}, ${GREEN_DK})` : '#fff',
                    border: `2px solid ${isAct ? GREEN_DK : 'rgba(68,178,76,0.5)'}`,
                    boxShadow: isAct
                      ? `0 0 0 5px rgba(68,178,76,0.15), 0 8px 28px rgba(68,178,76,0.4)`
                      : `0 3px 14px rgba(10,31,61,0.1), 0 0 0 3px rgba(68,178,76,0.06)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', zIndex: 6, padding: 0,
                    transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
                  }}
                >
                  <Icon size={NODE * 0.44} color={isAct ? '#fff' : GREEN} strokeWidth={1.6} />
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Detail card */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.32, ease: EASE }}
            style={{
              background: DARK, borderRadius: 20, padding: '22px 24px',
              maxWidth: 450, width: 'calc(100% - 32px)',
              marginTop: 8, marginBottom: 12,
              border: '1.5px solid rgba(68,178,76,0.22)',
              boxShadow: '0 20px 56px rgba(10,31,61,0.2)',
              position: 'relative', overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 3,
              background: `linear-gradient(90deg, ${GREEN}, ${GREEN_DK})`,
            }} />
            <button
              onClick={() => setActive(null)}
              style={{
                position: 'absolute', top: 14, right: 14,
                background: 'rgba(255,255,255,0.07)', border: 'none',
                borderRadius: 8, width: 28, height: 28, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <X size={13} color="rgba(255,255,255,0.5)" />
            </button>
            {(() => {
              const svc  = services[active];
              const Icon = svc.icon;
              return (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <div style={{
                      width: 42, height: 42, borderRadius: 11, flexShrink: 0,
                      background: 'rgba(68,178,76,0.14)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={19} color={GREEN} />
                    </div>
                    <div>
                      <h3 style={{
                        fontFamily: "'Fraunces', serif", fontWeight: 900,
                        fontSize: '1.15rem', color: '#fff', letterSpacing: '-0.01em',
                        marginBottom: svc.tag ? 3 : 0,
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
                    fontFamily: "'DM Sans', sans-serif", fontSize: 13.5,
                    lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', marginBottom: 16,
                  }}>{svc.desc}</p>
                  <a
                    href={`https://wa.me/919131979530?text=${encodeURIComponent(`Hi! I'd like to enquire about your ${svc.title} service.`)}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      padding: '10px 20px', borderRadius: 100,
                      background: `linear-gradient(135deg, ${GREEN}, ${GREEN_DK})`,
                      color: '#fff', textDecoration: 'none',
                      fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 13,
                      boxShadow: '0 4px 14px rgba(68,178,76,0.32)',
                    }}
                  >
                    Book this service <ArrowRight size={13} />
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