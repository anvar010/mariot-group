import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';
import UrgentForm from './UrgentForm';

export const metadata = {
  title: 'Urgent Equipment Request — Mariot Kitchen Equipment',
  description:
    'Kitchen down? Same-day quotes, 48-hour delivery on stocked items, and priority engineering call-outs across the UAE.',
};

const container: React.CSSProperties = {
  maxWidth: '1320px',
  margin: '0 auto',
  padding: '0 var(--gutter)',
};

const SLA = [
  { label: 'Response', value: '< 30 min' },
  { label: 'Quote', value: '< 4 hrs' },
  { label: 'Delivery (stocked)', value: '24–48 hrs' },
  { label: 'Engineer call-out', value: 'Same day' },
];

const PROBLEMS = [
  { title: 'Broken Equipment', text: 'Repair, replace, or hire a temporary unit.' },
  { title: 'Fast Delivery', text: 'Priority dispatch of stocked equipment UAE-wide.' },
  { title: 'Emergency Install', text: 'Same-day install of critical replacement units.' },
  { title: 'Spare Parts', text: 'Genuine parts pulled from our warehouse stock.' },
];

export default function UrgentRequestPage() {
  return (
    <main>
      <PageHero
        eyebrow="Urgent · SLA-Backed Response"
        title={
          <>
            Kitchen down? <span style={{ color: 'var(--accent)' }}>We move fast.</span>
          </>
        }
        intro="Same-day quotes, 48-hour delivery on stocked items, and priority engineering call-outs across the UAE."
        photo="welding"
        stats={SLA.map((s) => ({ value: s.value, label: s.label }))}
      >
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a href="https://wa.me/97142882777" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ backgroundColor: 'var(--accent)', borderColor: 'var(--accent)' }}>
            WhatsApp Now
          </a>
          <a href="tel:+97142882777" className="btn-secondary-white">
            Call Now
          </a>
        </div>
      </PageHero>

      {/* ── WHAT WE HANDLE ───────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, padding: 'clamp(3.5rem, 7vw, 6rem) var(--gutter)' }}>
          <ScrollReveal>
            <div style={{ maxWidth: '640px', marginBottom: '2.5rem' }}>
              <span className="eyebrow">What we handle</span>
              <h2 className="h2" style={{ marginTop: '1.25rem' }}>
                The most common urgent situations we solve
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
            {PROBLEMS.map((problem, i) => (
              <ScrollReveal key={problem.title} delay={i * 90}>
                <div style={{ backgroundColor: 'var(--surface)', padding: 'clamp(1.5rem, 3vw, 2rem)', height: '100%' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      color: i % 2 === 0 ? 'var(--accent)' : 'var(--primary)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', margin: '0.6rem 0 0.5rem' }}>
                    {problem.title}
                  </h3>
                  <p style={{ color: 'var(--ink-soft)', fontSize: '0.92rem', lineHeight: 1.6 }}>{problem.text}</p>
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
                Urgent request
              </span>
              <h2 className="h2" style={{ margin: '1.25rem 0 0.75rem' }}>
                Log an urgent request
              </h2>
              <p className="p-large">Fastest response via phone + WhatsApp. Photos help a lot.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <UrgentForm />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
