'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
  { label: 'Our Process',   href: '/OurProcess'        },
  { label: 'Support',       href: '/ManagementSupport' },
  { label: 'Services',      href: '#services'          },
  { label: 'How It Works',  href: '#how-it-works'      },
  { label: 'Pricing',       href: '#pricing'           },
  { label: 'Contact',       href: '#contact'           },
];

export default function Header() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
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
      if (el) window.scrollTo({ top: (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    } else {
      router.push(href);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          transition: 'all 0.4s ease',
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(16,84,156,0.1)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.08)' : 'none',
        }}
      >
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          padding: scrolled ? '10px 32px' : '14px 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'padding 0.4s ease',
        }}>

          {/* LOGO — white pill so inside-border area is white, transparent outside */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                cursor: 'pointer',
                background: '#ffffff',
                borderRadius: 14,
                padding: '5px 10px',
                display: 'inline-flex',
                alignItems: 'center',
                boxShadow: '0 2px 16px rgba(0,0,0,0.18)',
                transition: 'all 0.4s ease',
              }}
            >
              <Image
                src="/logo.png"
                alt="Prime Laundry"
                width={220}
                height={74}
                priority
                style={{
                  height: scrolled ? 52 : 64,
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  transition: 'height 0.4s ease',
                }}
              />
            </motion.div>
          </Link>

          {/* DESKTOP NAV */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden md:flex">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => go(link.href)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '8px 14px', borderRadius: 8,
                  fontSize: 14, fontWeight: 500,
                  fontFamily: "'DM Sans', sans-serif",
                  color: scrolled ? '#10549c' : 'rgba(255,255,255,0.92)',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = scrolled
                    ? 'rgba(16,84,156,0.07)' : 'rgba(255,255,255,0.15)';
                  (e.currentTarget as HTMLButtonElement).style.color = scrolled ? '#10549c' : '#fff';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                  (e.currentTarget as HTMLButtonElement).style.color = scrolled ? '#10549c' : 'rgba(255,255,255,0.92)';
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: 12 }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => go('/franchise')}
              style={{
                padding: '10px 24px', borderRadius: 100,
                background: 'linear-gradient(135deg, #44b24c 0%, #2d9e36 100%)',
                color: '#fff', border: 'none', cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700, fontSize: 14,
                letterSpacing: '0.02em',
                boxShadow: '0 4px 20px rgba(68,178,76,0.4)',
              }}
            >
              Get Franchise
            </motion.button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: scrolled ? 'rgba(16,84,156,0.08)' : 'rgba(255,255,255,0.15)',
              border: scrolled ? '1px solid rgba(16,84,156,0.15)' : '1px solid rgba(255,255,255,0.25)',
              borderRadius: 10, padding: '8px', cursor: 'pointer',
              color: scrolled ? '#10549c' : '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            {mobileOpen ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0,
              width: '80%', maxWidth: 340,
              zIndex: 99,
              background: '#fff',
              boxShadow: '-20px 0 60px rgba(0,0,0,0.15)',
              display: 'flex', flexDirection: 'column',
              padding: '80px 32px 40px',
              gap: 8,
            }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'absolute', top: 20, right: 20,
                background: 'rgba(16,84,156,0.08)', border: '1px solid rgba(16,84,156,0.15)',
                borderRadius: 10, padding: 8, cursor: 'pointer', color: '#10549c',
              }}
            >
              <X size={20}/>
            </button>

            {/* Mobile — panel is white so logo shows naturally, no wrapper needed */}
            <Image
              src="/Logos.png"
              alt="Prime Laundry"
              width={180}
              height={60}
              style={{ height: 58, width: 'auto', display: 'block', marginBottom: 16 }}
            />

            <div style={{ height: 2, background: 'linear-gradient(90deg, #44b24c, transparent)', borderRadius: 2, marginBottom: 16 }}/>

            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => go(link.href)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '14px 16px', borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  color: '#10549c', fontSize: 16,
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
                  textAlign: 'left',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(16,84,156,0.06)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = 'transparent')}
              >
                {link.label} <ChevronRight size={16} style={{ opacity: 0.4 }}/>
              </motion.button>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              onClick={() => go('/franchise')}
              style={{
                marginTop: 'auto',
                padding: '14px 24px', borderRadius: 100,
                background: 'linear-gradient(135deg, #44b24c, #2d9e36)',
                color: '#fff', border: 'none', cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700, fontSize: 15,
                boxShadow: '0 4px 20px rgba(68,178,76,0.35)',
              }}
            >
              Get Franchise →
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            style={{ position: 'fixed', inset: 0, zIndex: 98, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
          />
        )}
      </AnimatePresence>
    </>
  );
}