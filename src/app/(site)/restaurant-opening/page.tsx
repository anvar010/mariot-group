import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';
import OpeningForm from './OpeningForm';

export const metadata = {
  title: 'Restaurant & Café Opening Support — Mariot Kitchen Equipment',
  description:
    'End-to-end launch support for new restaurants and cafés — licensing coordination, design, equipment packages, staff training and soft-launch marketing.',
};

const container: React.CSSProperties = {
  maxWidth: '1320px',
  margin: '0 auto',
  padding: '0 var(--gutter)',
};

const CHIPS = [
  'Concept-to-opening playbook',
  'Licensing coordination',
  'Equipment package deals',
  'Staff hire & train',
  'Soft-launch marketing',
];

const PILLARS = [
  { title: 'Design & Layout', text: 'Kitchen and front-of-house layout engineered for your concept.' },
  { title: 'Equipment Packages', text: 'Bundled equipment sourced from 40+ trusted brands.' },
  { title: 'Delivery & Install', text: 'Coordinated logistics, install, testing, and handover.' },
  { title: 'Training & Launch', text: 'Team training, pre-opening dry runs, and soft-launch support.' },
];

export default function RestaurantOpeningPage() {
  return (
    <main>
      <PageHero
        eyebrow="Restaurant & Café Opening"
        title={
          <>
            From vision to opening day{' '}
            <span style={{ color: 'var(--primary)' }}>— end to end</span>
          </>
        }
        intro="Launch specialists guide you across licensing, design, equipment, staff training, and marketing so your opening runs on time and on budget."
        photo="fineDining"
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {CHIPS.map((chip) => (
            <span
              key={chip}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.3)',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.9)',
              }}
            >
              {chip}
            </span>
          ))}
        </div>
      </PageHero>

      {/* ── PILLARS ──────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, padding: 'clamp(3.5rem, 7vw, 6rem) var(--gutter)' }}>
          <ScrollReveal>
            <div style={{ maxWidth: '640px', marginBottom: '2.5rem' }}>
              <span className="eyebrow eyebrow-blue">End-to-end support</span>
              <h2 className="h2" style={{ marginTop: '1.25rem' }}>
                Four pillars of a successful opening
              </h2>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: '1px',
              backgroundColor: 'var(--rule)',
              border: '1px solid var(--rule)',
            }}
          >
            {PILLARS.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 90}>
                <div style={{ backgroundColor: 'var(--surface)', padding: 'clamp(1.5rem, 3vw, 2rem)', height: '100%' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      color: 'var(--ink)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', margin: '0.6rem 0 0.5rem' }}>
                    {pillar.title}
                  </h3>
                  <p style={{ color: 'var(--ink-soft)', fontSize: '0.92rem', lineHeight: 1.6 }}>{pillar.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper-deep)', borderTop: '1px solid var(--rule)' }}>
        <div style={{ ...container, padding: 'clamp(3.5rem, 7vw, 6rem) var(--gutter)', maxWidth: '820px' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="eyebrow" style={{ margin: '0 auto' }}>
                Opening support request
              </span>
              <h2 className="h2" style={{ margin: '1.25rem 0 0.75rem' }}>
                Tell us about your opening
              </h2>
              <p className="p-large">A launch specialist will contact you within 24 hours.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <OpeningForm />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
