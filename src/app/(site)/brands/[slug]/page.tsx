import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import { shopUrl, brandLogoSrc } from '@/lib/brands';
import { db } from '@/lib/db';

const container: React.CSSProperties = {
  maxWidth: '1320px',
  margin: '0 auto',
  padding: '0 var(--gutter)',
};

export async function generateStaticParams() {
  const brands = await db.brand.findMany({ select: { slug: true } });
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = await db.brand.findUnique({ where: { slug } });
  if (!brand) return {};
  return {
    title: `${brand.name} — Brands We Supply — Mariot Kitchen Equipment`,
    description: `${brand.name} equipment supplied, installed and supported by Mariot Kitchen Equipment across the UAE and GCC.`,
  };
}

export default async function BrandDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = await db.brand.findUnique({ where: { slug } });

  if (!brand) {
    notFound();
  }

  const categories = (brand.categories as string[] | null) ?? [];
  const allBrands = await db.brand.findMany({ where: { slug: { not: brand.slug } }, orderBy: { order: 'asc' } });
  const related = allBrands
    .filter((b) => {
      const bCats = (b.categories as string[] | null) ?? [];
      return bCats.some((c) => categories.includes(c));
    })
    .slice(0, 6);

  return (
    <main>
      <section style={{ backgroundColor: 'var(--ink)' }}>
        <div style={{ ...container, padding: 'clamp(8rem, 15vh, 11rem) var(--gutter) clamp(3.5rem, 7vw, 5rem)' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1.5rem, 4vw, 2.5rem)', flexWrap: 'wrap' }}>
              <div
                style={{
                  width: '140px',
                  height: '140px',
                  flexShrink: 0,
                  backgroundColor: '#fff',
                  borderRadius: 'var(--radius)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.5rem',
                }}
              >
                <span style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image src={brandLogoSrc(brand.file)} alt={brand.name} fill sizes="140px" style={{ objectFit: 'contain' }} />
                </span>
              </div>

              <div>
                <span className="eyebrow on-dark">Brands We Supply</span>
                <h1 className="h1" style={{ color: '#fff', margin: '1rem 0 0.75rem' }}>
                  {brand.name}
                </h1>
                {categories.length > 0 && (
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {categories.map((cat) => (
                      <span
                        key={cat}
                        style={{
                          padding: '0.4rem 0.9rem',
                          borderRadius: '999px',
                          border: '1px solid rgba(255,255,255,0.3)',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          color: 'rgba(255,255,255,0.85)',
                        }}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, padding: 'clamp(3.5rem, 7vw, 6rem) var(--gutter)' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(2rem, 4vw, 3.5rem)',
              alignItems: 'center',
            }}
          >
            <ScrollReveal>
              <div style={{ maxWidth: '640px' }}>
                <span className="eyebrow eyebrow-blue">Authorised supply</span>
                <h2 className="h2" style={{ margin: '1.25rem 0 1rem' }}>
                  {brand.name} equipment, supported locally
                </h2>
                <p className="p-large">
                  Mariot supplies {brand.name} equipment through official channels, with manufacturer
                  warranty honoured locally, genuine spare parts held in our UAE warehouse, and
                  technicians certified for installation and service.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--rule)',
                  borderRadius: 'var(--radius)',
                  padding: '2rem',
                }}
              >
                <p className="p-large" style={{ marginBottom: '1.25rem' }}>
                  Looking to buy {brand.name} equipment?
                </p>
                <Link
                  href={`/quote?ref=${encodeURIComponent(brand.name)}`}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Request a Quotation
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section style={{ backgroundColor: 'var(--paper-deep)', borderTop: '1px solid var(--rule)' }}>
          <div style={{ ...container, padding: 'clamp(3.5rem, 7vw, 6rem) var(--gutter)' }}>
            <ScrollReveal>
              <span className="eyebrow">Related brands</span>
            </ScrollReveal>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                gap: '1px',
                backgroundColor: 'var(--rule)',
                border: '1px solid var(--rule)',
                marginTop: '1.75rem',
              }}
            >
              {related.map((b) => (
                <a
                  key={b.slug}
                  href={shopUrl(b.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: 'var(--surface)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.5rem 1.25rem',
                  }}
                  title={b.name}
                >
                  <span style={{ position: 'relative', width: '100%', height: '52px' }}>
                    <Image src={brandLogoSrc(b.file)} alt={b.name} fill sizes="150px" style={{ objectFit: 'contain' }} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ backgroundColor: 'var(--paper)', borderTop: '1px solid var(--rule)' }}>
        <div style={{ ...container, padding: '2rem var(--gutter)' }}>
          <Link href="/brands" className="footer-link" style={{ fontSize: '0.9rem', fontWeight: 700 }}>
            ← Back to all brands
          </Link>
        </div>
      </section>
    </main>
  );
}
