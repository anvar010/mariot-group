import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';
import Figure from '@/components/Figure';
import { SECTOR_NAMES } from '@/lib/sectors';

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

const fieldStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.55rem',
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
              <form
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--rule)',
                  padding: 'clamp(1.5rem, 4vw, 2.75rem)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                  gap: '1.25rem',
                }}
              >
                <div style={fieldStyle}>
                  <label htmlFor="name" style={labelStyle}>
                    Full Name *
                  </label>
                  <input id="name" name="name" type="text" required placeholder="Your name" className="form-input" />
                </div>

                <div style={fieldStyle}>
                  <label htmlFor="phone" style={labelStyle}>
                    Phone / WhatsApp *
                  </label>
                  <input id="phone" name="phone" type="tel" required placeholder="+971 …" className="form-input" />
                </div>

                <div style={fieldStyle}>
                  <label htmlFor="company" style={labelStyle}>
                    Company Name
                  </label>
                  <input id="company" name="company" type="text" placeholder="Company" className="form-input" />
                </div>

                <div style={fieldStyle}>
                  <label htmlFor="email" style={labelStyle}>
                    Email Address
                  </label>
                  <input id="email" name="email" type="email" placeholder="you@company.com" className="form-input" />
                </div>

                <div style={fieldStyle}>
                  <label htmlFor="projectType" style={labelStyle}>
                    Project Type *
                  </label>
                  <select id="projectType" name="projectType" className="form-input" defaultValue="Restaurants">
                    {SECTOR_NAMES.map((sector) => (
                      <option key={sector} value={sector}>
                        {sector}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div style={fieldStyle}>
                  <label htmlFor="emirate" style={labelStyle}>
                    Emirate *
                  </label>
                  <select id="emirate" name="emirate" className="form-input" defaultValue="Dubai">
                    {['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Outside UAE'].map(
                      (emirate) => (
                        <option key={emirate} value={emirate}>
                          {emirate}
                        </option>
                      )
                    )}
                  </select>
                </div>

                <div style={fieldStyle}>
                  <label htmlFor="budget" style={labelStyle}>
                    Approximate Budget (AED)
                  </label>
                  <select id="budget" name="budget" className="form-input" defaultValue="50,000 – 100,000">
                    {['Under 50,000', '50,000 – 100,000', '100,000 – 250,000', '250,000+'].map((band) => (
                      <option key={band} value={band}>
                        {band}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={fieldStyle}>
                  <label htmlFor="start" style={labelStyle}>
                    Expected Start Date
                  </label>
                  <select id="start" name="start" className="form-input" defaultValue="Not sure yet">
                    {['Immediately', 'Within 1 month', 'Within 3 months', 'Not sure yet'].map((when) => (
                      <option key={when} value={when}>
                        {when}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ ...fieldStyle, gridColumn: '1 / -1' }}>
                  <label htmlFor="details" style={labelStyle}>
                    Project Description
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={5}
                    placeholder="Menu style, covers per service, room dimensions, what you already have…"
                    className="form-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <fieldset
                  style={{
                    gridColumn: '1 / -1',
                    border: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.85rem',
                  }}
                >
                  <legend style={{ ...labelStyle, marginBottom: '0.35rem' }}>
                    Preferred Contact Method
                  </legend>
                  <div style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap' }}>
                    {['WhatsApp', 'Phone Call', 'Email'].map((method, i) => (
                      <label
                        key={method}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          cursor: 'pointer',
                          fontSize: '0.93rem',
                          fontWeight: 500,
                        }}
                      >
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method}
                          defaultChecked={i === 0}
                          style={{ accentColor: 'var(--primary)' }}
                        />
                        {method}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div style={{ ...fieldStyle, gridColumn: '1 / -1' }}>
                  <label htmlFor="attachment" style={labelStyle}>
                    Upload BOQ or Kitchen Layout
                  </label>
                  <input
                    id="attachment"
                    name="attachment"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png,.dwg"
                    className="form-input"
                    style={{ padding: '0.85rem 1rem', fontSize: '0.9rem' }}
                  />
                  <span style={{ fontSize: '0.78rem', color: 'var(--ink-faint)' }}>
                    PDF, JPG, PNG or DWG — max 10MB
                  </span>
                </div>

                <div style={{ gridColumn: '1 / -1', marginTop: '0.5rem' }}>
                  <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1.15rem' }}>
                    Submit Request
                  </button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
