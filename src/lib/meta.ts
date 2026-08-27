import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/seo';

/**
 * 페이지별 · 언어별 title/description 사전.
 *
 * 여기에 없으면 상위 레이아웃 값이 그대로 상속되어 전 페이지가 같은 제목을 쓰게 된다.
 * Next.js는 generateMetadata 반환값을 상위 metadata와 "필드 단위로" 병합하기 때문이다.
 * 라우트를 추가하면 이 표에도 4개 언어를 모두 채울 것.
 *
 * title 에는 브랜드명을 넣지 않는다. 레이아웃의 title.template 이 언어별 접미사를 붙인다.
 */

export const SITE_URL = 'https://www.primedaon.com';

export const BRAND_SUFFIX: Record<string, string> = {
  ko: ' | 더프라임다온',
  en: ' | THE PRIME DAON',
  ja: ' | THE PRIME DAON',
  zh: ' | The Prime Daon',
};

export type MetaEntry = { title: string; description: string };

const META: Record<string, Record<string, MetaEntry>> = {
  '/': {
    ko: {
      title: '가죽 케이스·지갑 OEM ODM 제조',
      description: '스마트폰 케이스, 지갑, 카드홀더, 파우치를 기획부터 양산까지. 특수 봉제 11대·레이저 재단·정밀 프레스를 갖춘 2014년 설립 B2B 가죽 제조사입니다.',
    },
    en: {
      title: 'Leather Case & Wallet OEM ODM Manufacturer',
      description: 'Korean B2B maker of leather phone cases, wallets, card holders and pouches. Eleven specialty sewing machines, laser cutting and precision presses. Since 2014.',
    },
    ja: {
      title: '革ケース・財布 OEM ODM 製造',
      description: 'スマートフォンケース、財布、カードホルダー、ポーチの企画から量産まで。特殊ミシン11台とレーザー裁断機を備えた2014年設立の韓国革製品メーカーです。',
    },
    zh: {
      title: '皮革手机壳·钱包 OEM 代工制造',
      description: '手机保护套、钱包、卡包与收纳包的策划到量产。配备11台特种缝纫机、激光裁剪与精密冲压设备，2014年成立的韩国皮具代工厂。',
    },
  },
  '/about': {
    ko: {
      title: '2014년 설립 가죽 OEM 공장 회사소개',
      description: '정직한 제조를 원칙으로 2014년 설립. 20년 이상 경력의 현장 장인 15명이 글로벌 브랜드의 프리미엄 가죽 제품을 만듭니다. 서울 중랑구 소재.',
    },
    en: {
      title: 'Korean Leather Goods Factory Since 2014',
      description: 'Founded in 2014 on honest manufacturing. Fifteen craftspeople with over twenty years of experience build premium leather goods for global brands, in Seoul.',
    },
    ja: {
      title: '2014年設立 韓国の革製品工場 会社概要',
      description: '正直なものづくりを原則に2014年設立。20年以上の経験を持つ職人15名が、グローバルブランドのプレミアム革製品を製造しています。ソウル市中浪区に所在。',
    },
    zh: {
      title: '2014年成立 韩国皮具工厂 公司简介',
      description: '以诚实制造为原则于2014年成立。15位拥有20年以上经验的工匠，为全球品牌生产高端皮革制品。工厂位于韩国首尔中浪区。',
    },
  },
  '/capabilities': {
    ko: {
      title: '레이저 재단·특수 봉제 11대 생산설비',
      description: '레이저 재단기와 가죽 피할기로 원단 손상을 줄이고, 타프·말뚝·컴퓨터 미싱 11대로 입체 봉제를 구현합니다. 고속 프레스 2대, 열 프레스 9대 보유.',
    },
    en: {
      title: 'Leather Manufacturing Equipment and Process',
      description: 'Laser cutting and skiving that protect the hide, eleven specialty sewing machines for shaped stitching, two high-speed presses and nine heat presses.',
    },
    ja: {
      title: 'レーザー裁断・特殊ミシン11台の製造設備',
      description: 'レーザー裁断機と革漉き機で素材の傷みを抑え、タープ・ポスト・コンピューターミシン計11台で立体縫製を実現。高速プレス2台、熱プレス9台を保有。',
    },
    zh: {
      title: '激光裁剪·11台特种缝纫 生产设备',
      description: '激光裁剪机与片皮机减少皮料损伤，高车、柱车与电脑缝纫机共11台实现立体缝制。配备高速冲压机2台、热压机9台，六阶段生产流程。',
    },
  },
  '/showroom': {
    ko: {
      title: '가죽 케이스·지갑·파우치 제작 사례',
      description: '테크 에센셜, 가방·파우치, 퍼스널 레더 굿즈, 라이프스타일 소품까지 실제 제작한 B2B 룩북. 품목별로 살펴보고 샘플을 문의하실 수 있습니다.',
    },
    en: {
      title: 'Custom Leather Goods Portfolio and Lookbook',
      description: 'A B2B lookbook of pieces we have actually produced: tech essentials, bags and pouches, personal leather goods and lifestyle items. Request a sample.',
    },
    ja: {
      title: '革ケース・財布・ポーチ 製作事例',
      description: 'テックエッセンシャル、バッグ・ポーチ、パーソナルレザーグッズ、ライフスタイル小物まで実際に製作したB2Bルックブック。カテゴリー別にご覧いただけます。',
    },
    zh: {
      title: '皮革手机壳·钱包·收纳包 定制案例',
      description: '科技配件、包袋与收纳包、个人皮具、生活小物等实际生产案例的B2B产品图册。可按品类浏览并申请样品。',
    },
  },
  '/contact': {
    ko: {
      title: '가죽 제품 OEM 견적·샘플 제작 문의',
      description: '제품 종류, 예상 수량, 희망 납기를 알려주시면 견적과 샘플 개발을 안내해 드립니다. 소량 시생산부터 대량 양산까지 상담 가능합니다.',
    },
    en: {
      title: 'Request a Leather OEM Quote or Sample',
      description: 'Tell us the product type, quantity and target delivery date, and we will guide you through quoting and sample development. Pilot runs to mass production.',
    },
    ja: {
      title: '革製品OEM お見積り・サンプル製作のご相談',
      description: '製品の種類、予定数量、希望納期をお知らせいただければ、お見積りとサンプル開発をご案内します。小ロット試作から量産までご相談いただけます。',
    },
    zh: {
      title: '皮具代工 报价与打样咨询',
      description: '请告知产品种类、预计数量与期望交期，我们将为您提供报价与样品开发方案。从小批量试产到大批量量产均可洽谈。',
    },
  },
  '/privacy': {
    ko: {
      title: '개인정보처리방침',
      description: '㈜더프라임다온이 수집하는 개인정보의 항목, 이용 목적, 보유 기간과 이용자의 권리를 안내합니다.',
    },
    en: {
      title: 'Privacy Policy',
      description: 'How THE PRIME DAON collects personal information, what it is used for, how long it is retained, and the rights available to you as a user.',
    },
    ja: {
      title: 'プライバシーポリシー',
      description: 'ザ・プライムダオンが収集する個人情報の項目、利用目的、保有期間、および利用者の権利についてご案内します。',
    },
    zh: {
      title: '隐私政策',
      description: 'The Prime Daon 收集的个人信息项目、使用目的、保存期限，以及用户所享有的权利说明。',
    },
  },
  '/terms': {
    ko: {
      title: '이용약관',
      description: '㈜더프라임다온 웹사이트 이용에 관한 조건, 서비스 범위, 이용자와 회사의 권리와 의무를 안내합니다.',
    },
    en: {
      title: 'Terms of Service',
      description: 'The conditions governing use of the THE PRIME DAON website, the scope of the service, and the rights and obligations of users and the company.',
    },
    ja: {
      title: '利用規約',
      description: 'ザ・プライムダオンのウェブサイト利用に関する条件、サービスの範囲、利用者と当社の権利および義務についてご案内します。',
    },
    zh: {
      title: '服务条款',
      description: '关于 The Prime Daon 网站使用的条件、服务范围，以及用户与公司双方权利义务的说明。',
    },
  },
};

