const fs = require('fs');
const path = require('path');

const bentoData = {
    ko: {
        heroTitle: "Engineering<br>Meets Artistry.",
        heroDesc: "구조적 정밀함과 감각적 디테일의 융합. 더프라임다온이 구축한 하이엔드 B2B 양산 생태계를 소개합니다.",
        sec1Head: "01. 전산 설계와 초정밀 재단<br><span class='text-[#8b7355]'>0.1mm 오차 한계를 제어하다</span>",
        card1Title: "Autodesk AutoCAD 시스템",
        card1Desc: "글로벌 규격의 복잡한 테크팩(Tech Pack)을 완벽하게 해체하고 재해석합니다. 모바일 액세서리와 가방의 완벽한 핏을 구현하기 위한 마스터 가이드라인을 전산화하여 원단 수율을 극대화합니다.",
        card2Title: "레이저 테크놀로지",
        card2Desc: "수작업의 한계를 넘어서는 첨단 레이저 재단 설비. 열 손상을 극한으로 억제하는 독자적 가공 제어로 단면의 가죽 모공과 섬유질 손상 없이 정교한 패턴 및 미세 로고 타공을 수행합니다.",
        sec2Head: "02. 자동화 양산과 입체 봉제<br><span class='text-[#8b7355]'>대량 생산 체제에서 품질을 보장하다</span>",
        card3Title: "고속 연속 프레스",
        card3Desc: "일일 수만 건의 대량 가공을 신속하게 처리하는 자동화 고압 프레스 라인입니다. 금형 고유의 정밀 규격을 100% 동일하게 복제하여 첫 번째 제품과 만 번째 제품의 완벽한 균일성을 유지합니다.",
        card4Title: "11대 특수 미싱 라인업",
        card4Desc: "컴퓨터 자동 미싱, 입체 구조 전용 타프 미싱 및 말뚝 미싱을 포함한 총 11대의 하이엔드 특수 봉제 설비를 가동합니다. 평면 봉제로는 결코 구현할 수 없는 까다로운 모서리 라운딩과 곡면 실루엣 스티치를 오차 없이 완성합니다.",
        sec3Head: "03. 생산 인프라 수치<br><span class='text-[#8b7355]'>숫자로 증명하는 신뢰성</span>",
        lblSpec1: "정밀 성형 열 프레스 설비",
        lblSpec2: "타프 · 말뚝 특수 미싱 설비",
        lblSpec3: "정밀 로고 불박기 장비"
    },
    en: {
        heroTitle: "Engineering<br>Meets Artistry.",
        heroDesc: "The fusion of structural precision and sensory detail. Introducing the high-end B2B mass production ecosystem built by The Prime Da-on.",
        sec1Head: "01. CAD Design & Laser Cutting<br><span class='text-[#8b7355]'>Controlling the 0.1mm Margin of Error</span>",
        card1Title: "Autodesk AutoCAD System",
        card1Desc: "Completely deconstruct and interpret complex global Tech Packs. By digitalizing master guidelines to realize a flawless fit for mobile accessories and bags, we maximize material yield.",
        card2Title: "Laser Technology",
        card2Desc: "Advanced laser cutting machinery expanding beyond manual craftsmanship limitations. Proprietary thermal-control processing prevents damage to leather fibers, ensuring clean perforation and micro-logo engraving.",
        sec2Head: "02. Automated Production & 3D Stitching<br><span class='text-[#8b7355]'>Securing Quality Standards in Bulk Production</span>",
        card3Title: "High-Speed Continuous Press",
        card3Desc: "An automated high-pressure press line built to seamlessly manage tens of thousands of processing requests daily. Replicating mold dimensions exactly guarantees absolute uniformity from the 1st to the 10,000th product.",
        card4Title: "11 Specialized Sewing Equipment",
        card4Desc: "Operating 11 specialized machines including automated computer sewing, tarp-type, and post-bed setups. We flawlessly execute challenging corner roundings and curved silhouettes unachievable via flat-bed methods.",
        sec3Head: "03. Infrastructure Metrics<br><span class='text-[#8b7355]'>Proven Reliability in Numbers</span>",
        lblSpec1: "Precision Thermal Press Systems",
        lblSpec2: "Specialized Tarp & Post-Bed Machines",
        lblSpec3: "High-Precision Hot Stamping Machinery"
    },
    ja: {
        heroTitle: "Engineering<br>Meets Artistry.",
        heroDesc: "構造的な精密さと感覚的なディテールの融合。ザ・プライムダ온が構築したハイエンドなB2B量産エコシステムをご紹介します。",
        sec1Head: "01. 電算設計と超精密裁断<br><span class='text-[#8b7355]'>0.1mmの誤差限界を制御する</span>",
        card1Title: "Autodesk AutoCAD システム",
        card1Desc: "グローバル規格の複雑なテックパックを完全に解体し、再解釈します。モバイルアクセサリーやバッグの完璧なフィット感を実現するためのマスターガイドラインをデータ化し、歩留まりを最大化します。",
        card2Title: "レーザーテクノロジー",
        card2Desc: "手作業の限界を超える最先端レーザー裁断設備。熱損傷を極限まで抑える独自の加工制御により、革の繊維を傷つけることなく、精巧なパターンや微細なロゴ加工を行います。",
        sec2Head: "02. 自動化量産と立体縫製<br><span class='text-[#8b7355]'>大量生産体制で品質を保証する</span>",
        card3Title: "高速連続プレス",
        card3Desc: "1日当たり数万件の大量加工を迅速に処理する自動化高圧プレスラインです。金型固有の精密規格を100%同一に複製し、最初から最後までの完璧な均一性を維持します。",
        card4Title: "11台の特殊ミシンラインアップ",
        card4Desc: "自動コンピューターミシン、立体構造専用の特殊ミシンを含む計11台の設備を稼働。平面縫製では決して実現できない、高度なコーナーラウンディングと曲線ステッチを仕上げます。",
        sec3Head: "03. 生産インフラ数値<br><span class='text-[#8b7355]'>数字で証明する信頼性</span>",
        lblSpec1: "精密成型熱プレス設備",
        lblSpec2: "特殊ミシン（腕型・筒型）設備",
        lblSpec3: "精密ロゴ刻印・箔押し機器"
    },
    zh: {
        heroTitle: "Engineering<br>Meets Artistry.",
        heroDesc: "结构精密性与感官细节的完美融合。为您介绍 The Prime Da-on 打造的高端 B2B 量产生态系统。",
        sec1Head: "01. 计算机辅助设计与超精密裁剪<br><span class='text-[#8b7355]'>将误差控制在 0.1mm 以内</span>",
        card1Title: "Autodesk AutoCAD 系统",
        card1Desc: "完美拆解并重新诠释国际标准的复杂技术规格书(Tech Pack)。通过数字化主导方针，实现数码配件与箱包的完美贴合，最大限度地提高原材料利用率。",
        card2Title: "激光加工技术",
        card2Desc: "超越手工局限的先进激光裁剪设备。依托独特的控温加工工艺，在不损伤皮革纤维结构的前提下，完成精细图案与微型标志的精准打孔。",
        sec2Head: "02. 自动化量产与立体缝制<br><span class='text-[#8b7355]'>在大批量生产中确保一致的高品质标准</span>",
        card3Title: "高速连续冲压",
        card3Desc: "高效处理每日数万件大宗加工需求的自动化高压冲压线。100%精准复制模具规格，确保第一件到第一万件产品都具备绝对的统一性。",
        card4Title: "11台特种缝纫设备阵容",
        card4Desc: "投入运转包括电脑自动缝纫、立体结构专用高台缝纫机在内的共11台高端特种缝制设备。完美攻克平面缝制无法实现的边缘圆角与弧面立体针脚。",
        sec3Head: "03. 生产基建数显<br><span class='text-[#8b7355]'>用数据见证硬实力</span>",
        lblSpec1: "精密成型热压设备",
        lblSpec2: "立体专用特种缝纫机设备",
        lblSpec3: "精密标志热烫/烫金设备"
    }
};

const localesDir = path.join(__dirname, '../src/i18n/locales');
['ko', 'en', 'ja', 'zh'].forEach(lang => {
    const filePath = path.join(localesDir, `${lang}.json`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const parsed = JSON.parse(fileContent);
    
    parsed.capabilities_bento = bentoData[lang];
    
    fs.writeFileSync(filePath, JSON.stringify(parsed, null, 2), 'utf8');
    console.log(`Updated ${lang}.json`);
});
