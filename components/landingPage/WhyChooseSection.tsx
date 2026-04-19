'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Timer, Leaf, Award } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Pickup & Drop',
    desc: 'Complimentary doorstep pickup and delivery on every order — no minimum spend required.',
  },
  {
    icon: Timer,
    title: '90-Minute Express Service',
    desc: 'Need it fast? Our express track delivers freshly cleaned clothes in just 90 minutes.',
  },
  {
    icon: Leaf,
    title: 'Organic & Anti-Bacterial',
    desc: 'All washes use certified organic, anti-bacterial detergents — safe for children and sensitive skin.',
  },
  {
    icon: Award,
    title: 'Professional Fabric Care',
    desc: 'Trained specialists handle every fabric type — silk, wool, cashmere, denim, and more.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function WhyChooseSection() {
  return (
    <section className="bg-navy section-pad relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal/6 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-teal mb-4">Our Difference</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white">
            Why <span className="italic font-light teal-text">PrimeLaundry?</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {features?.map((feature) => (
            <motion.div
              key={feature?.title}
              variants={cardVariants}
              whileHover={{ x: 4 }}
              className="teal-border-card bg-navy-mid rounded-2xl p-7 flex gap-5 items-start group transition-all duration-200"
            >
              <div className="h-12 w-12 rounded-xl bg-teal/15 flex items-center justify-center flex-shrink-0 group-hover:bg-teal/25 transition-colors">
                <feature.icon size={22} className="text-teal" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-base mb-2">{feature?.title}</h3>
                <p className="text-gray-mid text-sm leading-relaxed">{feature?.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}