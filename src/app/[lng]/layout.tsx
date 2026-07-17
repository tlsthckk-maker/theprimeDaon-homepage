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
  title: 'THE PRIME DAON | Premium Leather Goods OEM/ODM',
  description: 'Innovation in Leather Manufacturing. B2B specialized premium leather goods factory.',
  verification: {
    other: {
      'naver-site-verification': ['ec03d59dffb1d43a88617c78d4ca74bd464165e3'],
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
  return (
    <html lang={lng}>
      <body className={`${outfit.variable} ${notoSansKR.variable} font-sans bg-slate-50 text-slate-900 antialiased pt-20 flex flex-col min-h-screen relative`}>
        <Header lng={lng} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer lng={lng} />
      </body>
    </html>
  );
}
