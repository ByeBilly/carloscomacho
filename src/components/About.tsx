import { motion } from 'motion/react';
import { Radio, BookOpen, Award, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const quals = [t('about.qual.1'), t('about.qual.2'), t('about.qual.3')];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 lg:mb-0 lg:sticky lg:top-28"
          >
            <div className="rounded-2xl overflow-hidden bg-neutral-100 shadow-sm">
              <img
                src="/carlos-family.jpg"
                alt="Carlos Camacho at a book signing with his family."
                className="object-cover w-full"
                loading="lazy"
                width="800"
                height="800"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
              {t('about.label')}
            </p>
            <h2 className="text-3xl font-medium text-neutral-900 tracking-tight sm:text-4xl">
              {t('about.title')}
            </h2>
            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              {t('about.desc')}
            </p>

            <div className="mt-8">
              <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3">
                {t('about.quals')}
              </p>
              <div className="flex flex-wrap gap-2">
                {quals.map(q => (
                  <span key={q} className="px-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded-full text-sm text-neutral-700">
                    {q}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 space-y-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-900">
                    <Radio className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-neutral-900">{t('about.radio.title')}</h3>
                  <p className="mt-2 text-base text-neutral-600">{t('about.radio.desc')}</p>
                  <a
                    href="https://carloscamacho.libsyn.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center mt-3 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
                  >
                    {t('about.listen')}
                    <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-900">
                    <Award className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-neutral-900">{t('about.acc.title')}</h3>
                  <p className="mt-2 text-base text-neutral-600">{t('about.acc.desc')}</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-900">
                    <BookOpen className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-neutral-900">{t('about.auth.title')}</h3>
                  <p className="mt-2 text-base text-neutral-600">{t('about.auth.desc')}</p>
                  <a
                    href="https://www.amazon.com.au/stores/author/B078GJ9YF1/about"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center mt-3 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
                  >
                    {t('about.browse')}
                    <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
