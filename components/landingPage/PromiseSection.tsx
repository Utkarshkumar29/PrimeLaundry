'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, ThumbsUp } from 'lucide-react';

const promises = [
  { icon: Clock, label: 'On-Time Delivery' },
  { icon: Shield, label: 'Damage Protection' },
  { icon: ThumbsUp, label: '100% Satisfaction Guarantee' },
];

export default function PromiseSection() {
  return (
    <section className="section-white section-pad">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-green mb-6">Our Commitment</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl font-semibold text-text-dark mb-10">The PrimeLaundry Promise</motion.h2>
        <motion.blockquote initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2 }}
          className="font-display text-2xl md:text-3xl font-light italic text-blue/80 leading-relaxed mb-12 relative px-8">
          <span className="text-green text-6xl font-display leading-none absolute -top-4 left-0 opacity-25 select-none">&ldquo;</span>
          Every garment that passes through our hands is treated as if it were our own. That is not a policy — it is who we are.
          <span className="text-green text-6xl font-display leading-none absolute -bottom-8 right-0 opacity-25 select-none">&rdquo;</span>
        </motion.blockquote>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          {promises.map((promise) => (
            <motion.div key={promise.label} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-blue-light border border-blue/20 shadow-sm">
              <promise.icon size={16} className="text-blue flex-shrink-0" />
              <span className="text-blue font-semibold text-sm">{promise.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}