'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface ExcellenceCapabilitiesProps {
  dict: any;
}

export default function ExcellenceCapabilities({ dict }: ExcellenceCapabilitiesProps) {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-[40px]');
          }
        });
      },
      { threshold: 0.15 }
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
    <div className="w-full bg-[#000000] text-[#f5f5f7] font-sans antialiased overflow-x-hidden pt-[60px]">
      
      {/* Hero Section */}
      <section className="h-[100vh] flex items-center justify-center text-center">
        <div 
          className="container mx-auto px-10 opacity-0 translate-y-[40px] transition-all duration-1000 cubic-bezier(0.25, 1, 0.5, 1)"
          ref={setRef}
        >
          <h1 
            className="text-[60px] lg:text-[88px] font-extrabold tracking-[-3px] leading-none bg-gradient-to-b from-white to-[#666] text-transparent bg-clip-text"
            dangerouslySetInnerHTML={{ __html: dict.heroTitle }}
          />
          <p className="mt-[30px] text-[20px] lg:text-[24px] font-light text-[#86868b] leading-[1.6] break-keep max-w-[800px] mx-auto">
            {dict.heroDesc}
          </p>
        </div>
      </section>

      {/* Stage 01: Split Layout */}
      <section className="relative w-full py-[120px] px-10">
        <div className="container mx-auto max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[80px] items-center">
          <div 
            className="opacity-0 translate-y-[40px] transition-all duration-1000 cubic-bezier(0.25, 1, 0.5, 1)"
            ref={setRef}
          >
            <span className="font-['Urbanist'] text-[#8b7355] text-[16px] font-extrabold tracking-[3px] uppercase mb-4 block">
              Stage 01
            </span>
            <h2 
              className="text-[40px] lg:text-[56px] font-extrabold tracking-[-2px] leading-[1.1] mb-8 break-keep"
              dangerouslySetInnerHTML={{ __html: dict.s1Title }}
            />
            <p className="text-[20px] font-light text-[#86868b] leading-[1.6] break-keep">
              {dict.s1Desc}
            </p>
          </div>
          <div 
            className="opacity-0 translate-y-[40px] transition-all duration-1000 cubic-bezier(0.25, 1, 0.5, 1)"
            ref={setRef}
          >
            <div className="h-[600px] relative rounded-[20px] overflow-hidden border border-[#333]">
              <Image src="/cad_step.jpg" alt="CAD" fill className="object-cover opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Stage 02: Full Bleed Layout */}
      <section className="relative w-full h-[90vh] flex items-center justify-start p-0">
        <div className="absolute inset-0 w-full h-full z-10">
          <Image src="/laser_step.jpg" alt="Laser" fill className="object-cover opacity-70" />
        </div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/90 to-black/20 z-20" />
        
        <div 
          className="relative z-30 max-w-[600px] pl-[10vw] pr-10 opacity-0 translate-y-[40px] transition-all duration-1000 cubic-bezier(0.25, 1, 0.5, 1)"
          ref={setRef}
        >
          <span className="font-['Urbanist'] text-[#ccc] text-[16px] font-extrabold tracking-[3px] uppercase mb-4 block">
            Stage 02
          </span>
          <h2 
            className="text-[40px] lg:text-[56px] font-extrabold tracking-[-2px] leading-[1.1] mb-8 break-keep text-white"
            dangerouslySetInnerHTML={{ __html: dict.s2Title }}
          />
          <p className="text-[20px] font-light text-[#ddd] leading-[1.6] break-keep">
            {dict.s2Desc}
          </p>
        </div>
      </section>

      {/* Stage 03: Asymmetric Bento Layout */}
      <section className="relative w-full py-[120px] px-10">
        <div className="container mx-auto max-w-[1240px]">
          <div 
            className="text-center opacity-0 translate-y-[40px] transition-all duration-1000 cubic-bezier(0.25, 1, 0.5, 1)"
            ref={setRef}
          >
            <span className="font-['Urbanist'] text-[#8b7355] text-[16px] font-extrabold tracking-[3px] uppercase mb-4 block">
              Stage 03
            </span>
            <h2 
              className="text-[40px] lg:text-[56px] font-extrabold tracking-[-2px] leading-[1.1] mb-8 break-keep"
              dangerouslySetInnerHTML={{ __html: dict.s3Title }}
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-[60px]">
            <div 
              className="lg:col-span-8 bg-[#111] rounded-[20px] p-[50px] border border-[#222] flex flex-col justify-center opacity-0 translate-y-[40px] transition-all duration-1000 cubic-bezier(0.25, 1, 0.5, 1)"
              ref={setRef}
            >
              <h3 className="text-[32px] font-bold mb-5">{dict.s3Sub}</h3>
              <p className="text-[20px] font-light text-[#86868b] leading-[1.6] break-keep">
                {dict.s3Desc}
              </p>
            </div>
            
            <div 
              className="lg:col-span-4 bg-[#8b7355] rounded-[20px] p-[50px] border border-[#222] flex flex-col items-center justify-center text-center opacity-0 translate-y-[40px] transition-all duration-1000 cubic-bezier(0.25, 1, 0.5, 1)"
              ref={setRef}
            >
              <div className="text-[80px] font-extrabold font-['Urbanist'] text-white leading-none mb-3">
                10K+
              </div>
              <p className="text-[18px] font-semibold text-white break-keep">
                {dict.s3Kpi}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 04: 3-Column Card Layout */}
      <section className="relative w-full py-[120px] px-10 bg-[#050505]">
        <div className="container mx-auto max-w-[1240px]">
          <div 
            className="opacity-0 translate-y-[40px] transition-all duration-1000 cubic-bezier(0.25, 1, 0.5, 1)"
            ref={setRef}
          >
            <span className="font-['Urbanist'] text-[#8b7355] text-[16px] font-extrabold tracking-[3px] uppercase mb-4 block">
              Stage 04
            </span>
            <h2 
              className="text-[40px] lg:text-[56px] font-extrabold tracking-[-2px] leading-[1.1] mb-8 break-keep"
              dangerouslySetInnerHTML={{ __html: dict.s4Title }}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mt-[60px]">
            <div 
              className="bg-[#111] rounded-[20px] border border-[#222] overflow-hidden opacity-0 translate-y-[40px] transition-all duration-1000 cubic-bezier(0.25, 1, 0.5, 1)"
              ref={setRef}
            >
              <div className="h-[250px] relative border-b border-[#222]">
                 <Image src="/sewing_step.jpg" alt="Sewing" fill className="object-cover opacity-80" />
              </div>
              <div className="p-10 pb-8">
                <h3 className="text-[24px] font-bold mb-4">{dict.c1Title}</h3>
                <p className="text-[16px] font-light text-[#86868b] leading-[1.6] break-keep">{dict.c1Desc}</p>
              </div>
            </div>

            <div 
              className="bg-[#111] rounded-[20px] border border-[#222] overflow-hidden opacity-0 translate-y-[40px] transition-all duration-1000 cubic-bezier(0.25, 1, 0.5, 1)"
              ref={setRef}
            >
              <div className="h-[250px] relative border-b border-[#222]">
                 <Image src="/press_step.jpg" alt="Auto Sewing" fill className="object-cover opacity-80" />
              </div>
              <div className="p-10 pb-8">
                <h3 className="text-[24px] font-bold mb-4">{dict.c2Title}</h3>
                <p className="text-[16px] font-light text-[#86868b] leading-[1.6] break-keep">{dict.c2Desc}</p>
              </div>
            </div>

            <div 
              className="bg-[#111] rounded-[20px] border border-[#222] overflow-hidden opacity-0 translate-y-[40px] transition-all duration-1000 cubic-bezier(0.25, 1, 0.5, 1)"
              ref={setRef}
            >
              <div className="h-[250px] relative border-b border-[#222]">
                 <Image src="/product_unveil.jpg" alt="Hot Stamping" fill className="object-cover opacity-80" />
              </div>
              <div className="p-10 pb-8">
                <h3 className="text-[24px] font-bold mb-4">{dict.c3Title}</h3>
                <p className="text-[16px] font-light text-[#86868b] leading-[1.6] break-keep">{dict.c3Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Stats */}
      <section className="relative w-full py-[120px] px-10 bg-[#0a0a0a] border-y border-[#222]">
        <div className="container mx-auto max-w-[1240px] grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div 
            className="opacity-0 translate-y-[40px] transition-all duration-1000 cubic-bezier(0.25, 1, 0.5, 1)"
            ref={setRef}
          >
            <div className="font-['Urbanist'] text-[72px] font-extrabold text-white mb-2 leading-none">
              9 <span className="text-[24px] text-[#666] font-normal">대</span>
            </div>
            <div className="text-[16px] font-medium text-[#86868b]">{dict.stat1}</div>
          </div>
          
          <div 
            className="opacity-0 translate-y-[40px] transition-all duration-1000 cubic-bezier(0.25, 1, 0.5, 1)"
            ref={setRef}
          >
            <div className="font-['Urbanist'] text-[72px] font-extrabold text-white mb-2 leading-none">
              6 <span className="text-[24px] text-[#666] font-normal">대</span>
            </div>
            <div className="text-[16px] font-medium text-[#86868b]">{dict.stat2}</div>
          </div>

          <div 
            className="opacity-0 translate-y-[40px] transition-all duration-1000 cubic-bezier(0.25, 1, 0.5, 1)"
            ref={setRef}
          >
            <div className="font-['Urbanist'] text-[72px] font-extrabold text-white mb-2 leading-none">
              3 <span className="text-[24px] text-[#666] font-normal">대</span>
            </div>
            <div className="text-[16px] font-medium text-[#86868b]">{dict.stat3}</div>
          </div>
        </div>
      </section>

    </div>
  );
}
