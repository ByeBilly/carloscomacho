import { Phone, ExternalLink, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-neutral-900 text-neutral-400 py-12" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">

          <div>
            <h3 className="text-white text-lg font-medium tracking-tight mb-4">{t('header.title')}</h3>
            <p className="text-sm leading-relaxed">
              {t('footer.about')}
            </p>
            <div className="mt-6 pt-6 border-t border-neutral-800 space-y-1.5">
              <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-3">{t('footer.explore')}</p>
              <a
                href="/privateuniverse"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                {t('footer.podcast')}
              </a>
              <a
                href="/myyoutube"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <Youtube className="w-3.5 h-3.5 flex-shrink-0" />
                YouTube
              </a>
              <a
                href="https://www.amazon.com.au/stores/author/B078GJ9YF1/about"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                {t('footer.books')}
              </a>
              <a
                href="https://axiompsych.com.au/carlos-camacho/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                {t('footer.axiom')}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-medium tracking-tight mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:0290512888" className="flex items-center hover:text-white transition-colors">
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>(02) 9051 2888 — Fairfield</span>
                </a>
              </li>
              <li>
                <a href="tel:0243245400" className="flex items-center hover:text-white transition-colors">
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>(02) 4324 5400 — Central Coast</span>
                </a>
              </li>
              <li className="pt-1">
                <span className="block text-white mb-1">Myhealth Fairfield</span>
                Shop G13, 54 Smart Street, Fairfield NSW 2165
              </li>
              <li>
                <span className="block text-white mb-1">Axiom Psychological Services</span>
                Gosford, NSW
              </li>
              <li>
                <span className="block text-white mb-1">Kanwal Clinic</span>
                Kanwal, NSW
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-medium tracking-tight mb-4">{t('footer.emergency.title')}</h3>
            <p className="text-sm leading-relaxed mb-4">
              {t('footer.emergency.desc')}
            </p>
            <ul className="space-y-2 text-sm">
              <li><strong className="text-neutral-300">Lifeline:</strong> 13 11 14</li>
              <li><strong className="text-neutral-300">Emergency:</strong> 000</li>
              <li><strong className="text-neutral-300">Mental Health Line:</strong> 1800 011 511</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Carlos Camacho. {t('footer.rights')}</p>
          <div className="flex space-x-6">
            <a href="#compliance" className="hover:text-white transition-colors">AHPRA Compliance</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
