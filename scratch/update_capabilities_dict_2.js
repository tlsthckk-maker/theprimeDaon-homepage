const fs = require('fs');
const path = require('path');

const newTexts = {
    ko: {
      s1Title: "Digital Precision",
      s1Desc: "오토캐드(AutoCAD) 기반의 정밀 설계. 0.1mm의 오차도 허용하지 않는 완벽한 패턴이 제품의 시작입니다.",
      s2Title: "Laser Sharpness",
      s2Desc: "열 손상을 최소화하는 최첨단 레이저 재단기(1대)와 스키/부분 피할기(1대)로 가죽 본연의 질감을 보호합니다.",
      s3Title: "Massive Efficiency",
      s3Desc: "고속 프레스(2대)와 정밀 성형용 열 프레스(9대) 라인. 일일 대량 물량에서도 흔들리지 않는 균일한 규격을 보장합니다.",
      s4Title: "Master Stitch",
      s4Desc: "자동 미싱 3대, 타프/말뚝 등 특수 미싱 6대, 그리고 불박기 3대. 하이엔드 브랜드만의 입체적 실루엣과 완벽한 각인을 완성합니다."
    },
    en: {
      s1Title: "Digital Precision",
      s1Desc: "Autodesk AutoCAD-based engineering. A perfect design with zero margin for error is the start of every product.",
      s2Title: "Laser Sharpness",
      s2Desc: "Advanced laser cutting and skiving machines minimize heat damage and protect the natural texture of the leather.",
      s3Title: "Massive Efficiency",
      s3Desc: "High-speed and thermal press lines handle bulk orders, guaranteeing uniform standards effortlessly.",
      s4Title: "Master Stitch",
      s4Desc: "Powered by 9 specialized sewing machines and 3 hot stamping machines. We create 3D silhouettes unique to luxury brands."
    }
};

const localesDir = path.join(__dirname, '../src/i18n/locales');
['ko', 'en', 'ja', 'zh'].forEach(lang => {
    const filePath = path.join(localesDir, `${lang}.json`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const parsed = JSON.parse(fileContent);
    
    // Update the steps based on new structure
    if (newTexts[lang]) {
        parsed.capabilities_apple = newTexts[lang];
    } else {
        // Fallback for ja, zh using existing or english for titles
        parsed.capabilities_apple = {
            s1Title: "Digital Precision",
            s1Desc: parsed.capabilities_process?.steps[0]?.desc || "",
            s2Title: "Laser Sharpness",
            s2Desc: parsed.capabilities_process?.steps[1]?.desc || "",
            s3Title: "Massive Efficiency",
            s3Desc: parsed.capabilities_process?.steps[2]?.desc || "",
            s4Title: "Master Stitch",
            s4Desc: parsed.capabilities_process?.steps[3]?.desc || ""
        };
    }
    
    fs.writeFileSync(filePath, JSON.stringify(parsed, null, 2), 'utf8');
    console.log(`Updated ${lang}.json`);
});
