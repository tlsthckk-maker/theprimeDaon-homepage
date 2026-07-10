import 'server-only';
import type { Locale } from './settings';

const dictionaries: Record<string, () => Promise<any>> = {
  ko: () => import('./locales/ko.json').then((module) => module.default),
  en: () => import('./locales/en.json').then((module) => module.default),
  ja: () => import('./locales/ja.json').then((module) => module.default),
  zh: () => import('./locales/zh.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  return dictionaries[locale]?.() ?? dictionaries['en']();
};
