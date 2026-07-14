'use client';

import React, { useEffect } from 'react';

export default function HomeSections({ dict }: { dict?: any }) {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up').forEach((el) => {
            observer.observe(el);
        });
        
        const staggerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const children = entry.target.querySelectorAll('.stagger-item');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('visible');
                        }, index * 100);
                    });
                    staggerObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.process-grid, .portfolio-grid').forEach((el) => {
            staggerObserver.observe(el);
        });

        return () => {
            observer.disconnect();
            staggerObserver.disconnect();
        };
    }, []);

    const d = dict?.home_sections || {};

    return (
        <div className="bg-[#f5f5f7] text-[#1d1d1f] font-sans relative z-10">
            <style dangerouslySetInnerHTML={{__html: `
                .fade-up {
                    opacity: 0;
                    transform: translateY(40px);
                    transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .fade-up.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                .stagger-item {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .stagger-item.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                .section-title {
                    font-size: clamp(0.75rem, 2vw, 0.85rem);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: #86868b;
                    font-weight: 600;
                    text-align: center;
                }
                .img-placeholder {
                    position: relative;
                }
                .img-placeholder::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.05));
                    transition: opacity 0.5s ease;
                }
                .group:hover .img-placeholder::after {
                    opacity: 0;
                }
                .portfolio-image-inner {
                    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .group:hover .portfolio-image-inner {
                    transform: scale(1.03);
                }
            `}} />

            {/* 2. Brand Philosophy 0 (Vision) */}
            <section className="text-center px-6 pt-[160px] pb-[120px] max-w-[1024px] mx-auto relative overflow-hidden z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] min-w-[400px] min-h-[400px] bg-gradient-to-tr from-[#8b7355]/10 to-transparent rounded-full blur-[80px] -z-10 opacity-60"></div>
                <div className="fade-up flex flex-col items-center">
                    <div className="w-12 h-[1px] bg-[#8b7355]/30 mb-8 md:mb-12"></div>
                    <h2 className="text-[clamp(2.5rem,5.5vw,5rem)] font-bold leading-[1.2] tracking-[-0.03em] text-[#1d1d1f]">
                        {d.brand_philosophy0_title || 'Vision, Exquisitely Manufactured.'}
                    </h2>
                    <p className="mt-8 text-[clamp(1.1rem,2vw,1.4rem)] text-[#86868b] font-normal max-w-[700px] mx-auto leading-[1.7] tracking-[-0.02em] break-keep" dangerouslySetInnerHTML={{ __html: d.brand_philosophy0_desc }}></p>
                </div>
            </section>

            {/* 3. Brand Philosophy 1 (Architects) */}
            <section className="text-center px-6 py-[120px] max-w-[1024px] mx-auto">
                <div className="fade-up flex flex-col items-center">
                    <h2 className="text-[clamp(2rem,4.5vw,4.2rem)] font-bold leading-[1.2] tracking-[-0.03em] text-[#1d1d1f]">
                        <span className="text-[#8b7355]">{d.brand_philosophy_highlight || 'Architects of Excellence.'}</span>
                    </h2>
                    <p className="mt-10 text-[clamp(1.1rem,2vw,1.4rem)] text-[#86868b] font-normal max-w-[700px] mx-auto leading-[1.7] tracking-[-0.02em] break-keep" dangerouslySetInnerHTML={{ __html: d.brand_philosophy_desc }}></p>
                </div>
            </section>

            {/* 4. Brand Philosophy 2 (Mastering) */}
            <section className="text-center px-6 pt-[120px] pb-[160px] max-w-[1024px] mx-auto">
                <div className="fade-up flex flex-col items-center">
                    <h2 className="text-[clamp(2rem,4.5vw,4.2rem)] font-bold leading-[1.2] tracking-[-0.03em] text-[#1d1d1f]">
                        {d.brand_philosophy2_title || 'Mastering the Art of Leather.'}
                    </h2>
                    <p className="mt-10 text-[clamp(1.1rem,2vw,1.4rem)] text-[#86868b] font-normal max-w-[700px] mx-auto leading-[1.7] tracking-[-0.02em] break-keep" dangerouslySetInnerHTML={{ __html: d.brand_philosophy2_desc }}></p>
                </div>
            </section>

            {/* Transition Banner */}
            <div className="max-w-[1024px] mx-auto px-6 mb-[160px] fade-up">
                <div className="w-full bg-[#1d1d1f] rounded-[24px] py-12 md:py-16 px-6 text-center shadow-lg">
                    <h3 className="text-[clamp(1.2rem,3vw,1.8rem)] font-medium text-white tracking-[-0.01em]">
                        {d.transition_1 || 'We Make More Than Products, '} <span className="text-[#d2b690]">{d.transition_2 || 'We Deliver Trust.'}</span>
                    </h3>
                </div>
            </div>

            {/* 3. 6-Step Process */}
            <section className="px-6 pb-[240px] max-w-[1024px] mx-auto">
                <div className="section-title fade-up">{d.process_title || 'Our Process'}</div>
                <div className="process-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[60px] gap-x-10 mt-20">
                    {(dict?.process?.steps || []).map((step: any, idx: number) => (
                        <div key={idx} className="stagger-item border-t border-[#d2d2d7] pt-6">
                            <span className="text-[0.85rem] text-[#8b7355] font-semibold tracking-[0.05em]">{'0'+(idx+1)}</span>
                            <h3 className="text-2xl font-semibold my-3 text-[#1d1d1f] tracking-[-0.015em]">{step.title}</h3>
                            <p className="text-[#86868b] text-base leading-[1.6] break-keep tracking-[-0.015em]">{step.content}</p>
                        </div>
                    ))}
                    {(!dict?.process?.steps) && [1,2,3,4,5,6].map((idx) => (
                        <div key={idx} className="stagger-item border-t border-[#d2d2d7] pt-6">
                            <span className="text-[0.85rem] text-[#8b7355] font-semibold tracking-[0.05em]">{'0'+idx}</span>
                            <h3 className="text-2xl font-semibold my-3 text-[#1d1d1f] tracking-[-0.015em]">기획 및 맞춤 상담</h3>
                            <p className="text-[#86868b] text-base leading-[1.6] break-keep tracking-[-0.015em]">고객사의 니즈와 아이디어를 분석하여 제품의 방향성을 수립합니다.</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Portfolio Teaser */}
            <section className="px-6 pb-[240px] max-w-[1024px] mx-auto">
                <div className="section-title fade-up">{d.masterpieces_title || 'Masterpieces'}</div>
                <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[60px]">
                    {/* Category 1: Tech */}
                    <div className="portfolio-item stagger-item cursor-pointer group" onClick={() => window.location.href = 'showroom'}>
                        <div className="img-placeholder w-full aspect-[4/5] bg-[#e5e5ea] rounded-[18px] overflow-hidden">
                            <img src="/images/Ai_Daon_12.png" alt={d.masterpieces?.tech_item} className="portfolio-image-inner w-full h-full object-cover" />
                        </div>
                        <h4 className="mt-6 text-[1.1rem] font-semibold text-center tracking-[-0.015em] break-keep">{d.masterpieces?.tech_item || '스마트폰 가죽 케이스'}</h4>
                        <p className="text-center text-[#86868b] text-[0.85rem] mt-1 tracking-[-0.015em]">{d.masterpieces?.tech || '테크 에센셜'}</p>
                    </div>
                    {/* Category 2: Bag */}
                    <div className="portfolio-item stagger-item cursor-pointer group" onClick={() => window.location.href = 'showroom'}>
                        <div className="img-placeholder w-full aspect-[4/5] bg-[#e5e5ea] rounded-[18px] overflow-hidden">
                            <img src="/images/Ai_Daon_6.png" alt={d.masterpieces?.bag_item} className="portfolio-image-inner w-full h-full object-cover" />
                        </div>
                        <h4 className="mt-6 text-[1.1rem] font-semibold text-center tracking-[-0.015em] break-keep">{d.masterpieces?.bag_item || '다목적 소형 파우치'}</h4>
                        <p className="text-center text-[#86868b] text-[0.85rem] mt-1 tracking-[-0.015em]">{d.masterpieces?.bag || '가방 & 파우치'}</p>
                    </div>
                    {/* Category 3: Leather */}
                    <div className="portfolio-item stagger-item cursor-pointer group" onClick={() => window.location.href = 'showroom'}>
                        <div className="img-placeholder w-full aspect-[4/5] bg-[#e5e5ea] rounded-[18px] overflow-hidden">
                            <img src="/images/Ai_Daon_5.png" alt={d.masterpieces?.leather_item} className="portfolio-image-inner w-full h-full object-cover" />
                        </div>
                        <h4 className="mt-6 text-[1.1rem] font-semibold text-center tracking-[-0.015em] break-keep">{d.masterpieces?.leather_item || '슬림 카드홀더'}</h4>
                        <p className="text-center text-[#86868b] text-[0.85rem] mt-1 tracking-[-0.015em]">{d.masterpieces?.leather || '퍼스널 레더 굿즈'}</p>
                    </div>
                    {/* Category 4: Lifestyle */}
                    <div className="portfolio-item stagger-item cursor-pointer group" onClick={() => window.location.href = 'showroom'}>
                        <div className="img-placeholder w-full aspect-[4/5] bg-[#e5e5ea] rounded-[18px] overflow-hidden">
                            <img src="/images/Ai_Daon_2.png" alt={d.masterpieces?.lifestyle_item} className="portfolio-image-inner w-full h-full object-cover" />
                        </div>
                        <h4 className="mt-6 text-[1.1rem] font-semibold text-center tracking-[-0.015em] break-keep">{d.masterpieces?.lifestyle_item || '자동차 스마트키 홀더'}</h4>
                        <p className="text-center text-[#86868b] text-[0.85rem] mt-1 tracking-[-0.015em]">{d.masterpieces?.lifestyle || '라이프스타일 소품'}</p>
                    </div>
                </div>
            </section>

            {/* 5. Contact */}
            <section className="bg-[#1d1d1f] text-white py-[200px] px-6 text-center">
                <div className="fade-up">
                    <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold tracking-[-0.03em] mb-[60px]">{d.contact_title || 'Ready to craft your vision?'}</h2>
                    <button 
                        className="bg-white text-[#1d1d1f] border-none px-10 py-[18px] text-[1.1rem] font-semibold rounded-[40px] cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 hover:bg-[#f5f5f7]"
                        onClick={() => window.location.href = 'contact'}
                    >
                        {d.contact_btn || '프로젝트 문의하기'}
                    </button>
                </div>
            </section>
        </div>
    );
}
