import { useState } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const { t, language, toggleLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks: [string, string][] = [
    ['#services', t('nav.services')],
    ['#about', t('nav.about')],
    ['#telehealth', t('nav.telehealth')],
    ['#locations', t('nav.locations')],
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <div className="text-xl font-medium tracking-tight text-neutral-900">
              {t('header.title')}
              <span className="block text-sm text-neutral-500 font-normal">{t('header.subtitle')}</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8" aria-label="Main navigation">
            {navLinks.map(([href, label]) => (
              <a key={href} href={href} className="text-neutral-600 hover:text-neutral-900 px-3 py-2 text-sm font-medium transition-colors">{label}</a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={toggleLanguage}
              className="flex items-center text-neutral-600 text-sm font-medium hover:text-neutral-900 transition-colors"
            >
              <Globe className="w-4 h-4 mr-2" />
              <span>{language === 'en' ? 'EN' : 'ES'}</span>
            </button>
            <a href="#intake" className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-neutral-900 hover:bg-neutral-800 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              {t('nav.book')}
            </a>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="text-neutral-600 hover:text-neutral-900 font-medium text-sm flex items-center"
            >
              <Globe className="w-4 h-4 mr-1" />
              {language === 'en' ? 'EN' : 'ES'}
            </button>
            <button
              onClick={() => setMobileOpen(o => !o)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
              className="text-neutral-600 hover:text-neutral-900"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <nav id="mobile-menu" className="md:hidden border-t border-neutral-100 bg-white" aria-label="Mobile navigation">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition-colors"
              >
                {label}
              </a>
            ))}
            <div className="pt-3 border-t border-neutral-100">
              <a
                href="#intake"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full px-6 py-3 text-base font-medium rounded-full text-white bg-neutral-900 hover:bg-neutral-800 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                {t('nav.book')}
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
