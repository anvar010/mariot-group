import ScrollReveal from '@/components/ScrollReveal';

export default function Branches() {
  const branches = [
    {
      name: 'Dubai Branch',
      location: 'Deira, Dubai, UAE',
      email: 'admin@mariotkitchen.com',
      phone: '+971 4 288 2777'
    },
    {
      name: 'Al Ain Branch',
      location: 'Al Ain Industrial Area, UAE',
      email: 'alain@mariotkitchen.com',
      phone: '+971 3 722 7337'
    },
    {
      name: 'Abu Dhabi Muroor Branch',
      location: 'Muroor Road, Abu Dhabi, UAE',
      email: 'sales2@mariotkitchen.com',
      phone: '+971 2 645 9353'
    },
    {
      name: 'Sharjah Branch',
      location: 'Al Majaz, Sharjah, UAE',
      email: 'sales@mariot-group.com',
      phone: '+971 6 767 7777'
    },
    {
      name: 'Sharjah Industrial Branch',
      location: 'Industrial Area, Sharjah, UAE',
      email: 'factory@mariotkitchen.com',
      phone: '+971 6 767 7776'
    }
  ];

  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'var(--background)' }}>
      {/* Header Section */}
      <section style={{ backgroundColor: 'var(--secondary)', padding: 'clamp(3rem, 6vw, 6rem) 1rem', borderBottom: '1px solid var(--glass-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)' }}>Locations</span>
            </div>
            <h1 className="h1" style={{ marginBottom: '1.5rem', color: 'var(--foreground)' }}>
              Our <span style={{ color: 'var(--primary)' }}>Branches</span>
            </h1>
            <p className="p-large" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Mariot Kitchen Equipment proudly serves customers across the UAE through strategically located branches. Whether you are planning a new restaurant, hotel, bakery, supermarket, café, or commercial kitchen, our experienced team is ready to provide expert guidance, premium equipment, installation services, and reliable after-sales support.
            </p>
            <p className="p-large" style={{ maxWidth: '800px', margin: '1.5rem auto 0 auto', color: 'rgba(0,0,0,0.6)' }}>
              Visit your nearest Mariot showroom to explore our complete range of commercial kitchen equipment from world-renowned brands and discuss your project with our specialists.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Branches Grid */}
      <section style={{ padding: 'clamp(4rem, 8vw, 8rem) 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
            {branches.map((branch, index) => (
              <ScrollReveal key={branch.name} delay={(index % 3) * 100}>
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
                  <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--foreground)' }}>
                    {branch.name}
                  </h2>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(0,0,0,0.6)', marginBottom: '2rem' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    {branch.location}
                  </div>
                  
                  <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(42, 170, 222, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                      </div>
                      <span style={{ fontWeight: 500, color: 'var(--foreground)' }}>{branch.email}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(42, 170, 222, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      </div>
                      <span style={{ fontWeight: 600, color: 'var(--foreground)' }}>{branch.phone}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Visit Section */}
      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 1rem', backgroundColor: 'var(--secondary)', borderTop: '1px solid var(--glass-border)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <h2 className="h2" style={{ marginBottom: '1.5rem' }}>Why Visit a Mariot Branch?</h2>
            <p className="p-large" style={{ color: 'rgba(0,0,0,0.7)', lineHeight: 1.8 }}>
              Our branches provide product demonstrations, project consultation, equipment recommendations, installation planning, and technical support. Whether you are upgrading an existing kitchen or launching a new hospitality project, our experts are available to help you select the ideal commercial kitchen solutions for your business.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
