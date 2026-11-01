import React from 'react';
import { CheckCircle2, Building, Wrench, Shield } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface AboutUsProps {
  currentLang: Language;
}

export const AboutUs: React.FC<AboutUsProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';

  return (
    <section id="about" className="py-16 sm:py-24 md:py-28 bg-white dark:bg-slate-900 border-y border-slate-200/60 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/80 dark:from-slate-800/80 dark:to-slate-800/40 p-6 sm:p-8 border border-slate-200/80 dark:border-slate-700 shadow-xs">
              {/* Geometric decorative accent */}
              <div className="w-12 h-1 bg-[#009AE0] rounded-full mb-6" />

              <h3 className="text-lg sm:text-xl font-bold text-[#073B82] dark:text-white mb-3">
                {t.about.valuesTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                {isRtl
                  ? 'نتبنى منهجية عمل هندسية متكاملة تضمن أعلى مستويات الدقة من دراسة المخططات حتى تسليم المشاريع والصيانة المستمرة.'
                  : 'We adopt a unified engineering methodology ensuring peak precision from schematic review to project delivery and continuous lifecycle support.'}
              </p>

              {/* Core Pillars List */}
              <div className="space-y-3.5">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700/80 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-[#073B82]/5 dark:bg-[#009AE0]/15 flex items-center justify-center text-[#073B82] dark:text-[#38bdf8] shrink-0">
                    <Building className="w-4 h-4 text-[#009AE0]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      {t.about.qualityCommitment}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {isRtl ? 'مطابقة للمواصفات القياسية وكود البناء السعودي' : 'Compliance with Saudi building codes and technical standards'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700/80 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-[#073B82]/5 dark:bg-[#009AE0]/15 flex items-center justify-center text-[#073B82] dark:text-[#38bdf8] shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#009AE0]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      {t.about.timelyDelivery}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {isRtl ? 'جداول زمنية منضبطة وإشراف فني مستمر' : 'Disciplined milestones and structured technical oversight'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700/80 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-[#073B82]/5 dark:bg-[#009AE0]/15 flex items-center justify-center text-[#073B82] dark:text-[#38bdf8] shrink-0">
                    <Shield className="w-4 h-4 text-[#009AE0]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      {t.about.integratedSolutions}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {isRtl ? 'توريد وتركيب وبرمجة ودعم فني دوري وطارئ' : 'Procurement, installation, configuration, and proactive maintenance'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Column with User's Exact Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            {/* Section Badge (clean text with typographic separator) */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#009AE0] mb-3">
              <span>{t.about.sectionBadge}</span>
              <span className="text-slate-300 dark:text-slate-700">/</span>
              <span className="text-slate-500 dark:text-slate-400">{isRtl ? 'شركة سعودية رائدة' : 'Saudi Enterprise'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#073B82] dark:text-white tracking-tight mb-5 sm:mb-6">
              {t.about.title}
            </h2>

            {/* Exact Paragraph 1 */}
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-5 sm:mb-6 font-normal">
              {t.about.paragraph1}
            </p>

            {/* Exact Paragraph 2 */}
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6 sm:mb-8 font-normal">
              {t.about.paragraph2}
            </p>

            {/* Enterprise Tagline Callout */}
            <div className="p-5 sm:p-6 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#009AE0]/10 dark:bg-[#009AE0]/20 flex items-center justify-center shrink-0 text-[#009AE0]">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#073B82] dark:text-white">
                    {isRtl ? 'ريادة هندسية وتقنية متكاملة' : 'Integrated Engineering & Technical Excellence'}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {isRtl
                      ? 'خدمات شاملة للمشاريع السكنية والتجارية والصناعية ومرافق الرعاية الصحية'
                      : 'End-to-end turnkey services across residential, commercial, industrial, and healthcare sectors'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
