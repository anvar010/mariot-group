import { notFound } from 'next/navigation';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';
import Figure from '@/components/Figure';
import { Bilingual } from '@/components/Bilingual';
import { db } from '@/lib/db';
import en from '@/lib/i18n/en.json';
import ar from '@/lib/i18n/ar.json';

const L = en.sectorDetail;
const LAr = ar.sectorDetail;

type CaseHighlight = { title: string; text: string };
type CaseStat = { value: string; label: string };

const container: React.CSSProperties = {
  maxWidth: '1320px',
  margin: '0 auto',
  padding: '0 var(--gutter)',
};

/* Built server-side and handed to <Bilingual> as already-rendered elements
   (never as a render-prop function) — a Server Component page can only pass
   serializable output, not closures, across the boundary into a Client
   Component like Bilingual. */
function renderDelivers(items: string[]) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
        gap: '1px',
        backgroundColor: 'var(--rule)',
        border: '1px solid var(--rule)',
      }}
    >
      {items.map((item, i) => (
        <ScrollReveal key={item} delay={i * 60}>
          <div style={{ backgroundColor: 'var(--surface)', padding: '1.25rem 1.5rem', height: '100%', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '0.15rem' }}>
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span style={{ fontSize: '0.95rem', lineHeight: 1.5 }}>{item}</span>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

function renderCaseStats(stats: CaseStat[]) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
        gap: 'clamp(1.5rem, 3vw, 2.5rem)',
        marginTop: '2.5rem',
        paddingBottom: '2.5rem',
        borderBottom: '1px solid var(--rule-light)',
      }}
    >
      {stats.map((stat) => (
        <div key={stat.label}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', color: 'var(--primary)' }}>
            {stat.value}
          </div>
          <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginTop: '0.4rem' }}>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function renderCaseHighlights(highlights: CaseHighlight[]) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
        gap: 'clamp(1.5rem, 3vw, 2.5rem)',
        marginTop: '2.5rem',
      }}
    >
      {highlights.map((h, i) => (
        <ScrollReveal key={h.title} delay={i * 90}>
          <div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)' }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', margin: '0.6rem 0 0.4rem' }}>{h.title}</h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.92rem', lineHeight: 1.6 }}>{h.text}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

/* Renders on request rather than at build time, so a build never fails
   because the database wasn't reachable from the build environment, and
   new sectors added from the admin dashboard show up without a rebuild. */
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const sector = await db.sector.findUnique({ where: { slug } });
    if (!sector) return {};
    return {
      title: `${sector.name} — Sectors We Serve — Mariot Kitchen Equipment`,
      description: sector.subtitle ?? sector.desc,
    };
  } catch {
    // An unreachable database shouldn't fail the whole build — the page
    // component below still runs and surfaces a real error at request time.
    return {};
  }
}

