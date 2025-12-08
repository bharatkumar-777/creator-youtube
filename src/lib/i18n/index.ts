import en from './locales/en.json';
import es from './locales/es.json';

export type Locale = 'en' | 'es';

export const locales: Record<Locale, typeof en> = {
  en,
  es,
};

export function getTranslations(locale: Locale = 'en') {
  return locales[locale] || locales.en;
}

