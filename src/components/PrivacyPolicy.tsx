import { useEffect } from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | Carlos Camacho Psychologist';
    return () => {
      document.title = 'Carlos Camacho | Registered Psychologist | Sydney, Central Coast & Telehealth NSW';
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <a
          href="/"
          className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Website
        </a>

        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
          <div className="p-8 md:p-12 border-b border-neutral-100 bg-neutral-900 text-white">
            <ShieldCheck className="w-12 h-12 text-neutral-300 mb-6" />
            <h1 className="text-3xl font-medium tracking-tight mb-3">Privacy Policy</h1>
            <p className="text-neutral-400">
              Carlos Camacho, Registered Psychologist — iamcarloscamacho.com
            </p>
          </div>

          <div className="p-8 md:p-12 space-y-10 text-neutral-700 leading-relaxed">
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm text-amber-900">
              Draft policy generated to accompany the website's contact and enquiry forms. Please
              have this reviewed against your obligations under the Privacy Act 1988 (Cth), the
              Australian Privacy Principles, and any AHPRA health record requirements before
              publishing.
            </div>

            <section>
              <h2 className="text-xl font-medium text-neutral-900 mb-3">Information We Collect</h2>
              <p>
                When you use the contact form, the new patient enquiry form, or request a fact
                sheet on this website, we collect the information you submit directly — which may
                include your name, email address, phone number, date of birth, preferred location,
                reason for enquiry, and any message you write.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-neutral-900 mb-3">How We Use Your Information</h2>
              <p>
                Information submitted through these forms is used solely to respond to your
                enquiry, arrange an appointment, or send the resource you requested. We do not
                sell, rent, or use your information for marketing purposes without your consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-neutral-900 mb-3">Third-Party Form Processing</h2>
              <p>
                Form submissions on this site are delivered using FormSubmit, a third-party email
                delivery service. Submitted data passes through FormSubmit's servers only to be
                forwarded by email — it is not stored or used by FormSubmit for any other purpose.
                See{' '}
                <a
                  href="https://formsubmit.co/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-900 underline hover:no-underline"
                >
                  FormSubmit's privacy policy
                </a>{' '}
                for details.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-neutral-900 mb-3">Health Records</h2>
              <p>
                Where an enquiry relates to clinical care, any resulting health records are created
                and held in accordance with the record-keeping obligations of a Registered
                Psychologist under AHPRA and applicable Australian health privacy law — separately
                from this website's own systems.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-neutral-900 mb-3">Cookies &amp; Analytics</h2>
              <p>
                This website does not currently use cookies, tracking pixels, or third-party
                analytics. If that changes, this policy will be updated to reflect what is
                collected and why.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-neutral-900 mb-3">Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of the personal information
                you have submitted through this website by contacting us using the details below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-neutral-900 mb-3">Contact</h2>
              <p>
                For any privacy-related questions or requests, please contact reception on{' '}
                <a href="tel:0290512888" className="text-neutral-900 underline hover:no-underline">
                  (02) 9051 2888
                </a>{' '}
                or{' '}
                <a
                  href="mailto:reception@axiompsych.com.au"
                  className="text-neutral-900 underline hover:no-underline"
                >
                  reception@axiompsych.com.au
                </a>
                .
              </p>
            </section>

            <p className="text-sm text-neutral-400 pt-6 border-t border-neutral-100">
              Last updated: 17 September 2026.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
