const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../src/i18n/locales');
const langs = ['ko', 'en', 'ja', 'zh'];

const data = {
  ko: {
    gallery_title: "보다 자세히 들여다보기.",
    status_title: "설비 현황",
    eq_cutting_title: "재단기",
    eq_laser_title: "레이저 커팅기",
    eq_laser_desc: "co2레이저 컷팅기. 도면 설계에 용이함.",
    eq_highpress_title: "고속 프레스",
    eq_highpress_desc: "롤 형태의 원단을 빠르게 재단할 수 있음.",
    eq_leathercut_title: "가죽 재단기",
    eq_leathercut_desc: "가죽 재단하는 기계임.",
    eq_sewing_title: "봉제기",
    eq_normal_sewing_title: "일반 봉제기",
    eq_normal_sewing_desc: "가죽 또는 원단을 봉제할 수 있음.",
    eq_tarp_sewing_title: "타프 봉제기",
    eq_tarp_sewing_desc: "가죽 또는 원단을 봉제할 수 있음 (굴곡진 면을 봉제할 때 사용함).",
    eq_post_sewing_title: "말뚝형 봉제기",
    eq_post_sewing_desc: "가죽 제품의 깊은 면을 봉제할 때 사용하는 특수 미싱임.",
    eq_comp_sewing_title: "컴퓨터 봉제기",
    eq_comp_sewing_desc: "컴퓨터에 입력된 위치로 봉제가 용이함.",
    eq_press_title: "프레스 및 성형",
    eq_heat_press_title: "열 프레스",
    eq_heat_press_desc: "열을 가해서 가죽을 접착할 수 있으며 금형으로 가죽을 성형할 수도 있음.",
    eq_hot_stamp_title: "불박기",
    eq_hot_stamp_desc: "각인 작업에 용이함.",
    eq_finish_title: "마감 및 기타 장비",
    eq_skiving_title: "가죽 피할기",
    eq_skiving_desc: "가죽을 부분적으로 두께 조절할 수 있음.",
    eq_dryer_title: "컨베어 건조기",
    eq_dryer_desc: "제품의 엣지코팅(기리메) 작업 후 빠른 건조를 위한 건조 장비임.",
    eq_gluing_title: "본드 접착기",
    eq_gluing_desc: "가죽 또는 원단에 본드 칠 할 때 사용함."
  },
  en: {
    gallery_title: "A Closer Look.",
    status_title: "Equipment Status",
    eq_cutting_title: "Cutting",
    eq_laser_title: "Laser Cutting Machine",
    eq_laser_desc: "CO2 laser cutter. Ideal for precise CAD design execution.",
    eq_highpress_title: "High-Speed Press",
    eq_highpress_desc: "Capable of rapidly cutting rolled fabrics.",
    eq_leathercut_title: "Leather Cutting Machine",
    eq_leathercut_desc: "Specialized machine for cutting leather.",
    eq_sewing_title: "Sewing",
    eq_normal_sewing_title: "Standard Sewing Machine",
    eq_normal_sewing_desc: "General sewing for leather and fabrics.",
    eq_tarp_sewing_title: "Tarp Sewing Machine",
    eq_tarp_sewing_desc: "Used for sewing curved surfaces on leather or fabrics.",
    eq_post_sewing_title: "Post-Bed Sewing Machine",
    eq_post_sewing_desc: "Specialized machine for sewing deep or hard-to-reach areas of leather goods.",
    eq_comp_sewing_title: "Computerized Sewing Machine",
    eq_comp_sewing_desc: "Facilitates precise sewing based on computerized positioning.",
    eq_press_title: "Press & Molding",
    eq_heat_press_title: "Heat Press",
    eq_heat_press_desc: "Applies heat to bond leather or mold it using custom dies.",
    eq_hot_stamp_title: "Hot Stamping Machine",
    eq_hot_stamp_desc: "Ideal for precise logo debossing and engraving.",
    eq_finish_title: "Finishing & Others",
    eq_skiving_title: "Leather Skiving Machine",
    eq_skiving_desc: "Used to thin specific areas of the leather.",
    eq_dryer_title: "Conveyor Dryer",
    eq_dryer_desc: "Drying equipment for rapid curing after edge coating (Kirime).",
    eq_gluing_title: "Bond Gluing Machine",
    eq_gluing_desc: "Used for applying adhesive to leather or fabrics."
  },
  ja: {
    gallery_title: "さらに詳しく見る。",
    status_title: "設備状況",
    eq_cutting_title: "裁断機",
    eq_laser_title: "レーザーカッター",
    eq_laser_desc: "CO2レーザーカッター。CAD設計通りの精密な裁断に最適。",
    eq_highpress_title: "高速プレス機",
    eq_highpress_desc: "ロール状の生地を高速で裁断可能。",
    eq_leathercut_title: "皮革裁断機",
    eq_leathercut_desc: "革の裁断に特化した専用機。",
    eq_sewing_title: "縫製機",
    eq_normal_sewing_title: "一般用ミシン",
    eq_normal_sewing_desc: "革や生地の一般的な縫製に使用。",
    eq_tarp_sewing_title: "タープミシン",
    eq_tarp_sewing_desc: "革や生地の曲面を縫製する際に使用。",
    eq_post_sewing_title: "ポストミシン",
    eq_post_sewing_desc: "革製品の深い部分や立体的な縫製に使用する特殊ミシン。",
    eq_comp_sewing_title: "コンピューターミシン",
    eq_comp_sewing_desc: "入力されたプログラムデータに基づき精密な縫製が可能。",
    eq_press_title: "プレス・成型",
    eq_heat_press_title: "熱プレス機",
    eq_heat_press_desc: "熱を利用した革の接着や、金型による革の成型に使用。",
    eq_hot_stamp_title: "箔押し機（ホットスタンプ）",
    eq_hot_stamp_desc: "ブランドロゴなどの刻印作業に最適。",
    eq_finish_title: "仕上げ・その他",
    eq_skiving_title: "革漉き機",
    eq_skiving_desc: "革の厚みを部分的に薄く調整することが可能。",
    eq_dryer_title: "コンベア乾燥機",
    eq_dryer_desc: "コバ塗り（エッジコート）後の急速乾燥用設備。",
    eq_gluing_title: "接着剤塗布機",
    eq_gluing_desc: "革や生地への接着剤塗布に使用。"
  },
  zh: {
    gallery_title: "深入了解",
    status_title: "设备概况",
    eq_cutting_title: "裁剪机",
    eq_laser_title: "激光切割机",
    eq_laser_desc: "CO2激光切割机。便于精确执行图纸设计。",
    eq_highpress_title: "高速冲压机",
    eq_highpress_desc: "可快速裁剪卷轴状面料。",
    eq_leathercut_title: "皮革裁剪机",
    eq_leathercut_desc: "用于裁剪皮革的专用设备。",
    eq_sewing_title: "缝纫机",
    eq_normal_sewing_title: "普通缝纫机",
    eq_normal_sewing_desc: "可用于皮革或面料的常规缝制。",
    eq_tarp_sewing_title: "高车缝纫机",
    eq_tarp_sewing_desc: "用于皮革或面料的曲面缝制。",
    eq_post_sewing_title: "柱车缝纫机",
    eq_post_sewing_desc: "特种缝纫机，用于缝制皮革制品的深处及立体部位。",
    eq_comp_sewing_title: "电脑缝纫机",
    eq_comp_sewing_desc: "根据电脑输入的轨迹进行精密缝制。",
    eq_press_title: "冲压与成型",
    eq_heat_press_title: "热压机",
    eq_heat_press_desc: "加热贴合皮革，或使用模具对皮革进行立体成型。",
    eq_hot_stamp_title: "烫印机",
    eq_hot_stamp_desc: "适用于品牌Logo的精美压印作业。",
    eq_finish_title: "后整与其它设备",
    eq_skiving_title: "片皮机/削皮机",
    eq_skiving_desc: "可对皮革进行局部减薄处理。",
    eq_dryer_title: "输送带烘干机",
    eq_dryer_desc: "用于边缘涂层（边油）作业后的快速烘干。",
    eq_gluing_title: "上胶机",
    eq_gluing_desc: "用于在皮革或面料上涂抹胶水。"
  }
};

