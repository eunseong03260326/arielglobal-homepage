/* =========================================================
   ARIEL GLOBAL — 아리엘글로벌 site script
   - KOR / ENG toggle (all copy lives in the dictionary below)
   - header state, mobile menu, scroll reveal, active nav
   - inquiry form validation + mailto handoff
   ========================================================= */

const I18N = {
  ko: {
    'meta.title': '아리엘글로벌 | 화장품 튜브 충진 · 스킨케어 · 헤어&바디케어 OEM/ODM',
    'skip': '본문 바로가기',
    'brand.sub': '아리엘글로벌',

    'nav.about': '회사소개',
    'nav.process': '생산공정',
    'nav.capabilities': '생산품목',
    'nav.portfolio': '포트폴리오',
    'nav.brand': '자사브랜드',
    'nav.contact': '제조문의',
    'cta.header': '견적 문의',
    'cta.quote': 'OEM/ODM 견적 · 상담 문의',
    'cta.process': '생산 공정 보기',

    'hero.eyebrow': '충남 아산 · 화장품 OEM / ODM',
    'hero.title': '화장품 <em>튜브 충진</em>과<br />스킨케어 · 헤어케어,<br />기획부터 출고까지 한 곳에서',
    'hero.sub': '아리엘글로벌은 충청남도 아산시 음봉면의 생산 거점에서 화장품 튜브 충진과 스킨케어 · 헤어 · 바디케어 OEM/ODM을 진행합니다. 보유 튜브 충진·실링 설비로 일 최대 50,000개까지 생산하고, 기획·제형·부자재·충진·포장·출고를 한 창구에서 끝냅니다.',
    'hero.fact1.k': '일 최대 생산량',
    'hero.fact1.u': '개 / 일',
    'hero.fact2.k': '기본 MOQ',
    'hero.fact2.u': '개',
    'hero.fact3.k': '생산 거점',
    'hero.fact3.n': '아산',
    'hero.fact3.u': '음봉',
    'hero.badge.kicker': 'TUBE FILLING CAPACITY',
    'hero.badge.title': '일 최대 생산량 50,000개',
    'hero.badge.moq': '기본 MOQ 10,000개',
    'hero.badge.desc': '제품별 협의 가능',

    'band.cap.label': 'TUBE FILLING & SEALING CAPACITY',
    'band.cap.unit': '개 / 일',
    'band.cap.title': '보유 튜브 충진·실링 설비 — 일 최대 생산량 50,000개',
    'band.cap.desc': '튜브 충진과 실링 라인 기준, 하루 최대 5만 개까지 생산할 수 있습니다.',
    'band.moq.label': 'MINIMUM ORDER QUANTITY',
    'band.moq.unit': '개',
    'band.moq.title': '기본 MOQ 10,000개 · 제품별 협의 가능',
    'band.moq.desc': '제품 · 제형 · 패키지에 따라 수량을 협의할 수 있습니다. 첫 출시나 소량 테스트도 함께 검토합니다.',
    'band.cta': '생산능력 · 수량 상담하기',

    'about.eyebrow': 'ABOUT US',
    'about.title': '제조 현장을 아는 파트너,<br />아리엘글로벌',
    'about.lead': '아리엘글로벌은 충청남도 아산시 음봉면에 생산 거점을 두고 화장품 튜브 충진과 스킨케어 · 헤어케어 제품을 만드는 제조 전문 기업입니다.',
    'about.lead2': '브랜드를 직접 운영하며 쌓은 판매와 물류 경험을 제조에 반영합니다. 만들 수 있는 것과 실제로 팔리는 것 사이의 간격을 줄이는 제안이 저희의 방식입니다.',
    'about.caption': '기획 · 제형 · 충진 · 포장 · 출고까지 한 창구에서',
    'about.facility': 'ADDRESS & SITE',
    'about.fac1.k': '본사 · 사업장 · 생산 공장',
    'about.fac1.v': '충청남도 아산시 음봉면 산동로 80-17, 좌동',
    'about.fac1.v2': '80-17, Sandong-ro, Eumbong-myeon, Asan-si, Chungcheongnam-do, Republic of Korea (Jwadong)',
    'about.fac3.k': '주요 업무',
    'about.fac3.v': '화장품 튜브 충진 · 스킨케어 · 헤어 & 바디케어 OEM/ODM',
    'about.note': '생산 가능 품목과 설비 조건은 상담 시 확인해 드립니다. 공장 방문 상담은 사전 예약제로 진행합니다.',
    'about.map': '지도에서 보기',
    'about.cap.label': 'PRODUCTION CAPACITY',
    'about.cap.unit': '개 / 일',
    'about.cap.f1.k': '생산능력',
    'about.cap.f1.v': '보유 튜브 충진 · 실링 설비 기준 일 최대 50,000개',
    'about.cap.f2.k': '기본 MOQ',
    'about.cap.f2.v': '10,000개 · 제품 · 제형 · 패키지에 따라 협의',

    'str.1.t': '아산 음봉 생산 거점',
    'str.1.d': '충남 아산 음봉에 본사와 생산 공장을 두고 튜브 충진과 화장품 제조를 직접 운영합니다. 현장을 직접 보는 만큼 일정과 품질을 가까이에서 관리합니다.',
    'str.2.t': '일 최대 생산량 50,000개',
    'str.2.d': '튜브 충진·실링 설비를 보유하고 있어 하루 최대 50,000개까지 생산합니다. 대량 오더와 급한 납기에도 일정을 함께 맞춰 봅니다.',
    'str.3.t': '기획부터 출고까지 원스톱',
    'str.3.d': '기획, 제형, 부자재, 디자인, 충진, 포장, 출고를 한 창구에서 진행합니다. 여러 업체를 오갈 필요 없이 커뮤니케이션 비용을 줄입니다.',
    'str.4.t': '유연한 MOQ',
    'str.4.d': '기본 MOQ는 10,000개이며, 제품 · 제형 · 패키지에 따라 수량을 협의할 수 있습니다. 첫 출시나 테스트 물량도 함께 검토합니다.',

    'process.eyebrow': 'PROCESS',
    'process.title': '상담에서 납품까지, 5단계',
    'process.sub': '각 단계를 한 곳에서 진행하기 때문에 진행 상황을 한 번에 확인하고, 필요한 결정을 빠르게 내릴 수 있습니다.',
    'step.1.t': '상담 및 기획',
    'step.1.d': '용도와 타깃, 예상 수량, 희망 일정을 확인하고 제품 컨셉과 방향을 정리합니다.',
    'step.2.t': '샘플 · 제형 개발',
    'step.2.d': '제형을 설계하고 샘플을 제작해 사용감과 안정성을 확인합니다.',
    'step.3.t': '디자인 · 튜브 · 부자재',
    'step.3.d': '튜브 용기와 캡, 라벨 등 부자재를 선정하고 디자인을 확정합니다.',
    'step.4.t': '본생산 · QC 품질검사',
    'step.4.d': '충진과 포장을 진행하며 공정 중 품질을 점검합니다.',
    'step.5.t': '납품 · 수출 지원',
    'step.5.d': '출고와 납품을 진행하고, 수출에 필요한 서류와 절차를 함께 협의합니다.',
    'process.note': '각 단계의 기간은 품목 · 수량 · 부자재에 따라 달라지며, 상담 시 일정을 함께 정리해 드립니다.',

    'cap.eyebrow': 'MANUFACTURING CAPABILITIES',
    'cap.title': '생산 품목',
    'cap.lead': '튜브 충진·실링을 중심으로 스킨케어, 헤어 · 바디케어까지 대응합니다. 보유 설비 기준 일 최대 50,000개까지 생산하며, 제형과 용량, 부자재는 상담하며 확정합니다.',
    'cap.1.t': '튜브 충진 · 실링',
    'cap.1.d': '튜브 용기 충진과 실링, 캡 · 부자재 결합까지 진행합니다. 충진량과 점도에 맞춰 조건을 세팅합니다.',
    'cap.1.s1': '개 / 일 최대 생산량',
    'cap.1.s2': '개 기본 MOQ · 협의 가능',
    'cap.1.c1': '튜브 충진',
    'cap.1.c2': '튜브 실링',
    'cap.1.c3': '캡 · 부자재',
    'cap.2.t': '스킨케어',
    'cap.2.d': '토너 · 에센스 · 크림 · 젤 등 기초 제품의 제형 기획과 충진, 포장을 진행합니다.',
    'cap.2.c1': '토너 · 에센스',
    'cap.2.c2': '크림 · 젤',
    'cap.2.c3': '기획 · 충진',
    'cap.3.t': '헤어 · 바디케어',
    'cap.3.d': '샴푸 · 컨디셔너 · 바디워시 · 로션 등 헤어와 바디 제품을 충진하고 포장합니다.',
    'cap.3.c1': '샴푸 · 컨디셔너',
    'cap.3.c2': '바디워시',
    'cap.3.c3': '로션',
    'cap.note': '표기된 품목은 대표적인 예시이며, 실제 생산 가능 여부와 조건은 상담 시 확인해 드립니다.',

    'pf.eyebrow': 'CLIENT PORTFOLIO & CASES',
    'pf.title': '진행한 업체,<br />함께 만든 제품',
    'pf.lead': '아리엘글로벌이 실제로 진행한 튜브 충진 · 스킨케어 프로젝트 중 고객사가 공개에 동의한 사례를 정리했습니다.',
    'pf.lead2': '제품 형태와 용량, 진행 범위를 상담 전에 참고하실 수 있습니다.',
    'pf.note': '게시된 사례는 고객사 동의를 받은 범위에서만 노출하며, 일부 고객사명은 비공개로 표기했습니다.',
    'pf.slot.label': '등록 예정',
    'pf.slot.title': '고객사 프로젝트',
    'pf.slot.desc': '진행한 업체의 제품 사진과 프로젝트 개요가 이 자리에 들어갑니다.',

    'brand.eyebrow': 'IN-HOUSE BRAND',
    'brand.title': '힐핏 <span class="serif-en">HealFit</span>',
    'brand.lead': '아리엘글로벌이 직접 기획하고 만들어 국내외에서 판매 중인 온열 케어 브랜드입니다.',
    'brand.body': '손목 · 무릎 · 허리 · 발, 네 부위를 위한 온열 패치 세트로 쿠팡과 Shopee, Qoo10 등 채널에서 운영하고 있습니다. 브랜드를 직접 만들어 팔아 본 경험이 OEM/ODM 파트너로서 현실적인 제안을 만드는 바탕입니다.',
    'brand.z1': '손목',
    'brand.z2': '무릎',
    'brand.z3': '허리',
    'brand.z4': '발',
    'brand.z1b': '손목',
    'brand.z2b': '무릎',
    'brand.z3b': '허리',
    'brand.z4b': '발',
    'brand.cta': '브랜드 제작 문의',
    'brand.g1': '4-ZONE HEAT CARE SET',

    'contact.eyebrow': 'CONTACT',
    'contact.title': 'OEM/ODM 견적 · 상담 문의',
    'contact.lead': '아래 내용을 남겨 주시면 확인 후 회신드립니다. 급한 문의는 전화가 가장 빠릅니다.',
    'contact.person.label': '담당',
    'contact.person.name': '배은성',
    'contact.person.role': 'COO',
    'contact.phone.label': '전화',
    'contact.mail.label': '이메일',
    'contact.addr.label': '주소',
    'contact.addr1.k': '본사 · 사업장 · 생산 공장',
    'contact.addr1.v': '충청남도 아산시 음봉면 산동로 80-17, 좌동',
    'contact.note': '방문 상담이 필요하시면 미리 연락 주세요. 일정과 준비 사항을 함께 정리해 드립니다.',

    'form.company': '회사명',
    'form.company.ph': '예: 아리엘글로벌',
    'form.name': '담당자명',
    'form.name.ph': '예: 배은성',
    'form.phone': '연락처',
    'form.phone.ph': '010-0000-0000',
    'form.email': '이메일',
    'form.email.ph': 'name@company.com',
    'form.category': '희망 품목',
    'form.category.ph': '선택해 주세요',
    'form.category.1': '튜브 충진',
    'form.category.2': '스킨케어',
    'form.category.3': '헤어 · 바디케어',
    'form.category.4': '자사 브랜드 · 기타',
    'form.qty': '예상 수량',
    'form.qty.ph': '예: 10,000개',
    'form.qty.hint': '기본 MOQ 10,000개 · 수량 협의 가능',
    'form.message': '문의 내용',
    'form.message.ph': '제품 종류, 용량, 희망 일정, 참고 사항을 적어 주세요.',
    'form.consent': '문의 응대를 위한 개인정보(회사명, 담당자명, 연락처, 이메일) 수집 및 이용에 동의합니다.',
    'form.submit': '문의 보내기',
    'form.notice': '보내기를 누르면 메일 앱이 열리고, 작성한 내용이 eunseong77@naver.com 으로 전달됩니다. 메일 앱이 열리지 않으면 같은 주소로 직접 보내 주세요.',

    'msg.required': '필수 입력 항목입니다.',
    'msg.email': '이메일 형식이 올바르지 않습니다.',
    'msg.phone': '연락처를 다시 확인해 주세요.',
    'msg.consent': '개인정보 수집 · 이용에 동의해 주세요.',
    'msg.resultTitle': '문의 내용이 준비되었습니다.',
    'msg.resultBody': '메일 앱이 열리지 않았다면 아래 주소로 그대로 보내 주세요:',

    'footer.tagline': '화장품 튜브 충진 · 스킨케어 · 헤어 & 바디케어 OEM/ODM',
    'footer.stat': '개 / 일 최대 생산량 · MOQ 10,000개',
    'footer.company': '회사 정보',
    'footer.c1.k': '상호',
    'footer.c1.v': '아리엘 글로벌',
    'footer.c2.k': '대표자',
    'footer.c2.v': '도순희',
    'footer.c3.k': '사업자등록번호',
    'footer.c4.k': '본사 · 사업장 · 생산 공장',
    'footer.c4.v': '충청남도 아산시 음봉면 산동로 80-17, 좌동',
    'footer.contact': '문의',
    'footer.person': '담당 · 배은성 COO',
    'footer.menu': '바로가기',
    'footer.rights': 'All rights reserved.'
  },

  en: {
    'meta.title': 'ARIEL GLOBAL | Cosmetics Tube Filling · Skincare · Hair & Body Care OEM/ODM',
    'skip': 'Skip to content',
    'brand.sub': 'Cosmetics OEM / ODM',

    'nav.about': 'About',
    'nav.process': 'Process',
    'nav.capabilities': 'Capabilities',
    'nav.portfolio': 'Portfolio',
    'nav.brand': 'Our brand',
    'nav.contact': 'Contact',
    'cta.header': 'Get a quote',
    'cta.quote': 'Request an OEM/ODM quote',
    'cta.process': 'See how we work',

    'hero.eyebrow': 'ASAN, KOREA · COSMETICS OEM / ODM',
    'hero.title': 'Cosmetics <em>tube filling</em>,<br />skincare and hair care —<br />one partner, end to end',
    'hero.sub': 'ARIEL GLOBAL is a cosmetics manufacturer based in Eumbong-myeon, Asan, Korea. With our own tube filling and sealing line we produce up to 50,000 pieces a day, and handle skincare, hair and body care OEM/ODM — from product planning and formula development to filling, packing and shipping, all through one point of contact.',
    'hero.fact1.k': 'Max output',
    'hero.fact1.u': 'pcs / day',
    'hero.fact2.k': 'Base MOQ',
    'hero.fact2.u': 'pcs',
    'hero.fact3.k': 'Production base',
    'hero.fact3.n': 'ASAN',
    'hero.fact3.u': 'Korea',
    'hero.badge.kicker': 'TUBE FILLING CAPACITY',
    'hero.badge.title': 'Up to 50,000 pcs / day',
    'hero.badge.moq': 'Base MOQ 10,000 pcs',
    'hero.badge.desc': 'negotiable per product',

    'band.cap.label': 'TUBE FILLING & SEALING CAPACITY',
    'band.cap.unit': 'pcs / day',
    'band.cap.title': 'In-house tube filling & sealing line — up to 50,000 pcs/day',
    'band.cap.desc': 'On our tube filling and sealing line we can produce up to 50,000 pieces a day.',
    'band.moq.label': 'MINIMUM ORDER QUANTITY',
    'band.moq.unit': 'pcs',
    'band.moq.title': 'Base MOQ 10,000 pcs · negotiable per product',
    'band.moq.desc': 'Quantities are negotiable depending on the product, formula and package. First launches and smaller test runs are welcome to discuss.',
    'band.cta': 'Ask about capacity & quantity',

    'about.eyebrow': 'ABOUT US',
    'about.title': 'A manufacturing partner<br />who knows the shop floor',
    'about.lead': 'ARIEL GLOBAL is a cosmetics manufacturer with its own production base in Eumbong-myeon, Asan, Chungcheongnam-do, making tube-filled products, skincare and hair care.',
    'about.lead2': 'We also run our own brand, and bring what we learn from retail and logistics back into manufacturing. Closing the gap between what can be made and what actually sells is how we work.',
    'about.caption': 'Planning, formula, filling, packing and shipping through one contact',
    'about.facility': 'ADDRESS & SITE',
    'about.fac1.k': 'Head office & plant',
    'about.fac1.v': '80-17, Sandong-ro, Eumbong-myeon, Asan-si, Chungcheongnam-do, Republic of Korea (Jwadong)',
    'about.fac1.v2': '',
    'about.fac3.k': 'Core business',
    'about.fac3.v': 'Cosmetics tube filling · skincare · hair & body care OEM/ODM',
    'about.note': 'Product categories and equipment availability are confirmed during consultation. Plant visits are by appointment.',
    'about.map': 'View on map',
    'about.cap.label': 'PRODUCTION CAPACITY',
    'about.cap.unit': 'pcs / day',
    'about.cap.f1.k': 'Capacity',
    'about.cap.f1.v': 'Up to 50,000 pcs/day on our own tube filling & sealing line',
    'about.cap.f2.k': 'Base MOQ',
    'about.cap.f2.v': '10,000 pcs · negotiable by product, formula and package',

    'str.1.t': 'Our own base in Asan',
    'str.1.d': 'Our head office and manufacturing plant are both in Eumbong, Asan, where we run tube filling and cosmetics production ourselves. Because our team is on the floor, schedules and quality are managed up close.',
    'str.2.t': 'Up to 50,000 pcs a day',
    'str.2.d': 'With our own tube filling and sealing line we can produce up to 50,000 pieces a day, and we look at schedules together for large runs and tight deadlines.',
    'str.3.t': 'One-stop, brief to box',
    'str.3.d': 'Planning, formula, components, design, filling, packing and shipping run through one contact — no juggling suppliers, and far less back-and-forth.',
    'str.4.t': 'Flexible MOQ',
    'str.4.d': 'Our base MOQ is 10,000 pcs, negotiable depending on the product, formula and package. First launches and test runs are welcome to discuss.',

    'process.eyebrow': 'PROCESS',
    'process.title': 'Five steps, from first call to delivery',
    'process.sub': 'Because every step runs in one place, you see the whole picture at once and can make decisions quickly.',
    'step.1.t': 'Consultation & planning',
    'step.1.d': 'We review use, target, expected volume and timeline, then set the product concept and direction.',
    'step.2.t': 'Sample & formula',
    'step.2.d': 'We build the formula and produce samples to check feel, texture and stability.',
    'step.3.t': 'Design & components',
    'step.3.d': 'We select the tube, cap and label components and finalise the design.',
    'step.4.t': 'Production & QC',
    'step.4.d': 'Filling and packing are carried out with quality checks during the process.',
    'step.5.t': 'Delivery & export support',
    'step.5.d': 'We handle shipping and delivery, and agree the paperwork and procedures needed for export.',
    'process.note': 'Timelines vary with product, quantity and components; we set the schedule together during consultation.',

    'cap.eyebrow': 'MANUFACTURING CAPABILITIES',
    'cap.title': 'What we manufacture',
    'cap.lead': 'Tube filling and sealing is our core, alongside skincare and hair & body care. We produce up to 50,000 pcs a day on our own line; formula, volume and components are confirmed with you.',
    'cap.1.t': 'Tube filling & sealing',
    'cap.1.d': 'We fill and seal tubes and assemble caps and components, setting the line to match fill weight and viscosity.',
    'cap.1.s1': 'pcs / day max output',
    'cap.1.s2': 'pcs base MOQ · negotiable',
    'cap.1.c1': 'Tube filling',
    'cap.1.c2': 'Tube sealing',
    'cap.1.c3': 'Caps & components',
    'cap.2.t': 'Skincare',
    'cap.2.d': 'Formula planning, filling and packing for toner, essence, cream and gel products.',
    'cap.2.c1': 'Toner & essence',
    'cap.2.c2': 'Cream & gel',
    'cap.2.c3': 'Planning & filling',
    'cap.3.t': 'Hair & body care',
    'cap.3.d': 'Filling and packing for shampoo, conditioner, body wash and lotion.',
    'cap.3.c1': 'Shampoo & conditioner',
    'cap.3.c2': 'Body wash',
    'cap.3.c3': 'Lotion',
    'cap.note': 'These are representative categories; actual production availability and conditions are confirmed during consultation.',

    'pf.eyebrow': 'CLIENT PORTFOLIO & CASES',
    'pf.title': 'Clients we work with,<br />products we made together',
    'pf.lead': 'A selection of tube filling and skincare projects we have delivered, published where the client has agreed to it.',
    'pf.lead2': 'Product format, volume and scope of work give you a sense of what we handle before you get in touch.',
    'pf.note': 'Published cases appear only within what each client has agreed to; some client names are kept confidential.',
    'pf.slot.label': 'COMING SOON',
    'pf.slot.title': 'Client project',
    'pf.slot.desc': 'Product photos and a short project brief go in this slot.',

    'brand.eyebrow': 'IN-HOUSE BRAND',
    'brand.title': 'HealFit <span class="serif-en">heat care</span>',
    'brand.lead': 'Our own warming care brand — planned and manufactured in-house and sold in Korea and abroad.',
    'brand.body': 'A four-zone heat care set for wrist, knee, lower back and foot, sold on Coupang, Shopee and Qoo10. Having built and sold our own brand is what makes our OEM/ODM proposals practical.',
    'brand.z1': 'Wrist',
    'brand.z2': 'Knee',
    'brand.z3': 'Lower back',
    'brand.z4': 'Foot',
    'brand.z1b': 'Wrist',
    'brand.z2b': 'Knee',
    'brand.z3b': 'Lower back',
    'brand.z4b': 'Foot',
    'brand.cta': 'Talk about your brand',
    'brand.g1': '4-ZONE HEAT CARE SET',

    'contact.eyebrow': 'CONTACT',
    'contact.title': 'Request a quote or consultation',
    'contact.lead': 'Leave your details below and we will get back to you. For anything urgent, a call is fastest.',
    'contact.person.label': 'Contact',
    'contact.person.name': 'Eunseong Bae',
    'contact.person.role': 'COO',
    'contact.phone.label': 'Phone',
    'contact.mail.label': 'Email',
    'contact.addr.label': 'Address',
    'contact.addr1.k': 'Head office & plant',
    'contact.addr1.v': '80-17, Sandong-ro, Eumbong-myeon, Asan-si, Chungcheongnam-do, Republic of Korea (Jwadong)',
    'contact.note': 'If you would like to visit, please get in touch in advance so we can arrange a time and let you know what to bring.',

    'form.company': 'Company',
    'form.company.ph': 'e.g. ARIEL GLOBAL',
    'form.name': 'Contact name',
    'form.name.ph': 'e.g. Eunseong Bae',
    'form.phone': 'Phone',
    'form.phone.ph': '+82 10 0000 0000',
    'form.email': 'Email',
    'form.email.ph': 'name@company.com',
    'form.category': 'Product category',
    'form.category.ph': 'Please select',
    'form.category.1': 'Tube filling',
    'form.category.2': 'Skincare',
    'form.category.3': 'Hair & body care',
    'form.category.4': 'Own brand / other',
    'form.qty': 'Expected quantity',
    'form.qty.ph': 'e.g. 10,000 pcs',
    'form.qty.hint': 'Base MOQ 10,000 pcs · flexible',
    'form.message': 'Your inquiry',
    'form.message.ph': 'Product type, volume, preferred timeline and anything else we should know.',
    'form.consent': 'I agree to the collection and use of my details (company, name, phone, email) to respond to this inquiry.',
    'form.submit': 'Send inquiry',
    'form.notice': 'Pressing send opens your mail app with your details addressed to eunseong77@naver.com. If it does not open, please write to the same address directly.',

    'msg.required': 'This field is required.',
    'msg.email': 'Please enter a valid email address.',
    'msg.phone': 'Please check your phone number.',
    'msg.consent': 'Please agree to the collection and use of your details.',
    'msg.resultTitle': 'Your inquiry is ready.',
    'msg.resultBody': 'If your mail app did not open, please send it to:',

    'footer.tagline': 'Cosmetics tube filling · skincare · hair & body care OEM/ODM',
    'footer.stat': 'pcs / day max output · base MOQ 10,000 pcs',
    'footer.company': 'Company',
    'footer.c1.k': 'Company',
    'footer.c1.v': 'ARIEL GLOBAL Co., Ltd.',
    'footer.c2.k': 'CEO',
    'footer.c2.v': 'Sunhee Do',
    'footer.c3.k': 'Business reg. no.',
    'footer.c4.k': 'Head office & plant',
    'footer.c4.v': '80-17, Sandong-ro, Eumbong-myeon, Asan-si, Chungcheongnam-do, Republic of Korea (Jwadong)',
    'footer.contact': 'Contact',
    'footer.person': 'Eunseong Bae, COO',
    'footer.menu': 'Menu',
    'footer.rights': 'All rights reserved.'
  }
};

