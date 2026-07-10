const fs = require('fs');
const data = JSON.parse(fs.readFileSync('src/i18n/locales/ko.json', 'utf8'));
data.showroom.products.forEach(p => console.log('ID:', p.id, 'Name:', p.name, 'Image:', p.image));
