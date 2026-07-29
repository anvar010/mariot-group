'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

  // When drawer is open, we want the text and icons to be dark if the drawer background is white
  const textColor = (scrolled || mobileMenuOpen) ? 'var(--foreground)' : '#ffffff';
  
  const allLinks = [
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
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 101, // High z-index to stay above the drawer and overlay
          padding: '1rem 2rem',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: scrolled || mobileMenuOpen ? 'var(--glass-bg)' : 'transparent',
          backdropFilter: scrolled || mobileMenuOpen ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled || mobileMenuOpen ? 'blur(12px)' : 'none',
          borderBottom: scrolled || mobileMenuOpen ? '1px solid var(--glass-border)' : '1px solid transparent',
          color: textColor
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image 
              src="/logo.png" 
              alt="Mariot Group Logo" 
              width={140} 
              height={40} 
              style={{ objectFit: 'contain' }} 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <ul style={{ display: 'flex', listStyle: 'none', gap: '2.5rem', margin: 0, padding: 0, alignItems: 'center' }}>
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="footer-link" style={{ fontSize: '0.875rem', fontWeight: 500, color: (scrolled || mobileMenuOpen) ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.9)' }}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA & Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link href="#quote" className={(scrolled || mobileMenuOpen) ? "btn-primary" : "btn-secondary-white"} style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}>
              Get a Quote
            </Link>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: textColor, 
                cursor: 'pointer', 
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                zIndex: 102
              }}
              aria-label="Toggle Menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.4s ease' }}>
                <line 
                  x1="3" y1="6" x2="21" y2="6" 
                  style={{ 
                    transformOrigin: 'center', 
                    transform: mobileMenuOpen ? 'translateY(6px) rotate(45deg)' : 'none', 
                    transition: 'all 0.3s ease' 
                  }} 
                />
                <line 
                  x1="3" y1="12" x2="21" y2="12" 
                  style={{ 
                    opacity: mobileMenuOpen ? 0 : 1, 
                    transition: 'all 0.3s ease' 
                  }} 
                />
                <line 
                  x1="3" y1="18" x2="21" y2="18" 
                  style={{ 
                    transformOrigin: 'center', 
                    transform: mobileMenuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none', 
                    transition: 'all 0.3s ease' 
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
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: 99,
            backdropFilter: 'blur(4px)'
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
          maxWidth: '350px',
          backgroundColor: 'var(--background)',
          zIndex: 100,
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: '-10px 0 40px rgba(0,0,0,0.1)',
          padding: '8rem 2rem 2rem 2rem', // Top padding clears the header
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto'
        }}
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {allLinks.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="footer-link"
                style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--foreground)' }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        
        <div style={{ marginTop: 'auto', paddingTop: '3rem' }}>
          <p style={{ fontSize: '0.875rem', color: 'rgba(0,0,0,0.5)', marginBottom: '1rem' }}>Contact us directly:</p>
          <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.25rem' }}>+971 4 XXX XXXX</p>
          <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--foreground)' }}>info@mariot-group.com</p>
        </div>
      </div>
    </>
  );
}
