import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';

export default function DesignYourProject() {
  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'var(--background)' }}>
      {/* Header Section */}
      <section style={{ backgroundColor: 'var(--secondary)', padding: 'clamp(3rem, 6vw, 6rem) 1rem', borderBottom: '1px solid var(--glass-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)' }}>Commercial Kitchen Planning & Design</span>
            </div>
            <h1 className="h1" style={{ marginBottom: '1.5rem', color: 'var(--foreground)' }}>
              From Concept to a <br/>
              <span style={{ color: 'var(--primary)' }}>Fully Operational Kitchen</span>
            </h1>
            <p className="p-large" style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '3rem' }}>
              3D design, precise engineering drawings, and world-class brands — our team is with you from the first sketch to the first plate.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="#consultation" className="btn-primary" style={{ padding: '1rem 2.5rem' }}>
                Start Your Consultation
              </Link>
              <Link href="#contact" className="btn-secondary" style={{ padding: '1rem 2.5rem' }}>
                Talk to an Expert
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: 'clamp(2rem, 4vw, 4rem) 1rem', backgroundColor: 'var(--background)', borderBottom: '1px solid var(--glass-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem' }}>
            {[
              { icon: '✓', title: 'Free first consultation' },
              { icon: '3D', title: '3D Design' },
              { icon: '⚙', title: 'Install & Warranty' },
              { icon: '500+', title: 'Delivered Projects' },
              { icon: '20+', title: 'Years of Experience' },
              { icon: '40+', title: 'Global Brands' }
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', minWidth: '150px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>
                    {stat.icon}
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--foreground)' }}>
                    {stat.title}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Paper to Reality Section */}
      <section style={{ padding: 'clamp(4rem, 8vw, 8rem) 1rem', backgroundColor: 'var(--secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)', display: 'block', marginBottom: '1rem' }}>From paper to reality</span>
              <h2 className="h2" style={{ marginBottom: '1.5rem' }}>We plan, design, execute</h2>
              <p className="p-large" style={{ maxWidth: '600px', margin: '0 auto' }}>
                Precise engineering drawings, realistic 3D models, then a complete kitchen delivered.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
            {[
              { num: '01', title: 'Engineering Blueprint', desc: 'Compliant drawings and detailed equipment schedules.' },
              { num: '02', title: '3D Design', desc: 'Walk through your kitchen before a single piece is installed.' },
              { num: '03', title: 'Complete Execution', desc: 'Supply, install and commission — ready for service.' }
            ].map((step, index) => (
              <ScrollReveal key={step.num} delay={index * 100}>
                <div className="glass-panel" style={{ padding: 'clamp(1.5rem, 5vw, 3rem)', backgroundColor: 'var(--background)', height: '100%', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '-1rem', right: '-1rem', fontSize: '8rem', fontWeight: 900, color: 'rgba(42, 170, 222, 0.05)', lineHeight: 1, zIndex: 0 }}>
                    {step.num}
                  </div>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, marginBottom: '1rem', color: 'var(--foreground)' }}>{step.title}</h3>
                    <p style={{ fontSize: '1.125rem', color: 'rgba(0,0,0,0.7)', lineHeight: 1.6 }}>{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive 3D Preview Placeholder */}
      <section style={{ padding: 'clamp(4rem, 8vw, 8rem) 1rem', backgroundColor: '#111', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)', display: 'block', marginBottom: '1rem' }}>Interactive 3D Preview</span>
              <h2 className="h2" style={{ marginBottom: '1.5rem', color: 'white' }}>Explore a real kitchen — live 3D model</h2>
              <p className="p-large" style={{ maxWidth: '800px', margin: '0 auto', color: 'rgba(255,255,255,0.7)' }}>
                Free rotation around the layout, or walk through the equipment. An immersive engineering experience built on a real model.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            {/* 3D Embed Container */}
            <div style={{ width: '100%', height: '600px', backgroundColor: '#000', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              
              {/* Fake 3D UI Overlay */}
              <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                <span style={{ padding: '0.5rem 1rem', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, color: 'white' }}>GLB · Commercial Kitchen</span>
                <span style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--primary)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '8px', height: '8px', backgroundColor: 'white', borderRadius: '50%', display: 'inline-block' }}></span> LIVE
                </span>
              </div>

              <div style={{ textAlign: 'center', zIndex: 2 }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem', margin: '0 auto' }}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, marginBottom: '0.5rem', color: 'white' }}>Commercial kitchen preview</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', fontSize: '0.875rem' }}>Nothing loads until you launch. Drag to rotate · Scroll to zoom.</p>
                <button className="btn-primary" style={{ padding: '1rem 2rem' }}>
                  Launch 3D Experience
                </button>
              </div>
              
              <div style={{ position: 'absolute', bottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                <button style={{ padding: '0.75rem 1.5rem', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '100px', color: 'white', fontSize: '0.875rem', cursor: 'pointer' }}>Overview Mode</button>
                <button style={{ padding: '0.75rem 1.5rem', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '100px', color: 'white', fontSize: '0.875rem', cursor: 'pointer' }}>Walkthrough Mode</button>
              </div>
            </div>
            <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
              Admin can change the 3D model URL from the dashboard → Settings.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Five Steps Section */}
      <section style={{ padding: 'clamp(4rem, 8vw, 8rem) 1rem', backgroundColor: 'var(--background)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)', display: 'block', marginBottom: '1rem' }}>How we work</span>
              <h2 className="h2">Five steps to your ideal kitchen</h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { num: '1', title: 'Discovery & Consultation', desc: 'We study your concept, menu, space and production capacity to define the optimal workflow.' },
              { num: '2', title: '3D Design', desc: '2D and 3D layouts engineered for hygiene, workflow and code compliance.' },
              { num: '3', title: 'Equipment Selection', desc: 'Curated choice from 40+ trusted global brands to fit your budget.' },
              { num: '4', title: 'Supply & Installation', desc: 'Logistics, staging, MEP coordination and professional on-site installation.' },
              { num: '5', title: 'Commissioning & Support', desc: 'Testing, staff handover, warranties, ongoing maintenance and spare parts.' }
            ].map((step, index) => (
              <ScrollReveal key={step.num} delay={index * 50}>
                <div style={{ padding: '2rem', backgroundColor: 'var(--secondary)', borderRadius: '16px', display: 'flex', gap: '2rem', alignItems: 'center' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, flexShrink: 0 }}>
                    {step.num}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--foreground)' }}>{step.title}</h3>
                    <p style={{ color: 'rgba(0,0,0,0.7)', lineHeight: 1.5 }}>{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sectoral Expertise */}
      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 1rem', backgroundColor: 'var(--secondary)', borderTop: '1px solid var(--glass-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)', display: 'block', marginBottom: '1rem' }}>Sectoral Expertise</span>
            <h2 className="h2" style={{ marginBottom: '1.5rem' }}>Projects we plan and equip</h2>
            <p className="p-large" style={{ maxWidth: '600px', margin: '0 auto', marginBottom: '3rem' }}>
              Specialized experience across every hospitality and food service segment.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              {[
                'Restaurants', 'Cafés', 'Hotels', 'Resorts', 'Villas & Palaces', 
                'Hospitals', 'Bakeries', 'Laundries', 'Catering', 'Supermarkets', 
                'Cloud Kitchens', 'Central Kitchens'
              ].map((sector, index) => (
                <span 
                  key={index} 
                  style={{ 
                    padding: '0.75rem 1.5rem', 
                    backgroundColor: 'var(--background)', 
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
      </section>
    </main>
  );
}
