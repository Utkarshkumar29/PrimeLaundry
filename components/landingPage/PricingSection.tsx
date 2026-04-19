'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '49',
    unit: '/kg',
    tagline: 'Everyday Essentials',
    features: [
      'Standard wash & fold',
      'Eco-friendly detergent',
      'Free pickup & delivery',
      '48-hour turnaround',
    ],
    popular: false,
    cta: 'Get Started',
  },
  {
    name: 'Standard',
    price: '99',
    unit: '/kg',
    tagline: 'Most Popular Choice',
    features: [
      'Wash + iron + fold',
      'Premium detergent',
      'Free pickup & delivery',
      '24-hour turnaround',
      'Real-time tracking',
    ],
    popular: true,
    cta: 'Book Now',
  },
  {
    name: 'Premium',
    price: '149',
    unit: '/kg',
    tagline: 'White-Glove Service',
    features: [
      'Dry clean + steam press',
      'Premium packaging',
      'Free pickup & delivery',
      '12-hour express option',
      'Fabric care certificate',
      'Dedicated care specialist',
    ],
    popular: false,
    cta: 'Go Premium',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function PricingSection() {
  return (
    <section id="pricing" className="section-cream section-pad">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-green mb-4">
            Pricing
          </p>

          <h2 className="font-display text-5xl md:text-6xl leading-tight font-semibold text-text-dark">
            Simple, Transparent{' '}
            <span className="italic font-light bg-gradient-to-r from-blue to-green bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>

          <p className="text-gray-dark mt-5 max-w-xl mx-auto">
            No hidden charges. No surprises. Just premium laundry at honest prices.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={{ scale: plan.popular ? 1.06 : 1.03, y: -6 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className={`relative rounded-3xl p-8 border transition-all duration-300 ease-out ${
                plan.popular
                  ? 'bg-gradient-to-br from-blue to-blue-dark border-green shadow-card-md green-glow z-10 scale-105'
                  : 'bg-white border-gray-light shadow-card hover:shadow-card-md hover:-translate-y-2'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-5 py-1.5 rounded-full bg-green text-white font-bold text-xs uppercase tracking-widest shadow-green-sm">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Top */}
              <div className="mb-6 mt-2">
                <p
                  className={`text-xs font-semibold uppercase tracking-widest mb-1 ${
                    plan.popular ? 'text-white/60' : 'text-gray-mid'
                  }`}
                >
                  {plan.tagline}
                </p>

                <h3
                  className={`font-display text-2xl font-semibold mb-4 ${
                    plan.popular ? 'text-white' : 'text-text-dark'
                  }`}
                >
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="flex items-end gap-1">
                  <span
                    className={`font-display text-5xl font-bold ${
                      plan.popular ? 'text-white' : 'text-blue'
                    }`}
                  >
                    ₹{plan.price}
                  </span>
                  <span
                    className={`text-xs mb-1 ${
                      plan.popular ? 'text-white/60' : 'text-gray-mid'
                    }`}
                  >
                    {plan.unit}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 border-t border-gray-light pt-6">
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    className={`flex items-start gap-3 text-sm ${
                      plan.popular ? 'text-white/80' : 'text-gray-dark'
                    }`}
                  >
                    <Check
                      size={16}
                      className="mt-0.5 flex-shrink-0 text-green"
                    />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={` cursor-pointer w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                  plan.popular
                    ? 'bg-green text-white hover:bg-green-dark shadow-green-sm hover:shadow-green'
                    : 'border border-blue text-[#105C90] hover:bg-blue hover:text-white'
                }`}
              >
                {plan.cta}
                <ArrowRight size={15} />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}