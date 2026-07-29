import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--secondary)', borderTop: '1px solid var(--glass-border)', padding: '6rem 2rem 2rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '6rem' }}>
            
            {/* Brand Column */}
            <div style={{ gridColumn: 'span 2' }}>
              <Link href="/" style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <Image 
                  src="/logo.png" 
                  alt="Mariot Kitchen Equipment" 
                  width={140} 
                  height={40} 
                  style={{ objectFit: 'contain' }}
                />
              </Link>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.5rem' }}>
                Commercial Kitchen Solutions
              </h3>
              <p className="p-regular" style={{ marginBottom: '2rem', maxWidth: '400px', color: 'rgba(0,0,0,0.7)', lineHeight: 1.6 }}>
                Mariot Kitchen Equipment — professional supplier of commercial kitchen equipment, refrigeration, stainless steel fabrication and laundry solutions across the UAE and GCC.
              </p>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--foreground)' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li><Link href="/about" className="p-regular footer-link">About</Link></li>
                <li><Link href="/projects" className="p-regular footer-link">Projects</Link></li>
                <li><Link href="/#brands" className="p-regular footer-link">Brands</Link></li>
                <li><Link href="/branches" className="p-regular footer-link">Branches</Link></li>
                <li><Link href="#" className="p-regular footer-link">Blog</Link></li>
                <li><a href="https://mariotstore.com" target="_blank" rel="noopener noreferrer" className="p-regular footer-link" style={{ color: 'var(--primary)', fontWeight: 600 }}>Shop Now &rarr;</a></li>
                <li><Link href="/contact" className="p-regular footer-link" style={{ color: 'var(--primary)', fontWeight: 600 }}>Get Quote &rarr;</Link></li>
                <li><Link href="/contact" className="p-regular footer-link">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--foreground)' }}>Contact Us</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <li className="p-regular" style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <span style={{ color: 'rgba(0,0,0,0.7)' }}>Near Abu Bakkar Siddique Metro Station, Dubai, UAE</span>
                </li>
                <li className="p-regular" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <a href="tel:+97142882777" style={{ color: 'rgba(0,0,0,0.7)', textDecoration: 'none' }} className="footer-link">+971 4-288-2777</a>
                    <a href="tel:+97142882777" style={{ color: 'rgba(0,0,0,0.7)', textDecoration: 'none' }} className="footer-link">+97142882777</a>
                  </div>
                </li>
                <li className="p-regular" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <a href="mailto:admin@mariotkitchen.com" style={{ color: 'rgba(0,0,0,0.7)', textDecoration: 'none' }} className="footer-link">admin@mariotkitchen.com</a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }}>
            <p style={{ fontSize: '0.875rem', color: 'rgba(0, 0, 0, 0.5)' }}>
              &copy; 2026 Mariot Kitchen Equipment. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <Link href="#" className="footer-link" style={{ fontSize: '0.875rem', color: 'rgba(0, 0, 0, 0.5)' }}>Privacy Policy</Link>
              <Link href="#" className="footer-link" style={{ fontSize: '0.875rem', color: 'rgba(0, 0, 0, 0.5)' }}>Terms of Service</Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
