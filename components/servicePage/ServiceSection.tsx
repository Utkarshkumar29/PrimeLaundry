'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wind, Shirt, Zap, Flame, Sparkles, Package,
  ShoppingBag, Footprints, Home, ArrowRight, CheckCircle2, X,
} from 'lucide-react';

const BLUE      = '#10549c';
const BLUE_DARK = '#0a3d75';
const GREEN     = '#44b24c';
const GREEN_DK  = '#339940';
const CREAM     = '#f7f5f0';
const DARK      = '#0a1f3d';
const EASE = [0.22, 1, 0.36, 1] as const;

const services = [
  { icon: Shirt,       title: 'Dry Cleaning',    desc: 'Expert dry cleaning for delicate fabrics, suits, sarees & ethnic wear using premium in-house chemicals.',      tag: 'Most Popular'  },
  { icon: Home,        title: 'Curtain Cleaning', desc: 'Professional cleaning for all curtain types — sheer, blackout, and heavy drapes — with full fabric care.',      tag: null            },
  { icon: Zap,         title: 'Express Delivery', desc: '24-hour turnaround for urgent orders. Same-day pickup and delivery available in select areas.',                  tag: '24hr'          },
  { icon: Wind,        title: 'Laundry Cleaning', desc: 'Wash & fold, wash & iron for everyday garments. Modern washers ensuring hygiene, freshness & fabric care.',     tag: null            },
  { icon: Flame,       title: 'Steam Ironing',    desc: 'Professional steam ironing that removes stubborn creases while preserving fabric quality and texture.',          tag: null            },
  { icon: Sparkles,    title: 'Toy Cleaning',     desc: 'Safe, chemical-free deep cleaning for soft toys and plush items. Hygienic and completely child-safe.',          tag: 'Unique'        },
  { icon: Package,     title: 'Carpet Cleaning',  desc: 'Deep extraction cleaning for carpets & rugs. Removes embedded dirt, allergens and odours effectively.',         tag: null            },
  { icon: ShoppingBag, title: 'Bag Cleaning',     desc: 'Specialised cleaning for leather bags, totes, backpacks and handbags with material-appropriate products.',      tag: null            },
  { icon: Footprints,  title: 'Shoe Cleaning',    desc: 'Expert restoration and deep cleaning for sneakers, leather shoes, heels and all formal footwear.',              tag: null            },
];

function getPos(i: number, total: number, r: number) {
  const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
  return { x: Math.cos(angle) * r, y: Math.sin(angle) * r };
}

