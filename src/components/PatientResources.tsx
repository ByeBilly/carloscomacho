import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Download, Mail, CheckCircle2, ShieldCheck, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function PatientResources() {
  const { t } = useLanguage();
  const [selectedResource, setSelectedResource] = useState<string | null>(null);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const resources = [
    { id: 'anxiety', title: t('res.item1.title'), desc: t('res.item1.desc') },
    { id: 'depression', title: t('res.item2.title'), desc: t('res.item2.desc') },
    { id: 'resilience', title: t('res.item3.title'), desc: t('res.item3.desc') },
    { id: 'workcover', title: t('res.item4.title'), desc: t('res.item4.desc') },
  ];

  const handleRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate secure API submission/email dispatch
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  const closeModal = () => {
    setSelectedResource(null);
    setFormState('idle');
  };

  return (
    <section id="resources" className="py-24 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
            {t('res.title')}
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            {t('res.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, idx) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group bg-neutral-50 rounded-2xl p-8 border border-neutral-200 hover:border-neutral-300 hover:shadow-md transition-all flex flex-col h-full"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-neutral-100">
                  <FileText className="w-6 h-6 text-neutral-900" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-neutral-900 leading-tight mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-neutral-600 text-base leading-relaxed">
                    {resource.desc}
                  </p>
                </div>
              </div>
              <div className="mt-auto pt-6 border-t border-neutral-200 flex justify-end">
                <button
                  onClick={() => setSelectedResource(resource.title)}
                  className="inline-flex items-center text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {t('res.btn.request')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Request Modal */}
      <AnimatePresence>
        {selectedResource && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-xl border border-neutral-200 overflow-hidden"
            >
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8 md:p-10">
                {formState === 'success' ? (
                  <div className="text-center py-6">
                    <div className="flex justify-center mb-6">
                      <CheckCircle2 className="h-16 w-16 text-neutral-900" />
                    </div>
                    <h3 className="text-2xl font-medium tracking-tight text-neutral-900 mb-2">
                      {t('res.modal.success')}
                    </h3>
                    <p className="text-neutral-600">
                      {t('res.modal.success.desc')}
                    </p>
                    <button 
                      onClick={closeModal}
                      className="mt-8 w-full px-6 py-3 border border-neutral-200 text-sm font-medium rounded-xl text-neutral-900 hover:bg-neutral-50 transition-colors"
                    >
                      {t('res.modal.close')}
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-medium tracking-tight text-neutral-900 mb-2 pr-8">
                      {t('res.modal.title')}
                    </h3>
                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      {t('res.modal.desc')} <br/><strong className="text-neutral-900">{selectedResource}</strong>.
                    </p>

                    <form onSubmit={handleRequest} className="space-y-6">
                      <div>
                        <label htmlFor="res-email" className="block text-sm font-medium text-neutral-900 mb-2">
                          {t('res.modal.email')} *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-neutral-400" />
                          </div>
                          <input 
                            required 
                            type="email" 
                            id="res-email" 
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-shadow" 
                            placeholder="hello@example.com"
                          />
                        </div>
                      </div>

                      <button 
                        type="submit" 
                        disabled={formState === 'submitting'}
                        className="w-full flex items-center justify-center px-6 py-3.5 border border-transparent text-base font-medium rounded-xl text-white bg-neutral-900 hover:bg-neutral-800 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {formState === 'submitting' ? (
                          <>
                            <motion.div 
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                              className="mr-3"
                            >
                              <ShieldCheck className="w-5 h-5" />
                            </motion.div>
                            {t('res.modal.submitting')}
                          </>
                        ) : (
                          t('res.modal.submit')
                        )}
                      </button>

                      <div className="flex items-center justify-center gap-2 mt-4 text-xs text-neutral-500">
                        <ShieldCheck className="w-4 h-4" />
                        <span>AHPRA Compliant & Secure Delivery</span>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
