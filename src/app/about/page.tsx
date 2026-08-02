import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';
import Figure from '@/components/Figure';
import { SECTOR_NAMES } from '@/lib/sectors';
import Link from 'next/link';

export const metadata = {
  title: 'About Mariot — Commercial Kitchen Specialists, UAE',
  description:
    'Two decades supplying commercial kitchen equipment, refrigeration, stainless steel fabrication and laundry solutions across the UAE and GCC.',
};

const container: React.CSSProperties = {
  maxWidth: '1320px',
  margin: '0 auto',
  padding: '0 var(--gutter)',
};

const WHAT_WE_DO = [
  'Supply of commercial kitchen equipment and cooking suites',
  'Commercial refrigeration — walk-in cold rooms, blast chillers, display cases',
  'Custom stainless steel fabrication (Grade 304 and 430)',
  'Laundry equipment for hotels, hospitals and industrial applications',
  'Complete turn-key project design, supply, installation and commissioning',
  'After-sales service, spare parts and maintenance contracts',
];

const STRENGTHS = [
  'Direct partnerships with top-tier global manufacturers',
  'Complete in-house engineering and design team',
  'UAE-based warehouse with immediate stock availability',
  'Multi-lingual sales and technical support',
];

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="About Mariot"
        title={
          <>
            Kitchens that <span style={{ color: 'var(--primary)' }}>perform</span>, since 2004
          </>
        }
        intro="Mariot Kitchen Equipment supplies commercial kitchen equipment, refrigeration, stainless steel fabrication, laundry equipment and full project support for every kind of commercial food service business."
        photo="chefFlame"
        stats={[
          { value: '20+', label: 'Years of Experience' },
          { value: '500+', label: 'Delivered Projects' },
          { value: '40+', label: 'Global Brands' },
          { value: '7', label: 'Emirates Served' },
        ]}
      />

      {/* ── VISION & MISSION ─────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, padding: 'clamp(4rem, 8vw, 7rem) var(--gutter)' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
              gap: '1px',
              backgroundColor: 'var(--rule)',
              border: '1px solid var(--rule)',
            }}
          >
            {[
              {
                label: 'Our Vision',
                body: 'To become one of the leading commercial kitchen equipment and project solution providers in the UAE and GCC by delivering reliable products, professional service, and complete equipment solutions for every type of food service business.',
                color: 'var(--primary)',
              },
              {
                label: 'Our Mission',
                body: 'To help our clients build efficient, reliable and professional kitchens by providing high-quality equipment, fast quotations, trusted brands, and complete project support from planning to supply.',
                color: 'var(--accent)',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 120}>
                <div
                  style={{
                    backgroundColor: 'var(--surface)',
                    padding: 'clamp(2rem, 4vw, 3rem)',
                    height: '100%',
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      display: 'block',
                      width: '38px',
                      height: '4px',
                      backgroundColor: item.color,
                      marginBottom: '1.75rem',
                    }}
                  />
                  <h2 className="h3-display" style={{ marginBottom: '1.25rem' }}>
                    {item.label}
                  </h2>
                  <p className="p-large">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ───────────────────────────────────── */}
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
              <Figure
                photo="restaurantSteel"
                ratio="4 / 5"
                sizes="(max-width: 800px) 100vw, 45vw"
                className="figure-zoom"
              />
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div>
                <span className="eyebrow eyebrow-blue">What we do</span>
                <h2 className="h2" style={{ margin: '1.25rem 0 2rem' }}>
                  Six things,
                  <br />
                  done properly
                </h2>
                <ul style={{ listStyle: 'none', borderTop: '1px solid var(--rule)' }}>
                  {WHAT_WE_DO.map((service, i) => (
                    <li
                      key={service}
                      className="editorial-row"
                      style={{
                        display: 'flex',
                        gap: '1.25rem',
                        alignItems: 'baseline',
                        padding: '1.1rem 1rem',
                        borderBottom: '1px solid var(--rule)',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-display)', fontWeight: 700,
                          fontSize: '0.85rem',
                          color: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
                          flexShrink: 0,
                        }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span style={{ fontSize: '1rem', fontWeight: 500, lineHeight: 1.5 }}>
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── STRENGTHS & SECTORS ──────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, padding: 'clamp(4rem, 8vw, 7rem) var(--gutter)' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
              gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            }}
          >
            <ScrollReveal>
              <div>
                <span className="eyebrow">Our strengths</span>
                <h2 className="h2" style={{ margin: '1.25rem 0 2rem' }}>
                  Why operators
                  <br />
                  stay with us
                </h2>
                <div style={{ borderTop: '1px solid var(--rule)' }}>
                  {STRENGTHS.map((strength, i) => (
                    <div
                      key={strength}
                      className="editorial-row"
                      style={{
                        display: 'flex',
                        gap: '1.25rem',
                        alignItems: 'baseline',
                        padding: '1.25rem 1rem',
                        borderBottom: '1px solid var(--rule)',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-display)', fontWeight: 700,
                          fontSize: '0.85rem',
                          color: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
                          flexShrink: 0,
                        }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span style={{ fontSize: '1rem', fontWeight: 500, lineHeight: 1.5 }}>
                        {strength}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div>
                <span className="eyebrow eyebrow-blue">Target sectors</span>
                <h2 className="h2" style={{ margin: '1.25rem 0 2rem' }}>
                  Twelve
                  <br />
                  segments
                </h2>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))',
                    gap: '1px',
                    backgroundColor: 'var(--rule)',
                    border: '1px solid var(--rule)',
                  }}
                >
                  {SECTOR_NAMES.map((sector) => (
                    <span
                      key={sector}
                      style={{
                        backgroundColor: 'var(--surface)',
                        padding: '1rem 1.15rem',
                        fontSize: '0.87rem',
                        fontWeight: 600,
                      }}
                    >
                      {sector}
                    </span>
                  ))}
                </div>
                <Link
                  href="/sectors"
                  className="btn-secondary"
                  style={{ padding: '0.85rem 1.75rem', marginTop: '1.75rem' }}
                >
                  Explore sectors →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
