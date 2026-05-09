"use client"

const GREEN    = "#44b24c";
const GREEN_DK = "#339940";
const BLUE     = "#10549c";
const BLUE_DK  = "#061e3f";
const DARK     = "#0a1f3d";

function getCoverImage(slug: string): string {
  if (slug.includes("silk") || slug.includes("saree"))
    return "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1400&q=85";
  if (slug.includes("dry-clean"))
    return "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1400&q=85";
  if (slug.includes("franchise") || slug.includes("business"))
    return "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1400&q=85";
  if (slug.includes("stain"))
    return "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=1400&q=85";
  return "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=1400&q=85";
}

interface BlogHeaderProps {
  slug: string;
  title: string;
  meta_description?: string;
  date?: string;
  reading_time?: string;
  author?: string;
  target_keywords?: string[];
}

export default function BlogHeader({
  slug, title, meta_description, date, reading_time, author, target_keywords,
}: BlogHeaderProps) {
  const img = getCoverImage(slug);

  return (
    <header style={{ position: "relative", overflow: "hidden", minHeight: "62vh", display: "flex", alignItems: "flex-end" }}>
      {/* Background image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url('${img}')`,
        backgroundSize: "cover", backgroundPosition: "center",
        filter: "brightness(0.4)",
      }} />

      {/* Overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(160deg, rgba(10,61,117,0.75) 0%, rgba(10,31,61,0.92) 100%)`,
      }} />

      {/* Dot texture */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.04,
        backgroundImage: `radial-gradient(circle, ${GREEN} 1px, transparent 1px)`,
        backgroundSize: "36px 36px",
      }} />

      {/* Green top bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 5,
        background: `linear-gradient(90deg, ${GREEN}, ${GREEN_DK})`,
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 2,
        maxWidth: 860, margin: "0 auto",
        width: "100%", padding: "80px 32px 56px",
      }}>
        {/* Back link */}
        <a href="/blog" style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700,
          color: "rgba(255,255,255,0.55)", textDecoration: "none",
          letterSpacing: "0.08em", textTransform: "uppercase",
          marginBottom: 24,
          transition: "color 0.2s",
        }}
          onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
        >
          ← Blog
        </a>

        {/* Keywords */}
        {target_keywords && target_keywords.length > 0 && (
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18 }}>
            {target_keywords.slice(0, 3).map(kw => (
              <span key={kw} style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: GREEN, background: "rgba(68,178,76,0.15)",
                border: "1px solid rgba(68,178,76,0.3)",
                borderRadius: 100, padding: "3px 10px",
              }}>{kw}</span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 style={{
          fontFamily: "'Fraunces', serif", fontWeight: 900,
          fontSize: "clamp(2rem, 5vw, 3.4rem)",
          color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.05,
          marginBottom: 20, maxWidth: 780,
        }}>{title}</h1>

        {/* Meta row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          {author && (
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: `linear-gradient(135deg, ${GREEN}, ${GREEN_DK})`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Fraunces', serif", fontWeight: 900,
                fontSize: 14, color: "#fff",
              }}>
                {author.charAt(0)}
              </div>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: "#fff", margin: 0 }}>{author}</p>
                {date && (
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.45)", margin: 0 }}>
                    {new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                  </p>
                )}
              </div>
            </div>
          )}
          {reading_time && (
            <div style={{
              display: "flex", alignItems: "center", gap: 6,
              background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 100, padding: "5px 14px",
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.75)" }}>
                {reading_time} read
              </span>
            </div>
          )}
        </div>

        {/* Description */}
        {meta_description && (
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15, color: "rgba(255,255,255,0.58)",
            lineHeight: 1.75, marginTop: 20, maxWidth: 640,
          }}>{meta_description}</p>
        )}
      </div>
    </header>
  );
}