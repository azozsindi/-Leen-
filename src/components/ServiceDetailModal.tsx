import React from 'react';
import { X, CheckCircle, ArrowRight, ArrowLeft, Phone, Mail } from 'lucide-react';
import { ServiceItem, Language } from '../types';
import { translations } from '../data/translations';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  currentLang: Language;
  onClose: () => void;
  onSelectForInquiry: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  currentLang,
  onClose,
  onSelectForInquiry,
}) => {
  if (!service) return null;

  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const title = isRtl ? service.titleAr : service.titleEn;
  const description = isRtl ? service.descriptionAr : service.descriptionEn;
  const scope = isRtl ? service.scopeAr : service.scopeEn;

  const handleInquire = () => {
    onSelectForInquiry(title);
    onClose();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 dark:bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transform transition-all"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Header */}
        <div className="bg-[#073B82] dark:bg-slate-950 text-white px-6 py-5 flex items-center justify-between border-b dark:border-slate-800">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-white/10 text-[#009AE0]">
              #{service.number}
            </span>
            <span className="text-xs text-slate-200">
              {isRtl ? 'شركة لين الحلول' : 'Leen Alhulul Services'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={t.services.closeModal}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-[#073B82] dark:text-white mb-4">
            {title}
          </h3>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            {description}
          </p>

          {/* Scope of Work */}
          <div className="mb-8">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              {t.services.serviceScopeTitle}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {scope.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-200"
                >
                  <CheckCircle className="w-4 h-4 text-[#009AE0] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <a
                href="tel:0560888280"
                className="inline-flex items-center gap-2 px-3 py-2.5 text-xs font-medium text-[#073B82] dark:text-[#38bdf8] bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors min-h-[44px]"
              >
                <Phone className="w-3.5 h-3.5 text-[#009AE0]" />
                <span dir="ltr">0560888280</span>
              </a>
              <a
                href="mailto:info@leenss.com.sa"
                className="inline-flex items-center gap-2 px-3 py-2.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors min-h-[44px]"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>info@leenss.com.sa</span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white min-h-[44px]"
              >
                {t.services.closeModal}
              </button>
              <button
                type="button"
                onClick={handleInquire}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#009AE0] hover:bg-[#0087c5] rounded-lg transition-colors shadow-xs min-h-[44px]"
              >
                <span>{t.services.requestService}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
