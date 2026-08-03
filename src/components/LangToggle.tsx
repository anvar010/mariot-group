'use client';

import { useEffect, useState } from 'react';

type Lang = 'en' | 'ar';

export default function LangToggle() {
  const [lang, setLang] = useState<Lang>('en');

  const apply = (next: Lang) => {
    setLang(next);
    document.documentElement.lang = next;
    document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('mariot-lang', next);
  };

  useEffect(() => {
    if (localStorage.getItem('mariot-lang') === 'ar') {
      apply('ar');
    }
  }, []);

  return (
    <button
      onClick={() => apply(lang === 'en' ? 'ar' : 'en')}
      aria-label={lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        padding: '0.5rem 0.75rem',
        border: '1px solid var(--rule)',
        borderRadius: '999px',
        backgroundColor: 'transparent',
        color: 'var(--ink)',
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
