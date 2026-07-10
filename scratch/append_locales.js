const fs = require('fs');
const path = require('path');

const localesDir = "src/i18n/locales";

const newItems = {
    "ko": [
        {"id": 13, "category": "leather", "label": "컴팩트 지갑 / 슬림 카드홀더", "name": "다온24", "description": "부드러운 그레이 가죽과 미니멀한 폴딩 디자인이 특징인 컴팩트 지갑입니다.", "image": "/images/Ai_Daon_1_2.png"},
        {"id": 14, "category": "lifestyle", "label": "자동차 스마트키 홀더/케이스", "name": "다온25", "description": "차량 키의 굴곡을 완벽하게 재현하여 입체적인 그립감을 제공하는 가죽 키케이스입니다.", "image": "/images/Ai_Daon_2_2.png"},
        {"id": 15, "category": "lifestyle", "label": "자동차 스마트키 홀더/케이스", "name": "다온26", "description": "화이트 레더와 감각적인 컷아웃 디자인이 적용된 프리미엄 키 커버입니다.", "image": "/images/Ai_Daon_3_2.png"},
        {"id": 16, "category": "leather", "label": "가죽 다이어리 커버 / 바인더", "name": "다온27", "description": "모던한 블랙 레더로 비즈니스 환경에 최적화된 다이어리 커버입니다.", "image": "/images/Ai_Daon_4_2.png"},
        {"id": 17, "category": "leather", "label": "컴팩트 지갑 / 슬림 카드홀더", "name": "다온28", "description": "그레이 바탕에 오렌지 컬러 포인트를 주어 세련됨을 더한 카드홀더입니다.", "image": "/images/Ai_Daon_5_3.png"},
        {"id": 18, "category": "bag", "label": "다목적 소형 미니 파우치", "name": "다온29", "description": "견고한 질감과 실용적인 핸들 스트랩을 갖춘 올리브 그린 다목적 파우치입니다.", "image": "/images/Ai_Daon_6_2.png"},
        {"id": 19, "category": "lifestyle", "label": "가죽 스트랩 & 루프 키링", "name": "다온30", "description": "매트한 블랙 카라비너에 정교한 가죽 스트랩을 결합한 하이엔드 키링입니다.", "image": "/images/Ai_Daon_7_2.png"},
        {"id": 20, "category": "tech", "label": "맥세이프 카드 지갑", "name": "다온31", "description": "오렌지 스티치 포인트로 블랙 가죽의 밋밋함을 없앤 부착형 카드 지갑입니다.", "image": "/images/Ai_Daon_8_3.png"},
        {"id": 21, "category": "bag", "label": "미니 체인 백", "name": "다온32", "description": "다크 메탈 볼 체인과 화이트 가죽이 어우러져 트렌디한 감각을 선사하는 미니 백입니다.", "image": "/images/Ai_Daon_9_2.png"},
        {"id": 22, "category": "leather", "label": "컴팩트 지갑 / 슬림 카드홀더", "name": "다온33", "description": "기하학적인 절개 라인과 스티치 디테일이 돋보이는 딥 그린 카드홀더입니다.", "image": "/images/Ai_Daon_10.png"}
    ],
    "en": [
        {"id": 13, "category": "leather", "label": "Compact Wallet / Slim Card Holder", "name": "Daon 24", "description": "Compact wallet featuring soft gray leather and minimal folding design.", "image": "/images/Ai_Daon_1_2.png"},
        {"id": 14, "category": "lifestyle", "label": "Car Smart Key Holder / Case", "name": "Daon 25", "description": "Leather key case providing a three-dimensional grip by perfectly recreating the curves of the car key.", "image": "/images/Ai_Daon_2_2.png"},
        {"id": 15, "category": "lifestyle", "label": "Car Smart Key Holder / Case", "name": "Daon 26", "description": "Premium key cover with white leather and sensual cut-out design.", "image": "/images/Ai_Daon_3_2.png"},
        {"id": 16, "category": "leather", "label": "Leather Diary Cover / Binder", "name": "Daon 27", "description": "Diary cover optimized for business environments with modern black leather.", "image": "/images/Ai_Daon_4_2.png"},
        {"id": 17, "category": "leather", "label": "Compact Wallet / Slim Card Holder", "name": "Daon 28", "description": "Card holder with added sophistication by giving an orange color point to a gray background.", "image": "/images/Ai_Daon_5_3.png"},
        {"id": 18, "category": "bag", "label": "Multi-purpose Mini Pouch", "name": "Daon 29", "description": "Olive green multi-purpose pouch with solid texture and practical handle strap.", "image": "/images/Ai_Daon_6_2.png"},
        {"id": 19, "category": "lifestyle", "label": "Leather Strap & Loop Keyring", "name": "Daon 30", "description": "High-end keyring combining a matte black carabiner with a sophisticated leather strap.", "image": "/images/Ai_Daon_7_2.png"},
        {"id": 20, "category": "tech", "label": "MagSafe Card Wallet", "name": "Daon 31", "description": "Attachable card wallet that removes the dullness of black leather with orange stitch points.", "image": "/images/Ai_Daon_8_3.png"},
        {"id": 21, "category": "bag", "label": "Mini Chain Bag", "name": "Daon 32", "description": "Mini bag presenting a trendy sense with the harmony of dark metal ball chain and white leather.", "image": "/images/Ai_Daon_9_2.png"},
        {"id": 22, "category": "leather", "label": "Compact Wallet / Slim Card Holder", "name": "Daon 33", "description": "Deep green card holder highlighted by geometric cut lines and stitch details.", "image": "/images/Ai_Daon_10.png"}
    ],
    "ja": [
        {"id": 13, "category": "leather", "label": "コンパクト財布 / スリムカードホルダー", "name": "Daon 24", "description": "柔らかいグレーのレザーとミニマルな折りたたみデザインが特徴のコンパクト財布です。", "image": "/images/Ai_Daon_1_2.png"},
        {"id": 14, "category": "lifestyle", "label": "車のスマートキーホルダー/ケース", "name": "Daon 25", "description": "車のキーの曲線を完璧に再現し、立体的なグリップ感を提供するレザーキーケースです。", "image": "/images/Ai_Daon_2_2.png"},
        {"id": 15, "category": "lifestyle", "label": "車のスマートキーホルダー/ケース", "name": "Daon 26", "description": "ホワイトレザーと感覚的なカットアウトデザインが適用されたプレミアムキーカバーです。", "image": "/images/Ai_Daon_3_2.png"},
        {"id": 16, "category": "leather", "label": "レザー手帳カバー/バインダー", "name": "Daon 27", "description": "モダンなブラックレザーでビジネス環境に最適化された手帳カバーです。", "image": "/images/Ai_Daon_4_2.png"},
        {"id": 17, "category": "leather", "label": "コンパクト財布 / スリムカードホルダー", "name": "Daon 28", "description": "グレーの背景にオレンジ色のポイントを与え、洗練さを加えたカードホルダーです。", "image": "/images/Ai_Daon_5_3.png"},
        {"id": 18, "category": "bag", "label": "多目的ミニポーチ", "name": "Daon 29", "description": "しっかりとした質感と実用的なハンドルストラップを備えたオリーブグリーンの多目的ポーチです。", "image": "/images/Ai_Daon_6_2.png"},
        {"id": 19, "category": "lifestyle", "label": "レザーストラップ＆ループキーリング", "name": "Daon 30", "description": "マットなブラックカラビナに精巧なレザーストラップを組み合わせたハイエンドキーリングです。", "image": "/images/Ai_Daon_7_2.png"},
        {"id": 20, "category": "tech", "label": "MagSafeカードウォレット", "name": "Daon 31", "description": "オレンジのステッチポイントでブラックレザーの単調さをなくした付着型カードウォレットです。", "image": "/images/Ai_Daon_8_3.png"},
        {"id": 21, "category": "bag", "label": "ミニチェーンバッグ", "name": "Daon 32", "description": "ダークメタルボールチェーンとホワイトレザーが調和し、トレンディな感覚をプレゼントするミニバッグです。", "image": "/images/Ai_Daon_9_2.png"},
        {"id": 22, "category": "leather", "label": "コンパクト財布 / スリムカードホルダー", "name": "Daon 33", "description": "幾何学的なカットラインとステッチのディテールが際立つディープグリーンカードホルダーです。", "image": "/images/Ai_Daon_10.png"}
    ],
    "zh": [
        {"id": 13, "category": "leather", "label": "紧凑型钱包 / 超薄卡包", "name": "Daon 24", "description": "以柔软灰色皮革和极简折叠设计为特征的紧凑型钱包。", "image": "/images/Ai_Daon_1_2.png"},
        {"id": 14, "category": "lifestyle", "label": "汽车智能钥匙包/套", "name": "Daon 25", "description": "完美重现车钥匙曲线，提供立体握感的真皮钥匙包。", "image": "/images/Ai_Daon_2_2.png"},
        {"id": 15, "category": "lifestyle", "label": "汽车智能钥匙包/套", "name": "Daon 26", "description": "采用白色皮革和时尚镂空设计的高级钥匙套。", "image": "/images/Ai_Daon_3_2.png"},
        {"id": 16, "category": "leather", "label": "真皮日记本套 / 活页夹", "name": "Daon 27", "description": "以现代黑色皮革为商务环境优化的日记本套。", "image": "/images/Ai_Daon_4_2.png"},
        {"id": 17, "category": "leather", "label": "紧凑型钱包 / 超薄卡包", "name": "Daon 28", "description": "在灰色背景上加入橙色点缀，增添精致感的卡包。", "image": "/images/Ai_Daon_5_3.png"},
        {"id": 18, "category": "bag", "label": "多功能迷你收纳袋", "name": "Daon 29", "description": "具有坚固质感和实用提手的橄榄绿多功能收纳袋。", "image": "/images/Ai_Daon_6_2.png"},
        {"id": 19, "category": "lifestyle", "label": "真皮表带及环形钥匙扣", "name": "Daon 30", "description": "哑光黑色登山扣与精致皮革表带相结合的高端钥匙扣。", "image": "/images/Ai_Daon_7_2.png"},
        {"id": 20, "category": "tech", "label": "MagSafe卡包", "name": "Daon 31", "description": "以橙色缝线点缀打破黑色皮革沉闷感的附加型卡包。", "image": "/images/Ai_Daon_8_3.png"},
        {"id": 21, "category": "bag", "label": "迷你链条包", "name": "Daon 32", "description": "深色金属球链与白色皮革相融合，展现流行时尚感的迷你包。", "image": "/images/Ai_Daon_9_2.png"},
        {"id": 22, "category": "leather", "label": "紧凑型钱包 / 超薄卡包", "name": "Daon 33", "description": "几何切割线条和缝线细节脱颖而出的深绿色卡包。", "image": "/images/Ai_Daon_10.png"}
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

console.log("Done appending to locales.");
