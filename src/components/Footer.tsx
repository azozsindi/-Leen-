import React from 'react';
import { Phone, Mail, Globe, MapPin, ArrowUp, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#how-we-work', label: t.nav.howWeWork },
    { href: '#suppliers', label: t.nav.suppliers },
    { href: '#clients', label: t.nav.clients },
    { href: '#contact', label: t.nav.contact },
  ];

  const highlightedServices = [
    { id: '1', titleAr: 'أنظمة السنترالات الهاتفية', titleEn: 'IP PBX & Telephony' },
    { id: '2', titleAr: 'كاميرات المراقبة عن بعد', titleEn: 'Remote CCTV Surveillance' },
    { id: '3', titleAr: 'المقاولات والتشطيبات المعمارية', titleEn: 'General Contracting & Fit-Out' },
    { id: '4', titleAr: 'البوابات الإلكترونية والتحكم بالدخول', titleEn: 'Electronic Gates & Access Control' },
    { id: '5', titleAr: 'شبكات الألياف والواي فاي الذكي', titleEn: 'Enterprise Networking & Wi-Fi' },
    { id: '6', titleAr: 'التشغيل والصيانة للمجمعات', titleEn: 'Facility Operations & Maintenance' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05234d] dark:bg-slate-950 text-white pt-16 pb-12 border-t border-[#073B82] dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white/95 dark:bg-white/90 p-2.5 rounded-xl inline-block border border-transparent">
              <img
                src="/assets/aistudio/image_2c4bdd5e.png"
                alt="شركة لين الحلول | Leen Alhulul"
                className="h-9 sm:h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              {t.footer.aboutCompany}
            </p>

            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-400 block mb-2">
                {isRtl ? 'حسابات منصة 𝕏 الرسمية:' : 'Official 𝕏 Channels:'}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://x.com/Leenss2020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-white/10 hover:bg-[#009AE0] text-xs font-mono transition-colors flex items-center gap-1.5 min-h-[38px]"
                >
                  <span>𝕏 @Leenss2020</span>
                  <ExternalLink className="w-3 h-3 text-slate-300" />
                </a>
                <a
                  href="https://x.com/Leenss2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-white/10 hover:bg-[#009AE0] text-xs font-mono transition-colors flex items-center gap-1.5 min-h-[38px]"
                >
                  <span>𝕏 @Leenss2024</span>
                  <ExternalLink className="w-3 h-3 text-slate-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#009AE0] mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-[#009AE0] transition-colors block py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Services (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#009AE0] mb-4">
              {t.footer.keyServices}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {highlightedServices.map((svc) => (
                <li key={svc.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleLinkClick(e, '#services')}
                    className="hover:text-[#009AE0] transition-colors block py-1 truncate"
                  >
                    {isRtl ? svc.titleAr : svc.titleEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#009AE0] mb-4">
              {t.footer.contactInfo}
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#009AE0] shrink-0" />
                <a href="tel:0560888280" dir="ltr" className="hover:text-white font-mono py-1">
                  0560888280
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#009AE0] shrink-0" />
                <a href="mailto:info@leenss.com.sa" className="hover:text-white py-1">
                  info@leenss.com.sa
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#009AE0] shrink-0" />
                <a href="https://www.leenss.com.sa" target="_blank" rel="noopener noreferrer" className="hover:text-white font-mono py-1">
                  www.leenss.com.sa
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#009AE0] shrink-0 mt-0.5" />
                <span>{t.contact.addressValue}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="font-mono text-center sm:text-start">
            {t.footer.rights}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors cursor-pointer min-h-[44px]"
            aria-label="Scroll to top"
          >
            <span>{isRtl ? 'العودة للأعلى' : 'Back to Top'}</span>
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5 text-[#009AE0]" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