langs.forEach(lang => {
  const filePath = path.join(localesDir, `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    let json = JSON.parse(fileContent);
    
    if (!json.capabilities_cinematic) {
        json.capabilities_cinematic = {};
    }
    
    const updates = data[lang];
    for (const [key, value] of Object.entries(updates)) {
      json.capabilities_cinematic[key] = value;
    }

    if (lang !== 'ko' && json.capabilities_cinematic) {
        const koContent = JSON.parse(fs.readFileSync(path.join(localesDir, 'ko.json'), 'utf8'));
        const koCinematic = koContent.capabilities_cinematic || {};
        const translations = {
            en: {
                "s1_title": "Digital CAD Engineering",
                "s1_desc": "Precise structural modeling in a digital environment establishes flawless design standards.",
                "s2_title": "Laser Cutting",
                "s2_desc": "Introducing CO2 laser technology to smoothly cut intricate and delicate curves without burning.",
                "s3_title": "High-Speed Press",
                "s3_desc": "The Prime Daon's flawless pressing process. Consistent implementation of handcrafted details even in mass production.",
                "s4_title": "Specialized Sewing",
                "s4_c1_t": "11 Specialized Sewing Machines",
                "s4_c1_d": "Flawlessly crafts 3D curved silhouettes unique to high-end brands, impossible with flat sewing.",
                "s4_c2_t": "Precision Logo Debossing",
                "s4_c2_d": "Controls heat and pressure to engrave the brand's signature beautifully.",
                "feat_quality": "<i class='fa-solid fa-circle-check'></i> Quality Control",
                "feat_mass": "<i class='fa-solid fa-circle-check'></i> Mass Production",
                "feat_precision": "<i class='fa-solid fa-circle-check'></i> Precision Tech",
                "mfg_subtitle": "Your vision,<br/>Exquisitely Manufactured."
            },
            ja: {
                "s1_title": "精密CAD設計",
                "s1_desc": "デジタル環境で構造を精密にモデリングし、完璧な設計基準を確立します。",
                "s2_title": "レーザーカッティング",
                "s2_desc": "CO2レーザー技術を導入し、複雑で繊細な曲線も焦げ跡なしで滑らかに切断します。",
                "s3_title": "高速精密裁断",
                "s3_desc": "ザ・プライムダオンならではの誤差のないプレス工程。手作業のディテールを大量生産でも一貫して再現します。",
                "s4_title": "特殊ミシン縫製",
                "s4_c1_t": "11台の特殊ミシン設備",
                "s4_c1_d": "平面縫製では不可能な、ハイエンドブランドならではの立体的な曲面シルエットを誤差なく完成させます。",
                "s4_c2_t": "精密ロゴ刻印",
                "s4_c2_d": "熱と圧力を制御し、ブランドのシグネチャーを最も際立たせるように刻印します。",
                "feat_quality": "<i class='fa-solid fa-circle-check'></i> 品質管理",
                "feat_mass": "<i class='fa-solid fa-circle-check'></i> 大量生産",
                "feat_precision": "<i class='fa-solid fa-circle-check'></i> 精密技術",
                "mfg_subtitle": "あなたのビジョン、<br/>精巧に完成される。"
            },
            zh: {
                "s1_title": "精密CAD设计",
                "s1_desc": "在数字环境中对结构进行精密建模，建立完美的系统设计标准。",
                "s2_title": "激光切割",
                "s2_desc": "引入CO2激光技术，切割复杂精细的曲线断面，无烧焦痕迹。",
                "s3_title": "高速精密冲压",
                "s3_desc": "THE PRIME DAON 独有的零误差冲压工艺。在大量生产中也能始终保持手工细节的一致性。",
                "s4_title": "特种缝纫",
                "s4_c1_t": "11台特种缝纫机",
                "s4_c1_d": "完成平面缝制无法实现的高端品牌立体曲面轮廓，零误差。",
                "s4_c2_t": "精密Logo烫印",
                "s4_c2_d": "通过控制温度和压力，将品牌的标志性Logo精美压印。",
                "feat_quality": "<i class='fa-solid fa-circle-check'></i> 质量控制",
                "feat_mass": "<i class='fa-solid fa-circle-check'></i> 批量生产",
                "feat_precision": "<i class='fa-solid fa-circle-check'></i> 精密技术",
                "mfg_subtitle": "您的愿景，<br/>精巧呈现。"
            }
        };

        const currentTrans = translations[lang] || {};
        for (const [koKey, koValue] of Object.entries(koCinematic)) {
            if (!json.capabilities_cinematic[koKey]) {
                if (currentTrans[koKey]) {
                    json.capabilities_cinematic[koKey] = currentTrans[koKey];
                } else {
                    json.capabilities_cinematic[koKey] = koValue; // fallback to ko
                }
            }
        }
    }
    
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2) + '\n');
    console.log(`Updated ${lang}.json`);
  }
});
