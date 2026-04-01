'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      "PrimeLaundry has completely changed how I manage my wardrobe. My silk sarees come back looking brand new every single time. The care they take is genuinely exceptional.",
    name: 'Priya Sharma',
    city: 'New Delhi',
    rating: 5,
  },
  {
    quote:
      "As someone who wears formals every day, I used to spend hours on ironing. Now I just schedule a pickup and everything arrives crisp. The 90-minute express service is a game-changer.",
    name: 'Arjun Mehta',
    city: 'Mumbai',
    rating: 5,
  },
  {
    quote:
      "I was skeptical at first, but after my first order I was completely sold. They cleaned my vintage kurtas with such precision. I have referred PrimeLaundry to my entire family.",
    name: 'Kavitha Nair',
    city: 'Bengaluru',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section className="bg-white section-pad">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-teal-dark mb-4">
            Customer Stories
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy">
            What Our Customers <span className="italic font-light">Say</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden rounded-3xl bg-off-white border border-gray-light min-h-[280px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="w-full px-10 md:px-16 py-12 text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-teal-dark text-teal-dark" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-display text-xl md:text-2xl text-navy leading-relaxed italic mb-8">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div>
                  <p className="font-semibold text-navy text-base">{testimonials[current].name}</p>
                  <p className="text-gray-mid text-sm">{testimonials[current].city}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="h-11 w-11 rounded-full border border-gray-light bg-white flex items-center justify-center text-gray-dark hover:border-teal hover:text-teal transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 bg-teal' : 'w-2 bg-gray-light'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="h-11 w-11 rounded-full border border-gray-light bg-white flex items-center justify-center text-gray-dark hover:border-teal hover:text-teal transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}