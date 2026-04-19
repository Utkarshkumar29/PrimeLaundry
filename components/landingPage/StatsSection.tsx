'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 10, suffix: 'L+', label: 'Garments Cleaned' },
  { value: 1, suffix: 'L+', label: 'Happy Customers' },
  { value: 250, suffix: '+', label: 'Team Members' },
  { value: 500, suffix: '+', label: 'Cities Served' },
];

function CounterNumber({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1800;
    const step = Math.ceil(value / (duration / 16));

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="font-display text-5xl md:text-6xl font-bold text-white">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative section-pad overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 stats-gradient" />

      {/* Subtle Glow Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white">
            Numbers That{' '}
            <span className="italic font-light text-[#10549c] font-semibold">Speak</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative text-center p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/15 hover:bg-white/15 transition-all duration-300"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition bg-[radial-gradient(circle,_rgba(255,255,255,0.2),_transparent_70%)]" />

              <CounterNumber
                value={stat.value}
                suffix={stat.suffix}
                inView={inView}
              />

              <p className="text-white/80 font-semibold text-xs uppercase tracking-widest mt-3">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}