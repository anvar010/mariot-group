import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import Figure from '@/components/Figure';
import type { PhotoKey } from '@/lib/images';
import { SECTORS } from '@/lib/sectors';
import HeroRotator from '@/components/HeroRotator';
import HeroSlideshow from '@/components/HeroSlideshow';
import CostCalculator from '@/components/CostCalculator';
import BrandMarquee from '@/components/BrandMarquee';
import Link from 'next/link';

const container: React.CSSProperties = {
  maxWidth: '1320px',
  margin: '0 auto',
  padding: '0 var(--gutter)',
};

/* The clamp minimums only ever apply on narrow viewports — desktop lands on the
   maximum — so tightening them shortens mobile scroll without touching desktop. */
const sectionPad: React.CSSProperties = {
  paddingTop: 'clamp(2.5rem, 8vw, 7rem)',
  paddingBottom: 'clamp(2.5rem, 8vw, 7rem)',
};

/** For two-column sections where the columns already carry their own height. */
const sectionPadTight: React.CSSProperties = {
  paddingTop: 'clamp(2.25rem, 5.5vw, 4.5rem)',
  paddingBottom: 'clamp(2.25rem, 5.5vw, 4.5rem)',
};

const arrowIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const HOSPITALITY_CLIENTS = [
  'Marriott', 'Hilton', 'Rotana', 'Jumeirah', 'Emaar Hospitality', 'Rixos',
  'Address Hotels', 'Millennium', 'Sheraton', 'Mövenpick', 'Fairmont',
  'Grand Hyatt', 'Waldorf Astoria', 'Ritz-Carlton', 'Kempinski', 'Radisson Blu',
];

const CATEGORIES: { name: string; icon: React.ReactNode }[] = [
  {
    name: 'Restaurants',
    icon: <><path d="M4 3v7a2 2 0 0 0 2 2v9" /><path d="M8 3v7" /><path d="M6 3v7" /><path d="M17 3c-1.7 0-3 2.2-3 5v4h3v9" /></>,
  },
  {
    name: 'Cafés',
    icon: <><path d="M17 8h1a3 3 0 0 1 0 6h-1" /><path d="M3 8h14v6a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z" /><line x1="7" y1="2" x2="7" y2="4" /><line x1="11" y1="2" x2="11" y2="4" /></>,
  },
  {
    name: 'Hotels',
    icon: <><rect x="4" y="3" width="16" height="18" /><line x1="4" y1="21" x2="20" y2="21" /><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" /><path d="M10 21v-3h4v3" /></>,
  },
  {
    name: 'Resorts',
    icon: <><circle cx="12" cy="7" r="3" /><path d="M12 10v10" /><path d="M5 21h14" /><path d="M12 4V2" /><path d="M6.5 5.5 5 4" /><path d="M17.5 5.5 19 4" /><path d="M8 21c0-2 1.8-4 4-4s4 2 4 4" /></>,
  },
  {
    name: 'Villas & Palaces',
    icon: <><path d="M3 21h18" /><path d="M4 21V10l4-3 4 3 4-3 4 3v11" /><path d="M4 10 3 6l2 1 2-2 1 2" /><path d="M20 10l1-4-2 1-2-2-1 2" /><path d="M10 21v-4h4v4" /></>,
  },
  {
    name: 'Hospitals',
    icon: <><rect x="4" y="4" width="16" height="17" /><line x1="4" y1="21" x2="20" y2="21" /><path d="M12 8v6M9 11h6" /></>,
  },
  {
    name: 'Bakeries',
    icon: <><path d="M4 14c0-4.4 3.6-8 8-8s8 3.6 8 8v4H4z" /><path d="M9 6.5V4M12 6V3M15 6.5V4" /><line x1="4" y1="18" x2="20" y2="18" /></>,
  },
  {
    name: 'Laundries',
    icon: <><rect x="4" y="3" width="16" height="18" /><circle cx="12" cy="13" r="4" /><circle cx="7.5" cy="6.5" r="0.5" /><circle cx="10.5" cy="6.5" r="0.5" /></>,
  },
  {
    name: 'Catering',
    icon: <><path d="M4 17a8 8 0 0 1 16 0" /><line x1="2" y1="17" x2="22" y2="17" /><line x1="12" y1="9" x2="12" y2="7" /><circle cx="12" cy="6" r="1" /></>,
  },
  {
    name: 'Supermarkets',
    icon: <><circle cx="9" cy="20" r="1.5" /><circle cx="17" cy="20" r="1.5" /><path d="M3 4h2l2.5 12h11L21 8H6" /></>,
  },
  {
    name: 'Cloud Kitchens',
    icon: <><path d="M7 17a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.5A4 4 0 0 1 17 17z" /><path d="M9 21h6" /></>,
  },
  {
    name: 'Central Kitchens',
    icon: <><path d="M3 21V9l5 3V9l5 3V9l5 3v9" /><line x1="2" y1="21" x2="22" y2="21" /><path d="M7 17h2M12 17h2M17 17h2" /></>,
  },
];

