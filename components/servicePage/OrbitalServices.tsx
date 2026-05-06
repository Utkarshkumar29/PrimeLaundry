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

/* ────────────────────────────────────────────────────────────
   Clean vector washing-machine illustration — fills a circle.
   Inspired by the clear icon/vector style images shared.
   viewBox 0 0 200 200, drawn so the machine fills the square.
──────────────────────────────────────────────────────────── */
function WashingMachineSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="100%"
      height="100%"
      style={{ display: 'block' }}
    >
      <defs>
        {/* Machine body — clean white with very slight gradient */}
        <linearGradient id="bodyG" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e8edf2" />
        </linearGradient>

        {/* Top panel — slightly darker */}
        <linearGradient id="panelG" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#dde3ea" />
          <stop offset="100%" stopColor="#c8d0da" />
        </linearGradient>

        {/* Outer drum bezel — grey metallic ring */}
        <linearGradient id="bezelG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#c0cad4" />
          <stop offset="100%" stopColor="#8898a8" />
        </linearGradient>

        {/* Drum glass — teal/blue tint like the reference images */}
        <radialGradient id="glassG" cx="35%" cy="30%" r="70%">
          <stop offset="0%"   stopColor="#a8d8ea" stopOpacity="1" />
          <stop offset="45%"  stopColor="#5cb8d4" stopOpacity="1" />
          <stop offset="100%" stopColor="#1e6e8c" stopOpacity="1" />
        </radialGradient>

        {/* Glass sheen — bright reflection top-left */}
        <radialGradient id="sheenG" cx="28%" cy="22%" r="55%">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.70)" />
          <stop offset="60%"  stopColor="rgba(255,255,255,0.15)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)"    />
        </radialGradient>

        {/* Inner drum shadow vignette */}
        <radialGradient id="vigG" cx="50%" cy="50%" r="50%">
          <stop offset="55%"  stopColor="rgba(0,0,0,0)"    />
          <stop offset="100%" stopColor="rgba(0,0,0,0.35)" />
        </radialGradient>

        {/* Clothes swirl inside drum */}
        <radialGradient id="swirl1" cx="50%" cy="50%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#b0d8e8" stopOpacity="0.5" />
        </radialGradient>

        {/* Bottom green label fade */}
        <linearGradient id="fadeG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(10,31,61,0)"    />
          <stop offset="100%" stopColor="rgba(10,31,61,0.72)" />
        </linearGradient>
      </defs>

      {/* ── 1. Machine body ── */}
      <rect x="8" y="8" width="184" height="184" rx="14" fill="url(#bodyG)"
        stroke="#c8d2dc" strokeWidth="1.5" />

      {/* ── 2. Top control panel ── */}
      <rect x="8" y="8" width="184" height="38" rx="14" fill="url(#panelG)" />
      <rect x="8" y="32" width="184" height="8"   fill="url(#panelG)" />

      {/* Power button — top left */}
      <circle cx="30" cy="26" r="9"   fill="#f0f4f8" stroke="#b8c4ce" strokeWidth="1.2" />
      <circle cx="30" cy="26" r="4.5" fill="none"    stroke="#44b24c" strokeWidth="2"
        strokeDasharray="18 6" strokeLinecap="round" />
      <line x1="30" y1="19" x2="30" y2="23" stroke="#44b24c" strokeWidth="2" strokeLinecap="round" />

      {/* Display panel */}
      <rect x="55" y="16" width="72" height="20" rx="5" fill="#1a2a3a" />
      {/* Green "colon" time display */}
      <rect x="61" y="20" width="8" height="12" rx="2" fill="#44b24c" opacity="0.85" />
      <circle cx="72" cy="23" r="1.2" fill="#44b24c" />
      <circle cx="72" cy="29" r="1.2" fill="#44b24c" />
      <rect x="74" y="20" width="8" height="12" rx="2" fill="#44b24c" opacity="0.85" />
      {/* small dots */}
      <circle cx="88" cy="24" r="1" fill="#3a7bd5" opacity="0.7" />
      <circle cx="88" cy="28" r="1" fill="#3a7bd5" opacity="0.7" />
      <rect x="92" y="20" width="28" height="5" rx="2" fill="#3a7bd5" opacity="0.45" />
      <rect x="92" y="27" width="18" height="4" rx="2" fill="#3a7bd5" opacity="0.25" />

      {/* Dial — top right */}
      <circle cx="162" cy="26" r="11"  fill="#e8edf2" stroke="#b8c4ce" strokeWidth="1.2" />
      <circle cx="162" cy="26" r="5.5" fill="#c8d2dc" stroke="#a0aab4" strokeWidth="0.8" />
      {/* Dial tick marks */}
      {[0,45,90,135,180,225,270,315].map((deg, i) => {
        const r1 = 8, r2 = 10;
        const rad = (deg - 90) * Math.PI / 180;
        return <line key={i}
          x1={162 + r1 * Math.cos(rad)} y1={26 + r1 * Math.sin(rad)}
          x2={162 + r2 * Math.cos(rad)} y2={26 + r2 * Math.sin(rad)}
          stroke="#8898a8" strokeWidth="0.8" />;
      })}
      {/* Current setting indicator */}
      <line x1="162" y1="15.5" x2="162" y2="21" stroke="#44b24c" strokeWidth="2" strokeLinecap="round" />

      {/* Detergent tray */}
      <rect x="178" y="14" width="8" height="22" rx="3"
        fill="#e0e6ee" stroke="#b8c4ce" strokeWidth="0.8" />
      <line x1="182" y1="14" x2="182" y2="36" stroke="#b8c4ce" strokeWidth="0.5" />

      {/* ── 3. Outer bezel ring (metallic) ── */}
      <circle cx="100" cy="118" r="72" fill="url(#bezelG)" />
      {/* Highlight arc top-left */}
      <path d="M 44 82 A 62 62 0 0 1 150 76"
        fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Shadow arc bottom-right */}
      <path d="M 46 155 A 62 62 0 0 0 154 155"
        fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="2" strokeLinecap="round" />

      {/* ── 4. Rubber gasket (dark ring) ── */}
      <circle cx="100" cy="118" r="65" fill="#3a4a58" />
      <circle cx="100" cy="118" r="62" fill="#2c3a48" />
      {/* Gasket bolt dots */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const rad = (deg - 90) * Math.PI / 180;
        return <circle key={i}
          cx={100 + 63.5 * Math.cos(rad)}
          cy={118 + 63.5 * Math.sin(rad)}
          r="2" fill="#4a5c6c" />;
      })}

      {/* ── 5. Glass door (main — teal/blue) ── */}
      <circle cx="100" cy="118" r="57" fill="url(#glassG)" />

      {/* ── 6. Clothes swirl inside drum ── */}
      {/* Main swirl shape */}
      <ellipse cx="96"  cy="114" rx="30" ry="20"
        fill="rgba(255,255,255,0.22)" transform="rotate(-20 96 114)" />
      <ellipse cx="108" cy="126" rx="24" ry="15"
        fill="rgba(255,255,255,0.15)" transform="rotate(25 108 126)" />
      {/* Fabric fold lines */}
      <path d="M 72 112 Q 90 104 110 116 Q 125 124 118 136"
        fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 78 124 Q 96 118 114 128 Q 122 134 116 142"
        fill="none" stroke="rgba(255,255,255,0.2)"  strokeWidth="2"   strokeLinecap="round" />
      <path d="M 82 106 Q 100 100 116 110"
        fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />

      {/* ── 7. Drum inner lift paddles ── */}
      {[0, 120, 240].map((deg, i) => {
        const rad = (deg - 90) * Math.PI / 180;
        const px = 100 + 44 * Math.cos(rad);
        const py = 118 + 44 * Math.sin(rad);
        const ex = 100 + 54 * Math.cos(rad);
        const ey = 118 + 54 * Math.sin(rad);
        return <line key={i} x1={px} y1={py} x2={ex} y2={ey}
          stroke="rgba(255,255,255,0.3)" strokeWidth="4" strokeLinecap="round" />;
      })}

      {/* ── 8. Vignette (depth) ── */}
      <circle cx="100" cy="118" r="57" fill="url(#vigG)" />

      {/* ── 9. Glass sheen (bright reflection) ── */}
      <ellipse cx="80" cy="97" rx="24" ry="16"
        fill="url(#sheenG)" transform="rotate(-30 80 97)" />

      {/* ── 10. Door handle (right) ── */}
      <rect x="157" y="112" width="10" height="12" rx="5"
        fill="#c8d2dc" stroke="#9aaabb" strokeWidth="1" />
      <rect x="159" y="114" width="6"  height="8"  rx="3"
        fill="#e8eef4" />

      {/* ── 11. Bottom dark fade + label ── */}
      <circle cx="100" cy="118" r="57" fill="url(#fadeG)" />

      <text x="100" y="163"
        textAnchor="middle"
        fontFamily="'Fraunces', Georgia, serif"
        fontWeight="900" fontSize="17" fill="#ffffff"
        style={{ letterSpacing: '-0.5px' }}>
        Prime
      </text>
      <text x="100" y="176"
        textAnchor="middle"
        fontFamily="'DM Sans', Arial, sans-serif"
        fontWeight="700" fontSize="10" fill="#44b24c"
        letterSpacing="3">
        LAUNDRY
      </text>

      {/* ── 12. Small indicator lights (bottom of panel) ── */}
      <circle cx="80" cy="168" r="2.5" fill="#44b24c" opacity="0.7" />
      <circle cx="87" cy="168" r="2.5" fill="#44b24c" opacity="0.4" />
    </svg>
  );
}

