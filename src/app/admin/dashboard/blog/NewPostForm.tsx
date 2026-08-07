'use client';

import { useActionState, useState } from 'react';
import { createPost, type PostFormState } from './actions';

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

const initialState: PostFormState = {};

export default function NewPostForm() {
  const [state, formAction, pending] = useActionState(createPost, initialState);
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className="btn-primary" style={{ marginBottom: '2rem' }}>
        + New Post
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
        gap: '1.25rem',
        marginBottom: '2.5rem',
      }}
    >
      <div style={{ ...fieldStyle, gridColumn: '1 / -1' }}>
        <label htmlFor="title" style={labelStyle}>
          Title (English) *
        </label>
        <input id="title" name="title" type="text" required className="form-input" />
      </div>
      <div style={{ ...fieldStyle, gridColumn: '1 / -1' }} dir="rtl">
        <label htmlFor="titleAr" style={labelStyle}>
          العنوان (Arabic)
        </label>
        <input id="titleAr" name="titleAr" type="text" className="form-input" />
      </div>

      <div style={{ ...fieldStyle, gridColumn: '1 / -1' }}>
        <label htmlFor="excerpt" style={labelStyle}>
          Excerpt (English)
        </label>
        <input id="excerpt" name="excerpt" type="text" placeholder="Short summary shown on the blog listing" className="form-input" />
      </div>
      <div style={{ ...fieldStyle, gridColumn: '1 / -1' }} dir="rtl">
        <label htmlFor="excerptAr" style={labelStyle}>
          الملخص (Arabic)
        </label>
        <input id="excerptAr" name="excerptAr" type="text" className="form-input" />
      </div>

      <div style={{ ...fieldStyle, gridColumn: '1 / -1' }}>
        <label htmlFor="content" style={labelStyle}>
          Content (English) *
        </label>
        <textarea id="content" name="content" rows={10} required className="form-input" style={{ resize: 'vertical' }} />
      </div>
      <div style={{ ...fieldStyle, gridColumn: '1 / -1' }} dir="rtl">
        <label htmlFor="contentAr" style={labelStyle}>
          المحتوى (Arabic)
        </label>
        <textarea id="contentAr" name="contentAr" rows={10} className="form-input" style={{ resize: 'vertical' }} />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="coverImage" style={labelStyle}>
          Cover Image
        </label>
        <input id="coverImage" name="coverImage" type="file" accept="image/*" className="form-input" style={{ padding: '0.7rem 0.9rem', fontSize: '0.9rem' }} />
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.93rem', fontWeight: 500 }}>
          <input type="checkbox" name="publishNow" style={{ accentColor: 'var(--primary)' }} />
          Publish immediately
        </label>
      </div>

      {state?.error && (
        <p role="alert" style={{ gridColumn: '1 / -1', color: 'var(--accent)', fontSize: '0.9rem', margin: 0 }}>
          {state.error}
        </p>
      )}

      <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '0.75rem' }}>
        <button type="submit" disabled={pending} className="btn-primary" style={{ opacity: pending ? 0.7 : 1 }}>
          {pending ? 'Saving…' : 'Save Post'}
        </button>
        <button type="button" onClick={() => setOpen(false)} className="btn-secondary">
          Cancel
        </button>
      </div>
    </form>
  );
}
