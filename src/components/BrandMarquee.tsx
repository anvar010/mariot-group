import Image from 'next/image';
import { shopUrl, brandLogoSrc } from '@/lib/brands';

export type MarqueeBrand = { name: string; slug: string; file: string };

function Row({ brands, reverse }: { brands: MarqueeBrand[]; reverse?: boolean }) {
  const doubled = [...brands, ...brands];
  return (
    <div style={{ overflow: 'hidden', borderTop: '1px solid var(--rule)' }}>
      <div className={`marquee-track${reverse ? ' reverse' : ''}`}>
        {doubled.map((brand, i) => (
          <a
            key={`${brand.file}-${i}`}
            href={shopUrl(brand.slug)}
            target="_blank"
            rel="noopener noreferrer"
            className="brand-logo-tile"
            title={brand.name}
            style={{
              width: '180px',
              height: '104px',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              borderRight: '1px solid var(--rule)',
              backgroundColor: '#ffffff',
            }}
          >
            <span style={{ position: 'relative', display: 'block', width: '100%', height: '100%' }}>
              <Image
                src={brandLogoSrc(brand.file)}
                alt={brand.name}
                fill
                sizes="140px"
                style={{ objectFit: 'contain' }}
              />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function BrandMarquee({ brands }: { brands: MarqueeBrand[] }) {
  const mid = Math.ceil(brands.length / 2);
  return (
    <div style={{ borderBottom: '1px solid var(--rule)' }}>
      <Row brands={brands.slice(0, mid)} />
      <Row brands={brands.slice(mid)} reverse />
    </div>
  );
}
