'use client';

import { useActionState } from 'react';
import { SECTOR_NAMES } from '@/lib/sectors';
import { submitContactForm, type ContactFormState } from './actions';

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

const initialState: ContactFormState = {};

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  if (state?.success) {
    return (
      <div
        style={{
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--rule)',
          padding: 'clamp(2rem, 6vw, 3.5rem)',
          textAlign: 'center',
        }}
      >
        <span className="eyebrow">Request received</span>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1.5rem',
            margin: '1rem 0 0.75rem',
          }}
        >
          Thanks — we&rsquo;ll be in touch shortly.
        </h3>
        <p className="p-regular" style={{ color: 'var(--ink-soft)' }}>
          A member of the Mariot team will reach out using your preferred contact method.
        </p>
      </div>
    );
  }

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
        <legend style={{ ...labelStyle, marginBottom: '0.35rem' }}>Preferred Contact Method</legend>
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
        <span style={{ fontSize: '0.78rem', color: 'var(--ink-faint)' }}>PDF, JPG, PNG or DWG — max 10MB</span>
      </div>

      {state?.error && (
        <p role="alert" style={{ gridColumn: '1 / -1', color: 'var(--accent)', fontSize: '0.9rem', margin: 0 }}>
          {state.error}
        </p>
      )}

      <div style={{ gridColumn: '1 / -1', marginTop: '0.5rem' }}>
        <button type="submit" disabled={pending} className="btn-primary" style={{ width: '100%', padding: '1.15rem', opacity: pending ? 0.7 : 1 }}>
          {pending ? 'Submitting…' : 'Submit Request'}
        </button>
      </div>
    </form>
  );
}
