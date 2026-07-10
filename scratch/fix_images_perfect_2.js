const fs = require('fs');
const path = require('path');

const localesDir = "src/i18n/locales";
const langs = ['ko', 'en', 'ja', 'zh'];

// Daon 1 to 12 IDs are 1 to 12
const idToImage = {
    1: "/images/Ai_Daon_12.png",
    2: "/images/Ai_Daon_19.png",
    3: "/images/Ai_Daon_48.png",
    4: "/images/Ai_Daon_51.png",
    5: "/images/Ai_Daon_5.png",
    6: "/images/Ai_Daon_8.png",
    7: "/images/Ai_Daon_11.png",
    8: "/images/Ai_Daon_13.png",
    9: "/images/Ai_Daon_23.png",
    10: "/images/Ai_Daon_32.png",
    11: "/images/Ai_Daon_34.png",
    12: "/images/Ai_Daon_45.png",
};

for (let i = 1; i <= 7; i++) {
    const filename = i === 1 ? 'append_locales.js' : `append_locales_${i}.js`;
    if (!fs.existsSync(`scratch/${filename}`)) continue;
    
    const content = fs.readFileSync(`scratch/${filename}`, 'utf8');
    const match = content.match(/const newItems = (\{[\s\S]*?\});\n/);
    if (match) {
        const newItems = eval("(" + match[1] + ")");
        if (newItems.ko) {
            newItems.ko.forEach(item => {
                let img = item.image;
                img = img.replace(/_\d+\.png$/, '.png');
                idToImage[item.id] = img;
            });
        }
    }
}

for (const lang of langs) {
    const filePath = path.join(localesDir, `${lang}.json`);
    let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    let changed = false;
    data.showroom.products.forEach(p => {
        if (idToImage[p.id] && p.image !== idToImage[p.id]) {
            p.image = idToImage[p.id];
            changed = true;
        }
    });
    
    if (changed) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`Fixed ${lang}.json`);
    }
}
console.log("Images fixed perfectly.");
