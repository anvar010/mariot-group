import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import { PHOTOS, photoSrc, type PhotoKey } from '@/lib/images';

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  photo: PhotoKey;
  /** Right-hand stat rail, e.g. [{ value: '20+', label: 'Years' }]. */
  stats?: { value: string; label: string }[];
  children?: React.ReactNode;
};

/**
 * Shared masthead for every interior page. Interior pages used to each invent
 * their own centred header; routing them all through here is what makes the
 * site read as one thing.
 */
export default function PageHero({
  eyebrow,
  title,
  intro,
  photo,
  stats,
  children,
}: PageHeroProps) {
  const source = PHOTOS[photo];

  return (
    <section className="page-hero">
      <div className="page-hero-media" style={{ backgroundColor: source.tone }}>
        <Image
          src={photoSrc(source)}
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          priority
          placeholder="blur"
          blurDataURL={source.blurDataURL}
        />
      </div>
      <div aria-hidden className="page-hero-veil" />

      <div
        className="page-hero-inner"
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding:
            'clamp(7rem, 15vh, 10rem) var(--gutter) clamp(3.5rem, 7vw, 5.5rem)',
        }}
      >
        <ScrollReveal>
          <span className="eyebrow on-dark">{eyebrow}</span>
          <h1 className="h1" style={{ margin: '1.5rem 0 0', color: '#fff', maxWidth: '18ch' }}>
            {title}
          </h1>
          {intro && (
            <p
              className="p-large"
              style={{ color: 'rgba(255,255,255,0.72)', maxWidth: '58ch', marginTop: '1.5rem' }}
            >
              {intro}
            </p>
          )}
          {children && <div style={{ marginTop: '2.25rem' }}>{children}</div>}
        </ScrollReveal>

        {stats && stats.length > 0 && (
          <ScrollReveal delay={150}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'clamp(1.75rem, 5vw, 4rem)',
                marginTop: 'clamp(2.5rem, 5vw, 4rem)',
                paddingTop: '1.75rem',
                borderTop: '1px solid var(--rule-light)',
              }}
            >
              {stats.map((stat, i) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)', fontWeight: 700,
                      fontSize: 'clamp(1.9rem, 4vw, 2.9rem)',
                      lineHeight: 1,
                      color: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
                    }}
                  >
                    {stat.value}
                  </div>
                  <p
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.6)',
                      marginTop: '0.5rem',
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
