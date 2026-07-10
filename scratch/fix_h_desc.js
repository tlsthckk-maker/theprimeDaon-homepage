const fs = require('fs');
const path = require('path');

const correctDescriptions = {
    ko: "압도적인 제조 인프라, 완벽을 향한 시스템. 더프라임다온이 구축한 하이엔드 B2B 양산 생태계를 경험하십시오.",
    en: "The fusion of precision and sensory detail. Experience The Prime Da-on's high-end mass production ecosystem.",
    ja: "圧倒的な製造インフラ、完璧を目指すシステム。ザ・プライムダオンが構築したハイエンドB2B量産エコシステムをご体験ください。",
    zh: "压倒性的制造基础设施，追求完美的系统。体验The Prime Daon构建的高端B2B量产生态圈。"
};

const localesDir = path.join(__dirname, '../src/i18n/locales');
['ko', 'en', 'ja', 'zh'].forEach(lang => {
    const filePath = path.join(localesDir, `${lang}.json`);
    if (fs.existsSync(filePath)) {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        
        if (data.capabilities_cinematic) {
            data.capabilities_cinematic.h_desc = correctDescriptions[lang];
        }

        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`Fixed ${lang}.json h_desc`);
    }
});
