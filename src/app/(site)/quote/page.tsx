import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';
import Figure from '@/components/Figure';
import ContactForm from '../contact/ContactForm';

export const metadata = {
  title: 'Request a Free Quotation — Mariot Kitchen Equipment',
  description: 'Tell us about your project. Attach a BOQ or kitchen layout for an accurate quote.',
};

const container: React.CSSProperties = {
  maxWidth: '1320px',
  margin: '0 auto',
  padding: '0 var(--gutter)',
};

export default function QuotePage() {
  return (
    <main>
      <PageHero
        eyebrow="Request a Quotation"
        title={
          <>
            Request a <span style={{ color: 'var(--primary)' }}>Free Quotation</span>
          </>
        }
        intro="Tell us about your project. Attach a BOQ or kitchen layout for an accurate quote."
        photo="steakPlate"
      />

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
            <ScrollReveal>
              <div>
                <span className="eyebrow">Fast, accurate quotes</span>
                <h2 className="h2" style={{ margin: '1.25rem 0 1.25rem' }}>
                  One form, a complete proposal
                </h2>
                <p className="p-large" style={{ marginBottom: '2rem' }}>
                  The more detail you send — sector, budget, timeline, a BOQ or layout — the more
                  accurate the quote comes back, and the less back-and-forth it takes to get there.
                </p>
                <Figure photo="tableSpread" ratio="4 / 3" sizes="(max-width: 800px) 100vw, 40vw" className="figure-zoom" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={140}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
