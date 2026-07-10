'use client';

import { useEffect, useState } from 'react';

export default function FloatingActionButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
      <a 
        href="mailto:daon0929@naver.com" 
        className="w-12 h-12 bg-white text-stone-700 rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-stone-100 hover:bg-[#f8f7f5] hover:text-amber-700 transition-all duration-300 transform hover:-translate-y-1"
        aria-label="Email Us"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
      </a>
      <a 
        href="tel:07041699233" 
        className="w-12 h-12 bg-white text-stone-700 rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-stone-100 hover:bg-[#f8f7f5] hover:text-amber-700 transition-all duration-300 transform hover:-translate-y-1"
        aria-label="Call Us"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
      </a>
      <button 
        onClick={scrollToTop}
        className={`w-12 h-12 bg-[#8b5e34] text-white rounded-md flex items-center justify-center shadow-lg hover:bg-[#6c4826] transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
      </button>
    </div>
  );
}
