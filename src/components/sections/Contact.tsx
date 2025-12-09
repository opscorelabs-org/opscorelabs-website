import { useContactForm } from '@/hooks';
import { useEffect } from 'react';

const Contact = () => {
  const { isSubmitting, status, handleSubmit } = useContactForm();

  useEffect(() => {
    // Set the redirect URL to current page
    const formNextUrl = document.getElementById('formNextUrl') as HTMLInputElement;
    if (formNextUrl) {
      formNextUrl.value = window.location.href + '#contact';
    }
  }, []);

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
          {/* Contact Info Side */}
          <div className="bg-slate-900 p-6 sm:p-10 text-white md:w-2/5 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Let's discuss your vision</h3>
              <p className="text-slate-300 mb-8">
                Ready to scale? Our team is ready to audit your current stack or build from the
                ground up.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <svg
                    className="w-5 h-5 text-brand-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span className="break-all">contact@opscorelabs.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <svg
                    className="w-5 h-5 text-brand-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <span>Global (Remote First)</span>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-0">
              <p className="text-sm text-slate-400">
                Average Response Time:{' '}
                <span className="text-white font-semibold">Under 2 Hours</span>
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-6 sm:p-10 md:w-3/5">
            <form
              id="contactForm"
              action="https://formsubmit.co/contact@opscorelabs.com"
              method="POST"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              {/* Hidden Config: Auto-Response & Template */}
              <input type="hidden" name="_subject" value="New Inquiry - OpsCore Labs" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for contacting OpsCore Labs. We have received your message and will get back to you shortly."
              />
              <input type="hidden" name="_next" id="formNextUrl" value="" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Project Details
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition"
                ></textarea>
              </div>
              <button
                id="submitBtn"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-lg bg-brand-600 text-white font-bold text-lg hover:bg-brand-700 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {status.type && (
                <p
                  id="formStatus"
                  className={`text-center text-sm ${
                    status.type === 'success' ? 'text-green-600' : 'text-red-500'
                  }`}
                >
                  {status.message}
                </p>
              )}
              {/* Fallback text */}
              <p className="text-center text-xs text-slate-400 mt-2">
                Having trouble? Email us directly at{' '}
                <a href="mailto:contact@opscorelabs.com" className="text-brand-500 underline">
                  contact@opscorelabs.com
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

