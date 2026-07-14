'use client';

import React, { useState, useEffect, useRef } from 'react';

interface CinematicCapabilitiesProps {
  dict: any;
}

export default function CinematicCapabilities({ dict }: CinematicCapabilitiesProps) {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);
  const [expandedPaths, setExpandedPaths] = useState<Record<string, boolean>>({ "0": true });
  const [activeLeafPath, setActiveLeafPath] = useState<string>("0-0");

  const togglePath = (path: string) => {
    setExpandedPaths(prev => ({ ...prev, [path]: !prev[path] }));
  };

  const equipmentTree = [
    {
      title: dict.eq_cutting_title || "재단기",
      children: [
        { title: dict.eq_laser_title || "레이저 커팅기", desc: dict.eq_laser_desc || "co2레이저 컷팅기. 도면 설계에 용이함.", qty: 1, image: "/equipment/레이저커팅기.jpeg" },
        { title: dict.eq_highpress_title || "고속 프레스", desc: dict.eq_highpress_desc || "롤 형태의 원단을 빠르게 재단할 수 있음.", qty: 2, image: "/equipment/고속프레스.jpeg" },
        { title: dict.eq_leathercut_title || "가죽 재단기", desc: dict.eq_leathercut_desc || "가죽 재단하는 기계임.", qty: 1, image: "/equipment/가죽재단기.jpeg" }
      ]
    },
    {
      title: dict.eq_sewing_title || "봉제기",
      children: [
        { title: dict.eq_normal_sewing_title || "일반 봉제기", desc: dict.eq_normal_sewing_desc || "가죽 또는 원단을 봉제할 수 있음.", qty: 3, image: "/equipment/봉제기.jpeg" },
        { title: dict.eq_tarp_sewing_title || "타프 봉제기", desc: dict.eq_tarp_sewing_desc || "가죽 또는 원단을 봉제할 수 있음 (굴곡진 면을 봉제할 때 사용함).", qty: 2, image: "/equipment/타프봉제기.jpeg" },
        { title: dict.eq_post_sewing_title || "말뚝형 봉제기", desc: dict.eq_post_sewing_desc || "가죽 제품의 깊은 면을 봉제할 때 사용하는 특수 미싱임.", qty: 1, image: "/equipment/말뚝형봉제기.jpeg" },
        { title: dict.eq_comp_sewing_title || "컴퓨터 봉제기", desc: dict.eq_comp_sewing_desc || "컴퓨터에 입력된 위치로 봉제가 용이함.", qty: 3, image: "/equipment/컴퓨터봉제기.jpeg" }
      ]
    },
    {
      title: dict.eq_press_title || "프레스 및 성형",
      children: [
        { title: dict.eq_heat_press_title || "열 프레스", desc: dict.eq_heat_press_desc || "열을 가해서 가죽을 접착할 수 있으며 금형으로 가죽을 성형할 수도 있음.", qty: 9, image: "/equipment/열프레스.jpeg" },
        { title: dict.eq_hot_stamp_title || "불박기", desc: dict.eq_hot_stamp_desc || "각인 작업에 용이함.", qty: 3, image: "/equipment/불박기.jpeg" }
      ]
    },
    {
      title: dict.eq_finish_title || "마감 및 기타 장비",
      children: [
        { title: dict.eq_skiving_title || "가죽 피할기", desc: dict.eq_skiving_desc || "가죽을 부분적으로 두께 조절할 수 있음.", qty: 1, image: "/equipment/가죽피할기.jpeg" },
        { title: dict.eq_dryer_title || "컨베어 건조기", desc: dict.eq_dryer_desc || "제품의 엣지코팅(기리메) 작업 후 빠른 건조를 위한 건조 장비임.", qty: 1, image: "/equipment/건조기.jpeg" },
        { title: dict.eq_gluing_title || "본드 접착기", desc: dict.eq_gluing_desc || "가죽 또는 원단에 본드 칠 할 때 사용함.", qty: 1, image: "/equipment/본드접착기.jpeg" }
      ]
    }
  ];

  const getAllLeaves = (nodes: any[], prefix = "") => {
    let leaves: { path: string; node: any }[] = [];
    nodes.forEach((n, i) => {
      const currentPath = prefix ? `${prefix}-${i}` : `${i}`;
      if (!n.children || n.children.length === 0) {
        leaves.push({ path: currentPath, node: n });
      } else {
        leaves = leaves.concat(getAllLeaves(n.children, currentPath));
      }
    });
    return leaves;
  };
  const allLeaves = getAllLeaves(equipmentTree);

  const activeLeafIndex = allLeaves.findIndex(leaf => leaf.path === activeLeafPath);
  const activeNode = activeLeafIndex >= 0 ? allLeaves[activeLeafIndex].node : allLeaves[0].node;

  const handlePrev = () => {
    const newIndex = activeLeafIndex > 0 ? activeLeafIndex - 1 : allLeaves.length - 1;
    setActiveLeafPath(allLeaves[newIndex].path);
  };

  const handleNext = () => {
    const newIndex = activeLeafIndex < allLeaves.length - 1 ? activeLeafIndex + 1 : 0;
    setActiveLeafPath(allLeaves[newIndex].path);
  };
  const renderTree = (nodes: any[], prefix = "", level = 0) => {
    return nodes.map((node, i) => {
      const currentPath = prefix ? `${prefix}-${i}` : `${i}`;
      const isLeaf = !node.children || node.children.length === 0;

      if (isLeaf) {
        const isActive = activeLeafPath === currentPath;
        return (
          <div 
            key={currentPath} 
            onClick={() => setActiveLeafPath(currentPath)}
            className={`cursor-pointer transition-all duration-300 overflow-hidden mb-1 md:mb-2 w-fit max-w-full ${
              isActive 
                ? 'bg-white/10 backdrop-blur-md border border-white/20 rounded-[12px] md:rounded-[20px] p-3 md:p-5 shadow-2xl' 
                : 'bg-transparent hover:bg-white/5 rounded-[8px] md:rounded-[12px] px-2 py-1 md:px-3 md:py-2'
            }`}
          >
            {!isActive ? (
              <div className="flex items-center gap-2 md:gap-3 text-white/70">
                <div className="w-[4px] h-[4px] md:w-[6px] md:h-[6px] rounded-full bg-[#c2a378]" />
                <span className="text-[13px] md:text-[16px] font-medium">{node.title}</span>
                {node.qty && (
                  <span className="text-[#c2a378] text-[11px] md:text-[13px] font-bold bg-[#c2a378]/10 px-1.5 md:px-2 py-0.5 rounded-full">
                    {node.qty}대
                  </span>
                )}
              </div>
            ) : (
              <div className="text-left animate-in fade-in duration-500">
                <p className="text-[12px] md:text-[15px] text-white/90 leading-[1.4] md:leading-[1.6] break-keep">
                  <strong className="text-white flex items-center justify-start gap-2 md:gap-3 mb-1.5 md:mb-2 text-[14px] md:text-[18px]">
                    <span>{node.title}</span>
                    {node.qty && (
                      <span className="text-[#c2a378] text-[11px] md:text-[14px] font-bold bg-[#c2a378]/20 px-2 py-0.5 md:px-3 md:py-1 rounded-full">
                        {node.qty}대
                      </span>
                    )}
                  </strong>
                  <span className="text-white/80 block mt-1">{node.desc}</span>
                </p>
              </div>
            )}
          </div>
        );
      } else {
        const isExpanded = !!expandedPaths[currentPath];
        return (
          <div key={currentPath} className="flex flex-col mb-1">
            <button 
              onClick={() => togglePath(currentPath)}
              className={`flex items-center gap-1 md:gap-2 text-white/90 hover:text-white transition-colors py-1.5 md:py-2 px-2 md:px-3 rounded-[8px] md:rounded-[12px] hover:bg-white/5 w-fit text-left ${
                level === 0 ? 'mt-2 md:mt-4' : ''
              }`}
            >
              <span className={`${level === 0 ? 'text-[15px] md:text-[20px] font-bold text-[#c2a378]' : 'text-[13px] md:text-[16px] font-semibold text-white/80'}`}>
                {node.title}
              </span>
              <svg className={`w-4 h-4 md:w-5 md:h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`flex flex-col gap-1 pl-4 overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[2000px] opacity-100 mt-2 mb-4' : 'max-h-0 opacity-0'}`}>
              {renderTree(node.children, currentPath, level + 1)}
            </div>
          </div>
        );
      }
    });
  };

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

        /* Custom scrollbar for menu */
        .menu-scroll::-webkit-scrollbar {
          width: 0px;
          background: transparent;
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
            className="text-[36px] md:text-[80px] font-extrabold tracking-[-2px] leading-[1.2] mb-6 break-keep anim-fade-up text-[#ffffff] drop-shadow-xl"
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
          className="relative z-20 -mt-[50vh] min-h-[100vh] flex items-center justify-center px-5 lg:px-[10vw] observer-target"
          ref={setRef}
        >
          <div className="bg-white/85 backdrop-blur-[15px] p-6 md:p-[50px] rounded-[24px] md:rounded-[30px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] max-w-[650px] anim-fade-up">
            <span className="font-['Urbanist'] text-[14px] md:text-[16px] text-[#8b7355] font-extrabold tracking-[4px] uppercase mb-3 md:mb-5 block">
              Stage 01
            </span>
            <h2 className="text-[32px] md:text-[48px] font-extrabold tracking-[-2px] leading-[1.1] mb-4 break-keep text-[#1d1d1f]">
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

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="h-[100vh]"></div>
          
          <div className="sticky top-[50vh] h-[50vh] z-20 flex flex-col justify-start">
            <div 
              className="-translate-y-1/2 flex items-center justify-center observer-target pointer-events-auto"
              ref={setRef}
            >
              <div className="text-center max-w-[800px] px-5 anim-fade-up">
                <span className="font-['Urbanist'] text-[14px] md:text-[16px] text-[#c2a378] font-extrabold tracking-[4px] uppercase mb-3 md:mb-5 block">
                  Stage 02
                </span>
                <h2 className="text-[40px] md:text-[72px] font-extrabold tracking-[-2px] leading-[1.1] mb-4 md:mb-6 break-keep text-[#ffffff]">
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
          <div className="bg-black/50 backdrop-blur-xl p-6 md:p-[60px] rounded-[24px] md:rounded-[30px] border border-white/10 shadow-2xl max-w-[800px] w-full anim-slide-left">
            <span className="font-['Urbanist'] text-[14px] md:text-[16px] text-[#c2a378] font-extrabold tracking-[4px] uppercase mb-3 md:mb-5 block">
              Stage 03
            </span>
            <h2 data-i18n="stage3_title" className="text-[32px] md:text-[56px] font-extrabold tracking-[-2px] leading-[1.1] mb-4 md:mb-6 break-keep text-white">
              {dict.s3_title}
            </h2>
            <p className="text-[18px] md:text-[20px] font-normal text-white/80 leading-[1.6] break-keep">
              {dict.s3_desc}
            </p>
            
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

      {/* [연출 5] 특수 미싱 : 비디오 배경 + 글래스모피즘 벤토 그리드 */}
      <section className="relative min-h-[150vh] bg-[#000]">
        <div className="sticky top-0 left-0 w-full h-[100vh] overflow-hidden z-10">
          <video 
            src="/sewing.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover brightness-[0.5]" 
          />
        </div>
        
        <div 
          className="relative z-20 -mt-[100vh] min-h-[100vh] pt-[15vh] pb-[15vh] px-[5vw] flex flex-col justify-center observer-target"
          ref={setRef}
        >
          <div className="text-center mb-[40px] md:mb-[60px]">
            <span className="font-['Urbanist'] text-[14px] md:text-[16px] text-[#c2a378] font-extrabold tracking-[4px] uppercase mb-3 md:mb-5 block anim-fade-up">
              Stage 04
            </span>
            <h2 className="text-[36px] md:text-[64px] font-extrabold tracking-[-2px] leading-[1.1] mb-4 md:mb-6 break-keep text-[#ffffff] anim-fade-up delay-100">
              {dict.s4_title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1400px] mx-auto w-full">
            <div className="lg:col-span-8 bg-black/40 backdrop-blur-xl rounded-[24px] md:rounded-[32px] p-6 md:p-[60px] border border-white/10 shadow-2xl flex flex-col justify-center anim-scale-up delay-200">
              <h3 className="text-[24px] md:text-[32px] font-extrabold mb-3 md:mb-4 text-[#ffffff]">{dict.s4_c1_t}</h3>
              <p className="text-[16px] md:text-[20px] font-normal text-white/80 leading-[1.6] break-keep">{dict.s4_c1_d}</p>
            </div>
            <div className="lg:col-span-4 bg-[#8b7355]/80 backdrop-blur-xl rounded-[24px] md:rounded-[32px] p-6 md:p-[60px] border border-white/10 shadow-2xl flex flex-col justify-center anim-scale-up delay-300">
              <h3 className="text-[24px] md:text-[32px] font-extrabold text-white mb-3 md:mb-4">{dict.s4_c2_t}</h3>
              <p className="text-[16px] md:text-[20px] font-normal text-white/90 leading-[1.6] break-keep">{dict.s4_c2_d}</p>
            </div>
          </div>
        </div>
      </section>

      {/* [연출 6] 장비 갤러리 (Apple Floating Glassmorphism 스타일) */}
      <section 
        className="py-[120px] px-[5vw] bg-[#111111] text-white observer-target"
        ref={setRef}
      >
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-[32px] md:text-[48px] font-extrabold mb-12 anim-fade-up tracking-tight">
            {dict.gallery_title || "보다 자세히 들여다보기."}
          </h2>

          <div className="relative flex w-full bg-white rounded-[24px] md:rounded-[40px] overflow-hidden anim-fade-up delay-100 h-[480px] md:h-[600px] lg:h-[750px] shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-white/5">
            
            {/* 전체 꽉 찬 배경 (모든 기기 동일) */}
            <div className="absolute inset-0 w-full h-full bg-white overflow-hidden">
              {allLeaves.map(({ path, node }) => (
                <div 
                  key={path}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    activeLeafPath === path 
                      ? 'opacity-100 z-10' 
                      : 'opacity-0 z-0'
                  }`}
                >
                  {/* 앞배경: 모바일은 너무 많은 흰 여백이 안 생기도록 pt와 pb 최적화 */}
                  <img 
                    src={node.image} 
                    alt={node.title}
                    className="absolute inset-0 w-full h-full object-contain object-center lg:object-right lg:pr-[5%] pt-4 pb-[110px] lg:py-12 mix-blend-darken transition-transform duration-700"
                  />
                </div>
              ))}
              {/* 데스크탑 전용 좌측 다크 그라데이션 오버레이 */}
              <div className="hidden lg:block absolute top-0 left-0 w-[900px] h-full bg-gradient-to-r from-[#111111] via-[#111111]/90 to-[#111111]/0 z-20 pointer-events-none" />
            </div>

            {/* 모바일/태블릿 하단 플로팅 설명 박스 & 네비게이션 (< lg) */}
            <div className="absolute bottom-6 md:bottom-8 left-0 w-full px-4 lg:hidden z-30 flex items-center justify-between gap-3">
              
              {/* 이전 화살표 */}
              <button 
                onClick={handlePrev}
                className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-[#1c1c1e]/80 backdrop-blur-xl flex items-center justify-center text-white/80 hover:text-white hover:bg-[#1c1c1e] transition-all shadow-lg border border-white/5"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* 중앙 설명 텍스트 박스 */}
              <div className="flex-1 bg-[#1c1c1e]/90 backdrop-blur-2xl rounded-[20px] md:rounded-[28px] py-4 px-5 md:py-5 md:px-6 shadow-2xl border border-white/10 flex flex-col justify-center transition-all">
                 <strong className="text-white text-[14px] md:text-[16px] mb-1 font-bold flex items-center gap-2">
                   {activeNode.title}
                   {activeNode.qty && <span className="bg-white/10 text-white/90 px-2 py-0.5 rounded-full text-[12px] font-bold">{activeNode.qty}대</span>}
                 </strong>
                 <p className="text-white/70 text-[13px] md:text-[14px] leading-relaxed break-keep">
                   {activeNode.desc}
                 </p>
              </div>

              {/* 다음 화살표 */}
              <button 
                onClick={handleNext}
                className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-[#1c1c1e]/80 backdrop-blur-xl flex items-center justify-center text-white/80 hover:text-white hover:bg-[#1c1c1e] transition-all shadow-lg border border-white/5"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* 데스크탑 좌측 오버레이 메뉴 (>= lg) */}
            <div className="relative z-30 hidden lg:flex w-[480px] h-full flex-col pt-12 pb-12 pl-12 pr-10 bg-transparent">
              <div className="text-[24px] font-extrabold text-[#c2a378] mb-8 flex items-center gap-3 shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                {dict.status_title || "설비 현황"}
              </div>
              
              <div className="flex flex-col flex-1 overflow-y-auto pr-2 menu-scroll pb-10">
                {renderTree(equipmentTree)}
              </div>
            </div>

            {/* 빈 공간 (우측 이미지 노출 영역) */}
            <div className="relative z-30 flex-1 pointer-events-none hidden lg:block"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
