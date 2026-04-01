'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Sparkles, PackageCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: CalendarCheck,
    title: 'Schedule Pickup',
    desc: 'Book via app or website in under 60 seconds. Choose your slot.',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'We Clean with Care',
    desc: 'Expert team uses premium products and precision techniques.',
  },
  {
    number: '03',
    icon: PackageCheck,
    title: 'Doorstep Delivery',
    desc: 'Fresh, folded, and perfectly packaged — back at your door.',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white section-pad">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-teal-dark mb-4">
            The Process
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy">
            As Easy as{' '}
            <span className="italic font-light teal-text" style={{ WebkitTextFillColor: 'var(--teal-dark)' }}>
              1, 2, 3
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Dotted connector line — desktop only */}
          <div className="hidden md:block absolute top-[60px] left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] dotted-connector opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {steps?.map((step, i) => (
              <motion.div
                key={step?.number}
                initial={{ opacity: 0, x: i === 0 ? -40 : i === 2 ? 40 : 0, y: i === 1 ? 40 : 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Number */}
                <div className="font-display text-6xl font-bold text-teal/15 mb-3 leading-none select-none">
                  {step?.number}
                </div>

                {/* Icon circle */}
                <div className="h-16 w-16 rounded-full bg-teal/10 border-2 border-teal/30 flex items-center justify-center mb-5 relative z-10">
                  <step.icon size={26} className="text-teal-dark" />
                </div>

                <h3 className="font-display text-xl font-semibold text-navy mb-3">{step?.title}</h3>
                <p className="text-gray-dark text-sm leading-relaxed max-w-xs">{step?.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}