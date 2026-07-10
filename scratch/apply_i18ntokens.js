const fs = require('fs');
const path = require('path');

const i18nTokens = {
    ko: {
        hero_title: "모든 좋은 것이 다 오는",
        hero_desc: "더프라임다온 프리미엄 가죽 솔루션",
        stage1_title: "정밀 CAD 설계",
        stage1_desc: "디지털 환경에서 정밀하게 구조를 모델링하여 완벽한 설계 표준을 수립합니다.",
        stage2_title: "레이저 가공 (Cutting)",
        stage2_desc: "CO2 레이저 기술을 도입하여 복잡하고 섬세한 곡선 단면도 탄 자국 없이 매끄럽게 절단합니다.",
        stage3_title: "고속 정밀 절단 (Press)",
        stage3_desc: "더프라임다온만의 오차 없는 타발기 프레스 공정. 수작업의 디테일을 대량 생산 체제에서도 흐트러짐 없이 일관되게 구현합니다.",
        stage4_title: "특수 미싱 및 조립",
        stage4_desc: "숙련된 장인 정신과 특수 미싱 인프라의 결합으로 가죽의 결을 살려 완벽한 내구성을 완성합니다.",
        showroom_title: "B2B 프리미엄 룩북 쇼룸",
        showroom_desc: "더프라임다온이 제작한 독창적인 제품 라인업을 만나보세요."
    },
    en: {
        hero_title: "Where All Fine Things Come",
        hero_desc: "The Prime Daon Premium Leather Solutions",
        stage1_title: "Precision CAD Design",
        stage1_desc: "Accurate structural modeling in a digital environment to establish the perfect blueprint.",
        stage2_title: "Laser Processing (Cutting)",
        stage2_desc: "Advanced CO2 laser technology ensures smooth, flawless cutting of complex curves without burn marks.",
        stage3_title: "High-Speed Precision Press",
        stage3_desc: "The Prime Daon's proprietary clicking press process consistently replicates artisanal details even in mass production.",
        stage4_title: "Special Stitching & Assembly",
        stage4_desc: "Combining experienced craftsmanship with specialized sewing infrastructure to bring out unparalleled durability.",
        showroom_title: "B2B Premium Lookbook Showroom",
        showroom_desc: "Explore our masterfully crafted original leather product lineups."
    },
    ja: {
        hero_title: "すべての良きことが訪れる",
        hero_desc: "ザ・プライムダオン プレミアムレザーソリューション",
        stage1_title: "精密CAD設計",
        stage1_desc: "デジタル環境で精密に構造をモデリングし、完璧な設計標準を確立します。",
        stage2_title: "レーザー加工 (Cutting)",
        stage2_desc: "CO2レーザー技術を導入し、複雑で繊細な曲線断面も焦げ跡なく滑らかに切断します。",
        stage3_title: "高速精密裁断 (Press)",
        stage3_desc: "ザ・プライムダオン独自のクリッカープレス工程。手作業のディテールを大量生産体制でも乱れなく均一に実現します。",
        stage4_title: "特殊ミシンと組立",
        stage4_desc: "熟練した職人精神と特殊ミシンインフラの結合により、革の風合いを生かした完璧な耐久性を完成させます。",
        showroom_title: "B2B プレミアム ルックブック ショールーム",
        showroom_desc: "ザ・プライムダオンが製作した独創的な製品ラインナップをご覧ください。"
    },
    zh: {
        hero_title: "万福云集之地",
        hero_desc: "The Prime Daon 顶级皮革制造方案",
        stage1_title: "精准 CAD 设计",
        stage1_desc: "在数字化环境中精准建模，确立完美的生产标准蓝图。",
        stage2_title: "激光切割加工 (Cutting)",
        stage2_desc: "采用先进的 CO2 激光切割技术，完美切割复杂精致的曲线且不留焦痕。",
        stage3_title: "高速精密模切 (Press)",
        stage3_desc: "The Prime Daon 独家精密裁断冲床工艺。在量产体系中依然能够完美复刻手工定制的细腻质感。",
        stage4_title: "特种缝纫与组装",
        stage4_desc: "匠人精湛手艺与特种缝纫设备的深度结合，顺应皮革纹理，打造无可比拟的经久耐用度。",
        showroom_title: "B2B 高端画册展厅",
        showroom_desc: "探索由 The Prime Daon 精心打造的原创皮革系列产品。"
    }
};

const localesDir = path.join(__dirname, '../src/i18n/locales');
['ko', 'en', 'ja', 'zh'].forEach(lang => {
    const filePath = path.join(localesDir, `${lang}.json`);
    if (fs.existsSync(filePath)) {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const t = i18nTokens[lang];
        
        // Hero
        if (data.hero) {
            data.hero.title = t.hero_title;
            data.hero.subtitle = t.hero_desc;
        }

        // Stages (assuming capabilities_process.steps exists)
        if (data.capabilities_process && data.capabilities_process.steps) {
            data.capabilities_process.steps[0].title = t.stage1_title;
            data.capabilities_process.steps[0].desc = t.stage1_desc;
            data.capabilities_process.steps[1].title = t.stage2_title;
            data.capabilities_process.steps[1].desc = t.stage2_desc;
            data.capabilities_process.steps[2].title = t.stage3_title;
            data.capabilities_process.steps[2].desc = t.stage3_desc;
            data.capabilities_process.steps[3].title = t.stage4_title;
            data.capabilities_process.steps[3].desc = t.stage4_desc;
        }

        // Showroom
        if (data.showroom) {
            data.showroom.title = t.showroom_title;
            data.showroom.subtitle = t.showroom_desc;
        }

        // Also update capabilities_cinematic if it exists, since CinematicCapabilities uses it
        if (data.capabilities_cinematic) {
            data.capabilities_cinematic.h_title = t.hero_title;
            data.capabilities_cinematic.h_desc = t.hero_desc;
            data.capabilities_cinematic.s1_title = t.stage1_title;
            data.capabilities_cinematic.s1_desc = t.stage1_desc;
            data.capabilities_cinematic.s2_title = t.stage2_title;
            data.capabilities_cinematic.s2_desc = t.stage2_desc;
            data.capabilities_cinematic.s3_title = t.stage3_title;
            data.capabilities_cinematic.s3_desc = t.stage3_desc;
            data.capabilities_cinematic.s4_title = t.stage4_title;
            data.capabilities_cinematic.s4_desc = t.stage4_desc;
        }

        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`Updated ${lang}.json`);
    }
});
