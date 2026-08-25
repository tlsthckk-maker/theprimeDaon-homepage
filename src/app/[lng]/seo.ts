import type { Metadata } from 'next';

export function generatePageMetadata(lng: string, path: string = ''): Metadata {
  const baseUrl = 'https://www.primedaon.com';
  const route = path ? `/${lng}/${path}` : `/${lng}`;
  const suffix = path ? `/${path}` : '';
  
  return {
    alternates: {
      canonical: `${baseUrl}${route}`,
      languages: {
        'ko': `/ko${suffix}`,
        'en': `/en${suffix}`,
        'ja': `/ja${suffix}`,
        'zh': `/zh${suffix}`,
        'x-default': `/ko${suffix}`,
      },
    },
  };
}
