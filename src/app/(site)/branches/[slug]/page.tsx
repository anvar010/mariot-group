import { notFound } from 'next/navigation';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { Bilingual } from '@/components/Bilingual';
import { db } from '@/lib/db';

const container: React.CSSProperties = {
  maxWidth: '1320px',
  margin: '0 auto',
  padding: '0 var(--gutter)',
};

const ROLE_HIGHLIGHTS: Record<string, string[]> = {
  'Head Office & Showroom': [
    'Full equipment showroom with live product demonstrations',
    'Head office — sales, support and project teams on site',
    'Free consultation with a kitchen specialist',
    'Central hub coordinating delivery across the UAE',
  ],
  'Showroom & Service': [
    'Equipment showroom for the Al Ain region',
    'After-sales service and maintenance support',
    'Genuine spare parts held on site',
    'Local point of contact for Al Ain and the Eastern Region',
  ],
  'Showroom & Sales': [
    'Equipment showroom and sales desk',
    'Product demonstrations and project consultation',
    'Local delivery coordination',
    'Direct contact for quotations in this emirate',
  ],
  'Fabrication Factory': [
    'Our in-house stainless steel fabrication facility',
    'Custom units built to your exact kitchen layout',
    'Grade 304 & 430 stainless, precision-welded on site',
    'Production hub supplying every Mariot branch',
  ],
};

const iconAddress = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const iconPhone = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const iconMail = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

/* Renders on request rather than at build time, so a build never fails
   because the database wasn't reachable from the build environment, and
   new branches added from the admin dashboard show up without a rebuild. */
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const branch = await db.branch.findUnique({ where: { slug } });
    if (!branch) return {};
    return {
      title: `${branch.name} — Mariot Kitchen Equipment`,
      description: `${branch.name} — ${branch.location}. ${branch.role ?? ''}.`,
    };
  } catch {
    // An unreachable database shouldn't fail the whole build — the page
    // component below still runs and surfaces a real error at request time.
    return {};
  }
}

export default async function BranchDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const branch = await db.branch.findUnique({ where: { slug } });

  if (!branch) {
    notFound();
  }

  const others = await db.branch.findMany({ where: { slug: { not: branch.slug } }, orderBy: { order: 'asc' } });
  const telHref = `tel:${branch.phone.replace(/\s/g, '')}`;
  const waHref = `https://wa.me/${branch.whatsapp.replace(/[^\d]/g, '')}`;

  return (
    <main>
      <section style={{ backgroundColor: 'var(--ink)' }}>
        <div style={{ ...container, padding: 'clamp(8rem, 15vh, 11rem) var(--gutter) clamp(3rem, 6vw, 4.5rem)' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
              <span className="eyebrow on-dark"><Bilingual en={branch.role} ar={branch.roleAr} /></span>
              <span className="eyebrow on-dark"><Bilingual en={branch.emirate} ar={branch.emirateAr} /></span>
            </div>
            <h1 className="h1" style={{ margin: '0 0 0.75rem', color: '#fff' }}>
              <Bilingual en={branch.name} ar={branch.nameAr} />
            </h1>
            <p className="p-large" style={{ marginBottom: '2rem', color: 'rgba(255,255,255,0.72)' }}><Bilingual en={branch.location} ar={branch.locationAr} /></p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href={telHref} className="btn-primary">
                {iconPhone}
                Call {branch.phone}
              </a>
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-secondary-white">
                WhatsApp
              </a>
              <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary-white">
                Get Directions ↗
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, padding: 'clamp(2rem, 4vw, 3rem) var(--gutter) clamp(3.5rem, 7vw, 6rem)' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: 'clamp(2rem, 4vw, 3rem)',
              alignItems: 'stretch',
            }}
          >
            <ScrollReveal>
              <div
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--rule)',
                  borderRadius: 'var(--radius)',
                  overflow: 'hidden',
                  aspectRatio: '4 / 3',
                  height: '100%',
                }}
              >
                <iframe
                  title={`Map to ${branch.name}`}
                  src={branch.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--rule)',
                  borderRadius: 'var(--radius)',
                  padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  height: '100%',
                }}
              >
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span
                    style={{
                      flexShrink: 0,
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'rgba(42, 169, 222, 0.1)',
                      color: 'var(--primary-deep)',
                    }}
                  >
                    {iconAddress}
                  </span>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: '0.35rem' }}>
                      Address
                    </span>
                    <p style={{ fontSize: '1.02rem' }}><Bilingual en={branch.location} ar={branch.locationAr} /></p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span
                    style={{
                      flexShrink: 0,
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'rgba(42, 169, 222, 0.1)',
                      color: 'var(--primary-deep)',
                    }}
                  >
                    {iconPhone}
                  </span>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: '0.35rem' }}>
                      Phone
                    </span>
                    <a href={telHref} style={{ fontWeight: 700, fontSize: '1.02rem' }}>
                      {branch.phone}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span
                    style={{
                      flexShrink: 0,
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'rgba(42, 169, 222, 0.1)',
                      color: 'var(--primary-deep)',
                    }}
                  >
                    {iconMail}
                  </span>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: '0.35rem' }}>
                      Email
                    </span>
                    <a href={`mailto:${branch.email}`} className="footer-link" style={{ fontSize: '1.02rem', fontWeight: 500 }}>
                      {branch.email}
                    </a>
                  </div>
                </div>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ justifyContent: 'center', marginTop: 'auto' }}
                >
                  WhatsApp This Branch
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {branch.role && ROLE_HIGHLIGHTS[branch.role] && (
        <section style={{ backgroundColor: 'var(--ink)', color: 'var(--paper)' }}>
          <div style={{ ...container, padding: 'clamp(3.5rem, 7vw, 6rem) var(--gutter)' }}>
            <ScrollReveal>
              <span className="eyebrow on-dark">What this branch offers</span>
            </ScrollReveal>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                gap: '1px',
                backgroundColor: 'var(--rule-light)',
                border: '1px solid var(--rule-light)',
                marginTop: '1.75rem',
              }}
            >
              {ROLE_HIGHLIGHTS[branch.role]!.map((item, i) => (
                <ScrollReveal key={item} delay={i * 90}>
                  <div style={{ backgroundColor: 'var(--ink)', padding: 'clamp(1.5rem, 3vw, 2rem)', height: '100%', display: 'flex', gap: '1rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        color: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
                        flexShrink: 0,
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ backgroundColor: 'var(--paper-deep)', borderTop: '1px solid var(--rule)' }}>
        <div style={{ ...container, padding: 'clamp(2.5rem, 5vw, 4rem) var(--gutter)' }}>
          <ScrollReveal>
            <span className="eyebrow eyebrow-blue">Other branches</span>
          </ScrollReveal>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.25rem' }}>
            {others.map((b) => (
              <Link key={b.slug} href={`/branches/${b.slug}`} className="filter-chip">
                <Bilingual en={b.name} ar={b.nameAr} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, padding: '2rem var(--gutter)' }}>
          <Link href="/branches" className="footer-link" style={{ fontSize: '0.9rem', fontWeight: 700 }}>
            ← Back to all branches
          </Link>
        </div>
      </section>
    </main>
  );
}
