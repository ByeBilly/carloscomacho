import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Replace 'REPLACE_WITH_FORM_ID' with your Formspree form ID from https://formspree.io
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_FORM_ID';

export default function IntakeForm() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      });
      setFormState(res.ok ? 'success' : 'idle');
    } catch {
      setFormState('idle');
    }
  };

  if (formState === 'success') {
    return (
      <section id="intake" className="py-24 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 rounded-2xl border border-neutral-200 shadow-sm text-center"
          >
            <div className="flex justify-center mb-6">
              <CheckCircle2 className="h-16 w-16 text-neutral-900" />
            </div>
            <h2 className="text-3xl font-medium tracking-tight text-neutral-900 mb-4">
              {t('intake.success.title')}
            </h2>
            <p className="text-lg text-neutral-600">
              {t('intake.success.desc')}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="intake" className="py-24 bg-neutral-50 border-t border-neutral-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
              {t('intake.title')}
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              {t('intake.desc')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl border border-neutral-200 shadow-sm space-y-8">
            <input type="hidden" name="_subject" value="New Patient Enquiry — iamcarloscamacho.com" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fname" className="block text-sm font-medium text-neutral-900 mb-2">{t('intake.fname')} *</label>
                <input required type="text" id="fname" name="firstName" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-shadow" />
              </div>
              <div>
                <label htmlFor="lname" className="block text-sm font-medium text-neutral-900 mb-2">{t('intake.lname')} *</label>
                <input required type="text" id="lname" name="lastName" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-shadow" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">{t('intake.email')} *</label>
                <input required type="email" id="email" name="email" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-shadow" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-900 mb-2">{t('intake.phone')} *</label>
                <input required type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-shadow" />
              </div>
            </div>

            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-neutral-900 mb-2">{t('intake.dob')} *</label>
              <input required type="date" id="dob" name="dateOfBirth" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-shadow" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-neutral-900 mb-2">{t('intake.location')} *</label>
                <select required id="location" name="preferredLocation" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-shadow bg-white">
                  <option value="">--</option>
                  <option value="telehealth">{t('intake.loc.telehealth')}</option>
                  <option value="fairfield">{t('intake.loc.fairfield')}</option>
                  <option value="gosford">{t('intake.loc.gosford')}</option>
                  <option value="kanwal">{t('intake.loc.kanwal')}</option>
                </select>
              </div>
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-neutral-900 mb-2">{t('intake.reason')} *</label>
                <select required id="reason" name="primaryReason" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-shadow bg-white">
                  <option value="">--</option>
                  <option value="depression">{t('services.dep.title')}</option>
                  <option value="anxiety">{t('services.anx.title')}</option>
                  <option value="esteem">{t('services.est.title')}</option>
                  <option value="workcover">{t('services.work.title')}</option>
                  <option value="other">Other / General</option>
                </select>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl flex items-start gap-3">
              <div className="mt-0.5">
                <input required type="checkbox" id="emergency" name="emergencyAcknowledgement" value="acknowledged" className="w-5 h-5 rounded border-amber-300 text-neutral-900 focus:ring-neutral-900" />
              </div>
              <label htmlFor="emergency" className="text-sm text-amber-900 leading-relaxed">
                {t('intake.emergency')}
              </label>
            </div>

            <button
              type="submit"
              disabled={formState === 'submitting'}
              className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-neutral-900 hover:bg-neutral-800 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
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
                  {t('intake.submitting')}
                </>
              ) : (
                t('intake.submit')
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-neutral-500">
              <ShieldCheck className="w-4 h-4" />
              <span>Secure, Encrypted Submission</span>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
