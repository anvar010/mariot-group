import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Request Received — Mariot Kitchen Equipment',
  description: 'Your request has been received. A Mariot project specialist will be in touch shortly.',
};

const container: React.CSSProperties = {
  maxWidth: '1320px',
  margin: '0 auto',
  padding: '0 var(--gutter)',
};

const TYPED_SUBTITLES: Record<string, string> = {
  consultation:
    'Our consultation team will confirm your preferred visit slot and prepare a briefing for the meeting.',
  restaurant_opening: 'A launch specialist will contact you to plan your opening timeline and next milestones.',
  urgent: 'An urgent-response engineer has been notified. Expect a call within the SLA you selected.',
};

const STEPS = [
  {
    time: 'Right now',
    title: 'Request Received',
    text: 'Your details are logged in our project pipeline and assigned to a dedicated specialist.',
  },
  {
    time: 'Within 24 hours',
    title: 'Initial Review',
    text: 'We review your requirements, area, and timeline to prepare a preliminary approach.',
  },
  {
    time: 'Days 1–3',
    title: 'Consultation Call',
    text: 'A specialist contacts you via your preferred channel to align on scope and next steps.',
  },
  {
    time: 'Days 3–7',
    title: 'Detailed Quotation',
    text: 'You receive a full professional quote covering equipment, install, and warranty.',
  },
];

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const subtitle =
    (type && TYPED_SUBTITLES[type]) ||
    'One of our project specialists will review your details and reach out shortly with a tailored proposal.';

  return (
    <main>
      <section style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, padding: 'clamp(8rem, 15vh, 11rem) var(--gutter) clamp(3.5rem, 7vw, 5rem)' }}>
          <ScrollReveal>
            <div style={{ maxWidth: '640px', textAlign: 'center', margin: '0 auto' }}>
              <span className="eyebrow" style={{ margin: '0 auto' }}>
                Request received
              </span>
              <h1 className="h1" style={{ margin: '1.5rem 0 1.25rem' }}>
                Thank you — your request is with us
              </h1>
              <p className="p-large">{subtitle}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper-deep)', borderTop: '1px solid var(--rule)' }}>
        <div style={{ ...container, padding: 'clamp(3.5rem, 7vw, 6rem) var(--gutter)' }}>
          <ScrollReveal>
            <div style={{ maxWidth: '640px', marginBottom: '2.5rem' }}>
              <span className="eyebrow eyebrow-blue">What happens next</span>
              <h2 className="h2" style={{ marginTop: '1.25rem' }}>
                Your project journey — from request to reality
              </h2>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '1px',
              backgroundColor: 'var(--rule)',
              border: '1px solid var(--rule)',
            }}
          >
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 90}>
                <div style={{ backgroundColor: 'var(--surface)', padding: 'clamp(1.5rem, 3vw, 2rem)', height: '100%' }}>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--primary)',
                    }}
                  >
                    {step.time}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '1.2rem',
                      margin: '0.6rem 0 0.5rem',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: 'var(--ink-soft)', fontSize: '0.92rem', lineHeight: 1.6 }}>{step.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHILE YOU WAIT ───────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--ink)', color: 'var(--paper)' }}>
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
              <div style={{ maxWidth: '520px' }}>
                <span className="eyebrow on-dark">While you wait</span>
                <h2 className="h2" style={{ margin: '1rem 0 0.75rem', color: 'var(--paper)' }}>
                  Explore our work or chat with our team directly
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Need to share more details? Reply on WhatsApp, attach layouts or BOQs, or simply share photos of
                  your space — our team is ready.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/97142882777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Chat on WhatsApp
                </a>
                <Link href="/projects" className="btn-secondary-white">
                  See Our Projects
                </Link>
                <Link href="/" className="btn-secondary-white">
                  Back to Home
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
