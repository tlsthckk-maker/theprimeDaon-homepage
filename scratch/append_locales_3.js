const fs = require('fs');
const path = require('path');

const localesDir = "src/i18n/locales";

const newItems = {
    "ko": [
        {"id": 33, "category": "leather", "label": "컴팩트 지갑 / 슬림 카드홀더", "name": "다온44", "description": "핑크 컬러의 크로커다일 패턴 가죽과 하트 모티브 메탈 장식이 사랑스러운 미니 지갑입니다.", "image": "/images/Ai_Daon_21.png"},
        {"id": 34, "category": "bag", "label": "미니 체인 백", "name": "다온45", "description": "메탈릭 실버 컬러의 가죽과 세련된 체인 스트랩이 결합되어 화려하고 트렌디한 룩을 완성합니다.", "image": "/images/Ai_Daon_22.png"},
        {"id": 35, "category": "tech", "label": "맥세이프 카드 지갑", "name": "다온46", "description": "클래식한 블랙 가죽에 나무 질감의 로고 디테일을 더해 자연스러운 멋을 살린 맥세이프 지갑입니다.", "image": "/images/Ai_Daon_23_2.png"},
        {"id": 36, "category": "leather", "label": "가죽 다이어리 커버 / 바인더", "name": "다온47", "description": "시크한 블랙 가죽 바탕에 실버 별 모양 스터드와 아일렛을 장식하여 유니크한 감성을 자아냅니다.", "image": "/images/Ai_Daon_24.png"},
        {"id": 37, "category": "leather", "label": "가죽 러기지택 / 네임택", "name": "다온48", "description": "고급스러운 버건디 가죽에 투명 보호창을 더해 실용성을 높인 하이엔드 여행용 러기지택입니다.", "image": "/images/Ai_Daon_25.png"},
        {"id": 38, "category": "bag", "label": "다목적 소형 미니 파우치", "name": "다온49", "description": "견고한 금속 카라비너가 부착되어 휴대가 간편하며 형태 보존력이 뛰어난 베이지 가죽 케이스입니다.", "image": "/images/Ai_Daon_26.png"},
        {"id": 39, "category": "bag", "label": "다목적 소형 미니 파우치", "name": "다온50", "description": "소형 스마트 기기나 골프 거리측정기 등을 외부 충격으로부터 안전하게 보호하는 프리미엄 파우치입니다.", "image": "/images/Ai_Daon_27.png"},
        {"id": 40, "category": "leather", "label": "컴팩트 지갑 / 슬림 카드홀더", "name": "다온51", "description": "글로시한 레드 질감과 매트한 카멜 컬러의 대조가 돋보이는 슬림형 베이직 카드홀더입니다.", "image": "/images/Ai_Daon_28.png"},
        {"id": 41, "category": "bag", "label": "가죽 브리프케이스 / 노트북 백", "name": "다온52", "description": "프로페셔널한 비즈니스 환경에 어울리는 클래식한 블랙 가죽 소재의 서류 가방 겸 브리프케이스입니다.", "image": "/images/Ai_Daon_29.png"},
        {"id": 42, "category": "leather", "label": "여행용 여권 지갑 / 여권 케이스", "name": "다온53", "description": "심플한 블랙 가죽에 골드 레터링 포인트를 주어 모던하고 세련된 분위기를 연출하는 커버입니다.", "image": "/images/Ai_Daon_30.png"}
    ],
    "en": [
        {"id": 33, "category": "leather", "label": "Compact Wallet / Slim Card Holder", "name": "Daon 44", "description": "A lovely mini wallet with pink crocodile pattern leather and heart motif metal decoration.", "image": "/images/Ai_Daon_21.png"},
        {"id": 34, "category": "bag", "label": "Mini Chain Bag", "name": "Daon 45", "description": "Metallic silver colored leather combined with a sophisticated chain strap completes a glamorous and trendy look.", "image": "/images/Ai_Daon_22.png"},
        {"id": 35, "category": "tech", "label": "MagSafe Card Wallet", "name": "Daon 46", "description": "A MagSafe wallet that brings out a natural style by adding wood-textured logo details to classic black leather.", "image": "/images/Ai_Daon_23_2.png"},
        {"id": 36, "category": "leather", "label": "Leather Diary Cover / Binder", "name": "Daon 47", "description": "Decorated with silver star-shaped studs and eyelets on a chic black leather background, creating a unique sensibility.", "image": "/images/Ai_Daon_24.png"},
        {"id": 37, "category": "leather", "label": "Leather Luggage Tag / Name Tag", "name": "Daon 48", "description": "A high-end travel luggage tag that enhances practicality by adding a transparent protective window to luxurious burgundy leather.", "image": "/images/Ai_Daon_25.png"},
        {"id": 38, "category": "bag", "label": "Multi-purpose Mini Pouch", "name": "Daon 49", "description": "A beige leather case with excellent shape retention and easy portability due to an attached sturdy metal carabiner.", "image": "/images/Ai_Daon_26.png"},
        {"id": 39, "category": "bag", "label": "Multi-purpose Mini Pouch", "name": "Daon 50", "description": "A premium pouch that safely protects small smart devices or golf rangefinders from external shocks.", "image": "/images/Ai_Daon_27.png"},
        {"id": 40, "category": "leather", "label": "Compact Wallet / Slim Card Holder", "name": "Daon 51", "description": "A slim basic card holder highlighted by the contrast between glossy red texture and matte camel color.", "image": "/images/Ai_Daon_28.png"},
        {"id": 41, "category": "bag", "label": "Leather Briefcase / Laptop Bag", "name": "Daon 52", "description": "A document bag and briefcase made of classic black leather suitable for a professional business environment.", "image": "/images/Ai_Daon_29.png"},
        {"id": 42, "category": "leather", "label": "Travel Passport Wallet / Passport Case", "name": "Daon 53", "description": "A cover that creates a modern and sophisticated atmosphere by giving gold lettering points on simple black leather.", "image": "/images/Ai_Daon_30.png"}
    ],
    "ja": [
        {"id": 33, "category": "leather", "label": "コンパクト財布 / スリムカードホルダー", "name": "Daon 44", "description": "ピンクカラーのクロコダイルパターンレザーとハートモチーフのメタル装飾が愛らしいミニ財布です。", "image": "/images/Ai_Daon_21.png"},
        {"id": 34, "category": "bag", "label": "ミニチェーンバッグ", "name": "Daon 45", "description": "メタリックシルバーカラーのレザーと洗練されたチェーンストラップが組み合わされ、華やかでトレンディなルックを完成させます。", "image": "/images/Ai_Daon_22.png"},
        {"id": 35, "category": "tech", "label": "MagSafeカードウォレット", "name": "Daon 46", "description": "クラシックなブラックレザーに木目調のロゴディテールを加え、自然な魅力を生かしたMagSafeウォレットです。", "image": "/images/Ai_Daon_23_2.png"},
        {"id": 36, "category": "leather", "label": "レザー手帳カバー/バインダー", "name": "Daon 47", "description": "シックなブラックレザーを背景に、シルバーの星型スタッズとアイレットを装飾し、ユニークな感性を醸し出します。", "image": "/images/Ai_Daon_24.png"},
        {"id": 37, "category": "leather", "label": "レザーラゲッジタグ / ネームタグ", "name": "Daon 48", "description": "高級感のあるバーガンディレザーに透明な保護窓を加え、実用性を高めたハイエンドな旅行用ラゲッジタグです。", "image": "/images/Ai_Daon_25.png"},
        {"id": 38, "category": "bag", "label": "多目的ミニポーチ", "name": "Daon 49", "description": "頑丈な金属製カラビナが付いており持ち運びが簡単で、形状保持力に優れたベージュのレザーケースです。", "image": "/images/Ai_Daon_26.png"},
        {"id": 39, "category": "bag", "label": "多目的ミニポーチ", "name": "Daon 50", "description": "小型スマートデバイスやゴルフ用レーザー距離計などを外部の衝撃から安全に保護するプレミアムポーチです。", "image": "/images/Ai_Daon_27.png"},
        {"id": 40, "category": "leather", "label": "コンパクト財布 / スリムカードホルダー", "name": "Daon 51", "description": "光沢のあるレッドの質感とマットなキャメルカラーのコントラストが際立つスリムなベーシックカードホルダーです。", "image": "/images/Ai_Daon_28.png"},
        {"id": 41, "category": "bag", "label": "レザーブリーフケース / ノートパソコンバッグ", "name": "Daon 52", "description": "プロフェッショナルなビジネス環境にふさわしいクラシックなブラックレザー素材の書類バッグ兼ブリーフケースです。", "image": "/images/Ai_Daon_29.png"},
        {"id": 42, "category": "leather", "label": "旅行用パスポートウォレット / パスポートケース", "name": "Daon 53", "description": "シンプルなブラックレザーにゴールドのレタリングポイントを与え、モダンで洗練された雰囲気を演出するカバーです。", "image": "/images/Ai_Daon_30.png"}
    ],
    "zh": [
        {"id": 33, "category": "leather", "label": "紧凑型钱包 / 超薄卡包", "name": "Daon 44", "description": "拥有粉红色鳄鱼纹皮革和心形金属装饰的可爱迷你钱包。", "image": "/images/Ai_Daon_21.png"},
        {"id": 34, "category": "bag", "label": "迷你链条包", "name": "Daon 45", "description": "金属银色皮革与精致链条表带相结合，打造出华丽时尚的外观。", "image": "/images/Ai_Daon_22.png"},
        {"id": 35, "category": "tech", "label": "MagSafe卡包", "name": "Daon 46", "description": "在经典黑色皮革上添加木材质感徽标细节，展现自然风格的MagSafe钱包。", "image": "/images/Ai_Daon_23_2.png"},
        {"id": 36, "category": "leather", "label": "真皮日记本套 / 活页夹", "name": "Daon 47", "description": "在别致的黑色皮革背景上装饰有银色星形铆钉和孔眼，营造出独特的感性。", "image": "/images/Ai_Daon_24.png"},
        {"id": 37, "category": "leather", "label": "真皮行李牌 / 姓名牌", "name": "Daon 48", "description": "在奢华勃艮第皮革上添加透明保护窗以提高实用性的高端旅行行李牌。", "image": "/images/Ai_Daon_25.png"},
        {"id": 38, "category": "bag", "label": "多功能迷你收纳袋", "name": "Daon 49", "description": "附有坚固金属登山扣，便于携带，形状保持力极佳的米色皮革保护壳。", "image": "/images/Ai_Daon_26.png"},
        {"id": 39, "category": "bag", "label": "多功能迷你收纳袋", "name": "Daon 50", "description": "保护小型智能设备或高尔夫测距仪免受外部冲击的高级收纳袋。", "image": "/images/Ai_Daon_27.png"},
        {"id": 40, "category": "leather", "label": "紧凑型钱包 / 超薄卡包", "name": "Daon 51", "description": "以光泽感红色纹理和哑光驼色对比为特色的超薄基础卡包。", "image": "/images/Ai_Daon_28.png"},
        {"id": 41, "category": "bag", "label": "真皮公文包 / 笔记本电脑包", "name": "Daon 52", "description": "适合专业商务环境的经典黑色皮革公文包兼文件包。", "image": "/images/Ai_Daon_29.png"},
        {"id": 42, "category": "leather", "label": "旅行护照钱包 / 护照套", "name": "Daon 53", "description": "在简单的黑色皮革上加上金色字母点缀，营造出现代精致氛围的保护套。", "image": "/images/Ai_Daon_30.png"}
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

console.log("Done appending 44-53 to locales.");
