import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';

export default function Sectors() {
  const sectors = [
    { name: 'Restaurants', desc: 'Full show kitchens, prep lines and stainless fabrication.' },
    { name: 'Cafés', desc: 'Espresso platforms, pastry displays and compact prep areas.' },
    { name: 'Hotels', desc: 'Main production, banquet, room service and outlet kitchens.' },
    { name: 'Resorts', desc: 'Multi-outlet kitchens, pool bars and central production.' },
    { name: 'Villas & Palaces', desc: 'Luxury private kitchens for villas, palaces and royal residences.' },
    { name: 'Hospitals', desc: 'HACCP-compliant patient meal production with diet-line separation.' },
    { name: 'Bakeries', desc: 'Deck ovens, dough mixers, proofers and cooling racks.' },
    { name: 'Laundries', desc: 'Washers, tumble dryers, flatwork ironers and folding lines.' },
    { name: 'Catering', desc: 'Central production kitchens with blast chillers and packaging.' },
    { name: 'Supermarkets', desc: 'Refrigerated display cases, walk-in cold rooms, meat prep.' },
    { name: 'Cloud Kitchens', desc: 'Standardized pods, shared cold storage and delivery staging.' },
    { name: 'Central Kitchens', desc: 'High-volume production, cook-chill and distribution logistics.' }
  ];

  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'var(--background)' }}>
      {/* Header Section */}
      <section style={{ backgroundColor: 'var(--secondary)', padding: 'clamp(3rem, 6vw, 6rem) 1rem', borderBottom: '1px solid var(--glass-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)' }}>Sectors We Serve</span>
            </div>
            <h1 className="h1" style={{ marginBottom: '1.5rem', color: 'var(--foreground)' }}>
              Sector Expertise Across <br/>
              <span style={{ color: 'var(--primary)' }}>Every Project Type</span>
            </h1>
            <p className="p-large" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Each sector has its own dedicated page with our past work and tailored solutions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Grid Section */}
      <section style={{ padding: 'clamp(4rem, 8vw, 8rem) 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))', gap: '2rem' }}>
            {sectors.map((sector, index) => (
              <ScrollReveal key={sector.name} delay={(index % 3) * 100}>
                <Link href={`/sectors/${sector.name.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and')}`} style={{ textDecoration: 'none' }}>
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
                      {sector.name}
                    </h2>
                    <p style={{ fontSize: '1.125rem', color: 'rgba(0,0,0,0.7)', lineHeight: 1.6, flexGrow: 1, marginBottom: '2rem' }}>
                      {sector.desc}
                    </p>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem' }}>
                      View sector
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
