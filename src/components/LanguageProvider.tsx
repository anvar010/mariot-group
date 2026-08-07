'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { translate, type Lang } from '@/lib/i18n/translations';

type LanguageContextValue = {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (path: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'mariot-lang';

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  const applyToDocument = useCallback((next: Lang) => {
    document.documentElement.lang = next;
    document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
  }, []);

  useEffect(() => {
    // Reads localStorage only after mount so the client's first render still
    // matches the server-rendered 'en' shell — flipping to Arabic here (once,
    // post-hydration) is the standard escape hatch for this exact case.
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'ar') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState('ar');
      applyToDocument('ar');
    }
  }, [applyToDocument]);

  const setLang = useCallback(
    (next: Lang) => {
      setLangState(next);
      applyToDocument(next);
      localStorage.setItem(STORAGE_KEY, next);
    },
    [applyToDocument]
  );

  const toggleLang = useCallback(() => {
    setLang(lang === 'en' ? 'ar' : 'en');
  }, [lang, setLang]);

  const t = useCallback((path: string) => translate(lang, path), [lang]);

  const value = useMemo(
    () => ({ lang, dir: lang === 'ar' ? ('rtl' as const) : ('ltr' as const), setLang, toggleLang, t }),
    [lang, setLang, toggleLang, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
