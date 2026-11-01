import React from 'react';
import { Building, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { clientsData } from '../data/partnersData';
import { translations } from '../data/translations';

interface ClientsSectionProps {
  currentLang: Language;
}

export const ClientsSection: React.FC<ClientsSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';

  return (
    <section id="clients" className="py-16 sm:py-24 md:py-28 bg-slate-50/70 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#009AE0] mb-3">
            <span>{t.clients.sectionBadge}</span>
            <span className="text-slate-300 dark:text-slate-700">/</span>
            <span className="text-slate-500 dark:text-slate-400 font-mono">ESTEEMED CLIENTS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#073B82] dark:text-white tracking-tight mb-4">
            {t.clients.title}
          </h2>
          <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.clients.subtitle}
          </p>
        </div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {clientsData.map((client) => {
            const name = isRtl ? client.nameAr : client.nameEn;
            const sector = isRtl ? client.sectorAr : client.sectorEn;

            return (
              <div
                key={client.id}
                className="group relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 flex flex-col justify-between shadow-2xs hover:shadow-sm hover:border-[#009AE0]/50 transition-all duration-200"
              >
                <div>
                  {/* Top Header Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#073B82]/5 dark:bg-[#009AE0]/15 flex items-center justify-center text-[#073B82] group-hover:bg-[#073B82] dark:group-hover:bg-[#009AE0] group-hover:text-white transition-colors">
                      <Building className="w-5 h-5 text-[#009AE0] group-hover:text-white" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {isRtl ? 'عميل استراتيجي' : 'CLIENT'}
                    </span>
                  </div>

                  {/* Client Name */}
                  <h3 className="text-base sm:text-lg font-bold text-[#073B82] dark:text-white mb-2 leading-snug group-hover:text-[#052a5e] dark:group-hover:text-[#38bdf8] transition-colors">
                    {name}
                  </h3>

                  {/* Sector Description */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {sector}
                  </p>
                </div>

                {/* Status Verified Footer */}
                <div className="pt-4 mt-5 sm:mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#009AE0]" />
                  <span className="text-[11px] font-medium">
                    {isRtl ? 'مشاريع منفذة وشراكة عمل' : 'Executed Works & Partnership'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 sm:mt-14 max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-[#073B82] to-[#0a489c] dark:from-slate-900 dark:to-slate-800 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm border border-transparent dark:border-slate-700">
          <div className="text-center sm:text-start">
            <h4 className="text-base sm:text-lg font-bold mb-1">
              {isRtl ? 'هل تخطط لمشروع جديد أو ترقية أنظمتك؟' : 'Planning a New Project or Infrastructure Upgrade?'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 dark:text-slate-300">
              {isRtl
                ? 'فريق شركة لين الحلول يقدم استشارات هندسية وحلول متكاملة تناسب متطلبات منشأتك.'
                : 'Leen Alhulul provides turnkey engineering consultancy tailored to your facility specifications.'}
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 text-xs sm:text-sm font-semibold bg-[#009AE0] hover:bg-[#0087c5] text-white rounded-xl transition-colors whitespace-nowrap shadow-xs min-h-[44px] flex items-center justify-center w-full sm:w-auto"
          >
            {isRtl ? 'تواصل معنا الآن' : 'Contact Us Today'}
          </a>
        </div>
      </div>
    </section>
  );
};
