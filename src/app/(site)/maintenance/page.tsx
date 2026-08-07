import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';
import Figure from '@/components/Figure';
import AnimatedCounter from '@/components/AnimatedCounter';
import Link from 'next/link';

export const metadata = {
  title: 'Maintenance & Service Plans — Mariot Kitchen Equipment',
  description:
    'Preventive maintenance, 24/7 emergency response, genuine spare parts and QR-tagged asset tracking for UAE commercial kitchens.',
};

const container: React.CSSProperties = {
  maxWidth: '1320px',
  margin: '0 auto',
  padding: '0 var(--gutter)',
};

const PLANS = [
  {
    name: 'Essential Care',
    price: 'AED 990',
    badge: '',
    desc: 'Basic preventive service for small operations.',
    features: [
      'For up to 10 units of equipment',
      '2 preventive visits per year',
      'Standard business-hour response',
      '48-hour emergency call-out',
      'Basic quarterly report',
      '10% discount on spare parts',
    ],
  },
  {
    name: 'Professional Plan',
    price: 'AED 2,490',
    badge: 'Most Popular',
    desc: 'Comprehensive care for restaurants and cafes.',
    features: [
      'For up to 30 units of equipment',
      '4 preventive visits per year',
      'Same-day emergency call-out',
      'QR asset tagging & portal access',
      'Monthly performance report',
      '15% discount on spare parts',
      'Direct technician chat',
    ],
  },
  {
    name: 'Premium Fleet',
    price: 'AED 6,900',
    badge: '',
    desc: 'Full-service SLA for hotels and chains.',
    features: [
      'For 30+ units or multi-outlet fleets',
      'Monthly preventive visits',
      '4-hour emergency SLA',
      'Full smart portal + analytics',
      'Dedicated account technician',
      '20% discount on spare parts',
      'Loaner equipment during downtime',
      'Staff training sessions',
    ],
  },
];

const FEATURES = [
  { title: 'Smart Scheduling', desc: 'Book, reschedule and track every service visit online.' },
  { title: 'QR-Tagged Equipment', desc: 'Every unit gets a QR code with full history in one scan.' },
  { title: 'Reports & Analytics', desc: 'Monthly dashboards on uptime, spend and asset performance.' },
  { title: 'Direct Technician Chat', desc: 'Message our engineers directly for advice and updates.' },
  { title: 'Preventive Maintenance', desc: 'Scheduled care prevents failure before it disrupts service.' },
  { title: 'Rapid Response', desc: '24/7 emergency response with SLA-backed turnaround.' },
];

const TESTIMONIALS = [
  {
    quote:
      "Since switching to Mariot's Professional plan, our unplanned downtime dropped by more than half. The client portal makes tracking every service call effortless.",
    name: 'Rania El-Kamal',
    role: 'F&B Director, Blue Fig Restaurant Group',
    statLabel: 'Downtime cut',
    statValue: '-62%',
  },
  {
    quote:
      'The 4-hour emergency SLA has saved us during two service peaks already. Their technicians are certified on brands we did not even know they covered.',
    name: 'Faisal Al Hashimi',
    role: 'Operations Manager, Emerald Hospitality',
    statLabel: 'SLA response',
    statValue: '3h 12m',
  },
  {
    quote:
      'Every asset now has a QR tag with full history. Onboarding a new chef used to take days for equipment training — now it takes a scan.',
    name: 'Yara Nassar',
    role: 'Executive Chef, Marina Beach Resort',
    statLabel: 'Onboarding faster',
    statValue: '5x',
  },
  {
    quote:
      'Predictable monthly maintenance fees replaced random repair bills. We saved almost 30% year-on-year and got better service.',
    name: 'Marwan Hassan',
    role: 'CFO, Levantine Kitchens Group',
    statLabel: 'Annual savings',
    statValue: '-28%',
  },
];

