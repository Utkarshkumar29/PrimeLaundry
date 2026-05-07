'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
  { label: 'Home',       href: '/'             },
  { label: 'About',      href: '/about'        },
  { label: 'Services',   href: '/services'     },
  { label: 'Our Process',href: '/OurProcess'   },
  { label: 'Support',    href: '/ManagementSupport' },
  { label: 'Pricing',    href: '/pricing'      },
  { label: 'Contact',    href: '#contact'      },
];

const WA_NUMBER = '919131979530';
const WA_PICKUP_MSG = encodeURIComponent(
  "Hi Prime Laundry! 👋\n\nI'd like to book a laundry pickup.\n\nName: \nAddress: \nPreferred time: \n\nPlease confirm."
);
const BOOK_PICKUP_URL = `https://wa.me/${WA_NUMBER}?text=${WA_PICKUP_MSG}`;

export default function Header() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router   = useRouter();
  const pathname = usePathname();

  const isHome = pathname === '/';

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const go = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) window.scrollTo({
        top: (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth',
      });
    } else {
      router.push(href);
    }
  };

  const transparent = isHome && !scrolled;

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
          padding: transparent ? '18px 32px' : '12px 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 16,
          transition: 'padding 0.4s ease',
        }}>

          {/* ── LOGO ── */}
          <Link href="/">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              style={{
                cursor: 'pointer', flexShrink: 0,
                borderRadius: transparent ? 10 : 0,
                padding: transparent ? '4px 8px' : '0',
                transition: 'all 0.3s ease',
              }}>
              <Image
                src="/logo.webp"
                alt="Prime Laundry"
                width={160} height={52}
                priority
                style={{
                  height: transparent ? 50 : 42,
                  width: 'auto', objectFit: 'contain', display: 'block',
                  transition: 'height 0.4s ease',
                }}
              />
            </motion.div>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1, justifyContent: 'center' }}
            className="hidden md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <button
                  key={link.label}
                  onClick={() => go(link.href)}
                  style={{
                    background: active
                      ? (transparent ? 'rgba(255,255,255,0.18)' : 'rgba(16,84,156,0.07)')
                      : 'none',
                    border: 'none', cursor: 'pointer',
                    padding: '8px 13px', borderRadius: 8,
                    fontSize: 14, fontWeight: active ? 700 : 500,
                    fontFamily: "'DM Sans', sans-serif",
                    color: transparent
                      ? (active ? '#fff' : 'rgba(255,255,255,0.82)')
                      : (active ? '#10549c' : '#475569'),
                    transition: 'all 0.2s ease',
                    letterSpacing: '0.01em',
                    position: 'relative',
                    whiteSpace: 'nowrap',
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
                    b.style.color = transparent
                      ? (active ? '#fff' : 'rgba(255,255,255,0.82)')
                      : (active ? '#10549c' : '#475569');
                  }}
                >
                  {link.label}
                  {active && (
                    <span style={{
                      position: 'absolute', bottom: 4, left: 13, right: 13,
                      height: 2, background: '#44b24c', borderRadius: 1,
                    }} />
                  )}
                </button>
              );
            })}
          </nav>

          {/* ── DESKTOP CTAs ── */}
          <div className="hidden md:flex" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>

            {/* Book Pickup — outlined style */}
            <motion.a
              href={BOOK_PICKUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '9px 18px', borderRadius: 100,
                background: transparent ? 'rgba(255,255,255,0.12)' : '#fff',
                color: transparent ? '#fff' : '#10549c',
                border: transparent
                  ? '1.5px solid rgba(255,255,255,0.35)'
                  : '1.5px solid rgba(16,84,156,0.28)',
                cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700, fontSize: 13,
                letterSpacing: '0.01em',
                display: 'flex', alignItems: 'center', gap: 6,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                backdropFilter: transparent ? 'blur(8px)' : 'none',
                transition: 'all 0.25s ease',
                boxShadow: transparent ? 'none' : '0 2px 10px rgba(16,84,156,0.10)',
              }}
            >
              {/* WhatsApp icon */}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Book Pickup
            </motion.a>

            {/* Get Franchise — solid green */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 8px 28px rgba(68,178,76,0.45)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => go('/franchise')}
              style={{
                padding: '10px 20px', borderRadius: 100,
                background: 'linear-gradient(135deg, #44b24c 0%, #2d9e36 100%)',
                color: '#fff', border: 'none', cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700, fontSize: 13, letterSpacing: '0.02em',
                boxShadow: '0 4px 18px rgba(68,178,76,0.35)',
                whiteSpace: 'nowrap',
              }}
            >
              Get Franchise
            </motion.button>
          </div>

          {/* ── MOBILE TOGGLE ── */}
          <button
            className="flex md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: transparent ? 'rgba(255,255,255,0.15)' : 'rgba(16,84,156,0.07)',
              border: transparent ? '1px solid rgba(255,255,255,0.25)' : '1px solid rgba(16,84,156,0.12)',
              borderRadius: 10, padding: 8, cursor: 'pointer',
              color: transparent ? '#fff' : '#10549c',
              
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* ── MOBILE SIDE DRAWER ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 98,
                background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)',
              }}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0,
                width: '82%', maxWidth: 340, zIndex: 99,
                background: '#fff', boxShadow: '-24px 0 60px rgba(0,0,0,0.15)',
                display: 'flex', flexDirection: 'column', padding: '80px 28px 36px',
              }}
            >
              <button onClick={() => setMobileOpen(false)}
                style={{
                  position: 'absolute', top: 18, right: 18,
                  background: 'rgba(16,84,156,0.07)',
                  border: '1px solid rgba(16,84,156,0.12)',
                  borderRadius: 10, padding: 8, cursor: 'pointer', color: '#10549c',
                }}>
                <X size={20} />
              </button>

              <Image src="/logo.webp" alt="Prime Laundry"
                width={140} height={46}
                style={{ height: 44, width: 'auto', marginBottom: 20 }} />

              <div style={{
                height: 2, width: 48,
                background: 'linear-gradient(90deg, #44b24c, transparent)',
                borderRadius: 2, marginBottom: 24,
              }} />

              {/* Nav links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
                {navLinks.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.button key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.045 }}
                      onClick={() => go(link.href)}
                      style={{
                        background: active ? 'rgba(16,84,156,0.07)' : 'none',
                        border: 'none', cursor: 'pointer',
                        padding: '13px 14px', borderRadius: 10,
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        color: active ? '#10549c' : '#334155',
                        fontSize: 16, fontFamily: "'DM Sans', sans-serif",
                        fontWeight: active ? 700 : 500, textAlign: 'left',
                        borderLeft: active ? '3px solid #44b24c' : '3px solid transparent',
                      }}>
                      {link.label}
                      <ChevronRight size={15} style={{ opacity: 0.4 }} />
                    </motion.button>
                  );
                })}
              </div>

              {/* Mobile CTAs — stacked */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>

                {/* Book Pickup — WhatsApp */}
                <motion.a
                  href={BOOK_PICKUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 }}
                  style={{
                    padding: '13px', borderRadius: 100,
                    background: '#fff',
                    color: '#10549c',
                    border: '1.5px solid rgba(16,84,156,0.28)',
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700, fontSize: 15,
                    textDecoration: 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    boxShadow: '0 2px 10px rgba(16,84,156,0.10)',
                  }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="#10549c">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Book Pickup
                </motion.a>

                {/* Get Franchise */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.33 }}
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