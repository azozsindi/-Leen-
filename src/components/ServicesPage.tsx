import React, { useState } from 'react';
import {
  Fingerprint,
  Volume2,
  Camera,
  ShieldAlert,
  PhoneCall,
  Wifi,
  Monitor,
  Building2,
  Cpu,
  Palette,
  Navigation,
  Wrench,
  Radio,
  Lock,
  Flame,
  ChevronRight,
  ChevronLeft,
  Check,
  Search,
  Home,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { ServiceItem, Language } from '../types';
import { servicesData } from '../data/servicesData';
import { translations } from '../data/translations';

interface ServicesPageProps {
  currentLang: Language;
  initialCategory?: string;
  onNavigateHome: () => void;
  onSelectServiceDetail: (serviceId: string) => void;
  onSelectForInquiry: (serviceTitle: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  currentLang,
  initialCategory = 'all',
  onNavigateHome,
  onSelectServiceDetail,
  onSelectForInquiry,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';
  const Chevron = isRtl ? ChevronLeft : ChevronRight;
  const ArrowBack = isRtl ? ArrowRight : ArrowLeft;

  const categories = [
    { id: 'all', label: t.services.allTab, count: 15 },
    { id: 'security', label: t.services.securityTab, count: 5 },
    { id: 'telecom', label: t.services.telecomTab, count: 5 },
    { id: 'contracting', label: t.services.contractingTab, count: 4 },
    { id: 'facility', label: t.services.facilityTab, count: 1 },
  ];

  const getIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#009AE0]' };
    switch (iconName) {
      case 'Fingerprint':
        return <Fingerprint {...props} />;
      case 'Volume2':
        return <Volume2 {...props} />;
      case 'Camera':
        return <Camera {...props} />;
      case 'ShieldAlert':
        return <ShieldAlert {...props} />;
      case 'PhoneCall':
        return <PhoneCall {...props} />;
      case 'Wifi':
        return <Wifi {...props} />;
      case 'Monitor':
        return <Monitor {...props} />;
      case 'Building2':
        return <Building2 {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      case 'Palette':
        return <Palette {...props} />;
      case 'Navigation':
        return <Navigation {...props} />;
      case 'Wrench':
        return <Wrench {...props} />;
      case 'Radio':
        return <Radio {...props} />;
      case 'Lock':
        return <Lock {...props} />;
      case 'Flame':
        return <Flame {...props} />;
      default:
        return <Building2 {...props} />;
    }
  };

  const filteredServices = servicesData.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const title = isRtl ? item.titleAr : item.titleEn;
    const desc = isRtl ? item.descriptionAr : item.descriptionEn;
    const matchesSearch =
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 sm:pt-32 pb-20 md:pb-28 bg-[#F8FAFC] dark:bg-slate-950 min-h-screen transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6" aria-label="Breadcrumb">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1.5 hover:text-[#009AE0] transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{t.services.breadcrumbHome}</span>
          </button>
          <span className="text-slate-300 dark:text-slate-700">/</span>
          <span className="font-semibold text-[#073B82] dark:text-[#38bdf8]">{t.services.breadcrumbServices}</span>
        </nav>

        {/* Header Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200/80 dark:border-slate-800 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#009AE0] mb-2">
              <span>{t.services.exploreAllBadge}</span>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <span className="font-mono text-slate-500 dark:text-slate-400">15 / 15</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#073B82] dark:text-white tracking-tight">
              {t.services.allServicesPageTitle}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 max-w-2xl">
              {t.services.allServicesPageSubtitle}
            </p>
          </div>

          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-[#009AE0] transition-colors self-start md:self-auto shadow-2xs min-h-[44px]"
          >
            <ArrowBack className="w-4 h-4" />
            <span>{t.services.backToHome}</span>
          </button>
        </div>

        {/* Filter Tabs and Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10">
          {/* Categories Segmented Control */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center gap-2 cursor-pointer min-h-[40px] ${
                    isActive
                      ? 'bg-[#073B82] dark:bg-[#009AE0] text-white shadow-xs font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={isRtl ? 'بحث في أسماء وتفاصيل الخدمات...' : 'Search service title or scope...'}
              className="w-full pl-4 pr-10 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-[#009AE0] focus:ring-1 focus:ring-[#009AE0] text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 shadow-2xs min-h-[44px]"
            />
            <div className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'left-3' : 'right-3'} text-slate-400 dark:text-slate-500 pointer-events-none`}>
              <Search className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Counter feedback */}
        <div className="mb-6 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>
            {t.services.showingCount} <strong className="text-[#073B82] dark:text-[#38bdf8]">{filteredServices.length}</strong> {t.services.ofTotal}
          </span>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-[#009AE0] hover:underline"
            >
              {isRtl ? 'مسح البحث' : 'Clear search'}
            </button>
          )}
        </div>

        {/* Complete 15 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const title = isRtl ? service.titleAr : service.titleEn;
            const description = isRtl ? service.descriptionAr : service.descriptionEn;
            const scope = isRtl ? service.scopeAr : service.scopeEn;

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-[#009AE0]/50 dark:hover:border-[#009AE0]/60 transition-all duration-200 p-6 flex flex-col justify-between hover:shadow-md h-full"
              >
                <div>
                  {/* Top Meta: Number + Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center group-hover:border-[#009AE0]/40 transition-colors shadow-2xs">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 group-hover:text-[#009AE0] transition-colors">
                      #{service.number}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#073B82] dark:text-white mb-2.5 leading-snug group-hover:text-[#052a5e] dark:group-hover:text-[#38bdf8] transition-colors">
                    {title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {description}
                  </p>

                  {/* Scope Checklist Preview */}
                  <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800 mb-6">
                    {scope.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <Check className="w-3.5 h-3.5 text-[#009AE0] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Controls */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectServiceDetail(service.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009AE0] dark:text-[#38bdf8] hover:text-[#073B82] dark:hover:text-white transition-colors cursor-pointer py-1.5 min-h-[44px]"
                  >
                    <span>{t.services.viewDetails}</span>
                    <Chevron className="w-4 h-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      onSelectForInquiry(title);
                      onNavigateHome();
                      setTimeout(() => {
                        const el = document.querySelector('#contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-[#073B82] dark:hover:text-[#38bdf8] bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 px-3 py-1.5 rounded-lg transition-colors min-h-[38px] flex items-center"
                  >
                    {isRtl ? 'طلب تسعير' : 'Inquire'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
