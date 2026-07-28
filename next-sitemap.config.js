/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.primedaon.com',
  generateRobotsTxt: true, // robots.txt 자동 생성
  exclude: ['/en'], // 사이트맵에서 제외할 경로
  sitemapSize: 7000,
  generateIndexSitemap: false, // 사이트맵 인덱스 파일 생성 끄기 (소규모 사이트일 경우)
}
