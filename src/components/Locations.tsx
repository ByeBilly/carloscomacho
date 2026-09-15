import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import StatewideMap from './StatewideMap';
import { useLanguage } from '../contexts/LanguageContext';

export default function Locations() {
  const { t } = useLanguage();

  const regions = [
    {
      name: t('loc.syd.title'),
      description: t('loc.syd.desc'),
    },
    {
      name: t('loc.cen.title'),
      description: t('loc.cen.desc'),
    },
    {
      name: t('loc.tweed.title'),
      description: t('loc.tweed.desc'),
    },
    {
      name: t('loc.albury.title'),
      description: t('loc.albury.desc'),
    }
  ];

  return (
    <section id="locations" className="py-24 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
                {t('loc.title')}
              </h2>
              <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
                {t('loc.desc')}
              </p>
              
              <div className="mt-8">
                <StatewideMap />
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              {regions.map((region, index) => (
                <motion.div
                  key={region.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100"
                >
                  <div className="flex items-center mb-4 text-neutral-900">
                    <MapPin className="h-5 w-5 mr-2" />
                    <h3 className="text-lg font-medium">{region.name}</h3>
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {region.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
