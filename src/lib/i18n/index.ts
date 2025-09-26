import { browser } from '$app/environment';
import { init, register, waitLocale } from 'svelte-i18n';

const defaultLocale = 'en';

register('en', () => import('./locales/en.json'));
register('pt', () => import('./locales/pt.json'));
register('es', () => import('./locales/es.json'));

function getInitialLocale() {
  if (!browser) return defaultLocale;

  const browserLang = window.navigator.language;
  const supportedLocales = ['en', 'pt', 'es'];

  if (supportedLocales.includes(browserLang)) {
    return browserLang;
  }

  const langCode = browserLang.split('-')[0];
  if (supportedLocales.includes(langCode)) {
    return langCode;
  }

  return defaultLocale;
}

init({
  fallbackLocale: defaultLocale,
  initialLocale: getInitialLocale(),
});

waitLocale();
