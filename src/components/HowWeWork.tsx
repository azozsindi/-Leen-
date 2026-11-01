import React from 'react';
import { Layers, Stethoscope, Wrench, Building2, Workflow } from 'lucide-react';
import { Language } from '../types';
import { howWeWorkPhases } from '../data/partnersData';
import { translations } from '../data/translations';

interface HowWeWorkProps {
  currentLang: Language;
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';

  const getPhaseIcon = (number: string) => {
    switch (number) {
      case '01':
        return <Stethoscope className="w-5 h-5 text-[#009AE0]" />;
      case '02':
        return <Wrench className="w-5 h-5 text-[#009AE0]" />;
      case '03':
        return <Building2 className="w-5 h-5 text-[#009AE0]" />;
      case '04':
        return <Workflow className="w-5 h-5 text-[#009AE0]" />;
      default:
        return <Layers className="w-5 h-5 text-[#009AE0]" />;
    }
  };

  return (
    <section
      id="how-we-work"
      dir={isRtl ? 'rtl' : 'ltr'}
      className="py-16 sm:py-24 md:py-28 bg-slate-50/70 dark:bg-slate-950 border-y border-slate-200/60 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#009AE0] mb-3">
            <span>{t.howWeWork.sectionBadge}</span>
            <span className="text-slate-300 dark:text-slate-700">/</span>
            <span className="text-slate-500 dark:text-slate-400 font-mono">01 — 04</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#073B82] dark:text-white tracking-tight mb-4">
            {t.howWeWork.title}
          </h2>
          <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.howWeWork.subtitle}
          </p>
        </div>

        {/* 4 Phases Flow Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {howWeWorkPhases.map((phase) => {
            const title = isRtl ? phase.titleAr : phase.titleEn;
            const scopeItems = isRtl ? phase.scopeItemsAr : phase.scopeItemsEn;
            const hasItems = scopeItems && scopeItems.length > 0;
            const phaseLabel = isRtl ? `المرحلة ${phase.number}` : `PHASE ${phase.number}`;

            return (
              <div
                key={phase.id}
                className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow duration-200 h-full"
              >
                {/* Phase Number & Indicator */}
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <span className="font-mono text-2xl font-bold text-[#073B82] dark:text-[#38bdf8]">
                      {phase.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      {getPhaseIcon(phase.number)}
                    </div>
                  </div>

                  {/* Title (Language-dependent, pure Arabic or pure English) */}
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 pb-3 border-b border-slate-100 dark:border-slate-800 tracking-tight">
                    {title}
                  </h3>

                  {/* Specific Bullet Items */}
                  {hasItems ? (
                    <ul className="space-y-2">
                      {scopeItems.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#009AE0] mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="py-8 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 rounded-full bg-[#073B82]/5 dark:bg-[#009AE0]/15 flex items-center justify-center text-[#073B82] dark:text-[#38bdf8] mb-3">
                        <Workflow className="w-6 h-6 text-[#073B82] dark:text-[#38bdf8]" />
                      </div>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                        {isRtl ? 'إدارة وتشغيل متكامل' : 'End-to-End Operations'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Base Marker */}
                <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                  <span>{phaseLabel}</span>
                  <span className="text-[#009AE0] dark:text-[#38bdf8] font-sans font-semibold">
                    {isRtl ? 'معايير مؤسسية' : 'Standard'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
