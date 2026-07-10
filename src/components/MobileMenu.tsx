'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MobileMenuProps {
  lng: string;
  dict: {
    about: string;
    capabilities: string;
    showroom: string;
    contact: string;
  };
}

export default function MobileMenu({ lng, dict }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden flex items-center ml-4">
      <button 
        onClick={toggleMenu}
        className="text-gray-600 hover:text-amber-600 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg border-b border-gray-100 py-4 px-6 flex flex-col space-y-5 animate-in slide-in-from-top-2 duration-200 z-50">
          <Link href={`/${lng}/about`} onClick={closeMenu} className={`text-lg font-medium transition-colors ${pathname.includes('/about') ? 'text-amber-600' : 'text-gray-800 hover:text-amber-600'}`}>
            {dict.about}
          </Link>
          <div className="w-full h-[1px] bg-gray-100"></div>
          <Link href={`/${lng}/capabilities`} onClick={closeMenu} className={`text-lg font-medium transition-colors ${pathname.includes('/capabilities') ? 'text-amber-600' : 'text-gray-800 hover:text-amber-600'}`}>
            {dict.capabilities}
          </Link>
          <div className="w-full h-[1px] bg-gray-100"></div>
          <Link href={`/${lng}/showroom`} onClick={closeMenu} className={`text-lg font-medium transition-colors ${pathname.includes('/showroom') ? 'text-amber-600' : 'text-gray-800 hover:text-amber-600'}`}>
            {dict.showroom}
          </Link>
          <div className="w-full h-[1px] bg-gray-100"></div>
          <Link href={`/${lng}/contact`} onClick={closeMenu} className={`text-lg font-medium transition-colors ${pathname.includes('/contact') ? 'text-amber-600' : 'text-gray-800 hover:text-amber-600'}`}>
            {dict.contact}
          </Link>
        </div>
      )}
    </div>
  );
}
