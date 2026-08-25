import type { Metadata } from 'next';
import { Outfit, Noto_Sans_KR } from 'next/font/google';
import '@/app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { languages } from '@/i18n/settings';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const notoSansKR = Noto_Sans_KR({ subsets: ['latin'], variable: '--font-noto' });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.primedaon.com'),

  title: 'THE PRIME DAON | 완벽한 가죽 컬렉션 구현의 새로운 표준',
  description: '타협 없는 디테일과 압도적인 장인정신. 귀사가 상상하는 하이엔드, 그 이상을 실현하는 B2B 가죽 제조 기업입니다.',
  openGraph: {
    type: 'website',
    title: 'THE PRIME DAON | 완벽한 가죽 컬렉션 구현의 새로운 표준',
    description: '타협 없는 디테일과 압도적인 장인정신. 귀사가 상상하는 하이엔드, 그 이상을 실현하는 B2B 가죽 제조 기업입니다.',
    url: 'https://www.primedaon.com',
    siteName: 'THE PRIME DAON',
    images: [
      {
        url: 'https://www.primedaon.com/thumbnail_ko.jpg',
      },
    ],
  },
  verification: {
    other: {
      'naver-site-verification': ['ec03d59dffb1d43a88617c78d4ca74bd464165e3', 'c4c1b6c2bf67619f673a6d35616c5866842ea6b5'],
    },
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "주식회사 더프라임다온",
    alternateName: ["THE PRIME DAON"],
    url: "https://www.primedaon.com/",
    logo: "https://www.primedaon.com/logo.png",
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
