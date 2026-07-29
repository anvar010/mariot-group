import ScrollReveal from '@/components/ScrollReveal';
import HeroVideo from '@/components/HeroVideo';
import AnimatedCounter from '@/components/AnimatedCounter';
import Link from 'next/link';

export default function Home() {
  const brands = [
    'Marriott', 'Hilton', 'Rotana', 'Jumeirah', 'Emaar Hospitality', 'Rixos',
    'Address Hotels', 'Millennium', 'Sheraton', 'Mövenpick', 'Fairmont',
    'Grand Hyatt', 'Waldorf Astoria', 'Ritz-Carlton', 'Kempinski', 'Radisson Blu',
    'Marriott', 'Hilton', 'Rotana', 'Jumeirah', 'Emaar Hospitality', 'Rixos'
  ];

  const categories = [
    'Restaurants', 'Cafés', 'Hotels', 'Resorts', 'Villas & Palaces', 'Hospitals',
    'Bakeries', 'Laundries', 'Catering', 'Supermarkets', 'Cloud Kitchens', 'Central Kitchens'
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section hero-text-white" style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <HeroVideo />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0.1) 100%)', zIndex: 1 }}></div>
        <div style={{ position: 'relative', zIndex: 2, padding: '0 2rem', width: '100%', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <ScrollReveal>
            <h1 className="h1" style={{ marginBottom: '1.5rem', textAlign: 'left', lineHeight: 1.05 }}>
              The Foundation of <br />
              <span style={{ color: 'var(--primary)', fontStyle: 'italic', fontWeight: 400 }}>Culinary Excellence</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="p-large" style={{ marginBottom: '3rem', maxWidth: '500px', textAlign: 'left', color: 'rgba(255,255,255,0.85)' }}>
              Precision-engineered kitchen equipment designed for visionary professionals who demand uncompromising quality and performance.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn-primary" style={{ padding: '1rem 2.5rem' }}>Explore Solutions</button>
              <button className="btn-secondary-white" style={{ padding: '1rem 2.5rem' }}>View Projects</button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trusted Brands */}
      <section style={{ padding: '3rem 0 6rem', borderBottom: '1px solid var(--glass-border)', backgroundColor: 'var(--background)', overflow: 'hidden' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)' }}>Trusted by Leading UAE Hospitality Brands</span>
        </div>
        <div style={{ display: 'flex', width: '200%', animation: 'scroll 40s linear infinite' }}>
          <div style={{ display: 'flex', justifyContent: 'space-around', minWidth: '100%', padding: '0 2rem' }}>
            {brands.map((brand, i) => <span key={i} style={{ fontSize: '1.25rem', fontWeight: 600, color: 'rgba(0,0,0,0.7)', whiteSpace: 'nowrap', margin: '0 2rem' }}>{brand}</span>)}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', minWidth: '100%', padding: '0 2rem' }}>
            {brands.map((brand, i) => <span key={i + 'dup'} style={{ fontSize: '1.25rem', fontWeight: 600, color: 'rgba(0,0,0,0.7)', whiteSpace: 'nowrap', margin: '0 2rem' }}>{brand}</span>)}
          </div>
        </div>
      </section>

      {/* Intro Stats (Floating) */}
      <section style={{ padding: '0 1rem', position: 'relative', zIndex: 10, marginTop: '-4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', backgroundColor: 'var(--foreground)', color: 'var(--background)', borderRadius: '24px', padding: 'clamp(2rem, 5vw, 4rem)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '2rem', textAlign: 'center' }}>
              <div><h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--primary)' }}><AnimatedCounter targetValue={20} suffix="+" /></h2><p style={{ fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>Years of Experience</p></div>
              <div><h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--primary)' }}><AnimatedCounter targetValue={500} suffix="+" duration={2500} /></h2><p style={{ fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>Delivered Projects</p></div>
              <div><h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--primary)' }}><AnimatedCounter targetValue={40} suffix="+" /></h2><p style={{ fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>Global Brands</p></div>
              <div><h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--primary)' }}><AnimatedCounter targetValue={7} /></h2><p style={{ fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>Emirates Served</p></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro Text */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1rem', backgroundColor: 'var(--secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <h2 className="h2" style={{ marginBottom: '1.5rem' }}>Turnkey commercial kitchen solutions</h2>
              <p className="p-large">
                For over two decades, Mariot Kitchen Equipment has helped restaurants, hotels, hospitals, catering companies and industrial food businesses across the UAE build kitchens that perform. From single-item supply to complete turn-key projects — we deliver.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Business Categories */}
      <section style={{ padding: 'clamp(4rem, 8vw, 8rem) 1rem', backgroundColor: 'var(--background)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)', display: 'block', marginBottom: '1rem' }}>Sectors We Serve</span>
              <h2 className="h2" style={{ marginBottom: '1rem' }}>Main Business Categories</h2>
              <p className="p-large" style={{ margin: '0 auto' }}>Complete equipment solutions for every food service segment.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 160px), 1fr))', gap: '1rem' }}>
              {categories.map((cat, i) => (
                <Link href="/sectors" key={i} style={{ textDecoration: 'none' }}>
                  <div className="glass-panel hover-lift" style={{
                    padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2vw, 2rem)',
                    backgroundColor: 'var(--secondary)',
                    border: '1px solid var(--glass-border)',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '160px'
                  }}>
                    {/* Subtle numbering watermark */}
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'rgba(42, 170, 222, 0.2)', lineHeight: 1, transition: 'color 0.3s ease' }} className="cat-watermark">
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(42, 170, 222, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--primary)', borderRadius: '50%' }}></div>
                      </div>
                    </div>

                    <div>
                      <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.5rem', lineHeight: 1.2 }}>{cat}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 600 }}>
                        Explore <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MARIOT BUSINESS HUB */}
      <section style={{ padding: 'clamp(4rem, 8vw, 8rem) 1rem', backgroundColor: 'var(--foreground)', color: 'var(--background)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)', display: 'block', marginBottom: '1rem' }}>MARIOT BUSINESS HUB</span>
              <h2 className="h2" style={{ color: 'var(--background)' }}>Business solutions for restaurants, cafés, hotels, and commercial kitchens</h2>
              <p className="p-large" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '1rem auto 0' }}>Request business support, project quotations, procurement assistance, and expert kitchen equipment guidance from Mariot.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '2rem' }}>
              {[
                { title: 'Business / Trade Account', desc: 'Open a trade account and enjoy ongoing B2B support.', cta: 'Apply for Account' },
                { title: 'Kitchen Consultation & Site Visit', desc: 'Free consultation with a specialist and on-site inspection.', cta: 'Book Consultation' },
                { title: 'Restaurant & Café Opening', desc: 'End-to-end launch support for new food service businesses.', cta: 'Start My Project' },
                { title: 'Urgent Equipment Request', desc: "Fast-track supply when your kitchen can't wait.", cta: 'Send Urgent Request' }
              ].map((service, i) => (
                <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--background)' }}>{service.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', minHeight: '50px' }}>{service.desc}</p>
                  <a href="#" style={{ color: 'var(--primary)', fontWeight: 600 }}>{service.cta} →</a>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Mariot */}
      <section style={{ padding: 'clamp(4rem, 8vw, 8rem) 1rem', backgroundColor: 'var(--secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 5rem)' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)' }}>WHY MARIOT</span>
              <h2 className="h2" style={{ marginTop: '1rem', marginBottom: '1rem' }}>Your Trusted Kitchen Partner</h2>
              <p className="p-large" style={{ color: 'rgba(0,0,0,0.6)', maxWidth: '700px', margin: '0 auto' }}>Two decades of expertise in commercial kitchen equipment across the UAE and GCC.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--glass-border)' }}>
              {[
                { num: '1', title: 'Global Brands', desc: 'Equipment from 40+ trusted manufacturers.' },
                { num: '2', title: 'Commercial Expertise', desc: 'Specialists in restaurants, hotels and catering.' },
                { num: '3', title: 'Expert Team', desc: 'Technical advisors to guide every purchase.' },
                { num: '4', title: 'After-Sales Support', desc: 'Maintenance, parts and service you can rely on.' },
                { num: '5', title: 'Delivery & Installation', desc: 'Professional logistics across the UAE.' },
                { num: '6', title: 'Custom Fabrication', desc: 'In-house stainless steel built to your specs.' },
                { num: '7', title: 'Multiple Branches', desc: 'Presence across the UAE — always close to you.' }
              ].map((reason, i) => (
                <div key={i} className="editorial-row" style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                  padding: 'clamp(1.5rem, 3vw, 3rem) 1rem',
                  borderBottom: '1px solid var(--glass-border)',
                  alignItems: 'center',
                  transition: 'background-color 0.3s ease'
                }}>
                  <div style={{ width: '60px', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontWeight: 600, color: 'var(--primary)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{ flex: '1 1 250px' }}>
                    <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 600, color: 'var(--foreground)', margin: 0 }}>{reason.title}</h3>
                  </div>
                  <div style={{ flex: '2 1 350px' }}>
                    <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: '1.125rem', lineHeight: 1.6, margin: 0 }}>{reason.desc}</p>
                  </div>

                  {/* Subtle arrow indicator for the premium feel */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flex: '0 0 40px', opacity: 0.3 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Factory & Export (OLED Ethereal Glass Design) */}
      <section style={{ position: 'relative', padding: 'clamp(4rem, 8vw, 8rem) 1rem', backgroundColor: '#050505', color: 'white', overflow: 'hidden' }}>

        {/* Glowing Orbs Background */}
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(42, 170, 222, 0.15) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }}></div>

        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 10 }}>

          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 className="h2" style={{ marginBottom: '1.5rem', color: 'white' }}>
              Engineered in the UAE.<br />Deployed Worldwide.
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '0 auto' }}>From our custom fabrication facility in Dubai to commercial kitchens across the globe.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: '2rem' }}>

            {/* Fabrication Block - Vantablack Glass */}
            <ScrollReveal>
              <div className="hover-lift" style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '2rem',
                padding: 'clamp(1.5rem, 5vw, 3rem)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: '0 30px 60px -20px rgba(0,0,0,0.5)'
              }}>
                <div style={{ padding: '0.5rem 1rem', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'white', marginBottom: '2rem', display: 'inline-block', alignSelf: 'flex-start' }}>
                  Fabrication Factory
                </div>
                <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '1.5rem', color: 'white' }}>
                  We don't just supply — we manufacture.
                </h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.6)', marginBottom: '3rem' }}>
                  Custom stainless steel units built in our own UAE factory to your exact kitchen layout, Grade 304 & 430, precision-welded to highest hospitality standards.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '4rem' }}>
                  {['Made to Measure', 'In-House Welders', 'Grade 304 & 430', 'Work Tables', 'Sinks & Wash Units'].map((tag, i) => (
                    <span key={i} style={{ padding: '0.5rem 1rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 500, color: 'rgba(255,255,255,0.8)', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{tag}</span>
                  ))}
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <button className="premium-btn" style={{ backgroundColor: 'white', color: 'black' }}>
                    Send Your Drawings
                    <div className="btn-circle" style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Export Block - Vantablack Glass */}
            <ScrollReveal delay={200}>
              <div className="hover-lift" style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '2rem',
                padding: 'clamp(1.5rem, 5vw, 3rem)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: '0 30px 60px -20px rgba(0,0,0,0.5)'
              }}>
                <div style={{ padding: '0.5rem 1rem', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'white', marginBottom: '2rem', display: 'inline-block', alignSelf: 'flex-start' }}>
                  Global Export
                </div>
                <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '1.5rem', color: 'white' }}>
                  Headquartered in the UAE.<br />Delivering globally.
                </h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.6)', marginBottom: '3rem' }}>
                  We supply commercial kitchen equipment across all six GCC countries and export to selected markets in the Middle East, Africa and Asia.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '4rem' }}>
                  <span style={{ padding: '0.75rem 0.5rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 600, textAlign: 'center' }}>🇦🇪 UAE</span>
                  <span style={{ padding: '0.75rem 0.5rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 600, textAlign: 'center' }}>🇸🇦 Saudi Arabia</span>
                  <span style={{ padding: '0.75rem 0.5rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 600, textAlign: 'center' }}>🇰🇼 Kuwait</span>
                  <span style={{ padding: '0.75rem 0.5rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 600, textAlign: 'center' }}>🇶🇦 Qatar</span>
                  <span style={{ padding: '0.75rem 0.5rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 600, textAlign: 'center' }}>🇧🇭 Bahrain</span>
                  <span style={{ padding: '0.75rem 0.5rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 600, textAlign: 'center' }}>🇴🇲 Oman</span>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <button className="premium-btn blue-btn">
                    Request Export Quote
                    <div className="btn-circle">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                  </button>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section style={{ padding: 'clamp(4rem, 8vw, 8rem) 1rem', backgroundColor: 'var(--secondary)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <div style={{ display: 'inline-flex', alignItems: 'center', padding: '0.5rem 1rem', backgroundColor: 'rgba(42, 170, 222, 0.08)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '2.5rem' }}>
              PROFESSIONAL MAINTENANCE
            </div>
            <h2 className="h2" style={{ marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>Keep your kitchen running — reduce downtime by up to 75%.</h2>
            <p style={{ fontSize: '1.125rem', color: 'rgba(0,0,0,0.6)', maxWidth: '700px', margin: '0 auto clamp(2.5rem, 5vw, 5rem) auto', lineHeight: 1.6 }}>A dedicated in-house maintenance team, preventive service plans, spare-parts warehouse, and 24/7 emergency call-outs for hotels, restaurants and multi-outlet operators.</p>

            <div className="hover-lift" style={{
              backgroundColor: 'var(--background)',
              borderRadius: '2.5rem',
              boxShadow: '0 20px 40px -20px rgba(0,0,0,0.05)',
              border: '1px solid rgba(0,0,0,0.03)',
              padding: 'clamp(2rem, 5vw, 4rem)',
              marginBottom: 'clamp(3rem, 5vw, 5rem)'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: 'clamp(2rem, 4vw, 4rem)' }}>
                <div>
                  <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: 'var(--primary)', lineHeight: 1, marginBottom: '0.5rem', letterSpacing: '-0.05em' }}>75%</h3>
                  <p style={{ fontSize: '1rem', fontWeight: 500, color: 'rgba(0,0,0,0.7)' }}>Reduction in downtime</p>
                </div>
                <div>
                  <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: 'var(--primary)', lineHeight: 1, marginBottom: '0.5rem', letterSpacing: '-0.05em' }}>50%</h3>
                  <p style={{ fontSize: '1rem', fontWeight: 500, color: 'rgba(0,0,0,0.7)' }}>Enhanced lifespan</p>
                </div>
                <div>
                  <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: 'var(--primary)', lineHeight: 1, marginBottom: '0.5rem', letterSpacing: '-0.05em' }}>30%</h3>
                  <p style={{ fontSize: '1rem', fontWeight: 500, color: 'rgba(0,0,0,0.7)' }}>Average cost savings</p>
                </div>
              </div>
            </div>
            <button className="premium-btn black-btn">
              Explore Maintenance Plans
              <div className="btn-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Cost Calculator Mockup (Sleek 2-Column Redesign) */}
      <section style={{ padding: 'clamp(4rem, 8vw, 8rem) 1rem', backgroundColor: 'var(--background)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.04)', padding: '0.75rem', borderRadius: '2rem' }}>
              <div style={{ backgroundColor: 'white', borderRadius: 'calc(2rem - 0.75rem)', padding: 'clamp(2rem, 5vw, 4rem)', boxShadow: '0 20px 40px -20px rgba(0,0,0,0.05)' }}>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '4rem', alignItems: 'center' }}>

                  {/* Left Column: Output & Text */}
                  <div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', padding: '0.5rem 1rem', backgroundColor: 'rgba(42, 170, 222, 0.08)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '1.5rem' }}>INSTANT ESTIMATE</div>
                    <h2 className="h2" style={{ marginBottom: '1rem' }}>Estimate your project.</h2>
                    <p style={{ fontSize: '1.125rem', color: 'rgba(0,0,0,0.6)', marginBottom: '3rem' }}>Get a rough AED range for your commercial kitchen in seconds.</p>

                    <div style={{ padding: '2.5rem', backgroundColor: 'var(--foreground)', color: 'white', borderRadius: '1.5rem' }}>
                      <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem', color: 'rgba(255,255,255,0.6)' }}>Estimated Range</p>
                      <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1, letterSpacing: '-0.05em' }}>313K – 423K <span style={{ fontSize: '1.5rem', fontWeight: 500, color: 'white', marginLeft: '0.25rem' }}>AED</span></div>
                      <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', marginTop: '1rem' }}>115 m² · Equipment & fabrication</p>
                    </div>
                  </div>

                  {/* Right Column: Controls */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                      <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'rgba(0,0,0,0.8)', display: 'block', marginBottom: '0.5rem' }}>Sector</label>
                      <select style={{ width: '100%', padding: '1rem 1.25rem', borderRadius: '0.75rem', border: '1px solid rgba(0,0,0,0.1)', backgroundColor: 'var(--secondary)', fontSize: '1rem', outline: 'none', appearance: 'none', cursor: 'pointer' }} defaultValue="Restaurants">
                        <option value="Restaurants">Restaurants</option>
                        <option value="Hotels">Hotels</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'rgba(0,0,0,0.8)', display: 'block', marginBottom: '0.5rem' }}>Kitchen Size</label>
                      <select style={{ width: '100%', padding: '1rem 1.25rem', borderRadius: '0.75rem', border: '1px solid rgba(0,0,0,0.1)', backgroundColor: 'var(--secondary)', fontSize: '1rem', outline: 'none', appearance: 'none', cursor: 'pointer' }} defaultValue="80 – 150 m²">
                        <option value="80 – 150 m²">80 – 150 m²</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'rgba(0,0,0,0.8)', display: 'block', marginBottom: '0.5rem' }}>Equipment Level</label>
                      <select style={{ width: '100%', padding: '1rem 1.25rem', borderRadius: '0.75rem', border: '1px solid rgba(0,0,0,0.1)', backgroundColor: 'var(--secondary)', fontSize: '1rem', outline: 'none', appearance: 'none', cursor: 'pointer' }} defaultValue="Premium">
                        <option value="Premium">Premium (Top brands, longer warranty)</option>
                      </select>
                    </div>

                    <button className="premium-btn blue-btn" style={{ width: '100%', justifyContent: 'center', padding: '1rem', marginTop: '1rem' }}>
                      Get Exact Quotation
                      <div className="btn-circle" style={{ width: '32px', height: '32px' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </div>
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Packages (Asymmetrical Bento) */}
      <section style={{ padding: 'clamp(4rem, 8vw, 8rem) 1rem', backgroundColor: 'var(--secondary)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', padding: '0.5rem 1rem', backgroundColor: 'rgba(42, 170, 222, 0.08)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '1.5rem' }}>TURNKEY SOLUTIONS</div>
              <h2 className="h2">Packages & Offers</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
              {[
                { title: 'Restaurant Opening', desc: 'Complete starter package for new restaurants including hotline, prep, and washing.' },
                { title: 'Café Equipment', desc: 'Everything you need to launch a café: espresso machines, display chillers, and blenders.' },
                { title: 'Bakery Solutions', desc: 'Deck ovens, planetary mixers and bakery essentials for high-volume production.' },
                { title: 'Custom Kitchen', desc: 'Fully tailored commercial kitchen projects engineered from scratch for massive scale.' }
              ].map((pkg, i) => (
                <div key={i} className="hover-lift" style={{ padding: '3rem 2rem', backgroundColor: 'var(--background)', borderRadius: '1.5rem', border: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '-0.02em' }}>{pkg.title}</h3>
                  <p style={{ color: 'rgba(0,0,0,0.6)', marginBottom: '2rem', fontSize: '1rem', lineHeight: 1.6 }}>{pkg.desc}</p>
                  <a href="#" className="group" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', color: 'var(--primary)', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>
                    Request Package
                    <span style={{ marginLeft: '0.5rem', transition: 'transform 0.3s ease' }} className="group-hover:translate-x-1">→</span>
                  </a>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials (Editorial Style) */}
      <section style={{ padding: 'clamp(4rem, 8vw, 8rem) 1rem', backgroundColor: 'var(--background)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <div style={{ display: 'inline-flex', alignItems: 'center', padding: '0.5rem 1rem', backgroundColor: 'rgba(42, 170, 222, 0.08)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '2.5rem' }}>CLIENT TESTIMONIALS</div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '2rem', textAlign: 'left', marginTop: '3rem' }}>
              <div style={{ padding: 'clamp(1.5rem, 5vw, 3rem)', backgroundColor: 'var(--secondary)', borderRadius: '2rem' }}>
                <p style={{ fontSize: '1.25rem', lineHeight: 1.6, fontWeight: 500, letterSpacing: '-0.01em', marginBottom: '2.5rem', color: 'var(--foreground)' }}>
                  “Mariot has been our kitchen equipment partner for over 7 years. Unmatched product quality and exceptional after-sales support...”
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: '50%' }}></div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '1rem' }}>Khalid Al Mansouri</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(0,0,0,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem' }}>Executive Chef, Marriott Dubai</div>
                  </div>
                </div>
              </div>
              <div style={{ padding: 'clamp(1.5rem, 5vw, 3rem)', backgroundColor: 'var(--secondary)', borderRadius: '2rem' }}>
                <p style={{ fontSize: '1.25rem', lineHeight: 1.6, fontWeight: 500, letterSpacing: '-0.01em', marginBottom: '2.5rem', color: 'var(--foreground)' }}>
                  “From consultation to commissioning, Mariot makes equipping a professional kitchen effortless. Their deep expertise is second to none.”
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: '50%' }}></div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '1rem' }}>Ahmed Qassem</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(0,0,0,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem' }}>F&B Manager, Rotana Hotels Group</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Online Store Banner (Massive Ethereal Pill) */}
      <section style={{ padding: 'clamp(2rem, 4vw, 4rem) 1rem clamp(4rem, 8vw, 8rem) 1rem', backgroundColor: 'var(--background)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{
              backgroundColor: 'var(--foreground)',
              color: 'white',
              textAlign: 'center',
              padding: 'clamp(3rem, 6vw, 6rem) 1rem',
              borderRadius: '2.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Subtle background gradient inside the banner */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(42, 170, 222, 0.2) 0%, transparent 60%)', filter: 'blur(40px)', pointerEvents: 'none' }}></div>

              <div style={{ position: 'relative', zIndex: 10 }}>
                <h2 className="h2" style={{ marginBottom: '1.5rem', color: 'white' }}>Shop equipment online.</h2>
                <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto 3rem auto', lineHeight: 1.6 }}>Fast delivery across the UAE. Browse our full catalogue of ready-to-order commercial kitchen equipment, spare parts and accessories.</p>
                <button className="premium-btn blue-btn" style={{ fontSize: '1rem', padding: '0.5rem 0.5rem 0.5rem 2rem' }}>
                  Shop Now on mariotstore.com
                  <div className="btn-circle" style={{ width: '36px', height: '36px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .editorial-row:hover {
          background-color: rgba(42, 170, 222, 0.03);
        }
        
        /* Premium Button-in-Button Styles */
        .premium-btn {
          display: inline-flex;
          align-items: center;
          border-radius: 100px;
          padding: 0.5rem 0.5rem 0.5rem 2rem;
          font-weight: 600;
          font-size: clamp(0.875rem, 3.5vw, 1.125rem);
          white-space: nowrap;
          border: none;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.32,0.72,0,1);
        }
        .premium-btn.black-btn { background-color: var(--foreground); color: var(--background); }
        .premium-btn.blue-btn { background-color: var(--primary); color: white; }
        
        .premium-btn .btn-circle {
          margin-left: 1.5rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.32,0.72,0,1);
        }
        .premium-btn.black-btn .btn-circle { background-color: rgba(255,255,255,0.1); }
        .premium-btn.blue-btn .btn-circle { background-color: rgba(255,255,255,0.2); }
        
        /* Magnetic Hover Physics */
        .premium-btn:active { transform: scale(0.98); }
        .premium-btn:hover .btn-circle {
          transform: translateX(4px) scale(1.05);
        }
      `}} />
    </main>
  );
}
