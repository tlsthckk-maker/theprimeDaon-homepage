const fs = require('fs');
const path = require('path');

const data = {
  'ko': {
    ui: {
      kicker: 'B2B Reference',
      title: 'Collections',
      desc: '더프라임다온의 하이엔드 제조 역량을 확인해 보세요.',
      filter_all: '전체 보기',
      filter_tech: '테크 에센셜',
      filter_bag: '가방 & 파우치',
      filter_personal: '퍼스널 레더 굿즈',
      filter_life: '라이프스타일 소품',
      tag_promo: '기업 판촉용',
      tag_vip: 'VIP 웰컴키트',
      tag_dealer: '딜러사 판촉물',
      drawer_craft_label: 'Craftsmanship & Details',
      drawer_craft_desc: '견고한 마감 처리, 최고급 소재 적용 및 정밀 봉제. 내구성과 심미성을 동시에 충족하는 하이엔드 공정.',
      drawer_cust_label: 'Customization Option',
      drawer_cust_desc: '가죽 소재 및 컬러 변경, 기업 로고 커스텀 각인(불박/금박), 패키지 구성 등 100% 맞춤형 OEM/ODM 양산이 가능합니다.',
      drawer_footer: '본 제품은 더프라임다온의 완벽한 마감 퀄리티를 증명하는 레퍼런스 모델입니다.',
      btn_contact: '💡 이 스타일로 제작 단가 문의하기',
      btn_portfolio: '📁 제조 포트폴리오 확인하기'
    },
    categories: {
      '테크 에센셜 | 맥세이프 카드홀더': '테크 에센셜 | 맥세이프 카드홀더',
      '테크 에센셜 | 디지털/웨어러블 기어': '테크 에센셜 | 디지털/웨어러블 기어',
      '라이프스타일 소품 | 키 케이싱 & 키링': '라이프스타일 소품 | 키 케이싱 & 키링',
      '퍼스널 레더 굿즈 | 오피스 스테이셔너리': '퍼스널 레더 굿즈 | 오피스 스테이셔너리',
      '가방 & 파우치 | 라이프스타일 파우치': '가방 & 파우치 | 라이프스타일 파우치',
      '가방 & 파우치 | 데일리 & 캐주얼 백': '가방 & 파우치 | 데일리 & 캐주얼 백',
      '테크 에센셜 | 스마트폰 가죽 케이스': '테크 에센셜 | 스마트폰 가죽 케이스',
      '퍼스널 레더 굿즈 | 카드홀더 & 지갑': '퍼스널 레더 굿즈 | 카드홀더 & 지갑',
      '퍼스널 레더 굿즈 | 트래블 액세서리': '퍼스널 레더 굿즈 | 트래블 액세서리',
      '라이프스타일 소품 | 골프 액세서리': '라이프스타일 소품 | 골프 액세서리',
      '가방 & 파우치 | 비즈니스 백': '가방 & 파우치 | 비즈니스 백',
      '테크 에센셜 | 산업용/특수 장비 기어': '테크 에센셜 | 산업용/특수 장비 기어'
    },
    products: {
      '맥세이프 카드 지갑 (스탠드/밴드형)': '맥세이프 카드 지갑 (스탠드/밴드형)',
      '에어팟 케이스': '에어팟 케이스',
      '자동차 스마트키 홀더/케이스': '자동차 스마트키 홀더/케이스',
      '가죽 다이어리 커버 / 바인더': '가죽 다이어리 커버 / 바인더',
      '다목적 소형 미니 파우치': '다목적 소형 미니 파우치',
      '가죽 스트랩 & 루프 키링': '가죽 스트랩 & 루프 키링',
      '미니 체인 백 / 사첼백 / 크로스백': '미니 체인 백 / 사첼백 / 크로스백',
      '아이폰 프리미엄 가죽 케이스': '아이폰 프리미엄 가죽 케이스',
      '에어팟 / 버즈 가죽 케이스': '에어팟 / 버즈 가죽 케이스',
      '컴팩트 지갑 / 슬림 카드홀더': '컴팩트 지갑 / 슬림 카드홀더',
      '갤럭시 Z플립/폴드 가죽 케이스': '갤럭시 Z플립/폴드 가죽 케이스',
      '러기지텍': '러기지텍',
      '골프 공 파우치': '골프 공 파우치',
      '워치 스트랩': '워치 스트랩',
      '가죽 브리프케이스 / 노트북 백': '가죽 브리프케이스 / 노트북 백',
      '다용도 미니 파우치': '다용도 미니 파우치',
      '명함/카드지갑': '명함/카드지갑',
      '아이폰 케이스(자수형)': '아이폰 케이스(자수형)',
      '노트북 파우치': '노트북 파우치',
      'PDA 및 바코드 단말기 가죽 가드': 'PDA 및 바코드 단말기 가죽 가드',
      '핸드 스트랩': '핸드 스트랩',
      '다용도 레더 파우치': '다용도 레더 파우치',
      '벨트 클립': '벨트 클립',
      '가죽 선글라스/안경 케이스': '가죽 선글라스/안경 케이스',
      '핸드스트랩': '핸드스트랩',
      '골프-아이언커버': '골프-아이언커버',
      '아이폰 프리미엄 케이스': '아이폰 프리미엄 케이스'
    }
  },
  'en': {
    ui: {
      kicker: 'B2B Reference',
      title: 'Collections',
      desc: 'Discover the high-end manufacturing capabilities of The Prime Daon.',
      filter_all: 'View All',
      filter_tech: 'Tech Essentials',
      filter_bag: 'Bags & Pouches',
      filter_personal: 'Personal Leather Goods',
      filter_life: 'Lifestyle Accessories',
      tag_promo: 'Corporate Promo',
      tag_vip: 'VIP Welcome Kit',
      tag_dealer: 'Dealer Promo',
      drawer_craft_label: 'Craftsmanship & Details',
      drawer_craft_desc: 'Solid finishing, premium materials, and precision stitching. High-end processes satisfying both durability and aesthetics.',
      drawer_cust_label: 'Customization Option',
      drawer_cust_desc: '100% custom OEM/ODM mass production is possible, including leather material and color changes, corporate logo custom engraving, and packaging configuration.',
      drawer_footer: 'This product is a reference model proving the perfect finish quality of The Prime Daon.',
      btn_contact: '💡 Inquire about manufacturing costs for this style',
      btn_portfolio: '📁 View manufacturing portfolio'
    },
    categories: {
      '테크 에센셜 | 맥세이프 카드홀더': 'Tech Essentials | MagSafe Card Holder',
      '테크 에센셜 | 디지털/웨어러블 기어': 'Tech Essentials | Digital/Wearable Gear',
      '라이프스타일 소품 | 키 케이싱 & 키링': 'Lifestyle | Key Casing & Key Ring',
      '퍼스널 레더 굿즈 | 오피스 스테이셔너리': 'Personal | Office Stationery',
      '가방 & 파우치 | 라이프스타일 파우치': 'Bag & Pouch | Lifestyle Pouch',
      '가방 & 파우치 | 데일리 & 캐주얼 백': 'Bag & Pouch | Daily & Casual Bag',
      '테크 에센셜 | 스마트폰 가죽 케이스': 'Tech Essentials | Smartphone Case',
      '퍼스널 레더 굿즈 | 카드홀더 & 지갑': 'Personal | Card Holder & Wallet',
      '퍼스널 레더 굿즈 | 트래블 액세서리': 'Personal | Travel Accessory',
      '라이프스타일 소품 | 골프 액세서리': 'Lifestyle | Golf Accessory',
      '가방 & 파우치 | 비즈니스 백': 'Bag & Pouch | Business Bag',
      '테크 에센셜 | 산업용/특수 장비 기어': 'Tech Essentials | Industrial Gear'
    },
    products: {
      '맥세이프 카드 지갑 (스탠드/밴드형)': 'MagSafe Card Wallet (Stand/Band)',
      '에어팟 케이스': 'AirPods Case',
      '자동차 스마트키 홀더/케이스': 'Car Smart Key Holder/Case',
      '가죽 다이어리 커버 / 바인더': 'Leather Diary Cover/Binder',
      '다목적 소형 미니 파우치': 'Multipurpose Mini Pouch',
      '가죽 스트랩 & 루프 키링': 'Leather Strap & Loop Keyring',
      '미니 체인 백 / 사첼백 / 크로스백': 'Mini Chain Bag / Satchel Bag',
      '아이폰 프리미엄 가죽 케이스': 'iPhone Premium Leather Case',
      '에어팟 / 버즈 가죽 케이스': 'AirPods/Buds Leather Case',
      '컴팩트 지갑 / 슬림 카드홀더': 'Compact Wallet / Slim Card Holder',
      '갤럭시 Z플립/폴드 가죽 케이스': 'Galaxy Z Flip/Fold Leather Case',
      '러기지텍': 'Luggage Tag',
      '골프 공 파우치': 'Golf Ball Pouch',
      '워치 스트랩': 'Watch Strap',
      '가죽 브리프케이스 / 노트북 백': 'Leather Briefcase / Laptop Bag',
      '다용도 미니 파우치': 'Multipurpose Mini Pouch',
      '명함/카드지갑': 'Business Card Holder / Wallet',
      '아이폰 케이스(자수형)': 'iPhone Case (Embroidered)',
      '노트북 파우치': 'Laptop Pouch',
      'PDA 및 바코드 단말기 가죽 가드': 'PDA / Barcode Terminal Leather Guard',
      '핸드 스트랩': 'Hand Strap',
      '다용도 레더 파우치': 'Multipurpose Leather Pouch',
      '벨트 클립': 'Belt Clip',
      '가죽 선글라스/안경 케이스': 'Leather Sunglasses/Glasses Case',
      '핸드스트랩': 'Hand Strap',
      '골프-아이언커버': 'Golf Iron Cover',
      '아이폰 프리미엄 케이스': 'iPhone Premium Case'
    }
  }
};

['ko', 'en'].forEach(lng => {
  const p = path.join('./src/i18n/locales', lng + '.json');
  const json = JSON.parse(fs.readFileSync(p, 'utf8'));
  json.showroom_ui = data[lng];
  fs.writeFileSync(p, JSON.stringify(json, null, 2), 'utf8');
  console.log(`Updated ${lng}.json`);
});
