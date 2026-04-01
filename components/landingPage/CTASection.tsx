'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  const handleScroll = () => {
    const el = document.querySelector('#pricing');
    if (el) el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-navy section-pad relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-teal/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-teal/5 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal/20 bg-teal/8">
            <Sparkles size={14} className="text-teal" />
            <span className="text-xs font-semibold tracking-widest uppercase text-teal">
              Limited Offer
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-semibold text-white leading-tight">
            Ready for Perfectly{' '}
            <span className="italic font-light teal-text">Clean Clothes?</span>
          </h2>

          <p className="text-gray-mid text-lg max-w-xl mx-auto">
            Book your first pickup today and get{' '}
            <span className="text-teal font-semibold">20% off</span> your entire order.
            No code needed — discount applied automatically.
          </p>

          <motion.button
            whileHover={{ scale: 1.06, boxShadow: '0 0 60px rgba(0,229,200,0.35)' }}
            whileTap={{ scale: 0.97 }}
            onClick={handleScroll}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-teal text-navy font-bold text-lg teal-glow hover:bg-teal-dark transition-all duration-200"
          >
            Book a Pickup Now
            <ArrowRight size={20} />
          </motion.button>

          <p className="text-gray-dark text-xs">
            Free pickup · No commitment · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}