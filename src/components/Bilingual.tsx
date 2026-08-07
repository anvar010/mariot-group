'use client';

import { useLanguage } from './LanguageProvider';

/** Swaps a piece of CMS content between its English and Arabic value based on
 *  the active site language. Falls back to English when no Arabic value has
 *  been filled in yet, so partially-translated content never renders blank.
 *
 *  `en`/`ar` must be plain data or already-built React elements — never a
 *  function. This is routinely rendered from a Server Component page, and
 *  only serializable values (not closures) can cross that boundary. */
export function Bilingual({ en, ar }: { en: React.ReactNode; ar?: React.ReactNode | null }) {
  const { lang } = useLanguage();
  if (lang === 'ar') {
    if (ar) return <>{ar}</>;
    /* Falling back to English inside an RTL document: without isolating this
       run, the browser's bidi algorithm can visually reorder mixed
       digit+word content (e.g. "4 wks" rendering as "wks 4") and shift
       trailing punctuation to the wrong side. dir="ltr" + unicode-bidi
       isolate keeps the English fallback readable until it's translated. */
    return (
      <span dir="ltr" style={{ unicodeBidi: 'isolate' }}>
        {en}
      </span>
    );
  }
  return <>{en}</>;
}
