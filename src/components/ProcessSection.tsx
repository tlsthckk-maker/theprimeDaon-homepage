'use client';

import React, { useEffect, useRef } from 'react';

interface ProcessSectionProps {
  dict: any;
  lng: string;
}

export default function ProcessSection({ dict, lng }: ProcessSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;

      // The distance available for scrolling within the container
      const scrollableDistance = containerHeight - windowHeight;
      let scrolled = -containerTop;

      if (scrolled < 0) scrolled = 0;
      if (scrolled > scrollableDistance) scrolled = scrollableDistance;

      // Percentage scrolled (0 to 1)
      const scrollPercentage = scrolled / scrollableDistance;

      const trackScrollWidth = trackRef.current.scrollWidth;
      // Calculate how far we need to translate horizontally 
      const maxTranslateX = trackScrollWidth - window.innerWidth + (window.innerWidth * 0.1); 

      const translateX = scrollPercentage * maxTranslateX;
      trackRef.current.style.transform = `translateX(-${translateX}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Trigger once on mount
    handleScroll();

    // Re-calculate on resize
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  if (!dict || !dict.steps) return null;

  return (
    <section className="bg-[#1d1d1f] text-[#f5f5f7]">
      {/* Header */}
      <div className="text-center pt-[120px] pb-[60px] px-5">
        <div className="text-[14px] font-bold text-[#c2a378] tracking-[0.15em] uppercase mb-4">
          Manufacturing Process
        </div>
        <h2 className="text-[36px] md:text-[48px] font-bold mb-6 tracking-tight">
          {dict.section_title}
        </h2>
        <p className="text-[18px] md:text-[21px] text-[#86868b] max-w-[700px] mx-auto leading-relaxed">
          {dict.section_desc}
        </p>
      </div>

      {/* Vertical scroll container giving height to scroll */}
      <div ref={containerRef} className="h-[400vh] relative">
        {/* Sticky wrapper that pins to screen */}
        <div className="sticky top-0 h-[100vh] flex items-center overflow-hidden">
          {/* Track that moves horizontally */}
          <div ref={trackRef} className="flex gap-10 px-[10vw] will-change-transform">
            
            {dict.steps.map((step: any, index: number) => (
              <div 
                key={step.id} 
                className="flex-none w-[320px] md:w-[400px] lg:w-[500px] bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-[50px_40px] flex flex-col justify-between transition-colors duration-300 hover:bg-white/[0.06] hover:border-white/20"
              >
                <div>
                  <span className="inline-block text-[14px] md:text-[16px] text-[#c2a378] font-bold tracking-[0.1em] mb-5 px-[14px] py-[6px] rounded-full bg-[#c2a378]/15">
                    {step.titlePre}
                  </span>
                  <h3 className="text-[24px] md:text-[32px] font-bold mb-2 leading-[1.3]">
                    {step.title}
                  </h3>
                  <div className="text-[16px] md:text-[20px] text-white/40 font-normal mb-8">
                    {step.titleEn}
                  </div>
                  <p className="text-[16px] md:text-[18px] text-[#86868b] leading-[1.6] mb-10 flex-grow">
                    {step.content}
                  </p>
                  
                  <ul className="list-none m-0 pt-[30px] border-t border-white/10 space-y-3 mb-8">
                    {step.checks.map((check: string, i: number) => (
                      <li key={i} className="relative pl-7 text-[15px] md:text-[16px] text-[#d1d1d6]">
                        <span className="absolute left-0 top-[-2px] text-[#c2a378] font-bold text-[20px] leading-none">
                          •
                        </span>
                        {check}
                      </li>
                    ))}
                  </ul>
                </div>

                {step.highlight && (
                  <div className="inline-flex bg-[#c2a378] text-[#1d1d1f] font-bold text-[14px] md:text-[15px] px-5 py-2.5 rounded-xl self-start">
                    {step.highlight}
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
