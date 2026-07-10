'use client';

import React, { useEffect, useRef } from 'react';

interface CinematicCapabilitiesProps {
  dict: any;
}

export default function CinematicCapabilities({ dict }: CinematicCapabilitiesProps) {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
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
    <div className="w-full bg-[#f5f5f7] text-[#1d1d1f] font-sans antialiased pt-[60px]">
      <style jsx>{`
        .anim-fade-up { opacity: 0; transform: translateY(50px); transition: 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .is-visible .anim-fade-up, .is-visible.anim-fade-up { opacity: 1; transform: translateY(0); }
        
        .anim-slide-left { opacity: 0; transform: translateX(-50px); transition: 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .is-visible .anim-slide-left, .is-visible.anim-slide-left { opacity: 1; transform: translateX(0); }

        .anim-slide-right { opacity: 0; transform: translateX(50px); transition: 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .is-visible .anim-slide-right, .is-visible.anim-slide-right { opacity: 1; transform: translateX(0); }

        .anim-scale-up { opacity: 0; transform: scale(0.95); transition: 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .is-visible .anim-scale-up, .is-visible.anim-scale-up { opacity: 1; transform: scale(1); }

        .delay-100 { transition-delay: 0.1s; }
        .delay-200 { transition-delay: 0.2s; }
        .delay-300 { transition-delay: 0.3s; }

        @keyframes bg-zoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        .anim-bg-zoom {
          animation: bg-zoom 15s ease-in-out infinite;
        }
      `}</style>

      {/* [연출 1] INTRO : 풀스크린 + 중앙 페이드 인 (라이트 버전) */}
      <section 
        className="relative w-full h-[100vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#000] observer-target"
        ref={setRef}
      >
        <div className="absolute top-0 left-0 w-full h-full z-10 overflow-hidden">
          <video 
            src="/colormix2.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover brightness-[0.7]" 
          />
        </div>
        <div className="relative z-20 px-5">
          <h1 
            data-i18n="mfg_subtitle"
            className="text-[48px] md:text-[80px] font-extrabold tracking-[-2px] leading-[1.2] mb-6 break-keep anim-fade-up text-[#ffffff] drop-shadow-xl"
            dangerouslySetInnerHTML={{ __html: dict.mfg_subtitle ? dict.mfg_subtitle.replace(', ', ',<br />') : '당신의 비전,<br />정교하게 완성되다.' }}
          />
          <p className="text-[18px] md:text-[22px] font-normal text-[#e5e5ea] leading-[1.6] break-keep anim-fade-up delay-200 max-w-[700px] mx-auto drop-shadow-md">
            {dict.h_desc}
          </p>
        </div>
      </section>

      {/* [연출 2] CAD 설계 : 스티키(Sticky) 스크롤 */}
      <section className="relative h-[150vh]">
        <div 
          className="sticky top-0 left-0 w-full h-[100vh] bg-center bg-cover z-10 [filter:brightness(0.9)]"
          style={{ backgroundImage: "url('/cad_step.jpg')" }}
        />
        <div 
          className="relative z-20 -mt-[50vh] min-h-[100vh] flex items-center justify-start px-[10vw] observer-target"
          ref={setRef}
        >
          <div className="bg-white/85 backdrop-blur-[15px] p-10 md:p-[50px] rounded-[30px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] max-w-[650px] anim-fade-up">
            <span className="font-['Urbanist'] text-[16px] text-[#8b7355] font-extrabold tracking-[4px] uppercase mb-5 block">
              Stage 01
            </span>
            <h2 className="text-[40px] md:text-[48px] font-extrabold tracking-[-2px] leading-[1.1] mb-4 break-keep text-[#1d1d1f]">
              {dict.s1_title}
            </h2>
            <p className="text-[18px] md:text-[20px] font-normal text-[#86868b] leading-[1.6] break-keep">
              {dict.s1_desc}
            </p>
          </div>
        </div>
      </section>

      {/* [연출 3] 레이저 재단 (수정됨) : 풀스크린 비디오 + 스크롤 통과 후 고정 & 동반 상승 */}
      <section className="relative h-[250vh] bg-[#000]">
        {/* 비디오 트랙 */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="sticky top-0 h-[100vh] overflow-hidden z-10">
            <video 
              src="/co2Cutting.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover brightness-[0.65]" 
            />
          </div>
        </div>

        {/* 텍스트 트랙 */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {/* 텍스트가 화면 하단에서부터 스크롤되어 올라오도록 밀어주는 여백 */}
          <div className="h-[100vh]"></div>
          
          {/* 화면 중앙(50vh)에 도달하면 고정되는 컨테이너 */}
          <div className="sticky top-[50vh] h-[50vh] z-20 flex flex-col justify-start">
            <div 
              className="-translate-y-1/2 flex items-center justify-center observer-target pointer-events-auto"
              ref={setRef}
            >
              <div className="text-center max-w-[800px] px-5 anim-fade-up">
                <span className="font-['Urbanist'] text-[16px] text-[#c2a378] font-extrabold tracking-[4px] uppercase mb-5 block">
                  Stage 02
                </span>
                <h2 className="text-[56px] md:text-[72px] font-extrabold tracking-[-2px] leading-[1.1] mb-6 break-keep text-[#ffffff]">
                  {dict.s2_title}
                </h2>
                <p className="text-[18px] md:text-[20px] font-normal text-[#cccccc] leading-[1.6] break-keep">
                  {dict.s2_desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [연출 4] 고속 프레스 : 줌 애니메이션 배경 + 가로 슬라이드 인 텍스트 */}
      <section className="relative h-[150vh]">
        <div className="sticky top-0 left-0 w-full h-[100vh] overflow-hidden z-10">
          <div 
            className="absolute inset-0 bg-center bg-cover anim-bg-zoom"
            style={{ backgroundImage: "url('/HighPress.jpeg')" }}
          />
        </div>
        <div 
          className="relative z-20 -mt-[50vh] min-h-[100vh] flex items-center justify-center px-5 observer-target"
          ref={setRef}
        >
          {/* 왼쪽에서 오른쪽으로 미끄러져 들어오는 효과 (anim-slide-left) */}
          <div className="bg-black/50 backdrop-blur-xl p-10 md:p-[60px] rounded-[30px] border border-white/10 shadow-2xl max-w-[800px] w-full anim-slide-left">
            <span className="font-['Urbanist'] text-[16px] text-[#c2a378] font-extrabold tracking-[4px] uppercase mb-5 block">
              Stage 03
            </span>
            <h2 data-i18n="stage3_title" className="text-[40px] md:text-[56px] font-extrabold tracking-[-2px] leading-[1.1] mb-6 break-keep text-white">
              {dict.s3_title}
            </h2>
            <p className="text-[18px] md:text-[20px] font-normal text-white/80 leading-[1.6] break-keep">
              {dict.s3_desc}
            </p>
            
            {/* 특징 리스트 (체크 아이콘 유지) */}
            <ul className="mt-8 flex flex-wrap gap-6">
              <li data-i18n="feat_quality" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white">
                  <svg className="w-5 h-5 text-[#c2a378]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[18px] font-medium tracking-tight text-white">{dict.feat_quality ? dict.feat_quality.replace(/<i[^>]*><\/i>\s*/g, '') : ''}</span>
              </li>
              <li data-i18n="feat_mass" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white">
                  <svg className="w-5 h-5 text-[#c2a378]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[18px] font-medium tracking-tight text-white">{dict.feat_mass ? dict.feat_mass.replace(/<i[^>]*><\/i>\s*/g, '') : ''}</span>
              </li>
              <li data-i18n="feat_precision" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white">
                  <svg className="w-5 h-5 text-[#c2a378]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[18px] font-medium tracking-tight text-white">{dict.feat_precision ? dict.feat_precision.replace(/<i[^>]*><\/i>\s*/g, '') : ''}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* [연출 5] 특수 미싱 : 애플 스타일 비대칭 벤토 그리드 (라이트 버전) */}
      <section 
        className="py-[120px] px-[5vw] bg-[#f5f5f7] observer-target"
        ref={setRef}
      >
        <div className="text-center">
          <span className="font-['Urbanist'] text-[16px] text-[#8b7355] font-extrabold tracking-[4px] uppercase mb-5 block anim-fade-up">
            Stage 04
          </span>
          <h2 className="text-[48px] md:text-[64px] font-extrabold tracking-[-2px] leading-[1.1] mb-6 break-keep text-[#1d1d1f] anim-fade-up delay-100">
            {dict.s4_title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-[60px]">
          <div className="lg:col-span-8 bg-[#ffffff] rounded-[32px] p-10 md:p-[60px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-black/5 flex flex-col justify-center anim-scale-up delay-200">
            <h3 className="text-[32px] font-extrabold mb-4 text-[#1d1d1f]">{dict.s4_c1_t}</h3>
            <p className="text-[20px] font-normal text-[#86868b] leading-[1.6] break-keep">{dict.s4_c1_d}</p>
          </div>
          <div className="lg:col-span-4 bg-[#8b7355] rounded-[32px] p-10 md:p-[60px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-black/5 flex flex-col justify-center anim-scale-up delay-300">
            <h3 className="text-[32px] font-extrabold text-white mb-4">{dict.s4_c2_t}</h3>
            <p className="text-[20px] font-normal text-white/90 leading-[1.6] break-keep">{dict.s4_c2_d}</p>
          </div>
        </div>
      </section>

      {/* [연출 6] 신뢰의 숫자 : 미니멀리즘 데이터 (라이트 버전) */}
      <section 
        className="pt-[100px] pb-[150px] px-[5vw] bg-[#ffffff] border-t border-black/5 text-center observer-target"
        ref={setRef}
      >
        <h2 className="text-[40px] md:text-[48px] font-extrabold tracking-[-2px] leading-[1.1] mb-6 break-keep text-[#1d1d1f] anim-fade-up">
          {dict.stat_title}
        </h2>
        
        <div className="flex flex-wrap justify-around gap-10 mt-[60px]">
          <div className="flex-1 min-w-[250px] anim-fade-up delay-100">
            <div className="font-['Urbanist'] text-[80px] md:text-[96px] font-extrabold tracking-[-3px] leading-none mb-3 text-[#1d1d1f]">9</div>
            <div className="text-[18px] font-bold text-[#8b7355]">{dict.stat_1}</div>
          </div>
          <div className="flex-1 min-w-[250px] anim-fade-up delay-200">
            <div className="font-['Urbanist'] text-[80px] md:text-[96px] font-extrabold tracking-[-3px] leading-none mb-3 text-[#1d1d1f]">6</div>
            <div className="text-[18px] font-bold text-[#8b7355]">{dict.stat_2}</div>
          </div>
          <div className="flex-1 min-w-[250px] anim-fade-up delay-300">
            <div className="font-['Urbanist'] text-[80px] md:text-[96px] font-extrabold tracking-[-3px] leading-none mb-3 text-[#1d1d1f]">3</div>
            <div className="text-[18px] font-bold text-[#8b7355]">{dict.stat_3}</div>
          </div>
        </div>
      </section>

    </div>
  );
}
