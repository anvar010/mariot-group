import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';
import Figure from '@/components/Figure';
import { Bilingual } from '@/components/Bilingual';
import { db } from '@/lib/db';
import Link from 'next/link';

export const metadata = {
  title: 'Sectors We Serve — Mariot Kitchen Equipment',
  description:
    'Commercial kitchen equipment and fabrication for restaurants, hotels, resorts, hospitals, bakeries, laundries, catering and central kitchens across the UAE and GCC.',
};

const container: React.CSSProperties = {
  maxWidth: '1320px',
  margin: '0 auto',
  padding: '0 var(--gutter)',
};

export default async function Sectors() {
  const sectors = await db.sector.findMany({ orderBy: { order: 'asc' } });

  return (
    <main>
      <PageHero
        eyebrow="Sectors We Serve"
        title={
          <>
            Sector expertise across{' '}
            <span style={{ color: 'var(--primary)' }}>every project type</span>
          </>
        }
        intro="Every segment cooks differently. We plan, equip and fabricate around the workflow each one actually runs — not a generic kitchen template."
        photo="restaurantSteel"
        stats={[
          { value: '12', label: 'Segments Served' },
          { value: '500+', label: 'Projects Delivered' },
          { value: '40+', label: 'Global Brands' },
        ]}
      />

      <section style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, padding: 'clamp(4rem, 8vw, 7rem) var(--gutter)' }}>
          <ScrollReveal>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: '1.5rem',
                marginBottom: '3rem',
              }}
            >
              <div>
                <span className="eyebrow">Browse by segment</span>
                <h2 className="h2" style={{ marginTop: '1.25rem' }}>
                  Twelve sectors,
                  <br />
                  one partner
                </h2>
              </div>
              <p className="p-large" style={{ maxWidth: '380px' }}>
                Each sector has its own dedicated page with past work and tailored equipment
                packages.
              </p>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
              gap: '1px',
              backgroundColor: 'var(--rule)',
              border: '1px solid var(--rule)',
            }}
          >
            {sectors.map((sector, i) => (
              <ScrollReveal key={sector.slug} delay={(i % 3) * 100}>
                <Link
                  href={`/sectors/${sector.slug}`}
                  className="media-tile"
                  style={{ height: '100%', minHeight: '340px', border: 'none' }}
                >
                  <Figure
                    photo={sector.photo}
                    scrim="full"
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    className="figure-zoom"
                    style={{ position: 'absolute', inset: 0, border: 'none' }}
                  />
                  <div className="tile-body" style={{ minHeight: '340px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)', fontWeight: 700,
                        fontSize: '0.9rem',
                        color: i % 3 === 1 ? 'var(--accent)' : 'var(--primary)',
                        marginBottom: 'auto',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 style={{ fontSize: 'clamp(1.35rem, 2.4vw, 1.75rem)', marginBottom: '0.6rem' }}>
                      <Bilingual en={sector.name} ar={sector.nameAr} />
                    </h3>
                    <p
                      style={{
                        fontSize: '0.92rem',
                        lineHeight: 1.55,
                        color: 'rgba(255,255,255,0.78)',
                        marginBottom: '1rem',
                      }}
                    >
                      <Bilingual en={sector.desc} ar={sector.descAr} />
                    </p>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: '#fff',
                      }}
                    >
                      View sector <span className="cat-arrow">→</span>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--ink)', color: 'var(--paper)' }}>
        <div style={{ ...container, padding: 'clamp(3.5rem, 7vw, 6rem) var(--gutter)' }}>
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
                <span className="eyebrow on-dark">Not sure where you fit?</span>
                <h2 className="h2" style={{ marginTop: '1.25rem', color: 'var(--paper)' }}>
                  Tell us what you&rsquo;re building
                </h2>
                <p className="p-large" style={{ color: 'rgba(255,255,255,0.65)', marginTop: '1rem' }}>
                  Send us your concept and our engineers will scope the equipment list, the
                  fabrication and the budget.
                </p>
              </div>
              <Link href="/contact" className="premium-btn blue-btn">
                Get a Free Quote
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
