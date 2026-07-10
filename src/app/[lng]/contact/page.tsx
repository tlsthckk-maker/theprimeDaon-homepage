import { getDictionary } from '@/i18n';

export default async function Contact({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
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
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">{dict.contact.form.company}</label>
                  <input type="text" className="w-full px-5 py-4 bg-slate-50 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">{dict.contact.form.person}</label>
                  <input type="text" className="w-full px-5 py-4 bg-slate-50 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">{dict.contact.form.contact}</label>
                  <input type="text" className="w-full px-5 py-4 bg-slate-50 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">{dict.contact.form.item}</label>
                  <select className="w-full px-5 py-4 bg-slate-50 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-slate-800">
                    <option>{dict.showroom.categories.device}</option>
                    <option>{dict.showroom.categories.keytag}</option>
                    <option>{dict.showroom.categories.wallet}</option>
                    <option>{dict.showroom.categories.watch}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">{dict.contact.form.message}</label>
                <textarea rows={5} className="w-full px-5 py-4 bg-slate-50 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"></textarea>
              </div>

              <div className="pt-2">
                <button type="button" className="w-full md:w-auto px-10 bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-amber-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  {dict.contact.form.submit}
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}
