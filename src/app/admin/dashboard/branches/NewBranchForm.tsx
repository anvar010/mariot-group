'use client';

import { useActionState, useState } from 'react';
import { createBranch, type BranchFormState } from './actions';

const labelStyle: React.CSSProperties = {
  fontSize: '0.7rem',
  fontWeight: 700,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'var(--ink-soft)',
};

const fieldStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '0.55rem' };

const initialState: BranchFormState = {};

export default function NewBranchForm() {
  const [state, formAction, pending] = useActionState(createBranch, initialState);
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className="btn-primary" style={{ marginBottom: '2rem' }}>
        + New Branch
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
        gap: '1.25rem',
        marginBottom: '2.5rem',
      }}
    >
      <div style={fieldStyle}>
        <label htmlFor="name" style={labelStyle}>Branch Name (English) *</label>
        <input id="name" name="name" type="text" placeholder="e.g. Fujairah Branch" required className="form-input" />
      </div>
      <div style={fieldStyle} dir="rtl">
        <label htmlFor="nameAr" style={labelStyle}>اسم الفرع (Arabic)</label>
        <input id="nameAr" name="nameAr" type="text" className="form-input" />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="location" style={labelStyle}>Location (English) *</label>
        <input id="location" name="location" type="text" placeholder="e.g. Fujairah Industrial Area, UAE" required className="form-input" />
      </div>
      <div style={fieldStyle} dir="rtl">
        <label htmlFor="locationAr" style={labelStyle}>الموقع (Arabic)</label>
        <input id="locationAr" name="locationAr" type="text" className="form-input" />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="emirate" style={labelStyle}>Emirate (English) *</label>
        <input id="emirate" name="emirate" type="text" placeholder="e.g. Fujairah" required className="form-input" />
      </div>
      <div style={fieldStyle} dir="rtl">
        <label htmlFor="emirateAr" style={labelStyle}>الإمارة (Arabic)</label>
        <input id="emirateAr" name="emirateAr" type="text" className="form-input" />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="role" style={labelStyle}>Role (English)</label>
        <input id="role" name="role" type="text" placeholder="e.g. Showroom & Sales" className="form-input" />
      </div>
      <div style={fieldStyle} dir="rtl">
        <label htmlFor="roleAr" style={labelStyle}>الدور (Arabic)</label>
        <input id="roleAr" name="roleAr" type="text" className="form-input" />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="email" style={labelStyle}>Email *</label>
        <input id="email" name="email" type="email" required className="form-input" />
      </div>
      <div style={fieldStyle}>
        <label htmlFor="phone" style={labelStyle}>Phone *</label>
        <input id="phone" name="phone" type="text" placeholder="+971 …" required className="form-input" />
      </div>
      <div style={fieldStyle}>
        <label htmlFor="whatsapp" style={labelStyle}>WhatsApp (defaults to phone)</label>
        <input id="whatsapp" name="whatsapp" type="text" placeholder="+971 …" className="form-input" />
      </div>

      <div style={{ ...fieldStyle, gridColumn: '1 / -1' }}>
        <label htmlFor="mapUrl" style={labelStyle}>Google Maps Directions Link *</label>
        <input id="mapUrl" name="mapUrl" type="text" placeholder="https://maps.google.com/?q=…" required className="form-input" />
      </div>
      <div style={{ ...fieldStyle, gridColumn: '1 / -1' }}>
        <label htmlFor="mapEmbed" style={labelStyle}>Google Maps Embed URL *</label>
        <input id="mapEmbed" name="mapEmbed" type="text" placeholder="https://www.google.com/maps/embed?pb=…" required className="form-input" />
      </div>

      {state?.error && (
        <p role="alert" style={{ gridColumn: '1 / -1', color: 'var(--accent)', fontSize: '0.9rem', margin: 0 }}>
          {state.error}
        </p>
      )}

      <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '0.75rem' }}>
        <button type="submit" disabled={pending} className="btn-primary" style={{ opacity: pending ? 0.7 : 1 }}>
          {pending ? 'Saving…' : 'Save Branch'}
        </button>
        <button type="button" onClick={() => setOpen(false)} className="btn-secondary">
          Cancel
        </button>
      </div>
    </form>
  );
}
