import { SupplierItem, ClientItem, HowWeWorkPhase } from '../types';

export const suppliersData: SupplierItem[] = [
  { id: 'avaya', name: 'AVAYA', categoryAr: 'أنظمة اتصالات وسنترالات', categoryEn: 'Enterprise Telephony & Unified Comm' },
  { id: 'yeastar', name: 'Yeastar', categoryAr: 'سنترالات IP وشبكات صوتية', categoryEn: 'VoIP PBX & Unified Communications' },
  { id: 'nerai', name: 'NERAI / EBTINA', categoryAr: 'حلول تقنية متقدمة', categoryEn: 'Advanced Tech & Systems' },
  { id: 'dahua', name: 'Dahua Technology', categoryAr: 'كاميرات مراقبة وأنظمة أمنية', categoryEn: 'Video Surveillance & AI Security' },
  { id: 'hikvision', name: 'HIKVISION', categoryAr: 'أنظمة مراقبة وتحكم بالدخول', categoryEn: 'Security & Access Control' },
  { id: 'samsung', name: 'SAMSUNG', categoryAr: 'شاشات عرض وأنظمة ذكية', categoryEn: 'Displays & Smart Systems' },
  { id: 'icon', name: 'icon', categoryAr: 'أنظمة تقنية واتصالات', categoryEn: 'Tech & Connectivity' },
  { id: 'grandstream', name: 'GRANDSTREAM', categoryAr: 'هواتف شبكية وشبكات واي فاي', categoryEn: 'IP Voice, Video & Wi-Fi' },
  { id: 'cisco', name: 'CISCO', categoryAr: 'بنية تحتية وشبكات مؤسسية', categoryEn: 'Enterprise Networking & Routing' },
  { id: 'linksys', name: 'Linksys', categoryAr: 'حلول شبكات وموزعات', categoryEn: 'Networking & Connectivity' },
  { id: 'ruijie', name: 'Ruijie', categoryAr: 'سويتشات وشبكات سحابية', categoryEn: 'Enterprise Cloud Networking' },
  { id: 'commax', name: 'COMMAX', categoryAr: 'أنظمة إنتركم وأمن منزلي', categoryEn: 'Smart Video Intercom Systems' },
  { id: 'suprema', name: 'suprema', categoryAr: 'أنظمة تحكم بالدخول وبصمة', categoryEn: 'Biometrics & Access Control' },
  { id: 'ubiquiti', name: 'UBIQUITI NETWORKS', categoryAr: 'شبكات لاسلكية متطورة', categoryEn: 'High-Density Wireless Networks' },
  { id: 'zkteco', name: 'ZKTECO', categoryAr: 'أجهزة حضور وبوابات أمنية', categoryEn: 'Biometrics, Time Attendance & Gates' },
  { id: 'virdi', name: 'VIRDI', categoryAr: 'أجهزة بصمة وتحكم أمني', categoryEn: 'Biometric Access Systems' },
  { id: 'leentech', name: 'شركة لين التقنية (ثباتكو)', categoryAr: 'شريك تقني وتنفيذي', categoryEn: 'Leen Tech (THABATCO)' },
  { id: 'huawei', name: 'HUAWEI', categoryAr: 'حلول شبكات واتصالات سريعة', categoryEn: 'ICT Infrastructure & Networks' },
  { id: 'toa', name: 'TOA', categoryAr: 'أنظمة صوتيات ونداء مركزي', categoryEn: 'Commercial Audio & Voice Evacuation' },
  { id: 'bose', name: 'BOSE', categoryAr: 'أنظمة صوتيات احترافية', categoryEn: 'Professional Architectural Audio' },
  { id: 'cmc', name: 'CMC', categoryAr: 'حلول صناعية وكهروميكانيكية', categoryEn: 'Industrial & MEP Solutions' },
  { id: 'watania', name: 'AL WATANIA FOR INDUSTRIES', categoryAr: 'حلول صناعية وتوريد', categoryEn: 'Industrial & Manufacturing' },
  { id: 'honeywell', name: 'Honeywell', categoryAr: 'أنظمة إنذار وأمن وحماية', categoryEn: 'Fire Detection & Building Control' },
  { id: 'gent', name: 'GENT', categoryAr: 'أنظمة إنذار حريق ذكية', categoryEn: 'Addressable Fire Detection' },
  { id: 'simplex', name: 'Simplex', categoryAr: 'حلول كشف الحرائق والسلامة', categoryEn: 'Life Safety & Fire Alarm Systems' },
  { id: 'yamaha', name: 'YAMAHA', categoryAr: 'أنظمة صوت ومعالجة صوتية', categoryEn: 'Commercial Sound & Digital Audio' },
  { id: 'daosafe', name: 'DaoSafe', categoryAr: 'بوابات أمنية وحواجز مشاة', categoryEn: 'Turnstiles & Speed Gates' },
  { id: 'tiso', name: 'TISO', categoryAr: 'بوابات مرورية وأمنية', categoryEn: 'Physical Access Barriers & Turnstiles' },
  { id: 'apac', name: 'APAC', categoryAr: 'حلول تقنية ومكونات أنظمة', categoryEn: 'Systems & Technology Components' },
  { id: 'aims-supplier', name: 'AIMS', categoryAr: 'أنظمة متكاملة وإدارية', categoryEn: 'Enterprise Integrated Solutions' },
];