/* =========================================================
   PORTFOLIO — OEM/ODM 진행 사례
   ---------------------------------------------------------
   여기 배열만 고치면 페이지의 포트폴리오 카드가 바뀝니다.
   1) 사진을 assets/portfolio/ 폴더에 넣습니다. (예: my-case.jpg)
   2) 아래 예시처럼 한 항목을 추가합니다. (쉼표 주의)

      {
        image: 'assets/portfolio/my-case.jpg',
        alt:   { ko: '사진 설명', en: 'Photo description' },
        tag:   { ko: '브랜드 고객사', en: 'Brand client' },
        title: { ko: '제품명', en: 'Product name' },
        desc:  { ko: '진행 내용 한두 줄', en: 'One or two lines about the project' },
        meta:  [ { ko: '튜브 충진', en: 'Tube filling' }, { ko: '50ml', en: '50ml' } ]
      }

   - ko / en 중 하나만 있어도 되고, 문자열 하나만 쓰면 두 언어에 같이 나옵니다.
   - 빈 자리는 { placeholder: true, slot: '03' } 처럼 남겨 두면 '등록 예정' 카드가 됩니다.
   ========================================================= */
const PORTFOLIO_ITEMS = [
  {
    image: 'assets/portfolio/healfit-set.jpg',
    alt: { ko: '힐핏 4종 온열 케어 패치 세트 제품 이미지', en: 'HealFit four-zone heat care patch set' },
    tag: { ko: '자사 브랜드 · 실제 사례', en: 'IN-HOUSE BRAND · LIVE CASE' },
    title: { ko: '힐핏 온열 케어 패치 4종 세트', en: 'HealFit 4-zone heat care patch set' },
    desc: { ko: '손목 · 무릎 · 허리 · 발 네 부위를 위한 온열 패치를 기획부터 제조 · 포장까지 진행해 국내외 채널에서 판매하고 있습니다.', en: 'A warming patch line for wrist, knee, lower back and foot — planned, manufactured and packed in-house, and sold on domestic and overseas channels.' },
    meta: [ { ko: '온열 패치', en: 'Heat patch' }, { ko: '4종 세트', en: '4-zone set' }, { ko: '쿠팡 · 쇼피 · 큐텐', en: 'Coupang · Shopee · Qoo10' } ]
  },
  {
    image: 'assets/portfolio/case-cream-20g.jpg',
    alt: { ko: '20g 스킨케어 크림 튜브 두 개와 튜브 충진 설비', en: 'Two 20g skincare cream tubes in front of tube filling equipment' },
    tag: { ko: '튜브 충진 · 스킨케어', en: 'TUBE FILLING · SKINCARE' },
    title: { ko: '올인원 수분 크림 20g 소용량 튜브 충진·실링', en: 'All-in-One Cream 20g Tube Filling & Sealing' },
    desc: { ko: '20g(0.70 oz) 소용량 화장품 튜브 정밀 충진 및 열실링·로트 각인 양산 진행', en: 'Precision filling, heat sealing, and lot-number embossing for 20g skincare tubes.' },
    meta: [
      { ko: '고객사 · 국내 스킨케어 브랜드 A (비공개)', en: 'Client · Domestic skincare brand A (confidential)' },
      { ko: '20g · 0.70 oz', en: '20 g · 0.70 oz' },
      { ko: '충진 · 열실링 · 로트 각인', en: 'Filling · sealing · lot code' }
    ]
  },
  {
    image: 'assets/portfolio/case-sunlotion-50ml.jpg',
    alt: { ko: '50ml 자외선차단제 튜브 두 개와 생산 설비', en: 'Two 50ml sun lotion tubes on production equipment' },
    tag: { ko: 'OEM/ODM · 자외선차단제', en: 'OEM/ODM · SUN CARE' },
    title: { ko: '자작나무 수액 썬로션 50ml 기능성 튜브 양산', en: 'Birch Juice Sun Lotion 50ml Functional Tube Production' },
    desc: { ko: 'SPF50+ PA++++ 3중 기능성 자외선차단제 50ml 튜브 충진·실링 및 맞춤 패키지 제작', en: '50ml tube filling, sealing, and custom promotional packaging for SPF50+ PA++++ sun lotion.' },
    meta: [
      { ko: '고객사 · 국내 의료기관 B (비공개)', en: 'Client · Domestic medical institution B (confidential)' },
      { ko: '50ml · SPF50+ / PA++++', en: '50 ml · SPF50+ / PA++++' },
      { ko: '충진 · 실링 · 패키지', en: 'Filling · sealing · packaging' }
    ]
  }
];

