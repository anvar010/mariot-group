'use client';

import { useActionState, useState } from 'react';
import { createBrand, type BrandFormState } from './actions';

const labelStyle: React.CSSProperties = {
  fontSize: '0.7rem',
  fontWeight: 700,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'var(--ink-soft)',
};

const fieldStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '0.55rem' };

const initialState: BrandFormState = {};

export default function NewBrandForm() {
  const [state, formAction, pending] = useActionState(createBrand, initialState);
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className="btn-primary" style={{ marginBottom: '2rem' }}>
        + New Brand
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
        padding: 'clamp(1.5rem, 3vw, 2rem)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
        gap: '1.25rem',
        marginBottom: '2.5rem',
      }}
    >
      <div style={fieldStyle}>
        <label htmlFor="name" style={labelStyle}>Brand Name *</label>
        <input id="name" name="name" type="text" required className="form-input" />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="categories" style={labelStyle}>Categories (comma-separated)</label>
        <input id="categories" name="categories" type="text" placeholder="Cooking, Refrigeration-line" className="form-input" />
      </div>

      <div style={{ ...fieldStyle, gridColumn: '1 / -1' }}>
        <label htmlFor="logoFile" style={labelStyle}>Logo Upload *</label>
        <input id="logoFile" name="logoFile" type="file" accept="image/*" required className="form-input" style={{ padding: '0.7rem 0.9rem', fontSize: '0.9rem' }} />
      </div>

      {state?.error && (
        <p role="alert" style={{ gridColumn: '1 / -1', color: 'var(--accent)', fontSize: '0.9rem', margin: 0 }}>
          {state.error}
        </p>
      )}

      <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '0.75rem' }}>
        <button type="submit" disabled={pending} className="btn-primary" style={{ opacity: pending ? 0.7 : 1 }}>
          {pending ? 'Saving…' : 'Save Brand'}
        </button>
        <button type="button" onClick={() => setOpen(false)} className="btn-secondary">
          Cancel
        </button>
      </div>
    </form>
  );
}
