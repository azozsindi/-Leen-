import React, { useState } from 'react';
import { ShieldCheck, Search } from 'lucide-react';
import { Language } from '../types';
import { suppliersData } from '../data/partnersData';
import { translations } from '../data/translations';

interface SuppliersSectionProps {
  currentLang: Language;
}

export const SuppliersSection: React.FC<SuppliersSectionProps> = ({ currentLang }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';

  const filteredSuppliers = suppliersData.filter(
    (supplier) =>
      supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (isRtl
        ? supplier.categoryAr.includes(searchTerm)
        : supplier.categoryEn.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="suppliers" className="py-16 sm:py-24 md:py-28 bg-white dark:bg-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#009AE0] mb-3">
            <span>{t.suppliers.sectionBadge}</span>
            <span className="text-slate-300 dark:text-slate-700">/</span>
            <span className="text-slate-500 dark:text-slate-400 font-mono">30 {isRtl ? 'علامة تجارية' : 'Enterprise Brands'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#073B82] dark:text-white tracking-tight mb-4">
            {t.suppliers.title}
          </h2>
          <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.suppliers.subtitle}
          </p>
        </div>

        {/* Search Filter for Instant Brand Discovery */}
        <div className="max-w-md mx-auto mb-8 sm:mb-10 px-2 sm:px-0">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={isRtl ? 'البحث عن مورد أو تخصص تقني...' : 'Search brand or technical domain...'}
              className="w-full pl-4 pr-10 py-3 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-[#009AE0] focus:ring-1 focus:ring-[#009AE0] text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-colors min-h-[44px]"
            />
            <div className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'left-3' : 'right-3'} text-slate-400 dark:text-slate-500 pointer-events-none`}>
              <Search className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Suppliers Logo & Brand Wall Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {filteredSuppliers.map((supplier) => (
            <div
              key={supplier.id}
              className="group relative p-3 sm:p-4 rounded-xl bg-slate-50/70 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700 hover:border-[#009AE0]/50 dark:hover:border-[#009AE0]/60 hover:bg-white dark:hover:bg-slate-800 transition-all duration-200 flex flex-col justify-between items-center text-center hover:shadow-2xs min-h-[105px]"
            >
              <div className="w-full flex items-center justify-between mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#009AE0]/60 group-hover:bg-[#009AE0] transition-colors" />
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">PARTNER</span>
              </div>

              {/* Exact Brand Name */}
              <div className="my-auto py-1">
                <span className="text-xs sm:text-base font-bold text-[#073B82] dark:text-white group-hover:text-[#009AE0] dark:group-hover:text-[#38bdf8] transition-colors tracking-tight block">
                  {supplier.name}
                </span>
              </div>

              {/* Category */}
              <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-normal truncate max-w-full px-1">
                {isRtl ? supplier.categoryAr : supplier.categoryEn}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Verification Note */}
        <div className="mt-10 sm:mt-12 text-center text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2 px-4">
          <ShieldCheck className="w-4 h-4 text-[#009AE0] shrink-0" />
          <span>
            {isRtl
              ? 'جميع الأسماء والعلامات التجارية المذكورة هي علامات تجارية مسجلة لمالكيها وموردين معتمدين لأنظمتنا.'
              : 'All trademarks and enterprise brand names are the intellectual property of their respective owners and authorized system suppliers.'}
          </span>
        </div>
      </div>
    </section>
  );
};