function pfText(value, lang) {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string') return value;
  return value[lang] || value.ko || value.en || '';
}

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function portfolioCard(item, lang) {
  const d = I18N[lang];
  if (item.placeholder) {
    return ''
      + '<article class="pf-card pf-card--empty">'
      + '  <div class="pf-media pf-media--empty">'
      + '    <span class="pf-slot">SLOT ' + esc(item.slot || '') + '</span>'
      + '    <svg viewBox="0 0 48 48" width="34" height="34" aria-hidden="true"><path d="M8 34V15a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1v19a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="m12 31 8-8 6 6 4-4 6 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="31" cy="20" r="2.4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>'
      + '  </div>'
      + '  <div class="pf-body">'
      + '    <span class="pf-tag pf-tag--empty">' + esc(d['pf.slot.label']) + '</span>'
      + '    <h3>' + esc(d['pf.slot.title']) + '</h3>'
      + '    <p>' + esc(d['pf.slot.desc']) + '</p>'
      + '  </div>'
      + '</article>';
  }

  const meta = (item.meta || []).map(function (m) {
    return '<li>' + esc(pfText(m, lang)) + '</li>';
  }).join('');

  return ''
    + '<article class="pf-card">'
    + '  <div class="pf-media">'
    + (item.image ? '<img src="' + esc(item.image) + '" alt="' + esc(pfText(item.alt || item.title, lang)) + '" loading="lazy" />' : '')
    + '  </div>'
    + '  <div class="pf-body">'
    + (item.tag ? '<span class="pf-tag">' + esc(pfText(item.tag, lang)) + '</span>' : '')
    + '    <h3>' + esc(pfText(item.title, lang)) + '</h3>'
    + (item.desc ? '<p>' + esc(pfText(item.desc, lang)) + '</p>' : '')
    + (meta ? '<ul class="pf-meta">' + meta + '</ul>' : '')
    + '  </div>'
    + '</article>';
}

