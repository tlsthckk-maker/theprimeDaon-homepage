import { getDictionary } from '@/i18n';
import ContactForm from '@/components/ContactForm';

export default async function Contact({ 
  params,
  searchParams
}: { 
  params: Promise<{ lng: string }>,
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { lng } = await params;
  const sp = await searchParams;
  const preset = sp.preset as string | undefined;
  const dict = await getDictionary(lng);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{dict.contact.title}</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{dict.contact.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          
          {/* Left Side: Company Info (2 cols) */}
          <div className="lg:col-span-2 bg-slate-900 text-white p-10 md:p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-8 text-amber-500">{dict.contact.company_info.title}</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">{dict.contact.company_info.address_label}</h4>
                  <p className="text-lg leading-relaxed">{dict.contact.company_info.address}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">{dict.contact.company_info.phone_label}</h4>
                  <p className="text-lg font-medium whitespace-pre-line">{dict.contact.company_info.phone}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">{dict.contact.company_info.email_label}</h4>
                  <p className="text-lg font-medium">{dict.contact.company_info.email}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">{dict.contact.company_info.hours_label}</h4>
                  <p className="text-lg leading-relaxed text-slate-300">{dict.contact.company_info.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form (3 cols) */}
          <div className="lg:col-span-3 p-10 md:p-12">
            <ContactForm dict={dict.contact.form} preset={preset} />
          </div>
          
        </div>
      </div>
    </div>
  );
}
