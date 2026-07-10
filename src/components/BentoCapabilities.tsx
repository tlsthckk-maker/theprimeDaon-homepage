'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface BentoCapabilitiesProps {
  dict: any;
}

export default function BentoCapabilities({ dict }: BentoCapabilitiesProps) {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Trigger hero animation

    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-[30px]');
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

  const setRef = (el: HTMLElement | null, index: number) => {
    revealRefs.current[index] = el;
  };

  return (
    <div className="w-full bg-[#000000] text-[#f5f5f7] font-sans antialiased overflow-x-hidden pt-[52px]">
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-title-anim {
          animation: fadeInUp 1.5s ease-out forwards;
          opacity: 0;
        }
        .hero-desc-anim {
          animation: fadeInUp 1.5s ease-out 0.3s forwards;
          opacity: 0;
        }
      `}</style>
      
      {/* Hero Section (Dynamic Unveil) */}
      <section className="h-[85vh] flex items-center justify-center bg-black relative overflow-hidden">
        <div 
          className={`absolute top-1/2 left-1/2 w-[120%] h-[120%] bg-cover bg-center -translate-x-1/2 -translate-y-1/2 transition-all duration-[1500ms] ease-out z-0 ${
            isMounted ? 'scale-100 brightness-100' : 'scale-110 brightness-[0.7]'
          }`}
          style={{ backgroundImage: "url('/product_unveil.jpg')" }}
        />
        
        <div className="relative z-10 text-center max-w-[900px] px-5">
          <h1 
            className="text-[52px] md:text-[80px] font-extrabold tracking-[-2.5px] leading-[1.08] bg-gradient-to-b from-white to-[#86868b] text-transparent bg-clip-text hero-title-anim"
            dangerouslySetInnerHTML={{ __html: dict.heroTitle }}
          />
          <p className="text-[20px] md:text-[24px] font-normal text-[#86868b] max-w-[600px] mx-auto mt-8 leading-[1.4] break-keep hero-desc-anim">
            {dict.heroDesc}
          </p>
        </div>
      </section>

      {/* Grid Section 1 */}
      <section 
        className="py-[120px] border-t border-[#1d1d1f] container mx-auto px-10 max-w-[1240px] opacity-0 translate-y-[30px] transition-all duration-1000 cubic-bezier(0.25, 1, 0.5, 1)"
        ref={(el) => setRef(el, 0)}
      >
        <h2 
          className="text-[36px] md:text-[48px] font-bold tracking-[-1.5px] mb-[60px] leading-[1.15]"
          dangerouslySetInnerHTML={{ __html: dict.sec1Head }}
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <div className="lg:col-span-8 bg-[#111112] rounded-[22px] overflow-hidden relative border border-[#1d1d1f] flex flex-col justify-between transition-colors duration-500 hover:border-[#333336] group">
            <div className="p-10 md:p-[60px]">
              <h3 className="text-[28px] font-bold mb-4 tracking-[-0.5px]">{dict.card1Title}</h3>
              <p className="text-[17px] text-[#86868b] leading-[1.55] font-light break-keep">{dict.card1Desc}</p>
            </div>
            <div className="w-full h-[320px] relative overflow-hidden bg-[#161617]">
              <Image src="/cad_step.jpg" alt="CAD" fill className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90" />
            </div>
          </div>
          
          <div className="lg:col-span-4 bg-[#111112] rounded-[22px] overflow-hidden relative border border-[#1d1d1f] flex flex-col justify-between transition-colors duration-500 hover:border-[#333336] group">
            <div className="p-10 md:p-[60px]">
              <h3 className="text-[28px] font-bold mb-4 tracking-[-0.5px]">{dict.card2Title}</h3>
              <p className="text-[17px] text-[#86868b] leading-[1.55] font-light break-keep">{dict.card2Desc}</p>
            </div>
            <div className="w-full h-[320px] relative overflow-hidden bg-[#161617]">
              <Image src="/laser_step.jpg" alt="Laser" fill className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90" />
            </div>
          </div>

        </div>
      </section>

      {/* Grid Section 2 */}
      <section 
        className="py-[120px] border-t border-[#1d1d1f] container mx-auto px-10 max-w-[1240px] opacity-0 translate-y-[30px] transition-all duration-1000 cubic-bezier(0.25, 1, 0.5, 1)"
        ref={(el) => setRef(el, 1)}
      >
        <h2 
          className="text-[36px] md:text-[48px] font-bold tracking-[-1.5px] mb-[60px] leading-[1.15]"
          dangerouslySetInnerHTML={{ __html: dict.sec2Head }}
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <div className="lg:col-span-4 bg-[#111112] rounded-[22px] overflow-hidden relative border border-[#1d1d1f] flex flex-col justify-between transition-colors duration-500 hover:border-[#333336] group">
            <div className="p-10 md:p-[60px]">
              <h3 className="text-[28px] font-bold mb-4 tracking-[-0.5px]">{dict.card3Title}</h3>
              <p className="text-[17px] text-[#86868b] leading-[1.55] font-light break-keep">{dict.card3Desc}</p>
            </div>
            <div className="w-full h-[320px] relative overflow-hidden bg-[#161617]">
              <Image src="/press_step.jpg" alt="Press" fill className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90" />
            </div>
          </div>

          <div className="lg:col-span-8 bg-[#111112] rounded-[22px] overflow-hidden relative border border-[#1d1d1f] flex flex-col justify-between transition-colors duration-500 hover:border-[#333336] group">
            <div className="p-10 md:p-[60px]">
              <h3 className="text-[28px] font-bold mb-4 tracking-[-0.5px]">{dict.card4Title}</h3>
              <p className="text-[17px] text-[#86868b] leading-[1.55] font-light break-keep">{dict.card4Desc}</p>
            </div>
            <div className="w-full h-[320px] relative overflow-hidden bg-[#161617]">
              <Image src="/sewing_step.jpg" alt="Sewing" fill className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90" />
            </div>
          </div>
          
        </div>
      </section>

      {/* Grid Section 3 */}
      <section 
        className="py-[120px] border-t border-[#1d1d1f] container mx-auto px-10 max-w-[1240px] opacity-0 translate-y-[30px] transition-all duration-1000 cubic-bezier(0.25, 1, 0.5, 1)"
        ref={(el) => setRef(el, 2)}
      >
        <h2 
          className="text-[36px] md:text-[48px] font-bold tracking-[-1.5px] mb-[60px] leading-[1.15]"
          dangerouslySetInnerHTML={{ __html: dict.sec3Head }}
        />
        <div className="bg-[#111112] rounded-[22px] border border-[#1d1d1f] p-10 md:p-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            
            <div className="border-l border-[#333] pl-6">
              <div className="font-sans text-[64px] font-extrabold text-white leading-none mb-3">
                9 <span className="text-[24px] text-[#86868b] font-normal">Units</span>
              </div>
              <div className="text-[14px] text-[#86868b] font-medium">{dict.lblSpec1}</div>
            </div>

            <div className="border-l border-[#333] pl-6">
              <div className="font-sans text-[64px] font-extrabold text-white leading-none mb-3">
                6 <span className="text-[24px] text-[#86868b] font-normal">Units</span>
              </div>
              <div className="text-[14px] text-[#86868b] font-medium">{dict.lblSpec2}</div>
            </div>

            <div className="border-l border-[#333] pl-6">
              <div className="font-sans text-[64px] font-extrabold text-white leading-none mb-3">
                3 <span className="text-[24px] text-[#86868b] font-normal">Units</span>
              </div>
              <div className="text-[14px] text-[#86868b] font-medium">{dict.lblSpec3}</div>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}
