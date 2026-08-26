const LANGS = ['ko', 'en', 'ja', 'zh'];

/**
 * 동적 렌더링 라우트는 next-sitemap 이 자동 수집하지 못한다.
 * (빌드 출력에서 ƒ 로 표시되는 것들 — /[lng]/contact 가 searchParams 를 쓴다)
 * B2B 에서 문의 페이지는 반드시 색인돼야 하므로 여기서 수동으로 넣는다.
 */
const DYNAMIC_PATHS = ['/contact'];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.primedaon.com',
  generateRobotsTxt: true, // robots.txt 자동 생성
  sitemapSize: 7000,
  generateIndexSitemap: false, // 사이트맵 인덱스 파일 생성 끄기 (소규모 사이트일 경우)

  // exclude 를 두지 않는다.
  // 예전에 exclude: ['/en'] 이 있었는데, 정확히 일치하는 경로만 제외하기 때문에
  // 영어 홈만 빠지고 /en/about 등은 남아 언어 하나만 홈이 없는 비대칭 상태가 됐다.
  // 기본 언어는 한국어(hreflang x-default → /ko)이지만 영어 홈도 색인 대상이다.

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
