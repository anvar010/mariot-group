import ScrollReveal from '@/components/ScrollReveal';

export default function About() {
  return (
    <main style={{ paddingTop: '80px' }}>
      {/* Page Header */}
      <section style={{ backgroundColor: 'var(--secondary)', padding: 'clamp(3rem, 6vw, 6rem) 1rem', borderBottom: '1px solid var(--glass-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <h1 className="h1" style={{ marginBottom: '1.5rem', color: 'var(--foreground)' }}>
              About <span style={{ color: 'var(--primary)' }}>Mariot</span>
            </h1>
            <p className="p-large" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Mariot Kitchen Equipment is a professional supplier of commercial kitchen equipment, refrigeration solutions, stainless steel fabrication, laundry equipment, and project support for every type of commercial food service business.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ padding: 'clamp(4rem, 8vw, 8rem) 1rem', backgroundColor: 'var(--background)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem' }}>
            <ScrollReveal>
              <div className="glass-panel hover-lift" style={{ padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)', height: '100%', backgroundColor: 'var(--secondary)' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(42, 170, 222, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"/></svg>
                </div>
                <h2 className="h2" style={{ marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>Our Vision</h2>
                <p className="p-regular" style={{ fontSize: '1.125rem' }}>
                  To become one of the leading commercial kitchen equipment and project solution providers in the UAE and GCC by delivering reliable products, professional service, and complete equipment solutions for every type of food service business.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="glass-panel hover-lift" style={{ padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)', height: '100%', backgroundColor: 'var(--secondary)' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(42, 170, 222, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <h2 className="h2" style={{ marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>Our Mission</h2>
                <p className="p-regular" style={{ fontSize: '1.125rem' }}>
                  To help our clients build efficient, reliable, and professional kitchens by providing high-quality equipment, fast quotations, trusted brands, and complete project support from planning to supply.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section style={{ padding: 'clamp(4rem, 8vw, 8rem) 1rem', backgroundColor: 'var(--secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 className="h2" style={{ marginBottom: '4rem', textAlign: 'center' }}>What We Do</h2>
          </ScrollReveal>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '2rem' }}>
            {[
              "Supply of commercial kitchen equipment and cooking suites",
              "Commercial refrigeration — walk-in cold rooms, blast chillers, display cases",
              "Custom stainless steel fabrication (Grade 304 and 430)",
              "Laundry equipment for hotels, hospitals and industrial applications",
              "Complete turn-key project design, supply, installation and commissioning",
              "After-sales service, spare parts and maintenance contracts"
            ].map((service, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div style={{ padding: '2rem', border: '1px solid var(--glass-border)', borderRadius: '16px', backgroundColor: 'var(--background)', display: 'flex', alignItems: 'flex-start', gap: '1rem', height: '100%' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span style={{ fontSize: '1.125rem', fontWeight: 500, color: 'var(--foreground)' }}>{service}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths & Sectors */}
      <section style={{ padding: 'clamp(4rem, 8vw, 8rem) 1rem', backgroundColor: 'var(--background)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '6rem' }}>
            
            {/* Our Strengths */}
            <div>
              <ScrollReveal>
                <h2 className="h2" style={{ marginBottom: '3rem' }}>Our Strengths</h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {[
                    "Direct partnerships with top-tier global manufacturers",
                    "Complete in-house engineering and design team",
                    "UAE-based warehouse with immediate stock availability",
                    "Multi-lingual sales and technical support"
                  ].map((strength, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(42, 170, 222, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{index + 1}</span>
                      </div>
                      <span className="p-regular" style={{ fontSize: '1.125rem', fontWeight: 500, color: 'var(--foreground)' }}>{strength}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>

            {/* Target Sectors */}
            <div>
              <ScrollReveal>
                <h2 className="h2" style={{ marginBottom: '3rem' }}>Target Sectors</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  {[
                    'Restaurants', 'Cafés', 'Hotels', 'Resorts', 'Villas & Palaces', 
                    'Hospitals', 'Bakeries', 'Laundries', 'Catering', 'Supermarkets', 
                    'Cloud Kitchens', 'Central Kitchens'
                  ].map((sector, index) => (
                    <span 
                      key={index} 
                      className="hover-lift"
                      style={{ 
                        padding: '0.75rem 1.5rem', 
                        backgroundColor: 'var(--secondary)', 
                        border: '1px solid var(--glass-border)', 
                        borderRadius: '100px', 
                        fontSize: '1rem', 
                        fontWeight: 500,
                        color: 'var(--foreground)'
                      }}
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
