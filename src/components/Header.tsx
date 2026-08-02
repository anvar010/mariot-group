'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LangToggle from './LangToggle';

const ALL_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'How We Work', href: '/how-we-work' },
  { name: 'Sectors', href: '/sectors' },
  { name: 'Business Hub', href: '/business-hub' },
  { name: 'Design Your Project', href: '/design-your-project' },
  { name: 'Projects', href: '/projects' },
  { name: 'Fabrication', href: '/fabrication' },
  { name: 'Maintenance', href: '/maintenance' },
  { name: 'Brands', href: '/#brands' },
  { name: 'Branches', href: '/branches' },
  { name: 'Contact', href: '/contact' },
];

const DESKTOP_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Sectors', href: '/sectors' },
  { name: 'Projects', href: '/projects' },
  { name: 'Fabrication', href: '/fabrication' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 101,
          transition: 'box-shadow 0.3s ease',
          backgroundColor: 'var(--glass-bg)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--rule)',
          boxShadow: scrolled ? '0 8px 30px rgba(22,19,14,0.08)' : 'none',
          color: 'var(--ink)',
        }}
      >
        {/* Top utility bar */}
        <div
          className="topbar"
          style={{
            backgroundColor: 'var(--ink)',
            color: 'var(--paper)',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.04em',
            display: scrolled ? 'none' : 'block',
          }}
        >
          <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0.45rem var(--gutter)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <span aria-hidden style={{ color: 'var(--primary)' }}>●</span> Delivery across all UAE emirates
              </span>
              <a href="tel:+97142882777" className="footer-link" style={{ color: 'rgba(255,255,255,0.85)' }}>+971 4-288-2777</a>
              <a href="mailto:admin@mariotkitchen.com" className="footer-link" style={{ color: 'rgba(255,255,255,0.85)' }}>admin@mariotkitchen.com</a>
            </div>
            <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
              <a href="#" className="footer-link" style={{ color: 'rgba(255,255,255,0.85)' }}>Download Catalogue</a>
              <Link href="/branches" className="footer-link" style={{ color: 'rgba(255,255,255,0.85)' }}>Our Branches</Link>
              <a href="https://wa.me/97142882777" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: 'rgba(255,255,255,0.85)' }}>WhatsApp</a>
              <a href="https://mariotstore.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Shop Now →</a>
            </div>
          </div>
        </div>

        {/* Main bar */}
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0.9rem var(--gutter)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <Image
              src="/logo.png"
              alt="Mariot Kitchen Equipment"
              width={150}
              height={42}
              preload
              style={{ objectFit: 'contain', width: 'clamp(104px, 26vw, 150px)', height: 'auto' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <ul style={{ display: 'flex', listStyle: 'none', gap: 'clamp(1.25rem, 2.5vw, 2.25rem)', margin: 0, padding: 0, alignItems: 'center' }}>
              {DESKTOP_LINKS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="footer-link"
                    style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)' }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Language, CTA & Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.5rem, 1.5vw, 1rem)' }}>
            <LangToggle />
            <Link href="/#quote" className="btn-primary quote-btn">
              Get a Quote
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--ink)',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                zIndex: 102,
              }}
              aria-label="Toggle Menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.4s ease' }}>
                <line
                  x1="3" y1="6" x2="21" y2="6"
                  style={{
                    transformOrigin: 'center',
                    transform: mobileMenuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
                    transition: 'all 0.3s ease',
                  }}
                />
                <line
                  x1="3" y1="12" x2="21" y2="12"
                  style={{
                    opacity: mobileMenuOpen ? 0 : 1,
                    transition: 'all 0.3s ease',
                  }}
                />
                <line
                  x1="3" y1="18" x2="21" y2="18"
                  style={{
                    transformOrigin: 'center',
                    transform: mobileMenuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
                    transition: 'all 0.3s ease',
                  }}
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(22,19,14,0.4)',
            zIndex: 99,
            backdropFilter: 'blur(4px)',
          }}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          maxWidth: '380px',
          backgroundColor: 'var(--paper)',
          zIndex: 100,
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: '-10px 0 40px rgba(22,19,14,0.15)',
          borderLeft: '1px solid var(--rule)',
          padding: '9rem 2.5rem 2.5rem',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
        }}
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
          {ALL_LINKS.map((item, i) => (
            <li key={item.name} style={{ borderBottom: '1px solid var(--rule)' }}>
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="footer-link"
                style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', padding: '0.85rem 0', fontFamily: 'var(--font-display)', fontSize: '1.35rem', textTransform: 'uppercase', letterSpacing: '0.03em', color: 'var(--ink)' }}
              >
                <span style={{ fontSize: '0.75rem', color: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)' }}>{String(i + 1).padStart(2, '0')}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 'auto', paddingTop: '3rem' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: '1rem' }}>Contact us directly</p>
          <a href="tel:+97142882777" style={{ display: 'block', fontSize: '1.05rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.35rem' }}>+971 4-288-2777</a>
          <a href="mailto:admin@mariotkitchen.com" style={{ display: 'block', fontSize: '1.05rem', fontWeight: 700, color: 'var(--ink)' }}>admin@mariotkitchen.com</a>
        </div>
      </div>
    </>
  );
}
