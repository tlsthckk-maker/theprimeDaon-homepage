const fs = require('fs');
const path = require('path');

const localesDir = "src/i18n/locales";

const newItems = {
    "ko": [
        {"id": 73, "category": "bag", "label": "미니 체인 백 / 사첼백", "name": "다온84", "description": "트렌디한 메탈릭 실버 컬러와 미니멀한 스퀘어 쉐입이 돋보이는 컴팩트한 사이즈의 미니 백입니다.", "image": "/images/Ai_Daon_61.png"},
        {"id": 74, "category": "bag", "label": "다목적 소형 미니 파우치 / 클러치", "name": "다온85", "description": "고급스러운 블랙 가죽에 골드 메탈 후크와 탈부착 가능한 핸드 스트랩을 더해 실용성을 극대화한 클러치형 파우치입니다.", "image": "/images/Ai_Daon_62.png"},
        {"id": 75, "category": "lifestyle", "label": "자동차 스마트키 홀더/케이스", "name": "다온86", "description": "차량 키의 버튼 형태를 정교하게 압인하고 견고한 스티치로 마감하여 일체감을 높인 프리미엄 스마트키 커버입니다.", "image": "/images/Ai_Daon_63.png"}
    ],
    "en": [
        {"id": 73, "category": "bag", "label": "Mini Chain Bag / Satchel Bag", "name": "Daon 84", "description": "A compact-sized mini bag highlighting a trendy metallic silver color and a minimalist square shape.", "image": "/images/Ai_Daon_61.png"},
        {"id": 74, "category": "bag", "label": "Multi-purpose Mini Pouch / Clutch", "name": "Daon 85", "description": "A clutch-type pouch maximizing practicality by adding a gold metal hook and a detachable hand strap to luxurious black leather.", "image": "/images/Ai_Daon_62.png"},
        {"id": 75, "category": "lifestyle", "label": "Car Smart Key Holder / Case", "name": "Daon 86", "description": "A premium smart key cover that enhances a sense of unity by delicately embossing the button shape of the car key and finishing it with sturdy stitches.", "image": "/images/Ai_Daon_63.png"}
    ],
    "ja": [
        {"id": 73, "category": "bag", "label": "ミニチェーンバッグ / サッチェルバッグ", "name": "Daon 84", "description": "トレンディなメタリックシルバーカラーとミニマルなスクエアシェイプが際立つコンパクトサイズのミニバッグです。", "image": "/images/Ai_Daon_61.png"},
        {"id": 74, "category": "bag", "label": "多目的ミニポーチ / クラッチ", "name": "Daon 85", "description": "高級感のあるブラックレザーにゴールドのメタルフックと着脱可能なハンドストラップを加え、実用性を極大化したクラッチ型ポーチです。", "image": "/images/Ai_Daon_62.png"},
        {"id": 75, "category": "lifestyle", "label": "車のスマートキーホルダー/ケース", "name": "Daon 86", "description": "車のキーのボタンの形を精巧に型押しし、頑丈なステッチで仕上げて一体感を高めたプレミアムスマートキーカバーです。", "image": "/images/Ai_Daon_63.png"}
    ],
    "zh": [
        {"id": 73, "category": "bag", "label": "迷你链条包 / 剑桥包", "name": "Daon 84", "description": "具有时尚金属银色和极简方形外观的紧凑型迷你包。", "image": "/images/Ai_Daon_61.png"},
        {"id": 74, "category": "bag", "label": "多功能迷你收纳袋 / 手拿包", "name": "Daon 85", "description": "在奢华黑色皮革上增加金色金属挂钩和可拆卸手腕带，最大限度地提高实用性的手拿包型收纳袋。", "image": "/images/Ai_Daon_62.png"},
        {"id": 75, "category": "lifestyle", "label": "汽车智能钥匙包/套", "name": "Daon 86", "description": "通过精细压花车钥匙的按钮形状并以坚固缝线收尾，增强一体感的高级智能钥匙保护套。", "image": "/images/Ai_Daon_63.png"}
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

console.log("Done appending 84-86 to locales.");
