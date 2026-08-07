import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';
import { Bilingual } from '@/components/Bilingual';
import { db } from '@/lib/db';

export const metadata = {
  title: 'Blog — Mariot Kitchen Equipment',
  description: 'News, guides and project stories from Mariot Kitchen Equipment.',
};

const container: React.CSSProperties = {
  maxWidth: '1320px',
  margin: '0 auto',
  padding: '0 var(--gutter)',
};

const dateFormatter = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export default async function BlogPage() {
  const posts = await db.blogPost.findMany({
    where: { publishedAt: { not: null } },
    orderBy: { publishedAt: 'desc' },
  });

  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            News, guides <span style={{ color: 'var(--primary)' }}>& project stories</span>
          </>
        }
        intro="Equipment guides, kitchen design notes and updates from projects across the UAE."
        photo="chefPlating"
      />

      <section style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, padding: 'clamp(4rem, 8vw, 7rem) var(--gutter)' }}>
          {posts.length === 0 ? (
            <ScrollReveal>
              <div style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto', padding: '3rem 0' }}>
                <span className="eyebrow eyebrow-blue" style={{ margin: '0 auto' }}>
                  Coming soon
                </span>
                <h2 className="h2" style={{ margin: '1.25rem 0 1rem' }}>
                  No posts published yet
                </h2>
                <p className="p-large" style={{ marginBottom: '2rem' }}>
                  We&rsquo;re working on our first articles. In the meantime, browse recent projects or get in
                  touch with a question.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/projects" className="btn-primary">
                    See Our Projects
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    Contact Us
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 330px), 1fr))',
                gap: 'clamp(1rem, 2vw, 1.5rem)',
              }}
            >
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="hover-lift"
                  style={{ display: 'block', backgroundColor: 'var(--surface)', border: '1px solid var(--rule)', borderRadius: 'var(--radius)', overflow: 'hidden' }}
                >
                  {post.coverImage && (
                    <div style={{ position: 'relative', aspectRatio: '16 / 10', backgroundColor: 'var(--paper-deep)' }}>
                      <Image src={post.coverImage} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
                    </div>
                  )}
                  <div style={{ padding: '1.75rem' }}>
                    {post.publishedAt && (
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>
                        {dateFormatter.format(post.publishedAt)}
                      </span>
                    )}
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.3rem', margin: '0.75rem 0 0.5rem' }}>
                      <Bilingual en={post.title} ar={post.titleAr} />
                    </h3>
                    {post.excerpt && <p style={{ color: 'var(--ink-soft)' }}><Bilingual en={post.excerpt} ar={post.excerptAr} /></p>}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
