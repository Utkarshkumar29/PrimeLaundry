'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, TrendingUp, Users, Shield, Star,
  X, CheckCircle2, MessageCircle, Sparkles, MapPin,
} from 'lucide-react';
import Link from 'next/link';
import hero from "../../public/image.png"
import Image from 'next/image';

/* ── Brand tokens ─────────────────────────────────────────────── */
const NAVY  = '#0b1628';
const BLUE  = '#10549c';
const BDARK = '#0a3d75';
const GREEN = '#44b24c';
const GDARK = '#2d9e36';
const EASE  = [0.22, 1, 0.36, 1] as const;
const WA    = '919131979530';

/* ── Data ─────────────────────────────────────────────────────── */
const TRUST = [
  { icon: TrendingUp, value: '₹15L–₹20L', label: 'Monthly Revenue' },
  { icon: Users,      value: '500+',        label: 'Partners by 2029' },
  { icon: Shield,     value: '100%',         label: 'Ops Support' },
  { icon: Star,       value: '4.9★',         label: 'Satisfaction' },
];

const MODELS = [
  {
    id: 'basic', badge: 'Prime Basics', title: 'Prime Basics Warehouse',
    subtitle: 'Small to Mid-Size Cities', investment: '₹28.80 Lakhs',
    capacity: '1,000 Pieces / Day', revenue: '₹30,000 – ₹35,000 / Day',
    includes: ['Industrial Machinery & Equipment','Full Store Setup & Branding',
      'Staff Training at Head Office','Operations Support & CRM',
      'Confirmed Orders Provided','City-Level Exclusivity'],
    color: BLUE, popular: false,
  },
  {
    id: 'elite', badge: 'Prime Elite ★', title: 'Prime Elite Warehouse',
    subtitle: 'Metro / High Demand Cities', investment: '₹35.95 Lakhs',
    capacity: '2,000 Pieces / Day', revenue: '₹50,000 – ₹60,000 / Day',
    includes: ['Advanced Machinery & Equipment','Premium Store Setup & Branding',
      'Staff Training at Head Office','Operations Support & CRM',
      'Confirmed Orders Provided','City-Level Exclusivity'],
    color: GREEN, popular: true,
  },
];

function waLink(model: string) {
  const msg = encodeURIComponent(
    `Hi Prime Laundry! 👋\n\nInterested in *${model}* franchise.\n\nName:\nCity:\nPhone:`
  );
  window.open(`https://wa.me/${WA}?text=${msg}`, '_blank');
}

