// components/blog/BlogBody.tsx
// Wraps MDXRemote output in premium branded typography

const GREEN    = "#44b24c";
const GREEN_DK = "#339940";
const BLUE     = "#10549c";
const DARK     = "#0a1f3d";
const CREAM    = "#f7f5f0";

interface BlogBodyProps {
  children: React.ReactNode;
}

export default function BlogBody({ children }: BlogBodyProps) {
  return (
    <div style={{ background: "#fff", padding: "56px 32px 72px" }}>
      <div
        style={{ maxWidth: 780, margin: "0 auto" }}
        className="blog-prose"
      >
        {children}
      </div>

      {/* Branded prose styles injected via <style> */}
      <style>{`
        .blog-prose {
          font-family: 'DM Sans', sans-serif;
          color: #334155;
          font-size: 16px;
          line-height: 1.85;
        }

        /* Headings */
        .blog-prose h1 {
          font-family: 'Fraunces', serif;
          font-weight: 900;
          font-size: clamp(2rem, 4vw, 2.8rem);
          color: ${DARK};
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin: 2.4rem 0 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 3px solid ${GREEN};
          display: inline-block;
        }
        .blog-prose h2 {
          font-family: 'Fraunces', serif;
          font-weight: 900;
          font-size: clamp(1.5rem, 3vw, 2rem);
          color: ${DARK};
          letter-spacing: -0.025em;
          line-height: 1.15;
          margin: 2.8rem 0 0.8rem;
          position: relative;
          padding-left: 16px;
        }
        .blog-prose h2::before {
          content: '';
          position: absolute;
          left: 0; top: 4px; bottom: 4px;
          width: 4px;
          background: linear-gradient(to bottom, ${GREEN}, ${GREEN_DK});
          border-radius: 2px;
        }
        .blog-prose h3 {
          font-family: 'Fraunces', serif;
          font-weight: 800;
          font-size: 1.25rem;
          color: ${BLUE};
          letter-spacing: -0.015em;
          margin: 2rem 0 0.6rem;
        }

        /* Paragraphs */
        .blog-prose p {
          margin: 0 0 1.4rem;
          color: #475569;
          line-height: 1.85;
        }

        /* Strong */
        .blog-prose strong {
          font-weight: 700;
          color: ${DARK};
        }

        /* Links */
        .blog-prose a {
          color: ${GREEN};
          font-weight: 600;
          text-decoration: none;
          border-bottom: 1.5px solid rgba(68,178,76,0.35);
          transition: border-color 0.2s, color 0.2s;
        }
        .blog-prose a:hover {
          color: ${GREEN_DK};
          border-bottom-color: ${GREEN_DK};
        }

        /* Unordered list */
        .blog-prose ul {
          margin: 0 0 1.4rem;
          padding-left: 0;
          list-style: none;
        }
        .blog-prose ul li {
          position: relative;
          padding-left: 22px;
          margin-bottom: 0.55rem;
          color: #475569;
        }
        .blog-prose ul li::before {
          content: '';
          position: absolute;
          left: 0; top: 10px;
          width: 8px; height: 8px;
          background: ${GREEN};
          border-radius: 50%;
        }

        /* Ordered list */
        .blog-prose ol {
          margin: 0 0 1.4rem;
          padding-left: 1.6rem;
          color: #475569;
        }
        .blog-prose ol li {
          margin-bottom: 0.55rem;
          padding-left: 6px;
        }
        .blog-prose ol li::marker {
          color: ${GREEN};
          font-weight: 700;
          font-family: 'Fraunces', serif;
        }

        /* Blockquote */
        .blog-prose blockquote {
          margin: 2rem 0;
          padding: 20px 24px;
          background: rgba(68,178,76,0.05);
          border-left: 4px solid ${GREEN};
          border-radius: 0 12px 12px 0;
          font-style: italic;
          color: #334155;
        }
        .blog-prose blockquote p {
          margin: 0;
        }

        /* Horizontal rule */
        .blog-prose hr {
          border: none;
          border-top: 2px solid rgba(10,31,61,0.08);
          margin: 3rem 0;
        }

        /* Tables */
        .blog-prose table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          font-size: 14px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(10,31,61,0.07);
        }
        .blog-prose thead {
          background: linear-gradient(135deg, ${BLUE}, #061e3f);
        }
        .blog-prose thead th {
          padding: 12px 16px;
          text-align: left;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #fff;
        }
        .blog-prose tbody tr {
          border-bottom: 1px solid rgba(10,31,61,0.07);
          transition: background 0.2s;
        }
        .blog-prose tbody tr:hover {
          background: rgba(68,178,76,0.04);
        }
        .blog-prose tbody tr:last-child {
          border-bottom: none;
        }
        .blog-prose tbody td {
          padding: 11px 16px;
          color: #475569;
          font-size: 14px;
        }
        .blog-prose tbody td:first-child {
          font-weight: 600;
          color: ${DARK};
        }

        /* Code */
        .blog-prose code {
          background: rgba(16,84,156,0.07);
          color: ${BLUE};
          font-size: 0.88em;
          padding: 2px 6px;
          border-radius: 5px;
          font-family: 'Courier New', monospace;
        }
        .blog-prose pre {
          background: ${DARK};
          border-radius: 12px;
          padding: 20px 24px;
          overflow-x: auto;
          margin: 2rem 0;
        }
        .blog-prose pre code {
          background: none;
          color: #e2e8f0;
          padding: 0;
        }

        /* Checkmark emoji list items (✅) */
        .blog-prose p:has(> br) {
          margin-bottom: 0.8rem;
        }

        @media (max-width: 600px) {
          .blog-prose { font-size: 15px; }
          .blog-prose table { font-size: 13px; }
          .blog-prose thead th, .blog-prose tbody td { padding: 9px 12px; }
        }
      `}</style>
    </div>
  );
}