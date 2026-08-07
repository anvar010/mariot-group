'use client';

import { useActionState } from 'react';
import { submitRestaurantOpening, type OpeningFormState } from './actions';

const labelStyle: React.CSSProperties = {
  fontSize: '0.7rem',
  fontWeight: 700,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'var(--ink-soft)',
};

const sectionLabelStyle: React.CSSProperties = {
  gridColumn: '1 / -1',
  fontSize: '0.68rem',
  fontWeight: 700,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--primary-deep)',
  marginTop: '0.5rem',
  paddingTop: '1.25rem',
  borderTop: '1px solid var(--rule)',
};

const fieldStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.55rem',
};

const CONCEPT_TYPES = ['Fine Dining', 'Casual Dining', 'Fast Casual', 'Café / Coffee Shop', 'Cloud Kitchen', 'Bakery / Pastry', 'Food Truck', 'Other'];
const INVESTMENT_RANGES = ['Under 150,000', '150,000 – 500,000', '500,000 – 1,000,000', '1M – 3M', 'Over 3M'];
const STAGES = ['Idea', 'Concept', 'Design', 'Fit-out', 'Pre-opening'];
const NEEDS = ['Licensing', 'Design', 'Equipment', 'Installation', 'Staff Training', 'Marketing'];

const initialState: OpeningFormState = {};

export default function OpeningForm() {
  const [state, formAction, pending] = useActionState(submitRestaurantOpening, initialState);

  return (
    <form
      action={formAction}
      style={{
        backgroundColor: 'var(--surface)',
        border: '1px solid var(--rule)',
        padding: 'clamp(1.5rem, 4vw, 2.75rem)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
        gap: '1.25rem',
      }}
    >
      <p style={{ ...sectionLabelStyle, marginTop: 0, paddingTop: 0, borderTop: 'none' }}>Your Concept</p>

      <div style={fieldStyle}>
        <label htmlFor="conceptName" style={labelStyle}>
          Concept / Brand Name *
        </label>
        <input id="conceptName" name="conceptName" type="text" required placeholder="e.g. Blue Fig Kitchen" className="form-input" />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="conceptType" style={labelStyle}>
          Concept Type *
        </label>
        <select id="conceptType" name="conceptType" className="form-input" defaultValue={CONCEPT_TYPES[0]} required>
          {CONCEPT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div style={fieldStyle}>
        <label htmlFor="cuisine" style={labelStyle}>
          Cuisine / Style
        </label>
        <input id="cuisine" name="cuisine" type="text" placeholder="e.g. Italian, Modern Levantine" className="form-input" />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="seats" style={labelStyle}>
          Seats / Capacity
        </label>
        <input id="seats" name="seats" type="text" className="form-input" />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="targetDate" style={labelStyle}>
          Target Opening Date
        </label>
        <input id="targetDate" name="targetDate" type="date" className="form-input" />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="location" style={labelStyle}>
          Location
        </label>
        <input id="location" name="location" type="text" className="form-input" />
      </div>

      <p style={sectionLabelStyle}>Investment & Stage</p>

      <div style={fieldStyle}>
        <label htmlFor="investment" style={labelStyle}>
          Investment Range (AED)
        </label>
        <select id="investment" name="investment" className="form-input" defaultValue={INVESTMENT_RANGES[0]}>
          {INVESTMENT_RANGES.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div style={fieldStyle}>
        <label htmlFor="currentStage" style={labelStyle}>
          Current Stage
        </label>
        <select id="currentStage" name="currentStage" className="form-input" defaultValue={STAGES[0]}>
          {STAGES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <fieldset style={{ gridColumn: '1 / -1', border: 'none', padding: 0 }}>
        <legend style={{ ...labelStyle, marginBottom: '0.75rem' }}>What do you need help with?</legend>
        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
          {NEEDS.map((need) => (
            <label key={need} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.93rem', fontWeight: 500 }}>
              <input type="checkbox" name="needs" value={need} style={{ accentColor: 'var(--primary)' }} />
              {need}
            </label>
          ))}
        </div>
      </fieldset>

      <p style={sectionLabelStyle}>Contact</p>

      <div style={fieldStyle}>
        <label htmlFor="contactName" style={labelStyle}>
          Your Name *
        </label>
        <input id="contactName" name="contactName" type="text" required className="form-input" />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="phone" style={labelStyle}>
          Phone / WhatsApp *
        </label>
        <input id="phone" name="phone" type="tel" required className="form-input" />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="email" style={labelStyle}>
          Email
        </label>
        <input id="email" name="email" type="email" className="form-input" />
      </div>

      <div style={{ ...fieldStyle, gridColumn: '1 / -1' }}>
        <label htmlFor="notes" style={labelStyle}>
          Anything else we should know?
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="Any partners, target audience, or challenges you'd like us to know about."
          className="form-input"
          style={{ resize: 'vertical' }}
        />
      </div>

      {state?.error && (
        <p role="alert" style={{ gridColumn: '1 / -1', color: 'var(--accent)', fontSize: '0.9rem', margin: 0 }}>
          {state.error}
        </p>
      )}

      <div style={{ gridColumn: '1 / -1', marginTop: '0.5rem' }}>
        <button type="submit" disabled={pending} className="btn-primary" style={{ width: '100%', padding: '1.15rem', opacity: pending ? 0.7 : 1 }}>
          {pending ? 'Submitting…' : 'Request Opening Support'}
        </button>
        <p style={{ fontSize: '0.78rem', color: 'var(--ink-faint)', marginTop: '0.75rem', textAlign: 'center' }}>
          You&rsquo;ll receive an opening roadmap and rough investment breakdown within 24 hours.
        </p>
      </div>
    </form>
  );
}
