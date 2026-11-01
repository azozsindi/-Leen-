import React from 'react';
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
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Phone,
  Mail,
  MessageCircle,
  Home,
  Shield,
  Layers,
  Clock,
  Sparkles,
} from 'lucide-react';
import { ServiceItem, Language } from '../types';
import { servicesData } from '../data/servicesData';
import { translations } from '../data/translations';

interface ServiceDetailPageProps {
  serviceId: string;
  currentLang: Language;
  onNavigateHome: () => void;
  onNavigateServices: () => void;
  onSelectServiceDetail: (serviceId: string) => void;
  onSelectForInquiry: (serviceTitle: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceId,
  currentLang,
  onNavigateHome,
  onNavigateServices,
  onSelectServiceDetail,
  onSelectForInquiry,
}) => {
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';
  const ArrowBack = isRtl ? ArrowRight : ArrowLeft;
  const ArrowForward = isRtl ? ArrowLeft : ArrowRight;

  const service = servicesData.find((s) => s.id === serviceId) || servicesData[0];
  const title = isRtl ? service.titleAr : service.titleEn;
  const description = isRtl ? service.descriptionAr : service.descriptionEn;
  const scope = isRtl ? service.scopeAr : service.scopeEn;

  // Other related services from same or different categories
  const otherServices = servicesData
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'security':
        return t.services.securityTab;
      case 'telecom':
        return t.services.telecomTab;
      case 'contracting':
        return t.services.contractingTab;
      case 'facility':
        return t.services.facilityTab;
      default:
        return t.services.allTab;
    }
  };

  const getIcon = (iconName: string) => {
    const props = { className: 'w-8 h-8 text-[#009AE0]' };
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

  const handleInquire = () => {
    onSelectForInquiry(title);
    onNavigateHome();
    setTimeout(() => {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <div className="pt-24 sm:pt-32 pb-20 md:pb-28 bg-[#F8FAFC] dark:bg-slate-950 min-h-screen transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-8" aria-label="Breadcrumb">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1.5 hover:text-[#009AE0] transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{t.services.breadcrumbHome}</span>
          </button>
          <span className="text-slate-300 dark:text-slate-700">/</span>
          <button
            onClick={onNavigateServices}
            className="hover:text-[#009AE0] transition-colors cursor-pointer"
          >
            {t.services.breadcrumbServices}
          </button>
          <span className="text-slate-300 dark:text-slate-700">/</span>
          <span className="font-semibold text-[#073B82] dark:text-[#38bdf8] truncate max-w-[200px] sm:max-w-none">
            {title}
          </span>
        </nav>

        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={onNavigateServices}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-[#073B82] dark:hover:text-[#38bdf8] transition-colors cursor-pointer"
          >
            <ArrowBack className="w-4 h-4" />
            <span>{t.services.backToServices}</span>
          </button>
        </div>

        {/* Main Service Presentation Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Content Area (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-10 shadow-sm">
              {/* Top Tags Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-lg bg-[#073B82] text-white">
                    #{service.number}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-[#009AE0]/10 dark:bg-[#009AE0]/20 text-[#009AE0] dark:text-[#38bdf8]">
                    {getCategoryName(service.category)}
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  {isRtl ? 'شركة لين الحلول · 2026' : 'Leen Alhulul · 2026'}
                </span>
              </div>

              {/* Service Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center shrink-0 shadow-2xs">
                  {getIcon(service.iconName)}
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-[#073B82] dark:text-white leading-tight">
                    {title}
                  </h1>
                  <span className="text-xs text-slate-400 font-mono mt-1 block">
                    {isRtl ? service.titleEn : service.titleAr}
                  </span>
                </div>
              </div>

              {/* Detailed Description */}
              <div className="prose prose-slate dark:prose-invert max-w-none mb-8">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  {isRtl ? 'نبذة عن الخدمة' : 'Service Overview'}
                </h2>
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {description}
                </p>
              </div>

              {/* Scope of Work & Deliverables */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#009AE0]" />
                  <span>{t.services.serviceScopeTitle}</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {scope.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#009AE0] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quality & SLA Commitment */}
              <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100/60 dark:from-slate-800/60 dark:to-slate-800/30 border border-slate-200/80 dark:border-slate-700 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#009AE0]/10 text-[#009AE0] flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#073B82] dark:text-white">
                    {isRtl ? 'التزام تام بأعلى معايير الجودة والضمان' : 'Quality Assurance & Delivery Guarantee'}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {isRtl
                      ? 'كافة التوريدات والتركيبات تتم وفق المواصفات المعتمدة وتقدم معها خدمات الدعم الفني والصيانة الدورية.'
                      : 'All engineering installations follow approved standards with dedicated commissioning and ongoing warranty maintenance.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Other Services Recommendations */}
            <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8">
              <h3 className="text-base font-bold text-[#073B82] dark:text-white mb-4">
                {isRtl ? 'خدمات ذات صلة قد تهم مشروعك' : 'Related Services for Your Project'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {otherServices.map((other) => (
                  <div
                    key={other.id}
                    onClick={() => {
                      onSelectServiceDetail(other.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/80 hover:border-[#009AE0] transition-colors cursor-pointer group"
                  >
                    <span className="font-mono text-[10px] font-bold text-slate-400 dark:text-slate-500">
                      #{other.number}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#009AE0] transition-colors mt-1 line-clamp-2">
                      {isRtl ? other.titleAr : other.titleEn}
                    </h4>
                    <span className="text-[11px] text-[#009AE0] font-semibold flex items-center gap-1 mt-3">
                      <span>{t.services.viewDetails}</span>
                      <ArrowForward className="w-3 h-3" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar CTA & Direct Action Box (4 Cols) */}
          <div className="lg:col-span-4 space-y-6 sticky top-28">
            {/* Direct RFQ Card */}
            <div className="rounded-3xl bg-gradient-to-br from-[#073B82] to-[#041d40] text-white p-6 sm:p-8 shadow-md border border-[#009AE0]/20">
              <span className="text-xs font-mono text-[#009AE0] bg-white/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                RFQ & INQUIRY
              </span>

              <h3 className="text-xl font-bold mt-4 mb-2">
                {isRtl ? 'طلب عرض سعر فوري' : 'Request a Proposal'}
              </h3>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
                {isRtl
                  ? `أرسل طلبك بخصوص ${title} وسيقوم مهندسونا بتقديم دراسة وعرض سعر مخصص لمنشأتك.`
                  : `Inquire about ${title} and our technical engineering team will prepare a tailored proposal.`}
              </p>

              <button
                type="button"
                onClick={handleInquire}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#009AE0] hover:bg-[#0087c5] active:bg-[#0076ad] text-white shadow-md transition-all cursor-pointer min-h-[48px]"
              >
                <span>{t.services.requestQuoteForThis}</span>
                <ArrowForward className="w-4 h-4" />
              </button>

              <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                <a
                  href="tel:0560888280"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/15 transition-colors text-xs font-semibold"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#009AE0]" />
                    <span>{isRtl ? 'اتصال مباشر فوري' : 'Call Directly'}</span>
                  </div>
                  <span dir="ltr" className="font-mono text-slate-200">0560888280</span>
                </a>

                <a
                  href="https://wa.me/966560888280"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-white transition-colors text-xs font-semibold border border-[#25D366]/30"
                >
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>{isRtl ? 'استشارة عبر واتساب' : 'WhatsApp Inquiry'}</span>
                  </div>
                  <span className="text-[11px] text-[#25D366] font-bold">ONLINE</span>
                </a>
              </div>
            </div>

            {/* Corporate Location & Office Note */}
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-5 text-xs text-slate-600 dark:text-slate-300 space-y-2">
              <span className="font-bold text-[#073B82] dark:text-[#38bdf8] block">
                {isRtl ? 'المقر الرئيسي لشركة لين الحلول' : 'Leen Alhulul Headquarters'}
              </span>
              <p>{t.contact.addressValue}</p>
              <p className="font-mono text-slate-400">info@leenss.com.sa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
