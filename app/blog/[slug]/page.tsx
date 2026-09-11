import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPosts, getPost } from '@/lib/posts';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPost(slug);
    return { title: post.title, description: post.excerpt };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPost(slug);
  } catch {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="container max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-ink-muted hover:text-brand transition-colors text-sm mb-10"
        >
          <ArrowLeft size={16} aria-hidden="true" /> Back to blog
        </Link>

        <header className="mb-10">
          <time className="text-ink-subtle text-sm">{post.date}</time>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-ink tracking-tight mt-2 mb-4">
            {post.title}
          </h1>
          <p className="text-ink-muted text-lg leading-relaxed">{post.excerpt}</p>
          <p className="text-ink-subtle text-sm mt-4">By {post.author}</p>
        </header>

        <div className="prose">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </div>
  );
}