function renderPortfolio(lang) {
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;
  grid.innerHTML = PORTFOLIO_ITEMS.map(function (item) {
    return portfolioCard(item, lang);
  }).join('');
}

const MAIL_TO = 'eunseong77@naver.com';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------------------------------------------------------
   language
   --------------------------------------------------------- */
let currentLang = 'ko';
let lastInquiry = null;

function dict() { return I18N[currentLang]; }

function applyLang(lang) {
  if (!I18N[lang]) lang = 'ko';
  currentLang = lang;
  const d = I18N[lang];

  document.documentElement.lang = lang === 'ko' ? 'ko' : 'en';
  document.title = d['meta.title'];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const v = d[el.dataset.i18n];
    if (typeof v === 'string') el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const v = d[el.dataset.i18nHtml];
    if (typeof v === 'string') el.innerHTML = v;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
    const v = d[el.dataset.i18nPh];
    if (typeof v === 'string') el.setAttribute('placeholder', v);
  });

  document.querySelectorAll('.lang-toggle').forEach((toggle) => {
    toggle.dataset.active = lang;
    toggle.querySelectorAll('.lang-btn').forEach((btn) => {
      const on = btn.dataset.lang === lang;
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  });

  // re-render a visible result panel in the new language
  if (lastInquiry && !formResult.hidden) renderResult(lastInquiry);

  renderPortfolio(lang);

  try { localStorage.setItem('ariel-lang', lang); } catch (e) {}
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

/* ---------------------------------------------------------
   header state + mobile menu
   --------------------------------------------------------- */
const header = document.getElementById('siteHeader');
const nav = document.getElementById('primaryNav');
const menuToggle = document.getElementById('menuToggle');

let ticking = false;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    header.classList.toggle('is-stuck', window.scrollY > 24);
    ticking = false;
  });
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

