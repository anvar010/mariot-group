import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';

export default function HowWeWork() {
  const steps = [
    { num: '01', title: 'Consultation', desc: 'Discuss the project idea, menu, capacity, budget, and timeline.' },
    { num: '02', title: 'Site Visit', desc: 'Inspect the site — dimensions, utilities, ventilation, delivery access, installation conditions.' },
    { num: '03', title: 'Kitchen Planning', desc: 'Workflow-based planning focused on speed, hygiene, safety and staff movement.' },
    { num: '04', title: 'Equipment Selection', desc: 'Choose the right equipment based on menu, production capacity, project type and budget.' },
    { num: '05', title: 'BOQ Preparation', desc: 'Clear bill of quantities with specifications, sizes and scope.' },
    { num: '06', title: 'Stainless Steel Fabrication', desc: 'In-house manufacturing of custom tables, sinks, counters, shelves, hoods and worktops.' },
    { num: '07', title: 'Supply & Delivery', desc: 'Logistics coordinated to your project timeline.' },
    { num: '08', title: 'Installation', desc: 'On-site installation by experienced technicians.' },
    { num: '09', title: 'Testing & Commissioning', desc: 'Full testing and safe hand-over ready for operation.' },
    { num: '10', title: 'Training', desc: 'Guide your team on operation, cleaning and daily care.' },
    { num: '11', title: 'Maintenance & Support', desc: 'After-sales support, maintenance contracts and spare parts.' },
  ];

  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'var(--background)' }}>
      {/* Header Section */}
      <section style={{ backgroundColor: 'var(--secondary)', padding: 'clamp(3rem, 6vw, 6rem) 1rem', borderBottom: '1px solid var(--glass-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)' }}>Our Methodology</span>
            </div>
            <h1 className="h1" style={{ marginBottom: '1.5rem', color: 'var(--foreground)' }}>
              How We <span style={{ color: 'var(--primary)' }}>Work</span>
            </h1>
            <p className="p-large" style={{ maxWidth: '800px', margin: '0 auto' }}>
              From concept to hand-over: an 11-step proven methodology to deliver kitchens that perform.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ padding: 'clamp(4rem, 8vw, 8rem) 1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {steps.map((step, index) => (
              <ScrollReveal key={step.num} delay={index * 50}>
                <div 
                  className="glass-panel hover-lift" 
                  style={{ 
                    padding: 'clamp(1.5rem, 5vw, 3rem)', 
                    backgroundColor: 'var(--secondary)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '3rem',
                    flexDirection: 'row'
                  }}
                >
                  <div style={{ flexShrink: 0, textAlign: 'center' }}>
                    <div style={{ fontSize: '4rem', fontWeight: 800, color: 'rgba(42, 170, 222, 0.2)', lineHeight: 1 }}>
                      {step.num}
                    </div>
                    <div style={{ marginTop: '-1rem', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--primary)' }}>
                      Step {parseInt(step.num, 10)}
                    </div>
                  </div>
                  
                  <div>
                    <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 600, marginBottom: '1rem', color: 'var(--foreground)' }}>
                      {step.title}
                    </h2>
                    <p style={{ fontSize: '1.125rem', color: 'rgba(0,0,0,0.7)', lineHeight: 1.6 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={200}>
            <div style={{ textAlign: 'center', marginTop: '6rem' }}>
              <Link href="/#quote" className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.125rem' }}>
                Start Your Project
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
