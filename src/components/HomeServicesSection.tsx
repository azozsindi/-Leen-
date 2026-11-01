import React from 'react';
import {
  PhoneCall,
  Camera,
  Building2,
  Lock,
  Palette,
  Wrench,
  Shield,
  Network,
  HardHat,
  Settings,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  ArrowUpRight,
} from 'lucide-react';
import { ServiceItem, Language } from '../types';
import { servicesData } from '../data/servicesData';
import { translations } from '../data/translations';

interface HomeServicesSectionProps {
  currentLang: Language;
  onExploreAllServices: (categoryId?: string) => void;
  onSelectServiceDetail: (serviceId: string) => void;
  onSelectForInquiry: (serviceTitle: string) => void;
}

export const HomeServicesSection: React.FC<HomeServicesSectionProps> = ({
  currentLang,
  onExploreAllServices,
  onSelectServiceDetail,
  onSelectForInquiry,
}) => {
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const Chevron = isRtl ? ChevronLeft : ChevronRight;

  // The 4 Core Business Domains
  const categories = [
    {
      id: 'security',
      titleAr: 'الأنظمة الأمنية والتحكم',
      titleEn: 'Security & Access Control',
      count: 5,
      descAr: 'كاميرات مراقبة، بوابات إلكترونية، بصمة وإنذار حريق',
      descEn: 'CCTV surveillance, electronic gates, biometrics & fire detection',
      icon: Shield,
    },
    {
      id: 'telecom',
      titleAr: 'الاتصالات والشبكات',
      titleEn: 'Telecom & Networking',
      count: 5,
      descAr: 'سنترالات هاتفية، ألياف ضوئية، شبكات واي فاي وإنتركم',
      descEn: 'IP-PBX telephony, fiber optics, enterprise Wi-Fi & intercoms',
      icon: Network,
    },
    {
      id: 'contracting',
      titleAr: 'المقاولات والتشطيبات',
      titleEn: 'Contracting & Fit-Out',
      count: 4,
      descAr: 'بناء متكامل، أعمال كهروميكانيكية، ديكور وترميم طرق',
      descEn: 'Structural building, MEP & HVAC, luxury fit-out & roadworks',
      icon: HardHat,
    },
    {
      id: 'facility',
      titleAr: 'التشغيل والصيانة',
      titleEn: 'Operations & Maintenance',
      count: 1,
      descAr: 'إدارة مرافق شاملة وصيانة وقائية وطارئة للمباني',
      descEn: 'Total facility management, preventive & emergency building upkeep',
      icon: Settings,
    },
  ];

  // The 6 Featured Services requested for the Home Page
  const featuredServiceIds = [
    'pbx-telephony',       // 05
    'cctv-surveillance',   // 03
    'general-contracting', // 08
    'access-control',      // 14
    'decor-fitout',        // 10
    'facility-operations', // 12
  ];

  const featuredServices = featuredServiceIds
    .map((id) => servicesData.find((s) => s.id === id))
    .filter((s): s is ServiceItem => Boolean(s));

  const getServiceIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#009AE0]' };
    switch (iconName) {
      case 'PhoneCall':
        return <PhoneCall {...props} />;
      case 'Camera':
        return <Camera {...props} />;
      case 'Building2':
        return <Building2 {...props} />;
      case 'Lock':
        return <Lock {...props} />;
      case 'Palette':
        return <Palette {...props} />;
      case 'Wrench':
        return <Wrench {...props} />;
      default:
        return <Building2 {...props} />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 md:py-28 bg-white dark:bg-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#009AE0] mb-3">
            <span>{t.services.sectionBadge}</span>
            <span className="text-slate-300 dark:text-slate-700">/</span>
            <span className="text-slate-500 dark:text-slate-400 font-mono">15 {isRtl ? 'خدمة معتمدة' : 'Verified Capabilities'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#073B82] dark:text-white tracking-tight mb-4">
            {t.services.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* 1. The 4 Main Business Domains (Cards Showcase) */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#073B82] dark:text-white">
                {t.services.mainCategoriesTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {t.services.mainCategoriesSubtitle}
              </p>
            </div>
            <button
              onClick={() => onExploreAllServices()}
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-[#009AE0] dark:text-[#38bdf8] hover:text-[#073B82] dark:hover:text-white transition-colors"
            >
              <span>{t.services.exploreAllServices}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  onClick={() => onExploreAllServices(cat.id)}
                  className="group relative rounded-2xl p-5 sm:p-6 bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 hover:border-[#009AE0] dark:hover:border-[#009AE0] hover:bg-white dark:hover:bg-slate-800 transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md flex flex-col justify-between min-h-[170px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center text-[#073B82] dark:text-[#009AE0] group-hover:bg-[#073B82] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5 text-[#009AE0] group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-200/70 dark:bg-slate-700 text-slate-700 dark:text-slate-300 group-hover:bg-[#009AE0] group-hover:text-white transition-colors">
                        {cat.count} {isRtl ? 'خدمات' : 'Services'}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#073B82] dark:group-hover:text-[#38bdf8] transition-colors mb-1.5">
                      {isRtl ? cat.titleAr : cat.titleEn}
                    </h4>

                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {isRtl ? cat.descAr : cat.descEn}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs font-semibold text-[#009AE0] dark:text-[#38bdf8]">
                    <span>{isRtl ? 'تصفح خدمات القطاع' : 'View Sector Services'}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. The 6 Featured Services Cards (Curated & Balanced) */}
        <div>
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#073B82] dark:text-white">
              {t.services.featuredServicesTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {t.services.featuredServicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {featuredServices.map((service) => {
              const title = isRtl ? service.titleAr : service.titleEn;
              const description = isRtl ? service.descriptionAr : service.descriptionEn;

              return (
                <div
                  key={service.id}
                  className="group relative rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/90 dark:border-slate-700/80 hover:border-[#009AE0]/50 dark:hover:border-[#009AE0]/60 hover:bg-white dark:hover:bg-slate-800 transition-all duration-200 p-5 sm:p-6 flex flex-col justify-between hover:shadow-md h-full min-h-[240px]"
                >
                  <div>
                    {/* Top Meta: Number + Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center group-hover:border-[#009AE0]/40 transition-colors shadow-2xs">
                        {getServiceIcon(service.iconName)}
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 group-hover:text-[#009AE0] transition-colors">
                        #{service.number}
                      </span>
                    </div>

                    {/* Service Title */}
                    <h4 className="text-base sm:text-lg font-bold text-[#073B82] dark:text-white mb-2 leading-snug group-hover:text-[#052a5e] dark:group-hover:text-[#38bdf8] transition-colors line-clamp-2">
                      {title}
                    </h4>

                    {/* Short Description (1 or 2 lines) */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-2">
                      {description}
                    </p>
                  </div>

                  {/* Card Action Controls */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onSelectServiceDetail(service.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009AE0] dark:text-[#38bdf8] hover:text-[#073B82] dark:hover:text-white transition-colors cursor-pointer py-1.5 min-h-[40px]"
                    >
                      <span>{t.services.viewDetails}</span>
                      <Chevron className="w-4 h-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        onSelectForInquiry(title);
                        const el = document.querySelector('#contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-[#073B82] dark:hover:text-[#38bdf8] bg-slate-100 dark:bg-slate-700/60 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors min-h-[36px] flex items-center"
                    >
                      {isRtl ? 'طلب تسعير' : 'Inquire'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3. Prominent CTA to Explore All 15 Services */}
          <div className="mt-12 sm:mt-14 text-center">
            <button
              onClick={() => onExploreAllServices()}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#073B82] dark:bg-[#009AE0] hover:bg-[#052a5e] dark:hover:bg-[#0087c5] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer min-h-[48px]"
            >
              <span>{t.services.exploreAllServices}</span>
              <span className="font-mono text-xs bg-white/20 px-2 py-0.5 rounded-full">
                15 {isRtl ? 'خدمة كاملة' : 'Full Services'}
              </span>
              <ArrowIcon className="w-4 h-4" />
            </button>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-2.5">
              {isRtl
                ? 'استعرض تفاصيل ومواصفات جميع الخدمات الـ 15 المتخصصة في صفحة مستقلة'
                : 'Browse complete specifications of all 15 specialized services on a dedicated page'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
