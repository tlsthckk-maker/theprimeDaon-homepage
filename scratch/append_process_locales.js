const fs = require('fs');
const path = require('path');

const localesPath = path.join(__dirname, '../src/i18n/locales');

const processLocales = {
  ko: {
    "process": {
      "section_title": "신뢰의 여정, 완벽을 향한 6단계.",
      "section_desc": "더프라임다온은 타협 없는 품질을 위해 자체 B2B 팩토리에서 기획부터 납품까지 모든 공정을 직접 통제합니다.",
      "helper_text": "스텝을 클릭하시면 타임라인 상세 명세와 산출물을 확인할 수 있습니다.",
      "active_step": "ACTIVE PRODUCTION STEP",
      "step_guide": "단계 {step} 상세 가이드",
      "phase_overview": "공정 실효 개요 (PHASE OVERVIEW)",
      "deliverables": "의무 약정 산출물 (B2B DELIVERABLES)",
      "est_days": "예상 소요 영업일:",
      "inquiry_btn": "이 공정기준으로 문의 게시",
      "preset_msg": "[공정문의: {title}] 관련 상담을 요청합니다.",
      "steps": [
        {
          "id": "step-1",
          "titlePre": "STEP 01",
          "title": "기획 및 맞춤 상담",
          "titleEn": "Briefing & Consultation",
          "content": "고객사의 니즈와 아이디어를 분석하여 제품의 방향성을 수립합니다. 더프라임다온의 전담 전문가가 투입되어 명확한 기준을 세웁니다.",
          "checks": ["전담 전문가 1:1 미팅 진행", "요구사항 정의서 작성", "레퍼런스 및 기술 구현 가능성 검토"],
          "time": "1~2일"
        },
        {
          "id": "step-2",
          "titlePre": "STEP 02",
          "title": "견적 안내 및 계약",
          "titleEn": "Estimation & Contract",
          "content": "확정된 기획을 바탕으로 최적의 생산 단가와 일정을 산출합니다. 투명한 비용 산정으로 상호 신뢰를 구축합니다.",
          "checks": ["최적화된 맞춤 견적서 발송", "제조 일정 타임라인 확립", "공식 B2B 양산 계약 체결"],
          "time": "1~2일"
        },
        {
          "id": "step-3",
          "titlePre": "STEP 03",
          "title": "디자인 확정 및 샘플 제작",
          "titleEn": "Design & Prototyping",
          "content": "원자재를 깐깐하게 선별하고 본생산과 100% 동일한 환경에서 1차 마스터 샘플을 제작합니다.",
          "checks": ["디자인, 색상, 원자재 스펙 확정", "CAD 정밀 설계 및 패턴 작업", "1차 실물 프로토타입 완성"],
          "time": "2~3주",
          "highlight": "예상 소요 기간 2~3주"
        },
        {
          "id": "step-4",
          "titlePre": "STEP 04",
          "title": "피드백 및 최종 확정",
          "titleEn": "Refinement & Confirmation",
          "content": "제작된 샘플을 고객사와 함께 리뷰하고 디테일을 수정합니다. 완벽한 본생산을 위한 최종 마스터 샘플을 확립합니다.",
          "checks": ["고객사 샘플 리뷰 및 피드백 접수", "디테일 수정 및 보완", "최종 생산 사양 픽스"],
          "time": "4~7일"
        },
        {
          "id": "step-5",
          "titlePre": "STEP 05",
          "title": "하이엔드 대량 생산",
          "titleEn": "Mass Production",
          "content": "최종 확정된 샘플과 단 0.1mm의 오차도 없는 규격으로 자동화 설비 기반의 본생산을 본격 가동합니다.",
          "checks": ["본생산용 원자재 대량 확보", "레이저 커팅 및 고속 프레스 가동", "특수 미싱 라인 조립"],
          "time": "2~5주",
          "highlight": "예상 소요 기간 2~5주"
        },
        {
          "id": "step-6",
          "titlePre": "STEP 06",
          "title": "전수 검수 및 납품",
          "titleEn": "QC & Logistics",
          "content": "타협 없는 품질 관리를 위해 전 제품 100% 정밀 검수를 진행한 뒤, 완벽하게 패키징하여 안전하게 납품합니다.",
          "checks": ["불량률 제로를 위한 전 제품 100% 검수", "브랜드 기준에 맞춘 최종 안전 패키징", "고객사 요청에 따른 현장별 맞춤 배송"],
          "time": "1~2일"
        }
      ]
    }
  },
  en: {
    "process": {
      "section_title": "The Journey of Trust, 6 Steps to Perfection.",
      "section_desc": "The Prime Daon directly controls all processes from planning to delivery in our own B2B factory for uncompromising quality.",
      "helper_text": "Click on a step to view detailed timeline specifications and deliverables.",
      "active_step": "ACTIVE PRODUCTION STEP",
      "step_guide": "Step {step} Detailed Guide",
      "phase_overview": "PHASE OVERVIEW",
      "deliverables": "B2B DELIVERABLES",
      "est_days": "Estimated Business Days:",
      "inquiry_btn": "Inquire Based on This Process",
      "preset_msg": "I would like to request a consultation regarding [Process Inquiry: {title}].",
      "steps": [
        {
          "id": "step-1",
          "titlePre": "STEP 01",
          "title": "Briefing & Consultation",
          "titleEn": "Briefing & Consultation",
          "content": "We establish product direction by analyzing client needs and ideas. A dedicated expert from The Prime Daon is assigned to set clear standards.",
          "checks": ["1:1 meeting with dedicated expert", "Create requirements definition", "Review references and technical feasibility"],
          "time": "1~2 days"
        },
        {
          "id": "step-2",
          "titlePre": "STEP 02",
          "title": "Estimation & Contract",
          "titleEn": "Estimation & Contract",
          "content": "Based on the finalized plan, optimal production costs and schedules are calculated. Mutual trust is built through transparent cost estimation.",
          "checks": ["Send optimized custom quotation", "Establish manufacturing timeline", "Sign official B2B mass production contract"],
          "time": "1~2 days"
        },
        {
          "id": "step-3",
          "titlePre": "STEP 03",
          "title": "Design & Prototyping",
          "titleEn": "Design & Prototyping",
          "content": "Raw materials are carefully selected, and the 1st master sample is produced in the exact same environment as mass production.",
          "checks": ["Finalize design, color, and material specs", "Precision CAD design and patterning", "Complete 1st physical prototype"],
          "time": "2~3 weeks",
          "highlight": "Estimated time: 2~3 weeks"
        },
        {
          "id": "step-4",
          "titlePre": "STEP 04",
          "title": "Refinement & Confirmation",
          "titleEn": "Refinement & Confirmation",
          "content": "The produced sample is reviewed with the client, and details are modified. The final master sample for perfect mass production is established.",
          "checks": ["Client sample review and feedback", "Modify and supplement details", "Fix final production specifications"],
          "time": "4~7 days"
        },
        {
          "id": "step-5",
          "titlePre": "STEP 05",
          "title": "Mass Production",
          "titleEn": "Mass Production",
          "content": "Mass production begins in earnest based on automated equipment with exactly 0.1mm tolerance to the final confirmed sample.",
          "checks": ["Secure raw materials for mass production", "Operate laser cutting and high-speed press", "Special sewing line assembly"],
          "time": "2~5 weeks",
          "highlight": "Estimated time: 2~5 weeks"
        },
        {
          "id": "step-6",
          "titlePre": "STEP 06",
          "title": "QC & Logistics",
          "titleEn": "QC & Logistics",
          "content": "For uncompromising quality control, 100% precision inspection of all products is conducted, followed by perfect packaging and safe delivery.",
          "checks": ["100% inspection of all products for zero defect rate", "Final safety packaging tailored to brand standards", "Custom delivery to specific sites as requested by client"],
          "time": "1~2 days"
        }
      ]
    }
  },
  ja: {
    "process": {
      "section_title": "信頼への旅、完璧への6ステップ。",
      "section_desc": "The Prime Daonは、妥協のない品質のため、自社のB2B工場で企画から納品までの全工程を直接管理します。",
      "helper_text": "ステップをクリックすると、タイムラインの詳細仕様と成果物を確認できます。",
      "active_step": "ACTIVE PRODUCTION STEP",
      "step_guide": "ステップ {step} 詳細ガイド",
      "phase_overview": "工程概要 (PHASE OVERVIEW)",
      "deliverables": "義務成果物 (B2B DELIVERABLES)",
      "est_days": "予想所要営業日:",
      "inquiry_btn": "この工程基準でお問い合わせ",
      "preset_msg": "[工程お問い合わせ: {title}] に関するご相談をお願いします。",
      "steps": [
        {
          "id": "step-1",
          "titlePre": "STEP 01",
          "title": "企画およびカスタマイズ相談",
          "titleEn": "Briefing & Consultation",
          "content": "顧客のニーズとアイデアを分析し、製品の方向性を確立します。The Prime Daonの専任専門家が投入され、明確な基準を設けます。",
          "checks": ["専任専門家との1:1ミーティング", "要件定義書の作成", "リファレンスと技術的実現可能性の検討"],
          "time": "1~2日"
        },
        {
          "id": "step-2",
          "titlePre": "STEP 02",
          "title": "見積もりのご案内と契約",
          "titleEn": "Estimation & Contract",
          "content": "確定した企画に基づき、最適な生産単価と日程を算出します。透明な費用算定により相互の信頼を築きます。",
          "checks": ["最適化されたカスタマイズ見積書の送付", "製造スケジュールのタイムライン確立", "公式B2B量産契約の締結"],
          "time": "1~2日"
        },
        {
          "id": "step-3",
          "titlePre": "STEP 03",
          "title": "デザイン確定およびサンプル製作",
          "titleEn": "Design & Prototyping",
          "content": "原材料を厳選し、本生産と100%同じ環境で一次マスターサンプルを製作します。",
          "checks": ["デザイン、色、原材料スペックの最終確定", "CAD精密設計およびパターン作業", "一次実物プロトタイプの完成"],
          "time": "2~3週間",
          "highlight": "予想所要期間 2~3週間"
        },
        {
          "id": "step-4",
          "titlePre": "STEP 04",
          "title": "フィードバックおよび最終確定",
          "titleEn": "Refinement & Confirmation",
          "content": "製作されたサンプルを顧客と共にレビューし、詳細を修正します。完璧な本生産のための最終マスターサンプルを確立します。",
          "checks": ["顧客のサンプルレビューとフィードバックの受付", "詳細の修正および補完", "最終生産仕様の確定"],
          "time": "4~7日"
        },
        {
          "id": "step-5",
          "titlePre": "STEP 05",
          "title": "ハイエンド大量生産",
          "titleEn": "Mass Production",
          "content": "最終確定したサンプルとわずか0.1mmの誤差もない規格で、自動化設備に基づく本生産を本格稼働させます。",
          "checks": ["本生産用原材料の大量確保", "レーザーカッティングおよび高速プレスの稼働", "特殊ミシンラインの組み立て進行"],
          "time": "2~5週間",
          "highlight": "予想所要期間 2~5週間"
        },
        {
          "id": "step-6",
          "titlePre": "STEP 06",
          "title": "全数検品および納品",
          "titleEn": "QC & Logistics",
          "content": "妥協のない品質管理のため、全製品100%精密検品を行った後、完璧にパッケージングして安全に納品します。",
          "checks": ["不良率ゼロのための全製品100%検品", "ブランド基準に合わせた最終安全パッケージング", "顧客の要望に応じた現場別カスタマイズ配送"],
          "time": "1~2日"
        }
      ]
    }
  },
  zh: {
    "process": {
      "section_title": "信任之旅，迈向完美的6个阶段。",
      "section_desc": "The Prime Daon为了不妥协的质量，在自有的B2B工厂中直接控制从规划到交付的所有流程。",
      "helper_text": "点击步骤查看详细的时间线规格和可交付成果。",
      "active_step": "ACTIVE PRODUCTION STEP",
      "step_guide": "阶段 {step} 详细指南",
      "phase_overview": "流程概览 (PHASE OVERVIEW)",
      "deliverables": "义务可交付成果 (B2B DELIVERABLES)",
      "est_days": "预计所需工作日:",
      "inquiry_btn": "以此流程标准发起咨询",
      "preset_msg": "我想针对 [流程咨询: {title}] 申请相关咨询。",
      "steps": [
        {
          "id": "step-1",
          "titlePre": "STEP 01",
          "title": "企划及定制咨询",
          "titleEn": "Briefing & Consultation",
          "content": "通过分析客户的需求和想法，确立产品的方向性。The Prime Daon的专属专家将介入，制定明确的标准。",
          "checks": ["专属专家1:1会议", "编写需求定义书", "参考案例及技术实现可行性探讨"],
          "time": "1~2天"
        },
        {
          "id": "step-2",
          "titlePre": "STEP 02",
          "title": "报价单指南与合同",
          "titleEn": "Estimation & Contract",
          "content": "根据确定的规划，计算出最佳的生产单价和时间表。通过透明的成本估算建立相互的信任。",
          "checks": ["发送优化的定制报价单", "确立制造进度时间表", "签署正式的B2B量产合同"],
          "time": "1~2天"
        },
        {
          "id": "step-3",
          "titlePre": "STEP 03",
          "title": "设计确认及样品制作",
          "titleEn": "Design & Prototyping",
          "content": "严格挑选原材料，并在与大货生产100%相同的环境中制作第一批主样品。",
          "checks": ["最终确定设计、颜色、原材料规格", "CAD精密设计和制版作业", "完成第一批实体原型"],
          "time": "2~3周",
          "highlight": "预计所需时间 2~3周"
        },
        {
          "id": "step-4",
          "titlePre": "STEP 04",
          "title": "反馈及最终确认",
          "titleEn": "Refinement & Confirmation",
          "content": "与客户一起审核制作的样品并修改细节。确立完美的最终大货生产用主样品。",
          "checks": ["客户样品审核及接收反馈", "细节修改和补充", "确定最终生产规格"],
          "time": "4~7天"
        },
        {
          "id": "step-5",
          "titlePre": "STEP 05",
          "title": "高端大批量生产",
          "titleEn": "Mass Production",
          "content": "以0.1mm误差都没有的规格和最终确定的样品，正式启动基于自动化设备的大批量生产。",
          "checks": ["大量确保大货生产用原材料", "启动激光切割和高速压力机", "特殊缝纫线组装"],
          "time": "2~5周",
          "highlight": "预计所需时间 2~5周"
        },
        {
          "id": "step-6",
          "titlePre": "STEP 06",
          "title": "全数检验及交付",
          "titleEn": "QC & Logistics",
          "content": "为了不妥协的质量控制，对所有产品进行100%精密检验后，完美包装并安全交付。",
          "checks": ["为实现零不良率对所有产品进行100%检验", "符合品牌标准的最终安全包装", "根据客户要求的按现场定制配送"],
          "time": "1~2天"
        }
      ]
    }
  }
};

['ko', 'en', 'ja', 'zh'].forEach(lng => {
  const filePath = path.join(localesPath, `${lng}.json`);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.process = processLocales[lng].process;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Updated ${lng}.json`);
  }
});
