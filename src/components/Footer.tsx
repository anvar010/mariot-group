'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from './LanguageProvider';

const QUICK_LINKS = [
  { key: 'about', href: '/about' },
  { key: 'howWeWork', href: '/how-we-work' },
  { key: 'projects', href: '/projects' },
  { key: 'fabrication', href: '/fabrication' },
  { key: 'maintenance', href: '/maintenance' },
  { key: 'brands', href: '/brands' },
  { key: 'branches', href: '/branches' },
  { key: 'blog', href: '/blog' },
  { key: 'contact', href: '/contact' },
];

const SECTOR_LINKS = [
  'restaurantsCafes',
  'hotelsResorts',
  'bakeries',
  'cateringCentralKitchens',
  'cloudKitchens',
  'villasPalaces',
];

const SOCIALS = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><line x1="17.5" y1="6.5" x2="17.5" y2="6.5" /></svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V9h4v1.5" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/97142882777',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
    ),
  },
];

const footerHeading: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: '1rem',
  letterSpacing: '0.08em',
  color: '#fff',
  marginBottom: '1.5rem',
};

const footerLinkStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.65)',
  fontSize: '0.95rem',
  lineHeight: 1.5,
};

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{ backgroundColor: 'var(--ink)', color: '#fff' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 var(--gutter)' }}>

        {/* Newsletter / CTA strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '2rem', alignItems: 'center', padding: 'clamp(2.5rem, 5vw, 4rem) 0', borderBottom: '1px solid var(--rule-light)' }}>
          <div>
            <h3 className="h2" style={{ color: '#fff', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
              {t('footer.newsletterTitlePre')} <span style={{ color: 'var(--primary)' }}>{t('footer.newsletterTitleHighlight')}</span> {t('footer.newsletterTitlePost')}
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '0.75rem', fontSize: '0.95rem' }}>
              {t('footer.newsletterSub')}
            </p>
          </div>
          <form style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            <input
              type="email"
              required
              placeholder={t('footer.emailPlaceholder')}
              aria-label={t('footer.emailPlaceholder')}
              style={{
                flex: '1 1 240px',
                padding: '1rem 1.25rem',
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid var(--rule-light)',
                borderRadius: '999px',
                color: '#fff',
                fontSize: '0.95rem',
                fontFamily: 'inherit',
                outline: 'none',
              }}
            />
            <button type="submit" className="premium-btn red-btn" style={{ padding: '0.5rem 0.5rem 0.5rem 1.5rem' }}>
              {t('footer.joinUs')}
              <span className="btn-circle">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </span>
            </button>
          </form>
        </div>

        {/* Main columns */}
        <div className="footer-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 'clamp(2.5rem, 4vw, 4rem)', padding: 'clamp(2.25rem, 5vw, 4.5rem) 0' }}>

          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'inline-block', backgroundColor: '#fff', padding: '0.6rem 0.9rem', borderRadius: '999px', marginBottom: '1.5rem' }}>
              <Image
                src="/logo.png"
                alt="Mariot Kitchen Equipment"
                width={1220}
                height={300}
                sizes="130px"
                style={{ objectFit: 'contain', display: 'block', width: '130px', height: 'auto' }}
              />
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.75rem', maxWidth: '340px' }}>
              {t('footer.about')}
            </p>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="footer-social"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={footerHeading}>{t('footer.quickLinks')}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {QUICK_LINKS.map((link) => (
                <li key={link.key}>
                  <Link href={link.href} className="footer-link" style={footerLinkStyle}>{t(`nav.${link.key}`)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h4 style={footerHeading}>{t('footer.sectorsWeServe')}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {SECTOR_LINKS.map((sectorKey) => (
                <li key={sectorKey}>
                  <Link href="/sectors" className="footer-link" style={footerLinkStyle}>{t(`sectorNames.${sectorKey}`)}</Link>
                </li>
              ))}
            </ul>
            <a href="https://mariotstore.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', color: 'var(--primary)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {t('footer.shopOnline')}
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 style={footerHeading}>{t('footer.contactUs')}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {t('footer.address')}
                </span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <a href="tel:+97142882777" className="footer-link" style={footerLinkStyle}>+971 4-288-2777</a>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                <a href="mailto:admin@mariotkitchen.com" className="footer-link" style={footerLinkStyle}>admin@mariotkitchen.com</a>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem' }}>{t('footer.hours')}</span>
              </li>
            </ul>
            <a href="https://wa.me/97142882777" target="_blank" rel="noopener noreferrer" className="btn-secondary-white" style={{ marginTop: '1.5rem', padding: '0.7rem 1.4rem', fontSize: '0.78rem' }}>
              {t('footer.whatsappUs')}
            </a>
          </div>
        </div>
      </div>

      {/* Giant outlined wordmark */}
      <div aria-hidden style={{ overflow: 'hidden', pointerEvents: 'none', userSelect: 'none' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(4rem, 13vw, 12rem)', lineHeight: 0.78, textAlign: 'center', letterSpacing: '0.04em', color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.14)', transform: 'translateY(12%)' }}>
          Mariot Kitchen
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid var(--rule-light)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '1.4rem var(--gutter)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)' }}>
            {t('footer.copyright')}
          </p>
          <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <span aria-hidden>🇦🇪</span> {t('footer.servingSince')}
          </p>
          <div style={{ display: 'flex', gap: '1.75rem' }}>
            <Link href="#" className="footer-link" style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)' }}>{t('footer.privacyPolicy')}</Link>
            <Link href="#" className="footer-link" style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)' }}>{t('footer.termsOfService')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
