import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, Phone, Sun, Moon } from 'lucide-react';
import { Language, Theme } from '../types';
import { translations } from '../data/translations';

interface HeaderProps {
  currentLang: Language;
  onToggleLang: () => void;
  currentTheme: Theme;
  onToggleTheme: () => void;
  onNavigateHome: () => void;
  onNavigateServices: () => void;
  isCustomPage?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onToggleLang,
  currentTheme,
  onToggleTheme,
  onNavigateHome,
  onNavigateServices,
  isCustomPage = false,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', href: '#home', label: t.nav.home },
    { id: 'about', href: '#about', label: t.nav.about },
    { id: 'services', href: '#services', label: t.nav.services },
    { id: 'how-we-work', href: '#how-we-work', label: t.nav.howWeWork },
    { id: 'suppliers', href: '#suppliers', label: t.nav.suppliers },
    { id: 'clients', href: '#clients', label: t.nav.clients },
    { id: 'contact', href: '#contact', label: t.nav.contact },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, linkId: string, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (linkId === 'home') {
      onNavigateHome();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (linkId === 'services' && isCustomPage) {
      onNavigateServices();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (isCustomPage) {
      onNavigateHome();
      setTimeout(() => {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800 py-2.5 sm:py-3'
          : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800/60 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo Zone */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home', '#home')}
            className="flex items-center gap-3 shrink-0 focus:outline-none group"
            aria-label="Leen Alhulul Home"
          >
            <div className="relative h-9 sm:h-11 flex items-center bg-white/95 dark:bg-white/90 px-2 py-1 rounded-lg border border-slate-200/60 dark:border-transparent">
              <img
                src="/assets/aistudio/image_2c4bdd5e.png"
                alt="شركة لين الحلول | Leen Alhulul"
                className="h-7 sm:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </div>
          </a>

          {/* Nav Links Zone (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-slate-700 dark:text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id, link.href)}
                className="hover:text-[#009AE0] dark:hover:text-[#38bdf8] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#009AE0] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-center cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Zone: Theme switch + Language switch + Contact button */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {/* Theme Toggle Button (Light/Dark Mode) */}
            <button
              onClick={onToggleTheme}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-[#073B82] dark:hover:text-[#38bdf8] bg-slate-100 dark:bg-slate-800 hover:bg-slate-200/70 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer border border-slate-200/60 dark:border-slate-700 flex items-center justify-center min-w-[38px] min-h-[38px]"
              title={currentTheme === 'dark' ? 'التحويل إلى الوضع الفاتح (Light Mode)' : 'التحويل إلى الوضع الليلي (Dark Mode)'}
              aria-label="Toggle theme"
            >
              {currentTheme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-[#073B82]" />
              )}
            </button>

            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-[#073B82] dark:hover:text-[#38bdf8] bg-slate-100/80 dark:bg-slate-800 hover:bg-slate-200/70 dark:hover:bg-slate-700 rounded-lg transition-all cursor-pointer border border-slate-200/60 dark:border-slate-700 min-h-[38px]"
              title={currentLang === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-[#009AE0]" />
              <span className="font-sans font-medium">{t.nav.toggleLang}</span>
            </button>

            {/* Direct Phone / Contact CTA */}
            <a
              href="tel:0560888280"
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#073B82] dark:text-[#38bdf8] bg-[#009AE0]/10 dark:bg-[#009AE0]/20 hover:bg-[#009AE0]/15 rounded-lg transition-colors border border-[#009AE0]/20 min-h-[38px]"
            >
              <Phone className="w-3.5 h-3.5 text-[#009AE0]" />
              <span dir="ltr" className="font-mono font-medium">0560888280</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact', '#contact')}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#073B82] hover:bg-[#052a5e] dark:bg-[#009AE0] dark:hover:bg-[#0087c5] rounded-lg transition-colors shadow-xs min-h-[38px] cursor-pointer"
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile Top Controls: Theme + Lang + Hamburger */}
          <div className="flex sm:hidden items-center gap-1.5">
            {/* Quick Dark Mode Toggle for Mobile */}
            <button
              onClick={onToggleTheme}
              className="p-2.5 text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200/60 dark:border-slate-700 min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label="Toggle dark mode"
            >
              {currentTheme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-[#073B82]" />
              )}
            </button>

            {/* Quick Lang Toggle for Mobile */}
            <button
              onClick={onToggleLang}
              className="px-2.5 py-2 text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-bold border border-slate-200/60 dark:border-slate-700 min-h-[40px]"
              aria-label="Toggle language"
            >
              {t.nav.toggleLang}
            </button>

            {/* Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 dark:text-slate-200 hover:text-[#073B82] dark:hover:text-[#38bdf8] bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200/60 dark:border-slate-700 min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-slate-900/98 backdrop-blur-md px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800 text-xs">
            <span className="text-slate-500 dark:text-slate-400 font-medium">
              {isRtl ? 'المظهر واللغة' : 'Appearance & Language'}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={onToggleTheme}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium"
              >
                {currentTheme === 'dark' ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isRtl ? 'نهاري' : 'Light'}</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-[#073B82]" />
                    <span>{isRtl ? 'ليلي' : 'Dark'}</span>
                  </>
                )}
              </button>

              <button
                onClick={onToggleLang}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium font-sans"
              >
                <Globe className="w-3.5 h-3.5 text-[#009AE0]" />
                <span>{t.nav.toggleLang}</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id, link.href)}
                className="px-3.5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/70 hover:text-[#009AE0] dark:hover:text-[#38bdf8] rounded-lg transition-colors flex items-center justify-between min-h-[44px]"
              >
                <span>{link.label}</span>
                <span className="text-slate-400 text-xs">→</span>
              </a>
            ))}

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5 mt-2">
              <a
                href="tel:0560888280"
                className="flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-[#073B82] dark:text-[#38bdf8] bg-slate-100 dark:bg-slate-800 rounded-lg min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-[#009AE0]" />
                <span dir="ltr">0560888280</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact', '#contact')}
                className="flex items-center justify-center px-4 py-3 text-xs font-semibold text-white bg-[#073B82] dark:bg-[#009AE0] hover:bg-[#052a5e] rounded-lg min-h-[44px]"
              >
                {t.nav.contact}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
