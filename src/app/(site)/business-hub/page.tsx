import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';
import Figure from '@/components/Figure';
import Link from 'next/link';
import type { PhotoKey } from '@/lib/images';

export const metadata = {
  title: 'Business Hub — Mariot Kitchen Equipment',
  description:
    'Trade accounts, free kitchen consultations, restaurant and cafe opening support, and urgent equipment requests for UAE food service businesses.',
};

const container: React.CSSProperties = {
  maxWidth: '1320px',
  margin: '0 auto',
  padding: '0 var(--gutter)',
};

const SERVICES: {
  title: string;
  desc: string;
  cta: string;
  photo: PhotoKey;
  link: string;
}[] = [
  {
    title: 'Business / Trade Account',
    desc: 'Open a trade account for credit terms, priority pricing and ongoing B2B support across every Mariot branch.',
    cta: 'Apply for Account',
    photo: 'supermarket',
    link: '/contact',
  },
  {
    title: 'Kitchen Consultation & Site Visit',
    desc: 'A free consultation with a specialist, followed by an on-site inspection of dimensions, services and access.',
    cta: 'Book Consultation',
    photo: 'chefPlating',
    link: '/consultation',
  },
  {
    title: 'Restaurant & Cafe Opening',
    desc: 'End-to-end launch support for new food service businesses — layout, equipment, fabrication and commissioning.',
    cta: 'Start My Project',
    photo: 'cafe',
    link: '/restaurant-opening',
  },
  {
    title: 'Urgent Equipment Request',
    desc: 'Fast-track supply from UAE stock when a unit fails mid-service and your kitchen cannot wait.',
    cta: 'Send Urgent Request',
    photo: 'chefFlame',
    link: '/urgent-request',
  },
];

export default function BusinessHub() {
  return (
    <main>
      <PageHero
        eyebrow="Mariot Business Hub"
        title={
          <>
            Business solutions for{' '}
            <span style={{ color: 'var(--primary)' }}>commercial kitchens</span>
          </>
        }
        intro="Request business support, project quotations, procurement assistance and expert kitchen equipment guidance — from a team that equips UAE hospitality every day."
        photo="restaurantDark"
        stats={[
          { value: '24h', label: 'Typical Quote Turnaround' },
          { value: '40+', label: 'Global Brands' },
          { value: '7', label: 'Emirates Covered' },
        ]}
      />

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, padding: 'clamp(4rem, 8vw, 7rem) var(--gutter)' }}>
          <ScrollReveal>
            <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
              <span className="eyebrow">How we can help</span>
              <h2 className="h2" style={{ marginTop: '1.25rem' }}>
                Four ways in
              </h2>
            </div>
          </ScrollReveal>

          {/* Four services across on desktop, so the row matches the heading
              rather than wrapping the last card onto a line of its own. */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 255px), 1fr))',
              gap: 'clamp(1rem, 2vw, 1.5rem)',
            }}
          >
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <Link
                  href={service.link}
                  className="hover-lift cat-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--rule)',
                  }}
                >
                  <Figure
                    photo={service.photo}
                    ratio="16 / 10"
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
                    className="figure-zoom"
                    style={{ border: 'none', borderBottom: '1px solid var(--rule)' }}
                  >
                    <span className={`figure-tag${i % 2 === 1 ? ' on-accent' : ' on-primary'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </Figure>

                  <div
                    style={{
                      padding: 'clamp(1.5rem, 3vw, 2rem)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.85rem',
                      flexGrow: 1,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: 'clamp(1.2rem, 2.2vw, 1.45rem)',
                        lineHeight: 1.1,
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.93rem',
                        color: 'var(--ink-soft)',
                        lineHeight: 1.6,
                        flexGrow: 1,
                      }}
                    >
                      {service.desc}
                    </p>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontWeight: 700,
                        fontSize: '0.72rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: i % 2 === 1 ? 'var(--accent)' : 'var(--primary)',
                      }}
                    >
                      {service.cta} <span className="cat-arrow">→</span>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIRECT CONTACT ───────────────────────────────── */}
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
                <span className="eyebrow on-dark">Prefer to talk?</span>
                <h2 className="h2" style={{ marginTop: '1.25rem', color: 'var(--paper)' }}>
                  Speak to a specialist
                </h2>
                <p className="p-large" style={{ color: 'rgba(255,255,255,0.65)', marginTop: '1rem' }}>
                  Our advisors answer during UAE business hours and respond to urgent requests
                  around the clock.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="tel:+97142882777" className="premium-btn blue-btn">
                  +971 4-288-2777
                  <span className="btn-circle">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                </a>
                <Link href="/contact" className="btn-secondary-white" style={{ padding: '0.85rem 2rem' }}>
                  Send a Request
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
