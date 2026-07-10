import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { languages, fallbackLng } from './i18n/settings';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = languages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const acceptLanguage = request.headers.get('accept-language');
  let locale = fallbackLng;

  if (acceptLanguage) {
    const preferredLocales = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim().split('-')[0]);
    const match = preferredLocales.find(lang => (languages as readonly string[]).includes(lang));
    if (match) {
      locale = match;
    }
  }

  request.nextUrl.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*$).*)'
  ]
};
