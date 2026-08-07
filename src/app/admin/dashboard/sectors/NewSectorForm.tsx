'use client';

import { useActionState, useState } from 'react';
import { createSector, type SectorFormState } from './actions';

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

const sectionHeadingStyle: React.CSSProperties = {
  gridColumn: '1 / -1',
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: '1rem',
  margin: '0.5rem 0 0',
  paddingTop: '1rem',
  borderTop: '1px solid var(--rule)',
};

const initialState: SectorFormState = {};

/** name+desc are in English; every *Ar field is the Arabic counterpart shown
 *  on the same page when the visitor's language is Arabic. */
export default function NewSectorForm() {
  const [state, formAction, pending] = useActionState(createSector, initialState);
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className="btn-primary" style={{ marginBottom: '2rem' }}>
        + New Sector
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
      <h3 style={{ ...sectionHeadingStyle, borderTop: 'none', paddingTop: 0 }}>Basics</h3>

      <div style={fieldStyle}>
        <label htmlFor="name" style={labelStyle}>Name (English) *</label>
        <input id="name" name="name" type="text" required className="form-input" />
      </div>
      <div style={fieldStyle} dir="rtl">
        <label htmlFor="nameAr" style={labelStyle}>الاسم (Arabic)</label>
        <input id="nameAr" name="nameAr" type="text" className="form-input" />
      </div>

      <div style={{ ...fieldStyle, gridColumn: '1 / -1' }}>
        <label htmlFor="desc" style={labelStyle}>Short Description (English) *</label>
        <input id="desc" name="desc" type="text" required className="form-input" />
      </div>
      <div style={{ ...fieldStyle, gridColumn: '1 / -1' }} dir="rtl">
        <label htmlFor="descAr" style={labelStyle}>وصف قصير (Arabic)</label>
        <input id="descAr" name="descAr" type="text" className="form-input" />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="photoFile" style={labelStyle}>Photo Upload</label>
        <input id="photoFile" name="photoFile" type="file" accept="image/*" className="form-input" style={{ padding: '0.7rem 0.9rem', fontSize: '0.9rem' }} />
      </div>
      <div style={fieldStyle}>
        <label htmlFor="photoUrl" style={labelStyle}>Or Photo URL</label>
        <input id="photoUrl" name="photoUrl" type="text" placeholder="https://…" className="form-input" />
      </div>

      <h3 style={sectionHeadingStyle}>Detail Page</h3>

      <div style={{ ...fieldStyle, gridColumn: '1 / -1' }}>
        <label htmlFor="h1" style={labelStyle}>Headline (English)</label>
        <input id="h1" name="h1" type="text" className="form-input" />
      </div>
      <div style={{ ...fieldStyle, gridColumn: '1 / -1' }} dir="rtl">
        <label htmlFor="h1Ar" style={labelStyle}>العنوان الرئيسي (Arabic)</label>
        <input id="h1Ar" name="h1Ar" type="text" className="form-input" />
      </div>

      <div style={{ ...fieldStyle, gridColumn: '1 / -1' }}>
        <label htmlFor="subtitle" style={labelStyle}>Subtitle (English)</label>
        <input id="subtitle" name="subtitle" type="text" className="form-input" />
      </div>
      <div style={{ ...fieldStyle, gridColumn: '1 / -1' }} dir="rtl">
        <label htmlFor="subtitleAr" style={labelStyle}>العنوان الفرعي (Arabic)</label>
        <input id="subtitleAr" name="subtitleAr" type="text" className="form-input" />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="delivers" style={labelStyle}>What We Deliver (English, one per line)</label>
        <textarea id="delivers" name="delivers" rows={5} className="form-input" style={{ resize: 'vertical' }} />
      </div>
      <div style={fieldStyle} dir="rtl">
        <label htmlFor="deliversAr" style={labelStyle}>ما نقدمه (Arabic, سطر لكل عنصر)</label>
        <textarea id="deliversAr" name="deliversAr" rows={5} className="form-input" style={{ resize: 'vertical' }} />
      </div>

      <h3 style={sectionHeadingStyle}>Mini Case Study</h3>

      <div style={fieldStyle}>
        <label htmlFor="caseTitle" style={labelStyle}>Case Title (English)</label>
        <input id="caseTitle" name="caseTitle" type="text" className="form-input" />
      </div>
      <div style={fieldStyle} dir="rtl">
        <label htmlFor="caseTitleAr" style={labelStyle}>عنوان دراسة الحالة (Arabic)</label>
        <input id="caseTitleAr" name="caseTitleAr" type="text" className="form-input" />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="caseSub" style={labelStyle}>Case Subtitle (English)</label>
        <input id="caseSub" name="caseSub" type="text" className="form-input" />
      </div>
      <div style={fieldStyle} dir="rtl">
        <label htmlFor="caseSubAr" style={labelStyle}>العنوان الفرعي لدراسة الحالة (Arabic)</label>
        <input id="caseSubAr" name="caseSubAr" type="text" className="form-input" />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="caseHighlights" style={labelStyle}>Highlights (English, &quot;Title :: Text&quot; per line)</label>
        <textarea id="caseHighlights" name="caseHighlights" rows={4} placeholder={'Design & BOQ :: 3D layout with dining, cooking, and pastry zones.'} className="form-input" style={{ resize: 'vertical' }} />
      </div>
      <div style={fieldStyle} dir="rtl">
        <label htmlFor="caseHighlightsAr" style={labelStyle}>أبرز النقاط (Arabic، &quot;عنوان :: نص&quot; لكل سطر)</label>
        <textarea id="caseHighlightsAr" name="caseHighlightsAr" rows={4} className="form-input" style={{ resize: 'vertical' }} />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="caseStats" style={labelStyle}>Stats (English, &quot;Value :: Label&quot; per line)</label>
        <textarea id="caseStats" name="caseStats" rows={3} placeholder={'6 wks :: Total time'} className="form-input" style={{ resize: 'vertical' }} />
      </div>
      <div style={fieldStyle} dir="rtl">
        <label htmlFor="caseStatsAr" style={labelStyle}>الإحصائيات (Arabic، &quot;قيمة :: تسمية&quot; لكل سطر)</label>
        <textarea id="caseStatsAr" name="caseStatsAr" rows={3} className="form-input" style={{ resize: 'vertical' }} />
      </div>

      <h3 style={sectionHeadingStyle}>Closing CTA</h3>

      <div style={fieldStyle}>
        <label htmlFor="ctaTitle" style={labelStyle}>CTA Title (English)</label>
        <input id="ctaTitle" name="ctaTitle" type="text" className="form-input" />
      </div>
      <div style={fieldStyle} dir="rtl">
        <label htmlFor="ctaTitleAr" style={labelStyle}>عنوان الدعوة لاتخاذ إجراء (Arabic)</label>
        <input id="ctaTitleAr" name="ctaTitleAr" type="text" className="form-input" />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="ctaSubtitle" style={labelStyle}>CTA Subtitle (English)</label>
        <input id="ctaSubtitle" name="ctaSubtitle" type="text" className="form-input" />
      </div>
      <div style={fieldStyle} dir="rtl">
        <label htmlFor="ctaSubtitleAr" style={labelStyle}>العنوان الفرعي (Arabic)</label>
        <input id="ctaSubtitleAr" name="ctaSubtitleAr" type="text" className="form-input" />
      </div>

      {state?.error && (
        <p role="alert" style={{ gridColumn: '1 / -1', color: 'var(--accent)', fontSize: '0.9rem', margin: 0 }}>
          {state.error}
        </p>
      )}

      <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '0.75rem' }}>
        <button type="submit" disabled={pending} className="btn-primary" style={{ opacity: pending ? 0.7 : 1 }}>
          {pending ? 'Saving…' : 'Save Sector'}
        </button>
        <button type="button" onClick={() => setOpen(false)} className="btn-secondary">
          Cancel
        </button>
      </div>
    </form>
  );
}
