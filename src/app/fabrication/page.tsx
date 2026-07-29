import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';

export default function Fabrication() {
  const categories = [
    'All', 'Restaurants', 'Cafés', 'Hotels', 'Resorts', 'Villas & Palaces', 
    'Hospitals', 'Bakeries', 'Laundries', 'Catering', 'Supermarkets', 
    'Cloud Kitchens', 'Central Kitchens'
  ];

  // Placeholder fabrication projects based on user's prompt structure
  const projects = [
    { name: 'Custom Stainless Steel Prep Line', category: 'Restaurants' },
    { name: 'Bespoke Barista Counter', category: 'Cafés' },
    { name: 'Heavy-Duty Dishwashing Station', category: 'Hotels' },
    { name: 'Central Production Hood Systems', category: 'Resorts' },
    { name: 'Luxury Palace Kitchen Fit-Out', category: 'Villas & Palaces' },
    { name: 'Diet-Line Conveyor System', category: 'Hospitals' },
  ];

  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'var(--background)', minHeight: '100vh' }}>
      {/* Header Section */}
      <section style={{ backgroundColor: 'var(--secondary)', padding: 'clamp(3rem, 6vw, 6rem) 1rem', borderBottom: '1px solid var(--glass-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)' }}>Fabrication Works</span>
            </div>
            <h1 className="h1" style={{ marginBottom: '1.5rem', color: 'var(--foreground)' }}>
              Custom Stainless Steel <br/>
              <span style={{ color: 'var(--primary)' }}>Fabrication</span>
            </h1>
            <p className="p-large" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Selected turn-key fabrication deliveries across the UAE.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Bar */}
      <section style={{ padding: '2rem', borderBottom: '1px solid var(--glass-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal delay={100}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              {categories.map((cat, index) => (
                <button 
                  key={cat}
                  style={{ 
                    padding: '0.5rem 1.25rem', 
                    backgroundColor: index === 0 ? 'var(--foreground)' : 'transparent', 
                    color: index === 0 ? 'var(--background)' : 'var(--foreground)',
                    border: index === 0 ? '1px solid var(--foreground)' : '1px solid var(--glass-border)',
                    borderRadius: '100px',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  className={index !== 0 ? "hover-lift" : ""}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Fabrication Projects Grid */}
      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))', gap: '2rem' }}>
            {projects.map((project, index) => (
              <ScrollReveal key={project.name} delay={(index % 3) * 100}>
                <div 
                  className="glass-panel hover-lift" 
                  style={{ 
                    backgroundColor: 'var(--secondary)', 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    overflow: 'hidden'
                  }}
                >
                  {/* Fake Image Placeholder */}
                  <div style={{ width: '100%', height: '240px', backgroundColor: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                  </div>
                  
                  <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                      {project.category}
                    </span>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '2rem', color: 'var(--foreground)' }}>
                      {project.name}
                    </h3>
                    
                    <div style={{ marginTop: 'auto' }}>
                      <Link href="#project" style={{ textDecoration: 'none' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem' }}>
                          View project
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
