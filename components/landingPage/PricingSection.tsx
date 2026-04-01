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
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-off-white section-pad">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-teal-dark mb-4">
            Pricing
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy">
            Simple, Transparent <span className="italic font-light">Pricing</span>
          </h2>
          <p className="text-gray-dark mt-4 max-w-xl mx-auto">
            No hidden charges. No surprises. Just premium laundry at honest prices.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
        >
          {plans?.map((plan) => (
            <motion.div
              key={plan?.name}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`relative rounded-3xl p-8 border transition-all duration-300 ${
                plan?.popular
                  ? 'pricing-popular shadow-teal-sm'
                  : 'bg-white border-gray-light shadow-card'
              }`}
            >
              {/* Popular badge */}
              {plan?.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-5 py-1.5 rounded-full bg-teal text-navy font-bold text-xs uppercase tracking-widest shadow-teal-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6 mt-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-mid mb-1">
                  {plan?.tagline}
                </p>
                <h3 className="font-display text-2xl font-semibold text-navy mb-3">{plan?.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-navy">₹{plan?.price}</span>
                  <span className="text-gray-mid text-sm">{plan?.unit}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan?.features?.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-gray-dark">
                    <Check size={16} className="text-teal-dark mt-0.5 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                  plan?.popular
                    ? 'bg-teal text-navy hover:bg-teal-dark teal-glow-sm' :'bg-navy text-white hover:bg-navy-light'
                }`}
              >
                {plan?.cta}
                <ArrowRight size={15} />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}