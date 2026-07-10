const fs = require('fs');
const path = require('path');

const newDict = {
    ko: {
        heroTitle: "Manufacturing<br>Excellence",
        heroDesc: "더프라임다온이 구축한 하이엔드 B2B 양산 생태계의 모든 공정을 공개합니다.",
        s1Title: "디지털 정밀 설계<br>0.1mm 오차 한계를 넘다",
        s1Desc: "Autodesk AutoCAD 시스템을 기반으로 글로벌 브랜드의 테크팩(Tech Pack)을 완벽하게 분석합니다. 디자인을 정밀한 데이터로 변환하여 원단 수율을 극대화하고 핏의 오차를 원천 차단합니다.",
        s2Title: "열 손상을 통제하는<br>초정밀 레이저 재단",
        s2Desc: "수작업의 한계를 넘어서는 첨단 레이저 설비. 가죽의 모공과 섬유질 손상을 극한으로 억제하며, 복잡한 패턴과 미세 로고 타공을 완벽한 단면으로 잘라냅니다.",
        s3Title: "흔들림 없는 균일성,<br>자동화 고속 양산 체제",
        s3Sub: "고속 연속 프레스 라인",
        s3Desc: "금형 고유의 정밀 규격을 100% 동일하게 복제하는 고압 프레스 라인입니다. 일일 수만 건의 물량을 처리하면서도 첫 번째 제품과 만 번째 제품의 퀄리티가 완벽하게 동일합니다.",
        s3Kpi: "일일 생산 가능 수량 (Units/Day)",
        s4Title: "평면을 입체로 만드는<br>마스터 레벨 특수 봉제",
        c1Title: "타프 및 말뚝 미싱",
        c1Desc: "일반 평면 봉제로는 불가능한 하이엔드 가방 및 케이스의 입체적 곡면 실루엣을 완성합니다.",
        c2Title: "자동 컴퓨터 미싱",
        c2Desc: "입력된 데이터에 따라 명품 기준의 한 치 오차 없는 일정한 땀수(Stitch)와 간격을 보장합니다.",
        c3Title: "정밀 열 성형 및 각인",
        c3Desc: "가죽 전용 불박기를 활용하여 브랜드 로고를 선명하고 고급스럽게 각인하는 최종 마감 공정입니다.",
        stat1: "정밀 성형용 열 프레스",
        stat2: "타프/말뚝 등 특수 미싱",
        stat3: "자동 미싱 및 로고 불박기"
    },
    en: {
        heroTitle: "Manufacturing<br>Excellence",
        heroDesc: "Unveiling the high-end B2B mass production ecosystem built by The Prime Da-on.",
        s1Title: "Digital Precision<br>Beyond 0.1mm Limits",
        s1Desc: "Based on Autodesk AutoCAD, we perfectly analyze Tech Packs from global brands. Converting design into precise data maximizes yield and completely eliminates fit errors.",
        s2Title: "Ultra-Precision Laser<br>Controlling Thermal Damage",
        s2Desc: "Advanced laser equipment beyond manual limits. We suppress damage to leather fibers to the extreme, cutting complex patterns and micro-logos with perfect edges.",
        s3Title: "Unwavering Uniformity,<br>High-Speed Automation",
        s3Sub: "Continuous Press Line",
        s3Desc: "A high-pressure press line that replicates mold specifications 100%. Managing tens of thousands of units daily, the 10,000th product is identical to the first.",
        s3Kpi: "Daily Production Capacity (Units)",
        s4Title: "Turning 2D into 3D:<br>Master-Level Stitching",
        c1Title: "Tarp & Post-Bed Machines",
        c1Desc: "Achieves 3D curved silhouettes for high-end bags and cases, impossible with standard flat sewing.",
        c2Title: "Auto Computer Sewing",
        c2Desc: "Ensures uniform stitch counts and spacing without a single error, meeting luxury standards.",
        c3Title: "Hot Stamping & Molding",
        c3Desc: "The final finishing process using dedicated leather hot stampers for clear, luxurious brand logo engraving.",
        stat1: "Thermal Presses for Molding",
        stat2: "Specialized Sewing Machines",
        stat3: "Auto Sewing & Hot Stampers"
    }
};

const localesDir = path.join(__dirname, '../src/i18n/locales');
['ko', 'en', 'ja', 'zh'].forEach(lang => {
    const filePath = path.join(localesDir, `${lang}.json`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const parsed = JSON.parse(fileContent);
    
    parsed.capabilities_excellence = newDict[lang] || newDict.en;
    
    fs.writeFileSync(filePath, JSON.stringify(parsed, null, 2), 'utf8');
    console.log(`Updated ${lang}.json`);
});
