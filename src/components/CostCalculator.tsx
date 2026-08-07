'use client';

import { useState } from 'react';
import Link from 'next/link';

const SECTORS = [
  { label: 'Restaurant', rate: 2400 },
  { label: 'Cafe', rate: 2000 },
  { label: 'Hotel Kitchen', rate: 3200 },
  { label: 'Bakery', rate: 2600 },
  { label: 'Catering / Central Kitchen', rate: 2800 },
  { label: 'Cloud Kitchen', rate: 1800 },
];

const SIZES = [
  { label: 'Under 50 m²', sqm: 40 },
  { label: '50 – 80 m²', sqm: 65 },
  { label: '80 – 150 m²', sqm: 115 },
  { label: '150 – 300 m²', sqm: 225 },
  { label: '300+ m²', sqm: 400 },
];

const LEVELS = [
  { label: 'Essential', desc: 'Reliable value brands', factor: 1 },
  { label: 'Standard', desc: 'Mixed global brands', factor: 1.35 },
  { label: 'Premium', desc: 'Top brands, longer warranty', factor: 1.8 },
];

function formatAed(value: number) {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  return `${Math.round(value / 1000)}K`;
}

export default function CostCalculator() {
  const [sector, setSector] = useState(0);
  const [size, setSize] = useState(2);
  const [level, setLevel] = useState(2);

  const base = SECTORS[sector].rate * SIZES[size].sqm * LEVELS[level].factor;
  const low = base * 0.85;
  const high = base * 1.15;

  const labelStyle: React.CSSProperties = {
    fontSize: '0.72rem',
    fontWeight: 700,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    display: 'block',
    marginBottom: '0.6rem',
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', border: '1px solid var(--rule)', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-1)' }}>
      {/* Controls */}
      <div style={{ padding: 'clamp(1.5rem, 4vw, 3rem)', display: 'flex', flexDirection: 'column', gap: '1.5rem', borderRight: '1px solid var(--rule)', backgroundColor: 'var(--paper)' }}>
        <div>
          <label style={labelStyle} htmlFor="calc-sector">Sector</label>
          <select id="calc-sector" className="form-input" value={sector} onChange={(e) => setSector(Number(e.target.value))}>
            {SECTORS.map((s, i) => (
              <option key={s.label} value={i}>{s.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label style={labelStyle} htmlFor="calc-size">Kitchen Size</label>
          <select id="calc-size" className="form-input" value={size} onChange={(e) => setSize(Number(e.target.value))}>
            {SIZES.map((s, i) => (
              <option key={s.label} value={i}>{s.label}</option>
            ))}
          </select>
        </div>

        <div>
          <span style={labelStyle}>Equipment Level</span>
          <div className="segmented" role="group" aria-label="Equipment level">
            {LEVELS.map((l, i) => (
              <button
                key={l.label}
                type="button"
                onClick={() => setLevel(i)}
                aria-pressed={level === i}
                className={level === i ? 'is-on' : undefined}
              >
                {l.label}
              </button>
            ))}
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--ink-soft)', marginTop: '0.5rem' }}>{LEVELS[level].desc}</p>
        </div>
      </div>

      {/* Output */}
      <div style={{ padding: 'clamp(1.5rem, 4vw, 3rem)', backgroundColor: 'var(--ink)', color: 'var(--paper)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '2rem' }}>
        <div>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.55)', marginBottom: '1.25rem' }}>
            Estimated Budget Range
          </p>
          <div className="h2" style={{ color: 'var(--primary)', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            {formatAed(low)} – {formatAed(high)}
            <span style={{ fontSize: '0.4em', color: 'var(--paper)', marginLeft: '0.5rem' }}>AED</span>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginTop: '1rem' }}>
            For approximately {SIZES[size].sqm} m² · {SECTORS[sector].label} · {LEVELS[level].label} level
          </p>
        </div>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)' }}>
          <li>— Ranges based on real UAE project data</li>
          <li>— Covers equipment, install, and fabrication</li>
          <li>— Zero commitment, for planning only</li>
        </ul>

        <div>
          <Link href="/contact" className="premium-btn blue-btn" style={{ width: '100%', justifyContent: 'space-between' }}>
            Get Exact Quotation
            <span className="btn-circle">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </span>
          </Link>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: '1rem' }}>
            Estimate only. Actual quote depends on brand, layout, MEP, and site conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
