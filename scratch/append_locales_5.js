const fs = require('fs');
const path = require('path');

const localesDir = "src/i18n/locales";

const newItems = {
    "ko": [
        {"id": 53, "category": "bag", "label": "가죽 브리프케이스 / 노트북 백", "name": "다온64", "description": "차분한 블루 그레이 톤의 가죽으로 제작되어 심플하면서도 프로페셔널한 느낌을 주는 서류 및 태블릿 슬리브입니다.", "image": "/images/Ai_Daon_41.png"},
        {"id": 54, "category": "tech", "label": "산업용/특수 장비 가죽 케이스", "name": "다온65", "description": "하이엔드 오디오 기기 등 특수 디지털 장비를 완벽하게 보호하고 거치할 수 있는 다크 그린 색상의 맞춤형 가죽 케이스입니다.", "image": "/images/Ai_Daon_42.png"},
        {"id": 55, "category": "bag", "label": "미니 체인 백 / 사첼백 / 크로스백", "name": "다온66", "description": "클래식한 사첼백 디자인을 미니 사이즈로 구현하여 데일리하게 활용하기 좋은 브라운 가죽 백입니다.", "image": "/images/Ai_Daon_43.png"},
        {"id": 56, "category": "tech", "label": "스마트폰 가죽 케이스", "name": "다온67", "description": "세련된 메탈릭 실버 텍스처와 핑거 링 스트랩이 결합되어 폴더블 스마트폰의 사용성을 극대화한 케이스입니다.", "image": "/images/Ai_Daon_44.png"},
        {"id": 57, "category": "tech", "label": "맥세이프 카드 지갑", "name": "다온68", "description": "부드러운 천연 가죽 소재와 세 가지 베이직 컬러로 구성된 미니멀 디자인의 맥세이프 부착형 카드홀더입니다.", "image": "/images/Ai_Daon_45.png"},
        {"id": 58, "category": "tech", "label": "산업용/특수 장비 가죽 케이스", "name": "다온69", "description": "특수 장비의 디스플레이와 버튼 조작부를 고려하여 정교하게 타공 및 설계된 블랙 스크린 가죽 커버입니다.", "image": "/images/Ai_Daon_46.png"},
        {"id": 59, "category": "bag", "label": "다목적 소형 미니 파우치", "name": "다온70", "description": "비비드한 블루 컬러와 엠보싱 처리된 가죽이 돋보이며, 상단 D링으로 휴대성을 높인 소형 다목적 파우치입니다.", "image": "/images/Ai_Daon_47.png"},
        {"id": 60, "category": "tech", "label": "스마트폰 가죽 케이스", "name": "다온71", "description": "폴더블 스마트폰의 상하단에 완벽하게 핏되는 베이직한 카멜 브라운 컬러의 프리미엄 가죽 쉘 케이스입니다.", "image": "/images/Ai_Daon_48.png"},
        {"id": 61, "category": "lifestyle", "label": "자동차 스마트키 홀더/케이스", "name": "다온72", "description": "차량 키의 버튼부까지 섬세하게 덮어주는 일체형 디자인으로 스포티한 매력을 지닌 스마트키 커버입니다.", "image": "/images/Ai_Daon_49.png"},
        {"id": 62, "category": "leather", "label": "오피스 스테이셔너리", "name": "다온73", "description": "기업 및 대학의 VIP 웰컴 키트나 행사용 기념품으로 활용하기 좋은 맞춤형 로고 각인 가죽 폴더입니다.", "image": "/images/Ai_Daon_50.png"}
    ],
    "en": [
        {"id": 53, "category": "bag", "label": "Leather Briefcase / Laptop Bag", "name": "Daon 64", "description": "A document and tablet sleeve made of calm blue-gray tone leather that gives a simple yet professional feeling.", "image": "/images/Ai_Daon_41.png"},
        {"id": 54, "category": "tech", "label": "Industrial / Special Equipment Leather Case", "name": "Daon 65", "description": "A customized dark green leather case that can perfectly protect and mount special digital equipment such as high-end audio devices.", "image": "/images/Ai_Daon_42.png"},
        {"id": 55, "category": "bag", "label": "Mini Chain Bag / Satchel Bag / Crossbag", "name": "Daon 66", "description": "A brown leather bag that implements a classic satchel bag design in a mini size, making it great for daily use.", "image": "/images/Ai_Daon_43.png"},
        {"id": 56, "category": "tech", "label": "Leather Smartphone Case", "name": "Daon 67", "description": "A case that maximizes the usability of foldable smartphones by combining a sophisticated metallic silver texture and a finger ring strap.", "image": "/images/Ai_Daon_44.png"},
        {"id": 57, "category": "tech", "label": "MagSafe Card Wallet", "name": "Daon 68", "description": "A minimal design MagSafe attachable card holder made of soft natural leather material and available in three basic colors.", "image": "/images/Ai_Daon_45.png"},
        {"id": 58, "category": "tech", "label": "Industrial / Special Equipment Leather Case", "name": "Daon 69", "description": "A black screen leather cover intricately perforated and designed considering the display and button operation parts of special equipment.", "image": "/images/Ai_Daon_46.png"},
        {"id": 59, "category": "bag", "label": "Multi-purpose Mini Pouch", "name": "Daon 70", "description": "A small multi-purpose pouch highlighting a vivid blue color and embossed leather, enhancing portability with a top D-ring.", "image": "/images/Ai_Daon_47.png"},
        {"id": 60, "category": "tech", "label": "Leather Smartphone Case", "name": "Daon 71", "description": "A premium leather shell case in a basic camel brown color that perfectly fits the top and bottom of a foldable smartphone.", "image": "/images/Ai_Daon_48.png"},
        {"id": 61, "category": "lifestyle", "label": "Car Smart Key Holder / Case", "name": "Daon 72", "description": "A smart key cover with a sporty charm featuring an integrated design that delicately covers even the button part of the car key.", "image": "/images/Ai_Daon_49.png"},
        {"id": 62, "category": "leather", "label": "Office Stationery", "name": "Daon 73", "description": "A customized logo-engraved leather folder suitable for use as a VIP welcome kit or event souvenir for companies and universities.", "image": "/images/Ai_Daon_50.png"}
    ],
    "ja": [
        {"id": 53, "category": "bag", "label": "レザーブリーフケース / ノートパソコンバッグ", "name": "Daon 64", "description": "落ち着いたブルーグレーのトーンのレザーで作られ、シンプルながらもプロフェッショナルな印象を与える書類およびタブレットスリーブです。", "image": "/images/Ai_Daon_41.png"},
        {"id": 54, "category": "tech", "label": "産業用/特殊機器レザーケース", "name": "Daon 65", "description": "ハイエンドオーディオ機器などの特殊デジタル機器を完璧に保護し、設置できるダークグリーンカラーのオーダーメイドレザーケースです。", "image": "/images/Ai_Daon_42.png"},
        {"id": 55, "category": "bag", "label": "ミニチェーンバッグ / サッチェルバッグ / クロスバッグ", "name": "Daon 66", "description": "クラシックなサッチェルバッグのデザインをミニサイズで具現化し、デイリーに活用しやすいブラウンレザーバッグです。", "image": "/images/Ai_Daon_43.png"},
        {"id": 56, "category": "tech", "label": "スマートフォン用レザーケース", "name": "Daon 67", "description": "洗練されたメタリックシルバーのテクスチャーとフィンガーリングストラップが組み合わされ、折りたたみ式スマートフォンのユーザビリティを極大化したケースです。", "image": "/images/Ai_Daon_44.png"},
        {"id": 57, "category": "tech", "label": "MagSafeカードウォレット", "name": "Daon 68", "description": "柔らかい天然皮革素材と3つのベーシックカラーで構成されたミニマルデザインのMagSafe付着型カードホルダーです。", "image": "/images/Ai_Daon_45.png"},
        {"id": 58, "category": "tech", "label": "産業用/特殊機器レザーケース", "name": "Daon 69", "description": "特殊機器のディスプレイとボタン操作部を考慮して精巧に穴あけおよび設計されたブラックスクリーンレザーカバーです。", "image": "/images/Ai_Daon_46.png"},
        {"id": 59, "category": "bag", "label": "多目的ミニポーチ", "name": "Daon 70", "description": "ビビッドなブルーカラーとエンボス加工されたレザーが際立ち、上部のDリングで携帯性を高めた小型の多目的ポーチです。", "image": "/images/Ai_Daon_47.png"},
        {"id": 60, "category": "tech", "label": "スマートフォン用レザーケース", "name": "Daon 71", "description": "折りたたみ式スマートフォンの上下に完璧にフィットする、ベーシックなキャメルブラウンカラーのプレミアムレザーシェルケースです。", "image": "/images/Ai_Daon_48.png"},
        {"id": 61, "category": "lifestyle", "label": "車のスマートキーホルダー/ケース", "name": "Daon 72", "description": "車のキーのボタン部分まで繊細に覆う一体型デザインでスポーティな魅力を持つスマートキーカバーです。", "image": "/images/Ai_Daon_49.png"},
        {"id": 62, "category": "leather", "label": "オフィスステーショナリー", "name": "Daon 73", "description": "企業や大学のVIPウェルカムキットやイベント用記念品として活用しやすい、カスタマイズされたロゴ刻印入りのレザーフォルダーです。", "image": "/images/Ai_Daon_50.png"}
    ],
    "zh": [
        {"id": 53, "category": "bag", "label": "真皮公文包 / 笔记本电脑包", "name": "Daon 64", "description": "由沉稳的蓝灰色调皮革制成的文件和平板电脑内胆包，给人一种简单而专业的感觉。", "image": "/images/Ai_Daon_41.png"},
        {"id": 54, "category": "tech", "label": "工业/特殊设备真皮保护套", "name": "Daon 65", "description": "一款定制的深绿色真皮保护壳，可完美保护并安装高端音频设备等特殊数码设备。", "image": "/images/Ai_Daon_42.png"},
        {"id": 55, "category": "bag", "label": "迷你链条包 / 剑桥包 / 斜挎包", "name": "Daon 66", "description": "将经典的剑桥包设计实现为迷你尺寸的棕色真皮包，非常适合日常使用。", "image": "/images/Ai_Daon_43.png"},
        {"id": 56, "category": "tech", "label": "智能手机真皮保护壳", "name": "Daon 67", "description": "精致的金属银色纹理与指环背带相结合，最大限度地提高折叠式智能手机使用便利性的手机壳。", "image": "/images/Ai_Daon_44.png"},
        {"id": 57, "category": "tech", "label": "MagSafe卡包", "name": "Daon 68", "description": "由柔软的天然皮革材料制成，并提供三种基础颜色的极简设计MagSafe附加型卡包。", "image": "/images/Ai_Daon_45.png"},
        {"id": 58, "category": "tech", "label": "工业/特殊设备真皮保护套", "name": "Daon 69", "description": "考虑到特殊设备的显示屏和按钮操作部分，经过精细打孔和设计的黑屏皮革保护套。", "image": "/images/Ai_Daon_46.png"},
        {"id": 59, "category": "bag", "label": "多功能迷你收纳袋", "name": "Daon 70", "description": "以鲜艳的蓝色和压花皮革为特色，通过顶部D形环提高便携性的小型多功能收纳袋。", "image": "/images/Ai_Daon_47.png"},
        {"id": 60, "category": "tech", "label": "智能手机真皮保护壳", "name": "Daon 71", "description": "完美贴合折叠式智能手机顶部和底部的基础驼棕色高级皮革外壳。", "image": "/images/Ai_Daon_48.png"},
        {"id": 61, "category": "lifestyle", "label": "汽车智能钥匙包/套", "name": "Daon 72", "description": "一体式设计，精致地覆盖车钥匙按钮部分，具有运动魅力的智能钥匙保护套。", "image": "/images/Ai_Daon_49.png"},
        {"id": 62, "category": "leather", "label": "办公文具", "name": "Daon 73", "description": "定制的刻有徽标的真皮文件夹，非常适合作为企业和大学的VIP欢迎套件或活动纪念品。", "image": "/images/Ai_Daon_50.png"}
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

console.log("Done appending 64-73 to locales.");
