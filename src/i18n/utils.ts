import { strings, defaultLang, type Lang } from './strings';

export function getLang(currentLocale: string | undefined): Lang {
  return currentLocale === 'en' ? 'en' : defaultLang;
}

export function useT(currentLocale: string | undefined) {
  return strings[getLang(currentLocale)];
}

// Locale-aware path. zh lives at /, en lives at /en/.
export function localePath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  const prefix = lang === 'en' ? '/en' : '';
  return (prefix + '/' + clean).replace(/\/+$/, '') || '/';
}

// The same page in the other language, for the language switch.
export function altLangPath(lang: Lang, path = ''): { lang: Lang; href: string } {
  const other: Lang = lang === 'en' ? 'zh' : 'en';
  return { lang: other, href: localePath(other, path) };
}
