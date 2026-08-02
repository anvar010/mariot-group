import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';
import BrandDirectory from '@/components/BrandDirectory';
import { BRANDS } from '@/lib/brands';

export const metadata = {
  title: 'Brands We Supply — Mariot Kitchen Equipment',
  description:
    'Browse the global manufacturers Mariot Kitchen Equipment supplies across the UAE and GCC — cooking, refrigeration, coffee, food prep, bakery, laundry and warewashing equipment.',
};

const container: React.CSSProperties = {
  maxWidth: '1320px',
  margin: '0 auto',
  padding: '0 var(--gutter)',
};

const ASSURANCES = [
  {
    title: 'Authorised Supply',
    desc: 'Original equipment sourced through official channels — not grey imports.',
  },
  {
    title: 'Warranty Backed',
    desc: 'Manufacturer warranty honoured locally, with paperwork handled for you.',
  },
  {
    title: 'Genuine Spare Parts',
    desc: 'Parts held in our UAE warehouse so a breakdown does not become a shutdown.',
  },
  {
    title: 'Trained Technicians',
    desc: 'Engineers certified per brand for installation, commissioning and service.',
  },
];

export default function Brands() {
  return (
    <main>
      <PageHero
        eyebrow="Brands We Supply"
        title={
          <>
            The manufacturers behind{' '}
            <span style={{ color: 'var(--primary)' }}>every Mariot kitchen</span>
          </>
        }
        intro="From combi ovens to espresso machines, refrigeration to laundry — we represent the equipment brands professional kitchens across the Gulf already trust."
        photo="restaurantSteel"
        stats={[
          { value: `${BRANDS.length}+`, label: 'Brands Supplied' },
          { value: '20+', label: 'Years Partnering' },
          { value: '500+', label: 'Projects Equipped' },
        ]}
      >
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link href="/contact" className="premium-btn red-btn">
            Request a Brand Quote
            <span className="btn-circle">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </Link>
          <a
            href="https://mariotstore.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-white"
            style={{ padding: '0.85rem 1.75rem' }}
          >
            Shop Online
          </a>
        </div>
      </PageHero>

      {/* ── DIRECTORY ────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, padding: 'clamp(3rem, 6vw, 5rem) var(--gutter)' }}>
          <ScrollReveal>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: '1.5rem',
                marginBottom: '2rem',
              }}
            >
              <div>
                <span className="eyebrow eyebrow-blue">Full Directory</span>
                <h2 className="h2" style={{ marginTop: '1rem' }}>Every brand, A to Z</h2>
              </div>
              <p className="p-large" style={{ maxWidth: '380px' }}>
                Looking for something specific? Search below — and if a manufacturer
                is not listed, we can still source it.
              </p>
            </div>
          </ScrollReveal>

          <BrandDirectory />
        </div>
      </section>

      {/* ── WHY BUY THROUGH MARIOT ───────────────────────── */}
      <section style={{ backgroundColor: 'var(--ink)', color: 'var(--paper)' }}>
        <div style={{ ...container, padding: 'clamp(3rem, 5.5vw, 4.5rem) var(--gutter)' }}>
          <ScrollReveal>
            <div style={{ maxWidth: '640px', marginBottom: '2.5rem' }}>
              <span className="eyebrow on-dark">Why buy through Mariot</span>
              <h2 className="h2" style={{ marginTop: '1rem', color: 'var(--paper)' }}>
                The same brand, better supported
              </h2>
            </div>
          </ScrollReveal>

          <div
            className="mob-swipe on-dark"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: '1px',
              backgroundColor: 'var(--rule-light)',
              border: '1px solid var(--rule-light)',
            }}
          >
            {ASSURANCES.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 90}>
                <div
                  style={{
                    backgroundColor: 'var(--ink)',
                    padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)', fontWeight: 700,
                      fontSize: '0.95rem',
                      color: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                      lineHeight: 1.1,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper)', borderTop: '1px solid var(--rule)' }}>
        <div style={{ ...container, padding: 'clamp(3rem, 5.5vw, 4.5rem) var(--gutter)' }}>
          <ScrollReveal>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.75rem',
              }}
            >
              <div style={{ maxWidth: '620px' }}>
                <span className="eyebrow">Can’t find a brand?</span>
                <h2 className="h2" style={{ margin: '1rem 0 0.75rem' }}>
                  Tell us what you need — we’ll source it
                </h2>
                <p className="p-large">
                  Our procurement team works with manufacturers well beyond this list.
                  Send the model or spec and we’ll come back with availability and price.
                </p>
              </div>
              <Link href="/contact" className="premium-btn black-btn">
                Talk to Procurement
                <span className="btn-circle">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
