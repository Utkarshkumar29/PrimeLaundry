'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-semibold tracking-tight">
              <span className="text-white">Prime</span>
              <span className="text-teal">Laundry</span>
            </span>
          </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-gray-mid hover:text-white transition-colors duration-200 focus:outline-none focus-visible:text-teal"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/franchise" >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              //onClick={() => handleNavClick('#pricing')}
              className="px-6 py-2.5 rounded-full bg-teal text-navy font-semibold text-sm hover:bg-teal-dark transition-colors duration-200 teal-glow-sm cursor-pointer"
            >
              Get Franchise
            </motion.button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-0 left-0 right-0 bottom-0 z-40 glass-nav flex flex-col items-center justify-center gap-6"
          >
            <button
              className="absolute top-5 right-6 text-white p-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <XIcon size={28} />
            </button>
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                onClick={() => handleNavClick(link.href)}
                className="text-2xl font-display font-medium text-white hover:text-teal transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07, duration: 0.4 }}
              onClick={() => handleNavClick('#pricing')}
              className="mt-4 px-8 py-3 rounded-full bg-teal text-navy font-bold text-lg teal-glow-sm cursor-pointer"
            >
              Get Franchise
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}