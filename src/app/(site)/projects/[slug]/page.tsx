import { notFound } from 'next/navigation';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import Figure from '@/components/Figure';
import { Bilingual } from '@/components/Bilingual';
import { CATEGORY_HIGHLIGHTS } from '@/lib/projects';
import { db } from '@/lib/db';

const container: React.CSSProperties = {
  maxWidth: '1320px',
  margin: '0 auto',
  padding: '0 var(--gutter)',
};

/* Renders on request rather than at build time, so a build never fails
   because the database wasn't reachable from the build environment, and
   new projects added from the admin dashboard show up without a rebuild. */
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const project = await db.project.findUnique({ where: { slug } });
    if (!project) return {};
    return {
      title: `${project.name} — Mariot Kitchen Equipment`,
      description: project.description,
    };
  } catch {
    // An unreachable database shouldn't fail the whole build — the page
    // component below still runs and surfaces a real error at request time.
    return {};
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await db.project.findUnique({ where: { slug } });

  if (!project) {
    notFound();
  }

  const related = await db.project.findMany({
    where: { category: project.category, slug: { not: project.slug } },
    orderBy: { order: 'asc' },
    take: 3,
  });

  return (
    <main>
      <section style={{ position: 'relative' }}>
        <Figure photo={project.photo} ratio="16 / 9" scrim="soft" priority sizes="100vw" style={{ border: 'none', borderRadius: 0 }}>
          <div className="figure-caption" style={{ padding: 'clamp(6rem, 12vh, 9rem) var(--gutter) clamp(2rem, 4vw, 3rem)' }}>
            <div style={container}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(255,255,255,0.14)',
                  color: '#fff',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}
              >
                <Bilingual en={project.category} ar={project.categoryAr} />
              </span>
              <h1 className="h1" style={{ color: '#fff', maxWidth: '20ch' }}>
                <Bilingual en={project.name} ar={project.nameAr} />
              </h1>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '1rem',
                  color: 'rgba(255,255,255,0.82)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <Bilingual en={project.location} ar={project.locationAr} />
              </span>
            </div>
          </div>
        </Figure>
      </section>

      <section style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, padding: 'clamp(3.5rem, 7vw, 6rem) var(--gutter)' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(2rem, 4vw, 3.5rem)',
              alignItems: 'start',
            }}
          >
            <ScrollReveal>
              <div style={{ maxWidth: '640px' }}>
                <span className="eyebrow eyebrow-blue">Project overview</span>
                <p className="p-large" style={{ marginTop: '1.25rem' }}>
                  <Bilingual en={project.description} ar={project.descriptionAr} />
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 'clamp(1.5rem, 4vw, 2.5rem)',
                    marginTop: '2rem',
                    paddingTop: '1.75rem',
                    borderTop: '1px solid var(--rule)',
                  }}
                >
                  {[
                    { label: 'Sector', value: project.category, valueAr: project.categoryAr },
                    { label: 'Location', value: project.location, valueAr: project.locationAr },
                    { label: 'Scope', value: project.scope, valueAr: project.scopeAr },
                  ].map((fact) => (
                    <div key={fact.label}>
                      <span
                        style={{
                          display: 'block',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: 'var(--ink-faint)',
                          marginBottom: '0.35rem',
                        }}
                      >
                        {fact.label}
                      </span>
                      <span style={{ fontWeight: 700, fontSize: '1.02rem' }}>
                        <Bilingual en={fact.value} ar={fact.valueAr} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--rule)',
                  borderRadius: 'var(--radius)',
                  padding: '2rem',
                }}
              >
                <p className="p-large" style={{ marginBottom: '1.25rem' }}>
                  Interested in a similar project?
                </p>
                <Link
                  href={`/quote?ref=${encodeURIComponent(project.name)}`}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Request a Quotation
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {CATEGORY_HIGHLIGHTS[project.category] && (
        <section style={{ backgroundColor: 'var(--ink)', color: 'var(--paper)' }}>
          <div style={{ ...container, padding: 'clamp(3.5rem, 7vw, 6rem) var(--gutter)' }}>
            <ScrollReveal>
              <span className="eyebrow on-dark">What this project included</span>
              <h2 className="h2" style={{ margin: '1.25rem 0 2rem', color: 'var(--paper)' }}>
                Typical scope for a {project.category.toLowerCase()} delivery
              </h2>
            </ScrollReveal>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                gap: '1px',
                backgroundColor: 'var(--rule-light)',
                border: '1px solid var(--rule-light)',
              }}
            >
              {CATEGORY_HIGHLIGHTS[project.category].map((item, i) => (
                <ScrollReveal key={item} delay={i * 90}>
                  <div style={{ backgroundColor: 'var(--ink)', padding: 'clamp(1.5rem, 3vw, 2rem)', height: '100%', display: 'flex', gap: '1rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        color: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
                        flexShrink: 0,
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section style={{ backgroundColor: 'var(--paper-deep)', borderTop: '1px solid var(--rule)' }}>
          <div style={{ ...container, padding: 'clamp(3.5rem, 7vw, 6rem) var(--gutter)' }}>
            <ScrollReveal>
              <span className="eyebrow">More in {project.category}</span>
            </ScrollReveal>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
                gap: '1.25rem',
                marginTop: '1.75rem',
              }}
            >
              {related.map((item, i) => (
                <ScrollReveal key={item.slug} delay={i * 90}>
                  <Link
                    href={`/projects/${item.slug}`}
                    className="hover-lift"
                    style={{
                      display: 'block',
                      backgroundColor: 'var(--surface)',
                      border: '1px solid var(--rule)',
                      borderRadius: 'var(--radius)',
                      overflow: 'hidden',
                    }}
                  >
                    <Figure photo={item.photo} ratio="4 / 3" sizes="(max-width: 700px) 100vw, 33vw" style={{ border: 'none', borderRadius: 0, borderBottom: '1px solid var(--rule)' }} />
                    <div style={{ padding: '1.25rem' }}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem' }}>
                        <Bilingual en={item.name} ar={item.nameAr} />
                      </h3>
                      <span style={{ fontSize: '0.85rem', color: 'var(--ink-faint)' }}>{item.location}</span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ backgroundColor: 'var(--paper)', borderTop: '1px solid var(--rule)' }}>
        <div style={{ ...container, padding: '2rem var(--gutter)' }}>
          <Link href="/projects" className="footer-link" style={{ fontSize: '0.9rem', fontWeight: 700 }}>
            ← Back to all projects
          </Link>
        </div>
      </section>
    </main>
  );
}
