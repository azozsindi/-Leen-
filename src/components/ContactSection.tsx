import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { servicesData } from '../data/servicesData';

interface ContactSectionProps {
  currentLang: Language;
  preselectedService: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  preselectedService,
}) => {
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: preselectedService || '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setFormStatus('error');
      setErrorMessage(
        isRtl
          ? 'يرجى ملء جميع الحقول الإلزامية (الاسم، رقم الهاتف، والرسالة).'
          : 'Please complete all required fields (Name, Phone number, and Message).'
      );
      return;
    }

    setFormStatus('submitting');

    setTimeout(() => {
      setFormStatus('success');
      setErrorMessage('');
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-28 bg-white dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#009AE0] mb-3">
            <span>{t.contact.sectionBadge}</span>
            <span className="text-slate-300 dark:text-slate-700">/</span>
            <span className="text-slate-500 dark:text-slate-400 font-mono">0560888280</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#073B82] dark:text-white tracking-tight mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Contact Details & Direct Connect (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Action Buttons Row */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:0560888280"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#073B82] dark:bg-[#009AE0] text-white hover:bg-[#052a5e] dark:hover:bg-[#0087c5] transition-colors text-xs font-semibold shadow-xs min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-[#009AE0] dark:text-white" />
                <span>{t.contact.callNow}</span>
              </a>

              <a
                href="mailto:info@leenss.com.sa"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-[#073B82] dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-xs font-semibold border border-slate-200/80 dark:border-slate-700 min-h-[44px]"
              >
                <Mail className="w-4 h-4 text-[#009AE0]" />
                <span>{t.contact.emailNow}</span>
              </a>
            </div>

            {/* Official Information Cards */}
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700 p-5 sm:p-6 space-y-5">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[#073B82] shrink-0">
                  <Phone className="w-5 h-5 text-[#009AE0]" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">{t.contact.phone}</span>
                  <a
                    href="tel:0560888280"
                    dir="ltr"
                    className="text-base font-bold text-[#073B82] dark:text-white hover:text-[#009AE0] font-mono transition-colors block mt-0.5"
                  >
                    0560888280
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[#073B82] shrink-0">
                  <Mail className="w-5 h-5 text-[#009AE0]" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">{t.contact.email}</span>
                  <a
                    href="mailto:info@leenss.com.sa"
                    className="text-sm font-semibold text-[#073B82] dark:text-white hover:text-[#009AE0] transition-colors block mt-0.5"
                  >
                    info@leenss.com.sa
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[#073B82] shrink-0">
                  <Globe className="w-5 h-5 text-[#009AE0]" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">{t.contact.website}</span>
                  <a
                    href="https://www.leenss.com.sa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#073B82] dark:text-white hover:text-[#009AE0] transition-colors block mt-0.5 font-mono"
                  >
                    www.leenss.com.sa
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[#073B82] shrink-0">
                  <MapPin className="w-5 h-5 text-[#009AE0]" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">{t.contact.address}</span>
                  <p className="text-sm font-semibold text-slate-800 dark:text-white mt-0.5">
                    {t.contact.addressValue}
                  </p>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">
                    {t.contact.cityCountry}
                  </span>
                </div>
              </div>
            </div>

            {/* Official Social Media Channels (X / Twitter) */}
            <div className="rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700 p-5 sm:p-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 sm:mb-4">
                {t.contact.socialTitle}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://x.com/Leenss2020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/70 dark:border-slate-700 transition-colors group min-h-[44px]"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[#073B82] dark:text-white">𝕏</span>
                    <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">@Leenss2020</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#009AE0] transition-colors" />
                </a>

                <a
                  href="https://x.com/Leenss2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/70 dark:border-slate-700 transition-colors group min-h-[44px]"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[#073B82] dark:text-white">𝕏</span>
                    <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">@Leenss2024</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#009AE0] transition-colors" />
                </a>
              </div>
            </div>

            {/* Location Map Visual Container */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 p-4">
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-semibold text-slate-700 dark:text-slate-200">{t.contact.locationTitle}</span>
                <span className="text-[#009AE0] dark:text-[#38bdf8] truncate max-w-[180px]">{t.contact.addressValue}</span>
              </div>
              <div className="relative w-full h-40 sm:h-44 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-700 border border-slate-300/80 dark:border-slate-600">
                <iframe
                  title="Leen Alhulul Jeddah Map"
                  src="https://maps.google.com/maps?q=Al+Rawdah,+Jeddah,+Saudi+Arabia&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-3 flex justify-end">
                <a
                  href="https://maps.google.com/?q=Al+Rawdah,+Jeddah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#009AE0] dark:text-[#38bdf8] hover:text-[#073B82] transition-colors min-h-[38px]"
                >
                  <span>{t.contact.openInGoogleMaps}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Lead / RFQ Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-10 shadow-sm">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-[#073B82] dark:text-white mb-2">
                  {t.contact.formTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {t.contact.formSubtitle}
                </p>
              </div>

              {/* Success Notification */}
              {formStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold">{t.contact.successTitle}</h5>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-1">{t.contact.successDesc}</p>
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {formStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold">{t.contact.errorTitle}</h5>
                    <p className="text-xs text-red-700 dark:text-red-300 mt-1">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t.contact.fullName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder={isRtl ? 'مثال: عبد العزيز بن سلطان' : 'e.g. Abdulaziz Al-Sultan'}
                    className="w-full px-4 py-3 text-base sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-[#009AE0] focus:ring-1 focus:ring-[#009AE0] text-slate-800 dark:text-white transition-colors"
                  />
                </div>

                {/* Contact Phone & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      {t.contact.phoneNumber} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="05XXXXXXXX"
                      dir="ltr"
                      className="w-full px-4 py-3 text-base sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-[#009AE0] focus:ring-1 focus:ring-[#009AE0] text-slate-800 dark:text-white transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      {t.contact.emailAddress}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      dir="ltr"
                      className="w-full px-4 py-3 text-base sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-[#009AE0] focus:ring-1 focus:ring-[#009AE0] text-slate-800 dark:text-white transition-colors font-mono"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t.contact.selectService}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-base sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-[#009AE0] focus:ring-1 focus:ring-[#009AE0] transition-colors text-slate-700 dark:text-slate-200"
                  >
                    <option value="" className="dark:bg-slate-800 dark:text-white">{t.contact.selectServicePlaceholder}</option>
                    {servicesData.map((svc) => (
                      <option key={svc.id} value={isRtl ? svc.titleAr : svc.titleEn} className="dark:bg-slate-800 dark:text-white">
                        {svc.number}. {isRtl ? svc.titleAr : svc.titleEn}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t.contact.message} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full px-4 py-3 text-base sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-[#009AE0] focus:ring-1 focus:ring-[#009AE0] text-slate-800 dark:text-white transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#009AE0] hover:bg-[#0087c5] active:bg-[#0076ad] disabled:bg-slate-400 rounded-xl transition-all shadow-sm hover:shadow cursor-pointer min-h-[48px]"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {formStatus === 'submitting' ? t.contact.sendingButton : t.contact.sendButton}
                  </span>
                </button>

                <p className="text-[11px] text-center text-slate-400 dark:text-slate-500 mt-2">
                  {isRtl
                    ? 'سيتم التعامل مع بياناتكم بسرية واحترافية تامة من قِبل إدارة شركة لين الحلول.'
                    : 'Your information will be handled with strict corporate confidentiality by Leen Alhulul management.'}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
