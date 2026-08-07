'use client';

import { useActionState } from 'react';
import { submitConsultation, type ConsultationFormState } from './actions';

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

const EMIRATES = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Al Ain'];

const initialState: ConsultationFormState = {};

export default function ConsultationForm() {
  const [state, formAction, pending] = useActionState(submitConsultation, initialState);

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
      <div style={{ ...fieldStyle, gridColumn: '1 / -1' }}>
        <label htmlFor="visitType" style={labelStyle}>
          Consultation Type *
        </label>
        <select id="visitType" name="visitType" className="form-input" defaultValue="Site Visit" required>
          <option value="Site Visit">Site Visit</option>
          <option value="Video Call">Video Call</option>
          <option value="Phone Call">Phone Call</option>
        </select>
      </div>

      <div style={fieldStyle}>
        <label htmlFor="name" style={labelStyle}>
          Your Name *
        </label>
        <input id="name" name="name" type="text" required className="form-input" />
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
        <label htmlFor="projectStage" style={labelStyle}>
          Project Stage *
        </label>
        <select id="projectStage" name="projectStage" className="form-input" defaultValue="Just an idea" required>
          <option value="Just an idea">Just an idea</option>
          <option value="Concept stage">Concept stage</option>
          <option value="Design in progress">Design in progress</option>
          <option value="Build / fit-out">Build / fit-out</option>
          <option value="Already operating">Already operating</option>
        </select>
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

      <div style={fieldStyle}>
        <label htmlFor="address" style={labelStyle}>
          Site Address
        </label>
        <input id="address" name="address" type="text" placeholder="Building, street, area" className="form-input" />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="preferredDate" style={labelStyle}>
          Preferred Date
        </label>
        <input id="preferredDate" name="preferredDate" type="date" className="form-input" />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="preferredTime" style={labelStyle}>
          Preferred Time
        </label>
        <select id="preferredTime" name="preferredTime" className="form-input" defaultValue="Morning (9 AM – 12 PM)">
          <option value="Morning (9 AM – 12 PM)">Morning (9 AM – 12 PM)</option>
          <option value="Afternoon (12 PM – 4 PM)">Afternoon (12 PM – 4 PM)</option>
          <option value="Evening (4 PM – 8 PM)">Evening (4 PM – 8 PM)</option>
        </select>
      </div>

      <div style={{ ...fieldStyle, gridColumn: '1 / -1' }}>
        <label htmlFor="notes" style={labelStyle}>
          Anything we should prepare?
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="Menu concept, kitchen size, equipment already owned, etc."
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
          {pending ? 'Booking…' : 'Book Consultation'}
        </button>
        <p style={{ fontSize: '0.78rem', color: 'var(--ink-faint)', marginTop: '0.75rem', textAlign: 'center' }}>
          Booking is free. No obligation to proceed with any purchase.
        </p>
      </div>
    </form>
  );
}
