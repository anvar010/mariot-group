'use client';

import { useActionState, useState } from 'react';
import { createCapability, type CapabilityFormState } from './actions';

const labelStyle: React.CSSProperties = {
  fontSize: '0.7rem',
  fontWeight: 700,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'var(--ink-soft)',
};

const fieldStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '0.55rem' };

const initialState: CapabilityFormState = {};

export default function NewCapabilityForm() {
  const [state, formAction, pending] = useActionState(createCapability, initialState);
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className="btn-secondary" style={{ marginBottom: '1.5rem' }}>
        + New Capability
      </button>
    );
  }

  return (
    <form
      action={async (formData) => {
        await formAction(formData);
        setOpen(false);
      }}
      style={{
        backgroundColor: 'var(--surface)',
        border: '1px solid var(--rule)',
        borderRadius: 'var(--radius)',
        padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
        gap: '1.1rem',
        marginBottom: '2rem',
      }}
    >
      <div style={fieldStyle}>
        <label htmlFor="cap-title" style={labelStyle}>Title (English) *</label>
        <input id="cap-title" name="title" type="text" required className="form-input" />
      </div>
      <div style={fieldStyle} dir="rtl">
        <label htmlFor="cap-titleAr" style={labelStyle}>العنوان (Arabic)</label>
        <input id="cap-titleAr" name="titleAr" type="text" className="form-input" />
      </div>

      <div style={{ ...fieldStyle, gridColumn: '1 / -1' }}>
        <label htmlFor="cap-desc" style={labelStyle}>Description (English) *</label>
        <input id="cap-desc" name="desc" type="text" required className="form-input" />
      </div>
      <div style={{ ...fieldStyle, gridColumn: '1 / -1' }} dir="rtl">
        <label htmlFor="cap-descAr" style={labelStyle}>الوصف (Arabic)</label>
        <input id="cap-descAr" name="descAr" type="text" className="form-input" />
      </div>

      {state?.error && (
        <p role="alert" style={{ gridColumn: '1 / -1', color: 'var(--accent)', fontSize: '0.9rem', margin: 0 }}>
          {state.error}
        </p>
      )}

      <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '0.75rem' }}>
        <button type="submit" disabled={pending} className="btn-primary" style={{ opacity: pending ? 0.7 : 1 }}>
          {pending ? 'Saving…' : 'Save Capability'}
        </button>
        <button type="button" onClick={() => setOpen(false)} className="btn-secondary">
          Cancel
        </button>
      </div>
    </form>
  );
}