/** Same photo per sector as /sectors — sourced from the shared list so the two
 *  can never drift apart. */
const SECTOR_PHOTO = new Map<string, PhotoKey>(SECTORS.map((s) => [s.name, s.photo]));

const HUB_SERVICES = [
  { title: 'Business / Trade Account', desc: 'Open a trade account and enjoy ongoing B2B support.', cta: 'Apply for Account' },
  { title: 'Kitchen Consultation & Site Visit', desc: 'Free consultation with a specialist and on-site inspection.', cta: 'Book Consultation' },
  { title: 'Restaurant & Café Opening', desc: 'End-to-end launch support for new food service businesses.', cta: 'Start My Project' },
  { title: 'Urgent Equipment Request', desc: 'Fast-track supply when your kitchen can’t wait.', cta: 'Send Urgent Request' },
];

const WHY_MARIOT = [
  { title: 'Global Brands', desc: 'Equipment from 40+ trusted manufacturers.' },
  { title: 'Commercial Expertise', desc: 'Specialists in restaurants, hotels and catering.' },
  { title: 'Expert Team', desc: 'Technical advisors to guide every purchase.' },
  { title: 'After-Sales Support', desc: 'Maintenance, parts and service you can rely on.' },
  { title: 'Delivery & Installation', desc: 'Professional logistics across the UAE.' },
  { title: 'Custom Fabrication', desc: 'In-house stainless steel built to your specs.' },
  { title: 'Multiple Branches', desc: 'Presence across the UAE always close to you.' },
];

const FABRICATION_ITEMS = [
  'Work Tables', 'Sinks & Wash Units', 'Shelves & Racks', 'Exhaust Hoods',
  'Trolleys & Carts', 'Counters & Buffets', 'Cabinets', 'Custom Fabrication',
];

const GCC_MARKETS = [
  { flag: '🇦🇪', name: 'UAE', tag: 'Home Base' },
  { flag: '🇸🇦', name: 'Saudi Arabia', tag: 'Active Market' },
  { flag: '🇰🇼', name: 'Kuwait', tag: 'Active Market' },
  { flag: '🇶🇦', name: 'Qatar', tag: 'Active Market' },
  { flag: '🇧🇭', name: 'Bahrain', tag: 'Active Market' },
  { flag: '🇴🇲', name: 'Oman', tag: 'Active Market' },
];

const EXPORT_MARKETS = ['🇮🇶 Iraq', '🇯🇴 Jordan', '🇱🇧 Lebanon', '🇪🇬 Egypt', '🇲🇦 Morocco', '🇮🇳 India', '🇰🇪 Kenya', '🇹🇿 Tanzania'];

const MAINTENANCE_FEATURES = [
  'Preventive maintenance visits',
  'Same-day emergency response',
  'Genuine spare parts warehouse',
  'QR-tagged equipment tracking',
  'Certified technicians per brand',
  'Monthly performance reports',
];

const PACKAGES = [
  { title: 'Restaurant Opening', desc: 'Complete starter package for new restaurants.' },
  { title: 'Café Equipment', desc: 'Everything you need to launch a café.' },
  { title: 'Bakery Solutions', desc: 'Ovens, mixers and bakery essentials.' },
  { title: 'Budget Startup', desc: 'Cost-effective options for new ventures.' },
  { title: 'Custom Kitchen', desc: 'Fully tailored commercial kitchen projects.' },
];

const TESTIMONIALS = [
  {
    quote: 'Mariot has been our kitchen equipment partner for over 7 years. Unmatched product quality and exceptional after-sales support  our entire restaurant chain relies on them.',
    initials: 'KM',
    name: 'Khalid Al Mansouri',
    role: 'Executive Chef, Marriott Dubai',
    color: 'var(--primary)',
  },
  {
    quote: 'We outfitted our entire commercial kitchen through Mariot. Delivery was on schedule, installation was flawless, and the equipment continues to perform beyond our expectations.',
    initials: 'FR',
    name: 'Fatima Al Rashidi',
    role: 'Operations Director, Hilton Abu Dhabi',
    color: 'var(--accent)',
  },
  {
    quote: 'From consultation to commissioning, Mariot makes equipping a professional kitchen effortless. Their deep expertise in commercial equipment is second to none in the UAE.',
    initials: 'AQ',
    name: 'Ahmed Qassem',
    role: 'F&B Manager, Rotana Hotels Group',
    color: 'var(--primary)',
  },
];

const PROJECTS: { tag: string; title: string; photo: PhotoKey }[] = [
  { tag: 'Hotel Kitchen · Dubai', title: 'Five-Star Resort Main Kitchen', photo: 'resort' },
  { tag: 'Restaurant · Abu Dhabi', title: 'Fine-Dining Open Kitchen Fit-Out', photo: 'chefPlating' },
  { tag: 'Central Kitchen · Sharjah', title: 'High-Volume Catering Facility', photo: 'catering' },
];

