'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface LightCapabilitiesProps {
  dict: any;
}

export default function LightCapabilities({ dict }: LightCapabilitiesProps) {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view', 'opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-[50px]');
          }
        });
      },
      { threshold: 0.1 }
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
    <div className="w-full bg-[#f5f5f7] text-[#1d1d1f] font-sans antialiased overflow-x-hidden pt-[52px]">
      
      {/* Hero Section */}
      <section className="h-[90vh] flex flex-col items-center justify-center text-center container mx-auto px-10 max-w-[1240px]">
        <h1 
          className="text-[56px] md:text-[88px] font-extrabold tracking-[-2.5px] leading-[1.05] bg-gradient-to-b from-[#1d1d1f] to-[#434345] text-transparent bg-clip-text opacity-0 translate-y-[50px] transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1)"
          ref={setRef}
          dangerouslySetInnerHTML={{ __html: dict.heroTitle }}
        />
        <p 
          className="mt-6 text-[18px] md:text-[24px] font-normal text-[#86868b] leading-[1.5] break-keep max-w-[700px] mx-auto opacity-0 translate-y-[50px] transition-all duration-1000 delay-200 cubic-bezier(0.16, 1, 0.3, 1)"
          ref={setRef}
        >
          {dict.heroDesc}
        </p>
      </section>

      {/* Grid Section 1 */}
      <section className="py-[80px] pb-[120px] container mx-auto px-10 max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <div 
            className="lg:col-span-8 bg-white rounded-[30px] overflow-hidden relative shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col justify-between opacity-0 translate-y-[50px] transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) group bento-card"
            ref={setRef}
          >
            <div className="p-10 md:p-[50px] relative z-10">
              <h3 
                className="text-[32px] font-extrabold mb-4 tracking-[-0.5px]"
                dangerouslySetInnerHTML={{ __html: dict.card1Title }}
              />
              <p className="text-[18px] text-[#86868b] leading-[1.6] font-normal break-keep">
                {dict.card1Desc}
              </p>
            </div>
            <div className="w-full h-[250px] md:h-[400px] relative overflow-hidden bg-[#f0f0f0] rounded-b-[30px]">
              <div className="w-full h-full transform scale-[1.15] transition-transform duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) img-inner group-[.in-view]:scale-100 group-hover:scale-105 group-hover:duration-500">
                <Image src="/cad_step.jpg" alt="CAD" fill className="object-cover" />
              </div>
            </div>
          </div>
          
          <div 
            className="lg:col-span-4 bg-white rounded-[30px] overflow-hidden relative shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col justify-between opacity-0 translate-y-[50px] transition-all duration-1000 delay-100 cubic-bezier(0.16, 1, 0.3, 1) group bento-card"
            ref={setRef}
          >
            <div className="p-10 md:p-[50px] relative z-10">
              <h3 
                className="text-[32px] font-extrabold mb-4 tracking-[-0.5px]"
                dangerouslySetInnerHTML={{ __html: dict.card2Title }}
              />
              <p className="text-[18px] text-[#86868b] leading-[1.6] font-normal break-keep">
                {dict.card2Desc}
              </p>
            </div>
            <div className="w-full h-[250px] md:h-[300px] relative overflow-hidden bg-[#f0f0f0] rounded-b-[30px]">
              <div className="w-full h-full transform scale-[1.15] transition-transform duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) img-inner group-[.in-view]:scale-100 group-hover:scale-105 group-hover:duration-500">
                <Image src="/laser_step.jpg" alt="Laser" fill className="object-cover" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Grid Section 2 */}
      <section className="pb-[120px] container mx-auto px-10 max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <div 
            className="lg:col-span-4 bg-white rounded-[30px] overflow-hidden relative shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col justify-between opacity-0 translate-y-[50px] transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) group bento-card"
            ref={setRef}
          >
            <div className="p-10 md:p-[50px] relative z-10">
              <h3 
                className="text-[32px] font-extrabold mb-4 tracking-[-0.5px]"
                dangerouslySetInnerHTML={{ __html: dict.card3Title }}
              />
              <p className="text-[18px] text-[#86868b] leading-[1.6] font-normal break-keep">
                {dict.card3Desc}
              </p>
            </div>
            <div className="w-full h-[250px] md:h-[300px] relative overflow-hidden bg-[#f0f0f0] rounded-b-[30px]">
              <div className="w-full h-full transform scale-[1.15] transition-transform duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) img-inner group-[.in-view]:scale-100 group-hover:scale-105 group-hover:duration-500">
                <Image src="/press_step.jpg" alt="Press" fill className="object-cover" />
              </div>
            </div>
          </div>
          
          <div 
            className="lg:col-span-8 bg-white rounded-[30px] overflow-hidden relative shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col justify-between opacity-0 translate-y-[50px] transition-all duration-1000 delay-100 cubic-bezier(0.16, 1, 0.3, 1) group bento-card"
            ref={setRef}
          >
            <div className="p-10 md:p-[50px] relative z-10">
              <h3 
                className="text-[32px] font-extrabold mb-4 tracking-[-0.5px]"
                dangerouslySetInnerHTML={{ __html: dict.card4Title }}
              />
              <p className="text-[18px] text-[#86868b] leading-[1.6] font-normal break-keep">
                {dict.card4Desc}
              </p>
            </div>
            <div className="w-full h-[250px] md:h-[400px] relative overflow-hidden bg-[#f0f0f0] rounded-b-[30px]">
              <div className="w-full h-full transform scale-[1.15] transition-transform duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) img-inner group-[.in-view]:scale-100 group-hover:scale-105 group-hover:duration-500">
                <Image src="/sewing_step.jpg" alt="Sewing" fill className="object-cover" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Infrastructure Stats */}
      <section className="py-[100px] bg-white border-t border-black/5">
        <div className="container mx-auto max-w-[1240px] px-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          
          <div 
            className="opacity-0 translate-y-[50px] transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1)"
            ref={setRef}
          >
            <div className="font-['Urbanist'] text-[80px] font-extrabold text-[#1d1d1f] leading-none mb-4 tracking-[-2px]">
              9
            </div>
            <div className="text-[16px] font-semibold text-[#86868b]">{dict.lblSpec1}</div>
          </div>
          
          <div 
            className="opacity-0 translate-y-[50px] transition-all duration-1000 delay-100 cubic-bezier(0.16, 1, 0.3, 1)"
            ref={setRef}
          >
            <div className="font-['Urbanist'] text-[80px] font-extrabold text-[#1d1d1f] leading-none mb-4 tracking-[-2px]">
              6
            </div>
            <div className="text-[16px] font-semibold text-[#86868b]">{dict.lblSpec2}</div>
          </div>

          <div 
            className="opacity-0 translate-y-[50px] transition-all duration-1000 delay-200 cubic-bezier(0.16, 1, 0.3, 1)"
            ref={setRef}
          >
            <div className="font-['Urbanist'] text-[80px] font-extrabold text-[#1d1d1f] leading-none mb-4 tracking-[-2px]">
              3
            </div>
            <div className="text-[16px] font-semibold text-[#86868b]">{dict.lblSpec3}</div>
          </div>

        </div>
      </section>

    </div>
  );
}
