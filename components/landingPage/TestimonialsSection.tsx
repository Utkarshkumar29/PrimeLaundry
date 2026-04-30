'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const BLUE      = '#10549c';
const BLUE_DARK = '#0a3d75';
const GREEN     = '#44b24c';
const CREAM     = '#f7f5f0';
const EASE = [0.22, 1, 0.36, 1] as const;

// Hand-picked best reviews from Google Business Profile
const testimonials = [
  {
    quote: "Best Laundry service in Raipur. Got frustrated with every other laundry service. I hope this startup grows big.",
    name: 'Ujjwal Singh',
    tag: 'Local Guide · 31 Reviews',
    city: 'Raipur',
    rating: 5,
    highlight: 'Best in Raipur',
  },
  {
    quote: "Cloth washing and ironing service at ₹12 per cloth is affordable especially for bachelors and singles! They even offer pickup and drop at an affordable charge too!",
    name: 'Vishal Singh Rajput',
    tag: 'Local Guide · 133 Reviews',
    city: 'Raipur',
    rating: 5,
    highlight: '₹12 per cloth',
  },
  {
    quote: "I am glad that I found Prime Laundry. Very genuine rates, tidy work and awesome service. I have been a regular customer and will always be.",
    name: 'Mausam Singh',
    tag: 'Local Guide · 46 Reviews',
    city: 'Raipur',
    rating: 5,
    highlight: 'Regular Customer',
  },
  {
    quote: "Amazing quality — first I thought how is this possible in just ₹12! But after receiving my clothes, bed sheet and blanket. Really thanks to Prime Laundry.",
    name: 'Sharique Khan',
    tag: 'Local Guide · 191 Reviews',
    city: 'Raipur',
    rating: 5,
    highlight: 'Amazing Quality',
  },
  {
    quote: "They did a good job of dry washing my blankets. Initially due to rain they were a little smelly but they were courteous enough to redo the washing without charging extra. Rates are quite affordable.",
    name: 'Sunny Murmu',
    tag: '5 Reviews',
    city: 'Raipur',
    rating: 5,
    highlight: 'Above & Beyond',
  },
  {
    quote: "Unexpected service — they delivered in just 24 hours at a very affordable price. Happy with their service. Thank you Prime Laundry!",
    name: 'Kavita Nirmalkar',
    tag: 'Verified Customer',
    city: 'Raipur',
    rating: 5,
    highlight: '24hr Delivery',
  },
  {
    quote: "Great service all in all. Timely pickup from my hotel, delivery, everything nicely sorted. Superb! Thank you.",
    name: 'Jasa Zigert',
    tag: '4 Reviews',
    city: 'Raipur',
    rating: 5,
    highlight: 'Hotel Pickup',
  },
  {
    quote: "They are excellent — they do their work with full honesty and make their promise true. More affordable than any other laundry. I am very happy with their service.",
    name: 'Ashish Dubey',
    tag: '11 Reviews',
    city: 'Raipur',
    rating: 5,
    highlight: 'Honest & Affordable',
  },
];

