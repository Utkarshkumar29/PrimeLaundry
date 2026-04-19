'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
  { label: 'About',      href: '/about'             },
  { label: 'Services',   href: '/services'          },
  { label: 'Our Process',href: '/OurProcess'        },
  { label: 'Support',    href: '/ManagementSupport' },
  { label: 'Pricing',    href: '/pricing'           },
  { label: 'Contact',    href: '#contact'           },
];

export default function Header() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router   = useRouter();
  const pathname = usePathname();

  // On non-home pages the hero isn't dark, so always use solid nav
  const isHome = pathname === '/';

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    fn(); // run once on mount
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

  // Nav is transparent only on home page before scrolling
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
          background: transparent
            ? 'transparent'
            : 'rgba(255,255,255,0.97)',
          backdropFilter: transparent ? 'none' : 'blur(20px)',
          WebkitBackdropFilter: transparent ? 'none' : 'blur(20px)',
          borderBottom: transparent
            ? 'none'
            : '1px solid rgba(16,84,156,0.1)',
          boxShadow: transparent ? 'none' : '0 2px 24px rgba(0,0,0,0.07)',
        }}
      >
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          padding: transparent ? '18px 32px' : '12px 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'padding 0.4s ease',
        }}>

          {/* LOGO */}
          <Link href="/">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              style={{ cursor: 'pointer',
                // Subtle white bg so logo is always legible
                background: transparent ? 'rgba(255,255,255,0.9)' : 'transparent',
                borderRadius: transparent ? 10 : 0,
                padding: transparent ? '4px 8px' : '0',
                transition: 'all 0.3s ease',
              }}>
              <Image
                src="/logo.png"
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

          {/* DESKTOP NAV */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }}
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
                    padding: '8px 14px', borderRadius: 8,
                    fontSize: 14, fontWeight: active ? 700 : 500,
                    fontFamily: "'DM Sans', sans-serif",
                    color: transparent
                      ? (active ? '#fff' : 'rgba(255,255,255,0.82)')
                      : (active ? '#10549c' : '#475569'),
                    transition: 'all 0.2s ease',
                    letterSpacing: '0.01em',
                    position: 'relative',
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
                  {/* Active underline */}
                  {active && (
                    <span style={{ position: 'absolute', bottom: 4, left: 14, right: 14,
                      height: 2, background: '#44b24c', borderRadius: 1 }} />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 8px 28px rgba(68,178,76,0.45)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => go('/franchise')}
              style={{
                padding: '10px 24px', borderRadius: 100,
                background: 'linear-gradient(135deg, #44b24c 0%, #2d9e36 100%)',
                color: '#fff', border: 'none', cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700, fontSize: 14, letterSpacing: '0.02em',
                boxShadow: '0 4px 18px rgba(68,178,76,0.35)',
              }}
            >
              Get Franchise
            </motion.button>
          </div>

          {/* MOBILE TOGGLE */}
         {/* <button
            className=" flex md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: transparent ? 'rgba(255,255,255,0.15)' : 'rgba(16,84,156,0.07)',
              border: transparent ? '1px solid rgba(255,255,255,0.25)' : '1px solid rgba(16,84,156,0.12)',
              borderRadius: 10, padding: 8, cursor: 'pointer',
              color: transparent ? '#fff' : '#10549c',
              display: 'flex', alignItems: 'center',
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>*/}
        </div>
      </motion.header>

      {/* MOBILE SIDE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{ position: 'fixed', inset: 0, zIndex: 98,
                background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)' }}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: 'fixed', top: 0, right: 0, bottom: 0,
                width: '82%', maxWidth: 340, zIndex: 99,
                background: '#fff', boxShadow: '-24px 0 60px rgba(0,0,0,0.15)',
                display: 'flex', flexDirection: 'column', padding: '80px 28px 40px' }}
            >
              <button onClick={() => setMobileOpen(false)}
                style={{ position: 'absolute', top: 18, right: 18,
                  background: 'rgba(16,84,156,0.07)',
                  border: '1px solid rgba(16,84,156,0.12)',
                  borderRadius: 10, padding: 8, cursor: 'pointer', color: '#10549c' }}>
                <X size={20} />
              </button>

              <Image src="/Logo__1_-1.png" alt="Prime Laundry"
                width={140} height={46}
                style={{ height: 44, width: 'auto', marginBottom: 20 }} />

              <div style={{ height: 2, width: 48,
                background: 'linear-gradient(90deg, #44b24c, transparent)',
                borderRadius: 2, marginBottom: 24 }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
                {navLinks.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.button key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.045 }}
                      onClick={() => go(link.href)}
                      style={{ background: active ? 'rgba(16,84,156,0.07)' : 'none',
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

              <motion.button
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => go('/franchise')}
                style={{ padding: '14px', borderRadius: 100,
                  background: 'linear-gradient(135deg, #44b24c, #2d9e36)',
                  color: '#fff', border: 'none', cursor: 'pointer',
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15,
                  boxShadow: '0 4px 20px rgba(68,178,76,0.35)' }}>
                Get Franchise →
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}