/* ── Modal ────────────────────────────────────────────────────── */
function FranchiseModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
      style={{ position:'fixed', inset:0, zIndex:9999,
        background:'rgba(6,12,28,0.88)', backdropFilter:'blur(10px)',
        display:'flex', alignItems:'center', justifyContent:'center', padding:20 }}
      onClick={onClose}>
      <motion.div
        initial={{ opacity:0, y:40, scale:0.96 }} animate={{ opacity:1, y:0, scale:1 }}
        exit={{ opacity:0, y:20, scale:0.96 }} transition={{ duration:0.35, ease:EASE }}
        onClick={e => e.stopPropagation()}
        style={{ background:BDARK, borderRadius:24, padding:'36px 32px',
          maxWidth:760, width:'100%', maxHeight:'90vh', overflowY:'auto',
          position:'relative', border:'1px solid rgba(255,255,255,0.1)',
          boxShadow:'0 40px 100px rgba(0,0,0,0.6)' }}>

        <button onClick={onClose} style={{ position:'absolute', top:20, right:20,
          background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.12)',
          borderRadius:10, padding:8, cursor:'pointer', color:'#fff',
          display:'flex', alignItems:'center', justifyContent:'center' }}>
          <X size={18}/>
        </button>

        <div style={{ marginBottom:28 }}>
          <span style={{ color:GREEN, fontFamily:"'DM Sans',sans-serif", fontSize:11,
            fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase',
            display:'block', marginBottom:8 }}>Franchise Investment Models</span>
          <h3 style={{ fontFamily:"'Fraunces',serif", fontWeight:800,
            fontSize:'clamp(1.6rem,3vw,2.2rem)', color:'#fff',
            letterSpacing:'-0.02em', lineHeight:1.1 }}>Choose Your Model</h3>
          <p style={{ color:'rgba(255,255,255,0.4)', fontFamily:"'DM Sans',sans-serif",
            fontSize:14, marginTop:8 }}>
            FOCO Model — You invest, we operate. Confirmed orders from Day 1.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:18 }} className="modal-grid">
          {MODELS.map(m => (
            <div key={m.id} style={{ borderRadius:20, overflow:'hidden',
              border: m.popular ? `2px solid ${GREEN}` : '1.5px solid rgba(255,255,255,0.1)',
              background: m.popular ? 'rgba(68,178,76,0.06)' : 'rgba(255,255,255,0.04)',
              position:'relative' }}>
              <div style={{ height:3, background: m.popular
                ? `linear-gradient(90deg,${GREEN},${GDARK})` : BLUE }}/>
              {m.popular && (
                <div style={{ position:'absolute', top:14, right:14, background:GREEN,
                  color:'#fff', borderRadius:100, padding:'3px 12px', fontSize:9,
                  fontWeight:700, fontFamily:"'DM Sans',sans-serif",
                  letterSpacing:'0.1em', textTransform:'uppercase' }}>Recommended</div>
              )}
              <div style={{ padding:'22px 20px' }}>
                <span style={{ display:'inline-block', padding:'3px 10px', borderRadius:6,
                  background: m.popular ? 'rgba(68,178,76,0.2)' : 'rgba(255,255,255,0.08)',
                  color:m.color, fontFamily:"'DM Sans',sans-serif", fontSize:10,
                  fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase',
                  marginBottom:10 }}>{m.badge}</span>
                <h4 style={{ fontFamily:"'Fraunces',serif", fontWeight:800,
                  fontSize:'1.1rem', color:'#fff', marginBottom:4 }}>{m.title}</h4>
                <p style={{ color:'rgba(255,255,255,0.4)', fontFamily:"'DM Sans',sans-serif",
                  fontSize:12, marginBottom:16 }}>Best for: {m.subtitle}</p>
                <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:16 }}>
                  {[['Investment',m.investment],['Capacity',m.capacity],['Daily Revenue',m.revenue]].map(([l,v]) => (
                    <div key={l} style={{ borderRadius:10, padding:'10px 12px',
                      background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ fontSize:9, fontWeight:700, letterSpacing:'0.12em',
                        textTransform:'uppercase', color:'rgba(255,255,255,0.35)',
                        marginBottom:3, fontFamily:"'DM Sans',sans-serif" }}>{l}</div>
                      <div style={{ fontFamily:"'Fraunces',serif", fontWeight:800,
                        fontSize:'1rem', color: l==='Daily Revenue' ? m.color : '#fff' }}>{v}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:6, marginBottom:18 }}>
                  {m.includes.slice(0,4).map(inc => (
                    <div key={inc} style={{ display:'flex', alignItems:'center', gap:7 }}>
                      <CheckCircle2 size={12} color={m.color} style={{ flexShrink:0 }}/>
                      <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:12,
                        color:'rgba(255,255,255,0.6)' }}>{inc}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display:'flex', gap:8 }}>
                  <motion.button onClick={() => waLink(m.title)}
                    whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }}
                    style={{ flex:1, padding:'11px 16px', borderRadius:100, border:'none',
                      cursor:'pointer', fontFamily:"'DM Sans',sans-serif", fontWeight:700,
                      fontSize:13, background: m.popular
                        ? `linear-gradient(135deg,${GREEN},${GDARK})` : 'rgba(255,255,255,0.1)',
                      color:'#fff', display:'flex', alignItems:'center',
                      justifyContent:'center', gap:6,
                      boxShadow: m.popular ? '0 4px 16px rgba(68,178,76,0.35)' : 'none' }}>
                    Apply Now <ArrowRight size={13}/>
                  </motion.button>
                  <button onClick={() => waLink(m.title)}
                    style={{ width:40, height:40, borderRadius:'50%',
                      border:'1.5px solid rgba(37,211,102,0.3)',
                      background:'rgba(37,211,102,0.08)', color:'#25D366',
                      cursor:'pointer', display:'flex', alignItems:'center',
                      justifyContent:'center' }}>
                    <MessageCircle size={16}/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:580px){.modal-grid{grid-template-columns:1fr!important}}`}</style>
      </motion.div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════════
   HERO
════════════════════════════════════════════════════════════════ */
export default function HeroSection() {
  const [showModels, setShowModels] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current; if (!c) return;
    const ctx = c.getContext('2d')!;
    const resize = () => { c.width = c.offsetWidth; c.height = c.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    const bubbles = Array.from({ length: 20 }, () => ({
      x: Math.random() * c.width, y: Math.random() * c.height,
      r: 4 + Math.random() * 24, vx: (Math.random()-0.5)*0.28,
      vy: -(0.14 + Math.random()*0.38), op: 0.025 + Math.random()*0.065,
    }));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      bubbles.forEach(b => {
        ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, Math.PI*2);
        ctx.strokeStyle = `rgba(68,178,76,${b.op})`; ctx.lineWidth = 1; ctx.stroke();
        b.x += b.vx; b.y += b.vy;
        if (b.y + b.r < 0) { b.y = c.height + b.r; b.x = Math.random()*c.width; }
        if (b.x < -b.r) b.x = c.width + b.r;
        if (b.x > c.width + b.r) b.x = -b.r;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 80, behavior:'smooth' });
  };

  return (
    <>
      <AnimatePresence>
        {showModels && <FranchiseModal onClose={() => setShowModels(false)}/>}
      </AnimatePresence>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&family=DM+Sans:wght@400;500;600;700&display=swap');

        :root {
          --hs-navy:  ${NAVY};
          --hs-green: ${GREEN};
          --hs-gdark: ${GDARK};
          --hs-blue:  ${BLUE};
        }

        /* shell */
        .hs { position:relative; min-height:100vh; background:var(--hs-navy);
          display:flex; flex-direction:column; overflow:hidden; }

        /* glows */
        .hs-g1 { position:absolute; top:-220px; right:-180px; width:680px; height:680px;
          background:radial-gradient(circle,rgba(68,178,76,0.12) 0%,transparent 65%);
          pointer-events:none; z-index:0; }
        .hs-g2 { position:absolute; bottom:-180px; left:-120px; width:540px; height:540px;
          background:radial-gradient(circle,rgba(16,84,156,0.16) 0%,transparent 65%);
          pointer-events:none; z-index:0; }

        /* grid-dot texture */
        .hs-dots { position:absolute; inset:0; z-index:1; pointer-events:none;
          background-image: radial-gradient(rgba(255,255,255,0.032) 1px, transparent 1px);
          background-size: 30px 30px; }

        .hs-canvas { position:absolute; inset:0; z-index:2; pointer-events:none;
          width:100%; height:100%; }

        /* ── main layout ── */
        .hs-wrap {
          position:relative; z-index:10; flex:1;
          display:grid; grid-template-columns:1fr 1.1fr;
          max-width:1340px; width:100%; margin:0 auto;
          padding:0 56px; gap:48px; min-height:100vh; align-items:stretch;
        }

        /* ── LEFT photo col ── */
        .hs-left { display:flex; align-items:flex-end; padding-right:0; }

        .hs-frame {
          position:relative; width:100%; height:80vh; min-height:580px; margin-bottom: 20px; 
          align-self:flex-end; border-radius:28px; overflow:hidden;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08),
                      0 40px 110px rgba(0,0,0,0.65);
        }
        .hs-frame img {
          width:100%; height:100%; object-fit:cover; object-position:center 20%;
          display:block; transition:transform 9s ease;
        }
        .hs-frame:hover img { transform:scale(1.05); }

        /* bottom gradient */
        .hs-frame::after {
          content:''; position:absolute; bottom:0; left:0; right:0; height:60%;
          background:linear-gradient(to top,
            rgba(11,22,40,0.95) 0%, rgba(11,22,40,0.55) 38%, transparent 100%);
          pointer-events:none;
        }

        /* floating badge: city */
        .hs-city {
          position:absolute; top:20px; left:20px; z-index:3;
          display:flex; align-items:center; gap:7px;
          background:rgba(11,22,40,0.68); backdrop-filter:blur(12px);
          border:1px solid rgba(255,255,255,0.1); border-radius:100px;
          padding:7px 15px;
        }

        /* floating badge: orders */
        .hs-orders {
          position:absolute; bottom:26px; left:18px; right:18px; z-index:3;
          background:rgba(11,22,40,0.82); backdrop-filter:blur(16px);
          border:1px solid rgba(68,178,76,0.28); border-radius:18px;
          padding:15px 18px; display:flex; align-items:center; gap:12px;
        }
        .hs-dot {
          width:10px; height:10px; border-radius:50%; flex-shrink:0;
          background:var(--hs-green);
          box-shadow:0 0 0 4px rgba(68,178,76,0.2);
          animation:pdot 2.3s ease infinite;
        }

        /* ── RIGHT text col ── */
        .hs-right {
          display:flex; flex-direction:column; justify-content:center;
          padding:108px 0 80px 10px;
        }

        .hs-pill {
          display:inline-flex; align-items:center; gap:9px;
          background:rgba(68,178,76,0.1); border:1px solid rgba(68,178,76,0.3);
          border-radius:100px; padding:6px 18px;
          margin-bottom:26px; width:fit-content;
        }

        .hs-h1 {
          font-family:'Fraunces',serif; font-weight:900;
          font-size:clamp(2.5rem,4.1vw,3.9rem);
          color:#fff; line-height:1.06; letter-spacing:-0.035em;
          margin:0 0 14px;
        }
        .hs-h1 em {
          font-style:italic; color:var(--hs-green);
          background: linear-gradient(135deg, ${GREEN} 0%, #82e888 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hs-body {
          font-family:'DM Sans',sans-serif; font-size:16.5px; line-height:1.78;
          color:rgba(255,255,255,0.5); max-width:415px; margin:0 0 12px;
        }

        /* green tagline strip */
        .hs-tagline {
          display:inline-flex; align-items:center; gap:10px;
          padding:10px 20px; margin-bottom:36px;
          background:rgba(68,178,76,0.08); border:1px solid rgba(68,178,76,0.2);
          border-radius:100px; width:fit-content;
        }

        /* CTAs */
        .hs-ctas { display:flex; align-items:center; gap:14px;
          flex-wrap:wrap; margin-bottom:46px; }

        .hs-cta-main {
          display:inline-flex; align-items:center; gap:9px;
          padding:15px 32px; border-radius:100px;
          background:linear-gradient(135deg,var(--hs-green) 0%,var(--hs-gdark) 100%);
          color:#fff; border:none; cursor:pointer;
          font-family:'DM Sans',sans-serif; font-weight:700; font-size:15px;
          box-shadow:0 6px 32px rgba(68,178,76,0.42); letter-spacing:0.01em;
          text-decoration:none; transition:transform 0.15s, box-shadow 0.15s;
        }
        .hs-cta-main:hover { transform:translateY(-2px); box-shadow:0 12px 44px rgba(68,178,76,0.56); }

        .hs-cta-ghost {
          display:inline-flex; align-items:center; gap:9px;
          padding:15px 28px; border-radius:100px; background:transparent;
          color:rgba(255,255,255,0.75); border:1.5px solid rgba(255,255,255,0.18);
          cursor:pointer; font-family:'DM Sans',sans-serif;
          font-weight:600; font-size:15px; text-decoration:none;
          transition:border-color 0.2s, color 0.2s, background 0.2s;
        }
        .hs-cta-ghost:hover {
          border-color:rgba(255,255,255,0.42); color:#fff;
          background:rgba(255,255,255,0.04);
        }

        /* trust grid */
        .hs-trust { display:grid; grid-template-columns:repeat(4,1fr); gap:11px; }

        .hs-tc {
          background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.07);
          border-radius:18px; padding:18px 14px;
          transition:background 0.25s, border-color 0.25s, transform 0.25s;
          cursor:default;
        }
        .hs-tc:hover {
          background:rgba(68,178,76,0.08); border-color:rgba(68,178,76,0.24);
          transform:translateY(-3px);
        }
        .hs-ti {
          width:33px; height:33px; border-radius:10px;
          background:rgba(68,178,76,0.15); display:flex;
          align-items:center; justify-content:center; margin-bottom:11px;
        }

        /* investment float card */
        .hs-invest {
          position:absolute; right:56px; bottom:70px; z-index:14;
          width:218px; background:rgba(10,19,38,0.9);
          backdrop-filter:blur(20px); border:1px solid rgba(68,178,76,0.28);
          border-radius:20px; padding:20px;
          box-shadow:0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05);
        }
        .hs-invest-label {
          font-family:'DM Sans',sans-serif; font-size:9.5px; font-weight:700;
          letter-spacing:0.16em; text-transform:uppercase;
          color:rgba(255,255,255,0.35); margin-bottom:10px;
          display:flex; align-items:center; justify-content:space-between;
        }
        .hs-invest-val {
          font-family:'Fraunces',serif; font-weight:800;
          font-size:21px; color:#fff; letter-spacing:-0.02em; margin-bottom:3px;
        }
        .hs-invest-sub {
          font-family:'DM Sans',sans-serif; font-size:11px;
          color:rgba(255,255,255,0.35); margin-bottom:16px;
        }
        .hs-invest-btn {
          width:100%; padding:'10px 0'; border-radius:100px;
          background:linear-gradient(135deg,var(--hs-green),var(--hs-gdark));
          color:#fff; border:none; cursor:pointer;
          font-family:'DM Sans',sans-serif; font-weight:700; font-size:13px;
          display:flex; align-items:center; justify-content:center; gap:7px;
          box-shadow:0 4px 18px rgba(68,178,76,0.4);
          transition:transform 0.15s;
        }
        .hs-invest-btn:hover { transform:scale(1.04); }

        @keyframes pdot {
          0%,100% { box-shadow:0 0 0 4px rgba(68,178,76,0.2); }
          50%      { box-shadow:0 0 0 9px rgba(68,178,76,0.05); }
        }

        /* responsive */
        @media(max-width:960px){
          .hs-wrap { grid-template-columns:1fr; padding:0 24px; min-height:unset; gap:0; }
          .hs-left { padding-right:0; height:360px; }
          .hs-frame { height:100%; border-radius:24px; align-self:stretch; }
          .hs-right { padding:40px 0 80px; }
          .hs-trust { grid-template-columns:1fr 1fr; }
          .hs-invest { right:24px; bottom:68px; }
        }
        @media(max-width:500px){
          .hs-h1 { font-size:2.15rem; }
          .hs-trust { grid-template-columns:1fr 1fr; gap:8px; }
          .hs-invest { display:none; }
        }
      `}</style>

      <section id="home" className="">
        <div className="hs-g1"/><div className="hs-g2"/>
        <div className="hs-dots"/>
        <canvas ref={canvasRef} className="hs-canvas"/>

        <div className="hs-wrap">

          {/* ══ LEFT PHOTO ══ */}
          <motion.div className="hs-left"
            initial={{ opacity:0, x:-36 }} animate={{ opacity:1, x:0 }}
            transition={{ duration:1, ease:EASE }}>

            <div className="hs-frame">
              <Image
                src={hero}
                alt="Prime Laundry warehouse"
                fill
                style={{ objectFit: "cover", objectPosition: "center 20%" }}
              />

              {/* city chip */}
              <div className="hs-city">
                <MapPin size={11} color={GREEN} strokeWidth={2.5}/>
                <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11,
                  fontWeight:600, color:'rgba(255,255,255,0.68)' }}>
                  Pan-India Network
                </span>
              </div>

              {/* orders badge */}
              <div className="hs-orders">
                <div className="hs-dot"/>
                <div style={{ flex:1 }}>
                  <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:9.5,
                    fontWeight:700, color:'rgba(255,255,255,0.35)',
                    textTransform:'uppercase', letterSpacing:'0.14em', marginBottom:3 }}>
                    FOCO Model
                  </div>
                  <div style={{ fontFamily:"'Fraunces',serif", fontWeight:700,
                    fontSize:14.5, color:'#fff', letterSpacing:'-0.01em' }}>
                    Confirmed Orders from Day 1
                  </div>
                </div>
                <div style={{ background:'rgba(68,178,76,0.14)',
                  border:'1px solid rgba(68,178,76,0.28)', borderRadius:10,
                  padding:'6px 11px', flexShrink:0, textAlign:'center' }}>
                  <div style={{ fontFamily:"'Fraunces',serif", fontWeight:800,
                    fontSize:13, color:GREEN }}>Zero</div>
                  <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:8.5,
                    color:'rgba(255,255,255,0.36)', fontWeight:700,
                    textTransform:'uppercase', letterSpacing:'0.08em' }}>Hunting</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ══ RIGHT TEXT ══ */}
          <div className="hs-right">

            <motion.div className="hs-pill"
              initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }}
              transition={{ duration:0.6, ease:EASE }}>
              <Sparkles size={13} color={GREEN} strokeWidth={2.5}/>
              <span style={{ color:'#7dd880', fontSize:12,
                fontFamily:"'DM Sans',sans-serif", fontWeight:700,
                letterSpacing:'0.06em', textTransform:'uppercase' }}>
                Accepting Franchise Applications
              </span>
            </motion.div>

            <motion.h1 className="hs-h1"
              initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }}
              transition={{ duration:0.82, ease:EASE, delay:0.1 }}>
              India's First<br/>
              <em>Warehouse-Based</em><br/>
              Laundry Franchise
            </motion.h1>

            <motion.p className="hs-body"
              initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }}
              transition={{ duration:0.7, ease:EASE, delay:0.18 }}>
              Build a profitable business backed by full brand support, trained staff,
              CRM software, and a battle-tested system — with orders delivered to you.
            </motion.p>

            <motion.div className="hs-tagline"
              initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }}
              transition={{ duration:0.6, ease:EASE, delay:0.25 }}>
              <span style={{ width:8, height:8, borderRadius:'50%', background:GREEN,
                flexShrink:0, animation:'pdot 2s ease infinite' }}/>
              <span style={{ fontFamily:"'Fraunces',serif", fontWeight:700,
                fontSize:14, color:'#fff', fontStyle:'italic' }}>
                No Customer Search.{' '}
                <span style={{ color:GREEN }}>Only Confirmed Orders.</span>
              </span>
            </motion.div>

            <motion.div className="hs-ctas"
              initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
              transition={{ duration:0.6, ease:EASE, delay:0.3 }}>
              <Link href="/supportPage" className="hs-cta-main">
                Apply for Franchise <ArrowRight size={16}/>
              </Link>
              <button className="hs-cta-ghost" onClick={() => scrollTo('#how-it-works')}>
                See How It Works
              </button>
            </motion.div>

            <motion.div className="hs-trust"
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
              transition={{ duration:0.7, ease:EASE, delay:0.36 }}>
              {TRUST.map(({ icon:Icon, value, label }, i) => (
                <motion.div key={label} className="hs-tc"
                  initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }}
                  transition={{ delay:0.42 + i*0.07, duration:0.45 }}>
                  <div className="hs-ti">
                    <Icon size={15} color={GREEN}/>
                  </div>
                  <div style={{ fontFamily:"'Fraunces',serif", fontWeight:700,
                    fontSize:16.5, color:'#fff', marginBottom:4, lineHeight:1.15 }}>
                    {value}
                  </div>
                  <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:10.5,
                    color:'rgba(255,255,255,0.4)', lineHeight:1.4 }}>
                    {label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>



      </section>
    </>
  );
}