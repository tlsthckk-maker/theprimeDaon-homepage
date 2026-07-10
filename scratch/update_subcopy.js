const fs = require('fs');
const path = require('path');

const localesDir = "src/i18n/locales";

// Update logic
for (const lang of ['ko', 'en', 'ja', 'zh']) {
    const filePath = path.join(localesDir, `${lang}.json`);
    const originalContent = fs.readFileSync(filePath, 'utf8');
    const original = JSON.parse(originalContent);
    
    if (lang === 'ko') {
        original.about.sub_copy = "보이지 않는 곳에서 최고의 가치를 만듭니다.\n2014년 설립 이래, ㈜더프라임다온은 오직 '정직한 생산'이라는 확고한 철학을 바탕으로 프리미엄 가죽 제품과 스마트 기기 액세서리를 묵묵히 제조해 왔습니다.\n20년 이상의 노하우를 지닌 15명의 현장 장인과 3명의 관리 스태프가 한 팀이 되어, 디자인 기획부터 패턴 제작, 엄격한 전수 품질 검수(QC)에 이르는 완벽한 자체 원스톱 시스템을 구현합니다.\n철저한 납기 준수와 고객의 관점에 맞추는 품질 관리를 통해, 귀사의 성공적인 글로벌 비즈니스를 이끌어 줄 가장 든든한 제조 전진 기지가 되겠습니다.";
    } else if (lang === 'en') {
        original.about.sub_copy = "We create the highest value behind the scenes.\nSince our establishment in 2014, The Prime Daon has silently manufactured premium leather products and smart device accessories based on our firm philosophy of 'Honest Production'.\nOur team of 15 seasoned artisans with over 20 years of know-how and 3 management staff work together to implement a perfect in-house one-stop system from design planning and pattern making to strict total quality inspection (QC).\nThrough thorough adherence to delivery schedules and quality control tailored to the customer's perspective, we will be your most reliable manufacturing forward base leading your successful global business.";
    } else if (lang === 'ja') {
        original.about.sub_copy = "見えないところで最高の価値を創造します。\n2014年の設立以来、The Prime Daonは「誠実な生産」という確固たる哲学に基づき、プレミアムレザー製品とスマート機器アクセサリーを黙々と製造してきました。\n20年以上のノウハウを持つ15名の熟練職人と3名の管理スタッフが一つのチームとなり、デザイン企画からパターン作成、厳格な全数品質検査（QC）に至る完璧な自社ワンストップシステムを具現化します。\n徹底した納期遵守とお客様の視点に合わせた品質管理を通じて、貴社の成功するグローバルビジネスを導く最も心強い製造前進基地となります。";
    } else if (lang === 'zh') {
        original.about.sub_copy = "我们在看不见的地方创造最高价值。\n自2014年成立以来，The Prime Daon始终秉持“诚实生产”的坚定理念，默默制造优质皮具与智能设备配件。\n由拥有20年以上经验的15名资深工匠与3名管理人员组成团队，实现从设计策划、打版到严格的全数质量检测（QC）的完美内部一站式系统。\n通过严格遵守交货期和以客户为中心的质量管理，我们将成为您最可靠的制造前沿基地，助力您取得全球业务的成功。";
    }
    
    fs.writeFileSync(filePath, JSON.stringify(original, null, 2), 'utf8');
    console.log(`Updated ${lang}.json`);
}
