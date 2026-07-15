import { getDictionary } from '@/i18n';
import Image from 'next/image';

export default async function About({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  const dict = await getDictionary(lng);

  // Split sub_copy into title and paragraphs
  const subCopyLines = dict.about.sub_copy.split('\n');
  const subCopyTitle = subCopyLines[0];
  const subCopyParagraphs = subCopyLines.slice(1);

  // Partner names
  const partnerNames = ["몽*랑", "우*미", "삼*전자", "슈*겐"];

  return (
    <div className="bg-white break-keep">
      {/* Section 1 : Main Visual Banner */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 bg-slate-900">
          <Image 
            src="/images/banner.png" 
            alt="Premium Leather Craftsmanship" 
            fill 
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/40"></div>
        </div>
        
        <div className="relative z-10 w-full px-4 text-center mt-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight max-w-6xl mx-auto drop-shadow-xl font-serif break-keep text-balance">
            {dict.about.main_copy}
          </h2>
        </div>
      </section>

      {/* Section 2 : Company Intro & Craftsmanship Image */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text Area */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight leading-snug">
                {subCopyTitle}
              </h2>
              <div className="w-16 h-1 bg-amber-600 mb-8 rounded-full"></div>
              <div className="text-lg md:text-xl text-slate-700 leading-relaxed space-y-6">
                {subCopyParagraphs.map((para: string, idx: number) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
            
            {/* Right: Image Area */}
            <div className="order-1 lg:order-2 relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/daon_2.jpg" 
                alt="Artisan Hands Working" 
                fill 
                className="object-cover transition-transform hover:scale-105 duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 : Global Partners */}
      <section className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-24">
            <h3 className="text-xl md:text-2xl text-slate-800 max-w-[900px] mx-auto leading-[1.8] whitespace-pre-line font-medium break-keep text-balance">
              "{dict.about.global_partners.desc}"
            </h3>
          </div>
          
          {/* Partner Typography List */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-8 md:gap-x-12 max-w-5xl mx-auto">
            {partnerNames.map((name, i) => (
              <div key={i} className="flex items-center">
                <span className="text-slate-900 font-serif font-bold tracking-[0.2em] text-lg md:text-2xl opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                  {name}
                </span>
                {i < partnerNames.length - 1 && (
                  <span className="text-amber-500 mx-6 md:mx-12 opacity-40 text-2xl font-light">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 : Organization Chart */}
      <section className="py-24 bg-white">
        <div className="w-full px-4">
          <div className="flex flex-col items-center max-w-5xl mx-auto w-full">
            {/* Top Node */}
            <div className="bg-slate-900 text-white px-16 py-5 rounded-full font-bold shadow-xl relative z-10 text-2xl tracking-wider">
              (주)더프라임다온
            </div>
            
            {/* Vertical Line */}
            <div className="w-[2px] h-16 bg-slate-300"></div>
            
            {/* Horizontal Line */}
            <div className="w-full md:w-[80%] border-t-[2px] border-slate-300 relative">
              <div className="absolute left-0 -top-[2px] w-[2px] h-12 bg-slate-300"></div>
              <div className="absolute right-0 -top-[2px] w-[2px] h-12 bg-slate-300"></div>
            </div>
            
            {/* Branches */}
            <div className="flex justify-between w-full md:w-[80%] mt-12 gap-8 md:gap-16">
              {/* Management Dept */}
              <div className="w-1/2 flex flex-col items-center">
                <div className="bg-amber-500 text-slate-900 font-bold px-8 py-4 rounded-2xl shadow-lg w-full text-center mb-8 text-xl tracking-wide border border-amber-600/20">
                  {dict.about.organization.management.label}
                </div>
                <div className="bg-slate-50 w-full rounded-2xl border border-slate-200 p-8 shadow-sm">
                  <ul className="text-slate-700 text-center space-y-4 font-medium text-lg md:text-xl">
                    {dict.about.organization.management.roles.split(/[,、]/).map((role: string, idx: number) => (
                      <li key={idx} className="pb-4 last:pb-0 border-b border-slate-200 last:border-0">{role.trim()}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Production Dept */}
              <div className="w-1/2 flex flex-col items-center">
                <div className="bg-amber-500 text-slate-900 font-bold px-8 py-4 rounded-2xl shadow-lg w-full text-center mb-8 text-xl tracking-wide border border-amber-600/20">
                  {dict.about.organization.production.label}
                </div>
                <div className="bg-slate-50 w-full rounded-2xl border border-slate-200 p-8 shadow-sm">
                  <ul className="text-slate-700 text-center space-y-4 font-medium text-lg md:text-xl">
                    {dict.about.organization.production.roles.split(/[,、]/).map((role: string, idx: number) => (
                      <li key={idx} className="pb-4 last:pb-0 border-b border-slate-200 last:border-0">{role.trim()}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 : Location */}
      <section className="bg-slate-900 text-white w-full">
        {/* Full-bleed Map Container */}
        <div className="w-full h-[500px] md:h-[600px] bg-slate-800">
          <iframe 
            src="https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%20%EC%A4%91%EB%9E%91%EA%B5%AC%20%EB%B4%89%EC%9A%B0%EC%9E%AC%EB%A1%9C%20108&t=&z=16&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
      </section>

    </div>
  );
}
