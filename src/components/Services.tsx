import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Brain, Heart, Briefcase, Video, ChevronDown, ChevronUp, CalendarCheck, Laptop, Link as LinkIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      title: t('services.dep.title'),
      description: t('services.dep.desc'),
      icon: Brain
    },
    {
      title: t('services.anx.title'),
      description: t('services.anx.desc'),
      icon: Shield
    },
    {
      title: t('services.est.title'),
      description: t('services.est.desc'),
      icon: Heart
    },
    {
      title: t('services.work.title'),
      description: t('services.work.desc'),
      icon: Briefcase
    },
  ];

  const faqs = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="services" className="py-24 bg-neutral-50 relative">
      {/* JSON-LD FAQ Schema */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
            {t('services.title')}
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-neutral-900 text-white mb-6">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">{service.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-medium text-neutral-900 mb-8 text-center">
            {t('faq.title')}
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-medium text-neutral-900 pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-5 text-neutral-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-neutral-900 rounded-3xl p-8 md:p-12 text-center text-white"
          id="telehealth"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full">
              <Video className="h-8 w-8" />
            </div>
          </div>
          <h3 className="text-2xl font-medium mb-4">{t('services.tele.title')}</h3>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-12">
            {t('services.tele.desc')}
          </p>

          <div className="border-t border-white/10 pt-12">
            <h4 className="text-xl font-medium text-white mb-8">{t('tele.guide.title')}</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
                <CalendarCheck className="w-8 h-8 text-neutral-300 mb-4" />
                <h5 className="text-lg font-medium text-white mb-2">{t('tele.guide.s1.title')}</h5>
                <p className="text-sm text-neutral-400 leading-relaxed">{t('tele.guide.s1.desc')}</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
                <Laptop className="w-8 h-8 text-neutral-300 mb-4" />
                <h5 className="text-lg font-medium text-white mb-2">{t('tele.guide.s2.title')}</h5>
                <p className="text-sm text-neutral-400 leading-relaxed">{t('tele.guide.s2.desc')}</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
                <LinkIcon className="w-8 h-8 text-neutral-300 mb-4" />
                <h5 className="text-lg font-medium text-white mb-2">{t('tele.guide.s3.title')}</h5>
                <p className="text-sm text-neutral-400 leading-relaxed">{t('tele.guide.s3.desc')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
