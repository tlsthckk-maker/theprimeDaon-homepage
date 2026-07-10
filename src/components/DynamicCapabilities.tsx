'use client';

import React, { useEffect, useRef } from 'react';

interface DynamicCapabilitiesProps {
  dict: any;
}

export default function DynamicCapabilities({ dict }: DynamicCapabilitiesProps) {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
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
    <div className="w-full bg-[#000] text-[#fff] font-sans antialiased overflow-x-hidden pt-[60px]">
      <style jsx>{`
        /* =========================================
           다양한 애니메이션 클래스 
           ========================================= */
        .anim-fade-up { opacity: 0; transform: translateY(50px); transition: 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .is-visible .anim-fade-up, .is-visible.anim-fade-up { opacity: 1; transform: translateY(0); }
        
        .anim-slide-left { opacity: 0; transform: translateX(-50px); transition: 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .is-visible .anim-slide-left, .is-visible.anim-slide-left { opacity: 1; transform: translateX(0); }

        .anim-slide-right { opacity: 0; transform: translateX(50px); transition: 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .is-visible .anim-slide-right, .is-visible.anim-slide-right { opacity: 1; transform: translateX(0); }

        .anim-blur { opacity: 0; filter: blur(10px); transition: 1.5s cubic-bezier(0.16, 1, 0.3, 1); }
        .is-visible .anim-blur, .is-visible.anim-blur { opacity: 1; filter: blur(0); }

        .delay-100 { transition-delay: 0.1s; }
        .delay-200 { transition-delay: 0.2s; }
        .delay-300 { transition-delay: 0.3s; }
      `}</style>

      {/* [연출 1] INTRO : 풀스크린 + 중앙 페이드 인 */}
      <section 
        className="relative w-full h-[100vh] flex flex-col items-center justify-center text-center overflow-hidden observer-target"
        ref={setRef}
      >
        <div 
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover z-10 transition-transform duration-[2000ms] ease-out scale-110 [filter:brightness(0.4)] [&.is-visible]:scale-100"
          style={{ backgroundImage: "url('/product_unveil.jpg')" }}
        />
        <div className="relative z-20 px-5">
          <h1 
            className="text-[48px] md:text-[80px] font-extrabold tracking-[-2px] leading-[1.1] mb-6 break-keep anim-fade-up"
            dangerouslySetInnerHTML={{ __html: dict.h_title }}
          />
          <p className="text-[18px] md:text-[20px] font-light text-[#aaa] leading-[1.6] break-keep anim-fade-up delay-200 max-w-[700px] mx-auto">
            {dict.h_desc}
          </p>
        </div>
      </section>

      {/* [연출 2] CAD 설계 : 스티키(Sticky) 스크롤 */}
      <section className="relative h-[150vh]">
        <div 
          className="sticky top-0 left-0 w-full h-[100vh] bg-center bg-cover z-10 [filter:brightness(0.3)]"
          style={{ backgroundImage: "url('/cad_step.jpg')" }}
        />
        <div 
          className="relative z-20 -mt-[50vh] min-h-[100vh] flex items-center justify-start px-[10vw] observer-target"
          ref={setRef}
        >
          <div className="max-w-[600px]">
            <span className="font-['Urbanist'] text-[16px] text-[#8b7355] font-extrabold tracking-[4px] uppercase mb-5 block anim-fade-up">
              Stage 01
            </span>
            <h2 className="text-[48px] md:text-[64px] font-extrabold tracking-[-2px] leading-[1.1] mb-6 break-keep anim-fade-up delay-100">
              {dict.s1_title}
            </h2>
            <p className="text-[20px] font-light text-[#aaa] leading-[1.6] break-keep anim-fade-up delay-200">
              {dict.s1_desc}
            </p>
          </div>
        </div>
      </section>

      {/* [연출 3] 레이저 재단 : 50:50 좌우 분할 슬라이드 */}
      <section 
        className="flex flex-col-reverse lg:flex-row w-full h-auto lg:h-[90vh] bg-[#0a0a0a] overflow-hidden items-center observer-target"
        ref={setRef}
      >
        <div className="flex-1 py-[60px] px-[5vw] lg:pl-[10vw] lg:pr-[5vw]">
          <span className="font-['Urbanist'] text-[16px] text-[#8b7355] font-extrabold tracking-[4px] uppercase mb-5 block anim-slide-left">
            Stage 02
          </span>
          <h2 className="text-[48px] md:text-[64px] font-extrabold tracking-[-2px] leading-[1.1] mb-6 break-keep anim-slide-left delay-100">
            {dict.s2_title}
          </h2>
          <p className="text-[20px] font-light text-[#aaa] leading-[1.6] break-keep anim-slide-left delay-200">
            {dict.s2_desc}
          </p>
        </div>
        <div className="flex-1 w-full h-[400px] lg:h-full anim-slide-right delay-200">
          <img src="/laser_step.jpg" alt="Laser Cutting" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* [연출 4] 고속 프레스 : 거대 타이포그래피 + 블러 */}
      <section 
        className="relative w-full h-[100vh] bg-[#111] flex items-end p-[10vw] observer-target"
        ref={setRef}
      >
        <div 
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover opacity-40 z-10"
          style={{ backgroundImage: "url('/press_step.jpg')" }}
        />
        <div className="relative z-20 max-w-[800px]">
          <span className="font-['Urbanist'] text-[16px] text-[#8b7355] font-extrabold tracking-[4px] uppercase mb-5 block anim-blur">
            Stage 03
          </span>
          <h2 className="text-[56px] md:text-[80px] font-extrabold tracking-[-2px] leading-[1.1] mb-6 break-keep anim-blur delay-100">
            {dict.s3_title}
          </h2>
          <p className="text-[20px] font-light text-[#fff] leading-[1.6] break-keep anim-blur delay-200">
            {dict.s3_desc}
          </p>
        </div>
      </section>

      {/* [연출 5] 특수 미싱 : 비대칭 벤토 그리드 */}
      <section 
        className="py-[120px] px-[5vw] bg-[#000] observer-target"
        ref={setRef}
      >
        <div className="text-center">
          <span className="font-['Urbanist'] text-[16px] text-[#8b7355] font-extrabold tracking-[4px] uppercase mb-5 block anim-fade-up">
            Stage 04
          </span>
          <h2 className="text-[48px] md:text-[64px] font-extrabold tracking-[-2px] leading-[1.1] mb-6 break-keep anim-fade-up delay-100">
            {dict.s4_title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-[60px]">
          <div className="lg:col-span-8 bg-[#151515] rounded-[24px] p-10 md:p-[50px] border border-[#222] flex flex-col justify-center anim-fade-up delay-200">
            <h3 className="text-[32px] font-bold mb-4">{dict.s4_c1_t}</h3>
            <p className="text-[20px] font-light text-[#aaa] leading-[1.6] break-keep">{dict.s4_c1_d}</p>
          </div>
          <div className="lg:col-span-4 bg-[#8b7355] rounded-[24px] p-10 md:p-[50px] border border-[#222] flex flex-col justify-center anim-fade-up delay-300">
            <h3 className="text-[32px] font-bold text-white mb-4">{dict.s4_c2_t}</h3>
            <p className="text-[20px] font-light text-[#eee] leading-[1.6] break-keep">{dict.s4_c2_d}</p>
          </div>
        </div>
      </section>

      {/* [연출 6] 신뢰의 숫자 : 미니멀리즘 데이터 */}
      <section 
        className="pt-[100px] pb-[150px] px-[5vw] bg-[#000] border-t border-[#111] text-center observer-target"
        ref={setRef}
      >
        <h2 className="text-[40px] md:text-[48px] font-extrabold tracking-[-2px] leading-[1.1] mb-6 break-keep anim-fade-up">
          {dict.stat_title}
        </h2>
        
        <div className="flex flex-wrap justify-around gap-10 mt-[60px]">
          <div className="flex-1 min-w-[250px] anim-fade-up delay-100">
            <div className="font-['Urbanist'] text-[80px] font-black leading-none mb-3">9</div>
            <div className="text-[18px] font-bold text-[#8b7355]">{dict.stat_1}</div>
          </div>
          <div className="flex-1 min-w-[250px] anim-fade-up delay-200">
            <div className="font-['Urbanist'] text-[80px] font-black leading-none mb-3">6</div>
            <div className="text-[18px] font-bold text-[#8b7355]">{dict.stat_2}</div>
          </div>
          <div className="flex-1 min-w-[250px] anim-fade-up delay-300">
            <div className="font-['Urbanist'] text-[80px] font-black leading-none mb-3">3</div>
            <div className="text-[18px] font-bold text-[#8b7355]">{dict.stat_3}</div>
          </div>
        </div>
      </section>

    </div>
  );
}
