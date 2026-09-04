const LANGS = ['ko', 'en', 'ja', 'zh'];

/**
 * 동적 렌더링 라우트는 next-sitemap 이 자동 수집하지 못한다.
 * (빌드 출력에서 ƒ 로 표시되는 것들 — /[lng]/contact 가 searchParams 를 쓴다)
 * B2B 에서 문의 페이지는 반드시 색인돼야 하므로 여기서 수동으로 넣는다.
 */
const DYNAMIC_PATHS = ['/contact'];

/**
 * 페이지가 아닌데 라우트로 잡히는 것들.
 *
 * Next.js 는 src/app/apple-icon.png 와 src/app/manifest.ts 를 라우트로 취급한다.
 * 그래서 next-sitemap 이 이 둘을 페이지처럼 긁어 사이트맵에 넣는다.
 *
 * 사이트맵은 "이 주소들을 검색 결과에 올려달라"는 목록이다.
 * 홈 화면 아이콘과 PWA 설정 파일은 검색 결과에 오를 대상이 아니고,
 * 실제로 2026-09-04 서치콘솔에서 이 둘이 "발견됨 - 현재 색인이 생성되지 않음"
 * 10건 중 2건을 차지하고 있었다.
 */
const NON_PAGE_ROUTES = ['/apple-icon.png', '/manifest.webmanifest'];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.primedaon.com',
  generateRobotsTxt: true, // robots.txt 자동 생성
  sitemapSize: 7000,
  generateIndexSitemap: false, // 사이트맵 인덱스 파일 생성 끄기 (소규모 사이트일 경우)

  // exclude 에는 "페이지가 아닌 것"만 넣는다.
  //
  // 예전에 exclude: ['/en'] 이 있었는데, 정확히 일치하는 경로만 제외하기 때문에
  // 영어 홈만 빠지고 /en/about 등은 남아 언어 하나만 홈이 없는 비대칭 상태가 됐다.
  // 기본 언어는 한국어(hreflang x-default → /ko)이지만 영어 홈도 색인 대상이다.
  //
  // 그 사고 때문에 한동안 exclude 를 아예 두지 않았으나,
  // 페이지를 빼는 것과 페이지가 아닌 파일을 빼는 것은 목적이 다르다.
  // 언어 경로(/ko, /en, /ja, /zh 및 그 하위)는 무슨 일이 있어도 여기 넣지 말 것.
  exclude: NON_PAGE_ROUTES,

  additionalPaths: async (config) => {
    const results = [];
    for (const lng of LANGS) {
      for (const path of DYNAMIC_PATHS) {
        results.push(await config.transform(config, `/${lng}${path}`));
      }
    }
    return results;
  },
};
