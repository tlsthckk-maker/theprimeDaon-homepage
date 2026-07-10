const fs = require('fs');
const path = require('path');

const i18nTokens = {
    ko: {
        feat_quality: "품질 관리", feat_mass: "대량 생산", feat_precision: "정밀 기술"
    },
    en: {
        feat_quality: "Quality Control", feat_mass: "Mass Production", feat_precision: "Precision Tech"
    },
    ja: {
        feat_quality: "品質管理", feat_mass: "大量生産", feat_precision: "精密技術"
    },
    zh: {
        feat_quality: "质量管理", feat_mass: "批量生产", feat_precision: "精密技术"
    }
};

const localesDir = path.join(__dirname, '../src/i18n/locales');
['ko', 'en', 'ja', 'zh'].forEach(lang => {
    const filePath = path.join(localesDir, `${lang}.json`);
    if (fs.existsSync(filePath)) {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const t = i18nTokens[lang];
        
        if (data.capabilities_cinematic) {
            data.capabilities_cinematic.feat_quality = t.feat_quality;
            data.capabilities_cinematic.feat_mass = t.feat_mass;
            data.capabilities_cinematic.feat_precision = t.feat_precision;
        }

        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`Updated ${lang}.json features`);
    }
});
