import Link from 'next/link';
import { getDictionary } from '@/i18n';
import Image from 'next/image';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import MobileMenu from '@/components/MobileMenu';

export default async function Header({ lng }: { lng: string }) {
  const dict = await getDictionary(lng);

  return (
    <header className="fixed w-full top-0 z-50 bg-white backdrop-blur-md border-b border-gray-100 shadow-sm text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center border-none outline-none bg-transparent">
            <Link href={`/${lng}`} className="flex flex-row items-center hover:opacity-80 transition-opacity border-none outline-none bg-transparent">
              <Image 
                src="/images/CI.png" 
                alt="(주)더프라임다온" 
                width={160} 
                height={50} 
                className="object-contain bg-transparent border-none outline-none"
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 font-medium">
            <Link href={`/${lng}/about`} className="hover:text-amber-600 transition-colors">{dict.header.about}</Link>
            <Link href={`/${lng}/capabilities`} className="hover:text-amber-600 transition-colors">{dict.header.capabilities}</Link>
            <Link href={`/${lng}/showroom`} className="hover:text-amber-600 transition-colors">{dict.header.showroom}</Link>
            <Link href={`/${lng}/contact`} className="hover:text-amber-600 transition-colors">{dict.header.contact}</Link>
          </nav>
          <div className="flex items-center">
            <LanguageSwitcher currentLng={lng} />
            <MobileMenu lng={lng} dict={dict.header} />
          </div>
        </div>
      </div>
    </header>
  );
}
