'use client';

import { useActionState } from 'react';
import { submitUrgentRequest, type UrgentFormState } from './actions';

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
  color: 'var(--accent)',
  marginTop: '0.5rem',
  paddingTop: '1.25rem',
  borderTop: '1px solid var(--rule)',
};

const fieldStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.55rem',
};

const URGENCIES = ['Same day', 'Next 48 hrs', 'This week'];
const PROBLEMS = ['Equipment down / broken', 'Need urgent delivery', 'Need urgent installation', 'Replacement unit needed', 'Spare parts', 'Other'];
const EMIRATES = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Al Ain'];

const initialState: UrgentFormState = {};

export default function UrgentForm() {
  const [state, formAction, pending] = useActionState(submitUrgentRequest, initialState);

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
        <label htmlFor="urgency" style={labelStyle}>
          How urgent is it? *
        </label>
        <select id="urgency" name="urgency" className="form-input" defaultValue={URGENCIES[0]} required>
          {URGENCIES.map((u) => (
            <option key={u} value={u}>
              {u}
            </option>
          ))}
        </select>
      </div>

      <div style={fieldStyle}>
        <label htmlFor="problem" style={labelStyle}>
          Problem Category *
        </label>
        <select id="problem" name="problem" className="form-input" defaultValue={PROBLEMS[0]} required>
          {PROBLEMS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div style={fieldStyle}>
        <label htmlFor="equipmentType" style={labelStyle}>
          Equipment Type (if known)
        </label>
        <input id="equipmentType" name="equipmentType" type="text" placeholder="e.g. Combi oven, walk-in freezer" className="form-input" />
      </div>

      <div style={{ ...fieldStyle, gridColumn: '1 / -1' }}>
        <label htmlFor="description" style={labelStyle}>
          What happened / what you need
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder="Describe the problem in a few lines — we'll ask follow-ups on WhatsApp."
          className="form-input"
          style={{ resize: 'vertical' }}
        />
      </div>

      <div style={{ ...fieldStyle, gridColumn: '1 / -1' }}>
        <label htmlFor="photo" style={labelStyle}>
          Photo of Equipment (recommended)
        </label>
        <input id="photo" name="photo" type="file" accept=".pdf,.jpg,.jpeg,.png" className="form-input" style={{ padding: '0.85rem 1rem', fontSize: '0.9rem' }} />
        <span style={{ fontSize: '0.78rem', color: 'var(--ink-faint)' }}>Upload a photo (PDF/JPG/PNG, max 10MB)</span>
      </div>

      <p style={sectionLabelStyle}>Contact & Location</p>

      <div style={fieldStyle}>
        <label htmlFor="contactName" style={labelStyle}>
          Your Name *
        </label>
        <input id="contactName" name="contactName" type="text" required className="form-input" />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="businessName" style={labelStyle}>
          Business Name
        </label>
        <input id="businessName" name="businessName" type="text" className="form-input" />
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

      <div style={fieldStyle}>
        <label htmlFor="emirate" style={labelStyle}>
          Emirate *
        </label>
        <select id="emirate" name="emirate" className="form-input" defaultValue="Dubai" required>
          {EMIRATES.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>

      {state?.error && (
        <p role="alert" style={{ gridColumn: '1 / -1', color: 'var(--accent)', fontSize: '0.9rem', margin: 0 }}>
          {state.error}
        </p>
      )}

      <div style={{ gridColumn: '1 / -1', marginTop: '0.5rem' }}>
        <button
          type="submit"
          disabled={pending}
          className="btn-primary"
          style={{ width: '100%', padding: '1.15rem', backgroundColor: 'var(--accent)', borderColor: 'var(--accent)', opacity: pending ? 0.7 : 1 }}
        >
          {pending ? 'Sending…' : 'Send Urgent Request'}
        </button>
        <p style={{ fontSize: '0.78rem', color: 'var(--ink-faint)', marginTop: '0.75rem', textAlign: 'center' }}>
          Our on-call engineer will contact you within 30 minutes during working hours.
        </p>
      </div>
    </form>
  );
}
