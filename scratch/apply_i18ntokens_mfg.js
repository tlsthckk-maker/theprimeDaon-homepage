const fs = require('fs');
const path = require('path');

const i18nTokens = {
    ko: {
        mfg_subtitle: "당신의 비전, 정교하게 완성되다.",
        feat_quality: "<i class='fa-solid fa-circle-check'></i> 품질 관리",
        feat_mass: "<i class='fa-solid fa-circle-check'></i> 대량 생산",
        feat_precision: "<i class='fa-solid fa-circle-check'></i> 정밀 기술"
    },
    en: {
        mfg_subtitle: "Your vision, masterfully brought to life.",
        feat_quality: "<i class='fa-solid fa-circle-check'></i> Quality Control",
        feat_mass: "<i class='fa-solid fa-circle-check'></i> Mass Production",
        feat_precision: "<i class='fa-solid fa-circle-check'></i> Precision Tech"
    },
    ja: {
        mfg_subtitle: "あなたのビジョン、精巧に具現化される。",
        feat_quality: "<i class='fa-solid fa-circle-check'></i> 品質管理",
        feat_mass: "<i class='fa-solid fa-circle-check'></i> 大量生産",
        feat_precision: "<i class='fa-solid fa-circle-check'></i> 精密技術"
    },
    zh: {
        mfg_subtitle: "您的远见卓识，在此精准达成。",
        feat_quality: "<i class='fa-solid fa-circle-check'></i> 质量管理",
        feat_mass: "<i class='fa-solid fa-circle-check'></i> 批量生产",
        feat_precision: "<i class='fa-solid fa-circle-check'></i> 精密技术"
    }
};

const localesDir = path.join(__dirname, '../src/i18n/locales');
['ko', 'en', 'ja', 'zh'].forEach(lang => {
    const filePath = path.join(localesDir, `${lang}.json`);
    if (fs.existsSync(filePath)) {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const t = i18nTokens[lang];
        
        if (data.capabilities_cinematic) {
            data.capabilities_cinematic.mfg_subtitle = t.mfg_subtitle;
            data.capabilities_cinematic.feat_quality = t.feat_quality;
            data.capabilities_cinematic.feat_mass = t.feat_mass;
            data.capabilities_cinematic.feat_precision = t.feat_precision;
        }

        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`Updated ${lang}.json`);
    }
});
