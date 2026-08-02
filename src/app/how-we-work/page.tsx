import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';
import Figure from '@/components/Figure';
import Link from 'next/link';

export const metadata = {
  title: 'How We Work — Mariot Kitchen Equipment',
  description:
    'Our eleven-step methodology for delivering commercial kitchens: consultation, site visit, planning, fabrication, installation, commissioning and support.',
};

const container: React.CSSProperties = {
  maxWidth: '1320px',
  margin: '0 auto',
  padding: '0 var(--gutter)',
};

const STEPS = [
  { title: 'Consultation', desc: 'Discuss the project idea, menu, capacity, budget and timeline.' },
  { title: 'Site Visit', desc: 'Inspect dimensions, utilities, ventilation, delivery access and installation conditions.' },
  { title: 'Kitchen Planning', desc: 'Workflow-based planning focused on speed, hygiene, safety and staff movement.' },
  { title: 'Equipment Selection', desc: 'The right equipment for your menu, production capacity, project type and budget.' },
  { title: 'BOQ Preparation', desc: 'A clear bill of quantities with specifications, sizes and scope.' },
  { title: 'Steel Fabrication', desc: 'In-house manufacture of custom tables, sinks, counters, shelves, hoods and worktops.' },
  { title: 'Supply & Delivery', desc: 'Logistics coordinated to your project timeline.' },
  { title: 'Installation', desc: 'On-site installation by experienced technicians.' },
  { title: 'Testing & Commissioning', desc: 'Full testing and a safe hand-over, ready for service.' },
  { title: 'Training', desc: 'We guide your team on operation, cleaning and daily care.' },
  { title: 'Maintenance & Support', desc: 'After-sales support, maintenance contracts and spare parts.' },
];

export default function HowWeWork() {
  return (
    <main>
      <PageHero
        eyebrow="Our Methodology"
        title={
          <>
            From first sketch to{' '}
            <span style={{ color: 'var(--primary)' }}>first plate</span>
          </>
        }
        intro="Eleven steps, in order, every time. It is how a kitchen gets delivered on schedule and still works on the busiest night of the year."
        photo="chefPlating"
        stats={[
          { value: '11', label: 'Steps' },
          { value: '500+', label: 'Kitchens Delivered' },
          { value: '20+', label: 'Years Refining It' },
        ]}
      />

      {/* ── THE ELEVEN STEPS ─────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, padding: 'clamp(4rem, 8vw, 7rem) var(--gutter)' }}>
          <ScrollReveal>
            <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
              <span className="eyebrow">The process</span>
              <h2 className="h2" style={{ marginTop: '1.25rem' }}>
                Eleven steps,
                <br />
                no shortcuts
              </h2>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
              gap: '1px',
              backgroundColor: 'var(--rule)',
              border: '1px solid var(--rule)',
            }}
          >
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.title} delay={(i % 3) * 80}>
                <div
                  className="cat-card"
                  style={{
                    backgroundColor: 'var(--surface)',
                    padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                    height: '100%',
                    minHeight: '210px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)', fontWeight: 700,
                      fontSize: 'clamp(2.25rem, 4vw, 3rem)',
                      lineHeight: 1,
                      color: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
                      marginBottom: '1rem',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: 'clamp(1.2rem, 2.2vw, 1.5rem)',
                      letterSpacing: '0.02em',
                      marginBottom: '0.6rem',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.93rem', color: 'var(--ink-soft)', lineHeight: 1.55 }}>
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROOF BAND ───────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--ink)', color: 'var(--paper)' }}>
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
                photo="welding"
                ratio="3 / 2"
                sizes="(max-width: 800px) 100vw, 45vw"
                className="figure-zoom"
                style={{ border: '1px solid var(--rule-light)' }}
              />
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div>
                <span className="eyebrow on-dark">Why the order matters</span>
                <h2 className="h2" style={{ margin: '1.25rem 0 1.5rem', color: 'var(--paper)' }}>
                  Planning before purchasing
                </h2>
                <p className="p-large" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '2rem' }}>
                  Most kitchen overruns come from equipment bought before the layout was settled.
                  We fix the workflow first, then the schedule, then the steel — which is why our
                  projects hand over on the date we gave you.
                </p>
                <Link href="/design-your-project" className="premium-btn blue-btn">
                  Design Your Project
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
        </div>
      </section>
    </main>
  );
}
