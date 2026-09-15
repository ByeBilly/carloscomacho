import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Philosophy() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 bg-neutral-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200"
          alt="Conceptual representation of mental resilience and personal progress."
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
          width="1200"
          height="800"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            {t('phil.title')}
          </h2>
          <p className="mt-6 text-xl text-neutral-300 leading-relaxed">
            {t('phil.desc')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