// Show 3 at a time on desktop, 1 on mobile
const VISIBLE = 3;

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [width, setWidth] = useState(1024);

  useEffect(() => {
    setWidth(window.innerWidth);
    const fn = () => setWidth(window.innerWidth);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  const isMobile = width < 768;
  const visible  = isMobile ? 1 : VISIBLE;
  const total    = testimonials.length;
  const maxIndex = total - visible;

  const next = useCallback(() => {
    setDirection(1);
    setCurrent(p => (p >= maxIndex ? 0 : p + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(p => (p <= 0 ? maxIndex : p - 1));
  }, [maxIndex]);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const shown = testimonials.slice(current, current + visible);
  // wrap-around if near end
  const cards = shown.length < visible
    ? [...shown, ...testimonials.slice(0, visible - shown.length)]
    : shown;

  const slideVariants = {
    enter:  (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  const overallRating = 4.9;
  const totalReviews  = 50;

  return (
    <section id="reviews" style={{ background: CREAM, padding: '80px 24px', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{
            display: 'inline-block', marginBottom: 12,
            padding: '5px 18px', borderRadius: 100,
            background: 'rgba(68,178,76,0.12)', border: '1px solid rgba(68,178,76,0.25)',
            color: GREEN, fontFamily: "'DM Sans', sans-serif",
            fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
          }}>Customer Stories</span>
          <h2 style={{
            fontFamily: "'Fraunces', serif", fontWeight: 900,
            fontSize: 'clamp(2rem,4vw,3rem)', color: BLUE_DARK,
            letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 14,
          }}>
            What Our Customers Say
          </h2>

          {/* Google rating badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 16,
            padding: '14px 28px', borderRadius: 100,
            background: '#fff', border: '1.5px solid #e8edf5',
            boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {/* Google G */}
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, color: BLUE_DARK }}>
                Google Reviews
              </span>
            </div>
            <div style={{ width: 1, height: 20, background: '#e2e8f0' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: '1.3rem', color: BLUE_DARK }}>
                {overallRating}
              </span>
              <div style={{ display: 'flex', gap: 2 }}>
                {[1,2,3,4,5].map(s => (
                  <Star key={s} size={13} fill="#FFC107" color="#FFC107" />
                ))}
              </div>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#64748b' }}>
                ({totalReviews}+ reviews)
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Carousel ── */}
        <div style={{ position: 'relative' }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: EASE }}
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${visible}, 1fr)`,
                gap: 20,
              }}
            >
              {cards.map((t, i) => (
                <div key={`${t.name}-${i}`} style={{
                  background: '#fff',
                  borderRadius: 24,
                  padding: '28px 24px',
                  border: '1.5px solid #e8edf5',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  display: 'flex', flexDirection: 'column', gap: 16,
                  position: 'relative', overflow: 'hidden',
                }}>
                  {/* Green top stripe */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                    background: `linear-gradient(90deg, ${GREEN}, rgba(68,178,76,0.3))`,
                  }} />

                  {/* Highlight badge */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    padding: '4px 10px', borderRadius: 6,
                    background: 'rgba(68,178,76,0.1)',
                    alignSelf: 'flex-start',
                  }}>
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif", fontSize: 10,
                      fontWeight: 700, color: GREEN,
                      letterSpacing: '0.06em', textTransform: 'uppercase',
                    }}>{t.highlight}</span>
                  </div>

                  {/* Stars */}
                  <div style={{ display: 'flex', gap: 3 }}>
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={14} fill="#FFC107" color="#FFC107" />
                    ))}
                  </div>

                  {/* Quote icon */}
                  <Quote size={24} color="rgba(16,84,156,0.1)" style={{ flexShrink: 0 }} />

                  {/* Review text */}
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14, lineHeight: 1.75,
                    color: '#334155', flex: 1,
                    fontStyle: 'italic',
                  }}>
                    "{t.quote}"
                  </p>

                  {/* Reviewer */}
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    paddingTop: 16, borderTop: '1px solid #f0f4f8',
                  }}>
                    {/* Avatar */}
                    <div style={{
                      width: 38, height: 38, borderRadius: '50%', flexShrink: 0,
                      background: `linear-gradient(135deg, ${BLUE_DARK}, ${GREEN})`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff', fontFamily: "'Fraunces', serif",
                      fontWeight: 800, fontSize: 15,
                    }}>
                      {t.name[0]}
                    </div>
                    <div>
                      <p style={{
                        fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                        fontSize: 13, color: BLUE_DARK,
                      }}>{t.name}</p>
                      <p style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 11, color: '#94a3b8',
                      }}>{t.tag} · {t.city}</p>
                    </div>
                    {/* Google G small */}
                    <div style={{ marginLeft: 'auto' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Controls ── */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: 20, marginTop: 36,
        }}>
          <button onClick={prev} style={{
            width: 44, height: 44, borderRadius: '50%',
            border: '1.5px solid #e2e8f0', background: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#64748b',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = BLUE;
              (e.currentTarget as HTMLButtonElement).style.color = BLUE;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = '#e2e8f0';
              (e.currentTarget as HTMLButtonElement).style.color = '#64748b';
            }}>
            <ChevronLeft size={18} />
          </button>

          {/* Dots — one per card group */}
          <div style={{ display: 'flex', gap: 6 }}>
            {Array.from({ length: maxIndex + 1 }, (_, i) => (
              <button key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                style={{
                  height: 8, borderRadius: 4,
                  width: i === current ? 28 : 8,
                  background: i === current ? BLUE : '#cbd5e1',
                  border: 'none', cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>

          <button onClick={next} style={{
            width: 44, height: 44, borderRadius: '50%',
            border: '1.5px solid #e2e8f0', background: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#64748b',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = BLUE;
              (e.currentTarget as HTMLButtonElement).style.color = BLUE;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = '#e2e8f0';
              (e.currentTarget as HTMLButtonElement).style.color = '#64748b';
            }}>
            <ChevronRight size={18} />
          </button>
        </div>

        {/* ── View all on Google ── */}
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a href="https://www.google.com/search?client=ms-android-realme-terr1-rso2&sca_esv=a2a26c5991e8083d&hl=en-GB&cs=1&sxsrf=ANbL-n7dn_nnArpkMtoQ4Xrp4LYu1BOJEQ:1777489943569&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOTS3k9tLCQTRuBrEdiQQDP4ayfrfEgQdvw-KgStOcvvo3FMvurihZ2TzpHSJsGVF3F5rkNdVElXipmjXjGeolMdcCEoQU4UHiLExFUQgiTmJITSZ8MAOaPpcZPMPyfKAOM64Y1o%3D&q=Prime+laundary+%7C+Drycleaning+%7C+wash+%26+fold+Reviews&sa=X&ved=2ahUKEwijmraF4pOUAxWaxjgGHchFL7IQ0bkNegQIJBAF&cshid=1777490125490&biw=1920&bih=911&dpr=1" target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '11px 24px', borderRadius: 100,
              background: '#fff', border: '1.5px solid #e2e8f0',
              color: BLUE_DARK, textDecoration: 'none',
              fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 13,
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = BLUE}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e2e8f0'}>
            <svg width="14" height="14" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            View all reviews on Google
          </a>
        </div>

      </div>
    </section>
  );
}