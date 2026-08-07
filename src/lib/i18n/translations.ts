import en from './en.json';
import ar from './ar.json';

export type Lang = 'en' | 'ar';

/**
 * Shared UI strings (navigation, footer, common buttons, sector-detail page
 * labels) that appear across the site. One JSON file per locale — en.json
 * and ar.json — keeps translators working in a plain key/value file instead
 * of a merged TS object, and both files must carry the same key shape.
 */
const DICTS: Record<Lang, Record<string, unknown>> = { en, ar };

/** Dot-path lookup, e.g. t('nav.home'). Falls back to English, then to the
 *  key itself, so a missing translation never renders blank. */
export function translate(lang: Lang, path: string): string {
  const parts = path.split('.');

  const resolve = (dict: Record<string, unknown>): string | undefined => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let node: any = dict;
    for (const part of parts) {
      node = node?.[part];
      if (node === undefined) return undefined;
    }
    return typeof node === 'string' ? node : undefined;
  };

  return resolve(DICTS[lang]) ?? resolve(DICTS.en) ?? path;
}
