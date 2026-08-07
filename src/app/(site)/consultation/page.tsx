import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';
import Figure from '@/components/Figure';
import ConsultationForm from './ConsultationForm';

export const metadata = {
  title: 'Book a Kitchen Consultation — Mariot Kitchen Equipment',
  description:
    'Free 60-minute kitchen consultation and site visit with a senior consultant. On-site visit, video call, or phone — available across all 7 emirates.',
};

const container: React.CSSProperties = {
  maxWidth: '1320px',
  margin: '0 auto',
  padding: '0 var(--gutter)',
};

const BULLETS = [
  'Free with no obligation',
  'Available across all 7 emirates',
  'Preliminary layout suggestions during the visit',
  'Written notes shared within 48 hours',
];

const STEPS = [
  { title: 'You Book', text: 'Pick a preferred date & time. Site visit, video call or phone — your choice.' },
  { title: 'We Confirm', text: 'A consultant confirms within 4 hours and shares a project briefing.' },
  { title: 'You Meet & Plan', text: 'We walk the space, discuss workflow, then follow up with a written report.' },
];

export default function ConsultationPage() {
  return (
    <main>
      <PageHero
        eyebrow="Kitchen Consultation"
        title={
          <>
            Book a free kitchen consultation{' '}
            <span style={{ color: 'var(--primary)' }}>& site visit</span>
          </>
        }
        intro="60 minutes with a senior kitchen consultant. On-site visit, video call, or phone — whichever fits your project stage."
        photo="chefPortrait"
      >
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', listStyle: 'none', padding: 0, margin: 0 }}>
          {BULLETS.map((bullet) => (
            <li key={bullet} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(255,255,255,0.85)', fontSize: '0.92rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {bullet}
            </li>
          ))}
        </ul>
      </PageHero>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, padding: 'clamp(3.5rem, 7vw, 6rem) var(--gutter)' }}>
          <ScrollReveal>
            <span className="eyebrow eyebrow-blue">How it works</span>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)',
              marginTop: '2rem',
            }}
          >
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 90}>
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '2.2rem',
                      color: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', margin: '0.75rem 0 0.5rem' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: 'var(--ink-soft)', lineHeight: 1.6 }}>{step.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper-deep)', borderTop: '1px solid var(--rule)' }}>
        <div style={{ ...container, padding: 'clamp(3.5rem, 7vw, 6rem) var(--gutter)' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(2rem, 4vw, 3.5rem)',
              alignItems: 'start',
            }}
          >
            <ScrollReveal>
              <div>
                <span className="eyebrow">Book your slot</span>
                <h2 className="h2" style={{ margin: '1.25rem 0 1.25rem' }}>
                  Schedule your consultation
                </h2>
                <p className="p-large" style={{ marginBottom: '2rem' }}>
                  We&rsquo;ll confirm your slot within 4 working hours.
                </p>
                <Figure photo="chefFlame" ratio="4 / 3" sizes="(max-width: 800px) 100vw, 40vw" className="figure-zoom" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={140}>
              <ConsultationForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