function closeMenu() {
  nav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', currentLang === 'ko' ? '메뉴 열기' : 'Open menu');
}
menuToggle.addEventListener('click', () => {
  const open = !nav.classList.contains('is-open');
  nav.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  menuToggle.setAttribute('aria-label', open
    ? (currentLang === 'ko' ? '메뉴 닫기' : 'Close menu')
    : (currentLang === 'ko' ? '메뉴 열기' : 'Open menu'));
});
nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth > 760) closeMenu(); });

/* ---------------------------------------------------------
   scroll reveal
   --------------------------------------------------------- */
const revealEls = Array.from(document.querySelectorAll('.reveal'));

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('is-in'));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const siblings = Array.from(el.parentElement.children).filter((c) => c.classList.contains('reveal'));
      const i = Math.min(siblings.indexOf(el), 4);
      el.style.transitionDelay = (i > 0 ? i * 70 : 0) + 'ms';
      el.classList.add('is-in');
      io.unobserve(el);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  revealEls.forEach((el) => io.observe(el));
}

/* ---------------------------------------------------------
   active nav link
   --------------------------------------------------------- */
const sectionIds = ['about', 'process', 'capabilities', 'portfolio', 'brand', 'contact'];
const navLinks = Array.from(document.querySelectorAll('.nav > a'));

