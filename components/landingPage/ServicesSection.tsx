'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Shirt, Zap, ShoppingBag, Square, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Wind,
    title: 'Dry Cleaning',
    desc: 'Expert solvent-based cleaning for delicate fabrics, suits, sarees, and formal wear.',
  },
  {
    icon: Shirt,
    title: 'Laundry',
    desc: 'Professional wash, dry, and fold service using premium, fabric-safe detergents.',
  },
  {
    icon: Zap,
    title: 'Steam Iron',
    desc: 'Crisp, wrinkle-free garments pressed to perfection with industrial steam technology.',
  },
  {
    icon: ShoppingBag,
    title: 'Shoe Cleaning',
    desc: 'Deep clean, deodorize, and restore your footwear to showroom condition.',
  },
  {
    icon: Square,
    title: 'Carpet Cleaning',
    desc: 'Heavy-duty cleaning for carpets, rugs, and floor coverings with stain removal.',
  },
  {
    icon: Briefcase,
    title: 'Bag Cleaning',
    desc: 'Specialist care for leather, canvas, and fabric bags — from handbags to backpacks.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="bg-off-white section-pad">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-teal-dark mb-4">
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">
            Our Expert <span className="italic font-light">Services</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services?.map((service) => (
            <motion.div
              key={service?.title}
              variants={cardVariants}
              className="service-card bg-white rounded-3xl p-8 border border-gray-light group cursor-default"
            >
              <div className="h-14 w-14 rounded-2xl bg-teal/10 flex items-center justify-center mb-5 group-hover:bg-teal/20 transition-colors duration-200">
                <service.icon size={24} className="text-teal-dark" />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy mb-3">{service?.title}</h3>
              <p className="text-gray-dark text-sm leading-relaxed">{service?.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}