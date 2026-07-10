const fs = require('fs');
const path = require('path');

const localesDir = "src/i18n/locales";

const newItems = {
    "ko": [
        {"id": 43, "category": "leather", "label": "컴팩트 지갑 / 슬림 카드홀더", "name": "다온54", "description": "블루와 블랙 컬러의 견고한 가죽 바탕에 정교한 스티치 마감이 돋보이는 슬림 카드홀더입니다.", "image": "/images/Ai_Daon_31.png"},
        {"id": 44, "category": "tech", "label": "맥세이프 카드 지갑", "name": "다온55", "description": "화이트 톤의 깔끔한 가죽에 실용적인 핑거 스트랩 스탠드 기능을 더한 맥세이프 지갑입니다.", "image": "/images/Ai_Daon_32_2.png"},
        {"id": 45, "category": "leather", "label": "가죽 다이어리 커버 / 바인더", "name": "다온56", "description": "우아한 버건디 컬러와 고급스러운 빗살무늬 텍스처가 적용된 프리미엄 다이어리 커버입니다.", "image": "/images/Ai_Daon_33.png"},
        {"id": 46, "category": "tech", "label": "맥세이프 카드 지갑", "name": "다온57", "description": "블랙 가죽 가장자리에 오렌지 컬러 스티치로 스포티한 매력을 살린 부착형 카드홀더입니다.", "image": "/images/Ai_Daon_34_2.png"},
        {"id": 47, "category": "bag", "label": "다목적 소형 미니 파우치", "name": "다온58", "description": "카라비너와 미니 핸들이 부착되어 아웃도어 환경이나 일상에서 다목적으로 활용하기 좋은 파우치입니다.", "image": "/images/Ai_Daon_35.png"},
        {"id": 48, "category": "lifestyle", "label": "자동차 스마트키 홀더/케이스", "name": "다온59", "description": "다섯 가지 다채로운 컬러 라인업과 골드 스냅 버튼 장식이 매력적인 폴딩 타입 키케이스입니다.", "image": "/images/Ai_Daon_36.png"},
        {"id": 49, "category": "lifestyle", "label": "가죽 스트랩 & 루프 키링", "name": "다온60", "description": "무광 골드 메탈 장식과 스티치 마감 처리된 천연 가죽이 조화롭게 어우러진 고급 스트랩 키링입니다.", "image": "/images/Ai_Daon_37.png"},
        {"id": 50, "category": "leather", "label": "컴팩트 지갑 / 슬림 카드홀더", "name": "다온61", "description": "클래식한 카멜 브라운 컬러와 부드러운 가죽 질감이 돋보이는 폴딩형 명함 겸 카드 지갑입니다.", "image": "/images/Ai_Daon_38.png"},
        {"id": 51, "category": "tech", "label": "스마트폰 가죽 케이스", "name": "다온62", "description": "산뜻한 깅엄 체크 패턴 바탕에 귀여운 강아지 자수가 더해져 캐주얼한 무드를 선사하는 케이스입니다.", "image": "/images/Ai_Daon_39.png"},
        {"id": 52, "category": "tech", "label": "스마트폰 가죽 케이스", "name": "다온63", "description": "애니멀 텍스처와 솔리드 가죽을 활용해 유니크함을 강조하고 후면 링으로 그립감을 높인 제품입니다.", "image": "/images/Ai_Daon_40.png"}
    ],
    "en": [
        {"id": 43, "category": "leather", "label": "Compact Wallet / Slim Card Holder", "name": "Daon 54", "description": "A slim card holder highlighting exquisite stitch finishing on a solid leather base in blue and black colors.", "image": "/images/Ai_Daon_31.png"},
        {"id": 44, "category": "tech", "label": "MagSafe Card Wallet", "name": "Daon 55", "description": "A MagSafe wallet that adds a practical finger strap stand function to neat white-toned leather.", "image": "/images/Ai_Daon_32_2.png"},
        {"id": 45, "category": "leather", "label": "Leather Diary Cover / Binder", "name": "Daon 56", "description": "A premium diary cover applied with an elegant burgundy color and a luxurious comb-pattern texture.", "image": "/images/Ai_Daon_33.png"},
        {"id": 46, "category": "tech", "label": "MagSafe Card Wallet", "name": "Daon 57", "description": "An attachable card holder that brings out a sporty charm with orange color stitches on the edges of black leather.", "image": "/images/Ai_Daon_34_2.png"},
        {"id": 47, "category": "bag", "label": "Multi-purpose Mini Pouch", "name": "Daon 58", "description": "A pouch that is good for multi-purpose use in outdoor environments or daily life with a carabiner and mini handle attached.", "image": "/images/Ai_Daon_35.png"},
        {"id": 48, "category": "lifestyle", "label": "Car Smart Key Holder / Case", "name": "Daon 59", "description": "A folding type key case attractive for its five colorful color lineups and gold snap button decoration.", "image": "/images/Ai_Daon_36.png"},
        {"id": 49, "category": "lifestyle", "label": "Leather Strap & Loop Keyring", "name": "Daon 60", "description": "A luxurious strap keyring harmoniously blending matte gold metal decoration and stitched natural leather.", "image": "/images/Ai_Daon_37.png"},
        {"id": 50, "category": "leather", "label": "Compact Wallet / Slim Card Holder", "name": "Daon 61", "description": "A folding type business card and card wallet highlighting a classic camel brown color and soft leather texture.", "image": "/images/Ai_Daon_38.png"},
        {"id": 51, "category": "tech", "label": "Leather Smartphone Case", "name": "Daon 62", "description": "A case presenting a casual mood by adding cute puppy embroidery to a refreshing gingham check pattern background.", "image": "/images/Ai_Daon_39.png"},
        {"id": 52, "category": "tech", "label": "Leather Smartphone Case", "name": "Daon 63", "description": "A product emphasizing uniqueness by utilizing animal texture and solid leather, and enhancing grip with a rear ring.", "image": "/images/Ai_Daon_40.png"}
    ],
    "ja": [
        {"id": 43, "category": "leather", "label": "コンパクト財布 / スリムカードホルダー", "name": "Daon 54", "description": "ブルーとブラックカラーの頑丈なレザーをベースに、精巧なステッチ仕上げが際立つスリムカードホルダーです。", "image": "/images/Ai_Daon_31.png"},
        {"id": 44, "category": "tech", "label": "MagSafeカードウォレット", "name": "Daon 55", "description": "ホワイトトーンのすっきりとしたレザーに実用的なフィンガーストラップスタンド機能を加えたMagSafeウォレットです。", "image": "/images/Ai_Daon_32_2.png"},
        {"id": 45, "category": "leather", "label": "レザー手帳カバー/バインダー", "name": "Daon 56", "description": "エレガントなバーガンディカラーと高級感のある櫛目模様のテクスチャーが適用されたプレミアム手帳カバーです。", "image": "/images/Ai_Daon_33.png"},
        {"id": 46, "category": "tech", "label": "MagSafeカードウォレット", "name": "Daon 57", "description": "ブラックレザーの縁にオレンジカラーのステッチでスポーティな魅力を生かした付着型カードホルダーです。", "image": "/images/Ai_Daon_34_2.png"},
        {"id": 47, "category": "bag", "label": "多目的ミニポーチ", "name": "Daon 58", "description": "カラビナとミニハンドルが付いており、アウトドア環境や日常で多目的に活用しやすいポーチです。", "image": "/images/Ai_Daon_35.png"},
        {"id": 48, "category": "lifestyle", "label": "車のスマートキーホルダー/ケース", "name": "Daon 59", "description": "5つの多彩なカラーラインナップとゴールドのスナップボタン装飾が魅力的な折りたたみ式キーケースです。", "image": "/images/Ai_Daon_36.png"},
        {"id": 49, "category": "lifestyle", "label": "レザーストラップ＆ループキーリング", "name": "Daon 60", "description": "マットゴールドのメタル装飾とステッチ仕上げの天然皮革が調和した高級ストラップキーリングです。", "image": "/images/Ai_Daon_37.png"},
        {"id": 50, "category": "leather", "label": "コンパクト財布 / スリムカードホルダー", "name": "Daon 61", "description": "クラシックなキャメルブラウンカラーと柔らかいレザーの質感が際立つ折りたたみ式名刺兼カードウォレットです。", "image": "/images/Ai_Daon_38.png"},
        {"id": 51, "category": "tech", "label": "スマートフォン用レザーケース", "name": "Daon 62", "description": "爽やかなギンガムチェック柄の背景にかわいい犬の刺繍が加わり、カジュアルなムードを演出するケースです。", "image": "/images/Ai_Daon_39.png"},
        {"id": 52, "category": "tech", "label": "スマートフォン用レザーケース", "name": "Daon 63", "description": "アニマルテクスチャーとソリッドレザーを活用してユニークさを強調し、背面のリングでグリップ感を高めた製品です。", "image": "/images/Ai_Daon_40.png"}
    ],
    "zh": [
        {"id": 43, "category": "leather", "label": "紧凑型钱包 / 超薄卡包", "name": "Daon 54", "description": "在蓝色和黑色坚固皮革基础上突出精致缝线修饰的超薄卡包。", "image": "/images/Ai_Daon_31.png"},
        {"id": 44, "category": "tech", "label": "MagSafe卡包", "name": "Daon 55", "description": "在干净的白色皮革上增加了实用指环支架功能的MagSafe钱包。", "image": "/images/Ai_Daon_32_2.png"},
        {"id": 45, "category": "leather", "label": "真皮日记本套 / 活页夹", "name": "Daon 56", "description": "采用优雅勃艮第酒红色和奢华梳齿纹理的高级日记本套。", "image": "/images/Ai_Daon_33.png"},
        {"id": 46, "category": "tech", "label": "MagSafe卡包", "name": "Daon 57", "description": "在黑色皮革边缘用橙色缝线展现运动魅力的附加型卡包。", "image": "/images/Ai_Daon_34_2.png"},
        {"id": 47, "category": "bag", "label": "多功能迷你收纳袋", "name": "Daon 58", "description": "配有登山扣和迷你提手，非常适合在户外环境或日常生活中多功能使用的收纳袋。", "image": "/images/Ai_Daon_35.png"},
        {"id": 48, "category": "lifestyle", "label": "汽车智能钥匙包/套", "name": "Daon 59", "description": "拥有五种丰富色彩系列和金色按扣装饰的折叠式钥匙包。", "image": "/images/Ai_Daon_36.png"},
        {"id": 49, "category": "lifestyle", "label": "真皮表带及环形钥匙扣", "name": "Daon 60", "description": "哑光金色金属装饰与精细缝合的天然皮革和谐融合的高级表带钥匙扣。", "image": "/images/Ai_Daon_37.png"},
        {"id": 50, "category": "leather", "label": "紧凑型钱包 / 超薄卡包", "name": "Daon 61", "description": "以经典驼棕色和柔软皮革质感为特色的折叠式名片兼卡片钱包。", "image": "/images/Ai_Daon_38.png"},
        {"id": 51, "category": "tech", "label": "智能手机真皮保护壳", "name": "Daon 62", "description": "在清新的格子图案背景上增添可爱的狗狗刺绣，呈现休闲氛围的手机壳。", "image": "/images/Ai_Daon_39.png"},
        {"id": 52, "category": "tech", "label": "智能手机真皮保护壳", "name": "Daon 63", "description": "利用动物纹理和纯色皮革强调独特性，并通过后置指环提高握感的产品。", "image": "/images/Ai_Daon_40.png"}
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

console.log("Done appending 54-63 to locales.");
