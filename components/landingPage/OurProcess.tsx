"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Intake",
    desc: "Customer drops off or schedules a pickup. Garments are logged into our CRM with a unique tag ID.",
    color: "#00E5C8",
    side: "right",
  },
  {
    num: "02",
    title: "Sorting",
    desc: "Garments are sorted by fabric type, color, and cleaning method — wash, dry clean, or steam.",
    color: "#00D4B8",
    side: "left",
  },
  {
    num: "03",
    title: "Spotting",
    desc: "Trained staff identify and pre-treat stains using premium in-house chemicals for targeted removal.",
    color: "#00C4A8",
    side: "right",
  },
  {
    num: "04",
    title: "Cleaning",
    desc: "Garments go through high-efficiency industrial washers or wet cleaning machines based on fabric.",
    color: "#00B498",
    side: "left",
  },
  {
    num: "05",
    title: "Drying",
    desc: "Precision drying at controlled temperatures. Delicates air-dried. Bulk items tumble-dried gently.",
    color: "#00A488",
    side: "right",
  },
  {
    num: "06",
    title: "Steam Ironing",
    desc: "Professional steam pressing restores crispness, shape and texture to every garment.",
    color: "#009478",
    side: "left",
  },
  {
    num: "07",
    title: "Packaging",
    desc: "Each item is folded and packed in branded packaging. Hung garments are covered and tagged.",
    color: "#008468",
    side: "right",
  },
  {
    num: "08",
    title: "Dedicated Storage",
    desc: "Packaged garments are stored in clean, organized racks by customer order until delivery.",
    color: "#007458",
    side: "left",
  },
  {
    num: "09",
    title: "Delivery",
    desc: "On-time doorstep delivery or customer pickup. Digital confirmation sent via app or SMS.",
    color: "#006448",
    side: "right",
  },
];

const SLOW = { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const };
const MED = { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const };

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);
  const isLeft = step.side === "left";

  return (
    <div
      ref={ref}
      className={`flex items-center gap-6 md:gap-12 ${isLeft ? "flex-row-reverse" : "flex-row"}`}
    >
      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 60 : -60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ ...SLOW, delay: 0.1 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex-1 rounded-2xl p-6 md:p-8 relative overflow-hidden"
        style={{
          background: hovered ? "#0A0F1E" : "#ffffff",
          border: "1px solid rgba(10,15,30,0.08)",
          boxShadow: hovered
            ? "0 20px 60px rgba(10,15,30,0.15)"
            : "0 4px 20px rgba(10,15,30,0.06)",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* Teal left border */}
        <div
          className="absolute top-0 left-0 bottom-0 w-[3px] rounded-l-2xl"
          style={{
            background: step.color,
            opacity: hovered ? 1 : 0.6,
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Ghost step label */}
        <span
          className="absolute -bottom-2 -right-1 font-black select-none pointer-events-none"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "5.5rem",
            lineHeight: 1,
            color: hovered
              ? "rgba(255,255,255,0.05)"
              : "rgba(10,15,30,0.04)",
            transition: "color 0.4s ease",
          }}
        >
          {step.num}
        </span>

        <div className="pl-4">
          {/* Step number badge */}
          <div
            className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{
              background: `${step.color}18`,
              color: step.color,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Step {step.num}
          </div>

          {/* Title */}
          <h3
            className="text-2xl font-bold mb-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: hovered ? "#ffffff" : "#0A0F1E",
              transition: "color 0.4s ease",
            }}
          >
            {step.title}
          </h3>

          {/* Description */}
          <p
            className="text-sm leading-relaxed"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: hovered ? "#94a3b8" : "#475569",
              transition: "color 0.4s ease",
            }}
          >
            {step.desc}
          </p>
        </div>
      </motion.div>

      {/* Center node */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ ...MED, delay: 0.25 }}
        className="flex-shrink-0 flex flex-col items-center relative z-10"
      >
        {/* Circle */}
        <div
          className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center font-black text-sm"
          style={{
            background: step.color,
            color: "#0A0F1E",
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.1rem",
            boxShadow: `0 0 0 6px ${step.color}22, 0 0 0 12px ${step.color}0A`,
          }}
        >
          {step.num}
        </div>
      </motion.div>

      {/* Empty side for alternating layout */}
      <div className="flex-1 hidden md:block" />
    </div>
  );
}

