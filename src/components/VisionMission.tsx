import React from 'react';
import { Eye, Target, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface VisionMissionProps {
  currentLang: Language;
}

export const VisionMission: React.FC<VisionMissionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-slate-50/70 dark:bg-slate-950 border-b border-slate-200/60 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#009AE0] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.visionMission.title}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#073B82] dark:text-white tracking-tight mb-4">
            {isRtl ? 'آفاق المستقبل وتطلعات النمو' : 'Strategic Horizons & Aspirations'}
          </h2>
          <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300">
            {t.visionMission.subtitle}
          </p>
        </div>

        {/* Vision & Mission Cards Grid (Distinct & Separate) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Vision Card */}
          <div className="relative rounded-2xl bg-white dark:bg-slate-900 p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-[#009AE0]/40 transition-all duration-200 flex flex-col justify-between group">
            {/* Top Accent Bar */}
            <div className="absolute top-0 left-8 right-8 h-1 bg-[#073B82] dark:bg-[#009AE0] rounded-b-md" />

            <div>
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-[#073B82]/5 dark:bg-[#009AE0]/15 flex items-center justify-center text-[#073B82] dark:text-[#38bdf8] group-hover:bg-[#073B82] group-hover:text-white transition-colors duration-200">
                  <Eye className="w-6 sm:w-7 h-6 sm:h-7" />
                </div>
                <span className="text-[10px] sm:text-xs font-mono font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  {isRtl ? 'الرؤية المستقبلية' : 'OUR VISION'}
                </span>
              </div>

              <h3 className="text-lg sm:text-2xl font-bold text-[#073B82] dark:text-white mb-3 sm:mb-4 tracking-tight">
                {t.visionMission.visionTitle}
              </h3>

              <p className="text-sm sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {t.visionMission.visionText}
              </p>
            </div>

            <div className="pt-5 mt-6 sm:mt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="font-medium text-[#073B82] dark:text-[#38bdf8]">
                {isRtl ? 'المملكة العربية السعودية' : 'Kingdom of Saudi Arabia'}
              </span>
              <span>{isRtl ? 'الريادة والتميز المستمر' : 'Continuous Leadership'}</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative rounded-2xl bg-white dark:bg-slate-900 p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-[#009AE0]/40 transition-all duration-200 flex flex-col justify-between group">
            {/* Top Accent Bar */}
            <div className="absolute top-0 left-8 right-8 h-1 bg-[#009AE0] rounded-b-md" />

            <div>
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-[#009AE0]/10 dark:bg-[#009AE0]/15 flex items-center justify-center text-[#009AE0] dark:text-[#38bdf8] group-hover:bg-[#009AE0] group-hover:text-white transition-colors duration-200">
                  <Target className="w-6 sm:w-7 h-6 sm:h-7" />
                </div>
                <span className="text-[10px] sm:text-xs font-mono font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  {isRtl ? 'رسالة الشركة' : 'OUR MISSION'}
                </span>
              </div>

              <h3 className="text-lg sm:text-2xl font-bold text-[#073B82] dark:text-white mb-3 sm:mb-4 tracking-tight">
                {t.visionMission.missionTitle}
              </h3>

              <p className="text-sm sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {t.visionMission.missionText}
              </p>
            </div>

            <div className="pt-5 mt-6 sm:mt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="font-medium text-[#009AE0] dark:text-[#38bdf8]">
                {isRtl ? 'أحدث التقنيات العالمية' : 'State-of-the-art Technology'}
              </span>
              <span>{isRtl ? 'شراكات مبنية على الثقة' : 'Trust-based Partnerships'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
