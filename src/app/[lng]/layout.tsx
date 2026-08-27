import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Outfit, Noto_Sans_KR } from 'next/font/google';
import '@/app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { languages } from '@/i18n/settings';
import { getMeta, brandSuffix, SITE_URL } from '@/lib/meta';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const notoSansKR = Noto_Sans_KR({ subsets: ['latin'], variable: '--font-noto' });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

/**
 * 언어별 기본 메타데이터.
 *
 * `export const metadata` 를 쓰면 정적 평가라 params 에 접근할 수 없어 lng 를 모른다.
 * 그 결과 한 언어로 쓴 문구가 4개 언어 경로 전부에 나간다. 그래서 generateMetadata 를 쓴다.
 *
 * title.template 이 언어별 브랜드 접미사를 붙이므로,
 * 각 페이지는 브랜드명 없이 검색어만 담은 title 을 반환하면 된다.
 */
export async function generateMetadata(
  { params }: { params: Promise<{ lng: string }> }
): Promise<Metadata> {
  const { lng } = await params;
  const home = getMeta(lng, '/');
  const suffix = brandSuffix(lng);
  const full = home.title + suffix;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: full,
      template: `%s${suffix}`,
    },
    description: home.description,
    openGraph: {
      type: 'website',
      title: full,
      description: home.description,
      url: `${SITE_URL}/${lng}`,
      siteName: 'THE PRIME DAON',
      images: [
        {
          url: `${SITE_URL}/thumbnail_ko.jpg`,
        },
      ],
    },
    verification: {
      other: {
        'naver-site-verification': ['ec03d59dffb1d43a88617c78d4ca74bd464165e3', 'c4c1b6c2bf67619f673a6d35616c5866842ea6b5'],
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;

  // 지원하지 않는 언어 코드는 404로 처리한다.
  // 이 가드가 없으면 /process-test.html 같은 임의 경로가 [lng]에 매칭되고
  // getDictionary가 영어로 폴백해서 영문 홈페이지가 200으로 렌더된다.
  // (proxy.ts와 같은 캐스팅 방식 — languages가 readonly 리터럴 튜플이라 필요)
  if (!(languages as readonly string[]).includes(lng)) {
    notFound();
  }

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "주식회사 더프라임다온",
    alternateName: ["THE PRIME DAON"],
    url: "https://www.primedaon.com/",
    logo: "https://www.primedaon.com/images/CI.png",
    description: "가죽 제품 OEM/ODM 전문 제조. 보호 케이스, 지갑, 파우치, 카드홀더를 기획부터 생산까지 제작합니다.",
    email: "daon0929@naver.com",
    telephone: "+82-70-4169-9233",
    faxNumber: "+82-2-979-0929",
    address: {
      "@type": "PostalAddress",
      streetAddress: "봉우재로 108 3층",
      addressLocality: "중랑구",
      addressRegion: "서울특별시",
      addressCountry: "KR",
    },
    contactPoint: [{
      "@type": "ContactPoint",
      telephone: "+82-70-4169-9233",
      contactType: "sales",
      availableLanguage: ["Korean", "English", "Japanese", "Chinese"],
    }],
    knowsAbout: ["가죽 제품 OEM", "가죽 제품 ODM", "레더 케이스 제조", "지갑 제조", "파우치 제조"],
  };

  return (
    <html lang={lng}>
      <body className={`${outfit.variable} ${notoSansKR.variable} font-sans bg-slate-50 text-slate-900 antialiased pt-20 flex flex-col min-h-screen relative`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Header lng={lng} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer lng={lng} />
      </body>
    </html>
  );
}
