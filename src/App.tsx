/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Language, Theme } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { VisionMission } from './components/VisionMission';
import { HomeServicesSection } from './components/HomeServicesSection';
import { ServicesPage } from './components/ServicesPage';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { HowWeWork } from './components/HowWeWork';
import { SuppliersSection } from './components/SuppliersSection';
import { ClientsSection } from './components/ClientsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('ar');
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('leenss_theme') as Theme | null;
      if (saved === 'dark' || saved === 'light') return saved;
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    }
    return 'light';
  });

  // Multi-view navigation state
  const [currentView, setCurrentView] = useState<'home' | 'services' | 'service-detail'>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('pbx-telephony');
  const [servicesFilterCategory, setServicesFilterCategory] = useState<string>('all');
  const [preselectedService, setPreselectedService] = useState<string>('');

  // Synchronize HTML dir and lang attributes
  useEffect(() => {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  }, [currentLang]);

  // Synchronize HTML dark class
  useEffect(() => {
    const root = document.documentElement;
    if (currentTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('leenss_theme', currentTheme);
    } catch {
      // ignore in restricted contexts
    }
  }, [currentTheme]);

  // Listen to hash changes for browser forward/back buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#service-')) {
        const id = hash.replace('#service-', '');
        setSelectedServiceId(id);
        setCurrentView('service-detail');
      } else if (hash === '#all-services' || hash === '#services-catalog') {
        setCurrentView('services');
      } else if (hash === '#home' || hash === '') {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
  };

  const handleExploreAllServices = (categoryId?: string) => {
    setServicesFilterCategory(categoryId || 'all');
    setCurrentView('services');
    window.location.hash = 'all-services';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceDetail = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentView('service-detail');
    window.location.hash = `service-${serviceId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    window.location.hash = 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateServices = () => {
    setCurrentView('services');
    window.location.hash = 'all-services';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Primary Sticky Header */}
      <Header
        currentLang={currentLang}
        onToggleLang={toggleLanguage}
        currentTheme={currentTheme}
        onToggleTheme={toggleTheme}
        onNavigateHome={handleNavigateHome}
        onNavigateServices={handleNavigateServices}
        isCustomPage={currentView !== 'home'}
      />

      {/* Main Dynamic View Area */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            {/* Hero Section */}
            <Hero currentLang={currentLang} />

            {/* About Us */}
            <AboutUs currentLang={currentLang} />

            {/* Vision & Mission */}
            <VisionMission currentLang={currentLang} />

            {/* Concise Home Services Section (4 Categories + 6 Featured Cards + Explore All CTA) */}
            <HomeServicesSection
              currentLang={currentLang}
              onExploreAllServices={handleExploreAllServices}
              onSelectServiceDetail={handleSelectServiceDetail}
              onSelectForInquiry={handleSelectServiceForInquiry}
            />

            {/* How We Work (01 to 04) */}
            <HowWeWork currentLang={currentLang} />

            {/* Our Suppliers (30 Partners) */}
            <SuppliersSection currentLang={currentLang} />

            {/* Our Customers */}
            <ClientsSection currentLang={currentLang} />

            {/* Contact Us */}
            <ContactSection
              currentLang={currentLang}
              preselectedService={preselectedService}
            />
          </>
        )}

        {currentView === 'services' && (
          <>
            {/* Dedicated All 15 Services Page */}
            <ServicesPage
              currentLang={currentLang}
              initialCategory={servicesFilterCategory}
              onNavigateHome={handleNavigateHome}
              onSelectServiceDetail={handleSelectServiceDetail}
              onSelectForInquiry={handleSelectServiceForInquiry}
            />

            {/* Shared Contact Section for Inquiries */}
            <ContactSection
              currentLang={currentLang}
              preselectedService={preselectedService}
            />
          </>
        )}

        {currentView === 'service-detail' && (
          <>
            {/* Dedicated Service Detail Page */}
            <ServiceDetailPage
              serviceId={selectedServiceId}
              currentLang={currentLang}
              onNavigateHome={handleNavigateHome}
              onNavigateServices={handleNavigateServices}
              onSelectServiceDetail={handleSelectServiceDetail}
              onSelectForInquiry={handleSelectServiceForInquiry}
            />

            {/* Shared Contact Section for Inquiries */}
            <ContactSection
              currentLang={currentLang}
              preselectedService={preselectedService}
            />
          </>
        )}
      </main>

      {/* Corporate Footer */}
      <Footer currentLang={currentLang} />

      {/* Floating Quick Action Contacts for 100% Mobile Access */}
      <div
        className={`fixed bottom-4 sm:bottom-6 ${
          currentLang === 'ar' ? 'left-4 sm:left-6' : 'right-4 sm:right-6'
        } z-40 flex items-center gap-2`}
      >
        <a
          href="https://wa.me/966560888280"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] text-white p-3 sm:px-4 sm:py-2.5 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20ba59] transition-all transform hover:-translate-y-0.5 min-h-[44px] min-w-[44px] justify-center"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-xs font-bold hidden sm:inline">
            {currentLang === 'ar' ? 'واتساب' : 'WhatsApp'}
          </span>
        </a>

        <a
          href="tel:0560888280"
          className="flex items-center gap-2 bg-[#073B82] dark:bg-[#009AE0] text-white p-3 sm:px-4 sm:py-2.5 rounded-full shadow-lg hover:shadow-xl hover:bg-[#052a5e] dark:hover:bg-[#0087c5] transition-all transform hover:-translate-y-0.5 min-h-[44px] min-w-[44px] justify-center"
          aria-label="Direct Phone Call"
        >
          <Phone className="w-4 h-4 text-[#009AE0] dark:text-white" />
          <span dir="ltr" className="text-xs font-mono font-bold hidden sm:inline">
            0560888280
          </span>
        </a>
      </div>
    </div>
  );
}
