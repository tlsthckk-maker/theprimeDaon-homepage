import 'server-only';
import type { Locale } from './settings';

const dictionaries: Record<string, () => Promise<any>> = {
  ko: () => import('./locales/ko.json').then((module) => module.default),
  en: () => import('./locales/en.json').then((module) => module.default),
  ja: () => import('./locales/ja.json').then((module) => module.default),
  zh: () => import('./locales/zh.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  // 폴백도 기본 언어(ko)로 맞춘다. settings.ts 의 fallbackLng 와 일치해야 한다.
  // 참고: 지원하지 않는 lng 는 app/[lng]/layout.tsx 에서 notFound() 로 걸러지므로
  // 이 폴백이 실제로 쓰이는 경우는 거의 없다. 신호를 한 방향으로 통일해 두는 것이 목적이다.
  return dictionaries[locale]?.() ?? dictionaries['ko']();
};