export default async function SectorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sector = await db.sector.findUnique({ where: { slug } });

  if (!sector) {
    notFound();
  }

  const [projects, otherSectors] = await Promise.all([
    db.project.findMany({ where: { category: sector.name }, orderBy: { order: 'asc' } }),
    db.sector.findMany({ where: { slug: { not: sector.slug } }, orderBy: { order: 'asc' } }),
  ]);

  const delivers = (sector.delivers as string[] | null) ?? [];
  const deliversAr = sector.deliversAr as string[] | null;
  const caseHighlights = (sector.caseHighlights as CaseHighlight[] | null) ?? [];
  const caseHighlightsAr = sector.caseHighlightsAr as CaseHighlight[] | null;
  const caseStats = (sector.caseStats as CaseStat[] | null) ?? [];
  const caseStatsAr = sector.caseStatsAr as CaseStat[] | null;
  const hasDetail = Boolean(sector.h1);

  return (
    <main>
      <PageHero
        eyebrow={<Bilingual en={L.sectorsWeServe} ar={LAr.sectorsWeServe} />}
        title={<Bilingual en={sector.h1 ?? sector.name} ar={sector.h1Ar ?? sector.nameAr} />}
        intro={<Bilingual en={sector.subtitle ?? sector.desc} ar={sector.subtitleAr ?? sector.descAr} />}
        photo={sector.photo}
      >
        <Link href={`/quote?ref=${encodeURIComponent(sector.name)}`} className="btn-primary">
          <Bilingual
            en={`Get a Quote for ${sector.name}`}
            ar={`اطلب عرض سعر لـ ${sector.nameAr ?? sector.name}`}
          />
        </Link>
      </PageHero>

      {delivers.length > 0 && (
        <section style={{ backgroundColor: 'var(--paper)' }}>
          <div style={{ ...container, padding: 'clamp(3.5rem, 7vw, 6rem) var(--gutter)' }}>
            <ScrollReveal>
              <div style={{ maxWidth: '640px', marginBottom: '2.5rem' }}>
                <span className="eyebrow eyebrow-blue">
                  <Bilingual en={L.deliversEyebrow} ar={LAr.deliversEyebrow} />
                </span>
                <h2 className="h2" style={{ marginTop: '1.25rem' }}>
                  <Bilingual en={L.deliversTitle} ar={LAr.deliversTitle} />
                </h2>
              </div>
            </ScrollReveal>

            <Bilingual
              en={renderDelivers(delivers)}
              ar={deliversAr && deliversAr.length > 0 ? renderDelivers(deliversAr) : null}
            />
          </div>
        </section>
      )}

      {hasDetail && (
        <section style={{ backgroundColor: 'var(--ink)', color: 'var(--paper)' }}>
          <div style={{ ...container, padding: 'clamp(3.5rem, 7vw, 6rem) var(--gutter)' }}>
            <ScrollReveal>
              <span className="eyebrow on-dark">
                <Bilingual en={L.caseEyebrow} ar={LAr.caseEyebrow} />
              </span>
              <h2 className="h2" style={{ margin: '1.25rem 0 0.5rem', color: 'var(--paper)' }}>
                <Bilingual en={sector.caseTitle} ar={sector.caseTitleAr} />
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem' }}>
                <Bilingual en={sector.caseSub} ar={sector.caseSubAr} />
              </p>
            </ScrollReveal>

            {caseStats.length > 0 && (
              <Bilingual
                en={renderCaseStats(caseStats)}
                ar={caseStatsAr && caseStatsAr.length > 0 ? renderCaseStats(caseStatsAr) : null}
              />
            )}

            {caseHighlights.length > 0 && (
              <Bilingual
                en={renderCaseHighlights(caseHighlights)}
                ar={caseHighlightsAr && caseHighlightsAr.length > 0 ? renderCaseHighlights(caseHighlightsAr) : null}
              />
            )}
          </div>
        </section>
      )}

      {projects.length > 0 && (
        <section style={{ backgroundColor: 'var(--paper)' }}>
          <div style={{ ...container, padding: 'clamp(3.5rem, 7vw, 6rem) var(--gutter)' }}>
            <ScrollReveal>
              <div style={{ maxWidth: '640px', marginBottom: '2.5rem' }}>
                <span className="eyebrow eyebrow-blue">
                  {hasDetail ? (
                    <Bilingual en={L.projectsEyebrow} ar={LAr.projectsEyebrow} />
                  ) : (
                    <Bilingual en={L.deliveredWork} ar={LAr.deliveredWork} />
                  )}
                </span>
                <h2 className="h2" style={{ marginTop: '1.25rem' }}>
                  {hasDetail ? (
                    <Bilingual en={L.projectsTitle} ar={LAr.projectsTitle} />
                  ) : (
                    <Bilingual en={`${sector.name} projects`} ar={`مشاريع ${sector.nameAr ?? sector.name}`} />
                  )}
                </h2>
              </div>
            </ScrollReveal>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 330px), 1fr))',
                gap: 'clamp(1rem, 2vw, 1.5rem)',
              }}
            >
              {projects.map((project, i) => (
                <ScrollReveal key={project.slug} delay={i * 90}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="hover-lift"
                    style={{
                      display: 'block',
                      backgroundColor: 'var(--surface)',
                      border: '1px solid var(--rule)',
                      borderRadius: 'var(--radius)',
                      overflow: 'hidden',
                    }}
                  >
                    <Figure
                      photo={project.photo}
                      ratio="4 / 3"
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                      className="figure-zoom"
                      style={{ border: 'none', borderRadius: 0, borderBottom: '1px solid var(--rule)' }}
                    />
                    <div style={{ padding: '1.5rem' }}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem' }}>
                        <Bilingual en={project.name} ar={project.nameAr} />
                      </h3>
                      <span style={{ fontSize: '0.85rem', color: 'var(--ink-faint)' }}>{project.location}</span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {projects.length === 0 && (
        <section style={{ backgroundColor: 'var(--paper)' }}>
          <div style={{ ...container, padding: 'clamp(3.5rem, 7vw, 6rem) var(--gutter)', textAlign: 'center' }}>
            <p className="p-large">
              <Bilingual
                en={
                  <>
                    No {sector.name.toLowerCase()} projects published yet —{' '}
                    <Link href="/contact" style={{ color: 'var(--primary)', fontWeight: 700 }}>
                      ask us about one
                    </Link>
                    .
                  </>
                }
                ar={
                  <>
                    لا توجد مشاريع منشورة لـ {sector.nameAr ?? sector.name} حتى الآن —{' '}
                    <Link href="/contact" style={{ color: 'var(--primary)', fontWeight: 700 }}>
                      اسألنا عن أحد المشاريع
                    </Link>
                    .
                  </>
                }
              />
            </p>
          </div>
        </section>
      )}

      {hasDetail && (
        <section style={{ backgroundColor: 'var(--paper-deep)', borderTop: '1px solid var(--rule)' }}>
          <div style={{ ...container, padding: 'clamp(3.5rem, 7vw, 5.5rem) var(--gutter)' }}>
            <ScrollReveal>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.75rem' }}>
                <div style={{ maxWidth: '560px' }}>
                  <h2 className="h2" style={{ marginBottom: '0.75rem' }}><Bilingual en={sector.ctaTitle} ar={sector.ctaTitleAr} /></h2>
                  <p className="p-large"><Bilingual en={sector.ctaSubtitle} ar={sector.ctaSubtitleAr} /></p>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <Link href={`/quote?ref=${encodeURIComponent(sector.name)}`} className="btn-primary">
                    <Bilingual en={L.ctaQuote} ar={LAr.ctaQuote} />
                  </Link>
                  <Link href="/consultation" className="btn-secondary">
                    <Bilingual en={L.ctaBook} ar={LAr.ctaBook} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      <section style={{ backgroundColor: 'var(--paper)', borderTop: '1px solid var(--rule)' }}>
        <div style={{ ...container, padding: 'clamp(2.5rem, 5vw, 4rem) var(--gutter)' }}>
          <ScrollReveal>
            <span className="eyebrow"><Bilingual en={L.otherSectors} ar={LAr.otherSectors} /></span>
          </ScrollReveal>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '1.25rem' }}>
            {otherSectors.map((s) => (
              <Link key={s.slug} href={`/sectors/${s.slug}`} className="filter-chip">
                <Bilingual en={s.name} ar={s.nameAr} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, padding: '2rem var(--gutter)' }}>
          <Link href="/sectors" className="footer-link" style={{ fontSize: '0.9rem', fontWeight: 700 }}>
            <Bilingual en={L.backToSectors} ar={LAr.backToSectors} />
          </Link>
        </div>
      </section>
    </main>
  );
}
