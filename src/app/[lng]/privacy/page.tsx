import { getDictionary } from '@/i18n';

export default async function PrivacyPage({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  const dict = await getDictionary(lng);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">{dict.footer.bottom.privacy}</h1>
        
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 prose prose-slate max-w-none text-slate-700 text-[15px] leading-relaxed">
          {lng === 'ko' ? (
            <>
              <p><strong>(주)더프라임다온</strong>(이하 '회사'라 한다)은(는) 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다. 이에 「개인정보 보호법」 제30조에 따라 정보주체에게 개인정보 처리에 관한 절차 및 기준을 안내하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.</p>

              <h3>제1조 (개인정보의 처리 목적)</h3>
              <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
              <ol>
                <li><strong>고객 상담 및 문의 처리:</strong> 홈페이지 내 'Contact Us'를 통한 제품 제작 문의, OEM/ODM 제휴 제안, 샘플 제작 의뢰 등의 확인, 사실조사를 위한 연락·통지, 처리결과 통보의 목적으로 개인정보를 처리합니다.</li>
                <li><strong>마케팅 및 광고에의 활용:</strong> 신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 접속빈도 파악 또는 회원의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.</li>
              </ol>

              <h3>제2조 (처리하는 개인정보의 항목)</h3>
              <p>회사는 상담 및 서비스 제공을 위해 아래와 같은 최소한의 개인정보를 수집하고 있습니다.</p>
              <ul>
                <li>수집항목 : 성명, 연락처(휴대전화번호), 이메일 주소, 회사명(선택), 직책(선택), 접속 IP 정보, 쿠키, 서비스 이용 기록, 접속 로그</li>
                <li>수집방법 : 홈페이지(문의 게시판)</li>
              </ul>

              <h3>제3조 (개인정보의 처리 및 보유 기간)</h3>
              <p>① 회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
              <p>② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</p>
              <ul>
                <li>소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래 등에서의 소비자보호에 관한 법률)</li>
                <li>웹사이트 방문기록 : 3개월 (통신비밀보호법)</li>
                <li>문의 응대 및 상담 기록 : 문의 처리 완료 후 1년 보관 후 파기</li>
              </ul>

              <h3>제4조 (개인정보의 제3자 제공에 관한 사항)</h3>
              <p>회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다. 현재 회사는 고객의 개인정보를 제3자에게 제공하고 있지 않습니다.</p>

              <h3>제5조 (정보주체와 법정대리인의 권리·의무 및 그 행사방법)</h3>
              <p>① 정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.</p>
              <p>② 제1항에 따른 권리 행사는 회사에 대해 「개인정보 보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다.</p>

              <h3>제6조 (개인정보의 파기절차 및 파기방법)</h3>
              <p>① 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</p>
              <p>② 파기절차: 이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다.</p>
              <p>③ 파기방법: 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</p>

              <h3>제7조 (개인정보의 안전성 확보 조치)</h3>
              <p>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
              <ul>
                <li>관리적 조치 : 내부관리계획 수립·시행, 전담직원 교육 등</li>
                <li>기술적 조치 : 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 보안프로그램 설치</li>
                <li>물리적 조치 : 전산실, 자료보관실 등의 접근통제</li>
              </ul>

              <h3>제8조 (개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항)</h3>
              <p>① 회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.</p>
              <p>② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.</p>
              <ul>
                <li>쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.</li>
                <li>쿠키의 설치·운영 및 거부 : 웹브라우저 상단의 도구&gt;인터넷 옵션&gt;개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.</li>
              </ul>

              <h3>제9조 (개인정보 보호책임자)</h3>
              <p>① 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
              <ul>
                <li><strong>개인정보 보호책임자</strong></li>
                <li>성명 : 개인정보 보호담당자</li>
                <li>직책 : 대표</li>
                <li>연락처 : 070-4169-9233</li>
                <li>이메일 : daon0929@naver.com</li>
              </ul>

              <h3>제10조 (권익침해 구제방법)</h3>
              <p>정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다.</p>
              <ul>
                <li>개인정보침해신고센터 : (국번없이) 118</li>
                <li>대검찰청 사이버수사과 : (국번없이) 1301</li>
                <li>경찰청 사이버수사국 : (국번없이) 182</li>
              </ul>

              <h3>제11조 (개인정보 처리방침 변경)</h3>
              <p>이 개인정보처리방침은 2026년 1월 1일부터 적용됩니다.</p>
            </>
          ) : (
            <>
              {/* English Version */}
              <p><strong>THE PRIME DAON</strong> (hereinafter referred to as the "Company") values the privacy of its users and complies with the personal information protection regulations under the "Personal Information Protection Act" and other applicable laws.</p>
              <p>This Privacy Policy explains how we collect, use, process, and protect your personal information.</p>

              <h3>Article 1 (Purpose of Processing Personal Information)</h3>
              <p>The Company processes personal information for the following purposes. The processed personal information will not be used for purposes other than the following, and if the purpose of use is changed, necessary measures such as obtaining separate consent will be implemented.</p>
              <ol>
                <li><strong>Handling customer inquiries and consultations:</strong> Processing personal information to verify OEM/ODM partnership proposals, sample production requests, and to communicate the results.</li>
                <li><strong>Marketing and Advertising:</strong> Developing new services/products, providing customized services, and delivering promotional information.</li>
              </ol>

              <h3>Article 2 (Items of Personal Information Processed)</h3>
              <p>The Company collects the following minimum personal information to provide consultations and services.</p>
              <ul>
                <li>Items collected: Name, Contact Number, Email Address, Company Name (Optional), Inquiry Details, IP Address, Cookies, Access Logs</li>
                <li>Method of collection: Website Contact Form</li>
              </ul>

              <h3>Article 3 (Retention and Processing Period)</h3>
              <p>The Company processes and retains personal information within the retention and use period stipulated by law or the period agreed upon when collecting personal information.</p>
              <ul>
                <li>Records on consumer complaints or dispute resolution: 3 years</li>
                <li>Website visit records: 3 months</li>
                <li>Inquiry records: Retained for 1 year after the completion of the inquiry processing and then destroyed.</li>
              </ul>

              <h3>Article 4 (Provision to Third Parties)</h3>
              <p>The Company processes personal information only within the scope specified in Article 1 and provides personal information to third parties only in cases falling under Articles 17 and 18 of the Personal Information Protection Act, such as the consent of the data subject or special provisions of the law. Currently, we do not provide personal information to third parties.</p>

              <h3>Article 5 (Rights of Data Subjects)</h3>
              <p>Data subjects may exercise their rights to access, correct, delete, or suspend the processing of their personal information at any time. You can contact us via email or phone to exercise these rights, and we will take immediate action.</p>

              <h3>Article 6 (Destruction of Personal Information)</h3>
              <p>In principle, the Company destroys personal information without delay when the purpose of processing has been achieved. Electronic files are deleted using technical methods that cannot reproduce the records, and printed documents are shredded or incinerated.</p>

              <h3>Article 7 (Security Measures)</h3>
              <p>The Company takes managerial, technical, and physical measures necessary to ensure the safety of personal information, such as establishing an internal management plan, restricting access to the personal information processing system, and installing security programs.</p>

              <h3>Article 8 (Installation and Operation of Automatic Collection Devices)</h3>
              <p>The Company uses 'cookies' to store and retrieve usage information to provide customized services. You can refuse the installation of cookies through the option settings in your web browser, but refusing cookies may cause difficulties in using customized services.</p>

              <h3>Article 9 (Chief Privacy Officer)</h3>
              <p>For any privacy-related inquiries or complaints, please contact our privacy officer at:</p>
              <ul>
                <li>Title: Chief Privacy Officer</li>
                <li>Phone: +82-70-4169-9233</li>
                <li>Email: daon0929@naver.com</li>
              </ul>

              <h3>Article 10 (Changes to the Privacy Policy)</h3>
              <p>This Privacy Policy is effective from January 1, 2026.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
