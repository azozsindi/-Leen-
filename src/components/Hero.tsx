import React from 'react';
import { ArrowLeft, ArrowRight, Phone, ShieldCheck, HardHat, Network } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-24 sm:pt-36 pb-16 sm:pb-24 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-200">
      {/* Engineering Blueprint Grid Background */}
      <div className="absolute inset-0 engineering-grid dark:dark-engineering-grid opacity-60 dark:opacity-20 pointer-events-none" />

      {/* Subtle brand ambient accents */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#009AE0]/5 dark:bg-[#009AE0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-[#073B82]/5 dark:bg-[#073B82]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Corporate Identity Mark / Micro-kicker (unboxed clean text) */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#073B82] dark:text-[#38bdf8] uppercase mb-4">
            <span>{isRtl ? 'المملكة العربية السعودية' : 'Kingdom of Saudi Arabia'}</span>
            <span className="text-[#009AE0] font-bold">·</span>
            <span className="text-slate-600 dark:text-slate-400">{isRtl ? 'سجل تجاري وترخيص معتمد' : 'Authorized Enterprise'}</span>
            <span className="text-[#009AE0] font-bold">·</span>
            <span className="text-[#009AE0]">2026</span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#073B82] dark:text-white tracking-tight mb-5 sm:mb-6 leading-tight"
            style={{ textWrap: 'balance' }}
          >
            {t.hero.tagline}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8 sm:mb-10 max-w-3xl mx-auto font-normal">
            {t.hero.description}
          </p>

          {/* Action Buttons (touch friendly min-h-[44px]) */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-14 w-full">
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, '#services')}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#009AE0] hover:bg-[#0087c5] active:bg-[#0076ad] rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer group min-h-[44px]"
            >
              <span>{t.hero.ctaServices}</span>
              <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-[#073B82] dark:text-white hover:text-[#052a5e] bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 rounded-xl transition-all shadow-xs hover:border-slate-400 min-h-[44px] cursor-pointer"
            >
              <span>{t.hero.ctaContact}</span>
            </a>

            <a
              href="tel:0560888280"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-[#073B82] dark:hover:text-[#38bdf8] transition-colors min-h-[44px]"
              title={t.hero.phoneQuickCall}
            >
              <div className="w-8 h-8 rounded-full bg-[#073B82]/5 dark:bg-[#009AE0]/15 flex items-center justify-center text-[#073B82] dark:text-[#009AE0]">
                <Phone className="w-4 h-4 text-[#009AE0]" />
              </div>
              <span dir="ltr" className="font-mono text-sm font-bold tracking-tight text-slate-800 dark:text-slate-200">
                0560888280
              </span>
            </a>
          </div>

          {/* Core Capability Pillars */}
          <div className="w-full pt-8 sm:pt-10 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-slate-600 dark:text-slate-300 text-start">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-2xs">
              <div className="p-2.5 rounded-lg bg-[#073B82]/5 dark:bg-[#073B82]/20 text-[#073B82] shrink-0">
                <HardHat className="w-5 h-5 text-[#073B82] dark:text-[#38bdf8]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {isRtl ? 'المقاولات والتشطيبات' : 'General Contracting'}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {isRtl ? 'مشاريع سكنية وتجارية متكاملة' : 'Turnkey Residential & Commercial'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-2xs">
              <div className="p-2.5 rounded-lg bg-[#009AE0]/10 dark:bg-[#009AE0]/20 text-[#009AE0] shrink-0">
                <Network className="w-5 h-5 text-[#009AE0]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {isRtl ? 'الاتصالات والشبكات' : 'Telecom & Networking'}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {isRtl ? 'سنترالات وبنية تحتية سحابية' : 'PBX & Enterprise Cabling'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-2xs">
              <div className="p-2.5 rounded-lg bg-[#073B82]/5 dark:bg-[#073B82]/20 text-[#073B82] shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#073B82] dark:text-[#38bdf8]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {isRtl ? 'الأنظمة الأمنية' : 'Security Solutions'}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {isRtl ? 'مراقبة وبوابات وتحكم ذكي' : 'CCTV & Biometric Access'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
