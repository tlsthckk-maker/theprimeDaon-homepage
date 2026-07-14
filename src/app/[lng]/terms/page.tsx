import { getDictionary } from '@/i18n';

export default async function TermsPage({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  const dict = await getDictionary(lng);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">{dict.footer.bottom.terms}</h1>
        
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 prose prose-slate max-w-none text-slate-700 text-[15px] leading-relaxed">
          {lng === 'ko' ? (
            <>
              <h3>제1조 (목적)</h3>
              <p>이 약관은 (주)더프라임다온(이하 "회사"라 합니다)이 운영하는 웹사이트(이하 "사이트"라 합니다)에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 합니다)를 이용함에 있어 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
              
              <h3>제2조 (정의)</h3>
              <p>① "사이트"란 회사가 재화 또는 용역을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이트를 운영하는 사업자의 의미로도 사용합니다.</p>
              <p>② "이용자"란 "사이트"에 접속하여 이 약관에 따라 "사이트"가 제공하는 서비스를 받는 회원을 말합니다.</p>

              <h3>제3조 (약관 등의 명시와 설명 및 개정)</h3>
              <p>① 회사는 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소, 전화번호, 팩스번호, 전자우편주소 등을 이용자가 쉽게 알 수 있도록 사이트의 초기 서비스화면에 게시합니다.</p>
              <p>② 회사는 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「전자문서 및 전자거래기본법」, 「전자금융거래법」, 「전자서명법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「방문판매 등에 관한 법률」, 「소비자기본법」 등 관련 법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</p>
              <p>③ 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 사이트의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.</p>

              <h3>제4조 (서비스의 제공 및 변경)</h3>
              <p>① 회사는 다음과 같은 업무를 수행합니다.</p>
              <ul>
                <li>B2B OEM/ODM 제조 관련 정보 제공 및 상담</li>
                <li>제품 갤러리(쇼룸) 및 기업 역량 소개</li>
                <li>제조 문의 접수 및 샘플 제작 의뢰 접수</li>
                <li>기타 회사가 정하는 업무</li>
              </ul>
              <p>② 회사는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 용역의 내용을 변경할 수 있습니다.</p>

              <h3>제5조 (서비스의 중단)</h3>
              <p>① 회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.</p>
              <p>② 회사는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단, 회사가 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.</p>

              <h3>제6조 (개인정보보호)</h3>
              <p>① 회사는 이용자의 정보수집시 원활한 서비스 제공을 위해 필요한 최소한의 정보를 수집합니다.</p>
              <p>② 회사가 이용자의 개인식별이 가능한 개인정보를 수집하는 때에는 반드시 당해 이용자의 동의를 받습니다.</p>
              <p>③ 제공된 개인정보는 당해 이용자의 동의 없이 목적 외의 이용이나 제3자에게 제공할 수 없으며, 이에 대한 모든 책임은 회사가 집니다.</p>

              <h3>제7조 (회사의 의무)</h3>
              <p>① 회사는 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 서비스를 제공하는데 최선을 다하여야 합니다.</p>
              <p>② 회사는 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보보호를 위한 보안 시스템을 갖추어야 합니다.</p>

              <h3>제8조 (이용자의 의무)</h3>
              <p>이용자는 다음 행위를 하여서는 안 됩니다.</p>
              <ol>
                <li>신청 또는 변경 시 허위 내용의 등록</li>
                <li>타인의 정보 도용</li>
                <li>"사이트"에 게시된 정보의 변경</li>
                <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
                <li>회사 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                <li>회사 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                <li>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 사이트에 공개 또는 게시하는 행위</li>
              </ol>

              <h3>제9조 (저작권의 귀속 및 이용제한)</h3>
              <p>① 회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속합니다.</p>
              <p>② 이용자는 "사이트"를 이용함으로써 얻은 정보 중 회사에게 지적재산권이 귀속된 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.</p>

              <h3>제10조 (분쟁해결)</h3>
              <p>① 회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치, 운영합니다.</p>
              <p>② 회사는 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다.</p>

              <h3>제11조 (재판권 및 준거법)</h3>
              <p>① 회사와 이용자 간에 발생한 분쟁에 관한 소송은 회사의 본점 소재지를 관할하는 법원을 전속 관할법원으로 합니다.</p>
              <p>② 회사와 이용자 간에 제기된 소송에는 대한민국 법을 적용합니다.</p>
            </>
          ) : (
            <>
              {/* English Version */}
              <h3>Article 1 (Purpose)</h3>
              <p>The purpose of these Terms of Service is to set forth the rights, obligations, and responsibilities of THE PRIME DAON (hereinafter referred to as the "Company") and the user in using the internet-related services provided by the Company through its website.</p>
              
              <h3>Article 2 (Definitions)</h3>
              <p>1. "Website" refers to the virtual business place established by the Company to provide information and services to users.</p>
              <p>2. "User" refers to the person who accesses the "Website" and receives the services provided by the "Website" in accordance with these terms.</p>

              <h3>Article 3 (Provision and Change of Services)</h3>
              <p>The Company performs the following tasks:</p>
              <ul>
                <li>Providing information and consultation regarding B2B OEM/ODM manufacturing</li>
                <li>Receiving manufacturing inquiries and sample production requests</li>
                <li>Showcasing product galleries and company capabilities</li>
                <li>Other tasks determined by the Company</li>
              </ul>

              <h3>Article 4 (Interruption of Service)</h3>
              <p>The Company may temporarily suspend the provision of services in the event of maintenance, replacement, or breakdown of information and communication equipment such as computers, or interruption of communication.</p>

              <h3>Article 5 (Obligations of the Company)</h3>
              <p>The Company shall not engage in acts prohibited by laws and regulations or these Terms of Service, or acts contrary to public order and morals, and shall do its best to provide services continuously and stably as stipulated in these terms.</p>

              <h3>Article 6 (Obligations of the User)</h3>
              <p>Users shall not engage in the following acts:</p>
              <ol>
                <li>Registering false information during application or modification</li>
                <li>Stealing information of others</li>
                <li>Changing information posted on the "Website"</li>
                <li>Transmitting or posting information (computer programs, etc.) other than the information determined by the Company</li>
                <li>Infringing on the copyrights or other intellectual property rights of the Company or a third party</li>
                <li>Acts that damage the reputation or interfere with the business of the Company or a third party</li>
              </ol>

              <h3>Article 7 (Copyright and Use Restrictions)</h3>
              <p>1. Copyrights and other intellectual property rights to the works created by the Company shall belong to the Company.</p>
              <p>2. Users shall not use information obtained by using the "Website" for commercial purposes by copying, transmitting, publishing, distributing, broadcasting, or otherwise, nor allow third parties to use it without the prior consent of the Company.</p>

              <h3>Article 8 (Dispute Resolution)</h3>
              <p>The Company shall prioritize handling complaints and opinions submitted by users. However, if prompt processing is difficult, the Company will immediately notify the user of the reason and processing schedule.</p>

              <h3>Article 9 (Jurisdiction and Governing Law)</h3>
              <p>Lawsuits concerning disputes between the Company and the user shall be exclusively under the jurisdiction of the court governing the location of the Company's head office, and the laws of the Republic of Korea shall apply.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
