'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  const handleScroll = () => {
    const el = document.querySelector('#pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-blue section-pad relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-green/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green/40 bg-green/10">
            <Sparkles size={14} className="text-green" />
            <span className="text-xs font-semibold tracking-widest uppercase text-green">Limited Offer</span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-semibold text-white leading-tight">
            Ready for Perfectly{' '}
            <span className="italic font-light text-green">Clean Clothes?</span>
          </h2>

          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Book your first pickup today and get{' '}
            <span className="text-green font-semibold">20% off</span> your entire order. No code needed.
          </p>

          <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }} onClick={handleScroll}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-green text-white font-bold text-lg green-glow hover:bg-green-dark transition-all duration-200">
            Book a Pickup Now
            <ArrowRight size={20} />
          </motion.button>

          <p className="text-white/40 text-xs">Free pickup · No commitment · Cancel anytime</p>
        </motion.div>
      </div>
    </section>
  );
}