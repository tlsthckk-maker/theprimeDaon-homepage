const fs = require('fs');
const path = require('path');

const localesDir = "src/i18n/locales";
const langs = ['ko', 'en', 'ja', 'zh'];

// Daon 1 to 12
const earlyImages = {
    "다온1": "/images/Ai_Daon_12.png",
    "다온2": "/images/Ai_Daon_19.png",
    "다온3": "/images/Ai_Daon_48.png",
    "다온4": "/images/Ai_Daon_51.png",
    "다온5": "/images/Ai_Daon_5.png",
    "다온6": "/images/Ai_Daon_8.png",
    "다온7": "/images/Ai_Daon_11.png",
    "다온8": "/images/Ai_Daon_13.png",
    "다온9": "/images/Ai_Daon_23.png",
    "다온10": "/images/Ai_Daon_32.png",
    "다온11": "/images/Ai_Daon_34.png",
    "다온12": "/images/Ai_Daon_45.png",
};

// We will read all append_locales files to get the mapping of name -> image
const nameToImage = { ...earlyImages };

for (let i = 1; i <= 7; i++) {
    const filename = i === 1 ? 'append_locales.js' : `append_locales_${i}.js`;
    if (!fs.existsSync(`scratch/${filename}`)) continue;
    
    const content = fs.readFileSync(`scratch/${filename}`, 'utf8');
    // extract newItems object
    const match = content.match(/const newItems = (\{[\s\S]*?\});\n/);
    if (match) {
        // Evaluate the object
        const newItems = eval("(" + match[1] + ")");
        // We just need ko to get names and original images
        if (newItems.ko) {
            newItems.ko.forEach(item => {
                // Strip _2, _3 etc to match the actual available files
                let img = item.image;
                img = img.replace(/_\d+\.png$/, '.png');
                nameToImage[item.name] = img;
            });
        }
    }
}

for (const lang of langs) {
    const filePath = path.join(localesDir, `${lang}.json`);
    let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    data.showroom.products.forEach(p => {
        // p.name in english is "Daon X", but we can match by ID.
        // Wait, nameToImage is keyed by Korean name "다온X". We need to map by ID!
        // So let's map by ID instead!
    });
}
