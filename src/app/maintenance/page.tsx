import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';

export default function Maintenance() {
  const plans = [
    {
      name: 'Essential Care',
      price: 'AED 990',
      badge: '',
      desc: 'Basic preventive service for small operations.',
      features: [
        'For up to 10 units of equipment',
        '2 preventive visits per year',
        'Standard business-hour response',
        '48-hour emergency call-out',
        'Basic quarterly report',
        '10% discount on spare parts'
      ]
    },
    {
      name: 'Professional Plan',
      price: 'AED 2,490',
      badge: 'Most Popular',
      desc: 'Comprehensive care for restaurants and cafés.',
      features: [
        'For up to 30 units of equipment',
        '4 preventive visits per year',
        'Same-day emergency call-out',
        'QR asset tagging & portal access',
        'Monthly performance report',
        '15% discount on spare parts',
        'Direct technician chat'
      ]
    },
    {
      name: 'Premium Fleet',
      price: 'AED 6,900',
      badge: '',
      desc: 'Full-service SLA for hotels & chains.',
      features: [
        'For 30+ units or multi-outlet fleets',
        'Monthly preventive visits',
        '4-hour emergency SLA',
        'Full smart portal + analytics',
        'Dedicated account technician',
        '20% discount on spare parts',
        'Loaner equipment during downtime',
        'Staff training sessions'
      ]
    }
  ];

  const features = [
    { title: 'Smart Scheduling', desc: 'Book, reschedule and track every service visit online.' },
    { title: 'QR-Tagged Equipment', desc: 'Every unit gets a QR code with full history in one scan.' },
    { title: 'Reports & Analytics', desc: 'Monthly dashboards on uptime, spend, and asset performance.' },
    { title: 'Direct Technician Chat', desc: 'Chat with our engineers directly for advice and updates.' },
    { title: 'Preventive Maintenance', desc: 'Scheduled care prevents failure before it disrupts your kitchen.' },
    { title: 'Rapid Response', desc: '24/7 emergency response with SLA-backed turnaround.' }
  ];

  const testimonials = [
    {
      quote: "Since switching to Mariot's Professional plan, our unplanned downtime dropped by more than half. The client portal makes tracking every service call effortless.",
      name: "Rania El-Kamal",
      role: "F&B Director, Blue Fig Restaurant Group",
      statLabel: "Downtime cut",
      statValue: "-62%"
    },
    {
      quote: "The 4-hour emergency SLA has saved us during two service peaks already. Their technicians are on brand-certified equipment we didn't even know they covered.",
      name: "Faisal Al Hashimi",
      role: "Operations Manager, Emerald Hospitality",
      statLabel: "SLA response",
      statValue: "3h 12m"
    },
    {
      quote: "Every asset now has a QR tag with full history. Onboarding a new chef used to take days for equipment training — now it takes a scan.",
      name: "Yara Nassar",
      role: "Executive Chef, Marina Beach Resort",
      statLabel: "Onboarding faster",
      statValue: "5x"
    },
    {
      quote: "Predictable monthly maintenance fees replaced random repair bills. We saved almost 30% year-on-year and got better service.",
      name: "Marwan Hassan",
      role: "CFO, Levantine Kitchens Group",
      statLabel: "Annual savings",
      statValue: "-28%"
    }
  ];

  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'var(--background)' }}>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--secondary)', padding: 'clamp(4rem, 8vw, 8rem) 1rem', borderBottom: '1px solid var(--glass-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)' }}>Maintenance & Service Plans</span>
            </div>
            <h1 className="h1" style={{ marginBottom: '1.5rem', color: 'var(--foreground)' }}>
              Professional maintenance that <br/>
              <span style={{ color: 'var(--primary)' }}>keeps your kitchen running</span>
            </h1>
            <p className="p-large" style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '3rem' }}>
              In-house technicians, preventive service plans, genuine spare parts, and a smart portal to track every service call and every asset in real time.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="#pricing" className="btn-primary" style={{ padding: '1rem 2.5rem' }}>
                See Plans & Pricing
              </Link>
              <Link href="#contact" className="btn-secondary" style={{ padding: '1rem 2.5rem' }}>
                Request Free Site Audit
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: 'clamp(2rem, 4vw, 4rem) 1rem', backgroundColor: 'var(--background)', borderBottom: '1px solid var(--glass-border)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '2rem' }}>
            {[
              { value: '75%', label: 'Downtime', desc: 'Reduction in equipment downtime across our client fleet.' },
              { value: '50%', label: 'Lifespan', desc: 'Enhanced equipment lifespan through preventive care.' },
              { value: '30%', label: 'Cost Savings', desc: 'Average savings on annual maintenance vs. break-fix operators.' }
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div style={{ textAlign: 'center', maxWidth: '250px' }}>
                  <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1, marginBottom: '0.5rem' }}>{stat.value}</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.5rem' }}>{stat.label}</div>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(0,0,0,0.6)' }}>{stat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: 'clamp(4rem, 8vw, 8rem) 1rem', backgroundColor: 'var(--secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)', display: 'block', marginBottom: '1rem' }}>Platform & Process</span>
              <h2 className="h2" style={{ marginBottom: '1.5rem' }}>Everything you need to keep every asset performing</h2>
              <p className="p-large" style={{ maxWidth: '700px', margin: '0 auto' }}>
                A modern maintenance operation blending certified technicians with a smart portal.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '2rem' }}>
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 50}>
                <div className="glass-panel hover-lift" style={{ padding: '3rem 2rem', backgroundColor: 'var(--background)', height: '100%' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--foreground)' }}>{feature.title}</h3>
                  <p style={{ color: 'rgba(0,0,0,0.7)', lineHeight: 1.6 }}>{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{ padding: 'clamp(4rem, 8vw, 8rem) 1rem', backgroundColor: 'var(--background)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)', display: 'block', marginBottom: '1rem' }}>Maintenance Packages</span>
              <h2 className="h2" style={{ marginBottom: '1.5rem' }}>Choose the plan that fits your operation</h2>
              <p className="p-large" style={{ maxWidth: '600px', margin: '0 auto' }}>
                Transparent tiered plans — upgrade or scale as your operation grows.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '2rem', alignItems: 'center' }}>
            {plans.map((plan, index) => (
              <ScrollReveal key={plan.name} delay={index * 100}>
                <div className="glass-panel" style={{ 
                  padding: '3rem 2rem', 
                  backgroundColor: plan.badge ? 'var(--foreground)' : 'var(--secondary)',
                  color: plan.badge ? 'white' : 'var(--foreground)',
                  position: 'relative',
                  transform: plan.badge ? 'scale(1.05)' : 'scale(1)',
                  zIndex: plan.badge ? 2 : 1,
                  border: plan.badge ? 'none' : '1px solid var(--glass-border)'
                }}>
                  {plan.badge && (
                    <div style={{ position: 'absolute', top: '-1rem', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'var(--primary)', color: 'white', padding: '0.5rem 1.25rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      {plan.badge}
                    </div>
                  )}
                  
                  <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, marginBottom: '0.5rem' }}>{plan.name}</h3>
                  <p style={{ fontSize: '0.875rem', opacity: 0.8, marginBottom: '2rem', height: '40px' }}>{plan.desc}</p>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <span style={{ fontSize: '3rem', fontWeight: 800, color: plan.badge ? 'white' : 'var(--primary)', lineHeight: 1 }}>{plan.price}</span>
                    <span style={{ fontSize: '1rem', opacity: 0.7 }}> / month</span>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {plan.features.map((feat, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', opacity: 0.9 }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={plan.badge ? "white" : "var(--primary)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <button className={plan.badge ? "btn-primary" : "btn-secondary"} style={{ width: '100%', padding: '1rem', backgroundColor: plan.badge ? 'var(--primary)' : 'transparent', color: plan.badge ? 'white' : 'var(--foreground)', border: plan.badge ? 'none' : '1px solid var(--foreground)' }}>
                    Select This Plan
                  </button>
                  <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                    <Link href="#" style={{ fontSize: '0.75rem', opacity: 0.7, textDecoration: 'underline', color: 'inherit' }}>Download Sample Contract</Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: 'clamp(4rem, 8vw, 8rem) 1rem', backgroundColor: 'var(--secondary)', borderTop: '1px solid var(--glass-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)', display: 'block', marginBottom: '1rem' }}>Real Maintenance Clients</span>
              <h2 className="h2" style={{ marginBottom: '1.5rem' }}>Trusted by the UAE's busiest kitchens</h2>
              <p className="p-large" style={{ maxWidth: '600px', margin: '0 auto' }}>
                F&B leaders trust Mariot to keep their equipment running — here's what they say.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '2rem' }}>
            {testimonials.map((test, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="glass-panel" style={{ padding: 'clamp(1.5rem, 5vw, 3rem)', backgroundColor: 'var(--background)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--primary)" opacity="0.2"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>{test.statValue}</div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', marginTop: '0.25rem' }}>{test.statLabel}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: '1.125rem', color: 'var(--foreground)', fontStyle: 'italic', lineHeight: 1.6, flexGrow: 1, marginBottom: '2rem' }}>
                    "{test.quote}"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--primary)' }}>
                      {test.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--foreground)' }}>{test.name}</div>
                      <div style={{ fontSize: '0.875rem', color: 'rgba(0,0,0,0.6)' }}>{test.role}</div>
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