export default function ServiceSection() {
  const [active, setActive]   = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  // responsive sizing
  const [R, setR]           = useState(310); // orbit radius
  const [CENTER, setCENTER] = useState(240); // center image diameter
  const [NODE, setNODE]     = useState(90);  // node diameter

  useEffect(() => {
    setMounted(true);
    function resize() {
      const w = window.innerWidth;
      if (w < 420)       { setR(140); setCENTER(110); setNODE(58); }
      else if (w < 600)  { setR(185); setCENTER(140); setNODE(66); }
      else if (w < 800)  { setR(235); setCENTER(170); setNODE(74); }
      else if (w < 1060) { setR(275); setCENTER(200); setNODE(82); }
      else               { setR(310); setCENTER(240); setNODE(90); }
    }
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const CANVAS = (R + NODE + 48) * 2;
  const [dimensions, setDimensions] = useState({ radius: 300, nodeSize: 90, centerSize: 320 });
/* --- Positioning Logic --- */
function getPosition(index: number, total: number, radius: number) {
  // Start from -90 degrees (top)
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  };
}
  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) setDimensions({ radius: 140, nodeSize: 65, centerSize: 180 });
      else if (w < 1024) setDimensions({ radius: 220, nodeSize: 80, centerSize: 260 });
      else setDimensions({ radius: 320, nodeSize: 100, centerSize: 380 });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return null;
const canvasSize = (dimensions.radius + dimensions.nodeSize) * 2;
  return (
    <main style={{ background: '#fff', minHeight: '100vh', paddingTop: 80 }}>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{
        background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DARK} 100%)`,
        padding: '72px 32px 80px', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.04,
          backgroundImage: `radial-gradient(circle, ${GREEN} 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }} />
        <div style={{
          position: 'absolute', top: 0, right: 0,
          fontFamily: "'Fraunces', serif",
          fontSize: 'clamp(5rem,14vw,12rem)',
          fontWeight: 900, lineHeight: 0.85, letterSpacing: '-0.05em',
          color: 'rgba(255,255,255,0.03)', pointerEvents: 'none', userSelect: 'none',
        }}>SER<br />VICE</div>

        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 36, height: 2, background: GREEN }} />
            <span style={{ color: GREEN, fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Our Services</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: 'clamp(2.4rem,5vw,4.2rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 0.95, marginBottom: 16 }}>
            Everything Clean,<br /><em style={{ color: GREEN }}>All in One Place.</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.75, maxWidth: 480 }}>
            9 premium laundry & cleaning services — from everyday clothes to carpets, toys, bags and shoes.
          </motion.p>
        </div>
      </section>

      {/* Wave */}
      <div style={{ background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DARK} 100%)`, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: 48, display: 'block' }}>
          <path d="M0 48 L0 24 Q360 0 720 24 Q1080 48 1440 24 L1440 48 Z" fill="#fff" />
        </svg>
      </div>

      {/* ── RADIAL SECTION ───────────────────────────────────────────── */}
      <section style={{
        background: `radial-gradient(ellipse 80% 60% at 50% 40%, rgba(16,84,156,0.04) 0%, transparent 70%), #fff`,
        padding: '64px 16px 48px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 12 }}>
          <p style={{ color: GREEN, fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", marginBottom: 10 }}>What We Offer</p>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: DARK, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 8 }}>
            9 Services, <em style={{ color: GREEN, fontStyle: 'italic' }}>One Brand</em>
          </h2>
          <p style={{ color: '#94a3b8', fontFamily: "'DM Sans', sans-serif", fontSize: 14 }}>
            Tap any service to explore
          </p>
        </motion.div>

        {/* ── Canvas ── */}
        <div style={{ 
        position: 'relative', 
        width: canvasSize, 
        height: canvasSize, 
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        
        {/* --- CENTRAL REALISTIC IMAGE --- */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: EASE }}
          style={{
            width: dimensions.centerSize,
            height: dimensions.centerSize,
            borderRadius: '50%',
            position: 'relative',
            zIndex: 2,
            boxShadow: '0 20px 80px rgba(0,0,0,0.15)',
            background: '#fff',
            padding: '10px'
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1545173168-9f1873beee82?q=80&w=800&auto=format&fit=crop" 
            alt="Washing Machine"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
          />
          {/* Inner Ring Overlay to match reference UI */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            border: '12px solid rgba(255,255,255,0.8)', pointerEvents: 'none'
          }} />
        </motion.div>

        {/* --- DASHED CONNECTORS --- */}
        <svg style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1 }}>
          <circle 
            cx={canvasSize/2} cy={canvasSize/2} r={dimensions.radius} 
            fill="none" stroke="rgba(68,178,76,0.2)" strokeWidth="1" strokeDasharray="6 6" 
          />
        </svg>

        {/* --- SERVICE NODES --- */}
        {services.map((svc, i) => {
          const pos = getPosition(i, services.length, dimensions.radius);
          const Icon = svc.icon;
          const isActive = active === i;

          return (
            <motion.div
              key={i}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              style={{
                position: 'absolute',
                left: `calc(50% + ${pos.x}px)`,
                top: `calc(50% + ${pos.y}px)`,
                transform: 'translate(-50%, -50%)',
                width: dimensions.nodeSize,
                height: dimensions.nodeSize,
                borderRadius: '50%',
                backgroundColor: '#fff',
                border: `2px solid ${isActive ? GREEN : '#e2e8f0'}`,
                boxShadow: isActive ? `0 10px 25px rgba(68,178,76,0.3)` : '0 4px 12px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 3,
                transition: 'all 0.3s ease'
              }}
            >
              <Icon size={dimensions.nodeSize * 0.3} color={isActive ? GREEN : '#64748b'} />
              <span style={{ 
                fontSize: dimensions.nodeSize * 0.12, 
                fontWeight: 700, 
                textAlign: 'center', 
                color: DARK,
                lineHeight: 1.1,
                marginTop: '4px',
                padding: '0 5px'
              }}>
                {svc.title.replace(' ', '\n')}
              </span>
              {svc.tag && (
                <span style={{ 
                  position: 'absolute', bottom: '-15px', 
                  backgroundColor: isActive ? GREEN : '#f1f5f9',
                  color: isActive ? '#fff' : '#64748b',
                  fontSize: '7px', padding: '2px 6px', borderRadius: '10px', fontWeight: 900
                }}>
                  {svc.tag}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>

        {/* ── Active service detail card ── */}
        <AnimatePresence>
          {active !== null && (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: 0.35, ease: EASE }}
              style={{
                background: DARK,
                borderRadius: 22, padding: '24px 26px',
                maxWidth: 460, width: 'calc(100% - 32px)',
                marginTop: 8, marginBottom: 16,
                boxShadow: '0 24px 64px rgba(10,31,61,0.22)',
                border: '1.5px solid rgba(68,178,76,0.25)',
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Green top bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${GREEN}, ${GREEN_DK})`,
              }} />

              {/* Close */}
              <button
                onClick={() => setActive(null)}
                style={{
                  position: 'absolute', top: 14, right: 14,
                  background: 'rgba(255,255,255,0.07)', border: 'none',
                  borderRadius: 8, width: 28, height: 28, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <X size={14} color="rgba(255,255,255,0.55)" />
              </button>

              {(() => {
                const svc  = services[active];
                const Icon = svc.icon;
                return (
                  <>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                        background: 'rgba(68,178,76,0.15)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Icon size={20} color={GREEN} />
                      </div>
                      <div>
                        <h3 style={{
                          fontFamily: "'Fraunces', serif", fontWeight: 900,
                          fontSize: '1.2rem', color: '#fff', letterSpacing: '-0.01em',
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
                      lineHeight: 1.75, color: 'rgba(255,255,255,0.62)', marginBottom: 16,
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
                        boxShadow: '0 4px 16px rgba(68,178,76,0.35)',
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

      {/* ── TECH STRIP ───────────────────────────────────────────────── */}
      <section style={{ background: CREAM, padding: '64px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }} className="about-grid">
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}>
            <p style={{ color: GREEN, fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", marginBottom: 12 }}>Why Prime Laundry?</p>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: BLUE_DARK, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 20 }}>
              Powered by In-House<br />Premium Chemicals
            </h2>
            <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", marginBottom: 24 }}>
              Unlike competitors who use off-the-shelf solvents, Prime Laundry manufactures its own premium cleaning chemicals in-house — ensuring unmatched hygiene, fabric care, and consistent quality across every garment.
            </p>
            {['Eco-friendly & biodegradable formulas', 'Gentle on silk, wool & cashmere', 'No toxic chemical residues', 'GST-compliant paperless invoicing'].map(pt => (
              <div key={pt} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#334155' }}>
                <CheckCircle2 size={16} color={GREEN} strokeWidth={2.5} />{pt}
              </div>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[{ val: '9+', label: 'Service Types' }, { val: '2000+', label: 'Pcs/Day Capacity' }, { val: '100%', label: 'In-house Chemicals' }, { val: '24hr', label: 'Express Option' }].map(({ val, label }) => (
              <div key={label} style={{ background: '#fff', borderRadius: 18, padding: '28px 20px', border: '1.5px solid #e8edf5', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: 36, color: BLUE, letterSpacing: '-0.03em', marginBottom: 6 }}>{val}</div>
                <div style={{ color: '#64748b', fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section style={{ background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DARK} 100%)`, padding: '64px 32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.04, backgroundImage: `radial-gradient(circle, ${GREEN} 1px, transparent 1px)`, backgroundSize: '36px 36px' }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(68,178,76,0.07) 0%, transparent 70%)' }} />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: '#fff', letterSpacing: '-0.03em', marginBottom: 14 }}>Ready to experience the difference?</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: "'DM Sans', sans-serif", fontSize: 16, marginBottom: 32 }}>Book your first order or enquire about a franchise.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
              style={{ padding: '13px 28px', borderRadius: 100, background: `linear-gradient(135deg, ${GREEN}, ${GREEN_DK})`, color: '#fff', textDecoration: 'none', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8, boxShadow: '0 4px 20px rgba(68,178,76,0.4)' }}>
              Get Franchise <ArrowRight size={16} />
            </motion.a>
            <motion.a href="/" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              style={{ padding: '13px 28px', borderRadius: 100, background: 'transparent', color: 'rgba(255,255,255,0.8)', border: '1.5px solid rgba(255,255,255,0.25)', textDecoration: 'none', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15 }}>
              Back to Home
            </motion.a>
          </div>
        </motion.div>
      </section>

      <style>{`
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  );
}