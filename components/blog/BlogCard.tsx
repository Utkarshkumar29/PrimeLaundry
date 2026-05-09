"use client"
import Link from "next/link";

const GREEN    = "#44b24c";
const GREEN_DK = "#339940";
const BLUE     = "#10549c";
const BLUE_DK  = "#061e3f";
const DARK     = "#0a1f3d";
const CREAM    = "#f7f5f0";

// Map slug keywords to relevant Unsplash images
function getCoverImage(slug: string): string {
  if (slug.includes("silk") || slug.includes("saree"))
    return "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80";
  if (slug.includes("dry-clean"))
    return "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=600&q=80";
  if (slug.includes("guide") || slug.includes("business"))
    return "https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?w=1200&q=80";
  if (slug.includes("stain"))
    return "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=600&q=80";
  return "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=600&q=80";
}

interface BlogCardProps {
  slug: string;
  title: string;
  meta_description?: string;
  description?: string;
  date?: string;
  reading_time?: string;
  author?: string;
  target_keywords?: string[];
}

export default function BlogCard({
  slug, title, meta_description, description,
  date, reading_time, author, target_keywords,
}: BlogCardProps) {
  const desc = meta_description || description || "";
  const img  = getCoverImage(slug);

  return (
    <Link href={`/blog/${slug}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          borderRadius: 20, overflow: "hidden", background: "#fff",
          border: "1px solid rgba(10,31,61,0.08)",
          boxShadow: "0 4px 24px rgba(10,31,61,0.07)",
          display: "flex", flexDirection: "column",
          height: "100%",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 48px rgba(10,31,61,0.13)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(10,31,61,0.07)";
        }}
      >
        {/* Cover image */}
        <div style={{ height: 200, overflow: "hidden", position: "relative", flexShrink: 0 }}>
          <img
            src={img} alt={title}
            style={{
              width: "100%", height: "100%", objectFit: "cover", display: "block",
              transition: "transform 0.5s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(10,31,61,0.5) 0%, transparent 60%)",
          }} />
          {/* Green top accent */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 4,
            background: `linear-gradient(90deg, ${GREEN}, ${GREEN_DK})`,
          }} />
          {/* Reading time pill */}
          {reading_time && (
            <div style={{
              position: "absolute", bottom: 14, left: 16,
              background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)",
              borderRadius: 100, padding: "3px 10px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10, fontWeight: 700, color: "#fff",
              letterSpacing: "0.08em",
            }}>{reading_time} read</div>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: "22px 22px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Keywords */}
          {target_keywords && target_keywords.length > 0 && (
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
              {target_keywords.slice(0, 2).map(kw => (
                <span key={kw} style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: GREEN, background: "rgba(68,178,76,0.1)",
                  border: "1px solid rgba(68,178,76,0.2)",
                  borderRadius: 100, padding: "2px 8px",
                }}>{kw}</span>
              ))}
            </div>
          )}

          {/* Title */}
          <h2 style={{
            fontFamily: "'Fraunces', serif", fontWeight: 900,
            fontSize: "1.15rem", color: DARK,
            letterSpacing: "-0.02em", lineHeight: 1.3,
            marginBottom: 10, flex: "none",
          }}>{title}</h2>

          {/* Description */}
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13.5, color: "#64748b", lineHeight: 1.75,
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical" as any,
            overflow: "hidden",
          }}>{desc}</p>

          {/* Footer */}
          <div style={{
            marginTop: 18, paddingTop: 14,
            borderTop: "1px solid rgba(10,31,61,0.07)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <div>
              {author && (
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 11,
                  fontWeight: 700, color: DARK, marginBottom: 1,
                }}>{author}</p>
              )}
              {date && (
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 10,
                  color: "#94a3b8",
                }}>{new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</p>
              )}
            </div>
            <div style={{
              display: "flex", alignItems: "center", gap: 6,
              color: GREEN, fontFamily: "'DM Sans', sans-serif",
              fontSize: 12, fontWeight: 700,
            }}>
              Read <span style={{ fontSize: 14 }}>→</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}