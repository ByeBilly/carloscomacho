import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Send, AlertCircle } from 'lucide-react';

// FormSubmit needs the destination inbox in the URL — change this if the
// message should land somewhere other than reception.
const FORMSUBMIT_EMAIL = 'carloscamachoemail@gmail.com';
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`;

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('submitting');

    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });

      if (!res.ok) throw new Error('FormSubmit request failed');

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-neutral-50 border-t border-neutral-100">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Send a message directly to Carlos and his team.
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-2xl border border-neutral-200 shadow-sm">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              role="status"
              className="text-center py-6"
            >
              <div className="flex justify-center mb-6">
                <CheckCircle2 className="h-16 w-16 text-neutral-900" />
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-neutral-900 mb-2">
                Success!
              </h3>
              <p className="text-neutral-600">
                Your message has been sent to Carlos.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-8 w-full px-6 py-3 border border-neutral-200 text-sm font-medium rounded-xl text-neutral-900 hover:bg-neutral-50 transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              action={FORMSUBMIT_ENDPOINT}
              method="POST"
              noValidate
              className="space-y-6"
            >
              {/* Honeypot — hidden from real visitors, catches bots that fill every field */}
              <input
                type="text"
                name="_honey"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {/* FormSubmit behaviour flags */}
              <input type="hidden" name="_subject" value="New message from iamcarloscamacho.com" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-900 mb-2">
                  Name *
                </label>
                <input
                  required
                  type="text"
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-shadow"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-neutral-900 mb-2">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  id="contact-email"
                  name="email"
                  autoComplete="email"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-shadow"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-neutral-900 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  id="contact-message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-shadow resize-y"
                />
              </div>

              {status === 'error' && (
                <div role="alert" className="flex items-start gap-2 text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl p-4">
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Something went wrong sending your message. Please try again, or call us directly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-neutral-900 hover:bg-neutral-800 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  'Sending…'
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
