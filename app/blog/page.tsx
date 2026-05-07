// app/blog/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogCard from "@/components/blog/BlogCard";

const GREEN    = "#44b24c";
const GREEN_DK = "#339940";
const BLUE     = "#10549c";
const BLUE_DK  = "#0a3d75";
const DARK     = "#0a1f3d";
const CREAM    = "#f7f5f0";

const blogsDirectory = path.join(process.cwd(), "content/blog");

function getBlogs() {
  const files = fs.readdirSync(blogsDirectory);
  return files
    .filter(f => f.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(".mdx", "");
      const fileContent = fs.readFileSync(path.join(blogsDirectory, fileName), "utf-8");
      const { data } = matter(fileContent);
      return { slug, ...data } as any;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1)); // newest first
}

export default function BlogPage() {
  const blogs = getBlogs();
  const featured = blogs[0];
  const rest     = blogs.slice(1);
  

  return (
    <main style={{ background: "#fff", minHeight: "100vh", paddingTop: 80 }}>

      {/* ── HERO ── */}
      <section style={{
        background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DK} 100%)`,
        padding: "72px 32px 80px", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.04,
          backgroundImage: `radial-gradient(circle, ${GREEN} 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }} />
        <div style={{
          position: "absolute", top: 0, right: 0,
          fontFamily: "'Fraunces', serif",
          fontSize: "clamp(5rem,14vw,12rem)",
          fontWeight: 900, lineHeight: 0.85, letterSpacing: "-0.05em",
          color: "rgba(255,255,255,0.03)", pointerEvents: "none", userSelect: "none",
        }}>BL<br />OG</div>

        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 36, height: 2, background: GREEN }} />
            <span style={{
              color: GREEN, fontFamily: "'DM Sans', sans-serif",
              fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase",
            }}>Insights & Guides</span>
          </div>
          <h1 style={{
            fontFamily: "'Fraunces', serif", fontWeight: 900,
            fontSize: "clamp(2.4rem,5vw,4.2rem)", color: "#fff",
            letterSpacing: "-0.03em", lineHeight: 0.95, marginBottom: 16,
          }}>
            The Prime Laundry<br />
            <em style={{ color: GREEN }}>Blog.</em>
          </h1>
          <p style={{
            color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif",
            fontSize: 16, lineHeight: 1.75, maxWidth: 480,
          }}>
            Laundry tips, fabric care guides, franchise insights, and business advice — all in one place.
          </p>
        </div>
      </section>

      {/* Wave */}
      <div style={{ background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DK} 100%)`, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: "100%", height: 48, display: "block" }}>
          <path d="M0 48 L0 24 Q360 0 720 24 Q1080 48 1440 24 L1440 48 Z" fill="#fff" />
        </svg>
      </div>

      {/* ── FEATURED POST ── */}
      {featured && (
        <section style={{ padding: "64px 32px 0", maxWidth: 1280, margin: "0 auto" }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: GREEN, marginBottom: 20,
          }}>Featured Post</p>

          <a href={`/blog/${featured.slug}`} style={{ textDecoration: "none", display: "block" }}>
            <div
              style={{
                borderRadius: 24, overflow: "hidden", background: "#fff",
                border: `2px solid rgba(68,178,76,0.25)`,
                boxShadow: "0 8px 40px rgba(10,31,61,0.1)",
                display: "grid", gridTemplateColumns: "1fr 1fr",
                minHeight: 340,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              className="featured-card"
            
            >
              {/* Image */}
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src={featured.slug?.includes("franchise") || featured.slug?.includes("business")
                    ? "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=85"
                    : "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&q=85"}
                  alt={featured.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to right, transparent 60%, rgba(255,255,255,0.1) 100%)",
                }} />
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 5,
                  background: `linear-gradient(90deg, ${GREEN}, ${GREEN_DK})`,
                }} />
                {featured.reading_time && (
                  <div style={{
                    position: "absolute", top: 18, right: 18,
                    background: `linear-gradient(135deg, ${GREEN}, ${GREEN_DK})`,
                    borderRadius: 100, padding: "4px 12px",
                    fontFamily: "'DM Sans', sans-serif", fontSize: 10,
                    fontWeight: 700, color: "#fff", letterSpacing: "0.08em",
                  }}>{featured.reading_time} read</div>
                )}
              </div>
              {/* Text */}
              <div style={{ padding: "40px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                  {featured.target_keywords?.slice(0, 2).map((kw: string) => (
                    <span key={kw} style={{
                      fontFamily: "'DM Sans', sans-serif", fontSize: 9, fontWeight: 700,
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      color: GREEN, background: "rgba(68,178,76,0.1)",
                      border: "1px solid rgba(68,178,76,0.2)",
                      borderRadius: 100, padding: "2px 8px",
                    }}>{kw}</span>
                  ))}
                </div>
                <h2 style={{
                  fontFamily: "'Fraunces', serif", fontWeight: 900,
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: DARK,
                  letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: 14,
                }}>{featured.title}</h2>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14, color: "#64748b", lineHeight: 1.75, marginBottom: 24,
                  display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" as any, overflow: "hidden",
                }}>{featured.meta_description}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  {featured.author && (
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: DARK }}>
                      {featured.author}
                    </span>
                  )}
                  {featured.date && (
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#94a3b8" }}>
                      {new Date(featured.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                  )}
                  <span style={{
                    marginLeft: "auto", display: "flex", alignItems: "center", gap: 6,
                    color: GREEN, fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700,
                  }}>Read Article →</span>
                </div>
              </div>
            </div>
          </a>
        </section>
      )}

      {/* ── ALL POSTS ── */}
      <section style={{ padding: "48px 32px 80px", maxWidth: 1280, margin: "0 auto" }}>
        {rest.length > 0 && (
          <>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: GREEN, marginBottom: 24,
            }}>All Posts</p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 24,
            }}>
              {rest.map((blog: any) => (
                <BlogCard key={blog.slug} {...blog} />
              ))}
            </div>
          </>
        )}

        {blogs.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#94a3b8", fontFamily: "'DM Sans', sans-serif" }}>
            No posts yet. Check back soon.
          </div>
        )}
      </section>

      {/* ── CTA strip ── */}
      <section style={{
        background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DK} 100%)`,
        padding: "56px 32px", textAlign: "center",
        borderTop: `3px solid ${GREEN}`,
      }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GREEN, marginBottom: 12 }}>
          Ready to Get Started?
        </p>
        <h2 style={{
          fontFamily: "'Fraunces', serif", fontWeight: 900,
          fontSize: "clamp(1.6rem,3vw,2.4rem)", color: "#fff",
          letterSpacing: "-0.03em", marginBottom: 28,
        }}>
          Book a Pickup or <em style={{ color: GREEN }}>Get a Franchise.</em>
        </h2>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://wa.me/919131979530" target="_blank" rel="noopener noreferrer"
            style={{ padding: "12px 28px", borderRadius: 100, background: `linear-gradient(135deg, ${GREEN}, ${GREEN_DK})`, color: "#fff", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, boxShadow: "0 4px 18px rgba(68,178,76,0.35)" }}>
            Book Pickup →
          </a>
          <a href="/franchise"
            style={{ padding: "12px 28px", borderRadius: 100, background: "transparent", color: "rgba(255,255,255,0.8)", border: "1.5px solid rgba(255,255,255,0.25)", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 14 }}>
            Franchise Enquiry
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .featured-card { grid-template-columns: 1fr !important; }
          .featured-card > div:first-child { height: 220px; }
        }
      `}</style>
    </main>
  );
}