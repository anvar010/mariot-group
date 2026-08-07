'use client';

import { useLanguage } from './LanguageProvider';

export default function LangToggle() {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      aria-label={t('common.switchToArabic')}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        padding: '0.5rem 0.75rem',
        /* Falls back to the ink palette so the control still reads if it is
           ever used outside the header, which owns these two variables. */
        border: '1px solid var(--header-rule, var(--rule))',
        borderRadius: '999px',
        backgroundColor: 'transparent',
        color: 'var(--header-fg, var(--ink))',
        fontSize: '0.78rem',
        fontWeight: 700,
        letterSpacing: '0.04em',
        cursor: 'pointer',
        fontFamily: 'inherit',
        flexShrink: 0,
        transition: 'background-color 0.25s ease',
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      {lang === 'en' ? 'عربي' : 'English'}
    </button>
  );
}
