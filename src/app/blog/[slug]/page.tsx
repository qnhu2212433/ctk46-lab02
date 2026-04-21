import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/data/posts";
import LikeButton from "@/components/like-button";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // 1. Phải await params trước khi dùng slug
  const { slug } = await params;
  
  // 2. Tìm bài viết
  const post = getPostBySlug(slug);

  // 3. Nếu không tìm thấy, hiện trang 404
  if (!post) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/blog"
        className="text-emerald-600 hover:underline text-sm mb-8 inline-block"
      >
        ← Quay lại danh sách
      </Link>

      <article>
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded">
              {post.category}
            </span>
            <span className="text-sm text-gray-400">{post.date}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-gray-500 italic">Tác giả: {post.author}</p>
        </header>

        {/* Đây là phần hiển thị nội dung bài viết */}
        <div className="prose prose-emerald max-w-none text-gray-700 whitespace-pre-line leading-relaxed mb-12">
          {post.content}
        </div>

        <div className="border-t pt-8 flex flex-col items-center">
          <p className="text-sm text-gray-500 mb-4">Bài viết có ích? Đừng quên nhấn Like nhé!</p>
          <LikeButton />
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}