export const fallbackLng = 'en';
export const languages = ['ko', 'en', 'ja', 'zh'] as const;
export type Locale = typeof languages[number];