export default function OurProcessPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <section id="process" className="overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <div
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,15,30,0.75) 0%, rgba(10,15,30,0.92) 60%, #0A0F1E 100%)",
          }}
        />
        {/* Animated teal dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #00E5C8 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Big watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(8rem, 22vw, 20rem)",
            fontWeight: 900,
            color: "rgba(255,255,255,0.025)",
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          PROCESS
        </div>

        <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...MED, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <div style={{ width: 40, height: 2, background: "#00E5C8" }} />
            <span
              className="text-xs font-bold tracking-[0.3em] uppercase"
              style={{ color: "#00E5C8", fontFamily: "'DM Sans', sans-serif" }}
            >
              Our Process
            </span>
            <div style={{ width: 40, height: 2, background: "#00E5C8" }} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...SLOW, delay: 0.2 }}
            className="font-black text-white"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
            }}
          >
            Get More Than
            <br />
            <em style={{ color: "#00E5C8" }}>Just Clean.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...SLOW, delay: 0.35 }}
            className="text-lg max-w-xl"
            style={{ color: "#94a3b8", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}
          >
            A precise 9-step journey — from intake to doorstep delivery.
            Every garment handled with care, consistency, and craft.
          </motion.p>

          {/* Step count pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...SLOW, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {["Intake", "Sorting", "Spotting", "Cleaning", "Drying", "Steam Ironing", "Packaging", "Storage", "Delivery"].map(
              (s, i) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(0,229,200,0.1)",
                    border: "1px solid rgba(0,229,200,0.2)",
                    color: "#00E5C8",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {String(i + 1).padStart(2, "0")} {s}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>

      {/* ── SNAKE TIMELINE ───────────────────────────────────────────────── */}
      <div className="py-24 px-6" style={{ background: "#F5F0E8" }}>
        <div className="max-w-4xl mx-auto">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...MED }}
            className="text-center mb-16"
          >
            <span
              className="text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: "#00E5C8", fontFamily: "'DM Sans', sans-serif" }}
            >
              Step by step
            </span>
            <h2
              className="text-3xl md:text-5xl font-black mt-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#0A0F1E",
                letterSpacing: "-0.02em",
              }}
            >
              The 9-Step Journey
            </h2>
          </motion.div>

          {/* Snake steps with vertical connector line */}
          <div className="relative">
            {/* Central vertical line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2"
              style={{ background: "linear-gradient(to bottom, #00E5C8, #006448)" }}
            />

            <div className="flex flex-col gap-8">
              {steps.map((step, i) => (
                <StepCard key={step.num} step={step} index={i} />
              ))}
            </div>

            {/* Final delivery marker */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...MED, delay: 0.3 }}
              className="flex justify-center mt-8"
            >
              <div
                className="px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2"
                style={{
                  background: "#00E5C8",
                  color: "#0A0F1E",
                  fontFamily: "'DM Sans', sans-serif",
                  boxShadow: "0 0 0 8px rgba(0,229,200,0.15)",
                }}
              >
                ✦ Delivered to your door
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── QUALITY PROMISE STRIP ────────────────────────────────────────── */}
      <div
        className="py-20 px-8 md:px-16 relative overflow-hidden"
        style={{ background: "#0A0F1E" }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,229,200,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,200,1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-lg">
              <span
                className="text-xs font-bold tracking-[0.25em] uppercase mb-3 block"
                style={{ color: "#00E5C8", fontFamily: "'DM Sans', sans-serif" }}
              >
                Our Promise
              </span>
              <h3
                className="text-3xl md:text-4xl font-black text-white mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: "-0.02em",
                }}
              >
                Every step, every garment,
                <em style={{ color: "#00E5C8" }}> perfected.</em>
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#64748b", fontFamily: "'DM Sans', sans-serif" }}
              >
                Powered by in-house premium chemicals, industrial machines, and
                a team trained to handle every fabric with precision.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "9", label: "Precise Steps" },
                { value: "2000+", label: "Garments/Day" },
                { value: "₹12", label: "Starting Price" },
                { value: "48hr", label: "Express Option" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...MED, delay: i * 0.1 }}
                  className="rounded-xl px-5 py-4 text-center"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="text-2xl font-black mb-1"
                    style={{
                      color: "#00E5C8",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-xs uppercase tracking-wide"
                    style={{ color: "#475569", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <div
        className="py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8"
        style={{ background: "#F5F0E8", borderTop: "3px solid #00E5C8" }}
      >
        <div>
          <p
            className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
            style={{ color: "#00E5C8", fontFamily: "'DM Sans', sans-serif" }}
          >
            Ready to experience it?
          </p>
          <h3
            className="text-3xl md:text-4xl font-black"
            style={{
              color: "#0A0F1E",
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "-0.02em",
            }}
          >
            Start your clean journey today.
          </h3>
        </div>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base"
          style={{
            background: "#0A0F1E",
            color: "#ffffff",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Book a Pickup <ArrowRight size={18} />
        </motion.a>
      </div>

    </section>
  );
}