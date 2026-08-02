import Image from 'next/image';
import { BRANDS } from '@/lib/brands';

function Row({ brands, reverse }: { brands: typeof BRANDS; reverse?: boolean }) {
  const doubled = [...brands, ...brands];
  return (
    <div style={{ overflow: 'hidden', borderTop: '1px solid var(--rule)' }}>
      <div className={`marquee-track${reverse ? ' reverse' : ''}`}>
        {doubled.map((brand, i) => (
          <div
            key={`${brand.file}-${i}`}
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
                src={`/brands/${brand.file}`}
                alt={brand.name}
                fill
                sizes="140px"
                style={{ objectFit: 'contain' }}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BrandMarquee() {
  const mid = Math.ceil(BRANDS.length / 2);
  return (
    <div style={{ borderBottom: '1px solid var(--rule)' }}>
      <Row brands={BRANDS.slice(0, mid)} />
      <Row brands={BRANDS.slice(mid)} reverse />
    </div>
  );
}
