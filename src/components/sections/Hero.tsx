import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from '@/components/ui';
import { SITE_CONFIG } from '@/utils/constants';
import { useIntersectionObserver } from '@/hooks';

export const Hero: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver();

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      
      <div className="container-custom relative z-30">
        <div className="text-center max-w-4xl mx-auto">
          {/* Big Glowing Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <Logo size="xxl" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-gradient">{SITE_CONFIG.name}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed px-4"
          >
            {SITE_CONFIG.description}
          </motion.p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-40"
            style={{ pointerEvents: 'auto' }}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Get Started Today clicked');
                scrollToContact();
              }}
                    className="bg-glow-primary text-bg-primary font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-glow-primary/50 hover:scale-105 text-base sm:text-lg relative z-50 cursor-pointer"
              style={{ pointerEvents: 'auto' }}
            >
              Get Started Today
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Our Services clicked');
                const element = document.querySelector('#services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
                      className="border border-glow-primary text-glow-primary font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-all duration-300 hover:bg-glow-primary hover:text-bg-primary hover:scale-105 text-base sm:text-lg relative z-50 cursor-pointer"
              style={{ pointerEvents: 'auto' }}
            >
              Our Services
            </button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
                    className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto px-4"
          >
            {[
              { number: '5+', label: 'Services' },
              { number: '∞', label: 'Possibilities' },
              { number: '100%', label: 'Dedication' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={hasIntersected ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="text-center glass-light rounded-lg p-4"
              >
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-text-secondary">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={hasIntersected ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-glow-primary rounded-lg flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-glow-primary rounded-sm mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