export default function OrbitalServices() {
  const [active, setActive]   = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [R,    setR]    = useState(270);
  const [C,    setC]    = useState(200);
  const [N,    setN]    = useState(58);
  const [LTXT, setLTXT] = useState(130);

  useEffect(() => {
    setMounted(true);
    function resize() {
      const w = window.innerWidth;
      if (w < 400)       { setR(110); setC(88);  setN(34); setLTXT(72);  }
      else if (w < 560)  { setR(148); setC(114); setN(42); setLTXT(88);  }
      else if (w < 760)  { setR(192); setC(150); setN(50); setLTXT(105); }
      else if (w < 1024) { setR(230); setC(178); setN(55); setLTXT(118); }
      else               { setR(270); setC(200); setN(58); setLTXT(130); }
    }
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const CANVAS = (R + N / 2 + LTXT + 16) * 2;

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

    ctx.beginPath();
    ctx.arc(cx, cy, R + N / 2 + 6, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(68,178,76,0.07)';
    ctx.lineWidth = 1;
    ctx.setLineDash([]);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(68,178,76,0.35)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 8]);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.beginPath();
    ctx.arc(cx, cy, R * 0.45, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(68,178,76,0.09)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }, [CANVAS, R, N]);

  if (!mounted) return null;

  return (
    <section style={{
      background: '#fff',
      padding: '72px 16px 56px',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}
        style={{ textAlign: 'center', marginBottom: 24 }}
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
          Click any service to explore
        </p>
      </motion.div>

      <div style={{ position: 'relative', width: CANVAS, height: CANVAS, maxWidth: '100vw' }}>

        <canvas ref={canvasRef}
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }} />

        {/* ── CENTER: Washing Machine — perfectly centred using negative margins ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
          style={{
            position: 'absolute',
            top:       '50%',
            left:      '50%',
            marginTop:  -(C / 2),
            marginLeft: -(C / 2),
            width:  C,
            height: C,
            borderRadius: '50%',
            overflow: 'hidden',
            zIndex: 5,
            border: '4px solid rgba(68,178,76,0.20)',
           
          }}
        >
          <WashingMachineSVG />
        </motion.div>

        {/* ── SVG connector lines ── */}
        <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}
          width={CANVAS} height={CANVAS}>
          {services.map((_, i) => {
            const { x, y } = getPos(i, services.length, R);
            const cx = CANVAS / 2, cy_ = CANVAS / 2;
            const isAct = active === i;
            return (
              <line key={i}
                x1={cx} y1={cy_} x2={cx + x} y2={cy_ + y}
                stroke={isAct ? GREEN : 'rgba(68,178,76,0.18)'}
                strokeWidth={isAct ? 2 : 1}
                strokeDasharray={isAct ? '0' : '4 6'}
                style={{ transition: 'all 0.3s ease' }}
              />
            );
          })}
        </svg>

        {/* ── 9 nodes + outside labels ── */}
        {services.map((svc, i) => {
          const { x, y } = getPos(i, services.length, R);
          const Icon  = svc.icon;
          const isAct = active === i;
          const nx = CANVAS / 2 + x;
          const ny = CANVAS / 2 + y;
          const isLeft  = x < -R * 0.18;
          const isRight = x >  R * 0.18;
          const GAP = N / 2 + 10;

          let labelStyle: React.CSSProperties = {
            position: 'absolute', zIndex: 7,
            pointerEvents: 'none', width: LTXT, lineHeight: 1.3,
          };
          if (isLeft) {
            labelStyle = { ...labelStyle, right: CANVAS - (nx - N / 2 - GAP), top: ny, transform: 'translateY(-50%)', textAlign: 'right' };
          } else if (isRight) {
            labelStyle = { ...labelStyle, left: nx + N / 2 + GAP, top: ny, transform: 'translateY(-50%)', textAlign: 'left' };
          } else if (y < 0) {
            labelStyle = { ...labelStyle, left: nx, bottom: CANVAS - (ny - N / 2 - GAP), transform: 'translateX(-50%)', textAlign: 'center', width: LTXT * 1.2 };
          } else {
            labelStyle = { ...labelStyle, left: nx, top: ny + N / 2 + GAP, transform: 'translateX(-50%)', textAlign: 'center', width: LTXT * 1.2 };
          }

          return (
            <motion.div key={svc.title}
              style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: EASE, delay: 0.1 + i * 0.07 }}
            >
              <div style={labelStyle}>
                <span style={{
                  display: 'block',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: Math.max(N * 0.21, 11), fontWeight: 700,
                  color: isAct ? GREEN : '#1e3a5f',
                  letterSpacing: '-0.01em', transition: 'color 0.3s',
                  textTransform: 'uppercase',
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
                whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.94 }}
                onClick={() => setActive(isAct ? null : i)}
                style={{
                  position: 'absolute', width: N, height: N,
                  top: ny - N / 2, left: nx - N / 2,
                  borderRadius: '50%',
                  background: isAct ? `linear-gradient(135deg, ${GREEN}, ${GREEN_DK})` : '#fff',
                  border: `2.5px solid ${isAct ? GREEN_DK : GREEN}`,
                  boxShadow: isAct
                    ? `0 0 0 5px rgba(68,178,76,0.16), 0 8px 24px rgba(68,178,76,0.4)`
                    : `0 0 0 4px rgba(68,178,76,0.1), 0 4px 16px rgba(10,31,61,0.1)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', zIndex: 6, padding: 0, pointerEvents: 'auto',
                  transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
                }}
              >
                <Icon size={N * 0.46} color={isAct ? '#fff' : GREEN} strokeWidth={1.7} />
              </motion.button>
            </motion.div>
          );
        })}
      </div>

      {/* ── Detail card ── */}
      <AnimatePresence>
        {active !== null && (
          <motion.div key={active}
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.32, ease: EASE }}
            style={{
              background: DARK, borderRadius: 20, padding: '22px 24px',
              maxWidth: 450, width: 'calc(100% - 32px)',
              marginTop: 12, marginBottom: 12,
              border: '1.5px solid rgba(68,178,76,0.22)',
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
              borderRadius: 8, width: 28, height: 28, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
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