export const clientsData: ClientItem[] = [
  {
    id: 'king-fahd-medical',
    nameAr: 'مجمع الملك فهد الطبي',
    nameEn: 'King Fahd Medical Complex',
    sectorAr: 'القطاع الطبي والرعاية الصحية',
    sectorEn: 'Medical & Healthcare Complex'
  },
  {
    id: 'kwalitey',
    nameAr: 'Kwalitey',
    nameEn: 'Kwalitey',
    sectorAr: 'الخدمات المؤسسية والنوعية',
    sectorEn: 'Corporate Quality Services'
  },
  {
    id: 'thabatco',
    nameAr: 'THABATCO',
    nameEn: 'THABATCO',
    sectorAr: 'المقاولات والحلول التقنية',
    sectorEn: 'Contracting & Technology Solutions'
  },
  {
    id: 'al-watania',
    nameAr: 'الوطنية للصناعة (AL WATANIA FOR INDUSTRIES)',
    nameEn: 'AL WATANIA FOR INDUSTRIES',
    sectorAr: 'القطاع الصناعي والتصنيع الوطني',
    sectorEn: 'National Industrial Manufacturing'
  },
  {
    id: 'aims-holding',
    nameAr: 'AIMS / AIMS HOLDING',
    nameEn: 'AIMS / AIMS HOLDING',
    sectorAr: 'المجموعات القابضة والاستثمارية',
    sectorEn: 'Holding & Investment Conglomerate'
  },
  {
    id: 'cmc-client',
    nameAr: 'CMC',
    nameEn: 'CMC',
    sectorAr: 'المشاريع الهندسية والصناعية',
    sectorEn: 'Engineering & Industrial Projects'
  },
  {
    id: 'national-industry',
    nameAr: 'الوطنية للصناعة القومية',
    nameEn: 'National Industry Corporation',
    sectorAr: 'المصانع والمرافق الإنتاجية الكبرى',
    sectorEn: 'Major Industrial Manufacturing Facilities'
  }
];

export const howWeWorkPhases: HowWeWorkPhase[] = [
  {
    id: 'medical-devices',
    number: '01',
    titleEn: 'Medical Device Manufacturing',
    titleAr: 'التصنيع الطبي',
    scopeItemsEn: [
      'Device Design',
      'Research & Development (R&D)',
      'Pharmaceutical Production',
      'Quality Assurance',
      'Compliance'
    ],
    scopeItemsAr: [
      'تصميم الأجهزة',
      'البحث والتطوير',
      'الإنتاج الدوائي',
      'ضمان الجودة',
      'الامتثال والاشتراطات'
    ]
  },
  {
    id: 'operations-maintenance',
    number: '02',
    titleEn: 'Operations & Maintenance',
    titleAr: 'التشغيل والصيانة',
    scopeItemsEn: [
      'Facility Management',
      'Project Management',
      'Distribution & Logistics',
      'Biomedical Equipment',
      'Inventory Management',
      'Sales & Supply',
      'Equipment Maintenance',
      'Precision Calibration',
      'Regulatory Compliance',
      'Preventive Maintenance',
      'Emergency Repairs',
      'Retrofitting'
    ],
    scopeItemsAr: [
      'إدارة المرافق',
      'إدارة المشاريع',
      'التوزيع والخدمات اللوجستية',
      'الأجهزة الطبية الحيوية',
      'إدارة المخزون',
      'المبيعات والتوريد',
      'صيانة المعدات',
      'المعايرة الدقيقة',
      'الامتثال التنظيمي',
      'الصيانة الوقائية',
      'الإصلاحات الطارئة',
      'التحديث وإعادة التأهيل'
    ]
  },
  {
    id: 'general-contracting-phase',
    number: '03',
    titleEn: 'General Contracting',
    titleAr: 'المقاولات العامة',
    scopeItemsEn: [
      'Construction',
      'Engineering',
      'Renovation',
      'Logistics',
      'IFC'
    ],
    scopeItemsAr: [
      'الإنشاء والبناء',
      'الأعمال الهندسية',
      'الترميم والتجديد',
      'اللوجستيات وسلاسل الإمداد',
      'المخططات التنفيذية المعتمدة'
    ]
  },
  {
    id: 'operations-phase',
    number: '04',
    titleEn: 'Operations',
    titleAr: 'العمليات والتشغيل',
    scopeItemsEn: [],
    scopeItemsAr: []
  }
];
