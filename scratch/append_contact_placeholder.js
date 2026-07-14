const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../src/i18n/locales');
const langs = ['ko', 'en', 'ja', 'zh'];

const placeholders = {
  ko: "생산하시고자 하는 제품의 종류, 예상 수량, 희망 납기일, 기타 참고 사항을 자유롭게 작성해 주세요.\n\n예) 스마트폰 가죽 케이스, 1,000개, 8월 말 납품 희망",
  en: "Please feel free to describe the type of product, estimated quantity, desired delivery date, and any other details.\n\ne.g., Leather smartphone cases, 1,000 units, desired delivery by end of August",
  ja: "生産をご希望の製品の種類、予想数量、希望納期、その他参考事項（デザイン、素材など）をご自由にお書きください。\n\n例：スマートフォン用レザーケース、1,000個、8月末納品希望",
  zh: "请自由填写您想要生产的产品种类、预估数量、期望交期以及其他参考事项。\n\n例如：智能手机皮套，1,000个，希望8月底交货"
};

langs.forEach(lang => {
  const filePath = path.join(localesDir, `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    let json = JSON.parse(fileContent);
    
    if (json.contact && json.contact.form) {
      json.contact.form.message_placeholder = placeholders[lang];
      fs.writeFileSync(filePath, JSON.stringify(json, null, 2) + '\n');
      console.log(`Updated message_placeholder in ${lang}.json`);
    }
  }
});
