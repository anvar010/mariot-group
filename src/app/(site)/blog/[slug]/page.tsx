import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Bilingual } from '@/components/Bilingual';
import { db } from '@/lib/db';

const container: React.CSSProperties = {
  maxWidth: '760px',
  margin: '0 auto',
  padding: '0 var(--gutter)',
};

const wideContainer: React.CSSProperties = {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '0 var(--gutter)',
};

const dateFormatter = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = await db.blogPost.findUnique({ where: { slug } });
    if (!post) return {};
    return {
      title: `${post.title} — Mariot Kitchen Equipment`,
      description: post.excerpt ?? undefined,
    };
  } catch {
    // An unreachable database shouldn't fail the whole build — the page
    // component below still runs and surfaces a real error at request time.
    return {};
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await db.blogPost.findUnique({ where: { slug } });

  if (!post || !post.publishedAt) {
    notFound();
  }

  return (
    <main>
      <section style={{ backgroundColor: 'var(--ink)' }}>
        <div style={{ ...container, padding: 'clamp(8rem, 15vh, 11rem) var(--gutter) clamp(3rem, 6vw, 4.5rem)' }}>
          <Link href="/blog" className="footer-link" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>
            ← Back to Blog
          </Link>

          <span
            style={{
              display: 'block',
              marginTop: '1.5rem',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.55)',
            }}
          >
            {dateFormatter.format(post.publishedAt)}
          </span>

          <h1 className="h1" style={{ margin: '0.75rem 0 0', color: '#fff' }}>
            <Bilingual en={post.title} ar={post.titleAr} />
          </h1>
        </div>
      </section>

      {post.coverImage && (
        <div style={{ backgroundColor: 'var(--paper)', paddingTop: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
          <div style={{ ...wideContainer, position: 'relative', aspectRatio: '16 / 9', borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--rule)' }}>
            <Image src={post.coverImage} alt="" fill sizes="(max-width: 900px) 100vw, 900px" style={{ objectFit: 'cover' }} priority />
          </div>
        </div>
      )}

      <article style={{ backgroundColor: 'var(--paper)', padding: 'clamp(3rem, 6vw, 4.5rem) var(--gutter) clamp(4rem, 8vw, 7rem)' }}>
        <div className="p-large" style={{ ...container, whiteSpace: 'pre-wrap', lineHeight: 1.8 }}>
          <Bilingual en={post.content} ar={post.contentAr} />
        </div>
      </article>
    </main>
  );
}
