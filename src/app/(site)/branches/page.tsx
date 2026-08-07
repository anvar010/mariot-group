import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';
import Figure from '@/components/Figure';
import { Bilingual } from '@/components/Bilingual';
import { db } from '@/lib/db';

export const metadata = {
  title: 'Our Branches — Mariot Kitchen Equipment',
  description:
    'Mariot showrooms and service centres across Dubai, Abu Dhabi, Al Ain and Sharjah — equipment, consultation, installation and after-sales support.',
};

const container: React.CSSProperties = {
  maxWidth: '1320px',
  margin: '0 auto',
  padding: '0 var(--gutter)',
};

const pinIcon = (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default async function Branches() {
  const branches = await db.branch.findMany({ orderBy: { order: 'asc' } });

  return (
    <main>
      <PageHero
        eyebrow="Locations"
        title={
          <>
            Five branches, <span style={{ color: 'var(--primary)' }}>one standard</span>
          </>
        }
        intro="Mariot serves customers across the UAE through strategically located showrooms and a dedicated fabrication factory. Visit your nearest branch to see the range and discuss your project with a specialist."
        photo="cafeCounter"
        stats={[
          { value: '5', label: 'Branches' },
          { value: '7', label: 'Emirates Served' },
          { value: '1', label: 'Own Factory' },
        ]}
      />

      {/* ── BRANCH LIST ──────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, padding: 'clamp(4rem, 8vw, 7rem) var(--gutter)' }}>
          <ScrollReveal>
            <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
              <span className="eyebrow">Where to find us</span>
              <h2 className="h2" style={{ marginTop: '1.25rem' }}>
                Branch directory
              </h2>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
              gap: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            }}
          >
            {branches.map((branch, i) => (
              <ScrollReveal key={branch.slug} delay={i * 70}>
                <div
                  className="hover-lift"
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--rule)',
                    borderRadius: 'var(--radius)',
                    padding: 'clamp(1.5rem, 3vw, 2rem)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        color: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      style={{
                        fontSize: '0.66rem',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--ink-faint)',
                        padding: '0.3rem 0.7rem',
                        borderRadius: '999px',
                        backgroundColor: 'var(--paper-deep)',
                      }}
                    >
                      <Bilingual en={branch.role} ar={branch.roleAr} />
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
                      letterSpacing: '0.02em',
                      marginBottom: '0.6rem',
                    }}
                  >
                    <Bilingual en={branch.name} ar={branch.nameAr} />
                  </h3>

                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      color: 'var(--ink-soft)',
                      fontSize: '0.9rem',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <span style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.15rem' }}>{pinIcon}</span>
                    <Bilingual en={branch.location} ar={branch.locationAr} />
                  </span>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.4rem',
                      paddingTop: '1.25rem',
                      marginTop: 'auto',
                      borderTop: '1px solid var(--rule)',
                    }}
                  >
                    <a href={`tel:${branch.phone.replace(/\s/g, '')}`} style={{ fontWeight: 700, fontSize: '0.98rem' }}>
                      {branch.phone}
                    </a>
                    <a
                      href={`mailto:${branch.email}`}
                      className="footer-link"
                      style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--ink-soft)' }}
                    >
                      {branch.email}
                    </a>
                  </div>

                  <Link
                    href={`/branches/${branch.slug}`}
                    className="btn-secondary"
                    style={{ justifyContent: 'center', marginTop: '1.5rem' }}
                  >
                    View Branch
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY VISIT ────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper-deep)', borderTop: '1px solid var(--rule)' }}>
        <div style={{ ...container, padding: 'clamp(4rem, 8vw, 7rem) var(--gutter)' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
              gap: 'clamp(2.5rem, 5vw, 4.5rem)',
              alignItems: 'center',
            }}
          >
            <ScrollReveal>
              <div>
                <span className="eyebrow eyebrow-blue">Worth the trip</span>
                <h2 className="h2" style={{ margin: '1.25rem 0 1.5rem' }}>
                  Why visit a branch?
                </h2>
                <p className="p-large">
                  Our branches offer product demonstrations, project consultation, equipment
                  recommendations, installation planning and technical support. Whether you are
                  upgrading an existing kitchen or launching a new hospitality project, our
                  specialists will help you choose the right solution.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <Figure
                photo="bakeryDisplay"
                ratio="3 / 2"
                sizes="(max-width: 800px) 100vw, 45vw"
                className="figure-zoom"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
