/**
 * PWA 매니페스트.
 *
 * Next.js 가 이 파일을 /manifest.webmanifest 로 서빙하고
 * <link rel="manifest"> 태그도 자동으로 넣는다. 직접 <head> 를 열 필요 없다.
 *
 * 아이콘은 현판 원본(.ai)에서 심볼 부분만 벡터 상태로 잘라내 만들었다.
 * 배경을 흰색으로 채운 이유: iOS 홈 화면 아이콘은 투명도를 지원하지 않아
 * 투명 배경을 쓰면 그 부분이 검게 나온다.
 *
 * purpose: 'maskable' 아이콘은 안드로이드가 원형·둥근사각 등으로 잘라낼 때 쓴다.
 * 잘려도 심볼이 남도록 여백을 더 크게 잡은 별도 파일이다.
 */
export default function manifest() {
  return {
    name: '(주)더프라임다온 — 가죽 제품 OEM·ODM 제조',
    short_name: '더프라임다온',
    description:
      '스마트폰 케이스, 지갑, 카드홀더, 파우치를 기획부터 양산까지. 특수 봉제 11대·레이저 재단·정밀 프레스를 갖춘 2014년 설립 B2B 가죽 제조사입니다.',
    lang: 'ko',
    start_url: '/ko',
    scope: '/',
    display: 'standalone' as const,
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any' as const,
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any' as const,
      },
      {
        src: '/icons/icon-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable' as const,
      },
    ],
  };
}
