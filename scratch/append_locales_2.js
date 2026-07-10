const fs = require('fs');
const path = require('path');

const localesDir = "src/i18n/locales";

const newItems = {
    "ko": [
        {"id": 23, "category": "leather", "label": "컴팩트 지갑 / 슬림 카드홀더", "name": "다온34", "description": "베이직한 디자인에 세 가지 모던한 컬러 옵션을 제공하는 슬림형 가죽 카드홀더입니다.", "image": "/images/Ai_Daon_11_2.png"},
        {"id": 24, "category": "tech", "label": "스마트폰 가죽 케이스", "name": "다온35", "description": "실버 메탈릭 가죽과 스냅 버튼 포켓으로 유니크함과 실용성을 동시에 더한 케이스입니다.", "image": "/images/Ai_Daon_12_2.png"},
        {"id": 25, "category": "tech", "label": "맥세이프 카드 지갑", "name": "다온36", "description": "블랙 사피아노 패턴 가죽에 Y자 메탈 디테일을 적용하여 세련미를 강조한 맥세이프 지갑입니다.", "image": "/images/Ai_Daon_13_2.png"},
        {"id": 26, "category": "tech", "label": "에어팟 / 버즈 가죽 케이스", "name": "다온37", "description": "무선 이어폰을 안전하게 보호하며 시간이 지날수록 클래식한 멋이 더해지는 브라운 가죽 케이스입니다.", "image": "/images/Ai_Daon_14.png"},
        {"id": 27, "category": "leather", "label": "컴팩트 지갑 / 슬림 카드홀더", "name": "다온38", "description": "독특한 링클 질감의 다크 브라운 가죽으로 제작되어 빈티지한 무드를 풍기는 카드지갑입니다.", "image": "/images/Ai_Daon_15.png"},
        {"id": 28, "category": "tech", "label": "스마트폰 가죽 케이스", "name": "다온39", "description": "정교한 동물 자수 디테일이 포인트로 들어가 키치하면서도 하이엔드 감성을 놓치지 않은 케이스입니다.", "image": "/images/Ai_Daon_16.png"},
        {"id": 29, "category": "bag", "label": "가죽 브리프케이스 / 노트북 백", "name": "다온40", "description": "미니멀한 디자인과 부드러운 그레이 가죽이 돋보이는 비즈니스용 노트북 및 태블릿 슬리브입니다.", "image": "/images/Ai_Daon_17.png"},
        {"id": 30, "category": "leather", "label": "가죽 다이어리 커버 / 바인더", "name": "다온41", "description": "밝은 별 모양의 가죽 패치와 메탈 스터드 장식으로 펑키한 매력을 살린 다이어리 커버입니다.", "image": "/images/Ai_Daon_18.png"},
        {"id": 31, "category": "tech", "label": "스마트폰 가죽 케이스", "name": "다온42", "description": "핑크빛 텍스처 가죽에 그립감을 높여주는 실용적인 메탈 링 스트랩이 부착된 우아한 케이스입니다.", "image": "/images/Ai_Daon_19_2.png"},
        {"id": 32, "category": "leather", "label": "컴팩트 지갑 / 슬림 카드홀더", "name": "다온43", "description": "매혹적인 버건디 컬러와 내부의 효율적인 카드 수납공간을 자랑하는 폴딩 타입 지갑입니다.", "image": "/images/Ai_Daon_20.png"}
    ],
    "en": [
        {"id": 23, "category": "leather", "label": "Compact Wallet / Slim Card Holder", "name": "Daon 34", "description": "A slim leather card holder offering three modern color options with a basic design.", "image": "/images/Ai_Daon_11_2.png"},
        {"id": 24, "category": "tech", "label": "Leather Smartphone Case", "name": "Daon 35", "description": "A case that adds both uniqueness and practicality with silver metallic leather and a snap button pocket.", "image": "/images/Ai_Daon_12_2.png"},
        {"id": 25, "category": "tech", "label": "MagSafe Card Wallet", "name": "Daon 36", "description": "A MagSafe wallet emphasizing sophistication by applying Y-shaped metal details to black saffiano pattern leather.", "image": "/images/Ai_Daon_13_2.png"},
        {"id": 26, "category": "tech", "label": "AirPods / Buds Leather Case", "name": "Daon 37", "description": "A brown leather case that safely protects wireless earphones and adds a classic charm as time goes by.", "image": "/images/Ai_Daon_14.png"},
        {"id": 27, "category": "leather", "label": "Compact Wallet / Slim Card Holder", "name": "Daon 38", "description": "A card wallet made of dark brown leather with a unique wrinkled texture, exuding a vintage mood.", "image": "/images/Ai_Daon_15.png"},
        {"id": 28, "category": "tech", "label": "Leather Smartphone Case", "name": "Daon 39", "description": "A case that does not miss the high-end sensibility while being kitschy with elaborate animal embroidery details as a point.", "image": "/images/Ai_Daon_16.png"},
        {"id": 29, "category": "bag", "label": "Leather Briefcase / Laptop Bag", "name": "Daon 40", "description": "A business laptop and tablet sleeve featuring a minimalist design and soft gray leather.", "image": "/images/Ai_Daon_17.png"},
        {"id": 30, "category": "leather", "label": "Leather Diary Cover / Binder", "name": "Daon 41", "description": "A diary cover that brings out a funky charm with bright star-shaped leather patches and metal stud decorations.", "image": "/images/Ai_Daon_18.png"},
        {"id": 31, "category": "tech", "label": "Leather Smartphone Case", "name": "Daon 42", "description": "An elegant case with a practical metal ring strap that enhances grip attached to pink textured leather.", "image": "/images/Ai_Daon_19_2.png"},
        {"id": 32, "category": "leather", "label": "Compact Wallet / Slim Card Holder", "name": "Daon 43", "description": "A folding type wallet boasting a captivating burgundy color and an efficient inner card storage space.", "image": "/images/Ai_Daon_20.png"}
    ],
    "ja": [
        {"id": 23, "category": "leather", "label": "コンパクト財布 / スリムカードホルダー", "name": "Daon 34", "description": "ベーシックなデザインに3つのモダンなカラーオプションを提供するスリムなレザーカードホルダーです。", "image": "/images/Ai_Daon_11_2.png"},
        {"id": 24, "category": "tech", "label": "スマートフォン用レザーケース", "name": "Daon 35", "description": "シルバーメタリックレザーとスナップボタンポケットでユニークさと実用性を同時に加えたケースです。", "image": "/images/Ai_Daon_12_2.png"},
        {"id": 25, "category": "tech", "label": "MagSafeカードウォレット", "name": "Daon 36", "description": "ブラックのサフィアーノパターンレザーにY字のメタルディテールを適用し、洗練さを強調したMagSafeウォレットです。", "image": "/images/Ai_Daon_13_2.png"},
        {"id": 26, "category": "tech", "label": "AirPods / Buds レザーケース", "name": "Daon 37", "description": "ワイヤレスイヤホンを安全に保護し、時間が経つにつれてクラシックな魅力が増すブラウンのレザーケースです。", "image": "/images/Ai_Daon_14.png"},
        {"id": 27, "category": "leather", "label": "コンパクト財布 / スリムカードホルダー", "name": "Daon 38", "description": "独特のシワ感のあるダークブラウンレザーで作られ、ヴィンテージな雰囲気を漂わせるカードウォレットです。", "image": "/images/Ai_Daon_15.png"},
        {"id": 28, "category": "tech", "label": "スマートフォン用レザーケース", "name": "Daon 39", "description": "精巧な動物の刺繍ディテールがポイントで、キッチュでありながらもハイエンドな感性を逃さないケースです。", "image": "/images/Ai_Daon_16.png"},
        {"id": 29, "category": "bag", "label": "レザーブリーフケース / ノートパソコンバッグ", "name": "Daon 40", "description": "ミニマルなデザインと柔らかいグレーのレザーが際立つビジネス用のノートパソコンおよびタブレットスリーブです。", "image": "/images/Ai_Daon_17.png"},
        {"id": 30, "category": "leather", "label": "レザー手帳カバー/バインダー", "name": "Daon 41", "description": "明るい星型のレザーパッチとメタルスタッズの装飾でファンキーな魅力を生かした手帳カバーです。", "image": "/images/Ai_Daon_18.png"},
        {"id": 31, "category": "tech", "label": "スマートフォン用レザーケース", "name": "Daon 42", "description": "ピンクのテクスチャーレザーにグリップ感を高める実用的なメタルリングストラップが付いたエレガントなケースです。", "image": "/images/Ai_Daon_19_2.png"},
        {"id": 32, "category": "leather", "label": "コンパクト財布 / スリムカードホルダー", "name": "Daon 43", "description": "魅惑的なバーガンディカラーと内部の効率的なカード収納スペースを誇る折りたたみ式財布です。", "image": "/images/Ai_Daon_20.png"}
    ],
    "zh": [
        {"id": 23, "category": "leather", "label": "紧凑型钱包 / 超薄卡包", "name": "Daon 34", "description": "以基础设计提供三种现代颜色选项的超薄皮革卡包。", "image": "/images/Ai_Daon_11_2.png"},
        {"id": 24, "category": "tech", "label": "智能手机真皮保护壳", "name": "Daon 35", "description": "采用银色金属感皮革和按扣口袋，同时增加独特性和实用性的手机壳。", "image": "/images/Ai_Daon_12_2.png"},
        {"id": 25, "category": "tech", "label": "MagSafe卡包", "name": "Daon 36", "description": "在黑色十字纹皮革上应用Y形金属细节，强调精致感的MagSafe钱包。", "image": "/images/Ai_Daon_13_2.png"},
        {"id": 26, "category": "tech", "label": "AirPods / Buds 真皮耳机套", "name": "Daon 37", "description": "安全保护无线耳机，随着时间推移增添古典魅力的棕色皮革耳机套。", "image": "/images/Ai_Daon_14.png"},
        {"id": 27, "category": "leather", "label": "紧凑型钱包 / 超薄卡包", "name": "Daon 38", "description": "采用具有独特褶皱纹理的深棕色皮革制成，散发复古气息的卡包。", "image": "/images/Ai_Daon_15.png"},
        {"id": 28, "category": "tech", "label": "智能手机真皮保护壳", "name": "Daon 39", "description": "以精致的动物刺绣细节为亮点，俏皮又不失高端质感的手机壳。", "image": "/images/Ai_Daon_16.png"},
        {"id": 29, "category": "bag", "label": "真皮公文包 / 笔记本电脑包", "name": "Daon 40", "description": "以极简设计和柔软灰色皮革为特色的商务笔记本电脑和平板电脑内胆包。", "image": "/images/Ai_Daon_17.png"},
        {"id": 30, "category": "leather", "label": "真皮日记本套 / 活页夹", "name": "Daon 41", "description": "以明亮的星形皮革贴片和金属铆钉装饰展现朋克魅力的日记本套。", "image": "/images/Ai_Daon_18.png"},
        {"id": 31, "category": "tech", "label": "智能手机真皮保护壳", "name": "Daon 42", "description": "粉红色纹理皮革上附有提升握感的实用金属环背带，优雅的手机壳。", "image": "/images/Ai_Daon_19_2.png"},
        {"id": 32, "category": "leather", "label": "紧凑型钱包 / 超薄卡包", "name": "Daon 43", "description": "拥有迷人勃艮第酒红色和内部高效卡片收纳空间的折叠式钱包。", "image": "/images/Ai_Daon_20.png"}
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

console.log("Done appending 34-43 to locales.");