export function getMeta(lng: string, route: string): MetaEntry {
  const byLang = META[route] ?? META['/'];
  return byLang[lng] ?? byLang['ko'];
}

export function brandSuffix(lng: string): string {
  return BRAND_SUFFIX[lng] ?? BRAND_SUFFIX['ko'];
}

/**
 * SNS·메신저 공유 시 표시되는 이미지. 언어별로 다르다.
 * public/thumbnail_{ko,en,ja,zh}.jpg — 1200x630
 */
export function ogImage(lng: string) {
  const l = BRAND_SUFFIX[lng] ? lng : 'ko';
  return {
    url: `${SITE_URL}/thumbnail_${l}.jpg`,
    width: 1200,
    height: 630,
    alt: getMeta(l, '/').title,
  };
}

/**
 * 각 페이지의 generateMetadata 가 그대로 반환하면 되는 메타데이터.
 * canonical / hreflang 은 기존 buildAlternates 를 그대로 사용한다.
 */
export function buildPageMetadata(lng: string, route: string): Metadata {
  const m = getMeta(lng, route);
  const path = route === '/' ? '' : route;
  const full = m.title + brandSuffix(lng);

  return {
    // 레이아웃의 title.template 은 "하위 세그먼트"에만 적용된다.
    // app/[lng]/layout.tsx 와 app/[lng]/page.tsx 는 같은 세그먼트이므로
    // 홈에는 템플릿이 붙지 않는다 (실제로 브랜드명이 빠진 채 배포된 적 있음).
    // 그래서 홈만 absolute 로 완성된 제목을 직접 지정한다.
    title: route === '/' ? { absolute: full } : m.title,
    description: m.description,
    alternates: buildAlternates(lng, path),
    openGraph: {
      type: 'website',
      siteName: 'THE PRIME DAON',
      title: full,
      description: m.description,
      url: `${SITE_URL}/${lng}${path}`,
      images: [ogImage(lng)],
    },
  };
}
