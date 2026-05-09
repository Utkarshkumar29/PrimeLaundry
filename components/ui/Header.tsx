'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
  { label: 'Home',        href: '/'                  },
  { label: 'About',       href: '/about'             },
  { label: 'Services',    href: '/services'         },
  { label: 'Our Process', href: '/OurProcess'        },
  { label: 'Support',     href: '/ManagementSupport' },
  { label: 'Pricing',     href: '/pricing'          },
  { label: 'Blog',        href: '/blog'              },
  { label: 'Contact',     href: '#contact'           },
];

const WA_NUMBER     = '919131979530';
const WA_PICKUP_MSG = encodeURIComponent(
  "Hi Prime Laundry! 👋\n\nI'd like to book a laundry pickup.\n\nName: \nAddress: \nPreferred time: \n\nPlease confirm."
);
const BOOK_PICKUP_URL = `https://wa.me/${WA_NUMBER}?text=${WA_PICKUP_MSG}`;

const WA_SVG = (color = 'currentColor') => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function Header() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navWidth,   setNavWidth]   = useState(0);
  const router   = useRouter();
  const pathname = usePathname();

  const isHome    = pathname === '/';
  const transparent = isHome && !scrolled;

  /* ── scroll listener ── */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /* ── body lock ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  /* ── track viewport width to collapse nav ── */
  useEffect(() => {
    const fn = () => setNavWidth(window.innerWidth);
    fn();
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  const go = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) window.scrollTo({ top: (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    } else {
      router.push(href);
    }
  };

  /* 
    Breakpoints:
    < 768  → mobile (hamburger)
    768-1100 → tablet (show fewer nav items, no "Book Pickup" label, just icon)
    > 1100 → full desktop
  */
  const isMobile = navWidth < 768;
  const isTablet = navWidth >= 768 && navWidth < 1100;
  const isDesktop = navWidth >= 1100;

  // On tablet, hide some nav items to save space
  const visibleLinks = isTablet
    ? navLinks.filter(l => !['Support', 'Our Process', 'Contact'].includes(l.label))
    : navLinks;

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          transition: 'all 0.4s ease',
          background: transparent ? 'transparent' : 'rgba(255,255,255,0.97)',
          backdropFilter: transparent ? 'none' : 'blur(20px)',
          WebkitBackdropFilter: transparent ? 'none' : 'blur(20px)',
          borderBottom: transparent ? 'none' : '1px solid rgba(16,84,156,0.1)',
          boxShadow: transparent ? 'none' : '0 2px 24px rgba(0,0,0,0.07)',
        }}
      >
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          padding: transparent
            ? '16px 32px'
            : isTablet ? '10px 20px' : '11px 32px',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 12,
          transition: 'padding 0.4s ease',
        }}>

          {/* ── LOGO ── */}
          <Link href="/" style={{ flexShrink: 0, textDecoration: 'none' }}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              style={{ cursor: 'pointer' }}>
              <Image
                src="/logo.webp"
                alt="Prime Laundry"
                width={160} height={52}
                priority
                style={{
                  height: transparent ? 48 : isTablet ? 36 : 40,
                  width: 'auto', objectFit: 'contain', display: 'block',
                  mixBlendMode: transparent ? 'normal' : 'multiply',
                  transition: 'height 0.4s ease',
                }}
              />
            </motion.div>
          </Link>

          {/* ── DESKTOP / TABLET NAV ── */}
          {!isMobile && (
            <nav style={{
              display: 'flex', alignItems: 'center',
              gap: isTablet ? 0 : 2,
              flex: 1, justifyContent: 'center',
              overflow: 'hidden',
            }}>
              {visibleLinks.map((link) => {
                const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href.replace('#', '')));
                return (
                  <button
                    key={link.label}
                    onClick={() => go(link.href)}
                    style={{
                      background: active
                        ? (transparent ? 'rgba(255,255,255,0.18)' : 'rgba(16,84,156,0.07)')
                        : 'none',
                      border: 'none', cursor: 'pointer',
                      padding: isTablet ? '7px 10px' : '8px 12px',
                      borderRadius: 8,
                      fontSize: isTablet ? 13 : 14,
                      fontWeight: active ? 700 : 500,
                      fontFamily: "'DM Sans', sans-serif",
                      color: transparent
                        ? (active ? '#fff' : 'rgba(255,255,255,0.82)')
                        : (active ? '#10549c' : '#475569'),
                      transition: 'all 0.2s ease',
                      whiteSpace: 'nowrap',
                      position: 'relative',
                      // Blog link gets a special green accent
                      ...(link.label === 'Blog' ? {
                        color: transparent ? '#86e88b' : '#44b24c',
                        fontWeight: 700,
                      } : {}),
                    }}
                    onMouseEnter={(e) => {
                      const b = e.currentTarget as HTMLButtonElement;
                      b.style.background = transparent ? 'rgba(255,255,255,0.15)' : 'rgba(16,84,156,0.07)';
                      b.style.color = transparent ? '#fff' : '#10549c';
                    }}
                    onMouseLeave={(e) => {
                      const b = e.currentTarget as HTMLButtonElement;
                      b.style.background = active
                        ? (transparent ? 'rgba(255,255,255,0.18)' : 'rgba(16,84,156,0.07)')
                        : 'transparent';
                      // Blog stays green
                      if (link.label === 'Blog') {
                        b.style.color = transparent ? '#86e88b' : '#44b24c';
                      } else {
                        b.style.color = transparent
                          ? (active ? '#fff' : 'rgba(255,255,255,0.82)')
                          : (active ? '#10549c' : '#475569');
                      }
                    }}
                  >
                    {link.label}
                    {/* New badge on Blog */}
                    {link.label === 'Blog' && (
                      <span style={{
                        position: 'absolute', top: 2, right: 2,
                        width: 6, height: 6, borderRadius: '50%',
                        background: '#44b24c',
                        boxShadow: '0 0 0 2px rgba(68,178,76,0.3)',
                      }} />
                    )}
                    {active && link.label !== 'Blog' && (
                      <span style={{
                        position: 'absolute', bottom: 3, left: 12, right: 12,
                        height: 2, background: '#44b24c', borderRadius: 1,
                      }} />
                    )}
                  </button>
                );
              })}
            </nav>
          )}

          {/* ── DESKTOP CTAs ── */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>

              {/* Book Pickup */}
              <motion.a
                href={BOOK_PICKUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: isTablet ? '8px 12px' : '9px 16px',
                  borderRadius: 100,
                  background: transparent ? 'rgba(255,255,255,0.12)' : '#fff',
                  color: transparent ? '#fff' : '#10549c',
                  border: transparent
                    ? '1.5px solid rgba(255,255,255,0.35)'
                    : '1.5px solid rgba(16,84,156,0.25)',
                  cursor: 'pointer',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700, fontSize: isTablet ? 12 : 13,
                  display: 'flex', alignItems: 'center', gap: 6,
                  textDecoration: 'none', whiteSpace: 'nowrap',
                  backdropFilter: transparent ? 'blur(8px)' : 'none',
                  transition: 'all 0.25s ease',
                }}
              >
                {WA_SVG(transparent ? '#fff' : '#10549c')}
                {/* Hide text on tablet to save space */}
                {!isTablet && 'Book Pickup'}
              </motion.a>

              {/* Get Franchise */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 8px 28px rgba(68,178,76,0.45)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => go('/franchise')}
                style={{
                  padding: isTablet ? '8px 14px' : '10px 18px',
                  borderRadius: 100,
                  background: 'linear-gradient(135deg, #44b24c 0%, #2d9e36 100%)',
                  color: '#fff', border: 'none', cursor: 'pointer',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700, fontSize: isTablet ? 12 : 13,
                  boxShadow: '0 4px 18px rgba(68,178,76,0.35)',
                  whiteSpace: 'nowrap',
                }}
              >
                {isTablet ? 'Franchise' : 'Get Franchise'}
              </motion.button>
            </div>
          )}

          {/* ── MOBILE TOGGLE ── */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: transparent ? 'rgba(255,255,255,0.15)' : 'rgba(16,84,156,0.07)',
                border: transparent ? '1px solid rgba(255,255,255,0.25)' : '1px solid rgba(16,84,156,0.12)',
                borderRadius: 10, padding: 8, cursor: 'pointer',
                color: transparent ? '#fff' : '#10549c',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
        </div>
      </motion.header>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 98,
                background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)',
              }}
            />

            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0,
                width: '82%', maxWidth: 320, zIndex: 99,
                background: '#fff', boxShadow: '-24px 0 60px rgba(0,0,0,0.15)',
                display: 'flex', flexDirection: 'column',
                padding: '76px 24px 32px',
              }}
            >
              <button onClick={() => setMobileOpen(false)}
                style={{
                  position: 'absolute', top: 16, right: 16,
                  background: 'rgba(16,84,156,0.07)', border: '1px solid rgba(16,84,156,0.12)',
                  borderRadius: 10, padding: 8, cursor: 'pointer', color: '#10549c',
                  display: 'flex',
                }}>
                <X size={20} />
              </button>

              {/* Logo in drawer */}
              <Image src="/logo.webp" alt="Prime Laundry"
                width={130} height={44}
                style={{ height: 40, width: 'auto', marginBottom: 16, mixBlendMode: 'multiply' }} />

              <div style={{
                height: 2, width: 44,
                background: 'linear-gradient(90deg, #44b24c, transparent)',
                borderRadius: 2, marginBottom: 20,
              }} />

              {/* All nav links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1, overflowY: 'auto' }}>
                {navLinks.map((link, i) => {
                  const active = pathname === link.href;
                  const isBlog = link.label === 'Blog';
                  return (
                    <motion.button key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={() => go(link.href)}
                      style={{
                        background: active ? 'rgba(16,84,156,0.07)' : 'none',
                        border: 'none', cursor: 'pointer',
                        padding: '12px 12px', borderRadius: 10,
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        color: isBlog ? '#44b24c' : (active ? '#10549c' : '#334155'),
                        fontSize: 15, fontFamily: "'DM Sans', sans-serif",
                        fontWeight: isBlog ? 700 : (active ? 700 : 500),
                        textAlign: 'left',
                        borderLeft: active ? '3px solid #44b24c' : '3px solid transparent',
                        position: 'relative',
                      }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        {link.label}
                        {isBlog && (
                          <span style={{
                            fontSize: 9, fontWeight: 700, letterSpacing: '0.08em',
                            textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif",
                            color: '#44b24c', background: 'rgba(68,178,76,0.12)',
                            borderRadius: 100, padding: '1px 7px',
                          }}>New</span>
                        )}
                      </span>
                      <ChevronRight size={14} style={{ opacity: 0.4, flexShrink: 0 }} />
                    </motion.button>
                  );
                })}
              </div>

              {/* Mobile CTAs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16 }}>
                <motion.a
                  href={BOOK_PICKUP_URL}
                  target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  style={{
                    padding: '13px', borderRadius: 100, background: '#fff',
                    color: '#10549c', border: '1.5px solid rgba(16,84,156,0.25)',
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15,
                    textDecoration: 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  }}>
                  {WA_SVG('#10549c')} Book Pickup
                </motion.a>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.36 }}
                  onClick={() => go('/franchise')}
                  style={{
                    padding: '14px', borderRadius: 100,
                    background: 'linear-gradient(135deg, #44b24c, #2d9e36)',
                    color: '#fff', border: 'none', cursor: 'pointer',
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15,
                    boxShadow: '0 4px 20px rgba(68,178,76,0.35)',
                  }}>
                  Get Franchise →
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}