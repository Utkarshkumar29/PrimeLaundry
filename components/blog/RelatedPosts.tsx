// components/blog/RelatedPosts.tsx
import BlogCard from "./BlogCard";

const GREEN    = "#44b24c";
const GREEN_DK = "#339940";
const BLUE     = "#10549c";
const BLUE_DK  = "#061e3f";
const CREAM    = "#f7f5f0";
const DARK     = "#0a1f3d";

interface Post {
  slug: string;
  title: string;
  meta_description?: string;
  description?: string;
  date?: string;
  reading_time?: string;
  author?: string;
  target_keywords?: string[];
}

interface RelatedPostsProps {
  currentSlug: string;
  allPosts: Post[];
}

export default function RelatedPosts({ currentSlug, allPosts }: RelatedPostsProps) {
  // Exclude current post and take up to 3
  const related = allPosts
    .filter(p => p.slug !== currentSlug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section style={{ background: CREAM, padding: "64px 32px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Heading */}
        <div style={{ marginBottom: 40 }}>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: GREEN, marginBottom: 10,
          }}>Keep Reading</p>
          <h2 style={{
            fontFamily: "'Fraunces', serif", fontWeight: 900,
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: DARK,
            letterSpacing: "-0.03em", lineHeight: 1.1,
          }}>
            More from <em style={{ color: GREEN, fontStyle: "italic" }}>Prime Laundry</em>
          </h2>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 24,
        }}>
          {related.map(post => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>

        {/* View all */}
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a href="/blog" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "11px 28px", borderRadius: 100,
            background: `linear-gradient(135deg, ${GREEN}, ${GREEN_DK})`,
            color: "#fff", textDecoration: "none",
            fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 14,
            boxShadow: "0 4px 18px rgba(68,178,76,0.3)",
          }}>
            View All Posts →
          </a>
        </div>
      </div>
    </section>
  );
}