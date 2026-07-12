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
      title: "재단기",
      children: [
        { title: "레이저 재단기", desc: "고정밀 레이저 커팅기로 오차 없는 완벽한 원단 재단이 가능합니다.", image: "/laser_step.jpg" },
        { title: "고속프레스", desc: "대량 생산에 최적화된 고속 프레스 장비로 빠르고 균일한 품질을 보장합니다.", image: "/press_step.jpg" }
      ]
    },
    {
      title: "프레스",
      children: [
        { title: "핸들 프레스", desc: "정밀한 압력이 필요한 작업에 특화된 수동/반자동 프레스입니다.", image: "/press_step.jpg" },
        {
          title: "열프레스",
          children: Array.from({ length: 9 }, (_, i) => ({
            title: `열프레스 ${i + 1}`,
            desc: "일정한 온도와 압력을 가해 접착 및 성형을 수행하는 장비입니다.",
            image: "/press_step.jpg"
          }))
        }
      ]
    },
    {
      title: "미싱",
      children: [
        {
          title: "봉제미싱",
          children: Array.from({ length: 5 }, (_, i) => ({
            title: `봉제미싱 ${i + 1}`,
            desc: "견고한 마감 처리와 세밀한 스티치 작업을 수행하는 기본 미싱기입니다.",
            image: "/sewing_step.jpg"
          }))
        },
        {
          title: "터프형미싱",
          children: Array.from({ length: 2 }, (_, i) => ({
            title: `터프형미싱 ${i + 1}`,
            desc: "두꺼운 원단이나 가죽 등 강도가 높은 소재를 견고하게 봉제하는 특수 미싱기입니다.",
            image: "/sewing_step.jpg"
          }))
        },
        { title: "말뚝형미싱", desc: "입체적인 구조물이나 원통형 제품의 모서리, 곡면 봉제에 특화된 장비입니다.", image: "/sewing_step.jpg" },
        {
          title: "컴퓨터미싱",
          children: Array.from({ length: 3 }, (_, i) => ({
            title: `컴퓨터미싱 ${i + 1}`,
            desc: "디지털 제어를 통해 복잡하고 정교한 패턴을 오차 없이 자동으로 봉제합니다.",
            image: "/sewing_step.jpg"
          }))
        }
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
            className={`cursor-pointer transition-all duration-300 overflow-hidden mb-2 ${
              isActive 
                ? 'bg-[#333333] rounded-[24px] p-5 shadow-lg w-full' 
                : 'bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded-full px-4 py-2 w-max'
            }`}
          >
            {!isActive ? (
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center shrink-0">
                  <span className="text-[14px] leading-none mb-[2px]">+</span>
                </div>
                <span className="text-[14px] font-medium">{node.title}</span>
              </div>
            ) : (
              <div className="text-left animate-in fade-in duration-500">
                <p className="text-[14px] text-white/90 leading-[1.6] break-keep">
                  <strong className="text-white block mb-2 text-[15px]">{node.title}.</strong>
                  {node.desc}
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
              className={`flex items-center gap-2 text-white/90 hover:text-white transition-colors py-2 px-3 rounded-full hover:bg-white/5 w-max ${
                level === 0 ? 'mt-2' : ''
              }`}
            >
              <span className={`${level === 0 ? 'text-[18px] font-bold text-[#c2a378]' : 'text-[15px] font-semibold text-white/80'}`}>
                {node.title}
              </span>
              <svg className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={level === 0 ? 2.5 : 2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`flex flex-col gap-1 pl-4 overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[2000px] opacity-100 mt-2 mb-2' : 'max-h-0 opacity-0'}`}>
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

      {/* [연출 5] 특수 미싱 : 비디오 배경 + 글래스모피즘 벤토 그리드 */}
      <section className="relative min-h-[150vh] bg-[#000]">
        {/* 비디오 배경 (Sticky) */}
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
        
        {/* 콘텐츠 영역 */}
        <div 
          className="relative z-20 -mt-[100vh] min-h-[100vh] pt-[15vh] pb-[15vh] px-[5vw] flex flex-col justify-center observer-target"
          ref={setRef}
        >
          <div className="text-center mb-[60px]">
            <span className="font-['Urbanist'] text-[16px] text-[#c2a378] font-extrabold tracking-[4px] uppercase mb-5 block anim-fade-up">
              Stage 04
            </span>
            <h2 className="text-[48px] md:text-[64px] font-extrabold tracking-[-2px] leading-[1.1] mb-6 break-keep text-[#ffffff] anim-fade-up delay-100">
              {dict.s4_title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1400px] mx-auto w-full">
            <div className="lg:col-span-8 bg-black/40 backdrop-blur-xl rounded-[32px] p-10 md:p-[60px] border border-white/10 shadow-2xl flex flex-col justify-center anim-scale-up delay-200">
              <h3 className="text-[32px] font-extrabold mb-4 text-[#ffffff]">{dict.s4_c1_t}</h3>
              <p className="text-[20px] font-normal text-white/80 leading-[1.6] break-keep">{dict.s4_c1_d}</p>
            </div>
            <div className="lg:col-span-4 bg-[#8b7355]/80 backdrop-blur-xl rounded-[32px] p-10 md:p-[60px] border border-white/10 shadow-2xl flex flex-col justify-center anim-scale-up delay-300">
              <h3 className="text-[32px] font-extrabold text-white mb-4">{dict.s4_c2_t}</h3>
              <p className="text-[20px] font-normal text-white/90 leading-[1.6] break-keep">{dict.s4_c2_d}</p>
            </div>
          </div>
        </div>
      </section>

      {/* [연출 6] 장비 갤러리 (대체됨) */}
      <section 
        className="py-[120px] px-[5vw] bg-[#111111] text-white observer-target"
        ref={setRef}
      >
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-extrabold mb-10 anim-fade-up">
            보다 자세히 들여다보기.
          </h2>

          <div className="flex flex-col lg:flex-row gap-10 bg-[#000000] p-6 md:p-10 rounded-[40px] anim-fade-up delay-100 min-h-[600px]">
            {/* 좌측 아코디언 메뉴 */}
            <div className="w-full lg:w-[350px] flex flex-col justify-center">
              <div className="text-[22px] font-extrabold text-[#c2a378] mb-6 px-4 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                설비 현황
              </div>
              
              <div className="flex flex-col">
                {renderTree(equipmentTree)}
              </div>
            </div>

            {/* 우측 이미지 프리뷰 */}
            <div className="flex-1 relative rounded-[30px] overflow-hidden bg-[#1c1c1e] min-h-[400px]">
              {allLeaves.map(({ path, node }) => (
                <div 
                  key={path}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    activeLeafPath === path ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img 
                    src={node.image} 
                    alt={node.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
