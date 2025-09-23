import React from 'react';
import { motion } from 'framer-motion';
import { Timeline, Button } from '@/components/ui';
import { TIMELINE_SERVICES } from '@/utils/constants';
import { useIntersectionObserver } from '@/hooks';

export const Services: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section
      id="services"
      ref={ref}
      className="section-padding relative"
    >
      
      <div className="container-custom relative z-40">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-4 sm:mb-6">
            Our Services
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto px-4">
            We provide comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </motion.div>

        {/* Advanced Timeline Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <Timeline items={TIMELINE_SERVICES} />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="max-w-2xl mx-auto px-4">
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 sm:mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-sm sm:text-base text-text-secondary mb-4 sm:mb-6">
              Let's discuss how our comprehensive technology solutions can help you achieve your goals.
            </p>
            <Button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              variant="primary"
              size="lg"
            >
              Start Your Project
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