function updateSpy() {
  const mark = window.scrollY + 180;
  let current = null;
  sectionIds.forEach((id) => {
    const s = document.getElementById(id);
    if (!s) return;
    if (s.getBoundingClientRect().top + window.scrollY <= mark) current = id;
  });
  navLinks.forEach((a) => {
    const on = current !== null && a.getAttribute('href') === '#' + current;
    a.classList.toggle('is-current', on);
    if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
  });
}

window.addEventListener('scroll', () => requestAnimationFrame(updateSpy), { passive: true });
window.addEventListener('resize', () => requestAnimationFrame(updateSpy));
updateSpy();

/* ---------------------------------------------------------
   inquiry form
   --------------------------------------------------------- */
const form = document.getElementById('inquiryForm');
const formResult = document.getElementById('formResult');
const fields = {
  company: document.getElementById('company'),
  name: document.getElementById('name'),
  phone: document.getElementById('phone'),
  email: document.getElementById('email'),
  category: document.getElementById('category'),
  qty: document.getElementById('qty'),
  message: document.getElementById('message'),
  consent: document.getElementById('consent')
};

function fieldOf(input) { return input.closest('.field') || input.closest('.consent')?.parentElement; }

function setError(input, msg) {
  const wrap = input.closest('.field');
  const err = wrap ? wrap.querySelector('[data-err]') : document.querySelector('[data-err="consent"]');
  if (wrap) wrap.classList.add('has-error');
  if (err) { err.textContent = msg; err.classList.add('is-visible'); }
}
function clearError(input) {
  const wrap = input.closest('.field');
  const err = wrap ? wrap.querySelector('[data-err]') : document.querySelector('[data-err="consent"]');
  if (wrap) wrap.classList.remove('has-error');
  if (err) { err.textContent = ''; err.classList.remove('is-visible'); }
}

