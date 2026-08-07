'use client';

import { useActionState, useState } from 'react';
import { createProject, type ProjectFormState } from './actions';

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

const initialState: ProjectFormState = {};

export default function NewProjectForm() {
  const [state, formAction, pending] = useActionState(createProject, initialState);
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className="btn-primary" style={{ marginBottom: '2rem' }}>
        + New Project
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
        <label htmlFor="name" style={labelStyle}>Project Name (English) *</label>
        <input id="name" name="name" type="text" required className="form-input" />
      </div>
      <div style={fieldStyle} dir="rtl">
        <label htmlFor="nameAr" style={labelStyle}>اسم المشروع (Arabic)</label>
        <input id="nameAr" name="nameAr" type="text" className="form-input" />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="category" style={labelStyle}>Category / Sector (English) *</label>
        <input id="category" name="category" type="text" placeholder="e.g. Restaurants" required className="form-input" />
      </div>
      <div style={fieldStyle} dir="rtl">
        <label htmlFor="categoryAr" style={labelStyle}>الفئة (Arabic)</label>
        <input id="categoryAr" name="categoryAr" type="text" className="form-input" />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="location" style={labelStyle}>Location (English)</label>
        <input id="location" name="location" type="text" placeholder="e.g. Dubai Marina" className="form-input" />
      </div>
      <div style={fieldStyle} dir="rtl">
        <label htmlFor="locationAr" style={labelStyle}>الموقع (Arabic)</label>
        <input id="locationAr" name="locationAr" type="text" className="form-input" />
      </div>

      <div style={{ ...fieldStyle, gridColumn: '1 / -1' }}>
        <label htmlFor="description" style={labelStyle}>Description (English) *</label>
        <textarea id="description" name="description" rows={4} required className="form-input" style={{ resize: 'vertical' }} />
      </div>
      <div style={{ ...fieldStyle, gridColumn: '1 / -1' }} dir="rtl">
        <label htmlFor="descriptionAr" style={labelStyle}>الوصف (Arabic)</label>
        <textarea id="descriptionAr" name="descriptionAr" rows={4} className="form-input" style={{ resize: 'vertical' }} />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="scope" style={labelStyle}>Scope of Work (English)</label>
        <input id="scope" name="scope" type="text" placeholder="e.g. Equipment Supply & Installation" className="form-input" />
      </div>
      <div style={fieldStyle} dir="rtl">
        <label htmlFor="scopeAr" style={labelStyle}>نطاق العمل (Arabic)</label>
        <input id="scopeAr" name="scopeAr" type="text" className="form-input" />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="photoFile" style={labelStyle}>Photo Upload</label>
        <input id="photoFile" name="photoFile" type="file" accept="image/*" className="form-input" style={{ padding: '0.7rem 0.9rem', fontSize: '0.9rem' }} />
      </div>
      <div style={fieldStyle}>
        <label htmlFor="photoUrl" style={labelStyle}>Or Photo URL</label>
        <input id="photoUrl" name="photoUrl" type="text" placeholder="https://…" className="form-input" />
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.93rem', fontWeight: 500 }}>
          <input type="checkbox" name="isFabrication" style={{ accentColor: 'var(--primary)' }} />
          List under Fabrication projects
        </label>
      </div>

      {state?.error && (
        <p role="alert" style={{ gridColumn: '1 / -1', color: 'var(--accent)', fontSize: '0.9rem', margin: 0 }}>
          {state.error}
        </p>
      )}

      <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '0.75rem' }}>
        <button type="submit" disabled={pending} className="btn-primary" style={{ opacity: pending ? 0.7 : 1 }}>
          {pending ? 'Saving…' : 'Save Project'}
        </button>
        <button type="button" onClick={() => setOpen(false)} className="btn-secondary">
          Cancel
        </button>
      </div>
    </form>
  );
}
