// 기본 언어는 한국어. 국내 B2B 가 주력이다.
// 이 값은 미들웨어(proxy.ts)가 Accept-Language 로 언어를 못 정했을 때 보낼 경로를 정한다.
// hreflang 의 x-default(lib/seo.ts)도 /ko 를 가리키므로 둘이 일치해야 한다.
export const fallbackLng = 'ko';
export const languages = ['ko', 'en', 'ja', 'zh'] as const;
export type Locale = typeof languages[number];
