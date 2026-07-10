const fs = require('fs');
const path = require('path');

const localesDir = "src/i18n/locales";
const langs = ['ko', 'en', 'ja', 'zh'];

for (const lang of langs) {
    const filePath = path.join(localesDir, `${lang}.json`);
    let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    let changed = false;
    data.showroom.products.forEach(p => {
        if (p.image) {
            const original = p.image;
            p.image = p.image.replace(/(_\d+)\.png$/, '.png');
            if (original !== p.image) {
                changed = true;
            }
        }
    });
    
    if (changed) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`Updated ${lang}.json`);
    }
}
console.log("Done fixing image paths.");
