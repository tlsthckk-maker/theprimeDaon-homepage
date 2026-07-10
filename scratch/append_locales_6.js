const fs = require('fs');
const path = require('path');

const localesDir = "src/i18n/locales";

const newItems = {
    "ko": [
        {"id": 63, "category": "tech", "label": "산업용/특수 장비 가죽 케이스", "name": "다온74", "description": "하이엔드 오디오 기기 등을 안전하게 보호하며 방열을 돕는 메탈 그릴 디자인이 결합된 프리미엄 케이스입니다.", "image": "/images/Ai_Daon_51_2.png"},
        {"id": 64, "category": "bag", "label": "다목적 소형 미니 파우치", "name": "다온75", "description": "견고한 캔버스 질감의 소재와 미니 핸들, 카라비너를 장착하여 아웃도어 및 일상에서 실용적인 토트형 파우치입니다.", "image": "/images/Ai_Daon_52.png"},
        {"id": 65, "category": "leather", "label": "컴팩트 지갑 / 슬림 카드홀더", "name": "다온76", "description": "기업의 로고 각인이 적용되어 VIP 판촉용이나 임직원 웰컴 키트로 선호도가 높은 클래식한 가죽 명함 지갑입니다.", "image": "/images/Ai_Daon_53.png"},
        {"id": 66, "category": "bag", "label": "미니 체인 백 / 사첼백 / 크로스백", "name": "다온77", "description": "우아한 카멜 컬러의 크로커다일 패턴 가죽과 얇은 스트랩이 어우러져 세련된 룩을 완성하는 미니 크로스백입니다.", "image": "/images/Ai_Daon_54.png"},
        {"id": 67, "category": "lifestyle", "label": "가죽 스트랩 & 루프 키링", "name": "다온78", "description": "부드러운 아이보 가죽과 정교한 메탈 버클로 제작되어 다목적 액세서리로 활용 가능한 가죽 스트랩입니다.", "image": "/images/Ai_Daon_55.png"},
        {"id": 68, "category": "leather", "label": "가죽 러기지택 / 네임택", "name": "다온79", "description": "브랜드 로고 각인과 깔끔한 스티치 마감이 돋보이는 모던한 베이지 컬러의 여행용 가죽 네임택입니다.", "image": "/images/Ai_Daon_56.png"},
        {"id": 69, "category": "tech", "label": "에어팟 / 버즈 가죽 케이스", "name": "다온80", "description": "유니크하고 트렌디한 동물 자수 패치가 더해져 브랜드의 개성을 확실하게 표현할 수 있는 이어폰 케이스입니다.", "image": "/images/Ai_Daon_57.png"},
        {"id": 70, "category": "bag", "label": "다목적 소형 미니 파우치", "name": "다온81", "description": "벨트나 가방에 쉽게 체결할 수 있는 카라비너가 부착되어 형태 유지력이 뛰어난 베이지 소형 파우치입니다.", "image": "/images/Ai_Daon_58.png"},
        {"id": 71, "category": "bag", "label": "다목적 소형 미니 파우치", "name": "다온82", "description": "기하학적인 메탈 컷아웃 패턴과 블랙 가죽이 결합되어 미래지향적인 분위기를 자아내는 하드 쉘 케이스입니다.", "image": "/images/Ai_Daon_59.png"},
        {"id": 72, "category": "bag", "label": "다목적 소형 미니 파우치", "name": "다온83", "description": "시계나 주얼리 등 귀중품을 안전하게 보관할 수 있도록 내부 맞춤형 쿠션 폼이 적용된 선명한 블루 컬러의 하드 파우치입니다.", "image": "/images/Ai_Daon_60.png"}
    ],
    "en": [
        {"id": 63, "category": "tech", "label": "Industrial / Special Equipment Leather Case", "name": "Daon 74", "description": "A premium case combined with a metal grill design that safely protects high-end audio devices and helps with heat dissipation.", "image": "/images/Ai_Daon_51_2.png"},
        {"id": 64, "category": "bag", "label": "Multi-purpose Mini Pouch", "name": "Daon 75", "description": "A practical tote-type pouch for outdoors and daily life, equipped with a sturdy canvas-textured material, a mini handle, and a carabiner.", "image": "/images/Ai_Daon_52.png"},
        {"id": 65, "category": "leather", "label": "Compact Wallet / Slim Card Holder", "name": "Daon 76", "description": "A classic leather business card wallet highly preferred for VIP promotions or employee welcome kits with a company logo engraving applied.", "image": "/images/Ai_Daon_53.png"},
        {"id": 66, "category": "bag", "label": "Mini Chain Bag / Satchel Bag / Crossbag", "name": "Daon 77", "description": "A mini crossbag that completes a sophisticated look by harmonizing an elegant camel color crocodile pattern leather and a thin strap.", "image": "/images/Ai_Daon_54.png"},
        {"id": 67, "category": "lifestyle", "label": "Leather Strap & Loop Keyring", "name": "Daon 78", "description": "A leather strap that can be used as a multi-purpose accessory, made of soft ivory leather and an elaborate metal buckle.", "image": "/images/Ai_Daon_55.png"},
        {"id": 68, "category": "leather", "label": "Leather Luggage Tag / Name Tag", "name": "Daon 79", "description": "A modern beige color travel leather name tag highlighting brand logo engraving and neat stitch finishing.", "image": "/images/Ai_Daon_56.png"},
        {"id": 69, "category": "tech", "label": "AirPods / Buds Leather Case", "name": "Daon 80", "description": "An earphone case that can clearly express the brand's personality with a unique and trendy animal embroidery patch added.", "image": "/images/Ai_Daon_57.png"},
        {"id": 70, "category": "bag", "label": "Multi-purpose Mini Pouch", "name": "Daon 81", "description": "A beige small pouch with excellent shape retention, attached with a carabiner that can be easily fastened to a belt or bag.", "image": "/images/Ai_Daon_58.png"},
        {"id": 71, "category": "bag", "label": "Multi-purpose Mini Pouch", "name": "Daon 82", "description": "A hard shell case creating a futuristic atmosphere by combining a geometric metal cutout pattern and black leather.", "image": "/images/Ai_Daon_59.png"},
        {"id": 72, "category": "bag", "label": "Multi-purpose Mini Pouch", "name": "Daon 83", "description": "A vivid blue color hard pouch with a customized internal cushion foam applied so that valuables such as watches and jewelry can be safely stored.", "image": "/images/Ai_Daon_60.png"}
    ],
    "ja": [
        {"id": 63, "category": "tech", "label": "産業用/特殊機器レザーケース", "name": "Daon 74", "description": "ハイエンドオーディオ機器などを安全に保護し、放熱を助けるメタルグリルデザインが組み合わされたプレミアムケースです。", "image": "/images/Ai_Daon_51_2.png"},
        {"id": 64, "category": "bag", "label": "多目的ミニポーチ", "name": "Daon 75", "description": "頑丈なキャンバスの質感の素材とミニハンドル、カラビナを装着し、アウトドアや日常で実用的なトート型ポーチです。", "image": "/images/Ai_Daon_52.png"},
        {"id": 65, "category": "leather", "label": "コンパクト財布 / スリムカードホルダー", "name": "Daon 76", "description": "企業のロゴ刻印が適用され、VIP販促用や従業員のウェルカムキットとして好感度が高いクラシックなレザー名刺入れです。", "image": "/images/Ai_Daon_53.png"},
        {"id": 66, "category": "bag", "label": "ミニチェーンバッグ / サッチェルバッグ / クロスバッグ", "name": "Daon 77", "description": "エレガントなキャメルカラーのクロコダイルパターンレザーと細いストラップが調和し、洗練されたルックを完成させるミニクロスバッグです。", "image": "/images/Ai_Daon_54.png"},
        {"id": 67, "category": "lifestyle", "label": "レザーストラップ＆ループキーリング", "name": "Daon 78", "description": "柔らかいアイボリーレザーと精巧なメタルバックルで作られ、多目的アクセサリーとして活用できるレザーストラップです。", "image": "/images/Ai_Daon_55.png"},
        {"id": 68, "category": "leather", "label": "レザーラゲッジタグ / ネームタグ", "name": "Daon 79", "description": "ブランドロゴの刻印とすっきりとしたステッチ仕上げが際立つ、モダンなベージュカラーの旅行用レザーネームタグです。", "image": "/images/Ai_Daon_56.png"},
        {"id": 69, "category": "tech", "label": "AirPods / Buds レザーケース", "name": "Daon 80", "description": "ユニークでトレンディな動物の刺繍パッチが加わり、ブランドの個性をしっかりと表現できるイヤホンケースです。", "image": "/images/Ai_Daon_57.png"},
        {"id": 70, "category": "bag", "label": "多目的ミニポーチ", "name": "Daon 81", "description": "ベルトやバッグに簡単に結びつけられるカラビナが付いており、形状保持力に優れたベージュの小型ポーチです。", "image": "/images/Ai_Daon_58.png"},
        {"id": 71, "category": "bag", "label": "多目的ミニポーチ", "name": "Daon 82", "description": "幾何学的なメタルカットアウトパターンとブラックレザーが組み合わされ、未来志向な雰囲気を醸し出すハードシェルケースです。", "image": "/images/Ai_Daon_59.png"},
        {"id": 72, "category": "bag", "label": "多目的ミニポーチ", "name": "Daon 83", "description": "時計やジュエリーなどの貴重品を安全に保管できるように、内部にカスタムクッションフォームが適用された鮮やかなブルーカラーのハードポーチです。", "image": "/images/Ai_Daon_60.png"}
    ],
    "zh": [
        {"id": 63, "category": "tech", "label": "工业/特殊设备真皮保护套", "name": "Daon 74", "description": "结合金属网罩设计，安全保护高端音频设备等并有助于散热的高级保护壳。", "image": "/images/Ai_Daon_51_2.png"},
        {"id": 64, "category": "bag", "label": "多功能迷你收纳袋", "name": "Daon 75", "description": "采用坚固的帆布质感材质，配有迷你提手和登山扣，在户外和日常生活中非常实用的托特包型收纳袋。", "image": "/images/Ai_Daon_52.png"},
        {"id": 65, "category": "leather", "label": "紧凑型钱包 / 超薄卡包", "name": "Daon 76", "description": "刻有企业标志，作为VIP促销或员工欢迎套件而备受青睐的经典真皮名片包。", "image": "/images/Ai_Daon_53.png"},
        {"id": 66, "category": "bag", "label": "迷你链条包 / 剑桥包 / 斜挎包", "name": "Daon 77", "description": "优雅的驼色鳄鱼纹皮革与细肩带相融合，打造精致外观的迷你斜挎包。", "image": "/images/Ai_Daon_54.png"},
        {"id": 67, "category": "lifestyle", "label": "真皮表带及环形钥匙扣", "name": "Daon 78", "description": "由柔软的象牙色皮革和精致的金属带扣制成，可作为多功能配件使用的真皮表带。", "image": "/images/Ai_Daon_55.png"},
        {"id": 68, "category": "leather", "label": "真皮行李牌 / 姓名牌", "name": "Daon 79", "description": "具有品牌徽标雕刻和整洁缝线饰面的现代米色旅行真皮行李牌。", "image": "/images/Ai_Daon_56.png"},
        {"id": 69, "category": "tech", "label": "AirPods / Buds 真皮耳机套", "name": "Daon 80", "description": "加上独特时尚的动物刺绣贴片，能明确表达品牌个性的耳机保护套。", "image": "/images/Ai_Daon_57.png"},
        {"id": 70, "category": "bag", "label": "多功能迷你收纳袋", "name": "Daon 81", "description": "附有登山扣，可轻松挂在腰带或包上，形状保持力极佳的米色小收纳袋。", "image": "/images/Ai_Daon_58.png"},
        {"id": 71, "category": "bag", "label": "多功能迷你收纳袋", "name": "Daon 82", "description": "结合了几何金属镂空图案和黑色皮革，营造出未来主义氛围的硬壳保护套。", "image": "/images/Ai_Daon_59.png"},
        {"id": 72, "category": "bag", "label": "多功能迷你收纳袋", "name": "Daon 83", "description": "内部采用定制缓冲泡沫，可安全存放手表和珠宝等贵重物品，鲜艳蓝色的硬收纳袋。", "image": "/images/Ai_Daon_60.png"}
    ]
};

for (const [lang, items] of Object.entries(newItems)) {
    const filePath = path.join(localesDir, `${lang}.json`);
    let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    const existingIds = new Set(data.showroom.products.map(p => p.id));
    for (const item of items) {
        if (!existingIds.has(item.id)) {
            data.showroom.products.push(item);
        }
    }
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

console.log("Done appending 74-83 to locales.");
