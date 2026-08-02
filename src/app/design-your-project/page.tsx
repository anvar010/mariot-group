import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';
import Figure from '@/components/Figure';
import { SECTORS } from '@/lib/sectors';
import Link from 'next/link';

export const metadata = {
  title: 'Design Your Project — Mariot Kitchen Equipment',
  description:
    'Commercial kitchen planning and design: engineering drawings, 3D layouts, equipment selection, installation and commissioning across the UAE.',
};

const container: React.CSSProperties = {
  maxWidth: '1320px',
  margin: '0 auto',
  padding: '0 var(--gutter)',
};

const PILLARS = [
  {
    title: 'Engineering Blueprint',
    desc: 'Code-compliant drawings and detailed equipment schedules your contractor can build from.',
    photo: 'welding' as const,
  },
  {
    title: '3D Design',
    desc: 'Walk through your kitchen and check every clearance before a single unit is ordered.',
    photo: 'chefPlating' as const,
  },
  {
    title: 'Complete Execution',
    desc: 'Supply, installation and commissioning — handed over ready for service.',
    photo: 'chefFlame' as const,
  },
];

const STEPS = [
  {
    title: 'Discovery & Consultation',
    desc: 'We study your concept, menu, space and production capacity to define the optimal workflow.',
  },
  {
    title: 'Layout & 3D Design',
    desc: '2D and 3D layouts engineered for hygiene, workflow and code compliance.',
  },
  {
    title: 'Equipment Selection',
    desc: 'A curated choice from 40+ trusted global brands to fit your menu and your budget.',
  },
  {
    title: 'Supply & Installation',
    desc: 'Logistics, staging, MEP coordination and professional on-site installation.',
  },
  {
    title: 'Commissioning & Support',
    desc: 'Testing, staff handover, warranties, ongoing maintenance and spare parts.',
  },
];

const ASSURANCES = [
  { value: 'Free', label: 'First Consultation' },
  { value: '3D', label: 'Design Included' },
  { value: '500+', label: 'Delivered Projects' },
  { value: '20+', label: 'Years of Experience' },
  { value: '40+', label: 'Global Brands' },
  { value: 'Full', label: 'Install & Warranty' },
];

export default function DesignYourProject() {
  return (
    <main>
      <PageHero
        eyebrow="Kitchen Planning & Design"
        title={
          <>
            From concept to a{' '}
            <span style={{ color: 'var(--primary)' }}>fully operational kitchen</span>
          </>
        }
        intro="3D design, precise engineering drawings and world-class brands — our team is with you from the first sketch to the first plate."
        photo="restaurantDark"
      >
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/contact" className="premium-btn red-btn">
            Start Your Consultation
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
          <Link href="/how-we-work" className="btn-secondary-white" style={{ padding: '0.85rem 2rem' }}>
            See How We Work
          </Link>
        </div>
      </PageHero>

      {/* ── ASSURANCE BAND ───────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper)', borderBottom: '1px solid var(--rule)' }}>
        <div style={{ ...container, paddingTop: 'clamp(3rem, 6vw, 4.5rem)' }}>
          <ScrollReveal>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(50%, 180px), 1fr))',
                gap: '1px',
                backgroundColor: 'var(--rule)',
                border: '1px solid var(--rule)',
              }}
            >
              {ASSURANCES.map((item, i) => (
                <div
                  key={item.label}
                  style={{ backgroundColor: 'var(--surface)', padding: 'clamp(1.35rem, 2.5vw, 1.85rem)' }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.65rem, 3vw, 2.35rem)',
                      lineHeight: 1,
                      color: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
                    }}
                  >
                    {item.value}
                  </div>
                  <p
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.13em',
                      textTransform: 'uppercase',
                      marginTop: '0.6rem',
                      color: 'var(--ink-soft)',
                    }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── THREE PILLARS ────────────────────────────────── */}
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
                <span className="eyebrow">From paper to reality</span>
                <h2 className="h2" style={{ marginTop: '1.25rem' }}>
                  We plan,
                  <br />
                  design, execute
                </h2>
              </div>
              <p className="p-large" style={{ maxWidth: '380px' }}>
                Precise engineering drawings, realistic 3D models, then a complete kitchen
                delivered.
              </p>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(1rem, 2vw, 1.5rem)',
            }}
          >
            {PILLARS.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 110}>
                <div
                  style={{
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--rule)',
                    height: '100%',
                  }}
                >
                  <Figure
                    photo={pillar.photo}
                    ratio="3 / 2"
                    sizes="(max-width: 700px) 100vw, 33vw"
                    className="figure-zoom"
                    style={{ border: 'none', borderBottom: '1px solid var(--rule)' }}
                  >
                    <span className={`figure-tag${i % 2 === 1 ? ' on-accent' : ' on-primary'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </Figure>
                  <div style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 400,
                        fontSize: 'clamp(1.25rem, 2.2vw, 1.5rem)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                        marginBottom: '0.6rem',
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIVE STEPS ───────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--ink)', color: 'var(--paper)' }}>
        <div style={{ ...container, padding: 'clamp(4rem, 8vw, 7rem) var(--gutter)' }}>
          <ScrollReveal>
            <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
              <span className="eyebrow on-dark">How we work</span>
              <h2 className="h2" style={{ marginTop: '1.25rem', color: 'var(--paper)' }}>
                Five steps to your ideal kitchen
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ borderTop: '1px solid var(--rule-light)' }}>
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 70}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto minmax(0, 1fr)',
                    gap: 'clamp(1.5rem, 4vw, 3rem)',
                    alignItems: 'baseline',
                    padding: 'clamp(1.5rem, 3vw, 2.25rem) 0',
                    borderBottom: '1px solid var(--rule-light)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                      lineHeight: 1,
                      color: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
                      minWidth: '2.5ch',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                      gap: '0.75rem clamp(1.5rem, 4vw, 3rem)',
                      alignItems: 'baseline',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 400,
                        fontSize: 'clamp(1.25rem, 2.4vw, 1.7rem)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.97rem',
                        color: 'rgba(255,255,255,0.62)',
                        lineHeight: 1.6,
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTORAL EXPERTISE ───────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper-deep)', borderTop: '1px solid var(--rule)' }}>
        <div style={{ ...container, padding: 'clamp(4rem, 8vw, 7rem) var(--gutter)' }}>
          <ScrollReveal>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: '1.5rem',
                marginBottom: '2.5rem',
              }}
            >
              <div>
                <span className="eyebrow eyebrow-blue">Sectoral expertise</span>
                <h2 className="h2" style={{ marginTop: '1.25rem' }}>
                  Projects we plan and equip
                </h2>
              </div>
              <Link href="/sectors" className="btn-secondary" style={{ padding: '0.85rem 1.75rem' }}>
                View all sectors →
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 170px), 1fr))',
                gap: '1px',
                backgroundColor: 'var(--rule)',
                border: '1px solid var(--rule)',
              }}
            >
              {SECTORS.map((sector, i) => (
                <span
                  key={sector.slug}
                  style={{
                    backgroundColor: 'var(--surface)',
                    padding: '1.1rem 1.25rem',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.7rem',
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: '7px',
                      height: '7px',
                      backgroundColor: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
                      flexShrink: 0,
                    }}
                  />
                  {sector.name}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
