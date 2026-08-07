import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';
import Figure from '@/components/Figure';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact Mariot — Request a Free Quotation',
  description:
    'Talk to Mariot Kitchen Equipment about your commercial kitchen project. Call, WhatsApp or send a BOQ for a free quotation across the UAE and GCC.',
};

const container: React.CSSProperties = {
  maxWidth: '1320px',
  margin: '0 auto',
  padding: '0 var(--gutter)',
};

const labelStyle: React.CSSProperties = {
  fontSize: '0.7rem',
  fontWeight: 700,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'var(--ink-soft)',
};

const CHANNELS = [
  {
    label: 'WhatsApp',
    value: '+971 4 288 2777',
    href: 'https://wa.me/97142882777',
    note: 'Fastest for quick questions',
    color: '#25D366',
  },
  {
    label: 'Call Us',
    value: '+971 4 288 2777',
    href: 'tel:+97142882777',
    note: 'Sun–Thu, 8am–6pm GST',
    color: 'var(--primary)',
  },
  {
    label: 'Email Us',
    value: 'admin@mariotkitchen.com',
    href: 'mailto:admin@mariotkitchen.com',
    note: 'Send a BOQ or drawing',
    color: 'var(--accent)',
  },
];

export default function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="Get in Touch"
        title={
          <>
            Tell us what you&rsquo;re <span style={{ color: 'var(--primary)' }}>building</span>
          </>
        }
        intro="Reach out through whichever channel suits you — we typically respond within a few hours during UAE business hours."
        photo="fineDining"
      />

      {/* ── CHANNELS ─────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper)', borderBottom: '1px solid var(--rule)' }}>
        <div style={{ ...container, paddingTop: 'clamp(3rem, 6vw, 4.5rem)' }}>
          <ScrollReveal>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                gap: '1px',
                backgroundColor: 'var(--rule)',
                border: '1px solid var(--rule)',
              }}
            >
              {CHANNELS.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="cat-card"
                  style={{
                    backgroundColor: 'var(--surface)',
                    padding: 'clamp(1.5rem, 3vw, 2rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: '32px',
                      height: '4px',
                      backgroundColor: channel.color,
                      marginBottom: '0.85rem',
                    }}
                  />
                  <span style={labelStyle}>{channel.label}</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)', fontWeight: 700,
                      fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
                      letterSpacing: '0.01em',
                      wordBreak: 'break-word',
                    }}
                  >
                    {channel.value}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--ink-faint)' }}>
                    {channel.note}
                  </span>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FORM ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--paper)' }}>
        <div style={{ ...container, padding: 'clamp(4rem, 8vw, 7rem) var(--gutter)' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(2rem, 4vw, 3.5rem)',
              alignItems: 'start',
            }}
          >
            {/* Left rail */}
            <ScrollReveal>
              <div>
                <span className="eyebrow">Request a quotation</span>
                <h2 className="h2" style={{ margin: '1.25rem 0 1.25rem' }}>
                  Free,
                  <br />
                  no obligation
                </h2>
                <p className="p-large" style={{ marginBottom: '2rem' }}>
                  Tell us about your project and attach a BOQ or kitchen layout — the more detail
                  you send, the more accurate the quote comes back.
                </p>
                <Figure
                  photo="tableSpread"
                  ratio="4 / 3"
                  sizes="(max-width: 800px) 100vw, 40vw"
                  className="figure-zoom"
                />
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={140}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
