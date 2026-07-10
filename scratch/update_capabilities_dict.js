const fs = require('fs');
const path = require('path');

const langData = {
    ko: {
        headerTitle: "제조 프로세스",
        headerDesc: "최첨단 기술과 숙련된 노하우의 완벽한 조화",
        steps: [
            {
                title: "디지털 정밀 설계",
                desc: "오토캐드(AutoCAD)를 이용한 2D/3D 엔지니어링으로 0.1mm의 오차도 허용하지 않는 완벽한 칼선 설계를 진행합니다.",
                detail: ["글로벌 브랜드 테크팩(Tech Pack) 완벽 분석", "원단 수율 최적화를 위한 효율적 네스팅"],
                image: "/cad_step.jpg"
            },
            {
                title: "초정밀 레이저 재단",
                desc: "복잡한 패턴과 미세한 로고 타공을 위한 최첨단 레이저 설비를 운용하여 가죽 단면의 퀄리티를 극대화합니다.",
                detail: ["열 손상 최소화 가공 기술", "대량 양산을 위한 고속 재단 시스템"],
                image: "/laser_step.jpg"
            },
            {
                title: "고속 자동화 프레스",
                desc: "강력한 고압 프레스 라인을 통해 일일 수만 건의 물량을 균일한 규격으로 신속하게 생산해냅니다.",
                detail: ["균일한 규격 유지를 위한 정밀 금형 운용", "글로벌 대량 발주에 최적화된 납기 경쟁력"],
                image: "/press_step.jpg"
            },
            {
                title: "마스터 레벨 특수 봉제",
                desc: "11대의 특수 미싱 설비를 보유하여 일반 봉제로 구현 불가능한 입체적이고 견고한 프리미엄 스티치를 완성합니다.",
                detail: ["입체 구조를 위한 전용 타프 미싱 운용", "명품 기준의 균일한 땀수와 마감 퀄리티"],
                image: "/sewing_step.jpg"
            }
        ]
    },
    en: {
        headerTitle: "Manufacturing Process",
        headerDesc: "Perfect Harmony of Advanced Technology and Expert Know-how",
        steps: [
            {
                title: "Digital Precision Engineering",
                desc: "Using Autodesk AutoCAD, we execute 2D/3D engineering to ensure perfect dieline design with zero margin for error.",
                detail: ["In-depth Tech Pack Analysis", "Optimal Material Nesting for Maximum Yield"],
                image: "/cad_step.jpg"
            },
            {
                title: "Ultra-Precision Laser Cutting",
                desc: "Operating advanced laser equipment for complex patterns and micro-perforations to maximize edge quality.",
                detail: ["Heat-Minimize Processing Technology", "High-Speed Cutting System for Mass Production"],
                image: "/laser_step.jpg"
            },
            {
                title: "High-Speed Automated Press",
                desc: "Producing tens of thousands of units daily in uniform standards through high-pressure press lines.",
                detail: ["Precision Mold Management", "Optimized Lead-Time for Global Bulk Orders"],
                image: "/press_step.jpg"
            },
            {
                title: "Master-Level Specialized Sewing",
                desc: "With 11 specialized machines, we achieve premium, 3D stitching that is impossible with standard sewing.",
                detail: ["Tarp-type Sewing for 3D Structures", "Uniform Stitch Quality Meeting Luxury Standards"],
                image: "/sewing_step.jpg"
            }
        ]
    },
    ja: {
        headerTitle: "製造プロセス",
        headerDesc: "最先端技術と熟練したノウハウの完璧な調和",
        steps: [
            {
                title: "デジタル精密設計",
                desc: "AutoCADを利用した2D/3Dエンジニアリングで、0.1mmの誤差も許さない完璧な設計を行います。",
                detail: ["グローバルブランドのテックパック分析", "効率的なネスティングによる歩留まり向上"],
                image: "/cad_step.jpg"
            },
            {
                title: "超精密レーザー裁断",
                desc: "複雑なパターンや微細なロゴ加工のための最先端設備を運用し、革の断面品質を極大化します。",
                detail: ["熱損傷最小化加工技術", "量産のための高速裁단システム"],
                image: "/laser_step.jpg"
            },
            {
                title: "高速自動化プレス",
                desc: "強力な高圧プレスラインを通じ、1日当たり数万件の物量を均一な規格で迅速に生産します。",
                detail: ["精密な金型運用による規格維持", "グローバル受注に最適化された納期競争力"],
                image: "/press_step.jpg"
            },
            {
                title: "マ스터レベル特殊縫製",
                desc: "11台の特殊ミシン設備を保有し、プレミアムで堅牢なステッチを完成させます。",
                detail: ["立体構造のための特殊ミシン運用", "名品基準の均一な縫い目と仕上げ品質"],
                image: "/sewing_step.jpg"
            }
        ]
    },
    zh: {
        headerTitle: "制造流程",
        headerDesc: "先端技术与熟练经验的完美结合",
        steps: [
            {
                title: "数字精密设计",
                desc: "利用AutoCAD进行2D/3D工程设计，确保0.1mm误差以内的精准设计。",
                detail: ["全球品牌规格书(Tech Pack)深入分析", "提高原材料利用率的高效排版"],
                image: "/cad_step.jpg"
            },
            {
                title: "超精密激光裁剪",
                desc: "运用尖端激光设备，实现复杂图案和微孔加工，最大程度提升皮革切面质量。",
                detail: ["减少热损伤加工技术", "针对大批量生产的高速裁剪系统"],
                image: "/laser_step.jpg"
            },
            {
                title: "高速自动化冲压",
                desc: "通过高压冲压线，每日高效、精准地生产数万件统一规格的产品。",
                detail: ["精密模具管理", "针对全球大宗订单优化的交付竞争力"],
                image: "/press_step.jpg"
            },
            {
                title: "大师级特殊缝制",
                desc: "拥有11台特种缝纫设备，完成普通缝制无法实现的立体、坚固的高端缝线。",
                detail: ["立体结构专用特种缝纫机", "符合名品标准的均匀针距与收边质量"],
                image: "/sewing_step.jpg"
            }
        ]
    }
};

const localesDir = path.join(__dirname, '../src/i18n/locales');
const langs = ['ko', 'en', 'ja', 'zh'];

langs.forEach(lang => {
    const filePath = path.join(localesDir, `${lang}.json`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const parsed = JSON.parse(fileContent);
    
    parsed.capabilities_process = langData[lang];
    
    fs.writeFileSync(filePath, JSON.stringify(parsed, null, 2), 'utf8');
    console.log(`Updated ${lang}.json`);
});
