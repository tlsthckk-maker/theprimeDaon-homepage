import Image from 'next/image';
import FloatingActionButtons from './FloatingActionButtons';
import { getDictionary } from '@/i18n';

export default async function Footer({ lng }: { lng: string }) {
  const dict = await getDictionary(lng);

  return (
    <>
      <footer className="bg-slate-900 text-gray-400 pt-20 pb-10 border-t border-gray-700 break-keep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column (Spans 7) */}
            <div className="lg:col-span-7 flex flex-col space-y-12">
              {/* 1. Company Intro */}
              <section>
                <div className="mb-5 border-none outline-none bg-transparent">
                  <Image 
                    src="/images/CI.png" 
                    alt="더프라임다온" 
                    width={180} 
                    height={56} 
                    className="object-contain bg-transparent border-none outline-none"
                    style={{ filter: 'invert(1) brightness(1.5)', mixBlendMode: 'screen' }}
                  />
                </div>
                <p 
                  className="text-gray-400 text-[15px] md:text-base leading-relaxed font-sans max-w-md text-balance"
                  dangerouslySetInnerHTML={{ __html: dict.footer.intro }}
                ></p>
              </section>

              {/* 2. Popular Lines */}
              <section>
                <h3 className="font-serif text-lg font-bold text-white mb-5">{dict.footer.popular_lines.title}</h3>
                <ul className="flex flex-col space-y-3 text-[15px] font-sans text-gray-400">
                  {dict.footer.popular_lines.items.map((item: string, i: number) => <li key={i}>{item}</li>)}
                </ul>
              </section>

              {/* 3. Contact Us */}
              <section>
                <h3 className="font-serif text-lg font-bold text-white mb-5">{dict.footer.contact.title}</h3>
                <div className="grid grid-cols-[80px_1fr] gap-y-4 text-[15px] font-sans text-gray-400">
                  <div className="text-amber-700 font-bold text-[11px] tracking-widest self-center uppercase">{dict.footer.contact.address_label}</div>
                  <div className="text-balance">{dict.footer.contact.address}</div>
                  
                  <div className="text-amber-700 font-bold text-[11px] tracking-widest self-center uppercase">{dict.footer.contact.phone_label}</div>
                  <div>
                    <div>070-4169-9233</div>
                    <div>010-9741-8540</div>
                  </div>
                  
                  <div className="text-amber-700 font-bold text-[11px] tracking-widest self-center uppercase">{dict.footer.contact.fax_label}</div>
                  <div>02-979-0929</div>
                  
                  <div className="text-amber-700 font-bold text-[11px] tracking-widest self-center uppercase">{dict.footer.contact.email_label}</div>
                  <div>daon0929@naver.com</div>
                </div>
              </section>
            </div>

            {/* Right Column (Spans 5) */}
            <div className="lg:col-span-5 flex flex-col space-y-12">
              {/* 1. Quick Links */}
              <section>
                <h3 className="font-serif text-lg font-bold text-white mb-5">{dict.footer.quick_links.title}</h3>
                <ul className="flex flex-col space-y-3 text-[15px] font-sans text-gray-400">
                  <li><a href={`/${lng}/about`} className="hover:text-white transition-colors">{dict.footer.quick_links.about}</a></li>
                  <li><a href={`/${lng}/capabilities`} className="hover:text-white transition-colors">{dict.footer.quick_links.capabilities}</a></li>
                  <li><a href={`/${lng}/showroom`} className="hover:text-white transition-colors">{dict.footer.quick_links.showroom}</a></li>
                  <li><a href={`/${lng}/contact`} className="hover:text-white transition-colors">{dict.footer.quick_links.contact}</a></li>
                </ul>
              </section>

              {/* 2. B2B Sourcing */}
              <section>
                <h3 className="font-serif text-lg font-bold text-white mb-5">{dict.footer.b2b.title}</h3>
                <ul className="flex flex-col space-y-3 text-[15px] font-sans text-gray-400">
                  {dict.footer.b2b.items.map((item: string, i: number) => <li key={i}>{item}</li>)}
                </ul>
              </section>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-20 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center md:items-start text-xs font-sans text-gray-500">
            <p className="mb-4 md:mb-0">© 2026 THE PRIME DAON. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">{dict.footer.bottom.privacy}</a>
              <span>&middot;</span>
              <a href="#" className="hover:text-white transition-colors">{dict.footer.bottom.terms}</a>
            </div>
          </div>
        </div>
      </footer>
      <FloatingActionButtons />
    </>
  );
}
