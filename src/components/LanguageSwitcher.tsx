'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher({ currentLng }: { currentLng: string }) {
  const pathname = usePathname();
  
  const getRedirectUrl = (targetLng: string) => {
    if (!pathname) return `/${targetLng}`;
    const segments = pathname.split('/');
    // pathname starts with '/' so segments[0] is empty string, segments[1] is the current language code
    if (segments.length > 1) {
      segments[1] = targetLng;
    }
    return segments.join('/');
  };

  const languages = [
    { code: 'ko', label: 'KR' },
    { code: 'en', label: 'EN' },
    { code: 'ja', label: 'JA' },
    { code: 'zh', label: 'ZH' }
  ];

  return (
    <div className="flex items-center space-x-4 text-sm font-medium">
      {languages.map((l) => (
        <Link 
          key={l.code}
          href={getRedirectUrl(l.code)} 
          className={currentLng === l.code ? 'text-amber-600 font-bold' : 'text-gray-500 hover:text-gray-900 transition-colors'}
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}
