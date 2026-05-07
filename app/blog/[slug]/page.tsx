// app/blog/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogBody from "@/components/blog/BlogBody";
import RelatedPosts from "@/components/blog/RelatedPosts";

const blogsDirectory = path.join(process.cwd(), "content/blog");

export async function generateStaticParams() {
  const files = fs.readdirSync(blogsDirectory);
  return files
    .filter(f => f.endsWith(".mdx"))
    .map(fileName => ({ slug: fileName.replace(".mdx", "") }));
}

function getAllPosts() {
  const files = fs.readdirSync(blogsDirectory).filter(f => f.endsWith(".mdx"));
  return files.map(fileName => {
    const slug = fileName.replace(".mdx", "");
    const raw  = fs.readFileSync(path.join(blogsDirectory, fileName), "utf-8");
    const { data } = matter(raw);
    return { slug, ...data } as any;
  });
}

async function getPost(slug: string) {
  const fullPath = path.join(
    blogsDirectory,
    `${slug}.mdx`
  );

  console.log(fullPath);
  console.log(fs.existsSync(fullPath));

  if (!fs.existsSync(fullPath)) return null;

  const fileContent = fs.readFileSync(fullPath, "utf-8");

  const { data, content } = matter(fileContent);

  return { frontmatter: data, content };
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPost(slug);

  console.log(slug, "slug");
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.meta_description,
    keywords: post.frontmatter.target_keywords?.join(", "),
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.meta_description,
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;  // 👈 await it
  const post = await getPost(slug);
  if (!post) return notFound();

  const allPosts = getAllPosts();

  return (
    <main style={{ background: "#fff", minHeight: "100vh", paddingTop: 80 }}>
      <BlogHeader
        slug={slug}           // 👈 use destructured slug
        title={post.frontmatter.title}
        meta_description={post.frontmatter.meta_description}
        date={post.frontmatter.date}
        reading_time={post.frontmatter.reading_time}
        author={post.frontmatter.author}
        target_keywords={post.frontmatter.target_keywords}
      />
      {/* rest unchanged */}
      <BlogBody>
        <MDXRemote source={post.content} />
      </BlogBody>
      {/* ... */}
      <RelatedPosts currentSlug={slug} allPosts={allPosts} />
    </main>
  );
}