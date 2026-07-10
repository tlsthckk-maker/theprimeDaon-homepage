'use client';

import React, { useEffect, useRef } from 'react';

interface LaserExcellenceProps {
  dict: any;
}

export default function LaserExcellence({ dict }: LaserExcellenceProps) {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );

    revealRefs.current.forEach((el) => {
      if (el) scrollObserver.observe(el);
    });

    return () => scrollObserver.disconnect();
  }, []);

  const setRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="w-full bg-[#f5f5f7] text-[#1d1d1f] font-sans antialiased overflow-x-hidden pt-[60px]">
      <style jsx>{`
        .anim-fade-up { opacity: 0; transform: translateY(50px); transition: 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .in-view .anim-fade-up { opacity: 1; transform: translateY(0); }
      `}</style>

      <div className="relative w-screen h-screen overflow-hidden">
        <div className="fixed top-0 left-0 w-screen h-screen z-10 overflow-hidden">
          <video 
            src="/co2Cutting.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover brightness-[0.65]" 
          />
        </div>
        <div 
          className="relative z-20 w-screen h-screen flex items-center justify-center text-center px-5 observer-target"
          ref={setRef}
        >
          <div className="max-w-[800px] anim-fade-up">
            <h1 
              className="text-[56px] md:text-[72px] font-extrabold tracking-[-2px] leading-[1.1] mb-6 text-[#ffffff] break-keep"
              dangerouslySetInnerHTML={{ __html: dict.h_title }}
            />
            <p className="text-[16px] md:text-[20px] font-normal text-[#cccccc] leading-[1.6] break-keep">
              {dict.h_desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
