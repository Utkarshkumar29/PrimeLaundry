'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { ArrowRight, Star, Sparkles } from 'lucide-react';
import AppImage from '../ui/AppImage';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } }
};

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const statBadges = [
{ value: '10L+', label: 'Garments Cleaned' },
{ value: '250+', label: 'Team Members' },
{ value: '3+', label: 'Years of Excellence' }];


export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="blob-1 absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-teal/10 rounded-full blur-[120px]" />
        <div className="blob-2 absolute bottom-1/3 right-1/3 w-[300px] h-[300px] bg-teal/8 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-hero-glow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        {/* Left: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8">
          
          {/* Eyebrow badge */}
          <motion.div variants={slideUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal/20 bg-teal/8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-teal">
                India&apos;s Premium Laundry Service
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={slideUp} className="space-y-2">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-white">
              Your Clothes,{' '}
              <span className="font-display italic teal-text">Perfectly</span>
              <br />
              Clean.
            </h1>
            <p className="font-display text-3xl md:text-4xl font-light text-white/60 italic">
              We Pick Up &amp; Deliver.
            </p>
          </motion.div>

          {/* Subtext */}
          <motion.p variants={slideUp} className="text-gray-mid text-lg leading-relaxed max-w-lg">
            Premium laundry &amp; dry cleaning with free doorstep pickup. Trusted by{' '}
            <span className="text-white font-medium">1 lakh+ happy customers</span> across India.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={slideUp} className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleScroll('#pricing')}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-teal text-navy font-bold text-base teal-glow hover:bg-teal-dark transition-all duration-200">
              
              Schedule a Pickup
              <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleScroll('#services')}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-teal/40 text-teal font-semibold text-base hover:bg-teal/8 transition-all duration-200">
              
              View Services
            </motion.button>
          </motion.div>

          {/* Stat Badges */}
          <motion.div variants={slideLeft} className="flex flex-wrap gap-3 pt-2">
            {statBadges.map((badge, i) =>
            <motion.div
              key={badge.value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass-card-light rounded-2xl px-5 py-3 flex flex-col items-center min-w-[100px]">
              
                <span className="font-display text-xl font-bold text-navy">{badge.value}</span>
                <span className="text-xs text-gray-dark font-medium mt-0.5 text-center">{badge.label}</span>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate="visible"
          className="relative group">
          
          <div className="absolute inset-0 bg-teal/12 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-700" />
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/8 shadow-2xl">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_19b33739a-1774120941501.png"
              alt="Professional laundry service worker carefully folding clean white garments"
              fill
              priority
              className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
              sizes="(max-width: 768px) 100vw, 50vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />

            {/* Floating glass card */}
            <div className="absolute bottom-8 left-6 right-6 glass-card rounded-2xl p-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0">
                <Sparkles size={18} className="text-teal" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Premium Care Certified</p>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) =>
                  <Star key={i} size={10} className="fill-teal text-teal" />
                  )}
                </div>
              </div>
              <div className="ml-auto text-right">
                <p className="text-teal font-bold text-lg font-display">4.9/5</p>
                <p className="text-white/50 text-xs">Rating</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}