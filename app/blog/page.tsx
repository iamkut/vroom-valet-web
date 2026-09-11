import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'News, guides and insights from the Vroom Valet team.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="bg-gradient-to-b from-surface-page to-white pt-32 pb-12">
        <div className="container max-w-2xl text-center">
          <h1 className="font-display text-5xl font-bold text-ink tracking-tight mb-4">Blog</h1>
          <p className="text-ink-muted text-lg">News, guides and insights from the Vroom Valet team.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-3xl">
          {posts.length === 0 ? (
            <p className="text-ink-muted text-center py-16">Posts coming soon.</p>
          ) : (
            <div className="divide-y divide-ink-line">
              {posts.map(post => (
                <article key={post.slug} className="py-10">
                  <time className="text-ink-subtle text-sm">{post.date}</time>
                  <h2 className="font-display text-2xl font-bold text-ink mt-2 mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-brand transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-ink-muted leading-relaxed mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-brand font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Read more <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
