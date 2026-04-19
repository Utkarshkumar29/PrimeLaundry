'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Telescope, Target, Diamond } from 'lucide-react';

const cards = [
  {
    icon: Telescope,
    label: 'Our Vision',
    content: "To become India's most trusted and loved laundry & dry cleaning brand — delivering world-class fabric care to every doorstep, in every city.",
    type: 'text',
  },
  {
    icon: Target,
    label: 'Our Mission',
    content: 'To make premium laundry effortless and affordable for every Indian household by combining cutting-edge technology, eco-friendly practices, and heartfelt service.',
    type: 'text',
  },
  {
    icon: Diamond,
    label: 'Our Values',
    type: 'list',
    values: [
      'Integrity in every interaction',
      'Excellence in every garment',
      'Sustainability in every wash',
      'Empathy for every customer',
      'Innovation in every process',
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function VisionMissionSection() {
  return (
    <section className="bg-navy section-pad relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal/6 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-teal mb-4">Our Foundation</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white">
            What <span className="italic font-light teal-text">Drives Us</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {cards?.map((card) => (
            <motion.div
              key={card?.label}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="relative rounded-3xl p-8 border border-white/10 bg-navy-mid transition-all duration-300 group"
            >
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-teal rounded-full opacity-80" />
              <div className="mb-6">
                <div className="h-12 w-12 rounded-2xl bg-teal/15 flex items-center justify-center mb-4 group-hover:bg-teal/25 transition-colors">
                  <card.icon size={22} className="text-teal" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-white">{card?.label}</h3>
              </div>
              {card?.type === 'text' ? (
                <p className="text-gray-mid text-base leading-relaxed">{card?.content}</p>
              ) : (
                <ul className="space-y-3">
                  {card?.values?.map((val) => (
                    <li key={val} className="flex items-start gap-3 text-gray-mid text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal mt-2 flex-shrink-0" />
                      {val}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}