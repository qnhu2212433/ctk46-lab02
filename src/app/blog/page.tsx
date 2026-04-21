import Link from "next/link";
import { posts } from "@/data/posts";

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Blog cá nhân</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-emerald-100 transition-all bg-white"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-emerald-100 text-emerald-700 text-xs px-2.5 py-1 rounded-full font-medium">
                {post.category}
              </span>
              <span className="text-sm text-gray-400">{post.date}</span>
            </div>
            
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors text-gray-900">
                {post.title}
              </h2>
            </Link>
            
            <p className="text-gray-600 line-clamp-2 mb-4">
              {post.excerpt}
            </p>
            
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-emerald-600 font-semibold text-sm hover:gap-2 transition-all"
            >
              Đọc thêm <span className="ml-1">→</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}