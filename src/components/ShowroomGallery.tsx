'use client';

import { useState } from 'react';

interface ShowroomGalleryProps {
  lng?: string;
  dict?: any;
}

export default function ShowroomGallery(props: ShowroomGalleryProps) {
    const rawData = [
        ["Ai_Daon_0.png", "tech", "테크 에센셜 | 맥세이프 카드홀더", "맥세이프 카드 지갑 (스탠드/밴드형)"],
        ["Ai_Daon_1.png", "tech", "테크 에센셜 | 디지털/웨어러블 기어", "에어팟 케이스"],
        ["Ai_Daon_2.png", "life", "라이프스타일 소품 | 키 케이싱 & 키링", "자동차 스마트키 홀더/케이스"],
        ["Ai_Daon_3.png", "life", "라이프스타일 소품 | 키 케이싱 & 키링", "자동차 스마트키 홀더/케이스"],
        ["Ai_Daon_4.png", "personal", "퍼스널 레더 굿즈 | 오피스 스테이셔너리", "가죽 다이어리 커버 / 바인더"],
        ["Ai_Daon_5.png", "tech", "테크 에센셜 | 맥세이프 카드홀더", "맥세이프 카드 지갑 (스탠드/밴드형)"],
        ["Ai_Daon_6.png", "bag", "가방 & 파우치 | 라이프스타일 파우치", "다목적 소형 미니 파우치"],
        ["Ai_Daon_7.png", "life", "라이프스타일 소품 | 키 케이싱 & 키링", "가죽 스트랩 & 루프 키링"],
        ["Ai_Daon_8.png", "tech", "테크 에센셜 | 맥세이프 카드홀더", "맥세이프 카드 지갑 (스탠드/밴드형)"],
        ["Ai_Daon_9.png", "bag", "가방 & 파우치 | 데일리 & 캐주얼 백", "미니 체인 백 / 사첼백 / 크로스백"],
        ["Ai_Daon_11.png", "tech", "테크 에센셜 | 맥세이프 카드홀더", "맥세이프 카드 지갑 (스탠드/밴드형)"],
        ["Ai_Daon_12.png", "tech", "테크 에센셜 | 스마트폰 가죽 케이스", "아이폰 프리미엄 가죽 케이스"],
        ["Ai_Daon_13.png", "tech", "테크 에센셜 | 맥세이프 카드홀더", "맥세이프 카드 지갑 (스탠드/밴드형)"],
        ["Ai_Daon_14.png", "tech", "테크 에센셜 | 디지털/웨어러블 기어", "에어팟 / 버즈 가죽 케이스"],
        ["Ai_Daon_15.png", "personal", "퍼스널 레더 굿즈 | 카드홀더 & 지갑", "컴팩트 지갑 / 슬림 카드홀더"],
        ["Ai_Daon_16.png", "tech", "테크 에센셜 | 스마트폰 가죽 케이스", "아이폰 프리미엄 가죽 케이스"],
        ["Ai_Daon_17.png", "tech", "테크 에센셜 | 스마트폰 가죽 케이스", "아이폰 프리미엄 가죽 케이스"],
        ["Ai_Daon_18.png", "bag", "가방 & 파우치 | 데일리 & 캐주얼 백", "미니 체인 백 / 사첼백 / 크로스백"],
        ["Ai_Daon_19.png", "tech", "테크 에센셜 | 스마트폰 가죽 케이스", "갤럭시 Z플립/폴드 가죽 케이스"],
        ["Ai_Daon_20.png", "personal", "퍼스널 레더 굿즈 | 카드홀더 & 지갑", "컴팩트 지갑 / 슬림 카드홀더"],
        ["Ai_Daon_21.png", "bag", "가방 & 파우치 | 데일리 & 캐주얼 백", "미니 체인 백 / 사첼백 / 크로스백"],
        ["Ai_Daon_22.png", "bag", "가방 & 파우치 | 데일리 & 캐주얼 백", "미니 체인 백 / 사첼백 / 크로스백"],
        ["Ai_Daon_23.png", "tech", "테크 에센셜 | 맥세이프 카드홀더", "맥세이프 카드 지갑 (스탠드/밴드형)"],
        ["Ai_Daon_25.png", "personal", "퍼스널 레더 굿즈 | 트래블 액세서리", "러기지텍"],
        ["Ai_Daon_26.png", "life", "라이프스타일 소품 | 골프 액세서리", "골프 공 파우치"],
        ["Ai_Daon_27.png", "tech", "테크 에센셜 | 디지털/웨어러블 기어", "워치 스트랩"],
        ["Ai_Daon_28.png", "personal", "퍼스널 레더 굿즈 | 카드홀더 & 지갑", "컴팩트 지갑 / 슬림 카드홀더"],
        ["Ai_Daon_29.png", "bag", "가방 & 파우치 | 비즈니스 백", "가죽 브리프케이스 / 노트북 백"],
        ["Ai_Daon_30.png", "personal", "퍼스널 레더 굿즈 | 오피스 스테이셔너리", "가죽 다이어리 커버 / 바인더"],
        ["Ai_Daon_31.png", "personal", "퍼스널 레더 굿즈 | 카드홀더 & 지갑", "컴팩트 지갑 / 슬림 카드홀더"],
        ["Ai_Daon_32.png", "tech", "테크 에센셜 | 맥세이프 카드홀더", "맥세이프 카드 지갑 (스탠드/밴드형)"],
        ["Ai_Daon_33.png", "personal", "퍼스널 레더 굿즈 | 카드홀더 & 지갑", "컴팩트 지갑 / 슬림 카드홀더"],
        ["Ai_Daon_35.png", "bag", "가방 & 파우치 | 라이프스타일 파우치", "다용도 미니 파우치"],
        ["Ai_Daon_36.png", "life", "라이프스타일 소품 | 키 케이싱 & 키링", "자동차 스마트키 홀더/케이스"],
        ["Ai_Daon_37.png", "life", "라이프스타일 소품 | 키 케이싱 & 키링", "자동차 스마트키 홀더/케이스"],
        ["Ai_Daon_38.png", "personal", "퍼스널 레더 굿즈 | 카드홀더 & 지갑", "명함/카드지갑"],
        ["Ai_Daon_39.png", "tech", "테크 에센셜 | 스마트폰 가죽 케이스", "아이폰 케이스(자수형)"],
        ["Ai_Daon_40.png", "tech", "테크 에센셜 | 스마트폰 가죽 케이스", "갤럭시 Z플립/폴드 가죽 케이스"],
        ["Ai_Daon_41.png", "bag", "가방 & 파우치 | 비즈니스 백", "노트북 파우치"],
        ["Ai_Daon_42.png", "tech", "테크 에센셜 | 산업용/특수 장비 기어", "PDA 및 바코드 단말기 가죽 가드"],
        ["Ai_Daon_43.png", "bag", "가방 & 파우치 | 데일리 & 캐주얼 백", "미니 체인 백 / 사첼백 / 크로스백"],
        ["Ai_Daon_44.png", "tech", "테크 에센셜 | 스마트폰 가죽 케이스", "갤럭시 Z플립/폴드 가죽 케이스"],
        ["Ai_Daon_45.png", "life", "라이프스타일 소품 | 키 케이싱 & 키링", "핸드 스트랩"],
        ["Ai_Daon_46.png", "tech", "테크 에센셜 | 산업용/특수 장비 기어", "PDA 및 바코드 단말기 가죽 가드"],
        ["Ai_Daon_47.png", "bag", "가방 & 파우치 | 라이프스타일 파우치", "다용도 미니 파우치"],
        ["Ai_Daon_48.png", "tech", "테크 에센셜 | 스마트폰 가죽 케이스", "갤럭시 Z플립/폴드 가죽 케이스"],
        ["Ai_Daon_49.png", "life", "라이프스타일 소품 | 키 케이싱 & 키링", "자동차 스마트키 홀더/케이스"],
        ["Ai_Daon_50.png", "personal", "퍼스널 레더 굿즈 | 오피스 스테이셔너리", "가죽 다이어리 커버 / 바인더"],
        ["Ai_Daon_51.png", "tech", "테크 에센셜 | 산업용/특수 장비 기어", "PDA 및 바코드 단말기 가죽 가드"],
        ["Ai_Daon_52.png", "bag", "가방 & 파우치 | 라이프스타일 파우치", "다용도 미니 파우치"],
        ["Ai_Daon_53.png", "personal", "퍼스널 레더 굿즈 | 카드홀더 & 지갑", "명함/카드지갑"],
        ["Ai_Daon_54.png", "bag", "가방 & 파우치 | 라이프스타일 파우치", "다용도 레더 파우치"],
        ["Ai_Daon_55.png", "life", "라이프스타일 소품 | 키 케이싱 & 키링", "벨트 클립"],
        ["Ai_Daon_56.png", "personal", "퍼스널 레더 굿즈 | 트래블 액세서리", "러기지텍"],
        ["Ai_Daon_57.png", "tech", "테크 에센셜 | 디지털/웨어러블 기어", "에어팟 케이스"],
        ["Ai_Daon_59.png", "bag", "가방 & 파우치 | 라이프스타일 파우치", "다용도 미니 파우치"],
        ["Ai_Daon_60.png", "tech", "테크 에센셜 | 디지털/웨어러블 기어", "에어팟 / 버즈 가죽 케이스"],
        ["Ai_Daon_61.png", "bag", "가방 & 파우치 | 데일리 & 캐주얼 백", "미니 체인 백 / 사첼백 / 크로스백"],
        ["Ai_Daon_62.png", "bag", "가방 & 파우치 | 라이프스타일 파우치", "가죽 선글라스/안경 케이스"],
        ["Ai_Daon_63.png", "life", "라이프스타일 소품 | 키 케이싱 & 키링", "자동차 스마트키 홀더/케이스"],
        ["Ai_Daon_64.png", "life", "라이프스타일 소품 | 키 케이싱 & 키링", "핸드스트랩"],
        ["Ai_Daon_65.png", "life", "라이프스타일 소품 | 골프 액세서리", "골프-아이언커버"],
        ["Ai_Daon_66.png", "life", "라이프스타일 소품 | 골프 액세서리", "골프-아이언커버"],
        ["Ai_Daon_67.png", "bag", "가방 & 파우치 | 라이프스타일 파우치", "다용도 레더 파우치"],
        ["Ai_Daon_68.png", "tech", "테크 에센셜 | 스마트폰 가죽 케이스", "아이폰 프리미엄 케이스"],
        ["Ai_Daon_69.png", "tech", "테크 에센셜 | 스마트폰 가죽 케이스", "아이폰 프리미엄 케이스"]
    ];

    const t = (props.dict && props.dict.ui) || {};
    const tCats = (props.dict && props.dict.categories) || {};
    const tProds = (props.dict && props.dict.products) || {};

    const products = rawData.map((d, index) => {
        let tag = "";
        if(d[2].includes("오피스") || d[2].includes("트래블") || d[3].includes("명함")) tag = "기업 판촉용";
        else if(d[2].includes("골프") || d[2].includes("지갑") || d[3].includes("프리미엄")) tag = "VIP 웰컴키트";
        else if(d[2].includes("스마트키")) tag = "딜러사 판촉물";
        
        let translatedTag = tag;
        if(tag === "기업 판촉용") translatedTag = t.tag_promo || tag;
        if(tag === "VIP 웰컴키트") translatedTag = t.tag_vip || tag;
        if(tag === "딜러사 판촉물") translatedTag = t.tag_dealer || tag;

        // ★★★ 정규식을 이용해 파일명(Ai_Daon_2.png)에서 숫자를 추출하고 'DAON-02' 형식으로 자동 변환 ★★★
        const match = d[0].match(/\d+/);
        const num = match ? match[0].padStart(2, '0') : "00";
        const modelName = "DAON-" + num;
        
        const translatedCatName = tCats[d[2]] || d[2];
        const translatedProductName = tProds[d[3]] || d[3];
        const formattedTitle = modelName + " | " + translatedProductName;
        
        return { id: index, img: "/images/" + d[0], category: d[1], catName: translatedCatName, modelName: modelName, productName: translatedProductName, title: formattedTitle, b2bTag: translatedTag };
    });

    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const filteredProducts = products.filter(p => activeFilter === 'all' || p.category === activeFilter);

    const openDrawer = (product: any) => {
        setSelectedProduct(product);
        setIsDrawerOpen(true);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    return (
        <>
            <style dangerouslySetInnerHTML={{__html: `
                .sr-wrapper { font-family: 'Pretendard', -apple-system, sans-serif; background-color: transparent; color: #333; overflow-x: hidden; padding: 0; }

                /* 프리미엄 헤더 디자인 */
                .showroom-header { text-align: center; margin-bottom: 70px; }
                .showroom-header .kicker { font-size: 11px; font-weight: 700; color: #8b7355; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 15px; display: block; }
                .showroom-header h1 { font-size: 40px; font-weight: 300; margin-bottom: 20px; color: #111; font-family: 'Times New Roman', serif; letter-spacing: 1px; }
                .showroom-header p { color: #777; font-size: 15px; font-weight: 300; letter-spacing: -0.3px; margin-bottom: 60px; }
                
                /* 명품 스타일 미니멀 탭 버튼 */
                .filter-tabs { display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; margin-bottom: 60px; border-bottom: 1px solid #ddd; padding-bottom: 0; }
                .filter-btn { padding: 0 0 15px 0; border: none; background: transparent; cursor: pointer; font-weight: 400; font-size: 15px; color: #888; transition: all 0.3s ease; position: relative; letter-spacing: -0.3px; margin-bottom: -1px; }
                .filter-btn:hover { color: #333; }
                .filter-btn.active { color: #111; font-weight: 600; }
                .filter-btn::after { content: ''; position: absolute; left: 50%; bottom: 0; transform: translateX(-50%); width: 0; height: 2px; background-color: #111; transition: width 0.3s ease; }
                .filter-btn.active::after, .filter-btn:hover::after { width: 100%; }

                /* 제품 그리드 */
                .grid-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 40px; max-width: 1200px; margin: 0 auto; transition: all 0.4s ease; }
                .grid-container.drawer-open { transform: scale(0.98); opacity: 0.7; }
                
                .product-card { background: #ffffff; border: 1px solid #e0e0e0; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,0.04); overflow: hidden; cursor: pointer; transition: transform 0.4s ease, box-shadow 0.4s ease; text-align: left; transform: translateZ(0); -webkit-font-smoothing: antialiased; backface-visibility: hidden; }
                .product-card:hover { transform: translate3d(0, -8px, 0); box-shadow: 0 12px 30px rgba(0,0,0,0.08); }
                
                .product-img-wrap { width: 100%; height: 320px; background: #f9f9f9; display: flex; align-items: center; justify-content: center; overflow: hidden; border-bottom: 1px solid #f0f0f0; transform: translateZ(0); }
                .product-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s ease; backface-visibility: hidden; transform: translateZ(0) scale(1.001); image-rendering: -webkit-optimize-contrast; }
                .product-card:hover .product-img-wrap img { transform: translateZ(0) scale(1.03); }
                
                .product-info { padding: 25px 25px; pointer-events: none; }
                .product-title { font-size: 17px; font-weight: 600; margin-bottom: 6px; color: #111; line-height: 1.4; }
                .category-label { font-size: 13px; color: #666; font-weight: 500; margin-bottom: 12px; display: block; letter-spacing: 0.2px; }
                .b2b-tag { display: inline-block; font-size: 10px; border: 1px solid #ccc; color: #555; padding: 4px 10px; border-radius: 20px; font-weight: 600; margin-right: 5px; background: #fafafa; }

                /* 사이드 패널 */
                .drawer-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); opacity: 0; visibility: hidden; transition: all 0.4s ease; z-index: 1000; }
                .drawer-overlay.active { opacity: 1; visibility: visible; }
                
                .side-drawer { position: fixed; top: 0; right: -100%; width: 100%; max-width: 550px; height: 100vh; background: #fff; z-index: 1001; transition: right 0.4s cubic-bezier(0.2, 0.8, 0.2, 1); box-shadow: -10px 0 40px rgba(0,0,0,0.15); overflow-y: auto; display: flex; flex-direction: column; text-align: left;}
                
                .drawer-header { padding: 25px 30px; display: flex; justify-content: flex-end; position: sticky; top: 0; background: rgba(255,255,255,0.95); backdrop-filter: blur(5px); z-index: 10; border-bottom: 1px solid #f0f0f0; }
                .close-btn { background: none; border: none; font-size: 34px; cursor: pointer; color: #111; line-height: 1; transition: transform 0.3s; font-weight: 300; padding: 0;}
                .close-btn:hover { transform: rotate(90deg); }

                .drawer-content { padding: 0 40px 50px; }
                .drawer-img { width: 100%; height: 420px; background: #f9f9f9; display: flex; align-items: center; justify-content: center; margin-bottom: 35px; overflow: hidden; border-radius: 8px;}
                .drawer-img img { width: 100%; height: 100%; object-fit: cover; }
                
                .drawer-cat { font-size: 12px; color: #8b7355; font-weight: 600; margin-bottom: 12px; letter-spacing: 0.5px; text-transform: uppercase; }
                .drawer-title { font-size: 28px; margin-bottom: 35px; color: #111; letter-spacing: -0.5px; line-height: 1.3; font-weight: 600; }
                
                .info-section { margin-bottom: 30px; padding-bottom: 30px; border-bottom: 1px solid #eee; }
                .info-label { font-size: 11px; color: #999; text-transform: uppercase; font-weight: 700; margin-bottom: 12px; letter-spacing: 1.5px; }
                .info-text { font-size: 15px; color: #333; line-height: 1.7; font-weight: 300; }
                
                .drawer-footer-msg { font-size: 14px; color: #666; line-height: 1.7; margin-bottom: 35px; background: #fafafa; padding: 25px; border-left: 2px solid #8b7355; font-weight: 300; }
                
                .btn-wrap { display: flex; gap: 12px; flex-direction: column; }
                .btn-dark { background: #111; color: #fff; text-align: center; padding: 18px; text-decoration: none; font-weight: 500; transition: background 0.3s; font-size: 15px; display: block; letter-spacing: -0.3px; border-radius: 6px; }
                .btn-dark:hover { background: #333; }
                .btn-light { background: #fff; color: #111; border: 1px solid #ccc; text-align: center; padding: 18px; text-decoration: none; font-weight: 500; transition: all 0.3s; font-size: 15px; display: block; letter-spacing: -0.3px; border-radius: 6px; }
                .btn-light:hover { background: #f5f5f5; border-color: #aaa; }
            `}} />

            <div className="sr-wrapper">
                <div className="showroom-header">
                    <span className="kicker">{t.kicker || 'B2B Reference'}</span>
                    <h1>{t.title || 'Collections'}</h1>
                    <p>{t.desc || '더프라임다온의 하이엔드 제조 역량을 확인해 보세요.'}</p>
                    
                    <div className="filter-tabs">
                        <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>{t.filter_all || '전체 보기'}</button>
                        <button className={`filter-btn ${activeFilter === 'tech' ? 'active' : ''}`} onClick={() => setActiveFilter('tech')}>{t.filter_tech || '테크 에센셜'}</button>
                        <button className={`filter-btn ${activeFilter === 'bag' ? 'active' : ''}`} onClick={() => setActiveFilter('bag')}>{t.filter_bag || '가방 & 파우치'}</button>
                        <button className={`filter-btn ${activeFilter === 'personal' ? 'active' : ''}`} onClick={() => setActiveFilter('personal')}>{t.filter_personal || '퍼스널 레더 굿즈'}</button>
                        <button className={`filter-btn ${activeFilter === 'life' ? 'active' : ''}`} onClick={() => setActiveFilter('life')}>{t.filter_life || '라이프스타일 소품'}</button>
                    </div>
                </div>

                <div className={`grid-container ${isDrawerOpen ? 'drawer-open' : ''}`}>
                    {filteredProducts.map(p => (
                        <div key={p.id} className="product-card" onClick={() => openDrawer(p)}>
                            <div className="product-img-wrap">
                                <img src={p.img} alt={p.title} onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400/f5f5f5/999?text=Image+Loading'; }} />
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">{p.modelName}</h3>
                                <span className="category-label">{p.productName}</span>
                                {p.b2bTag && <div className="b2b-tag">{p.b2bTag}</div>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={`drawer-overlay ${isDrawerOpen ? 'active' : ''}`} onClick={closeDrawer}></div>
            <div className="side-drawer" style={{ right: isDrawerOpen ? '0' : '-100%' }}>
                <div className="drawer-header">
                    <button className="close-btn" onClick={closeDrawer}>&times;</button>
                </div>
                <div className="drawer-content">
                    {selectedProduct && (
                        <>
                            <div className="drawer-img">
                                <img src={selectedProduct.img} alt="Detail" onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x600/f5f5f5/999?text=Image+Loading'; }} />
                            </div>
                            <div className="drawer-cat">{selectedProduct.catName.split('|')[0].trim()}</div>
                            <h2 className="drawer-title" style={{ marginBottom: '25px' }}>
                                {selectedProduct.modelName}
                                <span style={{fontSize: '20px', color: '#666', fontWeight: 500, display: 'block', marginTop: '8px'}}>
                                    {selectedProduct.productName}
                                </span>
                            </h2>
                            
                            <div className="info-section">
                                <div className="info-label">{t.drawer_craft_label || 'Craftsmanship & Details'}</div>
                                <div className="info-text">{t.drawer_craft_desc || '견고한 마감 처리, 최고급 소재 적용 및 정밀 봉제. 내구성과 심미성을 동시에 충족하는 하이엔드 공정.'}</div>
                            </div>
                            <div className="info-section">
                                <div className="info-label">{t.drawer_cust_label || 'Customization Option'}</div>
                                <div className="info-text">{t.drawer_cust_desc || '가죽 소재 및 컬러 변경, 기업 로고 커스텀 각인(불박/금박), 패키지 구성 등 100% 맞춤형 OEM/ODM 양산이 가능합니다.'}</div>
                            </div>
                            
                            <div className="drawer-footer-msg">
                                {t.drawer_footer || '본 제품은 더프라임다온의 완벽한 마감 퀄리티를 증명하는 레퍼런스 모델입니다.'}
                            </div>
                            
                            <div className="btn-wrap">
                                {(() => {
                                    const presetMsg = selectedProduct ? `[${selectedProduct.productName}]${t.drawer_preset_msg || ' 스타일로 제작 단가를 문의합니다.'}` : '';
                                    const presetQuery = encodeURIComponent(presetMsg);
                                    const contactHref = `/${props.lng || 'ko'}/contact?preset=${presetQuery}`;
                                    const portfolioHref = `/${props.lng || 'ko'}`;
                                    return (
                                        <>
                                            <a 
                                                href={contactHref}
                                                className="btn-dark" 
                                                onClick={(e) => { 
                                                    e.preventDefault(); 
                                                    closeDrawer(); 
                                                    window.location.href = contactHref; 
                                                }}
                                            >
                                                {t.btn_contact || '💡 이 스타일로 제작 단가 문의하기'}
                                            </a>
                                            <a 
                                                href={portfolioHref}
                                                className="btn-light" 
                                                onClick={(e) => { 
                                                    e.preventDefault(); 
                                                    closeDrawer(); 
                                                    window.location.href = portfolioHref; 
                                                }}
                                            >
                                                {t.btn_portfolio || '📁 제조 포트폴리오 확인하기'}
                                            </a>
                                        </>
                                    );
                                })()}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