const checkIcon = (color: string) => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0, marginTop: '3px' }}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Maintenance() {
  return (
    <main>
      <PageHero
        eyebrow="Maintenance & Service Plans"
        title={
          <>
            Maintenance that keeps your kitchen{' '}
            <span style={{ color: 'var(--primary)' }}>running</span>
          </>
        }
        intro="In-house technicians, preventive service plans, a genuine spare-parts warehouse, and a smart portal that tracks every service call and every asset in real time."
        photo="technician"
        stats={[
          { value: '75%', label: 'Less Downtime' },
          { value: '4h', label: 'Emergency SLA' },
          { value: '24/7', label: 'Response' },
        ]}
      >
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="#pricing" className="premium-btn blue-btn">
            See Plans &amp; Pricing
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
          <Link href="/contact" className="btn-secondary-white" style={{ padding: '0.85rem 2rem' }}>
            Request Free Site Audit
          </Link>
        </div>
      </PageHero>

      {/* ── IMPACT STATS ─────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper)', borderBottom: '1px solid var(--rule)' }}>
        <div style={{ ...container, paddingTop: 'clamp(3rem, 6vw, 5rem)' }}>
          <ScrollReveal>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                gap: '1px',
                backgroundColor: 'var(--rule)',
                border: '1px solid var(--rule)',
              }}
            >
              {[
                { value: 75, label: 'Reduction in equipment downtime', color: 'var(--accent)' },
                { value: 50, label: 'Enhanced equipment lifespan', color: 'var(--primary)' },
                { value: 30, label: 'Average savings on annual maintenance', color: 'var(--primary-deep)' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{ backgroundColor: 'var(--surface)', padding: 'clamp(1.75rem, 3vw, 2.5rem)' }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)', fontWeight: 700,
                      fontSize: 'clamp(2.75rem, 5vw, 4rem)',
                      lineHeight: 1,
                      color: stat.color,
                    }}
                  >
                    <AnimatedCounter targetValue={stat.value} suffix="%" duration={2000} />
                  </div>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      marginTop: '0.75rem',
                      lineHeight: 1.45,
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PLATFORM ─────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, padding: 'clamp(4rem, 8vw, 7rem) var(--gutter)' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
              gap: 'clamp(2.5rem, 5vw, 4.5rem)',
              alignItems: 'start',
            }}
          >
            <ScrollReveal>
              <div>
                <span className="eyebrow">Platform &amp; process</span>
                <h2 className="h2" style={{ margin: '1.25rem 0 1.5rem' }}>
                  Certified people,
                  <br />
                  smart tracking
                </h2>
                <p className="p-large" style={{ marginBottom: '2rem' }}>
                  A modern maintenance operation blending brand-certified technicians with a portal
                  that tells you exactly what each asset has cost you and when it was last touched.
                </p>
                <Figure
                  photo="laundry"
                  ratio="16 / 10"
                  sizes="(max-width: 800px) 100vw, 45vw"
                  className="figure-zoom"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={140}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
                  gap: '1px',
                  backgroundColor: 'var(--rule)',
                  border: '1px solid var(--rule)',
                }}
              >
                {FEATURES.map((feature, i) => (
                  <div
                    key={feature.title}
                    style={{
                      backgroundColor: 'var(--surface)',
                      padding: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                      minHeight: '160px',
                    }}
                  >
                    <span
                      aria-hidden
                      style={{
                        display: 'block',
                        width: '8px',
                        height: '8px',
                        backgroundColor: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
                        marginBottom: '1rem',
                      }}
                    />
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '1.12rem',
                        letterSpacing: '0.02em',
                        marginBottom: '0.45rem',
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p style={{ fontSize: '0.87rem', color: 'var(--ink-soft)', lineHeight: 1.5 }}>
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────── */}
      <section
        id="pricing"
        style={{ backgroundColor: 'var(--paper-deep)', borderTop: '1px solid var(--rule)' }}
      >
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
                <span className="eyebrow eyebrow-blue">Maintenance packages</span>
                <h2 className="h2" style={{ marginTop: '1.25rem' }}>
                  Choose your
                  <br />
                  coverage
                </h2>
              </div>
              <p className="p-large" style={{ maxWidth: '360px' }}>
                Transparent tiered plans — scale up as your operation grows.
              </p>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '1px',
              backgroundColor: 'var(--rule)',
              border: '1px solid var(--rule)',
            }}
          >
            {PLANS.map((plan, i) => {
              const featured = Boolean(plan.badge);
              return (
                <ScrollReveal key={plan.name} delay={i * 100}>
                  <div
                    style={{
                      backgroundColor: featured ? 'var(--ink)' : 'var(--surface)',
                      color: featured ? 'var(--paper)' : 'var(--ink)',
                      padding: 'clamp(1.85rem, 3.5vw, 2.75rem)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                    }}
                  >
                    {featured && (
                      <span
                        style={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          backgroundColor: 'var(--accent)',
                          color: '#fff',
                          padding: '0.4rem 0.8rem',
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          letterSpacing: '0.16em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {plan.badge}
                      </span>
                    )}

                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: 'clamp(1.35rem, 2.4vw, 1.7rem)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {plan.name}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: featured ? 'rgba(255,255,255,0.6)' : 'var(--ink-soft)',
                        margin: '0.5rem 0 1.75rem',
                        minHeight: '42px',
                      }}
                    >
                      {plan.desc}
                    </p>

                    <div
                      style={{
                        paddingBottom: '1.5rem',
                        marginBottom: '1.5rem',
                        borderBottom: `1px solid ${featured ? 'var(--rule-light)' : 'var(--rule)'}`,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-display)', fontWeight: 700,
                          fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                          lineHeight: 1,
                          color: featured ? 'var(--primary)' : 'var(--ink)',
                        }}
                      >
                        {plan.price}
                      </span>
                      <span
                        style={{
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          color: featured ? 'rgba(255,255,255,0.55)' : 'var(--ink-faint)',
                          marginLeft: '0.4rem',
                        }}
                      >
                        / month
                      </span>
                    </div>

                    <ul
                      style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem',
                        marginBottom: '2rem',
                        flexGrow: 1,
                      }}
                    >
                      {plan.features.map((feat) => (
                        <li
                          key={feat}
                          style={{
                            display: 'flex',
                            gap: '0.7rem',
                            alignItems: 'flex-start',
                            fontSize: '0.9rem',
                            lineHeight: 1.45,
                            color: featured ? 'rgba(255,255,255,0.85)' : 'var(--ink-soft)',
                          }}
                        >
                          {checkIcon(featured ? 'var(--primary)' : 'var(--primary)')}
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className={featured ? 'premium-btn blue-btn' : 'btn-secondary'}
                      style={
                        featured
                          ? { justifyContent: 'space-between' }
                          : { padding: '0.9rem 1.75rem', justifyContent: 'center' }
                      }
                    >
                      Select This Plan
                      {featured && (
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
                      )}
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--ink)', color: 'var(--paper)' }}>
        <div style={{ ...container, padding: 'clamp(4rem, 8vw, 7rem) var(--gutter)' }}>
          <ScrollReveal>
            <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
              <span className="eyebrow on-dark">Real maintenance clients</span>
              <h2 className="h2" style={{ marginTop: '1.25rem', color: 'var(--paper)' }}>
                Trusted by the UAE&rsquo;s busiest kitchens
              </h2>
            </div>
          </ScrollReveal>

          {/* Four testimonials: a 2-up track so the grid always fills exactly,
              with no empty divider-coloured cell left over at wide widths. */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '1px',
              backgroundColor: 'var(--rule-light)',
              border: '1px solid var(--rule-light)',
            }}
          >
            {TESTIMONIALS.map((test, i) => (
              <ScrollReveal key={test.name} delay={i * 90}>
                <figure
                  style={{
                    backgroundColor: 'var(--ink)',
                    padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    margin: 0,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      gap: '1rem',
                    }}
                  >
                    <span
                      aria-hidden
                      style={{
                        fontFamily: 'var(--font-display)', fontWeight: 700,
                        fontSize: '2.5rem',
                        lineHeight: 0.6,
                        color: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
                      }}
                    >
                      &ldquo;
                    </span>
                    <div style={{ textAlign: 'right' }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-display)', fontWeight: 700,
                          fontSize: '1.5rem',
                          color: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
                          lineHeight: 1,
                        }}
                      >
                        {test.statValue}
                      </div>
                      <div
                        style={{
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: 'rgba(255,255,255,0.5)',
                          marginTop: '0.3rem',
                        }}
                      >
                        {test.statLabel}
                      </div>
                    </div>
                  </div>

                  <blockquote
                    style={{
                      fontSize: '1rem',
                      lineHeight: 1.65,
                      color: 'rgba(255,255,255,0.85)',
                      flexGrow: 1,
                      margin: 0,
                    }}
                  >
                    {test.quote}
                  </blockquote>

                  <figcaption
                    style={{ borderTop: '1px solid var(--rule-light)', paddingTop: '1.15rem' }}
                  >
                    <span style={{ display: 'block', fontWeight: 700 }}>{test.name}</span>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.72rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.5)',
                        marginTop: '0.3rem',
                      }}
                    >
                      {test.role}
                    </span>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
