import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Input, Card, GlowEffect } from '@/components/ui';
import { SITE_CONFIG } from '@/utils/constants';
import { useIntersectionObserver } from '@/hooks';
import { ContactFormData } from '@/types';

export const Contact: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Use Google Forms integration
      const { emailService } = await import('@/services');
      
      // Option 1: Direct submission to Google Forms
      const result = await emailService.send(formData);
      
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        // Fallback: Open Google Form in new tab with pre-filled data
        emailService.redirectToGoogleForm(formData);
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // Fallback: Open Google Form in new tab
      const { emailService } = await import('@/services');
      emailService.redirectToGoogleForm(formData);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <section
        id="contact"
        ref={ref}
        className="section-padding bg-bg-secondary/30"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <GlowEffect intensity="high">
              <Card>
                <div className="text-6xl mb-6">✅</div>
                <h2 className="text-3xl font-bold text-gradient mb-4">
                  Message Sent Successfully!
                </h2>
                <p className="text-text-secondary mb-6">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="secondary"
                >
                  Send Another Message
                </Button>
              </Card>
            </GlowEffect>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding relative"
    >
      <div className="container-custom relative z-30">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-6">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto px-4">
            Ready to start your next project? Let's discuss how we can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto px-4">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlowEffect intensity="medium">
              <Card className="h-full">
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  Let's Start a Conversation
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-glow-primary mb-2">
                      Email Us
                    </h4>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-text-secondary hover:text-glow-primary transition-colors duration-300"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-glow-primary mb-2">
                      Response Time
                    </h4>
                    <p className="text-text-secondary">
                      We typically respond within 24 hours
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-glow-primary mb-2">
                      What We Offer
                    </h4>
                    <ul className="text-text-secondary space-y-2">
                      <li>• Free initial consultation</li>
                      <li>• Custom project proposals</li>
                      <li>• Transparent pricing</li>
                      <li>• Ongoing support</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </GlowEffect>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <GlowEffect intensity="medium">
              <Card>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Name *"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      error={errors.name}
                      placeholder="Your full name"
                    />
                    <Input
                      label="Email *"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      error={errors.email}
                      placeholder="your@email.com"
                    />
                  </div>

                  <Input
                    label="Company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Your company name (optional)"
                  />

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Message *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your project..."
                      rows={6}
                      className="w-full px-4 py-3 glass-light border border-bg-tertiary rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-glow-primary focus:border-transparent transition-all duration-300 resize-none"
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-red-500 mt-2"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full relative z-40"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </GlowEffect>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
