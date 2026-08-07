import { Suspense } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';
import Figure from '@/components/Figure';
import ProjectGallery from '@/components/ProjectGallery';
import { Bilingual } from '@/components/Bilingual';
import { db } from '@/lib/db';
import Link from 'next/link';

export const metadata = {
  title: 'Stainless Steel Fabrication — Mariot Kitchen Equipment',
  description:
    'Custom Grade 304 and 430 stainless steel fabrication built in our own UAE factory — work tables, sinks, hoods, counters and bespoke units.',
};

/* Reads CMS data, so it must render per-request rather than at build time —
   a build should never fail because the database wasn't reachable from the
   build environment. */
export const dynamic = 'force-dynamic';

const container: React.CSSProperties = {
  maxWidth: '1320px',
  margin: '0 auto',
  padding: '0 var(--gutter)',
};

export default async function Fabrication() {
  const [capabilities, process, fabricationProjects] = await Promise.all([
    db.fabricationCapability.findMany({ orderBy: { order: 'asc' } }),
    db.fabricationProcessStep.findMany({ orderBy: { order: 'asc' } }),
    db.project.findMany({ where: { isFabrication: true }, orderBy: { order: 'asc' } }),
  ]);

  return (
    <main>
      <PageHero
        eyebrow="Own Fabrication Factory · UAE"
        title={
          <>
            We don&rsquo;t just supply —{' '}
            <span style={{ color: 'var(--primary)' }}>we manufacture</span>
          </>
        }
        intro="Custom stainless steel built in our own UAE factory to your exact kitchen layout. Grade 304 and 430, precision-welded and finished to hospitality standards."
        photo="welding"
        stats={[
          { value: '10–14', label: 'Days Typical Lead Time' },
          { value: '304/430', label: 'Steel Grades' },
          { value: '100%', label: 'Built In-House' },
        ]}
      >
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
          {['Made to Measure', 'In-House Welders', 'Own Factory'].map((tag) => (
            <span
              key={tag}
              style={{
                padding: '0.5rem 1rem',
                border: '1px solid var(--rule-light)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#fff',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </PageHero>

      {/* ── CAPABILITIES ─────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, padding: 'clamp(4rem, 8vw, 7rem) var(--gutter)' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
              gap: 'clamp(2.5rem, 5vw, 4.5rem)',
              alignItems: 'start',
            }}
          >
            <ScrollReveal>
              <div>
                <span className="eyebrow">What we build</span>
                <h2 className="h2" style={{ margin: '1.25rem 0 1.5rem' }}>
                  Built to your
                  <br />
                  millimetre
                </h2>
                <p className="p-large" style={{ marginBottom: '2rem' }}>
                  Off-the-shelf steel rarely fits a real kitchen. We draw every unit around your
                  layout, your services and the way your team actually moves.
                </p>
                <Figure
                  photo="chefPlating"
                  ratio="16 / 10"
                  sizes="(max-width: 800px) 100vw, 45vw"
                  className="figure-zoom"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 190px), 1fr))',
                  gap: '1px',
                  backgroundColor: 'var(--rule)',
                  border: '1px solid var(--rule)',
                }}
              >
                {capabilities.map((item, i) => (
                  <div
                    key={item.id}
                    style={{
                      backgroundColor: 'var(--surface)',
                      padding: 'clamp(1.35rem, 2.5vw, 1.75rem)',
                      minHeight: '150px',
                    }}
                  >
                    <span
                      aria-hidden
                      style={{
                        display: 'block',
                        width: '8px',
                        height: '8px',
                        backgroundColor: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
                        marginBottom: '1rem',
                      }}
                    />
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '1.15rem',
                        letterSpacing: '0.02em',
                        marginBottom: '0.4rem',
                      }}
                    >
                      <Bilingual en={item.title} ar={item.titleAr} />
                    </h3>
                    <p style={{ fontSize: '0.87rem', color: 'var(--ink-soft)', lineHeight: 1.5 }}>
                      <Bilingual en={item.desc} ar={item.descAr} />
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--ink)', color: 'var(--paper)' }}>
        <div style={{ ...container, padding: 'clamp(4rem, 8vw, 7rem) var(--gutter)' }}>
          <ScrollReveal>
            <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
              <span className="eyebrow on-dark">Factory floor</span>
              <h2 className="h2" style={{ marginTop: '1.25rem', color: 'var(--paper)' }}>
                Sheet to installed unit
              </h2>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
              gap: '1px',
              backgroundColor: 'var(--rule-light)',
              border: '1px solid var(--rule-light)',
            }}
          >
            {process.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 90}>
                <div
                  style={{
                    backgroundColor: 'var(--ink)',
                    padding: 'clamp(1.5rem, 3vw, 2rem)',
                    height: '100%',
                    minHeight: '210px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)', fontWeight: 700,
                      fontSize: '0.9rem',
                      color: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '1.25rem',
                      margin: '0.85rem 0 0.6rem',
                    }}
                  >
                    <Bilingual en={item.step} ar={item.stepAr} />
                  </h3>
                  <p
                    style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.55 }}
                  >
                    <Bilingual en={item.desc} ar={item.descAr} />
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, padding: 'clamp(4rem, 8vw, 7rem) var(--gutter)' }}>
          <ScrollReveal>
            <div style={{ marginBottom: '2.5rem', maxWidth: '640px' }}>
              <span className="eyebrow eyebrow-blue">Delivered work</span>
              <h2 className="h2" style={{ marginTop: '1.25rem' }}>
                Fabrication projects
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            {/* Required since ProjectGallery started reading ?category= and
                this route is prerendered. Chips stay derived from the items
                here: these are fabrication types, not the site's sectors. */}
            <Suspense fallback={<div style={{ minHeight: '420px' }} />}>
              <ProjectGallery items={fabricationProjects.map((p) => ({ ...p, location: p.location ?? '' }))} />
            </Suspense>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper-deep)', borderTop: '1px solid var(--rule)' }}>
        <div style={{ ...container, padding: 'clamp(3.5rem, 7vw, 5.5rem) var(--gutter)' }}>
          <ScrollReveal>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '2rem',
              }}
            >
              <div style={{ maxWidth: '620px' }}>
                <span className="eyebrow">Send us your drawing</span>
                <h2 className="h2" style={{ marginTop: '1.25rem' }}>
                  Get a fabrication quote
                </h2>
                <p className="p-large" style={{ marginTop: '1rem' }}>
                  Send a sketch, a CAD file or just dimensions on a photo — we will quote from it.
                </p>
              </div>
              <Link href="/contact" className="premium-btn black-btn">
                Request a Quote
                <span className="btn-circle">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
