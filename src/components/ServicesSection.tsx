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
  Layers,
  ShieldCheck,
} from 'lucide-react';
import { ServiceItem, Language } from '../types';
import { servicesData } from '../data/servicesData';
import { translations } from '../data/translations';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  currentLang: Language;
  onSelectForInquiry: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  currentLang,
  onSelectForInquiry,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';
  const Chevron = isRtl ? ChevronLeft : ChevronRight;

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

  const categories = [
    { id: 'all', label: t.services.allTab, count: 15 },
    { id: 'security', label: t.services.securityTab, count: 5 },
    { id: 'telecom', label: t.services.telecomTab, count: 5 },
    { id: 'contracting', label: t.services.contractingTab, count: 4 },
    { id: 'facility', label: t.services.facilityTab, count: 1 },
  ];

  // Filter with guaranteed fallback to prevent any empty view
  const filteredServices = servicesData.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const activeCategoryObj = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <section id="services" className="py-16 sm:py-24 md:py-28 bg-white dark:bg-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
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

        {/* Responsive Interactive Filter Tabs (100% Mobile Optimized) */}
        <div className="mb-8 sm:mb-12">
          {/* Scrollable / wrap container tailored for mobile finger taps */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 p-1.5 sm:p-2 rounded-2xl bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 max-w-4xl mx-auto">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 sm:px-4 py-2.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px] ${
                    isActive
                      ? 'bg-white dark:bg-slate-900 text-[#073B82] dark:text-[#38bdf8] shadow-sm border border-slate-200/80 dark:border-slate-700 font-bold scale-[1.02]'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-700/60'
                  }`}
                  aria-pressed={isActive}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[11px] font-mono px-2 py-0.5 rounded-full font-bold ${
                      isActive
                        ? 'bg-[#009AE0] text-white'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Category Indicator on Mobile & Desktop */}
          <div className="mt-4 text-center">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#009AE0]" />
              {isRtl
                ? `عرض ${filteredServices.length} من أصل ${categories.find(c => c.id === activeCategory)?.count || 15} في تصنيف: ${activeCategoryObj.label}`
                : `Showing ${filteredServices.length} items in: ${activeCategoryObj.label}`}
            </span>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredServices.map((service) => {
            const title = isRtl ? service.titleAr : service.titleEn;
            const description = isRtl ? service.descriptionAr : service.descriptionEn;
            const scope = isRtl ? service.scopeAr : service.scopeEn;

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/90 dark:border-slate-700/80 hover:border-[#009AE0]/50 dark:hover:border-[#009AE0]/60 hover:bg-white dark:hover:bg-slate-800 transition-all duration-200 p-5 sm:p-6 flex flex-col justify-between hover:shadow-md"
              >
                <div>
                  {/* Top Meta: Number + Icon */}
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center group-hover:border-[#009AE0]/40 transition-colors shadow-2xs">
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
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 sm:mb-5">
                    {description}
                  </p>

                  {/* Scope Teaser */}
                  <div className="space-y-1.5 pt-3.5 border-t border-slate-200/60 dark:border-slate-700/60 mb-5">
                    {scope.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <Check className="w-3.5 h-3.5 text-[#009AE0] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Controls (touch-friendly min-h-[44px]) */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-700/40">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009AE0] dark:text-[#38bdf8] hover:text-[#073B82] dark:hover:text-white transition-colors cursor-pointer py-2 min-h-[44px]"
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
                    className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-[#073B82] dark:hover:text-[#38bdf8] bg-slate-100 dark:bg-slate-700/60 hover:bg-slate-200 px-3 py-2 rounded-lg transition-colors min-h-[38px] flex items-center"
                  >
                    {isRtl ? 'طلب تسعير' : 'Inquire'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        currentLang={currentLang}
        onClose={() => setSelectedService(null)}
        onSelectForInquiry={onSelectForInquiry}
      />
    </section>
  );
};
