import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-neutral-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="sm:text-center lg:text-left"
          >
            <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
              {t('hero.badge')}
            </p>
            <h1 className="text-4xl tracking-tight font-medium text-neutral-900 sm:text-5xl md:text-6xl leading-tight">
              <span className="block">{t('hero.title.1')}</span>
              <span className="block text-neutral-500">{t('hero.title.2')}</span>
            </h1>
            <p className="mt-3 text-base text-neutral-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              {t('hero.desc')}
            </p>
            <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
              <a href="#intake" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-neutral-900 hover:bg-neutral-800 transition-colors">
                {t('hero.cta.primary')}
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-8 py-3 border border-neutral-200 text-base font-medium rounded-full text-neutral-700 bg-white hover:bg-neutral-50 transition-colors">
                {t('hero.cta.secondary')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/carlos-axiom.jpg"
          alt="Carlos Camacho, Registered Psychologist, NSW."
          fetchPriority="high"
          width="941"
          height="1024"
        />
      </div>
    </section>
  );
}
