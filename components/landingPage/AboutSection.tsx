'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gem, Leaf, Cpu, HeartHandshake } from 'lucide-react';

const pillars = [
  {
    icon: Gem,
    title: 'Quality First',
    desc: 'Every garment treated with precision and care',
  },
  {
    icon: Leaf,
    title: 'Eco Conscious',
    desc: 'Organic, anti-bacterial detergents — safe for you and the planet',
  },
  {
    icon: Cpu,
    title: 'Tech Enabled',
    desc: 'App-based scheduling, real-time tracking, and digital invoicing',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Obsessed',
    desc: '24/7 support and a 100% satisfaction guarantee on every order',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white section-pad">
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-teal-dark mb-4"
        >
          Who We Are
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-semibold text-navy mb-12 leading-tight max-w-2xl"
        >
          More Than Just Laundry —{' '}
          <span className="italic font-light">We&apos;re a Promise</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Editorial Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-gray-dark text-lg leading-relaxed mb-6">
              PrimeLaundry was founded with a singular mission: to make professional, hotel-quality
              fabric care accessible to every Indian household. We grew up watching our mothers spend
              hours on laundry. We decided that story needed a better ending.
            </p>
            <p className="text-gray-dark text-base leading-relaxed mb-6">
              Built on the pillars of trust, quality, and genuine convenience, we have served over
              one lakh families across India since 2019. Each garment that enters our care is tracked,
              treated, and returned with the precision of a luxury service — because that is exactly
              what it is.
            </p>
            <p className="text-gray-dark text-base leading-relaxed">
              From a single shirt to a full household wardrobe, from delicate silks to everyday cottons
              — we treat every fabric as if it were our own. That is not a tagline. That is our culture.
            </p>

            {/* Decorative teal rule */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-1 w-16 rounded-full bg-teal" />
              <span className="font-display text-sm italic text-gray-mid">
                Est. 2019 · New Delhi, India
              </span>
            </div>
          </motion.div>

          {/* Right: Brand Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6"
          >
            {pillars?.map((pillar, i) => (
              <motion.div
                key={pillar?.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                className="flex gap-4 items-start group"
              >
                <div className="h-12 w-12 rounded-2xl bg-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors duration-200">
                  <pillar.icon size={20} className="text-teal-dark" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-base mb-1">{pillar?.title}</h3>
                  <p className="text-gray-dark text-sm leading-relaxed">{pillar?.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}