const fs = require('fs');
const path = require('path');

const filePath = path.resolve('src/components/CinematicCapabilities.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Insert hooks
const hooksStr = `  const revealRefs = useRef<(HTMLElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current || !horizontalRef.current) return;
      const { top, height } = scrollContainerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollableDistance = height - viewportHeight;
      
      let progress = -top / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));
      
      horizontalRef.current.style.transform = \`translateX(-\${progress * 75}%)\`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {`;

content = content.replace(
  `  const revealRefs = useRef<(HTMLElement | null)[]>([^]);\n\n  useEffect(() => {`,
  hooksStr
);

// 2. Replace the sections
const startMarker = `{/* [연출 2] CAD 설계 : 스티키(Sticky) 스크롤 */}`;
const endMarker = `{/* [연출 6] 신뢰의 숫자 : 미니멀리즘 데이터 (라이트 버전) */}`;

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const newSections = `      {/* [연출 2~5] 가로 스크롤 타임라인 (STAGE 01 ~ 04) */}
      <section ref={scrollContainerRef} className="relative h-[400vh] bg-[#000]">
        <div className="sticky top-0 left-0 w-full h-[100vh] overflow-hidden">
          <div 
            ref={horizontalRef}
            className="flex w-[400vw] h-full will-change-transform"
            style={{ transition: 'transform 0.1s ease-out' }}
          >
            {/* STAGE 01 */}
            <div className="relative w-[100vw] h-full flex items-end justify-start p-[5vw] lg:p-[10vw]">
              <div 
                className="absolute inset-0 bg-center bg-cover [filter:brightness(0.7)]"
                style={{ backgroundImage: "url('/cad_step.jpg')" }}
              />
              <div className="relative z-10 bg-white/10 backdrop-blur-[20px] p-8 md:p-[50px] rounded-[30px] border border-white/20 shadow-2xl max-w-[650px] text-white">
                <span className="font-['Urbanist'] text-[16px] text-[#c2a378] font-extrabold tracking-[4px] uppercase mb-5 block">
                  Stage 01
                </span>
                <h2 className="text-[40px] md:text-[56px] font-extrabold tracking-[-2px] leading-[1.1] mb-4 break-keep">
                  {dict.s1_title}
                </h2>
                <p className="text-[18px] md:text-[20px] font-normal text-white/80 leading-[1.6] break-keep">
                  {dict.s1_desc}
                </p>
              </div>
            </div>

            {/* STAGE 02 */}
            <div className="relative w-[100vw] h-full flex items-end justify-start p-[5vw] lg:p-[10vw]">
              <div className="absolute inset-0">
                <video 
                  src="/co2Cutting.mp4" 
                  autoPlay loop muted playsInline 
                  className="w-full h-full object-cover brightness-[0.6]" 
                />
              </div>
              <div className="relative z-10 bg-black/30 backdrop-blur-[20px] p-8 md:p-[50px] rounded-[30px] border border-white/10 shadow-2xl max-w-[800px] text-white">
                <span className="font-['Urbanist'] text-[16px] text-[#c2a378] font-extrabold tracking-[4px] uppercase mb-5 block">
                  Stage 02
                </span>
                <h2 className="text-[40px] md:text-[56px] font-extrabold tracking-[-2px] leading-[1.1] mb-6 break-keep">
                  {dict.s2_title}
                </h2>
                <p className="text-[18px] md:text-[20px] font-normal text-white/80 leading-[1.6] break-keep">
                  {dict.s2_desc}
                </p>
              </div>
            </div>

            {/* STAGE 03 */}
            <div className="relative w-[100vw] h-full flex items-end justify-start p-[5vw] lg:p-[10vw]">
              <div 
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: "url('/HighPress.jpeg')" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
              </div>
              <div className="relative z-10 bg-black/30 backdrop-blur-[20px] p-8 md:p-[50px] rounded-[30px] border border-white/10 shadow-2xl max-w-[800px] text-white">
                <span className="font-['Urbanist'] text-[16px] text-[#c2a378] font-extrabold tracking-[4px] uppercase mb-5 block">
                  Stage 03
                </span>
                <h2 data-i18n="stage3_title" className="text-[40px] md:text-[56px] font-extrabold tracking-[-2px] leading-[1.1] mb-6 break-keep">
                  고속 정밀 절단 (Press)
                </h2>
                <p data-i18n="stage3_desc" className="text-[18px] md:text-[20px] font-normal text-white/80 leading-[1.6] break-keep">
                  더프라임다온만의 오차 없는 타발기 프레스 공정. 수작업의 디테일을 대량 생산 체제에서도 흐트러짐 없이 일관되게 구현합니다.
                </p>
                <ul className="mt-8 flex flex-wrap gap-6">
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#c2a378]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-[18px] font-medium tracking-tight">품질 관리</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#c2a378]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <span className="text-[18px] font-medium tracking-tight">대량 생산</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#c2a378]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-[18px] font-medium tracking-tight">정밀 기술</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* STAGE 04 */}
            <div className="relative w-[100vw] h-full flex items-end justify-start p-[5vw] lg:p-[10vw]">
              <div className="absolute inset-0 bg-[#1d1d1f]" />
              <div className="relative z-10 w-full max-w-[1200px] text-white">
                <div className="bg-white/5 backdrop-blur-[20px] p-8 md:p-[50px] rounded-[30px] border border-white/10 mb-6">
                  <span className="font-['Urbanist'] text-[16px] text-[#c2a378] font-extrabold tracking-[4px] uppercase mb-5 block">
                    Stage 04
                  </span>
                  <h2 className="text-[40px] md:text-[56px] font-extrabold tracking-[-2px] leading-[1.1] break-keep">
                    {dict.s4_title}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-8 bg-white/5 backdrop-blur-[20px] rounded-[32px] p-8 md:p-[50px] border border-white/10 flex flex-col justify-center">
                    <h3 className="text-[28px] md:text-[32px] font-extrabold mb-4">{dict.s4_c1_t}</h3>
                    <p className="text-[18px] md:text-[20px] font-normal text-white/80 leading-[1.6] break-keep">{dict.s4_c1_d}</p>
                  </div>
                  <div className="lg:col-span-4 bg-[#c2a378]/20 backdrop-blur-[20px] rounded-[32px] p-8 md:p-[50px] border border-[#c2a378]/30 flex flex-col justify-center">
                    <h3 className="text-[28px] md:text-[32px] font-extrabold mb-4 text-[#c2a378]">{dict.s4_c2_t}</h3>
                    <p className="text-[18px] md:text-[20px] font-normal text-white/90 leading-[1.6] break-keep">{dict.s4_c2_d}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

`;

  const before = content.substring(0, startIndex);
  const after = content.substring(endIndex);
  content = before + newSections + after;

  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Updated successfully");
} else {
  console.log("Failed to find markers: " + startIndex + " " + endIndex);
}
