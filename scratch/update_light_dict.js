const fs = require('fs');
const path = require('path');

const lightDict = {
    ko: {
        heroTitle: "당신의 비전,<br>정교하게 제조되다.",
        heroDesc: "구조적 정밀함과 감각적 디테일의 융합. 더프라임다온이 구축한 하이엔드 B2B 양산 생태계를 경험하십시오.",
        card1Title: "Digital Precision Engineering",
        card1Desc: "오토캐드(AutoCAD) 기반의 정밀 2D/3D 엔지니어링. 복잡한 테크팩을 완벽하게 분석하고 0.1mm의 오차도 허용하지 않는 설계로 원단 수율을 극대화합니다.",
        card2Title: "Ultra-Precision<br>Laser Cutting",
        card2Desc: "수작업의 한계를 넘어서는 첨단 레이저. 가죽의 섬유질 손상 없이 정교한 패턴을 타공합니다.",
        card3Title: "High-Speed<br>Automated Press",
        card3Desc: "일일 수만 건의 물량을 신속하게 처리하는 고압 프레스 라인. 언제나 첫 번째 제품과 동일한 규격을 유지합니다.",
        card4Title: "Master-Level Specialized Sewing",
        card4Desc: "입체 구조 전용 타프 미싱 및 자동 컴퓨터 미싱 등 총 11대의 특수 봉제 라인. 평면 봉제로는 구현할 수 없는 까다로운 곡면 실루엣 스티치를 오차 없이 완성합니다.",
        lblSpec1: "정밀 성형 열 프레스 설비",
        lblSpec2: "타프 · 말뚝 특수 미싱 설비",
        lblSpec3: "정밀 로고 불박기 장비"
    },
    en: {
        heroTitle: "Your Vision,<br>Exquisitely Manufactured.",
        heroDesc: "The fusion of structural precision and sensory detail. Experience the high-end B2B mass production ecosystem built by The Prime Da-on.",
        card1Title: "Digital Precision Engineering",
        card1Desc: "Autodesk AutoCAD-based 2D/3D engineering. We analyze complex Tech Packs perfectly and maximize yield with a design that tolerates zero error.",
        card2Title: "Ultra-Precision<br>Laser Cutting",
        card2Desc: "Advanced laser tech beyond manual limits. Perforating intricate patterns without damaging leather fibers.",
        card3Title: "High-Speed<br>Automated Press",
        card3Desc: "High-pressure press lines handling tens of thousands of units daily. Always maintaining identical specs to the very first unit.",
        card4Title: "Master-Level Specialized Sewing",
        card4Desc: "11 specialized sewing lines including tarp and computer-automated machines. We flawlessly complete curved 3D silhouettes impossible with standard flat sewing.",
        lblSpec1: "Thermal Presses for Molding",
        lblSpec2: "Specialized Tarp & Post-Bed Machines",
        lblSpec3: "High-Precision Hot Stamping Machinery"
    },
    ja: {
        heroTitle: "あなたのビジョン、<br>精巧に製造される。",
        heroDesc: "構造的な精密さと感覚的なディテールの融合。ザ・プライムダオンが構築したハイエンドなB2B量産エコシステムを体験してください。",
        card1Title: "Digital Precision Engineering",
        card1Desc: "AutoCADベースの精密2D/3Dエンジニアリング。複雑なテックパックを完全に分析し、0.1mmの誤差も許さない設計で歩留まりを最大化します。",
        card2Title: "Ultra-Precision<br>Laser Cutting",
        card2Desc: "手作業の限界を超える最先端レーザー。革の繊維を傷つけることなく、精巧なパターンを加工します。",
        card3Title: "High-Speed<br>Automated Press",
        card3Desc: "1日当たり数万件を迅速に処理する高圧プレスライン。常に最初の製品と同じ規格を維持します。",
        card4Title: "Master-Level Specialized Sewing",
        card4Desc: "立体構造専用の特殊ミシンを含む計11台の縫製ライン。平面縫製では実現できない複雑な曲面のシルエットを完璧に仕上げます。",
        lblSpec1: "精密成型熱プレス設備",
        lblSpec2: "特殊ミシン（腕型・筒型）設備",
        lblSpec3: "精密ロゴ刻印・箔押し機器"
    },
    zh: {
        heroTitle: "您的愿景，<br>精湛制造。",
        heroDesc: "结构精密性与感官细节的完美融合。体验 The Prime Da-on 打造的高端 B2B 量产生态系统。",
        card1Title: "Digital Precision Engineering",
        card1Desc: "基于AutoCAD的精密2D/3D工程设计。完美分析复杂的技术规格书，以零误差的设计最大化材料利用率。",
        card2Title: "Ultra-Precision<br>Laser Cutting",
        card2Desc: "超越手工局限的先进激光。在不损伤皮革纤维的情况下打出精美的图案。",
        card3Title: "High-Speed<br>Automated Press",
        card3Desc: "每日快速处理数万件产品的高压冲压线。始终保持与第一件产品完全相同的规格。",
        card4Title: "Master-Level Specialized Sewing",
        card4Desc: "包括立体结构专用缝纫机在内的11条特种缝纫线。完美实现平面缝纫无法完成的复杂弧面轮廓。",
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
    
    parsed.capabilities_light = lightDict[lang];
    
    fs.writeFileSync(filePath, JSON.stringify(parsed, null, 2), 'utf8');
    console.log(`Updated ${lang}.json`);
});
