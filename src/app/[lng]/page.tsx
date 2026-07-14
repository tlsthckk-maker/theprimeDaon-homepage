import { getDictionary } from '@/i18n';
import HomeSections from '@/components/HomeSections';

export default async function Home({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  const dict = await getDictionary(lng);

  return (
    <div className="relative break-keep bg-black">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
            to { opacity: 1; transform: translateY(0); }
        }
        .hero-content-anim {
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 1.5s ease-out forwards;
        }
        @keyframes customBounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
            40% { transform: translateY(-10px) translateX(-50%); }
            60% { transform: translateY(-5px) translateX(-50%); }
        }
        .scroll-down-anim {
            animation: customBounce 2s infinite;
        }
        h1:first-of-type { display: none !important; }
      `}} />

      {/* Hero Section (Video) */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video 
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-[1]"
          autoPlay loop muted playsInline
        >
          <source src="/intro.mp4" type="video/mp4" />
          브라우저가 비디오 태그를 지원하지 않습니다.
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-[2]"></div>
        
        <div className="relative z-[3] text-center text-white px-5 hero-content-anim">
          {dict.hero.kicker && (
            <span 
              className="inline-block text-[14px] md:text-[16px] font-normal text-[#d2b690] opacity-80 pb-2 mb-6 border-b border-[#d2b690]/40 tracking-[-0.02em]"
              dangerouslySetInnerHTML={{ __html: dict.hero.kicker }}
            ></span>
          )}
          <h2 
            className="text-[clamp(2.25rem,6.5vw,4.75rem)] font-bold tracking-[-0.03em] leading-[1.25] mb-[30px] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] break-keep"
            dangerouslySetInnerHTML={{ __html: dict.hero.title }}
          ></h2>
          {dict.hero.subtitle && (
            <p 
              className="text-[16px] md:text-[18px] font-light text-[#ddd] max-w-[600px] mx-auto leading-[1.6] break-keep"
              dangerouslySetInnerHTML={{ __html: dict.hero.subtitle }}
            ></p>
          )}
        </div>

        <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 z-[3] text-white text-[12px] tracking-[2px] uppercase opacity-60 scroll-down-anim">
          Scroll Down ↓
        </div>
      </section>

      <HomeSections dict={dict} />
    </div>
  );
}
