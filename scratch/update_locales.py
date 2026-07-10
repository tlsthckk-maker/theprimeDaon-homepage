import json
import os

locales_dir = "src/i18n/locales"

data = {
    "ko": {
        "about": {
            "title": "회사 소개",
            "main_copy": "타협하지 않는 정직함, 글로벌 브랜드가 신뢰하는 프리미엄 제조 파트너.",
            "sub_copy": "보이지 않는 곳에서 최고의 가치를 만듭니다.\n2014년 설립 이래, ㈜더프라임다온은 오직 '정직한 생산'이라는 확고한 철학을 바탕으로 프리미엄 가죽 제품과 스마트 기기 액세서리를 묵묵히 제조해 왔습니다.\n20년 이상의 노하우를 지닌 15명의 현장 장인과 3명의 관리 스태프가 한 팀이 되어, 디자인 기획부터 패턴 제작, 엄격한 전수 품질 검수(QC)에 이르는 완벽한 자체 원스톱 시스템을 구현합니다.\n철저한 납기 준수와 결점 없는 품질 관리를 통해, 귀사의 성공적인 글로벌 비즈니스를 이끌어 줄 가장 든든한 제조 전진 기지가 되겠습니다.",
            "global_partners": {
                "title": "글로벌 파트너",
                "desc": "몽*랑, 우*미 등 최고급 패션 하우스부터 삼*전자, 슈*겐 관련 하이엔드 모바일 액세서리까지. 까다로운 국내외 메이저 기업들이 우리의 품질을 선택한 데에는 변하지 않는 이유가 있습니다.\n수많은 프로젝트를 성공으로 이끌며 다져진 탄탄한 제조 레퍼런스를 지금 귀사의 비즈니스에 연결하십시오."
            },
            "organization": {
                "title": "조직도",
                "management": {
                    "label": "관리부",
                    "roles": "영업, 구매, 제품 개발"
                },
                "production": {
                    "label": "생산부",
                    "roles": "제품 생산, 품질 관리(QC)"
                }
            },
            "location": {
                "title": "오시는 길",
                "address_label": "주소",
                "address": "서울 중랑구 봉우재로 108 3층",
                "phone_label": "전화번호",
                "phone": "070-4169-9233",
                "fax_label": "팩스",
                "fax": "02-979-0929",
                "email_label": "이메일",
                "email": "daon0929@naver.com"
            }
        },
        "contact_info": {
            "address": "서울 중랑구 봉우재로 108 3층",
            "phone": "070-4169-9233",
            "email": "daon0929@naver.com"
        }
    },
    "en": {
        "about": {
            "title": "About Us",
            "main_copy": "Uncompromising Honesty, the Premium Manufacturing Partner Trusted by Global Brands.",
            "sub_copy": "We create the highest value behind the scenes.\nSince our establishment in 2014, The Prime Daon has silently manufactured premium leather products and smart device accessories based on our firm philosophy of 'Honest Production'.\nOur team of 15 seasoned artisans with over 20 years of know-how and 3 management staff work together to implement a perfect in-house one-stop system from design planning and pattern making to strict total quality inspection (QC).\nThrough thorough adherence to delivery schedules and flawless quality control, we will be your most reliable manufacturing forward base leading your successful global business.",
            "global_partners": {
                "title": "Global Partners",
                "desc": "From top-tier fashion houses like Mont**** and Wooy**** to high-end mobile accessories for Sam**** and Spi***. There is an unchanging reason why demanding domestic and international major companies choose our quality.\nConnect our solid manufacturing references, built upon numerous successful projects, to your business today."
            },
            "organization": {
                "title": "Organization",
                "management": {
                    "label": "Management Dept.",
                    "roles": "Sales, Purchasing, Product Development"
                },
                "production": {
                    "label": "Production Dept.",
                    "roles": "Product Production, Quality Control (QC)"
                }
            },
            "location": {
                "title": "Location",
                "address_label": "Address",
                "address": "3F, 108 Bongujae-ro, Jungnang-gu, Seoul",
                "phone_label": "Phone",
                "phone": "+82-70-4169-9233",
                "fax_label": "Fax",
                "fax": "+82-2-979-0929",
                "email_label": "Email",
                "email": "daon0929@naver.com"
            }
        },
        "contact_info": {
            "address": "3F, 108 Bongujae-ro, Jungnang-gu, Seoul",
            "phone": "+82-70-4169-9233",
            "email": "daon0929@naver.com"
        }
    },
    "ja": {
        "about": {
            "title": "会社概要",
            "main_copy": "妥協のない誠実さ、グローバルブランドが信頼するプレミアム製造パートナー。",
            "sub_copy": "見えないところで最高の価値を創造します。\n2014年の設立以来、The Prime Daonは「誠実な生産」という確固たる哲学に基づき、プレミアムレザー製品とスマート機器アクセサリーを黙々と製造してきました。\n20年以上のノウハウを持つ15名の熟練職人と3名の管理スタッフが一つのチームとなり、デザイン企画からパターン作成、厳格な全数品質検査（QC）に至る完璧な自社ワンストップシステムを具現化します。\n徹底した納期遵守と欠陥のない品質管理を通じて、貴社の成功するグローバルビジネスを導く最も心強い製造前進基地となります。",
            "global_partners": {
                "title": "グローバルパートナー",
                "desc": "モン***、ウー***などの最高級ファッションハウスから、サム***、シュピ***関連のハイエンドモバイルアクセサリーまで。厳しい国内外の主要企業が私たちの品質を選ぶのには、変わらない理由があります。\n数多くのプロジェクトを成功に導き培われた確かな製造リファレンスを、今すぐ貴社のビジネスに繋げてください。"
            },
            "organization": {
                "title": "組織図",
                "management": {
                    "label": "管理部",
                    "roles": "営業、購買、製品開発"
                },
                "production": {
                    "label": "生産部",
                    "roles": "製品生産、品質管理（QC）"
                }
            },
            "location": {
                "title": "アクセス",
                "address_label": "住所",
                "address": "ソウル特別市中浪区ポンウジェ路108 3階",
                "phone_label": "電話番号",
                "phone": "+82-70-4169-9233",
                "fax_label": "FAX",
                "fax": "+82-2-979-0929",
                "email_label": "メール",
                "email": "daon0929@naver.com"
            }
        },
        "contact_info": {
            "address": "ソウル特別市中浪区ポンウジェ路108 3階",
            "phone": "+82-70-4169-9233",
            "email": "daon0929@naver.com"
        }
    },
    "zh": {
        "about": {
            "title": "关于我们",
            "main_copy": "毫不妥协的诚实，全球品牌信赖的优质制造合作伙伴。",
            "sub_copy": "我们在看不见的地方创造最高价值。\n自2014年成立以来，The Prime Daon始终秉持“诚实生产”的坚定理念，默默制造优质皮具与智能设备配件。\n由拥有20年以上经验的15名资深工匠与3名管理人员组成团队，实现从设计策划、打版到严格的全数质量检测（QC）的完美内部一站式系统。\n通过严格遵守交货期和无瑕疵的质量管理，我们将成为您最可靠的制造前沿基地，助力您取得全球业务的成功。",
            "global_partners": {
                "title": "全球合作伙伴",
                "desc": "从万**、宇**等顶级时尚品牌，到三*、斯皮*等高端移动配件。国内外要求严格的知名企业选择我们的品质，有着不变的理由。\n众多成功项目积累的扎实制造经验，现在就将其与您的业务连接起来吧。"
            },
            "organization": {
                "title": "组织架构",
                "management": {
                    "label": "管理部",
                    "roles": "销售、采购、产品开发"
                },
                "production": {
                    "label": "生产部",
                    "roles": "产品生产、质量管理 (QC)"
                }
            },
            "location": {
                "title": "联系地址",
                "address_label": "地址",
                "address": "首尔特别市中浪区峰右才路108 3层",
                "phone_label": "电话",
                "phone": "+82-70-4169-9233",
                "fax_label": "传真",
                "fax": "+82-2-979-0929",
                "email_label": "电子邮箱",
                "email": "daon0929@naver.com"
            }
        },
        "contact_info": {
            "address": "首尔特别市中浪区峰右才路108 3层",
            "phone": "+82-70-4169-9233",
            "email": "daon0929@naver.com"
        }
    }
}

for lang, content in data.items():
    file_path = os.path.join(locales_dir, f"{lang}.json")
    with open(file_path, "r", encoding="utf-8") as f:
        original = json.load(f)
    
    original["about"] = content["about"]
    original["contact"]["company_info"]["address"] = content["contact_info"]["address"]
    original["contact"]["company_info"]["phone"] = content["contact_info"]["phone"]
    original["contact"]["company_info"]["email"] = content["contact_info"]["email"]
    
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(original, f, ensure_ascii=False, indent=2)
