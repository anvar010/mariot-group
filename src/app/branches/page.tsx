import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';
import Figure from '@/components/Figure';

export const metadata = {
  title: 'Our Branches — Mariot Kitchen Equipment',
  description:
    'Mariot showrooms and service centres across Dubai, Abu Dhabi, Al Ain and Sharjah — equipment, consultation, installation and after-sales support.',
};

const container: React.CSSProperties = {
  maxWidth: '1320px',
  margin: '0 auto',
  padding: '0 var(--gutter)',
};

const BRANCHES = [
  {
    name: 'Dubai Branch',
    location: 'Deira, Dubai, UAE',
    email: 'admin@mariotkitchen.com',
    phone: '+971 4 288 2777',
    role: 'Head Office & Showroom',
  },
  {
    name: 'Al Ain Branch',
    location: 'Al Ain Industrial Area, UAE',
    email: 'alain@mariotkitchen.com',
    phone: '+971 3 722 7337',
    role: 'Showroom & Service',
  },
  {
    name: 'Abu Dhabi Muroor Branch',
    location: 'Muroor Road, Abu Dhabi, UAE',
    email: 'sales2@mariotkitchen.com',
    phone: '+971 2 645 9353',
    role: 'Showroom & Sales',
  },
  {
    name: 'Sharjah Branch',
    location: 'Al Majaz, Sharjah, UAE',
    email: 'sales@mariot-group.com',
    phone: '+971 6 767 7777',
    role: 'Showroom & Sales',
  },
  {
    name: 'Sharjah Industrial Branch',
    location: 'Industrial Area, Sharjah, UAE',
    email: 'factory@mariotkitchen.com',
    phone: '+971 6 767 7776',
    role: 'Fabrication Factory',
  },
];

const pinIcon = (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function Branches() {
  return (
    <main>
      <PageHero
        eyebrow="Locations"
        title={
          <>
            Five branches, <span style={{ color: 'var(--primary)' }}>one standard</span>
          </>
        }
        intro="Mariot serves customers across the UAE through strategically located showrooms and a dedicated fabrication factory. Visit your nearest branch to see the range and discuss your project with a specialist."
        photo="cafeCounter"
        stats={[
          { value: '5', label: 'Branches' },
          { value: '7', label: 'Emirates Served' },
          { value: '1', label: 'Own Factory' },
        ]}
      />

      {/* ── BRANCH LIST ──────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, padding: 'clamp(4rem, 8vw, 7rem) var(--gutter)' }}>
          <ScrollReveal>
            <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
              <span className="eyebrow">Where to find us</span>
              <h2 className="h2" style={{ marginTop: '1.25rem' }}>
                Branch directory
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ borderTop: '1px solid var(--rule)' }}>
            {BRANCHES.map((branch, i) => (
              <ScrollReveal key={branch.name} delay={i * 70}>
                <div
                  className="editorial-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 230px), 1fr))',
                    gap: '1.25rem',
                    alignItems: 'center',
                    padding: 'clamp(1.5rem, 3vw, 2rem) 1rem',
                    borderBottom: '1px solid var(--rule)',
                  }}
                >
                  <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'baseline' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.9rem',
                        color: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
                        flexShrink: 0,
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 400,
                          fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {branch.name}
                      </h3>
                      <span
                        style={{
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          letterSpacing: '0.16em',
                          textTransform: 'uppercase',
                          color: 'var(--ink-faint)',
                        }}
                      >
                        {branch.role}
                      </span>
                    </div>
                  </div>

                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'var(--ink-soft)',
                      fontSize: '0.93rem',
                    }}
                  >
                    <span style={{ color: 'var(--primary)', flexShrink: 0 }}>{pinIcon}</span>
                    {branch.location}
                  </span>

                  <a
                    href={`mailto:${branch.email}`}
                    className="footer-link"
                    style={{ fontSize: '0.93rem', fontWeight: 500 }}
                  >
                    {branch.email}
                  </a>

                  <a
                    href={`tel:${branch.phone.replace(/\s/g, '')}`}
                    style={{ fontWeight: 700, fontSize: '1rem' }}
                  >
                    {branch.phone}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY VISIT ────────────────────────────────────── */}
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
              <div>
                <span className="eyebrow eyebrow-blue">Worth the trip</span>
                <h2 className="h2" style={{ margin: '1.25rem 0 1.5rem' }}>
                  Why visit a branch?
                </h2>
                <p className="p-large">
                  Our branches offer product demonstrations, project consultation, equipment
                  recommendations, installation planning and technical support. Whether you are
                  upgrading an existing kitchen or launching a new hospitality project, our
                  specialists will help you choose the right solution.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <Figure
                photo="bakeryDisplay"
                ratio="3 / 2"
                sizes="(max-width: 800px) 100vw, 45vw"
                className="figure-zoom"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
