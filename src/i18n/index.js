import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import es from './locales/es.json';
import hi from './locales/hi.json';

const messages = {
  en,
  es,
  hi
};

const savedLocale = localStorage.getItem('user-locale');
const defaultLocale = savedLocale || 'en';

const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages,
  globalInjection: true
});

export default i18n;