function validate() {
  const d = dict();
  let ok = true;
  [...document.querySelectorAll('.field.has-error')].forEach((f) => f.classList.remove('has-error'));
  document.querySelectorAll('[data-err]').forEach((e) => { e.textContent = ''; e.classList.remove('is-visible'); });

  ['company', 'name', 'phone', 'email', 'category', 'message'].forEach((key) => {
    const input = fields[key];
    if (!input.value.trim()) { setError(input, d['msg.required']); ok = false; }
  });

  if (fields.email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.value.trim())) {
    setError(fields.email, d['msg.email']); ok = false;
  }
  const digits = fields.phone.value.replace(/[^\d]/g, '');
  if (fields.phone.value.trim() && digits.length < 8) {
    setError(fields.phone, d['msg.phone']); ok = false;
  }
  if (!fields.consent.checked) {
    ok = false;
    const err = document.querySelector('[data-err="consent"]');
    err.textContent = d['msg.consent'];
    err.classList.add('is-visible');
  }
  return ok;
}

function buildMailto(data) {
  const d = dict();
  const subject = currentLang === 'ko'
    ? `[OEM/ODM 문의] ${data.company} · ${data.category}`
    : `[OEM/ODM inquiry] ${data.company} · ${data.category}`;
  const rows = [
    currentLang === 'ko' ? '[OEM/ODM 견적 · 상담 문의]' : '[OEM/ODM quote request]',
    '',
    `${d['form.company']}: ${data.company}`,
    `${d['form.name']}: ${data.name}`,
    `${d['form.phone']}: ${data.phone}`,
    `${d['form.email']}: ${data.email}`,
    `${d['form.category']}: ${data.category}`,
    `${d['form.qty']}: ${data.qty || '-'}`,
    '',
    `${d['form.message']}:`,
    data.message,
    '',
    '— sent from the ARIEL GLOBAL website'
  ];
  return 'mailto:' + MAIL_TO
    + '?subject=' + encodeURIComponent(subject)
    + '&body=' + encodeURIComponent(rows.join('\n'));
}