const INSIGHTS: { tag: string; title: string; photo: PhotoKey }[] = [
  { tag: 'Buying Guide', title: 'How much does a commercial kitchen cost in the UAE in 2026?', photo: 'restaurantWarm' },
  { tag: 'Equipment', title: 'Choosing refrigeration that survives the Gulf summer.', photo: 'supermarket' },
  { tag: 'Maintenance', title: 'The preventive maintenance checklist every operator needs.', photo: 'technician' },
];

export default function Home() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{ position: 'relative', paddingTop: 'clamp(7rem, 13vh, 10rem)', backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(2.5rem, 5vw, 5rem)', alignItems: 'center', paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)' }}>

            {/* Left: headline */}
            <div>
              <ScrollReveal>
                <span className="eyebrow" style={{ marginBottom: '1.75rem' }}>Commercial Kitchen Specialists · UAE &amp; GCC</span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="h1" style={{ margin: '1.25rem 0 2rem' }}>
                  Turnkey kitchen<br />
                  solutions for<br />
                  <HeroRotator />
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="p-large" style={{ maxWidth: '520px', marginBottom: '2.5rem' }}>
                  We supply and support commercial kitchen, refrigeration, stainless steel, laundry, and food service projects across UAE and GCC.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="hero-cta">
                  <a href="https://mariotstore.com" target="_blank" rel="noopener noreferrer" className="premium-btn red-btn">
                    Shop Now
                    <span className="btn-circle">{arrowIcon}</span>
                  </a>
                  <Link href="/contact" className="btn-secondary" style={{ padding: '0.85rem 2rem' }}>
                    Get a Free Quote
                  </Link>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div style={{ display: 'flex', flexWrap: 'wrap', borderTop: '1px solid var(--rule)' }}>
                  {['20+ Years Experience', 'Quality Guaranteed', 'Fast UAE Delivery'].map((badge) => (
                    <div key={badge} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '1.1rem 1.75rem 0 0', fontSize: '0.85rem', fontWeight: 600 }}>
                      <span style={{ color: 'var(--primary)' }}>✓</span> {badge}
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right: framed slideshow panel */}
            <ScrollReveal delay={250}>
              <div style={{ position: 'relative', margin: '1.25rem 0 1.75rem' }}>
                {/* Offset accent frame */}
                <div aria-hidden style={{ position: 'absolute', top: '14px', left: '14px', width: '100%', height: '100%', border: '1px solid var(--rule)', pointerEvents: 'none' }} />

                <div style={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden', border: '1px solid var(--ink)', backgroundColor: 'var(--ink)' }}>
                  <HeroSlideshow />
                </div>

                {/* Since 2004 chip */}
                <div style={{ position: 'absolute', top: '-16px', right: '18px', backgroundColor: 'var(--accent)', color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.06em', padding: '0.5rem 0.9rem', zIndex: 3 }}>
                  Since 2004
                </div>

                {/* Floating stat card */}
                <div style={{ position: 'absolute', bottom: '-22px', left: '18px', backgroundColor: 'var(--ink)', color: '#fff', display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.9rem 1.4rem', zIndex: 3 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--primary)', lineHeight: 1 }}>500+</span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)' }}>Delivered<br />Projects</span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>

        {/* Client marquee band */}
        <div style={{ backgroundColor: 'var(--ink)', color: 'var(--paper)', overflow: 'hidden', padding: '1.1rem 0', position: 'relative', zIndex: 2 }}>
          <div className="marquee-track" style={{ animationDuration: '45s' }}>
            {[...HOSPITALITY_CLIENTS, ...HOSPITALITY_CLIENTS].map((client, i) => (
              <span key={`${client}-${i}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '2.5rem', paddingRight: '2.5rem', whiteSpace: 'nowrap' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.08em' }}>{client}</span>
                <span aria-hidden style={{ color: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)', fontSize: '0.8rem' }}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS + INTRO ────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper)', borderBottom: '1px solid var(--rule)' }}>
        {/* Copy and figures share a row rather than stacking — stacked, this ran
            the tallest of any section for the least content on the page. */}
        <div style={{ ...container, paddingTop: 'clamp(1.1rem, 3.5vw, 2.5rem)', paddingBottom: 'clamp(1.1rem, 3.5vw, 2.5rem)' }}>
          <div className="split-cols text-wide intro-split" style={{ display: 'grid', gap: 'clamp(1rem, 3vw, 2.75rem)', alignItems: 'center' }}>
            <ScrollReveal>
              <div>
                <span className="eyebrow eyebrow-blue">Trusted by leading UAE hospitality brands</span>
                <h2 className="h2" style={{ margin: '0.6rem 0' }}>Turnkey commercial kitchen solutions</h2>
                <p className="p-large">
                  For over two decades, Mariot Kitchen Equipment has helped restaurants, hotels, hospitals, catering companies and industrial food businesses across the UAE build kitchens that perform.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="grid-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1px', backgroundColor: 'var(--rule)', border: '1px solid var(--rule)' }}>
                {[
                  { value: 20, suffix: '+', label: 'Years of Experience' },
                  { value: 500, suffix: '+', label: 'Delivered Projects' },
                  { value: 40, suffix: '+', label: 'Global Brands' },
                  { value: 7, suffix: '', label: 'Emirates Served' },
                ].map((stat, i) => (
                  <div key={stat.label} style={{ padding: 'clamp(0.9rem, 1.8vw, 1.35rem)', backgroundColor: i % 2 === 0 ? 'var(--paper)' : '#ffffff' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', lineHeight: 1, color: i === 1 ? 'var(--accent)' : 'var(--primary)' }}>
                      <AnimatedCounter targetValue={stat.value} suffix={stat.suffix} duration={2200} />
                    </div>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.35rem', color: 'var(--ink-soft)' }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ───────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, ...sectionPad }}>
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
              <div>
                <span className="eyebrow">Sectors we serve</span>
                <h2 className="h2" style={{ marginTop: '1.25rem' }}>Main Business<br />Categories</h2>
              </div>
              <p className="p-large" style={{ maxWidth: '360px' }}>Complete equipment solutions for every food service segment.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid-cats" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 210px), 1fr))', gap: '1px', backgroundColor: 'var(--rule)', border: '1px solid var(--rule)' }}>
              {CATEGORIES.map((cat, i) => (
                <Link href="/sectors" key={cat.name} className="sector-card">
                  {SECTOR_PHOTO.get(cat.name) && (
                    <Figure
                      photo={SECTOR_PHOTO.get(cat.name)!}
                      scrim="full"
                      sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 17vw"
                      style={{ position: 'absolute', inset: 0, border: 'none' }}
                    />
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span className="sc-num" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: i % 3 === 1 ? 'var(--accent)' : 'var(--primary)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="sc-arrow">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                    </span>
                  </div>
                  <div>
                    <span className="sc-icon" style={{ display: 'block', marginBottom: '0.9rem' }}>
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{cat.icon}</svg>
                    </span>
                    <h3 className="sc-title" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', letterSpacing: '0.02em', lineHeight: 1.1 }}>{cat.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BUSINESS HUB ─────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--ink)', color: 'var(--paper)' }}>
        <div style={{ ...container, ...sectionPad }}>
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
              <div style={{ maxWidth: '640px' }}>
                <span className="eyebrow on-dark">Mariot Business Hub</span>
                <h2 className="h2" style={{ marginTop: '1.25rem', color: 'var(--paper)' }}>Business solutions for restaurants, cafés, hotels &amp; commercial kitchens</h2>
              </div>
              <p className="p-large" style={{ maxWidth: '380px', color: 'rgba(255,255,255,0.6)' }}>
                Request business support, project quotations, procurement assistance, and expert kitchen equipment guidance from Mariot.
              </p>
            </div>
          </ScrollReveal>

          <div className="mob-swipe on-dark" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 270px), 1fr))', gap: '1px', backgroundColor: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.18)' }}>
            {HUB_SERVICES.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <div className="cat-card hub-card" style={{ backgroundColor: 'var(--ink)', padding: 'clamp(1.75rem, 3vw, 2.5rem)', height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', minHeight: '260px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)' }}>{String(i + 1).padStart(2, '0')}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)', lineHeight: 1.1 }}>{service.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.6, flexGrow: 1 }}>{service.desc}</p>
                  <Link href="/business-hub" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    {service.cta} <span className="cat-arrow">→</span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper)', borderBottom: '1px solid var(--rule)' }}>
        <div style={{ ...container, ...sectionPad }}>
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
              <div>
                <span className="eyebrow eyebrow-blue">Our Work</span>
                <h2 className="h2" style={{ marginTop: '1.25rem' }}>Featured Projects</h2>
              </div>
              <Link href="/projects" className="btn-secondary" style={{ padding: '0.85rem 1.75rem' }}>
                View all projects →
              </Link>
            </div>
          </ScrollReveal>

          <div className="mob-swipe" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1.5rem' }}>
            {PROJECTS.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 120}>
                <Link href="/projects" className="hover-lift" style={{ display: 'block', border: '1px solid var(--rule)' }}>
                  <Figure
                    photo={project.photo}
                    scrim="soft"
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    className="figure-zoom"
                    style={{ height: '260px', border: 'none', borderBottom: '1px solid var(--rule)' }}
                  >
                    <span style={{ position: 'absolute', top: '1.25rem', left: '1.25rem', zIndex: 2, backgroundColor: 'var(--paper)', color: 'var(--ink)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.4rem 0.75rem' }}>{project.tag}</span>
                    <span aria-hidden style={{ position: 'absolute', bottom: '0.25rem', right: '1rem', zIndex: 2, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '5rem', color: 'rgba(255,255,255,0.32)', lineHeight: 1 }}>{String(i + 1).padStart(2, '0')}</span>
                  </Figure>
                  <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', backgroundColor: 'var(--surface)' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', lineHeight: 1.15 }}>{project.title}</h3>
                    <span style={{ color: 'var(--primary)', flexShrink: 0 }}>{arrowIcon}</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY MARIOT ───────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, ...sectionPadTight }}>
          <div className="split-cols" style={{ display: 'grid', gap: 'clamp(2rem, 4vw, 3.5rem)', alignItems: 'start' }}>

            {/* Left: heading + numbers */}
            <div>
              <ScrollReveal>
                <span className="eyebrow">Why Mariot</span>
                <h2 className="h2" style={{ margin: '1rem 0 1rem' }}>Your Trusted<br />Kitchen Partner</h2>
                <p className="p-large" style={{ marginBottom: '1.75rem' }}>Two decades of expertise in commercial kitchen equipment across the UAE and GCC.</p>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <div style={{ border: '1px solid var(--rule)', backgroundColor: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>By the numbers</span>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.35rem', marginTop: '1.25rem' }}>
                    {[
                      { value: 500, suffix: '+', label: 'Projects Done' },
                      { value: 40, suffix: '+', label: 'Global Brands' },
                      { value: 300, suffix: '+', label: 'Happy Clients' },
                      { value: 7, suffix: '', label: 'Emirates' },
                    ].map((stat, i) => (
                      <div key={stat.label}>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)', lineHeight: 1 }}>
                          <AnimatedCounter targetValue={stat.value} suffix={stat.suffix} duration={2200} />
                        </div>
                        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.4rem', fontWeight: 600 }}>{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginTop: '1.35rem', lineHeight: 1.6 }}>
                    Serving the UAE’s most trusted restaurants, hotels, and food businesses since 2004.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: numbered reasons */}
            <ScrollReveal delay={100}>
              <div style={{ borderTop: '1px solid var(--rule)' }}>
                {WHY_MARIOT.map((reason, i) => (
                  <div key={reason.title} className="editorial-row" style={{ display: 'flex', gap: '1.25rem', alignItems: 'baseline', padding: '0.95rem 1rem', borderBottom: '1px solid var(--rule)' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)', width: '2rem', flexShrink: 0 }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.2rem, 2vw, 1.55rem)', letterSpacing: '0.02em' }}>{reason.title}</h3>
                      <p style={{ color: 'var(--ink-soft)', fontSize: '0.95rem', marginTop: '0.35rem', lineHeight: 1.55 }}>{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── FABRICATION ──────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--ink)', color: 'var(--paper)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden style={{ position: 'absolute', top: '-10%', right: '-15%', width: '55vw', height: '55vw', background: 'radial-gradient(circle, rgba(42,169,222,0.14) 0%, transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ ...container, ...sectionPadTight, position: 'relative', zIndex: 2 }}>
          <div className="split-cols" style={{ display: 'grid', gap: 'clamp(2rem, 4vw, 3.5rem)', alignItems: 'center' }}>
            <div>
              <ScrollReveal>
                <span className="eyebrow on-dark">Own Fabrication Factory · UAE</span>
                <h2 className="h2" style={{ margin: '1rem 0 1rem', color: 'var(--paper)' }}>
                  We don’t just supply — <span style={{ color: 'var(--primary)' }}>we manufacture</span> custom stainless steel
                </h2>
                <p className="p-large" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '1.5rem' }}>
                  Custom units built in our own UAE factory to your exact kitchen layout, Grade 304 &amp; 430, precision-welded and finished to hospitality standards.
                </p>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
                  {['Made to Measure', 'In-House Welders', 'Grade 304 & 430'].map((tag) => (
                    <span key={tag} style={{ padding: '0.5rem 1rem', border: '1px solid rgba(255,255,255,0.25)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{tag}</span>
                  ))}
                </div>
                <Link href="/fabrication" className="premium-btn blue-btn">
                  Explore Fabrication
                  <span className="btn-circle">{arrowIcon}</span>
                </Link>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={150}>
              <div style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
                <Figure
                  photo="welding"
                  ratio="21 / 9"
                  sizes="(max-width: 900px) 100vw, 45vw"
                  className="figure-zoom"
                  style={{ border: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)' }}
                />
                <div style={{ padding: '0.9rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.05em' }}>Our Factory</span>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)', fontWeight: 600 }}>Every seam, every corner — built by our own team.</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}>
                  {FABRICATION_ITEMS.map((item, i) => (
                    <div key={item} style={{ backgroundColor: 'var(--ink)', padding: '0.8rem 1.5rem', fontSize: '0.88rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span aria-hidden style={{ width: '7px', height: '7px', backgroundColor: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)', flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
                <div style={{ padding: '0.9rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>Delivery</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.35rem', color: 'var(--primary)' }}>10–14 DAYS</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── GLOBAL EXPORT ────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper)', borderBottom: '1px solid var(--rule)' }}>
        <div style={{ ...container, ...sectionPad }}>
          <ScrollReveal>
            <div className="mb-tight" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
              <div style={{ maxWidth: '620px' }}>
                <span className="eyebrow eyebrow-blue">Global Export · Serving the GCC</span>
                <h2 className="h2" style={{ marginTop: '1.25rem' }}>Headquartered in the UAE · Delivering worldwide</h2>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                {['Land Freight', 'Sea Freight', 'Air Freight'].map((mode) => (
                  <span key={mode} style={{ padding: '0.5rem 1rem', border: '1px solid var(--rule)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{mode}</span>
                ))}
              </div>
            </div>
            <p className="p-large mb-tight" style={{ maxWidth: '760px', marginBottom: '3rem' }}>
              We supply commercial kitchen equipment across all six GCC countries and export to selected markets in the Middle East, Africa and Asia with logistics tuned for hospitality timelines.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid-gcc" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))', gap: '1px', backgroundColor: 'var(--rule)', border: '1px solid var(--rule)', marginBottom: '2rem' }}>
              {GCC_MARKETS.map((market) => (
                <div key={market.name} style={{ backgroundColor: market.tag === 'Home Base' ? 'var(--ink)' : '#ffffff', color: market.tag === 'Home Base' ? 'var(--paper)' : 'var(--ink)', padding: '1.75rem 1.25rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{market.flag}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem' }}>{market.name}</div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '0.4rem', color: market.tag === 'Home Base' ? 'var(--primary)' : 'var(--ink-soft)' }}>{market.tag}</div>
                </div>
              ))}
            </div>

            <div className="mb-tight" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', alignItems: 'center', marginBottom: '3rem' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginRight: '0.75rem' }}>Beyond the GCC —</span>
              {EXPORT_MARKETS.map((market) => (
                <span key={market} style={{ padding: '0.45rem 0.9rem', border: '1px solid var(--rule)', fontSize: '0.85rem', fontWeight: 600, backgroundColor: '#ffffff' }}>{market}</span>
              ))}
              <span style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)' }}>More on request →</span>
            </div>

            <div className="stat-row" style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(2rem, 5vw, 4.5rem)' }}>
              {[
                { value: '15+', label: 'Countries Served' },
                { value: '100+', label: 'Export Projects' },
                { value: '24/7', label: 'Support Availability' },
              ].map((stat, i) => (
                <div key={stat.label} style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: i === 1 ? 'var(--accent)' : 'var(--primary)' }}>{stat.value}</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-soft)' }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── MAINTENANCE ──────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper-deep)' }}>
        <div style={{ ...container, ...sectionPad }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'clamp(2.5rem, 5vw, 5rem)' }}>
            <div>
              <ScrollReveal>
                <span className="eyebrow">Professional Maintenance · UAE</span>
                <h2 className="h2" style={{ margin: '1.25rem 0 1.5rem' }}>
                  Keep your kitchen running reduce downtime by up to <span style={{ color: 'var(--accent)' }}>75%</span>
                </h2>
                <p className="p-large" style={{ marginBottom: '2rem' }}>
                  A dedicated in-house maintenance team, preventive service plans, spare-parts warehouse, and 24/7 emergency call-outs for hotels, restaurants and multi-outlet operators.
                </p>
                <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 230px), 1fr))', gap: '0.85rem', marginBottom: '2.5rem' }}>
                  {MAINTENANCE_FEATURES.map((feature) => (
                    <li key={feature} style={{ display: 'flex', gap: '0.65rem', alignItems: 'center', fontSize: '0.95rem', fontWeight: 600 }}>
                      <span style={{ color: 'var(--primary)' }}>✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/maintenance" className="premium-btn black-btn">
                  Explore Maintenance Plans
                  <span className="btn-circle">{arrowIcon}</span>
                </Link>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={150}>
              <Figure
                photo="technician"
                ratio="16 / 9"
                sizes="(max-width: 900px) 100vw, 45vw"
                className="figure-zoom"
                style={{ marginBottom: '1.5rem' }}
              />
              {/* Three across rather than stacked — as tall rows these alone made
                  the maintenance section run longer than the copy beside them. */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'var(--rule)', border: '1px solid var(--rule)' }}>
                {[
                  { value: 75, label: 'Less downtime', color: 'var(--accent)' },
                  { value: 50, label: 'Longer lifespan', color: 'var(--primary)' },
                  { value: 30, label: 'Lower annual cost', color: 'var(--primary-deep)' },
                ].map((stat) => (
                  <div key={stat.label} style={{ backgroundColor: 'var(--surface)', padding: 'clamp(1rem, 2vw, 1.4rem)' }}>
                    <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.75rem, 3.4vw, 2.5rem)', lineHeight: 1, color: stat.color }}>
                      <AnimatedCounter targetValue={stat.value} suffix="%" duration={2000} />
                    </span>
                    <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-soft)', lineHeight: 1.35, marginTop: '0.5rem' }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── COST CALCULATOR ──────────────────────────────── */}
      <section id="quote" style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, ...sectionPad }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
              <span className="eyebrow eyebrow-blue">Instant Estimate</span>
              <h2 className="h2" style={{ margin: '1.25rem 0 1rem' }}>Estimate your kitchen project budget</h2>
              <p className="p-large">Get a rough AED range for your commercial kitchen in seconds — then request a precise quotation from our engineers.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <CostCalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* ── PACKAGES ─────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper)', borderTop: '1px solid var(--rule)' }}>
        <div style={{ ...container, ...sectionPad }}>
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
              <div>
                <span className="eyebrow">Turnkey Solutions</span>
                <h2 className="h2" style={{ marginTop: '1.25rem' }}>Packages &amp; Offers</h2>
              </div>
              <p className="p-large" style={{ maxWidth: '360px' }}>Tailored equipment packages for new projects and startups.</p>
            </div>
          </ScrollReveal>

          <div className="mob-swipe" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 230px), 1fr))', gap: '1px', backgroundColor: 'var(--rule)', border: '1px solid var(--rule)' }}>
            {PACKAGES.map((pkg, i) => (
              <ScrollReveal key={pkg.title} delay={i * 80}>
                <div className="cat-card pkg-card" style={{ backgroundColor: i === 4 ? 'var(--ink)' : '#ffffff', color: i === 4 ? 'var(--paper)' : 'var(--ink)', padding: 'clamp(1.75rem, 3vw, 2.25rem)', height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', minHeight: '280px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)' }}>{String(i + 1).padStart(2, '0')}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.3rem, 2.2vw, 1.6rem)', lineHeight: 1.1 }}>{pkg.title}</h3>
                  <p style={{ color: i === 4 ? 'rgba(255,255,255,0.6)' : 'var(--ink-soft)', fontSize: '0.95rem', lineHeight: 1.6, flexGrow: 1 }}>{pkg.desc}</p>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: i === 4 ? 'var(--primary)' : 'var(--accent)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    Request Package <span className="cat-arrow">→</span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--ink)', color: 'var(--paper)' }}>
        <div style={{ ...container, ...sectionPad }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span className="eyebrow on-dark" style={{ justifyContent: 'center' }}>Client Testimonials</span>
              <h2 className="h2" style={{ marginTop: '1.25rem', color: 'var(--paper)' }}>What Our Partners Say</h2>
              <p className="p-large" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '640px', margin: '1rem auto 0' }}>
                Proud to be trusted by hundreds of hotels, restaurants and hospitality venues across the UAE and the Gulf.
              </p>
            </div>
          </ScrollReveal>

          <div className="mob-swipe on-dark" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1px', backgroundColor: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.18)', marginBottom: '3rem' }}>
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 120}>
                <figure style={{ backgroundColor: 'var(--ink)', padding: 'clamp(1.75rem, 3vw, 2.5rem)', height: '100%', display: 'flex', flexDirection: 'column', gap: '1.75rem', margin: 0 }}>
                  <span aria-hidden style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '3rem', lineHeight: 0.5, color: t.color, marginTop: '1rem' }}>“</span>
                  <blockquote style={{ fontSize: '1.05rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.85)', flexGrow: 1, margin: 0 }}>
                    {t.quote}
                  </blockquote>
                  <figcaption style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ width: '46px', height: '46px', backgroundColor: t.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', flexShrink: 0 }}>{t.initials}</span>
                    <span>
                      <span style={{ display: 'block', fontWeight: 700 }}>{t.name}</span>
                      <span style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginTop: '0.25rem' }}>{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 'clamp(1.5rem, 4vw, 3.5rem)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>
              <span><span style={{ color: 'var(--primary)' }}>500+</span> Active Clients</span>
              <span><span style={{ color: 'var(--accent)' }}>4.9</span> Average Rating</span>
              <span><span style={{ color: 'var(--primary)' }}>20+</span> Years in Business</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BRANDS ───────────────────────────────────────── */}
      <section id="brands" style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: '3rem' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div>
                <span className="eyebrow eyebrow-blue">Shop by Brand</span>
                <h2 className="h2" style={{ marginTop: '1.25rem' }}>Trusted Global Brands</h2>
                <p className="p-large" style={{ marginTop: '1rem' }}>We partner with the world’s leading manufacturers.</p>
              </div>
              <Link href="/brands" className="btn-secondary" style={{ padding: '0.85rem 1.75rem' }}>
                View all brands →
              </Link>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <BrandMarquee />
        </ScrollReveal>
      </section>

      {/* ── INSIGHTS ─────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, ...sectionPad }}>
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
              <div>
                <span className="eyebrow">Insights &amp; Guides</span>
                <h2 className="h2" style={{ marginTop: '1.25rem' }}>Expert advice, straight from the field</h2>
              </div>
              <Link href="/projects" className="btn-secondary" style={{ padding: '0.85rem 1.75rem' }}>
                View all articles →
              </Link>
            </div>
          </ScrollReveal>

          <div className="mob-swipe" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
            {INSIGHTS.map((post, i) => (
              <ScrollReveal key={post.title} delay={i * 100}>
                <Link href="/projects" className="cat-card hover-lift" style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'var(--surface)', border: '1px solid var(--rule)', height: '100%' }}>
                  <Figure
                    photo={post.photo}
                    ratio="16 / 10"
                    sizes="(max-width: 700px) 100vw, 33vw"
                    className="figure-zoom"
                    style={{ border: 'none', borderBottom: '1px solid var(--rule)' }}
                  >
                    <span className={`figure-tag${i === 1 ? ' on-accent' : ' on-primary'}`}>{post.tag}</span>
                  </Figure>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', padding: 'clamp(1.5rem, 3vw, 2rem)', flexGrow: 1 }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.2rem, 2.2vw, 1.5rem)', lineHeight: 1.15, flexGrow: 1 }}>{post.title}</h3>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink)' }}>
                      Read Article <span className="cat-arrow" style={{ color: 'var(--primary)' }}>→</span>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ONLINE STORE ─────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--accent)', color: '#fff', overflow: 'hidden' }}>
        <div style={{ ...container, padding: 'clamp(3.5rem, 7vw, 6rem) var(--gutter)' }}>
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div>
                <span className="eyebrow" style={{ color: '#fff' }}>
                  <span style={{ display: 'contents' }} /> Online Store
                </span>
                <h2 className="h2" style={{ margin: '1.25rem 0 1.25rem', color: '#fff' }}>Shop kitchen equipment online</h2>
                <p className="p-large" style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2rem' }}>
                  Fast delivery across the UAE. Browse our full catalogue of ready-to-order commercial kitchen equipment, spare parts and accessories.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {['Fast UAE delivery', 'Original brands', 'Secure checkout'].map((item) => (
                    <span key={item} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span aria-hidden>✓</span> {item}
                    </span>
                  ))}
                </div>
                <a href="https://mariotstore.com" target="_blank" rel="noopener noreferrer" className="premium-btn black-btn">
                  mariotstore.com
                  <span className="btn-circle">{arrowIcon}</span>
                </a>
              </div>
              <Figure
                photo="coffee"
                ratio="4 / 3"
                sizes="(max-width: 900px) 100vw, 45vw"
                className="figure-zoom"
                style={{ border: '1px solid rgba(255,255,255,0.3)' }}
              >
                <span aria-hidden style={{ position: 'absolute', inset: 0, zIndex: 2, display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', padding: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 0.9, color: 'rgba(255,255,255,0.9)', textAlign: 'right', textShadow: '0 2px 24px rgba(22,19,14,0.6)', userSelect: 'none' }}>
                  Mariot<br />Store
                </span>
              </Figure>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--ink)', color: 'var(--paper)', overflow: 'hidden' }}>
        <div style={{ ...container, paddingTop: 'clamp(3rem, 5.5vw, 4.5rem)' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
              <span className="eyebrow on-dark" style={{ justifyContent: 'center' }}>Ready to equip your kitchen?</span>
              <h2 className="h2" style={{ margin: '1rem 0', color: 'var(--paper)' }}>Need help planning your commercial kitchen?</h2>
              <p className="p-large" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1.75rem' }}>
                Our team is ready to advise, quote and equip your project from A to Z — from the first sketch to the first plate.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <a href="tel:+97142882777" className="premium-btn blue-btn">
                  +971 4-288-2777
                  <span className="btn-circle">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </span>
                </a>
                <a href="mailto:admin@mariotkitchen.com" className="btn-secondary-white" style={{ padding: '0.85rem 2rem' }}>
                  admin@mariotkitchen.com
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Giant editorial wordmark */}
        <div aria-hidden style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(3.5rem, 12vw, 10rem)', lineHeight: 0.8, textAlign: 'center', color: 'var(--paper)', marginTop: 'clamp(1.5rem, 3vw, 2.5rem)', marginBottom: '-0.09em', userSelect: 'none', letterSpacing: '0.02em' }}>
          Mari<span style={{ color: 'var(--primary)' }}>o</span>t
        </div>
      </section>
    </main>
  );
}
