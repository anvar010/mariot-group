import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';

export default function BusinessHub() {
  const services = [
    {
      title: 'Business / Trade Account',
      desc: 'Open a trade account and enjoy ongoing B2B support.',
      cta: 'Apply for Account'
    },
    {
      title: 'Kitchen Consultation & Site Visit',
      desc: 'Free consultation with a specialist and on-site inspection.',
      cta: 'Book Consultation'
    },
    {
      title: 'Restaurant & Café Opening',
      desc: 'End-to-end launch support for new food service businesses.',
      cta: 'Start My Project'
    },
    {
      title: 'Urgent Equipment Request',
      desc: "Fast-track supply when your kitchen can't wait.",
      cta: 'Send Urgent Request'
    }
  ];

  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'var(--background)' }}>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--secondary)', padding: 'clamp(4rem, 8vw, 8rem) 1rem', borderBottom: '1px solid var(--glass-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <span style={{ padding: '0.5rem 1.25rem', border: '1px solid var(--glass-border)', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', backgroundColor: 'rgba(255,255,255,0.5)' }}>
                Mariot Business Hub
              </span>
            </div>
            <h1 className="h1" style={{ marginBottom: '1.5rem', color: 'var(--foreground)' }}>
              Business Solutions for <br/>
              <span style={{ color: 'var(--primary)' }}>Commercial Kitchens</span>
            </h1>
            <p className="p-large" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Request business support, project quotations, procurement assistance, and expert kitchen equipment guidance from Mariot.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '2rem' }}>
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div 
                  className="glass-panel hover-lift" 
                  style={{ 
                    padding: '3rem 2.5rem', 
                    backgroundColor: 'var(--secondary)', 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column'
                  }}
                >
                  <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, marginBottom: '1rem', color: 'var(--foreground)' }}>
                    {service.title}
                  </h2>
                  <p style={{ fontSize: '1.125rem', color: 'rgba(0,0,0,0.7)', lineHeight: 1.6, flexGrow: 1, marginBottom: '2.5rem' }}>
                    {service.desc}
                  </p>
                  
                  <Link href="#contact" style={{ textDecoration: 'none' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: 'var(--primary)', fontWeight: 600, fontSize: '1rem', padding: '0.75rem 1.5rem', border: '1px solid var(--primary)', borderRadius: '100px', transition: 'all 0.3s ease' }} className="btn-outline-hover">
                      {service.cta}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                    </div>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Global Style for Outline Button Hover in this component */}
      <style dangerouslySetInnerHTML={{__html: `
        .btn-outline-hover:hover {
          background-color: var(--primary);
          color: white !important;
        }
      `}} />
    </main>
  );
}
