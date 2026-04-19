import { useState } from "react";
import { motion } from "framer-motion";

type Pillar = {
  num: string;
  icon: React.ElementType;
  tag: string;
  title: string;
  desc: string;
};

const BRAND_GREEN      = "#44b24c";
const BRAND_BLUE_DARK  = "#0a3d75";
const DARK_TEXT        = "#0a1f3d";
const SLOW = { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const };

export function PillarCard({ pillar, i }: { pillar: Pillar; i: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = pillar.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ ...SLOW, delay: i * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl p-6 flex flex-col relative overflow-hidden cursor-pointer"
      style={{
        background: hovered ? BRAND_BLUE_DARK : "#ffffff",
        border: hovered ? "none" : "1px solid rgba(10,31,61,0.08)",
        boxShadow: hovered
          ? "0 24px 64px rgba(10,31,61,0.22)"
          : "0 4px 24px rgba(10,31,61,0.06)",
        minHeight: 280,
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {/* Green top stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
        style={{ background: BRAND_GREEN }}
      />

      {/* Ghost number */}
      <span
        className="absolute bottom-3 right-4 font-black select-none pointer-events-none leading-none"
        style={{
          fontFamily: "'Fraunces', serif",
          fontSize: "5rem",
          color: hovered ? "rgba(255,255,255,0.05)" : "rgba(10,31,61,0.05)",
          transition: "color 0.35s ease",
        }}
      >
        {pillar.num}
      </span>

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
        style={{ background: "rgba(68,178,76,0.12)" }}
      >
        <Icon size={20} style={{ color: BRAND_GREEN }} />
      </div>

      {/* Tag */}
      <span
        className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2"
        style={{ color: BRAND_GREEN, fontFamily: "'DM Sans', sans-serif" }}
      >
        {pillar.tag}
      </span>

      {/* Title */}
      <h3
        className="text-lg font-bold mb-3"
        style={{
          color: hovered ? "#ffffff" : DARK_TEXT,
          fontFamily: "'Fraunces', serif",
          transition: "color 0.35s ease",
        }}
      >
        {pillar.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed mt-auto"
        style={{
          color: hovered ? "rgba(255,255,255,0.6)" : "#475569",
          fontFamily: "'DM Sans', sans-serif",
          transition: "color 0.35s ease",
        }}
      >
        {pillar.desc}
      </p>
    </motion.div>
  );
}