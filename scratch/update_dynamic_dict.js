const fs = require('fs');
const path = require('path');

const dynamicDict = {
    ko: {
        h_title: "Your Vision,<br>Exquisitely Manufactured.", 
        h_desc: "구조적 정밀함과 감각적 디테일의 융합. 더프라임다온의 하이엔드 양산 생태계를 경험하십시오.",
        s1_title: "Digital Precision", 
        s1_desc: "Autodesk AutoCAD 기반의 정밀 설계. 글로벌 테크팩을 분석하여 0.1mm의 오차도 허용하지 않는 완벽한 핏을 전산화합니다.",
        s2_title: "Laser Sharpness", 
        s2_desc: "수작업의 한계를 넘어서는 첨단 레이저. 열 제어 기술로 가죽 손상 없이 정교한 패턴을 완벽한 단면으로 타공합니다.",
        s3_title: "Massive Efficiency", 
        s3_desc: "일일 수만 건을 처리하는 고압 프레스 라인. 만 번째 제품도 첫 번째와 완벽히 동일한 퀄리티를 유지합니다.",
        s4_title: "Master Stitch", 
        s4_c1_t: "11대 특수 미싱 라인업", 
        s4_c1_d: "타프, 말뚝, 자동 미싱 등 평면 봉제로는 구현 불가능한 하이엔드 브랜드만의 입체적 곡면 실루엣을 오차 없이 완성합니다.",
        s4_c2_t: "로고 정밀 불박", 
        s4_c2_d: "열과 압력을 제어하여 브랜드의 시그니처를 가장 돋보이게 각인합니다.",
        stat_title: "Numbers that Prove Trust", 
        stat_1: "정밀 성형용 열 프레스", 
        stat_2: "타프 · 말뚝 특수 미싱", 
        stat_3: "정밀 각인 불박기"
    },
    en: {
        h_title: "Your Vision,<br>Exquisitely Manufactured.", 
        h_desc: "The fusion of precision and sensory detail. Experience The Prime Da-on's high-end mass production ecosystem.",
        s1_title: "Digital Precision", 
        s1_desc: "AutoCAD-based precision design. Analyzing global Tech Packs to digitize a perfect fit with zero tolerance for error.",
        s2_title: "Laser Sharpness", 
        s2_desc: "Advanced lasers beyond manual limits. Perforating intricate patterns with perfect edges without damaging leather fibers.",
        s3_title: "Massive Efficiency", 
        s3_desc: "High-pressure press lines handling tens of thousands of units daily. The 10,000th product matches the first perfectly.",
        s4_title: "Master Stitch", 
        s4_c1_t: "11 Specialized Sewing Lines", 
        s4_c1_d: "Completing 3D curved silhouettes impossible with standard flat sewing.",
        s4_c2_t: "Precision Hot Stamping", 
        s4_c2_d: "Controlling heat and pressure to engrave the brand signature luxuriously.",
        stat_title: "Numbers that Prove Trust", 
        stat_1: "Thermal Molding Presses", 
        stat_2: "Specialized Sewing Machines", 
        stat_3: "Precision Hot Stampers"
    }
};

const localesDir = path.join(__dirname, '../src/i18n/locales');
['ko', 'en', 'ja', 'zh'].forEach(lang => {
    const filePath = path.join(localesDir, `${lang}.json`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const parsed = JSON.parse(fileContent);
    
    parsed.capabilities_dynamic = dynamicDict[lang] || dynamicDict.en;
    
    fs.writeFileSync(filePath, JSON.stringify(parsed, null, 2), 'utf8');
    console.log(`Updated ${lang}.json`);
});
