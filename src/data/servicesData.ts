import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'biometric-attendance',
    number: '01',
    category: 'security',
    titleAr: 'أنظمة الحضور والانصراف بالبصمة',
    titleEn: 'Biometric Time & Attendance Systems',
    descriptionAr:
      'توريد وتركيب وبرمجة أجهزة الحضور والانصراف المعتمدة على بصمة اليد وبصمة الوجه والبطاقات الذكية، مع ربطها بأنظمة إدارة الموارد البشرية.',
    descriptionEn:
      'Supply, installation, and integration of biometric attendance systems utilizing fingerprint, facial recognition, and smart cards with HR management software.',
    scopeAr: [
      'أجهزة قارئات بصمة الإصبع وبصمة الوجه المتقدمة',
      'ربط الأنظمة مع قواعد بيانات الرواتب وشؤون الموظفين',
      'إصدار تقارير الحضور والانصراف الدورية بدقة عالية',
      'تدريب الكوادر الإدارية على إدارة النظام'
    ],
    scopeEn: [
      'Advanced biometric fingerprint and 3D facial recognition terminals',
      'Seamless integration with payroll and HR database platforms',
      'Automated shift reporting, absence tracking, and audits',
      'Administrative training and ongoing support'
    ],
    iconName: 'Fingerprint'
  },
  {
    id: 'central-audio',
    number: '02',
    category: 'telecom',
    titleAr: 'أنظمة الصوتيات المركزية',
    titleEn: 'Central Audio & Public Address Systems',
    descriptionAr:
      'تصميم وتركيب أنظمة النداء الصوتي والصوتيات المركزية (PA/BGM) للمجمعات التجارية والشركات والمستشفيات والمدارس بدقة صوت متناهية.',
    descriptionEn:
      'Engineering and implementation of Public Address & Background Music (PA/BGM) systems for commercial centers, corporate offices, hospitals, and educational facilities.',
    scopeAr: [
      'مكبرات صوت سقفية وجدارية عالية النقاء وتوزيع مدروس',
      'مضخمات صوت مركزية (Amplifiers) ومصفوفات مدمجة',
      'أنظمة النداء الآلي وتقسيم المناطق الصوتية المستقلة (Zoning)',
      'الربط مع أنظمة الطوارئ والإخلاء'
    ],
    scopeEn: [
      'Ceiling, pendant, and horn architectural speakers with acoustic balancing',
      'Enterprise multi-channel amplifiers and zone matrix controllers',
      'Multi-zone paging consoles and scheduled chime automation',
      'Emergency broadcast and evacuation integration'
    ],
    iconName: 'Volume2'
  },
  {
    id: 'cctv-surveillance',
    number: '03',
    category: 'security',
    titleAr: 'كاميرات المراقبة عن بعد',
    titleEn: 'Remote CCTV & Surveillance Systems',
    descriptionAr:
      'تركيب منظومات المراقبة التلفزيونية الدائرية عالية الدقة (IP CCTV) الداخلية والخارجية والمتحركة، مع خاصية المتابعة المباشرة والتسجيل السحابي عن بُعد.',
    descriptionEn:
      'Turnkey high-resolution IP surveillance cameras (dome, bullet, PTZ) with live remote monitoring, centralized NVR storage, and mobile viewing capabilities.',
    scopeAr: [
      'كاميرات تصوير ليلي بدقة فائقة 4K ومقاومة للعوامل الجوية',
      'أجهزة التسجيل الشبكي (NVR) وسيرفرات حفظ التسجيلات',
      'إمكانية المراقبة المباشرة عبر الهواتف الذكية وأجهزة التحكم',
      'صيانة دورية للعدسات وتمديدات الكابلات الشبكية'
    ],
    scopeEn: [
      'Ultra HD 4K night-vision and weather-resistant IP cameras',
      'Centralized Network Video Recorders (NVR) and enterprise SAN storage',
      'Secure remote streaming via dedicated mobile apps and CMS stations',
      'Preventive lens maintenance and structural cable integrity'
    ],
    iconName: 'Camera'
  },
  {
    id: 'electronic-gates',
    number: '04',
    category: 'security',
    titleAr: 'البوابات الإلكترونية الداخلية والخارجية',
    titleEn: 'Internal & External Electronic Gates',
    descriptionAr:
      'توريد وتركيب بوابات الدخول الأمنية الذكية، الحواجز الشوكية والهيدروليكية، وبوابات مرور المشاه الدوارة والمركبات للمنشآت والمجمعات.',
    descriptionEn:
      'Supply and installation of automated vehicular barrier gates, turnstiles, bollards, and perimeter entry control solutions for residential and commercial complexes.',
    scopeAr: [
      'حواجز الذراع الإلكترونية السريعة ومصدات الطرق الهيدروليكية',
      'بوابات المشاة الزجاجية السريعة (Speed Gates) والدوارة (Turnstiles)',
      'التكامل مع أنظمة التعرف على لوحات السيارات (LPR) والملصقات الذكية',
      'أنظمة الأمان ضد الاصطدام والاستشعار الضوئي'
    ],
    scopeEn: [
      'Rapid automated boom barriers and heavy-duty hydraulic bollards',
      'Optical glass speed gates and waist/full-height turnstiles',
      'License Plate Recognition (LPR) and UHF long-range RFID readers',
      'Anti-tailgating photocells and vehicle loop detection'
    ],
    iconName: 'ShieldAlert'
  },
  {
    id: 'pbx-telephony',
    number: '05',
    category: 'telecom',
    titleAr: 'أنظمة السنترالات الهاتفية والتلفونات',
    titleEn: 'Telephone PBX & Intercom Systems',
    descriptionAr:
      'حلول رائدة وتخصصية في توريد وتركيب وصيانة أجهزة السنترالات الشبكية (IP PBX) والهواتف الرقمية والتناظرية وربط الفروع المتعددة.',
    descriptionEn:
      'Comprehensive solutions in the supply, deployment, and servicing of IP PBX communications servers, digital/analog desk phones, and multi-branch unified connectivity.',
    scopeAr: [
      'سنترالات متطورة تدعم خطوط SIP والخطوط الأرضية',
      'هواتف مكتبية ذكية وهواتف للمدراء وقاعات الاجتماعات',
      'برمجة الرد الآلي (IVR) والبريد الصوتي وتحويل المكالمات',
      'ربط فروع الشركات عبر الشبكات الخاصة VPN'
    ],
    scopeEn: [
      'Enterprise IP-PBX appliances with SIP trunking and PSTN failover',
      'Executive IP phones, video conference stations, and operator consoles',
      'Custom IVR auto-attendants, call recording, and voice queues',
      'Inter-branch unified extension dialing and VPN linkage'
    ],
    iconName: 'PhoneCall'
  },
  {
    id: 'wifi-networking',
    number: '06',
    category: 'telecom',
    titleAr: 'شبكات الإنترنت والواي فاي الداخلية والخارجية',
    titleEn: 'Enterprise Networking & Wi-Fi Solutions',
    descriptionAr:
      'تأسيس البنية التحتية لشبكات نقل البيانات وتمديد الألياف الضوئية وكابلات الشبكات وتركيب نقاط الوصول اللاسلكية الذكية للمنشآت.',
    descriptionEn:
      'Structured cabling, optical fiber infrastructure, managed switches, routers, and high-density indoor/outdoor Wi-Fi access points for seamless enterprise coverage.',
    scopeAr: [
      'نقاط وصول لاسلكية (Access Points) لتغطية واسعة دون انقطاع',
      'سويتشات شبكية مدارة وسيرفرات التوجيه (Routers & Switches)',
      'كابلات شبكة معتمدة Cat6/Cat6A وألياف بصرية (Fiber Optics)',
      'اختبارات كفاءة وسرعة نقل البيانات وتنظيم كبائن الشبكة (Racks)'
    ],
    scopeEn: [
      'Indoor and weatherproof outdoor Wi-Fi 6/7 access points',
      'Layer 2/Layer 3 PoE managed enterprise switches and firewall gateways',
      'Certified copper Cat6/Cat6A structured cabling and fiber backbones',
      'Server rack grooming, cable certification testing, and patch management'
    ],
    iconName: 'Wifi'
  },
  {
    id: 'digital-screens',
    number: '07',
    category: 'telecom',
    titleAr: 'الشاشات الرقمية والإعلانية الذكية',
    titleEn: 'Smart Digital & Commercial Displays',
    descriptionAr:
      'تركيب شاشات العرض التفاعلية وجدران الفيديو (Video Walls) والشاشات الإعلانية الداخلية والخارجية الموجهة للمجمعات والشركات.',
    descriptionEn:
      'Turnkey installation of commercial digital signage, interactive touchscreens, and ultra-narrow bezel LED/LCD video walls with centralized content distribution.',
    scopeAr: [
      'شاشات إعلانية عالية السطوع للمعارض والمراكز التجارية',
      'جدران عرض متعددة الشاشات (Video Wall) لغرف العمليات والاستقبال',
      'أنظمة إدارة المحتوى السحابية وتحديث الإعلانات عن بُعد',
      'هياكل تثبيت معدنية آمنة وتوصيلات احترافية'
    ],
    scopeEn: [
      'High-brightness commercial indoor and semi-outdoor display panels',
      'Multi-panel video walls for control centers and corporate lobbies',
      'Centralized Digital Signage CMS platforms for scheduled playback',
      'Engineered architectural mounting brackets and concealed cabling'
    ],
    iconName: 'Monitor'
  },
  {
    id: 'general-contracting',
    number: '08',
    category: 'contracting',
    titleAr: 'المقاولات وبناء الوحدات السكنية والتجارية والصناعية',
    titleEn: 'General Contracting: Residential, Commercial & Industrial',
    descriptionAr:
      'تنفيذ أعمال البناء والإنشاء المتكاملة للمباني السكنية والمقرات التجارية والمنشآت الصناعية وفق أفضل المعايير والمخططات الهندسية المعتمدة.',
    descriptionEn:
      'Comprehensive construction and structural execution for residential complexes, commercial developments, and industrial facilities in accordance with approved engineering codes.',
    scopeAr: [
      'تنفيذ الأعمال الإنشائية العظم والهياكل الخرسانية والمعدنية',
      'إدارة المشاريع والإشراف الهندسي الميداني الدقيق',
      'تطبيق اشتراطات كود البناء السعودي ومعايير السلامة المهنية',
      'تنسيق اللوجستيات وتوريد المواد الإنشائية المعتمدة'
    ],
    scopeEn: [
      'Structural shell construction, reinforced concrete, and steel framing',
      'On-site engineering supervision and rigorous project management',
      'Strict adherence to Saudi Building Code (SBC) and safety standards',
      'Site logistics coordination and verified raw material sourcing'
    ],
    iconName: 'Building2'
  },
  {
    id: 'mep-elv-systems',
    number: '09',
    category: 'contracting',
    titleAr: 'الأعمال الكهربائية والميكانيكية وأنظمة الجهد المنخفض والتكييف والمصاعد',
    titleEn: 'MEP, Low Voltage (ELV), HVAC & Elevator Systems',
    descriptionAr:
      'تنفيذ الأعمال الكهروميكانيكية المتكاملة، تمديدات الجهد المنخفض، تركيب منظومات التكييف المركزي والمخفي، وتركيب المصاعد وصيانتها.',
    descriptionEn:
      'Integrated MEP engineering services, Extra Low Voltage (ELV) networks, central/VRF HVAC installations, and elevator mechanical erection and maintenance.',
    scopeAr: [
      'لوحات التوزيع الكهربائية وتمديدات الكابلات وتأريض المنشآت',
      'أنظمة التيار الخفيف والجهد المنخفض (ELV Systems)',
      'تركيب أنظمة التكييف المركزي والمجاري الهوائية (Ducting)',
      'توريد وتركيب وصيانة المصاعد الهيدروليكية ومصاعد الجر'
    ],
    scopeEn: [
      'Main distribution boards, conduit routing, and grounding installations',
      'Comprehensive Extra Low Voltage (ELV) raceways and infrastructure',
      'Central chiller/VRF HVAC ducting, air handling, and commissioning',
      'Passenger, cargo, and panoramic elevator supply and installation'
    ],
    iconName: 'Cpu'
  },
  {
    id: 'decor-fitout',
    number: '10',
    category: 'contracting',
    titleAr: 'الديكور والتشطيبات والترميم الداخلي والخارجي',
    titleEn: 'Interior & Exterior Fit-Out, Decor & Restoration',
    descriptionAr:
      'أعمال التشطيبات الفاخرة، الديكورات المعمارية الحديثة، أعمال الأسقف والأرضيات والدهانات، وترميم وتجديد المباني القائمة بأعلى درجات الإتقان.',
    descriptionEn:
      'Turnkey luxury interior fit-outs, exterior architectural facades, acoustic ceilings, flooring solutions, modern finishes, and building restoration works.',
    scopeAr: [
      'أعمال الجبس بورد والأسقف المعلقة والعوازل الصوتية والحرارية',
      'تركيب الأرضيات الرخامية والبورسلان والباركيه عالي الجودة',
      'أعمال الدهانات الداخلية والخارجية والكسوات المعمارية الحديثة',
      'ترميم شامل للواجهات والمساحات وتجديد المرافق القائمة'
    ],
    scopeEn: [
      'Gypsum board partitions, acoustic baffle ceilings, and thermal insulation',
      'Premium marble, porcelain tile, and heavy-duty architectural flooring',
      'Interior designer paints, wall paneling, and exterior facade claddings',
      'Complete structural and cosmetic refurbishment of existing spaces'
    ],
    iconName: 'Palette'
  },
  {
    id: 'roads-bridges',
    number: '11',
    category: 'contracting',
    titleAr: 'أعمال الطرق والجسور وترميم الأرصفة وصيانتها',
    titleEn: 'Roads, Bridges, Pavement Restoration & Maintenance',
    descriptionAr:
      'تنفيذ مشاريع تمهيد ورصف الطرق وأعمال الصيانة الإنشائية للجسور، وترميم الأرصفة وتأهيل الممرات وتخطيط الطرق ومواقف السيارات.',
    descriptionEn:
      'Pavement engineering, asphalt laying, bridge structural maintenance, sidewalk paving, kerbstone restoration, and road safety marking solutions.',
    scopeAr: [
      'أعمال الحفر والردم والدمك وفرش طبقات الإسفلت المعتمدة',
      'تركيب وصيانة بردورة الأرصفة والإنترلوك والممرات المخصصة',
      'تخطيط الطرق وتثبيت اللوحات الإرشادية ومطبات التهدئة',
      'معالجة التصدعات وصيانة الفواصل الإنشائية للجسور'
    ],
    scopeEn: [
      'Excavation, grading, sub-base compaction, and asphalt paving',
      'Curbstone replacement, interlocking pavers, and pedestrian walkways',
      'Thermoplastic road striping, reflective studs, and directional signs',
      'Bridge joint rehabilitation, crack sealing, and surface restoration'
    ],
    iconName: 'Navigation'
  },
  {
    id: 'facility-operations',
    number: '12',
    category: 'facility',
    titleAr: 'التشغيل والصيانة للمباني والمجمعات',
    titleEn: 'Facility Operations & Maintenance for Buildings & Complexes',
    descriptionAr:
      'تقديم خدمات إدارة المرافق الشاملة والتشغيل والصيانة الوقائية والطارئة للمباني الإدارية، المجمعات السكنية، والمرافق الحيوية.',
    descriptionEn:
      'Comprehensive Total Facility Management (TFM), preventive maintenance regimes, corrective repairs, and asset reliability programs for commercial and residential complexes.',
    scopeAr: [
      'صيانة دورية مجدولة للأنظمة الكهربائية والميكانيكية والتكييف',
      'فرق فنية متأهبة للتدخل السريع وإصلاح الأعطال الطارئة',
      'إدارة أصول المبنى ورفع الكفاءة التشغيلية وترشيد الطاقة',
      'تقارير فنية دورية عن الحالة الإنشائية والتشغيلية للمرافق'
    ],
    scopeEn: [
      'Scheduled preventive maintenance for MEP, HVAC, and power equipment',
      'Rapid-response emergency maintenance teams available round-the-clock',
      'Building asset registry management and energy efficiency audits',
      'Detailed condition reports, SLA tracking, and audit-ready logs'
    ],
    iconName: 'Wrench'
  },
  {
    id: 'intercom-systems',
    number: '13',
    category: 'telecom',
    titleAr: 'أنظمة الإنتركم',
    titleEn: 'Audio & Video Intercom Systems',
    descriptionAr:
      'توريد وتركيب أنظمة الإنتركم الصوتي والمرئي التناظري والشبكي (IP Intercom) للفلل والمباني السكنية والأبراج التجارية، مع إمكانية الربط بالهواتف الذكية.',
    descriptionEn:
      'Design and deployment of standalone and multi-tenant IP video intercom systems, outdoor door stations, and mobile phone call diversion features.',
    scopeAr: [
      'محطات دخول خارجية مقاومة للماء والكسر ومزودة بكاميرات HD',
      'شاشات داخلية أنيقة تعمل باللمس وتدعم المحادثة وفتح الأبواب',
      'إمكانية الرد على الزوار وفتح الأبواب عن بُعد عبر الجوال',
      'أنظمة إنتركم مركزية للأبراج والمجمعات السكنية الكبيرة'
    ],
    scopeEn: [
      'Vandal-resistant outdoor door entry stations with HD night vision',
      'Interior touch monitors with hands-free intercom and door release',
      'Mobile app call forwarding and remote door unlock integration',
      'Centralized multi-tenant SIP intercom infrastructure for high-rises'
    ],
    iconName: 'Radio'
  },
  {
    id: 'access-control',
    number: '14',
    category: 'security',
    titleAr: 'أنظمة التحكم بالدخول والبصمة',
    titleEn: 'Access Control & Biometric Security Systems',
    descriptionAr:
      'منظومات ضبط وصلاحيات الدخول للمكاتب، الغرف الحساسة، وغرف السيرفرات باستخدام البصمة، البطاقات الذكية، الكود السري، والأقفال المغناطيسية.',
    descriptionEn:
      'Comprehensive physical access control solutions featuring biometric scanners, RFID cards, electromagnetic locks, and centralized credential permissions management.',
    scopeAr: [
      'أقفال مغناطيسية (Magnetic Locks) وكهروميكانيكية عالية الأمان',
      'وحدات تحكم مركزية (Access Controllers) لإدارة الصلاحيات',
      'أزرار الخروج الطارئ ومستشعرات كسر الزجاج للسلامة',
      'سجل زمني دقيق لكافة حركات الدخول والخروج والتنبيه عند الاختراق'
    ],
    scopeEn: [
      'Heavy-duty electromagnetic locks and fail-secure strike plates',
      'Multi-door network access controllers and centralized credential software',
      'Emergency egress push-to-exit buttons and break-glass sensors',
      'Audit trail logging, real-time intrusion alarms, and door-ajar alerts'
    ],
    iconName: 'Lock'
  },
  {
    id: 'fire-alarm',
    number: '15',
    category: 'security',
    titleAr: 'أنظمة إنذار الحريق',
    titleEn: 'Fire Alarm & Early Detection Systems',
    descriptionAr:
      'توريد وتركيب وصيانة أنظمة الكشف المبكر عن الحرائق المعنونة والتقليدية، وأجهزة استشعار الدخان والحرارة وكواسر الإنذار المعتمدة.',
    descriptionEn:
      'Supply, installation, and certification of addressable and conventional early warning fire detection systems, smoke/heat sensors, and manual call points.',
    scopeAr: [
      'لوحات تحكم إنذار الحريق المعنونة (Addressable Panels)',
      'كواشف دخان وحرارة بصرية عالية الحساسية',
      'أجراس وكواسر زجاجية وأبواق صوتية مع فلاشات إرشادية',
      'الربط الآلي مع بوابات الطوارئ والمصاعد ومضخات الإطفاء'
    ],
    scopeEn: [
      'Intelligent addressable fire alarm control panels and annunciators',
      'High-sensitivity optical smoke, rate-of-rise heat, and flame detectors',
      'Manual call points, strobes, and synchronized alarm sounders',
      'Automated integration with emergency egress doors, HVAC, and elevators'
    ],
    iconName: 'Flame'
  }
];
