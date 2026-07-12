import { strings, defaultLang, type Lang } from './strings';

const LOCALES: Lang[] = ['zh', 'en', 'ar'];

// Short label shown in the header/footer language switch.
export const LANG_LABEL: Record<Lang, string> = { zh: '中', en: 'EN', ar: 'ع' };

export function getLang(currentLocale: string | undefined): Lang {
  if (currentLocale === 'en') return 'en';
  if (currentLocale === 'ar') return 'ar';
  return defaultLang;
}

export function useT(currentLocale: string | undefined) {
  return strings[getLang(currentLocale)];
}

// Writing direction for the html element.
export function dir(lang: Lang): 'rtl' | 'ltr' {
  return lang === 'ar' ? 'rtl' : 'ltr';
}

// Locale-aware path. zh lives at /, en at /en/, ar at /ar/.
export function localePath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  const prefix = lang === defaultLang ? '' : '/' + lang;
  return (prefix + '/' + clean).replace(/\/+$/, '') || '/';
}

// The same page in the other languages, for the language switch.
export function otherLangs(lang: Lang, path = '') {
  return LOCALES.filter((l) => l !== lang).map((l) => ({
    lang: l,
    label: LANG_LABEL[l],
    href: localePath(l, path),
  }));
}
