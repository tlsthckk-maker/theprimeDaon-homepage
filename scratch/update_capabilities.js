const fs = require('fs');
const path = require('path');
const localesDir = 'src/i18n/locales';

const newData = {
  ko: {
    title: '제조 역량',
    main_copy: '압도적인 제조 인프라, 완벽을 향한 시스템.',
    sub_copy: '최첨단 설비와 20년의 노하우로 최상의 결과물을 제공합니다.',
    capacity: {
      title: '월간 생산 능력 (Monthly Capacity)',
      value: '월 평균 40,000개',
      subtitle: '(연간 약 50만 개 생산 가능)',
      desc: '※ 제품 특성(종류) 및 난이도에 따라 제작 수량은 유연하게 조정될 수 있습니다.'
    },
    global_network: {
      title: '글로벌 공급망 (Global Network)',
      subtitle: '중국 칭다오 K&J 코퍼레이션 전략적 생산 MOU 체결 완료',
      desc: '국내 자체 인프라와 글로벌 파트너십을 통한 안정적이고 신속한 대량 생산 및 납기 시스템 구축.'
    },
    facilities: {
      title: '보유 제조 설비 리스트 (Equipment List)',
      items: [
        { name: '레이저 재단기', count: '1대' },
        { name: '고속 프레스 및 연속 재단기', count: '2대' },
        { name: '열 프레스 (정밀 성형용)', count: '9대' },
        { name: '스키 / 부분 피할기', count: '1대' },
        { name: '컴퓨터 자동 미싱', count: '3대' },
        { name: '봉제 미싱 (타프, 말뚝 등 특수 미싱)', count: '6대' },
        { name: '불박기', count: '3대' }
      ]
    }
  },
  en: {
    title: 'Capabilities',
    main_copy: 'Overwhelming Manufacturing Infrastructure, A System Towards Perfection.',
    sub_copy: 'Providing the best results with cutting-edge equipment and 20 years of know-how.',
    capacity: {
      title: 'Monthly Capacity',
      value: 'Avg. 40,000 units',
      subtitle: '(Approx. 500,000 units annually)',
      desc: '※ Production volume can be flexibly adjusted depending on product characteristics and difficulty.'
    },
    global_network: {
      title: 'Global Network',
      subtitle: 'Strategic Production MOU with Qingdao K&J Corp.',
      desc: 'Building a stable and fast mass production and delivery system through our domestic infrastructure and global partnerships.'
    },
    facilities: {
      title: 'Equipment List',
      items: [
        { name: 'Laser Cutting Machine', count: '1 unit' },
        { name: 'High-Speed Press & Continuous Cutter', count: '2 units' },
        { name: 'Heat Press (Precision Molding)', count: '9 units' },
        { name: 'Skiving Machine', count: '1 unit' },
        { name: 'Computerized Sewing Machine', count: '3 units' },
        { name: 'Special Sewing Machine', count: '6 units' },
        { name: 'Hot Foil Stamping Machine', count: '3 units' }
      ]
    }
  },
  ja: {
    title: '製造能力',
    main_copy: '圧倒的な製造インフラ、完璧に向けたシステム。',
    sub_copy: '最先端の設備と20年のノウハウで最高の結果を提供します。',
    capacity: {
      title: '月間生産能力 (Monthly Capacity)',
      value: '月平均 40,000個',
      subtitle: '(年間約50万個生産可能)',
      desc: '※ 製品の特性や難易度に応じて生産数量は柔軟に調整可能です。'
    },
    global_network: {
      title: 'グローバルサプライチェーン',
      subtitle: '中国青島 K&J Corporation 戦略的生産MOU締結完了',
      desc: '国内自社インフラとグローバルパートナーシップを通じた、安定的で迅速な大量生産および納期システムの構築。'
    },
    facilities: {
      title: '保有設備リスト (Equipment List)',
      items: [
        { name: 'レーザー裁断機', count: '1台' },
        { name: '高速プレスおよび連続裁断機', count: '2台' },
        { name: '熱プレス（精密成形用）', count: '9台' },
        { name: '漉き機', count: '1台' },
        { name: 'コンピューターミシン', count: '3台' },
        { name: '特殊ミシン', count: '6台' },
        { name: '箔押し機', count: '3台' }
      ]
    }
  },
  zh: {
    title: '制造能力',
    main_copy: '压倒性的制造基础设施，追求完美的系统。',
    sub_copy: '凭借最先进的设备和20年的专业知识提供最佳效果。',
    capacity: {
      title: '月生产能力',
      value: '月均 40,000件',
      subtitle: '(年产量约50万件)',
      desc: '※ 根据产品特点和难度，生产数量可灵活调整。'
    },
    global_network: {
      title: '全球供应链',
      subtitle: '与中国青岛 K&J 集团签署战略生产谅解备忘录',
      desc: '通过国内自身基础设施和全球合作伙伴关系，建立稳定、快速的批量生产和交货系统。'
    },
    facilities: {
      title: '设备清单',
      items: [
        { name: '激光切割机', count: '1台' },
        { name: '高速压力机及连续切割机', count: '2台' },
        { name: '热压机（精密成型）', count: '9台' },
        { name: '削皮机', count: '1台' },
        { name: '电脑缝纫机', count: '3台' },
        { name: '特种缝纫机', count: '6台' },
        { name: '烫金机', count: '3台' }
      ]
    }
  }
};

['ko', 'en', 'ja', 'zh'].forEach(lng => {
  const file = path.join(localesDir, lng + '.json');
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  data.capabilities = newData[lng];
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
});
console.log("Done");