function renderResult(data) {
  const d = dict();
  const href = buildMailto(data);
  formResult.hidden = false;
  formResult.innerHTML =
    '<strong>' + d['msg.resultTitle'] + '</strong>'
    + d['msg.resultBody'] + ' <a href="' + href + '">' + MAIL_TO + '</a>';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validate()) {
    const firstBad = form.querySelector('.has-error input, .has-error select, .has-error textarea');
    if (firstBad) firstBad.focus();
    return;
  }
  const data = {
    company: fields.company.value.trim(),
    name: fields.name.value.trim(),
    phone: fields.phone.value.trim(),
    email: fields.email.value.trim(),
    category: fields.category.value,
    qty: fields.qty.value.trim(),
    message: fields.message.value.trim()
  };
  lastInquiry = data;
  const href = buildMailto(data);
  renderResult(data);
  window.location.href = href;
  formResult.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
});

// clear an error as soon as the field is corrected
Object.values(fields).forEach((input) => {
  if (!input || !input.addEventListener) return;
  input.addEventListener('input', () => clearError(input));
  input.addEventListener('change', () => clearError(input));
});

/* ---------------------------------------------------------
   misc
   --------------------------------------------------------- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

(function initLang() {
  let saved = null;
  try { saved = localStorage.getItem('ariel-lang'); } catch (e) {}
  applyLang(saved === 'en' ? 'en' : 'ko');
})();
